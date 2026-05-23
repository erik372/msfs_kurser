# Den optimala mängden tårta {#k1-4-1 -}


### Begrepp

*Inga nya matematiska begrepp i detta avsnitt.*

### Teori

Tårta är gott men vi blir illamående om vi äter för mycket. Låt oss beskriva detta med matematik. Vi tänker att tårta gör oss lyckliga och kallar variabeln lycka för y.

Låt oss säga att vi mäter lycka på en skala från 1 till 5, där 5 är mesta möjliga tänkbara lycka. Lycka, y, är i sin tur en funktion *f* av hur många tårtor vi äter. Vi betecknar antal uppätna tårtor som variabeln x. För varje tårta vi sätter i oss ökar vår lycka med 3 enheter, vilket vi kan beskriva med funktionen:

$Lycka = y = f(x) = 3x$ (1)

Variabeln *x* är kontinuerlig och för varje tugga tårta vi äter blir vi lyckligare. Men vi blir även mättare och till slut börjar vi bli less på tårta. Denna negativa effekt på lyckan kan vi sätta in i vår funktion genom att lägga till termen $- x^{2}$. Termen är negativ eftersom den beskriver hur vår lycka minskar för varje tugga tårta.

Termen $- x^{2}$ är kvadratisk, upphöjd till 2. Detta innebär att för låga värden, till exempel 0,5 kommer den negativa effekten att vara relativt liten. Till exempel: $- (0,5)^{2} = - 0,25$ eller $- (0,1)^{2} = \mp 0,01$. Men för högre värden av *x* kommer i stället den negativa effekten bli allt större, som till exempel $- (2)^{2} = - 4$ eller $- (5)^{2} = - 25$. Hela funktionen blir nu:

$y = f(x) = 3x - x^{2}$ (2)

### Tårta som maximeringsproblem

Det här kan vi beskriva som ett maximeringsproblem där vi väljer mängd tårta att äta, *x*, för att maximera vår lycka, *y*:

$\max_{m.h.t.\ \ x}{f(x) = 3x - x^{2}}$ (3)

För att beräkna vilken mängd tårta som leder till största möjliga lycka beräknar vi första- och andraderivatan av funktion *f* med hänsyn till *x*:

$f_{x}\' = 3 - 2x$ (4)

