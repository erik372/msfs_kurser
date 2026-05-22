# Variation och samvariation

## Frekvens och fördelning {#k2-2-1}

### Begrepp

- **Frekvensfördelning:** Antal observationer (frekvens) som förekommer av varje unikt värde i ett material.

- **Stapeldiagram:** Diagram där staplar representerar värden, till exempel mängder.

- **Histogram:** En typ av stapeldiagram som ofta används för att redovisa spridning och fördelning. Varje stapel i ett histogram representerar ofta ett intervall av värden.

- **Populationens medelvärde:** Medelvärdet för populationen av variabeln *X* kan skrivas [\\(\\mu\_{X}\\)]{.math .inline}. Detta värde kan vi endast vara säkra på att vi känner till om vi har tillgång till fullständigt korrekta data över hela populationen. I samhällsvetenskap arbetar vi i regel med urvalsdata.

- **Uppskattat medelvärde:** Det medelvärde vi kan beräkna med urvalsdata. Detta ger oss en uppskattning av populationens medelvärde. För en variabel *X* kan detta skrivas [\\(\\overline{X} = \\sum\_{i}\^{}{x\_{i}/n}\\)]{.math .inline}.

### Teori

I kapitel 1 i denna kurs introducerade vi kontrafaktisk analys som central metod för analytiskt arbete och vetenskap. Vi diskuterade begreppen population, urval och superpopulation. Och i [avsnitt 1.2](https://www.dropbox.com/scl/fi/9jy8vypqisanjkto7wr3v/1-2-Experiment-och-observationsstudie.docx?rlkey=4xhcwh8s17u66tholxgf5qdaa&dl=0) repeterade vi betydelsen av samvariation och hur detta är vad vi egentligen studerar när vi försöker fastställa om ett fenomen orsakar ett annat fenomen.

#### Frekvensfördelning

För att studera samvariation mellan variabler måste observationer ha olika värden, det måste förekomma variation inom variablerna. Säg att vi som exempel har tio observationer för variablerna x och y och alla observationerna har värdena [\\((x,\\ y) = (5,\\ 23)\\)]{.math .inline}. Det finns ingen variation inom vare sig x eller y. Variablerna kan därför inte heller samvariera.

Ett sätt att studera spridning av värden är att kartlägga *frekvensfördelningen* av en variabel. Säg att vi har följande fyra värden: 4, 5, 5 och 6. Siffran 5 förekommer två gånger. Se även Mattebokens lektioner om [lägesmått](https://www.matteboken.se/lektioner/matte-2/statistik/lagesmatt#!/) och [kvartiler](https://www.matteboken.se/lektioner/matte-2/statistik/kvartiler-och-ladagram#!/).

Ett sätt att visa spridningen i en samling värden är *stapeldiagram*, ett diagram där frekvensen av respektive värde redovisas med staplar. Figur 1 visar frekvensfördelningen för de fyra värdena.

**Figur 1: Stapeldiagram\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\2%20-%20Variation%20och%20samvariation\2-1%20-%20Frekvens%20och%20fördelning/img/k2-2-1-image1.png){style="width:3in;height:3in"}**\**
Förklaring: På den horisontella axeln ser vi respektive värde i datamängden: 4, 5 och 6. Staplarna visar antal förekomster av respektive värde: en observation har värdet 4, två observationer har värdet 5 och en observation har värdet 6.

#### Förväntad livslängd i Sveriges 290 kommuner

Ett histogram är en form av stapeldiagram där varje stapel representerar ett intervall av värden. Histogram används ofta för att ge en överblick över spridningen av värdena i en variabel. Se även Mattebokens introduktion till [histogram](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/tolka-diagram#!/).

Figur 2 visar ett histogram som illustrerar fördelningen av genomsnittlig livslängd för kvinnor respektive män i Sveriges kommuner år 2022, med ett genomsnittsvärde per kommun och kön. Det är 290 observationer för män samt 290 observationer för kvinnor. På den horisontella axeln visas ålder och på den vertikala axeln visas antal observationer.

Vi kan se i diagrammet att kvinnor i genomsnitt lever längre än män, eftersom staplarna för kvinnor befinner sig mer till höger i diagrammet. Stapeln längst till höger i diagrammet visar att det finns en kommun där den genomsnittliga livslängden för kvinnor detta år var cirka 87 år.

Stapeln längst till vänster i diagrammet visar att det finns två kommuner där den genomsnittliga livslängden för män är cirka 77 år.

De streckade vertikala linjerna visar genomsnitt för alla observationerna i respektive grupp. Dessa streckade linjer sammanfaller även med den högsta stapeln i respektive grupp. Detta illustrerar att det vanligaste värdet bland kommunerna är ett värde nära respektive medelvärde.

Diagrammet illustrerar att kön i någon utsträckning samvarierar med livslängd, eftersom kvinnor i genomsnitt lever längre. Diagrammet säger ingenting om varför det är så.

**Figur 2: Genomsnittlig livslängd i Sveriges kommuner**![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\2%20-%20Variation%20och%20samvariation\2-1%20-%20Frekvens%20och%20fördelning/img/k2-2-1-image2.png){style="width:6in;height:4in"}

Förklaring: Data från [Kolada](https://www.kolada.se/). De gröna staplarna visar fördelningen av medellivslängd för män i respektive kommun i Sverige år 2022. De rosa staplarna visar för kvinnor. De streckade vertikala linjerna markerar medelvärden för respektive grupp.

#### Uppskattat medelvärde

Medelvärde är en form av lägesmått. Se gärna Mattebokens introduktion till [lägesmått](https://www.matteboken.se/lektioner/matte-2/statistik/lagesmatt#!/), som medelvärde, median och typvärde. Nu ska vi börja beskriva hur vi kan tänka på medelvärde och andra mått med hänsyn till population och urval.

I tidigare avsnitt gick vi igenom hur populationen representerar den mängd vi vill studera. Urval är en mindre delmängd av populationen som vi har data på. Värdena för populationen är ofta okända, varför vi använder urvalsdata för att uppskatta dessa. Ordet "uppskattar" syftar på att vi använder metoder för att beräkna resultat, men att dessa resultat är mer eller mindre osäkra.

Om vi har tillgång till populationsdata för en variabel *X* är också så klart medelvärdet känt. För att markera detta brukar populationens medelvärde skrivas som [\\(\\mu\_{X}\\)]{.math .inline} (där [\\(\\mu\\)]{.math .inline} är den grekiska bokstaven mu). Vi markerar [\\(\\mu\\)]{.math .inline} med *X* eftersom det är medelvärdet för just denna variabel.

Men ofta arbetar vi med urvalsdata och det medelvärde vi då beräknar är, per definition, en uppskattning av populationens medelvärde. Vårt uppskattade medelvärde betecknas då  [\\(\\overline{X}\\)]{.math .inline}:

[\\(\\overline{X} = \\frac{\\sum\_{i}\^{}x\_{i}}{n}\\)]{.math .inline} (1)

där täljaren [\\(\\sum\_{i}\^{}x\_{i}\\)]{.math .inline} innebär summan av alla observerade värden (i vår urvalsdata) för variabeln *X*. Bokstaven *i* betyder observation nummer *i*. Bokstaven *n* syftar på antal observationer i vårt urval. Uttrycket i ekvation 1 kallas för medelvärdets *estimator*. En funktion för att estimera (uppskatta) medelvärdet.

Ett sätt att studera spridningen i en variabel är att beräkna avstånd från medelvärdet. I populationen skrivs differensen mellan observation [\\(x\_{i}\\)]{.math .inline} och medelvärdet [\\(\\mu\_{X}\\)]{.math .inline} som [\\(x\_{i} - \\mu\_{X}\\)]{.math .inline}.

Med urvalsdata tar vi [\\(x\_{i} - \\overline{X}\\)]{.math .inline}. Summan av alla [differenser](https://www.matteboken.se/lektioner/skolar-7/tal-och-de-fyra-raknesatten/de-fyra-raknesatten) från medelvärdet [\\(\\sum\_{i}\^{}\\left( x\_{i} - \\overline{X} \\right)\\)]{.math .inline} är alltid noll. Ett sätt att visa detta är följande:

[\\(\\sum\_{i}\^{}\\left( x\_{i} - \\overline{X} \\right)\\ = \\sum\_{i}\^{}x\_{i} - \\sum\_{i}\^{}\\overline{X}\\)]{.math .inline} (2)

> [\\(= \\sum\_{i}\^{}{x\_{i} - n\\overline{X}}\\)]{.math .inline}
>
> [\\(= \\sum\_{i}\^{}{x\_{i} - n\\frac{1}{n}\\sum\_{i}\^{}x\_{i}}\\)]{.math .inline}
>
> [\\(= \\sum\_{i}\^{}x\_{i} - \\sum\_{i}\^{}x\_{i}\\)]{.math .inline}
>
> [\\(= 0\\)]{.math .inline}

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-1"]=[  {    "id": "k2-2-1-001",    "name": "Uppgift 1",    "exercise": "Vad menas med en <em>frekvensfördelning</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Medelvärdet för alla observationer i ett material",          "Antal observationer som förekommer av varje unikt värde i ett material",          "Differensen mellan det högsta och lägsta värdet i ett material",          "Summan av alla avvikelser från medelvärdet"        ],        "correct": "Antal observationer som förekommer av varje unikt värde i ett material"      }    },    "error": { "message": "Frekvens syftar på hur <em>ofta</em> ett värde förekommer, inte på ett genomsnitt eller en differens." },    "correct": { "message": "Rätt! En frekvensfördelning visar hur många observationer (frekvens) som förekommer av varje unikt värde i ett material." }  },  {    "id": "k2-2-1-002",    "name": "Uppgift 2",    "exercise": "Vad skiljer ett <em>histogram</em> från ett vanligt stapeldiagram?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Ett histogram använder cirklar i stället för staplar",          "I ett histogram representerar varje stapel ofta ett intervall av värden",          "Ett histogram visar bara medelvärdet",          "Ett histogram kan bara användas för kategoriska variabler"        ],        "correct": "I ett histogram representerar varje stapel ofta ett intervall av värden"      }    },    "error": { "message": "Tänk på hur histogrammet används för att ge en överblick – varje stapel samlar ihop en grupp av värden." },    "correct": { "message": "Rätt! I ett histogram representerar varje stapel ofta ett intervall av värden, till skillnad från ett vanligt stapeldiagram där varje stapel representerar ett enskilt värde." }  },  {    "id": "k2-2-1-003",    "name": "Uppgift 3",    "exercise": "Inom statistik finns ett vanligt sätt att beteckna populationens medelvärde för variabeln \\(X\\). Vilket av följande alternativ är vanligast?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\overline{X}\\)",          "\\(s_X\\)",          "\\(\\mu_X\\)",          "\\(\\sigma_X\\)"        ],        "correct": "\\(\\mu_X\\)"      }    },    "error": { "message": "Populationens medelvärde betecknas med den grekiska bokstaven mu (\\(\\mu\\)), inte med ett streck ovanpå." },    "correct": { "message": "Rätt! Populationens medelvärde för variabeln \\(X\\) skrivs ofta \\(\\mu_X\\), där \\(\\mu\\) är den grekiska bokstaven mu. Det uppskattade medelvärdet från urvalsdata skrivs däremot \\(\\overline{X}\\)." }  },  {    "id": "k2-2-1-004",    "name": "Uppgift 4",    "exercise": "Du har fyra observationer: 2, 4, 4 och 6. Beräkna det uppskattade medelvärdet \\(\\overline{X}\\) enligt formeln \\[\\overline{X} = \\frac{\\sum_{i}^{} x_i}{n}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "4" },    "answerformat": "",    "error": { "message": "Summera alla värden och dividera med antalet observationer. Summan är 2 + 4 + 4 + 6 = 16, och n = 4." },    "correct": { "message": "Rätt! Summan av alla värden är 2 + 4 + 4 + 6 = 16, och vi har n = 4 observationer. Medelvärdet blir 16/4 = 4." }  },  {    "id": "k2-2-1-005",    "name": "Uppgift 5",    "exercise": "Varför är summan av alla differenser från medelvärdet, \\(\\sum_{i}^{}(x_i - \\overline{X})\\), alltid lika med noll?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Eftersom medelvärdet alltid är noll",          "Eftersom positiva och negativa avvikelser tar ut varandra när de summeras",          "Eftersom alla observationer alltid är lika stora",          "Eftersom vi alltid dividerar med n"        ],        "correct": "Eftersom positiva och negativa avvikelser tar ut varandra när de summeras"      }    },    "error": { "message": "Medelvärdet är det \"balanspunkten\" i datamaterialet – avvikelserna uppåt och nedåt väger ut varandra exakt." },    "correct": { "message": "Rätt! Medelvärdet är definierat som den punkt där positiva och negativa avvikelser tar ut varandra. Matematiskt kan man visa att \\(\\sum(x_i - \\overline{X}) = \\sum x_i - n\\overline{X} = \\sum x_i - \\sum x_i = 0\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-1"></div>

## Avvikelse, varians och standardavvikelse {#k2-2-2}

### Begrepp

- **Absolut avvikelse:** För variabel [\\(x\\)]{.math .inline} population: [\\(\\frac{1}{n}\\sum\\left\| x\_{i} - \\overline{x} \\right\|\\)]{.math .inline}.

- **Varians:** För en variabel [\\(x\\)]{.math .inline} har vi: [\\(var(x) = \\left( \\frac{1}{n} \\right)\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline}.

- **Standardavvikelse:** För variabel [\\(x\\)]{.math .inline} har vi: [\\(s\_{x} = + \\sqrt{var(x)} = \\left( \\frac{\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}}{n} \\right)\^{\\frac{1}{2}}\\)]{.math .inline}

- **Bessels korrigering:** För att undvika att vi underskattar populationsvärden kan vi dividera estimatorerna med [\\(n - 1\\)]{.math .inline} i stället för [\\(n\\)]{.math .inline}.

### Teori

I föregående avsnitt beskrev vi hur vi med urvalsdata kan uppskatta populationens medelvärde. Vi såg även exempel på hur vi kan beskriva spridning i en samling värden. I detta avsnitt ska vi nu introducera andra vanliga statistiska metoder för att studera spridning.

#### Absolut avvikelse

Ett sätt att mäta avvikelser från medelvärdet är att uppskatta *genomsnittlig absolut avvikelse* (engelska *mean absolute deviation*):

Genomsnittlig absolut avvikelse [\\(= \\frac{1}{n}\\sum\\left\| x\_{i} - \\overline{x} \\right\|\\)]{.math .inline} (1)

Vi kan även byta ut medelvärdet [\\(\\overline{x}\\)]{.math .inline} mot annat genomsnittsmått som median eller typvärde.

#### Varians

Ett annat sätt att summera avvikelser från medelvärdet till ett positivt värde är att kvadrera avvikelserna: [\\(\\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline}. Dividerar vi summan av de kvadrerade differenserna med antal observationer [\\(n\\)]{.math .inline} får vi *variansen* för variabel *x*:

> Varians:  [\\(var(x) = \\left( \\frac{1}{n} \\right)\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline} (2)

Parentesen [\\(\\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline} ska beräknas för varje observation och summeras:

[\\(\\sum\_{i}\^{n}{\\left( x\_{i} - \\overline{x} \\right)\^{2} =}\\left( x\_{i} - \\overline{x} \\right)\^{2} + \\left( x\_{i} - \\overline{x} \\right)\^{2} + \\ldots + \\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline} (3)

På samma sätt som att medelvärdet [\\(\\overline{x}\\)]{.math .inline} är en uppskattning av populationens [\\(\\mu\_{x}\\)]{.math .inline} är [\\(var(x)\\)]{.math .inline} en uppskattning av variansen i populationen. Variansen i populationen för variabeln [\\(x\\)]{.math .inline} betecknas ofta med den grekiska bokstaven lilla sigma i kvadrat, [\\(\\sigma\_{x}\^{2}\\)]{.math .inline}.

#### Standardavvikelse

*Standardavvikelse* för en samling observationer är positiva kvadratroten av variansen. För population betecknas ofta standardavvikelse [\\(\\sigma\_{x}\\)]{.math .inline}.

Uppskattad standardavvikelse för variabel [\\(x\\)]{.math .inline} kan skrivas [\\({\\widehat{\\sigma}}\_{x}\\)]{.math .inline}, [\\(sd\_{x}\\)]{.math .inline} eller [\\(s\_{x}\\)]{.math .inline}:

Standardavvikelse:  [\\(s\_{x} = + \\sqrt{var(x)} = \\left( \\frac{\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}}{n} \\right)\^{\\frac{1}{2}}\\)]{.math .inline} (4)

#### Bessels korrigering

När vi estimerar medelvärdet med urvalsdata ([\\(\\overline{x}\\)]{.math .inline}) avviker ofta detta från populationens medelvärde ([\\(\\mu\_{x}\\)]{.math .inline}). Denna avvikelse tenderar att leda till att vår uppskattning av populationens varians blir för liten.

För att justera för detta när vi estimerar varians (ekvation 2) dividera med [\\(n - 1\\)]{.math .inline} i stället för [\\(n\\)]{.math .inline}. Detta kallas för *korrigerad varians* eller *urvalsvarians* (engelska *sample variance*):

Varians urval: [\\(var(x) = \\left( \\frac{1}{n - 1} \\right)\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline} (5)

Division med [\\(n - 1\\)]{.math .inline} kallas för *Bessels korrigering* och medför ofta att den uppskattade variansen hamnar närmare populationens varians.

Många datorprogram har färdiga kommandon för att estimera (beräkna) varians och använder då Bessels korrigering, som i ekvation 5. Även för standardavvikelse kan vi använda Bessels korrigering:

Standardavvikelse urval: [\\(s\_{x} = \\left( \\frac{\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}}{n - 1} \\right)\^{\\frac{1}{2}}\\)]{.math .inline} (6)

#### Varians och standardavvikelse med konstant

Om vi har en konstant [\\(a\\)]{.math .inline}, ett valfritt värde, är variansen för denna [\\(var(a) = 0\\)]{.math .inline}. Detta eftersom ett enskilt värde inte har någon spridning. Om [\\(a\\)]{.math .inline} är multiplicerad med en variabel [\\(x\\)]{.math .inline} är variansen för [\\(ax\\)]{.math .inline} lika med [\\(a\^{2}var(x)\\)]{.math .inline}. Detta kan vi se genom att ta:

[\\(var(ax) = \\left( \\frac{1}{n} \\right)\\sum\_{i}\^{}\\left( {ax}\_{i} - a\\overline{x} \\right)\^{2}\\)]{.math .inline} (7)

[\\(= \\left( \\frac{1}{n} \\right)\\sum\_{i}\^{}\\left( {a\^{2}x}\_{i}\^{2} - 2a\^{2}\\overline{x} + a\^{2}{\\overline{x}}\^{2} \\right)\\)]{.math .inline}

Eftersom [\\(a\\)]{.math .inline} inte påverkas av summeringen kan vi flytta ut alla [\\(a\^{2}\\)]{.math .inline}:

[\\(var(ax) = a\^{2}\\left( \\frac{1}{n} \\right)\\sum\\left( x\_{i}\^{2} - 2\\overline{x} + {\\overline{x}}\^{2} \\right)\\)]{.math .inline} (8)

[\\(= a\^{2}\\left( \\frac{1}{n} \\right)\\sum\\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline}

[\\(= a\^{2}var(x)\\)]{.math .inline}

För standardavvikelse får vi:

[\\(s\_{x}(ax) = \\left( \\frac{1}{n}\\sum\_{i}\^{n}\\left( {ax}\_{i} - a\\overline{x} \\right)\^{2} \\right)\^{\\frac{1}{2}}\\)]{.math .inline} (9)

[\\(= \\left( \\frac{1}{n}\\sum\_{i}\^{}\\left( {a\^{2}x}\_{i}\^{2} - 2a\^{2}\\overline{x} + a\^{2}{\\overline{x}}\^{2} \\right) \\right)\^{\\frac{1}{2}}\\)]{.math .inline}

[\\(= \\left( a\^{2} \\right)\^{\\frac{1}{2}}\\left( \\frac{1}{n}\\sum\\left( x\_{i} - \\overline{x} \\right)\^{2} \\right)\^{\\frac{1}{2}}\\)]{.math .inline}

[\\(= \|a\|s\_{x}\\)]{.math .inline}

där [\\(\|a\|\\)]{.math .inline} är absolutbeloppet av konstanten [\\(a\\)]{.math .inline}.

#### Ett exempel

Nu ska vi beräkna (skatta) variansen med fyra observationer för två variabler: [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline}. Variabel [\\(x\\)]{.math .inline} har värdena 3, 4, 6 och 7. Variabeln [\\(y\\)]{.math .inline} har värdena 3, 2, 5 och 4. Tabell 1 sammanfattar beräkningarna vi behöver.

**Tabell 1: Några beräkningar för variablerna** [\\(\\mathbf{x}\\)]{.math .inline} **och** [\\(\\mathbf{y}\\)]{.math .inline}

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation   [\\\[x\_{i}\\\]]{.math .display}   [\\\[y\_{i}\\\]]{.math .display}   [\\\[x\_{i} - \\overline{x}\\\]]{.math .display}   [\\\[y\_{i} - \\overline{y}\\\]]{.math .display}   [\\\[\\left( x\_{i} - \\overline{x} \\right)\^{2}\\\]]{.math .display}   [\\\[\\left( y\_{i} - \\overline{y} \\right)\^{2}\\\]]{.math .display}
  ------------- ---------------------------------- ---------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------------------------------ ------------------------------------------------------------------------
  1             3                                  3                                  -2                                                 -0,5                                               4                                                                        0,25

  2             4                                  2                                  -1                                                 -1,5                                               1                                                                        2,25

  3             6                                  5                                  1                                                  1,5                                                1                                                                        2,25

  4             7                                  4                                  2                                                  0,5                                                4                                                                        0,25

  Medelvärde    5                                  3,5                                                                                                                                                                                                               

  Summa         20                                 14                                                                                                                                       10                                                                       5
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Vi använder ekvation 5 för att skatta varians:

[\\(var(x) = \\frac{\\sum\_{i}\^{}\\left( x\_{i} - \\overline{x} \\right)\^{2}}{n - 1} = \\frac{10}{3}\\ \\)]{.math .inline} (10)

[\\(var(y) = \\frac{\\sum\_{i}\^{}\\left( y\_{i} - \\overline{y} \\right)\^{2}}{n - 1} = \\frac{5}{3}\\)]{.math .inline}

Variansen för variabel [\\(x\\)]{.math .inline} är större än variansen i variabel [\\(y\\)]{.math .inline}. Detta indikerar att värdena i [\\(x\\)]{.math .inline} är mer utspridda från medelvärdet jämfört med spridningen i variabel [\\(y\\)]{.math .inline}.

För att beräkna standardavvikelse för variablerna [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline} tar vi positiva kvadratroten av variansen:

> [\\(s\_{x} = \\sqrt{\\frac{\\sum\_{i}\^{n}{\\left( x\_{i} - \\overline{x} \\right)\^{2}\\ }}{n - 1}} = + \\sqrt{\\frac{10}{3}} \\approx 1,826\\)]{.math .inline} (11)

[\\(s\_{y} = + \\sqrt{\\frac{5}{3}} \\approx 1,291\\)]{.math .inline}

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-2"]=[  {    "id": "k2-2-2-001",    "name": "Uppgift 1",    "exercise": "Vad kallas korrigeringen som innebär att man dividerar med \\(n - 1\\) i stället för \\(n\\) när man beräknar urvalsvarians?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Standardiseringskorrigeringen",          "Bessels korrigering",          "Gauss-korrigeringen",          "Normaliseringskorrigeringen"        ],        "correct": "Bessels korrigering"      }    },    "error": { "message": "Korrigeringen är uppkallad efter en matematiker och syftar till att undvika att man underskattar populationens varians." },    "correct": { "message": "Rätt! Bessels korrigering innebär att man dividerar med \\(n - 1\\) i stället för \\(n\\), vilket ger en bättre uppskattning av populationens varians när man arbetar med urvalsdata." }  },  {    "id": "k2-2-2-002",    "name": "Uppgift 2",    "exercise": "Om en konstant \\(a\\) multipliceras med en variabel \\(x\\), vad blir variansen för \\(ax\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(a \\cdot \\text{var}(x)\\)",          "\\(a^2 \\cdot \\text{var}(x)\\)",          "\\(\\sqrt{a} \\cdot \\text{var}(x)\\)",          "\\(\\text{var}(x)\\) (konstanten påverkar inte variansen)"        ],        "correct": "\\(a^2 \\cdot \\text{var}(x)\\)"      }    },    "error": { "message": "Kom ihåg att variansen beräknas med kvadrerade avvikelser, vilket innebär att konstanten kvadreras." },    "correct": { "message": "Rätt! Eftersom variansen bygger på kvadrerade avvikelser gäller att \\(\\text{var}(ax) = a^2 \\cdot \\text{var}(x)\\). Standardavvikelsen för \\(ax\\) blir i sin tur \\(|a| \\cdot s_x\\)." }  },  {    "id": "k2-2-2-003",    "name": "Uppgift 3",    "exercise": "Variabeln \\(x\\) har fyra värden: 3, 4, 6 och 7, med medelvärde \\(\\overline{x} = 5\\). Beräkna summan av de kvadrerade avvikelserna: \\[\\sum_{i=1}^{4}(x_i - \\overline{x})^2\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "10" },    "answerformat": "",    "error": { "message": "Beräkna \\((3-5)^2 + (4-5)^2 + (6-5)^2 + (7-5)^2\\) och summera." },    "correct": { "message": "Rätt! \\((3-5)^2 + (4-5)^2 + (6-5)^2 + (7-5)^2 = 4 + 1 + 1 + 4 = 10\\)." }  },  {    "id": "k2-2-2-004",    "name": "Uppgift 4",    "exercise": "Variabeln \\(y\\) har fyra värden: 3, 2, 5 och 4, med medelvärde \\(\\overline{y} = 3{,}5\\). Använd Bessels korrigering och beräkna urvalsvariansen \\[\\text{var}(y) = \\frac{\\sum_{i=1}^{4}(y_i - \\overline{y})^2}{n-1}\\] Summan av kvadrerade avvikelser för \\(y\\) är 5. Ange svaret som ett decimaltal med tre decimaler (avrunda om nödvändigt).",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.667" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 1.667",    "error": { "message": "Dividera summan av kvadrerade avvikelser (= 5) med \\(n - 1 = 3\\). Resultatet är 5/3 ≈ 1,667." },    "correct": { "message": "Rätt! Med Bessels korrigering är urvalsvariansen \\(\\text{var}(y) = 5 / (4-1) = 5/3 \\approx 1{,}667\\)." }  },  {    "id": "k2-2-2-005",    "name": "Uppgift 5",    "exercise": "Variansen för variabel \\(x\\) är \\(\\text{var}(x) = 10/3\\). Beräkna standardavvikelsen \\(s_x = \\sqrt{\\text{var}(x)}\\) och runda av till tre decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.826" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 1.826",    "error": { "message": "Ta positiva kvadratroten av \\(10/3\\). Kontrollräkning: \\(\\sqrt{3{,}333...} \\approx 1{,}826\\)." },    "correct": { "message": "Rätt! Standardavvikelsen är \\(s_x = \\sqrt{10/3} \\approx 1{,}826\\). Standardavvikelsen är alltid den positiva kvadratroten av variansen och har samma enhet som den ursprungliga variabeln." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-2"></div>

## Samvariation 1 {#k2-2-3}

### Begrepp

- **Kovarians:** Ett mått på linjär samvariation mellan två variabler.

- **Korrelationskoefficienten:** Även kallat Pearsons r. En standardiserad form av kovarians. Kan endast anta värden mellan 1 och -1, där värde 1 är stark positiv korrelation och -1 är starkt negativ korrelation.

### Teori

I kapitel 1 till denna kurs introducerade vi betydelsen av kontrafaktisk analys och hur vi genom att studera samvariation kan diskutera orsak och verkan. I tidigare avsnitt har vi gått igenom olika exempel på hur vi kan beskriva och jämföra spridning och variation i ett material. I detta avsnitt ska vi introducera två mått på linjär samvariation: *kovarians och korrelationskoefficient*.

#### Kovarians

Kovarians (engelska *covariance*) är ett mått på linjär samvariation mellan två variabler, till exempel [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline}. För populationsdata har vi:

[\\(cov(x,y) = \\frac{1}{n}\\sum\_{i}\^{n}{(x\_{i} - \\overline{x})(y\_{i} - \\overline{y})}\\)]{.math .inline} (1)

Vårt mål är att uppskatta samvariationen i en population och eventuellt en superpopulation. Från vår population kan vi hämta ett urval av observationer som vi kan använda för att uppskatta (estimera) samvariationen.

I tidigare exempel har vi arbetat med population för en variabel. Eftersom vi nu är intresserade av samvariation består vår population av två variabler. Kovariansen mellan [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline} i en population betecknas [\\(\\sigma\_{xy}\\)]{.math .inline} (jämför beteckningen för populationens varians [\\(\\sigma\_{x}\\)]{.math .inline}).

Positiv kovarians innebär positiv samvariation: högre värden av [\\(x\\)]{.math .inline} är associerade med högre värden av [\\(y\\)]{.math .inline}. Negativ kovarians innebär negativ samvariation, att högre värden av [\\(x\\)]{.math .inline} är associerade med lägre värden av [\\(y\\)]{.math .inline} och vice versa. Om kovariansen är lika med noll så finns ingen linjär samvariation mellan variablerna.

Det spelar ingen roll i vilken ordning vi skriver variablerna i parentesen: [\\(cov(x,y) = cov(y,x)\\)]{.math .inline}. Om vi tar kovariansen för [\\(x\\)]{.math .inline} och samma variabel [\\(x\\)]{.math .inline}, får vi variansen av [\\(x\\)]{.math .inline}:

[\\(\\text{cov}(x,x) = \\left( \\frac{1}{n} \\right)\\sum\_{i}\^{n}{(x\_{i} - \\overline{x})(x\_{i} - \\overline{x})} = \\left( \\frac{1}{n} \\right)\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2} = \\text{var}(x)\\)]{.math .inline} (2)

I föregående avsnitt använde vi Bessels korrigering [\\(\\left( \\frac{1}{n - 1} \\right)\\)]{.math .inline} för att undvika att underskatta spridningen i populationen alltför mycket. Även här kan vi av samma skäl använda korrigeringen. Detta ger oss det som kallas för *urvalskovarians* (engelska *sample covariance*):

**Urvalskovarians:** [\\(cov(x,y) = \\left( \\frac{1}{n - 1} \\right)\\sum\_{i}\^{}{(x\_{i} - \\overline{x})(y\_{i} - \\overline{y})}\\)]{.math .inline} (3)

#### Räkneexempel

Figur 1 beskriver våra fyra observationer i en tabell till vänster och ett diagram till höger. I tabellen har vi en observation per rad och en variabel per kolumn. I diagrammet är varje observation representerad av en punkt. Punkten längst till vänster är observation 1: [\\((x,y) = (3,3)\\)]{.math .inline}. Punkten längst till höger är observation 4: [\\((x,y) = (4,7)\\)]{.math .inline}.

Rad 1 i tabellen består av första värdet för [\\(x\\)]{.math .inline} respektive [\\(y\\)]{.math .inline} och representerar värden som på något sätt hänger ihop. Om vi arbetar med observerade data, insamlad information, representerar varje observation en observationsenhet, till exempel uppgifter om en person eller kanske ett land. Våra fyra observationer skulle alltså kunna representera fyra personer, fyra länder eller något annat.

**Figur 1. Fyra observationer för att uppskatta kovarians**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\2%20-%20Variation%20och%20samvariation\2-3%20-%20Samvariation%201/img/k2-2-3-image1.png){style="width:2.47024in;height:2.47024in"}

  -------------------------------------------------------------------------------------
  Observation i    [\\\[x\_{i}\\\]]{.math .display}   [\\\[y\_{i}\\\]]{.math .display}
  --------------- ---------------------------------- ----------------------------------
  1                               3                                  3

  2                               4                                  2

  3                               6                                  5

  4                               7                                  4
  -------------------------------------------------------------------------------------

I tabell 1 har vi beräknat de delar vi behöver för att skatta kovariansen mellan [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline} (ekvation 3):

[\\(cov(x,y) = \\left( \\frac{1}{n - 1} \\right)\\sum\_{i}\^{}{\\left( x\_{i} - \\overline{x} \\right)\\left( y\_{i} - \\overline{y} \\right)} = \\left( \\frac{1}{3} \\right) \\times 5 = \\frac{5}{3}\\)]{.math .inline} (4)

Vi finner att [\\(cov(x,y) = \\frac{5}{3}\\)]{.math .inline}. Detta värde är över 0 och innebär en positiv samvariation. Kovarians är användbart för att få en uppskattning om samvariationen mellan två variabler är positiv eller negativ, men det är svårt att säga så mycket mer än så.

Det finns inte några begränsningar för vilka värden som kovarians kan anta. Kovariansens värde beror på vilken enhet variablernas värden har. Till exempel kommer vi att få olika resultat beroende på om vi använder en variabel som beskriver inkomst i kronor eller i tusentals kronor.

**Tabell 1. Beräkningar för kovariansen mellan** [\\(\\mathbf{x}\\)]{.math .inline} **och** [\\(\\mathbf{y}\\)]{.math .inline}

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation    [\\\[x\_{i}\\\]]{.math .display}   [\\\[y\_{i}\\\]]{.math .display}   [\\\[x\_{i} - \\overline{x}\\\]]{.math .display}   [\\\[y\_{i} - \\overline{y}\\\]]{.math .display}   [\\\[(x\_{i} - \\overline{x})(y\_{i} - \\overline{y})\\\]]{.math .display}
  ------------- ---------------------------------- ---------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------------------------------------
  1                             3                                  3                                          -2                                                -0,5                                                             1

  2                             4                                  2                                          -1                                                -1,5                                                            1,5

  3                             6                                  5                                          1                                                 1,5                                                             1,5

  4                             7                                  4                                          2                                                 0,5                                                              1

  Medelvärde                    5                                 3,5                                                                                                                       

  Summa                                                                                                                                                                                                                          5
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Korrelationskoefficienten

Ett annat mått på linjär samvariation är *Pearsons r*, även kallat *Pearsons korrelationskoefficient* eller *korrelationskoefficienten* (jämför [Matte 1](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/korrelation-och-kausalitet#!/)). Korrelationskoefficienten för variablerna [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline} betecknas för population [\\(\\rho\_{xy}\\)]{.math .inline} (grekiska rho):

Korrelationskoefficienten: [\\(\\rho\_{xy} = \\frac{\\sigma\_{xy}}{\\sigma\_{x}\\sigma\_{y}}\\)]{.math .inline} (5)

där [\\(\\sigma\_{xy}\\)]{.math .inline} är kovariansen mellan [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline} i populationen, och [\\(\\sigma\_{x}\\)]{.math .inline} och [\\(\\sigma\_{y}\\)]{.math .inline} är standardavvikelse i populationen för respektive variabel. Ett annat sätt att beskriva detta är att korrelationskoefficienten är *standardiserad* *kovarians*.

Korrelationskoefficienten kan endast anta värden mellan [\\(- 1\\)]{.math .inline} och 1, där [\\(- 1\\)]{.math .inline} innebär perfekt negativ korrelation och 1 innebär perfekt positiv korrelation. Om korrelationskoefficienten är lika med 0 indikerar detta att det inte finns någon linjär samvariation mellan variablerna.

Eftersom alla resultat för korrelationskoefficienten är inom intervallet [\\(\\lbrack - 1,1\\rbrack\\)]{.math .inline} är olika korrelationskoefficienter jämförbara. Om vi till exempel beräknar två korrelationskoefficienter för två olika par av variabler så kan vi jämföra samvariationens styrka och riktning.

Om vi arbetar med urvalsdata betecknas korrelationskoefficienten [\\(r\_{xy}\\)]{.math .inline} eller [\\(corr(x,y)\\)]{.math .inline}, förkortning för engelska *correlation*:

[\\(r\_{xy} = \\frac{cov(x,y)}{s\_{x}s\_{y}}\\)]{.math .inline} (6)

där vi i stället har uppskattad kovarians i täljaren och uppskattad standard­avvikelse för de två variablerna i nämnaren. De olika delarna i denna ekvation har vi definierat tidigare i detta kapitel. Vi skriver ut ekvationerna och lägger till Bessels korrigering:

[\\(r\_{xy} = \\frac{cov(x,y)}{s\_{x}s\_{y}}\\)]{.math .inline} (7)

[\\(= \\frac{\\left( \\frac{1}{n - 1} \\right)\\sum\_{i}\^{}{\\left( x\_{i} - \\overline{x} \\right)\\left( y\_{i} - \\overline{y} \\right)}}{\\left( \\frac{\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}}{n - 1} \\right)\^{\\frac{1}{2}}\\left( \\frac{\\sum\_{i}\^{n}\\left( y\_{i} - \\overline{y} \\right)\^{2}}{n - 1} \\right)\^{\\frac{1}{2}}}\\)]{.math .inline}

[\\(= \\frac{(n - 1)\^{- 1}\\sum\_{i}\^{n}{\\left( x\_{i} - \\overline{x} \\right)\\left( y\_{i} - \\overline{y} \\right)}}{(n - 1)\^{- 1}\\left( \\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2} \\right)\^{\\frac{1}{2}}\\left( \\sum\_{i}\^{n}\\left( y\_{i} - \\overline{y} \\right)\^{2} \\right)\^{\\frac{1}{2}}}\\)]{.math .inline}

[\\(= \\frac{\\sum\_{i}\^{n}{\\left( x\_{i} - \\overline{x} \\right)\\left( y\_{i} - \\overline{y} \\right)}}{\\left( \\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2} \\right)\^{\\frac{1}{2}}\\left( \\sum\_{i}\^{n}\\left( y\_{i} - \\overline{y} \\right)\^{2} \\right)\^{\\frac{1}{2}}}\\)]{.math .inline}

Eftersom Bessels korrigering ingår i alla tre måtten kan vi i sista raden stryka [\\((n - 1)\^{- 1}\\)]{.math .inline} från både täljare och nämnare.

Låt oss återigen demonstrera genom att uppskatta [\\(r\_{xy}\\)]{.math .inline} för de två variablerna *x* och *y* och deras fyra observationer från figur 1. Vi återanvänder resultaten för kovarians ovan samt standardavvikelse för [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline}, vilket vi beräknade i föregående avsnitt:

[\\(r\_{xy} = \\frac{cov(x,y)}{s\_{x}s\_{y}} \\approx \\frac{\\frac{5}{3}}{\\left( + \\sqrt{\\frac{10}{3}} \\right)\\left( + \\sqrt{\\frac{5}{3}} \\right)} \\approx 0,71\\)]{.math .inline} (8)

Detta resultat indikerar en positiv korrelation. Höga värden av [\\(x\\)]{.math .inline} sammanfaller med höga värden av [\\(y\\)]{.math .inline} och låga värden av [\\(x\\)]{.math .inline} sammanfaller med låga värden av [\\(y\\)]{.math .inline}. Olika korrelationskoefficienter kan jämföras men det är fortfarande svårt att tolka denna typ av resultat mer exakt.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-3"]=[  {    "id": "k2-2-3-001",    "name": "Uppgift 1",    "exercise": "Vad innebär det om kovariansen mellan två variabler \\(x\\) och \\(y\\) är <em>negativ</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Höga värden på \\(x\\) är associerade med höga värden på \\(y\\)",          "Höga värden på \\(x\\) är associerade med låga värden på \\(y\\)",          "Det finns ingen samvariation alls mellan \\(x\\) och \\(y\\)",          "Variansen för \\(x\\) är större än variansen för \\(y\\)"        ],        "correct": "Höga värden på \\(x\\) är associerade med låga värden på \\(y\\)"      }    },    "error": { "message": "Tänk på vad riktningen på samvariationen innebär. Negativt värde = rörelserna går åt motsatt håll." },    "correct": { "message": "Rätt! Negativ kovarians innebär negativ samvariation: höga värden på \\(x\\) är associerade med låga värden på \\(y\\) och vice versa. Om kovariansen är noll finns ingen linjär samvariation." }  },  {    "id": "k2-2-3-002",    "name": "Uppgift 2",    "exercise": "Vad händer om man beräknar kovariansen av en variabel med sig själv, det vill säga \\(\\text{cov}(x, x)\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Man får noll",          "Man får variansen av \\(x\\)",          "Man får standardavvikelsen av \\(x\\)",          "Man får korrelationskoefficienten"        ],        "correct": "Man får variansen av \\(x\\)"      }    },    "error": { "message": "Sätt in \\(y = x\\) i kovariansformeln och se vad du får." },    "correct": { "message": "Rätt! \\(\\text{cov}(x,x) = \\frac{1}{n}\\sum(x_i - \\overline{x})(x_i - \\overline{x}) = \\frac{1}{n}\\sum(x_i - \\overline{x})^2 = \\text{var}(x)\\). Variansen är alltså ett specialfall av kovariansen." }  },  {    "id": "k2-2-3-003",    "name": "Uppgift 3",    "exercise": "Fyra observationer har värdena \\(x = \\{3, 4, 6, 7\\}\\) med \\(\\overline{x} = 5\\), och \\(y = \\{3, 2, 5, 4\\}\\) med \\(\\overline{y} = 3{,}5\\). Summan \\(\\sum_{i=1}^{4}(x_i - \\overline{x})(y_i - \\overline{y}) = 5\\). Beräkna urvalskovariansen: \\[\\text{cov}(x,y) = \\frac{1}{n-1}\\sum_{i}^{}(x_i - \\overline{x})(y_i - \\overline{y})\\] Ange svaret som ett decimaltal med tre decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.667" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 1.667",    "error": { "message": "Dividera summan av produkterna (= 5) med \\(n - 1 = 3\\)." },    "correct": { "message": "Rätt! \\(\\text{cov}(x,y) = 5 / (4-1) = 5/3 \\approx 1{,}667\\). Värdet är positivt, vilket indikerar positiv samvariation." }  },  {    "id": "k2-2-3-004",    "name": "Uppgift 4",    "exercise": "Vad är den viktigaste fördelen med korrelationskoefficienten \\(r_{xy}\\) jämfört med kovariansen \\(\\text{cov}(x,y)\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Korrelationskoefficienten är alltid ett heltal",          "Korrelationskoefficienten är standardiserad och tar värden mellan -1 och 1, vilket underlättar jämförelser mellan olika variabler",          "Korrelationskoefficienten är alltid positiv",          "Korrelationskoefficienten beräknas utan Bessels korrigering"        ],        "correct": "Korrelationskoefficienten är standardiserad och tar värden mellan -1 och 1, vilket underlättar jämförelser mellan olika variabler"      }    },    "error": { "message": "Tänk på att kovariansens värde påverkas av variablernas enheter – vad löser korrelationskoefficienten?" },    "correct": { "message": "Rätt! Korrelationskoefficienten är standardiserad kovarians och kan bara anta värden i intervallet [-1, 1]. Detta gör att vi kan jämföra samvariationens styrka och riktning mellan olika par av variabler, oavsett enhet." }  },  {    "id": "k2-2-3-005",    "name": "Uppgift 5",    "exercise": "Givet \\(\\text{cov}(x,y) = 5/3\\), \\(s_x = \\sqrt{10/3}\\) och \\(s_y = \\sqrt{5/3}\\), beräkna korrelationskoefficienten \\[r_{xy} = \\frac{\\text{cov}(x,y)}{s_x \\cdot s_y}\\] Runda av till två decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.71" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 0.71",    "error": { "message": "Beräkna \\(s_x \\cdot s_y = \\sqrt{10/3} \\cdot \\sqrt{5/3} = \\sqrt{50/9}\\), och dela sedan kovariansen med detta." },    "correct": { "message": "Rätt! \\(r_{xy} = \\frac{5/3}{\\sqrt{10/3} \\cdot \\sqrt{5/3}} \\approx 0{,}71\\). Värdet indikerar en positiv korrelation: höga värden på \\(x\\) sammanfaller med höga värden på \\(y\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-3"></div>

## Samvariation 2 {#k2-2-4}

### Begrepp

- **Regressionsanalys:** En statistisk metod för att studera samvariation mellan en beroende (förklarad) variabel och en eller flera oberoende (förklarande) variabler.

- **Regressionsmodell:** Matematisk modell som beskriver samvariationen (relationen) mellan en förklarad variabel och en eller flera förklarande variabler.

- **Minstakvadratmetoden:** En vanligt förekommande metod för linjär regressionsanalys. Genom att använda observerad data om variablerna kan minstakvadratmetoden användas för att skatta en regressionsmodells koefficienter.

- **Felterm:** Anger differenserna i populationen mellan respektive observations [\\(Y\\)]{.math .inline}-värde och regressionslinjen.

- **Residual:** Uppskattade feltermerna, vilka vi skattar med våra urvalsdata.

### Teori

Under kurserna [Matte 1](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/korrelation-och-kausalitet#!/) och [Matte 2](https://www.matteboken.se/lektioner/matte-2/statistik/korrelation-och-regressionsanalys#!/) ges en kort introduktion till regressionsanalys. Regressionsanalys är centralt för en stor mängd analytiskt arbete och forskning inom olika fält.

Grundläggande kunskap om regressionsanalys kan även hjälpa oss förstå poängen med många vetenskapliga metoder. Vi kommer därför ägna mycket möda åt detta och gå igenom hur vi kan använda detta inom samhällsvetenskap. Bitvis kan denna genomgång kännas tekniskt verklighetsfrånvänd, men dess betydelse kan inte överskattas.

#### Minstakvadratmetoden

I detta avsnitt ger vi först en övergripande beskrivning av minstakvadratmetodens logik, som sedan utvecklas stegvis. Precis som i tidigare exempel där vi studerar samvariation söker vi uppgifterna för en population. Populationens värden är okända, varför vi i stället är hänvisade till urvalsdata, som vi använder för att estimera samvariationen i populationen. Detta är förenat med osäkerhet.

Alla raka linjer i ett diagram kan beskrivas med en ekvation med formen [\\(Y = a + bX\\)]{.math .inline}, det vill säga [räta linjens ekvation](https://www.matteboken.se/lektioner/matte-1/funktioner/rata-linjens-ekvation). Konstanta koefficienten [\\(a\\)]{.math .inline} är linjens y-skärning eller intercept medan konstanta koefficienten [\\(b\\)]{.math .inline} är linjens lutning, eller lutningskoefficient. [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} är i detta fall våra variabler.

Den linje vi ska rita ut kommer att ge oss en illustration över den genomsnittliga förändringen i variabel [\\(Y\\)]{.math .inline} då vi rör oss från relativt lägre till relativt högre värden på [\\(X\\)]{.math .inline}. Figur 1 visar de fyra punkterna vi använde i föregående avsnitt. I diagrammet syns även en rak linje som lutar snett uppåt i diagrammet. Linjen illustrerar en beräknad linjär samvariation mellan de fyra punkterna.

Minstakvadratmetoden låter oss använda information från värdena för [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} (de fyra punkterna) för att hitta just de värden för koefficienterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} som låter oss rita ut den raka linje genom punkterna där summan av det vertikala kvadrerade avståndet mellan varje punkt och den raka linjen är så liten som möjligt. Vi ska återkomma till innebörden av detta.

I figurens diagram ges ett exempel på avståndet i form av [\\({\\widehat{v}}\_{3} = 5 - 4\\)]{.math .inline}. Varje annan rak linje skulle resultera i ett större summerat vertikalt avstånd mellan punkterna och linjen. Om avståndet mellan en punkt och linjen är lika med 5 är det kvadrerade avståndet samma värde i kvadrat, [\\(5\^{2} = 25\\)]{.math .inline}. Punkter som ligger under linjen får ett negativt avstånd, till exempel −5, och det kvadrerade värdet blir då [\\(( - 5)\^{2} = 25\\)]{.math .inline}.

**Figur 1. En linje ritad med hjälp av minstakvadratmetoden**![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\2%20-%20Variation%20och%20samvariation\2-4%20-%20Samvariation%202/img/k2-2-4-image1.png){style="width:3.5in;height:3in"}

Förklaring: Linjen i diagrammet illustrerar den linjära samvariationen mellan variablerna [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}. Av alla raka linjer vi kan rita ut i diagrammet är det just denna linje vi ser i diagrammet som minimerar summan av det vertikala avståndet mellan en sådan linje och punkterna.

#### Regressionsanalys

Minstakvadratmetoden är en av flera metoder för att studera samvariation inom det som kallas för *regressionsanalys*, vilket är ett samlingsnamn för olika statistiska metoder. Vid regressionsanalys bestämmer vi den variabel vars variation vi ska kartlägga (*förklarad* eller *beroende variabel*) utifrån variationen i en eller flera andra variabler (*förklarande* eller *oberoende variabel*).

Regressionsanalys är en metod för att kartlägga mönster i data, som linjär samvariation. Dessa mönster kan vi sedan använda för att studera orsakssamband. Men ett mönster är inget bevis för ett orsakssamband. Uttrycket "förklarande variabel" betyder därför inte att den ena variabeln nödvändigtvis orsakar den andra variabeln.

Oavsett analysens syfte söker vi värden som existerar i en population och i regel arbetar vi med urvalsdata. Vi börjar med att beskriva hur vi kan uppskatta samvariationen mellan två variabler och går sedan längre fram igenom hur vi kan inkludera flera förklarade variabler.

Vi ska nu utifrån minstakvadratmetoden uppskatta den linjära samvariation mellan variablerna [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} där vi bestämmer att [\\(Y\\)]{.math .inline} är vår förklarade variabel och [\\(X\\)]{.math .inline} är vår förklarande variabel. Hur vi bestämmer oss för detta beror på vilken idé som ligger till grund för vår analys, till exempel en samhällsvetenskaplig teori. Utifrån detta ställer vi upp följande *regressionsmodell*:

[\\(Y = a + bX + V\\)]{.math .inline} (1)

Eftersom variabel Y står till vänster om likhetstecknet i regressionsmodellen kan vi se att det är *den förklarade variabeln*. Variabel [\\(X\\)]{.math .inline}, till höger om likhetstecknet, är *förklarande variabel*.

Denna regressionsmodell existerar i vår population, det är *populationsmodellen* eller *populationens regressionsmodell*.

Med regressionsanalys kan vi uppskatta både linjär och ickelinjär samvariation, men vi kommer här enbart ägna oss åt regressionsanalys för linjär samvariation med minstakvadratmetoden.

#### Koefficenterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline}

Bokstäverna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} i regressionsmodellen i ekvation 1 är modellens *koefficienter* eller *parametrar*. Lutningskoefficienten [\\(b\\)]{.math .inline} ska läsas som att en ökning i variabeln [\\(X\\)]{.math .inline} med en enhet (beroende på vad [\\(X\\)]{.math .inline} är för variabel) är associerad med en förändring i variabel [\\(Y\\)]{.math .inline} av storlek [\\(b\\)]{.math .inline}. Koefficient [\\(a\\)]{.math .inline}, konstanten, är linjens y-skärning.

Vi vet inte vilka värden [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} har i populationen. Det är det vi vill estimera med regressionsanalys. De estimerade versionerna av koefficienternas populationsvärden [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} kan vi skriva som [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}. Hattsymbolen [\\(\\left( \\widehat{} \\right)\\)]{.math .inline} är estimerade värden, det vill säga våra skattningar med urvalsdata av populationsvärden (jämför figur 1). Bokstäver [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} utan hattsymbol syftar på deras populationsvärden.

#### Regressionslinjen

Linjen vi ska rita ut kallas för *regressionslinje* (redan utritad i figur 1). När vi har estimerat [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} kan vi med hjälp av observationerna i variabel [\\(X\\)]{.math .inline} även uppskatta nya värden för variabel [\\(Y\\)]{.math .inline}. Den uppskattade versionen av [\\(Y\\)]{.math .inline} kallar vi [\\(\\widehat{Y}\\)]{.math .inline}, vilket är [\\(Y\\)]{.math .inline}-värdet på regressionslinjen.

De estimerade koefficienterna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} som vi söker i detta fall är konstanter, vilket innebär att de har samma värden oavsett vilka värden för variabel [\\(X\\)]{.math .inline} vi jämför mot.

Alltså: vi har en population med [\\(N\\)]{.math .inline} antal observationer. Vi hämtar [\\(n\\)]{.math .inline} antal observationer till vårt urval. Med urvalsobservationerna estimerar vi koefficienterna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}, och därefter [\\(\\widehat{Y}\\)]{.math .inline}.

#### Felterm och residual

I regressionsmodellen representerar bokstaven [\\(V\\)]{.math .inline} det som kallas för *felterm*. Regressionsanalysen syftar till att mäta i vilken utsträckning som variationer i den (de) förklarande variabeln (variablerna) sammanfaller med variationer i den förklarade variabeln [\\(Y\\)]{.math .inline}.

Feltermen anger differensen mellan respektive observations [\\(Y\\)]{.math .inline}-värde och regressionslinjen i populationen. Estimerade feltermer kallas för *residualer,* skrivs [\\(\\widehat{V}\\)]{.math .inline}, och är differensen mellan [\\(Y\\)]{.math .inline}-värdena längs regressionslinjen, [\\(\\widehat{Y},\\)]{.math .inline} och observerade *Y*:

[\\({\\widehat{V}}\_{i} = Y\_{i} - \\widehat{Y\_{i}}\\)]{.math .inline} (2)

Om vi sätter in de estimerade koefficienterna, residualerna och variabeln [\\(\\widehat{Y}\\)]{.math .inline} i regressionsmodellen i ekvation 1 kan vi skriva:

[\\(\\widehat{Y} = \\widehat{a} + \\widehat{b}X + \\widehat{V}\\)]{.math .inline} (3)

#### Regressionsmodell för observation [\\(i\\)]{.math .inline}

Vår regressionsmodell [\\(Y = a + bX + V\\)]{.math .inline} kan även skrivas:

[\\(Y\_{i} = a + bX\_{i} + V\_{i}\\)]{.math .inline} (4)

Bokstaven [\\(i\\)]{.math .inline} är ett index för observationsnummer. I detta fall använder vi fyra observationer varför [\\(i = \\{ 1,2,3,4\\}\\)]{.math .inline}. Om vi tar observation [\\(i = 2\\)]{.math .inline} har vi [\\(Y\_{2} = a + bX\_{2} + V\_{2}.\\)]{.math .inline} De två värdena för koefficienterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} är konstanta för alla observationer och dessa har därför inte något index [\\(i\\)]{.math .inline}.

