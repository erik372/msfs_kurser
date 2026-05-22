# Minstakvadratmetoden — fördjupning 1

## Andra linjer {#k2-3-1}

### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

I föregående avsnitt lärde vi oss hur minstakvadratmetoden ger oss en specifik regressionslinje. Men varför just denna linje? Kunde vi inte bara ha valt en annan? I det här avsnittet ska vi visa varför regressionslinjen är unik och bättre än alla andra möjliga raka linjer.

Vi har regressionsmodellen:

[\\(Y = a + bX + V\\)]{.math .inline} (1)

där [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} är variabler, [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} är koefficienter vi vill estimera med minstakvadratmetoden och [\\(V\\)]{.math .inline} är feltermen. Med hjälp av minstakvadratmetoden kan vi hitta den regressionslinje som minimerar summan av det vertikala avståndet mellan regressionslinjen och observationerna.

Alla andra raka linjer resulterar i ett större summerat värde för det kvadrerade avståndet mellan dessa linjer och punkterna.

#### Två exempel

Detta kan vi illustrera med hjälp av exempel där vi använder samma fyra observationer för [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} i som vi använde i tidigare avsnitt, där [\\(X = 3,\\ 4,\\ 6,\\ 7\\)]{.math .inline} och [\\(Y = 3,\\ 4,\\ 5,\\ 6\\)]{.math .inline}. Men i stället för regressionslinjen som vi skattade utifrån minstakvadratmetoden har vi nu en horisontell linje där [\\(\\widehat{Y} = 3,5\\)]{.math .inline} för alla [\\(Y\_{i}\\)]{.math .inline}, vilket är samma som medelvärdet för Y i våra fyra observationer: [\\(\\overline{Y} = (3 + 4 + 5 + 6)\\text{/}4 = 3,5\\)]{.math .inline}.

En horisontell linje har lutningskoefficient [\\(b = 0\\)]{.math .inline}. Låt oss beräkna summan av de kvadrerade residualerna [\\(\\left( \\sum\_{i}\^{}\\widehat{{V\_{i}}\^{2}} \\right)\\)]{.math .inline} för denna linje:

[\\(\\sum\_{i}\^{}\\widehat{{V\_{i}}\^{2}} = \\sum\_{i}\^{}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline} (2)[\\( \\)]{.math .inline}[\\\[{= (3 - 3,5)\^{2} + (4 - 3,5)\^{2} + (5 - 3,5)\^{2} + (6 - 3,5)\^{2} }{= 9}\\\]]{.math .display}

vilket är mer än 2,5. Regressionslinjen vi kunde rita utifrån vår regressionsmodell som vi skattade med minstakvadratmetoden är därför bättre om vi ska minimera det summerade vertikala avståndet.

Låt oss exemplifiera med en till linje, som passerar observation 1 och 4, det vill säga punkterna [\\((X,Y) = (3,3)\\)]{.math .inline} och (7,4). Utifrån dessa värden för [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} vet vi att då [\\(X\\)]{.math .inline} ökar från 3 till 7 är detta associerat med en genomsnittlig förändring i [\\(Y\\)]{.math .inline} från 3 till 4, varför linjens lutning är:

[\\(\\widehat{b} = \\frac{Y\_{4} - Y\_{1}}{X\_{4} - X\_{1}} = \\frac{4 - 3}{7 - 3} = \\frac{1}{4}\\)]{.math .inline} (3)

Den andra koefficienten ([\\(\\widehat{a}\\)]{.math .inline}) kan vi räkna ut med punkten [\\(\\left( X\_{1},Y\_{1} \\right) = (3,3)\\)]{.math .inline}:

[\\(\\widehat{a} = Y\_{i} - \\widehat{b}X\_{i} = 3 - \\frac{1}{4} \\cdot 3 = \\frac{9}{4}\\)]{.math .inline} (4)

Eftersom linjen passerar genom observation 1 och 4 vet vi att residualen för dessa två är [\\(\\widehat{V\_{i}} = 0\\)]{.math .inline}. För observation 2 har vi att [\\(X = 4\\)]{.math .inline}, vilket ger:

[\\(\\widehat{Y\_{2}} = \\frac{9}{4} + \\frac{1}{4} \\cdot 4 = \\frac{13}{4}\\)]{.math .inline} (5)

För observation 3 har vi [\\(X = 6\\)]{.math .inline} vilket ger:

[\\(\\widehat{Y\_{3}} = \\frac{9}{4} + \\frac{1}{4} \\cdot 6 = \\frac{15}{4}\\)]{.math .inline} (6)

För observation 2 och 3 har vi att [\\(\\left( Y\_{2} = 2 \\right)\\)]{.math .inline} och [\\(\\left( Y\_{3} = 5 \\right)\\)]{.math .inline}:

[\\(\\sum\_{i}\^{}{\\widehat{V}}\_{i}\\ = \\sum\_{i}\^{}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline} (7)[\\( \\)]{.math .inline}[\\\[{= \\left( Y\_{1} - \\widehat{Y}1 \\right)\^{2} + \\left( Y2 - \\widehat{Y}2 \\right)\^{2} + \\left( Y3 - \\widehat{Y}3 \\right)\^{2} + \\left( Y4 - \\widehat{Y\_{4}} \\right)\^{2} }{= 0 + \\left( 2 - \\frac{13}{4} \\right)\^{2} + \\left( 5 - \\frac{15}{4} \\right)\^{2} + 0 }{= 3,1875 \> 2,5}\\\]]{.math .display}

Figur 1 illustrerar de tre linjer vi nu har jämfört. Linje A i diagrammet är den vi skattade utifrån minstakvadratmetoden. Linje B är den horisontella linjen där [\\(\\widehat{Y} = \\overline{Y} = 3,5\\)]{.math .inline}. Linje C ritas av funktionen [\\(Y = 9\\text{/}4 + \\frac{1}{4}X\\)]{.math .inline} och går igenom två av punkterna.

**Figur 1. Tre linjer, varav en är regressionslinjen**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\3%20-%20Minstakvadratmetoden%20fördjupning%201%20mer%20matte\3-1%20-%20Andra%20linjer/img/k2-3-1-image1.png){style="width:3.27778in;height:3.27778in"}

Förklaring: Diagrammet visar tre linjer. Linje A är regressionslinjen, beräknad med minstakvadratmetoden. Linje B är horisontell och linje C går igenom två av punkterna. Av de tre linjerna har linje A det minstas summerade vertikala avståndet mellan linjen och punkterna.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-3-1"]=[  {    "id": "k2-3-1-001",    "name": "Uppgift 1",    "exercise": "Vi har fyra observationer med \\(X = 3, 4, 6, 7\\) och \\(Y = 3, 4, 5, 6\\). Medelvärdet för \\(Y\\) är \\(\\overline{Y} = 4,5\\). En horisontell linje dras vid \\(\\widehat{Y} = 4,5\\). Hur stor är summan av de kvadrerade residualerna för den horisontella linjen? Beräkna: \\[(3 - 4{,}5)^2 + (4 - 4{,}5)^2 + (5 - 4{,}5)^2 + (6 - 4{,}5)^2\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "5" },    "answerformat": "",    "error": { "message": "Beräkna varje term för sig: \\((-1{,}5)^2 = 2{,}25\\), \\((-0{,}5)^2 = 0{,}25\\), \\((0{,}5)^2 = 0{,}25\\), \\((1{,}5)^2 = 2{,}25\\). Summera sedan." },    "correct": { "message": "Rätt! \\(2{,}25 + 0{,}25 + 0{,}25 + 2{,}25 = 5\\). Den horisontella linjen vid \\(\\widehat{Y} = 4{,}5\\) ger alltså SSR (summan av de kvadrerade residualerna) = 5 för dessa fyra observationer." }  },  {    "id": "k2-3-1-002",    "name": "Uppgift 2",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) jämför vi en horisontell linje (Linje B) med regressionslinjen (Linje A) för fyra observationer \\(X = 3, 4, 6, 7\\) och \\(Y = 3, 2, 5, 4\\). Regressionslinjen ger summan av kvadrerade residualerna SSR = 2,5. Den horisontella linjen \\(\\widehat{Y} = \\overline{Y} = 3{,}5\\) ger SSR = 5. Vilket påstående är korrekt?",    "image": "img/k2-3-1-image1.png",    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den horisontella linjen passar bättre eftersom 5 > 2,5",          "Regressionslinjen passar bättre eftersom 2,5 < 5",          "Båda linjerna passar lika bra",          "Det går inte att jämföra de två linjerna"        ],        "correct": "Regressionslinjen passar bättre eftersom 2,5 < 5"      }    },    "error": { "message": "Minstakvadratmetoden minimerar summan av de kvadrerade residualerna. En lägre summa innebär ett bättre anpassad linje." },    "correct": { "message": "Rätt! Regressionslinjen ger summan 2,5 och den horisontella linjen ger 5. Eftersom 2,5 < 5 passar regressionslinjen bättre mot data — precis det som minstakvadratmetoden garanterar." }  },  {    "id": "k2-3-1-003",    "name": "Uppgift 3",    "exercise": "En linje (Linje C) ritas genom observationerna \\((X_1, Y_1) = (3, 3)\\) och \\((X_4, Y_4) = (7, 4)\\). Vad är lutningen \\(\\widehat{b}\\) för denna linje? \\[\\widehat{b} = \\frac{Y_4 - Y_1}{X_4 - X_1}\\]",    "image": "img/k2-3-1-image1.png",    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\widehat{b} = 1\\)",          "\\(\\widehat{b} = \\frac{1}{2}\\)",          "\\(\\widehat{b} = \\frac{1}{4}\\)",          "\\(\\widehat{b} = 2\\)"        ],        "correct": "\\(\\widehat{b} = \\frac{1}{4}\\)"      }    },    "error": { "message": "Sätt in värdena i formeln: täljaren är \\(4 - 3 = 1\\) och nämnaren är \\(7 - 3 = 4\\)." },    "correct": { "message": "Rätt! \\(\\widehat{b} = \\frac{4 - 3}{7 - 3} = \\frac{1}{4}\\). Linjen passerar per konstruktion genom \\((3, 3)\\) och \\((7, 4)\\)." }  },  {    "id": "k2-3-1-004",    "name": "Uppgift 4",    "exercise": "Med lutningen \\(\\widehat{b} = \\frac{1}{4}\\) och att linjen passerar genom punkten \\((X_1, Y_1) = (3, 3)\\) beräknas konstanttermen: \\[\\widehat{a} = Y_1 - \\widehat{b} \\cdot X_1\\] Vilket värde får \\(\\widehat{a}\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "2.25" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. 2.25)",    "error": { "message": "Beräkna \\(\\frac{1}{4} \\cdot 3 = \\frac{3}{4} = 0{,}75\\). Sedan: \\(3 - 0{,}75 = ?\\). Alternativt: \\(\\frac{9}{4} = ?\\)" },    "correct": { "message": "Rätt! \\(\\widehat{a} = 3 - \\frac{3}{4} = \\frac{9}{4} = 2{,}25\\). Linje C har alltså ekvationen \\(\\widehat{Y} = 2{,}25 + 0{,}25 \\cdot X\\). Linjen passerar per konstruktion genom observation 1 och 4, varför residualerna för dessa är noll." }  },  {    "id": "k2-3-1-005",    "name": "Uppgift 5",    "exercise": "Varför kan ingen annan rät linje ersätta regressionslinjen som skattas med minstakvadratmetoden?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Regressionslinjen är den enda linjen som passerar genom alla observationer",          "Alla andra raka linjer resulterar i ett större summerat värde för de kvadrerade residualerna",          "Regressionslinjen är alltid horisontell",          "Andra linjer kräver fler observationer för att beräknas"        ],        "correct": "Alla andra raka linjer resulterar i ett större summerat värde för de kvadrerade residualerna"      }    },    "error": { "message": "Tänk på vad minstakvadratmetoden faktiskt minimerar och vad det innebär för alla andra möjliga linjer." },    "correct": { "message": "Rätt! Alla andra raka linjer resulterar i ett större summerat värde för det kvadrerade avståndet mellan linjen och punkterna. Till exempel ger den horisontella linjen SSR = 5 och Linje C SSR = 3,125 — båda större än regressionslinjen (SSR (summan av de kvadrerade residualerna) = 2,5)." }  }];</script>
<div class="exercise-section" data-section-id="k2-3-1"></div>

