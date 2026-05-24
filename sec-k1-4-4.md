# Vinstmaximerande företag {#k1-4-4}

### Begrepp
- **Intäkter:** De pengar som företaget får betalt för sina varor och tjänster.
- **Totala kostnader:** I detta exempel är totala kostnader företagets utgifter för att producera en specifik mängd av sina varor och tjänster.
- **Marginalkostnad:** Kostnaden för företaget att tillverka en extra enhet. Marginalkostnaden kan variera vid till exempel olika produktionsmängder.

### Teori
En stor mängd samhällsvetenskaplig analys studerar hur företag beter sig. Här nöjer vi oss med att introducera en förenklad teori om hur vi med matematik kan beskriva vinstmaximering för ett kommersiellt företag.

### Ett företag
Säg att vi har ett företag som tillverkar två olika produkter som vi kallar för *X* och *Y*. Företaget vill maximera sin vinst. Försäljningspriserna för de två varorna styrs av omvärlden (marknaden), vilket företaget inte kan påverka. Företaget är visserligen fri att själv bestämma priset på sina varor, men i detta hypotetiska exempel har företaget ingenting att vinna på att höja eller sänka priserna.
Detta är inte nödvändigtvis särskilt realistiskt, men förenklar matematiken något. Företaget accepterar därför att priserna är vad det är, men kan däremot välja hur stor mängd av produkterna som ska produceras.
Mängden producerade enheter av de två produkterna anger vi med *x* och *y*. För produkt *x* har vi pris $p_{x} = 10$ och för produkt *y* har vi $p_{y} = 20$. Företagets intäkter kan beskrivas som en funktion av pris multiplicerat med kvantitet. Funktionen för totala intäkter kallar vi *TR* efter engelskans *total revenue:*
$\text{Totala\~intäkter} = TR(x,y) = p_{x}x + p_{y}y = 10x + 20y$ (1)
Från ekvation 1 kan vi lösa för *y*:
$TR = 10x + 20y$ (2)
De totala produktionskostnaderna består av fasta utgifter på 10 kr och rörliga kostnader för att tillverka produkterna *X* respektive *Y*:
$\text{Totala\~kostnader} = TC(x,y) = x^{2} + 2y^{2} + 10$ (3)
där $TC(\ )$ är namn på den matematiska funktionen. Företagets vinst är lika med intäkter minus kostnader, $TR - TC$, vilket vi kan skriva som en funktion, *V*:
$V(x,y) = TR - TC = 10x + 20y - (x^{2} + 2y^{2} + 10)$ (4)