Innan vi går igenom matematiken kring minstakvadratmetoden kan vi titta på ekvationen för regressionslinjen i figur 1. Om variabeln [\\(X\\)]{.math .inline} ökar med 1 är detta associerat med ett i genomsnitt 0,5 högre värde på [\\(Y\\)]{.math .inline}. Detta innebär att regressionslinjens lutningskoefficient [\\(\\widehat{b}\\)]{.math .inline} i detta fall är:

[\\(\\widehat{b} = 0,5\\)]{.math .inline} (5)

Värdet för regressionsmodellens y-interceptet är [\\(\\widehat{a}\\)]{.math .inline}, vilket vi kan estimera genom att ta räta linjens ekvation [\\(Y = a + bX\\)]{.math .inline}, men byta ut [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} mot estimerade [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} och flytta om lite:

[\\(Y = \\widehat{a} + \\widehat{b}X\\)]{.math .inline} (6)

[\\(\\widehat{a} = Y - \\widehat{b}X\\)]{.math .inline}

Nu har vi en definition för [\\(\\widehat{a}\\)]{.math .inline}. I figur 1 kan vi se att regressionslinjen passerar punkten [\\((X,Y) = (3,\\ \\ 2,5)\\)]{.math .inline}. Om vi sätter in dessa värden för [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} i ekvationen för [\\(\\widehat{a}\\)]{.math .inline} får vi:

