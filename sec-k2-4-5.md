# Estimera med matriser {#k2-4-5}

### Begrepp
*Inga nya begrepp i detta avsnitt.*

### Teori
I tidigare avsnitt räknade vi med formler för 2 och 3 variabler. Men vad händer om vi har 10 variabler? Eller 100? Matriser låter oss sammanfatta denna typ av beräkningar i en enda kompakt kortfattad formel som fungerar för valfritt antal variabler.
I dessa exempel ser du att matrismetoden ger exakt samma svar som de tidigare metoderna. Men med matriser blir det tydligt att metoden är generaliserbar till valfritt antal variabler eller valfritt antal observationer. Därigenom blir det förhoppningsvis även tydligare vad som är metodens stora fördelar och begränsningar.

#### Exempel nr 1
I föregående avsnitt definierade vi minstakvadratmetodens estimator för koefficienterna i en regressionsmodell beskriven med matriser. Låt oss prova hur vi kan använda detta för att estimera modeller utifrån data. Här följer tre exempel där vi återanvänder data och regressionsmodeller från tidigare exempel.
Låt oss nu återanvända den första regressionsmodellen och observationerna för denna som vi introducerade i [avsnitt 2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0): $Y = a + bX + V$. Men denna gång ska vi estimera modellen med matriser. Samma observationer som vi använt tidigare upprepas i tabell 1.

**Tabell 1: Variablerna** $X$ **och** $Y$

  --------------------------------------------------------------------------------------------
  Observation $i$   $Y$   $X$
  -------------------------------------- -------------------------- --------------------------
  1                                      3                          3
  2                                      4                          2
  3                                      6                          5
  4                                      7                          4
  --------------------------------------------------------------------------------------------
Vi börjar med att beskriva regressionsmodellen med matriser:


$$Y = XB + V \tag{1}$$



$$\begin{bmatrix} 3 \\ 4 \\ 6 \\ 7 \end{bmatrix} = \begin{bmatrix} 1 & 3 \\ 1 & 2 \\ 1 & 5 \\ 1 & 4 \end{bmatrix}\begin{bmatrix} a \\ b \end{bmatrix} + \begin{bmatrix} v_{1} \\ v_{2} \\ v_{3} \\ v_{4} \end{bmatrix}$$

Vår estimator för koefficienterna skriven med matriser är följande:


$$\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y \tag{2}$$

Vi ska nu visa alla beräkningssteg här för att du ska förstå vad som händer. I praktiken gör datorer detta automatiskt. Fokusera på att förstå strukturen. Du måste inte förstå varje enskilt räknesteg.
Om vi dessa matriserna i ekvation 2 får vi estimaten av (de uppskattade) koefficienterna:


$$\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y \tag{3}$$



$$\left\lbrack \begin{array}{r} \widehat{a} \\ \widehat{b} \end{array} \right\rbrack = \left( \begin{bmatrix} 1 & 1 & 1 & 1 \\ 3 & 4 & 6 & 7 \end{bmatrix}\begin{bmatrix} 1 & 3 \\ 1 & 4 \\ 1 & 6 \\ 1 & 7 \end{bmatrix} \right)^{- 1}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 3 & 4 & 6 & 7 \end{bmatrix}\begin{bmatrix} 3 \\ 2 \\ 5 \\ 4 \end{bmatrix}$$