## En modell till {#k2-3-2}

### Begrepp

- Från regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline} kan vi beräkna följande:

- **Residualernas kvadratsumma** (engelska *residual sum of squares, SSR*):\
  [\\(SSR = \\sum\_{i}\^{n}\\widehat{V\_{i}\^{2}} = \\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline}

- **Kvadratsumman av den förklarade variationen** (engelska *sum of squares explained*, SSE): [\\(SSE = \\sum\_{i}\^{n}\\left( \\widehat{Y\_{i}} - \\overline{Y\_{i}} \\right)\^{2}\\)]{.math .inline}

- **Totalsumman av kvadrater** (engelska *total sum of squares*, SST): [\\(SST = SSE + SSR\\)]{.math .inline}.

- **Determinationskoefficienten** (på engelska *coefficient of determination*), [\\(R\^{2}\\)]{.math .inline}: andel av variationen i [\\(Y\\)]{.math .inline} som kan förklaras av regressionsmodellen, det vill säga variationen i den förklarande variabeln [\\(X\\)]{.math .inline}. [\\(R\^{2}\\)]{.math .inline} antar värden mellan 0 och 1, där 0 = modellen förklarar ingenting och 1 = modellen förklarar all variation. [\\(R\^{2} = \\frac{SSE}{SST} = \\frac{SST - SSR}{SST}\\)]{.math .inline}.

### Teori

Vi har i tidigare avsnitt introducerat minstakvadratmetoden och gått igenom delar av matematiken bakom. Nu ska vi repetera vad vi lärt oss genom att räkna på en ny regressionsmodell.

#### En ny modell

Låt oss nu estimera följande regressionsmodell:

[\\(Z = \\alpha + \\beta K + \\epsilon\\)]{.math .inline} (1)

där [\\(Z\\)]{.math .inline} och [\\(K\\)]{.math .inline} är variabler, [\\(\\alpha\\)]{.math .inline} och [\\(\\beta\\)]{.math .inline} är koefficienterna som vi ska estimera utifrån minstakvadratmetoden och [\\(\\epsilon\\)]{.math .inline} är feltermen. En del av poängen här är att vi nu använder andra bokstäver men att matematiken ändå är densamma. Låt oss repetera vår metod:

1.  Vi har en idé om att [\\(K\\)]{.math .inline} samvarierar med [\\(Z\\)]{.math .inline}. Detta är ett påstående om samvariation, inte en teori om ett orsakssamband. Samvariation kan i sin tur vara baserad på en teori om ett orsakssamband, vilket i så fall i regel brukar formuleras som att den förklarande variabeln [\\(K\\)]{.math .inline} orsakar förändringar i den förklarade variabeln [\\(Z\\)]{.math .inline}.

2.  Vi formulerar vårt påstående om samvariation i form av en regressionsmodell i ekvation 1.

3.  Vi använder minstakvadratmetoden för att hitta estimatorerna (ekvationerna) för [\\(\\widehat{\\alpha}\\)]{.math .inline} och [\\(\\widehat{\\beta}\\)]{.math .inline}. Hattsymbolen [\\(\\widehat{}\\)]{.math .inline} indikerar att det är estimerade versioner av koefficienterna [\\(\\alpha\\)]{.math .inline} och [\\(\\beta\\)]{.math .inline} som finns i populationen.

4.  Efter att vi har estimerat koefficienterna kan vi estimera regressionslinjens ekvation [\\(\\widehat{Z} = \\widehat{\\alpha} + \\widehat{\\beta}K\\)]{.math .inline} och rita ut regressionslinjen i ett diagram. Värdena för [\\(\\widehat{Z}\\)]{.math .inline} anger regressionslinjens värden på den vertikala axeln.

5.  Residualen [\\(\\widehat{\\epsilon} = Z - \\widehat{Z}\\)]{.math .inline} är det vertikala avståndet (y-axeln) mellan regressionslinjens [\\(\\widehat{Z}\\)]{.math .inline} och respektive observation [\\(Z\\)]{.math .inline}.

#### Estimera koefficienterna

Låt oss nu estimera koefficienterna [\\(\\alpha\\)]{.math .inline} och [\\(\\beta\\)]{.math .inline}. Observationerna för variablerna [\\(Z\\)]{.math .inline} och [\\(K\\)]{.math .inline} beskrivs i tabell 1, tillsammans med beräkningarna vi behöver för våra beräkningar.

**Tabell 1. Underlag för att estimera koefficienterna** [\\(\\mathbf{\\alpha}\\)]{.math .inline} **och** [\\(\\mathbf{\\beta}\\)]{.math .inline}**.**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation i    [\\\[Z\_{i}\\\]]{.math .display}   [\\\[K\_{i}\\\]]{.math .display}   [\\\[Z\_{i} - \\overline{Z}\\\]]{.math .display}   [\\\[K\_{i} - \\overline{K}\\\]]{.math .display}   [\\\[\\left( Z\_{i} - \\overline{Z} \\right)\\left( K\_{i} - \\overline{K} \\right)\\\]]{.math .display}   [\\\[\\left( K\_{i} - \\overline{K} \\right)\^{2}\\\]]{.math .display}
  --------------- ---------------------------------- ---------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------
  1                               1                                  0                                        --0,5                                               --2                                                                             1                                                                                         4

  2                               4                                  0                                         2,5                                                --2                                                                            --5                                                                                        4

  3                               0                                  4                                        --1,5                                                2                                                                             --3                                                                                        4

  4                               1                                  4                                        --0,5                                                2                                                                             --1                                                                                        4

  Summa                           6                                  8                                                                                                                                                                           --8                                                                                        16
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

För lutningskoefficienten [\\(\\widehat{\\beta}\\)]{.math .inline} får vi:

[\\(\\widehat{\\beta} = \\sum\_{i}\^{}{\\frac{\\left( K\_{i} - \\overline{K} \\right)\\left( Z\_{i} - \\overline{Z} \\right)}{\\sum\_{i}\^{}\\left( K\_{i} - \\overline{K} \\right)\^{2}} = - \\frac{8}{16} = - \\frac{1}{2}}\\)]{.math .inline} (2)

För koefficienten [\\(\\widehat{\\alpha}\\)]{.math .inline}:

[\\(\\widehat{\\alpha} = \\overline{Z} - \\widehat{\\beta}\\overline{K} = 1,5 - \\left( - \\frac{1}{2} \\right)2 = 2,5\\)]{.math .inline} (3)

Att [\\(\\widehat{\\beta} \< 0\\)]{.math .inline} betyder att regressionslinjens lutning är negativ och att vi har en negativ samvariation mellan de fyra observationerna för [\\(Z\\)]{.math .inline} och [\\(K\\)]{.math .inline}. Vi kan nu ställa upp en ekvation för predikterade [\\(\\widehat{Z}\\)]{.math .inline}:

[\\(\\widehat{Z\_{i}} = \\widehat{\\alpha} + \\widehat{\\beta}K\_{i} = 2,5 - \\frac{1}{2}K\_{i}\\)]{.math .inline} (4)

Med hjälp av denna och de observerade värdena för variabeln [\\(K\\)]{.math .inline} kan vi estimera fyra värden för predikterade [\\(\\widehat{Z}\\)]{.math .inline}, vilka beskrivs i tabell 2. Med [\\(\\widehat{Z}\\)]{.math .inline} kan vi sedan estimera de fyra residualerna [\\(\\widehat{\\epsilon}\\)]{.math .inline}, vilka beskrivs i samma tabell. De fyra observationerna och regressionslinjen som kan ritas med ekvation 4 illustreras i figur 1.

**Tabell 2. Beräkningar för att estimera** [\\(\\widehat{Z}\\)]{.math .inline} **och** [\\(\\widehat{\\epsilon}\\)]{.math .inline}

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation i    [\\\[Z\_{i}\\\]]{.math .display}   [\\\[K\_{i}\\\]]{.math .display}   [\\\[\\widehat{Z\_{i}}\\\]]{.math .display}   [\\\[\\widehat{\\epsilon\_{i}} = Z\_{i} - \\widehat{Z\_{i}}\\\]]{.math .display}
  --------------- ---------------------------------- ---------------------------------- --------------------------------------------- ----------------------------------------------------------------------------------
  1                               1                                  0                                       2,5                                                            --1,5

  2                               4                                  0                                       2,5                                                             1,5

  3                               0                                  4                                       0,5                                                            --0,5

  4                               1                                  4                                       0,5                                                             0,5
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Figur 1. Regressionslinjen för modell** [\\(Z = \\alpha + \\beta K + \\epsilon\\)]{.math .inline}![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\3%20-%20Minstakvadratmetoden%20fördjupning%201%20mer%20matte\3-2%20-%20En%20modell%20till/img/k2-3-2-image1.png){style="width:3in;height:3in"}

Förklaring: Vi har regressionsmodellen [\\(Z = \\alpha + \\beta K + \\epsilon\\)]{.math .inline}. Utifrån observationerna för variablerna [\\(Z\\)]{.math .inline} och [\\(K\\)]{.math .inline} och minstakvadratmetoden estimerar vi koefficienterna [\\(\\widehat{\\alpha}\\)]{.math .inline} och [\\(\\widehat{\\beta}\\)]{.math .inline}. De estimerade koefficienterna och observationerna från variabel [\\(K\\)]{.math .inline} kan vi använda för att estimera [\\(\\widehat{Z}\\)]{.math .inline}, vilket ger värdena för denna variabel längs med regressionslinjen.

#### Hur väl passar regressionsmodellen mot data?

För att jämföra hur väl en regressionsmodell passar de data den syftar till att beskriva mönstret för finns det flera metoder. En viktig del i detta är att jämföra residualerna, det vill säga avståndet mellan de data vi använt i vår förklarade variabel [\\(Y\\)]{.math .inline} och de predikterade värdena för samma variabel  [\\(\\widehat{Y}\\)]{.math .inline}.

Om vi har en regressionsmodell med förklarad variabel [\\(Y\\)]{.math .inline} och feltermen [\\(V\\)]{.math .inline} där residualen beräknas [\\(\\widehat{V} = Y - \\widehat{Y}\\)]{.math .inline} kan vi till exempel jämföra *residualernas kvadratsumma* (engelska *sum of squared residuals*, SSR):

[\\(SSR = \\sum\_{i}\^{n}\\widehat{V\_{i}\^{2}} = \\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline} (1)

Vi kan tänka på SSR som mängden variation i förklarade variabeln [\\(Y\\)]{.math .inline} som inte kan förklaras av regressionsmodellen.

Ett annat användbart mått är *kvadratsumman av den förklarade variationen* (engelska *sum of squares explained*, SSE):

[\\(SSE = \\sum\_{i}\^{n}\\left( \\widehat{Y\_{i}} - \\overline{Y\_{i}} \\right)\^{2}\\)]{.math .inline} (2)

SSE kan beskrivas som den variation i [\\(Y\\)]{.math .inline} som kan förklaras, eller tas bort, av regressionsmodellen. Begreppet "förklaras" innebär i detta sammanhang inte nödvändigtvis "kausal förklaring".

*Totalsumman av kvadrater* (engelska *total sum of squares*, SST) är summan av SSR och SSE. SST kan tolkas som mängden variation som förekommer i [\\(Y\\)]{.math .inline} innan regressionsmodellen estimeras. SST skrivas som summan av den kvadrerade differensen mellan observerade [\\(Y\_{i}\\)]{.math .inline} och medelvärdet [\\(\\overline{Y}\\)]{.math .inline}:

[\\(SST = SSE + SSR\\)]{.math .inline} (3)

[\\(\\sum\_{i}\^{n}\\left( Y\_{i} - \\overline{Y} \\right)\^{2} = \\sum\_{i}\^{n}\\left( \\widehat{Y\_{i}} - \\overline{Y\_{i}} \\right)\^{2} + \\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline}

#### Skillnaden mellan SSR, SSE och SST

Ett sätt att illustrera skillnaderna mellan SSR, SSE och SST ges i figur 2. Vi använder här återigen de fyra observationerna för [\\(X = 3,4,6,7\\)]{.math .inline} och [\\(Y = 2,3,4,5\\)]{.math .inline} som vi använde i vårt första exempel på regressionsanalys (se [avsnitt 2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0)). I diagrammet i figur 1 markerar vi residualerna med streckade vertikala linjer mellan [\\(Y\_{i}\\ \\)]{.math .inline} och regressionslinjens [\\(\\widehat{Y\_{i}}\\)]{.math .inline}.

**Figur 2. Differenserna mellan** [\\(\\overline{Y}\\)]{.math .inline}, [\\(\\widehat{Y}\\)]{.math .inline} och [\\(Y\_{i}\\)]{.math .inline}

![A graph of a function Description automatically generated](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\3%20-%20Minstakvadratmetoden%20fördjupning%201%20mer%20matte\3-2%20-%20En%20modell%20till/img/k2-3-2-image2.png){style="width:3.99306in;height:2.88451in"}

Förklaring: Figuren illustrerar hur avstånden i diagrammet motsvaras av differenser mellan värdena för observationerna [\\(Y\_{i}\\)]{.math .inline}, deras medelvärde [\\(\\overline{Y}\\)]{.math .inline} och estimerade [\\(\\widehat{Y}\\)]{.math .inline}.

#### Determinationskoefficienten, [\\(R\^{2}\\)]{.math .inline}

Utifrån kvadratsummorna kan vi skatta determinationskoefficienten (på engelska *coefficient of determination*), vilken brukar skrivas som [\\(R\^{2}\\)]{.math .inline}:

[\\(R\^{2} = \\frac{SSE}{SST} = \\frac{SST - SSR}{SST} = 1 - \\frac{SSR}{SST} = 1 - \\frac{\\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}}{\\sum\_{i}\^{n}\\left( Y\_{i} - \\overline{Y} \\right)\^{2}}\\)]{.math .inline} (4)

[\\(R\^{2}\\)]{.math .inline} mäter hur stor andel av variationen i den förklarade variabeln, till exempel [\\(Y\\)]{.math .inline}, som kan förklaras av regressionsmodellen och variationen i den förklarande variabeln, till exempel [\\(X\\)]{.math .inline}. [\\(R\^{2}\\)]{.math .inline} kan anta värden mellan 0 och 1.

[\\(R\^{2} = 0\\)]{.math .inline} betyder att ingenting av variationen i [\\(Y\\)]{.math .inline} kan förklaras av regressionsmodellen och variationen i [\\(X\\)]{.math .inline}. [\\(R\^{2} = 1\\)]{.math .inline} betyder att all variation i variabel [\\(Y\\)]{.math .inline} förklaras av regressionsmodellen och variationen i variabel [\\(X\\)]{.math .inline}.

### Observera att förkortningar varierar ibland. Vi använder här SSR = Sum of Squared Residuals. Andra använder till exempel RSS = Residual Sum of Squares. Båda betyder samma sak. När du läser andra texter, kontrollera alltid vad en förkortning syftar på matematiskt.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-3-2"]=[  {    "id": "k2-3-2-001",    "name": "Uppgift 1",    "exercise": "En regressionsmodell \\(Z = \\alpha + \\beta K + \\epsilon\\) estimeras med fyra observationer. Givna summor: \\(\\sum(K_i - \\overline{K})(Z_i - \\overline{Z}) = -8\\) och \\(\\sum(K_i - \\overline{K})^2 = 16\\). Beräkna lutningskoefficienten: \\[\\widehat{\\beta} = \\frac{\\sum(K_i - \\overline{K})(Z_i - \\overline{Z})}{\\sum(K_i - \\overline{K})^2}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "-0.5" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. -0.5)",    "error": { "message": "Sätt in värdena direkt: \\(\\widehat{\\beta} = \\frac{-8}{16}\\). Beräkna detta bråk." },    "correct": { "message": "Rätt! \\(\\widehat{\\beta} = \\frac{-8}{16} = -\\frac{1}{2} = -0{,}5\\). Det negativa tecknet innebär att regressionslinjens lutning är negativ — det finns en negativ samvariation mellan \\(Z\\) och \\(K\\)." }  },  {    "id": "k2-3-2-002",    "name": "Uppgift 2",    "exercise": "Med \\(\\widehat{\\beta} = -\\frac{1}{2}\\), \\(\\overline{Z} = 1{,}5\\) och \\(\\overline{K} = 2\\) beräknas konstanttermen: \\[\\widehat{\\alpha} = \\overline{Z} - \\widehat{\\beta}\\,\\overline{K}\\] Vilket värde får \\(\\widehat{\\alpha}\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "2.5" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. 2.5)",    "error": { "message": "Sätt in värdena: \\(\\widehat{\\alpha} = 1{,}5 - (-\\frac{1}{2}) \\cdot 2\\). Observera att minus gånger minus ger plus." },    "correct": { "message": "Rätt! \\(\\widehat{\\alpha} = 1{,}5 - (-0{,}5) \\cdot 2 = 1{,}5 + 1 = 2{,}5\\). Regressionslinjen kan därför skrivas som \\(\\widehat{Z}_i = 2{,}5 - \\frac{1}{2}K_i\\)." }  },  {    "id": "k2-3-2-003",    "name": "Uppgift 3",    "exercise": "Med regressionslinjen \\(\\widehat{Z}_i = 2{,}5 - \\frac{1}{2}K_i\\) och observation 3 där \\(K_3 = 4\\) och \\(Z_3 = 0\\): vad är residualen \\(\\widehat{\\epsilon}_3 = Z_3 - \\widehat{Z}_3\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\widehat{\\epsilon}_3 = 1{,}5\\)",          "\\(\\widehat{\\epsilon}_3 = -0{,}5\\)",          "\\(\\widehat{\\epsilon}_3 = 0{,}5\\)",          "\\(\\widehat{\\epsilon}_3 = -1{,}5\\)"        ],        "correct": "\\(\\widehat{\\epsilon}_3 = -0{,}5\\)"      }    },    "error": { "message": "Beräkna först \\(\\widehat{Z}_3 = 2{,}5 - \\frac{1}{2} \\cdot 4\\). Sedan är residualen \\(Z_3 - \\widehat{Z}_3 = 0 - \\widehat{Z}_3\\)." },    "correct": { "message": "Rätt! \\(\\widehat{Z}_3 = 2{,}5 - 0{,}5 \\cdot 4 = 2{,}5 - 2 = 0{,}5\\). Residualen är \\(\\widehat{\\epsilon}_3 = 0 - 0{,}5 = -0{,}5\\)." }  },  {    "id": "k2-3-2-004",    "name": "Uppgift 4",    "exercise": "Vilket av följande påståenden om \\(R^2\\) (determinationskoefficienten) är korrekt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(R^2\\) kan anta negativa värden om modellen passar dåligt",          "\\(R^2\\) mäter andelen av variationen i \\(Y\\) som förklaras av regressionsmodellen och antar värden mellan 0 och 1",          "\\(R^2 = 1\\) innebär alltid att det finns ett kausalt samband",          "Ett högt \\(R^2\\) garanterar alltid att modellen är bra"        ],        "correct": "\\(R^2\\) mäter andelen av variationen i \\(Y\\) som förklaras av regressionsmodellen och antar värden mellan 0 och 1"      }    },    "error": { "message": "Läs definitionerna av \\(R^2\\) i begreppslistan. Tänk på intervallet \\(R^2\\) kan anta och vad det mäter." },    "correct": { "message": "Rätt! \\(R^2\\) antar värden mellan 0 och 1, där 0 betyder att modellen inte förklarar något och 1 att modellen förklarar all variation. Viktigt: ett högt \\(R^2\\) säger ingenting om orsakssamband." }  },  {    "id": "k2-3-2-005",    "name": "Uppgift 5",    "exercise": "För regressionsmodellen \\(\\widehat{Z}_i = 2{,}5 - 0{,}5K_i\\) med observationer \\(K = \\{1, 2, 4, 1\\}\\) och \\(Z = \\{2, 2, 0, 1\\}\\): de fyra residualerna är \\(0\\), \\(-0{,}5\\), \\(-0{,}5\\) och \\(0\\) (avrundade). Beräkna summan av de kvadrerade residualerna: \\[\\sum_{i=1}^{4}\\widehat{\\epsilon}_i^2\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. 0.5)",    "error": { "message": "Kvadrera varje residual: \\(0^2 = 0\\), \\((-0{,}5)^2 = 0{,}25\\), \\((-0{,}5)^2 = 0{,}25\\), \\(0^2 = 0\\). Summera sedan." },    "correct": { "message": "Rätt! \\(\\sum\\widehat{\\epsilon}_i^2 = 0 + 0{,}25 + 0{,}25 + 0 = 0{,}5\\). Minstakvadratmetoden garanterar att ingen annan rät linje ger en lägre summa av kvadrerade residualer för dessa data." }  }];</script>
<div class="exercise-section" data-section-id="k2-3-2"></div>

## Hur väl passar modellerna mot data? {#k2-3-3}

### Begrepp

- **Medelkvadratsumman för residualerna** (engelska *mean squared residuals*, MSR):\
  [\\(MSR = \\frac{SSR}{n - p} = \\frac{\\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}}{n - p}\\)]{.math .inline}

- **Medelkvadratsumman av den förklarade variationen** (engelska *mean sum of squares explained*, MSE): *\*
  [\\(MSE = \\frac{SSE}{p - 1} = \\frac{\\sum\_{i}\^{n}\\left( \\widehat{Y\_{i}} - \\overline{Y\_{i}} \\right)\^{2}}{p - 1}\\)]{.math .inline}

### Teori

I tidigare avsnitt har vi estimerat två olika regressionsmodeller. Varje modell utgick från fyra observationer vardera. Regressionsanalys är ett sätt att studera mönster i data. Vi kan använda våra regressionsmodeller för att pröva i vilken utsträckning som det mönster som en regressionsmodell beskriver faktiskt återfinns i våra data.

Att estimera koefficienterna i regressionsmodellen är då endast första steget i en regressionsanalys. Därefter vill vi jämföra hur väl mönstret i vår regressionsmodell faktiskt stämde med det mönster som fanns i observationerna. Detta är ett vanligt tillvägagångssätt och därför viktigt att känna till.

#### Medelkvadratsumman

För att studera hur väl en regressionsmodell passar mot data kan vi även jämföra medelkvadratsumman. Medelkvadratsumman för residualerna (engelska *mean squared residuals*, MSR) beräknas:

[\\(MSR = \\frac{SSR}{n - p} = \\frac{\\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}}{n - p}\\)]{.math .inline} (5)