[\\(\\widehat{a} = Y - \\widehat{b}X = 2,5 - 0,5\*3 = 1\\)]{.math .inline} (7)

Nu har vi resultaten för [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} samt värdena för variabel [\\(X\\)]{.math .inline}. Nu kan vi även estimera [\\(\\widehat{Y}\\)]{.math .inline} och därigenom rita ut regressionslinjen:

[\\({\\widehat{Y}}\_{i} = \\widehat{a} + \\widehat{b}X\_{i}\\)]{.math .inline} (8)

Tabell 1 visar våra beräkningar för att estimera [\\(\\widehat{Y}\\)]{.math .inline} med de observerade värden för [\\(X = \\left\\{ 3,4,6,7 \\right\\}\\)]{.math .inline}. Värdena i tabellen är samma som i figur 1. Den punkt på den diagonala linjen som de vertikala streckade linjerna träffar är värdena för [\\(\\widehat{Y}\\)]{.math .inline}. Beräknar vi [\\(\\widehat{Y}\\)]{.math .inline} för andra värden för [\\(X\\)]{.math .inline} får vi andra punkter längs med regressionslinjen. Pröva gärna detta själv.

**Tabell 1: Estimering av** [\\(\\widehat{\\mathbf{Y}}\\)]{.math .inline}

  -----------------------------------------------------------------------------------------------------------------------------------------
  Observation *i*    [\\\[X\\\]]{.math .display}   [\\\[Y\\\]]{.math .display}  [\\\[\\widehat{Y} = 1 + 0,5\*X\\\]]{.math .display}
  ----------------- ----------------------------- ----------------------------- -----------------------------------------------------------
  1                               3                             3               [\\\[\\widehat{Y} = 1 + 0,5\*3 = 2,5\\\]]{.math .display}

  2                               4                             2               [\\\[\\widehat{Y} = 1 + 0,5\*4 = 3\\\]]{.math .display}

  3                               6                             5               [\\\[\\widehat{Y} = 1 + 0,5\*6 = 4\\\]]{.math .display}

  4                               7                             4               [\\\[\\widehat{Y} = 1 + 0,5\*7 = 4,5\\\]]{.math .display}
  -----------------------------------------------------------------------------------------------------------------------------------------

