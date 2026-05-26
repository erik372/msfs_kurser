# Felterm, residual och ett räkneexempel {#k2-2-5}

### Begrepp
*Inga nya begrepp i detta avsnitt.*

### Teori
Vi har regressionsmodellen:


$$Y = a + bX + V \tag{1}$$

där $Y$ och $X$ är variabler, $a$ och $b$ är koefficienter som vi vill estimera med minstakvadratmetoden och *V* är feltermen. Feltermen $V$ representerar variationen i vår förklarade variabel $Y$ som inte kan förklaras av regressionsmodellen och variationer i den förklarande variabeln $X$.
Vår regressionsmodell ska idealiskt sett utformas på ett sådant sätt att all variation i *Y* som beror på andra faktorer ska vara jämnt och slumpmässigt fördelad över feltermernas olika värden.
I föregående avsnitt definierade vi predikterade ${\widehat{Y}}_{i} = \widehat{a} + \widehat{b}X_{i}$ och residualen (uppskattade feltermen) som ${\widehat{V}}_{i} = Y_{i} - \widehat{Y_{i}}$.
Vi sätter nu in definitionen av ${\widehat{Y}}_{i}$ i vår ekvation för residualen ${\widehat{V}}_{i}$:


$$\widehat{V_{i}} = Y_{i} - \widehat{Y_{i}} = Y_{i} - \left( \widehat{a} + \widehat{b}X_{i} \right) = Y_{i} - \widehat{a} - \widehat{b}X_{i} \tag{2}$$

Detta visar att ${\widehat{V}}_{i}$ är en funktion av observationerna i variablerna $Y_{i}$ och $X_{i}$ samt de skattade koefficienterna $\widehat{a}$ och $\widehat{b}$.

#### Beräkna $\widehat{V}$
Figur 1 visar skattade resultat för $\widehat{Y}$ och $\widehat{V}$ från observationerna vi använde i föregående avsnitt. Diagrammet till höger i figuren är samma diagram som vi såg i föregående avsnitt. Värdena för residualen $\widehat{V}$ kan beskrivas som det vertikala avståndet mellan den diagonala linjen i diagrammet och respektive punkt. För observation 3 i diagrammet har vi skrivit ut beräkningen:


$${\widehat{V}}_{3} = Y_{3} - {\widehat{Y}}_{3} = 5 - 4 = 1 \tag{3}$$

Notera att även om summan av residualerna alltid är noll


$$\sum_{i}^{\hat{}}V_{i} = 0 \tag{4}$$

så är de ENSKILDA residualerna i regel skilda från noll. Om varje enskild residual vore lika med 0 ($\widehat{V_{i}} = 0$ för alla $i$) skulle alla observationer ligga exakt på regressionslinjen. Detta är i regel varken möjligt eller önskvärt. En regressionsmodell med perfekt fit ($\widehat{V_{i}} = 0$ för alla $i$) kan tyda på:
- Överanpassning (overfitting)
- Att vi endast har två observationer (en linje genom två punkter är alltid perfekt)
- Att sambandet är deterministiskt (inget slumpmässigt brus)
I praktiken har vi nästan alltid variation kring regressionslinjen, vilket är normalt och förväntat.

![](img/k2-2-5-image1.png)

**Figur 1 Estimera** $\widehat{\mathbf{V}}$

<table class="table table-bordered" style="width:52%;">
<colgroup>
<col style="width: 18%" />
<col style="width: 7%" />
<col style="width: 9%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr>
<th>Observation i</th>
<th style="text-align: center;">\(Y_{i}\)</th>
<th style="text-align: center;">\({\widehat{Y}}_{i}\)</th>
<th style="text-align: center;">\({\widehat{V}}_{i} = Y_{i} - {\widehat{Y}}_{i}\)</th>
</tr>
</thead>
<tbody>
<tr>
<td>\(1\)</td>
<td style="text-align: center;">\(3\)</td>
<td style="text-align: center;">\(2{,}5\)</td>
<td style="text-align: center;">\(0{,}5\)</td>
</tr>
<tr>
<td>\(2\)</td>
<td style="text-align: center;">\(2\)</td>
<td style="text-align: center;">\(3\)</td>
<td style="text-align: center;">\(-1\)</td>
</tr>
<tr>
<td>\(3\)</td>
<td style="text-align: center;">\(5\)</td>
<td style="text-align: center;">\(4\)</td>
<td style="text-align: center;">\(1\)</td>
</tr>
<tr>
<td>\(4\)</td>
<td style="text-align: center;">\(4\)</td>
<td style="text-align: center;">\(4{,}5\)</td>
<td style="text-align: center;">\(-0{,}5\)</td>
</tr>
<tr>
<td>Summa</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">\(0\)</td>
</tr>
<tr>
<td>Medelvärde</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">\(0\)</td>
</tr>
</tbody>
</table>

