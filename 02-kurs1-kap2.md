# Exempel från samhället

## Räkna med ränta {#k1-2-1}

### Begrepp

- **Ränta:** Den ersättning vi betalar när vi lånar, eller den ersättning vi får om vi lånar ut pengar.

- **Ränta på ränta**: Kallas även sammansatt ränta eller kumulativ ränta. Beskriver den ränta vi betalar eller får på ett lån som växer till följd av ränta.

- **Effektiv ränta:** Total lånekostnad för ett lån, inklusive olika typer av avgifter oavsett vad dessa avgifter kallas för.

- **Kumulativ summa:** Summan av en samling tal där vi adderar talen i tur och ordning.

### Teori

[Ränta](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/ranta#!/) kallas den ersättning man får för att låna ut pengar. Räntesats är storleken på räntan på ett lån eller sparande, uttryckt i procent. Räntesats syftar ofta på räntan per år. Ränta kan beskrivas som ett pris på lånade pengar, en ersättning för att vi låter bli att använda våra pengar här och nu.

När vi sätter in pengar på banken lånar vi ut pengar till banken. Som ersättning betalar banken ränta. Nu ska vi räkna ut hur mycket vi får tillbaka om vi sätter in pengar på ett bankkonto med 2 [procents](https://www.matteboken.se/lektioner/skolar-6/statistik/procent) räntesats per år. Två procent kan vi skriva som 2 % eller 0,02. Om vi sätter in 100 kr blir räntan första året [\\(100\*0,02 = 2\\)]{.math .inline} kr. Efter ett år har vi 100 kr + räntan som banken ger oss: [\\(100 + 2 = 102\\)]{.math .inline}.

Ett annat sätt att räkna ut detta är: [\\(100\*1,02 = 102\\)]{.math .inline}. Vi multiplicerar våra sparpengar med 1 plus räntesatsen 2 %: [\\(1\\ + \\ 0,02\\ = \\ 1,02\\)]{.math .inline}.

#### Ränta på ränta

Om vi låter pengarna ligga kvar på kontot ytterligare ett år kommer vi få ränta även på det nya beloppet, alltså ränta på 102 kr. Resultatet efter det andra året blir då [\\(102\*1,02 = 104,04\\)]{.math .inline}. Ett annat sätt att beskriva räntan för både år 1 och år 2 är:

[\\(102\*1,02\\ \\)]{.math .inline} [\\(= (100\*1,02)\*1,02\\)]{.math .inline}

[\\(= 100\*1,02\*1,02\\ \\)]{.math .inline}

[\\(= 100\*\\ (1,02)\^{2}\\ \\)]{.math .inline}

[\\(= 104,04\\ \\)]{.math .inline}

Observera att alla rader i ekvationen ger exakt samma resultat. På den tredje raden skriver vi ihop [\\(1,02\*1,02\\)]{.math .inline} till [\\((1,02)\^{2}\\)]{.math .inline}. Detta läses som "[\\(1,02\\)]{.math .inline} upphöjt till två" och är ett [potensuttryck](https://www.matteboken.se/lektioner/matte-1/aritmetik/potenser).

När ränta läggs på pengar som redan ökat till följd av ränta kallas detta för [*ränta på ränta*](https://www.matteboken.se/lektioner/matte-1/ovningsexempel/ranta-pa-ranta-effekten?gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6rAH_ZyifLZsSPHKCFPhzzrrNs0YCo2EGwWL_96veWcx62VnUONbhIaAmYFEALw_wcB#!/). Ibland används uttrycken *sammansatt ränta* eller *kumulativ ränta*, vilket betyder samma sak.

Säg att vi sätter in 5 000 kr på ett sparkonto där den årliga räntan är 2 %. Vi låter pengarna ligga kvar på kontot i tre år. Vårt sparbelopp efter år 1 blir:

Sparbelopp efter år 1 [\\(= 5\\ 000\*1,02\\)]{.math .inline}

[\\(= 5\\ 000\*1 + 5\\ 000\*0,02\\ \\)]{.math .inline}

[\\(= 5\\ 000 + 100\\ \\)]{.math .inline}

[\\(= 5\\ 100\\ \\)]{.math .inline}

År 2 och 3 får vi ränta både på våra ursprungliga sparpengar plus ränta på de pengar vi fått in i ränta tidigare år. Låt oss skriva det med en ekvation per år. Efter år 1 har vi:

[\\\[5\\ 000\*1,02 = 5\\ 100\\\]]{.math .display}

Efter år 2 får vi ränta på pengarna vi har vid slutet av år 1, det vill säga ränta på räntan:

[\\\[5\\ 100\*1,02\\ = 5\\ 202\\ \\\]]{.math .display}

Efter år 3 får vi ränta på ränta på ränta:

[\\\[5\\ 202\\ \*\\ 1,02\\ = 5\\ 306,04\\ \\ \\\]]{.math .display}

Precis som ovan kan vi använda potenser för att beskriva detta. Vi sätter 1,02 som bas i ett potensuttryck. Exponenten är lika med antal år: 3. Vårt totalbelopp efter tre år kan då skrivas:

[\\\[5\\ 000\\ \*\\ 1,02\\ \*\\ 1,02\\ \*\\ 1,02 = 5\\ 000\\ \*\\ {1,02}\^{3}\\ = \\ 5\\ 306,04\\ \\\]]{.math .display}

#### Kreditkort

När vi tar ett lån kan vi i stället få betala ränta på ränta. Kreditkort innebär att när du handlar med kortet lånar du av banken och betalar ränta på lånet. Säg att du använder ett kreditkort med 12 % årsränta, men räntan tillförs per månad. Många kreditkort har särskilda regler som räntefria månader, vilket vi ignorerar för att förenkla exemplet. För att beräkna månadsräntan tar vi årsräntan 12 % och dividerar med antal månader på ett år, 12:

Ränta per månad:  [\\(0,12/12\\ = 0,01 = 1\\%\\)]{.math .inline}

Säg nu att du använder kreditkortet för att handla för 20 000 kr och väntar 3 månader med att betala. Hur mycket blir räntan?

Räntan börjar i detta exempel läggas på ditt lån genast vid början av varje månad på den skuld som då gäller. Ny ränta läggs på gammal ränta för varje månad som lånet inte återbetalas. Efter 3 månader har ditt lån vuxit till följande belopp:

[\\\[20\\ 000\*{1,01}\^{3}\\ = \\ 20\\ 606,02\\ \\\]]{.math .display}

Räntekostnaden för att låna i tre månader på kreditkortet blir i detta fall:\
[\\(20\\ 606,02\\ --20\\ 000 = 606,02\\)]{.math .inline} kr.

### Kumulativ summa

Uttrycket "kumulativ ränta" syftar på att ränta läggs på ränta och bildar en ny total ränta, en ny summa som vi måste betala eller får betalt som ersättning för att vi lånar eller lånar ut pengar.

Ett närliggande begrepp är *kumulativ summa*, vilket beskriver en summa som beräknas per värde i en serie, inklusive alla värden i serien fram till dess. Tabell 1 visar några tal och en kolumn med en kumulativ summa och en kolumn med en vanlig summa.

**Tabell 1: Illustration av kumulativ summa.**

  -------------------------------------------------------
  **Observation nr**   **Värde**    **Kumulativ summa**
  -------------------- ------------ ---------------------
  1                    23           23

  2                    32           23+32=55

  3                    11           23+32+11=66

  4                    14           23+32+11+14=80

                       Summa: 80    
  -------------------------------------------------------

### Effektiv ränta

Enligt [konsumentkreditlagen](https://www.konsumentverket.se/for-foretag/prissattning-och-ta-betalt/konsumentkreditlagen/) är långivare skyldiga att informera om ett låns [*effektiva ränta*](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/lan#!/). Effektiv ränta är den totala kostnaden för ett lån inklusive eventuella extraavgifter, beräknat som årlig procentuell ränta på lånebeloppet.

Många lån kommer med tilläggsavgifter, till exempel avgift för att skapa lånet (uppläggningsavgift) eller avgift för att långivaren ska skicka avier (aviavgift). I praktiken innebär detta att när det står i en annons att du kan köpa något och betala "räntefritt" senare, betalar du ofta i praktiken en *effektiv ränta*, trots att företaget som säljer produkten inte kallar detta för ränta.

Ett exempel: En butik erbjuder dig att köpa en tv för 10 000 kr och skjuta upp betalningen utan ränta i 24 månader. För detta tar butiken ut en avgift på 700 kr och en "administrativ avgift" på 40 kr för varje månad, totalt [\\(40 \\times 24 = 960\\)]{.math .inline}. Totala mängden extrakostnader: [\\(700 + 40\\ \\times \\ 24 = 1\\ 660\\)]{.math .inline}. Allt detta läggs på lånet direkt vid köp. Uttryckt i procent av lånet (10 000 kr) ger detta följande effektiva ränta:

[\\\[\\frac{1\\ 660}{10\\ 000} = 16,6\\%\\\]]{.math .display}

Diverse företag erbjuder snabba sms-lån. Ett företag erbjuder dig att låna 10 000 kr till 40 % nominell ränta i 12 månader. "Nominell ränta" syftar på den ränta som skrivs ut, till exempel i en annons.

För att få reda den effektiva räntan, alltså vad vi verkligen ska betala, måste vi dock räkna med alla avgifter som tillkommer. Nominell ränta + eventuella avgifter = effektiv ränta.

Till den nominella räntan tillkommer 700 kr i vad företaget kallar för *uppläggningsavgift*, 700 kr i *förlängningsavgift* och 420 kr per månad i *aviavgift*. En tolftedel av den nominella räntan läggs till lånet respektive månad. Vi har nominell ränta + uppläggningsavgift + förlängningsavgift + aviavgifterna. Totalt belopp att återbetala för lånet på 10 000 kr blir:

[\\\[10\\ 000 \\times \\left( 1 + \\frac{0,4}{12} \\right)\^{12} + 700 + 700 + 420 \\times 12\\\]]{.math .display}

[\\\[= 14\\ 821,26 + 700 + 700 + 5\\ 040\\\]]{.math .display}

[\\\[= 21\\ 261,26\\\]]{.math .display}

För att få effektiva räntan drar vi av lånebeloppet 10 000 från denna summa och beräknar hur mycket det resterande beloppet är uttryckt i procent av lånebeloppet:

[\\\[\\frac{21\\ 261,26 - 10\\ 000}{10\\ 000} = \\frac{11\\ 261,26}{10\\ 000} = 112,6\\%\\\]]{.math .display}

Den effektiva räntan för sms-lånet är 112,6 %. Vissa lån kan ha över 1 000 procent i effektiv ränta.

Observera att detta exempel visar en förenklad beräkning av den totala lånekostnaden. Den officiella effektiva räntan beräknas enligt en standardiserad metod som tar hänsyn till när betalningar sker, och kan därför skilja sig något från detta resultat.

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-2-1"]=[  {    "id": "k1-2-1-001",    "name": "Uppgift 1",    "exercise": "Du sätter in 5 000 kr på ett sparkonto med 2 % årsränta. Hur mycket har du på kontot efter <strong>ett år</strong>?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Belopp efter 1 år": "5100" },    "answerformat": "kr",    "error": { "message": "Multiplicera beloppet med \\(1 + 0{,}02 = 1{,}02\\). Det vill säga: \\(5\\ 000 \\times 1{,}02 = ?\\)" },    "correct": { "message": "Rätt! \\(5\\ 000 \\times 1{,}02 = 5\\ 100\\) kr. Räntan för det första året är 100 kr." }  },  {    "id": "k1-2-1-002",    "name": "Uppgift 2",    "exercise": "Du låter 5 000 kr ligga kvar på samma konto (2 % årsränta) i <strong>tre år</strong>. Hur mycket har du efter tre år? Använd formeln \\[5\\ 000 \\times (1{,}02)^3\\] och runda till närmaste krona.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Belopp efter 3 år": "5306" },    "answerformat": "kr",    "error": { "message": "\\((1{,}02)^3 = 1{,}02 \\times 1{,}02 \\times 1{,}02 \\approx 1{,}0612\\). Multiplicera med 5 000." },    "correct": { "message": "Rätt! \\(5\\ 000 \\times (1{,}02)^3 = 5\\ 000 \\times 1{,}0612 \\approx 5\\ 306\\) kr. Ränta på ränta ger lite mer än tre gånger den enkla årsräntan." }  },  {    "id": "k1-2-1-003",    "name": "Uppgift 3",    "exercise": "Vilket av följande uttryck är <em>inte</em> ett synonym för <em>ränta på ränta</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Sammansatt ränta",          "Kumulativ ränta",          "Effektiv ränta",          "Kompound interest"        ],        "correct": "Effektiv ränta"      }    },    "error": { "message": "Tänk på skillnaden: ränta på ränta uppstår av sammansatt beräkning av räntan. Effektiv ränta är ett separat begrepp som inkluderar avgifter och andra kostnader." },    "correct": { "message": "Rätt! Sammansatt ränta, kumulativ ränta och compund interest är alla synonymer för ränta på ränta. Effektiv ränta är ett separat begrepp — det är den totala lånekostnaden inklusive avgifter." }  },  {    "id": "k1-2-1-004",    "name": "Uppgift 4",    "exercise": "Ett kreditkort har 12 % <em>årsränta</em>, men räntan beräknas och läggs på per <em>månad</em>. Hur stor är månadsräntan?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Månadsränta": "1" },    "answerformat": "%",    "error": { "message": "Dela årsräntan med antal månader per år: \\(0{,}12 / 12 = ?\\)" },    "correct": { "message": "Rätt! \\(0{,}12 / 12 = 0{,}01 = 1\\%\\) per månad." }  },  {    "id": "k1-2-1-005",    "name": "Uppgift 5",    "exercise": "En butik erbjuder ett köp på kredit utan angiven ränta, men tar ut en uppläggningsavgift på 500 kr på ett lån om 10 000 kr. Vilket begrepp beskriver vad denna avgift faktiskt innebär ur ett lånekostnadsperspektiv?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Nominell ränta",          "Ränta på ränta",          "Effektiv ränta",          "Kumulativ summa"        ],        "correct": "Effektiv ränta"      }    },    "error": { "message": "Avgiften är en kostnad för att låna pengar, även om butiken inte kallar det ränta. Vilket begrepp fångar <em>alla</em> kostnader för ett lån?" },    "correct": { "message": "Rätt! Effektiv ränta inkluderar alla avgifter — oavsett vad de kallas. Enligt konsumentkreditlagen är långivare skyldiga att redovisa den effektiva räntan." }  }];</script>
<div class="exercise-section" data-section-id="k1-2-1"></div>

## Nominella och reala priser {#k1-2-2}

### Begrepp

- **Indexera:** Skapa ett index av en samling värden.

- **Befolkningsindex:** Index som beskriver antal invånare i ett land eller ett område.

- **Prisindex:** Index som beskriver utvecklingen av ett eller flera priser. Ett känt exempel är det konsumentprisindex (KPI) som SCB beräknar. KPI visar den genomsnittliga prisutvecklingen för en stor mängd varor och tjänster.

- **Nominellt pris:** Pris för en vara eller tjänst, som vi är vana att se priser.

- **Realt pris:** Pris justerat för den genomsnittliga prisutvecklingen för andra varor och tjänster i samhället. Realt pris är justerat för förändringar i pengars värde.

- **Reallön:** Lön justerad för prisutvecklingen i samhället.

### Teori

Ett [index](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/index#!/) används ofta för att jämföra den relativa utvecklingen av olika fenomen över tid. Säg att vi har data med ett värde per år. För att beräkna ett index väljer vi ett basår att jämföra mot. Därefter dividerar vi värdet för respektive år med värdet för basåret, och multiplicerar med 100:

[\\\[Index\_{t} = \\frac{Värde\_{t}}{Värde\_{basår}}\*100\\\]]{.math .display}

där [\\(Index\_{t}\\)]{.math .inline} är indexvärdet för valfritt år *t*. Multiplikation med 100 är valfritt men används ofta.

Tabell 1 visar ett exempel där vi jämför befolkningsmängden i Sverige och Frankrike mellan 1960 och 2020. Sveriges befolkning ökade under perioden från 7,49 miljoner invånare till 10,37 miljoner. Frankrikes befolkning ökade från 45,66 miljoner till 64,48.

I kolumnerna till höger ser vi resultatet i form av ett befolkningsindex per land. Den relativa ökningen var större i Frankrike, vilket vi kan se genom att jämföra index. Sveriges befolkning ökad med 38,4 procent medan Frankrikes ökade med 41,2 procent under samma period.

**Tabell 1: Befolkning och befolkningsindex i Sverige och Frankrike**

+----------+:-----------:+:-------------:+:-----------:+:-------------:+
|          | **Befolkning,\              | **Befolkningsindex,\        |
|          | miljoner invånare**         | index 100 = år 1960**       |
+----------+-------------+---------------+-------------+---------------+
| **År**   | **Sverige** | **Frankrike** | **Sverige** | **Frankrike** |
+----------+-------------+---------------+-------------+---------------+
| **1960** | 7,49        | 45,66         | 100,0       | 100,0         |
+----------+-------------+---------------+-------------+---------------+
| **1970** | 8,03        | 50,52         | 107,1       | 110,7         |
+----------+-------------+---------------+-------------+---------------+
| **1980** | 8,31        | 53,71         | 110,9       | 117,6         |
+----------+-------------+---------------+-------------+---------------+
| **1990** | 8,55        | 56,41         | 114,1       | 123,6         |
+----------+-------------+---------------+-------------+---------------+
| **2000** | 8,87        | 58,67         | 118,4       | 128,5         |
+----------+-------------+---------------+-------------+---------------+
| **2010** | 9,38        | 62,44         | 125,2       | 136,8         |
+----------+-------------+---------------+-------------+---------------+
| **2020** | 10,37       | 64,48         | 138,4       | 141,2         |
+----------+-------------+---------------+-------------+---------------+

Förklaring: Data från [Our World in Data](https://ourworldindata.org/grapher/population). Antal invånare i Sverige och Frankrike 1960---2020.

### Inkomstindex

Statistiska centralbyrån (SCB) samlar varje år in uppgifter om hushållens inkomster och presenterar denna uppdelad på tiondelar av befolkningen, vilket kallas för decilgrupper.

Tabell 2 visar genomsnittlig inkomst räknat i 1 000-tals kronor för decilgrupp 1 och 10, för ett urval av år från 1995 till 2019. Decilgrupp 1 är den tiondel av befolkningen som har lägst inkomster. Decilgrupp 10 är den tiondel med högst inkomster.

Inkomsterna i tabellen är beskrivna i kronor per konsumtionsenhet. Kronor per konsumtionsenhet är ett sätt att mäta inkomst per person, justerat för det hushåll respektive person tillhör. Till exempel om en person tillhör en rik eller fattig familj. Många människor byter inkomstgrupp mellan åren, till exempel genom att gå från studier till arbete och från arbete till pension.

**Tabell 2: Inkomst per decilgrupp. 1 000-tals kr i 2019 års priser**

  -----------------------------------------------
            **Decilgrupp 1**   **Decilgrupp 10**
  -------- ------------------ -------------------
      1995        63,2               311,9

      2000        74,4               519,3

      2005        84,5               511,4

      2010        83,3               619,3

      2015        97,9               798,9

      2019        99,6               803,3
  -----------------------------------------------

Förklaring: Data från [SCB](https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__HE__HE0110__HE0110F/), genomsnittlig disponibel inkomst inklusive kapitalvinst per konsumtionsenhet. Decilgrupp 1 = den tiondel av befolkningen som respektive år hade lägst inkomster. Decilgrupp 10 = den tiondel av befolkningen som respektive år hade högst inkomster. Enskilda personer kan ha bytt decilgrupp mellan åren.

Decilgrupp 1 hade år 1995 i genomsnitt 63 200 kr. Decilgrupp 10 hade samma år en genomsnittlig inkomst på 311 900 kr. Nu ska vi skapa ett index vardera för de två decilgrupperna 1 och 10 med 1995 som basår. Indexvärdet för respektive grupp kommer år 1995 att bli 100.

Tabell 3 visar resultatet. Inkomsterna för decilgrupp 1 ökade med 57,6 % och för decilgrupp 10 med 157,6 %. Väljer vi ett annat basår blir resultaten annorlunda.

**Table 3: Indexerad inkomstutveckling per decilgrupp**

  ------------------------------------------------------------------------------------------------------------------------------------
             **Decilgrupp 1**                                            **Decilgrupp 10**
  ---------- ----------------------------------------------------------- -------------------------------------------------------------
    **1995** [\\\[\\frac{63,2}{63,2}\*100 = 100\\\]]{.math .display}     [\\\[\\frac{311,9}{311,9}\*100 = 100\\\]]{.math .display}

    **2000** 117,7                                                       166,5

    **2005** 133,7                                                       164

    **2010** 131,8                                                       198,6

    **2015** 154,9                                                       256,1

    **2019** [\\\[\\frac{99,6}{63,2}\*100 = 157,6\\\]]{.math .display}   [\\\[\\frac{803,3}{311,9}\*100 = 257,6\\\]]{.math .display}
  ------------------------------------------------------------------------------------------------------------------------------------

Förklaring: Inkomstindex för decilgrupp 1 och 10, baserat på data presenterade ovan.

### 

### Prisindex och deflatering

Ett *prisindex* visar den indexerade prisutvecklingen för en eller flera varor eller tjänster. Ett prisindex som ofta används är [Konsumentprisindex](https://www.scb.se/hitta-statistik/statistik-efter-amne/priser-och-konsumtion/konsumentprisindex/konsumentprisindex-kpi/) (KPI) som Statistiska centralbyrån (SCB) beräknar. För att räkna ut KPI samlar SCB in information om pris och andra egenskaper på en stor mängd olika varor och tjänster. Därefter beräknar SCB ett medelvärde för en hypotetisk varukorg. Varukorgen är baserad på vad människor i Sverige spenderar pengar på.

Om varorna och tjänsterna ändras, till exempel om en ny mobiltelefon lanseras med ny kvalitet, så justeras KPI-beräkningen för detta. Idealiskt sett mäter därför KPI endast rena prisförändringar. Diagram 1 visar utvecklingen av KPI mellan 1980---2024. Diagrammet visar hur konsumentprisindex under denna period ökade med från nivå 100 till lite mer än 400. En ökning med över 300 procent.

**Diagram 1: Konsumentprisindex för Sverige 1980---2022**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\2%20-%20Exempel%20från%20samhället\2-2%20-%20nominella%20och%20reala%20priser/img/k1-2-2-image1.png){style="width:4.61905in;height:2.53941in"}

Förklaring: Data från [SCB](https://www.scb.se/hitta-statistik/statistik-efter-amne/priser-och-konsumtion/konsumentprisindex/konsumentprisindex-kpi/). Diagrammet visar konsumentprisindex för Sverige år 1980--2024. Index 100 är satt till år 1980. Diagrammet visar hur konsumentpriserna under perioden i genomsnitt ökade med lite mer än 300 %.

Säg att en vara kostar 100 kr år 1 och vi tjänar 100 kr i timmen. Året därpå har alla priser och löner fördubblats. År 2 kostar varan 200 kr och vi tjänar 200 kr i timmen.

Att i denna situation säga att varans pris har fördubblats är inte särskilt informativt om vi inte samtidigt tar hänsyn till att våra inkomster har fördubblats. Att vi har fått fördubblade inkomster säger ingenting om vår levnadsstandard om vi inte samtidigt tar hänsyn till prisutvecklingen.

En vanlig metod för att justera löner och priser för samhällets prisutveckling är att dividera med KPI. Detta kallas för att *deflatera*. Ett normalt, icke-justerat pris, kallas för *nominellt pris*. Ett deflaterat pris kallas för *realt pris*. Deflaterad nominell lön kallas för *reallön*.

Det prisindex som används för att dividera priserna med kallas för *deflator*. Det går även att använda andra typer av prisindex för att deflatera. Definitionen av ett realt pris för tidpunkt *t* är i detta fall:

[\\\[Realt\\ pris\_{t} = p\_{t}\\left( \\frac{KPI\_{bas}}{KPI\_{t}} \\right)\\\]]{.math .display}

där [\\(p\_{t}\\)]{.math .inline} är det nominella priset vi vill deflatera, till exempel priset på en vara eller tjänst. [\\(KPI\_{bas}\\)]{.math .inline} är KPI-värdet för det år vi vill använda som basår och [\\(KPI\_{t}\\)]{.math .inline} är KPI-värdet för samma år som det aktuella nominella priset vi deflaterar.

Om priset på en vara ökar långsammare än priset på andra saker har denna vara blivit billigare relativt andra saker. Varans reala pris har minskat. Om priset på de varor och tjänster vi köper ökar långsammare än våra löner säger vi att vår våra reallöner, och vår reala köpkraft, har ökat.

#### Inflation och löner historiskt

Diagram 2 visar tre tidsserier: den genomsnittliga prisnivån, genomsnittliga nominell månadslön och genomsnittlig real månadslön i Sverige mellan åren 2004 och 2022. Alla tre tidsserierna är indexerade och har värdet 100 för år 2004.

Sedan 2004 har lönerna ökat nominellt med lite mer än 60 procent, vilket vi kan se på den gröna linjen. Från indexvärde 100 till lite över 160. Priserna, den röda linjen har under samma period ökat med i genomsnitt cirka 35 procent, från 100 till 135. För att beräkna den reala lönenivån i 2022 års priser tar vi för varje år *t*:

Reallön år *t* = nominell lön år *t* \* ( prisnivån 2022 / prisnivån år *t*)

Detta ger oss den blå linjen. Där kan vi se att reallönerna ökade lite mer än 20 procent under perioden. Med en nedgång 2022. Jämför vi längre tillbaka har både priser, löner och reallöner ökat mycket mer.

**Diagram 2: Priser och löner i Sverige år 2004---2022** ![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\2%20-%20Exempel%20från%20samhället\2-2%20-%20nominella%20och%20reala%20priser/img/k1-2-2-image2.png){style="width:6in;height:3.29861in"}

Förklaring: Data från [SCB](https://scb.se/). Priser = Konsumentprisindex (KPI). Nominell lön = genomsnittlig månadslön (SCB Lönestrukturstatistik). Reallön = nominell lön deflaterad med KPI. Under perioden ökade månadslönerna med i genomsnitt lite mer än 60 procent. Konsumentprisindex ökade med lite mer än 30 procent. Reallönerna ökade med i genomsnitt lite mer än 20 procent.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-2-2"]=[  {    "id": "k1-2-2-001",    "name": "Uppgift 1",    "exercise": "Sveriges befolkning var 7,49 miljoner år 1960 (basår, index = 100) och 8,03 miljoner år 1970. Beräkna befolkningsindexet för år 1970. Runda till en decimal. \\[Index_{1970} = \\frac{8{,}03}{7{,}49} \\times 100\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Index 1970": "107.2" },    "answerformat": "",    "error": { "message": "Dividera befolkningstalet 1970 med basårets befolkningstal och multiplicera med 100: \\(8{,}03 / 7{,}49 \\times 100\\)." },    "correct": { "message": "Rätt! \\(8{,}03 / 7{,}49 \\times 100 \\approx 107{,}2\\). Sveriges befolkning hade ökat med 7,2 % sedan 1960." }  },  {    "id": "k1-2-2-002",    "name": "Uppgift 2",    "exercise": "Vad menas med att <em>deflatera</em> ett pris?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att sänka ett pris artificiellt för att locka kunder",          "Att justera ett nominellt pris för den allmänna prisutvecklingen i samhället",          "Att beräkna hur mycket ett lån kostar per månad",          "Att räkna om priser från en valuta till en annan"        ],        "correct": "Att justera ett nominellt pris för den allmänna prisutvecklingen i samhället"      }    },    "error": { "message": "Tänk på relationen mellan nominellt och realt pris — vad är syftet med att dividera med KPI?" },    "correct": { "message": "Rätt! Att deflatera innebär att man dividerar ett nominellt pris med ett prisindex (t.ex. KPI) för att få ett realt pris, justerat för hur pengars värde förändrats." }  },  {    "id": "k1-2-2-003",    "name": "Uppgift 3",    "exercise": "En vara kostar 200 kr (nominellt pris) år 2010. KPI för basåret (2000) är 100 och KPI för 2010 är 125. Beräkna varans <em>reala pris</em> i basårets priser: \\[Realt\\ pris = p_t \\times \\frac{KPI_{bas}}{KPI_t}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Realt pris": "160" },    "answerformat": "kr",    "error": { "message": "Sätt in: \\(200 \\times (100 / 125) = ?\\)" },    "correct": { "message": "Rätt! \\(200 \\times (100/125) = 200 \\times 0{,}8 = 160\\) kr. Varan är alltså billigare i reala termer än det nominella priset antyder, eftersom den genomsnittliga prisnivån gått upp." }  },  {    "id": "k1-2-2-004",    "name": "Uppgift 4",    "exercise": "Nominella löner i Sverige ökade med ca 60 % mellan 2004 och 2022, medan KPI ökade med ca 35 %. Vad innebär detta för reallönerna?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Reallönerna minskade, eftersom priserna ökade",          "Reallönerna ökade, men mindre än de nominella lönerna",          "Reallönerna ökade lika mycket som de nominella lönerna",          "Reallönerna och nominella lönerna är alltid desamma"        ],        "correct": "Reallönerna ökade, men mindre än de nominella lönerna"      }    },    "error": { "message": "Reallönen är nominell lön justerad för prisutvecklingen. Om löner ökar mer än priser, vad händer med köpkraften?" },    "correct": { "message": "Rätt! Reallönerna ökade med ca 20 % — lönerna steg mer än priserna, men inte lika mycket som de nominella lönerna. Köpkraften ökade alltså, men inte med 60 %." }  },  {    "id": "k1-2-2-005",    "name": "Uppgift 5",    "exercise": "Vad är syftet med ett <em>prisindex</em> som KPI?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att mäta hur mycket ett visst företags aktie har förändrats",          "Att visa hur befolkningens storlek förändrats över tid",          "Att spåra den genomsnittliga prisutvecklingen för varor och tjänster som konsumenter köper",          "Att beräkna den effektiva räntan på lån"        ],        "correct": "Att spåra den genomsnittliga prisutvecklingen för varor och tjänster som konsumenter köper"      }    },    "error": { "message": "KPI = Konsumentprisindex. Vad mäter ett index med det namnet?" },    "correct": { "message": "Rätt! KPI mäter hur priset på en hypotetisk 'varukorg' av vanliga konsumentvaror och -tjänster förändras över tid. Det används bl.a. för att beräkna inflation och deflatera löner." }  }];</script>
<div class="exercise-section" data-section-id="k1-2-2"></div>

## Ekonomiskt välstånd och relativa förändringar {#k1-2-3}

### Begrepp

- **BNP**: Värdet av alla varor och tjänster som produceras under en avgränsad tidsperiod, till exempel ett år, och i ett avgränsat område, till exempel ett land.

- **Real BNP:** Nominell BNP justerad för rena prisförändringar.

- **Ekonomisk tillväxt:** Syftar ofta på BNP-tillväxt, förändring av BNP. Kan mätas som procentuell förändring av real BNP per år.

### Teori

Det finns flera sätt att mäta levnadsstandard, välstånd och rikedom. Ett vanligt mått är *Bruttonationalprodukt (BNP)*, vilket är värdet för alla varor och tjänster som produceras. Ofta anges BNP per land och år. År 2023 var Sveriges BNP ca 6 200 miljarder kronor. I Sverige [beräknas BNP av Statistiska centralbyrån](https://www.scb.se/hitta-statistik/sverige-i-siffror/samhallets-ekonomi/bnp-i-sverige/) (SCB).

*BNP per invånare* (BNP per capita) beräknas genom att dividera BNP med antal invånare. Ett annat mått som används ibland är BNP per arbetad timme, vilket är BNP dividerat med en uppskattning av den totala mängden arbetstimmar som utfördes i Sverige under ett år.

#### Real BNP

Säg att BNP ökade med 4 %, men att hälften av detta var rena prishöjningar. Värdet av mängden producerade varor och tjänster ökade i så fall med 2 %.

För att justera BNP för prisförändringar använder man i regel en [BNP-deflator](https://en.wikipedia.org/wiki/GDP_deflator), vilket är ett annat prisindex än konsumentprisindex (KPI). För att mäta mängden produktion justeras BNP för prisförändringar, deflateras ([här](https://www.scb.se/hitta-statistik/statistik-efter-amne/nationalrakenskaper/nationalrakenskaper/nationalrakenskaper-kvartals-och-arsberakningar/produktrelaterat/Fordjupad-information/vanliga-fragor--nationalrakenskaper/) kan du läsa mer om hur BNP deflateras).

BNP är ett sätt att mäta inkomsterna i ett land. BNP per invånare är därför ett grovt mått på befolkningens genomsnittliga levnadsstandard. För att jämföra över tid använder vi real BNP, vilket är nominell BNP justerad (deflaterad) för rena prisförändringar. BNP per arbetstimme är ett grovt mått på produktivitet, det vill säga hur mycket som produceras (räknat i pengar) per arbetstimme.

#### Sveriges ekonomiska tillväxt

Under åren 2010---2019 ökade Sveriges reala BNP per capita från 444,8 tusen kr till 488,8 tusen kr, se tabell 1. Vi börjar med att räkna ut den procentuella förändringen av BNP per capita per år. Vi skriver BNP per capita år *t* som [\\(y\_{t}\\)]{.math .inline}. Vi kan beräkna årlig procentuell förändringstakt som:

BNP-tillväxt [\\(= \\frac{y\_{t}\\ --y\_{t - 1}}{y\_{t\\ - 1}}\\)]{.math .inline}

För år 2010 får vi:

[\\\[\\frac{\\left( y\_{2010}--\\ y\_{2009} \\right)}{y\_{2009}} = \\frac{444\\ 800 - 423\\ 400}{423400} = 5,1\\%\\ \\\]]{.math .display}

Detta och resultaten för övriga årtal visas i tabell 1. Som syns i tabellen varierar tillväxten en del mellan de olika åren. Genom att beräkna ett medelvärde jämnar vi ut förändringarna. Den genomsnittliga tillväxten under hela perioden är 1,5 %.

**Tabell 1: Sveriges BNP år 2010---2019**

  ------------------------------------------------------------------------------------
  År      BNP per capita, 2019 års priser     År      BNP per capita, 2019 års priser
  ------ --------------------------------- -- ------ ---------------------------------
  2009                423 400                 2015                474 000

  2010                444 800                 2016                477 800

  2011                455 600                 2017                483 500

  2012                449 600                 2018                487 300

  2013                451 100                 2019                488 800

  2014                458 500                        
  ------------------------------------------------------------------------------------

Förklaring: Data från SCB. BNP deflaterad med BNP-deflatorn, omräknad till 2019 års priser.

#### Genomsnittlig tillväxttakt

Ett sätt att jämföra olika tidsperioder är att beräkna genomsnittlig BNP-tillväxt för fem år i taget. Ett medelvärde för BNP-tillväxten år 2010--2014 och ett medelvärde för åren 2015--2019. Vi betecknar dessa två medelvärden som [\\(\\overline{\\Delta y\_{1}\\ }\\)]{.math .inline} för perioden 2010--2014 och [\\(\\overline{\\Delta y\_{2}\\ }\\)]{.math .inline} för perioden 2015--2019. Dessa beräknas på följande sätt:

[\\\[\\overline{\\Delta y\_{1}\\ } = \\frac{5,1\\% + 2,4\\% + ( - 1,3\\%) + 0,3\\% + 1,6\\%}{5} = 1,62\\%\\\]]{.math .display}

[\\\[\\overline{\\Delta y\_{2}\\ } = \\frac{3,4\\% + 0,8\\% + 1,2\\% + 0,8\\% + 0,3\\%}{5} = 1,3\\%\\\]]{.math .display}

#### Logaritmera BNP

Repetition: [logaritmen](https://www.matteboken.se/lektioner/matte-2/logaritmer#!/) av talet *a* är lika med det värde som talet *b* måste höjas till (exponent *x*), för att bli lika med *a*:

[\\\[a = b\^{x}\\\]]{.math .display}

[Tiologaritmen](https://www.matteboken.se/lektioner/matte-2/logaritmer/tiologaritmer#!/) syftar på logaritm med bas 10. [Naturliga logaritmen](https://www.matteboken.se/lektioner/matte-3/derivata/den-naturliga-logaritmen#!/) har basen [\\(e \\approx 2,718\\)]{.math .inline}, [Eulers tal](https://www.matteboken.se/lektioner/matte-3/derivata/talet-e#!/).

Nu ska vi använda naturliga logaritmen för att jämföra BNP över tid. Tabell 2 visar Sveriges BNP i miljoner kronor år 1800--2000. Den tredje kolumnen visar [naturliga logaritmen](https://www.matteboken.se/lektioner/matte-3/derivata/den-naturliga-logaritmen#!/) av BNP. Första talet är 115 och [\\(\\ln(115) \\approx 4,7\\)]{.math .inline}, vilket innebär att [\\(e\^{4,7} \\approx 115\\)]{.math .inline}.

I tabellen kan vi se hur en lika stor relativ förändring i [\\(ln(BNP)\\)]{.math .inline} motsvaras av samma absoluta förändring av den naturliga logaritmen. Varje gång BNP fördubblas, oavsett från vilken nivå, är förändringen i [\\(ln(BNP)\\)]{.math .inline} cirka 0,7. Varje gång BNP tredubblas ökar [\\(\\ln(BNP)\\)]{.math .inline} med cirka 1,1. När BNP tiodubblas ökar [\\(ln(BNP)\\)]{.math .inline} med cirka 2,3.

**Tabell 2: BNP och naturliga logaritmen av BNP**

  --------------------------------------------------------------------------------
  År        BNP, miljoner kr   ln(BNP)      År        BNP, miljoner kr   ln(BNP)
  --------- ------------------ --------- -- --------- ------------------ ---------
  1800      115                4,7          1910      3 302              8,1

  1810      178                5,2          1920      12 200             9,4

  1820      278                5,6          1930      9 271              9,1

  1830      306                5,7          1940      13 979             9,5

  1840      382                5,9          1950      31 827             10,4

  1850      461                6,1          1960      72 272             11,2

  1860      743                6,6          1970      175 222            12,1

  1870      938                6,8          1980      531 884            13,2

  1880      1 314              7,2          1990      1 365 700          14,1

  1890      1 477              7,3          2000      2 013 311          14,5

  1900      2 245              7,7                                       
  --------------------------------------------------------------------------------

Förklaring: Data från [www.historia.se](http://www.historia.se). Ln(BNP) är naturliga logaritmen av talen i kolumnen med BNP räknat i miljoner kr.

Siffrorna från tabell 2 illustreras i figur 1 med två diagram: I det vänstra diagrammet visas en linje för BNP räknat i miljarder kronor. Under denna period ökade BNP exponentiellt. Från 115 miljoner kronor (0,115 miljarder) år 1800 till 2 013 311 miljoner kr (2 013 miljarder) år 2000. Det högra diagrammet visar samma sak i naturliga logaritmen, [\\(ln(BNP)\\)]{.math .inline}, där linjen i stället är mer rak.

I det vänstra diagrammet jämför vi absoluta förändringar, medan det högra diagrammet kan användas för att jämföra relativa förändringar. I det högra diagrammet kan vi se att Sveriges ekonomi växte snabbare under 1900-talet jämfört med 1800-talet.

Om linjen i det högra diagrammet hade varit helt rät hade de inneburit att den relativa, procentuella, tillväxttakten på lång sikt hade varit konstant. Det finns inga enkla regler för vilket mått som är bäst. Vilket mått du bör använda beror på vad du vill mäta, jämföra eller visa. Men naturliga logaritmen används ofta för att just jämföra relativa skillnader och förändringar.

**Figur 1: Sveriges BNP år 1800---2000, i miljarder kronor och uttryckt i naturliga logaritmen.**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\2%20-%20Exempel%20från%20samhället\2-3%20-%20Ekonomiskt%20välstånd%20och%20relativa%20förändringar/img/k1-2-3-image1.png){style="width:5.78165in;height:3.17857in"}Förklaring: Data från [www.historia.se](http://www.historia.se). BNP = Bruttonationalprodukt, värdet av alla varor och tjänster som produceras i Sverige under ett år. Diagrammet till vänster visar nominell BNP i miljarder kronor per år för utvalda årtal 1800---2000. Diagrammet till höger visar samma sak som diagrammet till vänster, men uttryckt i naturliga logaritmen.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-2-3"]=[  {    "id": "k1-2-3-001",    "name": "Uppgift 1",    "exercise": "Sveriges reala BNP per capita var 444 800 kr år 2010 och 455 600 kr år 2011. Beräkna den procentuella BNP-tillväxten år 2011 (runda till en decimal): \\[\\frac{y_{2011} - y_{2010}}{y_{2010}} \\times 100\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "BNP-tillväxt 2011": "2.4" },    "answerformat": "%",    "error": { "message": "\\((455\\ 600 - 444\\ 800) / 444\\ 800 \\times 100 = ?\\)" },    "correct": { "message": "Rätt! \\((455\\ 600 - 444\\ 800) / 444\\ 800 \\times 100 = 10\\ 800 / 444\\ 800 \\approx 2{,}4\\%\\)." }  },  {    "id": "k1-2-3-002",    "name": "Uppgift 2",    "exercise": "Vad mäter <em>BNP per capita</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det totala värdet av ett lands export minus import",          "Värdet av alla varor och tjänster som produceras i ett land, dividerat med antal invånare",          "Den genomsnittliga lönen i ett land",          "Statens totala skuld per invånare"        ],        "correct": "Värdet av alla varor och tjänster som produceras i ett land, dividerat med antal invånare"      }    },    "error": { "message": "BNP = Bruttonationalprodukt. 'Per capita' betyder 'per invånare'." },    "correct": { "message": "Rätt! BNP per capita är BNP dividerat med folkmängden och används som ett grovt mått på genomsnittlig levnadsstandard." }  },  {    "id": "k1-2-3-003",    "name": "Uppgift 3",    "exercise": "BNP-tillväxten under åren 2010–2014 var 5,1%, 2,4%, −1,3%, 0,3% och 1,6%. Beräkna den <em>genomsnittliga</em> tillväxten för perioden (runda till en decimal).",    "image": null,    "inputtype": "field",    "expectedanswer": { "Genomsnittlig tillväxt": "1.6" },    "answerformat": "%",    "error": { "message": "Addera alla fem värden och dividera med 5: \\((5{,}1 + 2{,}4 + (-1{,}3) + 0{,}3 + 1{,}6) / 5 = ?\\)" },    "correct": { "message": "Rätt! \\((5{,}1 + 2{,}4 - 1{,}3 + 0{,}3 + 1{,}6) / 5 = 8{,}1 / 5 = 1{,}62 \\approx 1{,}6\\%\\)." }  },  {    "id": "k1-2-3-004",    "name": "Uppgift 4",    "exercise": "Varför används <em>naturliga logaritmen</em> av BNP för att jämföra ekonomisk tillväxt över tid?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Logaritmering gör alla tal negativa, vilket är enklare att räkna med",          "Logaritmering omvandlar absoluta förändringar till relativa, vilket gör det lättare att jämföra tillväxttakten oavsett BNP-nivå",          "Logaritmering tar bort inflationen automatiskt",          "Logaritmering visar alltid en rät linje, oavsett data"        ],        "correct": "Logaritmering omvandlar absoluta förändringar till relativa, vilket gör det lättare att jämföra tillväxttakten oavsett BNP-nivå"      }    },    "error": { "message": "Tänk på vad som händer med linjen i diagrammet när vi logaritmerar BNP. En fördubbling av BNP ger alltid samma förändring i ln(BNP), oavsett absolut nivå." },    "correct": { "message": "Rätt! Med ln(BNP) syns varje fördubbling av BNP som samma stegstorlek (~0,7). Det gör det enkelt att visuellt jämföra relativ tillväxttakt över tid och nivåer." }  }];</script>
<div class="exercise-section" data-section-id="k1-2-3"></div>

## Leder rikedom till lycka? {#k1-2-4}

### Begrepp

- **Logaritmering kan underlätta relativa jämförelser.** Detta eftersom det relativa avståndet mellan två värden motsvaras av samma differens mellan de två logaritmerade värdena.

- **Rikare länder är lyckligare.** Människor i länder med högre BNP per capita tenderar i större utsträckning att uppge att de är mer nöjda med livet. BNP per capita och nöjdhet med livet ("lycka") samvarierar på global nivå.

- **Samvariation är inte samma sak som ett orsakssamband.** För att kunna mäta vilken förändring ett fenomen orsakar i ett annat fenomen måste vi isolera denna effekt. Detta görs med vetenskapliga experiment eller experimentliknande metoder. Detta tankesätt är centralt för en stor mängd vetenskap och analys.

### Teori

Figur 1 illustrerar samvariationen mellan BNP per invånare och genomsnittlig nöjdhet med livet per land. Låt oss säga att "nöjdhet med livet" är ett mått på lycka. Varje prick representerar ett land eller område med ett kombinerat värde av lycka och BNP per capita (bruttonationalprodukt per invånare).

Det vänstra diagrammet visar ­BNP per capita på den horisontella axeln (x-axeln), räknat i amerikanska dollar, justerade för inflation och prisskillnader mellan länder. Justering för internationella prisskillnader kallas för att valutan är köpkraftsjusterad. I diagrammet till höger har vi tagit naturliga logaritmen av BNP per capita.

I båda diagrammen har vi ritat ut en trendlinje för att mönstret ska synas tydligare. De färgglada streckade linjerna visar trenden för de markerade länderna. Den mindre synliga grå linjen är trendlinjen för alla världens länder. Läs mer på [www.ourworldindata.org/grapher/gdp-vs-happiness](http://www.ourworldindata.org/grapher/gdp-vs-happiness).

I diagrammet till vänster kan vi se att rikare länder i genomsnitt är lyckligare än fattigare länder. Men lyckan är bara högre med högre inkomster upp till en viss inkomstnivå. För de rikaste länderna verkar det inte finnas någon särskilt tydlig samvariation mellan lycka och inkomst.

I det högra diagrammet, där vi använder logaritmerad BNP, är den genomsnittliga lyckan i genomsnitt högre med högre inkomst, både bland fattiga och rika länder. En stor del av länderna ligger nästan som på en rak linje från nedre vänstra hörnet upp till övre högra hörnet. Förenklat kan vi beskriva detta som att det finns en [positiv samvariation](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/korrelation-och-kausalitet#!/) mellan genomsnittlig inkomst och lycka.

**Figur 1: BNP och lycka i alla världens länder** ![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\2%20-%20Exempel%20från%20samhället\2-4%20-%20Leder%20rikedom%20till%20lycka/img/k1-2-4-image1.png){style="width:6.1076in;height:3.54071in"}

Förklaring: Data från [www.ourworldindata.org](http://www.ourworldindata.org), hämtad 240930. Lycka mäts som ett enkätsvar på en skala från 1 till 10 där 10 är högsta nivå av nöjdhet med livet. BNP anges i 1 000-tals amerikanska dollar 2017 års priser, köpkraftsjusterad (justerat för prisskillnader mellan länder eller områden). Läs mer på [www.ourworldindata.org/grapher/gdp-vs-happiness](http://www.ourworldindata.org/grapher/gdp-vs-happiness). Varje prick representerar ett land eller område i världen med ett kombinerat värde av lycka och BNP per capita. I det högra diagrammet kan vi se hur lyckan ökar främst bland fattiga länder men planar ut när BNP per capita når en högre nivå. I det högra diagrammet jämför vi logaritmerad BNP per capita och ser då att relativa ökningar av BNP per capita samvarierar mer linjärt med förändringar i lycka.

#### Varför ändras mönstret?

Om vi i stället för de faktiska nivåerna av BNP jämför logaritmerade värden kan vi enklare se en mer linjär samvariation mellan lycka och BNP per capita, som i det högra diagrammet i figur 1. Varför?

För att lyckan ska öka för den som redan har 1 miljon kronor, krävs en större inkomstökning, jämfört med vad som krävs för att öka lyckan för den som inte har några pengar alls. Även om sambandet är mer komplicerat än vad som ryms att diskutera här kan nog detta betraktas som ett grundläggande villkor för denna jämförelse.

Om vi godtar detta blir möjligen även mönstret i det högra diagrammet mer logiskt. Som vi såg i föregående kapitel kan logaritmering göra det lättare att jämföra relativa skillnader, eftersom differensen mellan logaritmerade värden är densamma för motsvarande relativa skillnader i absoluta värden. Till exempel:

[\\\[\\log\_{10}(1) = 0.\\ \\ \\log\_{10}(2) = 0,3.\\ \\ \\log\_{10}{(4)} = 0,6.\\ \\ \\log\_{10}(8) = 0,9\\\]]{.math .display}

En fördubbling från 1 till 2 till 4 till 8 motsvaras av differensen 0,3 mellan de logaritmerade värdena (så länge vi använder bas 10 för våra logartimer).

Tabell 1 visar värdena för länderna som är färgmarkerade i de båda diagrammen: Bolivia, Brasilien, Liberia, Senegal och Sverige. Brasilien har ungefär dubbelt så stort BNP per capita som Bolivia (cirka 15,1 respektive 8,2). Differensen mellan deras BNP-värden i logaritmerad form är cirka 0,3, vilket vi får om vi tar 1,2 -- 0,9.

Bolivia har i sin tur dubbelt så stor BNP per capita som Senegal (8,2 respektive 3,6). Differensen mellan deras BNP-värden i logaritmerad form: 0,9 -- 0,6 = 0,3. Som syns tydligt i diagrammen är det för dessa länder även så att ju högre BNP per capita landet har, desto mer nöjda med livet är invånarna.

**Tabell 1: Lycka och BNP i sex länder.**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Land**          **Nöjdhet med livet**   **BNP per capita**   [\\(\\mathbf{lo}\\mathbf{g}\_{\\mathbf{10}}\\mathbf{(}\\mathbf{BNP\\ per\\ capita}\\mathbf{)}\\)]{.math .inline}
  ----------------- ----------------------- -------------------- ------------------------------------------------------------------------------------------------------------------
  Bolivia           5,7                     8,2                  0,9

  Brasilien         6,1                     15,1                 1,2

  Liberia           4                       1,5                  0,2

  Senegal           4,9                     3,6                  0,6

  Sverige           7,4                     55,4                 1,7
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Förklaring: Data från [www.ourworldindata.org](http://www.ourworldindata.org). Logaritmer underlättar relativa jämförelser, som till exempel för att se hur en fördubbling av BNP per capita samvarierar med lycka i ett land.

#### Tänkbara slutsatser

Vad kan vi lära oss av detta? Logaritmering underlättar relativa jämförelser och vi har en teori om varför vi får detta mönster. Att kunna jämföra linjära associationer mellan olika fenomen är extremt användbart inom analytiskt arbete och används inom många olika fält. Exemplet ovan är förenklat men beskriver hur vi kan båda jämföra faktiska data, som BNP, och teoretiska resonemang med hjälp av dessa metoder.

Observera dock att vår teori och mönstren i diagrammen är inget bevis för att högre BNP orsakar mer lycka. Som exempel: Betyder samvariationen mellan inkomst och lycka att lyckan i ett samhälle skulle öka om inkomster ökade -- oavsett hur inkomstökningen gick till? Det vill säga, att det inte spelar någon roll vilken typ av varor och tjänster som ett land producerar, så länge det produceras mycket av det. Troligen inte.

De flesta godtar nog att vår lycka hänger ihop med både hur stor vår inkomst är och hur vi kan använda våra pengar.

Vi vet dock inte exakt i detalj varför lycka samvarierar med inkomst. Livet i rika länder är i regel annorlunda på många sätt, jämfört med livet i fattiga länder. Rika länder har avancerad hälso- och sjukvård, renare luft och natur, avancerad infrastruktur och i regel mer välfungerande rättssystem och politiska organisationer. Denna typ av tillgångar bidrar också till högre livskvalitet.

#### Hur mäta ett orsakssamband?

Givet att vi vill uttala oss om ett orsakssamband, till exempel huruvida inkomst skapar lycka, och dessutom mäta detta, som till exempel "hur mycket lyckligare blir jag av att få 1 000 kr?", så måste detta studeras med särskilda metoder.

För att kunna mäta vilken förändring av lycka som en förändring av inkomsterna kan orsaka (mäta *effekten*), måste vi kunna isolera just detta samband. Inom samhällsvetenskap görs detta med hjälp av vetenskapliga experiment och experimentliknande metoder, vilket vi ska återkomma till längre fram.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-2-4"]=[  {    "id": "k1-2-4-001",    "name": "Uppgift 1",    "exercise": "Följande diagram visar samvariationen mellan BNP per capita och genomsnittlig lycka (skala 0–10) för ett stort antal länder. Det vänstra diagrammet visar ologaritmerat BNP per capita; det högra visar logaritmerat BNP per capita. Vilket påstående stämmer bäst?",    "image": "img/k1-2-4-image1.png",    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Lyckan ökar linjärt med BNP per capita i det vänstra diagrammet",          "I det vänstra diagrammet planar sambandet ut för rika länder; det högra diagrammet visar relativa inkomstskillnader och ett mer linjärt mönster",          "Det finns ingen samvariation alls mellan BNP och lycka",          "Rika länder är lyckligare men fattiga länder är mer nöjda med livet"        ],        "correct": "I det vänstra diagrammet planar sambandet ut för rika länder; det högra diagrammet visar relativa inkomstskillnader och ett mer linjärt mönster"      }    },    "error": { "message": "Titta på båda diagrammen. Hur skiljer sig mönstret? Vad innebär det att BNP är logaritmerat i det högra diagrammet?" },    "correct": { "message": "Rätt! I det vänstra diagrammet är sambandet tydligast bland fattigare länder men planar ut för de rikaste. Det högra diagrammet logaritmerar BNP och visar relativa inkomstskillnader, vilket ger ett mer linjärt samband." }  },  {    "id": "k1-2-4-002",    "name": "Uppgift 2",    "exercise": "Givet att \\(\\log_{10}(1) = 0\\), \\(\\log_{10}(2) = 0{,}3\\), \\(\\log_{10}(4) = 0{,}6\\), \\(\\log_{10}(8) = 0{,}9\\). Vad är differensen \\(\\log_{10}(8) - \\log_{10}(4)\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Differens": "0.3" },    "answerformat": "",    "error": { "message": "\\(\\log_{10}(8) = 0{,}9\\) och \\(\\log_{10}(4) = 0{,}6\\). Subtrahera." },    "correct": { "message": "Rätt! \\(0{,}9 - 0{,}6 = 0{,}3\\). En fördubbling (från 4 till 8) ger alltid differensen 0,3 i log₁₀ — oavsett absolut nivå." }  },  {    "id": "k1-2-4-003",    "name": "Uppgift 3",    "exercise": "Bolivia har BNP per capita 8,2 (tusental USD) och \\(\\log_{10}(8{,}2) \\approx 0{,}9\\). Brasilien har BNP per capita 15,1 och \\(\\log_{10}(15{,}1) \\approx 1{,}2\\). Vad är differensen i logaritmerat BNP?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Differens i log₁₀(BNP)": "0.3" },    "answerformat": "",    "error": { "message": "\\(1{,}2 - 0{,}9 = ?\\)" },    "correct": { "message": "Rätt! \\(1{,}2 - 0{,}9 = 0{,}3\\). Brasilien har ungefär dubbelt så hög BNP per capita som Bolivia, och en fördubbling syns alltid som 0,3 i log₁₀." }  },  {    "id": "k1-2-4-004",    "name": "Uppgift 4",    "exercise": "En analys visar en positiv samvariation mellan BNP per capita och lycka bland världens länder. Vad kan vi <em>inte</em> dra för slutsats av detta?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Rikare länder tenderar att ha högre genomsnittlig lycka",          "Det finns ett mönster i data som kan studeras vidare",          "Högre BNP per capita orsakar direkt ökad lycka",          "Logaritmering kan underlätta jämförelser av relativa skillnader"        ],        "correct": "Högre BNP per capita orsakar direkt ökad lycka"      }    },    "error": { "message": "Kom ihåg: samvariation i ett diagram är inte detsamma som orsakssamband. Vad kräver det för att fastställa kausalitet?" },    "correct": { "message": "Rätt! Samvariationen visar ett mönster, men inte orsaken. Rika länder har t.ex. också bättre sjukvård, infrastruktur och rättssystem — det är oklart vad som faktiskt driver lyckan." }  },  {    "id": "k1-2-4-005",    "name": "Uppgift 5",    "exercise": "Vilket av följande beskriver bäst varför logaritmering av BNP ger ett mer <em>linjärt</em> samband med lycka?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Logaritmering tar bort extremvärden och outliers automatiskt",          "För att öka lyckan hos någon med hög inkomst krävs en större inkomstökning än för någon med låg inkomst — en relativ snarare än absolut ökning spelar roll",          "Logaritmering gör alla länders BNP-värden lika stora",          "Logaritmering förbättrar datakvaliteten"        ],        "correct": "För att öka lyckan hos någon med hög inkomst krävs en större inkomstökning än för någon med låg inkomst — en relativ snarare än absolut ökning spelar roll"      }    },    "error": { "message": "Tänk på marginalnytta: vad betyder 1 000 kr extra för en miljonär jämfört med för en person utan inkomst?" },    "correct": { "message": "Rätt! En relativ ökning av inkomsten (t.ex. en fördubbling) spelar störst roll, inte en absolut ökning. Logaritmering fångar just relativa skillnader, vilket förklarar det mer linjära mönstret." }  }];</script>
<div class="exercise-section" data-section-id="k1-2-4"></div>

## Banadödlighet och flyktingar {#k1-2-5}

### Begrepp

*Inga nya matematiska begrepp i detta avsnitt.*

### Teori

De senaste decennierna har barnadödligheten i hela världen sjunkit kraftigt. Den varierar dock fortfarande stort bland världens länder. Tabell 1 beskriver den genomsnittliga barnadödligheten per kontinent år 1950 och 2016. Både år 1950 och 2016 var barnadödligheten störst i Afrika.

Barnadödligheten har dock även minskat som mest i de afrikanska länderna, från cirka 300 per 1 000 barn år 1950, till att år 2016 vara nere på 62,7 avlidna barn per 1 000 under 5 års ålder. Under samma period minskade barnadödligheten i länderna i Europa från 86,7 år 1950 till 4,9 år 2016.

**Tabell 1: Antal avlidna barn per 1 000 barn under 5 år**

  --------------------------------------------
                 **År 1950**    **År 2016**
  -------------- -------------- --------------
  Afrika         302            62,7

  Asien          234            22,8

  Europa         86,7           4,9

  Nordamerika    152            15,9

  Oceanien       140            22,7

  Sydamerika     181            17,8
  --------------------------------------------

Källa: Gapminder, [www.ourworldindata.org](http://www.ourworldindata.org).

Sedan början av 1800-talet har den genomsnittliga barnadödligheten i världen minskat från i genomsnitt över 400 döda per 1 000 barn (40 %), ned till cirka 20 % år 1950 och till cirka 4 % år 2016. Det vill säga, en minskning med 16 procentenheter:

[\\(4 - 20 = - 16\\)]{.math .inline} procentenheter

Länderna i Afrika har under perioden sett barnadödligheten minska från 302 till 62,7 per 1 000 barn. Räknat i procentenheter blir detta:

[\\\[\\frac{62,7 - 300}{1\\ 000} = - \\frac{237,3}{1\\ 000} = - 0,2372 = - 23,73\\ \\text{procentenheter}\\\]]{.math .display}

I Europa minskade den genomsnittliga barnadödligheten från 86,7 till 4,9 per 1 000 barn. Uttryckt i procentenheter:

[\\\[\\frac{4,9 - 86,7}{1000} = - \\frac{81,8}{1000} = - 0,0818 = - 8,18\\ \\text{procentenheter}\\\]]{.math .display}

#### Flyktingar

Enligt FN:s organisation [UNHCR](https://www.unhcr.org/) (förkortning för *United Nations High Commissioner for Refugees*) är cirka 1,5 % av världens befolkning flyktingar (siffran för 2024). Världens befolkning uppskattades 2024 vara 8,2 miljarder. Antal flyktingar 2024 var alltså enligt UNHCR:s bedömning:

[\\\[8\\ 200\\ 000\\ 000\*0,015 = 123\\ 000\\ 000\\\]]{.math .display}

Ett annat sätt att beskriva denna uträkning är på följande sätt:

1,5 % av 8,2 miljarder [\\(= 0,123\\)]{.math .inline} miljarder = 123 miljoner

En person som befinner sig på flykt i ett annat land än sitt hemland kan söka asyl, fristad, i det land där personen befinner sig. Tabell 2 beskriver befolkning 2023 samt antal asylsökande 2023 för de fyra länder som hade flest sökande samt Sverige. Sverige är endast med som jämförelse. Jämfört med alla länder som ingår i data från [UNHCR](https://www.unhcr.org/refugee-statistics) så var det 53 andra länder som tog emot fler flyktingar än Sverige.

Den fjärde kolumnen (**Asylsökande / befolkning**) visar antal asylsökande dividerat med antal invånare i respektive land, uttryckt som procent. Jämfört med landets inhemska befolkning tog Peru emot flest asylsökande och Sverige minst, bland länderna i denna tabell.

Låt oss nu beräkna hur stor procentuell andel som respektive land tar emot av hela gruppen asylsökande i denna tabell. Resultaten redovisas i kolumnen längst till höger. Räknat på detta sätt tar USA emot störst andel och Sverige tar emot minst, bland länderna i tabellen.

**Tabell 2: Befolkning och antal asylsökande per land**

  ------------------------------------------------------------------------------------------------------------------------------------
  **Land**     **Asylsökande 2023**   **Befolkning 2023**   **Asylsökande / befolkning**   **Andel av de asylsökanden i denna tabell**
  ---------- ---------------------- --------------------- ------------------------------ ---------------------------------------------
  USA                     2 601 467           334 914 895                          0,78%                                         69,6%

  Peru                      508 429            33 845 617                          1,50%                                         13,6%

  Tyskland                  361 493            83 280 000                          0,43%                                          9,7%

  Mexiko                    257 396           129 739 759                          0,20%                                          6,9%

  Sverige                    11 271            10 536 632                          0,11%                                          0,3%
  ------------------------------------------------------------------------------------------------------------------------------------

Förklaring: Data från [UNHCR](https://www.unhcr.org/refugee-statistics) (asylsökande) och [Världsbanken](https://data.worldbank.org/) (befolkning).

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-2-5"]=[  {    "id": "k1-2-5-001",    "name": "Uppgift 1",    "exercise": "Barnadödligheten i Afrika var 302 per 1 000 barn år 1950 och 62,7 per 1 000 barn år 2016. Beräkna förändringen i <em>procentenheter</em> (negativ = minskning): \\[\\frac{62{,}7 - 302}{10}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Förändring": "-23.93" },    "answerformat": "procentenheter",    "error": { "message": "Rater angivna per 1 000 omvandlas till procent genom division med 10 (inte 1 000): \\((62{,}7 - 302) / 10 = -239{,}3 / 10 = ?\\)" },    "correct": { "message": "Rätt! \\(-239{,}3 / 10 = -23{,}93\\) procentenheter. (302 per 1 000 = 30,2 %; 62,7 per 1 000 = 6,27 %; skillnaden är 6,27 − 30,2 = −23,93 procentenheter.) Barnadödligheten i Afrika minskade med nästan 24 procentenheter — en remarkabel förbättring." }  },  {    "id": "k1-2-5-002",    "name": "Uppgift 2",    "exercise": "Barnadödligheten i Europa sjönk från 86,7 till 4,9 per 1 000 barn (1950–2016). Afrika sjönk från 302 till 62,7. Vilken kontinent hade den största minskningen, mätt i antalet färre döda per 1 000 barn?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Europa, med en minskning på 81,8 per 1 000",          "Afrika, med en minskning på 239,3 per 1 000",          "De minskade lika mycket",          "Det går inte att jämföra utan mer data"        ],        "correct": "Afrika, med en minskning på 239,3 per 1 000"      }    },    "error": { "message": "Beräkna den absoluta minskningen för varje kontinent: 302 − 62,7 respektive 86,7 − 4,9." },    "correct": { "message": "Rätt! Afrika: \\(302 - 62{,}7 = 239{,}3\\). Europa: \\(86{,}7 - 4{,}9 = 81{,}8\\). Afrikas minskning mätt i antalet färre döda per 1 000 barn var alltså nästan tre gånger större." }  },  {    "id": "k1-2-5-003",    "name": "Uppgift 3",    "exercise": "Enligt UNHCR var ca 1,5 % av världens befolkning flyktingar år 2024. Världens befolkning var då 8,2 miljarder. Hur många miljoner flyktingar var det?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Antal flyktingar": "123" },    "answerformat": "miljoner",    "error": { "message": "\\(8\\ 200\\ 000\\ 000 \\times 0{,}015 = ?\\). Ange svaret i miljoner." },    "correct": { "message": "Rätt! \\(8{,}2 \\times 10^9 \\times 0{,}015 = 1{,}23 \\times 10^8 = 123\\) miljoner flyktingar." }  },  {    "id": "k1-2-5-004",    "name": "Uppgift 4",    "exercise": "År 2023 tog USA emot 2 601 467 asylsökande med en befolkning på ca 335 miljoner. Peru tog emot 508 429 asylsökande med en befolkning på ca 34 miljoner. Vilket land tog emot <em>störst andel relativt sin befolkning</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "USA, som tog emot flest i absoluta tal",          "Peru, vars andel asylsökande av befolkningen (1,50%) var högre än USA:s (0,78%)",          "Sverige, som är ett litet land",          "Tyskland, som är ett rikt europeiskt land"        ],        "correct": "Peru, vars andel asylsökande av befolkningen (1,50%) var högre än USA:s (0,78%)"      }    },    "error": { "message": "Beräkna andelen för varje land: asylsökande dividerat med befolkning. Jämför inte de absoluta talen." },    "correct": { "message": "Rätt! USA tog emot flest i absoluta tal, men Peru tog emot störst andel relativt befolkningens storlek (1,50 % mot USA:s 0,78 %). Detta är ett bra exempel på varför relativa mått ibland är mer informativa än absoluta." }  },  {    "id": "k1-2-5-005",    "name": "Uppgift 5",    "exercise": "Den globala barnadödligheten år 1950 var ca 20 % och år 2016 ca 4 %. Hur stor var minskningen i <em>procentenheter</em>?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Minskning": "16" },    "answerformat": "procentenheter",    "error": { "message": "Procentenheter beräknas som enkel subtraktion: \\(4 - 20 = ?\\)" },    "correct": { "message": "Rätt! \\(4 - 20 = -16\\) procentenheter. Observera skillnaden: minskningen är 16 <em>procentenheter</em>, men i procent av ursprungsvärdet är minskningen \\(16/20 = 80\\%\\) — ett mycket vanligt missförstånd." }  }];</script>
<div class="exercise-section" data-section-id="k1-2-5"></div>

