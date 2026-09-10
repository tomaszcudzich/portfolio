"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// Wyszukiwarka regulaminu z podpowiedziami w trakcie pisania.
//
// Zawodnik, 02.09.2026: „tutaj powinno podpowiadać już po samym wpisaniu, a nie
// czekać dopiero na kliknięcie szukaj".
//
// ────────────────────────────────────────────────────────────────────────────
// TO NADAL JEST FORMULARZ, I TO JEST CELOWE
//
// Podpowiedzi są DODATKIEM. Pod spodem siedzi zwykły <form method="get">, więc
// bez JavaScriptu — a także zanim się on wczyta, co na telefonie w terenie
// potrafi potrwać — przycisk „Szukaj" działa tak samo jak wcześniej. Zawodnik
// stojący przy trasie nie może zostać z martwym polem tekstowym.
//
// SZUKANIE PO STRONIE SERWERA. Regulamin waży ponad 330 kB; ściąganie go na
// telefon tylko po to, żeby podpowiadać, kosztowałoby więcej niż samo szukanie.
// Stąd zapytanie do /api/regulamin/szukaj, które oddaje same numery i tytuły.
// ────────────────────────────────────────────────────────────────────────────

type Podpowiedz = {
  numer: string;
  tytul: string;
  kodeks: boolean;
  snieg: boolean;
};

export function Szukajka({ poczatkowe }: { poczatkowe: string }) {
  const router = useRouter();
  const [fraza, setFraza] = useState(poczatkowe);
  const [podpowiedzi, setPodpowiedzi] = useState<Podpowiedz[]>([]);
  const [otwarte, setOtwarte] = useState(false);
  const listaId = useId();
  const kontener = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const przerwij = new AbortController();
    // Cała decyzja siedzi W ŚRODKU opóźnienia, a nie przed nim. React 19
    // zabrania ustawiania stanu wprost w ciele efektu, a przy okazji wychodzi
    // z tego lepsze zachowanie: skasowanie pola też przechodzi przez to samo
    // odczekanie, więc lista nie mruga przy szybkim poprawianiu frazy.
    //
    // Odczekanie po ostatnim znaku jest tu po to, żeby „wyprzedzanie" nie było
    // dwunastoma zapytaniami, z których liczy się ostatnie.
    const czasomierz = setTimeout(async () => {
      const q = fraza.trim();
      // Poniżej dwóch znaków podpowiedzi byłyby listą pół regulaminu.
      // `poczatkowe` to fraza już wyszukana — nie ma po co jej podpowiadać.
      if (q.length < 2 || q === poczatkowe.trim()) {
        setPodpowiedzi([]);
        setOtwarte(false);
        return;
      }
      try {
        const odp = await fetch(`/api/regulamin/szukaj?q=${encodeURIComponent(q)}`, {
          signal: przerwij.signal,
        });
        if (!odp.ok) return;
        const dane = (await odp.json()) as { wyniki: Podpowiedz[] };
        setPodpowiedzi(dane.wyniki ?? []);
        setOtwarte(true);
      } catch {
        // Brak zasięgu albo przerwane zapytanie — formularz nadal działa,
        // więc nie ma o czym informować.
      }
    }, 180);

    return () => {
      clearTimeout(czasomierz);
      przerwij.abort();
    };
  }, [fraza, poczatkowe]);

  // Dotknięcie poza listą ją zamyka. Bez tego podpowiedzi zasłaniałyby wyniki
  // na małym ekranie.
  useEffect(() => {
    if (!otwarte) return;
    const pozaListą = (e: PointerEvent) => {
      if (!kontener.current?.contains(e.target as Node)) setOtwarte(false);
    };
    document.addEventListener("pointerdown", pozaListą);
    return () => document.removeEventListener("pointerdown", pozaListą);
  }, [otwarte]);

  return (
    <div ref={kontener} className="relative">
      <form method="get" action="/regulamin">
        <label htmlFor="q" className="text-sm text-skylos-cream/85">
          Czego szukasz?
        </label>
        <div className="mt-1 flex gap-2">
          <input
            id="q"
            type="search"
            name="q"
            value={fraza}
            onChange={(e) => setFraza(e.target.value)}
            onFocus={() => podpowiedzi.length > 0 && setOtwarte(true)}
            autoComplete="off"
            role="combobox"
            aria-expanded={otwarte && podpowiedzi.length > 0}
            aria-controls={listaId}
            placeholder="np. wyprzedzanie, kara, chip, 1.7.15"
            className="skylos-field h-12 flex-1"
          />
          <button
            type="submit"
            className="min-h-12 shrink-0 rounded-md bg-skylos-gold px-5 text-sm font-semibold text-skylos-bg
                       transition-colors hover:bg-skylos-gold-hi
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold-hi"
          >
            Szukaj
          </button>
        </div>
      </form>

      {otwarte && podpowiedzi.length > 0 && (
        <ul
          id={listaId}
          className="absolute left-0 right-0 z-20 mt-1 overflow-hidden rounded-xl border border-skylos-gold-dim/60
                     bg-skylos-panel shadow-lg shadow-black/40"
        >
          {podpowiedzi.map((p) => (
            <li key={p.numer} className="border-b border-skylos-gold-dim/25 last:border-b-0">
              <button
                type="button"
                onClick={() => {
                  setOtwarte(false);
                  router.push(`/regulamin?q=${encodeURIComponent(p.numer)}`);
                }}
                className="flex min-h-11 w-full items-start gap-3 px-3 py-2 text-left
                           transition-colors hover:bg-skylos-gold/10
                           focus-visible:outline-none focus-visible:bg-skylos-gold/10"
              >
                <span className="shrink-0 font-mono text-sm text-skylos-gold">{p.numer}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-skylos-cream">{p.tytul}</span>
                  {(p.kodeks || p.snieg) && (
                    <span className="block text-xs text-skylos-cream/45">
                      {p.kodeks ? "Kodeks postępowania z psem" : "tylko wyścigi na śniegu"}
                    </span>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