Nämnaren [\\(n - p\\)]{.math .inline} visar antal frihetsgrader, där [\\(n\\)]{.math .inline} är antal observationer och [\\(p\\)]{.math .inline} är antal estimerade koefficienter i regressionsmodellen. Frihetsgrader anger hur många \"fria\" värden vi har kvar efter att ha estimerat koefficienterna: [\\(n\\)]{.math .inline} = antal observationer (här 4). [\\(p\\)]{.math .inline} = antal estimerade koefficienter (här 2: [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline}). [\\(n - p\\)]{.math .inline} = frihetsgrader [\\((4\\ - \\ 2\\ = \\ 2)\\)]{.math .inline}. Med 4 observationer och 2 koefficienter har vi \"använt upp\" 2 frihetsgrader för att estimera koefficienterna. Vi har 2 frihetsgrader kvar för att mäta variation kring regressionslinjen.

Förenklat kan ett lågt MSR innebära att regressionsmodellens predikterade [\\(\\widehat{Y}\\)]{.math .inline} hamnar relativt nära observationerna [\\(Y\\)]{.math .inline}.

#### Medelkvadratsumman av den förklarade variationen

Medelkvadratsumman av den förklarade variationen är SSE dividerat med antal förklarande variabler (engelska mean sum of squares explained, MSE):

