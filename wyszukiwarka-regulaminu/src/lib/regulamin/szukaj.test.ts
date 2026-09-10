import { test } from "node:test";
import assert from "node:assert/strict";
import { szukaj, rdzen, zloz, porownajNumery, type PunktRegulaminu } from "./szukaj";

const punkt = (
  numer: string,
  tytul: string,
  tresc: string,
  tagi: string[] = [],
  wyjasnienie: string | null = null,
): PunktRegulaminu => ({
  numer,
  tytul,
  tresc,
  wyjasnienie,
  sekcja: "rozdzial-1",
  sekcjaTytul: "Rozdział 1",
  tagi,
  panele: ["zawodnik"],
  waga: "kluczowy",
  sezon: "wspolny",
});

const PRZYKLAD: PunktRegulaminu[] = [
  punkt("1.7.14", "Prośba o wyprzedzenie", "Kiedy zaprzęg chce wyprzedzić inny zaprzęg…", ["wyprzedzanie", "mijanie"]),
  punkt("1.7.15", "Żądanie TRAIL", "Na żądanie TRAIL zaprzęg wyprzedzany musi ustąpić…", ["wyprzedzanie", "trail"]),
  punkt("1.10.1", "Rodzaje kar", "Karą nakładaną w trakcie wyścigu jest upomnienie…", ["kara", "dyskwalifikacja"]),
  punkt("6.10.5", "Wiek psa", "Pies musi mieć ukończone 12 miesięcy…", ["wiek", "psy"]),
];

test("numer punktu daje dokładnie ten punkt", () => {
  const w = szukaj(PRZYKLAD, "1.10.1");
  assert.equal(w.length, 1);
  assert.equal(w[0].punkt.numer, "1.10.1");
});

test("skrócony numer daje całą grupę, po kolei", () => {
  // Ktoś zobaczył karę „za punkt 1.7" i chce zobaczyć wszystko z tej grupy.
  const w = szukaj(PRZYKLAD, "1.7");
  assert.deepEqual(w.map((x) => x.punkt.numer), ["1.7.14", "1.7.15"]);
});

test("fraza znajduje punkty mimo odmiany — to jest cały sens", () => {
  // Zawodnik: „wpisuję »wyprzedzanie« i wyskakują mi wszystkie punkty".
  // W tekście jest „wyprzedzić", „wyprzedzany" — dosłowne dopasowanie
  // nie znalazłoby ani jednego.
  const w = szukaj(PRZYKLAD, "wyprzedzanie");
  assert.deepEqual(w.map((x) => x.punkt.numer).sort(), ["1.7.14", "1.7.15"]);
});

test("brak polskich znaków nie psuje szukania", () => {
  // Telefon w rękawicy, klawiatura bez ogonków.
  assert.equal(szukaj(PRZYKLAD, "zaprzeg").length, 2);
  assert.equal(zloz("Zaprzęg"), "zaprzeg");
});

test("tag waży więcej niż samo wystąpienie w treści", () => {
  // Tagi to potoczne nazwy, jakimi ludzie naprawdę szukają.
  const w = szukaj(PRZYKLAD, "mijanie");
  assert.equal(w[0].punkt.numer, "1.7.14");
});

test("dwa słowa zawężają, a nie rozmywają", () => {
  const w = szukaj(PRZYKLAD, "wyprzedzanie trail");
  assert.equal(w[0].punkt.numer, "1.7.15");
});

test("nic nie pasuje = pusto, bez udawania wyników", () => {
  assert.deepEqual(szukaj(PRZYKLAD, "kajak"), []);
  assert.deepEqual(szukaj(PRZYKLAD, "  "), []);
});

test("krótkie słowa są pomijane, żeby nie zwracać wszystkiego", () => {
  // „na", „do", „w" pasowałyby do każdego punktu i zamieniły wynik w listę całą.
  assert.deepEqual(szukaj(PRZYKLAD, "na"), []);
});

test("rdzeń ucina końcówkę, ale nie zjada krótkich słów", () => {
  // „wyprzedzan" pasuje i do „wyprzedzany", i do „wyprzedzania" — o to chodzi.
  assert.equal(rdzen("wyprzedzanie"), "wyprzedzan");
  // „kara" i „kary" mają zejść do tego samego rdzenia — inaczej zawodnik,
  // który wpisał jedną formę, nie znajdzie punktu napisanego w drugiej.
  assert.equal(rdzen("kara"), "kar");
  assert.equal(rdzen("kary"), "kar");
  assert.equal(rdzen("psy"), "psy");
});

test("numery porządkują się liczbowo, nie alfabetycznie", () => {
  // Alfabetycznie „1.7.15" wypadłoby przed „1.7.9" — mylące przy czytaniu grupy.
  assert.ok(porownajNumery("1.7.9", "1.7.15") < 0);
  assert.ok(porownajNumery("1.10.1", "1.9.1") > 0);
});

test("krótkie słowo nie trafia w dłuższe, które tak samo się zaczyna", () => {
  // Zawodnik po karze wpisuje „kara". Bez tego warunku dostawał najpierw punkt
  // o LINIE Z KARABIŃCZYKIEM, a punkt o karach spadał na szóste miejsce.
  const zKarabinczykiem = [
    ...PRZYKLAD,
    punkt("2.6.3", "Lina i pas", "Lina musi być zakończona karabińczykiem.", ["karabińczyk"]),
  ];
  const w = szukaj(zKarabinczykiem, "kara");
  assert.deepEqual(w.map((x) => x.punkt.numer), ["1.10.1"]);
});

test("przedrostek też coś znajduje — pisanie po znaku", () => {
  // Zawodnik, 02.09.2026: wpisanie „Wyprz" nie dawało NICZEGO, bo strażnik
  // długości słowa odrzucał wszystko dłuższe o więcej niż trzy litery,
  // a „wyprzedzanie" ma ich dwanaście. Przy podpowiedziach w trakcie pisania
  // to jest właśnie ten przypadek, o który chodzi.
  const w = szukaj(PRZYKLAD, "wyprz");
  assert.deepEqual(w.map((x) => x.punkt.numer).sort(), ["1.7.14", "1.7.15"]);
});

test("luźny przebieg NIE psuje precyzji, gdy dokładny coś znalazł", () => {
  // „kara" ma trafiać w punkt o karach, a nie w linę z karabińczykiem —
  // drugi przebieg włącza się dopiero, gdy pierwszy zwrócił pustkę.
  const zKarabinczykiem = [
    ...PRZYKLAD,
    punkt("2.6.3", "Lina i pas", "Lina musi być zakończona karabińczykiem.", ["karabińczyk"]),
  ];
  assert.deepEqual(szukaj(zKarabinczykiem, "kara").map((x) => x.punkt.numer), ["1.10.1"]);
});

test("nadal nie wymyśla wyników tam, gdzie ich nie ma", () => {
  // Drugi przebieg jest hojniejszy, ale nie zgaduje: „kajak" nie zaczyna
  // żadnego słowa w tekście, więc obydwa przebiegi zwracają pustkę.
  assert.deepEqual(szukaj(PRZYKLAD, "kajak"), []);
});