Förklaring: Tabellen visar observationerna för variablerna [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} samt estimerade [\\(\\widehat{Y}\\)]{.math .inline}, vilket vi får genom att estimera regressionsmodellen.

#### Positiv och negativ samvariation

I figur 1 lutar linjen uppåt åt höger och [\\(\\widehat{b} \> 0\\)]{.math .inline}, vilket innebär att vi har en *positiv samvariation* mellan variablerna [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}. Om [\\(\\widehat{b} \< 0\\)]{.math .inline} har vi en *negativ samvariation*, varpå linjen skulle ha lutat nedåt åt höger i diagrammen. Större värden i [\\(X\\)]{.math .inline} samvarierar i så fall med i genomsnitt mindre värden i [\\(Y\\)]{.math .inline} och mindre värden i [\\(X\\)]{.math .inline} sammanfaller med i genomsnitt högre värden i [\\(Y\\)]{.math .inline}.

Om [\\(\\widehat{b} = 0\\)]{.math .inline} är linjen horisontell och saknar lutning, vilket i så fall indikerar att vi inte finner någon linjär samvariation mellan variablerna.

Estimerade [\\(\\widehat{Y}\\)]{.math .inline} kallas även för *predikterade* [\\(Y\\)]{.math .inline}. Ordet prediktion syftar på att förutspå framtida händelser utifrån historisk information. I detta fall innebär det att vi kan estimera [\\(\\widehat{Y}\\)]{.math .inline} för [\\(X\\)]{.math .inline}-värden som inte återfinns i vårt material. Till exempel [\\(X = 10\\)]{.math .inline} ger [\\(\\widehat{Y} = 1 + 0,5\*10 = 6\\)]{.math .inline}.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-4"]=[  {    "id": "k2-2-4-001",    "name": "Uppgift 1",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) – vad kallas variabeln \\(Y\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Förklarande variabel",          "Oberoende variabel",          "Förklarad (beroende) variabel",          "Residualvariabel"        ],        "correct": "Förklarad (beroende) variabel"      }    },    "error": { "message": "\\(Y\\) står till vänster om likhetstecknet i regressionsmodellen. Tänk på vad detta innebär för tolkningen." },    "correct": { "message": "Rätt! \\(Y\\) kallas den <em>förklarade</em> eller <em>beroende</em> variabeln. Variabel \\(X\\) till höger om likhetstecknet är den förklarande (oberoende) variabeln." }  },  {    "id": "k2-2-4-002",    "name": "Uppgift 2",    "exercise": "Vad representerar feltermen \\(V\\) i regressionsmodellen \\(Y = a + bX + V\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Differensen mellan de estimerade koefficienterna \\(\\widehat{a}\\) och \\(\\widehat{b}\\)",          "Differensen mellan respektive observations \\(Y\\)-värde och regressionslinjen i populationen",          "Det genomsnittliga felet i hela datasetet",          "Skillnaden mellan populationens och urvalets storlek"        ],        "correct": "Differensen mellan respektive observations \\(Y\\)-värde och regressionslinjen i populationen"      }    },    "error": { "message": "Feltermen är det som modellen inte kan förklara – det vertikala avståndet till regressionslinjen." },    "correct": { "message": "Rätt! Feltermen \\(V\\) anger differenserna i populationen mellan respektive observations \\(Y\\)-värde och regressionslinjen. Estimerade feltermer kallas för residualer och betecknas \\(\\widehat{V}\\)." }  },  {    "id": "k2-2-4-003",    "name": "Uppgift 3",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) estimeras regressionslinjen med \\(\\widehat{b} = 0{,}5\\) och \\(\\widehat{a} = 1\\), det vill säga \\(\\widehat{Y} = 1 + 0{,}5 \\cdot X\\). Vad blir \\(\\widehat{Y}\\) för observation 3 där \\(X_3 = 6\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "4" },    "answerformat": "",    "error": { "message": "Sätt in \\(X = 6\\) i formeln \\(\\widehat{Y} = 1 + 0{,}5 \\cdot X\\)." },    "correct": { "message": "Rätt! \\(\\widehat{Y}_3 = 1 + 0{,}5 \\cdot 6 = 1 + 3 = 4\\). Detta är det predikterade \\(Y\\)-värdet längs regressionslinjen för \\(X = 6\\)." }  },  {    "id": "k2-2-4-004",    "name": "Uppgift 4",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\): vad innebär det om lutningskoefficienten \\(\\widehat{b} = 0\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det finns en stark positiv samvariation",          "Det finns en stark negativ samvariation",          "Regressionslinjen är horisontell, vilket indikerar ingen linjär samvariation",          "Modellen är felaktigt specificerad"        ],        "correct": "Regressionslinjen är horisontell, vilket indikerar ingen linjär samvariation"      }    },    "error": { "message": "Tänk på vad \\(b\\) är i räta linjens ekvation \\(Y = a + bX\\)." },    "correct": { "message": "Rätt! Om \\(\\widehat{b} = 0\\) är regressionslinjen horisontell och saknar lutning, vilket indikerar att vi inte finner någon linjär samvariation mellan variablerna \\(X\\) och \\(Y\\)." }  },  {    "id": "k2-2-4-005",    "name": "Uppgift 5",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) estimeras regressionslinjen som \\(\\widehat{Y} = 1 + 0{,}5 \\cdot X\\). Vad är det predikterade \\(Y\\)-värdet för \\(X = 10\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "6" },    "answerformat": "",    "error": { "message": "Sätt in \\(X = 10\\) i formeln \\(\\widehat{Y} = 1 + 0{,}5 \\cdot X\\)." },    "correct": { "message": "Rätt! \\(\\widehat{Y} = 1 + 0{,}5 \\cdot 10 = 1 + 5 = 6\\). Vi kan prediktera \\(Y\\)-värden för \\(X\\)-värden som inte finns i datamaterialet – detta kallas prediktion." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-4"></div>

## Felterm, residual och ett räkneexempel {#k2-2-5}

### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

Vi har regressionsmodellen:

[\\(Y = a + bX + V\\)]{.math .inline} (1)

där [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} är variabler, [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} är koefficienter som vi vill estimera med minstakvadratmetoden och *V* är feltermen. Feltermen [\\(V\\)]{.math .inline} representerar variationen i vår förklarade variabel [\\(Y\\)]{.math .inline} som inte kan förklaras av regressionsmodellen och variationer i den förklarande variabeln [\\(X\\)]{.math .inline}.

Vår regressionsmodell ska idealiskt sett utformas på ett sådant sätt att all variation i *Y* som beror på andra faktorer ska vara jämnt och slumpmässigt fördelad över feltermernas olika värden.

I föregående avsnitt definierade vi predikterade [\\({\\widehat{Y}}\_{i} = \\widehat{a} + \\widehat{b}X\_{i}\\)]{.math .inline} och residualen (uppskattade feltermen) som [\\({\\widehat{V}}\_{i} = Y\_{i} - \\widehat{Y\_{i}}\\)]{.math .inline}.

Vi sätter nu in definitionen av [\\({\\widehat{Y}}\_{i}\\)]{.math .inline} i vår ekvation för residualen [\\({\\widehat{V}}\_{i}\\)]{.math .inline}:

[\\(\\widehat{V\_{i}} = Y\_{i} - \\widehat{Y\_{i}} = Y\_{i} - \\left( \\widehat{a} + \\widehat{b}X\_{i} \\right) = Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i}\\)]{.math .inline} (2)