[\\(MSE = \\frac{SSE}{p - 1} = \\frac{\\sum\_{i}\^{n}\\left( \\widehat{Y\_{i}} - \\overline{Y\_{i}} \\right)\^{2}}{p - 1}\\)]{.math .inline} (6)

I täljaren tar vi [\\(p\\)]{.math .inline}, antal estimerade koefficienter, minus 1 eftersom koefficient [\\(a\\)]{.math .inline} inte multipliceras med någon förklarande variabel.

#### Låt oss jämföra två regressionsmodeller

I tidigare avsnitt har vi använt två olika samlingar med observationer för att utifrån minstakvadratmetoden estimera de två regressionsmodellerna från [avsnitt 2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0) och [avsnitt 3.2](https://www.dropbox.com/scl/fi/mvvykgc4cvkvdgxcbcq4x/3-2-En-modell-till.docx?rlkey=pfuhm3ijlm56lxoq339rhms2c&dl=0):

Modell 1: [\\(Y = a + bX + V\\)]{.math .inline} (7)

Modell 2: [\\(Z = \\alpha + \\beta K + \\epsilon\\)]{.math .inline}

Tabell 2 och 3 återger observationerna vi använde för att estimera respektive tabell och några beräkningar vi nu ska använda i vår jämförelse.

**Tabell 2: Observationer och beräkningar för modell 1**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation i    [\\\[X\_{i}\\\]]{.math .display}   [\\\[Y\_{i}\\\]]{.math .display}   [\\\[\\widehat{Y\_{i}}\\\]]{.math .display}   [\\\[Y\_{i} - \\widehat{Y\_{i}}\\\]]{.math .display}   [\\\[Y\_{i} - \\overline{Y}\\\]]{.math .display}   [\\\[\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\\]]{.math .display}
  --------------- ---------------------------------- ---------------------------------- --------------------------------------------- ------------------------------------------------------ -------------------------------------------------- ----------------------------------------------------------------------------
  1                               3                                  3                                       2,5                                               0,5                                                  -0,5                                                            0,25

  2                               4                                  2                                        3                                                 -1                                                  -1,5                                                             1

  3                               6                                  5                                        4                                                 1                                                   1,5                                                              1

  4                               7                                  4                                       4,5                                               -0,5                                                 0,5                                                             0,25

  Medel                           5                                 3,5                                                                                                                                                                         

  Summa                                                                                                                                                                                                             2,5                                                              5
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Förklaring: se text.

**Tabell 3: Observationer och beräkningar för modell 2**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation i    [\\\[Z\_{i}\\\]]{.math .display}   [\\\[K\_{i}\\\]]{.math .display}   [\\\[\\widehat{Z\_{i}}\\\]]{.math .display}   [\\\[\\widehat{\\epsilon\_{i}} = Z\_{i} - \\widehat{Z\_{i}}\\\]]{.math .display}   [\\\[Z\_{i} - \\overline{Z\_{i}}\\\]]{.math .display}   [\\\[\\left( Z\_{i} - \\widehat{Z\_{i}} \\right)\^{2}\\\]]{.math .display}
  --------------- ---------------------------------- ---------------------------------- --------------------------------------------- ---------------------------------------------------------------------------------- ------------------------------------------------------- ----------------------------------------------------------------------------
  1                               1                                  0                                       2,5                                                            --1,5                                                                 --0,5                                                              2,25

  2                               4                                  0                                       2,5                                                             1,5                                                                   2,5                                                               2,25

  3                               0                                  4                                       0,5                                                             -0,5                                                                 --1,5                                                              0,25

  4                               1                                  4                                       0,5                                                             0,5                                                                  --0,5                                                              0,25

  Medel                          1,5                                 2                                                                                                                                                                                                           

  Summa                                                                                                                                                                                                                                             5                                                                 9
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Förklaring: se text.

Nu ska vi jämföra vilken av modellerna som passar bäst mot deras respektive datapunkter. Vi börjar med att beräkna MSR för respektive regressionsmodell. Tabell 2 upprepar observationerna för modell 1 och variablerna [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} samt några beräkningar som vi behöver. Detta ger MSR:

[\\(MSR\_{modell\\ 1} = \\frac{\\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}}{n - p} = \\frac{2,5}{2} = 1,25\\)]{.math .inline} (8)