### Maximeringsproblemet
Vinsten är en funktion av kvantiteterna *x* och *y*, vilket vi kan beskriva som att företaget vill maximera sin vinst genom att välja mängd att producera av *x* och *y*:
$\max_{m.\ h.t\ \ x,y}{V(x,y)}\ = 10x + 20y - (x^{2} + 2y^{2} + 10)$ (5)
Detta maximeringsproblem kan vi lösa genom att ta derivatan av *V* med hänsyn till *x* och *y*. Vi söker en maximipunkt där förstaderivatan är lika med 0 och andraderivatan är negativ. Förstaderivatan av $V(x,y)$ med hänsyn till *x* respektive *y*:
$V_{x}\' = 10 - 2x$ (6)
$V_{y}\' = 20 - 4y$
Vi har nu två uttryck som beskriver hur *V* ändras då *x* respektive *y* ökar med en enhet. Vi sätter uttrycken i ekvation 6 lika med 0, vilket ger oss förstagradsvillkoren, och löser för *x* och *y*. Dessa värden för *x* och *y* är lösningarna vi söker, vilket vi skriver som $x^{*}$ och $y^{*}$:
$x^{*} = \frac{10}{2} = 5$ (7)
$y^{*} = 20/4 = 5$
Vi kan även se att andraderivatan av *V* med hänsyn till *x* och *y* är negativ genom att derivera uttrycken i ekvation 6 en gång till:
$V_{xx}^{\'\'} = - 2$ (8)
$V_{yy}^{\'\'} = - 4$

### Marginalvinsten
Vinsten maximeras då marginalvinsten är lika med 0, det vill säga då förstaderivatan av V är $V_{x}\' = 0$ och $V_{y}\' = 0$. Låt oss beräkna hur mycket vinst företaget kommer att göra genom att sätta in dessa värden för $x^{*}$ och $y^{*}$ i $V\left( x^{*},y^{*} \right) = V(5,5)$:
$V(5,5) = 10*5 + 20*5 - \left( 5^{2} + 2*5^{2} + 10 \right) = 65$ (9)
Givet priserna $p_{x} = 10$ och $p_{y} = 20$ och nuvarande produktionskostnader kan företaget maximera sin vinst genom att producera 5 enheter av produkt A och 5 enheter av produkt B, och gör då en vinst på 65 kr.
Företagets totala kostnader ges av ekvation 3. Tar vi förstaderivatan av totala kostnader med hänsyn till x respektive y får vi företagets *marginalkostnader*:
$MC_{x} = C_{x}\' = 2x$ (10)
$MC_{y} = C_{y}\' = 4y$
Vinsten optimeras vid $\left( x^{*},y^{*} \right) = (5,5)$ där marginalkostnaderna är:
$MC_{x} = C_{x}\'\left( x^{*} \right) = 2*5 = 10$ (11)
$MC_{y} = C_{y}\'\left( y^{*} \right) = 4*5 = 20$
Om företaget producerar kvantiteterna 5 av *x* och 5 av *y* är marginalkostnaderna, vid just denna produktionsmängd, lika med 10 med hänsyn till *x* och 20 med hänsyn till *y*. I inledningen beskriv vi priserna för produkterna $p_{x} = 10$ och $p_{y} = 20$. Företaget maximerar alltså sin vinst då marginalkostnaden är lika med priset för produkterna vilket vi kan skriva som:
$P^{*} = MC$ (12)


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-4"]=[  {    "id": "k1-4-4-001",    "name": "Uppgift 1",    "exercise": "Ett företag producerar varor \\(x\\) och \\(y\\) med priser \\(p_x = 10\\) och \\(p_y = 20\\). Totala intäkter ges av \\(TR(x,y) = 10x + 20y\\) och totala kostnader av \\(TC(x,y) = x^2 + 2y^2 + 10\\). Vad är vinsten \\(V(x,y)\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(V = 10x + 20y + x^2 + 2y^2 + 10\\)",          "\\(V = 10x + 20y - x^2 - 2y^2 - 10\\)",          "\\(V = x^2 + 2y^2 - 10x - 20y + 10\\)",          "\\(V = 10x + 20y - 10\\)"        ],        "correct": "\\(V = 10x + 20y - x^2 - 2y^2 - 10\\)"      }    },    "error": { "message": "Vinst = Intäkter \\(-\\) Kostnader. Subtrahera \\(TC\\) från \\(TR\\) och kom ihåg att distribuera minustecknet." },    "correct": { "message": "Rätt! \\(V = TR - TC = 10x + 20y - (x^2 + 2y^2 + 10) = 10x + 20y - x^2 - 2y^2 - 10\\)." }  },  {    "id": "k1-4-4-002",    "name": "Uppgift 2",    "exercise": "Företaget har vinsten \\(V(x,y) = 10x + 20y - x^2 - 2y^2 - 10\\). Förstaderivatan av vinsten med hänsyn till \\(x\\) ges av \\(V_x' = 10 - 2x\\). Vid vilket värde på \\(x\\) är \\(V_x' = 0\\), dvs. vad är \\(x^*\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "5" },    "answerformat": "",    "error": { "message": "Sätt \\(10 - 2x = 0\\) och lös för \\(x\\): \\(2x = 10\\), alltså \\(x = ?\\)" },    "correct": { "message": "Rätt! \\(10 - 2x = 0\\) ger \\(x^* = 5\\). Det är den vinstmaximerande produktionsmängden av produkt X." }  },  {    "id": "k1-4-4-003",    "name": "Uppgift 3",    "exercise": "Företaget har vinsten \\(V(x,y) = 10x + 20y - x^2 - 2y^2 - 10\\). Givet \\(x^* = 5\\) och \\(y^* = 5\\), beräkna den maximala vinsten \\(V(5, 5) = 10 \\cdot 5 + 20 \\cdot 5 - (5^2 + 2 \\cdot 5^2 + 10)\\).",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "65" },    "answerformat": "",    "error": { "message": "Beräkna: intäkter \\(= 10 \\cdot 5 + 20 \\cdot 5 = 150\\). Kostnader \\(= 25 + 50 + 10 = 85\\). Vinst \\(= 150 - 85\\)." },    "correct": { "message": "Rätt! Intäkter \\(= 150\\), kostnader \\(= 85\\), vinst \\(= 150 - 85 = 65\\) kr. Genom att producera 5 enheter av varje produkt maximeras vinsten till 65 kr." }  },  {    "id": "k1-4-4-004",    "name": "Uppgift 4",    "exercise": "Vad menas med <em>marginalkostnad</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den totala kostnaden för att producera alla enheter",          "Den fasta kostnaden som inte beror på produktionsmängden",          "Kostnaden för att tillverka en extra enhet",          "Skillnaden mellan intäkter och kostnader"        ],        "correct": "Kostnaden för att tillverka en extra enhet"      }    },    "error": { "message": "Prefixet 'marginal-' syftar på en liten extra förändring. Vad händer med kostnaderna om man tillverkar en enhet till?" },    "correct": { "message": "Rätt! Marginalkostnad är kostnaden för att tillverka en extra enhet, matematiskt förstaderivatan av kostnadsfunktionen: \\(MC_x = C_x' = 2x\\) och \\(MC_y = C_y' = 4y\\)." }  },  {    "id": "k1-4-4-006",    "name": "Uppgift 5",    "exercise": "Med vinstfunktionen \\(V(x,y) = 10x + 20y - x^2 - 2y^2 - 10\\) är marginalkostnaden för \\(x\\) definierad som \\(MC_x = C_x' = 2x\\) och marginalintäkten som \\(MR_x = 10\\). Vid \\(x^* = 5\\) är \\(MC_x = 10\\) och \\(MR_x = 10\\). Vad innebär villkoret \\(MR_x = MC_x\\) ekonomiskt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Kostnaden är noll vid optimal produktion",          "Att producera ytterligare en enhet ger varken mer eller mindre vinst — det är det optimala produktionsläget",          "Totala intäkter och totala kostnader är lika stora",          "Vinsten är noll vid optimum"        ],        "correct": "Att producera ytterligare en enhet ger varken mer eller mindre vinst — det är det optimala produktionsläget"      }    },    "error": { "message": "Vad händer med vinsten om \\(MR > MC\\)? Och om \\(MR < MC\\)?" },    "correct": { "message": "Rätt! Vid \\(MR = MC\\) är marginalvinsten noll — det lönar sig varken att producera mer eller mindre. Om \\(MR > MC\\) ökar vinsten av mer produktion, och om \\(MR < MC\\) minskar den. Vinstmaximum nås alltså exakt när marginalintäkt = marginalkostnad." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-4"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Nätverksanalys**](k1-4-5.html)
:::

