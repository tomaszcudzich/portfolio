import type { Metadata } from "next";
import Link from "next/link";
import { REGULAMIN, REGULAMIN_WERSJA, REGULAMIN_ZRODLO } from "@/lib/regulamin/dane";
import { szukaj, porownajNumery, type PunktRegulaminu } from "@/lib/regulamin/szukaj";
import { Szukajka } from "./Szukajka";

export const metadata: Metadata = {
  title: "Regulamin — wyszukiwarka",
  description:
    "Regulamin sportowych wyścigów psich zaprzęgów PZSPZ: wyszukiwanie po numerze punktu i po frazie, z wyjaśnieniem każdego punktu prostym językiem.",
};

// Wyszukiwarka regulaminu.
//
// Zawodnik, 02.09.2026: „jako mniej doświadczony zawodnik chcę się dowiedzieć, jak
// to jest z tym wyprzedzaniem, ale nie wiem który to punkt ani nic — wpisuję
// »wyprzedzanie« i wyskakują mi wszystkie punkty, które o tym mówią, i mogę
// kliknąć w poszczególny, gdzie otwiera się jego treść i krótkie wyjaśnienie".
//
// ────────────────────────────────────────────────────────────────────────────
// TRZY DECYZJE, KTÓRE TU WIDAĆ
//
//  1. STRONA PUBLICZNA, bez logowania. Regulaminu potrzebuje najbardziej ktoś,
//     kto dopiero się zapisuje i konta jeszcze nie ma — a to on ma najwięcej
//     pytań. Zamykanie tego za logowaniem odcinałoby dokładnie tę osobę.
//
//  2. SZUKANIE PO STRONIE SERWERA, formularzem GET. Cały regulamin to ponad
//     300 kB; wysyłanie go do telefonu, żeby przeszukać na miejscu, kosztowałoby
//     więcej niż samo szukanie. Przy okazji działa bez JavaScriptu i zostaje
//     w adresie, więc wynik da się wysłać komuś linkiem.
//
//  3. TREŚĆ I WYJAŚNIENIE WYGLĄDAJĄ INACZEJ, i to nie jest ozdoba. Treść jest
//     dosłowna i wiążąca, wyjaśnienie jest nasze i nie jest przepisem. Gdyby
//     wyglądały tak samo, ktoś zacytowałby na proteście nasze zdanie zamiast
//     regulaminu.
// ────────────────────────────────────────────────────────────────────────────

const ROZDZIALY = [...new Set(REGULAMIN.map((p) => p.sekcja))].map((klucz) => {
  const punkty = REGULAMIN.filter((p) => p.sekcja === klucz);
  return { klucz, tytul: punkty[0].sekcjaTytul, ile: punkty.length, sezon: punkty[0].sezon };
});

