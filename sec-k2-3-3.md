# Hur väl passar modellerna mot data? {#k2-3-3}

### Begrepp
- **Medelkvadratsumman för residualerna** (engelska *mean squared residuals*, MSR):\
  $MSR = \frac{SSR}{n - p} = \frac{\sum_{i}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2}}{n - p}$
- **Medelkvadratsumman av den förklarade variationen** (engelska *mean sum of squares explained*, MSE): **
  $MSE = \frac{SSE}{p - 1} = \frac{\sum_{i}^{n}\left( \widehat{Y_{i}} - \overline{Y_{i}} \right)^{2}}{p - 1}$

### Teori
I tidigare avsnitt har vi estimerat två olika regressionsmodeller. Varje modell utgick från fyra observationer vardera. Regressionsanalys är ett sätt att studera mönster i data. Vi kan använda våra regressionsmodeller för att pröva i vilken utsträckning som det mönster som en regressionsmodell beskriver faktiskt återfinns i våra data.
Att estimera koefficienterna i regressionsmodellen är då endast första steget i en regressionsanalys. Därefter vill vi jämföra hur väl mönstret i vår regressionsmodell faktiskt stämde med det mönster som fanns i observationerna. Detta är ett vanligt tillvägagångssätt och därför viktigt att känna till.

#### Medelkvadratsumman
För att studera hur väl en regressionsmodell passar mot data kan vi även jämföra medelkvadratsumman. Medelkvadratsumman för residualerna (engelska *mean squared residuals*, MSR) beräknas:


$$MSR = \frac{SSR}{n - p} = \frac{\sum_{i}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2}}{n - p} \tag{5}$$

Nämnaren $n - p$ visar antal frihetsgrader, där $n$ är antal observationer och $p$ är antal estimerade koefficienter i regressionsmodellen. Frihetsgrader anger hur många \"fria\" värden vi har kvar efter att ha estimerat koefficienterna: $n$ = antal observationer (här 4). $p$ = antal estimerade koefficienter (här 2: $a$ och $b$). $n - p$ = frihetsgrader $(4\ - \ 2\ = \ 2)$. Med 4 observationer och 2 koefficienter har vi \"använt upp\" 2 frihetsgrader för att estimera koefficienterna. Vi har 2 frihetsgrader kvar för att mäta variation kring regressionslinjen.
Förenklat kan ett lågt MSR innebära att regressionsmodellens predikterade $\widehat{Y}$ hamnar relativt nära observationerna $Y$.

#### Medelkvadratsumman av den förklarade variationen
Medelkvadratsumman av den förklarade variationen är SSE dividerat med antal förklarande variabler (engelska mean sum of squares explained, MSE):


$$MSE = \frac{SSE}{p - 1} = \frac{\sum_{i}^{n}\left( \widehat{Y_{i}} - \overline{Y_{i}} \right)^{2}}{p - 1} \tag{6}$$

I täljaren tar vi $p$, antal estimerade koefficienter, minus 1 eftersom koefficient $a$ inte multipliceras med någon förklarande variabel.

