# Hur få ut det mesta av livet


## Den optimala mängden tårta {#k1-4-1}

### Kapitel 4.1: Den optimala mängden tårta {#kapitel-4.1-den-optimala-mängden-tårta .title}

### Pushtext

Avsnittet visar utifrån ett förenklat exempel med tårta hur vi kan resonera om mänskliga beslut.

### Begrepp

*Inga nya matematiska begrepp i detta avsnitt.*

### Teori

Tårta är gott men vi blir illamående om vi äter för mycket. Låt oss beskriva detta med matematik. Vi tänker att tårta gör oss lyckliga och kallar variabeln lycka för y.

Låt oss säga att vi mäter lycka på en skala från 1 till 5, där 5 är mesta möjliga tänkbara lycka. Lycka, y, är i sin tur en funktion *f* av hur många tårtor vi äter. Vi betecknar antal uppätna tårtor som variabeln x. För varje tårta vi sätter i oss ökar vår lycka med 3 enheter, vilket vi kan beskriva med funktionen:

[\\(Lycka = y = f(x) = 3x\\)]{.math .inline} (1)

Variabeln *x* är kontinuerlig och för varje tugga tårta vi äter blir vi lyckligare. Men vi blir även mättare och till slut börjar vi bli less på tårta. Denna negativa effekt på lyckan kan vi sätta in i vår funktion genom att lägga till termen [\\(- x\^{2}\\)]{.math .inline}. Termen är negativ eftersom den beskriver hur vår lycka minskar för varje tugga tårta.

Termen [\\(- x\^{2}\\)]{.math .inline} är kvadratisk, upphöjd till 2. Detta innebär att för låga värden, till exempel 0,5 kommer den negativa effekten att vara relativt liten. Till exempel: [\\(- (0,5)\^{2} = - 0,25\\)]{.math .inline} eller [\\(- (0,1)\^{2} = \\mp 0,01\\)]{.math .inline}. Men för högre värden av *x* kommer i stället den negativa effekten bli allt större, som till exempel [\\(- (2)\^{2} = - 4\\)]{.math .inline} eller [\\(- (5)\^{2} = - 25\\)]{.math .inline}. Hela funktionen blir nu:

[\\(y = f(x) = 3x - x\^{2}\\)]{.math .inline} (2)

### Tårta som maximeringsproblem

Det här kan vi beskriva som ett maximeringsproblem där vi väljer mängd tårta att äta, *x*, för att maximera vår lycka, *y*:

[\\(\\max\_{m.h.t.\\ \\ x}{f(x) = 3x - x\^{2}}\\)]{.math .inline} (3)

För att beräkna vilken mängd tårta som leder till största möjliga lycka beräknar vi första- och andraderivatan av funktion *f* med hänsyn till *x*:

