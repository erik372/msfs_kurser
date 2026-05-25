# Regressionsanalys med tre variabler {#k2-4-1}

### Begrepp
*Inga nya begrepp i detta avsnitt.*

### Teori
Varför behöver vi fler än två variabler? I analytiskt arbete (och i världen överhuvudtaget) påverkas det vi studerar nästan alltid av flera faktorer samtidigt. Om vi bara inkluderar en förklarande variabel $(X)$ men det egentligen finns en annan viktig variabel $(Z)$ som också påverkar $Y$, riskerar vi att få felaktiga resultat. I detta avsnitt ska vi lära oss hur regression fungerar med tre variabler, vilket är grunden för att kunna arbeta med ännu fler variabler senare.

#### Vad händer när vi har tre variabler?
Låt oss nu utgå från en regressionsmodell där den förklarade (beroende) variabeln $Y$ förklaras av de två förklarande (oberoende) variablerna $X$ och $Z$:


$$Y_{i} = a + bX_{i} + cZ_{i} + V_{i} \tag{1}$$

Bokstäverna $a$, $b$ och $c$ är konstanta koefficienter och $V_{i}$ är feltermen för observation *i*. Vi ska nu använda minstakvadratmetoden för att estimera koefficienterna $\widehat{a}$, $\widehat{b}$ och $\widehat{c}$ och därefter $\widehat{Y}$ samt $\widehat{V}$.
Koefficienten $\widehat{b}$ kommer att ge oss den genomsnittliga förändringen i $Y$ som är associerad med en ökning av $X$ med en enhet, givet värdena i $Z$. Koefficient $\widehat{c}$ visar den genomsnittliga förändringen i $Y$ som är associerad med en ökning av $Z$ med en enhet, givet värdena i $X$.
I och med att vi använder båda de förklarande variablerna $X$ och $Z$ i samma regressionsmodell kommer beräkningen visa samvariationen mellan $Y$ och $X$, med hänsyn till variationer i $Z$. Samvariationen mellan $Y$ och $Z$ kommer att uppskattas med hänsyn till variationer i $X$.
Säg som exempel, att vi vill veta vilken inverkan en utbildning har på studenternas inkomster senare i livet (jmf exemplet i [avsnitt 1.2](https://www.dropbox.com/scl/fi/9jy8vypqisanjkto7wr3v/1-2-Experiment-och-observationsstudie.docx?rlkey=4xhcwh8s17u66tholxgf5qdaa&dl=0)). Vi ställer upp en regressionsmodell av typen $Y = \alpha_{1} + \alpha_{2}X + \epsilon$ där $Y$ är inkomst och $X$ är en variabel som indikerar om en person har läst utbildningen eller inte.
Men nu vill vi även kontrollera för om studenterna är ovanligt ambitiösa. Låt oss för tankeexperimentets skull anta att vi faktiskt har bra information rörande detta i form av variabel $Z$. I så fall kan vi lägga till det som en ny förklarande variabel i regressionsmodellen så att vi nu får en sådan regressionsmodell med samma form som den i ekvation 1: $Y = \alpha_{1} + \alpha_{2}X + \alpha_{2}Z + \epsilon$.
I detta hypotetiska exempel är $Z$ studenternas ambitionsnivå. I en idealisk situation skulle detta innebära att vi nu rensar för betydelsen av studenternas ambitionsnivå $Z$, när vi uppskattar samvariationen mellan utbildning $X$ och inkomst $Y$.
Om vi vill kontrollera för ytterligare andra fenomen kan vi lägga till fler förklarande variabler. Detta är en central aspekt av regressionsanalys och vi återkommer nedan till vad detta innebär.

#### Minstakvadratroten med tre variabler
Låt oss återvända till regressionsmodellen i ekvation 1. Precis som när vi endast hade en förklarande variabel i regressionsmodellen ska vi nu, när vi har två förklarande variabler, hitta de värden för de konstanta koefficienterna $a$, $b$ och $c$ som minimerar de kvadrerade residualerna $\sum_{}^{}{\widehat{V}}^{2}$. Vi kan därför beskriva vår beräkning som ett minimeringsproblem:


$$\ \min_{\widehat{a},\widehat{b},\widehat{c}}\sum_{i = 1}^{n}{\widehat{V_{i}}}^{2}\ = \min_{\widehat{a},\widehat{b},\widehat{c}}\sum_{i = 1}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2} \tag{2}$$

Predikterade $\widehat{Y}$ kan vi utifrån vår regressionsmodell definiera som:


$$\widehat{Y_{i}} = \widehat{a} + \widehat{b}X_{i} + \widehat{c}Z_{i} \tag{3}$$

Denna definition av $\widehat{Y}$ kan vi sätta in i vårt minimeringsproblem:


$$\min_{\widehat{a},\widehat{b},\widehat{c}}{\sum_{i = 1}^{n}{\widehat{V_{i}}}^{2}} = \min_{\widehat{a},\widehat{b},\widehat{c}}{\sum_{i = 1}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2}} = \ \min_{\widehat{a},\widehat{b},\widehat{c}}\sum_{i = 1}^{n}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} - \widehat{c}Z_{i} \right)^{2} \tag{4}$$

