import type { Metadata } from "next";
import Link from "next/link";
import { REGULAMIN } from "@/lib/regulamin/dane";
import { NA_TRASIE, NUMERY_NA_TRASIE } from "@/lib/regulamin/na-trasie";

export const metadata: Metadata = {
  title: "Zasady na trasie",
  description:
    "Pierwszeństwo, wyprzedzanie, komendy TRAIL i STOP, odstęp 15 metrów — punkty regulaminu PZSPZ, które obowiązują na trasie wyścigu, z wyjaśnieniem prostym językiem.",
};

const WG_NUMERU = new Map(REGULAMIN.map((p) => [p.numer, p]));

// Zasady na trasie — do przeczytania raz, przed startem.
//
// WSZYSTKO ROZWINIĘTE, bez zwijek. To jest strona do przeczytania w całości
// wieczorem przed zawodami, a nie do wyszukiwania — a przy trzynastu zwiniętych
// pozycjach człowiek rozwija dwie i uznaje, że zna resztę.
export default async function ZasadyNaTrasie() {
  // W SKYLOSIE ta ścieżka pochodzi z sesji zalogowanego użytkownika i prowadzi
  // do jego panelu. Wyszukiwarka jest jawna, więc w wersji demonstracyjnej
  // odpinamy warstwę logowania — to jedyna różnica wobec kodu produkcyjnego.
  const sciezkaPanelu: string | null = null;

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-8">
      <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {sciezkaPanelu && (
          <Link
            href={sciezkaPanelu}
            className="text-skylos-cream/60 transition-colors hover:text-skylos-gold"
          >
            ← Mój panel
          </Link>
        )}
        <Link
          href="/regulamin"
          className="text-skylos-cream/60 transition-colors hover:text-skylos-gold"
        >
          {sciezkaPanelu ? "Regulamin" : "← Regulamin"}
        </Link>
        {/* Wyjście na stronę zawodów jest wymagane od KAŻDEJ publicznej
            podstrony — pilnuje tego test w src/app/public-pages.test.ts.
            Bez niego strona jest ślepym zaułkiem dla kogoś, kto trafił tu
            z wyszukiwarki. */}
        <Link href="/" className="text-skylos-cream/60 transition-colors hover:text-skylos-gold">
          Strona zawodów
        </Link>
      </nav>

      <h1 className="mt-3 font-display text-3xl tracking-wide text-skylos-gold">
        Zasady na trasie
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-skylos-cream/75">
        {NUMERY_NA_TRASIE.length} punktów regulaminu, które obowiązują Cię między startem
        a metą. Wszystkie są w kategorii, za której naruszenie grożą konsekwencje —
        i to one są najczęstszym powodem protestów między zawodnikami. Przeczytaj raz,
        na spokojnie, zanim staniesz na starcie.
      </p>

      {NA_TRASIE.map((grupa) => (
        <section key={grupa.tytul} className="mt-8">
          <h2 className="font-display text-lg tracking-wide text-skylos-gold-hi">
            {grupa.tytul}
          </h2>
          <p className="mt-0.5 text-sm text-skylos-cream/55">{grupa.wstep}</p>

          <ul className="mt-3 flex flex-col gap-3">
            {grupa.punkty.map((numer) => {
              const punkt = WG_NUMERU.get(numer);
              // Numer spoza regulaminu pomijamy zamiast rysować pustą kartę.
              // Test w dane.test.ts i tak nie pozwoli takiemu tu zostać.
              if (!punkt) return null;
              return (
                <li
                  key={numer}
                  className="rounded-xl border border-skylos-gold-dim/40 bg-skylos-panel p-4"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="shrink-0 font-mono text-sm text-skylos-gold">
                      {punkt.numer}
                    </span>
                    <h3 className="font-display text-base tracking-wide text-skylos-cream">
                      {punkt.tytul}
                    </h3>
                  </div>

                  {/* Nasze objaśnienie NAJPIERW, dosłowna treść pod spodem.
                      Odwrotnie niż w wyszukiwarce, i celowo: tam człowiek
                      sprawdza brzmienie przepisu, tutaj chce zrozumieć, jak się
                      zachować. Rozróżnienie zostaje — cytat ma kreskę z boku
                      i jest podpisany numerem. */}
                  {punkt.wyjasnienie && (
                    <p className="mt-2 text-sm leading-relaxed text-skylos-cream/90">
                      {punkt.wyjasnienie}
                    </p>
                  )}

                  <details className="mt-2">
                    <summary
                      className="min-h-11 cursor-pointer list-none py-2 text-xs text-skylos-cream/45
                                 transition-colors hover:text-skylos-gold
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
                    >
                      ▸ Dokładna treść punktu {punkt.numer}
                    </summary>
                    <blockquote className="mt-1 border-l-2 border-skylos-gold-dim/60 pl-3 text-sm leading-relaxed text-skylos-cream/85">
                      {punkt.tresc}
                    </blockquote>
                  </details>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <p className="mt-8 rounded-xl border border-skylos-gold-dim/40 bg-skylos-panel p-4 text-sm leading-relaxed text-skylos-cream/70">
        To jest <strong className="text-skylos-gold-hi">wybór</strong>, a nie komplet.
        Reszta regulaminu obowiązuje Cię tak samo —{" "}
        <Link
          href="/regulamin"
          className="text-skylos-gold-hi underline decoration-skylos-gold-dim/60 underline-offset-4
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylos-gold"
        >
          przeszukaj cały
        </Link>
        , gdy szukasz czegoś konkretnego.
      </p>
    </main>
  );
}
