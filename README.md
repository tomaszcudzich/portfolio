# Portfolio — Tomasz Cudzich

Buduję i wdrażam aplikacje webowe dla firm. Cztery systemy działają produkcyjnie
u płacących klientów. To repozytorium pokazuje z nich tyle, ile da się pokazać
bez cudzych danych: **dwa działające dema z kodem** i **cztery opisy wdrożeń ze
zrzutami ekranu**.

Strona: [tomaszcudzich.pl](https://tomaszcudzich.pl) · kontakt: tomasz.cudzich@icloud.com

---

## Dlaczego repozytoria produkcyjne są prywatne

Wszystkie cztery systemy pracują na danych klientów — pojazdach firmy, danych
zawodników, skanach paszportów psów. Repozytoria zostają prywatne i to jest
świadoma decyzja, nie brak dorobku.

To repozytorium rozwiązuje problem inaczej: pokazuję **kod, który wolno pokazać**,
a resztę opisuję.

| | Co to jest | Kod | Otwórz w przeglądarce |
|---|---|---|---|
| [Wyszukiwarka regulaminu](./wyszukiwarka-regulaminu) | Moduł wyjęty ze SKYLOSA, w produkcji jawny | ✅ produkcyjny, 21 testów | **[wyszukiwarka-regulaminu.vercel.app](https://wyszukiwarka-regulaminu.vercel.app)** |
| [Konwerter kart flotowych](./konwerter-kart-flotowych) | Całe narzędzie, zanonimizowane | ✅ produkcyjny | **[konwerter-kart-flotowych.vercel.app](https://konwerter-kart-flotowych.vercel.app)** |
| [SKYLOS Twisted Trails](./skylos-twisted-trails) | Największy system, 13 ról użytkowników | ❌ prywatne | 24 zrzuty ekranu |
| [Magazyn Opon](./magazyn-opon) | Ewidencja opon dla floty 120 pojazdów | ❌ prywatne | 4 zrzuty ekranu |
| [System danych floty (PWA)](./system-danych-floty) | Dane techniczne offline w telefonie | ❌ prywatne | opis |

---

## Jak pracuję — i czego nie ukrywam

Dziewięć lat przepracowałem po stronie operacyjnej firm: sprzedaż B2B,
administracja, nadzór nad flotą, ewidencja kosztów. Procesy, które dziś
przenoszę do aplikacji, wcześniej prowadziłem ręcznie — w arkuszu, w Comarch
Optima i w CRM-ie, który nie był do tego przeznaczony.

Programuję od maja 2026. **Kod powstaje w parze z Claude Code.** Moja część to
rozmowa z klientem i wymagania, model danych, decyzje architektoniczne,
wdrożenie produkcyjne, migracje, kopie zapasowe i utrzymanie działającego
systemu. Piszę to wprost, bo prędzej czy później i tak by o tym wyszło —
a wynik obroni się sam: te systemy działają i ktoś za nie zapłacił.

Każdy projekt prowadzę z dokumentacją w repozytorium: brief, model danych,
zasady pracy nad kodem. W kodzie zostawiam komentarze mówiące **dlaczego**, a nie
co — najlepiej widać to w
[`wyszukiwarka-regulaminu/src/app/regulamin/page.tsx`](./wyszukiwarka-regulaminu/src/app/regulamin/page.tsx)
i w testach, które opisują konkretne wpadki, przez które powstały.

---

## Stack

`Next.js (App Router)` · `TypeScript` · `React` · `PostgreSQL` (schemat, migracje,
indeksy) · `Supabase` · `Prisma` · `Neon` · `Tailwind CSS` · `PWA / IndexedDB` ·
autoryzacja sesyjna i `JWT` · `Vercel` (wdrożenia, cron, zmienne środowiskowe) ·
`Git` · `Playwright`

Podstawy: `HTML5`, `CSS`, `Python`.

---

## Anonimizacja

Zanim cokolwiek tu trafiło, przeszło kontrolę:

- z konwertera usunięte zostały **klucze dostępowe do bazy**, logotypy klienta
  i nazwy jego systemów — warstwa bazodanowa jest podmieniona na `localStorage`,
  reszta pliku to kod produkcyjny;
- zrzuty ekranu SKYLOSA i Magazynu Opon zrobiono na **danych zmyślonych**
  (nazwiska w rodzaju „Demowski", „Wzorcowa", „Jan Testowy"), podmienianych
  w przeglądarce przed zrzutem;
- jeden zrzut ze SKYLOSA został świadomie pominięty, bo miał w kadrze prywatny
  identyfikator śledzenia zawodnika;
- moduł regulaminu jest jedynym miejscem, gdzie **dane są prawdziwe** — bo to
  jawny regulamin związkowy, a nie czyjeś dane.
