// PLIK GENEROWANY — nie edytuj ręcznie.
//
// Źródło: Regulamin Sportowych Wyścigów Psich Zaprzęgów PZSPZ, aktualizacja
// 30 września 2025 (najnowsza wersja, sprawdzona 01.09.2026). Pole `tresc`
// to DOSŁOWNY tekst regulaminu. Pole `wyjasnienie` to NASZ komentarz — nie
// jest częścią regulaminu i nie jest wiążące.
//
// Odtworzenie po aktualizacji regulaminu:
//   1. pobierz nowy PDF, `pdftotext -layout`,
//   2. pdftotext -layout regulamin.pdf regulamin.txt
//      node scripts/regulamin/parsuj.mjs regulamin.txt
//   3. dopisz wyjaśnienia do zmienionych punktów w scripts/regulamin/wyjasnienia.json,
//   4. node scripts/zbuduj-regulamin.mjs
//   5. npm test — testy pilnują, że każdy punkt z treścią ma wyjaśnienie
//      i że numery cytowane w aplikacji nadal istnieją.
import type { PunktRegulaminu } from "./szukaj";

export const REGULAMIN_WERSJA = "aktualizacja 30 września 2025";
export const REGULAMIN_ZRODLO =
  "https://drive.google.com/file/d/13A21CGGMzZJcAmnIi0ARDQO7ui_N8ScS/view";