#### Räkna med minstakvadratmetoden
Vi uppskattade tidigare $\widehat{a}$ och $\widehat{b}$ genom att jämföra en regressionslinje i ett diagram. Nu ska vi med hjälp av minstakvadratmetoden estimera koefficienterna $\widehat{a}$ och $\widehat{b}$ utifrån observationerna i våra variabler $X$ och $Y$.
I praktiken utförs beräkningarna vanligtvis av en dator och många analysprogram har färdiga kommandon för detta. Metoden kräver ingen avancerad matematik men när vi har många variabler och observationer kan beräkningarna ta lång tid om vi gör det för hand.
I detta exempel har vi bara fyra observationer och två variabler (figur 1), varför det är relativt enkelt att göra beräkningen för hand. Manuella beräkningar hjälper oss att förstå metoden bättre. Minstakvadratmetoden ger oss följande definitioner för att estimera koefficienterna $\widehat{a}$ och $\widehat{b}$:


$$\widehat{a} = \overline{Y} - \widehat{b}\overline{X} \tag{5}$$

$\widehat{b} = \frac{\sum_{i}^{}{\left( X_{i} - \overline{X} \right)\left( Y_{i} - \overline{Y} \right)}}{\sum_{i}^{}\left( X_{i} - \overline{X} \right)^{2}}$
Dessa ekvationer kallas för koefficienternas estimatorer. Med hjälp av urvalsdata kan vi estimera (uppskatta) koefficienterna i populationen. Låt oss gå igenom dessa ekvationer steg för steg. Definitionen för $\widehat{a}$:
- $\widehat{a}$ är estimerade konstanta koefficienten, som anger regressionslinjens y-skärning för $X = 0$.
- $\overline{Y}$ och $\overline{X}$ är medelvärden av $Y$ och $X$, uppskattade med de urvalsdata vi har för respektive variabel.
- $\widehat{b}$ är det estimerade värdet av konstanta koefficienten $b$, linjens lutning. Vi behöver $\widehat{b}$ för att skatta $\widehat{a}$.
Definitionen av $\widehat{b}$:
- $\sum_{i}^{}{}$ betyder summan av alla observationer, där bokstaven $i$ syftar på hur observationerna är indexerade: observation 1 till 4. Vi summerar alla observationer från 1 till 4, varför vi i detta fall har $\sum_{i}^{}{} = \sum_{i = 1}^{n = 4}{}$
- Parentesen $(X_{i} - \overline{X})$ innebär att vi för varje observation $i$ av $X$ subtraherar medelvärdet $\overline{X}$. Parentesen $\left( Y_{i} - \overline{Y} \right)$ innebär samma sak för respektive observation $i$ av $Y$. För varje observation multiplicerar vi $(X_{i} - \overline{X})(Y_{i} - \overline{Y})$.
- Täljaren i definitionen för $\widehat{b}$ innebär att vi för varje observation beräknar $(X_{i} - \overline{X})(Y_{i} - \overline{Y})$ och summerar dessa. Detta dividerar vi med $\sum_{i}^{}\left( X_{i} - \overline{X} \right)^{2}$, där vi för respektive observation tar parentesen $\left( X_{i} - \overline{X} \right)$ i kvadrat och summerar över alla observationer.

#### Beräkna $\widehat{a}$ och $\widehat{b}$
Tabell 1 beskriver beräkningarna vi behöver för $\widehat{a}$ och $\widehat{b}$. Gå noga igenom varje steg i tabellen och försäkra dig om att du förstår vad som sker i varje kolumn.

**Tabell 1. Beräkningar för att estimera** $\widehat{\mathbf{a}}$ **och** $\widehat{\mathbf{b}}$

