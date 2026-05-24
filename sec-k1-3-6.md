# Relationer {#k1-3-6}

### Pushtex
Detta avsnitt beskriver hur vi kan använda matematiken för att beskriva nära relationer.
### Begrepp
*Inga nya matematiska begrepp i detta avsnitt.*
### Teori
Säg nu att Kim (från [avsnitt 3.2](https://www.dropbox.com/scl/fi/chd3jmpg1wg7lygvgdf1r/3-2-Hur-hitta-den-r-tta.docx?rlkey=hpfajps1dzihyoqroxgxaawuh&dl=0))har hittat en partner och vill arbeta för att få sin relation att fungera. Men Kim vill inte lägga ned mer arbete på relationen än vad Kims partner gör. Partnern känner detsamma och vill inte heller engagera sig om inte Kim gör det. Detta kan vi beskriva med hjälp av ett ickelinjärt ekvationssystem:
$\left\{ \begin{array}{r} K = P^{2} + 0,1 \\ P = K^{2} + 0,1 \end{array} \right.\ $ , där $K,P \in \lbrack 0,1\rbrack$ (1)
där *K* och *P* symboliserar Kim och Kims partner och 0,1 är en konstant som symboliserar hur mycket arbete de är beredda att lägga ned oavsett hur mycket den andra anstränger sig. Både $K$ och $P$ måste vara inom intervallet \[0,1\].
Från den nedre ekvationen löser vi ett uttryck för $K = (P - 0,1)^{\frac{1}{2}}\ $. Nu har vi två definitioner av *K* som vi kan sätta lika med varandra:
$(P - 0,1)^{\frac{1}{2}} = P^{2} + 0,1$ (2)
$P - 0,1 = \left( P^{2} + 0,1 \right)^{2}$
$P - 0,1 = P^{4} + 2*0,1*P^{2} + (0,1)^{2}$
När vi kvadrerar båda sidor av en ekvation kan vi få falska rötter. Därför måste alla lösningar verifieras genom att sättas tillbaka i originalekvationen.
Vi har nu fått följande fjärdegradspolynom:
$P^{4} + 0,2P^{2} - P + 0,11 = 0$ (3)
Härifrån kan vi fortsätta med att pröva rationella rötter eller olika värden för *P* och se om vi kan hitta en första rot. Därefter kan vi arbeta vidare med polynomdivision. Vi prövar $P = 0$, $P = \frac{1}{2}$ samt $P = 1$:
För $P = 0:$ $0 + 0 - 0 + 0,11 = 0,11 \neq 0$
För $P = \frac{1}{2}:$ $\left( \frac{1}{2} \right)^{4} + 0,2\left( \frac{1}{2} \right)^{2} - \frac{1}{2} + 0,11 = - 0,2775 \neq 0$
För $P = 1:$ $1 + 0,2 - 1 + 0,11 = 0,31 \neq 0$
Ingen av dessa var en lösning, men notera hur resultaten för polynomet är positivt för $P = 0$ och $P = 1$, men negativt för $P = \frac{1}{2}$.
Detta innebär att det bör finnas ett eller flera värden för P mellan dessa värden som resulterar i att polynomet blir lika med 0. Det bör finnas en lösning för P mellan 0 och $\frac{1}{2}$ samt ytterligare en lösning mellan $\frac{1}{2}$ och 1.
#### Illustrerat med två diagram
En annan metod är att rita upp ett diagram för funktionerna i fråga, antingen för hand eller med hjälp av datorn. Figur 1 illustrerar linjen för fjärdegradspolynomet i ekvation 3. Linjen passerar 0 där *P* är strax över 0,1 och strax under 0,9. Detta illustrerar det vi såg i beräkningarna för $P = 0,\frac{1}{2}\ \text{och}\ 1$.
Samma nollpunkter syns i figur 2 där de två ekvationerna i ekvationssystemet i ekvation 1 är illustrerade. Det finns två lösningar till systemet: en lösning med relativt låga värden där både Kim och partnern anstränger sig relativt lite för att få att relationen att fungera, samt en lösning där båda anstränger sig mycket. Lösningarna på systemet är $K_{1} = P_{1} \approx 0,11$ och $K_{2} = P_{2} \approx 0,89$.
Vi kontrollerar att lösningarna uppfyller ekvationssystemet i ekvation 1 och ligger inom det tillåtna intervallet \[0, 1\]:
För P ≈ 0,11: K = (0,11)² + 0,1 = 0,0121 + 0,1 = 0,1121 ≈ 0,11
För P ≈ 0,89: K = (0,89)² + 0,1 = 0,7921 + 0,1 = 0,8921 ≈ 0,89

**Figur 1. Linjen för fjärdegradspolynomet i ekvation 3**

![](img/k1-3-6-image1.png){style="width:4in;height:3in"}

**Figur 2. De två jämvikterna i Kims relation.**

![](img/k1-3-6-image2.png){style="width:4in;height:3in"}



::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-3-6"]=[  {    "id": "k1-3-6-001",    "name": "Uppgift 1",    "exercise": "Säg att en relation mellan två människor kan beskrivas med ekvationssystemet \\[\\left\\{ \\begin{array}{r} K = P^2 + 0{,}1 \\\\ P = K^2 + 0{,}1 \\end{array} \\right.\\] där \\(K\\) och \\(P\\) är personernas ansträngning i relationen (på en skala 0–1). Vad symboliserar konstanten \\(0{,}1\\) i modellen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Den maximala ansträngningen som Kim eller partnern kan lägga ned",          "Det arbete de är beredda att lägga ned på relationen oavsett vad den andra gör",          "Sannolikheten att relationen överlever ett år",          "Antalet månader som relationen varat"        ],        "correct": "Det arbete de är beredda att lägga ned på relationen oavsett vad den andra gör"      }    },    "error": { "message": "Konstanten är ett minimivärde – vad händer med \\(K\\) eller \\(P\\) även om den andre inte anstränger sig alls?" },    "correct": { "message": "Rätt! Konstanten \\(0{,}1\\) symboliserar det minimiarbete som Kim respektive partnern lägger ned på relationen oavsett hur mycket den andra anstränger sig." }  },  {    "id": "k1-3-6-002",    "name": "Uppgift 2",    "exercise": "Kontrollera att \\(K_1 = P_1 \\approx 0{,}11\\) är en lösning till \\(K = P^2 + 0{,}1\\). Vad blir \\((0{,}11)^2 + 0{,}1\\)? Ange svaret avrundat till två decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "K": "0.11" },    "answerformat": "Ange svaret med decimalpunkt, t.ex. 0.11",    "error": { "message": "Beräkna \\((0{,}11)^2 = 0{,}0121\\). Addera sedan \\(0{,}1\\) och avrunda." },    "correct": { "message": "Rätt! \\((0{,}11)^2 + 0{,}1 = 0{,}0121 + 0{,}1 = 0{,}1121 \\approx 0{,}11\\). Lösningen stämmer – Kim och partnern anstränger sig ungefär lika lite." }  },  {    "id": "k1-3-6-003",    "name": "Uppgift 3",    "exercise": "Ekvationssystemet \\(K = P^2 + 0{,}1\\), \\(P = K^2 + 0{,}1\\) har två lösningar: \\((K_1, P_1) \\approx (0{,}11, 0{,}11)\\) och \\((K_2, P_2) \\approx (0{,}89, 0{,}89)\\). Vad representerar de två lösningarna?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att relationen antingen är helt perfekt eller helt trasig",          "En jämvikt där båda anstränger sig lite, och en jämvikt där båda anstränger sig mycket",          "Att Kim anstränger sig mer än partnern i den ena lösningen",          "Att det finns exakt ett optimalt sätt att sköta en relation"        ],        "correct": "En jämvikt där båda anstränger sig lite, och en jämvikt där båda anstränger sig mycket"      }    },    "error": { "message": "Tänk på vad de låga respektive höga värdena för \\(K\\) och \\(P\\) innebär för graden av ansträngning i relationen." },    "correct": { "message": "Rätt! Den första lösningen \\((0{,}11, 0{,}11)\\) innebär att båda anstränger sig relativt lite, medan den andra lösningen \\((0{,}89, 0{,}89)\\) innebär att båda anstränger sig mycket." }  },  {    "id": "k1-3-6-004",    "name": "Uppgift 4",    "exercise": "I ekvationssystemet \\(K = P^2 + 0{,}1\\), \\(P = K^2 + 0{,}1\\): varför måste lösningarna verifieras genom att sättas tillbaka i originalekvationen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är bara ett matematiskt formkrav utan praktisk betydelse",          "Kvadrering av båda sidor kan introducera falska rötter som inte uppfyller originalekvationen",          "Datorer gör alltid fel vid andragradsekvationer",          "Variablerna \\(K\\) och \\(P\\) kan vara negativa"        ],        "correct": "Kvadrering av båda sidor kan introducera falska rötter som inte uppfyller originalekvationen"      }    },    "error": { "message": "Tänk på vad som kan gå fel när man kvadrerar båda sidor av en ekvation – kan nya, felaktiga lösningar uppstå?" },    "correct": { "message": "Rätt! När man kvadrerar båda sidor av en ekvation kan man introducera falska rötter (lösningar som uppfyller den kvadrerade ekvationen men inte originalekvationen). Därför måste alla lösningar verifieras." }  },  {    "id": "k1-3-6-005",    "name": "Uppgift 5",    "exercise": "I analysen av ekvationssystemet \\(K = P^2 + 0{,}1\\), \\(P = K^2 + 0{,}1\\) uppstår ekvationen \\(P^4 + 0{,}2P^2 - P + 0{,}11 = 0\\). Vad är det matematiska namnet på denna typ av ekvation?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Ett andragradspolynom",          "Ett tredjegradspolynom",          "Ett fjärdegradspolynom",          "En linjär ekvation"        ],        "correct": "Ett fjärdegradspolynom"      }    },    "error": { "message": "Polynomet benämns efter den högsta potensen av variabeln. Vilken är den högsta potensen av \\(P\\) i ekvationen?" },    "correct": { "message": "Rätt! Ekvationen \\(P^4 + 0{,}2P^2 - P + 0{,}11 = 0\\) är ett fjärdegradspolynom, eftersom den högsta potensen av \\(P\\) är 4." }  }];</script>
<div class="exercise-section" data-section-id="k1-3-6"></div>