Detta visar att [\\({\\widehat{V}}\_{i}\\)]{.math .inline} är en funktion av observationerna i variablerna [\\(Y\_{i}\\)]{.math .inline} och [\\(X\_{i}\\)]{.math .inline} samt de skattade koefficienterna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}.

#### Beräkna [\\(\\widehat{V}\\)]{.math .inline}

Figur 1 visar skattade resultat för [\\(\\widehat{Y}\\)]{.math .inline} och [\\(\\widehat{V}\\)]{.math .inline} från observationerna vi använde i föregående avsnitt. Diagrammet till höger i figuren är samma diagram som vi såg i föregående avsnitt. Värdena för residualen [\\(\\widehat{V}\\)]{.math .inline} kan beskrivas som det vertikala avståndet mellan den diagonala linjen i diagrammet och respektive punkt. För observation 3 i diagrammet har vi skrivit ut beräkningen:

[\\({\\widehat{V}}\_{3} = Y\_{3} - {\\widehat{Y}}\_{3} = 5 - 4 = 1\\)]{.math .inline} (3)

Notera att även om summan av residualerna alltid är noll

[\\(\\sum\_{i}\^{\\hat{}}V\_{i} = 0\\)]{.math .inline} (4)

så är de ENSKILDA residualerna i regel skilda från noll. Om varje enskild residual vore lika med 0 ([\\(\\widehat{V\_{i}} = 0\\)]{.math .inline} för alla [\\(i\\)]{.math .inline}) skulle alla observationer ligga exakt på regressionslinjen. Detta är i regel varken möjligt eller önskvärt. En regressionsmodell med perfekt fit ([\\(\\widehat{V\_{i}} = 0\\)]{.math .inline} för alla [\\(i\\)]{.math .inline}) kan tyda på:

