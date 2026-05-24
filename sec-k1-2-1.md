# Räkna med ränta {#k1-2-1}

### Begrepp
- **Ränta:** Den ersättning vi betalar när vi lånar, eller den ersättning vi får om vi lånar ut pengar.
- **Ränta på ränta**: Kallas även sammansatt ränta eller kumulativ ränta. Beskriver den ränta vi betalar eller får på ett lån som växer till följd av ränta.
- **Effektiv ränta:** Total lånekostnad för ett lån, inklusive olika typer av avgifter oavsett vad dessa avgifter kallas för.
- **Kumulativ summa:** Summan av en samling tal där vi adderar talen i tur och ordning.
### Teori
[Ränta](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/ranta#!/) kallas den ersättning man får för att låna ut pengar. Räntesats är storleken på räntan på ett lån eller sparande, uttryckt i procent. Räntesats syftar ofta på räntan per år. Ränta kan beskrivas som ett pris på lånade pengar, en ersättning för att vi låter bli att använda våra pengar här och nu.
När vi sätter in pengar på banken lånar vi ut pengar till banken. Som ersättning betalar banken ränta. Nu ska vi räkna ut hur mycket vi får tillbaka om vi sätter in pengar på ett bankkonto med 2 [procents](https://www.matteboken.se/lektioner/skolar-6/statistik/procent) räntesats per år. Två procent kan vi skriva som 2 % eller 0,02. Om vi sätter in 100 kr blir räntan första året $100*0,02 = 2$ kr. Efter ett år har vi 100 kr + räntan som banken ger oss: $100 + 2 = 102$.
Ett annat sätt att räkna ut detta är: $100*1,02 = 102$. Vi multiplicerar våra sparpengar med 1 plus räntesatsen 2 %: $1\ + \ 0,02\ = \ 1,02$.
#### Ränta på ränta
Om vi låter pengarna ligga kvar på kontot ytterligare ett år kommer vi få ränta även på det nya beloppet, alltså ränta på 102 kr. Resultatet efter det andra året blir då $102*1,02 = 104,04$. Ett annat sätt att beskriva räntan för både år 1 och år 2 är:
$102*1,02\ $ $= (100*1,02)*1,02$
$= 100*1,02*1,02\ $
$= 100*\ (1,02)^{2}\ $
$= 104,04\ $
Observera att alla rader i ekvationen ger exakt samma resultat. På den tredje raden skriver vi ihop $1,02*1,02$ till $(1,02)^{2}$. Detta läses som "$1,02$ upphöjt till två" och är ett [potensuttryck](https://www.matteboken.se/lektioner/matte-1/aritmetik/potenser).
När ränta läggs på pengar som redan ökat till följd av ränta kallas detta för [*ränta på ränta*](https://www.matteboken.se/lektioner/matte-1/ovningsexempel/ranta-pa-ranta-effekten?gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6rAH_ZyifLZsSPHKCFPhzzrrNs0YCo2EGwWL_96veWcx62VnUONbhIaAmYFEALw_wcB#!/). Ibland används uttrycken *sammansatt ränta* eller *kumulativ ränta*, vilket betyder samma sak.
Säg att vi sätter in 5 000 kr på ett sparkonto där den årliga räntan är 2 %. Vi låter pengarna ligga kvar på kontot i tre år. Vårt sparbelopp efter år 1 blir:
Sparbelopp efter år 1 $= 5\ 000*1,02$
$= 5\ 000*1 + 5\ 000*0,02\ $
$= 5\ 000 + 100\ $
$= 5\ 100\ $
År 2 och 3 får vi ränta både på våra ursprungliga sparpengar plus ränta på de pengar vi fått in i ränta tidigare år. Låt oss skriva det med en ekvation per år. Efter år 1 har vi:


$$5\ 000*1,02 = 5\ 100$$

Efter år 2 får vi ränta på pengarna vi har vid slutet av år 1, det vill säga ränta på räntan:


$$5\ 100*1,02\ = 5\ 202\ $$

Efter år 3 får vi ränta på ränta på ränta:


$$5\ 202\ *\ 1,02\ = 5\ 306,04\ \ $$

Precis som ovan kan vi använda potenser för att beskriva detta. Vi sätter 1,02 som bas i ett potensuttryck. Exponenten är lika med antal år: 3. Vårt totalbelopp efter tre år kan då skrivas:


$$5\ 000\ *\ 1,02\ *\ 1,02\ *\ 1,02 = 5\ 000\ *\ {1,02}^{3}\ = \ 5\ 306,04\ $$

#### Kreditkort
När vi tar ett lån kan vi i stället få betala ränta på ränta. Kreditkort innebär att när du handlar med kortet lånar du av banken och betalar ränta på lånet. Säg att du använder ett kreditkort med 12 % årsränta, men räntan tillförs per månad. Många kreditkort har särskilda regler som räntefria månader, vilket vi ignorerar för att förenkla exemplet. För att beräkna månadsräntan tar vi årsräntan 12 % och dividerar med antal månader på ett år, 12:
Ränta per månad:  $0,12/12\ = 0,01 = 1\%$
Säg nu att du använder kreditkortet för att handla för 20 000 kr och väntar 3 månader med att betala. Hur mycket blir räntan?
Räntan börjar i detta exempel läggas på ditt lån genast vid början av varje månad på den skuld som då gäller. Ny ränta läggs på gammal ränta för varje månad som lånet inte återbetalas. Efter 3 månader har ditt lån vuxit till följande belopp:


$$20\ 000*{1,01}^{3}\ = \ 20\ 606,02\ $$

Räntekostnaden för att låna i tre månader på kreditkortet blir i detta fall:\
$20\ 606,02\ --20\ 000 = 606,02$ kr.
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
Ett exempel: En butik erbjuder dig att köpa en tv för 10 000 kr och skjuta upp betalningen utan ränta i 24 månader. För detta tar butiken ut en avgift på 700 kr och en "administrativ avgift" på 40 kr för varje månad, totalt $40 \times 24 = 960$. Totala mängden extrakostnader: $700 + 40\ \times \ 24 = 1\ 660$. Allt detta läggs på lånet direkt vid köp. Uttryckt i procent av lånet (10 000 kr) ger detta följande effektiva ränta:


$$\frac{1\ 660}{10\ 000} = 16,6\%$$

Diverse företag erbjuder snabba sms-lån. Ett företag erbjuder dig att låna 10 000 kr till 40 % nominell ränta i 12 månader. "Nominell ränta" syftar på den ränta som skrivs ut, till exempel i en annons.
För att få reda den effektiva räntan, alltså vad vi verkligen ska betala, måste vi dock räkna med alla avgifter som tillkommer. Nominell ränta + eventuella avgifter = effektiv ränta.
Till den nominella räntan tillkommer 700 kr i vad företaget kallar för *uppläggningsavgift*, 700 kr i *förlängningsavgift* och 420 kr per månad i *aviavgift*. En tolftedel av den nominella räntan läggs till lånet respektive månad. Vi har nominell ränta + uppläggningsavgift + förlängningsavgift + aviavgifterna. Totalt belopp att återbetala för lånet på 10 000 kr blir:


$$10\ 000 \times \left( 1 + \frac{0,4}{12} \right)^{12} + 700 + 700 + 420 \times 12$$



$$= 14\ 821,26 + 700 + 700 + 5\ 040$$



$$= 21\ 261,26$$

För att få effektiva räntan drar vi av lånebeloppet 10 000 från denna summa och beräknar hur mycket det resterande beloppet är uttryckt i procent av lånebeloppet:


$$\frac{21\ 261,26 - 10\ 000}{10\ 000} = \frac{11\ 261,26}{10\ 000} = 112,6\%$$

Den effektiva räntan för sms-lånet är 112,6 %. Vissa lån kan ha över 1 000 procent i effektiv ränta.
Observera att detta exempel visar en förenklad beräkning av den totala lånekostnaden. Den officiella effektiva räntan beräknas enligt en standardiserad metod som tar hänsyn till när betalningar sker, och kan därför skilja sig något från detta resultat.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-2-1"]=[  {    "id": "k1-2-1-001",    "name": "Uppgift 1",    "exercise": "Du sätter in 5 000 kr på ett sparkonto med 2 % årsränta. Hur mycket har du på kontot efter <strong>ett år</strong>?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Belopp efter 1 år": "5100" },    "answerformat": "kr",    "error": { "message": "Multiplicera beloppet med \\(1 + 0{,}02 = 1{,}02\\). Det vill säga: \\(5\\ 000 \\times 1{,}02 = ?\\)" },    "correct": { "message": "Rätt! \\(5\\ 000 \\times 1{,}02 = 5\\ 100\\) kr. Räntan för det första året är 100 kr." }  },  {    "id": "k1-2-1-002",    "name": "Uppgift 2",    "exercise": "Du låter 5 000 kr ligga kvar på samma konto (2 % årsränta) i <strong>tre år</strong>. Hur mycket har du efter tre år? Använd formeln \\[5\\ 000 \\times (1{,}02)^3\\] och runda till närmaste krona.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Belopp efter 3 år": "5306" },    "answerformat": "kr",    "error": { "message": "\\((1{,}02)^3 = 1{,}02 \\times 1{,}02 \\times 1{,}02 \\approx 1{,}0612\\). Multiplicera med 5 000." },    "correct": { "message": "Rätt! \\(5\\ 000 \\times (1{,}02)^3 = 5\\ 000 \\times 1{,}0612 \\approx 5\\ 306\\) kr. Ränta på ränta ger lite mer än tre gånger den enkla årsräntan." }  },  {    "id": "k1-2-1-003",    "name": "Uppgift 3",    "exercise": "Vilket av följande uttryck är <em>inte</em> ett synonym för <em>ränta på ränta</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Sammansatt ränta",          "Kumulativ ränta",          "Effektiv ränta",          "Kompound interest"        ],        "correct": "Effektiv ränta"      }    },    "error": { "message": "Tänk på skillnaden: ränta på ränta uppstår av sammansatt beräkning av räntan. Effektiv ränta är ett separat begrepp som inkluderar avgifter och andra kostnader." },    "correct": { "message": "Rätt! Sammansatt ränta, kumulativ ränta och compund interest är alla synonymer för ränta på ränta. Effektiv ränta är ett separat begrepp — det är den totala lånekostnaden inklusive avgifter." }  },  {    "id": "k1-2-1-004",    "name": "Uppgift 4",    "exercise": "Ett kreditkort har 12 % <em>årsränta</em>, men räntan beräknas och läggs på per <em>månad</em>. Hur stor är månadsräntan?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Månadsränta": "1" },    "answerformat": "%",    "error": { "message": "Dela årsräntan med antal månader per år: \\(0{,}12 / 12 = ?\\)" },    "correct": { "message": "Rätt! \\(0{,}12 / 12 = 0{,}01 = 1\\%\\) per månad." }  },  {    "id": "k1-2-1-005",    "name": "Uppgift 5",    "exercise": "En butik erbjuder ett köp på kredit utan angiven ränta, men tar ut en uppläggningsavgift på 500 kr på ett lån om 10 000 kr. Vilket begrepp beskriver vad denna avgift faktiskt innebär ur ett lånekostnadsperspektiv?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Nominell ränta",          "Ränta på ränta",          "Effektiv ränta",          "Kumulativ summa"        ],        "correct": "Effektiv ränta"      }    },    "error": { "message": "Avgiften är en kostnad för att låna pengar, även om butiken inte kallar det ränta. Vilket begrepp fångar <em>alla</em> kostnader för ett lån?" },    "correct": { "message": "Rätt! Effektiv ränta inkluderar alla avgifter — oavsett vad de kallas. Enligt konsumentkreditlagen är långivare skyldiga att redovisa den effektiva räntan." }  }];</script>
<div class="exercise-section" data-section-id="k1-2-1"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Nominella och reala priser**](k1-2-2.html)
:::

