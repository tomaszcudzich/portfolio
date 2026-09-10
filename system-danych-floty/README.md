# System danych technicznych floty (PWA)

Drugi system dla tego samego klienta — zakładu produkcyjnego z flotą 120
pojazdów. **Produkcja, używany codziennie.**

Komplet danych technicznych o każdym ze 120 pojazdów, dostępny z telefonu
w warsztacie i w trasie — **również bez zasięgu**.

> Kod jest prywatny. Aplikacja pracuje na danych pojazdów firmy.

## Problem

Dane techniczne pojazdów leżały w segregatorze i w pamięci kierownika. Kierowca
w trasie musiał telefonować do biura, żeby zweryfikować cokolwiek — a warsztat
w hali nie miał ich pod ręką w momencie, w którym były potrzebne.

## Dlaczego offline-first, a nie „responsywna strona”

Bo warunki użycia są takie, jakie są: hala z blachą nad głową i trasa między
miejscowościami. Aplikacja, która w tych miejscach pokazuje spinner, jest
bezużyteczna dokładnie wtedy, kiedy jest potrzebna.

- **`IndexedDB` przez `idb`** — dane cache'owane lokalnie na urządzeniu,
  odczyt działa bez sieci;
- **service worker + manifest** — instaluje się jako aplikacja na ekranie
  telefonu, bez sklepu z aplikacjami;
- **własna warstwa logowania** — `jose` (podpisywanie i weryfikacja JWT)
  + `bcryptjs` (haszowanie haseł), bez zewnętrznego dostawcy tożsamości;
- **`Neon Postgres`** jako baza — serverless, bez utrzymywania instancji.

## Efekt

Dane o każdym pojeździe są zawsze pod ręką — bez dzwonienia do biura i bez
wracania po dokumenty.

## Stack

`Next.js` · `TypeScript` · `Neon Postgres` · `Supabase` · `PWA` (`idb`,
service worker) · `jose` · `bcryptjs` · `Vercel`

26 commitów.