Vi beräknar inversen $\left( X^{T}X \right)^{- 1}$ först:
$\left\lbrack \begin{array}{r} \widehat{a} \\ \widehat{b} \end{array} \right\rbrack = \begin{bmatrix} 4 & 20 \\ 20 & 110 \end{bmatrix}^{- 1}\left\lbrack \begin{array}{r} 14 \\ 75 \end{array} \right\rbrack$ (4)$ $${= \frac{1}{4*110 - ( - 20)*( - 20)}\begin{bmatrix} 110 & - 20 \\ - 20 & 4 \end{bmatrix}\left\lbrack \begin{array}{r} 14 \\ 75 \end{array} \right\rbrack }{= \left( \frac{1}{440 - 400} \right)\begin{bmatrix} 110 & - 20 \\ - 20 & 4 \end{bmatrix}\left\lbrack \begin{array}{r} 14 \\ 75 \end{array} \right\rbrack }{= \begin{bmatrix} \frac{110}{40} & \frac{- 20}{40}\ \\ \frac{- 20}{40} & \frac{4}{40} \end{bmatrix}\left\lbrack \begin{array}{r} 14 \\ 75 \end{array} \right\rbrack }{= \begin{bmatrix} \frac{11}{4} & - \frac{1}{2} \\ - \frac{1}{2} & \frac{1}{10} \end{bmatrix}\left\lbrack \begin{array}{r} 14 \\ 75 \end{array} \right\rbrack }{= \left\lbrack \begin{array}{r} 1 \\ 0,5 \end{array} \right\rbrack }$
Vårt resultat visar att $\widehat{a} = 1$ och $\widehat{b} = 0,5$, vilket är samma sak som vi kom fram till tidigare.

#### Exempel nr 2
Låt oss även göra samma sak för regressionsmodellen från [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0): $Y = a + bX + cZ + V$, vilket vi kan skriva med matriser som:


$$Y = XB + V \tag{5}$$

där matris $X$ innehåller variablerna $X$ och $Z$ och matris $B$ innehåller koefficienterna $a$, $b$ och $c$. $V$ är feltermerna och $Y$ förklarande variabeln. Observationerna vi ska använda upprepas i tabell 2.

**Tabell 2: Variablerna** $Y$, $X$ **och** $Z$

  --------------------------------------------------------------------------------------------------------------------------------
  Observation $i$   $Y$   $X$   $Z$
  -------------------------------------- ----------------------------- ----------------------------- -----------------------------
  1                                      3                             3                             1
  2                                      2                             4                             4
  3                                      5                             6                             0
  4                                      4                             7                             1
  --------------------------------------------------------------------------------------------------------------------------------
För att estimera koefficienterna kan vi nu ta:


$$\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y \tag{6}$$



$$\left\lbrack \begin{array}{r} \widehat{a} \\ \widehat{b} \\ \widehat{c} \end{array} \right\rbrack = \left( \begin{bmatrix} 1 & 1 & 1 & 1 \\ 3 & 4 & 6 & 7 \\ 1 & 4 & 0 & 1 \end{bmatrix}\begin{bmatrix} 1 & 3 & 1 \\ 1 & 4 & 4 \\ 1 & 6 & 0 \\ 1 & 7 & 1 \end{bmatrix} \right)^{- 1}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 3 & 4 & 6 & 7 \\ 1 & 4 & 0 & 1 \end{bmatrix}\left\lbrack \begin{array}{r} 3 \\ 2 \\ 5 \\ 4 \end{array} \right\rbrack$$



$$\left\lbrack \begin{array}{r} \widehat{a} \\ \widehat{b} \\ \widehat{c} \end{array} \right\rbrack = \begin{bmatrix} 4 & 20 & 6 \\ 20 & 110 & 26 \\ 6 & 26 & 18 \end{bmatrix}^{- 1}\left\lbrack \begin{array}{r} 14 \\ 75 \\ 15 \end{array} \right\rbrack$$



$$\left\lbrack \begin{array}{r} \widehat{a} \\ \widehat{b} \\ \widehat{c} \end{array} \right\rbrack \approx \left\lbrack \begin{array}{r} 2,9 \\ 0,3 \\ - 0,5 \end{array} \right\rbrack$$

Sista raden innehåller de avrundade resultaten $\widehat{a} \approx 2,9$, $\widehat{b} \approx 0,3$ och $\widehat{c} \approx - 0,5$. Detta är samma sak som vi kom fram till i [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0).

