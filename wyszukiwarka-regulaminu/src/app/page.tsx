import type { Metadata } from "next";
import Link from "next/link";
import { REGULAMIN, REGULAMIN_WERSJA } from "@/lib/regulamin/dane";

export const metadata: Metadata = {
  title: "Wyszukiwarka regulaminu PZSPZ — demo",
};

const ROZDZIALOW = new Set(REGULAMIN.map((p) => p.sekcja)).size;

export default function Strona() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-skylos-gold-dim">
        Moduł z systemu SKYLOS Twisted Trails
      </p>

      <h1 className="mt-3 font-display text-3xl text-skylos-gold sm:text-4xl">
        Wyszukiwarka regulaminu
      </h1>

      <p className="mt-5 leading-relaxed text-skylos-cream/85">
        Regulamin sportowych wyścigów psich zaprzęgów PZSPZ rozłożony na{" "}
        <strong className="text-skylos-cream">{REGULAMIN.length} punktów</strong> w{" "}
        {ROZDZIALOW} rozdziałach. Każdy punkt ma dosłowną treść i osobne wyjaśnienie prostym
        językiem. Szuka się po frazie albo po numerze — zawodnik wpisuje „wyprzedzanie” i dostaje
        wszystkie punkty, które o tym mówią, zamiast przeglądać PDF na telefonie.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/regulamin"
          className="rounded-md border border-skylos-gold bg-skylos-gold/10 px-4 py-2.5 text-sm font-medium text-skylos-gold transition-colors hover:bg-skylos-gold/20"
        >
          Otwórz wyszukiwarkę →
        </Link>
        <Link
          href="/regulamin/na-trasie"
          className="rounded-md border border-skylos-gold-dim px-4 py-2.5 text-sm text-skylos-cream/80 transition-colors hover:border-skylos-gold hover:text-skylos-gold"
        >
          Zasady na trasie
        </Link>
      </div>

      <section className="mt-12 space-y-4 border-t border-kreska pt-8 text-sm leading-relaxed text-skylos-cream/70">
        <h2 className="font-display text-lg text-skylos-cream">Czym to jest</h2>
        <p>
          To wycinek z systemu obsługi zawodów psich zaprzęgów, który zbudowałem dla organizatora
          SKYLOS Twisted Trails. Cały system ma piętnaście paneli dla różnych ról — biuro, kontrola
          weterynaryjna, sędziowie, stake-out, gastronomia — i jest zamknięty za logowaniem, bo
          pracuje na danych zawodników i psów.
        </p>
        <p>
          Ten moduł jest jawny także w produkcji: regulaminu potrzebuje najbardziej ktoś, kto
          dopiero się zapisuje i konta jeszcze nie ma. Dlatego dało się go pokazać w całości —{" "}
          <strong className="text-skylos-cream/90">to jest ten sam kod</strong>, bez podmienionych
          danych. Jedyna zmiana to odpięcie warstwy sesji, opisane w komentarzu w{" "}
          <code className="rounded bg-warstwa-2 px-1.5 py-0.5 font-mono text-xs">
            src/app/regulamin/page.tsx
          </code>
          .
        </p>
        <p>
          Szukanie dzieje się po stronie serwera, formularzem GET: cały regulamin waży ponad 300 kB,
          więc wysyłanie go do telefonu tylko po to, żeby przeszukać na miejscu, kosztowałoby
          więcej niż samo szukanie. Efekt uboczny jest taki, że działa bez JavaScriptu, a wynik
          zostaje w adresie i da się go komuś wysłać linkiem.
        </p>
      </section>

      <footer className="mt-12 border-t border-kreska pt-6 text-xs text-skylos-cream/50">
        <p>
          Źródło: {REGULAMIN_WERSJA}. Tomasz Cudzich ·{" "}
          <a
            href="https://tomaszcudzich.pl"
            className="text-skylos-gold-dim underline underline-offset-2 transition-colors hover:text-skylos-gold"
          >
            tomaszcudzich.pl
          </a>
        </p>
      </footer>
    </main>
  );
}