- Överanpassning (overfitting)

- Att vi endast har två observationer (en linje genom två punkter är alltid perfekt)

- Att sambandet är deterministiskt (inget slumpmässigt brus)

I praktiken har vi nästan alltid variation kring regressionslinjen, vilket är normalt och förväntat.

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\2%20-%20Variation%20och%20samvariation\2-5%20-%20Felterm%20residual%20och%20ett%20räkneexempel/img/k2-2-5-image1.png){style="width:2.75625in;height:2.3625in"}

**Figur 1 Estimera** [\\(\\widehat{\\mathbf{V}}\\)]{.math .inline}

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation i    [\\\[Y\_{i}\\\]]{.math .display}   [\\\[{\\widehat{Y}}\_{i}\\\]]{.math .display}   [\\\[{\\widehat{V}}\_{i} = Y\_{i} - {\\widehat{Y}}\_{i}\\\]]{.math .display}
  --------------- ---------------------------------- ----------------------------------------------- ------------------------------------------------------------------------------
  1                               3                                        2,5                                                            0,5

  2                               2                                         3                                                              -1

  3                               5                                         4                                                              1

  4                               4                                        4,5                                                            -0,5

  Summa                                                                                                                                    0

  Medelvärde                                                                                                                               0
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Räkna med minstakvadratmetoden

Vi uppskattade tidigare [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} genom att jämföra en regressionslinje i ett diagram. Nu ska vi med hjälp av minstakvadratmetoden estimera koefficienterna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} utifrån observationerna i våra variabler [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}.

I praktiken utförs beräkningarna vanligtvis av en dator och många analysprogram har färdiga kommandon för detta. Metoden kräver ingen avancerad matematik men när vi har många variabler och observationer kan beräkningarna ta lång tid om vi gör det för hand.

I detta exempel har vi bara fyra observationer och två variabler (figur 1), varför det är relativt enkelt att göra beräkningen för hand. Manuella beräkningar hjälper oss att förstå metoden bättre. Minstakvadratmetoden ger oss följande definitioner för att estimera koefficienterna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}:

[\\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X}\\)]{.math .inline} (5)

[\\(\\widehat{b} = \\frac{\\sum\_{i}\^{}{\\left( X\_{i} - \\overline{X} \\right)\\left( Y\_{i} - \\overline{Y} \\right)}}{\\sum\_{i}\^{}\\left( X\_{i} - \\overline{X} \\right)\^{2}}\\)]{.math .inline}

Dessa ekvationer kallas för koefficienternas estimatorer. Med hjälp av urvalsdata kan vi estimera (uppskatta) koefficienterna i populationen. Låt oss gå igenom dessa ekvationer steg för steg. Definitionen för [\\(\\widehat{a}\\)]{.math .inline}:

- [\\(\\widehat{a}\\)]{.math .inline} är estimerade konstanta koefficienten, som anger regressionslinjens y-skärning för [\\(X = 0\\)]{.math .inline}.

- [\\(\\overline{Y}\\)]{.math .inline} och [\\(\\overline{X}\\)]{.math .inline} är medelvärden av [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline}, uppskattade med de urvalsdata vi har för respektive variabel.

- [\\(\\widehat{b}\\)]{.math .inline} är det estimerade värdet av konstanta koefficienten [\\(b\\)]{.math .inline}, linjens lutning. Vi behöver [\\(\\widehat{b}\\)]{.math .inline} för att skatta [\\(\\widehat{a}\\)]{.math .inline}.

Definitionen av [\\(\\widehat{b}\\)]{.math .inline}:

- [\\(\\sum\_{i}\^{}{}\\)]{.math .inline} betyder summan av alla observationer, där bokstaven [\\(i\\)]{.math .inline} syftar på hur observationerna är indexerade: observation 1 till 4. Vi summerar alla observationer från 1 till 4, varför vi i detta fall har [\\(\\sum\_{i}\^{}{} = \\sum\_{i = 1}\^{n = 4}{}\\)]{.math .inline}

