// Zasady zachowania na trasie — wybór punktów regulaminu do przeczytania PRZED
// startem.
//
// ────────────────────────────────────────────────────────────────────────────
// SKĄD TA STRONA
//
// Z analizy regulaminu pod kątem paneli (docs/REGULAMIN_WEDLUG_PANELI.md)
// wyszło, że zawodnik nie ma gdzie zobaczyć zasad ruchu na trasie. Dowie się
// o komendzie TRAIL albo o odstępie 15 metrów tylko wtedy, gdy sam wejdzie do
// wyszukiwarki i wpisze właściwe słowo — a to są punkty, za których naruszenie
// realnie się karze, i najczęstsze źródło protestów między zawodnikami.
//
// KOLEJNOŚĆ NIE JEST NUMERYCZNA, tylko taka, w jakiej się to czyta: najpierw
// kto komu ustępuje, potem jak się wyprzedza, potem co robić, gdy coś pójdzie
// nie tak. Regulamin jest uporządkowany prawniczo, nie dydaktycznie.
//
// WYBÓR JEST NASZ i to jest jego jedyne ograniczenie: nie zastępuje regulaminu
// i nie znaczy, że reszta zawodnika nie obowiązuje. Stąd odnośnik do pełnej
// wyszukiwarki na dole strony.
// ────────────────────────────────────────────────────────────────────────────

export type GrupaNaTrasie = {
  tytul: string;
  wstep: string;
  punkty: string[];
};

export const NA_TRASIE: GrupaNaTrasie[] = [
  {
    tytul: "Kto komu ustępuje",
    wstep: "Dwie sytuacje, w których regulamin rozstrzyga pierwszeństwo za Ciebie.",
    punkty: ["1.7.12", "1.7.13"],
  },
  {
    tytul: "Wyprzedzanie",
    wstep:
      "Najczęstsze źródło protestów na zawodach. TRAIL i STOP to komendy, a nie uprzejme prośby.",
    punkty: ["1.7.14", "1.7.15", "1.7.16", "1.7.17"],
  },
  {
    tytul: "Odstęp i finisz",
    wstep: "Ile miejsca zostawiasz z tyłu i co się zmienia na ostatnim odcinku.",
    punkty: ["1.7.20", "1.7.21"],
  },
  {
    tytul: "Gdy coś pójdzie nie tak",
    wstep: "Zaplątane psy, postój na trasie — kiedy masz prawo zatrzymać rywala.",
    punkty: ["1.7.18", "1.7.19"],
  },
  {
    tytul: "Czego nie wolno",
    wstep: "Trzy rzeczy, za które kończy się wyścig.",
    punkty: ["1.7.1", "1.7.4", "1.7.5"],
  },
];

/** Wszystkie numery z wyboru, do sprawdzenia w testach i do policzenia. */
export const NUMERY_NA_TRASIE: string[] = NA_TRASIE.flatMap((g) => g.punkty);
