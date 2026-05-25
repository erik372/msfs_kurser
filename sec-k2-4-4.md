# Regression med matriser {#k2-4-4}

### Begrepp
- **Matrisinvers:** Inversen av en matris $A_{n \times n}$ skrivs $A^{- 1}$ och existerar om det finns en matris $B_{n \times n}$ där $AB = BA = I_{n}$ och $I_{n}$ är identitetsmatrisen.
- **Regressionsmodell skriven med matriser:** $Y = XB + V$, där kolumnmatris $Y$ innehåller alla observationer av förklarade variabeln, matris $X$ innehåller observationer för samtliga förklarande variabler och kolumnmatris $V$ innehåller samtliga feltermer.
- **Koefficienternas estimator:** $\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y$

### Teori
I detta avsnitt ska vi börja använda oss av matriser. Om du är ovan vid detta bör du försäkra dig om att du är bekant med de nödvändiga grunderna under Mattebokens avsnitt för [vektorer](https://www.matteboken.se/lektioner/matte-1/geometri/rakna-med-vektorer?gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_EE4luBpXEIA9dSFbMXRyktZXjcMTbPazinfY10UYe1KPWbXYpX71waAvC4EALw_wcB#!/) och [matriser](https://www.matteboken.se/lektioner/mattespecialisering/linjar-algebra/matriser?gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_HqWpw9cEdTu7hflPh5m_Fnb4iWC93EoIgi7FGQA0aPz5cK7yNNnw8aAsN7EALw_wcB#!/).
Detta avsnitt introducerar matriser i regressionsanalys. Matriser är ett kraftfullt verktyg men matematiken kan kännas abstrakt. Eftersom beräkningar görs med datorer behöver du inte kunna detta för hand. Du behöver inte heller förstå detaljerna. Fokusera på att förstå vad matriserna representerar. Om du känner dig överväldigad kan du hoppa till sammanfattningen i slutet eller gå till nästa avsnitt. Du kan fortfarande förstå regression utan någon djupare kunskap om matrisräkning.
Varför du ändå bör försöka lära dig detta: Genom att gå igenom logiken i matrisräkningen på ett övergripande plan kommer du få en djupare förståelse metoden. Logiken i regressionsanalys som presenteras här har en central betydelse för vetenskap generellt och är avgörande för hur vi tänker på orsakssamband och världen i stort. Huvudbudskapet är alltså mer teoretiskt eller filosofiskt, snarare än matematiskt.
Mer konkret får du dessutom en förståelse för hur statistikprogram faktiskt arbetar, förmåga att generalisera till valfritt antal variabler och grund för senare avancerade koncept (varians-kovariansmatriser).

#### Inversen av en matris
I detta avsnitt ska vi bland annat använda *inversen av matriser*, även kallat *inversmatriser*. Om vi dividerar siffran 1 med ett reellt tal *a* får vi $\frac{1}{a} = a^{- 1}$. Detta innebär även att $\frac{a}{a} = a^{1}a^{- 1} = 1$. Talet $a^{- 1}$ kallas för multiplikativa inversen av $a$. För matriser kan man inte utföra någon division på samma sätt som man gör med vanliga tal. I stället har vi inversen av matriser.
En $n \times n$ (lika många rader som kolumner) matris $A$ är inverterbar (inversen av A existerar) om det existerar en $n \times n$ matris $B$, vars egenskaper innebär följande:


$$AB = BA = I_{n} \tag{1}$$

där $I_{n}$ är en identitetsmatris med $n \times n$ rader och kolumner. Själva inversen av matris $A$ kan skrivas $A^{- 1}$. Alla matriser har inte en inversmatris.
Det finns olika metoder för att beräkna inversen av en matris. En metod är [Gausselimination](https://www.matteboken.se/lektioner/mattespecialisering/linjar-algebra/gausselimination#!/). Här är ett annat exempel. Säg att vi har följande matris $A$:


$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \tag{2}$$

där $a$, $b$, $c$ och $d$ är valfria tal. Inversmatrisen $A^{- 1}$ kan då beräknas som:


$$A^{- 1} = \frac{1}{ad - cb}\begin{bmatrix} d & - b \\ - c & a \end{bmatrix} = \begin{bmatrix} \frac{d}{ad - cb} & - \frac{b}{ad - cb} \\ - \frac{c}{ad - cb} & \frac{a}{ad - cb} \end{bmatrix} \tag{3}$$

En viktig egenskap för inversen av matris $A$ är följande: $AA^{- 1} = I$, det vill säga att matris $A$ matrismultiplicerad med dess invers $A^{- 1}$ är lika med identitetsmatrisen $I$.
På [denna webbsida](https://www.mathsisfun.com/algebra/matrix-inverse.html) kan du se räkneexempel på engelska. Se även [Wikipedia](https://en.wikipedia.org/wiki/Invertible_matrix). Många datorprogram har färdiga kommandon för att utföra denna typ av beräkningar.

#### Ett generellt uttryck för vår regressionsmodell
I [avsnitt 3.4](https://www.dropbox.com/scl/fi/v0a5z69slwsy7pe20fp7d/3-4-H-rled-estimatorerna.docx?rlkey=kdu3tyfzbzhxk9o1g4xhf17x4&dl=0) härledde vi koefficienternas estimatorer för en regressionsmodell med två variabler. I detta avsnitt ska vi härleda ett mer generellt uttryck för estimatorerna utifrån en regressionsmodell med ett valfritt antal koefficienter och variabler. För detta ska vi använda matriser. Vi börjar med förutsättningarna:
- Säg att vi har en regressionsmodell med många koefficienter, variabler och observationer. Modellen kan sammanfattas som $y_{i} = b_{1} + b_{2}x_{1} + b_{3}x_{2} + \ldots + b_{k}x_{k} + v_{i}$ där $y_{i}$ är förklarade variabeln för observation $i$. $b_{0}$ till $b_{k}$ är koefficienterna vi ska estimera med hjälp av minstakvadratmetoden.
- $x_{1}$ till $x_{k}$ är de förklarande variablerna. Vi har $k$ stycken förklarande variabler. $v_{i}$ är feltermen. Den första koefficienten $b_{0}$ multipliceras inte med någon förklarande variabel. Koefficient $b_{0}$ är konstanten i modellen (på samma sätt som bokstaven $a$ i modellen $Y = a + bX + \epsilon$).
- Vi samlar alla koefficienter $b$ i en kolumnmatris $B$, med lika många rader som koefficienter. Eftersom vi har $k$ antal koefficienter har matris $B$ dimensionerna $k \times 1$.
- Våra förklarande variabler $x_{1}$ till $x_{k}$ samlar vi i matris $X$. Respektive kolumn i matris $X$ innehåller värdena för en förklarande variabel. Om första koefficienten $b_{0}$ i regressionsmodellen inte multipliceras med någon variabel består första kolumnen i $X$ av siffran 1 i varje cell.
- Nästa kolumn i matris $X$ innehåller observerade värden för den första förklarande variabeln. Lika många rader som antal observationer, $n$. Därefter följer en kolumn per förklarande variabel. Matris $X$ har dimensionerna $n \times k$.
- Feltermen, $v_{1},v_{2},\ldots,v_{n}$, samlar vi i matris $V$. Vi har lika många feltermer som observationer, $n$.
Vår regressionsmodell kan nu skrivas med matriser:


$$\left\lbrack \begin{array}{r} \begin{matrix} y_{1} \\ y_{2} \\ \vdots \end{matrix} \\ y_{n} \end{array} \right\rbrack_{n \times 1} = \begin{bmatrix} 1 & x_{11} & x_{21} & \ldots & x_{k1} \\ 1 & x_{12} & x_{22} & \ldots & x_{k2} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_{1n} & x_{2n} & \ldots & x_{kn} \end{bmatrix}_{n \times k}\left\lbrack \begin{array}{r} \begin{matrix} b_{1} \\ b_{2} \\ \vdots \end{matrix} \\ b_{k} \end{array} \right\rbrack_{k \times 1} = \left\lbrack \begin{array}{r} \begin{matrix} v_{1} \\ v_{2} \\ \vdots \end{matrix} \\ v_{n} \end{array} \right\rbrack_{n \times 1} \tag{4}$$



$$Y = XB + V$$

där $x_{11}$ syftar på första förklarande variabeln och första observationen. $x_{21}$ är andra förklarande variabeln, första observationen.
I matrisform får vi en kolumnmatris $Y$, en matris $X$ med konstanten 1 och förklarande variablerna i varsin kolumn, en kolumnmatris $B$ med koefficienterna och en kolumnmatris $V$ med feltermerna. Detta är den linjära relationen i populationen som vi nu ska försöka estimera med hjälp av minstakvadratmetoden.

#### Formulerad som ett minimeringsproblem
Precis som tidigare innebär minstakvadratmetoden att vi vill minimera kvadrerade residualerna. Utifrån vår regressionsmodell kan vi nu formulera vårt minimeringsproblem.
Vi söker de estimerade koefficienterna $\widehat{B}$ som minimerar summan av de kvadrerade residualerna. Vi börjar med att sätta in $\widehat{B}$ och $\widehat{V}$ i vår ekvation och flyttar om lite så att vi får en ekvation där residualerna $\widehat{V}$ är ett resultat av de andra termerna i modellen:


$$\widehat{V} = Y - X\widehat{B} \tag{5}$$

$\widehat{V}$ är en kolumnmatris och vi kan inte få kvadrerade residualer genom att multiplicera $\widehat{V}\widehat{V}$. Detta är inte definierat för matriser då antal kolumner i vänstra matrisen måste vara lika med antal rader i högra matrisen (se [avsnittet om matriser](https://www.matteboken.se/lektioner/mattespecialisering/linjar-algebra/matriser?gad_source=1&gclid=CjwKCAiAqfe8BhBwEiwAsne6gdOGDG7qUuMqObnz8SmJDfQbaIMvRVSfHRhFowJ8GS0rW_NdzRc58xoC0iYQAvD_BwE#!/)). För att få summan av de kvadrerade residualerna i matris $\widehat{V}$ multiplicerar vi i stället transponerade ${\widehat{V}}^{T}$ med $\widehat{V}$:


$${\widehat{V}}^{T}\widehat{V} = \left\lbrack v_{1} + v_{2} + \ldots + v_{n} \right\rbrack \times \begin{bmatrix} v_{1} \\ v_{2} \\ \vdots \\ v_{n} \end{bmatrix} = \left\lbrack v_{1}^{2} + v_{2}^{2} + \ldots + v_{n}^{2} \right\rbrack \tag{6}$$

Denna ekvation kan vi skriva om genom att använda definitionen av $\widehat{V}$ från ekvation 2:
${\widehat{V}}^{T}\widehat{V} = \left( Y - X\widehat{B} \right)\left( Y - X\widehat{B} \right)$ (7)$ $$= Y^{T}Y - Y^{T}X\widehat{B} - {\widehat{B}}^{T}X^{T}Y + {\widehat{B}}^{T}X^{T}X\widehat{B}$
där en matris upphöjd till $T$ betyder transponerad matris. Generellt för transponerade matriser gäller att $Y^{T}\widehat{B}X = \left( {\widehat{B}}^{T}X^{T}Y \right)^{T}$. Detta innebär att vi nu kan skriva:


$${\widehat{V}}^{T}\widehat{V} = Y^{T}Y - 2{\widehat{B}}^{T}X^{T}Y + {\widehat{B}}^{T}X^{T}X\widehat{B} \tag{8}$$

Nu har vi ett uttryck för kvadrerade residualerna i ${\widehat{V}}^{T}\widehat{V}$ och det är denna ekvation vi ska minimera med hänsyn till våra koefficienter i matris $\widehat{B}$:


$$\min_{\widehat{B}}\left( {\widehat{V}}^{T}\widehat{V} \right) \tag{9}$$

Vi deriverar därför ekvation 5 med hänsyn till $\widehat{B}$ och sätter resultatet lika med 0, vilket ger oss förstagradsvillkoren:


$$\frac{\partial{\widehat{V}}^{T}\widehat{V}}{\partial\widehat{B}} = - 2X^{T}Y + 2X^{T}X\widehat{B} = 0 \tag{10}$$

Från detta kan vi lösa ut $\widehat{B}$. Första steget är att flytta över den negativa termen $- 2X^{T}Y$ till högerledet och dividera båda sidor med 2:


$$- 2X^{T}Y + 2X^{T}X\widehat{B} = 0 \tag{11}$$



$$\left( X^{T}X \right)\widehat{B} = X^{T}Y$$

Vi vet att matrisen $\left( X^{T}X \right)$ är kvadratisk och symmetrisk med dimensionerna $k \times k$, där $k$ är antal förklarande variabler plus konstanten. Vi multiplicerar båda sidor med inversen av denna matris $\left( X^{T}X \right)^{- 1}$. Multiplikationen av inverterade matrisen $\left( X^{T}X \right)^{- 1}$ och $\left( X^{T}X \right)$ är lika med identitetsmatrisen $I$, en matris med värdet 1 på diagonalen.
Eftersom $I\widehat{B} = \widehat{B}$ får vi nu en definition av $\widehat{B}$:


$$\left( X^{T}X \right)^{- 1}\left( X^{T}X \right)\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y \tag{12}$$



$$I\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y$$



$$\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y$$

Detta är estimatorn för samtliga koefficienter i matris $B$. Med hjälp av denna ekvation och våra urvalsdata kan vi beräkna uppskattade värden av koefficienterna som återfinns i populationen vi studerar.

#### Vad var poängen med allt det här?
Vi har nu ett uttryck för estimerade koefficienterna $\widehat{B}$ som en funktion av de förklarande variablerna i $X$ och den förklarade variabeln i $Y$: $\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y$
Regressionsanalys innebär att vi kan uppskatta samvariationen mellan ett fenomen och ett annat fenomen, samtidigt som vi kontrollerar för andra fenomen. Matriserna ovan beskriver hur detta fungerar när vi har många variabler och koefficienter.
En viktig sak med denna matematik är att samtliga koefficienter i $\widehat{B}$ är ett resultat av samtliga variabler i $Y$ och $X$, oavsett hur många variabler vi har. I matriserna $Y$ och $X$ ingår alla observationer för respektive variabel. Alla variabler i regressionsmodellen kan därför påverka resultaten för alla koefficienter i regressionsmodellen. Detta är centralt för hur vi tänker att världen fungerar, vilket vi ska fördjupa oss i kommande avsnitt.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-4"]=[  {    "id": "k2-4-4-001",    "name": "Uppgift 1",    "exercise": "Hur skrivs regressionsmodellen \\(y_i = b_1 + b_2 x_1 + b_3 x_2 + \\ldots + b_{k+1} x_k + v_i\\) i kompakt matrisform?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(Y = B + X + V\\)",          "\\(Y = XB + V\\)",          "\\(Y = X^T B + V\\)",          "\\(B = XY + V\\)"        ],        "correct": "\\(Y = XB + V\\)"      }    },    "error": { "message": "Tänk på hur regressionsmodellen skrivs med matriserna Y (förklarad variabel), X (förklarande variabler), B (koefficienter) och V (feltermer)." },    "correct": { "message": "Rätt! Regressionsmodellen skrivs i matrisform som \\(Y = XB + V\\), där Y är kolumnmatrisen med observationer av den förklarade variabeln, X är matrisen med de förklarande variablerna, B är kolumnmatrisen med koefficienterna och V är feltermerna." }  },  {    "id": "k2-4-4-002",    "name": "Uppgift 2",    "exercise": "Vad är estimatorn för koefficientvektorn \\(\\widehat{B}\\) i matrisformuleringen av minstakvadratmetoden?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\widehat{B} = X^T Y\\)",          "\\(\\widehat{B} = (X^T X) X^T Y\\)",          "\\(\\widehat{B} = (X^T X)^{-1} X^T Y\\)",          "\\(\\widehat{B} = (XX^T)^{-1} X Y\\)"        ],        "correct": "\\(\\widehat{B} = (X^T X)^{-1} X^T Y\\)"      }    },    "error": { "message": "Tänk på härledningen: vi löser ut \\(\\widehat{B}\\) ur normalvillkoren \\((X^T X)\\widehat{B} = X^T Y\\). Hur multiplicerar vi båda sidor för att isolera \\(\\widehat{B}\\)?" },    "correct": { "message": "Rätt! Estimatorn för koefficientvektorn är \\(\\widehat{B} = (X^T X)^{-1} X^T Y\\). Denna formel ger oss alla koefficienter i regressionsmodellen, oavsett hur många förklarande variabler vi har." }  },  {    "id": "k2-4-4-003",    "name": "Uppgift 3",    "exercise": "Varför är matrisformuleringen av regressionsanalys särskilt värdefull jämfört med de formelbaserade estimatorerna för 2 eller 3 variabler?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Matrisformeln ger alltid mer exakta numeriska svar",          "Matrisformeln är densamma oavsett antal variabler och observationer",          "Matrisformeln eliminerar feltermen ur modellen",          "Matrisformeln kräver inte att data är normalfördelat"        ],        "correct": "Matrisformeln är densamma oavsett antal variabler och observationer"      }    },    "error": { "message": "Tänk på varför man väljer att skriva regressionsmodellen med matriser istället för separata formler per variabel. Vad är den centrala fördelen?" },    "correct": { "message": "Rätt! Matrisformeln \\(\\widehat{B} = (X^T X)^{-1} X^T Y\\) gäller för valfritt antal variabler och observationer. Utan matriser behöver vi en ny och allt mer komplicerad formel för varje extra variabel." }  },  {    "id": "k2-4-4-006",    "name": "Uppgift 4",    "exercise": "I regressionsanalys beräknas varians-kovariansmatrisen \\(\\sigma_V^2(X^TX)^{-1}\\). Vad är det primära syftet med denna matris?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att beräkna de estimerade koefficienterna \\(\\widehat{B}\\)",          "Att kvantifiera osäkerheten i de estimerade koefficienterna, så att vi kan testa om de är skilda från noll",          "Att beräkna \\(R^2\\) och modellens förklaringsgrad",          "Att kontrollera om regressionsmodellen är korrekt specificerad"        ],        "correct": "Att kvantifiera osäkerheten i de estimerade koefficienterna, så att vi kan testa om de är skilda från noll"      }    },    "error": { "message": "Koefficienterna \\(\\widehat{B}\\) beräknas redan av \\((X^TX)^{-1}X^TY\\). Vad behöver vi utöver själva koefficienterna för att kunna dra slutsatser om dem?" },    "correct": { "message": "Rätt! Varians-kovariansmatrisen ger oss standardfelen för varje koefficient — ett mått på hur osäkra estimaten är. Utan standardfelen vet vi inte om en koefficient på t.ex. 0,5 är ett tillförlitligt resultat eller ett brusigt estimat. Det är standardfelen som möjliggör t-test och konfidensintervall." }  },  {    "id": "k2-4-4-007",    "name": "Uppgift 5",    "exercise": "Matrisen \\(X\\) i regressionsmodellen \\(Y = XB + V\\) har dimensionen \\(n \\times k\\), där \\(n\\) är antal observationer och \\(k\\) är antal koefficienter. Vad är dimensionen på produkten \\(X^TX\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(n \\times n\\)",          "\\(k \\times k\\)",          "\\(n \\times k\\)",          "\\(k \\times n\\)"        ],        "correct": "\\(k \\times k\\)"      }    },    "error": { "message": "\\(X^T\\) har dimensionen \\(k \\times n\\) och \\(X\\) har dimensionen \\(n \\times k\\). Vad är dimensionen på produkten av en \\((k \\times n)\\)-matris och en \\((n \\times k)\\)-matris?" },    "correct": { "message": "Rätt! \\(X^T\\) är \\(k \\times n\\) och \\(X\\) är \\(n \\times k\\), så \\(X^TX\\) är \\(k \\times k\\). Det innebär att \\((X^TX)^{-1}\\) också är \\(k \\times k\\) — en kvadratisk matris med en rad och kolumn per koefficient." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-4"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Estimera med matriser**](k2-4-5.html)
:::