[\\(f\_{x}\' = 3 - 2x\\)]{.math .inline} (4)

[\\(f\_{xx}\^{\'\'} = - 2\\)]{.math .inline}

För att hitta den lyckomaximerande mängden tårta sätter vi förstaderivatan [\\(f\_{x}\'\\)]{.math .inline} lika med 0 och löser för *x*:

[\\(x\^{\*} = \\frac{3}{2} = 1,5\\)]{.math .inline} (5)

Andraderivatan [\\(f\_{xx}\^{\'\'}\\)]{.math .inline} i ekvation 4 är negativ. Detta indikerar att [\\(x = 1,5\\)]{.math .inline} är en maximipunkt. Den mängd tårta som leder till mesta möjliga lycka är en och halv tårta. För att beräkna mängden lycka vid [\\(x\^{\*} = 1,5\\)]{.math .inline} tar vi:

[\\(f\\left( x\^{\*} = 1,5 \\right) = 3\*1,5 - (1,5)\^{2} = 4,5 - 2,25 = 2,25\\)]{.math .inline} (6)

En och en halv tårta ger 2,25 i lycka, där lycka mäts på en skala från 1 till 5. Exakt hur stor lycka som uppnås genom tårtätande är dock i detta exempel inte centralt.

Figur 1 illustrerar detta exempel och dess lösning. Till vänster och höger om [\\(x = 1,5\\)]{.math .inline} kan vi se att lyckan är mindre än 2,25. Vid noll mängd tårta (0 på horisontella axeln) är lyckan lika med noll. På samma sätt är lyckan lika noll när mängden tårta är 3, vilket i det här hypotetiska exemplet innebär att vi då ätit så mycket tårta att vi inte längre njuter av det alls.

**Figur 1. Den optimala mängden tårta.**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\4%20-%20Hur%20få%20ut%20det%20mesta%20av%20livet\4-1%20Den%20optimala%20mängden%20tårta/img/k1-4-1-image1.png){style="width:4in;height:3in"}

### Marginaleffekten

Ett annat sätt att beskriva detta fenomen är med hjälp av begreppet *marginaleffekt*. Generellt syftar begreppet marginaleffekt på hur ett resultat förändras vid små förändringar i en variabel. I detta fall hur mycket den totala mängden lycka ändras vid små förändringar av mängden tårta.

Vi söker den mängd tårta där marginallyckan är lika med 0, där förstaderivatan av funktion *f* är 0, [\\(f\_{x}\' = 0\\)]{.math .inline}. Det värde av x där [\\(f\_{x}\' = 0\\)]{.math .inline} är en extrempunkt. Om andraderivatan är negativ innebär små förändringar av x vid [\\(x\^{\*}\\)]{.math .inline} att lyckan minskar. I så fall är extrempunkten en lokal maximipunkt.

Eftersom ekvation 2 endast har en maximipunkt är detta även en global maximipunkt, det vill säga den punkt där lyckan som ges av tårtätande är mesta möjliga.

### En metafor för mänskliga beslut

Exemplet är banalt men introducerar de grundläggande logiska utgångspunkterna i en stor mängd teorier som förekommer rikligt inom samhällsvetenskap. Mycket samhällsvetenskaplig teori kan formuleras som att människor, eller organisationer där människor verkar, försöker uppnå ett eller flera mål, genom att välja mellan olika alternativ. Många teorier kring mänskligt beteende kan därför formuleras som maximerings- eller minimeringsproblem.

Det kan dock vara bra att påminna sig själv om att oavsett hur snillrik en teoretisk modell må vara säger den i sig självt ingenting om hur någon tänker när de ska äta tårta, eller fatta någon annan typ av beslut. För att veta något om verkligheten behöver vi information om verkligheten.

### Video

### Uppgifter


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-1"]=[  {    "id": "k1-4-1-001",    "name": "Uppgift 1",    "exercise": "Lyckofunktionen för tårtätande ges av \\(y = f(x) = 3x - x^2\\). Vad är förstaderivatan \\(f_x'\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(3 - x\\)",          "\\(3 - 2x\\)",          "\\(3x - 2\\)",          "\\(6x - 2\\)"        ],        "correct": "\\(3 - 2x\\)"      }    },    "error": { "message": "Derivera varje term för sig: derivatan av \\(3x\\) är 3, och derivatan av \\(-x^2\\) är \\(-2x\\)." },    "correct": { "message": "Rätt! Förstaderivatan av \\(f(x) = 3x - x^2\\) är \\(f_x' = 3 - 2x\\). Det är denna vi sätter lika med 0 för att hitta maximipunkten." }  },  {    "id": "k1-4-1-002",    "name": "Uppgift 2",    "exercise": "Givet lyckofunktionen \\(f(x) = 3x - x^2\\), där \\(x\\) är mängden tårta: vid vilket värde på \\(x\\) maximeras lyckan? Sätt \\(f_x' = 0\\) och lös för \\(x\\). Ange svaret som ett decimaltal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "1.5" },    "answerformat": "",    "error": { "message": "Förstaderivatan är \\(f_x' = 3 - 2x\\). Sätt \\(3 - 2x = 0\\) och lös: \\(x = \\frac{3}{2}\\)." },    "correct": { "message": "Rätt! \\(3 - 2x = 0\\) ger \\(x^* = 1{,}5\\). En och en halv tårta ger mest lycka." }  },  {    "id": "k1-4-1-003",    "name": "Uppgift 3",    "exercise": "Beräkna mängden lycka vid den optimala tårtmängden \\(x^* = 1{,}5\\) med hjälp av funktionen \\(f(x) = 3x - x^2\\), där \\(x\\) är mängden tårta. Vad är \\(f(1{,}5)\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "2.25" },    "answerformat": "",    "error": { "message": "Sätt in \\(x = 1{,}5\\): \\(f(1{,}5) = 3 \\cdot 1{,}5 - (1{,}5)^2 = 4{,}5 - 2{,}25\\)." },    "correct": { "message": "Rätt! \\(f(1{,}5) = 4{,}5 - 2{,}25 = 2{,}25\\). Den maximala lyckan är 2,25 på en skala från 1 till 5." }  },  {    "id": "k1-4-1-005",    "name": "Uppgift 4",    "exercise": "I modellen \\(f(x) = 3x - x^2\\) för tårtätande, där \\(x\\) är mängden tårta, är förstaderivatan \\(f_x' = 3 - 2x\\) marginaleffekten. Vad beskriver begreppet <em>marginaleffekt</em> generellt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den totala mängden lycka som uppnås vid optimal tårtmängd",          "Hur mycket den totala lyckan förändras vid en liten förändring i tårtmängden",          "Skillnaden mellan maximal och minimal lycka",          "Antalet tårtor som ger noll lycka"        ],        "correct": "Hur mycket den totala lyckan förändras vid en liten förändring i tårtmängden"      }    },    "error": { "message": "Marginal- syftar på vad som händer vid en liten, ytterligare förändring av en variabel." },    "correct": { "message": "Rätt! Marginaleffekten anger hur resultatet (lyckan) förändras vid en liten förändring av en variabel (tårtmängden). Den optimala mängden tårta hittar vi där marginallyckan = 0, dvs. där \\(f_x' = 0\\)." }  },  {    "id": "k1-4-1-006",    "name": "Uppgift 5",    "exercise": "Lyckofunktionen för tårtätande ges av \\(f(x) = 3x - x^2\\), där \\(x\\) är mängden tårta. Andraderivatan är \\(f_x'' = -2\\). Vad säger detta om punkten \\(x^* = 1{,}5\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är en minimipunkt, eftersom andraderivatan är negativ",          "Det är en maximipunkt, eftersom andraderivatan är negativ",          "Det är en sadelpunkt, eftersom andraderivatan är konstant",          "Andraderivatan säger ingenting om punktens karaktär"        ],        "correct": "Det är en maximipunkt, eftersom andraderivatan är negativ"      }    },    "error": { "message": "En negativ andraderivatan innebär att funktionen är konkav (kupad nedåt) vid punkten. Vad kallas en vändpunkt på en nedåt-kupad kurva?" },    "correct": { "message": "Rätt! En negativ andraderivatan \\(f_x'' < 0\\) vid en stationär punkt (\\(f_x' = 0\\)) bekräftar att det är ett maximum. Det är det matematiska sättet att verifiera att vi har hittat toppen — inte botten — av funktionen." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-1"></div>


## Hur mycket jobb är lagom? {#k1-4-2}

### Kapitel 4.2: Hur mycket jobb är lagom med jobb? {#kapitel-4.2-hur-mycket-jobb-är-lagom-med-jobb .title}

### Pushtext

Detta avsnitt introducerar hur vi kan resonera teoretiskt kring nöjdhet (*utility*) utifrån en avvägning mellan arbete, konsumtion och fritid.

### Begrepp

- **Nytta (engelska *utility*):** Betyder ungefär nöjdhet.

- **Nöjdhetsfunktion, nyttofunktion:** Matematisk funktion som beskriver hur en eller flera variabler påverkar en persons nöjdhet (nytta).

- **Budgetfunktion:** Beskriver tillgängliga resurser och avgränsar därigenom möjliga alternativ.

- **Indifferenslinje:** En linje som beskriver olika mängder av två produkter (variabler), där varje kombination ger samma nöjdhet för en aktör.

### Teori

Exemplet med tårta i föregående avsnitt är en abstrakt illustration av hur en individ måste välja rätt mängd av något för att få bästa möjliga resultat. Nu ska vi titta på ett liknande exempel men kanske med tydligare koppling till samhällsvetenskap.

### Nyttomaximering

Säg att Erik ska maximera sin *nöjdhet*, N (kallas på engelska för [*utility*](https://en.wikipedia.org/wiki/Utility), ungefär *nytta*). I detta exempel väljer vi att avgränsa oss till två fenomen som bestämmer *N* och dessutom står i motsättning till varandra, vilka båda påverkar hur nöjd Erik är. Eriks nöjdhet maximeras genom en avvägning av följande två fenomen:

1.  Eriks köp av varor och tjänster, vilket finansieras genom arbete. Detta fenomen kallar vi *C*.

2.  Eriks lediga tid, vilket vi betecknar *L*.

Eriks nyttomaximering kan därför beskrivas som ett val mellan arbete (*C*) och fritid (*L*). Vilken effekt *C* och *L* har på Eriks nöjdhet beskriver vi med följande funktion:

[\\(N = u(C,L) = C\^{\\frac{1}{2}}L\^{\\frac{1}{2}},\\ \\ \\ \\ \\text{där}\\ C,L \> 0\\)]{.math .inline} (1)

där nöjdheten *N* förklaras av nöjdhetsfunktionen [\\(u\\ (\\ )\\)]{.math .inline} med de ingående variablerna *C* och *L*. Båda variablerna kan enbart anta positiva värden, eftersom Erik inte kan ha negativ konsumtion eller fritid. Han måste åtminstone sova lite.

Exponenterna för *C* och *L*, bråket [\\(\\frac{1}{2}\\)]{.math .inline} , beskriver hur mycket *N* ökar då respektive variabel förändras med en enhet. Alltså en krona extra konsumtion eller en extra timme ledigt.

### Maximal nöjdhet

Frågan är nu vid vilka mängder av *C* och *L* som Eriks nöjdhet *N* maximeras. För att bättre förstå nöjdhetsfunktionen (nyttofunktionen) kan vi börja med att illustrera det teoretiska sambandet, vilket visas i figur 1. Det tvådimensionella diagrammet visar tre variabler: *C*, *L* och *N*.

De två axlarna i diagrammet, horisontella och vertikala axeln, mäter konsumtion och fritid. Högre upp längs vertikala axeln = mer konsumtion. Längre till höger längs med horisontell axeln = mer fritid. Varje böjd linje representerar ett värde för *N*.

De böjda linjerna i diagrammet kallas för *indifferenslinjer*. Vid olika indifferenslinjer är mängden nytta olika. Men längs med varje indifferenslinje är nöjdheten densamma för olika kombinationer av *C* och *L*. Denna teori innebär att Erik är *indifferent* till exakt vilken kombination av C och L det blir, så länge vi är kvar på samma linje.

Erik kan acceptera mindre fritid så länge han kan kompensera med större konsumtion, uppe till vänster i diagrammet, och mindre konsumtion om han kan kompensera med mer fritid. Linjerna längre bort från nollpunkten, origo, representerar kombinationer av konsumtion och fritid som sammantaget resulterar i större nytta.

**Figur 1. Olika kombinationer av C, L och N.**![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\4%20-%20Hur%20få%20ut%20det%20mesta%20av%20livet\4-2%20Hur%20mycket%20jobb%20är%20lagom%20med%20jobb/img/k1-4-2-image1.png){style="width:4.89431in;height:3.67073in"}

Förklaring: Konsumtion mäts på vertikala axeln. Fritid mäts på horisontella axeln. Nere i vänstra hörnet är mängden konsumtion och fritid noll. Längre upp till höger i diagrammet är mängden konsumtion och fritid större. Indifferenslinjerna visar olika kombinationer av konsumtion och fritid, där mängden nytta för Erik är densamma längs respektive linje. Olika indifferenslinjer representerar olika mängd nytta. []{.mark}

### Budgetfunktionen

Eriks konsumtion och fritid begränsas även av Eriks budget, som bestäms av dels hur mycket han väljer att arbeta, dels hans lön. Detta villkor kan beskrivas med följande *budgetfunktion*:

[\\(C = w(T - L) = wT - wL\\)]{.math .inline} (2)

där *w* är lön, *T* är totalt tillgänglig vaken tid och *L* är fortfarande ledig tid. Parentesen [\\((T - L)\\)]{.math .inline} beskriver hur mycket ledig tid Erik avstår och i stället lägger på arbete och därigenom får lön. Ju högre lön, desto mindre fritid behöver offras för att konsumera samma mängd varor och tjänster.

Budgetfunktionen kan användas för att rita en rak linje i diagrammet med indifferenslinjerna. Figur 2 illustrerar budgetlinjen och indifferenslinjer. De två axlarna är konsumtion *C* och fritid *L*.

Om Erik spenderade all tillgänglig tid till arbete, [\\(L = 0\\)]{.math .inline}, skulle [\\(C = wT\\)]{.math .inline}, en punkt längs med den vertikala axeln, konsumtion. Detta är den maximala mängden konsumtion som Erik kan uppnå, givet nuvarande lön. Linjen lutar negativt ned mot horisontella axeln.

Vi kan tänka oss att budgetlinjen börjar på den horisontella axeln vid punkten för maximal fritid (noll konsumtion). Linjens lutning upp mot vertikala axeln bestäms av lönen *w*. Budgetfunktionen kan därför skrivas ut som ett rakt diagonalt streck. Högre lön ger en brantare linje och möjliggör större konsumtion (ett högre maxvärde på vertikala axeln).

**Figur 2. Budgetlinjen och indifferenslinjer**![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\4%20-%20Hur%20få%20ut%20det%20mesta%20av%20livet\4-2%20Hur%20mycket%20jobb%20är%20lagom%20med%20jobb/img/k1-4-2-image2.png){style="width:4.98718in;height:3.74038in"}

Förklaring: Indifferenslinjerna är fortfarande illustrationer av kombinationer av fritid och konsumtion som ger samma mängd nytta längs med respektive linje. Budgetlinjen illustrerar vad Erik har råd med för konsumtion och fritid. Alla kombinationer av konsumtion och fritid innanför budgetlinjen har Erik råd med.

#### Budgetlinjens relation till indifferenskurvorna

Ju längre bort från origo (noll konsumtion och noll fritid) som budgetlinjen ligger, desto mer kan Erik konsumera. Alla kombinationer av konsumtion och fritid, *C* och *L*, innanför budgetlinjen har Erik råd med.

Givet att Erik vill maximera sin nöjdhet och denna fungerar på det sätt som den beskrivs i nöjdhetsfunktionen kommer Erik att välja en kombination av konsumtion och fritid där en av indifferenslinjerna precis *tangerar* budgetlinjen.

Så länge Erik har samma inkomst, samma budgetlinje, och Eriks nöjdhet kan beskrivas som den görs i nöjdhetsfunktionen, samma form på indifferenslinjerna, är detta det enda logiska resultatet.

**Varför väljer han inte en punkt innanför budgetlinjen?** Vid varje punkt innanför budgetlinjen, den gråa ytan i figur 2, finns det en annan punkt längre bort från origo där Erik kan få en större mängd nytta.

**Varför väljer han inte en annan punkt längs med budgetlinjen?** Vid varje punkt på budgetlinjen närmare vertikala eller horisontella axeln kommer Eriks nöjdhet i stället att definieras av en annan indifferenslinje som i sin tur är närmare origo, vilket därmed innebär mindre mängd total nytta.

### Maximeringsproblemet

Låt oss nu ställa upp Eriks maximeringsproblem:

[\\(\\max\_{m.h.t\\ \\ C,L}{C\^{\\frac{1}{2}}L\^{\\frac{1}{2}}}\\)]{.math .inline} (3)

under villkoret [\\(C \\leq w(T - L)\\)]{.math .inline}

Detta löser vi genom att ställa upp Lagrangefunktionen:

[\\(\\mathcal{L}(C,L):\\ C\^{\\frac{1}{2}}L\^{\\frac{1}{2}} + \\lambda(wT - wL - C)\\)]{.math .inline} (4)

Vi tar derivatan av [\\(\\mathcal{L}\\)]{.math .inline} med hänsyn till C respektive L:

> [\\(\\mathcal{L}\_{C}\':\\frac{1}{2}C\^{- \\frac{1}{2}}L\^{\\frac{1}{2}} - \\lambda\\)]{.math .inline} (5)
>
> [\\(\\mathcal{L}\_{L}\':\\frac{1}{2}C\^{\\frac{1}{2}}L\^{- \\frac{1}{2}} - \\lambda w\\)]{.math .inline}

Från [\\(\\mathcal{L}\_{L}\'\\)]{.math .inline} löser vi för [\\(\\lambda\\)]{.math .inline}:

[\\(\\lambda = \\frac{1}{w}\\frac{1}{2}C\^{\\frac{1}{2}}L\^{- \\frac{1}{2}}\\)]{.math .inline} (6)

Denna definition av [\\(\\lambda\\)]{.math .inline} sätter vi in i förstagradsvillkoret vi fick från [\\(\\mathcal{L}\_{C}\'\\)]{.math .inline}:

[\\(\\frac{1}{2}C\^{- \\frac{1}{2}}L\^{\\frac{1}{2}} = \\frac{1}{w}\\frac{1}{2}C\^{\\frac{1}{2}}L\^{- \\frac{1}{2}}\\)]{.math .inline} (7)

[\\(w = \\frac{\\frac{1}{2}C\^{\\frac{1}{2}}L\^{- \\frac{1}{2}}}{\\frac{1}{2}C\^{- \\frac{1}{2}}L\^{\\frac{1}{2}}}\\)]{.math .inline}

Denna ekvation visar hur lön *w* hänger ihop med Eriks värdering av konsumtion *C* och fritid *L* vid den punkt som maximerar Eriks nöjdhet *N*. I täljaren har vi förstaderivatan av nöjdhetsfunktionen med hänsyn till *L*, det vill säga [\\(u\_{L}\'\\)]{.math .inline}.

I nämnaren har vi förstaderivatan av nöjdhetsfunktionen med hänsyn till *C*, vilket vi skriver som [\\(u\_{C}\'\\)]{.math .inline}. Vi kan därför skriva om denna ekvation till:

[\\(w = \\frac{u\_{L}\'}{u\_{C}\'}\\)]{.math .inline} (8)

Detta innebär precis det vi gick igenom ovan, att den nyttomaximerande punkten på budgetlinjen är den där en av de böjda indifferenslinjerna tangerar budgetlinjen. I denna punkt är lutningen på budgetlinjen som bestäms av *w*, samma som lutningen på den indifferenslinje som tangerar budgetlinjen, vilken bestäms av nöjdhetsfunktionens form.

### Video

### Uppgifter


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-2"]=[  {    "id": "k1-4-2-001",    "name": "Uppgift 1",    "exercise": "Eriks nöjdhetsfunktion ges av \\(N = u(C, L) = C^{\\frac{1}{2}} L^{\\frac{1}{2}}\\). Vad representerar variablerna \\(C\\) och \\(L\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "C = kostnad, L = lön",          "C = konsumtion, L = fritid",          "C = centralitet, L = lönsamhet",          "C = kapital, L = arbete"        ],        "correct": "C = konsumtion, L = fritid"      }    },    "error": { "message": "Läs texten om Eriks maximeringsproblem. Vilka två fenomen bestämmer Eriks nöjdhet och står i motsättning till varandra?" },    "correct": { "message": "Rätt! \\(C\\) är Eriks konsumtion (köp av varor och tjänster) och \\(L\\) är fritid. Nöjdhetsfunktionen beskriver avvägningen mellan dessa två." }  },  {    "id": "k1-4-2-002",    "name": "Uppgift 2",    "exercise": "Budgetfunktionen för Erik ges av \\(C = w(T - L)\\). Vad händer med Eriks maximala konsumtion om lönen \\(w\\) ökar?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den maximala konsumtionen minskar",          "Den maximala konsumtionen förblir oförändrad",          "Den maximala konsumtionen ökar",          "Budgetfunktionen slutar gälla"        ],        "correct": "Den maximala konsumtionen ökar"      }    },    "error": { "message": "I budgetfunktionen \\(C = w(T - L)\\): om \\(L = 0\\) (Erik jobbar hela tiden) blir \\(C = wT\\). Vad händer med \\(wT\\) om \\(w\\) ökar?" },    "correct": { "message": "Rätt! Högre lön \\(w\\) ger en brantare budgetlinje och ett högre maxvärde för konsumtion (\\(C = wT\\) när \\(L = 0\\)). Erik kan köpa mer med samma arbetstid." }  },  {    "id": "k1-4-2-003",    "name": "Uppgift 3",    "exercise": "Vad är en <em>indifferenslinje</em> i ett diagram med konsumtion och fritid?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "En linje som visar alla kombinationer av C och L som Erik har råd med",          "En linje längs vilken alla kombinationer av C och L ger samma nöjdhet",          "En linje som visar hur nöjdheten ökar med konsumtionen",          "En linje som beskriver Eriks optimala val"        ],        "correct": "En linje längs vilken alla kombinationer av C och L ger samma nöjdhet"      }    },    "error": { "message": "Ordet 'indifferent' betyder likgiltig. Vad innebär det för Erik längs en sådan linje?" },    "correct": { "message": "Rätt! Längs en indifferenslinje är nöjdheten densamma för alla kombinationer av konsumtion och fritid. Individen är indifferent – det spelar ingen roll exakt vilken kombination det blir, så länge man är kvar på samma linje." }  },  {    "id": "k1-4-2-004",    "name": "Uppgift 4",    "exercise": "Erik har budgetfunktionen \\(C = w(T - L)\\) med \\(w = 100\\) kr/timme och \\(T = 16\\) tillgängliga timmar. Beräkna konsumtionen \\(C\\) för \\(L = 8\\) timmars fritid.",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "800" },    "answerformat": "",    "error": { "message": "Sätt in värdena: \\(C = 100 \\cdot (16 - 8)\\). Beräkna \\(T - L\\) och multiplicera med \\(w\\)." },    "correct": { "message": "Rätt! \\(C = 100 \\cdot (16 - 8) = 100 \\cdot 8 = 800\\) kr. Med 8 timmars fritid och en lön på 100 kr/timme kan Erik konsumera för 800 kr." }  },  {    "id": "k1-4-2-005",    "name": "Uppgift 5",    "exercise": "Vilken punkt på budgetlinjen väljer en nyttomaximerande individ, enligt teorin om indifferenslinjer och budgetfunktionen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den punkt på budgetlinjen med mest fritid",          "Den punkt innanför budgetlinjen som ger mest konsumtion",          "Den punkt där en indifferenslinje tangerar budgetlinjen",          "Mittpunkten på budgetlinjen"        ],        "correct": "Den punkt där en indifferenslinje tangerar budgetlinjen"      }    },    "error": { "message": "Tänk på att individen vill nå en indifferenslinje så långt från origo som möjligt, men ändå ha råd (ligga på budgetlinjen)." },    "correct": { "message": "Rätt! Den nyttomaximerande punkten är där en indifferenslinje precis tangerar budgetlinjen. I denna punkt är lutningen på budgetlinjen (bestämd av lönen \\(w\\)) lika med lutningen på indifferenslinjen (\\(w = u_L' / u_C'\\))." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-2"></div>


## Hur höga skatter vill vi ha? {#k1-4-3}

### Kapitel 4.3: Hur höga skatter vill vi ha? {#kapitel-4.3-hur-höga-skatter-vill-vi-ha .title}

### Pushtext

Detta avsnitt introducerar hur vi kan resonera om skattenivån för hela samhället utifrån det som kallas för Lafferkurvan.

### Begrepp

- **Skattekvot, skattenivå, skattetryck:** Totala mängden skatteintäkter dividerat med BNP. Olika begrepp brukar användas för att beskriva samma fenomen.

- **Lafferkurvan:** En kurva som beskriver tänkbara teoretiska samband mellan totala skattenivån i samhället och skatteintäkterna. Grundläggande teorier beskriver ofta kurvan som att högre skatter ökar skatteintäkterna, men ju högre skatter, desto mindre vill folk arbeta - vilket påverkar skatteintäkterna negativt.

### Teori

En stor mängd samhällsvetenskap handlar om skatter och hur de påverkar människors liv. Ett känt exempel är den så kallade [*Lafferkurvan*](https://en.wikipedia.org/wiki/Laffer_curve), uppkallad efter den amerikanske nationalekonomen [Arthur Laffer](https://en.wikipedia.org/wiki/Arthur_Laffer). Liknande teorier inom samhällsvetenskap kan spåras tillbaka till åtminstone 1400-talet.

### Ett påhittat land

Vi börjar med att tänka oss att vi har ett samhälle utan skatter. Matematiken i detta avsnitt är lånad och inspirerad av \[[lundberg2017thelaffer](#LyXCite-lundberg2017thelaffer)\]

Folk arbetar och producerar varor och tjänster som köps och säljs. Totala inkomsterna i samhället kallar vi för *y*, vars värde ej är avgörande för exemplet.

Nu vill regeringen införa en skatt som ska sättas som en procentsats på alla inkomster och kallas för *t*. Skatten *t* kan vara ett värde mellan 0 och 1, mellan 0 och 100 %. Statens totala skatteintäkter, *i*, kan då beräknas till:

[\\(i = ty\\)]{.math .inline} (1)

Om alla inkomster i samhället summerar till 1 000 kr och skatten är 5 % blir statens skatteintäkter i = [\\(ty = 1000\*0,05 = 50\\ kr\\)]{.math .inline}. De inkomster som beskattas, *y*, kallas även för *skattebasen.*

Skatten påverkar människors vilja att arbeta och betala skatt. Ju högre skatten blir, desto mindre vill människor arbeta, vilket i sin tur drar ned statens skatteintäkter. Denna mekanism vill vi ta hänsyn till i vår ekvation över skatteintäkterna. Vi skriver därför om ekvation 1 så att vi i stället får följande uttryck:

[\\(i = ty(1 - t)\^{b}\\)]{.math .inline} (2)

Bokstaven *b* anger hur människorna i samhället reagerar på en skattehöjning, vilket även kallas för *skattebaselasticitet*. Om *b* är 0 arbetar människor exakt lika mycket oavsett hur hög skatten är. Ett högre positivt värde på b innebär att skattehöjningar har en större negativ effekt på människors arbetslust. Ett negativt värde [\\(b \< 0\\)]{.math .inline} innebär att människor arbetar mer vid högre skatt.

### Lafferkurvan

Ekvation 2 är ett exempel på Lafferkurvan. Från denna ekvation kan vi se att om skatten sätts till 100 % blir t = 1 och i så fall blir skatteintäkterna [\\(i = 0\\)]{.math .inline}. Så om staten vill maximera sina skatteintäkter måste skatten sättas någonstans mellan 0 och 100 %. För att hitta den skattenivå som ger mesta möjliga skatteintäkter kan vi ställa upp detta som ett maximeringsproblem där vi ska beräkna maximum av skatteintäkterna i med hänsyn till skattenivån *t*:

[\\(\\max\_{m.h.t.\\ \\ t}{i = ty(1 - t)\^{b}}\\)]{.math .inline} (3)

För att lösa maximeringsproblemet tar vi derivatan av *i* med hänsyn till *t*:

[\\(i\_{t}\' = y(1 - t)\^{b} - by(1 - t)\^{b - 1}t\\)]{.math .inline} (4)

där vi använder kedjeregeln för derivata. Vi sätter sedan förstaderivatan lika med 0 och löser ut t med hjälp av logaritmering:

[\\(y(1 - t)\^{b} - by(1 - t)\^{b - 1}t = 0\\)]{.math .inline} (5)

[\\(\\ln y + b\\ln(1 - t) - \\ln b - \\ln y - \\ln t - (b - 1)\\ln(1 - t) = 0\\)]{.math .inline}

[\\({Ln}(1 - t) - \\ln t - \\ln b = 0\\)]{.math .inline}

[\\({Ln}\\left( \\frac{1 - t}{t} \\right) = \\ln b\\)]{.math .inline}

[\\(\\frac{1}{t} - 1 = b\\)]{.math .inline}

[\\(t\^{\*} = \\frac{1}{1 + b}\\)]{.math .inline}

Definitionen av [\\(t\^{\*}\\)]{.math .inline} i sista raden ger oss ett uttryck för mesta möjliga skatteintäkt, alltså det värde för *t* som maximerar variabeln *i*. Mesta möjliga skatteintäkter beror på skattebaselasticiteten *b*.

### Två olika samhällen

Regeringen i vårt påhittade samhälle vill införa skatt men är osäkra på värdet på *b*. För att få mer klarhet jämför de med två andra länder. Figur 1 beskriver Lafferkurvorna för dessa två samhällen som representerar två olika samhällstyper. I figuren går båda linjerna mot 0 skatteintäkter då skattenivån närmar sig 100 %, där vi tänker oss att ingen vill betala skatt.

I det första landet fungerar offentlig sektor ineffektivt. Människor har lågt förtroende för det politiska systemet och de skatter som staten tar ut används inte till något som människor har glädje av. Skatterna är utformade på ett krångligt och ineffektivt sätt. Skattebaselasticiteten är i detta fall [\\(b = 3\\)]{.math .inline}. Mesta möjliga skatteintäkter uppnås i detta fall vid en skattenivå på:

[\\(t(b = 3) = \\frac{1}{1 + 3} = 0,25\\)]{.math .inline} (6)

Detta betyder att om staten vill maximera skatteuttaget måste den sätta skatten på 25 %. Alla andra skattenivåer resulterar i mindre totala skatteintäkter.

I diagrammet illustreras detta med den heldragna linjen vid "Ineffektivt system". Kurvans högsta punkt är vid [\\(t = 0,25\\)]{.math .inline}. Detta innebär att redan vid en relativt låg skattenivå medför ytterligare höjningar av skatten att de totala skatteintäkterna kommer att minska.

**Figur 1. Två Lafferkurvor**

![En bild som visar text, diagram, Graf, linje Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\4%20-%20Hur%20få%20ut%20det%20mesta%20av%20livet\4-3%20Hur%20höga%20skatter%20vill%20vi%20ha/img/k1-4-3-image1.png){style="width:4.46269in;height:3.34702in"}

Förklaring: De två kurvorna i diagrammet illustrerar två teoretiska samhällsekonomier som fungerar olika. I det ena samhället fungerar samhället på ett sådant sätt att den maximala skattenivån är 66,6 %. I den andra ekonomin är den optimala skattenivån 25 %. Trots att skattenivån är lägre i den andra samhällsekonomin är totala skatteintäkterna mindre på grund av olika ineffektiviteter.

I det andra samhället fungerar offentlig sektor relativt väl. Invånarna får för sina skattepengar tillbaka en stor mängd tjänster av god kvalitet och har högt förtroende för det politiska systemet. Skattesystemet är därtill effektivt utformat och enkelt att följa för den som vill. Skattebaselasticiteten är i detta fall [\\(b = 0,5\\)]{.math .inline} och mesta möjliga skatteintäkter nås vid skattenivån:

[\\(t(b = 0,5) = \\frac{1}{1 + 0,5} = \\frac{2}{3}\\)]{.math .inline} (7)

Uttryckt som procent motsvarar det cirka 66,6 %. I diagrammet beskrivs detta samhälle med den streckade linjen, markerad med "Effektivt system". Denna linjes högsta punkt är vid [\\(t = 0,666\\)]{.math .inline}. Efter denna nivå kommer en ytterligare skattehöjning medföra att skatteintäkterna börjar minska.

*Matematiken i detta avsnitt är lånad och inspirerad av [Lundberg 2017](https://www.lisdatacenter.org/wps/liswps/711.pdf). Tack till Jacob Lundberg som kommenterade ett tidigare utkast på denna text. Återstående misstag är tyvärr mina egna.*

### Video

### Uppgifter


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-3"]=[  {    "id": "k1-4-3-001",    "name": "Uppgift 1",    "exercise": "Statens skatteintäkter ges av \\(i = ty(1-t)^b\\), där \\(i\\) är skatteintäkterna, \\(t\\) är skattesatsen, \\(y\\) är skattebasens storlek och \\(b\\) är skattebaselasticiteten. Vad händer med skatteintäkterna om skatten sätts till \\(t = 1\\) (100 %)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Skatteintäkterna maximeras",          "Skatteintäkterna blir lika med \\(y\\)",          "Skatteintäkterna blir noll",          "Skatteintäkterna beror enbart på \\(b\\)"        ],        "correct": "Skatteintäkterna blir noll"      }    },    "error": { "message": "Sätt in \\(t = 1\\) i \\(i = ty(1-t)^b\\): vad blir faktorn \\((1 - 1)^b\\)?" },    "correct": { "message": "Rätt! Om \\(t = 1\\) blir \\((1-t)^b = 0^b = 0\\), och därmed \\(i = 0\\). Vid 100 % skatt vill ingen arbeta och skatteintäkterna kollapsar till noll." }  },  {    "id": "k1-4-3-002",    "name": "Uppgift 2",    "exercise": "I skatteintäktsfunktionen \\(i = ty(1-t)^b\\) (där \\(b\\) är skattebaselasticiteten) ges den intäktsmaximerande skattenivån av \\(t^* = \\frac{1}{1+b}\\). Om \\(b = 3\\), vid vilken skattenivå (i procent) maximeras statens skatteintäkter?",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "25" },    "answerformat": "",    "error": { "message": "Sätt in \\(b = 3\\) i formeln: \\(t^* = \\frac{1}{1+3}\\). Beräkna bråket och omvandla till procent." },    "correct": { "message": "Rätt! \\(t^* = \\frac{1}{1+3} = \\frac{1}{4} = 0{,}25\\), alltså 25 %. Det är det ineffektiva samhällets optimala skattenivå." }  },  {    "id": "k1-4-3-003",    "name": "Uppgift 3",    "exercise": "I skatteintäktsfunktionen \\(i = ty(1-t)^b\\) ges den intäktsmaximerande skattenivån av \\(t^* = \\frac{1}{1+b}\\). Om skattebaselasticiteten är \\(b = 0{,}5\\), beräkna \\(t^*\\) (i procent, avrundat till en decimal).",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "66.7" },    "answerformat": "",    "error": { "message": "Sätt in \\(b = 0{,}5\\): \\(t^* = \\frac{1}{1+0{,}5} = \\frac{1}{1{,}5} = \\frac{2}{3}\\). Omvandla till procent." },    "correct": { "message": "Rätt! \\(t^* = \\frac{1}{1{,}5} = \\frac{2}{3} \\approx 66{,}7\\%\\). I ett effektivt skattesystem med högt förtroende kan staten ta ut en högre skatt och ändå maximera sina intäkter." }  },  {    "id": "k1-4-3-004",    "name": "Uppgift 4",    "exercise": "I skatteintäktsfunktionen \\(i = ty(1-t)^b\\), där \\(i\\) är skatteintäkterna, \\(t\\) skattesatsen och \\(y\\) skattebasens storlek: vad menas med parametern <em>skattebaselasticitet</em> (\\(b\\))?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det totala skatteuttaget i procent av BNP",          "Hur känsligt skatteunderlaget (skattebasen) är för förändringar i skattenivån",          "Statens totala skatteintäkter",          "Antalet skattebetalare i samhället"        ],        "correct": "Hur känsligt skatteunderlaget (skattebasen) är för förändringar i skattenivån"      }    },    "error": { "message": "Elasticitet beskriver allmänt hur en variabel reagerar på förändringar i en annan. Vad beskriver \\(b\\) i uttrycket \\(i = ty(1-t)^b\\)?" },    "correct": { "message": "Rätt! Skattebaselasticiteten \\(b\\) anger hur mycket skattebasen (och därmed folks vilja att arbeta) påverkas av en skattehöjning. Högt \\(b\\) innebär att folk kraftigt minskar sin arbetslust vid höjda skatter." }  },  {    "id": "k1-4-3-005",    "name": "Uppgift 5",    "exercise": "Vilket av följande stämmer om Lafferkurvan?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Skatteintäkterna ökar alltid när skatten höjs",          "Skatteintäkterna är noll vid både 0 % och 100 % skatt",          "Lafferkurvan gäller bara för land med hög BNP",          "Den optimala skattenivån är alltid 50 %"        ],        "correct": "Skatteintäkterna är noll vid både 0 % och 100 % skatt"      }    },    "error": { "message": "Tänk på vad som händer med \\(i = ty(1-t)^b\\) när \\(t = 0\\) respektive \\(t = 1\\)." },    "correct": { "message": "Rätt! Vid \\(t = 0\\) finns inga skatter och \\(i = 0\\). Vid \\(t = 1\\) vill ingen arbeta och \\(i = 0\\). Däremellan finns en toppunkt som beror på \\(b\\) – den optimala skattenivån \\(t^* = \\frac{1}{1+b}\\)." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-3"></div>


## Vinstmaximerande företag {#k1-4-4}

### Kapitel 4.4: Vinstmaximerande företag {#kapitel-4.4-vinstmaximerande-företag .title}

### Pushtext

Detta avsnitt ger en förenklad introduktion till hur vi med matematik kan resonera kring kommersiella företag och deras problem att maximera sina vinster.

### Begrepp

- **Intäkter:** De pengar som företaget får betalt för sina varor och tjänster.

- **Totala kostnader:** I detta exempel är totala kostnader företagets utgifter för att producera en specifik mängd av sina varor och tjänster.

- **Marginalkostnad:** Kostnaden för företaget att tillverka en extra enhet. Marginalkostnaden kan variera vid till exempel olika produktionsmängder.

### Teori

En stor mängd samhällsvetenskaplig analys studerar hur företag beter sig. Här nöjer vi oss med att introducera en förenklad teori om hur vi med matematik kan beskriva vinstmaximering för ett kommersiellt företag.

### Ett företag

Säg att vi har ett företag som tillverkar två olika produkter som vi kallar för *X* och *Y*. Företaget vill maximera sin vinst. Försäljningspriserna för de två varorna styrs av omvärlden (marknaden), vilket företaget inte kan påverka. Företaget är visserligen fri att själv bestämma priset på sina varor, men i detta hypotetiska exempel har företaget ingenting att vinna på att höja eller sänka priserna.

Detta är inte nödvändigtvis särskilt realistiskt, men förenklar matematiken något. Företaget accepterar därför att priserna är vad det är, men kan däremot välja hur stor mängd av produkterna som ska produceras.

Mängden producerade enheter av de två produkterna anger vi med *x* och *y*. För produkt *x* har vi pris [\\(p\_{x} = 10\\)]{.math .inline} och för produkt *y* har vi [\\(p\_{y} = 20\\)]{.math .inline}. Företagets intäkter kan beskrivas som en funktion av pris multiplicerat med kvantitet. Funktionen för totala intäkter kallar vi *TR* efter engelskans *total revenue:*

[\\(\\text{Totala\~intäkter} = TR(x,y) = p\_{x}x + p\_{y}y = 10x + 20y\\)]{.math .inline} (1)

Från ekvation 1 kan vi lösa för *y*:

[\\(TR = 10x + 20y\\)]{.math .inline} (2)

De totala produktionskostnaderna består av fasta utgifter på 10 kr och rörliga kostnader för att tillverka produkterna *X* respektive *Y*:

[\\(\\text{Totala\~kostnader} = TC(x,y) = x\^{2} + 2y\^{2} + 10\\)]{.math .inline} (3)

där [\\(TC(\\ )\\)]{.math .inline} är namn på den matematiska funktionen. Företagets vinst är lika med intäkter minus kostnader, [\\(TR - TC\\)]{.math .inline}, vilket vi kan skriva som en funktion, *V*:

[\\(V(x,y) = TR - TC = 10x + 20y - (x\^{2} + 2y\^{2} + 10)\\)]{.math .inline} (4)

### Maximeringsproblemet

Vinsten är en funktion av kvantiteterna *x* och *y*, vilket vi kan beskriva som att företaget vill maximera sin vinst genom att välja mängd att producera av *x* och *y*:

[\\(\\max\_{m.\\ h.t\\ \\ x,y}{V(x,y)}\\ = 10x + 20y - (x\^{2} + 2y\^{2} + 10)\\)]{.math .inline} (5)

Detta maximeringsproblem kan vi lösa genom att ta derivatan av *V* med hänsyn till *x* och *y*. Vi söker en maximipunkt där förstaderivatan är lika med 0 och andraderivatan är negativ. Förstaderivatan av [\\(V(x,y)\\)]{.math .inline} med hänsyn till *x* respektive *y*:

[\\(V\_{x}\' = 10 - 2x\\)]{.math .inline} (6)

[\\(V\_{y}\' = 20 - 4y\\)]{.math .inline}

Vi har nu två uttryck som beskriver hur *V* ändras då *x* respektive *y* ökar med en enhet. Vi sätter uttrycken i ekvation 6 lika med 0, vilket ger oss förstagradsvillkoren, och löser för *x* och *y*. Dessa värden för *x* och *y* är lösningarna vi söker, vilket vi skriver som [\\(x\^{\*}\\)]{.math .inline} och [\\(y\^{\*}\\)]{.math .inline}:

[\\(x\^{\*} = \\frac{10}{2} = 5\\)]{.math .inline} (7)

[\\(y\^{\*} = 20/4 = 5\\)]{.math .inline}

Vi kan även se att andraderivatan av *V* med hänsyn till *x* och *y* är negativ genom att derivera uttrycken i ekvation 6 en gång till:

[\\(V\_{xx}\^{\'\'} = - 2\\)]{.math .inline} (8)

[\\(V\_{yy}\^{\'\'} = - 4\\)]{.math .inline}

### Marginalvinsten

Vinsten maximeras då marginalvinsten är lika med 0, det vill säga då förstaderivatan av V är [\\(V\_{x}\' = 0\\)]{.math .inline} och [\\(V\_{y}\' = 0\\)]{.math .inline}. Låt oss beräkna hur mycket vinst företaget kommer att göra genom att sätta in dessa värden för [\\(x\^{\*}\\)]{.math .inline} och [\\(y\^{\*}\\)]{.math .inline} i [\\(V\\left( x\^{\*},y\^{\*} \\right) = V(5,5)\\)]{.math .inline}:

[\\(V(5,5) = 10\*5 + 20\*5 - \\left( 5\^{2} + 2\*5\^{2} + 10 \\right) = 65\\)]{.math .inline} (9)

Givet priserna [\\(p\_{x} = 10\\)]{.math .inline} och [\\(p\_{y} = 20\\)]{.math .inline} och nuvarande produktionskostnader kan företaget maximera sin vinst genom att producera 5 enheter av produkt A och 5 enheter av produkt B, och gör då en vinst på 65 kr.

Företagets totala kostnader ges av ekvation 3. Tar vi förstaderivatan av totala kostnader med hänsyn till x respektive y får vi företagets *marginalkostnader*:

[\\(MC\_{x} = C\_{x}\' = 2x\\)]{.math .inline} (10)

[\\(MC\_{y} = C\_{y}\' = 4y\\)]{.math .inline}

Vinsten optimeras vid [\\(\\left( x\^{\*},y\^{\*} \\right) = (5,5)\\)]{.math .inline} där marginalkostnaderna är:

[\\(MC\_{x} = C\_{x}\'\\left( x\^{\*} \\right) = 2\*5 = 10\\)]{.math .inline} (11)

[\\(MC\_{y} = C\_{y}\'\\left( y\^{\*} \\right) = 4\*5 = 20\\)]{.math .inline}

Om företaget producerar kvantiteterna 5 av *x* och 5 av *y* är marginalkostnaderna, vid just denna produktionsmängd, lika med 10 med hänsyn till *x* och 20 med hänsyn till *y*. I inledningen beskriv vi priserna för produkterna [\\(p\_{x} = 10\\)]{.math .inline} och [\\(p\_{y} = 20\\)]{.math .inline}. Företaget maximerar alltså sin vinst då marginalkostnaden är lika med priset för produkterna vilket vi kan skriva som:

[\\(P\^{\*} = MC\\)]{.math .inline} (12)

### Video

### Uppgifter


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-4"]=[  {    "id": "k1-4-4-001",    "name": "Uppgift 1",    "exercise": "Ett företag producerar varor \\(x\\) och \\(y\\) med priser \\(p_x = 10\\) och \\(p_y = 20\\). Totala intäkter ges av \\(TR(x,y) = 10x + 20y\\) och totala kostnader av \\(TC(x,y) = x^2 + 2y^2 + 10\\). Vad är vinsten \\(V(x,y)\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(V = 10x + 20y + x^2 + 2y^2 + 10\\)",          "\\(V = 10x + 20y - x^2 - 2y^2 - 10\\)",          "\\(V = x^2 + 2y^2 - 10x - 20y + 10\\)",          "\\(V = 10x + 20y - 10\\)"        ],        "correct": "\\(V = 10x + 20y - x^2 - 2y^2 - 10\\)"      }    },    "error": { "message": "Vinst = Intäkter \\(-\\) Kostnader. Subtrahera \\(TC\\) från \\(TR\\) och kom ihåg att distribuera minustecknet." },    "correct": { "message": "Rätt! \\(V = TR - TC = 10x + 20y - (x^2 + 2y^2 + 10) = 10x + 20y - x^2 - 2y^2 - 10\\)." }  },  {    "id": "k1-4-4-002",    "name": "Uppgift 2",    "exercise": "Företaget har vinsten \\(V(x,y) = 10x + 20y - x^2 - 2y^2 - 10\\). Förstaderivatan av vinsten med hänsyn till \\(x\\) ges av \\(V_x' = 10 - 2x\\). Vid vilket värde på \\(x\\) är \\(V_x' = 0\\), dvs. vad är \\(x^*\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "5" },    "answerformat": "",    "error": { "message": "Sätt \\(10 - 2x = 0\\) och lös för \\(x\\): \\(2x = 10\\), alltså \\(x = ?\\)" },    "correct": { "message": "Rätt! \\(10 - 2x = 0\\) ger \\(x^* = 5\\). Det är den vinstmaximerande produktionsmängden av produkt X." }  },  {    "id": "k1-4-4-003",    "name": "Uppgift 3",    "exercise": "Företaget har vinsten \\(V(x,y) = 10x + 20y - x^2 - 2y^2 - 10\\). Givet \\(x^* = 5\\) och \\(y^* = 5\\), beräkna den maximala vinsten \\(V(5, 5) = 10 \\cdot 5 + 20 \\cdot 5 - (5^2 + 2 \\cdot 5^2 + 10)\\).",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "65" },    "answerformat": "",    "error": { "message": "Beräkna: intäkter \\(= 10 \\cdot 5 + 20 \\cdot 5 = 150\\). Kostnader \\(= 25 + 50 + 10 = 85\\). Vinst \\(= 150 - 85\\)." },    "correct": { "message": "Rätt! Intäkter \\(= 150\\), kostnader \\(= 85\\), vinst \\(= 150 - 85 = 65\\) kr. Genom att producera 5 enheter av varje produkt maximeras vinsten till 65 kr." }  },  {    "id": "k1-4-4-004",    "name": "Uppgift 4",    "exercise": "Vad menas med <em>marginalkostnad</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den totala kostnaden för att producera alla enheter",          "Den fasta kostnaden som inte beror på produktionsmängden",          "Kostnaden för att tillverka en extra enhet",          "Skillnaden mellan intäkter och kostnader"        ],        "correct": "Kostnaden för att tillverka en extra enhet"      }    },    "error": { "message": "Prefixet 'marginal-' syftar på en liten extra förändring. Vad händer med kostnaderna om man tillverkar en enhet till?" },    "correct": { "message": "Rätt! Marginalkostnad är kostnaden för att tillverka en extra enhet, matematiskt förstaderivatan av kostnadsfunktionen: \\(MC_x = C_x' = 2x\\) och \\(MC_y = C_y' = 4y\\)." }  },  {    "id": "k1-4-4-006",    "name": "Uppgift 5",    "exercise": "Med vinstfunktionen \\(V(x,y) = 10x + 20y - x^2 - 2y^2 - 10\\) är marginalkostnaden för \\(x\\) definierad som \\(MC_x = C_x' = 2x\\) och marginalintäkten som \\(MR_x = 10\\). Vid \\(x^* = 5\\) är \\(MC_x = 10\\) och \\(MR_x = 10\\). Vad innebär villkoret \\(MR_x = MC_x\\) ekonomiskt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Kostnaden är noll vid optimal produktion",          "Att producera ytterligare en enhet ger varken mer eller mindre vinst — det är det optimala produktionsläget",          "Totala intäkter och totala kostnader är lika stora",          "Vinsten är noll vid optimum"        ],        "correct": "Att producera ytterligare en enhet ger varken mer eller mindre vinst — det är det optimala produktionsläget"      }    },    "error": { "message": "Vad händer med vinsten om \\(MR > MC\\)? Och om \\(MR < MC\\)?" },    "correct": { "message": "Rätt! Vid \\(MR = MC\\) är marginalvinsten noll — det lönar sig varken att producera mer eller mindre. Om \\(MR > MC\\) ökar vinsten av mer produktion, och om \\(MR < MC\\) minskar den. Vinstmaximum nås alltså exakt när marginalintäkt = marginalkostnad." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-4"></div>


## Nätverksanalys {#k1-4-5}

### Kapitel 4.5: Nätverksanalys {#kapitel-4.5-nätverksanalys .title}

### Pushtext

I denna kurs sista avsnitt går vi igenom hur vi med hjälp av matematik kan beskriva och resonera om nätverk, som till exempel olika företag som handlar med varandra. Samma matematik kan även beskriva sociala nätverk, till exempel mellan vänner.

### Begrepp

- **Nätverk:**

- **Input-output:**

### Teori

I detta avsnitt ska vi använda linjär algebra för att beskriva ett nätverk av företag i olika branscher som handlar med varandra. För detta kan vi använda det som kallas för [*input-output-*analys](https://en.wikipedia.org/wiki/Input%E2%80%93output_model) (IO).

IO-analys utgår från en beskrivning av in- och utflödet (input och output) av varor och tjänster mellan olika branscher. Samma matematiska metoder kan användas för att beskriva och resonera om andra typer av nätverk, som till exempel ett nätverk av vänner.

Vi kan även lägga till annan information till våra matriser och beräkna andra mekanismer. Input-output-analys används bland annat för att beskriva hur en produktionskedja påverkar och påverkas av andra delar av ekonomin.

Till exempel hur förändringar för företagen i en del av ekonomin kan påverka mängden jobb i andra branscher. Eller vilken klimatpåverkan som företagen i en bransch har indirekt genom deras handel med andra företag och branscher.

Dessa metoder har en lång historia men började framför allt spridas inom samhällsvetenskap under 1920-talet, tack vare bland andra nationalekonomen [Wassily Leontief](https://en.wikipedia.org/wiki/Wassily_Leontief).

#### Ett exempel med siffror

Tabell 1 visar ett exempel på en IO-tabell med de två branscherna A och B. Respektive bransch har en egen rad och en egen kolumn. Siffrorna i tabellen visar värdet av den produktion som levereras till respektive bransch samt till slutkonsumtion hos hushåll och offentlig sektor.

I raden för bransch A visar siffrorna värdet av den produktion som A säljer till andra företag i samma bransch (värdet 2) och till företag i bransch B (värdet 1). Den fjärde kolumnen beskriver mängden produktion till slutkonsumtion medan den femte kolumnen summerar kolumn 2--4.

**Tabell 1. Input och output från och till företagen i de två branscherna A och B.**

+-----------+-----------+-----------+----------------+----------+
| Till      | Bransch A | Bransch B | Slutkonsumtion | Summa    |
|           |           |           |                |          |
| Från      |           |           |                |          |
+===========+===========+===========+================+==========+
| Bransch A | 2         | 1         | 3              | 6        |
+-----------+-----------+-----------+----------------+----------+
| Bransch B | 1         | 3         | 3              | 7        |
+-----------+-----------+-----------+----------------+----------+
| Summa     | 3         | 4         | 6              | 13       |
+-----------+-----------+-----------+----------------+----------+

Förklaring: På raden för bransch A ser vi mängden produktion av varor och tjänster från (output) företagen i bransch A till andra företag i bransch A, företag i bransch B samt till hushållen som står för slutkonsumtion. I kolumnen för bransch A ser vi mängden insatsvaror (input) som företagen i bransch A erhåller från andra företag i bransch A och B. I kolumnen längst till höger ser vi radsumma och i raden längst ned ser vi kolumnsumma.

Informationen i tabell 1 kan vi använda för att beräkna hur förändrad produktion i en del av samhällsekonomin påverkar övriga delar. Vi börjar med att placera tabellens värden i matriser. Vi samlar flödena till och från branscherna i en [\\(2 \\times 2\\)]{.math .inline} matris Z (flödesmatrisen), slutkonsumtion i kolumnmatris C och summan i sista kolumnen i kolumnmatris S:

[\\(Z = \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix},\\ \\ C = \\begin{bmatrix} 3 \\\\ 3 \\end{bmatrix},\\ \\ S = \\begin{bmatrix} 6 \\\\ 7 \\end{bmatrix}\\)]{.math .inline} (1)

Flödena till och från branscherna, som beskrivs i Z, kan vi dividera med respektive bransch totala produktion, matris S. Detta kan vi beskriva som:

[\\(a\_{ij} = \\frac{y\_{ij}}{y\_{j}}\\)]{.math .inline} (2)

där [\\(y\_{ij}\\)]{.math .inline} är produktion från bransch *i* som levereras till bransch *j*, medan [\\(y\_{j}\\)]{.math .inline} är den produktion som bransch *j* producerar. För varje värde i matris *Z* kan vi beräkna ett värde [\\(a\_{ij}\\)]{.math .inline} och samla i en 2 × 2 matris A.

#### Räkna med matriser

För att göra denna beräkning med matriser beräknar vi först den multiplikativa inversen av varje element i S, det vill säga placerar värdena som nämnare i varsitt bråk med täljaren 1. Bransch A får [\\(\\frac{1}{6}\\)]{.math .inline} och bransch B [\\(\\frac{1}{7}\\)]{.math .inline}. Dessa värden samlar vi i en kolumnmatris [\\(S\_{m}\\)]{.math .inline} och placerar i en diagonalmatris, vilket vi kan beskriva som [\\(diag(S\_{m})\\)]{.math .inline}:

[\\(diag\\left( S\_{m} \\right) = \\begin{bmatrix} \\frac{1}{6} & 0 \\\\ 0 & \\frac{1}{7} \\end{bmatrix}\\)]{.math .inline} (3)

För att beräkna A matrismultiplicerar vi nu Z med [\\(diag\\left( S\_{m} \\right)\\)]{.math .inline}:

[\\(A = Z\*diag\\left( S\_{m} \\right)\\)]{.math .inline} (4)[\\( \\)]{.math .inline}[\\\[{= \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}\\begin{bmatrix} \\frac{1}{6} & 0 \\\\ 0 & \\frac{1}{7} \\end{bmatrix} }{= \\begin{bmatrix} \\frac{2}{6} & \\frac{1}{7} \\\\ \\frac{1}{6} & \\frac{3}{7} \\end{bmatrix}}\\\]]{.math .display}

För varje bransch *j* kan vi definiera totalproduktion [\\(y\_{j}\\)]{.math .inline} som summan av insatsproduktion till alla branscher plus produktion till slutkonsumtion, vilket i detta fall blir:

[\\(y\_{j} = a\_{j1}y\_{y} + a\_{j2}y\_{2} + c\_{j}\\)]{.math .inline} (5)

där [\\(a\\)]{.math .inline} är vikterna vi definierade i ekvation 2, [\\(y\_{1}\\)]{.math .inline} är totalproduktionen från bransch 1 och [\\(y\_{2}\\)]{.math .inline} är totalproduktion från bransch 2, eller bransch A och B som vi kallade dem.

Vi vet inte värdena för [\\(y\_{j}\\)]{.math .inline} än men vi kan beräkna det med hjälp av matriserna. Vi samlar elementen av totalproduktion i kolumnmatris [\\(Y\\)]{.math .inline} och kan nu beskriva [\\(Y\\)]{.math .inline} som:

[\\(Y = AY + C\\)]{.math .inline} (6)[\\( \\)]{.math .inline}[\\\[{Y - AY = C }{IY - AY = C }{(I - A)Y = C }{Y = (I - A)\^{- 1}C}\\\]]{.math .display}

Identitetsmatris *I* har samma dimensioner som *A*. Kolumnmatris *Y* beskriver hur mycket produktion som krävs från respektive bransch till företagen i samma och andra branscher samt till slutkonsumtion:

[\\(Y = (I - A)\^{- 1}C = \\begin{bmatrix} \\frac{8}{5} & \\frac{2}{5} \\\\ \\frac{7}{15} & \\frac{28}{15} \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 3 \\end{bmatrix} \\approx \\begin{bmatrix} 6 \\\\ 7 \\end{bmatrix}\\)]{.math .inline} (7)

Detta resultat är konsistent med tabell 1, där vi ser att bransch A producerar totalt 6 enheter och bransch B producerar totalt 7 enheter. Detta visar hur mycket bransch A och B måste producera totalt för insatsvaror och slutkonsumtion. Vi kallar den inverterade matrisen för [\\(B = (I - A) - 1\\)]{.math .inline}. Matris *B* har samma dimensioner som matris *A*.

#### Produktions- och insatsmultiplikatorerna

Låt oss beräkna *B* med värdena från tabell 1:

[\\(B = (I - A)\^{- 1}\\)]{.math .inline} (8)[\\( \\)]{.math .inline}[\\\[{= \\left( \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} - \\begin{bmatrix} \\frac{2}{6} & \\frac{1}{7} \\\\ \\frac{1}{6} & \\frac{3}{7} \\end{bmatrix} \\right)\^{- 1} }{= \\begin{bmatrix} \\frac{4}{6} & - \\frac{1}{7} \\\\ - \\frac{1}{6} & \\frac{4}{7} \\end{bmatrix}\^{- 1} }{= \\begin{bmatrix} \\frac{8}{5} & \\frac{2}{5} \\\\ \\frac{7}{15} & \\frac{28}{15} \\end{bmatrix}\\ }\\\]]{.math .display}

Om vi nu i matris [\\(B\\)]{.math .inline} beräknar summan av en kolumn för en bransch [\\(j\\)]{.math .inline} får vi den totala mängden produktion för alla branscher som skulle krävas om slutkonsumtionen för bransch [\\(j\\)]{.math .inline} skulle öka med en enhet. Detta visar hur mycket andra branscher måste leverera i insatsvaror till branschen [\\(j\\)]{.math .inline}. Detta mått kallas i det här sammanhanget för *produktionsmultiplikator*.

Om vi för matris [\\(B\\)]{.math .inline} beräknar summan av en rad för en bransch [\\(j\\)]{.math .inline} i matris [\\(B\\)]{.math .inline} får vi ett mått på hur mycket extra produktion totalt i samhället som möjliggörs om branschen [\\(j\\)]{.math .inline} ökar sin produktion av insatsvaror med en enhet. Detta kallas för *insatsmultiplikator*.

#### Illustrera nätverk i diagram

Figur 1 visar ett exempel på hur detta kan illustreras i ett *nätverksdiagram*. Punkterna beskriver de två branscherna A och B och pilarna beskriver flödena till och från de två branscherna. Värdena vid respektive pil representerar värdena i tabell 1.

Punkternas storlek representerar respektive branschs totala produktion, kolumnen längst till höger i tabellen. I diagrammet har vi inte tagit med någon illustration över den produktion som branscherna skickar till slutkonsumtion.

**Figur 1. Ett nätverk med de två branscherna A och B.**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\4%20-%20Hur%20få%20ut%20det%20mesta%20av%20livet\4-5%20Nätverksanalys/img/k1-4-5-image1.png){style="width:5in;height:3in"}

Förklaring: In- och utflöden från och till de två branscherna A och B. Flödena beskrivs i tabell 1.

### Video

### Uppgifter


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-5"]=[  {    "id": "k1-4-5-001",    "name": "Uppgift 1",    "exercise": "I en input-output-analys producerar bransch B totalt 7 enheter. Bransch A levererar 1 enhet till bransch B som insatsvara. Beräkna insatskoefficienten \\(a_{AB} = \\frac{y_{AB}}{y_B}\\). (Ange som ett bråk, t.ex. 1/6)",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\frac{1}{6}\\)",          "\\(\\frac{2}{6}\\)",          "\\(\\frac{1}{7}\\)",          "\\(\\frac{3}{7}\\)"        ],        "correct": "\\(\\frac{1}{7}\\)"      }    },    "error": { "message": "Täljaren \\(y_{AB}\\) är leveransen från A till B = 1 enhet. Nämnaren \\(y_B\\) är B:s totala produktion = 7. Dividera." },    "correct": { "message": "Rätt! \\(a_{AB} = \\frac{1}{7}\\). Bransch A levererar 1 enhet till bransch B, och bransch B producerar totalt 7 enheter." }  },  {    "id": "k1-4-5-002",    "name": "Uppgift 2",    "exercise": "Vad kallas matrisen \\(A\\) i IO-analysen som beräknas genom att dividera flödena med respektive branschs totala produktion?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Flödesmatrisen",          "Identitetsmatrisen",          "Insatskoefficientmatrisen (teknikkoefficientmatrisen)",          "Invers av produktionsmatrisen"        ],        "correct": "Insatskoefficientmatrisen (teknikkoefficientmatrisen)"      }    },    "error": { "message": "Matrisen A beräknas med \\(a_{ij} = y_{ij}/y_j\\) och anger hur stor andel av en branschs produktion som levereras till varje annan bransch." },    "correct": { "message": "Rätt! Matrisen A kallas insatskoefficientmatrisen (eller teknikkoefficientmatrisen) och visar hur stor andel av varje branschs totala produktion som används som insatsvara i andra branscher." }  },  {    "id": "k1-4-5-003",    "name": "Uppgift 3",    "exercise": "IO-modellen (input-output-modellen) leder fram till ekvationen \\(Y = (I - A)^{-1}C\\). Vad representerar kolumnmatrisen \\(C\\) i denna ekvation?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Varje branschs totala produktion",          "Slutkonsumtionen hos hushåll och offentlig sektor",          "De totala produktionskostnaderna",          "Identitetsmatrisen"        ],        "correct": "Slutkonsumtionen hos hushåll och offentlig sektor"      }    },    "error": { "message": "C är det som levereras utanför branschcirkulationen — inte till andra branscher, utan till hushåll och offentlig sektor. Vad kallas detta i nationalräkenskapstermer?" },    "correct": { "message": "Rätt! \\(C\\) är kolumnmatrisen för slutkonsumtion – den produktion som levereras till hushåll och offentlig sektor (inte till andra branscher). I exemplet är \\(C = [3, 3]^T\\)." }  },  {    "id": "k1-4-5-004",    "name": "Uppgift 4",    "exercise": "Vad mäter en branschs <em>produktionsmultiplikator</em> i en IO-analys?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Hur mycket en bransch producerar totalt under ett år",          "Total produktion i alla branscher som krävs om slutkonsumtionen för denna bransch ökar med en enhet",          "Branschens andel av BNP",          "Hur mycket insatsvaror en bransch köper från sig själv"        ],        "correct": "Total produktion i alla branscher som krävs om slutkonsumtionen för denna bransch ökar med en enhet"      }    },    "error": { "message": "Produktionsmultiplikatorn beräknas från kolumnsumman i matrisen \\(B = (I-A)^{-1}\\). Vad anger den om hela ekonomin?" },    "correct": { "message": "Rätt! Produktionsmultiplikatorn (kolumnsumman i matris \\(B\\)) visar hur mycket total produktion i alla branscher som behövs om slutkonsumtionen av en branschs varor ökar med en enhet." }  },  {    "id": "k1-4-5-005",    "name": "Uppgift 5",    "exercise": "IO-modellens balansvillkor säger att varje branschs produktion \\(Y_i\\) ska täcka mellanledsefterfrågan plus slutkonsumtionen. I matrisform skrivs detta \\(Y = AY + C\\). Vilken algebraisk omskrivning löser ut \\(Y\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(Y = A^{-1}C\\)",          "\\(Y = (I - A)C\\)",          "\\(Y = (I - A)^{-1}C\\)",          "\\(Y = (A - I)^{-1}C\\)"        ],        "correct": "\\(Y = (I - A)^{-1}C\\)"      }    },    "error": { "message": "Utgå från \\(Y = AY + C\\). Flytta \\(AY\\) till vänster: \\(Y - AY = C\\). Faktorisera ut \\(Y\\): \\((I - A)Y = C\\). Hur löser man ut \\(Y\\) nu?" },    "correct": { "message": "Rätt! \\(Y - AY = C\\) ger \\((I - A)Y = C\\). Multiplicerar vi båda leden med \\((I - A)^{-1}\\) från vänster får vi \\(Y = (I - A)^{-1}C\\). Detta är standardhärledningen av IO-modellens lösning — och förklarar varför matrisen \\((I - A)\\) måste vara inverterbar." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-5"></div>