#### Exempel nr 3
I [avsnitt 3.2](https://www.dropbox.com/scl/fi/mvvykgc4cvkvdgxcbcq4x/3-2-En-modell-till.docx?rlkey=pfuhm3ijlm56lxoq339rhms2c&dl=0) använde vi fyra observationer för variablerna $Z$ och $K$ vilka upprepas i tabell 3. Med dessa observationer estimerade vi regressionsmodellen $Z = \alpha + \beta K + \epsilon$, där $\epsilon$ är feltermen och $\alpha$ och $\beta$ är modellens koefficienter, som vi fann var $\widehat{\alpha} = 2,5$ och $\widehat{\beta} = - 0,5$.

**Tabell 3: Variablerna** $Z$ **och** $K$

  ---------------------------------------------------------------------
  Observation i   $Z$   $K$
  --------------- -------------------------- --------------------------
  1               1                          0
  2               4                          0
  3               0                          4
  4               1                          4
  ---------------------------------------------------------------------
Med matriser kan vi skriva denna regressionsmodell som $Z = KB + E$, där $Z$ är den förklarade variabeln, $B$ är en matris med koefficienterna $\alpha$ och $\beta$, $K$ är en kolumnmatris med förklarande variabeln och $E$ är feltermerna. Estimatorn kan här skrivas:


$$\widehat{B} = \left( K^{T}K \right)^{- 1}K^{T}Z \tag{7}$$

Detta ger oss följande estimat:


$$\left\lbrack \begin{array}{r} \widehat{\alpha} \\ \widehat{\beta} \end{array} \right\rbrack = \left( \begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 0 & 4 & 4 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 1 & 0 \\ 1 & 4 \\ 1 & 4 \end{bmatrix} \right)^{- 1}\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 0 & 4 & 4 \end{bmatrix}\left\lbrack \begin{array}{r} 1 \\ 4 \\ 0 \\ 1 \end{array} \right\rbrack = \left\lbrack \begin{array}{r} 2,5 \\ - 0,5 \end{array} \right\rbrack \tag{8}$$

vilket är samma som vi kom fram till i [avsnitt 3.2](https://www.dropbox.com/scl/fi/mvvykgc4cvkvdgxcbcq4x/3-2-En-modell-till.docx?rlkey=pfuhm3ijlm56lxoq339rhms2c&dl=0).


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-4-5"]=[  {    "id": "k2-4-5-001",    "name": "Uppgift 1",    "exercise": "Regressionsmodellen \\(Y = a + bX + V\\) estimeras med matrismetoden. Matris \\(X\\) skrivs som:\\[X = \\begin{bmatrix} 1 & 3 \\\\ 1 & 4 \\\\ 1 & 6 \\\\ 1 & 7 \\end{bmatrix}\\]Varför innehåller första kolumnen enbart ettor?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är ett slumpmässigt val av värden",          "Ettor i första kolumnen representerar interceptet (konstanten) i regressionsmodellen",          "Ettor används för att normalisera datamaterialet",          "Den första kolumnen representerar observationsnumren 1 till 4"        ],        "correct": "Ettor i första kolumnen representerar interceptet (konstanten) i regressionsmodellen"      }    },    "error": { "message": "Tänk på vad den första koefficienten i \\(B = [a, b]^T\\) är. Vad multipliceras konstanten \\(a\\) med i regressionsmodellen?" },    "correct": { "message": "Rätt! Ettor i den första kolumnen representerar interceptet (konstanten \\(a\\)). Eftersom \\(a\\) inte multipliceras med någon variabel i modellen \\(Y = a + bX\\) multipliceras den med 1, vilket skapas med en kolumn av entor i matris X." }  },  {    "id": "k2-4-5-006",    "name": "Uppgift 2",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) med fyra observationer \\(X = \\{3, 4, 6, 7\\}\\) är matris \\(X\\):\\[X = \\begin{bmatrix} 1 & 3 \\\\ 1 & 4 \\\\ 1 & 6 \\\\ 1 & 7 \\end{bmatrix}\\]Beräkna \\(\\sum_{i=1}^{4}X_i^2\\), det vill säga summan av de kvadrerade \\(X\\)-värdena (andra kolumnen i \\(X\\)):",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "110" },    "answerformat": "Ange ett heltal",    "error": { "message": "Beräkna \\(3^2 + 4^2 + 6^2 + 7^2\\) och summera." },    "correct": { "message": "Rätt! \\(9 + 16 + 36 + 49 = 110\\). Detta värde är det nedre högra elementet i matrisen \\(X^TX\\): \\[\\begin{bmatrix} n & \\sum X_i \\\\ \\sum X_i & \\sum X_i^2 \\end{bmatrix} = \\begin{bmatrix} 4 & 20 \\\\ 20 & 110 \\end{bmatrix}\\] — vilket är utgångspunkten för att beräkna \\((X^TX)^{-1}\\)." }  },  {    "id": "k2-4-5-003",    "name": "Uppgift 3",    "exercise": "Med matrismetoden beräknas \\(\\widehat{B} = (X^T X)^{-1} X^T Y\\) och resultatet blev \\(\\widehat{a} = 1\\) och \\(\\widehat{b} = 0{,}5\\) för regressionsmodellen \\(Y = a + bX + V\\). Vilket av följande påståenden är korrekt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Matrismetoden ger ett annat svar än den traditionella formeln – matrismetoden är mer exakt",          "Matrismetoden ger exakt samma svar som den traditionella formeln – de är ekvivalenta",          "Matrismetoden kan bara användas för modeller med fler än två variabler",          "Matrismetoden ger alltid avrundade approximationer till de sanna koefficienterna"        ],        "correct": "Matrismetoden ger exakt samma svar som den traditionella formeln – de är ekvivalenta"      }    },    "error": { "message": "Vad var koefficienterna i samma modell när den estimerades utan matriser tidigare i kursen? Jämför svaren." },    "correct": { "message": "Rätt! Matrismetoden ger exakt samma svar (\\(\\widehat{a} = 1\\), \\(\\widehat{b} = 0{,}5\\)) som den traditionella formeln. Fördelen med matriser är inte att ge annorlunda svar, utan att ge en generell metod som fungerar för valfritt antal variabler." }  },  {    "id": "k2-4-5-004",    "name": "Uppgift 4",    "exercise": "Modellen \\(Y = a + bX + cZ + V\\) estimeras med matriser och man fick \\(\\widehat{a} \\approx 2{,}9\\), \\(\\widehat{b} \\approx 0{,}3\\) och \\(\\widehat{c} \\approx -0{,}5\\). Hur många rader och kolumner har matris \\(X\\) i detta fall (med 4 observationer och 2 förklarande variabler plus en konstant)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "4x3" },    "answerformat": "Ange svaret som 'rxk' (rader x kolumner), t.ex. '4x2'",    "error": { "message": "Antal rader i X = antal observationer n. Antal kolumner = antal koefficienter (konstant + antal förklarande variabler). Hur många koefficienter har modellen Y = a + bX + cZ?" },    "correct": { "message": "Rätt! Matris X har 4 rader (en per observation) och 3 kolumner (en för konstanten med ettor, en för X, en för Z). Dimensionen är \\(n \\times k = 4 \\times 3\\)." }  },  {    "id": "k2-4-5-005",    "name": "Uppgift 5",    "exercise": "Regressionsmodellen \\(Z = \\alpha + \\beta K + \\epsilon\\) estimerades med matriser och resultatet blev \\(\\widehat{\\alpha} = 2{,}5\\) och \\(\\widehat{\\beta} = -0{,}5\\). Vad är det predikterade värdet \\(\\widehat{Z}\\) för en observation med \\(K = 4\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "",    "error": { "message": "Sätt in \\(K = 4\\) i den estimerade regressionsformeln: \\(\\widehat{Z} = 2{,}5 + (-0{,}5) \\cdot 4\\)." },    "correct": { "message": "Rätt! \\(\\widehat{Z} = 2{,}5 + (-0{,}5) \\cdot 4 = 2{,}5 - 2 = 0{,}5\\)." }  }];</script>
<div class="exercise-section" data-section-id="k2-4-5"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Interaktion**](k2-4-6.html)
:::