#### Låt oss jämföra två regressionsmodeller
I tidigare avsnitt har vi använt två olika samlingar med observationer för att utifrån minstakvadratmetoden estimera de två regressionsmodellerna från [avsnitt 2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0) och [avsnitt 3.2](https://www.dropbox.com/scl/fi/mvvykgc4cvkvdgxcbcq4x/3-2-En-modell-till.docx?rlkey=pfuhm3ijlm56lxoq339rhms2c&dl=0):
Modell 1: $Y = a + bX + V$ (7)
Modell 2: $Z = \alpha + \beta K + \epsilon$
Tabell 2 och 3 återger observationerna vi använde för att estimera respektive tabell och några beräkningar vi nu ska använda i vår jämförelse.

**Tabell 2: Observationer och beräkningar för modell 1**

<table style="width:96%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 13%" />
<col style="width: 13%" />
<col style="width: 12%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr>
<th>Observation i</th>
<th style="text-align: center;"><span
class="math display">\[X_{i}\]</span></th>
<th style="text-align: center;"><span
class="math display">\[Y_{i}\]</span></th>
<th style="text-align: center;"><span
class="math display">\[\widehat{Y_{i}}\]</span></th>
<th style="text-align: center;"><span class="math display">\[Y_{i} -
\widehat{Y_{i}}\]</span></th>
<th style="text-align: center;"><span class="math display">\[Y_{i} -
\overline{Y}\]</span></th>
<th style="text-align: center;"><span class="math display">\[\left(
Y_{i} - \widehat{Y_{i}} \right)^{2}\]</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">2,5</td>
<td style="text-align: center;">0,5</td>
<td style="text-align: center;">-0,5</td>
<td style="text-align: center;">0,25</td>
</tr>
<tr>
<td>2</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">-1,5</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td>3</td>
<td style="text-align: center;">6</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1,5</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td>4</td>
<td style="text-align: center;">7</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">4,5</td>
<td style="text-align: center;">-0,5</td>
<td style="text-align: center;">0,5</td>
<td style="text-align: center;">0,25</td>
</tr>
<tr>
<td>Medel</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">3,5</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Summa</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">2,5</td>
<td style="text-align: center;">5</td>
</tr>
</tbody>
</table>

::: {.fig-caption}
Förklaring: se text.
:::


**Tabell 3: Observationer och beräkningar för modell 2**

<table style="width:95%;">
<colgroup>
<col style="width: 15%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 18%" />
<col style="width: 15%" />
<col style="width: 18%" />
</colgroup>
<thead>
<tr>
<th>Observation i</th>
<th style="text-align: center;"><span
class="math display">\[Z_{i}\]</span></th>
<th style="text-align: center;"><span
class="math display">\[K_{i}\]</span></th>
<th style="text-align: center;"><span
class="math display">\[\widehat{Z_{i}}\]</span></th>
<th style="text-align: center;"><span
class="math display">\[\widehat{\epsilon_{i}} = Z_{i} -
\widehat{Z_{i}}\]</span></th>
<th style="text-align: center;"><span class="math display">\[Z_{i} -
\overline{Z_{i}}\]</span></th>
<th style="text-align: center;"><span class="math display">\[\left(
Z_{i} - \widehat{Z_{i}} \right)^{2}\]</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">2,5</td>
<td style="text-align: center;">–1,5</td>
<td style="text-align: center;">–0,5</td>
<td style="text-align: center;">2,25</td>
</tr>
<tr>
<td>2</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">2,5</td>
<td style="text-align: center;">1,5</td>
<td style="text-align: center;">2,5</td>
<td style="text-align: center;">2,25</td>
</tr>
<tr>
<td>3</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">0,5</td>
<td style="text-align: center;">-0,5</td>
<td style="text-align: center;">–1,5</td>
<td style="text-align: center;">0,25</td>
</tr>
<tr>
<td>4</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">0,5</td>
<td style="text-align: center;">0,5</td>
<td style="text-align: center;">–0,5</td>
<td style="text-align: center;">0,25</td>
</tr>
<tr>
<td>Medel</td>
<td style="text-align: center;">1,5</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
<tr>
<td>Summa</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">9</td>
</tr>
</tbody>
</table>

::: {.fig-caption}
Förklaring: se text.
Nu ska vi jämföra vilken av modellerna som passar bäst mot deras respektive datapunkter. Vi börjar med att beräkna MSR för respektive regressionsmodell. Tabell 2 upprepar observationerna för modell 1 och variablerna $X$ och $Y$ samt några beräkningar som vi behöver. Detta ger MSR:
:::



$$MSR_{modell\ 1} = \frac{\sum_{i}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2}}{n - p} = \frac{2,5}{2} = 1,25 \tag{8}$$

Låt oss beräkna MSR även för regressionsmodell 2: $Z = \alpha + \beta K + \epsilon$. Tabell 3 upprepar variablernas värden och sammanfattar några beräkningar. Detta ger följande MSR:


$$MSR_{modell\ 2} = \frac{5}{2} = 2,5 \tag{9}$$

Eftersom $MSR_{modell\ 2} \> MSR_{modell\ 1}$ indikerar på att den första regressionsmodellens predikterade $\widehat{Y}$ ligger närmare observerade $Y$, jämfört med hur väl den andra regressionsmodellen lyckas prediktera den förklarade variabeln $Z$ i den modellen.
MSR beräknas med hjälp av observationerna vi använder och resultatet kan därför ändras om vi lägger till eller drar ifrån observationer, alternativt om vi specificerar våra regressionsmodeller på något annat sätt.