Låt oss beräkna MSR även för regressionsmodell 2: [\\(Z = \\alpha + \\beta K + \\epsilon\\)]{.math .inline}. Tabell 3 upprepar variablernas värden och sammanfattar några beräkningar. Detta ger följande MSR:

[\\(MSR\_{modell\\ 2} = \\frac{5}{2} = 2,5\\)]{.math .inline} (9)

Eftersom [\\(MSR\_{modell\\ 2} \> MSR\_{modell\\ 1}\\)]{.math .inline} indikerar på att den första regressionsmodellens predikterade [\\(\\widehat{Y}\\)]{.math .inline} ligger närmare observerade [\\(Y\\)]{.math .inline}, jämfört med hur väl den andra regressionsmodellen lyckas prediktera den förklarade variabeln [\\(Z\\)]{.math .inline} i den modellen.

MSR beräknas med hjälp av observationerna vi använder och resultatet kan därför ändras om vi lägger till eller drar ifrån observationer, alternativt om vi specificerar våra regressionsmodeller på något annat sätt.

### Vi beräknar [\\(R\^{2}\\)]{.math .inline} för båda modellerna

Låt oss även skatta [\\(R\^{2}\\)]{.math .inline}. För den första regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline} får vi (se tabell 2):

[\\(R\_{modell\\ 1}\^{2} = 1 - \\frac{\\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}}{\\sum\_{i}\^{n}\\left( Y\_{i} - \\overline{Y} \\right)\^{2}} = 1 - \\frac{2,5}{5} = \\frac{1}{2}\\)]{.math .inline} (10)

Resultat [\\(R\^{2} = \\frac{1}{2}\\)]{.math .inline} indikerar att hälften av variationen i [\\(Y\\)]{.math .inline} kan förklaras av regressionsmodellen och variationer i [\\(X\\)]{.math .inline}. Låt oss beräkna [\\(R\^{2}\\ \\)]{.math .inline}för den andra regressionsmodellen [\\(Z = \\alpha + \\beta K + \\epsilon\\)]{.math .inline} (se tabell 3):

[\\(R\_{modell\\ 2}\^{2} = 1 - \\frac{\\sum\_{i}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}}{\\sum\_{i}\^{n}\\left( Y\_{i} - \\overline{Y} \\right)\^{2}} = 1 - \\frac{5}{9} = \\frac{4}{9}\\)]{.math .inline} (11)

Eftersom [\\(\\frac{4}{9} \< \\frac{1}{2}\\)]{.math .inline} indikerar detta att den första regressionsmodellen har högre förklaringsgrad jämfört med den andra modellen. Modell 1 passar därför, enligt detta mått, bättre mot den data som vi använde för att estimera modellen, jämfört med hur modell 2 passar mot den data vi använde för att estimera den modellen.