- Parentesen [\\((X\_{i} - \\overline{X})\\)]{.math .inline} innebär att vi för varje observation [\\(i\\)]{.math .inline} av [\\(X\\)]{.math .inline} subtraherar medelvärdet [\\(\\overline{X}\\)]{.math .inline}. Parentesen [\\(\\left( Y\_{i} - \\overline{Y} \\right)\\)]{.math .inline} innebär samma sak för respektive observation [\\(i\\)]{.math .inline} av [\\(Y\\)]{.math .inline}. För varje observation multiplicerar vi [\\((X\_{i} - \\overline{X})(Y\_{i} - \\overline{Y})\\)]{.math .inline}.

- Täljaren i definitionen för [\\(\\widehat{b}\\)]{.math .inline} innebär att vi för varje observation beräknar [\\((X\_{i} - \\overline{X})(Y\_{i} - \\overline{Y})\\)]{.math .inline} och summerar dessa. Detta dividerar vi med [\\(\\sum\_{i}\^{}\\left( X\_{i} - \\overline{X} \\right)\^{2}\\)]{.math .inline}, där vi för respektive observation tar parentesen [\\(\\left( X\_{i} - \\overline{X} \\right)\\)]{.math .inline} i kvadrat och summerar över alla observationer.

#### Beräkna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}

Tabell 1 beskriver beräkningarna vi behöver för [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}. Gå noga igenom varje steg i tabellen och försäkra dig om att du förstår vad som sker i varje kolumn.

**Tabell 1. Beräkningar för att estimera** [\\(\\widehat{\\mathbf{a}}\\)]{.math .inline} **och** [\\(\\widehat{\\mathbf{b}}\\)]{.math .inline}

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation     [\\\[X\_{i}\\\]]{.math .display}   [\\\[Y\_{i}\\\]]{.math .display}   [\\\[X\_{i} - \\overline{X}\\\]]{.math .display}   [\\\[Y\_{i} - \\overline{Y}\\\]]{.math .display}   [\\\[\\left( X\_{i} - \\overline{X} \\right)\^{2}\\\]]{.math .display}   [\\\[(X\_{i} - \\overline{X})(Y\_{i} - \\overline{Y})\\\]]{.math .display}
  ------------- ---------------------------------- ---------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------------------------------ ----------------------------------------------------------------------------
  1                                              3                                  3                                                 -2                                               -0,5                                                                        4                                                                            1

  2                                              4                                  2                                                 -1                                               -1,5                                                                        1                                                                          1,5

  3                                              6                                  5                                                  1                                                1,5                                                                        1                                                                          1,5

  4                                              7                                  4                                                  2                                                0,5                                                                        4                                                                            1

  Medelvärde                                     5                                3,5                                                                                                                                                                                

  Summa                                         20                                 14                                                                                                                                                                             10                                                                            5
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Summan av observationerna i variabel [\\(X\\)]{.math .inline} ges av [\\(\\sum\_{i = 1}\^{n = 4}X\_{i} = 3 + 4 + 6 + 7 = 20\\)]{.math .inline}. Medelvärdet för [\\(X\\)]{.math .inline} ges av [\\(\\overline{X} = 20/4 = 5\\)]{.math .inline}. Vi börjar med [\\(\\widehat{b}\\)]{.math .inline} som vi behöver värdet för att estimera [\\(\\widehat{a}\\)]{.math .inline}:

[\\(\\widehat{b} = \\frac{\\sum\_{i}\^{}{\\left( X\_{i} - \\overline{X} \\right)\\left( Y\_{i} - \\overline{Y} \\right)}}{\\sum\_{i}\^{}\\left( X\_{i} - \\overline{X} \\right)\^{2}} = \\frac{5}{10} = 0,5\\)]{.math .inline} (6)

Resultat [\\(\\widehat{b} = 0,5\\)]{.math .inline} innebär att en ökning av [\\(X\\)]{.math .inline} med en enhet i genomsnitt associeras med ett 0,5 högre [\\(Y\\)]{.math .inline}. Eftersom vi nu har [\\(\\widehat{b}\\)]{.math .inline} kan vi även estimera [\\(\\widehat{a}\\)]{.math .inline}:

[\\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X} = 3,5 - 0,5\*5 = 1\\)]{.math .inline} (7)

Resultatet [\\(\\widehat{a} = 1\\)]{.math .inline} innebär att för [\\(X = 0\\)]{.math .inline} är [\\(\\widehat{Y} = 1\\)]{.math .inline}. Resultaten [\\(\\widehat{a} = 1\\)]{.math .inline} och [\\(\\widehat{b} = 0,5\\)]{.math .inline}  är samma som vi såg i föregående avsnitt. Låt oss nu beräkna punkterna på raka linjen genom att beräkna [\\({\\widehat{Y}}\_{i}\\)]{.math .inline}. Detta ges av regressionsmodellen, estimaten för [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} och observationerna från den förklarande variabeln [\\(X\\)]{.math .inline}. Vi får följande definition för estimerade [\\(\\widehat{Y}\\)]{.math .inline}:

[\\({\\widehat{Y}}\_{i} = \\widehat{a} + \\widehat{b}X = 1 + 0,5X\_{i}\\)]{.math .inline} (8)

där [\\(X\_{i}\\)]{.math .inline} är observationerna för [\\(X\\)]{.math .inline}. Med [\\(\\widehat{Y}\\)]{.math .inline} kan vi även estimera residualen [\\(\\widehat{V}\\)]{.math .inline}. Resultaten presenteras i tabell 2. I kolumnen för [\\(\\widehat{Y}\\)]{.math .inline} ser vi [\\(Y\\)]{.math .inline}-värdena längs med regressionslinjen. Vi har endast värden på regressionslinjen som sammanfaller med de värden vi har för variabeln [\\(X\\)]{.math .inline}. Pröva själv att i ett diagram rita ut punkterna [\\(\\left( X\_{1},{\\widehat{Y}}\_{1} \\right) = (3,\\ \\ 2,5)\\)]{.math .inline}, (4,3) , (6,4) och (7, 4,5)

**Tabell 2. Estimera** [\\(\\widehat{\\mathbf{Y}}\\)]{.math .inline} **och** [\\(\\widehat{\\mathbf{V}}\\)]{.math .inline}

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation    [\\\[X\_{i}\\\]]{.math .display}   [\\\[Y\_{i}\\\]]{.math .display}   [\\\[\\widehat{Y\_{i}} = 1 + 0,5X\_{i}\\\]]{.math .display}   [\\\[\\widehat{V\_{i}} = Y\_{i} - \\widehat{Y\_{i}}\\\]]{.math .display}      [\\\[\\left( \\widehat{V\_{i}} \\right)\^{2}\\\]]{.math .display}
  ------------- ---------------------------------- ---------------------------------- ------------------------------------------------------------- -------------------------------------------------------------------------- --------------------------------------------------------------------------
  1                             3                                  3                                               2,5                                                                 0,5                                                                        0,25

  2                             4                                  2                                                3                                                                   -1                                                                         1

  3                             6                                  5                                                4                                                                   1                                                                          1

  4                             7                                  4                                               4,5                                                                 -0,5                                                                       0,25

  Summa                                                                                                                                                                                                                         [\\\[\\sum\_{i}\^{}{{\\widehat{V}}\_{i}}\^{2} = 2,5\\\]]{.math .display}
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 

#### Kopplingen till kovarians och varians