### Vi beräknar $R^{2}$ för båda modellerna
Låt oss även skatta $R^{2}$. För den första regressionsmodellen $Y = a + bX + V$ får vi (se tabell 2):


$$R_{modell\ 1}^{2} = 1 - \frac{\sum_{i}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2}}{\sum_{i}^{n}\left( Y_{i} - \overline{Y} \right)^{2}} = 1 - \frac{2,5}{5} = \frac{1}{2} \tag{10}$$

Resultat $R^{2} = \frac{1}{2}$ indikerar att hälften av variationen i $Y$ kan förklaras av regressionsmodellen och variationer i $X$. Låt oss beräkna $R^{2}\ $för den andra regressionsmodellen $Z = \alpha + \beta K + \epsilon$ (se tabell 3):


$$R_{modell\ 2}^{2} = 1 - \frac{\sum_{i}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2}}{\sum_{i}^{n}\left( Y_{i} - \overline{Y} \right)^{2}} = 1 - \frac{5}{9} = \frac{4}{9} \tag{11}$$

Eftersom $\frac{4}{9} \< \frac{1}{2}$ indikerar detta att den första regressionsmodellen har högre förklaringsgrad jämfört med den andra modellen. Modell 1 passar därför, enligt detta mått, bättre mot den data som vi använde för att estimera modellen, jämfört med hur modell 2 passar mot den data vi använde för att estimera den modellen.
Detta betyder att 50 % av variationen i $Y$ förklaras av $X$. 50 % av variationen i $Y$ beror på andra faktorer (residualerna). Ett högre $R^{2}$ betyder att modellen \"passar bättre\" mot data, men det betyder inte automatiskt att modellen är bra. Ett högt eller lågt $R^{2}$ säger inte heller nödvändigtvis något om orsakssamband.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-3-3"]=[  {    "id": "k2-3-3-001",    "name": "Uppgift 1",    "exercise": "För en regressionsmodell \\(Y = a + bX + V\\) med fyra observationer gäller: \\(\\sum(Y_i - \\widehat{Y}_i)^2 = 2{,}5\\) och \\(n - p = 4 - 2 = 2\\). Beräkna medelkvadratsumman för residualerna: \\[MSR = \\frac{\\sum(Y_i - \\widehat{Y}_i)^2}{n - p}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.25" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. 1.25)",    "error": { "message": "Sätt in värdena direkt: \\(MSR = \\frac{2{,}5}{2}\\). Dividera täljaren med nämnaren." },    "correct": { "message": "Rätt! \\(MSR = \\frac{2{,}5}{2} = 1{,}25\\). Frihetsgrader \\(n - p = 4 - 2 = 2\\) eftersom vi har 4 observationer och 2 estimerade koefficienter (\\(a\\) och \\(b\\))." }  },  {    "id": "k2-3-3-002",    "name": "Uppgift 2",    "exercise": "För en regressionsmodell \\(Z = \\alpha + \\beta K + \\epsilon\\) med fyra observationer gäller: \\(\\sum(Z_i - \\widehat{Z}_i)^2 = 5\\) och \\(n - p = 2\\). Beräkna: \\[MSR = \\frac{\\sum(Z_i - \\widehat{Z}_i)^2}{n - p}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "2.5" },    "answerformat": "Ange svaret som ett decimaltal (t.ex. 2.5)",    "error": { "message": "Använd formeln \\(MSR = \\frac{SSR}{n-p}\\). Sätt in \\(SSR = 5\\) och \\(n - p = 2\\)." },    "correct": { "message": "Rätt! \\(MSR = \\frac{5}{2} = 2{,}5\\). Jämfört med regressionen Y på X (MSR = 1,25) är MSR här högre (2,5 > 1,25), vilket indikerar att regressionen Y på X har predikterade värden som ligger närmare de observerade." }  },  {    "id": "k2-3-3-003",    "name": "Uppgift 3",    "exercise": "Medelkvadratsumman för residualerna beräknas som \\[MSR = \\frac{\\sum(Y_i - \\widehat{Y}_i)^2}{n - p}\\] Vad innebär ett lägre MSR vid jämförelse av två regressionsmodeller?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Modellen har fler observationer",          "Modellens predikterade värden \\(\\widehat{Y}\\) hamnar relativt nära observationerna \\(Y\\)",          "Modellen har ett mer negativt lutningskoefficient",          "Modellen har fler förklarande variabler"        ],        "correct": "Modellens predikterade värden \\(\\widehat{Y}\\) hamnar relativt nära observationerna \\(Y\\)"      }    },    "error": { "message": "MSR mäter genomsnittlig kvadrerad residual. Tänk på vad en liten residual innebär för hur väl linjen passar mot data." },    "correct": { "message": "Rätt! Ett lägre MSR innebär att regressionsmodellens predikterade \\(\\widehat{Y}\\) i genomsnitt hamnar relativt nära de observerade värdena \\(Y\\). Regressionen Y på X (MSR = 1,25) passar alltså bättre än regressionen Z på K (MSR = 2,5) mot sina respektive data." }  },  {    "id": "k2-3-3-004",    "name": "Uppgift 4",    "exercise": "För en regressionsmodell \\(Y = a + bX + V\\) med fyra observationer gäller \\(\\sum(Y_i - \\widehat{Y}_i)^2 = 2{,}5\\) och \\(\\sum(Y_i - \\overline{Y})^2 = 5\\). Beräkna \\(R^2\\): \\[R^2 = 1 - \\frac{\\sum(Y_i - \\widehat{Y}_i)^2}{\\sum(Y_i - \\overline{Y})^2} = 1 - \\frac{2{,}5}{5}\\] Vilket värde får \\(R^2\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(R^2 = 0{,}25\\)",          "\\(R^2 = 0{,}75\\)",          "\\(R^2 = 0{,}5\\)",          "\\(R^2 = 1\\)"        ],        "correct": "\\(R^2 = 0{,}5\\)"      }    },    "error": { "message": "Beräkna: \\(1 - \\frac{2{,}5}{5} = 1 - 0{,}5 = ?\\)" },    "correct": { "message": "Rätt! \\(R^2 = 1 - \\frac{2{,}5}{5} = 1 - 0{,}5 = 0{,}5\\). Det innebär att 50 % av variationen i \\(Y\\) förklaras av \\(X\\). De övriga 50 % beror på andra faktorer (residualerna)." }  },  {    "id": "k2-3-3-005",    "name": "Uppgift 5",    "exercise": "För en regressionsmodell \\(Z = \\alpha + \\beta K + \\epsilon\\) gäller \\(\\sum(Z_i - \\widehat{Z}_i)^2 = 5\\) och \\(\\sum(Z_i - \\overline{Z})^2 = 9\\), vilket ger \\(R^2 = 1 - \\frac{5}{9} = \\frac{4}{9}\\). Regressionen Y på X (från uppgift 4) hade \\(R^2 = 0{,}5\\). Vilken regression har högst förklaringsgrad och vad kan vi dra för slutsats?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Regressionen Z på K, eftersom \\(\\frac{4}{9} > \\frac{1}{2}\\)",          "Regressionen Y på X, eftersom \\(\\frac{1}{2} > \\frac{4}{9}\\), vilket innebär att den passar bättre mot sin data",          "Regressionen Y på X, och det bevisar att det finns ett kausalt samband",          "Båda regressionerna har samma förklaringsgrad"        ],        "correct": "Regressionen Y på X, eftersom \\(\\frac{1}{2} > \\frac{4}{9}\\), vilket innebär att den passar bättre mot sin data"      }    },    "error": { "message": "Jämför \\(\\frac{1}{2}\\) och \\(\\frac{4}{9}\\): omvandla till decimaltal. \\(\\frac{1}{2} = 0{,}5\\) och \\(\\frac{4}{9} \\approx 0{,}444\\). Vilket är störst?" },    "correct": { "message": "Rätt! \\(\\frac{1}{2} = 0{,}5 > \\frac{4}{9} \\approx 0{,}444\\), så regressionen Y på X har högre \\(R^2\\) och därmed högre förklaringsgrad. Viktigt: ett högt \\(R^2\\) säger inte nödvändigtvis något om orsakssamband, och jämförelsen görs mot respektive regressions egna data." }  }];</script>
<div class="exercise-section" data-section-id="k2-3-3"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Härled estimatorerna**](k2-3-4.html)
:::

