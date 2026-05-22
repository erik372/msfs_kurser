# Minstakvadratmetoden — fördjupning 2

## Regressionsanalys med tre variabler {#k2-4-1}

### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

Varför behöver vi fler än två variabler? I analytiskt arbete (och i världen överhuvudtaget) påverkas det vi studerar nästan alltid av flera faktorer samtidigt. Om vi bara inkluderar en förklarande variabel [\\((X)\\)]{.math .inline} men det egentligen finns en annan viktig variabel [\\((Z)\\)]{.math .inline} som också påverkar [\\(Y\\)]{.math .inline}, riskerar vi att få felaktiga resultat. I detta avsnitt ska vi lära oss hur regression fungerar med tre variabler, vilket är grunden för att kunna arbeta med ännu fler variabler senare.

#### Vad händer när vi har tre variabler?

Låt oss nu utgå från en regressionsmodell där den förklarade (beroende) variabeln [\\(Y\\)]{.math .inline} förklaras av de två förklarande (oberoende) variablerna [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}:

[\\(Y\_{i} = a + bX\_{i} + cZ\_{i} + V\_{i}\\)]{.math .inline} (1)

Bokstäverna [\\(a\\)]{.math .inline}, [\\(b\\)]{.math .inline} och [\\(c\\)]{.math .inline} är konstanta koefficienter och [\\(V\_{i}\\)]{.math .inline} är feltermen för observation *i*. Vi ska nu använda minstakvadratmetoden för att estimera koefficienterna [\\(\\widehat{a}\\)]{.math .inline}, [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline} och därefter [\\(\\widehat{Y}\\)]{.math .inline} samt [\\(\\widehat{V}\\)]{.math .inline}.

Koefficienten [\\(\\widehat{b}\\)]{.math .inline} kommer att ge oss den genomsnittliga förändringen i [\\(Y\\)]{.math .inline} som är associerad med en ökning av [\\(X\\)]{.math .inline} med en enhet, givet värdena i [\\(Z\\)]{.math .inline}. Koefficient [\\(\\widehat{c}\\)]{.math .inline} visar den genomsnittliga förändringen i [\\(Y\\)]{.math .inline} som är associerad med en ökning av [\\(Z\\)]{.math .inline} med en enhet, givet värdena i [\\(X\\)]{.math .inline}.

I och med att vi använder båda de förklarande variablerna [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline} i samma regressionsmodell kommer beräkningen visa samvariationen mellan [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline}, med hänsyn till variationer i [\\(Z\\)]{.math .inline}. Samvariationen mellan [\\(Y\\)]{.math .inline} och [\\(Z\\)]{.math .inline} kommer att uppskattas med hänsyn till variationer i [\\(X\\)]{.math .inline}.

Säg som exempel, att vi vill veta vilken inverkan en utbildning har på studenternas inkomster senare i livet (jmf exemplet i [avsnitt 1.2](https://www.dropbox.com/scl/fi/9jy8vypqisanjkto7wr3v/1-2-Experiment-och-observationsstudie.docx?rlkey=4xhcwh8s17u66tholxgf5qdaa&dl=0)). Vi ställer upp en regressionsmodell av typen [\\(Y = \\alpha\_{1} + \\alpha\_{2}X + \\epsilon\\)]{.math .inline} där [\\(Y\\)]{.math .inline} är inkomst och [\\(X\\)]{.math .inline} är en variabel som indikerar om en person har läst utbildningen eller inte.

Men nu vill vi även kontrollera för om studenterna är ovanligt ambitiösa. Låt oss för tankeexperimentets skull anta att vi faktiskt har bra information rörande detta i form av variabel [\\(Z\\)]{.math .inline}. I så fall kan vi lägga till det som en ny förklarande variabel i regressionsmodellen så att vi nu får en sådan regressionsmodell med samma form som den i ekvation 1: [\\(Y = \\alpha\_{1} + \\alpha\_{2}X + \\alpha\_{2}Z + \\epsilon\\)]{.math .inline}.

I detta hypotetiska exempel är [\\(Z\\)]{.math .inline} studenternas ambitionsnivå. I en idealisk situation skulle detta innebära att vi nu rensar för betydelsen av studenternas ambitionsnivå [\\(Z\\)]{.math .inline}, när vi uppskattar samvariationen mellan utbildning [\\(X\\)]{.math .inline} och inkomst [\\(Y\\)]{.math .inline}.

Om vi vill kontrollera för ytterligare andra fenomen kan vi lägga till fler förklarande variabler. Detta är en central aspekt av regressionsanalys och vi återkommer nedan till vad detta innebär.

#### Minstakvadratroten med tre variabler

Låt oss återvända till regressionsmodellen i ekvation 1. Precis som när vi endast hade en förklarande variabel i regressionsmodellen ska vi nu, när vi har två förklarande variabler, hitta de värden för de konstanta koefficienterna [\\(a\\)]{.math .inline}, [\\(b\\)]{.math .inline} och [\\(c\\)]{.math .inline} som minimerar de kvadrerade residualerna [\\(\\sum\_{}\^{}{\\widehat{V}}\^{2}\\)]{.math .inline}. Vi kan därför beskriva vår beräkning som ett minimeringsproblem:

[\\(\\ \\min\_{\\widehat{a},\\widehat{b},\\widehat{c}}\\sum\_{i = 1}\^{n}{\\widehat{V\_{i}}}\^{2}\\ = \\min\_{\\widehat{a},\\widehat{b},\\widehat{c}}\\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}\\)]{.math .inline} (2)

Predikterade [\\(\\widehat{Y}\\)]{.math .inline} kan vi utifrån vår regressionsmodell definiera som:

[\\(\\widehat{Y\_{i}} = \\widehat{a} + \\widehat{b}X\_{i} + \\widehat{c}Z\_{i}\\)]{.math .inline} (3)

Denna definition av [\\(\\widehat{Y}\\)]{.math .inline} kan vi sätta in i vårt minimeringsproblem:

[\\(\\min\_{\\widehat{a},\\widehat{b},\\widehat{c}}{\\sum\_{i = 1}\^{n}{\\widehat{V\_{i}}}\^{2}} = \\min\_{\\widehat{a},\\widehat{b},\\widehat{c}}{\\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{Y\_{i}} \\right)\^{2}} = \\ \\min\_{\\widehat{a},\\widehat{b},\\widehat{c}}\\sum\_{i = 1}\^{n}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} - \\widehat{c}Z\_{i} \\right)\^{2}\\)]{.math .inline} (4)

I denna ekvation känner vi till [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}, eftersom detta är våra observerade data. Vi har tre faktorer att ta hänsyn till i form av de tre konstanterna [\\(\\widehat{a}\\)]{.math .inline}, [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline}.

Vi beräknar förstagradsvillkoren genom att derivera uttrycket i ekvation 4 med hänsyn till [\\(a\\)]{.math .inline}, [\\(b\\)]{.math .inline} samt [\\(c\\)]{.math .inline} var för sig och sätta respektive resultat lika med 0. Eftersom vi har tre faktorer får vi följande tre resultat:

[\\(\\frac{\\partial}{\\partial\\widehat{a}}\\left( \\sum\_{i = 1}\^{n}\\widehat{v\_{i}\^{2}} \\right) = \\sum\_{}\^{}{- 2\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} - \\widehat{c}Z\_{i} \\right)}\\)]{.math .inline} (5)

[\\\[\\frac{\\partial}{\\partial\\widehat{b}}\\left( \\sum\_{i = 1}\^{n}\\widehat{v\_{i}\^{2}} \\right) = \\sum\_{}\^{}{- 2X\_{i}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} - \\widehat{c}Z\_{i} \\right)}\\\]]{.math .display}

[\\\[\\frac{\\partial}{\\partial\\widehat{c}}\\left( \\sum\_{i = 1}\^{n}\\widehat{v\_{i}\^{2}} \\right) = \\sum\_{}\^{}{- 2Z\_{i}\\left( Y\_{i} - \\widehat{a} - \\widehat{b}X\_{i} - \\widehat{c}Z\_{i} \\right)}\\\]]{.math .display}

På liknande sätt som vi gjorde i [avsnitt 3.4](https://www.dropbox.com/scl/fi/v0a5z69slwsy7pe20fp7d/3-4-H-rled-estimatorerna.docx?rlkey=kdu3tyfzbzhxk9o1g4xhf17x4&dl=0) kan vi sätta första villkoret lika med 0 och lösa ut en definition för [\\(\\widehat{a}\\)]{.math .inline}:

[\\(0 = - 2\\sum\_{}\^{}Y + \\sum\_{}\^{}â + \\sum\_{}\^{}\\widehat{b}X\_{i} + \\sum\_{}\^{}{\\widehat{c}Z\_{i}}\\)]{.math .inline} (6)

[\\\[n\\widehat{a} = nY - \\widehat{b}nX\_{i} - \\widehat{c}nZ\_{i}\\\]]{.math .display}

[\\\[\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X} - \\widehat{c}\\overline{Z}\\\]]{.math .display}

Koefficient [\\(\\widehat{a}\\)]{.math .inline} är en funktion av observationerna i alla tre variabler i regressionsmodellen: [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}.

Härifrån kan vi fortsätta lösa ut lutningskoefficienterna [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline}. Här nöjer vi oss dock med att enbart jämföra slutresultaten, alltså deras estimatorer, och hoppar över själva härledningarna.

För att estimera lutningskoefficienterna med tre variabler behöver vi mer komplexa formler än tidigare. Oroa dig inte om formeln ser skrämmande ut. Poängen är att förstå principen här, nämligen att varje koefficient beräknas med hänsyn till de andra variablerna i regressionsmodellen.

Ekvationerna nedan beskriver estimatorerna för lutningskoefficienterna [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline}. För att komprimera algebran skriver vi [\\(\\widetilde{X\_{i}} = X\_{i} - \\overline{X}\\)]{.math .inline} och motsvarande för [\\(\\widetilde{Y\_{i}}\\)]{.math .inline} och [\\(\\widetilde{Z\_{i}}\\)]{.math .inline}. Detta innebär att koefficienternas estimatorer beskrivs utifrån observationernas avvikelser från respektive medelvärde:

[\\(\\widehat{b} = \\frac{\\left( \\sum\_{}\^{}{\\widetilde{Y\_{i}}\\widetilde{X\_{i}}} \\right)\\left( \\sum\_{}\^{}\\widetilde{Z\_{i}\^{2}} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{Y\_{i}}\\widetilde{Z\_{i}}} \\right)\\left( \\sum\_{}\^{}{\\widetilde{X\_{i}}\\widetilde{Z\_{i}}} \\right)}{\\left( \\sum\_{}\^{}\\widetilde{X\_{i}\^{2}} \\right)\\left( \\sum\_{}\^{}\\widetilde{Z\_{i}\^{2}} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{X\_{i}}\\widetilde{Z\_{i}}} \\right)\^{2}}\\)]{.math .inline} (7)

[\\\[\\widehat{c} = \\frac{\\left( \\sum\_{}\^{}{\\widetilde{Y\_{i}}\\widetilde{Z\_{i}}} \\right)\\left( \\sum\_{}\^{}\\widetilde{X\_{i}\^{2}} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{Y\_{i}}\\widetilde{X}} \\right)\\left( \\sum\_{}\^{}{\\widetilde{X\_{i}}\\widetilde{Z\_{i}}} \\right)}{\\left( \\sum\_{}\^{}\\widetilde{X\_{i}\^{2}} \\right)\\left( \\sum\_{}\^{}\\widetilde{Z\_{i}\^{2}} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{X\_{i}}\\widetilde{Z\_{i}}} \\right)\^{2}}\\\]]{.math .display}

Alla tre koefficienterna [\\(\\widehat{a}\\)]{.math .inline}, [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline} beror på de observerade värdena i de tre variablerna [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}. Detta kan vi se eftersom alla tre variablerna ingår i respektive ekvation (estimator).

Detta innebär att även om [\\(\\widehat{b}\\)]{.math .inline} mäter samvariationen mellan [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} är [\\(\\widehat{b}\\)]{.math .inline} en funktion av både [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}. Och trots att lutningskoefficienten [\\(\\widehat{c}\\)]{.math .inline} mäter samvariationen mellan variablerna [\\(Y\\)]{.math .inline} och [\\(Z\\)]{.math .inline} är även [\\(\\widehat{c}\\)]{.math .inline} en funktion av observationer i alla tre variablerna [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}.

#### Vad spelar allt det här för roll?

Huvudpoängen är enkel men avgörande: När vi lägger till eller tar bort variabler i en regressionsmodell ändras resultaten för de andra variablerna.

I detta exempel såg vi att lutningskoefficienten för [\\(X\\)]{.math .inline} gick från [\\(0,5\\)]{.math .inline} till [\\(0,28\\)]{.math .inline} när vi lade till [\\(Z\\)]{.math .inline}. Detta betyder att om vi inte inkluderar viktiga variabler får vi felaktiga resultat.

Hade vi haft fler variabler och koefficienter i vår regressionsmodell hade ekvationerna blivit ännu mer omfattande. Längre fram ska vi gå igenom hur vi kan räkna när vi har en regressionsmodell med valfritt antal variabler och koefficienter.

Om vi tillför en variabel till vår analys kan detta påverka resultaten för alla koefficienter som ingår i modellen. Säg att variabeln [\\(Z\\)]{.math .inline} bör ingå i modellen men att denna av någon anledning inte är med i analysen. I så fall kommer resultatet för variabeln [\\(X\\)]{.math .inline} att bli missvisande.

Det korrekta resultatet får vi inte förrän vi inkluderar [\\(Z\\)]{.math .inline}. Detta är centralt för att förstå den här typen av metoder, forskning och analytiskt arbete i största allmänhet.

#### Estimera en modell

Nu ska vi estimera en regressionsmodell utifrån några observationer. För detta återanvänder vi de påhittade variablerna [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline} med de fyra observationer vardera som vi använde tidigare när vi introducerade minstakvadratmetoden. Alla tre variablerna redovisas i tabell 1 med lite beräkningar som vi behöver.

**Tabell 1: Variablerna Y, X och Z med lite beräkningar**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [\\\[i\\\]]{.math .display}                  [\\\[Y\_{i}\\\]]{.math .display}   [\\\[X\_{i}\\\]]{.math .display}   [\\\[Z\_{i}\\\]]{.math .display}   [\\\[\\widetilde{Y\_{i}}\\\]]{.math .display}   [\\\[\\widetilde{X\_{i}}\\\]]{.math .display}   [\\\[\\widetilde{Z\_{i}}\\\]]{.math .display}   [\\\[\\widetilde{Y\_{i}}\\widetilde{X\_{i}}\\\]]{.math .display}   [\\\[\\widetilde{Y\_{i}}\\widetilde{Z\_{i}}\\\]]{.math .display}   [\\\[\\widetilde{X\_{i}}\\widetilde{Z\_{i}}\\\]]{.math .display}   [\\\[\\widetilde{{X\_{i}}\^{2}}\\\]]{.math .display}   [\\\[\\widetilde{{Z\_{i}}\^{2}}\\\]]{.math .display}
  ------------------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ----------------------------------------------- ----------------------------------------------- ----------------------------------------------- ------------------------------------------------------------------ ------------------------------------------------------------------ ------------------------------------------------------------------ ------------------------------------------------------ ------------------------------------------------------
  1                                                           3                                  3                                  1                                       --0,5                                            --2                                            --0,5                                                      1                                                                 0,25                                                                1                                                            4                                                     0,25

  2                                                           2                                  4                                  4                                       --1,5                                            -1                                              2,5                                                      1,5                                                               --3,75                                                             --2,5                                                          1                                                     6,25

  3                                                           5                                  6                                  0                                        1,5                                              1                                             --1,5                                                     1,5                                                               --2,25                                                             --1,5                                                          1                                                     2,25

  4                                                           4                                  7                                  1                                        0,5                                              2                                              0,5                                                       1                                                                --0,25                                                              --1                                                           4                                                     0,25

  Medel                                                      3,5                                 5                                 1,5                                                                                                                                                                                                                                                                                                                                                                                                                                 

  [\\\[\\sum\_{}\^{}{}\\\]]{.math .display}                                                                                                                                                                                                                                                                                            5                                                                 --6                                                                --4                                                           10                                                     9
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Förklaring: [\\(\\widetilde{Y\_{i}} = Y\_{i} - \\overline{Y}\\)]{.math .inline} och motsvarande för [\\(\\widetilde{X\_{i}}\\)]{.math .inline} och [\\(\\widetilde{Z\_{i}}\\)]{.math .inline}.

I [avsnitt 2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0) använde vi variablerna [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} för att estimera regressionsmodellen [\\(Y\_{i} = a + bX\_{i} + V\_{i}\\)]{.math .inline} och fann då att [\\(\\widehat{a} = 1\\)]{.math .inline} och [\\(\\widehat{b} = 0,5\\)]{.math .inline}. Nu ska vi estimera koefficienterna för följande regressionsmodell:

[\\(Y\_{i} = a + bX\_{i} + cZ\_{i} + V\_{i}\\)]{.math .inline} (8)

där [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline} är variablerna, [\\(a\\)]{.math .inline}, [\\(b\\)]{.math .inline} och [\\(c\\)]{.math .inline} är koefficienterna vi ska estimera och [\\(V\\)]{.math .inline} är feltermen. I ekvation 7 har vi definitionerna för hur vi kan estimera [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline}. Utifrån uppgifterna i tabell 1 kan vi nu beräkna följande estimat för koefficienterna:

[\\(\\widehat{b} = \\frac{(5)(9) - ( - 6)( - 4)}{(10)(9) - ( - 4)\^{2}} \\approx 0,28\\)]{.math .inline} (9)

[\\\[\\widehat{c} = \\frac{( - 6)(10) - (5)( - 4)}{(10)(9) - ( - 4)\^{2}} \\approx - 0,54\\\]]{.math .display}

#### Vad blev det för skillnad?

När vi estimerade regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline} fann vi att [\\(\\widehat{b} = 0,5\\)]{.math .inline}. När vi nu lade till variabeln [\\(Z\\)]{.math .inline} i regressionsmodellen ser vi hur resultatet för lutningskoefficienten [\\(\\widehat{b}\\)]{.math .inline} går från 0,5 till 0,3. Resultaten för [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline} använder vi för att estimera [\\(\\widehat{a}\\)]{.math .inline}:

[\\(\\widehat{a} = 3,5 - \\widehat{b}\*5 - \\widehat{c}\*1,5\\)]{.math .inline} (10)[\\( \\)]{.math .inline}[\\\[= 3,5 - 0,28\*5 - ( - 0,54)\*1,5 \\approx 2,89\\\]]{.math .display}

Vi kan sammanfatta våra estimerade koefficienter genom att sätta in resultaten i vår regressionsmodell:

[\\(Y\_{i} = \\widehat{a} + \\widehat{b}X\_{i} + \\widehat{c}Z\_{i} + V\_{i} = 2,89 + 0,28X\_{i} - 0,54Z\_{i} + V\_{i}\\)]{.math .inline} (11)

Nu kan vi även estimera predikterade [\\(\\widehat{Y\_{i}}\\)]{.math .inline} och residualen [\\(\\widehat{V\_{i}}\\)]{.math .inline}, vilket sammanfattas i tabell 2 med avrundade resultat.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation [\\(i\\)]{.math .inline}    [\\\[Y\_{i}\\\]]{.math .display}   [\\\[X\_{i}\\\]]{.math .display}   [\\\[Z\_{i}\\\]]{.math .display}   [\\\[\\widehat{Y\_{i}} \\approx 2,89 + 0,28X\_{i} - 0,54Z\_{i}\\\]]{.math .display}
  -------------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- -------------------------------------------------------------------------------------
  1                                                      3                                  3                                  1                                                           3,2

  2                                                      2                                  4                                  4                                                          1,86

  3                                                      5                                  6                                  0                                                          4,59

  4                                                      4                                  7                                  1                                                          4,34
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Ett försök att illustrera resultatet i diagram

När vi har tre variabler är det svårare att illustrera samvariation i ett diagram. Trots detta görs ett försök i figur 1 där de fyra observationerna är placerade i diagrammet utifrån deras värden för [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}.

