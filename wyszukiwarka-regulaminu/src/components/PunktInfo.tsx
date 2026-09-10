import Link from "next/link";
import { REGULAMIN } from "@/lib/regulamin/dane";

// Znaczek „i" przy numerze punktu regulaminu.
//
// Zawodnik, 02.09.2026: „jeżeli zawodnik zobaczy informację, że kara za punkt
// regulaminu ten i ten, to po kliknięciu w znaczek »info« rozwinie się notatka
// z dokładną treścią tego punktu i krótkim wyjaśnieniem »po ludzku«".
//
// ────────────────────────────────────────────────────────────────────────────
// DLACZEGO TAK, A NIE INACZEJ
//
//  1. TO KOMPONENT SERWEROWY i <details>, czyli ZERO JavaScriptu. Cały
//     regulamin waży ponad 300 kB — gdyby ten komponent był kliencki, każdy
//     ekran z jedną karą ciągnąłby cały regulamin na telefon. Tak wysyłamy
//     tylko treść tego jednego punktu, a rozwijanie robi przeglądarka sama.
//
//  2. TREŚĆ I WYJAŚNIENIE WYGLĄDAJĄ INACZEJ. Treść jest dosłowna i wiążąca,
//     wyjaśnienie jest nasze. Gdyby wyglądały tak samo, zawodnik zacytowałby
//     na proteście nasze zdanie zamiast regulaminu. Stąd cytat z kreską
//     z boku kontra osobne pudełko „Objaśnienie".
//
//  3. NIEZNANY NUMER NIE WYWALA EKRANU, tylko przestaje być rozwijany i staje
//     się odnośnikiem do wyszukiwarki. W regulaminie cytujemy czasem cały
//     podrozdział (np. „3.5"), który nie jest osobnym punktem — a kara ma się
//     wyświetlić nawet wtedy, gdy odnośnik jest nieprecyzyjny.
// ────────────────────────────────────────────────────────────────────────────

const WG_NUMERU = new Map(REGULAMIN.map((p) => [p.numer, p]));

/** „1.5.6 / 1.7.11.3" albo „1.9.2, 1.9.3" → osobne numery. */
export function rozbijNumery(cytat: string): string[] {
  return cytat
    .split(/[/,]/)
    .map((s) => s.trim())
    .filter((s) => /^\d+(\.\d+)*$/.test(s));
}

export function PunktInfo({
  numer,
  etykieta = "Podstawa",
}: {
  numer: string;
  /** Słowo przed numerem — „Podstawa", „Wymóg", „Termin". */
  etykieta?: string;
}) {
  const punkt = WG_NUMERU.get(numer);

  // Numer, którego nie ma jako osobny punkt (odwołanie do podrozdziału).
  // Wyszukiwarka i tak sobie z nim poradzi — szuka po prefiksie numeru.
  if (!punkt) {
    return (
      <Link
        href={`/regulamin?q=${encodeURIComponent(numer)}`}
        className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-xs text-skylos-cream/55
                   underline decoration-skylos-gold-dim/60 underline-offset-2
                   transition-colors hover:text-skylos-gold
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
      >
        <Znaczek />
        {etykieta}: pkt {numer} — otwórz w regulaminie
      </Link>
    );
  }

  return (
    <details className="group mt-2 rounded-lg border border-skylos-gold-dim/35 bg-skylos-bg/40">
      <summary
        className="flex min-h-11 cursor-pointer list-none items-center gap-1.5 px-2.5 text-xs text-skylos-cream/60
                   transition-colors hover:text-skylos-gold
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
      >
        <Znaczek />
        <span>
          {etykieta}: pkt {numer}
        </span>
        <span aria-hidden="true" className="ml-auto text-skylos-cream/35 group-open:hidden">
          ▸
        </span>
        <span aria-hidden="true" className="ml-auto hidden text-skylos-cream/35 group-open:inline">
          ▾
        </span>
      </summary>

      <div className="border-t border-skylos-gold-dim/25 px-2.5 pb-2.5 pt-2">
        <p className="text-[10px] uppercase tracking-[0.18em] text-skylos-gold-dim">
          {punkt.tytul}
        </p>
        {/* DOSŁOWNA treść regulaminu — cytat, nie nasze słowa. */}
        <blockquote className="mt-1.5 border-l-2 border-skylos-gold-dim/60 pl-2.5 text-xs leading-relaxed text-skylos-cream/90">
          {punkt.tresc}
        </blockquote>

        {punkt.wyjasnienie && (
          <div className="mt-2 rounded border border-skylos-gold-dim/30 bg-skylos-panel/60 p-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-skylos-gold-dim">
              Objaśnienie
            </p>
            <p className="mt-1 text-xs leading-relaxed text-skylos-cream/85">
              {punkt.wyjasnienie}
            </p>
          </div>
        )}

        <Link
          href={`/regulamin?q=${encodeURIComponent(numer)}`}
          className="mt-2 inline-flex min-h-11 items-center text-xs text-skylos-cream/50
                     underline decoration-skylos-gold-dim/60 underline-offset-2
                     transition-colors hover:text-skylos-gold
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
        >
          Cały regulamin i sąsiednie punkty →
        </Link>
      </div>
    </details>
  );
}

/** Kilka numerów naraz — „kara czasowa pkt 1.5.6 / 1.7.11.3". */
export function PunktyInfo({ cytat, etykieta }: { cytat: string; etykieta?: string }) {
  return (
    <>
      {rozbijNumery(cytat).map((n) => (
        <PunktInfo key={n} numer={n} etykieta={etykieta} />
      ))}
    </>
  );
}

function Znaczek() {
  return (
    <span
      aria-hidden="true"
      className="grid size-4 shrink-0 place-items-center rounded-full border border-current
                 font-serif text-[10px] font-semibold leading-none"
    >
      i
    </span>
  );
}
