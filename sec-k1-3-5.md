# Rökning {#k1-3-5}

### Pushtex
Detta avsnitt beskriver hur vi kan använda matematiken för att beskriva grupptryck och sociala samspel.

### Begrepp
*Inga nya matematiska begrepp i detta avsnitt.*

### Teori
Tidigare använde vi linjära ekvationssystem för att beskriva några exempel på samhällsvetenskapliga diskussioner. Även ickelinjära ekvationer och ekvationssystem förekommer rikligt i samhällsvetenskapen.
Här följer ett exempel där vi har två vänner, Erik och Maria, som gör allt tillsammans. Båda funderar på om de ska börja röka. Eriks relation till rökning kan beskrivas med följande funktion:


$$\ \text{Eriks rökning}\ = y = x^{2} \tag{1}$$

Bokstaven $x$ är en variabel som beskriver hur mycket Maria röker. Marias rökning kan i sin tur beskrivas med funktionen:


$$\ \text{Marias rökning}\ = x = y^{2} \tag{2}$$

där $y$ alltså är Eriks rökning. Vi har nu följande ekvationssystem:


$$\left\{ \begin{matrix} y = x^{2} & \forall x \in \lbrack 0,1\rbrack \\ x = y^{2} & \forall y \in \lbrack 0,1\rbrack \end{matrix} \right.\  \tag{3}$$

Systemet beskriver hur Eriks rökning är en positiv funktion av Marias rökning, vilket i sin tur är en positiv funktion av Eriks rökning. Båda ekvationerna är endast definierade för värden av $x$ och $y$ inom intervallet $\lbrack 0,1\rbrack$. Ett sätt att hitta systemets lösningar är att skriva om ekvation två till $y = x^{\frac{1}{2}}$ och sedan använda detta i den första ekvationen:


$$\begin{matrix} x^{2} & \ = x^{\frac{1}{2}} \\ x^{2} - x^{\frac{1}{2}} & \ = 0 \\ x^{\frac{1}{2}}\left( x^{\frac{3}{2}} - 1 \right) & \ = 0 \end{matrix} \tag{4}$$

Nu kan vi se att systemets lösningar ges av $x^{\frac{1}{2}} = 0$ och $\left( x^{\frac{3}{2}} - 1 \right) = 0$. För att $x^{\frac{1}{2}} = 0$ måste $x$ vara 0 , vilket är första lösningen: $x_{1} = 0$. För $\left( x^{\frac{3}{2}} - 1 \right)$ får vi:


$$\begin{matrix} x^{\frac{3}{2}} - 1 & \ = 0 \\ \left( x^{3} \right)^{\frac{1}{2}} & \ = 1 \\ x_{2} & \ = 1 \end{matrix} \tag{5}$$

Vi har lösningarna $x_{1} = 0$ och $x_{2} = 1$, vilket ger oss lösningarna för $y$ :


$$\begin{matrix} & y_{1}^{*}\left( x_{1}^{*} \right) = 0^{2} = 0 \\ & y_{2}^{*}\left( x_{2}^{*} \right) = 1^{2} = 1 \end{matrix} \tag{6}$$

Lösning 1 ger punkten $\left( x_{1},y_{1} \right) = (0,0)$ och lösning 2 ger punkten $\left( x_{2},y_{2} \right) =$ $(1,1)$. Lösningarna innebär att antingen röker ingen av vännerna $(0,0)$ eller röker båda dagligen (1, 1), där värdet 1 kan beskrivas som att de röker ett paket cigaretter per dag.
Om någon av vännerna prövar rökning med mindre än 1 paket per dag, som till exempel att röka ett halvt paket, går ekvationssystemet mot lösningen $(0,0)$. Säg till exempel att $x = 0,5$. Detta ger $y = (0,5)^{2} = 0,25$.
Det vill säga om den ena röker ett halvt paket så röker den andra endast ett fjärdedels paket. Eftersom båda vännerna tar efter varandra kommer vi nästa dag att få $x = (0,25)^{2} = 0,0625$, varpå $y = (0,0625)^{2} \approx 0,0039$ och så vidare allt närmare mot 0 i oändlighet. De två funktionerna och lösningarna illustreras i figur 1. Linjerna möts vid de två punkterna $(0,0)$ och $(1,1)$.

**Figur 1. Två vänners rökvanor**

![](img/k1-3-5-image1.png)


::: {.fig-caption}
Förklaring: Den röda linjen beskriver Eriks rökning ($y$) som en funktion av Marias rökning ($x$). Den blå linjen beskriver Marias rökning som en funktion av Eriks rökning. Ekvationssystemet har två stabila jämvikter i punkterna (0, 0), där ingen röker, och i (1, 1) där båda röker.
:::



::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-3-5"]=[  {    "id": "k1-3-5-001",    "name": "Uppgift 1",    "exercise": "Erik och Marias rökbeteende beskrivs av ekvationssystemet \\[\\left\\{ \\begin{array}{r} y = x^2 \\\\ x = y^2 \\end{array} \\right.\\] där \\(x, y \\in [0,1]\\). Hur många lösningar har detta system?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Ingen lösning",          "Exakt en lösning",          "Två lösningar",          "Oändligt många lösningar"        ],        "correct": "Två lösningar"      }    },    "error": { "message": "Tänk på vilka stabila tillstånd som är möjliga: vad händer om ingen röker, och vad händer om båda röker maximalt?" },    "correct": { "message": "Rätt! Systemet har två lösningar: \\((x_1, y_1) = (0, 0)\\) där ingen röker, och \\((x_2, y_2) = (1, 1)\\) där båda röker ett paket per dag." }  },  {    "id": "k1-3-5-002",    "name": "Uppgift 2",    "exercise": "I ekvationssystemet \\(y = x^2\\), \\(x = y^2\\), \\(x, y \\in [0,1]\\) — där \\(x\\) representerar Marias och \\(y\\) Eriks rökning (i paket per dag) — hur mycket röker Erik om Maria röker \\(x = 0{,}5\\) paket per dag? Använd funktionen \\(y = x^2\\).",    "image": null,    "inputtype": "field",    "expectedanswer": { "y": "0.25" },    "answerformat": "Ange svaret med decimalpunkt, t.ex. 0.25",    "error": { "message": "Beräkna \\((0{,}5)^2\\)." },    "correct": { "message": "Rätt! \\(y = (0{,}5)^2 = 0{,}25\\). Om Maria röker ett halvt paket röker Erik bara ett kvarts paket. Systemet rör sig mot lösningen (0, 0)." }  },  {    "id": "k1-3-5-003",    "name": "Uppgift 3",    "exercise": "I ekvationssystemet \\(y = x^2\\), \\(x = y^2\\), \\(x, y \\in [0,1]\\) modelleras hur Erik och Maria påverkar varandras rökbeteende. Vad innebär lösningen \\((x_1, y_1) = (0, 0)\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Båda vännerna röker ett paket per dag",          "Ingen av vännerna röker",          "Bara Erik röker",          "Bara Maria röker"        ],        "correct": "Ingen av vännerna röker"      }    },    "error": { "message": "Vad innebär \\(x = 0\\) och \\(y = 0\\) i rökningstermerna?" },    "correct": { "message": "Rätt! Lösningen \\((0, 0)\\) innebär att varken Erik eller Maria röker. Det är en av de två stabila jämvikterna i systemet." }  },  {    "id": "k1-3-5-004",    "name": "Uppgift 4",    "exercise": "Ekvationssystemet \\(y = x^2\\), \\(x = y^2\\), \\(x, y \\in [0,1]\\) modellerar hur Erik och Maria påverkar varandras rökbeteende. Systemet har två stabila lösningar: \\((0,0)\\) och \\((1,1)\\). Vad illustrerar detta ur ett samhällsvetenskapligt perspektiv?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att rökning alltid leder till ökad social sammanhållning",          "Att socialt grupptryck och ömsesidigt beroende kan beskrivas med icke-linjära ekvationssystem",          "Att hälsovård alltid är mer effektiv än förebyggande insatser",          "Att marknadsmekanismer styr konsumtionsbeteende"        ],        "correct": "Att socialt grupptryck och ömsesidigt beroende kan beskrivas med icke-linjära ekvationssystem"      }    },    "error": { "message": "Tänk på vad modellen fångar: hur påverkar Erik och Maria varandra, och vilket matematiskt verktyg används?" },    "correct": { "message": "Rätt! Exemplet visar hur socialt grupptryck och ömsesidigt beroende – att var och en tar efter den andre – kan modelleras med icke-linjära ekvationssystem med flera stabila jämvikter." }  },  {    "id": "k1-3-5-005",    "name": "Uppgift 5",    "exercise": "I ekvationssystemet \\(y = x^2\\), \\(x = y^2\\), \\(x, y \\in [0,1]\\): om man startar från \\(x = 0{,}5\\) och itererar systemet (dvs. räknar ut \\(y\\), sedan \\(x\\) igen, osv.), mot vilken lösning rör sig systemet?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Mot \\((1, 1)\\) – båda röker mer och mer",          "Mot \\((0, 0)\\) – rökningen minskar successivt mot noll",          "Systemet oscillerar utan att nå en stabil punkt",          "Mot \\((0{,}5, 0{,}5)\\) – rökningen stabiliseras på halvvägs"        ],        "correct": "Mot \\((0, 0)\\) – rökningen minskar successivt mot noll"      }    },    "error": { "message": "Beräkna nästa steg: om \\(x = 0{,}5\\) ger \\(y = 0{,}25\\), vad ger \\(y = 0{,}25\\) för nästa \\(x\\)? Vart leder detta?" },    "correct": { "message": "Rätt! Från \\(x = 0{,}5\\) ger systemet \\(y = 0{,}25\\), sedan \\(x = 0{,}0625\\), och så vidare – allt närmre 0. Systemet konvergerar mot \\((0, 0)\\) när man startar under den instabila punkten \\((1, 1)\\)." }  }];</script>
<div class="exercise-section" data-section-id="k1-3-5"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Relationer**](k1-3-6.html)
:::