Den vertikala axeln är [\\(Y\\)]{.math .inline}-axeln medan variablerna [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline} har varsin horisontell axel. Den svarta pricken högst upp i diagrammet är observation 3 vars värden är [\\((Y,X,Z) = (5,6,0)\\)]{.math .inline}.

Eftersom regressionsmodellen har tre variabler blir regressionslinjen [\\(\\left( \\widehat{Y} \\right)\\)]{.math .inline} nu en plan yta med tre dimensioner, vilket illustreras av rutnätet. Denna plana yta är vinklad med hänsyn till de två variablerna [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}, beroende på deras respektive lutningskoefficient. Eftersom lutningskoefficienten [\\(\\widehat{c} \< 0\\)]{.math .inline} lutar rutnätet nedåt längs med [\\(Z\\)]{.math .inline}-axeln sett från [\\(Y\\)]{.math .inline}-axeln. Eftersom [\\(\\widehat{b} \> 0\\)]{.math .inline} lutar rutnätet uppåt längs med [\\(X\\)]{.math .inline}-axeln sett från [\\(Y\\)]{.math .inline}-axeln.

**Figur 1. Regressionsresultat med tre variabler**

*[Sideeg \> Jag sparade ett 3d-diagram som html i katalogen]{.mark} [Eriks_3d_graf](https://www.dropbox.com/scl/fo/2i2ntlsxmg2g3u0mjwg93/AGRmmFsd9k7y02ZW2EYyPyo?rlkey=oadbjo86p3expplymcnzfshu1&dl=0). [Om ni har möjlighet att göra det snyggare får ni jättegärna göra det ]{.mark}*😊

Förklaring: Diagrammet illustrerar [\\(\\widehat{Y} = 2,89 + 0,28X - 0,54Z\\)]{.math .inline}. Klicka och dra i diagrammet för att vrida på det.

#### Vad spelar allt det här för roll?

När vi la till en ny variabel i vår regressionsmodell ändras samvariationen mellan de variabler vi hade i regressionsmodellen sedan innan. Poängen med denna genomgång är att visa att detta även gäller om vi skulle lägga till ytterligare variabler förutom de tre vi använt här. Och om vi tar bort en variabel från en regressionstabell så kan detta leda till att samvariationen för de kvarvarande variablerna ändras.

Syftet med regressionsanalys är att studera mönster i data. Att saker samvarierar betyder inte nödvändigtvis någonting alls. Men i många situationer tolkar vi samvariation som tecken på orsakssamband. Ibland har vi goda skäl att göra så. Ibland inte.

När vi studerar orsakssamband vill vi inte bara veta om "fenomen A påverkar B". Ofta vill vi veta mer i detalj vad som händer. Orsakssamband ligger till grund för alla möjliga beslut som människor fattar. Om jag har huvudvärk -- ska jag ta 1 tablett, 100 tabletter eller inga tabletter? Ska regeringen spendera 1 miljon kr eller 100 miljarder på att förbättra matematikundervisningen?

För att få bättre svar på dessa frågor behöver våra analysmetoder vara noggranna och genomtänkta på samma gång.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-1"]=[  {    "id": "k2-4-1-001",    "name": "Uppgift 1",    "exercise": "I regressionsmodellen \\(Y_i = a + bX_i + cZ_i + V_i\\) ger koefficienten \\(\\widehat{b}\\) oss:",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den genomsnittliga förändringen i Y per enhet ökning i X, utan hänsyn till Z",          "Den genomsnittliga förändringen i Y per enhet ökning i X, givet värdena i Z",          "Den genomsnittliga förändringen i Z per enhet ökning i X",          "Den totala variationen i Y som förklaras av modellen"        ],        "correct": "Den genomsnittliga förändringen i Y per enhet ökning i X, givet värdena i Z"      }    },    "error": { "message": "Tänk på vad det innebär att ha med Z i modellen. Vad kontrolleras för när vi tolkar b-koefficienten?" },    "correct": { "message": "Rätt! Koefficienten \\(\\widehat{b}\\) ger den genomsnittliga förändringen i Y vid en enhet ökning i X, givet (konstanthållna) värden i Z. Båda de förklarande variablerna ingår i beräkningen." }  },  {    "id": "k2-4-1-002",    "name": "Uppgift 2",    "exercise": "En regressionsmodell \\(Y = a + bX + V\\) estimeras och ger \\(\\widehat{b} = 0{,}5\\). När en tredje variabel Z läggs till i modellen \\(Y = a + bX + cZ + V\\) och alla koefficienter re-estimeras, vad kan vi generellt säga om \\(\\widehat{b}\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\widehat{b}\\) förblir alltid oförändrad, eftersom OLS-estimatorn bara beror på X och Y",          "\\(\\widehat{b}\\) kan förändras, eftersom koefficienten nu mäter sambandet mellan X och Y konstanthållet för Z",          "\\(\\widehat{b}\\) ökar alltid när fler variabler läggs till i modellen",          "\\(\\widehat{b}\\) kan bara förändras om Z och X är perfekt korrelerade"        ],        "correct": "\\(\\widehat{b}\\) kan förändras, eftersom koefficienten nu mäter sambandet mellan X och Y konstanthållet för Z"      }    },    "error": { "message": "Tänk på vad det innebär att konstanthålla Z. Fångar \\(\\widehat{b}\\) fortfarande exakt samma samband som utan Z i modellen?" },    "correct": { "message": "Rätt! Lutningskoefficienten \\(\\widehat{b}\\) gick från 0,5 till ungefär 0,28 när Z lades till. Detta illustrerar hur koefficienter ändras när man tillför variabler till modellen." }  },  {    "id": "k2-4-1-003",    "name": "Uppgift 3",    "exercise": "I estimatorformeln för tre variabler med summorna \\(\\sum\\tilde{Y}_i\\tilde{X}_i = 5\\), \\(\\sum\\tilde{Z}_i^2 = 9\\), \\(\\sum\\tilde{Y}_i\\tilde{Z}_i = -6\\), \\(\\sum\\tilde{X}_i\\tilde{Z}_i = -4\\), \\(\\sum\\tilde{X}_i^2 = 10\\): \\[\\widehat{b} = \\frac{\\left(\\sum \\widetilde{Y_i}\\widetilde{X_i}\\right)\\left(\\sum \\widetilde{Z_i}^2\\right) - \\left(\\sum \\widetilde{Y_i}\\widetilde{Z_i}\\right)\\left(\\sum \\widetilde{X_i}\\widetilde{Z_i}\\right)}{\\left(\\sum \\widetilde{X_i}^2\\right)\\left(\\sum \\widetilde{Z_i}^2\\right) - \\left(\\sum \\widetilde{X_i}\\widetilde{Z_i}\\right)^2}\\] Vad är täljaren?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "21" },    "answerformat": "",    "error": { "message": "Beräkna \\((5)(9) - (-6)(-4) = 45 - 24\\). Var noga med tecknen vid multiplikationen av de negativa talen." },    "correct": { "message": "Rätt! Täljaren är \\((5)(9) - (-6)(-4) = 45 - 24 = 21\\). Nämnaren är \\((10)(9) - (-4)^2 = 90 - 16 = 74\\), vilket ger \\(\\widehat{b} \\approx 0{,}28\\)." }  },  {    "id": "k2-4-1-004",    "name": "Uppgift 4",    "exercise": "I regressionsresultatet \\(Y_i = 2{,}89 + 0{,}28X_i - 0{,}54Z_i\\), vad är det predikterade värdet \\(\\widehat{Y}\\) för en observation med \\(X = 6\\) och \\(Z = 0\\)? Avrunda till en decimal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "4.6" },    "answerformat": "",    "error": { "message": "Sätt in värdena i formeln: \\(\\widehat{Y} = 2{,}89 + 0{,}28 \\cdot 6 - 0{,}54 \\cdot 0\\). Räkna ut termerna var för sig." },    "correct": { "message": "Rätt! \\(\\widehat{Y}_3 = 2{,}89 + 0{,}28 \\cdot 6 - 0{,}54 \\cdot 0 = 2{,}89 + 1{,}68 = 4{,}57 \\approx 4{,}6\\)." }  },  {    "id": "k2-4-1-005",    "name": "Uppgift 5",    "exercise": "Interceptet \\(\\widehat{a}\\) i en regressionsmodell med tre variabler ges av formeln \\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X} - \\widehat{c}\\overline{Z}\\). Med \\(\\overline{Y} = 3{,}5\\), \\(\\overline{X} = 5\\), \\(\\overline{Z} = 1{,}5\\), \\(\\widehat{b} = 0{,}28\\) och \\(\\widehat{c} = -0{,}54\\): vad är \\(\\widehat{a}\\)? Avrunda till en decimal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "2.9" },    "answerformat": "",    "error": { "message": "Beräkna: \\(\\widehat{a} = 3{,}5 - 0{,}28 \\cdot 5 - (-0{,}54) \\cdot 1{,}5\\). Kom ihåg att subtrahera en negativ term innebär addition." },    "correct": { "message": "Rätt! \\(\\widehat{a} = 3{,}5 - 0{,}28 \\cdot 5 - (-0{,}54) \\cdot 1{,}5 = 3{,}5 - 1{,}4 + 0{,}81 \\approx 2{,}89 \\approx 2{,}9\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-1"></div>

## Faktorvariabler {#k2-4-2}

### Begrepp

- **Faktorvariabel:** Kallas även kategoriska variabler. Variabler som beskriver grupper (kategorier), till exempel kön, kommuner, yrkesgrupper, utbildningsnivåer med mera.

- **Dummyvariabel:** Kallas även indikatorvariabel. Förklarande variabler som endast antar värdet 0 eller 1. Används ofta för att beskriva kategorier, som till exempel 0 för män och 1 för kvinnor.

### Teori

Regressionsanalys är en kvantitativ metod i den mening att vi använder kvantitativa data för att skapa kvantitativa resultat. Vi kan även använda *kvalitativa data* i vår analys, information som inte ursprungligen är angiven i siffror, så länge vi sätter siffror på denna.

Ett exempel på detta är *faktorvariabler*, även kallat *kategoriska variabler*. Faktorvariabler beskriver grupper (kategorier), som kön, kommuner, yrkesgrupper.

#### Faktorvariabler med två unika värden

Låt oss börja med faktorvariabler som endast antar två olika värden, till exempel om vi skickar ut en enkät och ber mottagarna svara "Ja" eller "Nej". En vanlig metod är då att ersätta det ena svarsalternativet med siffran 0 och det andra med siffran 1. Det spelar ingen roll vilket variabelvärde som får vilken siffra, så länge vi håller koll på vad som representerar vad när vi räknar.

Ett annat exempel är en variabel som anger om en rad i en tabell innehåller information om en man eller en kvinna, varpå variabeln kan anta värdet 0 för det ena könet och 1 för det andra könet.

En förklarande variabel i en regressionsmodell som endast antar värdena 0 eller 1 kallas för *dummyvariabel* eller *indikatorvariabel, kategorisk variabel*. Namnet \"dummyvariabel\" kommer från engelskans \"dummy\" som betyder \"ersättning\" eller \"ställföreträdare\". Vi ersätter kvalitativa kategorier (man/kvinna) med siffror (0/1) så att vi kan använda dem i regressionsanalys.

Data som endast kan anta två värden kallas för binär. Ofta används just 0 eller 1 för att beskriva informationen i en binär variabel, även om 0 och 1 symboliserar något annat, till exempel 0=män och 1=kvinnor.

#### Exempel på tre kommuner

Tabell 1 redovisar genomsnittlig årsinkomst för män respektive kvinnor i tre kommuner för år 2019, räknat i tusentals kronor.

**Tabell 1: Genomsnittlig inkomst 2019, 1 000-tals kr**

  -----------------------------------------------------------------------
  Kommun                  Män                     Kvinnor
  ----------------------- ----------------------- -----------------------
  Danderyd                435                     314

  Mörbylånga              277                     219

  Oskarshamn              279                     211
  -----------------------------------------------------------------------

Förklaring: Data från [Kolada](http://www.kolada.se). Inkomst anges i 1 000-tals kronor, medianvärden per kommun och grupp.

Nu ska vi studera löneskillnaden mellan män och kvinnor genom att använda minstakvadratmetoden. Vi börjar med att formulera en regressionsmodell:

[\\(W\_{i} = a + bG\_{i} + e\_{i}\\)]{.math .inline} (1)

där [\\(W\_{i}\\)]{.math .inline} är medellön i kommun [\\(i\\)]{.math .inline} och [\\(G\_{i}\\)]{.math .inline} är kön som har värdet 0 för män och 1 för kvinnor.

Vi kan estimera regressionsmodellen på samma sätt som tidigare, där koefficienterna ges av minstakvadratmetoden. Tabell 2 ger oss första delen av beräkningen:

[\\(\\widehat{b} = \\frac{\\sum\_{}\^{}{\\left( G\_{i} - \\overline{G} \\right)\\left( W\_{i} - \\overline{W} \\right)}}{\\sum\_{}\^{}\\left( G\_{i} - \\overline{G} \\right)\^{2}} = \\frac{- 123,5}{1,5} = - 82,3\\)]{.math .inline} (2)

[\\\[\\widehat{a} = \\overline{w} - \\widehat{b\\overline{k}} = 289,2 - ( - 82,3)0,5 = 330,3\\\]]{.math .display}

Koefficienten [\\(\\widehat{b}\\)]{.math .inline} är negativ, vilket innebär att kön [\\((G)\\)]{.math .inline} har en negativ samvariation med lön [\\((W)\\)]{.math .inline}. Vi valde att definiera vår dummyvariabel [\\(G = 1\\)]{.math .inline} för kvinnor. Variabel W är associerat med ett 82,3 enheter lägre värde för kvinnor jämfört med män. Kvinnor har i genomsnitt 82 300 kr lägre inkomst än män i dessa tre kommuner.

Resultatet illustreras i figur 1. Diagrammet visar att när vi rör oss från män [\\((G = 0)\\)]{.math .inline} till kvinnor [\\((G = 1)\\)]{.math .inline} längs den horisontella axeln, går inkomsten nedåt längs den vertikala axeln. Därför är lutningen negativ. Detta betyder att kvinnor [\\((G = 1)\\)]{.math .inline} har lägre genomsnittsinkomst än män [\\((G = 0)\\)]{.math .inline} i dessa tre kommuner.

**Tabell 2. Beräkningar för regressionsanalysen**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Kommun        [\\\[W\_{i}\\\]]{.math .display}   [\\\[G\_{i}\\\]]{.math .display}   [\\\[W\_{i} - \\overline{W\_{i}}\\\]]{.math .display}   [\\\[G\_{i} - \\overline{G\_{i}}\\\]]{.math .display}   [\\\[\\left( G\_{i} - \\overline{G\_{i}} \\right)\^{2}\\\]]{.math .display}
  ------------ ---------------------------------- ---------------------------------- ------------------------------------------------------- ------------------------------------------------------- -----------------------------------------------------------------------------
  Danderyd                    435                                 0                                           145,8                                                   -0,5                                                               0,25

  Mörbylånga                  277                                 0                                           -12,2                                                   -0,5                                                               0,25

  Oskarshamn                  279                                 0                                           -10,2                                                   -0,5                                                               0,25

  Danderyd                    314                                 1                                           24,8                                                     0,5                                                               0,25

  Mörbylånga                  219                                 1                                           -70,2                                                    0,5                                                               0,25

  Oskarshamn                  211                                 1                                           -78,2                                                    0,5                                                               0,25

  Medelvärde                 289,2                               0,5                                                                                                                                 

  Summa                                                                                                                                                                                                                                   1,5
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Förklaring: Samma data som i tabell 1 och några beräkningar.

**Figur 1: Samvariationen mellan inkomst och kön\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\4%20-%20Minstakvadratmetoden%20fördjupning%202%20fler%20variabler\4-2%20-%20Faktorvariabler/img/k2-4-2-image1.png){style="width:3.01282in;height:3.01282in"}

Förklaring: Regressionslinjen lutar nedåt vilket indikerar en negativ samvariation. I variabeln G har kvinnor värdet 1 och män värdet 0. Eftersom kvinnor har lägre inkomst i genomsnitt än män, uppstår en negativ samvariation.

#### Faktorvariabler med flera värden

Ovan hade vi en dummyvariabel för två värden: män och kvinnor. Dummyvariabler kan även vara användbara för att kategorisera faktorvariabler med flera värdena än två. Låt oss återigen räkna på inkomstskillnader mellan de tre kommunerna i föregående exempel, men i stället för skillnad mellan kvinnor och män ska vi nu beräkna skillnaden i genomsnittlig inkomst mellan kommunerna.

Tabell 3 redovisar variablerna, där [\\(Y\_{i}\\)]{.math .inline} nu anger medelinkomst för alla invånare per kommun. Variablerna [\\(K\_{\\text{Mörbylånga}}\\)]{.math .inline} och [\\(K\_{\\text{Oskarshamn}}\\)]{.math .inline} är två dummyvariabler för kommunerna i följande regressionsmodell:

[\\(Y\_{i} = a + bK\_{\\text{Mörbylånga}} + cK\_{\\text{Oskarshamn}} + e\_{i}\\)]{.math .inline} (3)

där [\\(e\\)]{.math .inline} är feltermen. Våra dummyvariabler representerar kommunerna Mörbylånga och Oskarshamn, en dummyvariabel mindre än antal kommuner. När båda dummyvariablerna i modellen är lika med 0 får vi estimaten för den tredje kommunen, Danderyd.

Om vi har 3 kommuner använder vi bara 2 dummyvariabler. Varför? Om både Mörbylånga-dummyn = 0 OCH Oskarshamn-dummyn = 0, vet vi automatiskt att det måste vara Danderyd. Den tredje kommunen blir \"referenskategori\", i detta fall den kommun vi jämför de andra kommunerna mot. Om vi hade använt 3 dummyvariabler skulle regressionen inte fungera (matematiskt kallas detta \"perfekt multikolinjäritet\"). Datorn kan inte skilja på vilken effekt som kommer från vilken dummy.

**Tabell 3: Genomsnittlig inkomst 2019, 1 000-tals kr**

  -------------------------------------------------------------------------------------------------------------------------------------------------------
  Kommun        [\\\[Y\_{i}\\\]]{.math .display}   [\\\[K\_{\\text{Mörbylånga}}\\\]]{.math .display}   [\\\[K\_{\\text{Oskarshamn}}\\\]]{.math .display}
  ------------ ---------------------------------- --------------------------------------------------- ---------------------------------------------------
  Danderyd                   364,9                                         0                                                   0

  Mörbylånga                 243,6                                         1                                                   0

  Oskarshamn                  246                                          0                                                   1
  -------------------------------------------------------------------------------------------------------------------------------------------------------

Förklaring: Data från [Kolada](http://www.kolada.se). Inkomst anges i 1 000-tals kronor, medianvärden per kommun.

Vår regressionsmodell räknar ut samma sak som vi redan ser i datamaterialet. Syftet med denna övning är att förstå innebörden av dummyvariabler i en regressionsmodell. Vi estimerar regressionsmodellen i ekvation 3 utifrån minstakvadratmetoden:

[\\(\\widehat{Y} = \\widehat{a} + \\widehat{b}K\_{\\text{Mörbylånga}} + \\widehat{c}K\_{\\text{Oskarshamn}} + e\\)]{.math .inline} (4)

[\\\[= 364,9 - 121,3K\_{\\text{Mörbylånga}} - 118,9K\_{\\text{Oskarshamn}} + e\\\]]{.math .display}

Detta innebär att den genomsnittliga inkomsten [\\((Y)\\)]{.math .inline} i Danderyd är lika med 364 900 kronor. Detta är vad regressionsresultaten visar då [\\(K\_{\\text{Mörbylånga}} = K\_{\\text{Oskarshamn}} = 0\\)]{.math .inline}, vilket stämmer med våra data.

Vi får [\\(\\widehat{b} = - 121,3\\)]{.math .inline}, vilket innebär att medelinkomsten i Mörbylånga är lika med [\\(364,9 - 121,3 = 243,6\\)]{.math .inline}, vilket stämmer. Koefficient [\\(\\widehat{c} = - 118,9\\)]{.math .inline} innebär att medelinkomsten i Oskarshamn är lika med [\\(364,9 - 118,9 = 246\\)]{.math .inline}, vilket också stämmer.

När man har en regressionsmodell där en kategorisk variabel ingår, till exempel kommun, kan man ofta se formuleringar av regressionsmodeller med förkortningar för dummyvariabler. Säg till exempel att vi ska estimera regressionsmodellen i ekvation 3 med data på alla 290 kommuner och därför vill använda 289 dummyvariabler (antal kommuner minus 1).

Den sista kommunens resultat ges av att alla dummyvariablerna = 0. I dessa situationer kan man ibland se att regressionsmodellen beskrivs som ett exempel: [\\(Y\_{i} = c + bK\_{i} + v\\)]{.math .inline} där [\\(K\\)]{.math .inline} symboliserar en av de 289 dummyvariablerna. För varje enskild kommun är övriga 288 dummyvariabler lika med 0.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-2"]=[  {    "id": "k2-4-2-001",    "name": "Uppgift 1",    "exercise": "Vad är en dummyvariabel (indikatorvariabel)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "En variabel som mäter avvikelsen från medelvärdet",          "En förklarande variabel som endast antar värdet 0 eller 1",          "En variabel som innehåller fel eller mätosäkerhet",          "En variabel som alltid är kontinuerlig och normalfördelad"        ],        "correct": "En förklarande variabel som endast antar värdet 0 eller 1"      }    },    "error": { "message": "Tänk på hur man kodar kategorier som kön eller ja/nej-svar med siffror i regressionsanalys." },    "correct": { "message": "Rätt! En dummyvariabel (eller indikatorvariabel) är en förklarande variabel som bara antar värdena 0 eller 1. Den används för att representera kategoriska grupper, till exempel 0 för män och 1 för kvinnor." }  },  {    "id": "k2-4-2-002",    "name": "Uppgift 2",    "exercise": "I regressionsmodellen med tre kommuner (Danderyd, Mörbylånga, Oskarshamn) används två dummyvariabler för kommunerna. Varför används inte tre dummyvariabler – en för varje kommun?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är för komplicerat att hantera tre dummyvariabler",          "Tre dummyvariabler ger perfekt multikolinjäritet och regressionen fungerar inte",          "Den tredje dummyvariabeln ger alltid koefficienten noll",          "Datorn klarar maximalt två dummyvariabler åt gången"        ],        "correct": "Tre dummyvariabler ger perfekt multikolinjäritet och regressionen fungerar inte"      }    },    "error": { "message": "Fundera på vad som händer matematiskt om man vet att alla tre dummyvariabler summerar till 1 för varje observation. Kan man skilja effekterna åt?" },    "correct": { "message": "Rätt! Om man inkluderar en dummyvariabel för varje kategori uppstår perfekt multikolinjäritet – dummyvariablerna summerar alltid till 1. Datorn kan inte skilja på vilken effekt som kommer från vilken dummy. En kategori måste vara referenskategori (alla dummyar = 0)." }  },  {    "id": "k2-4-2-003",    "name": "Uppgift 3",    "exercise": "I en regressionsmodell \\(W_i = a + bG_i + e_i\\), där W är inkomst (i tusentals kr) och G är en dummyvariabel (0 = man, 1 = kvinna), estimerades \\(\\widehat{b} = -82{,}3\\). Vad innebär detta?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Mäns genomsnittsinkomst är 82 300 kr lägre än kvinnors i dessa kommuner",          "Kvinnors genomsnittsinkomst är 82 300 kr lägre än mäns i dessa kommuner",          "Inkomsten minskar med 82 300 kr per år för alla invånare",          "Det finns ingen statistisk skillnad i inkomst mellan könen"        ],        "correct": "Kvinnors genomsnittsinkomst är 82 300 kr lägre än mäns i dessa kommuner"      }    },    "error": { "message": "Koefficienten b mäter förändringen i W när G ökar med 1. G = 1 är definierat som kvinnor. Vad säger en negativ b om skillnaden?" },    "correct": { "message": "Rätt! Eftersom \\(G = 1\\) definierats som kvinnor och \\(\\widehat{b} = -82{,}3\\) betyder det att variabel W är associerat med ett 82 300 kr lägre värde för kvinnor (\\(G=1\\)) jämfört med män (\\(G=0\\)) i dessa tre kommuner." }  },  {    "id": "k2-4-2-004",    "name": "Uppgift 4",    "exercise": "En regressionsmodell med kommuner som dummyvariabler estimerades till \\(\\widehat{Y} = 364{,}9 - 121{,}3K_{\\text{Mörbylånga}} - 118{,}9K_{\\text{Oskarshamn}}\\), där Danderyd är referenskategori. Vad är den predikterade medelinkomsten i Mörbylånga (i 1 000-tals kr)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "243.6" },    "answerformat": "",    "error": { "message": "För Mörbylånga är \\(K_{\\text{Mörbylånga}} = 1\\) och \\(K_{\\text{Oskarshamn}} = 0\\). Sätt in dessa värden i regressionsformeln." },    "correct": { "message": "Rätt! \\(\\widehat{Y} = 364{,}9 - 121{,}3 \\cdot 1 - 118{,}9 \\cdot 0 = 364{,}9 - 121{,}3 = 243{,}6\\) (tusentals kr). Koefficienten \\(\\widehat{b} = -121{,}3\\) beskriver alltså skillnaden i medelinkomst mot referenskategorin Danderyd." }  },  {    "id": "k2-4-2-005",    "name": "Uppgift 5",    "exercise": "I regressionsmodellen \\(W_i = a + bG_i + e_i\\) — där W är inkomst (i tusentals kr) och G är en dummyvariabel (0 = man, 1 = kvinna) — beräknas interceptet som \\(\\widehat{a} = \\overline{W} - \\widehat{b}\\overline{G}\\). Medelvärdet för W är 289,2 och medelvärdet för G är 0,5. Med \\(\\widehat{b} = -82{,}3\\), vad är \\(\\widehat{a}\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "330.35" },    "answerformat": "",    "error": { "message": "Sätt in värdena: \\(\\widehat{a} = 289{,}2 - (-82{,}3) \\cdot 0{,}5\\). Kom ihåg att subtrahera en negativ term är detsamma som addition." },    "correct": { "message": "Rätt! \\(\\widehat{a} = 289{,}2 - (-82{,}3) \\cdot 0{,}5 = 289{,}2 + 41{,}15 = 330{,}35\\). Interceptet representerar mäns (G=0) genomsnittsinkomst i regressionsmodellen." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-2"></div>

## Konstannhålla {#k2-4-3}

### Begrepp

- **Konstanthålla:** Regressionsanalys med modell [\\(Y = a + bX + Z + \\epsilon\\)]{.math .inline} innebär att vi uppskattar samvariationen mellan X och Y, med hänsyn till variationer i Z. Detta kallas för att vi konstanthåller Z. När vi uppskattar samvariationen mellan Z och Y konstanthåller vi X.

### Teori

Regressionsanalys med flera förklarande variabler är ofta användbart för att få en korrekt bild av samvariationen mellan flera fenomen. I [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0) såg vi att om vi kontrollerar för flera variabler i vår regressionsmodell kan lutningskoefficienten för en annan variabel i modellen ändras. Detta kallas för att vi **konstanthåller** andra variabler.

Att konstanthålla en variabel betyder att vi studerar sambandet mellan X och Y med hänsyn till Z. Vi frågar: \"Om alla observationer hade samma värde på Z, hur skulle X och Y samvariera då?\"

Exempel: När vi studerar samvariationen mellan inkomst och livslängd med hänsyn till kön, frågar vi: \"Hur samvarierar inkomst och livslängd bland kvinnor?\" och \"Hur samvarierar inkomst och livslängd bland män?\" Detta är en av de centrala mekanismerna i regressionsanalys och i analytiskt arbete generellt.

#### Illustrera med lite data

Säg att vi har regressionsmodellen [\\(Y = a + bX + cZ + V\\)]{.math .inline}, där [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline} är variabler och [\\(V\\)]{.math .inline} är feltermen. Vi kan då beskriva detta som att vi håller variabeln [\\(Z\\)]{.math .inline} konstant när vi estimerar samvariationen mellan [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline}. Och vi håller variabeln [\\(X\\)]{.math .inline} konstant när vi estimerar samvariationen mellan [\\(Y\\)]{.math .inline} och [\\(Z\\)]{.math .inline}.

Vi ska nu illustrera detta med hjälp av lite data över genomsnittlig livslängd och inkomst för kvinnor respektive män i tre av Sveriges kommuner, vilket beskrivs i tabell 1. Kolumnen längst till höger beskriver en dummyvariabel [\\(G\\)]{.math .inline} för kön där kvinnor = 0 och män = 1.

**Tabell 1. Data över män och kvinnor i tre kommuner**

  -------------------------------------------------------------------------------------------------------------------------------------
  Kommun                 Livslängd [\\((L)\\ \\)]{.math .inline}   Inkomst [\\((I)\\)]{.math .inline}   Kön [\\((G)\\)]{.math .inline}
  --------------------- ----------------------------------------- ------------------------------------ --------------------------------
  Jokkmokk, kvinnor                       81,6                                    2,07                                0

  Jokkmokk, män                           79,2                                    2,4                                 1

  Oskarshamn, kvinnor                     84,6                                    2,11                                0

  Oskarshamn, män                         81,3                                    2,79                                1

  Örebro, kvinnor                         84,8                                    2,18                                0

  Örebro, män                             80,5                                    2,66                                1

  Medelvärde                               82                                    2,368                               0,5
  -------------------------------------------------------------------------------------------------------------------------------------

Förklaring:

#### Vår första regressionsmodell

Låt oss börja med att estimera samvariation mellan livslängd och inkomst med följande regressionsmodell:

[\\(L = a\_{1} + a\_{2}I + \\epsilon\\)]{.math .inline} (1)

där [\\(L\\)]{.math .inline} är livslängd, [\\(I\\)]{.math .inline} är inkomst, [\\(a\_{1}\\)]{.math .inline} och [\\(a\_{2}\\)]{.math .inline} är koefficienterna vi ska estimera med hjälp av minstakvadratmetoden och [\\(\\epsilon\\)]{.math .inline} är feltermen. Lutningskoefficienten [\\(a\_{2}\\)]{.math .inline} kan vi estimera till:

[\\({\\widehat{a}}\_{2} = \\frac{\\sum\_{i}\^{}{\\left( I\_{i} - \\overline{I} \\right)\\left( L\_{i} - \\overline{L} \\right)}}{\\sum\_{i}\^{}\\left( I\_{i} - \\overline{I} \\right)\^{2}} \\approx \\frac{- 1,9}{0,455} \\approx - 4,2\\)]{.math .inline} (2)

Koefficienten [\\(a\_{1}\\)]{.math .inline} kan vi estimera till:

[\\({\\widehat{a}}\_{1} = \\overline{L} - \\widehat{b}\\overline{I} \\approx 82 - ( - 4,2)2,37 \\approx 92\\)]{.math .inline} (3)

Beräkningarna beskrivs inte här men kontrollräkna gärna på egen hand. Estimerade versionen av regressionsmodellen i ekvation 1 blir nu:

[\\(L = \\widehat{a} + \\widehat{b}I = 92 - 4,2I\\)]{.math .inline} (4)

Enligt denna beräkning finns det en negativ samvariation mellan livslängd [\\(L\\)]{.math .inline} och inkomst [\\(I\\)]{.math .inline}, vilket innebär att människor med högre inkomst i genomsnitt lever kortare liv.

#### Lägger till variabeln [\\(G\\)]{.math .inline}

Låt oss nu lägga till variabeln kön [\\(G\\)]{.math .inline} till vår regressionsmodell. I tabell 1 är detta en dummyvariabel som endast antar värdet 0 eller 1. Vi ska nu estimera följande regressionsmodell:

[\\(L = b\_{1} + b\_{2}I + b\_{3}G + V\\)]{.math .inline} (5)

där [\\(L,\\ \\ I\\)]{.math .inline} och [\\(G\\)]{.math .inline} är våra variabler, [\\(b\_{1}\\)]{.math .inline}, [\\(b\_{2}\\)]{.math .inline} och [\\(b\_{3}\\)]{.math .inline} är koefficienterna vi ska estimera med hjälp av minstakvadratmetoden, och [\\(V\\)]{.math .inline} är feltermen. För att estimera lutningskoefficienterna använder vi nu estimatorerna för en regressionsmodell med tre koefficienter som vi introducerade i [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0). Vi börjar med lutningskoefficienten [\\(b\_{2}\\)]{.math .inline}:

[\\({\\widehat{b}}\_{2} = \\frac{\\left( \\sum\_{}\^{}{\\widetilde{L\_{i}}\\widetilde{I\_{i}}} \\right)\\left( \\sum\_{}\^{}{\\widetilde{G}}\_{i}\^{2} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{L\_{i}}\\widetilde{G\_{i}}} \\right)\\left( \\sum\_{}\^{}{\\widetilde{I\_{i}}\\widetilde{G\_{i}}} \\right)}{\\left( \\sum\_{}\^{}{\\widetilde{I}}\_{i}\^{2} \\right)\\left( \\sum\_{}\^{}{\\widetilde{G}}\_{i}\^{2} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{I\_{i}}\\widetilde{G\_{i}}} \\right)\^{2}}\\)]{.math .inline} (6)[\\( \\)]{.math .inline}[\\\[\\approx \\frac{( - 1,93)(0,46) - ( - 5,04)(0,75)}{(0,46)(1,5) - (0,75)\^{2}} \\approx 6,64\\\]]{.math .display}