I denna ekvation känner vi till $Y$, $X$ och $Z$, eftersom detta är våra observerade data. Vi har tre faktorer att ta hänsyn till i form av de tre konstanterna $\widehat{a}$, $\widehat{b}$ och $\widehat{c}$.
Vi beräknar förstagradsvillkoren genom att derivera uttrycket i ekvation 4 med hänsyn till $a$, $b$ samt $c$ var för sig och sätta respektive resultat lika med 0. Eftersom vi har tre faktorer får vi följande tre resultat:


$$\frac{\partial}{\partial\widehat{a}}\left( \sum_{i = 1}^{n}\widehat{v_{i}^{2}} \right) = \sum_{}^{}{- 2\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} - \widehat{c}Z_{i} \right)} \tag{5}$$



$$\frac{\partial}{\partial\widehat{b}}\left( \sum_{i = 1}^{n}\widehat{v_{i}^{2}} \right) = \sum_{}^{}{- 2X_{i}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} - \widehat{c}Z_{i} \right)}$$



$$\frac{\partial}{\partial\widehat{c}}\left( \sum_{i = 1}^{n}\widehat{v_{i}^{2}} \right) = \sum_{}^{}{- 2Z_{i}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} - \widehat{c}Z_{i} \right)}$$

På liknande sätt som vi gjorde i [avsnitt 3.4](https://www.dropbox.com/scl/fi/v0a5z69slwsy7pe20fp7d/3-4-H-rled-estimatorerna.docx?rlkey=kdu3tyfzbzhxk9o1g4xhf17x4&dl=0) kan vi sätta första villkoret lika med 0 och lösa ut en definition för $\widehat{a}$:


$$0 = - 2\sum_{}^{}Y + \sum_{}^{}â + \sum_{}^{}\widehat{b}X_{i} + \sum_{}^{}{\widehat{c}Z_{i}} \tag{6}$$



$$n\widehat{a} = nY - \widehat{b}nX_{i} - \widehat{c}nZ_{i}$$



$$\widehat{a} = \overline{Y} - \widehat{b}\overline{X} - \widehat{c}\overline{Z}$$

Koefficient $\widehat{a}$ är en funktion av observationerna i alla tre variabler i regressionsmodellen: $Y$, $X$ och $Z$.
Härifrån kan vi fortsätta lösa ut lutningskoefficienterna $\widehat{b}$ och $\widehat{c}$. Här nöjer vi oss dock med att enbart jämföra slutresultaten, alltså deras estimatorer, och hoppar över själva härledningarna.
För att estimera lutningskoefficienterna med tre variabler behöver vi mer komplexa formler än tidigare. Oroa dig inte om formeln ser skrämmande ut. Poängen är att förstå principen här, nämligen att varje koefficient beräknas med hänsyn till de andra variablerna i regressionsmodellen.
Ekvationerna nedan beskriver estimatorerna för lutningskoefficienterna $\widehat{b}$ och $\widehat{c}$. För att komprimera algebran skriver vi $\widetilde{X_{i}} = X_{i} - \overline{X}$ och motsvarande för $\widetilde{Y_{i}}$ och $\widetilde{Z_{i}}$. Detta innebär att koefficienternas estimatorer beskrivs utifrån observationernas avvikelser från respektive medelvärde:


$$\widehat{b} = \frac{\left( \sum_{}^{}{\widetilde{Y_{i}}\widetilde{X_{i}}} \right)\left( \sum_{}^{}\widetilde{Z_{i}^{2}} \right) - \left( \sum_{}^{}{\widetilde{Y_{i}}\widetilde{Z_{i}}} \right)\left( \sum_{}^{}{\widetilde{X_{i}}\widetilde{Z_{i}}} \right)}{\left( \sum_{}^{}\widetilde{X_{i}^{2}} \right)\left( \sum_{}^{}\widetilde{Z_{i}^{2}} \right) - \left( \sum_{}^{}{\widetilde{X_{i}}\widetilde{Z_{i}}} \right)^{2}} \tag{7}$$



$$\widehat{c} = \frac{\left( \sum_{}^{}{\widetilde{Y_{i}}\widetilde{Z_{i}}} \right)\left( \sum_{}^{}\widetilde{X_{i}^{2}} \right) - \left( \sum_{}^{}{\widetilde{Y_{i}}\widetilde{X}} \right)\left( \sum_{}^{}{\widetilde{X_{i}}\widetilde{Z_{i}}} \right)}{\left( \sum_{}^{}\widetilde{X_{i}^{2}} \right)\left( \sum_{}^{}\widetilde{Z_{i}^{2}} \right) - \left( \sum_{}^{}{\widetilde{X_{i}}\widetilde{Z_{i}}} \right)^{2}}$$

Alla tre koefficienterna $\widehat{a}$, $\widehat{b}$ och $\widehat{c}$ beror på de observerade värdena i de tre variablerna $Y$, $X$ och $Z$. Detta kan vi se eftersom alla tre variablerna ingår i respektive ekvation (estimator).
Detta innebär att även om $\widehat{b}$ mäter samvariationen mellan $Y$ och $X$ är $\widehat{b}$ en funktion av både $Y$, $X$ och $Z$. Och trots att lutningskoefficienten $\widehat{c}$ mäter samvariationen mellan variablerna $Y$ och $Z$ är även $\widehat{c}$ en funktion av observationer i alla tre variablerna $Y$, $X$ och $Z$.

#### Vad spelar allt det här för roll?
Huvudpoängen är enkel men avgörande: När vi lägger till eller tar bort variabler i en regressionsmodell ändras resultaten för de andra variablerna.
I detta exempel såg vi att lutningskoefficienten för $X$ gick från $0,5$ till $0,28$ när vi lade till $Z$. Detta betyder att om vi inte inkluderar viktiga variabler får vi felaktiga resultat.
Hade vi haft fler variabler och koefficienter i vår regressionsmodell hade ekvationerna blivit ännu mer omfattande. Längre fram ska vi gå igenom hur vi kan räkna när vi har en regressionsmodell med valfritt antal variabler och koefficienter.
Om vi tillför en variabel till vår analys kan detta påverka resultaten för alla koefficienter som ingår i modellen. Säg att variabeln $Z$ bör ingå i modellen men att denna av någon anledning inte är med i analysen. I så fall kommer resultatet för variabeln $X$ att bli missvisande.
Det korrekta resultatet får vi inte förrän vi inkluderar $Z$. Detta är centralt för att förstå den här typen av metoder, forskning och analytiskt arbete i största allmänhet.

#### Estimera en modell
Nu ska vi estimera en regressionsmodell utifrån några observationer. För detta återanvänder vi de påhittade variablerna $Y$, $X$ och $Z$ med de fyra observationer vardera som vi använde tidigare när vi introducerade minstakvadratmetoden. Alla tre variablerna redovisas i tabell 1 med lite beräkningar som vi behöver.

**Tabell 1: Variablerna Y, X och Z med lite beräkningar**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  

$$i$$

                  $Y_{i}$   $X_{i}$   $Z_{i}$   $\widetilde{Y_{i}}$   $\widetilde{X_{i}}$   $\widetilde{Z_{i}}$   $\widetilde{Y_{i}}\widetilde{X_{i}}$   $\widetilde{Y_{i}}\widetilde{Z_{i}}$   $\widetilde{X_{i}}\widetilde{Z_{i}}$   $\widetilde{{X_{i}}^{2}}$   $\widetilde{{Z_{i}}^{2}}$
  ------------------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- ----------------------------------------------- ----------------------------------------------- ----------------------------------------------- ------------------------------------------------------------------ ------------------------------------------------------------------ ------------------------------------------------------------------ ------------------------------------------------------ ------------------------------------------------------
  1                                                           3                                  3                                  1                                       --0,5                                            --2                                            --0,5                                                      1                                                                 0,25                                                                1                                                            4                                                     0,25
  2                                                           2                                  4                                  4                                       --1,5                                            -1                                              2,5                                                      1,5                                                               --3,75                                                             --2,5                                                          1                                                     6,25
  3                                                           5                                  6                                  0                                        1,5                                              1                                             --1,5                                                     1,5                                                               --2,25                                                             --1,5                                                          1                                                     2,25
  4                                                           4                                  7                                  1                                        0,5                                              2                                              0,5                                                       1                                                                --0,25                                                              --1                                                           4                                                     0,25
  Medel                                                      3,5                                 5                                 1,5                                                                                                                                                                                                                                                                                                                                                                                                                                 
  $\sum_{}^{}{}$                                                                                                                                                                                                                                                                                            5                                                                 --6                                                                --4                                                           10                                                     9
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

::: {.fig-caption}
Förklaring: $\widetilde{Y_{i}} = Y_{i} - \overline{Y}$ och motsvarande för $\widetilde{X_{i}}$ och $\widetilde{Z_{i}}$.
I [avsnitt 2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0) använde vi variablerna $Y$ och $X$ för att estimera regressionsmodellen $Y_{i} = a + bX_{i} + V_{i}$ och fann då att $\widehat{a} = 1$ och $\widehat{b} = 0,5$. Nu ska vi estimera koefficienterna för följande regressionsmodell:
:::



$$Y_{i} = a + bX_{i} + cZ_{i} + V_{i} \tag{8}$$

där $Y$, $X$ och $Z$ är variablerna, $a$, $b$ och $c$ är koefficienterna vi ska estimera och $V$ är feltermen. I ekvation 7 har vi definitionerna för hur vi kan estimera $\widehat{b}$ och $\widehat{c}$. Utifrån uppgifterna i tabell 1 kan vi nu beräkna följande estimat för koefficienterna:


$$\widehat{b} = \frac{(5)(9) - ( - 6)( - 4)}{(10)(9) - ( - 4)^{2}} \approx 0,28 \tag{9}$$



$$\widehat{c} = \frac{( - 6)(10) - (5)( - 4)}{(10)(9) - ( - 4)^{2}} \approx - 0,54$$

#### Vad blev det för skillnad?
När vi estimerade regressionsmodellen $Y = a + bX + V$ fann vi att $\widehat{b} = 0,5$. När vi nu lade till variabeln $Z$ i regressionsmodellen ser vi hur resultatet för lutningskoefficienten $\widehat{b}$ går från 0,5 till 0,3. Resultaten för $\widehat{b}$ och $\widehat{c}$ använder vi för att estimera $\widehat{a}$:
$\widehat{a} = 3,5 - \widehat{b}*5 - \widehat{c}*1,5$ (10)$ $$= 3,5 - 0,28*5 - ( - 0,54)*1,5 \approx 2,89$
Vi kan sammanfatta våra estimerade koefficienter genom att sätta in resultaten i vår regressionsmodell:


$$Y_{i} = \widehat{a} + \widehat{b}X_{i} + \widehat{c}Z_{i} + V_{i} = 2,89 + 0,28X_{i} - 0,54Z_{i} + V_{i} \tag{11}$$

Nu kan vi även estimera predikterade $\widehat{Y_{i}}$ och residualen $\widehat{V_{i}}$, vilket sammanfattas i tabell 2 med avrundade resultat.
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation $i$    $Y_{i}$   $X_{i}$   $Z_{i}$   $\widehat{Y_{i}} \approx 2,89 + 0,28X_{i} - 0,54Z_{i}$
  -------------------------------------- ---------------------------------- ---------------------------------- ---------------------------------- -------------------------------------------------------------------------------------
  1                                                      3                                  3                                  1                                                           3,2
  2                                                      2                                  4                                  4                                                          1,86
  3                                                      5                                  6                                  0                                                          4,59
  4                                                      4                                  7                                  1                                                          4,34
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Ett försök att illustrera resultatet i diagram
När vi har tre variabler är det svårare att illustrera samvariation i ett diagram. Trots detta görs ett försök i figur 1 där de fyra observationerna är placerade i diagrammet utifrån deras värden för $Y$, $X$ och $Z$.
Den vertikala axeln är $Y$-axeln medan variablerna $X$ och $Z$ har varsin horisontell axel. Den svarta pricken högst upp i diagrammet är observation 3 vars värden är $(Y,X,Z) = (5,6,0)$.
Eftersom regressionsmodellen har tre variabler blir regressionslinjen $\left( \widehat{Y} \right)$ nu en plan yta med tre dimensioner, vilket illustreras av rutnätet. Denna plana yta är vinklad med hänsyn till de två variablerna $X$ och $Z$, beroende på deras respektive lutningskoefficient. Eftersom lutningskoefficienten $\widehat{c} \< 0$ lutar rutnätet nedåt längs med $Z$-axeln sett från $Y$-axeln. Eftersom $\widehat{b} \> 0$ lutar rutnätet uppåt längs med $X$-axeln sett från $Y$-axeln.

**Figur 1. Regressionsresultat med tre variabler**

*[Sideeg \> Jag sparade ett 3d-diagram som html i katalogen]{.mark} [Eriks_3d_graf](https://www.dropbox.com/scl/fo/2i2ntlsxmg2g3u0mjwg93/AGRmmFsd9k7y02ZW2EYyPyo?rlkey=oadbjo86p3expplymcnzfshu1&dl=0). [Om ni har möjlighet att göra det snyggare får ni jättegärna göra det ]{.mark}*😊

::: {.fig-caption}
Förklaring: Diagrammet illustrerar $\widehat{Y} = 2,89 + 0,28X - 0,54Z$. Klicka och dra i diagrammet för att vrida på det.
:::


#### Vad spelar allt det här för roll?
När vi la till en ny variabel i vår regressionsmodell ändras samvariationen mellan de variabler vi hade i regressionsmodellen sedan innan. Poängen med denna genomgång är att visa att detta även gäller om vi skulle lägga till ytterligare variabler förutom de tre vi använt här. Och om vi tar bort en variabel från en regressionstabell så kan detta leda till att samvariationen för de kvarvarande variablerna ändras.
Syftet med regressionsanalys är att studera mönster i data. Att saker samvarierar betyder inte nödvändigtvis någonting alls. Men i många situationer tolkar vi samvariation som tecken på orsakssamband. Ibland har vi goda skäl att göra så. Ibland inte.
När vi studerar orsakssamband vill vi inte bara veta om "fenomen A påverkar B". Ofta vill vi veta mer i detalj vad som händer. Orsakssamband ligger till grund för alla möjliga beslut som människor fattar. Om jag har huvudvärk -- ska jag ta 1 tablett, 100 tabletter eller inga tabletter? Ska regeringen spendera 1 miljon kr eller 100 miljarder på att förbättra matematikundervisningen?
För att få bättre svar på dessa frågor behöver våra analysmetoder vara noggranna och genomtänkta på samma gång.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-1"]=[  {    "id": "k2-4-1-001",    "name": "Uppgift 1",    "exercise": "I regressionsmodellen \\(Y_i = a + bX_i + cZ_i + V_i\\) ger koefficienten \\(\\widehat{b}\\) oss:",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den genomsnittliga förändringen i Y per enhet ökning i X, utan hänsyn till Z",          "Den genomsnittliga förändringen i Y per enhet ökning i X, givet värdena i Z",          "Den genomsnittliga förändringen i Z per enhet ökning i X",          "Den totala variationen i Y som förklaras av modellen"        ],        "correct": "Den genomsnittliga förändringen i Y per enhet ökning i X, givet värdena i Z"      }    },    "error": { "message": "Tänk på vad det innebär att ha med Z i modellen. Vad kontrolleras för när vi tolkar b-koefficienten?" },    "correct": { "message": "Rätt! Koefficienten \\(\\widehat{b}\\) ger den genomsnittliga förändringen i Y vid en enhet ökning i X, givet (konstanthållna) värden i Z. Båda de förklarande variablerna ingår i beräkningen." }  },  {    "id": "k2-4-1-002",    "name": "Uppgift 2",    "exercise": "En regressionsmodell \\(Y = a + bX + V\\) estimeras och ger \\(\\widehat{b} = 0{,}5\\). När en tredje variabel Z läggs till i modellen \\(Y = a + bX + cZ + V\\) och alla koefficienter re-estimeras, vad kan vi generellt säga om \\(\\widehat{b}\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\widehat{b}\\) förblir alltid oförändrad, eftersom OLS-estimatorn bara beror på X och Y",          "\\(\\widehat{b}\\) kan förändras, eftersom koefficienten nu mäter sambandet mellan X och Y konstanthållet för Z",          "\\(\\widehat{b}\\) ökar alltid när fler variabler läggs till i modellen",          "\\(\\widehat{b}\\) kan bara förändras om Z och X är perfekt korrelerade"        ],        "correct": "\\(\\widehat{b}\\) kan förändras, eftersom koefficienten nu mäter sambandet mellan X och Y konstanthållet för Z"      }    },    "error": { "message": "Tänk på vad det innebär att konstanthålla Z. Fångar \\(\\widehat{b}\\) fortfarande exakt samma samband som utan Z i modellen?" },    "correct": { "message": "Rätt! Lutningskoefficienten \\(\\widehat{b}\\) gick från 0,5 till ungefär 0,28 när Z lades till. Detta illustrerar hur koefficienter ändras när man tillför variabler till modellen." }  },  {    "id": "k2-4-1-003",    "name": "Uppgift 3",    "exercise": "I estimatorformeln för tre variabler med summorna \\(\\sum\\tilde{Y}_i\\tilde{X}_i = 5\\), \\(\\sum\\tilde{Z}_i^2 = 9\\), \\(\\sum\\tilde{Y}_i\\tilde{Z}_i = -6\\), \\(\\sum\\tilde{X}_i\\tilde{Z}_i = -4\\), \\(\\sum\\tilde{X}_i^2 = 10\\): \\[\\widehat{b} = \\frac{\\left(\\sum \\widetilde{Y_i}\\widetilde{X_i}\\right)\\left(\\sum \\widetilde{Z_i}^2\\right) - \\left(\\sum \\widetilde{Y_i}\\widetilde{Z_i}\\right)\\left(\\sum \\widetilde{X_i}\\widetilde{Z_i}\\right)}{\\left(\\sum \\widetilde{X_i}^2\\right)\\left(\\sum \\widetilde{Z_i}^2\\right) - \\left(\\sum \\widetilde{X_i}\\widetilde{Z_i}\\right)^2}\\] Vad är täljaren?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "21" },    "answerformat": "",    "error": { "message": "Beräkna \\((5)(9) - (-6)(-4) = 45 - 24\\). Var noga med tecknen vid multiplikationen av de negativa talen." },    "correct": { "message": "Rätt! Täljaren är \\((5)(9) - (-6)(-4) = 45 - 24 = 21\\). Nämnaren är \\((10)(9) - (-4)^2 = 90 - 16 = 74\\), vilket ger \\(\\widehat{b} \\approx 0{,}28\\)." }  },  {    "id": "k2-4-1-004",    "name": "Uppgift 4",    "exercise": "I regressionsresultatet \\(Y_i = 2{,}89 + 0{,}28X_i - 0{,}54Z_i\\), vad är det predikterade värdet \\(\\widehat{Y}\\) för en observation med \\(X = 6\\) och \\(Z = 0\\)? Avrunda till en decimal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "4.6" },    "answerformat": "",    "error": { "message": "Sätt in värdena i formeln: \\(\\widehat{Y} = 2{,}89 + 0{,}28 \\cdot 6 - 0{,}54 \\cdot 0\\). Räkna ut termerna var för sig." },    "correct": { "message": "Rätt! \\(\\widehat{Y}_3 = 2{,}89 + 0{,}28 \\cdot 6 - 0{,}54 \\cdot 0 = 2{,}89 + 1{,}68 = 4{,}57 \\approx 4{,}6\\)." }  },  {    "id": "k2-4-1-005",    "name": "Uppgift 5",    "exercise": "Interceptet \\(\\widehat{a}\\) i en regressionsmodell med tre variabler ges av formeln \\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X} - \\widehat{c}\\overline{Z}\\). Med \\(\\overline{Y} = 3{,}5\\), \\(\\overline{X} = 5\\), \\(\\overline{Z} = 1{,}5\\), \\(\\widehat{b} = 0{,}28\\) och \\(\\widehat{c} = -0{,}54\\): vad är \\(\\widehat{a}\\)? Avrunda till en decimal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "2.9" },    "answerformat": "",    "error": { "message": "Beräkna: \\(\\widehat{a} = 3{,}5 - 0{,}28 \\cdot 5 - (-0{,}54) \\cdot 1{,}5\\). Kom ihåg att subtrahera en negativ term innebär addition." },    "correct": { "message": "Rätt! \\(\\widehat{a} = 3{,}5 - 0{,}28 \\cdot 5 - (-0{,}54) \\cdot 1{,}5 = 3{,}5 - 1{,}4 + 0{,}81 \\approx 2{,}89 \\approx 2{,}9\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-1"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Faktorvariabler**](k2-4-2.html)
:::

