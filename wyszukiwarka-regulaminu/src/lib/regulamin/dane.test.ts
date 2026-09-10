import { test } from "node:test";
import assert from "node:assert/strict";
import { REGULAMIN } from "./dane";
import { rozbijNumery } from "@/components/PunktInfo";
import { NUMERY_NA_TRASIE } from "./na-trasie";

// WERSJA DEMONSTRACYJNA. W aplikacji produkcyjnej ten plik zawiera dodatkowo
// testy spinające regulamin z resztą systemu: sprawdzają, czy każdy znacznik
// <PunktInfo numer="…"> w całym kodzie wskazuje istniejący punkt i czy listy
// wymaganego wyposażenia nie cytują punktów z rozdziału śniegowego (SKYLOS jest
// drylandowy). Tamte testy potrzebują modułów, których w tym wycinku nie ma,
// więc zostały tu pominięte — reszta jest bez zmian.

const WG_NUMERU = new Map(REGULAMIN.map((p) => [p.numer, p]));

test("numery punktów są unikalne", () => {
  // Duplikat znaczy, że wyszukiwarka pokazałaby zawodnikowi nie ten punkt,
  // o który pytał — a on cytowałby go potem na proteście.
  assert.equal(WG_NUMERU.size, REGULAMIN.length);
});

test("każdy punkt z treścią ma objaśnienie", () => {
  // Nagłówki grup (1.7.0 „Na trasie") własnej treści nie mają i objaśnienia
  // mieć nie muszą. Każdy pozostały punkt musi — inaczej znaczek „i" rozwija
  // się do pustego pudełka.
  const bez = REGULAMIN.filter((p) => !p.numer.endsWith(".0") && !p.wyjasnienie);
  assert.deepEqual(bez.map((p) => p.numer), []);
});

test("treść punktu jest dosłowna, nie ucięta", () => {
  const puste = REGULAMIN.filter((p) => p.tresc.trim().length < 3);
  assert.deepEqual(puste.map((p) => p.numer), []);
});

test("każda kara ma podstawę, która istnieje w regulaminie", () => {
  // Gdyby PUNKT_KARY wskazywało numer spoza regulaminu, zawodnik zobaczyłby
  // karę bez możliwości sprawdzenia, z czego ona wynika.
  //
  // W produkcji ta mapa mieszka w module panelu sędziego; tutaj jest wpisana
  // wprost, żeby test dało się uruchomić bez reszty aplikacji.
  const PUNKT_KARY: Record<string, string> = {
    upomnienie: "1.10.1",
    ostrzezenie: "1.10.1",
    dyskwalifikacja: "1.10.1",
    kara_czasowa: "1.5.6 / 1.7.11.3",
  };

  for (const [kind, cytat] of Object.entries(PUNKT_KARY)) {
    const numery = rozbijNumery(cytat);
    assert.ok(numery.length > 0, `${kind}: „${cytat}” nie zawiera numeru punktu`);
    for (const n of numery) {
      assert.ok(WG_NUMERU.has(n), `${kind}: punktu ${n} nie ma w regulaminie`);
    }
  }
});

test("rozbijNumery radzi sobie z zapisem „1.5.6 / 1.7.11.3”", () => {
  assert.deepEqual(rozbijNumery("1.5.6 / 1.7.11.3"), ["1.5.6", "1.7.11.3"]);
  assert.deepEqual(rozbijNumery("1.10.1"), ["1.10.1"]);
  assert.deepEqual(rozbijNumery("brak"), []);
});

test("wybór „zasady na trasie” wskazuje istniejące, kluczowe punkty", () => {
  // Strona /regulamin/na-trasie to WYBÓR punktów zrobiony przez nas. Jeśli
  // numeracja zmieni się przy dorocznej aktualizacji regulaminu, karta pokaże
  // pustkę albo — gorzej — cudzy punkt. Test pilnuje trzech rzeczy naraz:
  // że numer istnieje, że nie pochodzi z rozdziału śniegowego i że jest z tych,
  // za których naruszenie faktycznie grożą konsekwencje. Ostatnie jest istotne,
  // bo strona obiecuje zawodnikowi dokładnie to.
  for (const numer of NUMERY_NA_TRASIE) {
    const p = WG_NUMERU.get(numer);
    assert.ok(p, `punktu ${numer} nie ma w regulaminie`);
    assert.notEqual(p.sezon, "snieg", `${numer}: punkt śniegowy`);
    assert.equal(p.waga, "kluczowy", `${numer}: nie jest punktem kluczowym`);
    assert.ok(p.wyjasnienie, `${numer}: brak objaśnienia, karta byłaby pusta`);
  }
});

test("żaden punkt nie powtarza się w dwóch grupach", () => {
  assert.equal(new Set(NUMERY_NA_TRASIE).size, NUMERY_NA_TRASIE.length);
});