Detta betyder att 50 % av variationen i [\\(Y\\)]{.math .inline} förklaras av [\\(X\\)]{.math .inline}. 50 % av variationen i [\\(Y\\)]{.math .inline} beror på andra faktorer (residualerna). Ett högre [\\(R\^{2}\\)]{.math .inline} betyder att modellen \"passar bättre\" mot data, men det betyder inte automatiskt att modellen är bra. Ett högt eller lågt [\\(R\^{2}\\)]{.math .inline} säger inte heller nödvändigtvis något om orsakssamband.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-3-3"]=[  {    "id": "k2-3-3-001",    "name": "Uppgift 1",    "exercise": "För en regressionsmodell \\(Y = a + bX + V\\) med fyra observationer gäller: \\(\\sum(Y_i - \\widehat{Y}_i)^2 = 2{,}5\\) och \\(n - p = 4 - 2 = 2\\). Beräkna medelkvadratsumman för residualerna: \\[MSR = \\frac{\\sum(Y_i - \\widehat{Y}_i)^2}{n - p}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.25" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. 1.25)",    "error": { "message": "Sätt in värdena direkt: \\(MSR = \\frac{2{,}5}{2}\\). Dividera täljaren med nämnaren." },    "correct": { "message": "Rätt! \\(MSR = \\frac{2{,}5}{2} = 1{,}25\\). Frihetsgrader \\(n - p = 4 - 2 = 2\\) eftersom vi har 4 observationer och 2 estimerade koefficienter (\\(a\\) och \\(b\\))." }  },  {    "id": "k2-3-3-002",    "name": "Uppgift 2",    "exercise": "För en regressionsmodell \\(Z = \\alpha + \\beta K + \\epsilon\\) med fyra observationer gäller: \\(\\sum(Z_i - \\widehat{Z}_i)^2 = 5\\) och \\(n - p = 2\\). Beräkna: \\[MSR = \\frac{\\sum(Z_i - \\widehat{Z}_i)^2}{n - p}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "2.5" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. 2.5)",    "error": { "message": "Använd formeln \\(MSR = \\frac{SSR}{n-p}\\). Sätt in \\(SSR = 5\\) och \\(n - p = 2\\)." },    "correct": { "message": "Rätt! \\(MSR = \\frac{5}{2} = 2{,}5\\). Jämfört med regressionen Y på X (MSR = 1,25) är MSR här högre (2,5 > 1,25), vilket indikerar att regressionen Y på X har predikterade värden som ligger närmare de observerade." }  },  {    "id": "k2-3-3-003",    "name": "Uppgift 3",    "exercise": "Medelkvadratsumman för residualerna beräknas som \\[MSR = \\frac{\\sum(Y_i - \\widehat{Y}_i)^2}{n - p}\\] Vad innebär ett lägre MSR vid jämförelse av två regressionsmodeller?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Modellen har fler observationer",          "Modellens predikterade värden \\(\\widehat{Y}\\) hamnar relativt nära observationerna \\(Y\\)",          "Modellen har ett mer negativt lutningskoefficient",          "Modellen har fler förklarande variabler"        ],        "correct": "Modellens predikterade värden \\(\\widehat{Y}\\) hamnar relativt nära observationerna \\(Y\\)"      }    },    "error": { "message": "MSR mäter genomsnittlig kvadrerad residual. Tänk på vad en liten residual innebär för hur väl linjen passar mot data." },    "correct": { "message": "Rätt! Ett lägre MSR innebär att regressionsmodellens predikterade \\(\\widehat{Y}\\) i genomsnitt hamnar relativt nära de observerade värdena \\(Y\\). Regressionen Y på X (MSR = 1,25) passar alltså bättre än regressionen Z på K (MSR = 2,5) mot sina respektive data." }  },  {    "id": "k2-3-3-004",    "name": "Uppgift 4",    "exercise": "För en regressionsmodell \\(Y = a + bX + V\\) med fyra observationer gäller \\(\\sum(Y_i - \\widehat{Y}_i)^2 = 2{,}5\\) och \\(\\sum(Y_i - \\overline{Y})^2 = 5\\). Beräkna \\(R^2\\): \\[R^2 = 1 - \\frac{\\sum(Y_i - \\widehat{Y}_i)^2}{\\sum(Y_i - \\overline{Y})^2} = 1 - \\frac{2{,}5}{5}\\] Vilket värde får \\(R^2\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(R^2 = 0{,}25\\)",          "\\(R^2 = 0{,}75\\)",          "\\(R^2 = 0{,}5\\)",          "\\(R^2 = 1\\)"        ],        "correct": "\\(R^2 = 0{,}5\\)"      }    },    "error": { "message": "Beräkna: \\(1 - \\frac{2{,}5}{5} = 1 - 0{,}5 = ?\\)" },    "correct": { "message": "Rätt! \\(R^2 = 1 - \\frac{2{,}5}{5} = 1 - 0{,}5 = 0{,}5\\). Det innebär att 50 % av variationen i \\(Y\\) förklaras av \\(X\\). De övriga 50 % beror på andra faktorer (residualerna)." }  },  {    "id": "k2-3-3-005",    "name": "Uppgift 5",    "exercise": "För en regressionsmodell \\(Z = \\alpha + \\beta K + \\epsilon\\) gäller \\(\\sum(Z_i - \\widehat{Z}_i)^2 = 5\\) och \\(\\sum(Z_i - \\overline{Z})^2 = 9\\), vilket ger \\(R^2 = 1 - \\frac{5}{9} = \\frac{4}{9}\\). Regressionen Y på X (från uppgift 4) hade \\(R^2 = 0{,}5\\). Vilken regression har högst förklaringsgrad och vad kan vi dra för slutsats?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Regressionen Z på K, eftersom \\(\\frac{4}{9} > \\frac{1}{2}\\)",          "Regressionen Y på X, eftersom \\(\\frac{1}{2} > \\frac{4}{9}\\), vilket innebär att den passar bättre mot sin data",          "Regressionen Y på X, och det bevisar att det finns ett kausalt samband",          "Båda regressionerna har samma förklaringsgrad"        ],        "correct": "Regressionen Y på X, eftersom \\(\\frac{1}{2} > \\frac{4}{9}\\), vilket innebär att den passar bättre mot sin data"      }    },    "error": { "message": "Jämför \\(\\frac{1}{2}\\) och \\(\\frac{4}{9}\\): omvandla till decimaltal. \\(\\frac{1}{2} = 0{,}5\\) och \\(\\frac{4}{9} \\approx 0{,}444\\). Vilket är störst?" },    "correct": { "message": "Rätt! \\(\\frac{1}{2} = 0{,}5 > \\frac{4}{9} \\approx 0{,}444\\), så regressionen Y på X har högre \\(R^2\\) och därmed högre förklaringsgrad. Viktigt: ett högt \\(R^2\\) säger inte nödvändigtvis något om orsakssamband, och jämförelsen görs mot respektive regressions egna data." }  }];</script>
<div class="exercise-section" data-section-id="k2-3-3"></div>

## Härled estimatorerna {#k2-3-4}

### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

Detta avsnitt är matematiskt intensivt och INTE nödvändigt för att använda regressionsanalys i praktiken. Om du känner att matematiken blir för tung kan du hoppa över detta avsnitt för nu och komma tillbaka senare om du vill förstå metoderna mer på djupet. Fokusera på att förstå vad estimatorerna gör. Det är inte avgörande att förstå varje steg i härledningarna.

Varför bry sig om härledningen?

1.  Det ger djupare förståelse för minstakvadratmetodens logik.

2.  Det visar att metoderna bygger på genomtänkt matematik.

3.  Det förbereder dig för mer avancerade metoder senare.

#### Utgångspunkter

För regressionsmodellen [\\(Y\_{i} = a + bX\_{i} + V\_{i}\\)]{.math .inline} där [\\(Y\_{i}\\)]{.math .inline} och [\\(X\_{i}\\)]{.math .inline} är variabler och [\\(V\_{i}\\)]{.math .inline} är felterm, introducerade vi estimatorer för koefficienterna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} i avsnitt 2.5:

[\\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X}\\)]{.math .inline} (1)

[\\(\\widehat{b} = \\frac{\\sum\_{i}\^{}{\\left( X\_{i} - \\overline{X} \\right)\\left( Y\_{i} - \\overline{Y} \\right)}}{\\sum\_{i}\^{}\\left( X\_{i} - \\overline{X} \\right)\^{2}}\\)]{.math .inline}

Nu ska vi gå igenom hur vi kan härleda estimatorerna. Minstakvadratmetoden låter oss definiera estimatorerna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} så att vi minimerar summan av de kvadrerade residualerna

[\\(\\sum\_{i}\^{}{\\widehat{V}}\_{i}\^{2} = \\sum\_{}\^{}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline} (2)

Estimatorerna kan därför härledas ur ett minimeringsproblem. Om du känner dig osäker på maximeringsproblem och minimeringsproblem, se Mattebokens avsnitt om [största och minsta värde under matte 3](https://www.matteboken.se/lektioner/matte-3/derivatan-och-grafen/storsta-och-minsta-varde#!/).

Summan av de kvadrerade residualerna blir:

[\\(\\sum\_{i = 1}\^{n}{\\widehat{V}}\_{i}\^{2} = {\\widehat{V}}\_{i}\^{2} + {\\widehat{V}}\_{i}\^{2} + \\ldots + {\\widehat{V}}\_{i}\^{2}\\)]{.math .inline} (3)[\\( \\)]{.math .inline}[\\\[{= \\left( Y\_{1} - \\widehat{Y\_{1}} \\right)\^{2} + \\left( Y\_{2} - \\widehat{Y\_{2}} \\right)\^{2} + \\ldots + \\left( Y\_{n} - \\widehat{Y\_{n}} \\right)\^{2} }{= \\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}}\\\]]{.math .display}

där n är antal observationer, [\\(\\widehat{Y}\\)]{.math .inline} är predikterade [\\(Y\\)]{.math .inline}. För att kunna skatta [\\(\\widehat{Y} = \\widehat{a} + \\widehat{b}X\\)]{.math .inline} behöver vi estimera [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}. Vi börjar med att sätta in denna definition av [\\(\\widehat{Y}\\)]{.math .inline} i uttrycket från ekvation 3:

[\\(\\sum\_{i = 1}\^{n}{\\widehat{V}}\_{i}\^{2} = \\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline} (4)

[\\\[= \\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\left( \\widehat{a} + \\widehat{b}X\_{i} \\right) \\right)\^{2}\\\]]{.math .display}

[\\\[= \\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} \\right)\^{2}\\\]]{.math .display}