I [avsnitt 2.3](https://www.dropbox.com/scl/fi/357utiljgf7iuk78jxhtv/2-3-Samvariation-1.docx?rlkey=ewtjvwrihoflt8tlvf8dccppo&dl=0) introducerade vi kovarians. Estimatorn för koefficient [\\(\\widehat{b}\\)]{.math .inline} för regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline} kan även definieras som kovariansen mellan [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} dividerat med variansen för förklarande variabeln [\\(X\\)]{.math .inline}:

[\\(\\frac{cov(X,Y)}{var(X)} = \\frac{\\frac{1}{n}\\sum\_{i}\^{n}{\\left( X\_{i} - \\overline{X} \\right)\\left( Y\_{i} - \\overline{Y} \\right)}}{\\frac{1}{n}\\sum\_{i}\^{n}\\left( X\_{i} - \\overline{X} \\right)}\\ \\)]{.math .inline} (9)

[\\(= \\frac{\\sum\_{i}\^{n}{\\left( X\_{i} - \\overline{X} \\right)\\left( Y\_{i} - \\overline{Y} \\right)}}{\\sum\_{i}\^{n}\\left( X\_{i} - \\overline{X} \\right)} = \\widehat{b}\\)]{.math .inline}

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-5"]=[  {    "id": "k2-2-5-001",    "name": "Uppgift 1",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) med fyra observationer \\(X = \\{3, 4, 6, 7\\}\\) och \\(Y = \\{3, 2, 5, 4\\}\\): beräkna lutningskoefficienten \\[\\widehat{b} = \\frac{\\sum_{i}^{}(X_i - \\overline{X})(Y_i - \\overline{Y})}{\\sum_{i}^{}(X_i - \\overline{X})^2}\\] Täljaren är 5 och nämnaren är 10. Ange svaret som ett decimaltal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 0.5",    "error": { "message": "Dividera täljaren med nämnaren: \\(5 / 10 = ?\\)" },    "correct": { "message": "Rätt! \\(\\widehat{b} = 5/10 = 0{,}5\\). Det innebär att en ökning av \\(X\\) med en enhet i genomsnitt är associerad med ett 0,5 högre \\(Y\\)." }  },  {    "id": "k2-2-5-002",    "name": "Uppgift 2",    "exercise": "Med \\(\\overline{Y} = 3{,}5\\), \\(\\overline{X} = 5\\) och \\(\\widehat{b} = 0{,}5\\), beräkna konstanten: \\[\\widehat{a} = \\overline{Y} - \\widehat{b} \\cdot \\overline{X}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1" },    "answerformat": "",    "error": { "message": "Sätt in värdena: \\(\\widehat{a} = 3{,}5 - 0{,}5 \\times 5\\)." },    "correct": { "message": "Rätt! \\(\\widehat{a} = 3{,}5 - 0{,}5 \\times 5 = 3{,}5 - 2{,}5 = 1\\). Konstanten anger regressionslinjens y-skärning: för \\(X = 0\\) är \\(\\widehat{Y} = 1\\)." }  },  {    "id": "k2-2-5-003",    "name": "Uppgift 3",    "exercise": "Residualen för observation \\(i\\) definieras som \\(\\widehat{V}_i = Y_i - \\widehat{Y}_i\\). Med \\(\\widehat{Y} = 1 + 0{,}5X\\) och observation 2 som har \\(X_2 = 4\\) och \\(Y_2 = 2\\): vilket värde har residualen \\(\\widehat{V}_2\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "-1" },    "answerformat": "",    "error": { "message": "Beräkna först \\(\\widehat{Y}_2 = 1 + 0{,}5 \\times 4\\), och subtrahera sedan detta från \\(Y_2 = 2\\)." },    "correct": { "message": "Rätt! \\(\\widehat{Y}_2 = 1 + 0{,}5 \\times 4 = 3\\), och \\(\\widehat{V}_2 = 2 - 3 = -1\\). Det negativa tecknet innebär att observation 2 ligger under regressionslinjen." }  },  {    "id": "k2-2-5-004",    "name": "Uppgift 4",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\): vad är summan av alla residualer \\(\\sum_{i}^{}\\widehat{V}_i\\) alltid lika med?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "1",          "Medelvärdet av \\(Y\\)",          "0",          "Standardavvikelsen för \\(Y\\)"        ],        "correct": "0"      }    },    "error": { "message": "Tänk på att minstakvadratmetoden hittar den linje som balanserar positiva och negativa avvikelser från linjen." },    "correct": { "message": "Rätt! Summan av alla residualer är alltid noll: \\(\\sum \\widehat{V}_i = 0\\). I exemplet är residualerna 0,5 + (−1) + 1 + (−0,5) = 0. Däremot är de enskilda residualerna i regel skilda från noll." }  },  {    "id": "k2-2-5-005",    "name": "Uppgift 5",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) kan lutningskoefficienten \\(\\widehat{b}\\) uttryckas som kovariansen mellan \\(X\\) och \\(Y\\) dividerat med variansen för \\(X\\). Med \\(\\text{cov}(X,Y) = 5/3\\) och \\(\\text{var}(X) = 10/3\\): vad ger \\(\\text{cov}(X,Y)/\\text{var}(X)\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 0.5",    "error": { "message": "Dividera täljaren \\(5/3\\) med nämnaren \\(10/3\\). Tips: \\(\\frac{5/3}{10/3} = \\frac{5}{3} \\times \\frac{3}{10}\\)." },    "correct": { "message": "Rätt! \\(\\frac{5/3}{10/3} = \\frac{5}{10} = 0{,}5 = \\widehat{b}\\). Detta visar kopplingen mellan kovarians, varians och OLS-koefficienten: \\(\\widehat{b} = \\text{cov}(X,Y)/\\text{var}(X)\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-5"></div>

## Varför ska vi räkna nu igen? {#k2-2-6}

### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

Vi börjar närma oss slutet på kapitel 2 i denna kurs. I kapitel 1 introducerade vi kontrafaktisk analys och hur vi med hjälp av behandlings- och kontrollgrupper kan studera orsak och verkan. I kapitel 2 introducerade vi olika metoder, bland annat regressionsanalys, för att jämföra variation, spridning och samvariation mellan två variabler.

Men varför måste vi egentligen räkna? Räcker det inte att bara titta på diagram, eller en enkel jämförelse av hur det gick behandlings- och kontrollgruppen?

Matematiken är ingen garanti för att våra resonemang om världen blir bättre. Men matematiken ger oss en möjlighet att förbättra våra resonemang på ett sätt som är omöjligt utan. Detta avsnitt går kort igenom några argument för varför avsaknaden av matematik riskerar att leda tanken fel.

#### Vi ljuger för både oss själv och andra

Människor ser mönster i allt möjligt. Detta är centralt för vår överlevnad men leder ofta till felaktiga slutsatser. Till exempel finns det gott om historier om framgång och förutsägelser: "Här är 10 saker framgångsrika människor gör före frukost" och "Därför kommer politiker A vinna nästa val".

En stor mängd sådan litteratur bärs framåt av ett magiskt tänkande. Vi kan alla ha glädje av inspirerande berättelser. Men många människor gör samma sak som framgångsrika kändisar utan att resultaten blir lika lyckat. Många tvärsäkra uttalanden om politik och framtid är rena fantasier.

Ett annat exempel på vilseledande slutsatser är sådana vi ofta ser i olika typer av diagram. Diagram är ett utmärkt sätt att illustrera information och skapa en översiktlig bild. Men diagram kan också ofta vilseleda oss. Företag använder diagram för att övertyga oss att köpa just deras produkter. Politiker och politiska aktivister vill visa att de har rätt.

Men vid sidan av mer eller mindre medvetet missvisande information är det även lätt att vi lurar oss själva med diagram. Ett sätt att illustrera hur lätt det blir fel ges i figur 1. I diagrammet syns åtta pilspetsar med fyra avstånd mellan varje par.

Många människor uppfattar det som att avstånden mellan pilspetsarna skiljer sig. Men detta är felaktigt. Alla fyra avstånden mellan respektive par är lika långa. Denna typ av synvilla kallas Müller-Lyer-illusionen, efter en tysk sociolog som forskade på fenomenet i slutet av 1800-talet.

I detta exempel kan vi kontrollera avstånden mellan pilspetsarna genom att räkna antal rutor. Men många illustrationer av information kan innehålla mycket krångligare synvillor som är svårare att genomskåda. Om vi endast skulle använda diagram och bilder för att göra våra analyser skulle många analyser bli sämre. Matematiken kan gör det svårare att ljuga, både för oss själva och för andra.

**Figur 1: Åtta pilspetsar\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\2%20-%20Variation%20och%20samvariation\2-6%20-%20varför%20ska%20vi%20räkna%20nu%20igen/img/k2-2-6-image1.png){style="width:3in;height:3in"}

#### Två dimensioner är för lite

Diagrammet i figur 1 har två dimensioner: höjd och bredd. En kub har tre dimensioner: höjd, bredd och djup. I bilder är det ofta svårt att illustrera fler än två dimensioner. Men verkligheten är full av relationer som är mer komplexa än vad som går att visa i diagram. I våra egna liv kan vi hitta många exempel som är resultatet av tre eller fler faktorer.

Effekten av ett fenomen kan även påverka effekten av andra fenomen. Denna typ av samband går sällan att illustrera enkelt och tydligt i bilder eller diagram. I dessa fall blir i stället de enkla illustrationerna vilseledande. I senare kapitel går vi igenom för- och nackdelarna med diagram och hur vi med hjälp av matematik kan jämföra relationer mellan flera fenomen samtidigt.

#### Vi vill veta mer

En central fråga i kausal analys är om det ens finns något samband mellan orsak och verkan. Det vill säga -- kan vi ens hävda att det finns ett kausalt samband, ett orsakssamband. Till exempel mellan en utbildning och studenternas framtida inkomster? Påverkar medicin sjukdomen den ska åtgärda?

Men ofta vill vi veta mycket mer än så. Säg att vi har ett sjukdomssymptom och ska ta en medicin. Ska vi ta 1 tablett eller 10? Samma krav bör kunna ställas på samhällsvetenskap.

Många fenomen inom samhällsvetenskap kommer troligen aldrig få fullt så exakta svar som de vi är vana att få för medicin. Men med matematik kan vi åtminstone närma oss mer exakta svar, än vad som hade varit fallet annars. Utan matematik är detta omöjligt.

#### Vetenskapen behövs

I samhällsvetenskap arbetar vi ofta med frågor nära ideologi och värderingar. Det är ibland svårt för analytiker att hålla isär vad vi vet om världen och vad vi önskar att vi visste.

Ibland kan det verka omöjligt att nå ut med ny kunskap när alla verkar ha bestämt sig för vad de tror om världen. Då kan det vara lätt att misströsta användningen av mer tekniskt avancerade metoder.

Men underskatta inte alla de förslag som hade fått större utrymme men som vi idag kan kväsa vid ritbordet med hjälp av noggrann analys. Sett till de mänskliga samhällenas historia är stora delar av den moderna samhällsvetenskapen ung. Håll ut.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-6"]=[  {    "id": "k2-2-6-006",    "name": "Uppgift 1",    "exercise": "Inom statistik och regressionsanalys arbetar vi med abstrakta begrepp som kovarians, residualer och determinationskoefficienter. Varför är det viktigt att behärska dessa begrepp matematiskt, inte bara intuitivt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Intuition och matematik ger alltid samma slutsatser, så det spelar ingen roll",          "Matematiska definitioner är entydiga — de gör det möjligt att kommunicera precist och upprepa analyser",          "Matematik är bara nödvändigt för stora dataset",          "Intuition är alltid mer tillförlitlig än formler"        ],        "correct": "Matematiska definitioner är entydiga — de gör det möjligt att kommunicera precist och upprepa analyser"      }    },    "error": { "message": "Tänk på vad som händer om två forskare definierar \"samband\" olika. Kan de jämföra sina resultat?" },    "correct": { "message": "Rätt! Matematiska definitioner är entydiga och reproducerbara. Att säga att \"kovariansen är 5/3\" kommunicerar exakt samma sak till alla, medan \"det finns ett positivt samband\" kan tolkas på många sätt. Det är grunden för kumulativ vetenskaplig kunskap." }  },  {    "id": "k2-2-6-002",    "name": "Uppgift 2",    "exercise": "Müller-Lyer-illusionen är en synvilla där två linjer av identisk längd uppfattas ha olika längd, beroende på pilformade ändpunkter. Vad exemplifierar denna illusion om förhållandet mellan visuell uppfattning och kvantitativ analys?",    "image": "img/k2-2-6-image1.png",    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Ett bevis för att diagram alltid är mer tillförlitliga än matematik",          "Att vår visuella uppfattning kan lura oss, och att räkning kan avslöja vad ögat missar",          "En metod för att testa statistiska hypoteser",          "Att negativ korrelation alltid är svårare att se i diagram"        ],        "correct": "Att vår visuella uppfattning kan lura oss, och att räkning kan avslöja vad ögat missar"      }    },    "error": { "message": "Illusionen handlar om att vi uppfattar avstånd felaktigt – vad lär oss det om att enbart lita på bilder?" },    "correct": { "message": "Rätt! Müller-Lyer-illusionen illustrerar att vår visuella uppfattning kan lura oss att tro att lika långa avstånd är olika långa. Matematiken (att räkna rutor) kan avslöja det som ögat missar." }  },  {    "id": "k2-2-6-003",    "name": "Uppgift 3",    "exercise": "Varför räcker det inte med att titta på diagram med bara två dimensioner för att förstå komplexa samhällsfenomen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Diagram är alltid missvisande och bör aldrig användas",          "Verkligheten innehåller relationer med tre eller fler faktorer som är svåra att illustrera i tvådimensionella bilder",          "Tvådimensionella diagram kan inte visa negativa värden",          "Alla samhällsfenomen är endimensionella"        ],        "correct": "Verkligheten innehåller relationer med tre eller fler faktorer som är svåra att illustrera i tvådimensionella bilder"      }    },    "error": { "message": "Tänk på hur komplexa sociala fenomen kan bero på många faktorer – hur många dimensioner behöver man för att visa det i ett diagram?" },    "correct": { "message": "Rätt! Verkligheten är full av relationer som involverar tre eller fler faktorer. Effekten av ett fenomen kan även påverka effekten av andra fenomen. I dessa fall blir enkla tvådimensionella illustrationer vilseledande." }  },  {    "id": "k2-2-6-004",    "name": "Uppgift 4",    "exercise": "Vad är en begränsning med att <em>enbart</em> slå fast om ett kausalt samband verkar finnas, utan att kvantifiera det?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är omöjligt att avgöra om ett samband ens existerar utan matematik",          "Man kan inte svara på hur stort sambandet är, vilket ofta är viktig information",          "Kausalitet kan bara fastställas med regressionsanalys",          "Diagram kan aldrig visa om ett samband är positivt eller negativt"        ],        "correct": "Man kan inte svara på hur stort sambandet är, vilket ofta är viktig information"      }    },    "error": { "message": "Tänk på en läkemedelsbehandling: räcker det att veta att medicinen 'hjälper', eller behöver man veta mer för att fatta ett beslut om dosering?" },    "correct": { "message": "Rätt! Det räcker sällan att veta om ett samband existerar – vi vill veta hur stort det är. Precis som att man vid medicinering behöver veta dos, behöver samhällsvetenskaplig analys också kvantifiera effekter. Utan matematik är det ofta omöjligt." }  },  {    "id": "k2-2-6-005",    "name": "Uppgift 5",    "exercise": "Samhällsvetenskap arbetar ofta med frågor nära ideologi och värderingar. Hur kan kvantitativ och matematisk analys vara ett hjälpmedel i sådana sammanhang?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Matematik eliminerar ideologiska frågor helt",          "Matematik kan hjälpa oss skilja vad vi vet från vad vi önskar att vi visste, och avfärda ohållbara påståenden",          "Matematik är värdefri och kan aldrig missbrukas",          "Matematik gör att alla alltid håller med om slutsatserna"        ],        "correct": "Matematik kan hjälpa oss skilja vad vi vet från vad vi önskar att vi visste, och avfärda ohållbara påståenden"      }    },    "error": { "message": "Tänk på hur noggrann kvantitativ analys kan skilja kunskap från önsketänkande — även i normativt laddade sammanhang." },    "correct": { "message": "Rätt! Noggrann kvantitativ analys kan hjälpa oss att skilja kunskap från önsketänkande och att avfärda ohållbara påståenden redan innan de får för stort genomslag. Matematiken är ingen garanti, men ett viktigt verktyg." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-6"></div>

