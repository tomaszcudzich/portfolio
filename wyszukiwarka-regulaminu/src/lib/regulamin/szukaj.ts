// Wyszukiwanie w regulaminie — po numerze punktu i po frazie.
//
// Zawodnik, 02.09.2026: „jako mniej doświadczony zawodnik chcę się dowiedzieć, jak
// to jest z tym wyprzedzaniem, ale nie wiem który to punkt ani nic — więc wpisuję
// »wyprzedzanie« i wyskakują mi wszystkie punkty, które o tym mówią".
//
// ────────────────────────────────────────────────────────────────────────────
// TRZY RZECZY, KTÓRE MUSZĄ DZIAŁAĆ, ŻEBY TO BYŁO UŻYTECZNE
//
//  1. BEZ OGONKÓW I WIELKOŚCI LITER. Zawodnik pisze na telefonie, w rękawicy,
//     często bez polskich znaków: „wyprzedzanie" i „wyprzedzanie" mają dać to
//     samo. Porównujemy tekst złożony do postaci bez znaków diakrytycznych.
//
//  2. PO RDZENIU SŁOWA, nie po dokładnym dopasowaniu. Polski odmienia: punkt
//     mówi „wyprzedzić", „wyprzedzający", „wyprzedzany", a człowiek wpisuje
//     „wyprzedzanie". Dopasowanie dosłowne nie znalazłoby ani jednego z nich.
//     Ucinamy końcówkę zapytania do rdzenia — prymitywnie, ale w tę stronę
//     błąd jest tani: najwyżej pokażemy punkt za dużo.
//
//  3. NUMER PUNKTU TEŻ JEST ZAPYTANIEM. „1.7.15" ma dać ten jeden punkt,
//     a „1.7" — całą grupę o wyprzedzaniu. Ktoś, kto zobaczył karę „za punkt
//     1.7.15", wpisze dokładnie to.
// ────────────────────────────────────────────────────────────────────────────

export type Sezon = "dryland" | "snieg" | "wspolny";

export type PunktRegulaminu = {
  numer: string;
  /** Nazwa punktu w kilku słowach — nagłówek wyniku wyszukiwania. */
  tytul: string;
  /** DOSŁOWNA treść z regulaminu. Nie skracamy i nie poprawiamy. */
  tresc: string;
  /** NASZE wyjaśnienie, nie część regulaminu. Puste dla nagłówków grup. */
  wyjasnienie: string | null;
  sekcja: string;
  sekcjaTytul: string;
  tagi: string[];
  panele: string[];
  waga: "kluczowy" | "przydatny" | "kontekst";
  sezon: Sezon;
};

/** Do porównań: małe litery, bez ogonków, bez zbędnych spacji. */
export function zloz(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ł/g, "l")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Rdzeń słowa — ucinamy typowe polskie końcówki.
 *
 * Świadomie prymitywne. Prawdziwa lematyzacja polskiego wymaga słownika, którego
 * nie będziemy wozić w przeglądarce ani utrzymywać. Przy 447 punktach i frazach
 * w rodzaju „wyprzedzanie" / „kara" / „chip" ucięcie ogona wystarcza, a błąd
 * w tę stronę kosztuje jeden wynik za dużo — nie brak odpowiedzi.
 */
export function rdzen(slowo: string): string {
  const s = zloz(slowo);
  if (s.length <= 3) return s;
  const bezKoncowki = s.replace(/(ami|ach|owi|iem|em|ie|ia|ych|ym|ej|om|ow|y|a|e|i|u|o)$/u, "");
  return bezKoncowki.length >= 3 ? bezKoncowki : s;
}

/**
 * Czy w tekście stoi SŁOWO zaczynające się od rdzenia.
 *
 * Dwa warunki, obydwa wzięte z konkretnej wpadki:
 *
 *  • POCZĄTEK SŁOWA, nie środek. Bez tego „kara" trafiała w „eskalacja".
 *
 *  • SŁOWO NIE DŁUŻSZE O WIĘCEJ NIŻ TRZY LITERY od rdzenia. Zawodnik, który
 *    dostał karę i wpisał „kara", dostawał na pierwszych miejscach „linę
 *    z KARABIŃCZYKIEM" — bo „karabińczyk" też zaczyna się od „kara". Punkt
 *    o karach (1.10.1) spadał przez to na szóste miejsce. Trzy litery zapasu
 *    biorą polską odmianę („kar", „kara", „kary", „karze", „karami"),
 *    a odcinają inne słowo, które tylko tak samo się zaczyna.
 */