export default async function RegulaminPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; rozdzial?: string }>;
}) {
  const sp = await searchParams;
  const zapytanie = (sp.q ?? "").trim().slice(0, 80);
  const rozdzial = sp.rozdzial;

  // Zalogowanemu pokazujemy drogę do JEGO panelu — nie zgadujemy, skąd
  // przyszedł, tylko pytamy o rolę. Niezalogowany dostaje samą stronę zawodów.
  // W SKYLOSIE ta ścieżka pochodzi z sesji zalogowanego użytkownika i prowadzi
  // do jego panelu. Wyszukiwarka jest jawna, więc w wersji demonstracyjnej
  // odpinamy warstwę logowania — to jedyna różnica wobec kodu produkcyjnego.
  const sciezkaPanelu: string | null = null;

  const wyniki: PunktRegulaminu[] = zapytanie
    ? szukaj(REGULAMIN, zapytanie).map((t) => t.punkt)
    : rozdzial
      ? REGULAMIN.filter((p) => p.sekcja === rozdzial).sort((a, b) =>
          porownajNumery(a.numer, b.numer),
        )
      : [];

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-8">
      {/* DWIE DROGI POWROTNE, bo wchodzi się tu z dwóch stron. Zawodnik,
          02.09.2026: „będąc w swoim panelu, jak wejdę w regulamin, to mam
          przycisk tylko powrót na stronę główną zawodów, a nie mogę wrócić
          z powrotem do swojego panelu". Regulamin jest stroną publiczną
          i większość czytelników trafia tu z landingu — ale zawodnik
          i osoba funkcyjna klikają w pastylkę z nagłówka swojego panelu
          i chcą do niego wrócić, a nie wylądować na stronie zawodów. */}
      <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {sciezkaPanelu && (
          <Link
            href={sciezkaPanelu}
            className="text-skylos-cream/60 transition-colors hover:text-skylos-gold"
          >
            ← Mój panel
          </Link>
        )}
        <Link href="/" className="text-skylos-cream/60 transition-colors hover:text-skylos-gold">
          {sciezkaPanelu ? "Strona zawodów" : "← Strona zawodów"}
        </Link>
      </nav>

      <h1 className="mt-3 font-display text-3xl tracking-wide text-skylos-gold">Regulamin</h1>
      <p className="mt-2 text-sm leading-relaxed text-skylos-cream/75">
        Regulamin sportowych wyścigów psich zaprzęgów PZSPZ, {REGULAMIN_WERSJA}. Szukaj po
        słowie albo po numerze punktu — przy każdym znajdziesz jego dokładną treść
        i krótkie wyjaśnienie, o co w nim chodzi.
      </p>

      <div className="mt-5">
        <Szukajka poczatkowe={zapytanie} />
        {/* PODPOWIEDZI POD POLEM, nie pusty prostokąt. Człowiek, który nie wie,
            którego punktu szuka, tym bardziej nie wie, jakiego słowa użyć. */}
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-skylos-cream/45">
          Popularne:
          {["wyprzedzanie", "kara", "wiek psa", "smycz", "temperatura", "protest"].map((x) => (
            <Link
              key={x}
              href={`/regulamin?q=${encodeURIComponent(x)}`}
              className="underline hover:text-skylos-gold"
            >
              {x}
            </Link>
          ))}
        </p>
      </div>

      {zapytanie || rozdzial ? (
        <section className="mt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-lg tracking-wide text-skylos-gold-hi">
              {zapytanie ? `Wyniki dla „${zapytanie}”` : ROZDZIALY.find((r) => r.klucz === rozdzial)?.tytul}
            </h2>
            <p className="text-sm text-skylos-cream/60">
              {wyniki.length} {wyniki.length === 1 ? "punkt" : "punktów"}
            </p>
          </div>

          {wyniki.length === 0 ? (
            <div className="mt-3 rounded-xl border border-skylos-gold-dim/40 bg-skylos-panel p-5">
              <p className="text-sm leading-relaxed text-skylos-cream/70">
                Nic nie pasuje do „{zapytanie}”. Spróbuj innego słowa — regulamin bywa
                napisany inaczej, niż się o czymś mówi. Możesz też przejrzeć rozdziały niżej.
              </p>
            </div>
          ) : (
            <ul className="mt-3 flex flex-col gap-2">
              {wyniki.map((p) => (
                <li key={`${p.sekcja}-${p.numer}`}>
                  <Punkt punkt={p} otwarty={wyniki.length === 1} />
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : null}

      {/* Skrót do tego, po co zawodnik przychodzi tu najczęściej — a czego
          sam by nie wyszukał, bo nie wie, jakiego słowa użyć. */}
      <Link
        href="/regulamin/na-trasie"
        className="mt-8 flex items-center justify-between gap-3 rounded-xl border border-skylos-gold bg-skylos-gold/10 px-4 py-3
                   transition-colors hover:bg-skylos-gold/20
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
      >
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-skylos-gold-hi">Zasady na trasie</span>
          <span className="block text-xs text-skylos-cream/60">
            Pierwszeństwo, wyprzedzanie, TRAIL i STOP, odstęp 15 m — do przeczytania przed startem
          </span>
        </span>
        <span aria-hidden className="shrink-0 text-skylos-gold">→</span>
      </Link>

      <section className="mt-8">
        <h2 className="font-display text-lg tracking-wide text-skylos-gold-hi">
          Przeglądaj rozdziałami
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {ROZDZIALY.map((r) => (
            <li key={r.klucz}>
              <Link
                href={`/regulamin?rozdzial=${r.klucz}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-skylos-gold-dim/40 bg-skylos-panel px-4 py-3
                           transition-colors hover:border-skylos-gold
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
              >
                <span className="min-w-0">
                  <span className="block text-sm text-skylos-cream">{r.tytul}</span>
                  {/* Rozdział 2 to wyłącznie wyścigi na śniegu. Bez tej etykiety
                      zawodnik SKYLOS czytałby przepisy, które go nie obowiązują,
                      i brał je za swoje. */}
                  {r.sezon === "snieg" && (
                    <span className="block text-xs text-skylos-cream/45">
                      dotyczy wyścigów na śniegu — na SKYLOS nie obowiązuje
                    </span>
                  )}
                </span>
                <span className="shrink-0 font-mono text-sm text-skylos-gold-dim">{r.ile}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-10 border-t border-skylos-gold-dim/30 pt-5 text-xs leading-relaxed text-skylos-cream/45">
        <p>
          Treść punktów pochodzi dosłownie z Regulaminu Sportowych Wyścigów Psich Zaprzęgów
          Polskiego Związku Sportu Psich Zaprzęgów ({REGULAMIN_WERSJA}).{" "}
          <a
            href={REGULAMIN_ZRODLO}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-skylos-gold"
          >
            Dokument źródłowy (PDF)
          </a>
          .
        </p>
        <p className="mt-2">
          Objaśnienia napisaliśmy my.
          <strong className="text-skylos-cream/70"> Nie są częścią regulaminu i nie są wiążące</strong> —
          w razie wątpliwości albo sporu obowiązuje wyłącznie treść punktu i decyzja Sędziego Głównego.
        </p>
      </footer>
    </main>
  );
}

function Punkt({ punkt, otwarty = false }: { punkt: PunktRegulaminu; otwarty?: boolean }) {
  // Jeden wynik = nie ma czego wybierać. Zawodnik, który wpisał numer punktu
  // albo kliknął podpowiedź, chce od razu przeczytać treść, a nie rozwijać
  // jedyną pozycję na liście.
  return (
    <details open={otwarty} className="group rounded-xl border border-skylos-gold-dim/40 bg-skylos-panel">
      <summary
        className="flex cursor-pointer list-none items-start gap-3 p-4
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
      >
        <span className="shrink-0 font-mono text-sm text-skylos-gold">{punkt.numer}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-skylos-cream">{punkt.tytul}</span>
          <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-skylos-cream/45">
            {/* Kodeks ma WŁASNĄ numerację 1.1–1.13, która zderza się z rozdziałem 1
                (tam też jest 1.10). Bez tej etykiety szukający „1.10" widziałby
                dwa różne punkty o tym samym numerze i nie wiedział, który czyta. */}
            {punkt.sekcja === "kodeks" && (
              <span className="text-skylos-gold-dim">Kodeks postępowania z psem</span>
            )}
            {punkt.waga === "kluczowy" && (
              <span className="text-amber-200">za naruszenie grożą konsekwencje</span>
            )}
            {punkt.sezon === "snieg" && <span>tylko wyścigi na śniegu</span>}
          </span>
        </span>
        <span aria-hidden="true" className="shrink-0 text-skylos-cream/40 group-open:hidden">
          ▸
        </span>
        <span aria-hidden="true" className="hidden shrink-0 text-skylos-cream/40 group-open:inline">
          ▾
        </span>
      </summary>

      <div className="border-t border-skylos-gold-dim/25 px-4 pb-4 pt-3">
        {/* TREŚĆ REGULAMINU — dosłowna, wyróżniona kreską jak cytat. */}
        <blockquote className="border-l-2 border-skylos-gold-dim/60 pl-3 text-sm leading-relaxed text-skylos-cream/90">
          {punkt.tresc}
        </blockquote>

        {punkt.wyjasnienie && (
          <div className="mt-3 rounded-lg border border-skylos-gold-dim/40 bg-skylos-bg/50 p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-skylos-gold-dim">
              Objaśnienie
            </p>
            <p className="mt-1 text-sm leading-relaxed text-skylos-cream/85">{punkt.wyjasnienie}</p>
          </div>
        )}

        <p className="mt-2 text-[11px] text-skylos-cream/35">{punkt.sekcjaTytul}</p>
      </div>
    </details>
  );
}