<table class="table table-bordered" style="width:97%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 7%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 14%" />
<col style="width: 17%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr>
<th>Observation</th>
<th style="text-align: right;">\(X_{i}\)</th>
<th style="text-align: right;">\(Y_{i}\)</th>
<th style="text-align: right;">\(X_{i} - \overline{X}\)</th>
<th style="text-align: right;">\(Y_{i} - \overline{Y}\)</th>
<th style="text-align: right;">\(\left( X_{i} - \overline{X} \right)^{2}\)</th>
<th style="text-align: right;">\((X_{i} - \overline{X})(Y_{i} - \overline{Y})\)</th>
</tr>
</thead>
<tbody>
<tr>
<td>\(1\)</td>
<td style="text-align: right;">\(3\)</td>
<td style="text-align: right;">\(3\)</td>
<td style="text-align: right;">\(-2\)</td>
<td style="text-align: right;">\(-0{,}5\)</td>
<td style="text-align: right;">\(4\)</td>
<td style="text-align: right;">\(1\)</td>
</tr>
<tr>
<td>\(2\)</td>
<td style="text-align: right;">\(4\)</td>
<td style="text-align: right;">\(2\)</td>
<td style="text-align: right;">\(-1\)</td>
<td style="text-align: right;">\(-1{,}5\)</td>
<td style="text-align: right;">\(1\)</td>
<td style="text-align: right;">\(1{,}5\)</td>
</tr>
<tr>
<td>\(3\)</td>
<td style="text-align: right;">\(6\)</td>
<td style="text-align: right;">\(5\)</td>
<td style="text-align: right;">\(1\)</td>
<td style="text-align: right;">\(1{,}5\)</td>
<td style="text-align: right;">\(1\)</td>
<td style="text-align: right;">\(1{,}5\)</td>
</tr>
<tr>
<td>\(4\)</td>
<td style="text-align: right;">\(7\)</td>
<td style="text-align: right;">\(4\)</td>
<td style="text-align: right;">\(2\)</td>
<td style="text-align: right;">\(0{,}5\)</td>
<td style="text-align: right;">\(4\)</td>
<td style="text-align: right;">\(1\)</td>
</tr>
<tr>
<td>Medelvärde</td>
<td style="text-align: right;">\(5\)</td>
<td style="text-align: right;">\(3{,}5\)</td>
<td style="text-align: right;"></td>
<td style="text-align: right;"></td>
<td style="text-align: right;"></td>
<td style="text-align: right;"></td>
</tr>
<tr>
<td>Summa</td>
<td style="text-align: right;">\(20\)</td>
<td style="text-align: right;">\(14\)</td>
<td style="text-align: right;"></td>
<td style="text-align: right;"></td>
<td style="text-align: right;">\(10\)</td>
<td style="text-align: right;">\(5\)</td>
</tr>
</tbody>
</table>
Summan av observationerna i variabel $X$ ges av $\sum_{i = 1}^{n = 4}X_{i} = 3 + 4 + 6 + 7 = 20$. Medelvärdet för $X$ ges av $\overline{X} = 20/4 = 5$. Vi börjar med $\widehat{b}$ som vi behöver värdet för att estimera $\widehat{a}$:


$$\widehat{b} = \frac{\sum_{i}^{}{\left( X_{i} - \overline{X} \right)\left( Y_{i} - \overline{Y} \right)}}{\sum_{i}^{}\left( X_{i} - \overline{X} \right)^{2}} = \frac{5}{10} = 0,5 \tag{6}$$

Resultat $\widehat{b} = 0,5$ innebär att en ökning av $X$ med en enhet i genomsnitt associeras med ett 0,5 högre $Y$. Eftersom vi nu har $\widehat{b}$ kan vi även estimera $\widehat{a}$:


$$\widehat{a} = \overline{Y} - \widehat{b}\overline{X} = 3,5 - 0,5*5 = 1 \tag{7}$$

Resultatet $\widehat{a} = 1$ innebär att för $X = 0$ är $\widehat{Y} = 1$. Resultaten $\widehat{a} = 1$ och $\widehat{b} = 0,5$  är samma som vi såg i föregående avsnitt. Låt oss nu beräkna punkterna på raka linjen genom att beräkna ${\widehat{Y}}_{i}$. Detta ges av regressionsmodellen, estimaten för $\widehat{a}$ och $\widehat{b}$ och observationerna från den förklarande variabeln $X$. Vi får följande definition för estimerade $\widehat{Y}$:


$${\widehat{Y}}_{i} = \widehat{a} + \widehat{b}X = 1 + 0,5X_{i} \tag{8}$$