function maSlowo(tekst: string, rdz: string, luzno: boolean): boolean {
  const litera = /[a-z0-9]/;
  let od = 0;
  for (;;) {
    const i = tekst.indexOf(rdz, od);
    if (i < 0) return false;
    od = i + 1;
    if (i > 0 && litera.test(tekst[i - 1])) continue;
    if (luzno) return true;
    let j = i + rdz.length;
    while (j < tekst.length && litera.test(tekst[j])) j += 1;
    if (j - i <= rdz.length + 3) return true;
  }
}

const NUMER = /^\d+(\.\d+)*\.?$/;

export type Trafienie = { punkt: PunktRegulaminu; wynik: number };

/**
 * Szuka i zwraca punkty od najtrafniejszego.
 *
 * Punktacja jest celowo prosta i czytelna, bo od niej zależy, czy pierwszy wynik
 * jest tym właściwym:
 *   100 — dokładny numer punktu
 *    60 — numer pasuje jako prefiks („1.7" → cała grupa)
 *    30 — słowo w TAGACH (tam wpisujemy potoczne nazwy, np. „mijanie")
 *    20 — słowo w tytule
 *     8 — słowo w treści
 *     4 — słowo w naszym wyjaśnieniu
 * Punkty ze świeżej frazy sumujemy: wpisanie dwóch słów zawęża, a nie rozmywa.
 */
export function szukaj(punkty: PunktRegulaminu[], zapytanie: string): Trafienie[] {
  const q = zapytanie.trim();
  if (!q) return [];

  // Numer punktu — osobna ścieżka, bo „1.7" nie jest słowem do szukania w treści.
  if (NUMER.test(q)) {
    const szukanyNumer = q.replace(/\.$/, "");
    return punkty
      .map((punkt) => {
        if (punkt.numer === szukanyNumer) return { punkt, wynik: 100 };
        if (punkt.numer.startsWith(szukanyNumer + ".")) return { punkt, wynik: 60 };
        return null;
      })
      .filter((t): t is Trafienie => t !== null)
      .sort((a, b) => b.wynik - a.wynik || porownajNumery(a.punkt.numer, b.punkt.numer));
  }

  const slowa = zloz(q).split(" ").filter((w) => w.length >= 3).map(rdzen);
  if (slowa.length === 0) return [];

  // DWA PRZEBIEGI: najpierw dokładnie, a dopiero gdy nic nie ma — luźno.
  //
  // Zawodnik, 02.09.2026, pisząc po znaku w wyszukiwarce: „Wyprz" nie dawało
  // NICZEGO. Strażnik długości słowa (dodany, żeby „kara" nie trafiała
  // w „karabińczyk") odrzucał wszystko, bo żadne słowo zaczynające się od
  // „wyprz" nie jest krótsze niż osiem liter — „wyprzedzanie" ma dwanaście.
  //
  // Z samego napisu nie da się poznać, czy człowiek skończył pisać słowo, czy
  // dopiero je zaczyna. Ale da się poznać po WYNIKU: jeśli dokładne szukanie
  // coś znalazło, to znaczy, że fraza była słowem i trzymamy się precyzji;
  // jeśli nie znalazło nic, to najwyraźniej był to przedrostek i wtedy warto
  // być hojnym. Pusta odpowiedź jest zawsze gorsza od kilku wyników za dużo.
  const przebieg = (luzno: boolean) =>
    punkty
      .map((punkt) => {
        const wTagach = zloz(punkt.tagi.join(" "));
        const wTytule = zloz(punkt.tytul);
        const wTresci = zloz(punkt.tresc);
        const wWyjasnieniu = zloz(punkt.wyjasnienie ?? "");

        let wynik = 0;
        for (const s of slowa) {
          if (maSlowo(wTagach, s, luzno)) wynik += 30;
          if (maSlowo(wTytule, s, luzno)) wynik += 20;
          if (maSlowo(wTresci, s, luzno)) wynik += 8;
          if (maSlowo(wWyjasnieniu, s, luzno)) wynik += 4;
        }
        return { punkt, wynik };
      })
      .filter((t) => t.wynik > 0)
      .sort((a, b) => b.wynik - a.wynik || porownajNumery(a.punkt.numer, b.punkt.numer));

  const dokladne = przebieg(false);
  return dokladne.length > 0 ? dokladne : przebieg(true);
}

/** Numery porządkujemy po członach liczbowo: 1.7.9 przed 1.7.15. */
export function porownajNumery(a: string, b: string): number {
  const x = a.split(".").map(Number);
  const y = b.split(".").map(Number);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const r = (x[i] ?? -1) - (y[i] ?? -1);
    if (r !== 0) return r;
  }
  return 0;
}