Tilde beskriver avvikelse från medelvärdet, som [\\(\\widetilde{G} = G\_{i} - \\overline{G}.\\)]{.math .inline} För lutningskoefficient [\\(b\_{3}\\)]{.math .inline} får vi:

[\\({\\widehat{b}}\_{3} = \\frac{\\left( \\sum\_{}\^{}{{\\widetilde{L}}\_{i}{\\widetilde{G}}\_{i}} \\right)\\left( \\sum\_{}\^{}{\\widetilde{I}}\_{i}\^{2} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{L\_{i}}\\widetilde{I\_{i}}} \\right)\\left( \\sum\_{}\^{}{\\widetilde{I\_{i}}{\\widetilde{G}}\_{i}} \\right)}{\\left( \\sum\_{}\^{}{\\widetilde{I}}\_{i}\^{2} \\right)\\left( \\sum\_{}\^{}{\\widetilde{G}}\_{i}\^{2} \\right) - \\left( \\sum\_{}\^{}{\\widetilde{I\_{i}}{\\widetilde{G}}\_{i}} \\right)\^{2}}\\)]{.math .inline} (7)[\\( \\)]{.math .inline}[\\\[\\approx \\frac{( - 5,04)(0,46) - ( - 1,93)(0,75)}{(0,46)(1,5) - (0,75)\^{2}} \\approx - 6,66\\ \\\]]{.math .display}

Slutligen kan vi estimera koefficient [\\(b\_{1}\\)]{.math .inline}, konstanten:

[\\({\\widehat{b}}\_{1} = \\overline{L} - {\\widehat{b}}\_{2}\\overline{I} - {\\widehat{b}}\_{3}\\overline{G}\\)]{.math .inline} (8)[\\( \\)]{.math .inline}[\\\[{= 82 - 6,64\*2,37 - ( - 6,66)\*0,5 }{\\approx 69,6}\\\]]{.math .display}

Den estimerade versionen av regressionsmodellen i ekvation 5:

[\\(L = {\\widehat{b}}\_{1} + {\\widehat{b}}\_{2}I + {\\widehat{b}}\_{3}G = 69,6 + 6,64I - 6,66G\\)]{.math .inline} (9)

Resultatet indikerar nu en positiv samvariation mellan vår förklarade variabel livslängd [\\((L)\\)]{.math .inline} och den förklarande variabeln inkomst [\\((I)\\)]{.math .inline} med hänsyn till kön [\\((G)\\)]{.math .inline}. Människor med högre inkomst lever i genomsnitt längre liv. När vi estimerade regressionsmodellen i ekvation 1 fann vi att inkomst och livslängd samvarierade negativt.

Detta är ett exempel på något som kallas [Simpsons paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox): När vi studerar inkomst och livslängd utan att ta hänsyn till kön får vi negativ samvariation. Men när vi tar hänsyn till kön (konstanthåller kön) får vi positiv samvariation.

Varför? Kvinnor lever längre och har lägre inkomst. Män lever kortare och har högre inkomst. Om vi inte separerar könen ser det ut som att högre inkomst = kortare liv, vilket är felaktigt. Detta visar varför det är så viktigt att inkludera relevanta variabler i regressionsanalys. Det illustrerar även varför vi måste ta hänsyn till viktiga fenomen när vi vill förstå hur världen fungerar.

#### Illustration i diagram

Figur 1 illustrerar samvariationen mellan livslängd och inkomst i två diagram, varsitt för regressionsmodellerna i ekvation 1 och 5. I båda diagrammen har vi markerat vilka observationer som hör till män respektive kvinnor. Vi har tre prickar för män och tre för kvinnor, eftersom vi har tre kommuner med två observationer per kommun. Det vänstra diagrammet illustrerar resultatet i den första regressionsmodellen i ekvation 1 som vi estimerade till:

[\\(L = \\widehat{a\_{1}} + \\widehat{a\_{2}}I = 92 - 4,2I\\)]{.math .inline} (10)

med en negativ samvariation mellan livslängd och inkomst. I diagrammet illustreras regressionslinjen med en streckad linje. Det högra diagrammet illustrerar resultatet i den andra regressionsmodellen i ekvation 5 som vi estimerade till:

[\\(L = \\widehat{b\_{1}} + \\widehat{b\_{2}}I + \\widehat{b\_{3}}G = 69,6 + 6,64I - 6,66G\\)]{.math .inline} (11)

där [\\(G\\)]{.math .inline} är dummy för kön med [\\(G = 0\\)]{.math .inline} för kvinnor och [\\(G = 1\\)]{.math .inline} för män. I diagrammet har vi ritat ut två regressionslinjer för att illustrera betydelsen av denna dummyvariabel. De två regressionslinjerna är skattade med samma regressionsmodell, men illustrerar skillnaden mellan [\\(G = 0\\)]{.math .inline} och [\\(G = 1\\)]{.math .inline}.

Om [\\(G = 0\\)]{.math .inline} får vi den övre regressionslinjen, som löper genom prickarna som illustrerar observationerna för kvinnor. Om dummyvariabeln [\\(G = 1\\)]{.math .inline} har vi i stället den nedre regressionslinjen, som löper genom de tre prickarna för män.

**Figur 1: Illustration av resultaten från de två regressionsmodellerna**\
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\4%20-%20Minstakvadratmetoden%20fördjupning%202%20fler%20variabler\4-3%20-%20Konstanthålla/img/k2-4-3-image1.png){style="width:4.5in;height:3in"}