där $X_{i}$ är observationerna för $X$. Med $\widehat{Y}$ kan vi även estimera residualen $\widehat{V}$. Resultaten presenteras i tabell 2. I kolumnen för $\widehat{Y}$ ser vi $Y$-värdena längs med regressionslinjen. Vi har endast värden på regressionslinjen som sammanfaller med de värden vi har för variabeln $X$. Pröva själv att i ett diagram rita ut punkterna $\left( X_{1},{\widehat{Y}}_{1} \right) = (3,\ \ 2,5)$, (4,3) , (6,4) och (7, 4,5)

**Tabell 2. Estimera** $\widehat{\mathbf{Y}}$ **och** $\widehat{\mathbf{V}}$

<table class="table table-bordered" style="width:96%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 20%" />
<col style="width: 18%" />
<col style="width: 24%" />
</colgroup>
<thead>
<tr>
<th>Observation</th>
<th style="text-align: center;">\(X_{i}\)</th>
<th style="text-align: center;">\(Y_{i}\)</th>
<th style="text-align: center;">\(\widehat{Y_{i}} = 1 + 0{,}5X_{i}\)</th>
<th style="text-align: center;">\(\widehat{V_{i}} = Y_{i} - \widehat{Y_{i}}\)</th>
<th style="text-align: center;">\(\left( \widehat{V_{i}} \right)^{2}\)</th>
</tr>
</thead>
<tbody>
<tr>
<td>\(1\)</td>
<td style="text-align: center;">\(3\)</td>
<td style="text-align: center;">\(3\)</td>
<td style="text-align: center;">\(2{,}5\)</td>
<td style="text-align: center;">\(0{,}5\)</td>
<td style="text-align: center;">\(0{,}25\)</td>
</tr>
<tr>
<td>\(2\)</td>
<td style="text-align: center;">\(4\)</td>
<td style="text-align: center;">\(2\)</td>
<td style="text-align: center;">\(3\)</td>
<td style="text-align: center;">\(-1\)</td>
<td style="text-align: center;">\(1\)</td>
</tr>
<tr>
<td>\(3\)</td>
<td style="text-align: center;">\(6\)</td>
<td style="text-align: center;">\(5\)</td>
<td style="text-align: center;">\(4\)</td>
<td style="text-align: center;">\(1\)</td>
<td style="text-align: center;">\(1\)</td>
</tr>
<tr>
<td>\(4\)</td>
<td style="text-align: center;">\(7\)</td>
<td style="text-align: center;">\(4\)</td>
<td style="text-align: center;">\(4{,}5\)</td>
<td style="text-align: center;">\(-0{,}5\)</td>
<td style="text-align: center;">\(0{,}25\)</td>
</tr>
<tr>
<td>Summa</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">\(\sum_{i}^{}{{\widehat{V}}_{i}}^{2} = 2{,}5\)</td>
</tr>
</tbody>
</table>