export const REGULAMIN: PunktRegulaminu[] = [
 {
  "numer": "1.1",
  "tytul": "Pies najwyższym dobrem",
  "tresc": "Pies jest najwyższym dobrem we wszystkich dyscyplinach sportu psich zaprzęgów.",
  "wyjasnienie": "To fundament, z którego sędziowie i weterynarze wyprowadzają wszystkie decyzje dotyczące psów. W praktyce: jeśli coś jest sporne, a w grę wchodzi dobro psa, ta zasada przeważa nad twoim wynikiem.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "dobrostan",
   "kodeks",
   "pies",
   "etyka",
   "zasady",
   "dobro psa"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.2",
  "tytul": "Pies ważniejszy niż wynik",
  "tresc": "Dobro psa jest ważniejsze od interesów zawodników, hodowców, właścicieli psów sprzedawców, trenerów, organizatorów i sponsorów zawodów oraz innych osób.",
  "wyjasnienie": "Kiedy twój interes sportowy zderza się z dobrem psa, przegrywasz ty. Walka o podium nigdy nie usprawiedliwi ryzyka wobec psa — sędzia dobrostanu ma prawo cię zatrzymać.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "dobrostan",
   "priorytet",
   "wynik",
   "kodeks",
   "sedzia dobrostanu",
   "interes zawodnika"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.3",
  "tytul": "Zabiegi tylko dla zdrowia psa",
  "tresc": "Wszelkie czynności pielęgnacyjne i zabiegi weterynaryjne mogą być wykonywane tylko wtedy, jeśli mają na celu zdrowie i dobro psa.",
  "wyjasnienie": "Nic, co robisz psu przed startem czy po mecie, nie może służyć wyłącznie poprawie wyniku. Zabiegi „pod wynik\" to naruszenie kodeksu i sprawa dla weterynarza zawodów.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "zabiegi",
   "pielegnacja",
   "weterynarz",
   "dobrostan",
   "leczenie",
   "masaz"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4",
  "tytul": "Twój obowiązek wobec psów",
  "tresc": "Nadrzędnym obowiązkiem każdego zawodnika jest dbanie o bezpieczeństwo, zdrowie, higienę i odpowiednie żywienie psów.",
  "wyjasnienie": "Odpowiadasz za psa przez cały czas trwania zawodów, nie tylko na trasie. Woda, cień, karmienie i czyste stanowisko na stakeout to twoja robota — nikt nie zrobi tego za ciebie, a zaniedbanie widzi sędzia dobrostanu.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "obowiazki",
   "zywienie",
   "higiena",
   "stakeout",
   "opieka",
   "dobrostan"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5",
  "tytul": "Psy w transporcie",
  "tresc": "Podczas transportu należy zapewnić psom bezpieczeństwo, prawidłową wentylację, odpowiednio częste pojenie, karmienie oraz wyprowadzanie.",
  "wyjasnienie": "Dotyczy drogi na zawody, postojów i powrotu, nie tylko samych startów. Auto stojące w słońcu bez wentylacji i wody to naruszenie kodeksu — reaguje na to sędzia dobrostanu, także na parkingu.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "transport",
   "auto",
   "wentylacja",
   "pojenie",
   "dobrostan",
   "boks",
   "postoj"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.6",
  "tytul": "Doświadczenie nie usprawiedliwia szkody",
  "tresc": "Kompetencje trenerskie, hodowlane oraz umiejętności maszerskie nie mogą być wykorzystywane na szkodę psów.",
  "wyjasnienie": "To, że jesteś doświadczonym maszerem, trenerem czy hodowcą, nie daje ci prawa do metod, które psu szkodzą. „Wiem, co robię\" nie jest tu żadnym argumentem obronnym.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "trening",
   "hodowla",
   "kompetencje",
   "dobrostan",
   "kodeks",
   "metody"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7",
  "tytul": "Zakaz brutalnych metod",
  "tresc": "Pies jako istota żywa nie może być poddawany metodom treningu i użytkowania uznawanym przez PZSPZ za brutalne.",
  "wyjasnienie": "Metody uznane przez PZSPZ za brutalne są zakazane — także poza zawodami, na twoim własnym treningu. Zauważone na zawodach kończy się interwencją sędziego dobrostanu i konsekwencjami.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "przemoc",
   "trening",
   "brutalnosc",
   "zakaz",
   "dobrostan",
   "bicie"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.8",
  "tytul": "Kontrola dobrostanu przez PZSPZ",
  "tresc": "PZSPZ ustala odpowiednie sposoby kontroli przestrzegania przepisów dotyczących dobrostanu psów wśród zawodników, hodowców, instruktorów i trenerów podległych jego jurysdykcji.",
  "wyjasnienie": "To przepis o uprawnieniach związku — ciebie nie dotyczy wprost. Warto tylko wiedzieć, że kontrola dobrostanu nie kończy się na dniu zawodów.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "pzspz",
   "kontrola",
   "dobrostan",
   "nadzor",
   "zwiazek"
  ],
  "panele": [
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.9",
  "tytul": "Dobrostan ponad wszystko",
  "tresc": "Na wszystkich etapach treningu i przygotowania psa do startu w zawodach dobrostan psa musi stać ponad wszystkimi innymi wymaganiami. Dotyczy to stałej opieki, metod treningu, starannego żywienia, utrzymywania w czystości, zapewnienia odpowiednich warunków bytowania, zabiegów pielęgnacyjnych oraz transportu.",
  "wyjasnienie": "Ta zasada obejmuje cały rok, nie tylko weekend zawodów: trening, żywienie, warunki bytowania, transport. Sędzia dobrostanu ocenia to, co widzi na miejscu, ale standard jest ten sam przez cały sezon.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "dobrostan",
   "trening",
   "przygotowanie",
   "bytowanie",
   "transport",
   "opieka"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10",
  "tytul": "Pies zdrowy i przygotowany",
  "tresc": "Psy muszą być zdrowe oraz odpowiednio wytrenowane zanim wezmą udział w zawodach.",
  "wyjasnienie": "Nie wystawiaj psa niedotrenowanego ani chorego — weterynarz zawodów może go nie dopuścić do startu. Ocena formy psa jest po twojej stronie, jeszcze przed przyjazdem na zawody.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "zdrowie",
   "przygotowanie",
   "kondycja",
   "dopuszczenie",
   "weterynarz",
   "badanie"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.11",
  "tytul": "Zakazane leki i zabiegi",
  "tresc": "Zabronione jest stosowanie leków, środków medycznych oraz zabiegów medycznych zagrażających dobrostanowi psów jak również w przypadku suk, prawidłowemu przebiegowi ciąży.",
  "wyjasnienie": "To osobna sprawa od dopingu sportowego: chodzi o wszystko, co szkodzi psu lub prawidłowej ciąży suki. Zanim cokolwiek podasz psu na zawodach, zapytaj weterynarza zawodów.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "leki",
   "zabiegi",
   "suka",
   "ciaza",
   "doping",
   "zakaz",
   "srodki medyczne"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.12",
  "tytul": "Warunki zawodów a psy",
  "tresc": "Zawody nie mogą zagrażać zdrowiu i dobru psów. Należy zwracać szczególną uwagę na teren zawodów, stan trasy, warunki atmosferyczne, kondycję psów i ich bezpieczeństwo oraz warunki w jakich przebywają podczas trwania zawodów.",
  "wyjasnienie": "To przepis kierowany głównie do organizatora i sędziów — to oni skracają trasę, przesuwają lub odwołują bieg. Dla ciebie oznacza tyle, że zmiana programu z powodu upału czy stanu trasy jest wykonaniem regulaminu, a nie kaprysem.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "pogoda",
   "upal",
   "trasa",
   "odwolanie",
   "bezpieczenstwo",
   "warunki",
   "skrocenie trasy"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.13",
  "tytul": "Dobrostan także poza zawodami",
  "tresc": "Przepisy dotyczące dobrostanu psów obowiązują podczas wszystkich zgrupowań, treningów oraz zawodów, bez względu na ich rangę oraz miejsce rozgrywania. Należy dołożyć wszelkich starań, aby zapewnić psom staranną opiekę po zakończeniu zawodów, a także humanitarne traktowanie po zakończeniu kariery sportowej. Dotyczy to właściwej pielęgnacji, opieki weterynaryjnej oraz zapewnienia spokojnej starości.",
  "wyjasnienie": "Kodeks nie wyłącza się po ostatnim biegu ani po zakończeniu kariery psa. Naruszenie stwierdzone na treningu czy zgrupowaniu też może mieć konsekwencje związkowe.",
  "sekcja": "kodeks",
  "sekcjaTytul": "Kodeks postępowania z psem",
  "tagi": [
   "dobrostan",
   "emerytura",
   "treningi",
   "zgrupowania",
   "po karierze",
   "opieka"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.0.0",
  "tytul": "Przepis szczegółowy ma pierwszeństwo",
  "tresc": "W przypadku wystąpienia sprzeczności między przepisami ogólnymi a przepisami szczegółowymi obowiązują przepisy szczegółowe.",
  "wyjasnienie": "Jeśli przepis ogólny kłóci się z przepisem twojej konkurencji, obowiązuje ten szczegółowy. Na SKYLOS oznacza to, że rozdział o wyścigach bezśnieżnych bije rozdział ogólny.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kolizja przepisow",
   "hierarchia",
   "przepisy ogolne",
   "przepisy szczegolowe",
   "interpretacja"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.1.0",
  "tytul": "Zasady uczestnictwa",
  "tresc": "Zasady uczestnictwa",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.1.1",
  "tytul": "Ten sam zaprzęg przez zawody",
  "tresc": "Maszer startujący w pierwszym etapie wyścigu musi prowadzić ten sam zaprzęg przez całe zawody.",
  "wyjasnienie": "Kto wystartował w pierwszym etapie, prowadzi ten sam zaprzęg do końca zawodów. Nie ma zmiany maszera ani przejęcia cudzych psów w kolejnym etapie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zaprzeg",
   "etapy",
   "zmiana maszera",
   "sklad",
   "wyscig etapowy",
   "podmiana"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.1.2",
  "tytul": "Psy muszą zacząć od etapu 1",
  "tresc": "Wszystkie psy biorące udział w wyścigu muszą być zaprzężone na starcie pierwszego etapu. Zaprzęg lub pies, które nie startowały w pierwszym etapie, nie będą dopuszczone do startu w dalszej części wyścigu, z wyjątkiem opisanym w pkt.1.2.1.",
  "wyjasnienie": "Pies, którego nie było w zaprzęgu na starcie pierwszego etapu, nie wejdzie do składu w kolejnych. Planuj skład od razu — dostawienie psa na drugi dzień odpada, poza wyjątkiem z pkt 1.2.1.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "sklad",
   "psy",
   "pierwszy etap",
   "rezerwa",
   "dostawienie psa",
   "etapy"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.1.3",
  "tytul": "Dyskwalifikacja kończy start",
  "tresc": "Zaprzęg, maszer lub pies zdyskwalifikowany w trakcie jednego z etapów nie może kontynuować wyścigu.",
  "wyjasnienie": "Dyskwalifikacja w jednym etapie zamyka ci całe zawody — nie wracasz do nich następnego dnia. Jeśli zdyskwalifikowany został pojedynczy pies, to ten pies nie może już biec dalej.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "dyskwalifikacja",
   "dq",
   "etapy",
   "kontynuacja",
   "koniec startu"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.1.4",
  "tytul": "Każdy pies wraca na metę",
  "tresc": "Wszystkie psy startujące w danym etapie, muszą dotrzeć do mety – w zaprzęgu bądź przywiezione w torbie – chyba, że organizator wyznaczy miejsca pozostawienia psów.",
  "wyjasnienie": "Psa, który nie może dalej biec, wieziesz w torbie do mety — nie zostawiasz go na trasie. Wyjątkiem są tylko miejsca pozostawienia psów wyznaczone przez organizatora; sprawdź na odprawie, czy takie są.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "torba",
   "dogbag",
   "meta",
   "pies",
   "zejscie z trasy",
   "pozostawienie psa"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.1.5",
  "tytul": "Limit czasu na wyścig",
  "tresc": "Zaprzęg, którego całkowity czas przekracza limit czasowy określony dla danego wyścigu, nie będzie dopuszczony do kolejnych etapów wyścigu w tych zawodach. Limit czasowy określany jest przez organizatora zawodów w porozumieniu z Sędzią Głównym.",
  "wyjasnienie": "Przekroczenie limitu czasu zamyka ci kolejne etapy — to nie kara punktowa, tylko brak dopuszczenia do dalszej jazdy. Dowiedz się na odprawie, ile ten limit wynosi, bo ustala go organizator z Sędzią Głównym.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "limit czasu",
   "czas",
   "etapy",
   "niedopuszczenie",
   "odprawa",
   "spoznienie"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.2.0",
  "tytul": "Wielkość zaprzęgu",
  "tresc": "Wielkość zaprzęgu",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.2.1",
  "tytul": "Zakaz dokładania psa",
  "tresc": "Po starcie w pierwszym etapie do zaprzęgu nie może zostać dołączony żaden pies – z wyłączeniem sytuacji opisanych w szczegółowych przepisach wyścigów mid i dystans, patrz pkt 2.11.4",
  "wyjasnienie": "Po starcie w pierwszym etapie skład możesz już tylko zmniejszać, nigdy powiększać. Regulamin przewiduje wyjątek dla wyścigów mid i dystansowych i odsyła do pkt 2.11.4 — ten leży w rozdziale o wyścigach na śniegu, więc w konkurencjach bezśnieżnych na to nie licz.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "sklad",
   "dokladanie psa",
   "wymiana psa",
   "mid",
   "dystans",
   "etapy"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.2.2",
  "tytul": "Zmniejszanie zaprzęgu między etapami",
  "tresc": "Po pierwszym lub kolejnych etapach maszer może dowolnie zmniejszyć wielkość swego zaprzęgu pod warunkiem, że utrzyma się w minimalnym limicie psów, określonym dla danej klasy, zgodnie z zapisami par. 2.1, 2.5.1.1, 2.5.1.2, 3.1, 3.6.0 i 3.7.0.",
  "wyjasnienie": "Zmęczonego psa możesz zostawić na kolejny etap, ale musisz utrzymać minimalną liczbę psów przewidzianą dla swojej klasy. Zejście poniżej tego minimum to koniec startu w tej klasie — sprawdź liczbę zanim zdecydujesz.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zmniejszenie zaprzegu",
   "minimum psow",
   "klasa",
   "etapy",
   "sklad",
   "liczba psow"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.2.3",
  "tytul": "Odpowiadasz za wielkość zaprzęgu",
  "tresc": "Zawodnik ponosi odpowiedzialność za dostosowanie wielkości zaprzęgu do swoich możliwości.",
  "wyjasnienie": "Jeśli nie zapanujesz nad zaprzęgiem, to twój problem, nie organizatora ani sędziego. Bierz tyle psów, ile realnie opanujesz na tej trasie, przy tej pogodzie i tym sprzęcie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "wielkosc zaprzegu",
   "kontrola",
   "odpowiedzialnosc",
   "bezpieczenstwo",
   "liczba psow"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.3.0",
  "tytul": "Środki medyczne",
  "tresc": "Środki medyczne",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.3.1",
  "tytul": "Antydoping według POLADA",
  "tresc": "Na wszystkich zawodach rozgrywanych zgodnie z niniejszym regulaminem stosowane są przepisy dotyczące kontroli antydopingowej oraz lista środków zabronionych ogłaszane corocznie przez POLADA.",
  "wyjasnienie": "Obowiązuje cię jako zawodnika lista substancji zabronionych POLADA, aktualizowana co roku. Sprawdź na niej swoje leki przed startem, także te zwykłe z apteki — nieświadomość nie chroni przed karą.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "doping",
   "antydoping",
   "polada",
   "leki",
   "kontrola",
   "substancje zabronione"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.0",
  "tytul": "Wyposażenie",
  "tresc": "Wyposażenie",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.1",
  "tytul": "Kontrola przed startem",
  "tresc": "Psy z danego zaprzęgu, maszerzy i wyposażenie muszą być dostępni do kontroli w miejscu i o czasie ogłoszonym podczas odprawy przez Sędziego Głównego, ale nie później niż na 10 minut przed startem do wyścigu sprinterskiego i na 1 godzinę przed startem do wyścigu średnio i długodystansowego.",
  "wyjasnienie": "Ty, psy i sprzęt musicie być dostępni do kontroli w miejscu i czasie podanym na odprawie — najpóźniej 10 minut przed startem w sprincie i godzinę przed startem w mid lub dystansie. Nie planuj rozgrzewki tak, żeby wpaść na start w ostatniej chwili.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kontrola",
   "odprawa",
   "sprzet",
   "przed startem",
   "weryfikacja",
   "10 minut"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.1.1",
  "tytul": "Start bez odprawy to dyskwalifikacja",
  "tresc": "Maszer, który wystartował do któregokolwiek etapu wyścigu na zaprzęgu lub sprzęcie bez wymaganej decyzją Sędziego Głównego odprawy zostanie zdyskwalifikowany.",
  "wyjasnienie": "Jeśli Sędzia Główny zarządził odprawę zaprzęgu lub sprzętu, a ty wystartowałeś bez niej — jesteś zdyskwalifikowany. Nie ma tu taryfy ulgowej za pomyłkę czy pośpiech.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "odprawa",
   "dyskwalifikacja",
   "sprzet",
   "kontrola",
   "start"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.2",
  "tytul": "Sześć minut na dojazd",
  "tresc": "Zaprzęg w uprzężach nie może być zatrzymany przez kontrolę dłużej niż do 6 minut przed przewidzianym czasem startu.",
  "wyjasnienie": "Kontrola nie ma prawa trzymać cię w uprzężach dłużej niż do 6 minut przed twoim czasem startu. Jeśli kontrola się przeciąga, powiedz o tym — masz prawo zdążyć na linię.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kontrola",
   "6 minut",
   "uprzeze",
   "start",
   "opoznienie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.3",
  "tytul": "Kontrola po biegu",
  "tresc": "Każdy zaprzęg na żądanie Sędziego Głównego musi zostać przedstawiony do kontroli po ukończeniu dowolnego etapu.",
  "wyjasnienie": "Sędzia Główny może cię wezwać do kontroli po dowolnym etapie, więc nie pakuj psów i sprzętu do auta natychmiast po mecie. Uchylenie się od takiej kontroli to prosta droga do problemów.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kontrola",
   "meta",
   "po etapie",
   "sedzia glowny",
   "sprzet",
   "po biegu"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.4",
  "tytul": "Sprzęt musi być zaakceptowany",
  "tresc": "Wszystkie elementy wyposażenia muszą być zaakceptowane przez Sędziego Głównego.",
  "wyjasnienie": "Ostatnie słowo w sprawie twojego sprzętu ma Sędzia Główny, nawet jeśli regulamin niczego wprost nie zakazuje. Nietypowy sprzęt pokaż mu przed zawodami, a nie w strefie startu.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "sprzet",
   "wyposazenie",
   "akceptacja",
   "sedzia glowny",
   "kontrola sprzetu",
   "uprzaz"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.5",
  "tytul": "Zakazany sprzęt na psach",
  "tresc": "Zabronione jest używanie kagańców, obroży zaciskowych bez ograniczników, kolczatek i batów, oraz wszelkiego sprzętu, który Sędzia Główny lub Sędzia Dobrostanu Zwierząt uzna za niebezpieczny dla psów.",
  "wyjasnienie": "Kagańce, kolczatki, bat i obroże zaciskowe bez ogranicznika zostają w aucie — na trasie i w strefie startu ich nie użyjesz. Sędzia Główny lub Sędzia Dobrostanu może zakwestionować także inny sprzęt, jeśli uzna go za groźny dla psa.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kaganiec",
   "kolczatka",
   "bat",
   "obroza zaciskowa",
   "zakazany sprzet",
   "dobrostan"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.4.6",
  "tytul": "Numer startowy widoczny",
  "tresc": "Przez cały czas trwania etapu wyścigu zawodnik zobowiązany jest do noszenia numeru startowego w widocznym miejscu.",
  "wyjasnienie": "Numer nosisz przez cały etap w widocznym miejscu — nie pod kurtką i nie w kieszeni. Bez numeru sędziowie na trasie nie mają jak cię zidentyfikować, a pomiar czasu może cię pominąć.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "numer startowy",
   "oznaczenie",
   "widocznosc",
   "trasa",
   "identyfikacja"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.0",
  "tytul": "Start",
  "tresc": "Start",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.1",
  "tytul": "Pomoc na starcie dozwolona",
  "tresc": "Dopuszczalne jest udzielenie pomocy zawodnikom w strefie startowej.",
  "wyjasnienie": "W strefie startowej handler może ci trzymać psy i pojazd — to jest w pełni legalne. Umów się wcześniej, kto z twojej ekipy wchodzi z tobą na start.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "handler",
   "pomoc",
   "strefa startu",
   "asysta",
   "start",
   "trzymanie psow"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.2",
  "tytul": "Zatrzymanie na linii startu",
  "tresc": "Przed wystartowaniem zaprzęg musi się zatrzymać na linii startowej.",
  "wyjasnienie": "Nie wolno wjechać na linię z rozpędu — zaprzęg musi się zatrzymać, zanim padnie sygnał. Poćwicz to na treningu, bo w emocjach łatwo o falstart.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "start",
   "linia startu",
   "zatrzymanie",
   "falstart",
   "procedura startu"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.3",
  "tytul": "Przód pojazdu na linii",
  "tresc": "Przód pojazdu musi znaleźć się na linii startowej i nie może jej przekroczyć przed sygnałem startu.",
  "wyjasnienie": "Ustaw się tak, żeby przód roweru, hulajnogi czy wózka był na linii i jej nie przekroczył przed sygnałem. Liczy się położenie pojazdu, nie psów — te stoją przed linią.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "linia startu",
   "pojazd",
   "ustawienie",
   "falstart",
   "start",
   "rower"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.4",
  "tytul": "Kiedy jesteś spóźniony",
  "tresc": "Zaprzęg, który nie znajdzie się na starcie w czasie dla niego wyznaczonym lub w ciągu pierwszej połowy przerwy między kolejnymi startami, będzie ogłoszony jako zaprzęg spóźniony.",
  "wyjasnienie": "Wystarczy, że nie stawisz się w swoim czasie startu albo w pierwszej połowie odstępu do następnego zawodnika — już masz status spóźnionego. Sam status jeszcze nie kończy startu, ale pociąga za sobą konsekwencje.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "spoznienie",
   "spozniony",
   "czas startu",
   "odstep",
   "status",
   "start"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.5",
  "tytul": "Start zaprzęgu spóźnionego",
  "tresc": "Zaprzęg spóźniony startuje po wystartowaniu ostatniego zaprzęgu zgłoszonego do jego klasy po ustalonej przerwie między startami kolejnych zaprzęgów lub w czasie wyznaczonym przez Sędziego Startu. Zaprzęg spóźniony nie może przeszkadzać innym zaprzęgom.",
  "wyjasnienie": "Jako spóźniony pojedziesz po ostatnim zawodniku ze swojej klasy albo w terminie wskazanym przez Sędziego Startu. Trzymaj się z boku i nie wchodź nikomu w drogę — przeszkadzanie innym to osobny problem.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "spozniony",
   "kolejnosc startu",
   "sedzia startu",
   "ostatni start",
   "przeszkadzanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.6",
  "tytul": "Kara za spóźnienie",
  "tresc": "Sędzia Główny może ukarać zaprzęg spóźniony karą czasową wynosząca 10% czasu zwycięzcy danego etapu w danej klasie i kategorii, zaokrąglane „do góry” do pełnej sekundy.",
  "wyjasnienie": "Za spóźnienie możesz dostać doliczone 10% czasu zwycięzcy swojej klasy w tym etapie — przy sprincie to zwykle minuty, nie sekundy. To decyzja Sędziego Głównego, a nie automat.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kara czasowa",
   "spoznienie",
   "10 procent",
   "doliczenie czasu",
   "sedzia glowny"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.7",
  "tytul": "Kilku spóźnionych naraz",
  "tresc": "Jeśli zaprzęgów spóźnionych jest więcej niż jeden, startują one w początkowo przewidzianej kolejności z przerwami przewidzianymi między startami kolejnych zaprzęgów.",
  "wyjasnienie": "Jeśli spóźnionych jest więcej niż jeden, jedziecie w pierwotnej kolejności z listy startowej i z normalnymi odstępami. Nie ustawiajcie się między sobą po swojemu.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "spoznieni",
   "kolejnosc",
   "odstepy",
   "lista startowa",
   "start"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.8",
  "tytul": "Drugie spóźnienie to koniec",
  "tresc": "Jeśli w tym samym etapie zaprzęg jest spóźniony po raz drugi, zostaje zdyskwalifikowany.",
  "wyjasnienie": "Spóźnisz się drugi raz w tym samym etapie i jesteś zdyskwalifikowany — bez ostrzeżenia i bez kary czasowej. Po pierwszym spóźnieniu bądź na starcie z zapasem.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "spoznienie",
   "dyskwalifikacja",
   "drugie spoznienie",
   "dq",
   "start"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.5.9",
  "tytul": "Zablokowana strefa startu",
  "tresc": "Zaprzęg, który nie opuści strefy startowej przed startem kolejnego zaprzęgu, może zostać zdyskwalifikowany.",
  "wyjasnienie": "Jeśli twoje psy staną i nie wyjedziesz ze strefy startu przed startem następnego zawodnika, grozi ci dyskwalifikacja. Gdy widzisz, że nie ruszysz, ściągaj zaprzęg na bok razem z handlerem, zamiast walczyć na torze.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "strefa startu",
   "blokada",
   "dyskwalifikacja",
   "zatrzymanie",
   "start",
   "psy nie ruszaja"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.6.0",
  "tytul": "Meta",
  "tresc": "Meta",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.6.1",
  "tytul": "Kiedy kończy się etap",
  "tresc": "Zaprzęg kończy etap w momencie, gdy maszer przekroczy linię mety.",
  "wyjasnienie": "Czas zatrzymuje się na tobie, nie na psach — dopóki sam nie przetniesz linii, bieg trwa. Nie zwalniaj tuż przed metą, bo psy przekraczają ją wcześniej niż ty.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "meta",
   "czas",
   "pomiar",
   "linia mety",
   "koniec etapu",
   "finisz"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.6.2",
  "tytul": "Nie wyprzedzaj psów na mecie",
  "tresc": "Maszer nie może przekroczyć linii mety przed liderami zaprzęgu.",
  "wyjasnienie": "Na metę wjeżdżasz za psami, nigdy przed nimi. Wybieganie przed lidera na finiszu to złamanie przepisu, nawet jeśli chcesz psom „pomóc\" dojechać.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "meta",
   "lider",
   "wyprzedzanie psa",
   "finisz",
   "canicross",
   "linia mety"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.0",
  "tytul": "Na trasie",
  "tresc": "Na trasie",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.1",
  "tytul": "Cała trasa, bez skrótów",
  "tresc": "Każdy zaprzęg i maszer muszą przebyć całość trasy ustalonej przez organizatorów.",
  "wyjasnienie": "Musisz pokonać całą wyznaczoną trasę — także wtedy, gdy się zgubisz i wrócisz. Skrót, nawet niezamierzony, kończy się problemem na mecie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "trasa",
   "skrot",
   "pelny dystans",
   "przebieg trasy",
   "oznaczenia",
   "zgubienie trasy"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.2",
  "tytul": "Skrócona trasa kończy wyścig",
  "tresc": "Zaprzęg, który nie pokonał całej trasy danego etapu nie jest dopuszczony do kontynuowania wyścigu.",
  "wyjasnienie": "Nie chodzi tylko o brak wyniku z tego etapu — nie pojedziesz też w kolejnych. Jeśli masz wątpliwość, czy przejechałeś całość, zgłoś to sędziemu sam, zanim zrobi to ktoś inny.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "trasa",
   "niepelna trasa",
   "niedopuszczenie",
   "etapy",
   "skrot"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.3",
  "tytul": "Powrót do miejsca zboczenia",
  "tresc": "Jeśli zaprzęg opuścił trasę, maszer obowiązany jest zawrócić zaprzęg do miejsca zboczenia z trasy.",
  "wyjasnienie": "Jak zjedziesz z trasy, wracasz dokładnie tam, gdzie z niej zboczyłeś, i stamtąd jedziesz dalej. Wejście na trasę w innym miejscu liczy się jak skrót.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zboczenie z trasy",
   "pomylka",
   "powrot",
   "trasa",
   "skrot",
   "zle skrecenie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.4",
  "tytul": "Zakaz podwożenia",
  "tresc": "Maszer, który zgodzi się na podwiezienie przez pojazd inny niż jego własny, zostanie zdyskwalifikowany, z wyjątkiem przypadku ucieczki zaprzęgu lub psa.",
  "wyjasnienie": "Wsiądziesz w trakcie etapu do cudzego auta albo na cudzy pojazd i jesteś zdyskwalifikowany. Jedyny wyjątek to sytuacja, gdy szukasz zbiegłego zaprzęgu lub psa.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "podwiezienie",
   "transport",
   "dyskwalifikacja",
   "ucieczka psa",
   "trasa",
   "pomoc z zewnatrz"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.5",
  "tytul": "Nie przeszkadzaj innym",
  "tresc": "Maszer, ani prowadzony przez niego zaprzęg nie może przeszkadzać innemu zaprzęgowi.",
  "wyjasnienie": "Ani ty, ani twoje psy nie mogą utrudniać jazdy innemu zaprzęgowi — dotyczy to też blokowania trasy, gdy się zatrzymujesz. Musisz stanąć? Zjedź na bok.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "przeszkadzanie",
   "blokowanie",
   "trasa",
   "inny zaprzeg",
   "fair play",
   "mijanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.6",
  "tytul": "Zakaz wożenia pasażera",
  "tresc": "Zabroniony jest transport pasażera w którymkolwiek momencie wyścigu, z wyjątkiem konieczności podwiezienia innej osoby w nagłym wypadku.",
  "wyjasnienie": "Nie zabierasz nikogo na pojazd w trakcie biegu — wyjątkiem jest tylko nagły wypadek, gdy trzeba kogoś ratować. To nie jest przepis do naginania, bo ktoś się zmęczył.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "pasazer",
   "wozenie",
   "wypadek",
   "pojazd",
   "zakaz",
   "wozek"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.7",
  "tytul": "Równa pomoc od służb trasy",
  "tresc": "Wszystkie zaprzęgi mają prawo do otrzymania takiej samej pomocy ze strony osób funkcyjnych znajdujących się w określonych miejscach wzdłuż trasy i w przypadkach określonych przez Sędziego Głównego.",
  "wyjasnienie": "Wolontariusze i sędziowie na trasie pomagają wszystkim tak samo — nie licz na przysługę tylko dla siebie. Jeśli ktoś w takiej samej sytuacji dostał pomoc, tobie też się należy.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "osoby funkcyjne",
   "wolontariusze",
   "pomoc",
   "trasa",
   "rowne traktowanie",
   "sedziowie trasy"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.8",
  "tytul": "Pomoc między zawodnikami",
  "tresc": "Zawodnicy w trakcie trwania etapu mogą sobie pomagać we wszelki sposób, dopuszczony przez Sędziego Głównego.",
  "wyjasnienie": "Możesz pomóc innemu zawodnikowi na trasie i przyjąć pomoc od niego, w granicach dopuszczonych przez Sędziego Głównego. Jeśli planujesz jechać z kimś w parze, zapytaj o to na odprawie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "pomoc",
   "zawodnicy",
   "wzajemna pomoc",
   "trasa",
   "sedzia glowny"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.9",
  "tytul": "Co może zrobić kibic",
  "tresc": "Pomoc asystenta lub widza ogranicza się wyłącznie do przytrzymania pojazdu, z wyjątkiem przypadku, kiedy zbiegły zaprzęg lub pies, nad którym maszer utracił kontrolę może stanowić niebezpieczeństwo dla psów z tego samego zaprzęgu, innych zaprzęgów lub osób.",
  "wyjasnienie": "Widz albo twój handler może ci najwyżej przytrzymać pojazd — nie ciągnąć, nie popychać, nie prowadzić psów. Więcej wolno tylko wtedy, gdy zaprzęg albo pies się urwał i zagraża psom lub ludziom.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kibic",
   "widz",
   "handler",
   "pomoc z zewnatrz",
   "przytrzymanie",
   "ucieczka"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "stakeout"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.10",
  "tytul": "Nikt nie biegnie przy psach",
  "tresc": "Nikt oprócz maszera nie może pomagać psom w zaprzęgu biegnąc w ich pobliżu.",
  "wyjasnienie": "Handler ani kibic nie może biec obok twoich psów, żeby je pociągnąć czy zmotywować. Jedyną osobą przy zaprzęgu na trasie jesteś ty.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "pomoc",
   "bieganie przy psach",
   "handler",
   "kibic",
   "zaprzeg",
   "motywowanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11",
  "tytul": "Zbiegły zaprzęg lub pies",
  "tresc": "Zbiegły zaprzęg lub pies:",
  "wyjasnienie": "To sam nagłówek grupy przepisów — konkretne obowiązki są w punktach pod nim. Zajrzyj tam, jeśli szukasz, co robić przy urwanym zaprzęgu albo luźnym psie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zbiegly zaprzeg",
   "ucieczka psa",
   "urwany zaprzeg",
   "luzny pies",
   "naglowek"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11.1",
  "tytul": "Luźny pies to nagły wypadek",
  "tresc": "Wszyscy maszerzy zobowiązani są traktować zbiegłego psa lub zaprzęg jako zwierzęta w niebezpieczeństwie.",
  "wyjasnienie": "Widzisz psa lub zaprzęg biegnące luzem — zatrzymujesz się i pomagasz, nawet jeśli kosztuje cię to wynik. To nie uprzejmość, tylko obowiązek każdego maszera na trasie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zbiegly pies",
   "luzny pies",
   "pomoc",
   "bezpieczenstwo",
   "ucieczka zaprzegu",
   "zwierze w niebezpieczenstwie"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "stakeout"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11.2",
  "tytul": "Zbiegły zaprzęg nie może przeszkadzać",
  "tresc": "Zbiegły zaprzęg lub pies nie mogą przeszkadzać ani opóźniać innych zaprzęgów, wobec tego:",
  "wyjasnienie": "To zdanie otwiera listę obowiązków przy ucieczce psów — konkrety są w podpunktach niżej. Zasada nadrzędna jest taka, że twoja utrata kontroli nie może kosztować czasu ani bezpieczeństwa innych zawodników.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zbiegły zaprzęg",
   "ucieczka psów",
   "uciekł pies",
   "luźny pies",
   "przeszkadzanie",
   "bezpieczeństwo"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11.2.1",
  "tytul": "Obowiązek złapania zbiegłych psów",
  "tresc": "Maszer zbiegłego zaprzęgu ma obowiązek schwytania go wszelkimi dostępnymi sposobami możliwie jak najszybciej, aby zapewnić bezpieczeństwo zaprzęgu.",
  "wyjasnienie": "Jeśli psy ci uciekną, twoim jedynym zadaniem jest je złapać — natychmiast i wszelkim dostępnym sposobem. Wyścig w tym momencie przestaje się liczyć, liczy się bezpieczeństwo zwierząt.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zbiegły zaprzęg",
   "uciekł pies",
   "łapanie psów",
   "ucieczka",
   "obowiązki maszera",
   "bezpieczeństwo psów"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11.2.2",
  "tytul": "Musisz przyjąć pomoc w szukaniu",
  "tresc": "W przypadku, gdy maszer nie może szybko i bezpiecznie odnaleźć swojego zaprzęgu ma obowiązek przyjęcia pomocy włącznie z podwiezieniem innym środkiem transportu w celu odszukania zaprzęgu. Odmowa przyjęcia pomocy może spowodować dyskwalifikację tego zawodnika. Decyzja o dyskwalifikacji należy do Sędziego Głównego.",
  "wyjasnienie": "Jeśli sam nie dasz rady szybko odnaleźć psów, nie graj bohatera — masz obowiązek przyjąć pomoc, łącznie z wsiadaniem do cudzego auta czy quada. Odmowa może cię kosztować dyskwalifikację, a decyduje o tym Sędzia Główny.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zbiegły zaprzęg",
   "pomoc z zewnątrz",
   "podwiezienie",
   "odmowa pomocy",
   "dyskwalifikacja",
   "sędzia główny"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11.2.3",
  "tytul": "Wszyscy łapią zbiegły zaprzęg",
  "tresc": "Wszyscy uczestnicy wyścigu zobowiązani są do podjęcia prób zatrzymania i przytrzymania zbiegłego zaprzęgu.",
  "wyjasnienie": "Zbiegłe psy to sprawa wszystkich na trasie — jeśli zobaczysz cudzy zaprzęg bez maszera, masz spróbować go zatrzymać i przytrzymać. Nie wolno po prostu minąć go i jechać dalej po swój wynik.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zbiegły zaprzęg",
   "łapanie psów",
   "pomoc rywalowi",
   "obowiązek zatrzymania",
   "ucieczka",
   "bezpieczeństwo"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11.3",
  "tytul": "Doliczenie 20% za podwiezienie",
  "tresc": "Maszerzy korzystający z innego środka transportu w celu odnalezienia zaprzęgu będą mieli doliczone 20% swojego całkowitego czasu przejazdu etapu, w którym otrzymali pomoc.",
  "wyjasnienie": "Jeśli szukałeś psów, jadąc czymkolwiek — autem, quadem, skuterem — twój czas tego etapu rośnie o jedną piątą. To kara liczona automatycznie, niezależna od tego, czy psy znalazłeś.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kara czasowa",
   "20 procent",
   "podwiezienie",
   "zbiegły zaprzęg",
   "doliczenie czasu",
   "transport"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.11.4",
  "tytul": "Powrót na trasę bez doliczenia",
  "tresc": "Zbiegły zaprzęg może wrócić na trasę bez doliczenia czasu pod warunkiem pokonania całości trasy, jeśli maszer uzyskał pomoc z zewnątrz tylko w celu zatrzymania i przytrzymania zaprzęgu lub psa.",
  "wyjasnienie": "Jeśli obcy ludzie tylko przytrzymali ci psy, a ty i tak pokonałeś całą trasę na własnych nogach czy kołach, nie dostajesz żadnego doliczenia. Kara czasowa wchodzi dopiero wtedy, gdy dałeś się podwieźć.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zbiegły zaprzęg",
   "pomoc z zewnątrz",
   "bez kary",
   "cała trasa",
   "przytrzymanie psa",
   "doliczenie czasu"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.12",
  "tytul": "Pierwszeństwo lidera na skrzyżowaniu",
  "tresc": "W przypadku startu równoległego zaprzęgów lub gdy spotykają się dwie trasy, zaprzęg, którego lider jest pierwszy, ma pierwszeństwo przejazdu.",
  "wyjasnienie": "Gdy dwie trasy się schodzą albo jedziecie obok siebie po starcie równoległym, decyduje pozycja lidera — czyj pies jest z przodu, ten jedzie pierwszy. Jeśli to nie ty, przepuszczasz bez dyskusji.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "pierwszeństwo",
   "skrzyżowanie tras",
   "start równoległy",
   "lider",
   "zbieg tras",
   "kolizja"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.13",
  "tytul": "Pierwszeństwo przy mijaniu się",
  "tresc": "Kiedy zaprzęgi mijają się w przeciwnych kierunkach na tej samej trasie, zaprzęg jadący w dół ma pierwszeństwo. Na płaskiej trasie Sędzia Główny określa i ogłasza przed rozpoczęciem wyścigu czy pierwszeństwo ma zaprzęg startujący czy wracający.",
  "wyjasnienie": "Jadąc pod górę, ustępujesz temu, kto zjeżdża — on ma mniejszą kontrolę nad hamowaniem. Na płaskim odcinku Sędzia Główny ogłasza to przed wyścigiem, więc musisz być na odprawie i zapamiętać jego decyzję.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "pierwszeństwo",
   "mijanie",
   "dwa kierunki",
   "podjazd",
   "zjazd",
   "odprawa",
   "sędzia główny"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.14",
  "tytul": "Prośba o wyprzedzenie",
  "tresc": "Kiedy zaprzęg chce wyprzedzić inny zaprzęg, maszer zaprzęgu wyprzedzającego prosi o przejazd, gdy jego lider znajduje się co najmniej 15 metrów od wyprzedzanego pojazdu.",
  "wyjasnienie": "Nie odzywaj się dopiero wtedy, gdy siedzisz rywalowi na kole — o przejazd prosisz, mając jeszcze zapas dystansu. Chodzi o to, żeby wyprzedzany miał czas zareagować i bezpiecznie zjechać.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "wyprzedzanie",
   "mijanie",
   "prośba o przejazd",
   "15 metrów",
   "trail",
   "dystans"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.15",
  "tytul": "Komenda TRAIL — ustąp i zwolnij",
  "tresc": "Na żądanie TRAIL / DROGA zaprzęg wyprzedzany musi ustąpić miejsca zaprzęgowi wyprzedzającemu, zjeżdżając na bok trasy i zwalniając.",
  "wyjasnienie": "Gdy usłyszysz TRAIL albo DROGA, zjeżdżasz na bok i zwalniasz, żeby przepuścić rywala. To komenda, nie uprzejma prośba — nie masz prawa jej zignorować ani przyspieszyć, żeby się obronić.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "trail",
   "droga",
   "wyprzedzanie",
   "ustąpienie",
   "komenda",
   "mijanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.16",
  "tytul": "Komenda STOP — zatrzymaj się",
  "tresc": "Na żądanie STOP zaprzęg wyprzedzany musi ustąpić przejazdu zaprzęgowi wyprzedzającemu, zjeżdżając na bok trasy i zatrzymując się.",
  "wyjasnienie": "STOP jest mocniejsze niż TRAIL: tu nie wystarczy zwolnić, musisz zjechać na bok i całkiem stanąć. Wyprzedzający używa jej wtedy, gdy inaczej nie da się minąć bezpiecznie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "stop",
   "wyprzedzanie",
   "zatrzymanie",
   "ustąpienie",
   "komenda",
   "mijanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.17",
  "tytul": "Zakaz natychmiastowego rewanżu",
  "tresc": "Zaprzęg wyprzedzony nie może ponownie wyprzedzić:",
  "wyjasnienie": "Gdy ktoś cię minie, nie odbijasz mu tego od razu — musisz odczekać swoje. Ile dokładnie, zależy od klasy i mówią o tym punkty poniżej.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "wyprzedzanie",
   "ponowne wyprzedzanie",
   "rewanż",
   "limit czasu",
   "mijanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.17.1",
  "tytul": "Limit rewanżu w klasie UL",
  "tresc": "W klasie UL przed upływem co najmniej 4 minut lub przebyciem 1600 m.",
  "wyjasnienie": "Ten limit dotyczy klasy nielimitowanej UL — najliczniejszych zaprzęgów. Jeśli tam startujesz i ktoś cię wyprzedził, przez 4 minuty albo 1600 metrów po prostu jedziesz za nim.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "ul",
   "klasa nielimitowana",
   "wyprzedzanie",
   "ponowne wyprzedzanie",
   "4 minuty",
   "1600 metrów"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.17.2",
  "tytul": "Limit rewanżu w pozostałych klasach",
  "tresc": "W klasie AB, C, D oraz pulka, skijoring, bikejoring i canicross przed upływem 2 minut lub przebyciem 800 metrów.",
  "wyjasnienie": "To jest twój limit, jeśli jedziesz canicross, bikejoring albo startujesz w klasach AB, C lub D — po tym, jak ktoś cię minie, odczekujesz 2 minuty lub 800 metrów, zanim spróbujesz odzyskać pozycję. Wcześniej możesz zaatakować tylko wtedy, gdy rywal sam się na to zgodzi.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "canicross",
   "bikejoring",
   "wyprzedzanie",
   "ponowne wyprzedzanie",
   "2 minuty",
   "800 metrów",
   "klasa ab",
   "rewanż"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.17.3",
  "tytul": "Skrócenie przerwy za zgodą",
  "tresc": "Przerwa ta może być mniejsza, jeśli zgodzą się na to obaj zawodnicy.",
  "wyjasnienie": "Przerwę przed rewanżem możecie skrócić, ale tylko wtedy, gdy obaj się zgodzicie — jeśli wyprzedzony sam krzyknie „jedź\", możesz atakować od razu. Bez wyraźnej zgody obowiązuje pełny czas.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "wyprzedzanie",
   "zgoda zawodników",
   "skrócenie przerwy",
   "rewanż",
   "dogadanie się"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.18",
  "tytul": "Zatrzymanie po zaplątaniu psów",
  "tresc": "Jeśli zaprzęg wyprzedzający poplącze się w wyniku manewru wyprzedzania jego maszer może wymagać od maszera zaprzęgu wyprzedzanego, aby zatrzymał się na maksymalnie jedną minutę w klasach UL, a na czas 0,5 minuty w pozostałych klasach.",
  "wyjasnienie": "Jeśli twoje psy zaplątały się właśnie przez manewr wyprzedzania, masz prawo kazać rywalowi stanąć — pół minuty w większości klas, minutę w UL. Działa to też w drugą stronę: gdy to ty jesteś wyprzedzany i on się zaplącze, masz obowiązek stanąć na jego żądanie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zaplątanie",
   "plątanina",
   "wyprzedzanie",
   "zatrzymanie rywala",
   "pół minuty",
   "psy w linkach"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.19",
  "tytul": "Zaprzęg stojący na trasie",
  "tresc": "Zaprzęg, który zatrzymał się musi zrobić wszystko, aby zostawić wolny przejazd dla pozostałych zaprzęgów. Limit czasu do ponownego wyprzedzania nie musi być przestrzegany wówczas, gdy wyprzedzający zaprzęg zatrzymuje się z innego powodu niż zaplątanie psów w wyniku wyprzedzania.",
  "wyjasnienie": "Kiedy stoisz na trasie, ściągasz siebie i psy maksymalnie z drogi — inni muszą mieć czym przejechać. Jeśli wyprzedzający zatrzymał się z innego powodu niż plątanina po wyprzedzaniu, nie musisz odczekiwać limitu i możesz go minąć od razu.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "postój na trasie",
   "wolny przejazd",
   "zatrzymanie",
   "wyprzedzanie",
   "limit czasu",
   "blokowanie trasy"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.20",
  "tytul": "Odstęp 15 metrów",
  "tresc": "Jadące za sobą zaprzęgi muszą utrzymywać odstęp co najmniej 15 metrów, z wyjątkiem przypadku wyprzedzania lub strefy finiszowej.",
  "wyjasnienie": "Nie siedź rywalowi na ogonie — trzymaj odstęp. Zbliżyć się możesz tylko wtedy, gdy właśnie wykonujesz manewr wyprzedzania, oraz na finiszu.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "odstęp",
   "15 metrów",
   "jazda za rywalem",
   "dystans",
   "siedzenie na kole",
   "wyprzedzanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.7.21",
  "tytul": "Brak pierwszeństwa na finiszu",
  "tresc": "W strefie finiszowej żaden zaprzęg nie ma pierwszeństwa przejazdu przed innym zaprzęgiem.",
  "wyjasnienie": "Na ostatnim odcinku nikt nikomu nie musi ustępować — kto szybszy, ten lepszy. Nie znaczy to jednak, że wolno ci celowo przeszkadzać rywalowi: zakaz przeszkadzania obowiązuje przez cały wyścig.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "finisz",
   "strefa finiszowa",
   "meta",
   "pierwszeństwo",
   "sprint końcowy",
   "wyprzedzanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.8.0",
  "tytul": "Zachowanie",
  "tresc": "Zachowanie",
  "wyjasnienie": null,
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.8.1",
  "tytul": "Odpowiedzialność za psy i pomocnika",
  "tresc": "Każdy z maszerów odpowiedzialny jest za zachowanie swoich psów, swego pomocnika i swoje własne na terenie wyścigów oraz na trasie. Zobowiązany jest kierować się etyką i zasadami sportowymi.",
  "wyjasnienie": "Odpowiadasz nie tylko za siebie — również za swoje psy i za handlera, i to na całym terenie zawodów, nie tylko na trasie. Jeśli twój pomocnik zachowa się nie fair albo twój pies kogoś zaczepi na stakeoucie, konsekwencje spadają na ciebie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "odpowiedzialność",
   "handler",
   "pomocnik",
   "zachowanie psów",
   "stakeout",
   "etyka",
   "fair play"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "stakeout"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.8.2",
  "tytul": "Zachowanie szkodzące obrazowi sportu",
  "tresc": "Jeśli Sędzia Główny uważa, że zachowanie zawodnika, zaprzęgu czy pomocnika w trakcie trwania zawodów szkodzi obrazowi sportu lub wyścigu zawodnik zostanie zdyskwalifikowany.",
  "wyjasnienie": "To furtka, przez którą Sędzia Główny może wyrzucić cię z zawodów za samo zachowanie — awanturę, chamstwo wobec obsługi, wybryki twojego handlera. Nie ma tu taryfikatora ani stopniowania: kara jest jedna i jest nią dyskwalifikacja.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "zachowanie",
   "dyskwalifikacja",
   "awantura",
   "obraz sportu",
   "niesportowe zachowanie",
   "sędzia główny"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.8.3",
  "tytul": "Zakaz złego traktowania psów",
  "tresc": "Złe traktowanie psów jest zabronione. Jeśli zdaniem Sędziego Głównego maszer źle traktuje psa musi zostać zdyskwalifikowany.",
  "wyjasnienie": "Szarpanie, bicie, kopanie, zmuszanie wyczerpanego psa do dalszego biegu — jeśli Sędzia Główny uzna to za złe traktowanie, musi cię zdyskwalifikować. To nie jest przepis „może\": tu nie ma miejsca na łagodniejszą karę ani na tłumaczenie się emocjami.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "złe traktowanie",
   "znęcanie",
   "dobrostan psów",
   "dyskwalifikacja",
   "bicie psa",
   "welfare"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.9.0",
  "tytul": "Naruszenie regulaminu — sekcja",
  "tresc": "Naruszenie regulaminu.",
  "wyjasnienie": "To sam tytuł sekcji, bez treści. Punkty pod nim mówią, kto zgłasza złamanie przepisów i w jakim czasie trzeba to zrobić.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "naruszenie regulaminu",
   "protest",
   "zgłoszenie",
   "sekcja",
   "nagłówek"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.9.1",
  "tytul": "Zgłoszenia przez osoby funkcyjne",
  "tresc": "Osoby funkcyjne muszą zasygnalizować Sędziemu Głównemu naruszenie regulaminu natychmiast po zajściu lub po zakończeniu etapu, w czasie którego naruszenie to miało miejsce.",
  "wyjasnienie": "To przepis dla sędziów i obsługi trasy — ciebie nie dotyczy wprost. Warto jednak wiedzieć, że osoby funkcyjne zgłaszają incydenty od ręki, więc coś, co zrobiłeś na trasie, może trafić do Sędziego Głównego, zanim w ogóle wjedziesz na metę.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "osoby funkcyjne",
   "sędziowie trasowi",
   "zgłoszenie naruszenia",
   "obsługa",
   "raport"
  ],
  "panele": [
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.9.2",
  "tytul": "Jak zgłosić naruszenie na mecie",
  "tresc": "Maszerzy, którzy chcą zgłosić naruszenie regulaminu przez współzawodnika muszą poinformować o tym osobę funkcyjną na mecie natychmiast po zakończeniu etapu, w czasie którego miał miejsce ten incydent.",
  "wyjasnienie": "Widziałeś, że rywal złamał przepisy? Mówisz o tym osobie funkcyjnej na mecie, od razu po wjeździe — nie po prysznicu, nie wieczorem przy ognisku. Zgłoszone później może w ogóle nie zostać rozpatrzone.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "protest",
   "zgłoszenie naruszenia",
   "meta",
   "skarga na rywala",
   "osoba funkcyjna",
   "termin"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.9.3",
  "tytul": "Pisemny protest w godzinę",
  "tresc": "Po zgłoszeniu ustnym musi zostać złożony pisemny raport do Sędziego Głównego w ciągu godziny po zakończeniu etapu, w czasie którego miało miejsce naruszenie regulaminu.",
  "wyjasnienie": "Zgłoszenie ustne na mecie to dopiero połowa drogi — masz godzinę od zakończenia etapu, żeby złożyć to na piśmie u Sędziego Głównego. Zapisz sobie godzinę zejścia z trasy, żeby nie przegapić terminu.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "protest",
   "raport pisemny",
   "godzina",
   "termin",
   "sędzia główny",
   "zgłoszenie naruszenia"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.9.4",
  "tytul": "Prawo do obrony przed sędzią",
  "tresc": "Każdy z maszerów lub osób funkcyjnych wskazanych w raporcie o naruszeniu regulaminu może zaprotestować i musi zostać wysłuchany przez Sędziego Głównego.",
  "wyjasnienie": "Jeśli ktoś zgłosił coś przeciwko tobie, masz prawo się do tego odnieść, a Sędzia Główny ma obowiązek cię wysłuchać. Nie milcz z obrażoną miną — to twoja jedyna okazja, żeby przedstawić swoją wersję zdarzeń.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "protest",
   "obrona",
   "wysłuchanie",
   "odwołanie",
   "sędzia główny",
   "raport"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10.0",
  "tytul": "Postępowania dyscyplinarne — sekcja",
  "tresc": "Postępowania dyscyplinarne.",
  "wyjasnienie": "To sam tytuł sekcji o karach. Poniżej znajdziesz, jakie kary w ogóle wchodzą w grę, kto je nakłada i kiedy musisz poznać decyzję.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kary",
   "dyscyplina",
   "postępowanie",
   "sekcja",
   "nagłówek"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10.1",
  "tytul": "Jakie kary grożą zawodnikowi",
  "tresc": "Karą nakładaną w trakcie wyścigu za naruszenie regulaminu wyścigowego jest upomnienie, ostrzeżenie lub dyskwalifikacja maszera i zaprzęgu. Ustala ją Sędzia Główny. Nie może zostać zastosowane żadne inne postępowanie dyscyplinarne z wyjątkiem kary czasowej pkt 1.5.6. i 1.7.11.3.",
  "wyjasnienie": "W czasie wyścigu możesz dostać upomnienie, ostrzeżenie albo dyskwalifikację i nic poza tym — nakłada je wyłącznie Sędzia Główny. Jedyne dopuszczalne dodatki to kary czasowe za spóźniony start i za podwiezienie przy szukaniu zbiegłych psów.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "kary",
   "upomnienie",
   "ostrzeżenie",
   "dyskwalifikacja",
   "kara czasowa",
   "sędzia główny",
   "taryfikator"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10.2",
  "tytul": "Termin ogłoszenia decyzji",
  "tresc": "Decyzje muszą być ogłoszone jak najszybciej, najpóźniej na dwie godziny przed startem do następnego etapu.",
  "wyjasnienie": "Nie zostawią cię w niepewności do ostatniej chwili — decyzja ma być ogłoszona najpóźniej dwie godziny przed startem kolejnego etapu. Dzięki temu wiesz, na czym stoisz, zanim zaczniesz szykować psy.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "decyzja",
   "ogłoszenie",
   "dwie godziny",
   "termin",
   "kolejny etap",
   "kary"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10.3",
  "tytul": "Dyscyplina przed rozdaniem nagród",
  "tresc": "Wszelkie działania dyscyplinarne następujące po zakończeniu wyścigu muszą być przeprowadzone przed rozdaniem nagród.",
  "wyjasnienie": "Wszystkie sprawy dyscyplinarne muszą się zamknąć, zanim wręczą puchary. Nie ma więc sytuacji, że stoisz na podium, a wynik zmienia ci się kilka dni po zawodach.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "dekoracja",
   "nagrody",
   "podium",
   "dyscyplina",
   "wyniki",
   "termin"
  ],
  "panele": [
   "sedzia",
   "organizator",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10.4",
  "tytul": "Decyzja sędziego jest ostateczna",
  "tresc": "Decyzja Sędziego Głównego podczas trwania zawodów jest nieodwołalna.",
  "wyjasnienie": "W trakcie zawodów nie ma od czego się odwołać — co Sędzia Główny zdecyduje, to zostaje. Możesz się nie zgadzać, ale awantura o decyzję niczego nie zmieni, za to może dołożyć ci kolejną karę za zachowanie.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "odwołanie",
   "decyzja ostateczna",
   "sędzia główny",
   "protest",
   "nieodwołalna"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10.4.1",
  "tytul": "Odwołanie tylko na Mistrzostwach Polski",
  "tresc": "Podczas zawodów rangi Mistrzostw Polski, regulamin przewiduje szczególny tryb odwołania od decyzji ogłoszonej przez Sędziego Głównego: do Komisji Odwoławczej.",
  "wyjasnienie": "Ta szczególna ścieżka odwoławcza działa wyłącznie na zawodach rangi Mistrzostw Polski. SKYLOS to World Cup IFSS i Puchar Polski, więc tutaj Komisji Odwoławczej nie ma i decyzja Sędziego Głównego jest ostateczna.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "komisja odwoławcza",
   "odwołanie",
   "mistrzostwa polski",
   "protest",
   "ranga zawodów"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.10.4.2",
  "tytul": "Skład Komisji Odwoławczej",
  "tresc": "W skład Komisji Odwoławczej wchodzą 2 osoby spośród sędziów PZSPZ, minimum jedna z uprawnieniami Sędziego Głównego, wyznaczone przez Prezydium Kolegium Sędziów, nie sprawujące funkcji sędziego podczas danych wyścigów mistrzowskich oraz dyrektor dyscypliny, której dotyczy problem.",
  "wyjasnienie": "To przepis organizacyjny o tym, kto zasiada w Komisji Odwoławczej na Mistrzostwach Polski — ciebie nie dotyczy wprost. Na SKYLOS taka komisja i tak nie działa.",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "komisja odwoławcza",
   "skład",
   "sędziowie pzspz",
   "mistrzostwa polski",
   "kolegium sędziów"
  ],
  "panele": [
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "1.11.0",
  "tytul": "Przesunięcie lub odwołanie startu",
  "tresc": "Ze względu na zaistniałą nadzwyczajną sytuację w czasie trwania zawodów Sędzia Główny może podjąć decyzję o przesunięciu startu lub odwołaniu startu danej klasy, klas bądź całego etapu, Sędzia Główny może także podjąć decyzję o unieważnieniu wyników etapu. W/w decyzje muszą być poparte pisemnym uzasadnieniem.",
  "wyjasnienie": "Sędzia Główny może przesunąć start, odwołać całą klasę lub etap, a nawet unieważnić już zrobione wyniki — np. przy burzy, upale groźnym dla psów czy wypadku na trasie. Musi to uzasadnić na piśmie, więc masz prawo poznać konkretny powód, a nie tylko usłyszeć „bo tak\".",
  "sekcja": "rozdzial-1",
  "sekcjaTytul": "Rozdział 1. PRZEPISY OGÓLNE (STOSOWANE DO WSZYSTKICH RODZAJÓW WYŚCIGÓW).",
  "tagi": [
   "odwołanie startu",
   "przesunięcie startu",
   "unieważnienie wyników",
   "pogoda",
   "upał",
   "sędzia główny",
   "nadzwyczajna sytuacja"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "2.1",
  "tytul": "Klasy zaprzęgowe na śniegu",
  "tresc": "Klasy oznaczone są poszczególnymi literami alfabetu. – Zaprzęg w klasie UL (nielimitowanej) liczy co najmniej 9 psów w pierwszym etapie wyścigu i co najmniej 8 psów w następnych etapach – Zaprzęg w klasie AB liczy najwyżej 8 psów i co najmniej 5 psów w pierwszym etapie wyścigu, co najmniej 4 psy w następnych. – Zaprzęg w klasie C liczy najwyżej 4 psy i co najmniej 3 psy w pierwszym etapie wyścigu, co najmniej 2 psy w następnych. – Zaprzęg w klasie D liczy 2 psy.",
  "wyjasnienie": "To podział klas dla zaprzęgów saniowych na śniegu — na SKYLOS nie obowiązuje, bo jedziemy dryland. Jeśli szukasz limitu psów dla swojej konkurencji, nie stosuj tych liczb do siebie.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "klasy",
   "ul",
   "ab",
   "c",
   "d",
   "liczba psów",
   "śnieg",
   "sanie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.1.1",
  "tytul": "Kategorie rasowe 0, 1, 2",
  "tresc": "Cyframi oznaczone są następujące kategorie dla psów w klasach, w których są podziały na rasy tzn. D, C, AB, przy czym: • cyfrą 0 – wszystkie zaprzęgi niezależnie od rasy • cyfrą 1 – zaprzęgi złożona wyłącznie z siberian husky, alaskan malamutów, samojedów, psów grenlandzkich, kanadyjskich psów eskimoskich, łajek jakuckich z rodowodem FCI lub organizacji współpracujących: American Kennel Club, Kennel Club, Canadian Kenel Club. • cyfrą 2 – zaprzęgi złożone z alaskan malamutów, samojedów, psów grenlandzkich, kanadyjskich psów eskimoskich, łajek jakuckich z rodowodem FCI lub organizacji współpracujących: AKC, KC, CKC.",
  "wyjasnienie": "Podział na kategorie rasowe z tego punktu dotyczy wyścigów na śniegu i na SKYLOS nie obowiązuje. Traktuj go jako informację o innym rodzaju zawodów, nie jako regułę dla swojego zgłoszenia.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kategorie rasowe",
   "husky",
   "malamut",
   "samojed",
   "rodowód fci",
   "śnieg",
   "podział na rasy"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.2",
  "tytul": "Wiek zawodników na śniegu",
  "tresc": "Zawodnicy niepełnoletni mogą brać udział w wyścigach wyłącznie za pisemną zgodą rodziców lub opiekunów prawnych: • od 11 lat w klasie D • od 14 lat w klasie C • od 18 w klasie AB i UL",
  "wyjasnienie": "Progi wiekowe z tego punktu dotyczą klas saniowych na śniegu, więc na SKYLOS nie stosujesz ich do siebie. Zasady dla niepełnoletnich w drylandzie sprawdź w komunikacie organizacyjnym zawodów.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wiek",
   "niepełnoletni",
   "zgoda rodziców",
   "młodzież",
   "śnieg",
   "klasy"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.2.1",
  "tytul": "Kask dla niepełnoletnich (śnieg)",
  "tresc": "Zawodnicy niepełnoletni muszą startować w kaskach.",
  "wyjasnienie": "Ten obowiązek kasku zapisany jest w rozdziale o wyścigach na śniegu i na SKYLOS nie obowiązuje wprost. Wymogi sprzętowe dla swojej konkurencji sprawdź w przepisach bezśnieżnych i w komunikacie zawodów.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kask",
   "niepełnoletni",
   "bezpieczeństwo",
   "sprzęt",
   "śnieg",
   "dzieci"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.3.0",
  "tytul": "Wyposażenie",
  "tresc": "Wyposażenie",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.3.1",
  "tytul": "Ustawienie psów w zaprzęgu saniowym",
  "tresc": "Wszystkie psy powinny być zaprzężone w jeden lub dwa rzędy.",
  "wyjasnienie": "To przepis o zaprzęganiu psów do sań na śniegu — na SKYLOS nie obowiązuje. Nie przenoś go na swój wózek, scootera czy rower.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "zaprzęg",
   "ustawienie psów",
   "rzędy",
   "sanie",
   "śnieg",
   "zaprzęganie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.3.2",
  "tytul": "Liny szyjne i ogonowe",
  "tresc": "Wszystkie psy muszą być przypięte do głównej liny ciągowej liną szyjną i liną ogonową z wyjątkiem lidera lub liderów, które muszą być przypięte liną ogonową i mogą biec z lub bez liny szyjnej. Zaleca się, aby główna lina ciągowa była przypięta do sań za pośrednictwem amortyzatora, ale nie jest to obowiązkowe.",
  "wyjasnienie": "Opis linek w zaprzęgu saniowym dotyczy wyścigów na śniegu, więc na SKYLOS ten punkt cię nie obowiązuje. Wymogów dla swojego sprzętu drylandowego szukaj w przepisach bezśnieżnych.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "linka szyjna",
   "linka ogonowa",
   "lina ciągowa",
   "amortyzator",
   "lider",
   "sanie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.3.3",
  "tytul": "Lina bezpieczeństwa przy saniach",
  "tresc": "Zaprzęg musi być wyposażony w linę bezpieczeństwa, długości min 4m, przymocowaną do głównej liny ciągowej. Lina bezpieczeństwa może być użyta do przytrzymania lub przywiązania sań, zabronione jest przywiązywanie się maszera do zaprzęgu.",
  "wyjasnienie": "Ten wymóg dotyczy sań na śniegu i na SKYLOS nie obowiązuje. Zwróć jednak uwagę na samą filozofię: człowiek nigdy nie jest przywiązywany do zaprzęgu na stałe.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "lina bezpieczeństwa",
   "sanie",
   "przywiązanie",
   "bezpieczeństwo",
   "śnieg",
   "sprzęt"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.3.4",
  "tytul": "Konstrukcja i wymiary sań",
  "tresc": "Sanie muszą być tak skonstruowane, aby maszer mógł jechać na nich swobodnie w pozycji stojącej. Minimalna powierzchnia kosza wynosi 40 x 50 cm. Dno kosza powinno być pełne, aby pies mógł być bezpiecznie przewieziony.",
  "wyjasnienie": "Wymogi konstrukcyjne sań to rozdział śniegowy — na SKYLOS nie obowiązują. Twojego pojazdu drylandowego ten punkt w ogóle nie dotyczy.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "sanie",
   "kosz",
   "wymiary",
   "konstrukcja",
   "sprzęt",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.3.5",
  "tytul": "Obowiązkowe wyposażenie sań",
  "tresc": "Sanie muszą być.wyposażone w skuteczny hamulec, kotwicę śnieżną, zderzak, torbę na psa i zwalniacz (brona). W klasie AB i UL wymagane są dwie kotwice śnieżne.",
  "wyjasnienie": "Lista obowiązkowego wyposażenia sań dotyczy wyścigów na śniegu i na SKYLOS nie obowiązuje. Kotwicy śnieżnej ani brony na dryland nie potrzebujesz.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wyposażenie",
   "hamulec",
   "kotwica śnieżna",
   "zderzak",
   "torba na psa",
   "brona",
   "sanie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.3.6",
  "tytul": "Torba na psa — wymogi",
  "tresc": "Torba na psa powinna być odpowiednio wentylowana, a więc posiadać wystarczającą ilość otworów lub siatkę, których powierzchnia wentylacyjna musi wynosić minimum 600 cm2. Torba powinna być tak skonstruowana, aby transportowany pies był w niej całkowicie zamknięty.",
  "wyjasnienie": "Wymogi dla torby transportowej w saniach to przepis śniegowy i na SKYLOS nie obowiązuje. Sens jest jednak uniwersalny: przewożony pies ma mieć czym oddychać i nie może z transportu wypaść.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "torba na psa",
   "wentylacja",
   "transport psa",
   "dobrostan",
   "sanie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.4.0",
  "tytul": "Sposób pokonywania trasy",
  "tresc": "Sposób pokonywania trasy",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.4.1",
  "tytul": "Pozycja maszera na saniach",
  "tresc": "Maszer może stać na płozach sań, odpychać się nogą lub biec według własnego uznania.",
  "wyjasnienie": "To przepis o tym, jak maszer może poruszać się przy saniach na śniegu — na SKYLOS nie obowiązuje. Do swojej konkurencji drylandowej go nie stosuj.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "maszer",
   "płozy",
   "odpychanie",
   "bieg",
   "sanie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.4.2",
  "tytul": "Wypięty pies w torbie",
  "tresc": "Na trasie pies wypięty z zaprzęgu musi być przewożony w torbie.",
  "wyjasnienie": "Zasada przewożenia wypiętego psa w torbie dotyczy sań na śniegu i na SKYLOS nie obowiązuje. Nie czytaj tego jednak jako zgody na zostawienie psa gdziekolwiek na trasie — zasady postępowania z psem w drylandzie znajdziesz w przepisach bezśnieżnych.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wypięty pies",
   "torba na psa",
   "transport psa",
   "zmęczony pies",
   "sanie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.4.3",
  "tytul": "Jeden pies, jedna klasa dziennie",
  "tresc": "Pies, który biegł już danego dnia w jednej klasie nie może wystartować w innej klasie (z wyjątkiem konkurencji dziecięcych). 2.B Przepisy szczegółowe dla dyscypliny pulka i skijoring.",
  "wyjasnienie": "Ten zakaz podwójnego startu psa zapisano w rozdziale śniegowym, więc na SKYLOS nie obowiązuje wprost. Zanim zgłosisz tego samego psa do dwóch konkurencji jednego dnia, sprawdź limity startów w przepisach bezśnieżnych i w komunikacie zawodów.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "podwójny start",
   "jeden pies dwie klasy",
   "limit startów",
   "zgłoszenie",
   "śnieg",
   "obciążenie psa"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.5.0",
  "tytul": "Klasy",
  "tresc": "Klasy",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.5.1",
  "tytul": "Klasy w pulce i skijoringu",
  "tresc": "Zawody mogą być rozgrywane w następujących klasach:",
  "wyjasnienie": "To zdanie wprowadza podział klas w pulce i skijoringu — konkurencjach rozgrywanych na śniegu, na nartach. Na SKYLOS ich nie ma, więc punkt cię nie dotyczy.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "skijoring",
   "klasy",
   "narty",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.5.1.1",
  "tytul": "Klasa jednego psa",
  "tresc": "Pulka, skijoring: klasa 1 pies,",
  "wyjasnienie": "Klasa jednopsia w pulce i skijoringu to konkurencja śniegowa, na SKYLOS nierozgrywana. Ten punkt cię nie dotyczy.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "skijoring",
   "jeden pies",
   "klasa",
   "narty",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.5.1.2",
  "tytul": "Klasa nielimitowana pulka, skijoring",
  "tresc": "Klasa nielimitowana: pulka 2–4 psy; skijoring 2 psy",
  "wyjasnienie": "Limity psów w klasie nielimitowanej pulki i skijoringu dotyczą wyścigów na śniegu. Na SKYLOS tych konkurencji nie ma, więc punkt cię nie dotyczy.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "skijoring",
   "klasa nielimitowana",
   "liczba psów",
   "narty",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.5.2",
  "tytul": "Podział na kobiety i mężczyzn",
  "tresc": "Klasy podzielone są na kobiety i mężczyzn (fakultatywne w wyścigach średnio i długodystansowych).",
  "wyjasnienie": "Ten podział płciowy zapisano dla pulki i skijoringu, czyli konkurencji śniegowych — na SKYLOS nie obowiązuje. Podziału klas w swojej konkurencji szukaj w przepisach bezśnieżnych i w komunikacie zawodów.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "podział na płeć",
   "kobiety",
   "mężczyźni",
   "pulka",
   "skijoring",
   "klasy",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.5.3",
  "tytul": "Minimalny wiek w skijoringu",
  "tresc": "Zawodnicy niepełnoletni mogą brać udział w wyścigach wyłącznie za pisemną zgodą rodziców lub opiekunów prawnych, przy czym minimalny wiek zawodnika wynosi 17 lat.",
  "wyjasnienie": "Próg 17 lat dotyczy pulki i skijoringu, czyli konkurencji na śniegu — na SKYLOS ich nie ma, więc ten limit cię nie dotyczy. Zasady wiekowe dla drylandu sprawdź w komunikacie organizacyjnym.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wiek",
   "17 lat",
   "niepełnoletni",
   "zgoda rodziców",
   "pulka",
   "skijoring",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.0",
  "tytul": "Wyposażenie",
  "tresc": "Wyposażenie",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.1",
  "tytul": "Odpowiedzialność za własny sprzęt",
  "tresc": "Zawodnik odpowiedzialny jest za upewnienie się czy posiadane przez niego wyposażenie spełnia wymogi regulaminu.",
  "wyjasnienie": "Sprawdzenie sprzętu to twoja robota, nie sędziego ani organizatora — jeśli na kontroli wyjdzie usterka, odpowiadasz ty i możesz nie zostać dopuszczony do startu. To rozdział o wyścigach na śniegu (pulka, skijoring), więc na SKYLOS ten punkt nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wyposażenie",
   "sprzęt",
   "kontrola sprzętu",
   "odpowiedzialność",
   "pulka",
   "skijoring",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.2",
  "tytul": "Zaprzęganie psów w pulce i skijoringu",
  "tresc": "Psy muszą być zaprzęgane w: • pulka – pojedynczy szereg • skijoring – mogą biec w parze Pies musi startować w uprzęży, z której samodzielnie nie może się uwolnić.",
  "wyjasnienie": "W pulce psy idą jeden za drugim, w skijoringu mogą biec obok siebie. Uprząż musi trzymać tak, żeby pies sam się z niej nie wysunął — sprawdź to przed startem, luźna uprząż to pies na wolności. Punkt dotyczy wyścigów na śniegu, na SKYLOS go nie stosujesz.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "uprząż",
   "pulka",
   "skijoring",
   "pojedynczy szereg",
   "psy w parze",
   "wypięcie psa",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.3",
  "tytul": "Lina i pas w skijoringu",
  "tresc": "Skijoring - pies musi być. połączony z narciarzem za pomocą liny (długości ok. 2,5m), wyposażonej w amortyzator, którą narciarz przymocowuje do pasa. Pas powinien mieć szerokości co najmniej 7 cm na obszarze stykającym się z kręgosłupem . Do pasa musi być zamocowany w sposób trwały karabińczyk a lina ciągowa od strony maszera kończy się pętlą. Zabronione jest mocowanie pierścienia lub metalowego haczyka na końcu linki.",
  "wyjasnienie": "Zmierz sprzęt przed zawodami: linka około 2,5 m z amortyzatorem, pas szeroki minimum 7 cm w miejscu dotykającym kręgosłupa, karabińczyk wszyty w pas na stałe, a od twojej strony linka kończy się pętlą. Pierścień albo metalowy haczyk na końcu linki są zabronione — z takim zakończeniem sprzęt nie przejdzie kontroli. To przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "skijoring",
   "lina",
   "amortyzator",
   "pas biodrowy",
   "karabińczyk",
   "pętla",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.4",
  "tytul": "Wymagania dla pulki — wstęp",
  "tresc": "Pulka musi być:",
  "wyjasnienie": "To tylko nagłówek listy wymagań wobec pulki, konkrety są w punktach poniżej. Cała ta część dotyczy wyścigów na śniegu i na SKYLOS nie ma zastosowania.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "wyposażenie",
   "nagłówek",
   "sanki",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.4.1",
  "tytul": "Pulka na dwóch dyszlach",
  "tresc": "połączona z uprzężą dwoma dyszlami w taki sposób, aby nie mogła najechać na zaprzężonego psa;",
  "wyjasnienie": "Pulki nie wolno ciągnąć na samej linie — muszą być dwa dyszle, żeby na zjeździe czy przy hamowaniu nie wjechała psu w tył. Przepis dla wyścigów na śniegu, na SKYLOS nieaktualny.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "dyszle",
   "bezpieczeństwo psa",
   "zjazd",
   "konstrukcja",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.4.2",
  "tytul": "Czubki płóz między dyszlami",
  "tresc": "zbudowana w taki sposób, aby czubki płóz znajdowały się między dyszlami;",
  "wyjasnienie": "Kupując albo budując pulkę zwróć uwagę na geometrię: przód płóz ma się mieścić między dyszlami, żeby nic nie wystawało na boki i o nic nie zahaczało. Dotyczy wyścigów na śniegu, nie SKYLOS.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "płozy",
   "dyszle",
   "konstrukcja",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.4.3",
  "tytul": "Mocowanie obciążenia w pulce",
  "tresc": "wyposażona w taki sposób, by obciążenie mogło być stabilnie umocowane;",
  "wyjasnienie": "Balast musi być przypięty tak, żeby się nie przesuwał ani nie wypadł na trasie — luźno wrzucony ciężar odpada. Przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "balast",
   "obciążenie",
   "mocowanie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.4.4",
  "tytul": "Lina i pas przy pulce",
  "tresc": "wyposażona w linę, którą narciarz przymocowuje do pasa. Pas powinien mieć szerokości co najmniej 7 cm na obszarze stykającym się z kręgosłupem oraz otwarty zaczep lub karabińczyk umożliwiający szybkie wypięcie, aby łatwo można było odczepić. Zabronione jest mocowanie pierścienia lub metalowego haczyka na końcu linki.",
  "wyjasnienie": "Pas ma mieć minimum 7 cm szerokości na kręgosłupie i zaczep do szybkiego wypięcia — chodzi o to, żebyś przy wywrotce odczepił się od pulki jednym ruchem. Pierścienia ani metalowego haczyka na końcu linki mieć nie możesz. To przepis śniegowy, na SKYLOS nie ma zastosowania.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "pas biodrowy",
   "szybkie wypięcie",
   "karabińczyk",
   "lina",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.5",
  "tytul": "Hamulec w pulce od trzech psów",
  "tresc": "Pulki, do których zaprzęgane są trzy i więcej psów, muszą być wyposażone w hamulec.",
  "wyjasnienie": "Jeśli zaprzęgasz trzy psy lub więcej, pulka bez hamulca nie przejdzie kontroli sprzętu. Punkt dotyczy wyścigów na śniegu — na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "hamulec",
   "trzy psy",
   "wyposażenie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.6",
  "tytul": "Minimalny ciężar pulki",
  "tresc": "Całkowity minimalny ciężar pulki wynosi: 1 pies – waga psa x 0,7 2 psy – waga obu psów x 0,7 3 psy – waga trzech psów x 0,6 4 psy – waga czterech psów x 0,5",
  "wyjasnienie": "Zważ psy i policz wymagany ciężar zawczasu — im więcej psów, tym niższy mnożnik, ale ciężar całkowity i tak rośnie. Balast dobierz tak, żeby waga zgadzała się na kontroli, a nie na oko. Przepis dla wyścigów na śniegu, na SKYLOS nieaktualny.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "waga",
   "ciężar",
   "balast",
   "mnożnik",
   "kontrola wagi",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.7",
  "tytul": "Co wlicza się do ciężaru pulki",
  "tresc": "Do ciężaru pulki zalicza się ciężar pulki, dyszli, uprzęży, lin i balastu.",
  "wyjasnienie": "Do normy liczy się cała konfiguracja — sama pulka, dyszle, uprząż i liny — więc balastu dokładasz tylko tyle, ile brakuje do wymaganej wagi. To przepis śniegowy, na SKYLOS się go nie stosuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "waga",
   "ciężar",
   "balast",
   "uprząż",
   "dyszle",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.8",
  "tytul": "Balast we własnym zakresie",
  "tresc": "Zawodnik zobowiązany jest do zaopatrzenia się w balast we własnym zakresie.",
  "wyjasnienie": "Organizator nie da ci obciążenia — przywozisz swoje i sam odpowiadasz za to, żeby było. Punkt dotyczy wyścigów na śniegu i na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "balast",
   "obciążenie",
   "pulka",
   "własny sprzęt",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.6.9",
  "tytul": "Narty i kijki",
  "tresc": "Zawodnik może wystartować wyłącznie na nartach biegowych, pozbawionych ostrych krawędzi i okutych czubów. Podczas każdego etapu zawodnik może wymienić tylko jedną nartę. Kijki mogą być wymieniane zawsze, gdy zajdzie taka potrzeba.",
  "wyjasnienie": "Startujesz wyłącznie na biegówkach bez ostrych krawędzi i bez okutych czubów — zjazdówki czy narty skiturowe odpadają, bo mogą zranić psa. Na jednym etapie wymienisz tylko jedną nartę, kijki możesz wymieniać bez ograniczeń. Przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "narty",
   "biegówki",
   "kijki",
   "wymiana narty",
   "krawędzie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.0",
  "tytul": "Start i zachowanie na trasie",
  "tresc": "Start i zachowanie na trasie",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.1",
  "tytul": "Nie ciągniesz psa i nie biegniesz przed nim",
  "tresc": "Zawodnik nie może ciągnąć psa/psów i biec przed nim/nimi. Może on pomóc psu/psom ciągnąc lub popychając pulkę.",
  "wyjasnienie": "Pies ma ciągnąć ciebie, nie odwrotnie — nie wolno wyprzedzić psa ani holować go za sobą. Możesz natomiast pomagać sobie i psu, ciągnąc albo pchając pulkę. Punkt z rozdziału o wyścigach na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "ciągnięcie psa",
   "wyprzedzanie psa",
   "pomoc psu",
   "pulka",
   "skijoring",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.2",
  "tytul": "Pies niezdolny do biegu — nie kończysz etapu",
  "tresc": "Jeśli pies nie jest zdolny do dalszego biegu, zawodnikowi nie wolno ukończyć etapu.",
  "wyjasnienie": "Jeśli pies nie jest w stanie biec dalej, nie wolno ci dojechać do mety — etap przerywasz. Dowiezienie wyniku mimo niesprawnego psa jest złamaniem regulaminu, nie sprytem. To przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontuzja psa",
   "niezdolny pies",
   "przerwanie etapu",
   "dobrostan psa",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.3",
  "tytul": "Pozycja przed sygnałem startu",
  "tresc": "Na pozycji startowej zawodnik musi znajdować się przed linią startu, aż do uzyskania sygnału startu.",
  "wyjasnienie": "Ustawiasz się i czekasz — do sygnału nie przekraczasz linii startu. Ruszenie wcześniej to falstart z konsekwencjami opisanymi w kolejnym punkcie. Punkt z rozdziału śniegowego, na SKYLOS nie ma zastosowania.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "start",
   "linia startu",
   "falstart",
   "pozycja startowa",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.4",
  "tytul": "Falstart i powrót na linię",
  "tresc": "Jeśli zaprzęg wystartuje przed sygnałem startu, musi powrócić na linię startu. Powtórny start powinien nastąpić najszybciej jak to możliwe, ale nie mniej niż 10 sekund przed lub po starcie kolejnego zaprzęgu.",
  "wyjasnienie": "Jeśli psy wyrwą przed sygnałem, wracasz na linię i startujesz ponownie najszybciej, jak się da. Nie ruszysz jednak w oknie 10 sekund przed startem kolejnego zaprzęgu ani 10 sekund po nim — trzeba odczekać. Przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "falstart",
   "start przed sygnałem",
   "powrót na linię",
   "10 sekund",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.5",
  "tytul": "Spóźnienie na start",
  "tresc": "Zaprzęg spóźniony na start będzie mógł wystartować jak tylko będzie gotowy, ale nie mniej niż 10 sekund przed lub po starcie kolejnego zaprzęgu.",
  "wyjasnienie": "Spóźnienie nie eliminuje cię automatycznie — wystartujesz, kiedy będziesz gotowy, z zachowaniem 10-sekundowego odstępu od startu kolejnego zaprzęgu. To nie znaczy, że warto ryzykować: czekać musisz ty, nie zawody. Punkt dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "spóźnienie",
   "spóźniony start",
   "late start",
   "10 sekund",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.6",
  "tytul": "Rodzaje startu — wstęp",
  "tresc": "Start może być:",
  "wyjasnienie": "Nagłówek listy: dwa dopuszczalne rodzaje startu opisane są w punktach poniżej. Dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "start",
   "rodzaje startu",
   "nagłówek",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.6.1",
  "tytul": "Start pojedynczy",
  "tresc": "pojedynczy – zawodnicy startują w równych odstępach czasowych, wynoszących 30, 60, 90 lub 120 sekund. Decyzję podejmuje Sędzia Główny.",
  "wyjasnienie": "Ruszasz sam, w równym odstępie od poprzednika — 30, 60, 90 albo 120 sekund, o czym decyduje Sędzia Główny, więc odstęp poznasz dopiero przed zawodami. Przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "start pojedynczy",
   "interwał",
   "odstęp startowy",
   "sędzia główny",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.6.2",
  "tytul": "Start masowy",
  "tresc": "masowy – zawodnicy startują równocześnie. Jeśli ilość zawodników to umożliwia, przeprowadza się jednoczesny start wszystkich z jednej linii. Jeśli nie jest to możliwe organizator ma obowiązek przygotować dwie lub więcej linii startu. Odstęp pomiędzy liniami powinien wynosić 10 metrów.",
  "wyjasnienie": "Wszyscy ruszają naraz; jeśli zawodników jest za dużo na jedną linię, organizator przygotowuje kolejne, oddalone o 10 metrów. Dla ciebie oznacza to tłok na pierwszych metrach — pilnuj psa i lin. To przepis dla wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "start masowy",
   "masówka",
   "linie startu",
   "tłok na starcie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.7",
  "tytul": "Starter z dwiema flagami",
  "tresc": "Sygnał startu przy starcie masowym dawany jest dwiema flagami przez startera, który musi stać w miejscu widocznym dla wszystkich zawodników.",
  "wyjasnienie": "Przy starcie masowym sygnał jest wzrokowy, nie dźwiękowy — patrz na startera, który stoi w miejscu widocznym dla wszystkich. Ustaw się tak, żebyś go widział, bo nikt cię nie zawoła. Punkt z rozdziału śniegowego, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "starter",
   "flagi",
   "start masowy",
   "sygnał startu",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.7.1",
  "tytul": "Odliczanie do startu masowego",
  "tresc": "Sygnał startu podawany jest w sposób następujący: • 1 minutę przed startem pokazuje „1” • 30 sekund przed startem starter ustawia ręce nad głową • 15 sekund przed startem starter opuszcza ręce do wysokości ramion • sygnał start – starter energicznie opuszcza jednocześnie obie ręce.",
  "wyjasnienie": "Zapamiętaj cztery gesty, bo komendy głosowej nie będzie: „1” na minutę przed, ręce nad głową na 30 sekund, ręce na wysokości ramion na 15 sekund, a energiczne opuszczenie obu rąk to już start. Dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "odliczanie",
   "sygnał startu",
   "gesty startera",
   "start masowy",
   "flagi",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.8",
  "tytul": "Bieg na dochodzenie",
  "tresc": "Bieg na dochodzenie (wyścig musi składać się z co najmniej dwóch etapów)",
  "wyjasnienie": "Nagłówek formuły, która wymaga co najmniej dwóch etapów — szczegóły w punktach poniżej. Dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "bieg na dochodzenie",
   "pościgowy",
   "etapy",
   "nagłówek",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.8.1",
  "tytul": "Pierwszy etap biegu na dochodzenie",
  "tresc": "Do pierwszego etapu start jest pojedynczy i odbywa się według normalnych zasad",
  "wyjasnienie": "Pierwszego dnia nic się nie zmienia — start pojedynczy, zwykłe odstępy. Cała różnica pojawia się dopiero przy starcie do drugiego etapu. Przepis dla wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "bieg na dochodzenie",
   "pierwszy etap",
   "start pojedynczy",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.7.8.2",
  "tytul": "Drugi etap — start ze stratą z etapu pierwszego",
  "tresc": "Start do drugiego etapu zawodnicy startują w odstępach czasowych równych różnicom czasów uzyskanych w poprzednim etapie.",
  "wyjasnienie": "Do drugiego etapu ruszasz dokładnie z taką stratą, jaką miałeś po pierwszym — dzięki temu kolejność na mecie jest kolejnością końcową i nie musisz liczyć czasów. Przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "bieg na dochodzenie",
   "drugi etap",
   "strata czasowa",
   "pościg",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.8",
  "tytul": "Długości tras — wstęp",
  "tresc": "Minimalne i maksymalne długości tras:",
  "wyjasnienie": "Nagłówek zestawienia dystansów; konkretne widełki są w punktach poniżej. Dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "dystans",
   "długość trasy",
   "nagłówek",
   "kilometry",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.8.1",
  "tytul": "Dystanse zaprzęgów na śniegu",
  "tresc": "Zaprzęgi na śniegu: Klasa nielimitowana: 14 – 20 km Klasa 6-8 psów: 10 – 14 km Klasa 4 psy: 6 – 10 km Klasa 2 psy: 4 – 6 km",
  "wyjasnienie": "Widełki kilometrów dla klas zaprzęgowych na śniegu — im większy zaprzęg, tym dłuższa trasa. To przepis dla organizatora układającego trasę zimową; na SKYLOS obowiązują dystanse dryland, nie te.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "dystans",
   "kilometry",
   "klasa nielimitowana",
   "zaprzęgi",
   "trasa",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.8.2",
  "tytul": "Dystanse dyscyplin narciarskich",
  "tresc": "Dyscypliny narciarskie",
  "wyjasnienie": "Nagłówek — widełki dla pulki i skijoringu znajdziesz w punktach poniżej. Dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "dystans",
   "narciarskie",
   "pulka",
   "skijoring",
   "nagłówek",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.8.2.1",
  "tytul": "Dystanse w klasach z jednym psem",
  "tresc": "Klasy z jednym psem Juniorzy: 5–10 km Seniorzy i Weterani: 5–20 km",
  "wyjasnienie": "Junior pojedzie od 5 do 10 km, senior i weteran nawet do 20 km — sprawdź, w której kategorii jesteś, zanim ułożysz plan startowy. Przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "dystans",
   "jeden pies",
   "junior",
   "senior",
   "weteran",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.8.2.2",
  "tytul": "Dystanse w klasach 2-4 psy",
  "tresc": "Klasy 2-4 psy Seniorzy i Weterani: 10–30 km",
  "wyjasnienie": "Widełki są bardzo szerokie (10-30 km), więc konkretny dystans poznasz z regulaminu danych zawodów, nie z tego punktu. Kategorii juniorskiej regulamin tu nie przewiduje. Dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "dystans",
   "2-4 psy",
   "senior",
   "weteran",
   "kilometry",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.8.2.3",
  "tytul": "Dystans sztafety na śniegu",
  "tresc": "Sztafeta: 5–10 km",
  "wyjasnienie": "Sztafeta w dyscyplinach narciarskich mieści się w przedziale 5-10 km. To pozycja z przepisów śniegowych — sztafety na SKYLOS ten dystans nie dotyczy.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "sztafeta",
   "dystans",
   "kilometry",
   "narciarskie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.9.0",
  "tytul": "Trasa",
  "tresc": "Trasa",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.9.1",
  "tytul": "Szerokość trasy i strefy finiszu",
  "tresc": "Ostatnie 150 metrów trasy muszą być na tyle szerokie, aby dwaj konkurenci mogli swobodnie jechać obok siebie (minimum 8 metrów). W miarę możliwości cała trasa powinna być szerokości min 4 m.",
  "wyjasnienie": "To zadanie organizatora, nie twoje: ostatnie 150 metrów ma mieć co najmniej 8 metrów szerokości, żeby dwie osoby mogły finiszować obok siebie. Dla ciebie oznacza to, że na finiszu jest miejsce na walkę i nie masz powodu spychać rywala. Przepis dla wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "szerokość trasy",
   "finisz",
   "150 metrów",
   "trasa",
   "organizator",
   "śnieg"
  ],
  "panele": [
   "organizator",
   "sedzia",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.9.2",
  "tytul": "Ostrożność przy wyprzedzaniu",
  "tresc": "W trakcie wyprzedzania należy zachować szczególną ostrożność. 2.C. Przepisy szczegółowe dla wyścigów średnio i długodystansowych.",
  "wyjasnienie": "Przepis nie opisuje żadnej procedury — nakłada na ciebie wprost obowiązek szczególnej ostrożności przy mijaniu, więc odpowiedzialność za bezpieczny manewr jest po twojej stronie. Zdanie doklejone na końcu („2.C.”) to już nagłówek następnego podrozdziału, nie treść tego punktu. Cała ta część dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wyprzedzanie",
   "mijanie",
   "ostrożność",
   "bezpieczeństwo",
   "trasa",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.10",
  "tytul": "Warunki uczestnictwa — wstęp",
  "tresc": "Warunki uczestnictwa",
  "wyjasnienie": "Nagłówek podrozdziału o śniegowych wyścigach średnio- i długodystansowych; same warunki są w punktach poniżej.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "warunki uczestnictwa",
   "nagłówek",
   "średni dystans",
   "długi dystans",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.10.1",
  "tytul": "Wiek w wyścigach dystansowych",
  "tresc": "Zawodnicy muszą mieć ukończone 18 lat w klasie 4-12 psów oraz 19 lat dla klasy pulka. Zawodnicy niepełnoletni od 16 roku życia mogą brać udział w wyścigach wyłącznie za zgodą opiekunów prawnych.",
  "wyjasnienie": "Na średnie i długie dystanse na śniegu wchodzisz po 18. urodzinach, a w klasie pulka dopiero po 19.; od 16 lat możesz startować wyłącznie za zgodą opiekunów prawnych. Przepis śniegowy — na SKYLOS obowiązują limity wieku z przepisów dryland.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wiek",
   "18 lat",
   "19 lat",
   "niepełnoletni",
   "zgoda opiekunów",
   "pulka",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.10.2",
  "tytul": "Obowiązkowa odprawa zawodników",
  "tresc": "Zawodnicy mają obowiązek uczestniczenia w odprawie przed wyścigiem. Jest to warunkiem uczestnictwa w wyścigu.",
  "wyjasnienie": "Odprawa nie jest opcjonalna — bez niej nie masz prawa startu, więc traktuj ją jak część zawodów i zjaw się na czas. Ten konkretny punkt jest śniegowy, ale identyczny obowiązek stoi w przepisach dryland, więc na SKYLOS odprawa też jest warunkiem uczestnictwa.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "odprawa",
   "briefing",
   "obowiązek",
   "warunek startu",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.11",
  "tytul": "Podział na klasy — wstęp",
  "tresc": "Podział na klasy:",
  "wyjasnienie": "Nagłówek listy klas w śniegowych wyścigach średnio- i długodystansowych; konkretne klasy są w punktach poniżej.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "klasy",
   "podział",
   "nagłówek",
   "średni dystans",
   "długi dystans",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.11.1",
  "tytul": "Klasy w wyścigach średniodystansowych",
  "tresc": "Wyścigi średniodystansowe: • 4 psy (na starcie pierwszego etapu, min 3 w pozostałych etapach) dla wyścigów rozgrywanych na trasach w formule popularyzatorskiej, • 4-6 psów przez cały czas trwania zawodów, • 7-12 psów przez cały czas trwania zawodów, • pulka 1-4 psów.",
  "wyjasnienie": "Zwróć uwagę na liczby psów podane „przez cały czas trwania zawodów” — w klasach 4-6 i 7-12 nie możesz zejść poniżej dolnej granicy na żadnym etapie. Wyjątek jest tylko w formule popularyzatorskiej: 4 psy na starcie pierwszego etapu, minimum 3 w kolejnych. Przepisy śniegowe, na SKYLOS nie obowiązują.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "klasy",
   "liczba psów",
   "średni dystans",
   "popularyzatorska",
   "etapy",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.11.2",
  "tytul": "Podział na kategorie w klasach dystansowych",
  "tresc": "W w/w klasach organizator może przewidzieć podział na kategorie jak w wyścigach sprinterskich.",
  "wyjasnienie": "To decyzja organizatora, nie twoja — może, ale nie musi, dzielić te klasy na kategorie tak jak w sprincie. Sprawdź w regulaminie konkretnych zawodów, czy podział jest. Przepis dla wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kategorie",
   "podział",
   "organizator",
   "sprint",
   "średni dystans",
   "śnieg"
  ],
  "panele": [
   "organizator",
   "biuro",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.11.3",
  "tytul": "Klasy w wyścigach długodystansowych",
  "tresc": "Wyścigi długodystansowe: • klasa nielimitowana: min 9 w pierwszym, min 8 w kolejnych etapach • klasa limitowana: min 7, a max 8 psów w pierwszym etapie, min 6 w kolejnych etapach.",
  "wyjasnienie": "Kluczowe są tu minima psów na kolejnych etapach — jeśli po pierwszym etapie zejdziesz poniżej progu swojej klasy, nie ruszysz dalej. Planując skład, zostaw sobie zapas na wypadek wypięcia psa. Przepisy śniegowe, na SKYLOS nie obowiązują.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "klasy",
   "długi dystans",
   "liczba psów",
   "nielimitowana",
   "limitowana",
   "etapy",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.11.4",
  "tytul": "Wymiana psów przy wielu etapach",
  "tresc": "W wyścigach długodystansowych i średniodystansowych rozgrywanych w formule powyżej dwóch etapów przysługuje możliwość wymiany 2 psów.",
  "wyjasnienie": "Przy formule powyżej dwóch etapów masz prawo wymienić dwa psy — to jedyna furtka, więc zaplanuj, kiedy z niej skorzystasz. Punkt z rozdziału śniegowego, na SKYLOS nie ma zastosowania.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wymiana psów",
   "dwa psy",
   "etapy",
   "długi dystans",
   "średni dystans",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.0",
  "tytul": "Wyposażenie",
  "tresc": "Wyposażenie",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.1",
  "tytul": "Podszycie uprzęży",
  "tresc": "Wszystkie uprzęże muszą być podszyte wokół szyi i na wysokości klatki piersiowej.",
  "wyjasnienie": "Przejrzyj uprzęże przed wyjazdem — przetarte albo pozbawione podszycia w okolicy szyi i klatki piersiowej nie przejdą kontroli, a na długim dystansie i tak obtarłyby psa. Przepis dla śniegowych wyścigów dystansowych, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "uprząż",
   "podszycie",
   "otarcia",
   "kontrola sprzętu",
   "dobrostan psa",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.2",
  "tytul": "Zatwierdzenie sań przez Sędziego Głównego",
  "tresc": "Wybór typu sań należy do maszera, ale muszą być zaaprobowane przez Sędziego Głównego.",
  "wyjasnienie": "Typ sań wybierasz sam, ale ostatnie słowo ma Sędzia Główny — nie zakładaj, że własna konstrukcja przejdzie bez pytania. Zgłoś się na kontrolę z zapasem czasu, żeby mieć jeszcze możliwość reakcji. Przepis dla wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "sanie",
   "zatwierdzenie",
   "sędzia główny",
   "kontrola sprzętu",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.3",
  "tytul": "Wymiana sań na punkcie kontrolnym",
  "tresc": "Sanie mogą być wymieniane w przewidzianych punktach kontrolnych.",
  "wyjasnienie": "Sanie możesz zmienić, ale wyłącznie na przewidzianych do tego punktach kontrolnych — nie gdziekolwiek na trasie. Zaplanuj, gdzie podstawisz zapasowe. Punkt z przepisów śniegowych, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "sanie",
   "wymiana sań",
   "punkt kontrolny",
   "checkpoint",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.4",
  "tytul": "Obowiązkowe wyposażenie sań",
  "tresc": "Sanie muszą być wyposażone w dwie kotwice, hamulec, matę śnieżną (bronę) i linę bezpieczeństwa.",
  "wyjasnienie": "Cztery rzeczy bez dyskusji: dwie kotwice, hamulec, mata śnieżna i lina bezpieczeństwa. Brak którejkolwiek to niespełnienie wymogów wyposażenia i sprzęt nie zostanie dopuszczony. Przepis dla wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "sanie",
   "kotwica",
   "hamulec",
   "brona",
   "lina bezpieczeństwa",
   "wyposażenie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.5",
  "tytul": "Apteczka, nóż i kombinerki",
  "tresc": "Sanie muszą być wyposażone w podstawową apteczkę, nóż, kombinerki – jeżeli maszer używa lin ciągowych ze stalowym rdzeniem.",
  "wyjasnienie": "Podstawowa apteczka i nóż jadą z tobą zawsze, a kombinerki dochodzą wtedy, gdy używasz lin ciągowych ze stalowym rdzeniem — bo takiej liny nożem nie przetniesz, gdy pies się w niej zaplącze. Przepis dla śniegowych wyścigów dystansowych, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "apteczka",
   "nóż",
   "kombinerki",
   "liny stalowe",
   "wyposażenie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.6",
  "tytul": "Wyposażenie wymagane przez organizatora",
  "tresc": "Organizator może wymagać, aby w wyposażeniu sań znajdowały się: • buty dla psów; • zapasowa uprząż, obroża; • śpiwór, płachta biwakowa; • ciepłe ubranie (parka, buty, rękawiczki, skarpety itp.); • kompas, latarka, zapałki i podpałka do ognia; • naczynia kuchenne; • piła i siekiera; • system uwiązania psów; • para rakiet śnieżnych z wiązaniami; • dzienna racji pokarmu dla każdego psa oraz maszera.",
  "wyjasnienie": "To lista, z której organizator MOŻE, ale nie musi coś wybrać — sam regulamin niczego z niej nie nakazuje. Przed wyjazdem sprawdź komunikat konkretnych zawodów, bo dopiero on mówi, co realnie musisz mieć na saniach. Dotyczy wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wyposażenie",
   "organizator",
   "biwak",
   "buty dla psów",
   "śpiwór",
   "karma",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.7",
  "tytul": "Numer startowy maszera",
  "tresc": "Maszer obowiązany jest nosić. numer w sposób określony przez Sędziego Głównego.",
  "wyjasnienie": "Numer masz nosić w sposób wskazany przez Sędziego Głównego — nie tam, gdzie ci wygodnie. Po nim identyfikują cię na trasie i na punktach kontrolnych. Punkt z rozdziału śniegowego, na SKYLOS obowiązują przepisy dryland.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "numer startowy",
   "maszer",
   "sędzia główny",
   "identyfikacja",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.12.8",
  "tytul": "Minimalny ciężar przewożony na pulce",
  "tresc": "Całkowity minimalny ciężar przewożony na pulce wynosi: 1 pies – waga psa x 0,7 2 psy – waga obu psów x 0,7 3 psy – waga trzech psów x 0,6 4 psy – waga czterech psów x 0,5",
  "wyjasnienie": "Ta sama tabela mnożników co w przepisach sprinterskich, tylko że obowiązuje w wyścigach średnio- i długodystansowych. Policz ciężar dla swojej liczby psów przed wyjazdem, a nie na miejscu. Przepis dla wyścigów na śniegu, na SKYLOS nie obowiązuje.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pulka",
   "waga",
   "ciężar",
   "balast",
   "mnożnik",
   "długi dystans",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.0",
  "tytul": "Na trasie — wstęp",
  "tresc": "Na trasie.",
  "wyjasnienie": "Nagłówek części o zachowaniu na trasie w śniegowych wyścigach dystansowych; zasady są w punktach poniżej.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "trasa",
   "zachowanie",
   "nagłówek",
   "długi dystans",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.1",
  "tytul": "Zjechanie z trasy",
  "tresc": "Jeśli zaprzęg zjedzie z trasy maszer musi wrócić z zaprzęgiem do miejsca, w którym opuścił trasę lub jeśli nie jest to możliwe bez skrócenia trasy i ominięcia punktu kontrolnego, kontynuować bieg do następnego punktu kontrolnego.",
  "wyjasnienie": "Jeśli zgubisz trasę, wracasz zaprzęgiem dokładnie tam, gdzie z niej zjechałeś. Powrót inną drogą wchodzi w grę tylko wtedy, gdy nie skracasz trasy i nie omijasz punktu kontrolnego — wtedy jedziesz do najbliższego punktu. Skrót w żadnym wariancie nie jest opcją. Przepis dla wyścigów na śniegu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "zjechanie z trasy",
   "zgubienie trasy",
   "skracanie trasy",
   "punkt kontrolny",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.2",
  "tytul": "Zakaz pomocy z zewnątrz przy psach",
  "tresc": "Żadnemu z zawodników nie wolno przyjąć pomocy z zewnątrz przy zajmowaniu się psami, oprócz pomocy dopuszczonej przez Sędziego Głównego i oferowanej wszystkim zawodnikom.",
  "wyjasnienie": "Nikt spoza zawodów nie może ci pomagać przy psach — ani handler na stakeoucie, ani rodzina na punkcie kontrolnym. Jedyny wyjątek to pomoc dopuszczona przez Sędziego Głównego i zaoferowana wszystkim zawodnikom na równych zasadach; przyjęcie innej to złamanie regulaminu. Punkt z rozdziału śniegowego, na SKYLOS obowiązują przepisy dryland.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pomoc z zewnątrz",
   "handler",
   "obsługa psów",
   "stakeout",
   "punkt kontrolny",
   "równe zasady",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "stakeout",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.3",
  "tytul": "Pierwszeństwo po wycofaniu",
  "tresc": "Zaprzęg zdyskwalifikowany lub który wycofał się z wyścigu musi ustąpić pierwszeństwa wszystkim zaprzęgom kontynuującym wyścig.",
  "wyjasnienie": "Rozdział 2 dotyczy wyłącznie wyścigów na śniegu — na SKYLOS ten przepis nie obowiązuje. Sens jest taki: gdy odpadłeś z rywalizacji, przestajesz się liczyć na trasie i schodzisz z drogi każdemu, kto wciąż jedzie na czas.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wycofanie",
   "dyskwalifikacja",
   "pierwszeństwo",
   "wyprzedzanie",
   "trasa",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.4",
  "tytul": "Zgłoszenie się po wycofaniu",
  "tresc": "Maszer zdyskwalifikowany lub który wycofał się z wyścigu musi dojechać do następnego lub najbliższego punktu kontrolnego i zgłosić się do osoby funkcyjnej.",
  "wyjasnienie": "To przepis śnieżny — na SKYLOS nie obowiązuje. Idea: nie znikasz z trasy na własną rękę, tylko meldujesz się osobie funkcyjnej, żeby organizator wiedział, że jesteś bezpieczny i nie zaczął cię szukać.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wycofanie",
   "dyskwalifikacja",
   "punkt kontrolny",
   "zgłoszenie",
   "dnf",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.5",
  "tytul": "Kiedy działają przepisy wypadkowe",
  "tresc": "Przepisy dotyczące nagłych wypadków mają zastosowanie w sytuacji, gdy zawodnik fizycznie nie jest w stanie kontynuować wyścigu.",
  "wyjasnienie": "Przepis ze śnieżnej części regulaminu — na SKYLOS nie obowiązuje. Wyznacza granicę: procedury awaryjne włączają się dopiero wtedy, gdy fizycznie nie dajesz rady jechać dalej, a nie gdy po prostu odpuszczasz.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wypadek",
   "nagły wypadek",
   "kontuzja",
   "wycofanie",
   "pomoc",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.6",
  "tytul": "Zakaz śmiecenia na trasie",
  "tresc": "Na trasie i jej obrzeżach trasy nie wolno pozostawiać żadnych odpadków.",
  "wyjasnienie": "Formalnie przepis dla wyścigów na śniegu, ale zasada na SKYLOS jest dokładnie ta sama: co wyjąłeś na trasie, wraca z tobą. Opakowania po żelach i butelki nie mogą też wylądować w krzakach obok ścieżki.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "śmieci",
   "odpadki",
   "trasa",
   "czystość",
   "ekologia",
   "śnieg"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.7",
  "tytul": "Sprzątanie obozowiska",
  "tresc": "Obozowiska powinny być dokładnie sprzątnięte przed odjazdem zaprzęgu.",
  "wyjasnienie": "Przepis śnieżny; jego odpowiednikiem na SKYLOS jest twoje miejsce na stakeout. Zanim ruszysz dalej, zostawiasz je puste i czyste — łącznie z odchodami psów.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "obozowisko",
   "stakeout",
   "sprzątanie",
   "śmieci",
   "odchody",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "stakeout"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.8",
  "tytul": "Śmieci tylko w wyznaczone miejsca",
  "tresc": "Zawodnicy muszą pozbywać się śmieci w miejscach wyznaczonych do tego celu przez organizatora.",
  "wyjasnienie": "Przepis z części śnieżnej, ale sens jest uniwersalny: nie wystarczy, że posprzątasz po sobie. Odpady trafiają tam, gdzie wskazał organizator, a nie do pierwszego napotkanego kosza czy do lasu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "śmieci",
   "odpady",
   "kosze",
   "organizator",
   "stakeout",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.13.9",
  "tytul": "Wolny przejazd przy obozie",
  "tresc": "Zawodnicy zakładający obóz w pobliżu trasy muszą pozostawić na niej przejazd wolny od psów i jakichkolwiek sprzętów.",
  "wyjasnienie": "Przepis śnieżny — na SKYLOS nie obowiązuje wprost. Chodzi o to, żeby rozkładając się przy trasie nie zwęzić jej psami, linkami ani sprzętem tym, którzy właśnie się ścigają.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "obozowisko",
   "stakeout",
   "trasa",
   "bezpieczeństwo",
   "przejazd",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "stakeout"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.0",
  "tytul": "Punkty kontrolne",
  "tresc": "Punkty kontrolne",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.1",
  "tytul": "Depozyt karmy na punktach",
  "tresc": "Własne zaopatrzenie oraz karmę dla psów w zamkniętych kontenerach zawodnicy muszą mieć zdeponowane na punktach kontrolnych wyznaczonych przez Sędziego Głównego.",
  "wyjasnienie": "To przepis dla długich wyścigów na śniegu z punktami kontrolnymi — na SKYLOS czegoś takiego nie ma. Dotyczy sytuacji, gdy jedziesz kilka dni, a twoje zapasy czekają na ciebie w kontenerach rozstawionych wzdłuż trasy.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontener",
   "karma",
   "zaopatrzenie",
   "punkt kontrolny",
   "długi dystans",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.2",
  "tytul": "Opis kontenera",
  "tresc": "Kontenery oznaczone są etykietą z nazwiskiem i nazwą punktu kontrolnego, w którym mają zostać złożone.",
  "wyjasnienie": "Przepis śnieżny, z wyścigów wieloetapowych — ciebie na SKYLOS nie dotyczy. Mówi tylko, jak podpisać pojemnik z zaopatrzeniem, żeby trafił na właściwy punkt kontrolny.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontener",
   "etykieta",
   "punkt kontrolny",
   "zaopatrzenie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.3",
  "tytul": "Kto wozi kontenery",
  "tresc": "Kontenery rozwożone są przez organizatorów na punkty kontrolne, wybrane przez zawodnika. Organizator może wymagać, aby kontenery zostały dostarczone na miejsce przez samych zawodników lub ich pomocników.",
  "wyjasnienie": "Przepis śnieżny — na SKYLOS nie obowiązuje. Warto z niego zapamiętać jedno: nie masz gwarancji, że ktoś rozwiezie twoje zapasy — organizator może wymagać, żebyś dostarczył je własnym transportem.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontener",
   "transport",
   "organizator",
   "punkt kontrolny",
   "handler",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.4",
  "tytul": "Podpis na karcie kontrolnej",
  "tresc": "Maszer musi podpisać kartę kontrolną u osoby funkcyjnej, odpowiedzialnej za dany punkt kontrolny przed ponownym wyjazdem na trasę.",
  "wyjasnienie": "Przepis śnieżny — na SKYLOS nie ma kart kontrolnych. W wyścigach wieloetapowych podpis jest dowodem, że faktycznie byłeś na punkcie, dlatego składasz go przed wyjazdem, a nie kiedyś potem.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "karta kontrolna",
   "podpis",
   "punkt kontrolny",
   "osoba funkcyjna",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.5",
  "tytul": "Pusty punkt kontrolny",
  "tresc": "W razie nieobecności odpowiedzialnej osoby funkcyjnej na punkcie kontrolnym, maszer musi zgłosić swój przejazd zgodnie z procedurą, określoną przez Sędziego Głównego w takich przypadkach.",
  "wyjasnienie": "Przepis śnieżny, na SKYLOS bez zastosowania. Mówi, że nawet gdy na punkcie nikogo nie zastaniesz, i tak musisz odnotować swój przejazd — sposób podaje wcześniej Sędzia Główny, więc dopytaj przed startem.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "punkt kontrolny",
   "osoba funkcyjna",
   "sędzia główny",
   "procedura",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.6",
  "tytul": "Kontrole na punktach kontrolnych",
  "tresc": "Kontrole zaprzęgu i wyposażenia mogą odbywać się na punktach kontrolnych.",
  "wyjasnienie": "Przepis śnieżny, dotyczy wyścigów z punktami kontrolnymi na trasie. Ogólna zasada, którą warto znać wszędzie: sprzęt może zostać sprawdzony nie tylko przed startem.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontrola",
   "sprzęt",
   "wyposażenie",
   "punkt kontrolny",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.7",
  "tytul": "Obowiązek poddania się kontroli",
  "tresc": "Każdy zaprzęg musi być przedstawiony do kontroli na żądanie uprawnionej osoby funkcyjnej.",
  "wyjasnienie": "Formalnie przepis śnieżny, ale identyczna zasada jest w przepisach ogólnych i obowiązuje też na SKYLOS: gdy uprawniona osoba funkcyjna każe pokazać zaprzęg, pokazujesz. Odmowa albo unikanie kontroli to prosta droga do kary.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontrola",
   "osoba funkcyjna",
   "odmowa",
   "sprzęt",
   "kara",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.8",
  "tytul": "Limit sześciu minut na kontrolę",
  "tresc": "Zaprzęg zaprzężony nie może być kontrolowany dłużej niż 6 minut.",
  "wyjasnienie": "Przepis śnieżny, ale ta sama granica czasu jest w przepisach ogólnych. Działa na twoją korzyść — nikt nie ma prawa trzymać zaprzęgu w uprzężach w nieskończoność.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontrola",
   "6 minut",
   "czas",
   "zaprzęg",
   "uprząż",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.9",
  "tytul": "Kontrola nie opóźnia zaprzęgów",
  "tresc": "Kontrola na punktach kontrolnych nie powinna opóźniać zaprzęgów.",
  "wyjasnienie": "Przepis z części śnieżnej, adresowany do obsługi punktów kontrolnych, nie do ciebie. Mówi im, żeby sprawdzanie nie kosztowało zawodników czasu.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "kontrola",
   "punkt kontrolny",
   "opóźnienie",
   "obsługa",
   "organizacja",
   "śnieg"
  ],
  "panele": [
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.10",
  "tytul": "Gdzie można zostawić psa",
  "tresc": "Psy niezdolne do kontynuowania wyścigu mogą być pozostawiane tylko na punktach kontrolnych wyznaczonych do tego celu.",
  "wyjasnienie": "Przepis śnieżny, z wyścigów wieloetapowych — na SKYLOS nie obowiązuje. Zasada: psa, który nie może biec dalej, zostawia się wyłącznie tam, gdzie organizator to przewidział, nigdy „gdzieś po drodze”.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pies",
   "dog drop",
   "zostawienie psa",
   "kontuzja",
   "punkt kontrolny",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.11",
  "tytul": "Opis zostawionego psa",
  "tresc": "Pozostawiane psy muszą być opisane poprzez: • Nazwisko i numer maszera • Miejsce, gdzie ma zostać dostarczony • Ewentualnie nazwisko osoby uprawnionej do odbioru psa. • Powodu, dla którego został pozostawiony",
  "wyjasnienie": "Przepis śnieżny — na SKYLOS nie obowiązuje. Chodzi o to, żeby przy psie została informacja, z której obsługa wie, czyj on jest, dokąd ma trafić i co się z nim działo.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pies",
   "dog drop",
   "opis",
   "odbiór psa",
   "identyfikacja",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.12",
  "tytul": "Uwiązanie zostawionego psa",
  "tresc": "Pozostawiony pies musi być uwiązany na stalowej lince lub łańcuchu dopóki nie zostanie odebrany przez upoważnioną osobę.",
  "wyjasnienie": "Przepis śnieżny, na SKYLOS bez zastosowania. Powód jest prosty: taśmę czy linkę zestresowany pies przegryzie i ucieknie, dlatego regulamin wymaga stali albo łańcucha.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pies",
   "uwiązanie",
   "łańcuch",
   "linka stalowa",
   "dog drop",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "stakeout"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.13",
  "tytul": "Pies zostawiony nie wraca do składu",
  "tresc": "Psy pozostawione są wyłączone z wyścigu i nie mogą wziąć udziału w dalszych etapach zawodów.",
  "wyjasnienie": "Przepis śnieżny — na SKYLOS nie obowiązuje. Warto znać zasadę: decyzja o zostawieniu psa jest ostateczna, na kolejny etap już go nie wpiszesz, nawet jeśli szybko dojdzie do siebie.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "pies",
   "dog drop",
   "etapy",
   "skład zaprzęgu",
   "wykluczenie",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.14",
  "tytul": "Zatrzymanie na naprawę sprzętu",
  "tresc": "Sędzia Główny lub Szef lekarzy weterynarii mogą zatrzymać zawodnika, aby zreperował lub wymienił wyposażenie niebezpieczne dla psów lub zawodnika.",
  "wyjasnienie": "Przepis śnieżny, ale odruch jest ten sam wszędzie: jeśli sędzia albo weterynarz uzna twój sprzęt za groźny, zatrzyma cię do czasu naprawy lub wymiany. To nie kara, tylko warunek jazdy dalej.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "sprzęt",
   "naprawa",
   "sędzia główny",
   "weterynarz",
   "bezpieczeństwo",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.15",
  "tytul": "Nakazany odpoczynek zaprzęgu",
  "tresc": "Sędzia Główny lub Szef lekarzy weterynarii mogą zatrzymać zaprzęg, który potrzebuje wypoczynku.",
  "wyjasnienie": "Przepis śnieżny — na SKYLOS nie obowiązuje. Daje sędziemu i weterynarzowi prawo wymusić postój, gdy widzą, że psy potrzebują przerwy, choćbyś ty czuł się świetnie.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "odpoczynek",
   "postój",
   "psy",
   "sędzia główny",
   "weterynarz",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.14.16",
  "tytul": "Wycofanie decyzją sędziego lub weterynarza",
  "tresc": "Sędzia Główny lub Szef lekarzy weterynarii mogą wycofać z wyścigu zaprzęg lub psa, które uznają za niezdolne do kontynuowania wyścigu.",
  "wyjasnienie": "Przepis śnieżny, ale podobne uprawnienie sędzia i weterynarz mają też na zawodach bezśnieżnych. Jeśli uznają psa albo cały zaprzęg za niezdolny do dalszej jazdy, wyścig się dla ciebie kończy — z tą decyzją nie dyskutuje się na trasie.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "wycofanie",
   "dyskwalifikacja",
   "weterynarz",
   "sędzia główny",
   "psy",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "snieg"
 },
 {
  "numer": "2.15.0",
  "tytul": "Meta",
  "tresc": "Meta",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.15.1",
  "tytul": "Czas w wyścigu wieloetapowym",
  "tresc": "W wyścigach wieloetapowych całkowity czas maszera to suma czasu osiągniętego na poszczególnych etapach.",
  "wyjasnienie": "Przepis z rozdziału śnieżnego, ale sposób liczenia jest powszechny: gdy zawody mają kilka etapów, o miejscu decyduje suma czasów, a nie najlepszy pojedynczy dzień. Słabszy etap zostaje z tobą do końca.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "czas",
   "etapy",
   "wyniki",
   "suma czasów",
   "klasyfikacja",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.15.2",
  "tytul": "Czas w wyścigu jednoetapowym",
  "tresc": "W wyścigach długodystansowych jednoetapowych i średniodystansowych jednoetapowych czas osiągnięty przez maszera to czas przejazdu, włącznie z postojami na odpoczynek i posiłek, postojami spowodowanymi warunkami atmosferycznymi, czasem straconym w efekcie zjechania z trasy itp.",
  "wyjasnienie": "Przepis śnieżny, dla długich i średnich dystansów — na SKYLOS nie obowiązuje. Mówi, że zegar nie staje: postoje na odpoczynek i jedzenie, przerwy z powodu pogody i czas stracony na błądzeniu też są twoim wynikiem.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "czas",
   "postój",
   "długi dystans",
   "pomiar czasu",
   "zjechanie z trasy",
   "śnieg"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.16.0",
  "tytul": "Przepisy dodatkowe",
  "tresc": "Przepisy dodatkowe",
  "wyjasnienie": null,
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.16.1",
  "tytul": "Przepisy dodatkowe organizatora",
  "tresc": "Organizator może wprowadzić.dodatkowe przepisy, wynikające ze specyfiki warunków lokalnych.",
  "wyjasnienie": "To przepis dla organizatora, w śnieżnej części regulaminu. Dla ciebie wynika z niego jedno: oprócz regulaminu PZSPZ mogą obowiązywać lokalne zasady, więc czytaj komunikat zawodów, a nie tylko regulamin.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "przepisy dodatkowe",
   "organizator",
   "komunikat",
   "warunki lokalne",
   "śnieg"
  ],
  "panele": [
   "organizator",
   "sedzia",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "2.16.2",
  "tytul": "Granice przepisów dodatkowych",
  "tresc": "Przepisy dodatkowe nie mogą być sprzeczne z przepisami ogólnymi, a ich zatwierdzenie musi nastąpić w chwili przyjęcia zawodów do kalendarza na dany sezon.",
  "wyjasnienie": "To przepis dla organizatora i związku — ciebie nie dotyczy wprost. Chroni cię o tyle, że lokalne zasady nie mogą łamać przepisów ogólnych ani pojawić się nagle tuż przed zawodami.",
  "sekcja": "rozdzial-2",
  "sekcjaTytul": "Rozdział 2. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW NA ŚNIEGU",
  "tagi": [
   "przepisy dodatkowe",
   "organizator",
   "kalendarz",
   "zatwierdzenie",
   "śnieg"
  ],
  "panele": [
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "snieg"
 },
 {
  "numer": "3.1",
  "tytul": "Czym jest canicross",
  "tresc": "Canicross: zaprzęg składa się z zawodnika poruszającego się pieszo i psa.",
  "wyjasnienie": "Definicja konkurencji, którą biegniesz na SKYLOS: ty na własnych nogach i jeden pies. Bez roweru, bez hulajnogi i bez drugiego psa — to już inne klasy.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "canicross",
   "cc",
   "bieganie",
   "definicja",
   "jeden pies",
   "dryland"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.1.1",
  "tytul": "Kategorie w canicrossie",
  "tresc": "Obowiązuje podział na kobiety (CCK) i mężczyzn (CCM) oraz kategorie wiekowe: Młodzicy* 11-13** 1-2km Juniorzy* młodsi 14-15** 1-4km Juniorzy* starsi 16-18** 1-4km Seniorzy* 19-39** 2-8km Weterani* 40** i więcej 2-8km * podział fakultatywny; ** do końca sezonu, w którym maszer kończy dany wiek",
  "wyjasnienie": "Startujesz w podziale na płeć (CCK / CCM) i w kategorii wiekowej wynikającej z rocznika — liczy się wiek osiągany w danym sezonie, nie data zawodów. Podział wiekowy jest fakultatywny, więc to, które kategorie faktycznie pojadą i na jakim dystansie, wynika z komunikatu zawodów.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "kategorie",
   "cck",
   "ccm",
   "wiek",
   "juniorzy",
   "weterani",
   "canicross",
   "dystans"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.1.3",
  "tytul": "Zgoda opiekuna dla niepełnoletnich",
  "tresc": "Zawodnicy niepełnoletni mogą brać udział w wyścigach wyłącznie za zgodą opiekunów prawnych.",
  "wyjasnienie": "Jeśli nie masz 18 lat, bez zgody opiekuna prawnego nie wystartujesz. Załatw ją przed przyjazdem i miej przy sobie w biurze zawodów — tego nie da się obejść na miejscu.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "niepełnoletni",
   "zgoda",
   "opiekun prawny",
   "junior",
   "biuro zawodów",
   "dopuszczenie"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.2.0",
  "tytul": "Uprząż nie do wypięcia",
  "tresc": "Uprząż psa musi być tak skonstruowana, aby nie mógł się z niej samodzielnie uwolnić.",
  "wyjasnienie": "Uprząż ma utrzymać psa nawet wtedy, gdy zaprze się i zacznie się cofać. Za duża albo źle dobrana to nie tylko ryzyko, że pies ucieknie na trasie, ale i powód do niedopuszczenia na kontroli sprzętu.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "uprząż",
   "szelki",
   "pies",
   "bezpieczeństwo",
   "kontrola sprzętu",
   "canicross"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.2.1",
  "tytul": "Linka i pas w canicrossie",
  "tresc": "Pies przypięty jest do maszera za koniec uprzęży za pomocą liny z amortyzatorem. Długość rozciągniętej liny musi zawierać się w przedziale od 1,5 do 2,5 metra. Pas powinien mieć szerokość co najmniej 7 cm na obszarze stykającym się z kręgosłupem. Do pasa musi być zamocowany w sposób trwały karabińczyk a lina ciągowa od strony maszera kończy się pętlą.",
  "wyjasnienie": "Linkę mierzy się rozciągniętą, nie w spoczynku — sprawdź swoją w domu, bo część zestawów ze sklepu leży na granicy dopuszczalnej długości. Zwróć uwagę też na szerokość pasa z tyłu, na to, że karabińczyk ma być przymocowany do pasa na stałe, i na pętlę na końcu linki od twojej strony.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "linka",
   "amortyzator",
   "pas biodrowy",
   "karabińczyk",
   "sprzęt",
   "canicross",
   "kontrola sprzętu"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.2.2",
  "tytul": "Buty groźne dla psa",
  "tresc": "Maszerzy nie mogą nosić butów, które mogłyby być niebezpieczne dla psów (twardy protektor, okucia, kolce itp.)",
  "wyjasnienie": "Kolce, twarde okucia i agresywny protektor odpadają — pies biegnie tuż przed tobą i przy potknięciu to on oberwie. Z takim obuwiem sędzia może cię nie dopuścić do startu, więc nie licz na to, że nikt nie zauważy.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "buty",
   "obuwie",
   "kolce",
   "protektor",
   "bezpieczeństwo psa",
   "canicross",
   "niedopuszczenie"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.2.3",
  "tytul": "Ustawienie na starcie",
  "tresc": "Na starcie maszer ustawia się na linii startowej.",
  "wyjasnienie": "Na starcie liczy się twoja pozycja, nie psa — to twoje stopy mają być równo z linią, choć pies stoi przed tobą. Nie przesuwaj się do przodu „na zapas”, czekając na sygnał.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "start",
   "linia startu",
   "ustawienie",
   "canicross",
   "falstart"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.2.4",
  "tytul": "Biegniesz za psem",
  "tresc": "Zawodnik biegnie za psem. Wyprzedzanie psa, ciągnięcie go czy zmuszanie do poruszania się na przód jest zabronione. Jeśli pies nie chce lub nie może dalej biec z jakiegokolwiek powodu, zawodnikowi nie wolno kontynuować etapu.",
  "wyjasnienie": "Pies ciągnie, ty biegniesz — nie wyprzedzasz go, nie holujesz za linkę i nie popychasz do przodu. A jeśli pies staje i nie chce lub nie może biec dalej, nie wolno ci dokończyć etapu: schodzisz z trasy, zamiast go dociągać.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "wyprzedzanie psa",
   "ciągnięcie psa",
   "dociąganie",
   "pies nie biegnie",
   "dobrostan",
   "canicross",
   "zakaz"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.0",
  "tytul": "Start może być:",
  "tresc": "Start może być:",
  "wyjasnienie": null,
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.1",
  "tytul": "Start pojedynczy",
  "tresc": "pojedynczy – zawodnicy startują w równych odstępach czasowych, wynoszących 30 sekund lub 1 minutę.",
  "wyjasnienie": "Ruszasz sam, w równym odstępie od poprzednika, więc ścigasz się z zegarem, a nie z ludźmi obok. Swoją godzinę wyjścia sprawdzasz na liście startowej i pilnujesz jej sam.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "start pojedynczy",
   "interwał",
   "30 sekund",
   "lista startowa",
   "canicross"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.2",
  "tytul": "Start masowy",
  "tresc": "masowy – zawodnicy startują równocześnie. Jeśli ilość zawodników to umożliwia, przeprowadza się jednoczesny start wszystkich z jednej linii. Jeśli nie jest to możliwe organizator ma obowiązek przygotować dwie lub więcej linii startu. Odstęp pomiędzy liniami powinien wynosić 10 metrów.",
  "wyjasnienie": "Wszyscy ruszają naraz, a przy większej stawce organizator ustawia kilka linii jedna za drugą. Licz się z tłokiem na pierwszych metrach i miej psa pod kontrolą, zanim stawka się rozciągnie.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "start masowy",
   "linie startu",
   "tłok",
   "canicross",
   "organizacja startu"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.3",
  "tytul": "Starter z dwiema flagami",
  "tresc": "Sygnał startu przy starcie masowym dawany jest dwiema flagami przez startera, który musi stać w miejscu widocznym dla wszystkich zawodników.",
  "wyjasnienie": "Przy starcie masowym startu wypatrujesz wzrokiem, a nie słuchem — starter stoi tak, żeby widziała go cała stawka. Ustaw się więc tak, żebyś naprawdę go widział.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "starter",
   "flagi",
   "start masowy",
   "sygnał startu",
   "widoczność"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.3.1",
  "tytul": "Odliczanie do startu masowego",
  "tresc": "Sygnał startu podawany jest w sposób następujący: • 1 minutę przed startem pokazuje „1” • 30 sekund przed startem starter ustawia ręce nad głową • 15 sekund przed startem starter opuszcza ręce do wysokości ramion • sygnał start – starter energicznie opuszcza jednocześnie obie ręce.",
  "wyjasnienie": "Odliczanie pokazywane jest układem rąk startera, więc zapamiętaj kolejność pozycji przed zawodami — startem jest gwałtowne opuszczenie obu rąk. Kto w tym momencie patrzy pod nogi albo na psa, rusza ostatni.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "odliczanie",
   "sygnał startu",
   "starter",
   "start masowy",
   "gesty",
   "flagi"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.4",
  "tytul": "Bieg na dochodzenie",
  "tresc": "Bieg na dochodzenie (wyścig musi składać się z co najmniej dwóch etapów)",
  "wyjasnienie": "To format dla zawodów co najmniej dwuetapowych: kolejność na mecie drugiego etapu jest od razu kolejnością końcową. Czy zostanie zastosowany na twoich zawodach, mówi komunikat organizatora.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "bieg na dochodzenie",
   "pursuit",
   "etapy",
   "format wyścigu",
   "dwa dni"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.4.1",
  "tytul": "Pierwszy etap dochodzenia",
  "tresc": "Do pierwszego etapu start jest pojedynczy i odbywa się według normalnych zasad",
  "wyjasnienie": "Pierwszy etap biegu na dochodzenie to zwykły start pojedynczy — robisz wszystko tak jak zawsze, a różnice zaczynają się dopiero następnego dnia.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "bieg na dochodzenie",
   "pierwszy etap",
   "start pojedynczy",
   "pursuit"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.3.4.2",
  "tytul": "Drugi etap dochodzenia",
  "tresc": "Przy starcie do drugiego etapu zawodnicy startują w odstępach czasowych równych różnicom czasów uzyskanych w poprzednim etapie.",
  "wyjasnienie": "Na drugi etap wyjeżdżasz ze stratą lub przewagą dokładnie taką, jaką wypracowałeś dzień wcześniej. Kogo widzisz przed sobą, tego realnie gonisz — nikt nie przelicza czasów po mecie.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "bieg na dochodzenie",
   "drugi etap",
   "strata czasu",
   "pursuit",
   "kolejność startu"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.4.0",
  "tytul": "Sztafety klubowe",
  "tresc": "Zaleca się organizowanie sztafet klubowych.",
  "wyjasnienie": "Regulamin zachęca do organizowania sztafet klubowych — to konkurencja drużynowa obok startów indywidualnych. Na SKYLOS zgłoszenie sztafety robisz w tej aplikacji.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "sztafeta",
   "klub",
   "drużyna",
   "zapisy",
   "canicross",
   "zgłoszenie"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.4.1",
  "tytul": "Skład i dystans sztafety",
  "tresc": "W sztafecie startuje po 3 zawodników danego klubu na dystansie 3 x 1,5-2 km.",
  "wyjasnienie": "Sztafetę tworzy trójka zawodników jednego klubu, każdy na krótkim odcinku — to bieg szybki, a nie wytrzymałościowy. Skompletuj skład przed zamknięciem zapisów, bo regulamin przewiduje pełną trójkę.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "sztafeta",
   "skład",
   "trzech zawodników",
   "dystans",
   "klub",
   "zapisy"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.4.2",
  "tytul": "Zmiana w sztafecie",
  "tresc": "Start jest masowy, a organizator musi zapewnić odpowiednią dla liczby startujących strefę zmiany. Zawodnik kończący bieg zostawia swojego psa pomocnikowi, a następnie daje zmianę kolejnemu zawodnikowi.",
  "wyjasnienie": "Wpadasz do strefy zmiany, oddajesz psa pomocnikowi i dopiero wtedy zmieniasz kolejnego zawodnika — bez pomocnika ta zmiana się nie uda, więc ustal go przed startem. Zmiana odbywa się tylko w wyznaczonej strefie, nie gdziekolwiek przy mecie.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "sztafeta",
   "zmiana",
   "strefa zmiany",
   "pomocnik",
   "handler",
   "start masowy"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.5.0",
  "tytul": "Starty dzieci",
  "tresc": "Dopuszcza się również, z zachowaniem szczególnych warunków bezpieczeństwa, na zasadzie zabawy a nie rywalizacji sportowej, start dzieci w kategoriach: • dzieci młodsze: wiek 6-8 lat, dystans maks. 500 m. • dzieci starsze: wiek 9-10 lat, maks. 1 km.",
  "wyjasnienie": "Dla najmłodszych regulamin przewiduje krótkie biegi w formule zabawy, a nie rywalizacji sportowej — bez presji na wynik. Zgłaszając dziecko, patrz na jego wiek, bo od niego zależy dopuszczalny dystans.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "dzieci",
   "biegi dziecięce",
   "zabawa",
   "dystans",
   "rodzic",
   "kategorie"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.5.1",
  "tytul": "Opiekun przy dziecku na trasie",
  "tresc": "W kategoriach dzieci młodszych i dzieci starszych zaleca się, aby dziecku towarzyszył na trasie opiekun.",
  "wyjasnienie": "To zalecenie, a nie nakaz — ale przy dziecku i psie na trasie dorosły obok jest zwyczajnie rozsądny. Ustal z organizatorem przed startem, jak to będzie wyglądało na twoich zawodach.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "dzieci",
   "opiekun",
   "rodzic",
   "trasa",
   "bezpieczeństwo",
   "zalecenie"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.5.2",
  "tytul": "Co wolno opiekunowi dziecka",
  "tresc": "Opiekun może być przypięty za pomocą linki lub smyczy do uprzęży psa. Nie może trzymać dziecka za rękę, ciągnąć go lub nieść. 3B. Przepisy szczegółowe dla dyscypliny bikejoring (DB)",
  "wyjasnienie": "Opiekun może wpiąć się do uprzęży psa, ale ma być asekuracją, a nie napędem — nie trzyma dziecka za rękę, nie ciągnie go i nie niesie. Ten bieg ma być dziecka, nie twój.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "dzieci",
   "opiekun",
   "uprząż",
   "smycz",
   "pomoc",
   "zakaz"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.0",
  "tytul": "Czym jest bikejoring",
  "tresc": "Dyscyplina bikejoring: zaprzęg w tej dyscyplinie składa się z jednego psa i maszera poruszającego się na rowerze napędzanym wyłącznie siłą mięśni. Zabronione jest używanie rowerów z napędem elektrycznym lub napędem wspomaganym elektrycznie.",
  "wyjasnienie": "Jeden pies, jeden rower i wyłącznie twoje mięśnie — rower elektryczny lub ze wspomaganiem jest zabroniony bez wyjątków. Silnik w piaście albo bateria w ramie to koniec startu na kontroli sprzętu.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "bikejoring",
   "db",
   "rower",
   "e-bike",
   "elektryczny",
   "wspomaganie",
   "dryland"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.1",
  "tytul": "Kategorie w bikejoringu",
  "tresc": "Obowiązuje podział na kobiety (DBW) i mężczyzn (DBM) oraz kategorie wiekowe: • juniorzy 11-18 lat* (w przypadku zgłoszenia przynajmniej 3 zawodników / czek) • seniorzy 19-39 lat* • weterani 40 lat i więcej* (w przypadku zgłoszenia przynajmniej 5 zawodników / czek) *podział fakultatywny",
  "wyjasnienie": "Zapisujesz się na bikejoring, a podział na kobiety (DBW) i mężczyzn (DBM) zobaczysz w klasyfikacji wyników. Kategorie wiekowe są fakultatywne — juniorzy czy weterani pojadą osobno dopiero przy odpowiedniej liczbie zgłoszeń.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "kategorie",
   "dbw",
   "dbm",
   "bikejoring",
   "wiek",
   "juniorzy",
   "weterani",
   "wyniki"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.2",
  "tytul": "Zgoda opiekuna w bikejoringu",
  "tresc": "Zawodnicy niepełnoletni mogą brać udział w wyścigach wyłącznie za zgodą opiekunów prawnych.",
  "wyjasnienie": "Poniżej 18 lat startujesz wyłącznie za zgodą opiekuna prawnego. Bez niej biuro cię nie dopuści, nawet jeśli wszystko inne masz w idealnym porządku.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "niepełnoletni",
   "zgoda",
   "opiekun prawny",
   "bikejoring",
   "biuro zawodów",
   "dopuszczenie"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.3",
  "tytul": "Uprząż w bikejoringu",
  "tresc": "Uprząż psa musi być tak skonstruowana, aby nie mógł się z niej samodzielnie wydostać.",
  "wyjasnienie": "Ten sam wymóg co w canicrossie: pies nie może wysunąć się z uprzęży, gdy zaprze się albo szarpnie w bok. Przy rowerze stawka jest wyższa — luźna uprząż kończy się psem pod kołem.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "uprząż",
   "szelki",
   "bikejoring",
   "bezpieczeństwo",
   "kontrola sprzętu"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.4",
  "tytul": "Linka w bikejoringu",
  "tresc": "Pies ciągnie rower za pomocą liny z amortyzatorem, z jednej strony przymocowanej do końca uprzęży z drugiej do roweru. Długość rozciągniętej liny musi zawierać się w przedziale od 2 do 3 metrów.",
  "wyjasnienie": "Linka jest tu dłuższa niż w canicrossie i mierzy się ją rozciągniętą, od końca uprzęży do mocowania na rowerze. Za krótka — wjedziesz psu na tylne łapy, za długa — potrafi wpaść w przednie koło.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "linka",
   "amortyzator",
   "bikejoring",
   "długość liny",
   "sprzęt",
   "kontrola sprzętu"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.5",
  "tytul": "Rower w bikejoringu — hamulce i osłona",
  "tresc": "Rower musi być wyposażony w skutecznie działające hamulce, niezależne na każde koło, oraz pałąk lub wysięgnik zabezpieczający linę przed wkręceniem się w przednie koło.",
  "wyjasnienie": "Bez tego nie przejdziesz kontroli sprzętu i nie wyjedziesz na trasę. Sprawdź oba hamulce dzień wcześniej, a nie pięć minut przed startem, i upewnij się, że lina nie ma jak trafić między szprychy przedniego koła.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "bikejoring",
   "rower",
   "hamulce",
   "pałąk",
   "wysięgnik",
   "kontrola sprzętu",
   "db"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.6",
  "tytul": "Ustawienie roweru na starcie",
  "tresc": "Na starcie maszer ustawia przednią krawędź przedniego koła na linii startu.",
  "wyjasnienie": "Na starcie liczy się przednia krawędź koła, nie widelec ani twoja stopa. Ustaw się dokładnie, bo starter może kazać ci się cofnąć i tracisz nerwy tuż przed odliczaniem.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "start",
   "bikejoring",
   "rower",
   "linia startu",
   "ustawienie",
   "starter"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.7",
  "tytul": "Jedziesz za psem, nie przed nim",
  "tresc": "W trakcie wyścigu zawodnik jedzie za psem. Wyprzedzanie psa, ciągnięcie go czy zmuszanie do poruszania się na przód jest zabronione. Jeśli pies nie chce lub nie może dalej biec z jakiegokolwiek powodu, zawodnikowi nie wolno kontynuować etapu.",
  "wyjasnienie": "Pies ma ciągnąć, a nie być ciągnięty — najeżdżanie na niego, holowanie liną czy popychanie kołem jest zakazane. A jeśli pies przestaje biec z jakiegokolwiek powodu, etap kończysz: nie wolno ci jechać dalej.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "bikejoring",
   "wyprzedzanie psa",
   "ciągnięcie psa",
   "dobrostan",
   "kontuzja psa",
   "przerwanie etapu"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.6.8",
  "tytul": "Kask w bikejoringu",
  "tresc": "Obowiązkowe jest noszenie w trakcie każdego etapu kasku kolarskiego. 3C. Przepisy szczegółowe dla dyscypliny wyścigi zaprzęgów.",
  "wyjasnienie": "Na każdym etapie, bez wyjątków i bez dyskusji. Brak kasku oznacza, że po prostu nie wystartujesz.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "kask",
   "bikejoring",
   "bezpieczeństwo",
   "wyposażenie",
   "obowiązkowy",
   "etap"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.0",
  "tytul": "Ile psów w klasie zaprzęgowej",
  "tresc": "Klasy oznaczone są poszczególnymi literami alfabetu. • Zaprzęg w klasie AB liczy najwyżej 8 psów i co najmniej 5 psów w pierwszym etapie wyścigu, co najmniej 4 psów w następnych. • Zaprzęg w klasie C liczy najwyżej 4 psy i co najmniej 3 psy w pierwszym etapie wyścigu, co najmniej 2 psy w następnych. • Zaprzęg w klasie D liczy 2 psy w pierwszym etapie wyścigu, co najmniej 1 pies w następnych. • Zaprzęg w klasie SC1 liczy 1 psa.",
  "wyjasnienie": "Liczby są sztywne w obie strony. Jeśli po pierwszym etapie zejdziesz poniżej minimum dla swojej klasy, w kolejnym już nie wystartujesz — planując skład, zostaw sobie zapas na psa, który wypadnie.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "klasy",
   "ab",
   "c",
   "d",
   "sc1",
   "liczba psów",
   "zaprzęg",
   "skład"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.1",
  "tytul": "Kategorie rasowe w klasach",
  "tresc": "Cyframi oznaczone są następujące kategorie dla psów w klasach, w których są podziały na rasy tzn. D, C, AB przy czym: • cyfrą 0 – wszystkie zaprzęgi niezależnie od rasy; • cyfrą 1 – zaprzęgi złożona wyłącznie z siberian husky, alaskan malamutów, samojedów, psów grenlandzkich, kanadyjskich psów eskimoskich, łajek jakuckich z rodowodem FCI lub organizacji współpracujących: American Kennel Club, Kennel Club, Canadian Kenel Club. • cyfrą 2 – zaprzęgi złożone z alaskan malamutów, samojedów, psów grenlandzkich, kanadyjskich psów eskimoskich, łajek jakuckich z rodowodem FCI lub organizacji współpracujących: AKC, KC, CKC.",
  "wyjasnienie": "Cyfra przy literze klasy mówi, jakie psy mogą być w zaprzęgu. Jeden pies spoza listy albo bez rodowodu uznanej organizacji wyrzuca cały zaprzęg z kategorii rasowej — sprawdź papiery przed zgłoszeniem, nie po nim.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "kategorie",
   "rasy",
   "siberian husky",
   "malamut",
   "samojed",
   "rodowód",
   "fci",
   "klasy"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.1.1",
  "tytul": "Kategorie rasowe w SC1",
  "tresc": "W klasie SC1 obowiązuje podział na kategorie: SC1– wszystkie psy niezależnie od rasy; SC1-1 – zaprzęgi złożona wyłącznie z siberian husky, alaskan malamutów, samojedów, psów grenlandzkich, kanadyjskich psów eskimoskich, łajek jakuckich z rodowodem FCI lub organizacji współpracujących: American Kennel Club, Kennel Club, Canadian Kenel Club.",
  "wyjasnienie": "W jednopsim scooterze masz do wyboru kategorię otwartą albo rasową. Do tej drugiej pies musi mieć rodowód uznanej organizacji — sam wygląd i „na oko husky\" nie wystarczy.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "sc1",
   "scooter",
   "kategorie",
   "rasy",
   "rodowód",
   "fci",
   "jeden pies"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.2",
  "tytul": "Wiek startującego w zaprzęgach",
  "tresc": "Zawodnicy niepełnoletni mogą brać udział w wyścigach wyłącznie za pisemną zgodą rodziców lub opiekunów prawnych: • od 11 lat w klasie SC1 • od 14 lat w klasie D, C • od 19 lat w klasie AB",
  "wyjasnienie": "Próg wieku zależy od klasy i jest twardy — im większy zaprzęg, tym starszy musisz być. Jeśli nie masz 18 lat, przywieź do biura papierową zgodę rodzica lub opiekuna prawnego, bo bez niej cię nie zapiszą.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "wiek",
   "niepełnoletni",
   "zgoda rodziców",
   "juniorzy",
   "klasy",
   "zaprzęgi",
   "sc1"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.3",
  "tytul": "Kask w zaprzęgach",
  "tresc": "Zawodnicy muszą startować w kaskach ochronnych. Zalecane są kaski rowerowe z atestem.",
  "wyjasnienie": "Sam kask jest obowiązkowy — startujesz w nim albo nie startujesz. Model rowerowy z atestem to tylko zalecenie, ale przy nim nikt nie będzie się zastanawiał, czy sprzęt jest odpowiedni.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "kask",
   "zaprzęgi",
   "bezpieczeństwo",
   "wyposażenie",
   "atest",
   "wózek"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.4",
  "tytul": "Ustawienie psów w zaprzęgu",
  "tresc": "Psy muszą być zaprzężone w pojedynczą lub podwójną linię.",
  "wyjasnienie": "Psy biegną przy jednej linie głównej: jeden za drugim albo parami. Ustawienie wachlarzem czy każdy pies na osobnej lince prosto do wózka nie przejdzie kontroli.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "lina główna",
   "ustawienie psów",
   "zaprzęg",
   "pojedyncza linia",
   "podwójna linia",
   "wachlarz"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.5",
  "tytul": "Jak psy są wpięte w linę",
  "tresc": "Psy muszą być przypięte do głównej liny ciągowej linami szyjnymi do obroży i linami ogonowymi, za wyjątkiem liderów, dla których nie jest obowiązkowa lina szyjna. Główna lina ciągowa musi być połączona z wózkiem za pośrednictwem amortyzatora.",
  "wyjasnienie": "Każdy pies ma dwa punkty wpięcia — przy obroży i przy szelkach; wyjątek to liderzy, którzy mogą jechać bez liny szyjnej. Między liną główną a wózkiem musi być amortyzator: sztywne połączenie to naruszenie i realne ryzyko urazu kręgosłupa psa.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "lina szyjna",
   "lina ogonowa",
   "neckline",
   "amortyzator",
   "lider",
   "wpięcie psów",
   "obroża"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.6",
  "tytul": "Lina bezpieczeństwa w zaprzęgu",
  "tresc": "Zaprzęg musi być wyposażony w linę bezpieczeństwa, długości min. 4m, przymocowaną do głównej liny ciągowej. Lina bezpieczeństwa może być użyta do przytrzymania lub przywiązania pojazdu, zabronione jest przywiązywanie się maszera do zaprzęgu. Hulajnoga z 2 psami powinna być wyposażona w linę bezpieczeństwa umocowaną do hulajnogi, i np. owiniętą na kierownicy (możliwość zakotwiczenia hulajnogi i psów w razie wypadku).",
  "wyjasnienie": "Ma jedno zadanie: pozwolić zakotwiczyć pojazd, gdy coś pójdzie nie tak. Nigdy nie przywiązuj jej do siebie — to jest zakazane wprost, bo przy wywrotce zaprzęg ciągnąłby cię po trasie. Na hulajnodze z dwoma psami zamocuj ją tak, żeby dało się szybko chwycić, np. na kierownicy.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "lina bezpieczeństwa",
   "zakotwiczenie",
   "hulajnoga",
   "bezpieczeństwo",
   "przywiązanie",
   "wywrotka"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.7",
  "tytul": "Hamulce w wózku",
  "tresc": "Wózek musi być wyposażony w skutecznie działające hamulce: przynajmniej na tylnych kołach w wózku trzykołowym oraz na wszystkich kołach w wózku czterokołowym, stosowane mogą być pojazdy 3- lub 4-kołowe. Zaleca się wyposażenie wózka w zderzak, zabezpieczający przed najechaniem psów kołem.",
  "wyjasnienie": "Kontrola sprzętu sprawdza, czy hamulce realnie zatrzymują wózek z psami, a nie czy w ogóle są zamontowane. Zderzak nie jest wymagany, ale to on ratuje psy przed najechaniem kołem przy nagłym hamowaniu.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "wózek",
   "hamulce",
   "zderzak",
   "kontrola sprzętu",
   "3-kołowy",
   "4-kołowy"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.8",
  "tytul": "Wózek w klasie AB",
  "tresc": "W klasie AB zaleca się wózki 4-kołowe, dopuszczalne są wózki 3 kołowe, jednak wyłącznie dla zaprzęgów startujących z maksymalnie 6 psami.",
  "wyjasnienie": "Jeśli startujesz z siedmioma lub ośmioma psami, musisz jechać na czterech kołach. Trójkołowiec wchodzi w grę tylko do sześciu psów włącznie — nie licz, że przepchniesz większy zaprzęg na trzech kołach.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "klasa ab",
   "wózek",
   "4-kołowy",
   "3-kołowy",
   "liczba psów",
   "zaprzęg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.9",
  "tytul": "Wózek w klasie C",
  "tresc": "W klasie C zaleca się wózki 3-kołowe, dopuszczalne są wózki 4 kołowe.",
  "wyjasnienie": "Tu masz wolną rękę: trójkołowiec jest zalecany, ale czterokołowy nikogo nie zdyskwalifikuje. Wybierz to, na czym pewniej panujesz nad zaprzęgiem na zakrętach.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "klasa c",
   "wózek",
   "3-kołowy",
   "4-kołowy",
   "cztery psy"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.10",
  "tytul": "Pojazd w klasie D",
  "tresc": "W klasie D (2 psy) zaleca się pojazd 2-kołowy – hulajnogę dopuszczając użycie wózków 3-kołowych. Hulajnoga musi być wyposażona w skutecznie działające hamulce, niezależne na każde koło, napędzana wyłącznie siłą mięśni. Zabronione jest używanie wszelkiej formy elektrycznego wspomagania napędu.",
  "wyjasnienie": "Standardem jest hulajnoga, ale trójkołowy wózek też jest dopuszczony. Czego nie ma: jakiegokolwiek wspomagania elektrycznego — taki sprzęt nie zostanie dopuszczony, nawet jeśli obiecasz, że nie użyjesz silnika.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "klasa d",
   "hulajnoga",
   "scooter",
   "wózek 3-kołowy",
   "hamulce",
   "wspomaganie elektryczne",
   "dwa psy"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.11",
  "tytul": "Hulajnoga w klasie SC1",
  "tresc": "W klasie SC1 obowiązują hulajnogi wyposażone w skutecznie działające hamulce, niezależne na każde koło, napędzana wyłącznie siłą mięśni. Zabronione jest używanie wszelkiej formy elektrycznego wspomagania napędu.",
  "wyjasnienie": "Tu wyboru nie ma — tylko hulajnoga, z działającymi hamulcami przy obu kołach, napędzana wyłącznie twoimi nogami i psem. E-hulajnoga czy jakiekolwiek wspomaganie odpada.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "sc1",
   "hulajnoga",
   "scooter",
   "hamulce",
   "wspomaganie elektryczne",
   "napęd",
   "jeden pies"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.7.12",
  "tytul": "Gdy pies przestaje biec",
  "tresc": "Jeśli któryś pies z jakiegokolwiek powodu nie chce dalej biec na przód, zawodnikowi nie wolno kontynuować wyścigu chyba, że organizator przewidział punkty kontrolne, w których można pozostawić pod opieką psy, lub wózek jest wyposażony w specjalną torbę do przewozu psa. Ze względów bezpieczeństwa nie wolno przewozić na wózkach psów niezdolnych do kontynuowania wyścigu o własnych siłach, o ile wózek nie jest wyposażony w specjalną torbę. 3.D Przepisy szczegółowe dla wyścigów średniodystansowych.",
  "wyjasnienie": "Nie zmuszasz psa i nie jedziesz dalej — chyba że organizator przewidział punkt kontrolny, gdzie zostawisz psa pod opieką, albo masz na wózku przeznaczoną do tego torbę. Wożenie niezdolnego do biegu psa luzem na wózku jest zakazane.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "pies nie biegnie",
   "kontuzja",
   "torba na psa",
   "punkt kontrolny",
   "przerwanie wyścigu",
   "dobrostan",
   "transport psa"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.8",
  "tytul": "Warunki uczestnictwa w MID",
  "tresc": "Warunki uczestnictwa",
  "wyjasnienie": "To sam nagłówek części o wyścigach średniodystansowych — konkretne wymagania są w punktach pod nim. Jeśli nie startujesz w MB ani MU, ta sekcja cię nie dotyczy.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "średniodystansowe",
   "warunki uczestnictwa",
   "nagłówek",
   "mb",
   "mu"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "dryland"
 },
 {
  "numer": "3.8.1",
  "tytul": "Wiek w wyścigach MID",
  "tresc": "Zawodnicy muszą mieć ukończone 18 lat. Zawodnicy mający ukończone 16 lat mogą brać udział w wyścigach wyłącznie za pisemną zgodą opiekunów prawnych.",
  "wyjasnienie": "Średni dystans jest dla dorosłych. Mając 16 lub 17 lat wystartujesz tylko z pisemną zgodą opiekuna prawnego, a poniżej 16 lat nie ma startu w tej dyscyplinie w ogóle.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "wiek",
   "18 lat",
   "16 lat",
   "zgoda opiekuna",
   "średni dystans",
   "niepełnoletni"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.8.2",
  "tytul": "Obowiązkowa odprawa przed MID",
  "tresc": "Zawodnicy mają obowiązek uczestniczenia w odprawie przed wyścigiem. Jest to warunkiem uczestnictwa w wyścigu.",
  "wyjasnienie": "Nie ma odprawy — nie ma startu, i to nie jest formalność do odpuszczenia. Tam dostajesz zmiany w trasie, godziny startów i wymagania organizatora, których w regulaminie nie znajdziesz.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "odprawa",
   "mid",
   "briefing",
   "obowiązek",
   "warunek startu",
   "mb",
   "mu"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.8.3",
  "tytul": "Klasy MB i MU",
  "tresc": "Podział na klasy: • MB - 4-6 psów przez cały czas trwania zawodów, • MU - 7-12 psów przez cały czas trwania zawodów. W każdym kolejnym etapie mogą wystartować jedynie psy, które brały udział we wcześniejszym etapie.",
  "wyjasnienie": "Liczba psów musi mieścić się w widełkach twojej klasy przez całe zawody, a do kolejnego etapu nie dołożysz świeżego psa z samochodu. Skład możesz w granicach widełek pomniejszyć, ale nie uzupełnić.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mb",
   "mu",
   "mid",
   "liczba psów",
   "skład zaprzęgu",
   "etapy",
   "wymiana psów"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.8.4",
  "tytul": "Kategorie rasowe w MID",
  "tresc": "W w/w klasach organizator może przewidzieć podział na kategorie z podziałem na rasy.",
  "wyjasnienie": "To zależy wyłącznie od organizatora — może, ale nie musi rozdzielić klasyfikacji według ras. Sprawdź w formularzu zgłoszeniowym danych zawodów, zanim założysz, że taka kategoria będzie rozgrywana.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "mb",
   "mu",
   "kategorie",
   "rasy",
   "organizator",
   "zgłoszenie"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "dryland"
 },
 {
  "numer": "3.9",
  "tytul": "Wyposażenie w MID",
  "tresc": "Wyposażenie",
  "wyjasnienie": "Nagłówek listy wymagań sprzętowych dla średniego dystansu — konkretne przepisy są w punktach pod nim.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "wyposażenie",
   "sprzęt",
   "nagłówek",
   "mb",
   "mu"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.1",
  "tytul": "Kask w MID",
  "tresc": "Zawodnicy muszą startować w kaskach ochronnych. Zalecane są kaski rowerowe z atestem.",
  "wyjasnienie": "Tak samo jak na krótkich dystansach: kask jest obowiązkowy, rowerowy z atestem to bezpieczny wybór. Na długim etapie w lesie tym bardziej nie ma o czym dyskutować.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "kask",
   "mid",
   "bezpieczeństwo",
   "wyposażenie",
   "atest",
   "mb",
   "mu"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.2",
  "tytul": "Ustawienie psów w MID",
  "tresc": "Psy muszą być zaprzężone w pojedynczą lub podwójną linię.",
  "wyjasnienie": "Jak w każdym zaprzęgu — psy przy jednej linie głównej, pojedynczo lub w parach. Żadnych osobnych linek prowadzonych prosto od psa do wózka.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "lina główna",
   "ustawienie psów",
   "pojedyncza linia",
   "podwójna linia",
   "zaprzęg"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.3",
  "tytul": "Wpięcie psów w MID",
  "tresc": "Psy muszą być przypięte do głównej liny ciągowej linami szyjnymi do obroży i linami ogonowymi, za wyjątkiem liderów, dla których nie jest obowiązkowa lina szyjna. Główna lina ciągowa musi być połączona z wózkiem za pośrednictwem amortyzatora.",
  "wyjasnienie": "Dwa punkty wpięcia na każdego psa, liderzy mogą bez liny szyjnej, a między liną główną a wózkiem musi być amortyzator. Na długim dystansie to nie formalność — amortyzator oszczędza kręgosłupy psów przy każdym szarpnięciu.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "lina szyjna",
   "lina ogonowa",
   "amortyzator",
   "lider",
   "wpięcie psów",
   "obroża"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.4",
  "tytul": "Lina bezpieczeństwa w MID",
  "tresc": "Zaprzęg musi być wyposażony w linę bezpieczeństwa, długości min 4m, przymocowaną do głównej liny ciągowej. Lina bezpieczeństwa może być użyta do przytrzymania lub przywiązania pojazdu, zabronione jest przywiązywanie się maszera do zaprzęgu.",
  "wyjasnienie": "Służy do przytrzymania albo zakotwiczenia wózka, gdy musisz z niego zejść. Przywiązywanie się do zaprzęgu jest zakazane wprost — przy wywrotce daleko od bazy skończyłoby się to bardzo źle.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "lina bezpieczeństwa",
   "zakotwiczenie",
   "bezpieczeństwo",
   "przywiązanie",
   "wózek"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.5",
  "tytul": "Brona przy wózku MID",
  "tresc": "Wózek powinien być wyposażony w bronę, dzięki której można skutecznie zatrzymać zaprzęg poprzez wbicie jej w ziemię. Dzięki temu rozwiązaniu maszer może bezpiecznie zejść z wózka do psów np. w celu odplątania lub napojenia psów.",
  "wyjasnienie": "To twoja kotwica — wbita w grunt trzyma zaprzęg, gdy idziesz do psów rozplątać linę albo je napoić. Bez niej praktycznie nie zejdziesz bezpiecznie z wózka na trasie.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "brona",
   "kotwica",
   "mid",
   "wózek",
   "zatrzymanie zaprzęgu",
   "postój",
   "napojenie psów"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.6",
  "tytul": "Hamulce w wózku MID",
  "tresc": "Wózek musi być wyposażony w skutecznie działające hamulce na wszystkich kołach.",
  "wyjasnienie": "Tu nie ma taryfy ulgowej jak przy krótkich dystansach — hamować muszą wszystkie koła, bez względu na to, ile ich wózek ma.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "wózek",
   "hamulce",
   "kontrola sprzętu",
   "bezpieczeństwo",
   "wszystkie koła"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.7",
  "tytul": "Wózek w klasach MB i MU",
  "tresc": "W klasie MU obowiązuje wózek 4-kołowy z zalecaną broną, w klasie MB zalecany jest wózek 4-kołowy, dopuszczalny 3- kołowy. Zaleca się wyposażenie wózka w zderzak, zabezpieczający przed najechaniem psów kołem.",
  "wyjasnienie": "W MU cztery koła to warunek, nie sugestia. W MB masz wybór, ale przy dużym zaprzęgu i długim etapie czterokołowiec jest po prostu stabilniejszy, a zderzak chroni psy przed najechaniem.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mb",
   "mu",
   "mid",
   "wózek",
   "4-kołowy",
   "3-kołowy",
   "brona",
   "zderzak"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.8",
  "tytul": "Torba do przewozu psa",
  "tresc": "W klasach MB i MU zaleca się wyposażenie wózka w torbę, która zmieści psa oraz obowiązkowe wyposażenie. Torba na psa powinna być odpowiednio wentylowana, a więc posiadać wystarczającą ilość otworów lub siatkę, których powierzchnia wentylacyjna musi wynosić minimum 600 cm2. Torba powinna być tak skonstruowana, aby transportowany pies był w niej całkowicie zamknięty.",
  "wyjasnienie": "Formalnie zalecana, w praktyce decyduje o twoim wyścigu — bez niej, gdy pies przestanie biec, kończysz etap. Kupując albo szyjąc, pilnuj wentylacji i tego, żeby pies był w środku całkowicie zamknięty.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "torba na psa",
   "mid",
   "mb",
   "mu",
   "wentylacja",
   "transport psa",
   "wózek"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.9.9",
  "tytul": "Apteczka i narzędzia na trasę",
  "tresc": "Zaleca się by zawodnik był wyposażony w podstawową apteczkę dla psa i dla maszera, nóż, kombinerki, zapasową obrożę, szelki, linę szyjną i ogonową oraz karabińczyki (umieszczone w torbie lub plecaku).",
  "wyjasnienie": "Formalnie tylko zalecenie, ale na średnim dystansie bywasz sam w lesie. Nóż i kombinerki ratują psa zaplątanego w linę, a zapasowe szelki czy karabińczyk pozwalają dojechać do mety zamiast czekać na pomoc.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "apteczka",
   "nóż",
   "kombinerki",
   "zapasowa uprząż",
   "karabińczyki",
   "wyposażenie",
   "mid",
   "plecak"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.10",
  "tytul": "Co organizator może kazać wieźć",
  "tresc": "Organizator może wymagać, aby w wyposażeniu torby/plecaka znajdowały się: • buty dla psów; • telefon, dowód osobisty lub paszport; • kompas lub GPS, czołówka z zapasowymi bateriami • miski dla psów,",
  "wyjasnienie": "Ta lista nie działa sama z siebie — to organizator decyduje, co z niej jest obowiązkowe na konkretnych zawodach. Sprawdź komunikat i słuchaj na odprawie, bo brak wymaganego wyposażenia może być sprawdzany przed startem i po mecie.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "wyposażenie obowiązkowe",
   "plecak",
   "buty dla psów",
   "gps",
   "czołówka",
   "miski",
   "organizator",
   "mid"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "dryland"
 },
 {
  "numer": "3.10.1",
  "tytul": "Pies, który nie chce biec (MID)",
  "tresc": "Jeśli któryś pies z jakiegokolwiek powodu nie chce dalej biec na przód, zawodnikowi nie wolno kontynuować wyścigu chyba, że organizator przewidział punkty kontrolne, w których można pozostawić pod opieką psy, lub wózek jest wyposażony w specjalną torbę do przewozu psa. Ze względów bezpieczeństwa nie wolno przewozić na wózkach psów niezdolnych do kontynuowania wyścigu o własnych siłach, o ile wózek nie jest wyposażony w specjalną torbę.",
  "wyjasnienie": "Zasada jest ta sama co na krótkich dystansach: albo zostawiasz psa na punkcie kontrolnym, albo wieziesz go w przeznaczonej do tego torbie, albo kończysz jazdę. Wożenie psa luzem na wózku jest zakazane.",
  "sekcja": "rozdzial-3",
  "sekcjaTytul": "Rozdział 3. PRZEPISY SZCZEGÓŁOWE DOTYCZĄCE WYŚCIGÓW W WARUNKACH BEZŚNIEŻNYCH",
  "tagi": [
   "mid",
   "pies nie biegnie",
   "torba na psa",
   "punkt kontrolny",
   "przerwanie wyścigu",
   "dobrostan",
   "transport psa"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "dryland"
 },
 {
  "numer": "4.0.0",
  "tytul": "Przepisy ogólne",
  "tresc": "Przepisy ogólne",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.0.1",
  "tytul": "Po co są przepisy organizacyjne",
  "tresc": "Przepisy te mają na celu ujednolicenie organizacji wyścigów i zapewnienie przeprowadzenia wyścigów w najlepszych warunkach oraz na jak najwyższym poziomie.",
  "wyjasnienie": "To zdanie wstępne do rozdziału pisanego dla organizatorów — ciebie jako zawodnika nie dotyczy wprost.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "przepisy organizacyjne",
   "cel",
   "rozdział 4",
   "organizator",
   "wstęp"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.0.2",
  "tytul": "Kto ustala klasy na zawodach",
  "tresc": "Wybór klas i kategorii zależy od organizatora pod warunkiem, że wyraźnie określi na formularzu zgłoszeń jakie klasy i jakie kategorie mają prawo startu na danych wyścigach. W przypadku organizowania Mistrzostw Polski organizator ma obowiązek uwzględnić wszystkie klasy i kategorie w wybranych dyscyplinach.",
  "wyjasnienie": "Nie zakładaj, że twoja klasa będzie rozgrywana — obowiązuje to, co organizator wypisał w formularzu zgłoszeń. Wyjątkiem są Mistrzostwa Polski, gdzie muszą się znaleźć wszystkie klasy i kategorie wybranych dyscyplin.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "klasy",
   "kategorie",
   "formularz zgłoszeń",
   "mistrzostwa polski",
   "organizator",
   "zapisy"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.0",
  "tytul": "Określenia",
  "tresc": "Określenia",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.1",
  "tytul": "Organizator sportowy",
  "tresc": "Organizator sportowy: licencjonowany klub (kluby) sportowe zrzeszone w Polskim Związku Sportu Psich Zaprzęgów., podejmujący się organizacji zawodów.",
  "wyjasnienie": "Definicja porządkowa: zawody firmuje licencjonowany klub zrzeszony w PZSPZ. Zawodnika nie dotyczy wprost.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "organizator sportowy",
   "klub",
   "pzspz",
   "licencja",
   "definicja"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.2",
  "tytul": "Organizator techniczny",
  "tresc": "Organizator techniczny: grupa osób, która w uzgodnieniu z organizatorem sportowym odpowiedzialna jest za techniczne zorganizowanie wyścigu.",
  "wyjasnienie": "To ekipa, która fizycznie stawia zawody: trasę, start, metę, stakeout. Dla ciebie to ludzie odpowiadający na miejscu za to, żeby wszystko działało.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "organizator techniczny",
   "ekipa",
   "definicja",
   "trasa",
   "obsługa"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.3",
  "tytul": "Czym jest wyścig",
  "tresc": "Wyścig: zawody rozgrywane w 1 lub kilku dyscyplinach, mogące składać się z wielu etapów. Zawody rozpoczyna odprawa zawodników przed startem do pierwszego etapu, a kończy ceremonia dekoracji.",
  "wyjasnienie": "Ważna granica czasowa: jesteś „na zawodach\" od odprawy aż do dekoracji. Przez cały ten czas obowiązuje cię regulamin — także między etapami i na stakeoucie, nie tylko na trasie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "wyścig",
   "definicja",
   "odprawa",
   "dekoracja",
   "etapy",
   "czas trwania zawodów"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.4",
  "tytul": "Czym jest etap",
  "tresc": "Etap: pokonanie całej długości trasy jeden raz.",
  "wyjasnienie": "Jedno przejechanie całej trasy to jeden etap. Gdy regulamin mówi o „kolejnym etapie\", chodzi o kolejny przejazd, niekoniecznie o kolejny dzień.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "etap",
   "definicja",
   "trasa",
   "przejazd",
   "kolejny etap"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.5",
  "tytul": "Teren wyścigów",
  "tresc": "Teren wyścigów: składa się z parkingów, stref zarezerwowanych dla widzów i dla zaprzęgów, strefy startu, strefy mety, tras i miejsc przeznaczonych dla gości oficjalnych.",
  "wyjasnienie": "Pojęcie zbiorcze na wszystko, co organizator wydzielił na zawody. Przydaje się, bo część przepisów obowiązuje „na terenie wyścigów\", a nie tylko na samej trasie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "teren wyścigów",
   "definicja",
   "parking",
   "stakeout",
   "start",
   "meta",
   "strefy"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.6",
  "tytul": "Parking dla maszerów",
  "tresc": "Parking dla maszerów: strefa wyznaczona przez organizatora do zatrzymania się pojazdów zawodników.",
  "wyjasnienie": "Stajesz tam, gdzie wyznaczył organizator, a nie tam, gdzie bliżej do startu. O miejscu decyduje obsługa zawodów.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "parking",
   "maszerzy",
   "samochody",
   "teren zawodów",
   "definicja",
   "obsługa"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "stakeout"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.7",
  "tytul": "Czym jest stakeout",
  "tresc": "Stake-out: strefa wyznaczona dla psów, maszerów, gdzie przebywają oni poza właściwym biegiem.",
  "wyjasnienie": "To twoja baza między biegami — miejsce, w którym stoją psy i ty, gdy nie jesteś na trasie. Wszystko, co regulamin mówi o zachowaniu poza biegiem, dzieje się właśnie tam.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "stakeout",
   "stake-out",
   "baza",
   "psy",
   "definicja",
   "między biegami",
   "strefa"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.8",
  "tytul": "Strefa startowa i pomoc",
  "tresc": "Strefa startowa: część trasy o długości 30 metrów od linii startu, na której dopuszczona jest pomoc zaprzęgowi.",
  "wyjasnienie": "Tylko na tym odcinku od linii startu handlerzy mogą trzymać psy i pomóc ci ruszyć. Dalej jesteś zdany na siebie — pomoc poza tą strefą to już naruszenie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "strefa startowa",
   "30 metrów",
   "pomoc",
   "handler",
   "start",
   "wyprowadzenie zaprzęgu"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.9",
  "tytul": "Strefa finiszowa a wyprzedzanie",
  "tresc": "Strefa finiszowa/metowa: część trasy aż do linii mety, długości 800 metrów, w której nie obowiązują przepisy dotyczące wyprzedzania.",
  "wyjasnienie": "Na ostatnim odcinku przed metą nie musisz już prosić o przepuszczenie ani ustępować — walczysz o metę normalnie. Wcześniej, na całej reszcie trasy, przepisy o wyprzedzaniu obowiązują w pełni.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "strefa finiszowa",
   "meta",
   "800 metrów",
   "wyprzedzanie",
   "mijanie",
   "finisz",
   "pierwszeństwo"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.10",
  "tytul": "Kto to osoba funkcyjna",
  "tresc": "Osoba funkcyjna: osoba wyznaczona przez organizatora lub osobę odpowiedzialną za przestrzeganie regulaminu, upoważniona do działania w ich imieniu w określonym zakresie.",
  "wyjasnienie": "Każdy, komu organizator lub sędzia dał konkretne uprawnienia: starter, obsługa trasy, kontrola sprzętu. W zakresie swojej funkcji jej polecenia są wiążące, nawet jeśli to wolontariusz bez sędziowskiej opaski.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "osoba funkcyjna",
   "obsługa",
   "uprawnienia",
   "definicja",
   "polecenia",
   "starter"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.11",
  "tytul": "Zawodnik i maszer",
  "tresc": "Zawodnik/maszer: osoba prowadząca zaprzęg psów, zgłoszona do startu w wyścigach.",
  "wyjasnienie": "W regulaminie to dwa słowa na tę samą osobę — czyli na ciebie, jeśli prowadzisz zaprzęg i jesteś zgłoszony do startu. Nie myl z handlerem, który tylko pomaga.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "zawodnik",
   "maszer",
   "musher",
   "definicja",
   "zgłoszenie",
   "prowadzenie zaprzęgu"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.12",
  "tytul": "Pomocnik (handler)",
  "tresc": "Pomocnik/handler: osoba wyznaczona przez organizatora lub samego maszera do pomocy zawodnikowi na starcie, mecie i punktach kontrolnych.",
  "wyjasnienie": "Osoba, którą sam wyznaczasz albo dostajesz od organizatora, do pomocy na starcie, mecie i punktach kontrolnych. To zamknięta lista miejsc — poza nimi handler nie ma cię wspierać.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "handler",
   "pomocnik",
   "start",
   "meta",
   "punkt kontrolny",
   "pomoc",
   "definicja"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "stakeout"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.1.13",
  "tytul": "Co to sytuacja nagła",
  "tresc": "Sytuacja nagła: każda sytuacja stwarzająca zagrożenie dla psów, ludzi i mienia.",
  "wyjasnienie": "Definicja jest szeroka: wszystko, co zagraża psom, ludziom albo mieniu. Powołując się na sytuację nagłą, licz się z tym, że sędzia oceni, czy zagrożenie naprawdę było.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sytuacja nagła",
   "zagrożenie",
   "wypadek",
   "definicja",
   "bezpieczeństwo",
   "wyjątek"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.0",
  "tytul": "Administracja",
  "tresc": "Administracja",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.1",
  "tytul": "Obsada osób funkcyjnych",
  "tresc": "Organizator wyścigów musi zapewnić udział odpowiedniej ilości osób funkcyjnych do prawidłowego przebiegu wyścigów. Organizator ma obowiązek upewnić się, że wyznaczone osoby potrafią pełnić powierzone im funkcje i że znają regulamin.",
  "wyjasnienie": "To obowiązek organizatora, nie twój — ma zapewnić dość ludzi i upewnić się, że znają regulamin. Ciebie dotyczy pośrednio: obsługa na trasie powinna umieć odpowiedzieć na pytanie o przepisy.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "osoby funkcyjne",
   "obsada",
   "organizator",
   "szkolenie",
   "znajomość regulaminu",
   "obsługa"
  ],
  "panele": [
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.2",
  "tytul": "Lista osób funkcyjnych",
  "tresc": "Lista osób funkcyjnych:",
  "wyjasnienie": "Sam nagłówek wyliczenia funkcji na zawodach — nic, co musisz robić. Poszczególne role opisane są w punktach pod nim.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "osoby funkcyjne",
   "lista",
   "funkcje",
   "nagłówek",
   "organizator"
  ],
  "panele": [
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.2.1",
  "tytul": "Sędzia Główny (Race Marshall)",
  "tresc": "Sędzia Główny [Race Marshall]",
  "wyjasnienie": "Najważniejsza osoba funkcyjna na zawodach — to on akceptuje sprzęt, rozstrzyga protesty i ustala kary. Jeśli masz spór, twoja droga prowadzi do niego, a jego decyzja w trakcie zawodów jest nieodwołalna.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sędzia główny",
   "race marshall",
   "protesty",
   "kary",
   "osoba funkcyjna",
   "decyzje"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.2.2",
  "tytul": "Kierownik trasy",
  "tresc": "Kierownik trasy – odpowiedzialny z sprawy techniczne na trasie",
  "wyjasnienie": "To przepis o obsadzie zawodów — ciebie nie dotyczy wprost. Warto tylko wiedzieć, że za stan techniczny trasy, oznakowanie i zabezpieczenia odpowiada konkretna osoba, więc uwagi o trasie kieruj do niej albo do sędziego.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "kierownik trasy",
   "osoby funkcyjne",
   "trasa",
   "organizacja",
   "obsługa zawodów"
  ],
  "panele": [
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.2.3",
  "tytul": "Obserwatorzy trasy",
  "tresc": "Obserwatorzy trasy – osoby funkcyjne odpowiedzialne przed Sędzią Głównym",
  "wyjasnienie": "To ludzie rozstawieni wzdłuż trasy, którzy patrzą, czy jedziesz zgodnie z przepisami, i zdają relację Sędziemu Głównemu. Od nich najczęściej zaczyna się sprawa o karę, więc zachowuj się tak samo poprawnie w lesie, jak na oczach publiczności.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "obserwatorzy trasy",
   "sędziowie na trasie",
   "osoby funkcyjne",
   "kontrola",
   "kary"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.2.4",
  "tytul": "Sędzia startu i mety",
  "tresc": "Sędzia startu, Sędzia mety",
  "wyjasnienie": "Na starcie i na mecie są osobni sędziowie — to ich poleceń słuchasz w tych strefach. Nie dyskutuj tam na gorąco; sprawy sporne rozstrzyga się później u Sędziego Głównego.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sędzia startu",
   "sędzia mety",
   "start",
   "meta",
   "osoby funkcyjne"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.2.5",
  "tytul": "Szef weterynarii i dobrostan",
  "tresc": "Szef Lekarzy Weterynarii / Sędzia Dobrostanu Zwierząt (Animal Welfare)",
  "wyjasnienie": "Nad kontrolą weterynaryjną i dobrostanem psów czuwa wyznaczona osoba funkcyjna. Jej decyzja o niedopuszczeniu psa jest wiążąca, a jej uwagi traktuj poważnie — to ona może wystąpić o twoje ukaranie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "weterynarz",
   "dobrostan",
   "animal welfare",
   "kontrola psów",
   "osoby funkcyjne"
  ],
  "panele": [
   "weterynarz",
   "organizator",
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.2.2.6",
  "tytul": "Sekretariat wyścigów",
  "tresc": "Sekretariat wyścigów",
  "wyjasnienie": "Czyli biuro zawodów — obowiązkowy element organizacji. Tam załatwiasz formalności: odbiór numeru, papiery, informacje o listach startowych i wynikach.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sekretariat",
   "biuro zawodów",
   "formalności",
   "numer startowy",
   "organizacja"
  ],
  "panele": [
   "biuro",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.3.0",
  "tytul": "Stosowanie przepisów",
  "tresc": "Stosowanie przepisów",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.3.1",
  "tytul": "Licencje sędziowskie",
  "tresc": "Sędzia Główny i Sędziowie Startu i Mety muszą mieć licencje sędziowskie Polskiego Związku Sportu Psich Zaprzęgów, lub nadrzędnych organizacji międzynarodowych: IFSS, ESDRA, WSA, ICF.",
  "wyjasnienie": "To wymóg wobec organizatora — kluczowi sędziowie muszą mieć licencję PZSPZ albo międzynarodową. Dla ciebie znaczy to tyle, że decyzje na zawodach podejmują ludzie z formalnymi uprawnieniami.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "licencja",
   "sędzia główny",
   "ifss",
   "pzspz",
   "uprawnienia"
  ],
  "panele": [
   "sedzia",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.3.2",
  "tytul": "Władza Sędziego Głównego",
  "tresc": "Sędzia Główny jest władzą zwierzchnią wyścigów. Jest on jedyną osobą funkcyjną, która może podjąć decyzję o dyskwalifikacji. Sędzia Główny nie może być jednocześnie uczestnikiem wyścigu.",
  "wyjasnienie": "Zdyskwalifikować cię może wyłącznie Sędzia Główny — nikt inny: ani sędzia na trasie, ani wolontariusz, ani organizator. Jego decyzja jest na zawodach ostateczną instancją, więc do niego kierujesz sprawy sporne.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sędzia główny",
   "race marshall",
   "dyskwalifikacja",
   "kary",
   "władza"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.3.3",
  "tytul": "Uprawnienia pozostałych sędziów",
  "tresc": "Sędziowie wyścigu mają obowiązek egzekwować przestrzeganie regulaminu, nie mają prawa dyskwalifikacji. Nie pełnią swej funkcji podczas trwania biegu klasy, w której sami startują i nie mogą brać udziału w obradach Jury nad protestami dotyczącymi tej klasy.",
  "wyjasnienie": "Pozostali sędziowie egzekwują regulamin i mogą wnioskować o karę, ale sami nie dyskwalifikują. Jeśli sędzia startuje w twojej klasie, w tej klasie nie sędziuje i nie rozpatruje protestów — nie ma więc mowy o sędziowaniu samego siebie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sędziowie",
   "kary",
   "protest",
   "jury",
   "konflikt interesów"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.3.4",
  "tytul": "Kto wnioskuje o karę",
  "tresc": "Tylko sędziowie i lekarz weterynarii mają prawo wystąpienia o ukaranie zawodnika.",
  "wyjasnienie": "Ty jako zawodnik nie wnioskujesz o ukaranie kogokolwiek — nie robi tego też widz ani handler. Jeśli widziałeś złamanie przepisów, zgłoś to sędziemu i to on zdecyduje, czy sprawa idzie dalej.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "kara",
   "wniosek o ukaranie",
   "zgłoszenie",
   "sędzia",
   "weterynarz"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.4.0",
  "tytul": "Zasady uczestnictwa",
  "tresc": "Zasady uczestnictwa",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.4.1",
  "tytul": "Zgłoszenie do zawodów",
  "tresc": "Zgłoszenie",
  "wyjasnienie": "To sam nagłówek — konkretne zasady (limit miejsc i termin) znajdziesz w punktach zaraz pod nim.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "zgłoszenie",
   "zapisy",
   "rejestracja",
   "nagłówek"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.4.1.1",
  "tytul": "Limit zgłoszeń",
  "tresc": "Organizator ma prawo wprowadzenia limitu ilości zgłoszeń na danych zawodach. Limit zgłoszeń musi być ogłoszony przez organizatora najpóźniej 30 dni przed zawodami.",
  "wyjasnienie": "Liczba miejsc może być ograniczona, ale organizator musi ogłosić limit najpóźniej miesiąc przed zawodami. Jeśli limit jest, zapisuj się wcześnie — po jego wyczerpaniu możesz się nie załapać.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "limit",
   "zapisy",
   "zgłoszenia",
   "miejsca",
   "30 dni"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.4.1.2",
  "tytul": "Termin i forma zgłoszenia",
  "tresc": "Zgłoszenie musi być dostarczone przed rozpoczęciem zawodów w sposób i w czasie określonym przez organizatora wyścigu.",
  "wyjasnienie": "Zgłoszenie musi dotrzeć w sposób i w terminie wskazanym przez organizatora — sprawdź to w komunikacie zawodów. Po terminie nie masz żadnej gwarancji startu.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "termin",
   "zgłoszenie",
   "zapisy",
   "deadline",
   "komunikat"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.0",
  "tytul": "Przepisy dotyczące startu i mety",
  "tresc": "Przepisy dotyczące startu i mety",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.1",
  "tytul": "Kontrola chipa i dokumentów",
  "tresc": "Identyfikacja: na wyścigach każdy z psów musi mieć sprawdzony mikrochip oraz dokumenty potwierdzające stan zdrowia oraz pochodzenie psa (kategoria 1 i 2) przed startem do pierwszego etapu",
  "wyjasnienie": "Zanim wystartujesz po raz pierwszy, każdy twój pies przechodzi identyfikację: odczyt mikrochipa i sprawdzenie dokumentów. Zabierz komplet papierów i upewnij się wcześniej, że chip daje się odczytać — pies bez potwierdzonej tożsamości nie zostanie dopuszczony.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "chip",
   "mikrochip",
   "identyfikacja",
   "dokumenty",
   "książeczka",
   "kontrola weterynaryjna",
   "rodowód"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.2",
  "tytul": "Odstępy między startami",
  "tresc": "Przerwy między startami. Zaleca się, aby przerwy między startami wynosiły: • pół (1/2) minuty lub jedna (1) minuta dla klas pulka, skijoring, canicross • jedna (1) minuta lub dwie (2) minuty dla klas liczących do 8 psów, bikejoring, • dwie (2) minuty lub trzy (3) minuty dla klas liczących 8 psów i więcej. Wyjątek – start masowy, start równoległy (parami), bieg na dochodzenie, sztafeta.",
  "wyjasnienie": "To zalecenie dla organizatora, co ile ruszają kolejni zawodnicy — od tego zależy, ile masz czasu na dojście do linii i kiedy startujesz. Przy starcie masowym, parami, w biegu na dochodzenie i w sztafecie te odstępy w ogóle nie obowiązują.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "odstępy",
   "interwał",
   "start",
   "harmonogram",
   "sztafeta",
   "start masowy",
   "canicross"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.3",
  "tytul": "Kolejność startów",
  "tresc": "Kolejność startów",
  "wyjasnienie": "To nagłówek — zasady ustalania kolejności są w punktach poniżej.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "kolejność startów",
   "nagłówek",
   "lista startowa"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.3.1",
  "tytul": "Zatwierdzenie listy startowej",
  "tresc": "Listę startową zatwierdza Sędzia Główny. Forma przydzielania numerów startowych musi być zaznaczona w informacji o wyścigu.",
  "wyjasnienie": "Sposób przydzielania numerów (losowanie czy inny klucz) musi być podany wcześniej w informacji o wyścigu, a gotową listę zatwierdza Sędzia Główny. Jeśli coś w twojej pozycji się nie zgadza, idź z tym do biura, zanim lista zacznie obowiązywać.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "lista startowa",
   "numery startowe",
   "losowanie",
   "sędzia główny",
   "biuro"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.4",
  "tytul": "Zakaz zmian w kolejności startów",
  "tresc": "Wyznaczony porządek startów nie może być zmieniony ani przez dodanie, ani przez zastąpienie zawodnika.",
  "wyjasnienie": "Nie zamienisz się numerem z kolegą i nie wstawisz nikogo w swoje miejsce — ustalony porządek startów jest zamknięty. Jeśli nie startujesz, twoje miejsce po prostu zostaje puste.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "zamiana numerów",
   "kolejność startów",
   "zastępstwo",
   "lista startowa",
   "zakaz"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.5",
  "tytul": "Starty pojedyncze",
  "tresc": "W wyścigach ze startami pojedynczymi wyznaczona kolejność startów jest następująca: zaprzęg numerem 1 startuje jako pierwszy, zaprzęg z numerem 2 startuje jako drugi...., itd...",
  "wyjasnienie": "Przy startach pojedynczych twój numer startowy to jednocześnie miejsce w kolejce — im niższy numer, tym wcześniej ruszasz.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "start pojedynczy",
   "numer startowy",
   "kolejka",
   "kolejność"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.6",
  "tytul": "Kolejność w kolejnych etapach",
  "tresc": "Po pierwszym etapie kolejność startów zależy od całkowitego czasu przejazdu uzyskanego podczas poprzednich etapów: najszybszy zaprzęg startuje jako pierwszy, drugi jako drugi,... itd., chyba że Sędzia Główny wyścigu zadecyduje inaczej.",
  "wyjasnienie": "Od drugiego dnia kolejność wynika z sumy czasów — najszybszy rusza pierwszy. Twój numer i godzina startu mogą się więc zmienić, dlatego sprawdź nową listę startową; Sędzia Główny może też zdecydować inaczej.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "kolejność",
   "drugi etap",
   "suma czasów",
   "lista startowa",
   "godzina startu"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.7",
  "tytul": "Starty parami",
  "tresc": "Przy startach parami kolejność startów pierwszego dnia wyznaczona jest przez losowanie i tak: numer 1 i 2 startują jako pierwsi, numer 3 i 4 jako drudzy,... itd.",
  "wyjasnienie": "Gdy startuje się parami, pary na pierwszy dzień układa losowanie — nie wybierasz, z kim jedziesz.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "start parami",
   "losowanie",
   "pary",
   "kolejność startów"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.5.8",
  "tytul": "Remis a kolejność startu",
  "tresc": "W przypadku osiągnięcia jednakowego czasu przez zaprzęgi ich kolejność startów do następnego etapu powinna być odwrotna niż w poprzednim etapie.",
  "wyjasnienie": "Jeśli masz identyczny czas z kimś innym, w następnym etapie ruszacie w odwrotnej kolejności niż poprzednio.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "remis",
   "ex aequo",
   "jednakowy czas",
   "kolejność startów"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.0",
  "tytul": "Klasyfikacja",
  "tresc": "Klasyfikacja",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.1",
  "tytul": "Kiedy klasa jest klasyfikowana",
  "tresc": "Klasa jest klasyfikowana w przypadku, gdy w pierwszym etapie wystartują co najmniej trzy zaprzęgi.",
  "wyjasnienie": "Jeśli w twojej klasie wystartują mniej niż trzy zaprzęgi, klasa nie jest klasyfikowana — pojedziesz, ale bez oficjalnych miejsc. Warto sprawdzić obsadę swojej klasy przed zawodami.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "klasyfikacja",
   "trzy zaprzęgi",
   "obsada",
   "klasa",
   "wyniki"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2",
  "tytul": "Klasyfikacja końcowa",
  "tresc": "Klasyfikacja końcowa.",
  "wyjasnienie": "To nagłówek — szczegółowe zasady liczenia wyników i oznaczeń na liście są w punktach poniżej.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "klasyfikacja końcowa",
   "wyniki",
   "nagłówek"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2.1",
  "tytul": "Kto wygrywa klasę",
  "tresc": "Zaprzęg, który uzyska najkrótszy całkowity czas w swojej klasie zostanie ogłoszony jest zwycięzcą tej klasy.",
  "wyjasnienie": "Liczy się suma czasów ze wszystkich etapów, a nie wynik jednego dnia. Słabszy pierwszy bieg da się odrobić, ale zły drugi dzień potrafi zabrać podium.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "zwycięzca",
   "całkowity czas",
   "suma czasów",
   "wyniki",
   "klasyfikacja"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2.2",
  "tytul": "Miejsca ex aequo",
  "tresc": "Zaprzęgi, których całkowity czas jest jednakowy, uzyskują ex-equo wyższe miejsce, następne miejsce pozostaje wolne. Nagrody dla miejsc zdobytych ex-aequo muszą być jednakowo podzielone.",
  "wyjasnienie": "Przy identycznym czasie obaj dostajecie to samo, wyższe miejsce, a kolejne miejsce przepada — po dwóch drugich nie ma trzeciego. Nagrody za takie miejsce dzieli się po równo.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "ex aequo",
   "remis",
   "identyczny czas",
   "nagrody",
   "miejsca"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2.3",
  "tytul": "Wszyscy na liście wyników",
  "tresc": "Wszyscy uczestnicy wyścigu muszą zostać ujęci w pisemnej klasyfikacji końcowej.",
  "wyjasnienie": "Nawet jeśli nie ukończysz biegu albo zostaniesz zdyskwalifikowany, musisz znaleźć się w pisemnej klasyfikacji końcowej z odpowiednim oznaczeniem. Nikt nie znika z listy po cichu.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "lista wyników",
   "klasyfikacja",
   "wszyscy uczestnicy",
   "protokół"
  ],
  "panele": [
   "biuro",
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2.4",
  "tytul": "Oznaczenie DNS",
  "tresc": "Zawodnicy nie startujący w danym etapie z innych względów niż dyskwalifikacja muszą być zaznaczeni na liście startowej/wyników literami NS lub NAS / DNS (nieobecny na starcie / not at start / did not start).",
  "wyjasnienie": "Jeśli nie stawisz się na starcie z powodu innego niż dyskwalifikacja, przy twoim nazwisku pojawi się NS/DNS. To nie kara, tylko informacja, że nie wystartowałeś.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "dns",
   "ns",
   "nie wystartował",
   "oznaczenia",
   "lista wyników"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2.5",
  "tytul": "Oznaczenie DNF",
  "tresc": "Zawodnicy, którzy nie ukończyli etapu z innego powodu niż dyskwalifikacja muszą być zaznaczeni na liście startowej/wyników literami NF lub NAF / DNF (nieobecny na finiszu/mecie / not at finish / did not finish)",
  "wyjasnienie": "Jeśli ruszysz, ale nie dojedziesz do mety, dostaniesz NF/DNF. Od dyskwalifikacji odróżnia to jedno: powód był inny niż złamanie przepisów.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "dnf",
   "nf",
   "nie ukończył",
   "nie dojechał",
   "oznaczenia"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2.6",
  "tytul": "Oznaczenie dyskwalifikacji",
  "tresc": "Zawodnicy zdyskwalifikowani muszą być zaznaczeni na liście startowej/wyników literami DS. lub DIS (dyskwalifikacja/disqualified)",
  "wyjasnienie": "Dyskwalifikacja jest widoczna jawnie na liście wyników jako DS./DIS — nie jest zamiatana pod dywan przez zwykłe usunięcie nazwiska.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "dyskwalifikacja",
   "dis",
   "ds",
   "oznaczenia",
   "lista wyników"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.6.2.7",
  "tytul": "Oznaczenie spóźnionego startu",
  "tresc": "Zaprzęgi spóźnione muszą być zaznaczone na liście startowej/wyników literami LT lub LST (spóźniony na starcie/ late starting time).",
  "wyjasnienie": "Spóźnienie na swoją godzinę startu jest odnotowywane osobnym oznaczeniem LT/LST. Pilnuj harmonogramu i bądź w korytarzu startowym z zapasem czasu.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "spóźnienie",
   "lt",
   "lst",
   "late start",
   "godzina startu"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.7",
  "tytul": "Czas dyskwalifikujący",
  "tresc": "Czas dyskwalifikujący",
  "wyjasnienie": "To nagłówek — chodzi o limit czasu, po przekroczeniu którego przestajesz się liczyć w wynikach. Szczegóły są w punkcie pod nim.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "limit czasu",
   "czas dyskwalifikujący",
   "nagłówek"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.7.1",
  "tytul": "Limit czasu na trasie",
  "tresc": "Ewentualny limit czasu musi być określony w informacji o wyścigu i musi być zaznaczone jakich klas on dotyczy. Limit czasu odnosi się do realnego czasu przejazdu zawodnika.",
  "wyjasnienie": "Sprawdź w komunikacie zawodów, czy w twojej klasie w ogóle jest limit czasu — jeśli nie ma go tam wpisanego, nie obowiązuje. Gdy jest i go przekroczysz, wypadasz z klasyfikacji; liczony jest twój faktyczny czas przejazdu.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "limit czasu",
   "czas dyskwalifikujący",
   "cutoff",
   "komunikat",
   "klasyfikacja"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.0",
  "tytul": "Wymagania dotyczące trasy",
  "tresc": "Wymagania dotyczące trasy.",
  "wyjasnienie": "To nagłówek bloku przepisów o budowie trasy — kierowanych do organizatora. Ciebie dotyczą pośrednio: mówią, czego możesz się na trasie spodziewać.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "trasa",
   "wymagania",
   "nagłówek",
   "budowa trasy"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.1",
  "tytul": "Bezpieczeństwo trasy",
  "tresc": "Trasa powinna być bezpieczna dla zawodników i psów. Podczas przygotowywania trasy należy zwrócić szczególną uwagą na zakręty i zjazdy. Całość trasy musi być tak przygotowana, aby była bezpieczna dla największych i najszybszych zaprzęgów, biorących udział w wyścigu.",
  "wyjasnienie": "To obowiązek organizatora — trasa ma być przygotowana pod najszybszy i największy zaprzęg w stawce, ze szczególną uwagą na zakręty i zjazdy. Jeśli widzisz na trasie realne zagrożenie, powiedz o tym sędziemu lub organizatorowi zamiast rozwiązywać to samemu.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "bezpieczeństwo",
   "trasa",
   "zakręty",
   "zjazdy",
   "organizator"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.2",
  "tytul": "Trasa nie może się krzyżować",
  "tresc": "Trasa nie może krzyżować się. W miarę możliwości należy unikać pokonywania tej samej trasy więcej niż raz w ciągu tego samego etapu. Jeśli jest to niemożliwe, ponowne wykorzystanie trasy lub jej fragmentu może odbyć się tylko raz podczas jednego etapu. Rozwidlenia powinny znajdować się poza strefami startową i finiszową.",
  "wyjasnienie": "Przepis dla budujących trasę. Dla ciebie oznacza, że nie powinieneś spotkać zaprzęgu jadącego z naprzeciwka ani natknąć się na rozwidlenie tuż po starcie czy tuż przed metą.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "skrzyżowanie",
   "rozwidlenie",
   "pętla",
   "trasa",
   "kierunek"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.3",
  "tytul": "Szerokość trasy a wyprzedzanie",
  "tresc": "Trasa powinna być w miarę możliwości tak szeroka, aby umożliwić bezpieczne wyprzedzanie.",
  "wyjasnienie": "Trasa ma w miarę możliwości dawać miejsce na bezpieczne wyprzedzanie, ale to tylko zalecenie dla organizatora. W wąskich miejscach i tak obowiązują cię normalne zasady wyprzedzania — brak miejsca nie jest usprawiedliwieniem.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "wyprzedzanie",
   "mijanie",
   "szerokość trasy",
   "wąskie miejsca",
   "trasa"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.4",
  "tytul": "Odstęp między trasami",
  "tresc": "Odległość pomiędzy poszczególnymi trasami powinna być na tyle duża, aby zaprzęgi nie przeszkadzały sobie wzajemnie.",
  "wyjasnienie": "To przepis dla organizatora — chodzi o to, żeby zaprzęgi z sąsiednich pętli nie ściągały sobie nawzajem psów. Ciebie nie dotyczy wprost.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "trasy równoległe",
   "odstęp",
   "przeszkadzanie",
   "organizator"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.5",
  "tytul": "Stake-out niewidoczny z trasy",
  "tresc": "Z trasy nie powinien być widoczny stake-out ani parking.",
  "wyjasnienie": "Przepis dla organizatora, ale sens jest praktyczny: psy widzące stake-out czy parking zaczynają tam ściągać. Dlatego strefę dla psów ustawia się poza zasięgiem wzroku z trasy.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "stake-out",
   "parking",
   "trasa",
   "widoczność",
   "psy"
  ],
  "panele": [
   "organizator",
   "stakeout"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.6",
  "tytul": "Trasa a drogi publiczne",
  "tresc": "W miarę możliwości trasa nie powinna biec po czy przecinać dróg publicznych, jeśli jest to niemożliwe należy uzyskać zgodę odpowiednich władz, zabezpieczyć zamknięcie ruchu kołowego. W miejscach tych powinny znajdować się osoby funkcyjne.",
  "wyjasnienie": "Tam, gdzie trasa styka się z drogą publiczną, musi stać osoba funkcyjna i być zabezpieczony ruch. Jadąc przez takie miejsce, bezwzględnie stosuj się do jej sygnałów.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "droga publiczna",
   "przejazd",
   "ruch drogowy",
   "osoba funkcyjna",
   "bezpieczeństwo"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.7",
  "tytul": "Trasa wzdłuż urwiska",
  "tresc": "W przypadku, gdy trasa przebiega wzdłuż urwiska zaleca się staranne odgrodzenie jej np. taśmami, słomą, oznakowanie (żółty trójkąt) i ewentualne ustawienie osób funkcyjnych.",
  "wyjasnienie": "Przepis dla organizatora, ale zapamiętaj oznaczenie: żółty trójkąt to ostrzeżenie o niebezpiecznym miejscu. Widzisz go — zwalniasz i zjeżdżasz od krawędzi.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "urwisko",
   "żółty trójkąt",
   "ostrzeżenie",
   "taśmy",
   "niebezpieczne miejsce"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.8",
  "tytul": "Kładki i mostki",
  "tresc": "W przypadku przejazdu przez kładkę czy mostek zaleca się wyłożenie ich matami lub staranne wysypanie śniegiem.",
  "wyjasnienie": "Zalecenie dla organizatora, żeby przejazd po kładce nie był śliski — na zawodach bezśnieżnych w praktyce oznacza to maty. Ciebie nie dotyczy wprost.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "kładka",
   "mostek",
   "maty",
   "śliska nawierzchnia",
   "organizator"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.9",
  "tytul": "Wysokość taśm na trasie",
  "tresc": "Przy wytyczaniu trasy z użyciem taśm należy powiesić je na takiej wysokości, aby były dobrze widoczne dla psów.",
  "wyjasnienie": "Przepis dla stawiających trasę — taśmy mają wisieć na wysokości, na której widzą je psy, a nie tylko ludzie. Ciebie nie dotyczy wprost.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "taśmy",
   "wytyczanie trasy",
   "oznakowanie",
   "psy",
   "organizator"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.10",
  "tytul": "Parametry trasy sprinterskiej",
  "tresc": "Zalecana szerokość trasy sprinterskiej wynosi 3 metry. W miejscach zwężenia trasy powinny być umieszczone znaki ostrzegawcze (żółty trójkąt). Trasa sprinterska powinna być tak przygotowana, aby umożliwiała rozwijanie jak największych prędkości. Na trasie sprinterskiej nie powinny znajdować się zjazdy lub podjazdy o kącie większym jak 35° (oznakowanie żółty trójkąt).",
  "wyjasnienie": "Zalecane 3 metry szerokości i brak podjazdów oraz zjazdów stromszych niż 35 stopni to sprawa organizatora. Dla ciebie najważniejszy jest tu żółty trójkąt — oznacza zwężenie albo strome miejsce, w którym trzeba zwolnić.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "trasa sprinterska",
   "szerokość",
   "żółty trójkąt",
   "zwężenie",
   "zjazd",
   "podjazd"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.11",
  "tytul": "Strefa startowa 30 metrów",
  "tresc": "Strefa startowa (korytarz startowy) musi mieć 30 m długości i być zorganizowana w taki sposób, aby można było z niej wyprowadzić cały zaprzęg.",
  "wyjasnienie": "Pierwsze 30 metrów od linii startu to korytarz startowy — odcinek, na którym twój handler może jeszcze pomagać przy zaprzęgu. Za jego końcem jesteś zdany na siebie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "strefa startowa",
   "korytarz startowy",
   "30 metrów",
   "handler",
   "pomoc"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.12",
  "tytul": "Strefa finiszowa 800 metrów",
  "tresc": "Strefa finiszowa musi mieć 800 m długości i być odpowiednio szeroka, aby zaprzęgi mogły się swobodnie wyprzedzać. W strefie finiszowej nie powinno być ostrych zakrętów.",
  "wyjasnienie": "Ostatnie 800 metrów przed metą to strefa finiszowa — z założenia szeroka, bez ostrych zakrętów, żeby dało się w niej swobodnie walczyć o pozycję.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "strefa finiszowa",
   "800 metrów",
   "meta",
   "finisz",
   "wyprzedzanie"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.13",
  "tytul": "Widoczność linii startu i mety",
  "tresc": "Linie startu i mety muszą być wyraźnie widoczne.",
  "wyjasnienie": "To obowiązek organizatora — linie mają być jednoznacznie widoczne, żeby nikt nie miał wątpliwości, gdzie zatrzymuje się pomiar czasu.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "linia startu",
   "linia mety",
   "widoczność",
   "pomiar czasu",
   "organizator"
  ],
  "panele": [
   "organizator",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.14",
  "tytul": "Przepisy dla dryland",
  "tresc": "Przepisy szczegółowe dla wyścigów w warunkach bezśnieżnych (dryland)",
  "wyjasnienie": "Nagłówek bloku przepisów o trasach bezśnieżnych — czyli dokładnie takich, jak na SKYLOS. Punkty pod nim dotyczą ciebie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "dryland",
   "bezśnieżne",
   "trasa",
   "nagłówek",
   "skylos"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.14.1",
  "tytul": "Twarda nawierzchnia na dryland",
  "tresc": "Trasa nie powinna przebiegać po drogach asfaltowych lub o szorstkiej, ostrej czy bardzo twardej nawierzchni. Jeżeli nie można tego uniknąć odcinki te nie powinny przekroczyć 5% całej długości trasy.",
  "wyjasnienie": "Asfaltu i ostrej nawierzchni na trasie bezśnieżnej ma być jak najmniej — najwyżej co dwudziesty kilometr. Krótkie takie odcinki mogą się jednak zdarzyć, więc sprawdzaj łapy psów po biegu.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "asfalt",
   "nawierzchnia",
   "dryland",
   "łapy",
   "5 procent",
   "trasa"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.8.14.2",
  "tytul": "Zakaz startu na zjeździe",
  "tresc": "Start na stromym zjeździe jest niedopuszczalny.",
  "wyjasnienie": "Twardy zakaz wobec organizatora — start nigdy nie może być ustawiony na stromym zjeździe. Jeśli w takim miejscu stoi linia startu, jest to niezgodne z regulaminem.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "start",
   "stromy zjazd",
   "dryland",
   "zakaz",
   "bezpieczeństwo"
  ],
  "panele": [
   "organizator",
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.0",
  "tytul": "Skrócenie trasy",
  "tresc": "Dystanse. Uwaga: Jeśli nagłe okoliczności zmuszają organizatorów do skrócenia tras, skrócenie nie może przekroczyć 25% dotychczasowej długości tras.",
  "wyjasnienie": "Jeśli nagła sytuacja (pogoda, wypadek, stan trasy) zmusi organizatora do skrócenia trasy, może ją skrócić najwyżej o jedną czwartą. Śledź komunikaty w dniu zawodów, bo dystans może się zmienić już po twoim przyjeździe.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "skrócenie trasy",
   "dystans",
   "25 procent",
   "zmiana trasy",
   "komunikat"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.1",
  "tytul": "Wyścigi sprinterskie",
  "tresc": "Wyścigi sprinterskie:",
  "wyjasnienie": "To nagłówek — punkty pod nim opisują dystanse w wyścigach sprinterskich.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sprint",
   "dystanse",
   "nagłówek",
   "wyścigi sprinterskie"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.1.1",
  "tytul": "Dystanse kolejnych etapów",
  "tresc": "Dystans każdego etapu nie musi być jednakowy, ale najkrótszy etap powinien przypaść pierwszego dnia. Długości kolejnych etapów nie powinny przekroczyć 150% długości pierwszego etapu.",
  "wyjasnienie": "Kolejne dni mogą być dłuższe niż pierwszy, ale nie więcej niż o połowę — najkrótszy etap przypada pierwszego dnia. Planuj siły i przygotowanie psów na cały weekend, nie tylko na pierwszy bieg.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "etapy",
   "dystans",
   "150 procent",
   "pierwszy dzień",
   "sprint",
   "planowanie"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.1.2",
  "tytul": "Dystanse zaprzęgów na śniegu",
  "tresc": "Zalecane dystanse – wyścigi zaprzęgów na śniegu • Klasa „UL” (nielimitowana) – 14-20 km • Klasa „AB” – 10-14 km • Klasa „C” – 6-10 km • Klasa „D” – 4-6 km",
  "wyjasnienie": "Te liczby dotyczą zaprzęgów startujących na śniegu — na SKYLOS nie obowiązują, bo to zawody bezśnieżne. Nie przymierzaj ich do swojej klasy; dystanse dla dryland są podane osobno.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "dystanse",
   "śnieg",
   "zaprzęgi",
   "klasa ul",
   "klasa ab",
   "klasa c",
   "klasa d",
   "nie dotyczy"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.1.3",
  "tytul": "Dystanse pulka i skijoring",
  "tresc": "Dystanse dla dyscypliny: Pulka i Skijoring Kobiety i Mężczyźni – patrz rozdz. 2, pkt. 2.8.",
  "wyjasnienie": "Pulka i skijoring to konkurencje na śniegu — na SKYLOS ich nie ma, więc ten punkt cię nie dotyczy. Sam punkt niczego nie ustala, tylko odsyła do rozdziału 2.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "dystans",
   "pulka",
   "skijoring",
   "trasa",
   "śnieg",
   "długość trasy"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.1.4",
  "tytul": "Dystanse zaprzęgów na dryland",
  "tresc": "Zalecane dystanse – wyścigi zaprzęgów w warunkach bezśnieżnych: • Klasa D i SC1 - 2-8 km • Klasa C - 4-8 km • Klasa AB - 4-10 km",
  "wyjasnienie": "To widełki, w jakich musi się zmieścić trasa dla zaprzęgów wózkowych na zawodach bezśnieżnych, czyli takich jak SKYLOS. Sprawdź swoją klasę, a konkretny dystans na dany dzień znajdziesz w programie zawodów.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "dystans",
   "trasa",
   "dryland",
   "klasa d",
   "klasa c",
   "klasa ab",
   "sc1",
   "długość"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.1.5",
  "tytul": "Dystans w bikejoringu",
  "tresc": "Bikejoring - 2-8 km",
  "wyjasnienie": "Startując na rowerze z psem, przygotuj się na trasę w tych granicach. Dokładną długość ogłasza organizator w programie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "bikejoring",
   "rower",
   "dystans",
   "trasa",
   "długość",
   "bj"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.1.6",
  "tytul": "Dystans w canicrossie",
  "tresc": "Canicross – patrz rozdz. 3 pkt. 3.1.",
  "wyjasnienie": "Długość trasy w canicrossie zależy od twojej kategorii wiekowej — tabelę masz w punkcie 3.1. W skrócie: seniorzy i weterani 2-8 km, juniorzy 1-4 km, młodzicy 1-2 km.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "canicross",
   "cc",
   "dystans",
   "bieganie",
   "trasa",
   "kategorie wiekowe",
   "juniorzy"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.2",
  "tytul": "Dystanse średniodystansowe (MID)",
  "tresc": "Wyścigi średniodystansowe: • Dla wyścigów jednoetapowych i dwuetapowych 40-100 km min. pętla 20 km • Dla wyścigów powyżej dwóch etapów 30-100 km min. pętla 15 km • Dla wyścigów non-stop 50-100 km min. pętla 25 km • Dla formuły popularyzatorskiej min. 20 km.",
  "wyjasnienie": "Jeśli startujesz w MID, to są ramy, w jakich organizator układa trasę i długość pętli. Konkretne dystanse na SKYLOS znajdziesz w programie zawodów.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "mid",
   "średni dystans",
   "dystans",
   "pętla",
   "trasa",
   "etapy",
   "non-stop"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.9.3",
  "tytul": "Dystanse długodystansowe",
  "tresc": "Wyścigi długodystansowe: • wieloetapowe – minimum 100 km na etap • jednoetapowe – minimum 160 km.",
  "wyjasnienie": "Dotyczy wyścigów długodystansowych. Na SKYLOS takich konkurencji nie ma, więc ten punkt cię nie dotyczy.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "long distance",
   "długi dystans",
   "dystans",
   "etap",
   "trasa"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.0",
  "tytul": "Jak musi być oznakowana trasa",
  "tresc": "Znakowanie: trasa musi być oznakowana w sposób widoczny, a znaki muszą być umieszczone tak aby maszer nie miał wątpliwości, jaki ma obrać kierunek. Znaki muszą być pomalowane tylko z jednej strony, aby wskazać właściwy kierunek przebiegu trasy. Średnica znaku musi wynosić co najmniej 33 cm. Znaki umieszcza się w odległości około 1 m od brzegu trasy i na wysokości od 60 do 120 cm od ziemi lub powierzchni śniegu. Znaki powinny być widoczne z odległości około 30 m. Muszą być tak umieszczone, aby nie stwarzały niebezpieczeństwa dla psów i zawodników. Również materiał, z którego zostały wykonane nie może stanowić zagrożenia dla uczestników wyścigów.",
  "wyjasnienie": "To głównie wymagania techniczne dla organizatora, ale jedno jest ważne dla ciebie: znak jest pomalowany tylko od tej strony, z której nadjeżdżasz jadąc zgodnie z kierunkiem trasy. Jeśli widzisz same niepomalowane tyły znaków, jedziesz pod prąd albo nie swoją trasą.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znakowanie",
   "znaki",
   "trasa",
   "oznakowanie",
   "kierunek",
   "widoczność"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.1",
  "tytul": "Symbol klasy na znaku",
  "tresc": "Znaki dla poszczególnych klas muszą być oznakowane symbolem danej klasy – białymi literami w środku znaku.",
  "wyjasnienie": "Na znakach szukaj białych liter z oznaczeniem klasy. Po nich poznasz, czy dany znak dotyczy właśnie twojej konkurencji, czy innej.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "klasa",
   "symbol",
   "oznakowanie",
   "trasa",
   "litery"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.2",
  "tytul": "Znak przebytego dystansu",
  "tresc": "Ewentualna informacja o pokonanym dystansie (czarne cyfry na białym tle) powinna być umieszczona nad niebieskim znakiem.",
  "wyjasnienie": "Czarna liczba nad niebieskim znakiem mówi, ile kilometrów masz już za sobą.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "dystans",
   "kilometry",
   "oznakowanie",
   "trasa",
   "przebyty dystans"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.3",
  "tytul": "Znak dystansu do mety",
  "tresc": "Informacja o dystansie, który został jeszcze do pokonania (ujemna czarna cyfra na białym tle) powinna być umieszczona nad niebieskim znakiem.",
  "wyjasnienie": "Liczba z minusem nad niebieskim znakiem mówi, ile kilometrów zostało ci jeszcze do przejechania.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "dystans",
   "kilometry",
   "do mety",
   "oznakowanie",
   "trasa"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.4",
  "tytul": "Czerwony znak — zakręt",
  "tresc": "Czerwony okrągły znak informuje o zakręcie. Muszą być umieszczone na wszystkich rozwidleniach i skrzyżowaniach, na których nastąpi zmiana kierunku, a także przed niebezpiecznymi zakrętami trasy. Ustawia się je w odległości około 20 metrów od zakrętu po tej stronie, w którą będzie zakręt.",
  "wyjasnienie": "Czerwone kółko zobaczysz jakieś 20 m przed skrętem i stoi po tej stronie, w którą masz skręcić. Zwolnij i przygotuj psy na komendę kierunkową — czerwony znak pojawia się też przed niebezpiecznymi zakrętami.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "zakręt",
   "skręt",
   "czerwony",
   "oznakowanie",
   "skrzyżowanie",
   "trasa"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.5",
  "tytul": "Niebieski znak — prosto",
  "tresc": "Niebieski kwadrat oznacza „prosto”, „jesteś na dobrej drodze”. Może być ustawiony po dowolnej stronie trasy. Co 5 km powinny być umieszczone razem ze znakami wskazującymi przebyty dystans i dystans pozostały do przejechania.",
  "wyjasnienie": "Niebieski kwadrat to potwierdzenie, że jedziesz prosto i jesteś na właściwej trasie. Może stać po dowolnej stronie, więc patrz w obie.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "niebieski",
   "prosto",
   "kwadrat",
   "oznakowanie",
   "trasa"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.6",
  "tytul": "Potwierdzenie po skręcie",
  "tresc": "Znaki niebieskie ustawiane są w odległości około 20 m po rozwidleniu czy skrzyżowaniu, aby upewnić zawodnika, że znajduje się na właściwej trasie – w miarę możliwości powinny być widoczne z miejsca zmiany kierunku.",
  "wyjasnienie": "Około 20 m po skrzyżowaniu powinieneś zobaczyć niebieski znak. Jeśli go nie ma, prawdopodobnie skręciłeś źle — zatrzymaj się i wróć, zanim zajedziesz dalej.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "skrzyżowanie",
   "rozwidlenie",
   "potwierdzenie",
   "zgubiona trasa",
   "niebieski"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.7",
  "tytul": "Znaki przy przejeździe prosto",
  "tresc": "Na skrzyżowaniach i rozwidleniach, przez które trasa przebiega prosto muszą być ustawione zarówno 20 m przed, jak i 20 m za skrzyżowaniem/rozwidleniem.",
  "wyjasnienie": "Tam, gdzie trasa przecina skrzyżowanie na wprost, znaki stoją i przed nim, i za nim. Brak znaku po drugiej stronie to sygnał, że zjechałeś z trasy.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "skrzyżowanie",
   "rozwidlenie",
   "prosto",
   "oznakowanie",
   "trasa"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.8",
  "tytul": "Zagrodzone rozwidlenia",
  "tresc": "Trudne skrzyżowania czy rozwidlenia muszą być dodatkowo zagrodzone (taśmą, słomą, itp.). Zagrodzenie to nie może być niebezpieczne dla psów czy zawodników.",
  "wyjasnienie": "Trudne rozwidlenia organizator dodatkowo zagradza taśmą czy słomą. Traktuj takie zagrodzenie jak ścianę — droga za nim nie jest twoją trasą.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "zagrodzenie",
   "taśma",
   "rozwidlenie",
   "skrzyżowanie",
   "trasa",
   "bezpieczeństwo"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.9",
  "tytul": "Znaki po skręcie dla wybranych klas",
  "tresc": "Jeżeli znaki niebieskie ustawiane są po skrętach nie dotyczących wszystkich tras – na znaku muszą znajdować się symbole klasy, której dotyczyła zmiana kierunku (takie same, jak na znaku czerwonym przed skrętem).",
  "wyjasnienie": "Gdy z jednej trasy odchodzą różne klasy, na niebieskim znaku za skrętem są te same symbole klas, co na czerwonym przed nim. Sprawdź, czy jest tam twoja klasa — inaczej jedziesz cudzą trasą.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "klasa",
   "symbol",
   "skręt",
   "rozwidlenie",
   "oznakowanie"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.10",
  "tytul": "Żółty trójkąt — uwaga",
  "tresc": "Żółty trójkąt oznacza „uwaga”, „niebezpieczeństwo”. Mogą być umieszczane po jednej lub po obu stronach trasy. Wskazują miejsca, gdzie zaleca się zwolnienie lub zachowanie szczególnej ostrożności: stromy zjazd, ostry zakręt, oblodzony przejazd, most, droga kołowa, itp. Ustawia się je w odległości około 20 m przed niebezpiecznym miejscem.",
  "wyjasnienie": "Żółty trójkąt zapowiada niebezpieczne miejsce jakieś 20 m dalej: stromy zjazd, ostry zakręt, most, przejazd przez drogę. Zwolnij i przygotuj się do hamowania.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "żółty",
   "trójkąt",
   "niebezpieczeństwo",
   "uwaga",
   "zjazd",
   "hamowanie"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.11",
  "tytul": "Odcinek niebezpieczny",
  "tresc": "Jeśli niebezpieczny jest pewien odcinek trasy, wówczas umieszcza się dwa trójkąty jeden nad drugim na początku strefy. Koniec strefy niebezpiecznej oznacza się przekreślonym żółtym trójkątem.",
  "wyjasnienie": "Dwa trójkąty jeden nad drugim to początek dłuższego niebezpiecznego odcinka. Ostrożność obowiązuje aż do przekreślonego trójkąta, który kończy strefę.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znaki",
   "trójkąt",
   "strefa",
   "niebezpieczeństwo",
   "uwaga",
   "koniec strefy"
  ],
  "panele": [
   "zawodnik"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.12",
  "tytul": "Miejsca niebezpieczne na odprawie",
  "tresc": "Wszystkie miejsca oznaczone trójkątami muszą być omówione na odprawie zawodników.",
  "wyjasnienie": "Każde miejsce oznaczone trójkątem musi zostać omówione na odprawie zawodników. To twój powód, żeby na odprawie być i dopytać, jeśli czegoś nie zrozumiałeś — potem na trasie będzie za późno.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "odprawa",
   "briefing",
   "trójkąt",
   "niebezpieczeństwo",
   "trasa",
   "uwaga"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.13",
  "tytul": "Oznaczenie punktów kontrolnych",
  "tresc": "Punkty kontrolne oznacza się białymi, prostokątnymi tablicami z czarnymi napisami.",
  "wyjasnienie": "Punkty kontrolne poznasz po białych prostokątnych tablicach z czarnym napisem — inaczej niż kolorowe znaki kierunkowe. Na SKYLOS spotkasz je głównie na dłuższych trasach.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "punkt kontrolny",
   "kontrola",
   "tablica",
   "oznakowanie",
   "trasa",
   "checkpoint"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.14",
  "tytul": "Koniec korytarza startowego",
  "tresc": "„Koniec korytarza startowego” musi być oznakowany po obu stronach trasy – dwa niebieskie przekreślone kwadraty).",
  "wyjasnienie": "Dwa przekreślone niebieskie kwadraty po obu stronach trasy oznaczają koniec 30-metrowej strefy startowej. Do tego miejsca zaprzęgowi wolno pomagać, za nim jedziesz już sam.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "start",
   "korytarz startowy",
   "strefa startowa",
   "znaki",
   "pomoc",
   "oznakowanie"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.15",
  "tytul": "Znak strefy finiszowej",
  "tresc": "„Strefa finiszowa” oznacza się białym znakiem (lub dwoma) z cyfrą. 800 m",
  "wyjasnienie": "Biały znak z cyfrą wyznacza początek ostatnich 800 metrów. Od tego miejsca nie obowiązują przepisy o wyprzedzaniu i nikt nie ma pierwszeństwa — jedź swoje, ale patrz, kto obok.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "meta",
   "strefa finiszowa",
   "finisz",
   "800 m",
   "znaki",
   "wyprzedzanie"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.16",
  "tytul": "Osoba funkcyjna na rozwidleniu",
  "tresc": "Na rozwidleniach, gdzie różne klasy zostaną skierowane na różne trasy należy ustawić osobę funkcyjną, która będzie odpowiedzialna za właściwe przestawianie blokady, a w razie potrzeby wskaże zawodnikom właściwą trasę.",
  "wyjasnienie": "Tam, gdzie klasy rozjeżdżają się na różne trasy, stoi osoba funkcyjna od przestawiania blokady. Jeśli masz wątpliwość, w którą stronę — pytaj jej, po to tam jest.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "rozwidlenie",
   "osoba funkcyjna",
   "blokada",
   "trasa",
   "kierunek",
   "wolontariusz"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.10.17",
  "tytul": "Wygrodzenie nie zastępuje znaków",
  "tresc": "Wygrodzenie tras lub obecność osoby funkcyjnej nie oznacza, że można zaniechać normalnego znakowania.",
  "wyjasnienie": "To przepis dla organizatora — ciebie nie dotyczy wprost. Dla ciebie znaczy tyle, że znaki muszą być zawsze, nawet gdy trasa jest wygrodzona albo stoi przy niej człowiek.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "znakowanie",
   "wygrodzenie",
   "osoba funkcyjna",
   "trasa",
   "oznakowanie"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.11.0",
  "tytul": "Temperatura – wyścigi w warunkach bezśnieżnych",
  "tresc": "Temperatura – wyścigi w warunkach bezśnieżnych",
  "wyjasnienie": null,
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "4.11.1",
  "tytul": "Temperatura a start",
  "tresc": "W strefie startowej musi wisieć termometr zawieszony w cieniu, na wysokości około 1 m nad ziemią. W zależności od pomiaru temperatury zawody mogą być rozgrywane w następujący sposób: • poniżej 16°C – normalne zawody • od 16 do 20°C – dystans nie powinien przekraczać dystansu minimalnego określonego w pkt. 4.9.1.3. • od 20°C nie mogą startować zaprzęgi i bikejoring, dopuszczony jest start canicrosu.",
  "wyjasnienie": "Na zawodach bezśnieżnych decyduje termometr wiszący w cieniu w strefie startu. Poniżej 16°C jedziecie normalnie, między 16 a 20°C trasy są skracane do dystansu minimalnego, a od 20°C zaprzęgi i bikejoring w ogóle nie startują — biegnie tylko canicross. Miej to na uwadze, planując dzień i rozgrzewkę psów.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "temperatura",
   "upał",
   "termometr",
   "start",
   "odwołanie",
   "dryland",
   "canicross",
   "bikejoring"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.11.2",
  "tytul": "Wstrzymanie wyścigu przy 18°C",
  "tresc": "Z chwilą, gdy temperatura osiągnie 18°C Sędzia Główny musi zwołać zebranie z lekarzem weterynarii zawodów, aby podjąć decyzję o czasowym lub ostatecznym wstrzymaniu wyścigu. W przypadku definitywnego wstrzymania wyścigu Sędzia Główny wraz z lekarzem weterynarii sporządza raport, który podpisuje też organizator wyścigu. W przypadku różnic zdań obowiązuje decyzja lekarza weterynarii – Sędziego Dobrostanu Zwierząt",
  "wyjasnienie": "Przy 18°C Sędzia Główny musi usiąść z weterynarzem i zdecydować, czy wyścig wstrzymać — czasowo albo na dobre. Ostatnie słowo ma weterynarz jako Sędzia Dobrostanu Zwierząt i tej decyzji się nie przegłosuje.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "temperatura",
   "upał",
   "wstrzymanie",
   "przerwanie zawodów",
   "weterynarz",
   "sędzia główny",
   "dobrostan"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.11.3",
  "tytul": "Woda dla psów w canicrossie",
  "tresc": "Na trasie wyścigów canicross powinny być dostępne punkty z wodą dla ewentualnego schłodzenia psów.",
  "wyjasnienie": "Na trasie canicrossu powinny być punkty z wodą do schłodzenia psa. Dopytaj na odprawie, gdzie dokładnie są — w upał to realnie ratuje psa.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "woda",
   "canicross",
   "chłodzenie",
   "upał",
   "trasa",
   "psy"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "4.12",
  "tytul": "Pies startuje raz dziennie",
  "tresc": "Pies, który biegł już danego dnia w jednej klasie nie może wystartować w innej klasie (z wyjątkiem konkurencji dziecięcych canicross i sztafet).",
  "wyjasnienie": "Ten sam pies nie może tego samego dnia pobiec w dwóch różnych klasach. Wyjątkiem są dziecięce konkurencje canicross i sztafety. Rozpisując starty w rodzinie czy zespole, pilnuj, żeby psy się nie dublowały — inaczej start będzie nieważny.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "pies",
   "dwa starty",
   "dwie klasy",
   "jeden dzień",
   "sztafeta",
   "dzieci",
   "zgłoszenie",
   "dublowanie"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "4.13",
  "tytul": "Sezon zawodów bezśnieżnych",
  "tresc": "Dopuszczalny sezon organizacji oficjalnych wyścigów w warunkach bezśnieżnych jest następujący: • wyścigi zaprzęgów od 1 października do 31 maja. • canicross i dyscypliny z jednym psem cały rok.",
  "wyjasnienie": "To przepis organizacyjny — mówi, w jakich miesiącach wolno w ogóle rozgrywać oficjalne zawody dryland. Ciebie dotyczy tylko pośrednio, przez terminarz.",
  "sekcja": "rozdzial-4",
  "sekcjaTytul": "Rozdział 4. SZCZEGÓŁOWE PRZEPISY ORGANIZACYJNE",
  "tagi": [
   "sezon",
   "terminy",
   "dryland",
   "kalendarz",
   "zaprzęgi",
   "canicross"
  ],
  "panele": [
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "5.0.0",
  "tytul": "Czym są zawody oficjalne",
  "tresc": "Zawody oficjalne to zawody wpisane do kalendarza Polskiego Związku Sportu Psich Zaprzęgów, spełniające kryteria dystansów, klas, kategorii i organizacyjne, rozgrywane w optymalnych warunkach, sędziowane przez sędziów PZSPZ wg Regulaminu Sportowych Wyścigów Psich Zaprzęgów PZSPZ.",
  "wyjasnienie": "Definicja porządkowa. Dla ciebie oznacza tyle, że na takich zawodach obowiązuje ten regulamin w całości i sędziują sędziowie z licencją PZSPZ.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "zawody oficjalne",
   "pzspz",
   "kalendarz",
   "definicja",
   "sędziowie",
   "ranga"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "5.0.1",
  "tytul": "Mistrzostwa Polski",
  "tresc": "Mistrzostwa Polski są rozgrywane zarówno na śniegu, jak i w warunkach bezśnieżnych.",
  "wyjasnienie": "Informacja porządkowa: Mistrzostwa Polski rozgrywane są w dwóch odsłonach — śnieżnej i bezśnieżnej. Nic ci to nie nakazuje ani nie zabrania.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "mistrzostwa polski",
   "mp",
   "śnieg",
   "dryland",
   "ranga"
  ],
  "panele": [
   "organizator",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "5.0.2",
  "tytul": "Licencja do Pucharu Polski",
  "tresc": "Do udziału w zawodach zaliczanych do Pucharu Polski oraz w Mistrzostwach Polski uprawnieni są wyłącznie zawodnicy posiadający licencję zawodnika PZSPZ.",
  "wyjasnienie": "Bez ważnej licencji zawodnika PZSPZ nie wystartujesz w Pucharze Polski ani w Mistrzostwach Polski. SKYLOS liczy się do Pucharu Polski, więc licencję załatw przed zawodami — bez niej nie zostaniesz dopuszczony.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "licencja",
   "pzspz",
   "puchar polski",
   "mistrzostwa polski",
   "dopuszczenie",
   "zgłoszenie"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "5.1.0",
  "tytul": "Przepisy dotyczące ekip",
  "tresc": "Przepisy dotyczące ekip",
  "wyjasnienie": null,
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "5.1.1",
  "tytul": "Kapitan ekipy krajowej",
  "tresc": "W zawodach rangi międzynarodowej każdy zawodnik jest członkiem ekipy krajowej. Kapitan ekipy wyznaczony przez PZSPZ odpowiedzialny jest za ekipę.",
  "wyjasnienie": "Na zawodach rangi międzynarodowej — a SKYLOS to Puchar Świata IFSS — jesteś częścią ekipy krajowej, którą prowadzi kapitan wyznaczony przez PZSPZ. Dowiedz się, kto nim jest, bo to przez niego pójdą do ciebie informacje.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "kapitan",
   "ekipa",
   "reprezentacja",
   "ifss",
   "międzynarodowe",
   "team captain"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "5.1.2",
  "tytul": "Kapitanowie klubów",
  "tresc": "W zależności od decyzji organizatorów wyścigów zasada ta może obowiązywać również na innych wyścigach (w tym krajowych) w odniesieniu do członków klubów.",
  "wyjasnienie": "Organizator może rozciągnąć zasadę kapitanów także na kluby, również na zawodach krajowych. Jeśli to zrobi, ogłosi to — i wtedy twoim łącznikiem jest kapitan klubu.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "kapitan",
   "klub",
   "ekipa",
   "zawody krajowe",
   "organizator"
  ],
  "panele": [
   "zawodnik",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "5.1.3",
  "tytul": "Kapitan jako łącznik",
  "tresc": "Kapitan jest łącznikiem pomiędzy organizatorami a członkami ekipy.",
  "wyjasnienie": "Sprawy do organizatora zgłaszaj przez kapitana i od niego oczekuj odpowiedzi — tak jest ustawiony obieg informacji na zawodach z ekipami.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "kapitan",
   "ekipa",
   "komunikacja",
   "łącznik",
   "organizator",
   "informacje"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "5.1.4",
  "tytul": "Kapitan melduje się w biurze",
  "tresc": "Kapitan z chwilą przybycia na miejsce wyścigów musi zgłosić się do organizatora (do biura zawodów) poinformować o miejscu swojego pobytu podczas wyścigów.",
  "wyjasnienie": "To obowiązek kapitana, nie twój: po przyjeździe zgłasza się w biurze zawodów i mówi, gdzie go szukać. Jeśli to ty jesteś kapitanem, zrób to od razu po dotarciu na miejsce.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "kapitan",
   "biuro zawodów",
   "meldunek",
   "przyjazd",
   "ekipa"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "5.1.5",
  "tytul": "Informacja przez kapitana",
  "tresc": "Każda wiadomość, jaką ma otrzymać zawodnik, uważana jest za dostarczoną z chwilą przekazania jej kapitanowi ekipy.",
  "wyjasnienie": "Gdy organizator przekaże coś kapitanowi, w świetle regulaminu ty już to wiesz — nawet jeśli nikt do ciebie nie zadzwonił. Trzymaj kontakt z kapitanem, bo tłumaczenie „nie wiedziałem\" nie zadziała.",
  "sekcja": "rozdzial-5",
  "sekcjaTytul": "Rozdział 5. ZAWODY OFICJALNE, EKIPY",
  "tagi": [
   "kapitan",
   "informacja",
   "komunikacja",
   "powiadomienie",
   "ekipa",
   "odprawa"
  ],
  "panele": [
   "zawodnik",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.1",
  "tytul": "Lista weterynarzy PZSPZ",
  "tresc": "PZSPZ prowadzi listę lekarzy weterynarii uprawnionych do pełnienia funkcji weterynaryjnych na zawodach psich zaprzęgów.",
  "wyjasnienie": "Przepis organizacyjny — ciebie nie dotyczy wprost. Mówi tyle, że weterynarz na zawodach nie jest przypadkowy, tylko z listy prowadzonej przez związek.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "lista",
   "pzspz",
   "uprawnienia",
   "wet"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.2",
  "tytul": "Weterynarz musi być na zawodach",
  "tresc": "Na każdych zawodach sportowych psich zaprzęgów organizowanych zgodnie z przepisami PZSPZ musi być obecny sędzia dobrostanu zwierząt i lekarz lub lekarze weterynarii.",
  "wyjasnienie": "Na każdych zawodach PZSPZ obecny jest sędzia dobrostanu zwierząt i co najmniej jeden lekarz weterynarii. Jeśli z twoim psem dzieje się coś niedobrego, zawsze masz do kogo pójść.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "dobrostan",
   "obecność",
   "pomoc",
   "wet",
   "sędzia dobrostanu"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.3",
  "tytul": "Kto jest weterynarzem zawodów",
  "tresc": "Lekarz weterynarii zawodów to lekarz który:",
  "wyjasnienie": "Wstęp do trzech warunków wymienionych w punktach poniżej. Dla ciebie: nie każdy weterynarz obecny na zawodach jest weterynarzem zawodów.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "wet",
   "definicja",
   "uprawnienia",
   "zawody"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.3.1",
  "tytul": "Warunek: lista PZSPZ",
  "tresc": "znajduje się na liście lekarzy weterynarii PZSPZ",
  "wyjasnienie": "Pierwszy z trzech warunków, jakie musi spełnić weterynarz zawodów. Przepis dla związku i organizatora — ciebie nie dotyczy wprost.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "lista",
   "pzspz",
   "uprawnienia",
   "warunek"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.3.2",
  "tytul": "Warunek: seminarium PZSPZ",
  "tresc": "ukończył seminarium weterynaryjne PZSPZ",
  "wyjasnienie": "Drugi warunek dla weterynarza zawodów — ukończone seminarium weterynaryjne związku. Przepis organizacyjny, ciebie nie dotyczy wprost.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "seminarium",
   "szkolenie",
   "pzspz",
   "uprawnienia"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.3.3",
  "tytul": "Warunek: znajomość przepisów",
  "tresc": "zna przepisy ogólne i przepisy weterynaryjne PZSPZ",
  "wyjasnienie": "Trzeci warunek — weterynarz zawodów musi znać regulamin i przepisy weterynaryjne PZSPZ. Przepis organizacyjny, ciebie nie dotyczy wprost.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "przepisy",
   "regulamin",
   "pzspz",
   "uprawnienia"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.4",
  "tytul": "Szef lekarzy weterynarii",
  "tresc": "Jeżeli ze względu na liczbę zawodników potrzebny jest więcej niż jeden lekarz weterynarii lub technicy weterynarii, wówczas lekarz weterynarii z uprawnieniami sędziego dobrostanu zwierząt pełni funkcje szefa lekarzy weterynarii",
  "wyjasnienie": "Gdy weterynarzy jest kilku, szefem zostaje ten z uprawnieniami sędziego dobrostanu zwierząt. To do niego trafiają sprawy, których nie rozstrzygnie pojedynczy weterynarz.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "szef",
   "dobrostan",
   "ekipa weterynaryjna",
   "technik weterynarii"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.4.1",
  "tytul": "Odpowiedzialność szefa weterynarzy",
  "tresc": "Szef lekarzy weterynarii odpowiedzialny jest za pracę całej ekipy lekarzy weterynarii i techników weterynarii zawodów.",
  "wyjasnienie": "Przepis o podziale ról w ekipie weterynaryjnej — ciebie nie dotyczy wprost. W praktyce: wątpliwości i spory weterynaryjne kończą się u szefa weterynarzy.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "szef",
   "odpowiedzialność",
   "technik weterynarii",
   "ekipa"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.0.4.2",
  "tytul": "Szef weterynarzy i Sędzia Główny",
  "tresc": "Szef lekarzy weterynarii bezpośrednio współpracuje z Sędzią Głównym Zawodów.",
  "wyjasnienie": "Szef weterynarzy pracuje bezpośrednio z Sędzią Głównym. Dlatego uwaga weterynarza na temat twojego psa potrafi bardzo szybko zamienić się w decyzję sędziowską o twoim starcie.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "sędzia główny",
   "współpraca",
   "dobrostan",
   "decyzje"
  ],
  "panele": [
   "weterynarz",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.1.0",
  "tytul": "Przygotowanie weterynaryjne zawodów",
  "tresc": "Przed zawodami Lekarz weterynarii zawodów (Szef lekarzy weterynarii) współpracuje z organizatorem zawodów w zakresie przygotowania weterynaryjnego zawodów, w tym: • Powiadomienia w ustawowym terminie powiatowego lekarza weterynarii o organizacji zawodów. • Ustalenia programu opieki lekarsko weterynaryjnej nad psami, od momentu ich przybycia na miejsce zawodów, do momentu ich wyjazdu, uwzględniając – zależnie od dyscypliny i rangi zawodów – formę współpracy i ilość współpracujących lekarzy weterynarii i personelu pomocniczego.",
  "wyjasnienie": "Przepis dla organizatora i weterynarza — ciebie nie dotyczy wprost. Skutek dla ciebie jest taki, że opieka weterynaryjna obejmuje psy od przyjazdu na zawody aż do wyjazdu, a nie tylko podczas biegu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "organizator",
   "przygotowanie",
   "opieka",
   "powiatowy lekarz weterynarii"
  ],
  "panele": [
   "weterynarz",
   "organizator"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.2",
  "tytul": "Obowiązki weterynarza w trakcie",
  "tresc": "Obowiązki lekarza weterynarii czasie trwania zawodów:",
  "wyjasnienie": "Nagłówek listy obowiązków weterynarza zawodów — konkrety są w punktach poniżej.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "obowiązki",
   "zawody",
   "wet"
  ],
  "panele": [
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.2.1",
  "tytul": "Kontrola dokumentów psów",
  "tresc": "Przeprowadza kontrolę dokumentów weterynaryjnych oraz badania i przeglądy weterynaryjne.",
  "wyjasnienie": "Weterynarz sprawdza dokumenty twoich psów i przeprowadza badania oraz przeglądy. Miej książeczki pod ręką i przygotuj psa na obejrzenie — bez przejścia kontroli nie ruszysz na start.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "dokumenty",
   "książeczka",
   "szczepienia",
   "przegląd wet",
   "kontrola",
   "badanie"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.2.2",
  "tytul": "Opieka nad psami przez cały czas",
  "tresc": "Sprawuje opiekę lekarsko-weterynaryjną nad wszystkimi psami przybyłymi na zawody w każdym miejscu i każdym czasie.",
  "wyjasnienie": "Weterynarz odpowiada za wszystkie psy obecne na zawodach, w każdym miejscu i o każdej porze — także na stakeoucie, poza godzinami startów. Jeśli twojemu psu coś się dzieje, masz prawo go wezwać.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "opieka",
   "stakeout",
   "pomoc",
   "psy",
   "całodobowo"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "stakeout"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.2.3",
  "tytul": "Weterynarz w strefie mety",
  "tresc": "Podczas trwania zawodów jest obecny w strefie metowej właściwie wyposażony w sprzęt weterynaryjny i leki ze szczególnym uwzględnieniem środków pomocy doraźnej i chirurgicznej.",
  "wyjasnienie": "Podczas biegów weterynarz jest na mecie z pełnym sprzętem i lekami, łącznie z doraźną i chirurgiczną pomocą. To najszybszy punkt ratunku, gdy pies wróci z trasy w złym stanie.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "meta",
   "pomoc",
   "sprzęt",
   "leki",
   "pierwsza pomoc"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.3.0",
  "tytul": "Praca zespołu weterynarzy",
  "tresc": "Każdy z lekarzy wet i techników wet zawodów działa w porozumieniu z Szefem lekarzy weterynarii.",
  "wyjasnienie": "Przepis o wewnętrznej organizacji ekipy weterynaryjnej — ciebie nie dotyczy wprost.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "technik weterynarii",
   "zespół",
   "koordynacja",
   "szef"
  ],
  "panele": [
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.4.0",
  "tytul": "Weterynarz doradcą sędziego",
  "tresc": "Szef lekarzy weterynarii jest doradcą Sędziego Głównego i organizatora zawodów we wszystkich sprawach natury lekarsko weterynaryjnej.",
  "wyjasnienie": "We wszystkich sprawach zdrowia i dobrostanu psów Sędzia Główny i organizator opierają się na zdaniu szefa weterynarzy. Dlatego jego opinia realnie waży na decyzjach dotyczących twojego startu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "weterynarz",
   "doradca",
   "sędzia główny",
   "organizator",
   "dobrostan",
   "decyzje"
  ],
  "panele": [
   "weterynarz",
   "sedzia",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.5.0",
  "tytul": "Twój własny weterynarz na zawodach",
  "tresc": "Prywatny lekarz weterynarii ekipy lub zawodnika to lekarz weterynarii przybyły na zawody z psami ekipy lub zawodnika w celu sprawowania opieki zdrowotnej nad psami sobie powierzonymi. Jego obecność musi być zgłoszona lekarzowi weterynarii zawodów/szefowi lekarzy weterynarii. Jest on także zobowiązany uzgodnić ewentualne działania lekarsko weterynaryjne z szefem lekarzy weterynarii/ lekarzem weterynarii zawodów.",
  "wyjasnienie": "Jeśli przywozisz swojego lekarza weterynarii, zgłoś jego obecność weterynarzowi zawodów zaraz po przyjeździe. Nie może on leczyć twoich psów na własną rękę — każde działanie musi uzgodnić z szefem lekarzy weterynarii.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "prywatny weterynarz",
   "wlasny lekarz",
   "ekipa",
   "zgloszenie",
   "leczenie",
   "weterynarz zawodow"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.6.0",
  "tytul": "Leki tylko od weterynarza zawodów",
  "tresc": "Tylko oficjalni lekarze weterynarii zawodów mają prawo podawać leki psom podczas trwania zawodów.",
  "wyjasnienie": "Nie podajesz psu żadnych leków sam ani nie zlecasz tego swojemu lekarzowi — w czasie zawodów robi to wyłącznie lekarz weterynarii zawodów. Potrzebujesz czegoś dla psa, idziesz do punktu weterynaryjnego.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "leki",
   "podawanie lekow",
   "leczenie",
   "doping",
   "weterynarz zawodow",
   "zastrzyk",
   "tabletki"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.7.0",
  "tytul": "Kto płaci za weterynarza zawodów",
  "tresc": "Koszty związane z obecnością lekarza weterynarii zawodów i obsługą weterynaryjną ponosi organizator zawodów. Do kosztów tych zalicza się: ryczałt sędziowski, zakwaterowanie, wyżywienie, zwrot kosztów dojazdu",
  "wyjasnienie": "To przepis dla organizatora — ciebie nie dotyczy wprost. Dla ciebie znaczy tylko tyle, że obecność weterynarza i sama kontrola weterynaryjna nic cię nie kosztują.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "koszty",
   "oplaty",
   "organizator",
   "weterynarz",
   "ryczalt",
   "kto placi"
  ],
  "panele": [
   "organizator",
   "biuro",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.7.1",
  "tytul": "Kto płaci za leczenie psa",
  "tresc": "Koszty leków, materiałów medycznych i innych czynności lekarsko-weterynaryjnych wykonywanych na życzenie właściciela psa lub zawodnika ponosi ich zleceniodawca. Organizator zawodów ponosi koszty leków i materiałów niezbędnych do udzielenia pierwszej pomocy.",
  "wyjasnienie": "Pierwsza pomoc dla twojego psa jest na koszt organizatora, ale wszystko, co zamówisz ponad to — leki, materiały, zabiegi na życzenie — płacisz sam.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "koszty",
   "leki",
   "pierwsza pomoc",
   "platnosc",
   "zabieg",
   "kto placi"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.0",
  "tytul": "Obowiązki organizatora zawodów:",
  "tresc": "Obowiązki organizatora zawodów:",
  "wyjasnienie": null,
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [],
  "panele": [],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.1",
  "tytul": "Zgłoszenie zawodów do powiatowego weterynarza",
  "tresc": "Organizator zawodów jest zobowiązany potwierdzić na 30 dni przed zawodami powiatowego lekarza weterynarii o miejscu i dacie planowanych zawodów, oraz o wyznaczeniu lekarza weterynarii zawodów.",
  "wyjasnienie": "To przepis dla organizatora — ciebie nie dotyczy wprost. Termin 30 dni przed zawodami jest twardy, więc obsada weterynaryjna musi być znana z dużym wyprzedzeniem.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "powiatowy lekarz weterynarii",
   "zgloszenie zawodow",
   "30 dni",
   "organizator",
   "formalnosci"
  ],
  "panele": [
   "organizator",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.2",
  "tytul": "Opieka weterynaryjna dla wszystkich psów",
  "tresc": "Obowiązkiem organizatora zawodów jest zapewnienie opieki wet. wszystkim psom przybyłym na zawody w każdym miejscu i czasie poprzez:",
  "wyjasnienie": "Ten punkt otwiera listę obowiązków organizatora (6.8.3-6.8.7). Dla ciebie istotne jest to, że opieka obejmuje każdego psa na terenie zawodów — także tego, który nie startuje — w każdym miejscu i czasie.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "opieka weterynaryjna",
   "wszystkie psy",
   "organizator",
   "dostepnosc",
   "obowiazki organizatora"
  ],
  "panele": [
   "organizator",
   "weterynarz",
   "zawodnik"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.3",
  "tytul": "Weterynarz dostępny całą dobę",
  "tresc": "Obecność lekarzy weterynarii w całodobowym systemie dyżurów.",
  "wyjasnienie": "Jeśli coś dzieje się z psem w nocy, masz prawo wezwać weterynarza — dyżur jest całodobowy. Nie czekaj do rana.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "dyzur",
   "noc",
   "calodobowo",
   "pomoc",
   "weterynarz",
   "nagly wypadek"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.4",
  "tytul": "Liczba weterynarzy na zawodach",
  "tresc": "Dostosowanie liczby lekarzy weterynarii do potrzeb danych zawodów.",
  "wyjasnienie": "To przepis dla organizatora — ciebie nie dotyczy wprost. Im większa obsada zawodów, tym więcej lekarzy musi być na miejscu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "liczba lekarzy",
   "obsada",
   "organizator",
   "weterynarze",
   "personel"
  ],
  "panele": [
   "organizator",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.5",
  "tytul": "Punkt weterynaryjny na terenie",
  "tresc": "Zorganizowanie punktu weterynaryjnego który musi znajdować się w miejscu łatwo dostępnym i być widocznie oznakowany.",
  "wyjasnienie": "Punkt weterynaryjny musi być łatwo dostępny i wyraźnie oznakowany. Zlokalizuj go od razu po przyjeździe, zanim będzie potrzebny na już.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "punkt weterynaryjny",
   "oznakowanie",
   "gdzie weterynarz",
   "teren zawodow",
   "pomoc"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "organizator"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.6",
  "tytul": "Lecznica na poważniejsze zabiegi",
  "tresc": "Organizator musi uzgodnić z najbliższą lecznicą weterynaryjną możliwość przeprowadzenia poważniejszego zabiegu.",
  "wyjasnienie": "To przepis dla organizatora — ciebie nie dotyczy wprost. Praktyczny skutek: przy poważnym urazie psa jest już wcześniej ustalona lecznica, do której możesz trafić.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "lecznica",
   "zabieg",
   "szpital dla psow",
   "organizator",
   "powazny uraz"
  ],
  "panele": [
   "organizator",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.7",
  "tytul": "Transport weterynarza na trasę",
  "tresc": "Organizator wyścigu musi zapewnić do dyspozycji lekarza weterynarii zawodów środek transportu który umożliwi mu dotarcie w każde miejsce trasy oraz niezbędne środki łączności dla ekipy weterynaryjnej.",
  "wyjasnienie": "To przepis dla organizatora — ciebie nie dotyczy wprost. Praktyczny skutek: weterynarz jest w stanie dojechać do psa w dowolnym punkcie trasy i ma z kim się kontaktować.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "transport",
   "lacznosc",
   "trasa",
   "organizator",
   "ekipa weterynaryjna",
   "dojazd"
  ],
  "panele": [
   "organizator",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.8",
  "tytul": "Wykaz psów dla weterynarza",
  "tresc": "Organizator wyścigu zobowiązany jest do dostarczenia lekarzowi weterynarii kompletnej listy zawodników z ich numerami startowymi wraz z wykazem psów zgłoszonych do startu oraz tych, które przebywają na terenie zawodów ale nie biorą w nich udziału. Wykaz musi zawierać następujące dane: imię psa, datę urodzenia, rasę, nr identyfikacyjny – mikrochip, dla kat 1 i 2 nr rodowodu.",
  "wyjasnienie": "Dane, które podajesz w zgłoszeniu — imię psa, data urodzenia, rasa, numer mikrochipa, a w kat. 1 i 2 numer rodowodu — trafiają wprost na listę weterynarza. Brak albo błąd w tych danych zatrzyma cię przy badaniu, więc sprawdź je zanim przyjedziesz.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "lista psow",
   "mikrochip",
   "rodowod",
   "dane psa",
   "zgloszenie",
   "numer startowy",
   "wykaz"
  ],
  "panele": [
   "zawodnik",
   "biuro",
   "weterynarz",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.9",
  "tytul": "Godzina i miejsce badania",
  "tresc": "Organizator wyścigu musi w zawiadomieniu o wyścigach określić czas i miejsce przeprowadzenia kontroli weterynaryjnej.",
  "wyjasnienie": "Termin i miejsce kontroli weterynaryjnej znajdziesz w zawiadomieniu o zawodach — sprawdź je przed wyjazdem i zaplanuj przyjazd tak, żeby zdążyć. Pies, który nie przeszedł badania, nie wystartuje.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "kontrola weterynaryjna",
   "badanie",
   "godzina",
   "miejsce",
   "zawiadomienie",
   "harmonogram"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.8.10",
  "tytul": "Woda dla psów na dryland",
  "tresc": "Organizator wyścigu w warunkach bezśnieżnych musi zapewnić dostęp do świeżej wody dla psów. Jeśli w pobliżu nie ma naturalnych zbiorników wodnych, zaleca się ustawienie basenów z wodą oraz cysterny.",
  "wyjasnienie": "Na zawodach bezśnieżnych, czyli takich jak SKYLOS, organizator musi zapewnić dostęp do świeżej wody — baseny albo cysterna. To minimum organizatora i nie zwalnia cię z wożenia własnej wody dla psów.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "woda",
   "dryland",
   "bezsniezne",
   "chlodzenie",
   "baseny",
   "cysterna",
   "pojenie"
  ],
  "panele": [
   "zawodnik",
   "organizator",
   "stakeout"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.0",
  "tytul": "Kontrola weterynaryjna — zasady",
  "tresc": "Zasady przeprowadzania kontroli weterynaryjnej na zawodach.",
  "wyjasnienie": "Nagłówek otwierający zasady badania weterynaryjnego (6.9.1-6.9.10). Jeśli szukasz, co dokładnie sprawdza weterynarz i za co nie dopuści psa, czytaj kolejne punkty.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "kontrola weterynaryjna",
   "badanie",
   "przeglad",
   "zasady",
   "wet check"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.1",
  "tytul": "Każdy pies przechodzi badanie",
  "tresc": "Wszystkie psy znajdujące się na terenie wyścigów muszą zostać poddane kontroli weterynaryjnej.",
  "wyjasnienie": "Badanie przechodzą wszystkie psy, które przywiozłeś — także te, które tylko siedzą na stakeout i nie startują. Pies bez badania nie ma prawa przebywać na terenie zawodów.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "badanie",
   "wszystkie psy",
   "kontrola weterynaryjna",
   "psy niestartujace",
   "obowiazek",
   "stakeout"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "stakeout"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.2",
  "tytul": "Szczepienia i odrobaczenie",
  "tresc": "Wszystkie psy obecne na terenie wyścigów muszą posiadać aktualne szczepienia przeciwko: wściekliźnie, nosówce, zakaźnemu zapaleniu wątroby, parwowirozie, leptospirozie i kaszlowi kenelowemu i być zdrowe klinicznie. Za aktualne szczepienia uznaje się szczepienia nie starsze niż jeden rok. Wszystkie psy obecne na terenie wyścigu muszą być odrobaczone (najpóźniej na na pół roku przed zawodami), i posiadać stosowny wpis w dokumentacji medycznej.",
  "wyjasnienie": "W książeczce musisz mieć szczepienia nie starsze niż rok: wścieklizna, nosówka, zakaźne zapalenie wątroby, parwowiroza, leptospiroza i kaszel kenelowy, plus wpis o odrobaczeniu z ostatnich sześciu miesięcy. Brak choćby jednego wpisu oznacza niedopuszczenie psa — sprawdź daty tydzień przed wyjazdem, bo na miejscu już tego nie nadrobisz.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "szczepienia",
   "wscieklizna",
   "nosowka",
   "parwowiroza",
   "leptospiroza",
   "kaszel kenelowy",
   "odrobaczenie",
   "ksiazeczka zdrowia"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.3",
  "tytul": "Co sprawdza weterynarz",
  "tresc": "Lekarz weterynarii zawodów musi: dokonać identyfikacji psa z jego dokumentacją medyczną, ocenić stan kliniczny zwierzęcia oraz skontrolować ważność szczepień i odrobaczenia.",
  "wyjasnienie": "Weterynarz najpierw identyfikuje psa i porównuje go z dokumentacją, potem ocenia stan kliniczny, na końcu sprawdza daty szczepień i odrobaczenia. Przyprowadź psa razem z jego kompletem dokumentów.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "badanie",
   "identyfikacja",
   "chip",
   "dokumentacja",
   "ksiazeczka",
   "co sprawdza weterynarz"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.4",
  "tytul": "Kto decyduje o dopuszczeniu psa",
  "tresc": "O dopuszczeniu bądź niedopuszczeniu psa do udziału w zawodach ze względów zdrowotnych decyduje lekarz weterynarii zawodów.",
  "wyjasnienie": "W sprawach zdrowia psa ostatnie słowo ma lekarz weterynarii zawodów — nie sędzia i nie twój własny lekarz. Jego decyzji o niedopuszczeniu nie przeskoczysz na miejscu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "dopuszczenie",
   "niedopuszczenie",
   "decyzja",
   "weterynarz zawodow",
   "odwolanie",
   "zdrowie"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.5",
  "tytul": "Za co pies nie wystartuje",
  "tresc": "Do wyścigu dopuszczone mogą być wyłącznie zwierzęta całkowicie zdrowe, w bardzo dobrej kondycji fizycznej, nie przejawiające klinicznych objawów chorób. Guzy nowotworowe które przeszkadzają w normalnym funkcjonowaniu psa, poważne uszkodzenia powłok ciała, wyraźna kulawizna, itp. są wystarczającą przyczyną niedopuszczenia psa do wyścigów.",
  "wyjasnienie": "Wyraźna kulawizna, poważne uszkodzenie skóry czy guz przeszkadzający psu w normalnym funkcjonowaniu — każde z osobna wystarczy, żeby pies nie wystartował. Jeśli dzień przed startem widzisz u psa kulawiznę, nie licz na to, że weterynarz jej nie zauważy.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "kulawizna",
   "rana",
   "guz",
   "kondycja",
   "niedopuszczenie",
   "zdrowie psa",
   "objawy"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.6",
  "tytul": "Wynik badania na liście startowej",
  "tresc": "Wynik kontroli weterynaryjnej musi być odnotowany na liście startowej: psy dopuszczone do wyścigu, psy niedopuszczone do wyścigu, psy które muszą natychmiast opuścić teren wyścigu.",
  "wyjasnienie": "Wynik badania każdego psa jest wpisywany na listę startową w jednej z trzech kategorii: dopuszczony, niedopuszczony albo do natychmiastowego opuszczenia terenu. Sprawdź wpis przy swoich psach, zanim odejdziesz od punktu weterynaryjnego.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "lista startowa",
   "wynik badania",
   "dopuszczony",
   "niedopuszczony",
   "wpis",
   "kontrola weterynaryjna"
  ],
  "panele": [
   "weterynarz",
   "biuro",
   "zawodnik",
   "sedzia"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.7",
  "tytul": "Protokół z niedopuszczenia psa",
  "tresc": "W przypadkach niedopuszczenia psów do startu lub nakazu natychmiastowego opuszczenia terenu wyścigu lekarz weterynarii zobowiązany jest sporządzić protokół z podaniem przyczyny podjętych działań.",
  "wyjasnienie": "Jeśli twój pies zostanie niedopuszczony albo dostanie nakaz natychmiastowego opuszczenia terenu, weterynarz musi sporządzić protokół z podaniem przyczyny. Poproś o wgląd — to jedyny dokument, na którym oprzesz ewentualne odwołanie.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "protokol",
   "niedopuszczenie",
   "przyczyna",
   "dokument",
   "odwolanie",
   "usuniecie z terenu"
  ],
  "panele": [
   "weterynarz",
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "przydatny",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.8",
  "tytul": "Kontrola psa w każdej chwili",
  "tresc": "Lekarz weterynarii ma prawo zażądać okazania lub doprowadzenia do kontroli psa przez cały czas trwania zawodów.",
  "wyjasnienie": "Weterynarz może kazać ci okazać lub przyprowadzić psa do kontroli o dowolnej porze zawodów — nie tylko na badaniu wstępnym, także po biegu. Odmowa albo zwlekanie to prosta droga do wniosku dyscyplinarnego.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "kontrola",
   "ponowne badanie",
   "po biegu",
   "okazanie psa",
   "weterynarz",
   "wezwanie"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.9",
  "tytul": "Dyskwalifikacja za traktowanie psów",
  "tresc": "Lekarz wet. musi zgłosić Sędziemu Głównemu wniosek o dyskwalifikację zawodnika za niewłaściwe traktowanie psów.",
  "wyjasnienie": "Za niewłaściwe traktowanie psów weterynarz nie ma wyboru — musi złożyć do Sędziego Głównego wniosek o twoją dyskwalifikację. To nie jest ostrzeżenie ani rozmowa dyscyplinująca.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "dyskwalifikacja",
   "niewlasciwe traktowanie",
   "przemoc",
   "kara",
   "sedzia glowny",
   "znecanie"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.9.10",
  "tytul": "Postępowanie za złe warunki psów",
  "tresc": "Lekarz weterynarii musi zgłosić Sędziemu Głównemu wniosek o wszczęcie postępowania dyscyplinarnego w stosunku do zawodnika, w przypadku stwierdzenia niedopełnienia wymogów regulaminowych dotyczących dobrostanu zwierząt, jak np.: zbyt małe, niewłaściwie izolowane czy zanieczyszczone klatki/boksy, pozostawienie psów bez opieki na uwiązach, zwłaszcza na noc, niewłaściwy system uwiązania psów (zbyt krótkie łańcuchy, niebezpieczny materiał użyty do jego wykonania itp.), nieodpowiednia torba na psa na saniach (zbyt mała, zbyt mała powierzchnia wentylacyjna, niewłaściwe dno). W przypadku wyścigów rozgrywanych w warunkach bezśnieżnych przewożenie psa na wózku bez wymaganej odpowiedniej torby umożliwiającej bezpieczny transport",
  "wyjasnienie": "Za ciasny, brudny lub źle izolowany boks, psy zostawione na uwiązie bez opieki (zwłaszcza na noc), zbyt krótki albo niebezpieczny łańcuch, a na dryland za przewożenie psa na wózku bez odpowiedniej torby — weterynarz musi złożyć wniosek o postępowanie dyscyplinarne. Przejrzyj swoje stanowisko, boksy i wózek pod tym kątem, zanim zrobi to on.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "dobrostan",
   "boks",
   "uwiaz",
   "lancuch",
   "torba na psa",
   "wozek",
   "postepowanie dyscyplinarne",
   "stakeout"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia",
   "stakeout"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.10.0",
  "tytul": "Zdrowie psów na zawodach",
  "tresc": "Zdrowie psów.",
  "wyjasnienie": "Nagłówek grupy przepisów o zdrowiu psów (6.10.1-6.10.6): choroby zakaźne, chipowanie, minimalny wiek i waga oraz leczenie w trakcie zawodów. Konkrety znajdziesz w punktach poniżej.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "zdrowie psow",
   "choroby",
   "wiek",
   "chip",
   "leczenie",
   "naglowek"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.10.1",
  "tytul": "Choroby zakaźne — nagłówek",
  "tresc": "Choroby",
  "wyjasnienie": "Sam nagłówek, bez treści. Zasady dotyczące chorób zakaźnych są w punktach 6.10.2 i 6.10.3 — tam znajdziesz, kiedy pies i cały zaprzęg lecą z zawodów.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "choroby",
   "zakazne",
   "naglowek",
   "infekcja",
   "zdrowie psow"
  ],
  "panele": [
   "zawodnik",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.10.2",
  "tytul": "Zakaz z zakażonej hodowli",
  "tresc": "Żaden pies, ani sprzęt pochodzące z terenu hodowli, gdzie aktualnie stwierdzono wystąpienie wścieklizny, nosówki, zakaźnego zapalenia wątroby, lepstospirozy, parwowirozy lub innej choroby zakaźnej nie mogą zostać dopuszczone do wyścigu.",
  "wyjasnienie": "Jeśli w twojej hodowli aktualnie stwierdzono chorobę zakaźną, nie masz czego szukać na zawodach — zakaz obejmuje nie tylko psy, ale i sprzęt stamtąd pochodzący. Dotyczy to również psów, które same wyglądają na zdrowe.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "hodowla",
   "choroba zakazna",
   "zakaz",
   "sprzet",
   "parwowiroza",
   "nosowka",
   "kwarantanna"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.10.3",
  "tytul": "Objawy zakaźne — dyskwalifikacja",
  "tresc": "Jeśli lekarz weterynarii stwierdzi u psa/psów, obecnych na terenie wyścigów objawy choroby zakaźnej, zaprzęg zostanie zdyskwalifikowany i musi natychmiast opuścić teren wyścigów.",
  "wyjasnienie": "Wystarczy, że weterynarz stwierdzi u jednego psa objawy choroby zakaźnej — dyskwalifikowany jest cały zaprzęg i musisz natychmiast opuścić teren zawodów. Nie ma tu przeczekiwania ani izolowania psa na miejscu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "choroba zakazna",
   "dyskwalifikacja",
   "objawy",
   "opuszczenie terenu",
   "kaszel",
   "zaprzeg"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.10.4",
  "tytul": "Chip i identyfikacja psa",
  "tresc": "Wszystkie psy zgłoszone do zawodów (z wyjątkiem startujących w biegach do licencji sportowej) w celu identyfikacji muszą być oznaczone mikrochipem. Psy muszą zostać zidentyfikowane przed startem do pierwszego etapu, a powinny zostać zidentyfikowane po ukończeniu każdego etapu.",
  "wyjasnienie": "Każdy pies musi mieć mikrochip (wyjątek: biegi do licencji sportowej) i zostać zidentyfikowany przed startem do pierwszego etapu, a po każdym etapie identyfikacja może się powtórzyć. Sprawdź wcześniej, czy chip się czyta — nieczytelny chip zatrzyma cię przy badaniu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "mikrochip",
   "chip",
   "identyfikacja",
   "skanowanie",
   "etap",
   "licencja sportowa"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.10.5",
  "tytul": "Minimalny wiek i waga psa",
  "tresc": "Psy uczestniczące w wyścigu muszą mieć ukończone 12 miesięcy, w przypadku bikejoringu oraz klasy SC1 co najmniej 15 miesięcy, zaś w przypadku klas średniodystansowych i długodystansowych co najmniej 18 miesięcy; minimalna waga psa zaprzęgowego wynosi 12 kg w kondycji sportowej.",
  "wyjasnienie": "Sprawdź datę urodzenia psa przed zgłoszeniem: 12 miesięcy to minimum ogólne, bikejoring i klasa SC1 wymagają 15 miesięcy, a klasy średnio- i długodystansowe 18 miesięcy. Pies zaprzęgowy musi też ważyć minimum 12 kg w kondycji sportowej — za młody albo za lekki pies nie zostanie dopuszczony.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "wiek psa",
   "12 miesiecy",
   "15 miesiecy",
   "18 miesiecy",
   "waga psa",
   "bikejoring",
   "sc1",
   "mlody pies"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.10.6",
  "tytul": "Leczenie psa w czasie zawodów",
  "tresc": "Jakiekolwiek leczenie psa w trakcie trwania zawodów musi odbywać się za wiedzą i zgodą lekarza weterynarii zawodów. • konieczność leczenia psa musi być każdorazowo zgłoszona na piśmie. • decyzję o dopuszczeniu psa (leczonego przed lub w czasie trwania zawodów) do startu w danych zawodach podejmuje Sędzia Główny na podstawie opinii lekarza weterynarii zawodów.",
  "wyjasnienie": "Każde leczenie psa w trakcie zawodów zgłaszasz na piśmie i wykonujesz je za wiedzą oraz zgodą weterynarza zawodów. O tym, czy leczony pies w ogóle wystartuje, decyduje Sędzia Główny na podstawie opinii weterynarza — leczenie po cichu to droga do dyskwalifikacji.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "leczenie",
   "zgoda weterynarza",
   "zgloszenie pisemne",
   "leki",
   "sedzia glowny",
   "dopuszczenie",
   "doping"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.0",
  "tytul": "Dobrostan psów — nagłówek",
  "tresc": "Dobrostan psów.",
  "wyjasnienie": "Nagłówek otwierający przepisy o dobrostanie (6.11.1-6.11.4.1): kto kontroluje, jak wozić psy, jak trzymać je na stakeout i jaki sprzęt jest dopuszczalny. To sekcja, z której najczęściej biorą się wnioski dyscyplinarne.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "dobrostan",
   "naglowek",
   "transport",
   "stakeout",
   "sprzet",
   "kontrola"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia",
   "stakeout"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.1",
  "tytul": "Kto pilnuje dobrostanu",
  "tresc": "Nadzór nad dobrostanem psów na terenie zawodów sprawuje Sędzia Dobrostanu zwierząt i lekarz weterynarii zawodów. Kontroluje on sposób traktowania psów oraz warunki ich transportu i przetrzymywania.",
  "wyjasnienie": "Sędzia Dobrostanu i weterynarz zawodów chodzą po terenie i patrzą, jak traktujesz psy oraz jak je wozisz i przetrzymujesz. Kontrola nie kończy się na trasie — twoje auto i stanowisko na stakeout też są w zasięgu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "sedzia dobrostanu",
   "nadzor",
   "kontrola",
   "stakeout",
   "transport",
   "weterynarz"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "weterynarz",
   "stakeout"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.2",
  "tytul": "Transport psów — nagłówek",
  "tresc": "Transport psów.",
  "wyjasnienie": "Nagłówek zasad przewozu psów (6.11.2.1-6.11.2.5). Jeśli chcesz wiedzieć, jak musi wyglądać twoje auto i boksy, czytaj punkty poniżej.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "transport",
   "przewoz psow",
   "auto",
   "boksy",
   "naglowek"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.2.1",
  "tytul": "Auto izolowane od warunków",
  "tresc": "Wszystkie pojazdy służące do transportu psów muszą być odpowiednio izolowane od skrajnych warunków zewnętrznych, np. temperatura, wilgotność, wiatr, jak również przed spalinami.",
  "wyjasnienie": "Twoje auto musi chronić psy przed temperaturą, wilgocią, wiatrem i spalinami. Na dryland realnym zagrożeniem jest przegrzanie — buda zaparkowana w słońcu bez wentylacji to sprawa dla sędziego dobrostanu.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "transport",
   "auto",
   "izolacja",
   "spaliny",
   "upal",
   "wentylacja",
   "przegrzanie"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.2.2",
  "tytul": "Bezpieczny przewóz psa",
  "tresc": "Psy muszą być transportowane w sposób zabezpieczający je przed ucieczką, zranieniem się i innymi urazami.",
  "wyjasnienie": "Pies w transporcie nie może uciec ani zrobić sobie krzywdy — sprawdź zamki boksów i to, o co pies może się zaczepić. Odpowiadasz za to także na parkingu, nie tylko w drodze.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "transport",
   "ucieczka",
   "uraz",
   "zabezpieczenie",
   "boks",
   "zamek"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.2.3",
  "tytul": "Wymiary i czystość boksu",
  "tresc": "Boksy stosowane do przewozu psów powinny mieć takie wymiary, aby psy mogły swobodnie zmieniać w nich pozycję, stanąć i położyć się, muszą posiadać wyściółkę i być czyste.",
  "wyjasnienie": "Pies musi móc w boksie wstać, położyć się i swobodnie zmienić pozycję, a boks ma mieć wyściółkę i być czysty. Za mały albo zapuszczony boks to gotowy wniosek dyscyplinarny z punktu 6.9.10.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "boks",
   "klatka",
   "wymiary",
   "wyscielka",
   "czystosc",
   "transport",
   "za maly boks"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.2.4",
  "tytul": "Zakaz uwiązu w boksie",
  "tresc": "Psy nie mogą być w żaden sposób przywiązane w swoich boksach.",
  "wyjasnienie": "W boksie pies jedzie luzem — bez smyczy, linki czy obroży przypiętej do czegokolwiek. Uwiąz w boksie grozi uduszeniem psa i jest zakazany bez wyjątków.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "boks",
   "uwiaz",
   "smycz",
   "przywiazanie",
   "transport",
   "zakaz"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.2.5",
  "tytul": "Zakaz wożenia psów luzem",
  "tresc": "Psy nie mogą być przewożone ani przetrzymywane w pojazdach luzem – muszą być przewożone w klatkach lub boksach.",
  "wyjasnienie": "Pies nie może jechać ani czekać w aucie luzem — zawsze w klatce albo boksie. Bagażnik przegrodzony siatką nie jest boksem.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "luzem",
   "transport",
   "klatka",
   "boks",
   "bagaznik",
   "zakaz",
   "auto"
  ],
  "panele": [
   "zawodnik",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.3",
  "tytul": "Uwiąz na stakeout — nagłówek",
  "tresc": "System uwiązu psów na terenie stake-out.",
  "wyjasnienie": "Nagłówek zasad trzymania psów na uwiązie w strefie stakeout (6.11.3.1-6.11.3.4). To najczęściej kontrolowana część terenu — konkrety w punktach poniżej.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "stakeout",
   "uwiaz",
   "naglowek",
   "postoj",
   "psy na uwiezi"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.3.1",
  "tytul": "Psy na uwięzi pod opieką",
  "tresc": "Na uwiązach psy muszą znajdować się pod stałą opieką. Nie wolno ich tam pozostawiać na noc.",
  "wyjasnienie": "Nie zostawiasz psów na uwiązie bez opieki, a na noc nie wolno ich tam trzymać w ogóle — na noc wracają do boksów. Psy zostawione na stakeout na noc to gotowy wniosek dyscyplinarny.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "stakeout",
   "uwiaz",
   "noc",
   "opieka",
   "bez opieki",
   "kara",
   "zostawienie psow"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.3.2",
  "tytul": "Długość i stan uwiązów",
  "tresc": "Łańcuchy muszą być odpowiedniej długości, aby psy mogły się swobodnie poruszać. Uwiązy wykonane z lin stalowych muszą być w dobrym stanie technicznym, aby nie stwarzały zagrożenia dla psów.",
  "wyjasnienie": "Łańcuch musi być na tyle długi, by pies mógł się swobodnie poruszać, a stalowe linki nie mogą być przetarte ani postrzępione. Przejrzyj uwiązy przed wyjazdem — zbyt krótki lub zniszczony uwiąz jest wprost wymieniony jako podstawa wniosku dyscyplinarnego.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "lancuch",
   "uwiaz",
   "dlugosc",
   "linka stalowa",
   "stakeout",
   "stan techniczny"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "sedzia",
   "weterynarz"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.3.3",
  "tytul": "Zakaz psów luzem na terenie",
  "tresc": "Zabronione jest puszczanie psów luzem na terenie wyścigów.",
  "wyjasnienie": "Żaden pies nie biega luzem po terenie zawodów — ani „tylko na chwilę”, ani ten najspokojniejszy. Wypuszczenie psa to naruszenie regulaminu i realne ryzyko wypadku z jadącym zaprzęgiem.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "luzem",
   "bez smyczy",
   "teren zawodow",
   "zakaz",
   "wybieganie psa",
   "stakeout"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "sedzia",
   "organizator"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.3.4",
  "tytul": "Pogoda a trzymanie psów",
  "tresc": "Maszer odpowiedzialny jest za dostosowanie sposobu przetrzymywania psów do panujących warunków atmosferycznych.",
  "wyjasnienie": "Za dostosowanie sposobu trzymania psów do pogody odpowiadasz ty, nie organizator. Na dryland oznacza to przede wszystkim cień, wentylację i wodę w upał — nikt cię nie ostrzeże, zanim zrobi się źle.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "pogoda",
   "upal",
   "cien",
   "stakeout",
   "odpowiedzialnosc",
   "maszer",
   "warunki atmosferyczne"
  ],
  "panele": [
   "zawodnik",
   "stakeout",
   "weterynarz",
   "sedzia"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.4",
  "tytul": "Sprzęt — nagłówek",
  "tresc": "Sprzęt",
  "wyjasnienie": "Nagłówek otwierający wymagania wobec sprzętu zawodnika. Cała treść jest w punkcie 6.11.4.1.",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "sprzet",
   "naglowek",
   "szelki",
   "linki",
   "wozek"
  ],
  "panele": [
   "zawodnik",
   "sedzia"
  ],
  "waga": "kontekst",
  "sezon": "wspolny"
 },
 {
  "numer": "6.11.4.1",
  "tytul": "Bezpieczny sprzęt i nazwy klas",
  "tresc": "Sprzęt stosowany przez zawodników musi być tak skonstruowany, aby nie stwarzał zagrożenia dla psów. UWAGA: W sezonie 2025/2026 obowiązują zamiennie następujące oznaczenia klas: wyścigi na śniegu: klasa UL (nielimitowana) - SpU klasy AB0, AB1, AB2 - Sp6-8, Sp6-8NB1, Sp6-8NB2 klasa C0, C1, C2 - Sp4, Sp4NB1, Sp4NB2 klasa D0, D1, D2 - Sp2, Sp2NB1, Sp2NB2 skijoring z 1 lub 2 psami - SM1, 2; SW1, 2 (M-mężczyźni, W-kobiety) pulka z 1 lub 4 psami - PM1, 4; PW1, 4 (M-mężczyźni, W-kobiety) wyścigi w warunkach bezśnieżnych: klasy AB0, AB1, AB2 - DR6-8, DR6-8NB1, DR6-8NB2 klasa C0, C1, C2 - DR4, DR4NB1, DR4NB2 klasa D0, D1, D2 - DS2, DS2NB1, DS2NB2 klasa SC1, SC1-1 - DS1, DS1NB klasa BJM(NB), BJK(NB) - DBM(NB), DBW(NB) (M-mężczyźni, W-kobiety) klasa CCM, CCK - DCM, DCW (M-mężczyźni, W-kobiety)",
  "wyjasnienie": "Twój sprzęt — szelki, linki, wózek, hulajnoga — nie może stwarzać zagrożenia dla psów; ocenia to sędzia i weterynarz, a wadliwy sprzęt zatrzyma cię przed startem. Do punktu doklejona jest tabela oznaczeń klas na sezon 2025/2026: na dryland twoja klasa nazywa się m.in. DR6-8, DR4, DS2, DS1, DBM/DBW (bikejoring) albo DCM/DCW (canicross).",
  "sekcja": "rozdzial-6",
  "sekcjaTytul": "Rozdział 6. PRZEPISY WETERYNARYJNE I DOBROSTANU ZWIERZĄT",
  "tagi": [
   "sprzet",
   "szelki",
   "linki",
   "wozek",
   "bezpieczenstwo",
   "nazwy klas",
   "dbm",
   "dcw"
  ],
  "panele": [
   "zawodnik",
   "sedzia",
   "biuro"
  ],
  "waga": "kluczowy",
  "sezon": "wspolny"
 }
];