Förklaring: I det vänstra diagrammet ser vi resultaten från den estimerade regressionsmodellen i ekvation 1. I det högra diagrammet är regressionsmodellen i ekvation 5 illustrerade för [\\(G = 0\\)]{.math .inline} respektive [\\(G = 1\\)]{.math .inline}.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-3"]=[  {    "id": "k2-4-3-001",    "name": "Uppgift 1",    "exercise": "Vad menas med att \"konstanthålla\" en variabel i regressionsanalys?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att sätta variabelns värde till noll i alla observationer",          "Att uppskatta samvariationen mellan två variabler med hänsyn till variationer i en tredje",          "Att ta bort variabeln ur regressionsmodellen",          "Att ersätta variabelns värden med dess medelvärde"        ],        "correct": "Att uppskatta samvariationen mellan två variabler med hänsyn till variationer i en tredje"      }    },    "error": { "message": "Tänk på vad det innebär att uppskatta sambandet mellan två variabler när en tredje hålls fast. Vad frågar vi oss egentligen när vi konstanthåller?" },    "correct": { "message": "Rätt! Att konstanthålla en variabel innebär att vi uppskattar samvariationen mellan två variabler med hänsyn till variationer i den tredje. Vi frågar: 'Om alla hade samma värde på den konstanthållna variabeln, hur skulle de övriga samvariera?'" }  },  {    "id": "k2-4-3-002",    "name": "Uppgift 2",    "exercise": "I en regressionsanalys utan att kontrollera för kön estimerades samvariationen mellan inkomst \\((I)\\) och livslängd \\((L)\\) till \\(\\widehat{a}_2 \\approx -4{,}2\\). Vad innebär detta?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Högre inkomst är associerat med längre livslängd",          "Inkomst och livslängd samvarierar positivt när man kontrollerar för kön",          "Högre inkomst är associerat med kortare livslängd (utan att kontrollera för kön)",          "Det finns ingen samvariation mellan inkomst och livslängd"        ],        "correct": "Högre inkomst är associerat med kortare livslängd (utan att kontrollera för kön)"      }    },    "error": { "message": "En negativ koefficient på inkomst i regressionen L = a + bI innebär att... vad händer med L när I ökar?" },    "correct": { "message": "Rätt! En negativ koefficient \\(\\widehat{a}_2 = -4{,}2\\) innebär att högre inkomst är associerat med kortare livslängd i denna modell. Men detta är vilseledande – det beror på att vi inte kontrollerar för kön!" }  },  {    "id": "k2-4-3-004",    "name": "Uppgift 3",    "exercise": "I regressionsmodellen \\(L = 69{,}6 + 6{,}64I - 6{,}66G\\), där \\(L\\) är livslängd (i år), \\(I\\) är inkomst (i 100 000-tals kr) och \\(G\\) är kön (0 = kvinna, 1 = man), vad är den predikterade livslängden för en man med inkomst \\(I = 2{,}4\\) (dvs. 240 000 kr)? Avrunda till en decimal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "78.9" },    "answerformat": "",    "error": { "message": "Sätt in \\(I = 2{,}4\\) och \\(G = 1\\) i formeln: \\(L = 69{,}6 + 6{,}64 \\cdot 2{,}4 - 6{,}66 \\cdot 1\\). Räkna ut varje term." },    "correct": { "message": "Rätt! \\(L = 69{,}6 + 6{,}64 \\cdot 2{,}4 - 6{,}66 \\cdot 1 = 69{,}6 + 15{,}936 - 6{,}66 \\approx 78{,}9\\) år. (Jämför med den faktiska observationen: Jokkmokk, män, livslängd 79,2 år.)" }  },  {    "id": "k2-4-3-005",    "name": "Uppgift 4",    "exercise": "Vad är anledningen till att det är viktigt att inkludera alla relevanta variabler i en regressionsanalys?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Fler variabler gör alltid modellen mer statistiskt signifikant",          "Utelämnade relevanta variabler kan ge missvisande eller rent felaktiga koefficienter för de variabler som ingår",          "Det är ett lagkrav i vetenskapliga studier",          "Fler variabler sänker alltid modellens felterm"        ],        "correct": "Utelämnade relevanta variabler kan ge missvisande eller rent felaktiga koefficienter för de variabler som ingår"      }    },    "error": { "message": "Tänk på vad som händer med övriga koefficienter om en relevant variabel utelämnas ur modellen." },    "correct": { "message": "Rätt! Utelämnade relevanta variabler förorenar koefficienterna för de variabler som är med i modellen. Koefficienten för en variabel kan t.o.m. byta tecken när en relevant kontrollvariabel läggs till — ett fenomen känt som Simpsons paradox." }  },  {    "id": "k2-4-3-006",    "name": "Uppgift 5",    "exercise": "I en klinisk studie verkar läkemedel A ha lägre effekt än läkemedel B totalt sett. Men när patienterna delas upp efter sjukdomens svårighetsgrad visar det sig att läkemedel A har <em>högre</em> effekt i både gruppen med lindriga och gruppen med allvarliga fall. Vad kallas detta fenomen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": ["Multikolinjäritet", "Simpsons paradox", "Heteroskedasticitet", "Urvalsbias"],        "correct": "Simpsons paradox"      }    },    "error": { "message": "Fenomenet innebär att ett samband byter riktning när man kontrollerar för en tredje variabel. Läkemedel A ges i detta exempel till fler allvarligt sjuka patienter — hur påverkar det den totala effekten?" },    "correct": { "message": "Rätt! Det här är Simpsons paradox: läkemedel A ges till fler allvarligt sjuka patienter, vilket drar ned den totala effekten — trots att det faktiskt är bättre inom varje patientgrupp. Det visar varför det är avgörande att konstanthålla relevanta variabler i regressionsanalys." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-3"></div>

## Regression med matriser {#k2-4-4}

### Begrepp

- **Matrisinvers:** Inversen av en matris [\\(A\_{n \\times n}\\)]{.math .inline} skrivs [\\(A\^{- 1}\\)]{.math .inline} och existerar om det finns en matris [\\(B\_{n \\times n}\\)]{.math .inline} där [\\(AB = BA = I\_{n}\\)]{.math .inline} och [\\(I\_{n}\\)]{.math .inline} är identitetsmatrisen.

- **Regressionsmodell skriven med matriser:** [\\(Y = XB + V\\)]{.math .inline}, där kolumnmatris [\\(Y\\)]{.math .inline} innehåller alla observationer av förklarade variabeln, matris [\\(X\\)]{.math .inline} innehåller observationer för samtliga förklarande variabler och kolumnmatris [\\(V\\)]{.math .inline} innehåller samtliga feltermer.

- **Koefficienternas estimator:** [\\(\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\)]{.math .inline}

### Teori

I detta avsnitt ska vi börja använda oss av matriser. Om du är ovan vid detta bör du försäkra dig om att du är bekant med de nödvändiga grunderna under Mattebokens avsnitt för [vektorer](https://www.matteboken.se/lektioner/matte-1/geometri/rakna-med-vektorer?gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_EE4luBpXEIA9dSFbMXRyktZXjcMTbPazinfY10UYe1KPWbXYpX71waAvC4EALw_wcB#!/) och [matriser](https://www.matteboken.se/lektioner/mattespecialisering/linjar-algebra/matriser?gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_HqWpw9cEdTu7hflPh5m_Fnb4iWC93EoIgi7FGQA0aPz5cK7yNNnw8aAsN7EALw_wcB#!/).

Detta avsnitt introducerar matriser i regressionsanalys. Matriser är ett kraftfullt verktyg men matematiken kan kännas abstrakt. Eftersom beräkningar görs med datorer behöver du inte kunna detta för hand. Du behöver inte heller förstå detaljerna. Fokusera på att förstå vad matriserna representerar. Om du känner dig överväldigad kan du hoppa till sammanfattningen i slutet eller gå till nästa avsnitt. Du kan fortfarande förstå regression utan någon djupare kunskap om matrisräkning.

Varför du ändå bör försöka lära dig detta: Genom att gå igenom logiken i matrisräkningen på ett övergripande plan kommer du få en djupare förståelse metoden. Logiken i regressionsanalys som presenteras här har en central betydelse för vetenskap generellt och är avgörande för hur vi tänker på orsakssamband och världen i stort. Huvudbudskapet är alltså mer teoretiskt eller filosofiskt, snarare än matematiskt.

Mer konkret får du dessutom en förståelse för hur statistikprogram faktiskt arbetar, förmåga att generalisera till valfritt antal variabler och grund för senare avancerade koncept (varians-kovariansmatriser).

#### Inversen av en matris

I detta avsnitt ska vi bland annat använda *inversen av matriser*, även kallat *inversmatriser*. Om vi dividerar siffran 1 med ett reellt tal *a* får vi [\\(\\frac{1}{a} = a\^{- 1}\\)]{.math .inline}. Detta innebär även att [\\(\\frac{a}{a} = a\^{1}a\^{- 1} = 1\\)]{.math .inline}. Talet [\\(a\^{- 1}\\)]{.math .inline} kallas för multiplikativa inversen av [\\(a\\)]{.math .inline}. För matriser kan man inte utföra någon division på samma sätt som man gör med vanliga tal. I stället har vi inversen av matriser.

En [\\(n \\times n\\)]{.math .inline} (lika många rader som kolumner) matris [\\(A\\)]{.math .inline} är inverterbar (inversen av A existerar) om det existerar en [\\(n \\times n\\)]{.math .inline} matris [\\(B\\)]{.math .inline}, vars egenskaper innebär följande:

[\\(AB = BA = I\_{n}\\)]{.math .inline} (1)

där [\\(I\_{n}\\)]{.math .inline} är en identitetsmatris med [\\(n \\times n\\)]{.math .inline} rader och kolumner. Själva inversen av matris [\\(A\\)]{.math .inline} kan skrivas [\\(A\^{- 1}\\)]{.math .inline}. Alla matriser har inte en inversmatris.

Det finns olika metoder för att beräkna inversen av en matris. En metod är [Gausselimination](https://www.matteboken.se/lektioner/mattespecialisering/linjar-algebra/gausselimination#!/). Här är ett annat exempel. Säg att vi har följande matris [\\(A\\)]{.math .inline}:

[\\(A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}\\)]{.math .inline} (2)

där [\\(a\\)]{.math .inline}, [\\(b\\)]{.math .inline}, [\\(c\\)]{.math .inline} och [\\(d\\)]{.math .inline} är valfria tal. Inversmatrisen [\\(A\^{- 1}\\)]{.math .inline} kan då beräknas som:

[\\(A\^{- 1} = \\frac{1}{ad - cb}\\begin{bmatrix} d & - b \\\\ - c & a \\end{bmatrix} = \\begin{bmatrix} \\frac{d}{ad - cb} & - \\frac{b}{ad - cb} \\\\ - \\frac{c}{ad - cb} & \\frac{a}{ad - cb} \\end{bmatrix}\\)]{.math .inline} (3)

En viktig egenskap för inversen av matris [\\(A\\)]{.math .inline} är följande: [\\(AA\^{- 1} = I\\)]{.math .inline}, det vill säga att matris [\\(A\\)]{.math .inline} matrismultiplicerad med dess invers [\\(A\^{- 1}\\)]{.math .inline} är lika med identitetsmatrisen [\\(I\\)]{.math .inline}.

På [denna webbsida](https://www.mathsisfun.com/algebra/matrix-inverse.html) kan du se räkneexempel på engelska. Se även [Wikipedia](https://en.wikipedia.org/wiki/Invertible_matrix). Många datorprogram har färdiga kommandon för att utföra denna typ av beräkningar.

#### Ett generellt uttryck för vår regressionsmodell

I [avsnitt 3.4](https://www.dropbox.com/scl/fi/v0a5z69slwsy7pe20fp7d/3-4-H-rled-estimatorerna.docx?rlkey=kdu3tyfzbzhxk9o1g4xhf17x4&dl=0) härledde vi koefficienternas estimatorer för en regressionsmodell med två variabler. I detta avsnitt ska vi härleda ett mer generellt uttryck för estimatorerna utifrån en regressionsmodell med ett valfritt antal koefficienter och variabler. För detta ska vi använda matriser. Vi börjar med förutsättningarna:

- Säg att vi har en regressionsmodell med många koefficienter, variabler och observationer. Modellen kan sammanfattas som [\\(y\_{i} = b\_{1} + b\_{2}x\_{1} + b\_{3}x\_{2} + \\ldots + b\_{k}x\_{k} + v\_{i}\\)]{.math .inline} där [\\(y\_{i}\\)]{.math .inline} är förklarade variabeln för observation [\\(i\\)]{.math .inline}. [\\(b\_{0}\\)]{.math .inline} till [\\(b\_{k}\\)]{.math .inline} är koefficienterna vi ska estimera med hjälp av minstakvadratmetoden.

- [\\(x\_{1}\\)]{.math .inline} till [\\(x\_{k}\\)]{.math .inline} är de förklarande variablerna. Vi har [\\(k\\)]{.math .inline} stycken förklarande variabler. [\\(v\_{i}\\)]{.math .inline} är feltermen. Den första koefficienten [\\(b\_{0}\\)]{.math .inline} multipliceras inte med någon förklarande variabel. Koefficient [\\(b\_{0}\\)]{.math .inline} är konstanten i modellen (på samma sätt som bokstaven [\\(a\\)]{.math .inline} i modellen [\\(Y = a + bX + \\epsilon\\)]{.math .inline}).

- Vi samlar alla koefficienter [\\(b\\)]{.math .inline} i en kolumnmatris [\\(B\\)]{.math .inline}, med lika många rader som koefficienter. Eftersom vi har [\\(k\\)]{.math .inline} antal koefficienter har matris [\\(B\\)]{.math .inline} dimensionerna [\\(k \\times 1\\)]{.math .inline}.

- Våra förklarande variabler [\\(x\_{1}\\)]{.math .inline} till [\\(x\_{k}\\)]{.math .inline} samlar vi i matris [\\(X\\)]{.math .inline}. Respektive kolumn i matris [\\(X\\)]{.math .inline} innehåller värdena för en förklarande variabel. Om första koefficienten [\\(b\_{0}\\)]{.math .inline} i regressionsmodellen inte multipliceras med någon variabel består första kolumnen i [\\(X\\)]{.math .inline} av siffran 1 i varje cell.

- Nästa kolumn i matris [\\(X\\)]{.math .inline} innehåller observerade värden för den första förklarande variabeln. Lika många rader som antal observationer, [\\(n\\)]{.math .inline}. Därefter följer en kolumn per förklarande variabel. Matris [\\(X\\)]{.math .inline} har dimensionerna [\\(n \\times k\\)]{.math .inline}.

- Feltermen, [\\(v\_{1},v\_{2},\\ldots,v\_{n}\\)]{.math .inline}, samlar vi i matris [\\(V\\)]{.math .inline}. Vi har lika många feltermer som observationer, [\\(n\\)]{.math .inline}.

Vår regressionsmodell kan nu skrivas med matriser:

[\\(\\left\\lbrack \\begin{array}{r} \\begin{matrix} y\_{1} \\\\ y\_{2} \\\\ \\vdots \\end{matrix} \\\\ y\_{n} \\end{array} \\right\\rbrack\_{n \\times 1} = \\begin{bmatrix} 1 & x\_{11} & x\_{21} & \\ldots & x\_{k1} \\\\ 1 & x\_{12} & x\_{22} & \\ldots & x\_{k2} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 1 & x\_{1n} & x\_{2n} & \\ldots & x\_{kn} \\end{bmatrix}\_{n \\times k}\\left\\lbrack \\begin{array}{r} \\begin{matrix} b\_{1} \\\\ b\_{2} \\\\ \\vdots \\end{matrix} \\\\ b\_{k} \\end{array} \\right\\rbrack\_{k \\times 1} = \\left\\lbrack \\begin{array}{r} \\begin{matrix} v\_{1} \\\\ v\_{2} \\\\ \\vdots \\end{matrix} \\\\ v\_{n} \\end{array} \\right\\rbrack\_{n \\times 1}\\)]{.math .inline} (4)

[\\\[Y = XB + V\\\]]{.math .display}

där [\\(x\_{11}\\)]{.math .inline} syftar på första förklarande variabeln och första observationen. [\\(x\_{21}\\)]{.math .inline} är andra förklarande variabeln, första observationen.

I matrisform får vi en kolumnmatris [\\(Y\\)]{.math .inline}, en matris [\\(X\\)]{.math .inline} med konstanten 1 och förklarande variablerna i varsin kolumn, en kolumnmatris [\\(B\\)]{.math .inline} med koefficienterna och en kolumnmatris [\\(V\\)]{.math .inline} med feltermerna. Detta är den linjära relationen i populationen som vi nu ska försöka estimera med hjälp av minstakvadratmetoden.

#### Formulerad som ett minimeringsproblem

Precis som tidigare innebär minstakvadratmetoden att vi vill minimera kvadrerade residualerna. Utifrån vår regressionsmodell kan vi nu formulera vårt minimeringsproblem.

Vi söker de estimerade koefficienterna [\\(\\widehat{B}\\)]{.math .inline} som minimerar summan av de kvadrerade residualerna. Vi börjar med att sätta in [\\(\\widehat{B}\\)]{.math .inline} och [\\(\\widehat{V}\\)]{.math .inline} i vår ekvation och flyttar om lite så att vi får en ekvation där residualerna [\\(\\widehat{V}\\)]{.math .inline} är ett resultat av de andra termerna i modellen:

[\\(\\widehat{V} = Y - X\\widehat{B}\\)]{.math .inline} (5)

[\\(\\widehat{V}\\)]{.math .inline} är en kolumnmatris och vi kan inte få kvadrerade residualer genom att multiplicera [\\(\\widehat{V}\\widehat{V}\\)]{.math .inline}. Detta är inte definierat för matriser då antal kolumner i vänstra matrisen måste vara lika med antal rader i högra matrisen (se [avsnittet om matriser](https://www.matteboken.se/lektioner/mattespecialisering/linjar-algebra/matriser?gad_source=1&gclid=CjwKCAiAqfe8BhBwEiwAsne6gdOGDG7qUuMqObnz8SmJDfQbaIMvRVSfHRhFowJ8GS0rW_NdzRc58xoC0iYQAvD_BwE#!/)). För att få summan av de kvadrerade residualerna i matris [\\(\\widehat{V}\\)]{.math .inline} multiplicerar vi i stället transponerade [\\({\\widehat{V}}\^{T}\\)]{.math .inline} med [\\(\\widehat{V}\\)]{.math .inline}:

[\\({\\widehat{V}}\^{T}\\widehat{V} = \\left\\lbrack v\_{1} + v\_{2} + \\ldots + v\_{n} \\right\\rbrack \\times \\begin{bmatrix} v\_{1} \\\\ v\_{2} \\\\ \\vdots \\\\ v\_{n} \\end{bmatrix} = \\left\\lbrack v\_{1}\^{2} + v\_{2}\^{2} + \\ldots + v\_{n}\^{2} \\right\\rbrack\\)]{.math .inline} (6)

Denna ekvation kan vi skriva om genom att använda definitionen av [\\(\\widehat{V}\\)]{.math .inline} från ekvation 2:

[\\({\\widehat{V}}\^{T}\\widehat{V} = \\left( Y - X\\widehat{B} \\right)\\left( Y - X\\widehat{B} \\right)\\)]{.math .inline} (7)[\\( \\)]{.math .inline}[\\\[= Y\^{T}Y - Y\^{T}X\\widehat{B} - {\\widehat{B}}\^{T}X\^{T}Y + {\\widehat{B}}\^{T}X\^{T}X\\widehat{B}\\\]]{.math .display}

där en matris upphöjd till [\\(T\\)]{.math .inline} betyder transponerad matris. Generellt för transponerade matriser gäller att [\\(Y\^{T}\\widehat{B}X = \\left( {\\widehat{B}}\^{T}X\^{T}Y \\right)\^{T}\\)]{.math .inline}. Detta innebär att vi nu kan skriva:

[\\({\\widehat{V}}\^{T}\\widehat{V} = Y\^{T}Y - 2{\\widehat{B}}\^{T}X\^{T}Y + {\\widehat{B}}\^{T}X\^{T}X\\widehat{B}\\)]{.math .inline} (8)

Nu har vi ett uttryck för kvadrerade residualerna i [\\({\\widehat{V}}\^{T}\\widehat{V}\\)]{.math .inline} och det är denna ekvation vi ska minimera med hänsyn till våra koefficienter i matris [\\(\\widehat{B}\\)]{.math .inline}:

[\\(\\min\_{\\widehat{B}}\\left( {\\widehat{V}}\^{T}\\widehat{V} \\right)\\)]{.math .inline} (9)

Vi deriverar därför ekvation 5 med hänsyn till [\\(\\widehat{B}\\)]{.math .inline} och sätter resultatet lika med 0, vilket ger oss förstagradsvillkoren:

[\\(\\frac{\\partial{\\widehat{V}}\^{T}\\widehat{V}}{\\partial\\widehat{B}} = - 2X\^{T}Y + 2X\^{T}X\\widehat{B} = 0\\)]{.math .inline} (10)

Från detta kan vi lösa ut [\\(\\widehat{B}\\)]{.math .inline}. Första steget är att flytta över den negativa termen [\\(- 2X\^{T}Y\\)]{.math .inline} till högerledet och dividera båda sidor med 2:

[\\(- 2X\^{T}Y + 2X\^{T}X\\widehat{B} = 0\\)]{.math .inline} (11)

[\\\[\\left( X\^{T}X \\right)\\widehat{B} = X\^{T}Y\\\]]{.math .display}

Vi vet att matrisen [\\(\\left( X\^{T}X \\right)\\)]{.math .inline} är kvadratisk och symmetrisk med dimensionerna [\\(k \\times k\\)]{.math .inline}, där [\\(k\\)]{.math .inline} är antal förklarande variabler plus konstanten. Vi multiplicerar båda sidor med inversen av denna matris [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline}. Multiplikationen av inverterade matrisen [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline} och [\\(\\left( X\^{T}X \\right)\\)]{.math .inline} är lika med identitetsmatrisen [\\(I\\)]{.math .inline}, en matris med värdet 1 på diagonalen.

Eftersom [\\(I\\widehat{B} = \\widehat{B}\\)]{.math .inline} får vi nu en definition av [\\(\\widehat{B}\\)]{.math .inline}:

[\\(\\left( X\^{T}X \\right)\^{- 1}\\left( X\^{T}X \\right)\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\)]{.math .inline} (12)

[\\\[I\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\\]]{.math .display}

[\\\[\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\\]]{.math .display}

Detta är estimatorn för samtliga koefficienter i matris [\\(B\\)]{.math .inline}. Med hjälp av denna ekvation och våra urvalsdata kan vi beräkna uppskattade värden av koefficienterna som återfinns i populationen vi studerar.

#### Vad var poängen med allt det här?

Vi har nu ett uttryck för estimerade koefficienterna [\\(\\widehat{B}\\)]{.math .inline} som en funktion av de förklarande variablerna i [\\(X\\)]{.math .inline} och den förklarade variabeln i [\\(Y\\)]{.math .inline}: [\\(\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\)]{.math .inline}

Regressionsanalys innebär att vi kan uppskatta samvariationen mellan ett fenomen och ett annat fenomen, samtidigt som vi kontrollerar för andra fenomen. Matriserna ovan beskriver hur detta fungerar när vi har många variabler och koefficienter.

En viktig sak med denna matematik är att samtliga koefficienter i [\\(\\widehat{B}\\)]{.math .inline} är ett resultat av samtliga variabler i [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline}, oavsett hur många variabler vi har. I matriserna [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} ingår alla observationer för respektive variabel. Alla variabler i regressionsmodellen kan därför påverka resultaten för alla koefficienter i regressionsmodellen. Detta är centralt för hur vi tänker att världen fungerar, vilket vi ska fördjupa oss i kommande avsnitt.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-4"]=[  {    "id": "k2-4-4-001",    "name": "Uppgift 1",    "exercise": "Hur skrivs regressionsmodellen \\(y_i = b_1 + b_2 x_1 + b_3 x_2 + \\ldots + b_{k+1} x_k + v_i\\) i kompakt matrisform?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(Y = B + X + V\\)",          "\\(Y = XB + V\\)",          "\\(Y = X^T B + V\\)",          "\\(B = XY + V\\)"        ],        "correct": "\\(Y = XB + V\\)"      }    },    "error": { "message": "Tänk på hur regressionsmodellen skrivs med matriserna Y (förklarad variabel), X (förklarande variabler), B (koefficienter) och V (feltermer)." },    "correct": { "message": "Rätt! Regressionsmodellen skrivs i matrisform som \\(Y = XB + V\\), där Y är kolumnmatrisen med observationer av den förklarade variabeln, X är matrisen med de förklarande variablerna, B är kolumnmatrisen med koefficienterna och V är feltermerna." }  },  {    "id": "k2-4-4-002",    "name": "Uppgift 2",    "exercise": "Vad är estimatorn för koefficientvektorn \\(\\widehat{B}\\) i matrisformuleringen av minstakvadratmetoden?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\widehat{B} = X^T Y\\)",          "\\(\\widehat{B} = (X^T X) X^T Y\\)",          "\\(\\widehat{B} = (X^T X)^{-1} X^T Y\\)",          "\\(\\widehat{B} = (XX^T)^{-1} X Y\\)"        ],        "correct": "\\(\\widehat{B} = (X^T X)^{-1} X^T Y\\)"      }    },    "error": { "message": "Tänk på härledningen: vi löser ut \\(\\widehat{B}\\) ur normalvillkoren \\((X^T X)\\widehat{B} = X^T Y\\). Hur multiplicerar vi båda sidor för att isolera \\(\\widehat{B}\\)?" },    "correct": { "message": "Rätt! Estimatorn för koefficientvektorn är \\(\\widehat{B} = (X^T X)^{-1} X^T Y\\). Denna formel ger oss alla koefficienter i regressionsmodellen, oavsett hur många förklarande variabler vi har." }  },  {    "id": "k2-4-4-003",    "name": "Uppgift 3",    "exercise": "Varför är matrisformuleringen av regressionsanalys särskilt värdefull jämfört med de formelbaserade estimatorerna för 2 eller 3 variabler?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Matrisformeln ger alltid mer exakta numeriska svar",          "Matrisformeln är densamma oavsett antal variabler och observationer",          "Matrisformeln eliminerar feltermen ur modellen",          "Matrisformeln kräver inte att data är normalfördelat"        ],        "correct": "Matrisformeln är densamma oavsett antal variabler och observationer"      }    },    "error": { "message": "Tänk på varför man väljer att skriva regressionsmodellen med matriser istället för separata formler per variabel. Vad är den centrala fördelen?" },    "correct": { "message": "Rätt! Matrisformeln \\(\\widehat{B} = (X^T X)^{-1} X^T Y\\) gäller för valfritt antal variabler och observationer. Utan matriser behöver vi en ny och allt mer komplicerad formel för varje extra variabel." }  },  {    "id": "k2-4-4-006",    "name": "Uppgift 4",    "exercise": "I regressionsanalys beräknas varians-kovariansmatrisen \\(\\sigma_V^2(X^TX)^{-1}\\). Vad är det primära syftet med denna matris?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att beräkna de estimerade koefficienterna \\(\\widehat{B}\\)",          "Att kvantifiera osäkerheten i de estimerade koefficienterna, så att vi kan testa om de är skilda från noll",          "Att beräkna \\(R^2\\) och modellens förklaringsgrad",          "Att kontrollera om regressionsmodellen är korrekt specificerad"        ],        "correct": "Att kvantifiera osäkerheten i de estimerade koefficienterna, så att vi kan testa om de är skilda från noll"      }    },    "error": { "message": "Koefficienterna \\(\\widehat{B}\\) beräknas redan av \\((X^TX)^{-1}X^TY\\). Vad behöver vi utöver själva koefficienterna för att kunna dra slutsatser om dem?" },    "correct": { "message": "Rätt! Varians-kovariansmatrisen ger oss standardfelen för varje koefficient — ett mått på hur osäkra estimaten är. Utan standardfelen vet vi inte om en koefficient på t.ex. 0,5 är ett tillförlitligt resultat eller ett brusigt estimat. Det är standardfelen som möjliggör t-test och konfidensintervall." }  },  {    "id": "k2-4-4-007",    "name": "Uppgift 5",    "exercise": "Matrisen \\(X\\) i regressionsmodellen \\(Y = XB + V\\) har dimensionen \\(n \\times k\\), där \\(n\\) är antal observationer och \\(k\\) är antal koefficienter. Vad är dimensionen på produkten \\(X^TX\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(n \\times n\\)",          "\\(k \\times k\\)",          "\\(n \\times k\\)",          "\\(k \\times n\\)"        ],        "correct": "\\(k \\times k\\)"      }    },    "error": { "message": "\\(X^T\\) har dimensionen \\(k \\times n\\) och \\(X\\) har dimensionen \\(n \\times k\\). Vad är dimensionen på produkten av en \\((k \\times n)\\)-matris och en \\((n \\times k)\\)-matris?" },    "correct": { "message": "Rätt! \\(X^T\\) är \\(k \\times n\\) och \\(X\\) är \\(n \\times k\\), så \\(X^TX\\) är \\(k \\times k\\). Det innebär att \\((X^TX)^{-1}\\) också är \\(k \\times k\\) — en kvadratisk matris med en rad och kolumn per koefficient." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-4"></div>

## Estimera med matriser {#k2-4-5}

### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

I tidigare avsnitt räknade vi med formler för 2 och 3 variabler. Men vad händer om vi har 10 variabler? Eller 100? Matriser låter oss sammanfatta denna typ av beräkningar i en enda kompakt kortfattad formel som fungerar för valfritt antal variabler.

I dessa exempel ser du att matrismetoden ger exakt samma svar som de tidigare metoderna. Men med matriser blir det tydligt att metoden är generaliserbar till valfritt antal variabler eller valfritt antal observationer. Därigenom blir det förhoppningsvis även tydligare vad som är metodens stora fördelar och begränsningar.

#### Exempel nr 1

I föregående avsnitt definierade vi minstakvadratmetodens estimator för koefficienterna i en regressionsmodell beskriven med matriser. Låt oss prova hur vi kan använda detta för att estimera modeller utifrån data. Här följer tre exempel där vi återanvänder data och regressionsmodeller från tidigare exempel.

Låt oss nu återanvända den första regressionsmodellen och observationerna för denna som vi introducerade i [avsnitt 2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0): [\\(Y = a + bX + V\\)]{.math .inline}. Men denna gång ska vi estimera modellen med matriser. Samma observationer som vi använt tidigare upprepas i tabell 1.

**Tabell 1: Variablerna** [\\(X\\)]{.math .inline} **och** [\\(Y\\)]{.math .inline}

  --------------------------------------------------------------------------------------------
  Observation [\\(i\\)]{.math .inline}   [\\(Y\\)]{.math .inline}   [\\(X\\)]{.math .inline}
  -------------------------------------- -------------------------- --------------------------
  1                                      3                          3

  2                                      4                          2

  3                                      6                          5

  4                                      7                          4
  --------------------------------------------------------------------------------------------

Vi börjar med att beskriva regressionsmodellen med matriser:

[\\(Y = XB + V\\)]{.math .inline} (1)

[\\\[\\begin{bmatrix} 3 \\\\ 4 \\\\ 6 \\\\ 7 \\end{bmatrix} = \\begin{bmatrix} 1 & 3 \\\\ 1 & 2 \\\\ 1 & 5 \\\\ 1 & 4 \\end{bmatrix}\\begin{bmatrix} a \\\\ b \\end{bmatrix} + \\begin{bmatrix} v\_{1} \\\\ v\_{2} \\\\ v\_{3} \\\\ v\_{4} \\end{bmatrix}\\\]]{.math .display}

Vår estimator för koefficienterna skriven med matriser är följande:

[\\(\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\)]{.math .inline} (2)

Vi ska nu visa alla beräkningssteg här för att du ska förstå vad som händer. I praktiken gör datorer detta automatiskt. Fokusera på att förstå strukturen. Du måste inte förstå varje enskilt räknesteg.

Om vi dessa matriserna i ekvation 2 får vi estimaten av (de uppskattade) koefficienterna:

[\\(\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\)]{.math .inline} (3)

[\\\[\\left\\lbrack \\begin{array}{r} \\widehat{a} \\\\ \\widehat{b} \\end{array} \\right\\rbrack = \\left( \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 3 & 4 & 6 & 7 \\end{bmatrix}\\begin{bmatrix} 1 & 3 \\\\ 1 & 4 \\\\ 1 & 6 \\\\ 1 & 7 \\end{bmatrix} \\right)\^{- 1}\\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 3 & 4 & 6 & 7 \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 2 \\\\ 5 \\\\ 4 \\end{bmatrix}\\\]]{.math .display}

Vi beräknar inversen [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline} först:

[\\(\\left\\lbrack \\begin{array}{r} \\widehat{a} \\\\ \\widehat{b} \\end{array} \\right\\rbrack = \\begin{bmatrix} 4 & 20 \\\\ 20 & 110 \\end{bmatrix}\^{- 1}\\left\\lbrack \\begin{array}{r} 14 \\\\ 75 \\end{array} \\right\\rbrack\\)]{.math .inline} (4)[\\( \\)]{.math .inline}[\\\[{= \\frac{1}{4\*110 - ( - 20)\*( - 20)}\\begin{bmatrix} 110 & - 20 \\\\ - 20 & 4 \\end{bmatrix}\\left\\lbrack \\begin{array}{r} 14 \\\\ 75 \\end{array} \\right\\rbrack }{= \\left( \\frac{1}{440 - 400} \\right)\\begin{bmatrix} 110 & - 20 \\\\ - 20 & 4 \\end{bmatrix}\\left\\lbrack \\begin{array}{r} 14 \\\\ 75 \\end{array} \\right\\rbrack }{= \\begin{bmatrix} \\frac{110}{40} & \\frac{- 20}{40}\\ \\\\ \\frac{- 20}{40} & \\frac{4}{40} \\end{bmatrix}\\left\\lbrack \\begin{array}{r} 14 \\\\ 75 \\end{array} \\right\\rbrack }{= \\begin{bmatrix} \\frac{11}{4} & - \\frac{1}{2} \\\\ - \\frac{1}{2} & \\frac{1}{10} \\end{bmatrix}\\left\\lbrack \\begin{array}{r} 14 \\\\ 75 \\end{array} \\right\\rbrack }{= \\left\\lbrack \\begin{array}{r} 1 \\\\ 0,5 \\end{array} \\right\\rbrack }\\\]]{.math .display}

Vårt resultat visar att [\\(\\widehat{a} = 1\\)]{.math .inline} och [\\(\\widehat{b} = 0,5\\)]{.math .inline}, vilket är samma sak som vi kom fram till tidigare.

#### Exempel nr 2

Låt oss även göra samma sak för regressionsmodellen från [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0): [\\(Y = a + bX + cZ + V\\)]{.math .inline}, vilket vi kan skriva med matriser som:

[\\(Y = XB + V\\)]{.math .inline} (5)

där matris [\\(X\\)]{.math .inline} innehåller variablerna [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline} och matris [\\(B\\)]{.math .inline} innehåller koefficienterna [\\(a\\)]{.math .inline}, [\\(b\\)]{.math .inline} och [\\(c\\)]{.math .inline}. [\\(V\\)]{.math .inline} är feltermerna och [\\(Y\\)]{.math .inline} förklarande variabeln. Observationerna vi ska använda upprepas i tabell 2.

**Tabell 2: Variablerna** [\\(Y\\)]{.math .inline}, [\\(X\\)]{.math .inline} **och** [\\(Z\\)]{.math .inline}

  --------------------------------------------------------------------------------------------------------------------------------
  Observation [\\(i\\)]{.math .inline}   [\\\[Y\\\]]{.math .display}   [\\\[X\\\]]{.math .display}   [\\\[Z\\\]]{.math .display}
  -------------------------------------- ----------------------------- ----------------------------- -----------------------------
  1                                      3                             3                             1

  2                                      2                             4                             4

  3                                      5                             6                             0

  4                                      4                             7                             1
  --------------------------------------------------------------------------------------------------------------------------------

För att estimera koefficienterna kan vi nu ta:

[\\(\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\)]{.math .inline} (6)

[\\\[\\left\\lbrack \\begin{array}{r} \\widehat{a} \\\\ \\widehat{b} \\\\ \\widehat{c} \\end{array} \\right\\rbrack = \\left( \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 3 & 4 & 6 & 7 \\\\ 1 & 4 & 0 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 3 & 1 \\\\ 1 & 4 & 4 \\\\ 1 & 6 & 0 \\\\ 1 & 7 & 1 \\end{bmatrix} \\right)\^{- 1}\\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 3 & 4 & 6 & 7 \\\\ 1 & 4 & 0 & 1 \\end{bmatrix}\\left\\lbrack \\begin{array}{r} 3 \\\\ 2 \\\\ 5 \\\\ 4 \\end{array} \\right\\rbrack\\\]]{.math .display}

[\\\[\\left\\lbrack \\begin{array}{r} \\widehat{a} \\\\ \\widehat{b} \\\\ \\widehat{c} \\end{array} \\right\\rbrack = \\begin{bmatrix} 4 & 20 & 6 \\\\ 20 & 110 & 26 \\\\ 6 & 26 & 18 \\end{bmatrix}\^{- 1}\\left\\lbrack \\begin{array}{r} 14 \\\\ 75 \\\\ 15 \\end{array} \\right\\rbrack\\\]]{.math .display}

[\\\[\\left\\lbrack \\begin{array}{r} \\widehat{a} \\\\ \\widehat{b} \\\\ \\widehat{c} \\end{array} \\right\\rbrack \\approx \\left\\lbrack \\begin{array}{r} 2,9 \\\\ 0,3 \\\\ - 0,5 \\end{array} \\right\\rbrack\\\]]{.math .display}

Sista raden innehåller de avrundade resultaten [\\(\\widehat{a} \\approx 2,9\\)]{.math .inline}, [\\(\\widehat{b} \\approx 0,3\\)]{.math .inline} och [\\(\\widehat{c} \\approx - 0,5\\)]{.math .inline}. Detta är samma sak som vi kom fram till i [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0).

#### Exempel nr 3

I [avsnitt 3.2](https://www.dropbox.com/scl/fi/mvvykgc4cvkvdgxcbcq4x/3-2-En-modell-till.docx?rlkey=pfuhm3ijlm56lxoq339rhms2c&dl=0) använde vi fyra observationer för variablerna [\\(Z\\)]{.math .inline} och [\\(K\\)]{.math .inline} vilka upprepas i tabell 3. Med dessa observationer estimerade vi regressionsmodellen [\\(Z = \\alpha + \\beta K + \\epsilon\\)]{.math .inline}, där [\\(\\epsilon\\)]{.math .inline} är feltermen och [\\(\\alpha\\)]{.math .inline} och [\\(\\beta\\)]{.math .inline} är modellens koefficienter, som vi fann var [\\(\\widehat{\\alpha} = 2,5\\)]{.math .inline} och [\\(\\widehat{\\beta} = - 0,5\\)]{.math .inline}.

**Tabell 3: Variablerna** [\\(Z\\)]{.math .inline} **och** [\\(K\\)]{.math .inline}

  ---------------------------------------------------------------------
  Observation i   [\\(Z\\)]{.math .inline}   [\\(K\\)]{.math .inline}
  --------------- -------------------------- --------------------------
  1               1                          0

  2               4                          0

  3               0                          4

  4               1                          4
  ---------------------------------------------------------------------

Med matriser kan vi skriva denna regressionsmodell som [\\(Z = KB + E\\)]{.math .inline}, där [\\(Z\\)]{.math .inline} är den förklarade variabeln, [\\(B\\)]{.math .inline} är en matris med koefficienterna [\\(\\alpha\\)]{.math .inline} och [\\(\\beta\\)]{.math .inline}, [\\(K\\)]{.math .inline} är en kolumnmatris med förklarande variabeln och [\\(E\\)]{.math .inline} är feltermerna. Estimatorn kan här skrivas:

[\\(\\widehat{B} = \\left( K\^{T}K \\right)\^{- 1}K\^{T}Z\\)]{.math .inline} (7)

Detta ger oss följande estimat:

[\\(\\left\\lbrack \\begin{array}{r} \\widehat{\\alpha} \\\\ \\widehat{\\beta} \\end{array} \\right\\rbrack = \\left( \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 0 & 4 & 4 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 1 & 0 \\\\ 1 & 4 \\\\ 1 & 4 \\end{bmatrix} \\right)\^{- 1}\\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 0 & 4 & 4 \\end{bmatrix}\\left\\lbrack \\begin{array}{r} 1 \\\\ 4 \\\\ 0 \\\\ 1 \\end{array} \\right\\rbrack = \\left\\lbrack \\begin{array}{r} 2,5 \\\\ - 0,5 \\end{array} \\right\\rbrack\\)]{.math .inline} (8)

vilket är samma som vi kom fram till i [avsnitt 3.2](https://www.dropbox.com/scl/fi/mvvykgc4cvkvdgxcbcq4x/3-2-En-modell-till.docx?rlkey=pfuhm3ijlm56lxoq339rhms2c&dl=0).

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-5"]=[  {    "id": "k2-4-5-001",    "name": "Uppgift 1",    "exercise": "Regressionsmodellen \\(Y = a + bX + V\\) estimeras med matrismetoden. Matris \\(X\\) skrivs som:\\[X = \\begin{bmatrix} 1 & 3 \\\\ 1 & 4 \\\\ 1 & 6 \\\\ 1 & 7 \\end{bmatrix}\\]Varför innehåller första kolumnen enbart ettor?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är ett slumpmässigt val av värden",          "Ettor i första kolumnen representerar interceptet (konstanten) i regressionsmodellen",          "Ettor används för att normalisera datamaterialet",          "Den första kolumnen representerar observationsnumren 1 till 4"        ],        "correct": "Ettor i första kolumnen representerar interceptet (konstanten) i regressionsmodellen"      }    },    "error": { "message": "Tänk på vad den första koefficienten i \\(B = [a, b]^T\\) är. Vad multipliceras konstanten \\(a\\) med i regressionsmodellen?" },    "correct": { "message": "Rätt! Ettor i den första kolumnen representerar interceptet (konstanten \\(a\\)). Eftersom \\(a\\) inte multipliceras med någon variabel i modellen \\(Y = a + bX\\) multipliceras den med 1, vilket skapas med en kolumn av entor i matris X." }  },  {    "id": "k2-4-5-006",    "name": "Uppgift 2",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) med fyra observationer \\(X = \\{3, 4, 6, 7\\}\\) är matris \\(X\\):\\[X = \\begin{bmatrix} 1 & 3 \\\\ 1 & 4 \\\\ 1 & 6 \\\\ 1 & 7 \\end{bmatrix}\\]Beräkna \\(\\sum_{i=1}^{4}X_i^2\\), det vill säga summan av de kvadrerade \\(X\\)-värdena (andra kolumnen i \\(X\\)):",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "110" },    "answerformat": "Ange ett heltal",    "error": { "message": "Beräkna \\(3^2 + 4^2 + 6^2 + 7^2\\) och summera." },    "correct": { "message": "Rätt! \\(9 + 16 + 36 + 49 = 110\\). Detta värde är det nedre högra elementet i matrisen \\(X^TX\\): \\[\\begin{bmatrix} n & \\sum X_i \\\\ \\sum X_i & \\sum X_i^2 \\end{bmatrix} = \\begin{bmatrix} 4 & 20 \\\\ 20 & 110 \\end{bmatrix}\\] — vilket är utgångspunkten för att beräkna \\((X^TX)^{-1}\\)." }  },  {    "id": "k2-4-5-003",    "name": "Uppgift 3",    "exercise": "Med matrismetoden beräknas \\(\\widehat{B} = (X^T X)^{-1} X^T Y\\) och resultatet blev \\(\\widehat{a} = 1\\) och \\(\\widehat{b} = 0{,}5\\) för regressionsmodellen \\(Y = a + bX + V\\). Vilket av följande påståenden är korrekt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Matrismetoden ger ett annat svar än den traditionella formeln – matrismetoden är mer exakt",          "Matrismetoden ger exakt samma svar som den traditionella formeln – de är ekvivalenta",          "Matrismetoden kan bara användas för modeller med fler än två variabler",          "Matrismetoden ger alltid avrundade approximationer till de sanna koefficienterna"        ],        "correct": "Matrismetoden ger exakt samma svar som den traditionella formeln – de är ekvivalenta"      }    },    "error": { "message": "Vad var koefficienterna i samma modell när den estimerades utan matriser tidigare i kursen? Jämför svaren." },    "correct": { "message": "Rätt! Matrismetoden ger exakt samma svar (\\(\\widehat{a} = 1\\), \\(\\widehat{b} = 0{,}5\\)) som den traditionella formeln. Fördelen med matriser är inte att ge annorlunda svar, utan att ge en generell metod som fungerar för valfritt antal variabler." }  },  {    "id": "k2-4-5-004",    "name": "Uppgift 4",    "exercise": "Modellen \\(Y = a + bX + cZ + V\\) estimeras med matriser och man fick \\(\\widehat{a} \\approx 2{,}9\\), \\(\\widehat{b} \\approx 0{,}3\\) och \\(\\widehat{c} \\approx -0{,}5\\). Hur många rader och kolumner har matris \\(X\\) i detta fall (med 4 observationer och 2 förklarande variabler plus en konstant)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "4x3" },    "answerformat": "Ange svaret som 'rxk' (rader x kolumner), t.ex. '4x2'",    "error": { "message": "Antal rader i X = antal observationer n. Antal kolumner = antal koefficienter (konstant + antal förklarande variabler). Hur många koefficienter har modellen Y = a + bX + cZ?" },    "correct": { "message": "Rätt! Matris X har 4 rader (en per observation) och 3 kolumner (en för konstanten med ettor, en för X, en för Z). Dimensionen är \\(n \\times k = 4 \\times 3\\)." }  },  {    "id": "k2-4-5-005",    "name": "Uppgift 5",    "exercise": "Regressionsmodellen \\(Z = \\alpha + \\beta K + \\epsilon\\) estimerades med matriser och resultatet blev \\(\\widehat{\\alpha} = 2{,}5\\) och \\(\\widehat{\\beta} = -0{,}5\\). Vad är det predikterade värdet \\(\\widehat{Z}\\) för en observation med \\(K = 4\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "",    "error": { "message": "Sätt in \\(K = 4\\) i den estimerade regressionsformeln: \\(\\widehat{Z} = 2{,}5 + (-0{,}5) \\cdot 4\\)." },    "correct": { "message": "Rätt! \\(\\widehat{Z} = 2{,}5 + (-0{,}5) \\cdot 4 = 2{,}5 - 2 = 0{,}5\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-5"></div>

## Interaktion {#k2-4-6}

### Begrepp

- **Interaktionseffekt:** Analys av hur effekten av ett fenomen beror på tillståndet för ett annat fenomen.

### Teori

I detta avsnitt ska vi introducera interaktionseffekt. Hittills har vi antagit att effekten av [\\(X\\)]{.math .inline} på [\\(Y\\)]{.math .inline} är densamma oavsett värdet på [\\(Z\\)]{.math .inline}. Samvariationen (lutningskoefficienten för [\\(X\\)]{.math .inline}) är densamma oavsett om [\\(Z\\)]{.math .inline} har höga eller låga värden.

Men ibland påverkar andra fenomen (som [\\(Z\\)]{.math .inline}) hur starkt [\\(X\\)]{.math .inline} samvarierar med [\\(Y\\)]{.math .inline}. Detta kallas för interaktionseffekt. Exempel:

- Kanske samvarierar inkomst och livslängd olika starkt för män vs kvinnor

- Kanske har en medicin olika effekt beroende på patientens ålder

- Kanske påverkar utbildning inkomst olika mycket i olika länder

Matematiskt innebär interaktionseffekt att vi kombinerar två eller flera av de förklarande variablerna till en ny variabel, som att multiplicera [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}. Därigenom kan vi kontrollera om en förklarande variabels samvariation med den förklarade variabeln varierar beroende på värdena i en annan förklarande variabel.

#### Interaktionseffekten mellan x och z

Låt oss utgå från följande regressionsmodell:

[\\(y = a + bx + cz + \\epsilon\\)]{.math .inline} (1)

Observera att variablerna inte är skrivna med matriser utan i vanlig form. Modellen består av följande: [\\(x\\)]{.math .inline} och [\\(z\\)]{.math .inline} är förklarande variabler och [\\(y\\)]{.math .inline} är förklarad variabel, [\\(a\\)]{.math .inline}, [\\(b\\)]{.math .inline} och [\\(c\\)]{.math .inline} är koefficienter och [\\(\\epsilon\\)]{.math .inline} är feltermen.

Vi tror att samvariationen mellan [\\(y\\)]{.math .inline} och [\\(x\\)]{.math .inline} kan bero på vilket värde variabeln [\\(z\\)]{.math .inline} har. Det vill säga, vi vill bland annat undersöka om samvariationen mellan [\\(y\\)]{.math .inline} och [\\(x\\)]{.math .inline} ser olika ut när den tredje variabeln [\\(z\\)]{.math .inline} har höga värden, jämfört med när [\\(z\\)]{.math .inline} har låga värden. Detta kallas för en interaktionseffekt. [\\(z\\)]{.math .inline} kan också samvariera med [\\(y\\)]{.math .inline} för sig.

Interaktionseffekt mellan [\\(x\\)]{.math .inline} och [\\(z\\)]{.math .inline} kan vi estimera genom att skapa en ny variabel [\\(k = x\*z\\)]{.math .inline}, där vi för respektive observation multiplicerar värdet i [\\(x\\)]{.math .inline} med värdet i [\\(z\\)]{.math .inline}. Den nya variabeln [\\(k\\)]{.math .inline} lägger vi till i vår regressionsmodell med en egen lutningskoefficient:

[\\(y = a + bx + cz + dxz\\)]{.math .inline} (2)

[\\\[= a + bx + cz + dk\\\]]{.math .display}

Koefficient [\\(a\\)]{.math .inline}, modellens intercept, är precis som tidigare det värde som [\\(y\\)]{.math .inline} antar då alla andra variabler är lika med noll [\\((x = z = k = 0)\\)]{.math .inline}. Koefficient [\\(d\\)]{.math .inline} som är multiplicerad med [\\(k = xz\\)]{.math .inline} mäter den genomsnittliga förändring i [\\(y\\)]{.math .inline} som är associerad med en ökning av variabel [\\(k\\)]{.math .inline} med en enhet.

Koefficient [\\(b\\)]{.math .inline} anger hur stor förändring i [\\(y\\)]{.math .inline} som är associerad med en enhet högre [\\(x\\)]{.math .inline}. För att estimera den totala samvariationen mellan [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline} adderar vi koefficient [\\(b\\)]{.math .inline} med [\\(d\*z\\)]{.math .inline}, eftersom variabel [\\(z\\)]{.math .inline} ingår som multiplikator i variabeln [\\(k\\)]{.math .inline}. Den totala samvariationen mellan [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline} är:

[\\(\\frac{\\Delta y}{\\Delta x} = b + d\*z\\)]{.math .inline} (3)

där [\\(\\Delta y\\)]{.math .inline} betyder förändring i variabeln [\\(y\\)]{.math .inline} och [\\(\\Delta x\\)]{.math .inline} är förändring i variabeln [\\(x\\)]{.math .inline}. Bokstäverna [\\(b\\)]{.math .inline}, [\\(d\\)]{.math .inline} och [\\(z\\)]{.math .inline} har samma innebörd som i regressionsmodellen. För de värden då [\\(z = 0\\)]{.math .inline} anger [\\(b\\)]{.math .inline} den förändring i [\\(y\\)]{.math .inline} som är associerad med en ökning av [\\(x\\)]{.math .inline} med en enhet.

På motsvarande sätt får vi den totala samvariationen mellan variabel [\\(z\\)]{.math .inline} och [\\(y\\)]{.math .inline} genom följande uttryck:

[\\(\\frac{\\Delta y}{\\Delta z} = c + d\*x\\)]{.math .inline} (4)

För värdena [\\(x = 0\\)]{.math .inline} anger lutningskoefficienten [\\(c\\)]{.math .inline} hur mycket [\\(y\\)]{.math .inline} ökar då [\\(z\\)]{.math .inline} ökar med 1. Låt oss illustrera interaktionseffekten med hjälp av data.

#### Ett exempel med data

I [avsnitt 4.3](https://www.dropbox.com/scl/fi/r78jsccc1j8axt3qqcn3c/4-3-Konstanth-lla.docx?rlkey=saxn8mtkh28j4s7xr13tryyy3&dl=0) estimerade vi samvariationen mellan livslängd och inkomst för män och kvinnor i tre av Sveriges kommuner. Nu ska vi använda samma data igen men denna gång lägga till en interaktionseffekt.

Tabell 1 beskriver våra variabler (samma som i [avsnitt 4.3](https://www.dropbox.com/scl/fi/r78jsccc1j8axt3qqcn3c/4-3-Konstanth-lla.docx?rlkey=saxn8mtkh28j4s7xr13tryyy3&dl=0)). Vi har nu en variabel som skapas genom att multiplicera de två variablerna inkomst [\\(I\\)]{.math .inline} och kön [\\(K\\)]{.math .inline}. Den nya variabeln har rubriken "Interaktion: [\\(I\*K\\)]{.math .inline}". Eftersom [\\(K\\)]{.math .inline} är en dummy där tre av sex observationer har värdet 0 får även den nya variabeln värdet 0 i tre av sex fall.

**Tabell 1: Variablerna** [\\(\\mathbf{L}\\)]{.math .inline}**,** [\\(\\mathbf{I}\\)]{.math .inline}**,** [\\(\\mathbf{K}\\)]{.math .inline} **och** [\\(\\mathbf{KI}\\)]{.math .inline}

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  Kommun, kön           Livslängd, [\\(L\\)]{.math .inline}   Inkomst, [\\(I\\)]{.math .inline}   Kön, [\\(K\\)]{.math .inline}   [\\\[K\*I\\\]]{.math .display}
  --------------------- ------------------------------------- ----------------------------------- ------------------------------- --------------------------------
  Jokkmokk, kvinnor     81,55                                 2,07                                0                               0

  Jokkmokk, män         79,22                                 2,40                                1                               2,40

  Oskarshamn, kvinnor   84,64                                 2,11                                0                               0

  Oskarshamn, män       81,26                                 2,79                                1                               2,79

  Örebro, kvinnor       84,85                                 2,18                                0                               0

  Örebro, män           80,48                                 2,66                                1                               2,66
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------

Förklaring: Data från [www.kolada.se](http://www.kolada.se). Medianinkomst i 100 000-tals kr. Förväntad medellivslängd. Alla siffror avser 2019.

I [avsnitt 4.3](https://www.dropbox.com/scl/fi/r78jsccc1j8axt3qqcn3c/4-3-Konstanth-lla.docx?rlkey=saxn8mtkh28j4s7xr13tryyy3&dl=0) estimerade vi två regressionsmodeller. Först en modell för samvariationen mellan livslängd och inkomst, med följande resultat:

[\\(L = \\widehat{a\_{1}} + \\widehat{a\_{2}}I = 92 - 4,2\*I\\)]{.math .inline} (5)

Den andra modellen inkluderade även dummyvariabeln kön G:

[\\(L = \\widehat{b\_{1}} + \\widehat{b\_{2}}I + \\widehat{b\_{3}}G = 69,6 + 6,64I - 6,66G\\)]{.math .inline} (6)

Nu ska vi estimera följande regressionsmodell:

[\\(L = c\_{1} + c\_{2}I + c\_{3}G + c\_{4}GI + v\\)]{.math .inline} (7)

där [\\(c\_{1}\\)]{.math .inline}, [\\(c\_{2}\\)]{.math .inline}, [\\(c\_{3}\\)]{.math .inline} och [\\(c\_{4}\\)]{.math .inline} är koefficienter vi ska estimera med hjälp av minstakvadratmetoden och [\\(v\\)]{.math .inline} är feltermen. Variablerna i modellen känner vi igen från tabell 1: livslängd [\\(L\\)]{.math .inline}, inkomst [\\(I\\)]{.math .inline}, kön [\\(G\\)]{.math .inline} samt interaktionstermen [\\(GI\\)]{.math .inline}. Med matriser kan vi beskriva vår regressionsmodell på följande sätt:

[\\(L = CX + V\\)]{.math .inline} (8)

[\\(L\\)]{.math .inline} är en kolumnmatris med värdena för förklarade variabeln livslängd [\\(L\\)]{.math .inline}. [\\(C\\)]{.math .inline} är en kolumnmatris med samtliga koefficienterna i modellen, [\\(c\_{1}\\)]{.math .inline} till [\\(c\_{4}\\)]{.math .inline}. [\\(X\\)]{.math .inline} är en matris med samtliga förklarande variabler i modellen och observationerna för respektive variabel i varsin kolumn. [\\(V\\)]{.math .inline} är en kolumnmatris med feltermerna [\\(v\_{1},v\_{2},\\ldots,v\_{n}\\)]{.math .inline} där n är antal observationer.

För att estimera koefficienterna har vi estimatorn, som liknar de vi använt i tidigare avsnitt:

[\\(\\widehat{C} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}L\\)]{.math .inline} (9)

Matris [\\(X\\)]{.math .inline} är i detta fall:

[\\(X = \\begin{bmatrix} 1 & 2,07 & 0 & 0 \\\\ 1 & 2,4 & 1 & 2,4 \\\\ 1 & 2,11 & 0 & 0 \\\\ 1 & 2,79 & 1 & 2,79 \\\\ 1 & 2,18 & 0 & 0 \\\\ 1 & 2,66 & 1 & 2,66 \\end{bmatrix}\\)]{.math .inline} (10)

Alla element i första kolumnen i matris [\\(X\\)]{.math .inline} har värdet 1 eftersom första koefficienten i regressionsmodellen (konstanten) inte är multiplicerad med någon variabel. Övriga värden i matrisen är hämtade från observationerna för de tre förklarande variablerna i tabell 1. Transponerade versionen av [\\(X\\)]{.math .inline} skrivs [\\(X\^{T}\\)]{.math .inline} och ser ut på följande sätt:

[\\(X = \\begin{bmatrix} 1 & 1 & 1 & 1 & 1 & 1 \\\\ 2,07 & 2,4 & 2,11 & 2,79 & 2,18 & 2,66 \\\\ 0 & 1 & 0 & 1 & 0 & 1 \\\\ 0 & 2,4 & 0 & 2,79 & 0 & 2,66 \\end{bmatrix}\\)]{.math .inline} (11)

Värdena i matris L hämtas också från tabell 1:

[\\(L = \\begin{bmatrix} 81,55 \\\\ 79,22 \\\\ 84,64 \\\\ 81,26 \\\\ 84,85 \\\\ 80,48 \\end{bmatrix}\\)]{.math .inline} (12)

Vi estimerar regressionsmodellens koefficienter med [\\(\\widehat{C} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}L\\)]{.math .inline}. Vårt resultat blir nu:

[\\(\\widehat{C} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}L\\)]{.math .inline} (13)

[\\\[\\left\\lbrack \\begin{array}{r} c\_{1} \\\\ c\_{2} \\\\ c\_{3} \\\\ c\_{4} \\end{array} \\right\\rbrack \\approx \\left\\lbrack \\begin{array}{r} 26,6 \\\\ 26,9 \\\\ 40,3 \\\\ - 21,8 \\end{array} \\right\\rbrack\\\]]{.math .display}

Om vi sätter in dessa estimat i vår regressionsmodell får vi:

[\\(L = \\widehat{c\_{1}} + \\widehat{c\_{2}}I + \\widehat{c\_{3}}G + \\widehat{c\_{4}}GI\\)]{.math .inline} (14)

[\\\[= 26,6 + 26,9I + 40,3G - 21,8GI\\\]]{.math .display}

där versalerna nu indikerar enskilda variabler, inte matriser. Nu ska vi uppskatta hur interaktionstermen [\\(GI\\)]{.math .inline} bidrar till samvariationen.

Interaktionseffekten för en variabel beskrev vi i ekvation 3 som [\\(\\frac{\\Delta y}{\\Delta x} = b + d\*z\\)]{.math .inline}. För att estimera den **totala samvariationen** mellan inkomst [\\(I\\)]{.math .inline} och livslängd [\\(L\\)]{.math .inline} tar vi:

[\\(\\frac{\\Delta L}{\\Delta I} = \\widehat{c\_{2}} + \\widehat{c\_{4}}G = 26,9 - 21,8\*G\\)]{.math .inline} (15)

Total samvariation betyder effekten av inkomst på livslängd inklusive interaktionseffekten. En enhet ökad inkomst motsvarar en ökning av den genomsnittliga årsinkomsten med 100 000 kronor.

För kvinnor [\\((G = 0)\\)]{.math .inline}: [\\(\\Delta L\\text{/}\\Delta I = 26,9\\)]{.math .inline} → 100 000 kr högre inkomst = 26,9 år längre liv

För män [\\((G = 1)\\)]{.math .inline}: [\\(\\Delta L\\text{/}\\Delta I = 26,9 - 21,8 = 5,1\\)]{.math .inline} → 100 000 kr högre inkomst = 5,1 år längre liv

Interaktionseffekten [\\(- 21,8\\)]{.math .inline} betyder att sambandet mellan inkomst och livslängd är svagare för män än för kvinnor. Samvariationen mellan livslängd och inkomst är således mer positiv för kvinnor jämfört med för män. Den totala samvariationen mellan kön [\\(G\\)]{.math .inline} och medellivslängd [\\(L\\)]{.math .inline} kan vi från vår regressionsmodell estimera till:

[\\(\\frac{\\Delta L}{\\Delta G} = \\widehat{c\_{3}} + \\widehat{c\_{4}}\*I = 40,3 - 21,8\*I\\)]{.math .inline} (16)

Koefficienten [\\(c\_{1}\\)]{.math .inline} i vår regressionsmodell skattade vi till 26,6 i ekvation 13. Detta är den genomsnittliga livslängd som vår regressionsmodell indikerar att kvinnor utan inkomst har, där variablerna [\\(I\\)]{.math .inline} och [\\(G\\)]{.math .inline} är lika med 0, det vill säga en kvinna [\\(G = 0\\)]{.math .inline} utan inkomst [\\(I = 0\\)]{.math .inline}.

Om personen utan inkomst är en man, [\\(G = 1\\)]{.math .inline}, indikerar [\\(\\widehat{c\_{3}} = 40,3\\)]{.math .inline} att vi kan förvänta oss att en sådan person i genomsnitt lever 40,3 år längre. Vid högre inkomster får vi dock ett annorlunda resultat. Vid följande inkomstnivå blir nettoskillnaden av [\\(G\\)]{.math .inline} lika med 0:

[\\(I = \\frac{40,3}{21,8} = 1,85\\)]{.math .inline} (17)

rent matematiskt innebär detta att vår regressionsmodell predikterar att en man med 185 000 kronor i årsinkomst i genomsnitt lever lika länge som en kvinna med 0 kronor i inkomst. Detta reflekterar inte nödvändigtvis verkliga mekanismer. I praktiken har nästan ingen 0 kr i inkomst och ingen observation har detta i vårt datamaterial.

Poängen är att visa var interaktionseffekten byter tecken (från plus till minus och tvärtom). Vi måste alltid vara försiktiga med att tolka resultaten och extra försiktiga att tolka resultat utanför de värden vi har data för. Vid högre inkomster än detta blir [\\(\\Delta L\\text{/}\\Delta G\\)]{.math .inline} negativt, vilket innebär att vid högre inkomster är mäns genomsnittliga livslängd kortare än kvinnor.

#### Illustration med diagram

Figur 1 illustrerar delar av resultaten i ett diagram där vi ser samvariationen mellan livslängd och inkomst. Två regressionslinjer är utritade i diagrammet, en för kvinnor och en för män. Regressionslinjen för kvinnor är ritad med ekvationen:

[\\(L = \\widehat{a} + \\widehat{b}\\left( I \\middle\| G = 0 \\right) = 26,6 + 26,9x\\)]{.math .inline} (18)

där [\\(\\left( I \\middle\| G = 0 \\right)\\)]{.math .inline} betyder att vi enbart använder de observationer för livslängd [\\((I)\\)]{.math .inline} i tabell 1 som representerar kvinnor. Koefficienterna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} är estimerade utifrån minstakvadratmetoden. Regressionslinjen för män är i diagrammet ritad med ekvationen:

[\\(L = \\widehat{c} + \\widehat{d}\\left( I \\middle\| G = 1 \\right) = 66,9 + 5,1x\\)]{.math .inline} (19)

där [\\(\\left( I \\middle\| G = 1 \\right)\\)]{.math .inline} betyder att vi enbart använder de observationer i tabell 1 som representerar män. Genom att estimera samvariationen mellan livslängd och inkomst för män och kvinnor separat kan vi nå samma slutsats som när vi estimerar regressionsmodellen med interaktionseffekter.

**Figur 1: Regressionsresultat med interaktion**

![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\4%20-%20Minstakvadratmetoden%20fördjupning%202%20fler%20variabler\4-6%20-%20Interaktion/img/k2-4-6-image1.png){style="width:3.78472in;height:3.78472in"}

Förklaring: Livslängd och inkomst för kvinnor respektive män.

Regressionsresultaten för enbart kvinnor i ekvation 18 är samma som resultaten från regressionsmodellen i ekvation 14 med [\\(G = 0\\)]{.math .inline}, då de två första koefficienterna i de båda regressionsmodellerna är desamma: [\\(\\widehat{c\_{1}} = \\widehat{a}\\)]{.math .inline} och [\\(\\widehat{c\_{2}} = \\widehat{b}\\)]{.math .inline}.

Resultaten i regressionsmodellen för män i ekvation 19 kan förenklat beskrivas som att vi lägger ihop koefficienterna i ekvation 14. Vi har koefficienterna:

[\\(\\widehat{c} = \\widehat{c\_{1}} + \\widehat{c\_{3}} = 26,6 + 40,3 = 60,9\\)]{.math .inline} (20)

[\\\[\\widehat{d} = \\widehat{c\_{2}} + \\widehat{c\_{4}} = 26,9I - 21,8 = 5,1\\\]]{.math .display}

Lutningskoefficienten i regressionsmodellen för enbart män [\\(\\widehat{d}\\)]{.math .inline} är samma värde som [\\(\\Delta L\\text{/}\\Delta I\\)]{.math .inline} för [\\(G = 1\\)]{.math .inline} i ekvation 15. Detta innebär även att differensen mellan de två lutningskoefficienterna i regressionsmodellerna för kvinnor respektive män är [\\(\\widehat{b} - \\widehat{d} = 26,9 - 5,1 = 21,8\\)]{.math .inline}, vilket är samma värde som [\\(\\widehat{c\_{4}}\\)]{.math .inline} har i ekvation 14.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-6"]=[  {    "id": "k2-4-6-001",    "name": "Uppgift 1",    "exercise": "Vad är en interaktionseffekt i regressionsanalys?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "När två förklarande variabler är perfekt korrelerade med varandra",          "När effekten av en variabel på Y beror på värdet av en annan variabel",          "När residualerna korrelerar med de förklarande variablerna",          "När interceptet i regressionsmodellen är noll"        ],        "correct": "När effekten av en variabel på Y beror på värdet av en annan variabel"      }    },    "error": { "message": "Handlar det om hur variabler korrelerar med varandra, eller om hur en variabels effekt på Y beror på värdet av en annan variabel?" },    "correct": { "message": "Rätt! En interaktionseffekt innebär att effekten av variabel X på Y beror på värdet av en annan variabel Z. Till exempel kan inkomstens samvariation med livslängd vara olika stark för män och kvinnor." }  },  {    "id": "k2-4-6-002",    "name": "Uppgift 2",    "exercise": "Hur skapar man en interaktionsterm i regressionsmodellen \\(y = a + bx + cz + \\epsilon\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Man adderar x och z till en ny variabel k = x + z",          "Man multiplicerar x och z till en ny variabel k = x·z och inkluderar den i modellen",          "Man dividerar x med z och inkluderar kvoten i modellen",          "Man kvadrerar summan av x och z och inkluderar resultatet"        ],        "correct": "Man multiplicerar x och z till en ny variabel k = x·z och inkluderar den i modellen"      }    },    "error": { "message": "Vilken matematisk operation kombinerar x och z till en term som fångar hur deras relation påverkar Y? Vad är den rätta operationen?" },    "correct": { "message": "Rätt! Interaktionstermen skapas genom att multiplicera de två variablerna: \\(k = x \\cdot z\\). Den nya variabeln \\(k\\) läggs sedan till i regressionsmodellen med en egen lutningskoefficient: \\(y = a + bx + cz + dk\\)." }  },  {    "id": "k2-4-6-003",    "name": "Uppgift 3",    "exercise": "I regressionsmodellen \\(y = a + bx + cz + dxz\\) ges den totala samvariationen mellan \\(x\\) och \\(y\\) av formeln \\(\\frac{\\Delta y}{\\Delta x} = b + d \\cdot z\\). Med koefficienter \\(b = \\widehat{c_2} = 26{,}9\\) och \\(d = \\widehat{c_4} = -21{,}8\\), och \\(z\\) en dummyvariabel (0 = kvinna, 1 = man): vad är den totala samvariationen för gruppen med \\(z = 1\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "5.1" },    "answerformat": "",    "error": { "message": "Använd formeln \\(\\frac{\\Delta y}{\\Delta x} = \\widehat{c_2} + \\widehat{c_4} \\cdot z\\) och sätt in \\(z = 1\\)." },    "correct": { "message": "Rätt! \\(\\frac{\\Delta y}{\\Delta x} = 26{,}9 + (-21{,}8) \\cdot 1 = 26{,}9 - 21{,}8 = 5{,}1\\)." }  },  {    "id": "k2-4-6-004",    "name": "Uppgift 4",    "exercise": "I regressionsmodellen \\(L = c_1 + c_2 I + c_3 G + c_4 GI\\) — där L är livslängd (i år), I är inkomst (i 100 000-tals kr), G är kön (0 = kvinna, 1 = man) och GI är interaktionstermen — estimerades \\(\\widehat{c_4} = -21{,}8\\). Vad innebär ett negativt tecken på interaktionstermen \\(GI\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Inkomst har ingen effekt på livslängd för vare sig män eller kvinnor",          "Sambandet mellan inkomst och livslängd är svagare för män än för kvinnor",          "Sambandet mellan inkomst och livslängd är starkare för män än för kvinnor",          "Kön har en negativ effekt på livslängd i alla fall"        ],        "correct": "Sambandet mellan inkomst och livslängd är svagare för män än för kvinnor"      }    },    "error": { "message": "Interaktionskoefficenten justerar lutningen för en grupp jämfört med en annan. Med G = 1 för män och c4 negativ, vad händer med den totala lutningskoefficienten för inkomst bland männen?" },    "correct": { "message": "Rätt! Det negativa tecknet på interaktionstermen innebär att sambandet mellan inkomst och livslängd är svagare för män (G = 1) än för kvinnor (G = 0). För kvinnor är samvariationen 26,9, men för männen minskar den med 21,8 till bara 5,1." }  },  {    "id": "k2-4-6-005",    "name": "Uppgift 5",    "exercise": "Regressionsmodellen med interaktion är \\(L = 26{,}6 + 26{,}9I + 40{,}3G - 21{,}8GI\\), där L är livslängd (i år), I är inkomst (i 100 000-tals kr) och G är kön (0 = kvinna, 1 = man). Vad är interceptet för regressionslinjen specifikt för <em>männen</em> (\\(G = 1\\))? Dvs. vad är \\(\\widehat{c} = \\widehat{c_1} + \\widehat{c_3}\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "66.9" },    "answerformat": "",    "error": { "message": "För männen (G = 1) summeras de två konstanterna i modellen: interceptet \\(\\widehat{c_1} = 26{,}6\\) och könets koefficient \\(\\widehat{c_3} = 40{,}3\\). Vad är deras summa?" },    "correct": { "message": "Rätt! \\(\\widehat{c} = \\widehat{c_1} + \\widehat{c_3} = 26{,}6 + 40{,}3 = 66{,}9\\). Regressionslinjen för männen är alltså \\(L = 66{,}9 + 5{,}1I\\), medan regressionslinjen för kvinnorna är \\(L = 26{,}6 + 26{,}9I\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-6"></div>

## Räkna på orsak och effekt {#k2-4-7}

### Begrepp

- **Regressionsdiskontinuitet:** Kvasiexperimentell metod där vi kan utnyttja en brytpunkt kring vilket det förekommer en slumpmässig indelning i behandlings- och kontrollgrupp. Kallas även brytpunktsanalys. Engelska: *regression discontinuity design*.

### Teori

I avsnitt [1.1](https://www.dropbox.com/scl/fi/p55pve5puznr5q1pytlp0/1-1-Orsak-och-effekt.docx?rlkey=fhscndx5n8rpsx529fb55liup&dl=0) och [1.2](https://www.dropbox.com/scl/fi/9jy8vypqisanjkto7wr3v/1-2-Experiment-och-observationsstudie.docx?rlkey=4xhcwh8s17u66tholxgf5qdaa&dl=0) introducerade vi kontrafaktisk analys och kvasiexperiment för att studera orsakssamband. I kapitel 1 introducerade vi dessa koncept teoretiskt. Nu, efter att ha arbetat med regressionsanalys med flera variabler i detta kapitel, kan vi förstå den matematiska grunden för varför detta är så viktigt.

Som vi såg i avsnitt 4-1 och 4-3: när vi lägger till eller tar bort variabler i en regressionsmodell ändras koefficienterna för de andra variablerna. Detta är inte bara ett tekniskt problem - det är kärnan i varför vi måste vara så noggranna när vi studerar orsakssamband.

#### Orsakssamband i en regressionsmodell

Säg nu, kraftigt förenklat, att vi har en teori om att en medicin [\\((X)\\)]{.math .inline} minskar mängden sjukdomssymptom [\\((Y)\\)]{.math .inline} hos patienter. Vi har hittat en grupp patienter som alla har lika mycket sjukdomssymptom, vilka vi delat in i en behandlingsgrupp (som får medicin) och en kontrollgrupp (som inte får medicin). För att undersöka medicinens effekt på sjukdomssymptom ställer vi upp följande regressionsmodell:

[\\(Y = \\alpha + \\beta X + \\epsilon\\)]{.math .inline} (1)

Genom att observera samvariationen mellan medicin och sjukdomssymptom kommer estimerade [\\(\\widehat{\\beta}\\)]{.math .inline} att ge oss ett mått på medicinens [\\(X\\)]{.math .inline} effekt på sjukdomssymptomen [\\(Y\\)]{.math .inline}. Om medicinen fungerar förväntar vi oss att [\\(\\beta\\)]{.math .inline} kommer vara negativ, det vill säga att medicinen [\\(X\\)]{.math .inline} minskar symptom [\\(Y\\)]{.math .inline}.

Ett problem, bland flera tänkbara, är att för att vi ska kunna tolka [\\(\\widehat{\\beta}\\)]{.math .inline} som ett korrekt mått på effekten av medicinen så måste vi vara säkra på att inga andra fenomen påverkar medicinen och sjukdomssymptomen.

Säg att vi till exempel vet från tidigare forskning att det finns flera andra saker som både påverkar medicinens effekt och själva sjukdomssymptomet. Det kan handla om sådant som kön, ålder med mera. Dessa saker kan vi mäta och lägga till som variabler i vår regressionsmodell. Genom att kontrollera för till exempel kön kan vi i så fall estimera medicins effekt korrekt.

#### Illustration med diagram

Men det finns även ytterligare några fenomen som vi har starka skäl att tro att de är viktiga för både medicinen och symptomen, men som vi saknar data för. Om vi saknar data så kan vi inte kontrollera för det i regressionsmodellen.

Figur 1 illustrerar ett exempel på hur den här sortens problem kan se ut. Pilen från [\\(X\\)]{.math .inline} till [\\(Y\\)]{.math .inline} beskriver det orsakssamband som vi är intresserade av. Pilar visar påverkans riktning (kausalitet). Så här ska figuren läsas:

- [\\(X \\rightarrow Y\\)]{.math .inline}: Medicinen påverkar symptom. Det vi vill mäta!

- [\\(P \\rightarrow X\\)]{.math .inline} och [\\(P \\rightarrow Y\\)]{.math .inline}: Fenomen [\\(P\\)]{.math .inline} (observerbart, som ålder) påverkar både vem som får medicin och sjuka de är

- [\\(Z \\rightarrow X\\)]{.math .inline} och [\\(Z \\rightarrow Y\\)]{.math .inline}: Fenomen [\\(Z\\)]{.math .inline} (icke-observerbart, som medfödd förmåga) påverkar både vem som får medicin och hur sjuka de är.

Om vi inte kontrollerar för [\\(P\\)]{.math .inline} och [\\(Z\\)]{.math .inline} kommer den samvariation vi observerar mellan [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} att vara en blandning av (1) medicinens faktiska effekt (det vi vill mäta), (2) effekten av [\\(P\\)]{.math .inline} (kan vi fixa genom att inkludera [\\(P\\)]{.math .inline} i regressionen) och (3) effekten av Z (kan vi inte fixa).

Detta är varför randomiserade experiment är så viktiga: de \"bryter\" pilarna från [\\(P\\)]{.math .inline} och [\\(Z\\)]{.math .inline} till [\\(X\\)]{.math .inline}. För att vi ska kunna uppskatta vilken effekt [\\(X\\)]{.math .inline} har på [\\(Y\\)]{.math .inline} måste vi dels fastställa att när det sker en variation i [\\(X\\)]{.math .inline}, orsakad utan koppling till [\\(Y\\)]{.math .inline}, så sker det även en variation i [\\(Y\\)]{.math .inline}.

### Exogen variation

I detta fall bestämmer vi att behandlingsgruppen tar medicinen, vilket är den framkallade variationen i [\\(X\\)]{.math .inline}. Detta kallas för exogen variation, variation i [\\(X\\)]{.math .inline} som inte orsakas av [\\(Y\\)]{.math .inline} eller av något som påverkar både [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}. Exempel på exogen variation i medicin [\\(X\\)]{.math .inline}:

- Vi bestämmer vem som får medicin, som i ett randomiserat experiment

- Variationen i [\\(X\\)]{.math .inline} kommer från vårt experimentella upplägg

Exempel på endogen variation (dåligt om vi ska dra slutsatser om orsakssamband):

- Patienter som mår bättre väljer att ta medicin

- Variationen i [\\(X\\)]{.math .inline} beror då på något annat (hälsotillstånd) som också påverkar [\\(Y\\)]{.math .inline}

### Selektionsproblemet

För att uppskatta effekten av [\\(X\\)]{.math .inline} på [\\(Y\\)]{.math .inline} korrekt måste vi även ta hänsyn till de två fenomenen [\\(P\\)]{.math .inline} och [\\(Z\\)]{.math .inline} som påverkar både [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}. Fenomen [\\(P\\)]{.math .inline} och [\\(Z\\)]{.math .inline} påverkar vilka som ingår i behandlingsgruppen och vilka som ingår i kontrollgruppen. Detta kallas för [*selektionsproblem*](https://en.wikipedia.org/wiki/Selection_bias) och beskrevs i [avsnitt 1-2](https://www.dropbox.com/scl/fi/9jy8vypqisanjkto7wr3v/1-2-Experiment-och-observationsstudie.docx?rlkey=4xhcwh8s17u66tholxgf5qdaa&dl=0).

Fenomen [\\(P\\)]{.math .inline} är observerbart (till exempel kön och ålder) men fenomen [\\(Z\\)]{.math .inline} syftar på något som det saknas data för och som det kanske aldrig kommer att finnas data för.

Om vi inte justerar vår analys för [\\(P\\)]{.math .inline} och [\\(Z\\)]{.math .inline} kommer de variationer vi observerar i [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}, liksom samvariationen mellan dem, helt eller delvis vara orsakade av [\\(P\\)]{.math .inline} och [\\(Z\\)]{.math .inline}. Detta vet vi från när vi tittat på regressionsanalys med tre eller fler variabler i avsnitt [4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0) och [4.4](https://www.dropbox.com/scl/fi/sdnc9eukta9tuiq1y6z0f/4-4-Regression-med-matriser.docx?rlkey=zmc4680olys9qe0zmn7i0vswc&dl=0).

**Figur 1: För att skatta effekten av X på Y måste vi justera för P och Z.\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\4%20-%20Minstakvadratmetoden%20fördjupning%202%20fler%20variabler\4-7%20-%20Räkna%20på%20orsak%20och%20effekt/img/k2-4-7-image1.png){style="width:2.875in;height:2.48022in"}

Förklaring: Fenomen P är observerbart och påverkar X och Y. Fenomen Z kan inte observeras eller mätas men påverkar också X och Y. P kan vi kontrollera för. Z kan vi inte kontrollera för. Vi kommer kanske aldrig kunna kontrollera för Z. Detta är ett centralt argument för vetenskapliga experiment.

Diagrammet i figur 1 kallas för en *riktad acyklisk graf* (engelska *directed acyclic graph*, *DAG*). Diagrammet beskriver ett exempel och ytterligare utmaningar av liknande slag är också tänkbara, men diskuteras ej här.

#### Både förekomst och frånvaron av variabler kan påverka våra resultat

I tidigare avsnitt såg vi hur frånvaron eller närvaron av andra variabler kan påverka alla resultat i regressionsmodellen. Det är därför viktigt att vi funderar noga på hur vi designar vår undersökning.

Om vi utför ett kontrollerat experiment, till exempel delar in patienterna slumpmässigt i 2 grupper och ger ena gruppen medicin, ökar våra möjligheter att mäta effekten korrekt. Om vi har tillräckligt många patienter kommer alla andra egenskaper förutom själva behandlingen att fördela sig slumpmässigt mellan grupperna.

För att designa vår undersökning och regressionsmodell kan vi ta fram olika typer av underlag, studera andra samvariationer, pröva olika lösningar och jämföra resultat. Detta arbete är något som analytiker måste avgöra från fall till fall. Oavsett hur avancerad metod eller hur många observationer och variabler vi har finns det ingen metod för att bevisa exakt vilka variabler som bör ingå i en analys.

#### Vi kan inte använda teori i stället för data

Ibland är det frestande att tro att om vi hittar någon jättesmart teori som beskriver hur hela världen fungerar, är det i sig ett bevis för hur en regressionsmodell bör utformas. Idéer och teorier är grunden för all analys men det är i sig inget bevis för att inkludera eller exkludera just de variabler vi har till förfogande. Den här typen av svårigheter har varit välkända länge och diskuterats utförligt inom samhällsvetenskap. Två läsvärda texter på temat är [Hendry (1980)](https://www.climateaudit.info/pdf/others/hendry.1980.pdf) och [Leamer (1983)](https://uh.edu/hobby/eitm/_docs/past-lectures/2015-Lectures/Harold-Clarke/lets-take-the-con-out-of-econometrics.pdf).

Som vi gick igenom i avsnitt [1.2](https://www.dropbox.com/scl/fi/9jy8vypqisanjkto7wr3v/1-2-Experiment-och-observationsstudie.docx?rlkey=4xhcwh8s17u66tholxgf5qdaa&dl=0) är det ofta omöjligt att genomföra kontrollerade experiment inom samhällsvetenskap. Det är lätt att tro att detta medför att vi lika gärna kan uttala oss om orsakssamband utan experimentliknande metoder, eftersom ingen ändå vet. Detta är helt enkelt inte sant. Svårigheten att uttala sig om orsakssamband sänker inte kraven på samhällsvetenskap, snarare tvärtom.

I stället för experiment är samhällsvetare ofta hänvisade till kvasiexperimentella observationsstudier där behandlings- och kontrollgrupp till exempel skapas genom att analytiker lyckas identifiera en process som, utan avsikt, fördelar en tillräckligt stor mängd observationer slumpmässigt i behandling och kontroll.

Även i dessa situationer måste vi undersöka om våra antaganden i analysen är rimliga, till exempel att fördelningen mellan kontroll och behandlingen verkligen skett så gott som slumpmässigt. Detta kan vi till exempel göra genom att jämföra behandlings- och kontrollgruppens egenskaper och därigenom kontrollera att den enda viktiga skillnaden mellan grupperna är själva behandlingen.

Om observerbara egenskaper är likvärdiga kan vi ofta anta att även de icke-observerbara egenskaperna är det. Många sådana metoder bygger just på att inget fenomen ska påverka fördelningen (selektionen) till behandlings- och kontrollgruppen.

#### Brytpunktsanalys

För att studera orsak och verkan när vi studerar människor finns det flera kvasiexperimentella metoder för att identifiera behandlings- och kontrollgrupp. Ett exempel på en sådan metod är *regressionsdiskontinuitet* (engelska *regression discontinuity*), eller *brytpunktsanalys*.

Detta är en metod för att identifiera och jämföra behandlings- och kontrollgrupp i en observationsstudie. Metoden bygger på att vi kan observera variationer kring en brytpunkt med betydelse för både behandling och utfall. Små variationer kring brytpunkten kan antas vara slumpmässiga, varför denna kan användas för att dela in observationer i behandling och kontroll.

Låt oss återigen tänka oss att vi ska studera vilken effekt en utbildning har på deltagarnas framtida inkomster. Om vi jämför deltagarnas inkomster med resten av befolkningen riskerar andra icke-observerbara egenskaper hos deltagarna både förklara varför de deltog i utbildningen och deras inkomster. Vi kan därför inte uppskatta effekten på detta sätt.

Men antagning till utbildningen sker med ett intagningsprov som man måste få minst 92 poäng på för att bli antagen. Vi tänker nu att de som fick precis över och precis under 92 poäng har likvärdiga färdigheter. Några hade en dålig dag och några hade en ovanligt bra dag. De studenter som hamnade precis över 92 poäng och antogs blir vår behandlingsgrupp. De studenter som hamnade precis under 92 poäng och ej antogs blir vår kontrollgrupp.

Tanken är att studenter som fick 91 poäng och studenter som fick 93 poäng är i praktiken lika duktiga. Skillnaden på 2 poäng kan betraktas som "tur" (några hade en bra/dålig dag). Eftersom skillnaden är slumpmässig kring brytpunkten kan vi jämföra dessa två grupper nästan som i ett randomiserat experiment: Behandlingsgrupp: 93 poäng → antagen. Kontrollgrupp: 91 poäng → inte antagen. Men notera att detta fungerar endast nära brytpunkten. Vi kan inte jämföra någon med 50 poäng mot någon med 100 poäng eftersom de är för olika.

För att kontrollera om behandlings- och kontrollgruppen har likvärdiga färdigheter kan vi jämföra de relevanta egenskaper vi kan observera, som ålder, tidigare prestationer, tidigare utbildning med mera. För exempel på en studie med liknande metod, se [Rooth och Stenberg (2022)](https://www.nationalekonomi.se/wp-content/uploads/2022/09/50-6-doras.pdf).

#### Alkoholens skadeverkningar

Låt oss ta ett exempel på verklig forskning som applicerar brytpunktsanalys på ett riktigt fall. Vi ska här använda oss av [Carpenter och Dobkin (2009)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2846371/?utm_source=ploomber&utm_medium=blog&utm_campaign=causal-inference-part-i) studie på alkohol och dödlighet. Att alkohol är direkt skadligt och även indirekt ökar risken för olika negativa effekter är välkänt. Samtidigt kan det vara svårt att i detalj skatta de skadliga effekterna (fenomen Y) av ökad tillgång till alkohol (fenomen [\\(X\\)]{.math .inline}) eftersom människor som far illa av alkohol ofta även har andra destruktiva vanor. Vissa av dessa kan vi observera och kontrollera för (fenomen [\\(P\\)]{.math .inline}). Men många dåliga vanor är av sådan art att det är svårt eller omöjligt att kontrollera för allt i analys (fenomen [\\(Z\\)]{.math .inline}).

[Carpenter och Dobkin (2009)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2846371/?utm_source=ploomber&utm_medium=blog&utm_campaign=causal-inference-part-i) använder sig av det faktum att i USA är åldersgränsen för att köpa alkohol 21 år. Först visar de att drickandet bland unga vuxna ökar kraftigt strax efter 21-årsdagen samtidigt som olika dödsorsaker som ofta är förknippade med alkoholkonsumtion ökar: trafikolyckor, självmord med mera.

Carpenter och Dobkin jämför därför mängden dödsfall just kring månaderna före och efter människors 21-årsdag. Alltså, vid 21-årsdagen är den största förändringen just ökad tillgång till alkohol. Och av en tragisk händelse ökar samtidigt mängden dödsfall av orsaker som ofta orsakas av just alkohol.

Låt oss nu gå igenom grunderna för den regressionsanalys som Carpenter och Dobkin använder för att mäta dessa effekter. Vi illustrerar här två exempel. Vi börjar med följande regressionsmodell:

[\\(Y\_{i} = a\_{1} + a\_{2}X\_{i} + a\_{3}T\_{i} + u\_{i}\\)]{.math .inline} (2)

där [\\(a\_{1},a\_{2}\\)]{.math .inline} och [\\(a\_{3}\\)]{.math .inline} är koefficienter. [\\(Y\_{i}\\)]{.math .inline} är antal alkoholrelaterade dödsfall per 100 000 invånare i respektive åldersgrupp i, där varje åldersgrupp är indelad i månader: 19 år och 1 månad, 19 år och 2 månader, och så vidare.

Variabel [\\(X\\)]{.math .inline} är ålder räknat i månader. [\\(T\\)]{.math .inline} är en dummyvariabel som är [\\(T = 0\\)]{.math .inline} för de åldersgrupper som är under 21 och [\\(T = 1\\)]{.math .inline} för de åldersgrupper som har fyllt 21. [\\(u\_{i}\\)]{.math .inline} är felterm för åldersgrupp i. Koefficienten [\\(a\_{3}\\)]{.math .inline} som är multiplicerad med [\\(T\\)]{.math .inline} kommer i denna regressionsmodell att beskriva den effekt som 21-årsdagen har på alkoholrelaterad dödlighet.

Koefficienten [\\(a\_{2}\\)]{.math .inline} i regressionsmodellen i ekvation 2 estimerar samvariationen mellan dödlighet [\\((Y)\\)]{.math .inline} och ålder [\\((X)\\)]{.math .inline}. Men denna samvariation kan också tänkas ändras då en person fyller 21. För att kontrollera detta lägger vi till en interaktionsterm [\\(X\*T\\)]{.math .inline}. Vi får nu följande regressionsmodell:

[\\(X\*T:Y\_{i} = b\_{1} + b\_{2}X\_{i} + b\_{3}T\_{i} + b\_{4}\\left( X\_{i}\*T\_{i} \\right) + v\_{i}\\)]{.math .inline} (3)

där [\\(b\_{1},b\_{2},b\_{3}\\)]{.math .inline} och [\\(b\_{4}\\)]{.math .inline} är koefficienter [\\(Y,X\\)]{.math .inline} och [\\(T\\)]{.math .inline} är samma variabler som i regressionsmodellen i ekvation 2 och [\\(v\\)]{.math .inline} är feltermen. Interaktionstermen [\\(b\_{4}\\left( X\_{i}\*T\_{i} \\right)\\)]{.math .inline} estimerar förändringar i samvariationen mellan alkoholkonsumtion och dödlighet före/efter 21-årsdagen.

#### Carpenter och Dobkins resultat i diagram

De två regressionsmodellerna illustreras i figur 2 där båda diagrammen använder samma data, hämtad från [Carpenter och Dobkin (2009)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2846371/?utm_source=ploomber&utm_medium=blog&utm_campaign=causal-inference-part-i).

Jämför figur 3 i \[[carpenter2009theeffect](#LyXCite-carpenter2009theeffect)\]. Data tillgängliga här: https://github.com/jrnold/masteringmetrics/blob/master/

masteringmetrics/data/mlda.rda

Den vertikala linjen mitt i respektive diagram markerar tidpunkten då personerna i undersökningen fyller 21. Till vänster om linjen visas genomsnittligt antal dödsfall för människor strax under 21 och till höger dödsfall för de som precis fyllt 21. Den högra regressionslinjen i respektive diagrammen skiftar upp vid 21 års ålder, vilket indikerar att dödligheten stiger brant efter 21-årsdagen i och med att människor har möjlighet att köpa alkohol.

I det vänstra diagrammet ser vi två regressionslinjer, där båda är estimerade med regressionsmodellen i ekvation 2. Regressionslinjen till vänster, för åldersgrupperna under 21, är ritad med [\\(T = 0\\)]{.math .inline} och lutar nedåt. För åldersgrupperna över 21, till höger i det vänstra diagrammet, är regressionslinjen ritad med [\\(T = 1\\)]{.math .inline}. De båda regressionslinjerna i det vänstra diagrammet har samma lutning, eftersom vi endast estimerar en lutningskoefficient för ålder i ekvation 2.

I det högra diagrammet ser vi också två regressionslinjer som är estimerade utifrån regressionsmodellen i ekvation 3. För åldersgrupperna över 21, till höger i diagrammet, skiftar linjen upp. Lutningen ändras också. För åldersgrupperna under 21, till vänster i det högra diagrammet, syns en positiv korrelation mellan alkoholrelaterad dödlighet och ålder. För åldersgrupperna över 21 syns i stället en negativ korrelation mellan alkoholrelaterad dödlighet och ålder.

**Figur 2: Samvariationen mellan ålder och alkoholrelaterad dödlighet\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\4%20-%20Minstakvadratmetoden%20fördjupning%202%20fler%20variabler\4-7%20-%20Räkna%20på%20orsak%20och%20effekt/img/k2-4-7-image2.png){style="width:6.32639in;height:4.21759in"}

Förklaring: Brytpunktsanalys rörande alkoholrelaterade dödsfall per åldersgrupp i USA. Se brödtext för förklaring av regressionsmodellerna. Data från [Carpenter och Dobkin (2009)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2846371/?utm_source=ploomber&utm_medium=blog&utm_campaign=causal-inference-part-i). Genomsnittlig alkolholrelaterad dödlighet ökat skarpt i samband med att människor fyller 21.

### Sammanfattning

I detta avsnitt har vi gått igenom varför kapitel 4 spelar roll för vetenskap:

1.  Regressionsanalys är inte bara en teknisk metod - det är ett verktyg för att studera orsakssamband.

2.  För att mäta kausalitet korrekt måste vi:

    a.  Antingen göra randomiserade experiment (RCT)

    b.  Eller hitta kvasiexperimentella metoder (som brytpunktsanalys)

    c.  Eller åtminstone kontrollera för alla relevanta variabler

3.  Som vi såg här i kapitel 4 kan alla variabler som ingår eller inte ingår i en analys påverka resultaten. Detta är inte en teknisk detalj. Det är skillnaden mellan korrekta eller felaktiga slutsatser om orsak och verkan.

4.  Det finns inga direkta metoder för att objektivt bevisa vilka variabler som ska ingå. Därför behöver vi:

    a.  Stark teori

    b.  Genomtänkt forskningsdesign

    c.  Kritiskt tänkande

    d.  Vetenskaplig ödmjukhet

Detta är varför metodik och statistik inte bara handlar om matte. Detta är grunden för hur vi förstår världen.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-7"]=[  {    "id": "k2-4-7-001",    "name": "Uppgift 1",    "exercise": "Vad menas med <em>exogen variation</em> i en förklarande variabel X?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Variation i X som orsakas av Y eller av faktorer som påverkar både X och Y",          "Variation i X som inte orsakas av Y eller av faktorer som påverkar både X och Y",          "Variation i X som uppkommer slumpmässigt utan något samband med verkligheten",          "Variation i X som mäter systematiska fel i datainsamlingen"        ],        "correct": "Variation i X som inte orsakas av Y eller av faktorer som påverkar både X och Y"      }    },    "error": { "message": "Tänk på skillnaden mellan ett randomiserat experiment och en observationsstudie. Vad är det som gör exogen variation lämplig för att studera orsakssamband?" },    "correct": { "message": "Rätt! Exogen variation i X är variation som inte orsakas av Y eller av bakgrundsfaktorer som påverkar båda. I ett randomiserat experiment bestäms vem som får behandling av forskarna, inte av deltagarnas egna egenskaper – det skapar exogen variation." }  },  {    "id": "k2-4-7-002",    "name": "Uppgift 2",    "exercise": "Vad kallas det problem som uppstår när fenomen P och Z påverkar vilka som ingår i behandlingsgruppen respektive kontrollgruppen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Multikolinjäritet",          "Heteroskedasticitet",          "Selektionsproblemet",          "Autokorrelation"        ],        "correct": "Selektionsproblemet"      }    },    "error": { "message": "Tänk på vad det innebär att bakgrundsfaktorer avgör vem som hamnar i behandlings- respektive kontrollgruppen. Vad kallas det problemet i vetenskaplig metod?" },    "correct": { "message": "Rätt! Det kallas selektionsproblemet: om bakgrundsfaktorer (P och Z) påverkar vilka som väljer att delta i behandlingen, kan vi inte avgöra om utfallsskillnader beror på behandlingen eller på dessa bakgrundsfaktorer." }  },  {    "id": "k2-4-7-003",    "name": "Uppgift 3",    "exercise": "Carpenter och Dobkin (2009) studerade alkohol och dödlighet med brytpunktsanalys. Varför är 21-årsåldern en lämplig brytpunkt för denna studie i USA?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "För att hjärnan slutar utvecklas vid 21 år",          "För att USA:s åldersgräns för att köpa alkohol är 21 år, vilket skapar en tydlig förändring i tillgång",          "För att mönstringsålder i USA är 21 år",          "För att rösträtten i USA inträder vid 21 år"        ],        "correct": "För att USA:s åldersgräns för att köpa alkohol är 21 år, vilket skapar en tydlig förändring i tillgång"      }    },    "error": { "message": "Vad är den lagstadgade åldersgränsen för att köpa alkohol i USA, och varför gör just den till en lämplig brytpunkt i en studie om alkohol och dödlighet?" },    "correct": { "message": "Rätt! I USA är åldersgränsen för att köpa alkohol 21 år. Vid 21-årsdagen sker en plötslig och lagstyrd ökning av tillgången till alkohol. De som precis fyllt 21 och de som är precis under 21 är i övrigt likvärdiga, vilket gör detta till en nästan slumpmässig indelning kring brytpunkten." }  },  {    "id": "k2-4-7-004",    "name": "Uppgift 4",    "exercise": "I regressionsmodellen \\(Y_i = a_1 + a_2 X_i + a_3 T_i + u_i\\), där Y är alkoholrelaterad dödlighet, X är ålder och T är en dummyvariabel (0 = åldersgrupp under 21, 1 = åldersgrupp som fyllt 21): vad mäter koefficienten \\(a_3\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Samvariationen mellan ålder och alkoholrelaterad dödlighet",          "Den genomsnittliga dödligheten för alla åldersgrupper",          "Effekten på alkoholrelaterad dödlighet av att ha fyllt 21 år",          "Lutningen av regressionslinjen för åldersgrupper under 21"        ],        "correct": "Effekten på alkoholrelaterad dödlighet av att ha fyllt 21 år"      }    },    "error": { "message": "T är en dummy för om en person har fyllt 21 eller inte. Vad mäter en dummyvariabels koefficient i allmänhet?" },    "correct": { "message": "Rätt! Koefficienten \\(a_3\\) mäter effekten av att ha fyllt 21 år – det vill säga, den genomsnittliga skillnaden i alkoholrelaterad dödlighet mellan åldersgrupper strax under och strax över 21-årsgränsen." }  },  {    "id": "k2-4-7-005",    "name": "Uppgift 5",    "exercise": "Vilket av följande påståenden sammanfattar bäst varför randomiserade experiment är viktiga för att studera orsakssamband?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Randomiserade experiment är alltid billigare och enklare att genomföra",          "Randomisering bryter länkarna från bakgrundsfaktorer till behandlingsvariabeln, vilket möjliggör kausal analys",          "Randomiserade experiment ger alltid statistiskt signifikanta resultat",          "Randomisering eliminerar behovet av regressionsanalys"        ],        "correct": "Randomisering bryter länkarna från bakgrundsfaktorer till behandlingsvariabeln, vilket möjliggör kausal analys"      }    },    "error": { "message": "Tänk på hur slumpmässig tilldelning påverkar sambandet mellan bakgrundsfaktorer (P och Z) och behandlingsvariabeln X. Vad händer med dessa samband när vem som får behandling bestäms av slumpen?" },    "correct": { "message": "Rätt! Randomisering 'bryter' pilarna från bakgrundsfaktorer (P och Z) till behandlingsvariabeln X. När vem som får behandling bestäms slumpmässigt – inte av personernas egna egenskaper – kan vi tolka samvariationen mellan X och Y som ett kausalt samband." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-7"></div>