#### Kopplingen till kovarians och varians
I [avsnitt 2.3](https://www.dropbox.com/scl/fi/357utiljgf7iuk78jxhtv/2-3-Samvariation-1.docx?rlkey=ewtjvwrihoflt8tlvf8dccppo&dl=0) introducerade vi kovarians. Estimatorn för koefficient $\widehat{b}$ för regressionsmodellen $Y = a + bX + V$ kan även definieras som kovariansen mellan $X$ och $Y$ dividerat med variansen för förklarande variabeln $X$:


$$\frac{cov(X,Y)}{var(X)} = \frac{\frac{1}{n}\sum_{i}^{n}{\left( X_{i} - \overline{X} \right)\left( Y_{i} - \overline{Y} \right)}}{\frac{1}{n}\sum_{i}^{n}\left( X_{i} - \overline{X} \right)}\  \tag{9}$$

$= \frac{\sum_{i}^{n}{\left( X_{i} - \overline{X} \right)\left( Y_{i} - \overline{Y} \right)}}{\sum_{i}^{n}\left( X_{i} - \overline{X} \right)} = \widehat{b}$


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-5"]=[  {    "id": "k2-2-5-001",    "name": "Uppgift 1",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) med fyra observationer \\(X = \\{3, 4, 6, 7\\}\\) och \\(Y = \\{3, 2, 5, 4\\}\\): beräkna lutningskoefficienten \\[\\widehat{b} = \\frac{\\sum_{i}^{}(X_i - \\overline{X})(Y_i - \\overline{Y})}{\\sum_{i}^{}(X_i - \\overline{X})^2}\\] Täljaren är 5 och nämnaren är 10. Ange svaret som ett decimaltal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 0.5",    "error": { "message": "Dividera täljaren med nämnaren: \\(5 / 10 = ?\\)" },    "correct": { "message": "Rätt! \\(\\widehat{b} = 5/10 = 0{,}5\\). Det innebär att en ökning av \\(X\\) med en enhet i genomsnitt är associerad med ett 0,5 högre \\(Y\\)." }  },  {    "id": "k2-2-5-002",    "name": "Uppgift 2",    "exercise": "Med \\(\\overline{Y} = 3{,}5\\), \\(\\overline{X} = 5\\) och \\(\\widehat{b} = 0{,}5\\), beräkna konstanten: \\[\\widehat{a} = \\overline{Y} - \\widehat{b} \\cdot \\overline{X}\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1" },    "answerformat": "",    "error": { "message": "Sätt in värdena: \\(\\widehat{a} = 3{,}5 - 0{,}5 \\times 5\\)." },    "correct": { "message": "Rätt! \\(\\widehat{a} = 3{,}5 - 0{,}5 \\times 5 = 3{,}5 - 2{,}5 = 1\\). Konstanten anger regressionslinjens y-skärning: för \\(X = 0\\) är \\(\\widehat{Y} = 1\\)." }  },  {    "id": "k2-2-5-003",    "name": "Uppgift 3",    "exercise": "Residualen för observation \\(i\\) definieras som \\(\\widehat{V}_i = Y_i - \\widehat{Y}_i\\). Med \\(\\widehat{Y} = 1 + 0{,}5X\\) och observation 2 som har \\(X_2 = 4\\) och \\(Y_2 = 2\\): vilket värde har residualen \\(\\widehat{V}_2\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "-1" },    "answerformat": "",    "error": { "message": "Beräkna först \\(\\widehat{Y}_2 = 1 + 0{,}5 \\times 4\\), och subtrahera sedan detta från \\(Y_2 = 2\\)." },    "correct": { "message": "Rätt! \\(\\widehat{Y}_2 = 1 + 0{,}5 \\times 4 = 3\\), och \\(\\widehat{V}_2 = 2 - 3 = -1\\). Det negativa tecknet innebär att observation 2 ligger under regressionslinjen." }  },  {    "id": "k2-2-5-004",    "name": "Uppgift 4",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\): vad är summan av alla residualer \\(\\sum_{i}^{}\\widehat{V}_i\\) alltid lika med?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "1",          "Medelvärdet av \\(Y\\)",          "0",          "Standardavvikelsen för \\(Y\\)"        ],        "correct": "0"      }    },    "error": { "message": "Tänk på att minstakvadratmetoden hittar den linje som balanserar positiva och negativa avvikelser från linjen." },    "correct": { "message": "Rätt! Summan av alla residualer är alltid noll: \\(\\sum \\widehat{V}_i = 0\\). I exemplet är residualerna 0,5 + (−1) + 1 + (−0,5) = 0. Däremot är de enskilda residualerna i regel skilda från noll." }  },  {    "id": "k2-2-5-005",    "name": "Uppgift 5",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) kan lutningskoefficienten \\(\\widehat{b}\\) uttryckas som kovariansen mellan \\(X\\) och \\(Y\\) dividerat med variansen för \\(X\\). Med \\(\\text{cov}(X,Y) = 5/3\\) och \\(\\text{var}(X) = 10/3\\): vad ger \\(\\text{cov}(X,Y)/\\text{var}(X)\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 0.5",    "error": { "message": "Dividera täljaren \\(5/3\\) med nämnaren \\(10/3\\). Tips: \\(\\frac{5/3}{10/3} = \\frac{5}{3} \\times \\frac{3}{10}\\)." },    "correct": { "message": "Rätt! \\(\\frac{5/3}{10/3} = \\frac{5}{10} = 0{,}5 = \\widehat{b}\\). Detta visar kopplingen mellan kovarians, varians och OLS-koefficienten: \\(\\widehat{b} = \\text{cov}(X,Y)/\\text{var}(X)\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-5"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Varför ska vi räkna nu igen?**](k2-2-6.html)
:::