#### Minimera summan av kvadrerade residualerna

Nu har vi en ekvation där summan av kvadrerade residualerna [\\(\\sum\_{i}\^{}\\widehat{{V\_{i}}\^{2}}\\)]{.math .inline} är en funktion av estimerade [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}. Det är denna funktion som vi ska minimera med hänsyn till [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}, vilket vi kan skriva som ett minimeringsproblem:

[\\(\\min\_{\\text{m.h.t. }\\widehat{a},\\widehat{b}}{\\sum\_{i = 1}\^{n}{\\widehat{V}}\_{i}\^{2}} = \\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} \\right)\^{2}\\)]{.math .inline} (5)

Vi deriverar högerledet med hänsyn till [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}. Detta ger oss två ekvationer som kallas \"förstagradsvillkor\" (eller \"första ordningens villkor\"), alltså villkor som måste uppfyllas vid en minimumpunkt eller maximumpunkt.

[\\(\\left\\lbrack \\sum\_{i = 1}\^{n}{\\widehat{V}}\_{i}\^{2} \\right\\rbrack\_{\\widehat{a}}\' = - 2\\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} \\right) = 0\\)]{.math .inline} (6)

[\\(\\left\\lbrack \\sum\_{i = 1}\^{n}{\\widehat{V}}\_{i}\^{2} \\right\\rbrack\_{\\widehat{b}}\' = - 2\\sum\_{i = 1}\^{n}{X\_{i}(Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i})} = 0\\)]{.math .inline}

där båda resultaten uppstår genom att vi deriverar parentesen (flyttar ned exponent 2) och deriverar innehållet i respektive parentes. När vi deriverar med hänsyn till [\\(\\widehat{a}\\)]{.math .inline} får vi --1. När vi deriverar med hänsyn till [\\(\\widehat{b}\\)]{.math .inline} får vi [\\(--X\_{i}\\)]{.math .inline}. Vi sätter -2 till vänster om summeringstecknet eftersom dessa saker inte berörs av summeringen.

Notera att det första villkoret i ekvation 6 innebär att [\\(\\sum\_{i}\^{}\\widehat{V\_{i}} = 0\\)]{.math .inline} och det andra villkoret kan beskrivas som: [\\(\\sum\_{}\^{}X\_{i}\\widehat{V\_{i}} = 0\\)]{.math .inline}. Detta kommer vi att ha användning av längre fram.

#### Lösa ut [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}

Från de två förstagradsvillkoren i ekvation 6 kan vi lösa ut [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}. Vi börjar med det första villkoret:

[\\(- 2\\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} \\right) = 0\\)]{.math .inline} (7)

[\\(( - 2)\\sum\_{i = 1}\^{n}{Y\_{i} - ( - 2)}\\sum\_{i = 1}\^{n}{\\widehat{a} - ( - 2)}\\sum\_{i = 1}\^{n}{\\widehat{b}X\_{i}} = 0\\)]{.math .inline}

Eftersom alla termer är multiplicerade med -2 kan vi stryka denna faktor. Eftersom [\\(\\widehat{a}\\)]{.math .inline} är konstant över alla observationer är termen [\\(\\sum\_{i}\^{n}\\widehat{a}\\)]{.math .inline} samma sak som antal observationer gånger [\\(\\widehat{a}\\)]{.math .inline}: [\\(\\sum\_{i}\^{n}\\widehat{a} = n\\widehat{a}\\)]{.math .inline}. Vi kan nu skriva:

[\\(0 = ( - 2)\\sum\_{i = 1}\^{n}{Y\_{i}\\ - ( - 2)}\\sum\_{i = 1}\^{n}{\\widehat{a} - ( - 2)}\\sum\_{i = 1}\^{n}{\\widehat{b}X\_{i}}\\)]{.math .inline} (8)[\\( \\)]{.math .inline}[\\\[{0 = \\sum\_{i = 1}\^{n}Y\_{i} - \\sum\_{i = 1}\^{n}\\widehat{a}\\sum\_{i = 1}\^{n}{\\widehat{b}X\_{i}} }{0 = \\sum\_{i = 1}\^{n}Y\_{i} - n\\widehat{a} - \\sum\_{i = 1}\^{n}{\\widehat{b}X\_{i}} }{n\\widehat{a} = \\sum\_{i = 1}\^{n}Y\_{i} - \\sum\_{i = 1}\^{n}{\\widehat{b}X\_{i}}\\ }\\\]]{.math .display}

Vi dividerar med [\\(n\\)]{.math .inline} så att termen längst till höger blir [\\(\\frac{1}{n}\\sum\_{}\^{}{\\widehat{b}X\_{i}}\\)]{.math .inline}. Medelvärdet för [\\(X\\)]{.math .inline} kan skrivas [\\(\\overline{X} = \\frac{1}{n}\\sum\_{i}\^{n}X\_{i}\\)]{.math .inline} vilket ger:

[\\(\\widehat{a} = \\frac{1}{n}\\sum\_{i = 1}\^{n}Y\_{i} - \\frac{1}{n}\\sum\_{i = 1}\^{n}{\\widehat{b}X}\\)]{.math .inline} (9)

[\\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X}\\)]{.math .inline}

Nu har vi ett uttryck för [\\(\\widehat{a}\\)]{.math .inline}. För att härleda [\\(\\widehat{b}\\)]{.math .inline} börjar vi med det andra förstagradsvillkoret i ekvation 7:

[\\(0 = \\sum\_{i = 1}\^{n}{- 2x\_{i}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} \\right)}\\)]{.math .inline} (10)

[\\(= \\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\sum\_{i = 1}\^{n}X\_{i}\\widehat{a} - \\sum\_{i = 1}\^{n}X\_{i}\\widehat{b}X\_{i}\\)]{.math .inline}

Eftersom konstanterna inte summeras flyttar vi dessa till vänster om summatecknen. I termen längst till höger har vi [\\(x\_{i}\*x\_{i} = x\_{i}\^{2}\\)]{.math .inline}. Vi byter ut [\\(\\widehat{a}\\)]{.math .inline} mot definitionen från ekvation 9:

[\\(0 = \\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\widehat{a}\\sum\_{i = 1}\^{n}X\_{i} - \\widehat{b}\\sum\_{i = 1}\^{n}X\_{i}X\_{i}\\)]{.math .inline} (11)

[\\\[= \\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\widehat{a}\\sum\_{i = 1}\^{n}X\_{i} - \\widehat{b}\\sum\_{i = 1}\^{n}X\_{i}\^{2}\\\]]{.math .display}

[\\\[= \\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\left( \\overline{Y} - \\widehat{b}\\overline{X} \\right)\\sum\_{i = 1}\^{n}X\_{i} - \\widehat{b}\\sum\_{i = 1}\^{n}X\_{i}\^{2}\\\]]{.math .display}

[\\\[= \\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\overline{Y}\\sum\_{i = 1}\^{n}X\_{i} + \\widehat{b}\\overline{X}\\sum\_{i = 1}\^{n}X\_{i} - \\widehat{b}\\sum\_{}\^{}X\_{i}\^{2}\\\]]{.math .display}

[\\\[= \\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\overline{Y}\\sum\_{i = 1}\^{n}X\_{i} - \\widehat{b}\\left( \\sum\_{i = 1}\^{n}X\_{i}\^{2} - \\overline{X}\\sum\_{i = 1}\^{n}X\_{i} \\right)\\\]]{.math .display}

Vi flyttar över [\\(\\widehat{b}\\)]{.math .inline} till vänstersidan av likhetstecknet:

[\\(\\widehat{b}\\left( \\sum\_{i = 1}\^{n}X\_{i}\^{2} - \\overline{X}\\sum\_{i = 1}\^{n}X\_{i} \\right) = \\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\overline{Y}\\sum\_{i = 1}\^{n}X\_{i}\\)]{.math .inline} (12)

[\\\[\\widehat{b} = \\frac{\\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\overline{Y}\\sum\_{i = 1}\^{n}X\_{i}}{\\sum\_{i = 1}\^{n}X\_{i}\^{2} - \\overline{X}\\sum\_{i = 1}\^{n}X\_{i}}\\\]]{.math .display}