$f_{xx}^{\'\'} = - 2$

För att hitta den lyckomaximerande mängden tårta sätter vi förstaderivatan $f_{x}\'$ lika med 0 och löser för *x*:

$x^{\*} = \frac{3}{2} = 1,5$ (5)

Andraderivatan $f_{xx}^{\'\'}$ i ekvation 4 är negativ. Detta indikerar att $x = 1,5$ är en maximipunkt. Den mängd tårta som leder till mesta möjliga lycka är en och halv tårta. För att beräkna mängden lycka vid $x^{\*} = 1,5$ tar vi:

$f\left( x^{\*} = 1,5 \right) = 3\*1,5 - (1,5)^{2} = 4,5 - 2,25 = 2,25$ (6)

En och en halv tårta ger 2,25 i lycka, där lycka mäts på en skala från 1 till 5. Exakt hur stor lycka som uppnås genom tårtätande är dock i detta exempel inte centralt.

Figur 1 illustrerar detta exempel och dess lösning. Till vänster och höger om $x = 1,5$ kan vi se att lyckan är mindre än 2,25. Vid noll mängd tårta (0 på horisontella axeln) är lyckan lika med noll. På samma sätt är lyckan lika noll när mängden tårta är 3, vilket i det här hypotetiska exemplet innebär att vi då ätit så mycket tårta att vi inte längre njuter av det alls.

**Figur 1. Den optimala mängden tårta.**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\4%20-%20Hur%20få%20ut%20det%20mesta%20av%20livet\4-1%20Den%20optimala%20mängden%20tårta/img/k1-4-1-image1.png){style="width:4in;height:3in"}

### Marginaleffekten

Ett annat sätt att beskriva detta fenomen är med hjälp av begreppet *marginaleffekt*. Generellt syftar begreppet marginaleffekt på hur ett resultat förändras vid små förändringar i en variabel. I detta fall hur mycket den totala mängden lycka ändras vid små förändringar av mängden tårta.

Vi söker den mängd tårta där marginallyckan är lika med 0, där förstaderivatan av funktion *f* är 0, $f_{x}\' = 0$. Det värde av x där $f_{x}\' = 0$ är en extrempunkt. Om andraderivatan är negativ innebär små förändringar av x vid $x^{\*}$ att lyckan minskar. I så fall är extrempunkten en lokal maximipunkt.

Eftersom ekvation 2 endast har en maximipunkt är detta även en global maximipunkt, det vill säga den punkt där lyckan som ges av tårtätande är mesta möjliga.

### En metafor för mänskliga beslut

Exemplet är banalt men introducerar de grundläggande logiska utgångspunkterna i en stor mängd teorier som förekommer rikligt inom samhällsvetenskap. Mycket samhällsvetenskaplig teori kan formuleras som att människor, eller organisationer där människor verkar, försöker uppnå ett eller flera mål, genom att välja mellan olika alternativ. Många teorier kring mänskligt beteende kan därför formuleras som maximerings- eller minimeringsproblem.

Det kan dock vara bra att påminna sig själv om att oavsett hur snillrik en teoretisk modell må vara säger den i sig självt ingenting om hur någon tänker när de ska äta tårta, eller fatta någon annan typ av beslut. För att veta något om verkligheten behöver vi information om verkligheten.

### Uppgifter


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-1"]=[  {    "id": "k1-4-1-001",    "name": "Uppgift 1",    "exercise": "Lyckofunktionen för tårtätande ges av \\(y = f(x) = 3x - x^2\\). Vad är förstaderivatan \\(f_x'\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(3 - x\\)",          "\\(3 - 2x\\)",          "\\(3x - 2\\)",          "\\(6x - 2\\)"        ],        "correct": "\\(3 - 2x\\)"      }    },    "error": { "message": "Derivera varje term för sig: derivatan av \\(3x\\) är 3, och derivatan av \\(-x^2\\) är \\(-2x\\)." },    "correct": { "message": "Rätt! Förstaderivatan av \\(f(x) = 3x - x^2\\) är \\(f_x' = 3 - 2x\\). Det är denna vi sätter lika med 0 för att hitta maximipunkten." }  },  {    "id": "k1-4-1-002",    "name": "Uppgift 2",    "exercise": "Givet lyckofunktionen \\(f(x) = 3x - x^2\\), där \\(x\\) är mängden tårta: vid vilket värde på \\(x\\) maximeras lyckan? Sätt \\(f_x' = 0\\) och lös för \\(x\\). Ange svaret som ett decimaltal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "1.5" },    "answerformat": "",    "error": { "message": "Förstaderivatan är \\(f_x' = 3 - 2x\\). Sätt \\(3 - 2x = 0\\) och lös: \\(x = \\frac{3}{2}\\)." },    "correct": { "message": "Rätt! \\(3 - 2x = 0\\) ger \\(x^* = 1{,}5\\). En och en halv tårta ger mest lycka." }  },  {    "id": "k1-4-1-003",    "name": "Uppgift 3",    "exercise": "Beräkna mängden lycka vid den optimala tårtmängden \\(x^* = 1{,}5\\) med hjälp av funktionen \\(f(x) = 3x - x^2\\), där \\(x\\) är mängden tårta. Vad är \\(f(1{,}5)\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "2.25" },    "answerformat": "",    "error": { "message": "Sätt in \\(x = 1{,}5\\): \\(f(1{,}5) = 3 \\cdot 1{,}5 - (1{,}5)^2 = 4{,}5 - 2{,}25\\)." },    "correct": { "message": "Rätt! \\(f(1{,}5) = 4{,}5 - 2{,}25 = 2{,}25\\). Den maximala lyckan är 2,25 på en skala från 1 till 5." }  },  {    "id": "k1-4-1-005",    "name": "Uppgift 4",    "exercise": "I modellen \\(f(x) = 3x - x^2\\) för tårtätande, där \\(x\\) är mängden tårta, är förstaderivatan \\(f_x' = 3 - 2x\\) marginaleffekten. Vad beskriver begreppet <em>marginaleffekt</em> generellt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den totala mängden lycka som uppnås vid optimal tårtmängd",          "Hur mycket den totala lyckan förändras vid en liten förändring i tårtmängden",          "Skillnaden mellan maximal och minimal lycka",          "Antalet tårtor som ger noll lycka"        ],        "correct": "Hur mycket den totala lyckan förändras vid en liten förändring i tårtmängden"      }    },    "error": { "message": "Marginal- syftar på vad som händer vid en liten, ytterligare förändring av en variabel." },    "correct": { "message": "Rätt! Marginaleffekten anger hur resultatet (lyckan) förändras vid en liten förändring av en variabel (tårtmängden). Den optimala mängden tårta hittar vi där marginallyckan = 0, dvs. där \\(f_x' = 0\\)." }  },  {    "id": "k1-4-1-006",    "name": "Uppgift 5",    "exercise": "Lyckofunktionen för tårtätande ges av \\(f(x) = 3x - x^2\\), där \\(x\\) är mängden tårta. Andraderivatan är \\(f_x'' = -2\\). Vad säger detta om punkten \\(x^* = 1{,}5\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är en minimipunkt, eftersom andraderivatan är negativ",          "Det är en maximipunkt, eftersom andraderivatan är negativ",          "Det är en sadelpunkt, eftersom andraderivatan är konstant",          "Andraderivatan säger ingenting om punktens karaktär"        ],        "correct": "Det är en maximipunkt, eftersom andraderivatan är negativ"      }    },    "error": { "message": "En negativ andraderivatan innebär att funktionen är konkav (kupad nedåt) vid punkten. Vad kallas en vändpunkt på en nedåt-kupad kurva?" },    "correct": { "message": "Rätt! En negativ andraderivatan \\(f_x'' < 0\\) vid en stationär punkt (\\(f_x' = 0\\)) bekräftar att det är ett maximum. Det är det matematiska sättet att verifiera att vi har hittat toppen — inte botten — av funktionen." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-1"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Hur mycket jobb är lagom?**](sec-k1-4-2.html)
:::

