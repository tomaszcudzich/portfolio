import { NextResponse } from "next/server";
import { REGULAMIN } from "@/lib/regulamin/dane";
import { szukaj } from "@/lib/regulamin/szukaj";

// Podpowiedzi do wyszukiwarki regulaminu.
//
// Zawodnik, 02.09.2026: „tutaj powinno podpowiadać już po samym wpisaniu, a nie
// czekać dopiero na kliknięcie szukaj".
//
// DLACZEGO PRZEZ SERWER, A NIE W PRZEGLĄDARCE. Regulamin to ponad 330 kB — na
// telefonie w terenie ściąganie go tylko po to, żeby podpowiadać, kosztowałoby
// więcej niż całe szukanie. Tutaj w drugą stronę leci sama lista numerów
// i tytułów, czyli kilkaset bajtów.
//
// Formularz na stronie działa dalej bez JavaScriptu — podpowiedzi są dodatkiem,
// a nie warunkiem korzystania z wyszukiwarki.

// TRASA MUSI BYĆ DYNAMICZNA. Przy `force-static` Next.js buduje odpowiedź raz,
// a do handlera trafia żądanie BEZ parametrów zapytania — `q` przychodzi puste
// i odpowiedź zawsze jest pusta. Kosztowało to jedno wdrożenie: w wyniku
// budowania trasa miała `○` zamiast `ƒ` i to był jedyny widoczny ślad.
//
// Buforowanie i tak mamy, tyle że tam, gdzie działa poprawnie: nagłówek
// Cache-Control niżej. CDN trzyma odpowiedź osobno dla każdego zapytania,
// więc powtarzające się „wyprzedzanie" i „kara" nie wracają na serwer.
export const dynamic = "force-dynamic";

const ILE = 8;

export function GET(request: Request) {
  const q = (new URL(request.url).searchParams.get("q") ?? "").trim().slice(0, 80);
  if (q.length < 2) return NextResponse.json({ wyniki: [] });

  const wyniki = szukaj(REGULAMIN, q)
    .slice(0, ILE)
    .map((t) => ({
      numer: t.punkt.numer,
      tytul: t.punkt.tytul,
      // Kodeks ma własną numerację 1.1–1.13, która zderza się z rozdziałem 1.
      // Bez tej etykiety podpowiedź „1.10" byłaby dwuznaczna.
      kodeks: t.punkt.sekcja === "kodeks",
      snieg: t.punkt.sezon === "snieg",
    }));

  return NextResponse.json(
    { wyniki },
    // Regulamin zmienia się raz na rok; te same zapytania będą się powtarzać
    // przy każdym zawodniku, więc niech odpowiedź poleży w cache.
    { headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" } },
  );
}