Nu har vi ett uttryck för [\\(\\widehat{b}\\)]{.math .inline}. För att visa att detta är samma som uttrycket i ekvation 1 och [avsnitt 2.5](https://www.dropbox.com/scl/fi/fdixvbrl3fwqwuaknz604/2-5-Felterm-residual-och-ett-r-kneexempel.docx?rlkey=qerqdzrn6e5hejx1it85qrtun&st=33su91fr&dl=0) kan vi skriva om täljaren och nämnaren. Detta ger:

[\\(\\widehat{b} = \\frac{\\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\overline{Y}\\sum\_{i = 1}\^{n}Y\_{i}}{\\sum\_{i = 1}\^{n}X\_{i}\^{2} - \\overline{X}\\sum\_{i = 1}\^{n}X\_{i}}\\)]{.math .inline} (13)

[\\\[= \\frac{\\sum\_{i = 1}\^{n}X\_{i}Y\_{i} - \\overline{Y}\\sum\_{i}\^{}X\_{i} - \\overline{X}\\sum\_{i = 1}\^{n}Y\_{i} + \\overline{X}\\sum\_{i = 1}\^{n}Y\_{i}}{\\sum\_{i = 1}\^{n}X\_{i}\^{2} - \\overline{X}\\sum\_{i = 1}\^{n}X\_{i} - n\\overline{X\^{2}} + n\\overline{X\^{2}}}\\\]]{.math .display}

[\\\[\\frac{\\sum\_{i = 1}\^{n}{\\left( X\_{i} - \\overline{X} \\right)\\left( Y\_{i} - \\overline{Y} \\right)}}{\\sum\_{I = 1}\^{n}\\left( X\_{i} - \\overline{X} \\right)\^{2}}\\\]]{.math .display}

Nu har vi samma sak som ekvation 1.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-3-4"]=[  {    "id": "k2-3-4-001",    "name": "Uppgift 1",    "exercise": "Minstakvadratmetoden härleder estimatorerna \\(\\widehat{a}\\) och \\(\\widehat{b}\\) genom att minimera ett uttryck. Vilket uttryck minimeras?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\sum_{i=1}^{n}(Y_i - \\widehat{Y}_i)\\) — summan av residualerna",          "\\(\\sum_{i=1}^{n}(Y_i - \\widehat{Y}_i)^2\\) — summan av de kvadrerade residualerna",          "\\(\\sum_{i=1}^{n}|Y_i - \\widehat{Y}_i|\\) — summan av absolutbeloppen av residualerna",          "\\(\\sum_{i=1}^{n}(Y_i - \\overline{Y})^2\\) — totalsumman av kvadrater"        ],        "correct": "\\(\\sum_{i=1}^{n}(Y_i - \\widehat{Y}_i)^2\\) — summan av de kvadrerade residualerna"      }    },    "error": { "message": "Metoden heter <em>minsta kvadrat</em>metoden. Tänk på vad som kvadreras och vad som summeras." },    "correct": { "message": "Rätt! Minstakvadratmetoden minimerar summan av de kvadrerade residualerna: \\(\\sum_{i=1}^{n}\\hat{V}_i^2 = \\sum_{i=1}^{n}(Y_i - \\hat{Y}_i)^2\\). Det är detta minimeringsproblem som löses för att hitta estimatorerna \\(\\widehat{a}\\) och \\(\\widehat{b}\\)." }  },  {    "id": "k2-3-4-002",    "name": "Uppgift 2",    "exercise": "Förstagradsvillkoret med avseende på \\(\\widehat{a}\\) för minstakvadratproblemet ger: \\[-2\\sum_{i=1}^{n}(Y_i - \\widehat{a} - \\widehat{b}X_i) = 0\\] Vilket av följande påståenden följer direkt av detta villkor?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\sum_{i}^{}\\widehat{V}_i = 0\\) — summan av residualerna är noll",          "\\(\\sum_{i}^{}\\widehat{V}_i^2 = 0\\) — summan av kvadrerade residualerna är noll",          "\\(\\widehat{a} = 0\\) — konstanttermen är alltid noll",          "\\(\\sum_{i}^{}X_i\\widehat{V}_i = 0\\) — detta är det andra förstagradsvillkoret"        ],        "correct": "\\(\\sum_{i}^{}\\widehat{V}_i = 0\\) — summan av residualerna är noll"      }    },    "error": { "message": "Uttrycket \\(Y_i - \\widehat{a} - \\widehat{b}X_i\\) är samma sak som \\(Y_i - \\widehat{Y}_i\\), det vill säga residualen \\(\\widehat{V}_i\\). Vad innebär det att summan av dessa är noll?" },    "correct": { "message": "Rätt! Förstagradsvillkoret \\(-2\\sum(Y_i - \\widehat{a} - \\widehat{b}X_i) = 0\\) innebär att \\(\\sum\\hat{V}_i = 0\\) — summan av residualerna är alltid noll när vi estimerar med minstakvadratmetoden. Detta är en viktig egenskap hos OLS-estimatorn." }  },  {    "id": "k2-3-4-003",    "name": "Uppgift 3",    "exercise": "Från förstagradsvillkoret med avseende på \\(\\widehat{a}\\) härleds estimatorn: \\[\\widehat{a} = \\overline{Y} - \\widehat{b}\\,\\overline{X}\\] Vad innebär denna formel geometriskt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Regressionslinjen passerar alltid genom origo \\((0, 0)\\)",          "Regressionslinjen passerar alltid genom punkten \\((\\overline{X}, \\overline{Y})\\) — medelvärdespunkten",          "Regressionslinjen har alltid positiv lutning",          "Regressionslinjen minimerar medelvärdet av \\(Y\\)"        ],        "correct": "Regressionslinjen passerar alltid genom punkten \\((\\overline{X}, \\overline{Y})\\) — medelvärdespunkten"      }    },    "error": { "message": "Sätt in \\(X = \\overline{X}\\) i regressionslinjens ekvation \\(\\widehat{Y} = \\widehat{a} + \\widehat{b}X\\) och använd att \\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X}\\). Vad får du för \\(\\widehat{Y}\\)?" },    "correct": { "message": "Rätt! Om vi sätter \\(X = \\overline{X}\\) i regressionsekvationen: \\(\\widehat{Y} = (\\overline{Y} - \\widehat{b}\\overline{X}) + \\widehat{b}\\overline{X} = \\overline{Y}\\). Regressionslinjen passerar alltså alltid genom medelvärdespunkten \\((\\overline{X}, \\overline{Y})\\)." }  },  {    "id": "k2-3-4-004",    "name": "Uppgift 4",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) ges estimatorn för lutningskoefficienten \\(\\widehat{b}\\) av: \\[\\widehat{b} = \\frac{\\sum_{i=1}^{n}(X_i - \\overline{X})(Y_i - \\overline{Y})}{\\sum_{i=1}^{n}(X_i - \\overline{X})^2}\\] Vad mäter täljaren i detta uttryck?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Variansen för \\(X\\)",          "Kovariansen (samvariationen) mellan \\(X\\) och \\(Y\\) — summan av produkterna av avvikelserna från respektive medelvärde",          "Variansen för \\(Y\\)",          "Summan av de kvadrerade residualerna"        ],        "correct": "Kovariansen (samvariationen) mellan \\(X\\) och \\(Y\\) — summan av produkterna av avvikelserna från respektive medelvärde"      }    },    "error": { "message": "Täljaren innehåller produkten \\((X_i - \\overline{X})(Y_i - \\overline{Y})\\). Nämnaren innehåller \\((X_i - \\overline{X})^2\\) — det är variansen för \\(X\\). Vad mäter täljaren då?" },    "correct": { "message": "Rätt! Täljaren \\(\\sum(X_i - \\overline{X})(Y_i - \\overline{Y})\\) mäter samvariationen (kovariansen, oskalad) mellan \\(X\\) och \\(Y\\). Nämnaren \\(\\sum(X_i - \\overline{X})^2\\) är variansen (oskalad) för \\(X\\). Lutningskoefficienten är alltså kovariansen dividerat med variansen för \\(X\\)." }  },  {    "id": "k2-3-4-005",    "name": "Uppgift 5",    "exercise": "Varför används derivering för att hitta estimatorerna \\(\\widehat{a}\\) och \\(\\widehat{b}\\) i minstakvadratmetoden?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Derivering används för att beräkna medelvärdet av residualerna",          "Vid en minimum- eller maximumpunkt är derivatan noll — vi deriverar SSR och sätter lika med noll för att hitta de värden på \\(\\widehat{a}\\) och \\(\\widehat{b}\\) som minimerar SSR",          "Derivering används för att beräkna \\(R^2\\)",          "Derivering behövs bara om man har fler än 10 observationer"        ],        "correct": "Vid en minimum- eller maximumpunkt är derivatan noll — vi deriverar SSR och sätter lika med noll för att hitta de värden på \\(\\widehat{a}\\) och \\(\\widehat{b}\\) som minimerar SSR"      }    },    "error": { "message": "Tänk på vad ett minimeringsproblem innebär matematiskt. Vid ett minimum är vad noll?" },    "correct": { "message": "Rätt! Vi vill minimera summan av kvadrerade residualerna \\(\\sum\\hat{V}_i^2\\) med avseende på \\(\\widehat{a}\\) och \\(\\widehat{b}\\). Vid en minimumpunkt är derivatan noll. Vi deriverar därför SSR med avseende på \\(\\widehat{a}\\) och \\(\\widehat{b}\\) och sätter derivatorna lika med noll — detta kallas förstagradsvillkor och ger oss ekvationssystem som löses ut till formler för estimatorerna." }  }];</script>
<div class="exercise-section" data-section-id="k2-3-4"></div>

