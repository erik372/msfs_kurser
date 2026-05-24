# Avvikelse, varians och standardavvikelse {#k2-2-2}


### Begrepp

- **Absolut avvikelse:** För variabel $x$ population: $\frac{1}{n}\sum\left\| x_{i} - \overline{x} \right\|$.

- **Varians:** För en variabel $x$ har vi: $var(x) = \left( \frac{1}{n} \right)\sum_{i}^{n}\left( x_{i} - \overline{x} \right)^{2}$.

- **Standardavvikelse:** För variabel $x$ har vi: $s_{x} = + \sqrt{var(x)} = \left( \frac{\sum_{i}^{n}\left( x_{i} - \overline{x} \right)^{2}}{n} \right)^{\frac{1}{2}}$

- **Bessels korrigering:** För att undvika att vi underskattar populationsvärden kan vi dividera estimatorerna med $n - 1$ i stället för $n$.

### Teori

I föregående avsnitt beskrev vi hur vi med urvalsdata kan uppskatta populationens medelvärde. Vi såg även exempel på hur vi kan beskriva spridning i en samling värden. I detta avsnitt ska vi nu introducera andra vanliga statistiska metoder för att studera spridning.

#### Absolut avvikelse

Ett sätt att mäta avvikelser från medelvärdet är att uppskatta *genomsnittlig absolut avvikelse* (engelska *mean absolute deviation*):

Genomsnittlig absolut avvikelse $= \frac{1}{n}\sum\left\| x_{i} - \overline{x} \right\|$ (1)

Vi kan även byta ut medelvärdet $\overline{x}$ mot annat genomsnittsmått som median eller typvärde.

#### Varians

Ett annat sätt att summera avvikelser från medelvärdet till ett positivt värde är att kvadrera avvikelserna: $\left( x_{i} - \overline{x} \right)^{2}$. Dividerar vi summan av de kvadrerade differenserna med antal observationer $n$ får vi *variansen* för variabel *x*:

> Varians:  $var(x) = \left( \frac{1}{n} \right)\sum_{i}^{n}\left( x_{i} - \overline{x} \right)^{2}$ (2)

Parentesen $\left( x_{i} - \overline{x} \right)^{2}$ ska beräknas för varje observation och summeras:

$\sum_{i}^{n}{\left( x_{i} - \overline{x} \right)^{2} =}\left( x_{i} - \overline{x} \right)^{2} + \left( x_{i} - \overline{x} \right)^{2} + \ldots + \left( x_{i} - \overline{x} \right)^{2}$ (3)

På samma sätt som att medelvärdet $\overline{x}$ är en uppskattning av populationens $\mu_{x}$ är $var(x)$ en uppskattning av variansen i populationen. Variansen i populationen för variabeln $x$ betecknas ofta med den grekiska bokstaven lilla sigma i kvadrat, $\sigma_{x}^{2}$.

#### Standardavvikelse

*Standardavvikelse* för en samling observationer är positiva kvadratroten av variansen. För population betecknas ofta standardavvikelse $\sigma_{x}$.

Uppskattad standardavvikelse för variabel $x$ kan skrivas ${\widehat{\sigma}}_{x}$, $sd_{x}$ eller $s_{x}$:

Standardavvikelse:  $s_{x} = + \sqrt{var(x)} = \left( \frac{\sum_{i}^{n}\left( x_{i} - \overline{x} \right)^{2}}{n} \right)^{\frac{1}{2}}$ (4)

#### Bessels korrigering

När vi estimerar medelvärdet med urvalsdata ($\overline{x}$) avviker ofta detta från populationens medelvärde ($\mu_{x}$). Denna avvikelse tenderar att leda till att vår uppskattning av populationens varians blir för liten.

För att justera för detta när vi estimerar varians (ekvation 2) dividera med $n - 1$ i stället för $n$. Detta kallas för *korrigerad varians* eller *urvalsvarians* (engelska *sample variance*):

Varians urval: $var(x) = \left( \frac{1}{n - 1} \right)\sum_{i}^{n}\left( x_{i} - \overline{x} \right)^{2}$ (5)

Division med $n - 1$ kallas för *Bessels korrigering* och medför ofta att den uppskattade variansen hamnar närmare populationens varians.

Många datorprogram har färdiga kommandon för att estimera (beräkna) varians och använder då Bessels korrigering, som i ekvation 5. Även för standardavvikelse kan vi använda Bessels korrigering:

Standardavvikelse urval: $s_{x} = \left( \frac{\sum_{i}^{n}\left( x_{i} - \overline{x} \right)^{2}}{n - 1} \right)^{\frac{1}{2}}$ (6)

#### Varians och standardavvikelse med konstant

Om vi har en konstant $a$, ett valfritt värde, är variansen för denna $var(a) = 0$. Detta eftersom ett enskilt värde inte har någon spridning. Om $a$ är multiplicerad med en variabel $x$ är variansen för $ax$ lika med $a^{2}var(x)$. Detta kan vi se genom att ta:

$var(ax) = \left( \frac{1}{n} \right)\sum_{i}^{}\left( {ax}_{i} - a\overline{x} \right)^{2}$ (7)

$= \left( \frac{1}{n} \right)\sum_{i}^{}\left( {a^{2}x}_{i}^{2} - 2a^{2}\overline{x} + a^{2}{\overline{x}}^{2} \right)$

Eftersom $a$ inte påverkas av summeringen kan vi flytta ut alla $a^{2}$:

$var(ax) = a^{2}\left( \frac{1}{n} \right)\sum\left( x_{i}^{2} - 2\overline{x} + {\overline{x}}^{2} \right)$ (8)

$= a^{2}\left( \frac{1}{n} \right)\sum\left( x_{i} - \overline{x} \right)^{2}$

$= a^{2}var(x)$

För standardavvikelse får vi:

$s_{x}(ax) = \left( \frac{1}{n}\sum_{i}^{n}\left( {ax}_{i} - a\overline{x} \right)^{2} \right)^{\frac{1}{2}}$ (9)

$= \left( \frac{1}{n}\sum_{i}^{}\left( {a^{2}x}_{i}^{2} - 2a^{2}\overline{x} + a^{2}{\overline{x}}^{2} \right) \right)^{\frac{1}{2}}$

$= \left( a^{2} \right)^{\frac{1}{2}}\left( \frac{1}{n}\sum\left( x_{i} - \overline{x} \right)^{2} \right)^{\frac{1}{2}}$

$= \|a\|s_{x}$

där $\|a\|$ är absolutbeloppet av konstanten $a$.

#### Ett exempel

Nu ska vi beräkna (skatta) variansen med fyra observationer för två variabler: $x$ och $y$. Variabel $x$ har värdena 3, 4, 6 och 7. Variabeln $y$ har värdena 3, 2, 5 och 4. Tabell 1 sammanfattar beräkningarna vi behöver.

**Tabell 1: Några beräkningar för variablerna** $\mathbf{x}$ **och** $\mathbf{y}$

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Observation   

$$x_{i}$$

   

$$y_{i}$$

   

$$x_{i} - \overline{x}$$

   

$$y_{i} - \overline{y}$$

   

$$\left( x_{i} - \overline{x} \right)^{2}$$

   

$$\left( y_{i} - \overline{y} \right)^{2}$$


  ------------- ---------------------------------- ---------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------------------------------ ------------------------------------------------------------------------
  1             3                                  3                                  -2                                                 -0,5                                               4                                                                        0,25

  2             4                                  2                                  -1                                                 -1,5                                               1                                                                        2,25

  3             6                                  5                                  1                                                  1,5                                                1                                                                        2,25

  4             7                                  4                                  2                                                  0,5                                                4                                                                        0,25

                                                                                                                                                                                                                                                                     

  Medelvärde    5                                  3,5                                                                                                                                                                                                               

  Summa         20                                 14                                                                                                                                       10                                                                       5
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Vi använder ekvation 5 för att skatta varians:

$var(x) = \frac{\sum_{i}^{}\left( x_{i} - \overline{x} \right)^{2}}{n - 1} = \frac{10}{3}\ $ (10)

$var(y) = \frac{\sum_{i}^{}\left( y_{i} - \overline{y} \right)^{2}}{n - 1} = \frac{5}{3}$

Variansen för variabel $x$ är större än variansen i variabel $y$. Detta indikerar att värdena i $x$ är mer utspridda från medelvärdet jämfört med spridningen i variabel $y$.

För att beräkna standardavvikelse för variablerna $x$ och $y$ tar vi positiva kvadratroten av variansen:

> $s_{x} = \sqrt{\frac{\sum_{i}^{n}{\left( x_{i} - \overline{x} \right)^{2}\ }}{n - 1}} = + \sqrt{\frac{10}{3}} \approx 1,826$ (11)

$s_{y} = + \sqrt{\frac{5}{3}} \approx 1,291$



::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-2"]=[  {    "id": "k2-2-2-001",    "name": "Uppgift 1",    "exercise": "Vad kallas korrigeringen som innebär att man dividerar med \\(n - 1\\) i stället för \\(n\\) när man beräknar urvalsvarians?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Standardiseringskorrigeringen",          "Bessels korrigering",          "Gauss-korrigeringen",          "Normaliseringskorrigeringen"        ],        "correct": "Bessels korrigering"      }    },    "error": { "message": "Korrigeringen är uppkallad efter en matematiker och syftar till att undvika att man underskattar populationens varians." },    "correct": { "message": "Rätt! Bessels korrigering innebär att man dividerar med \\(n - 1\\) i stället för \\(n\\), vilket ger en bättre uppskattning av populationens varians när man arbetar med urvalsdata." }  },  {    "id": "k2-2-2-002",    "name": "Uppgift 2",    "exercise": "Om en konstant \\(a\\) multipliceras med en variabel \\(x\\), vad blir variansen för \\(ax\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(a \\cdot \\text{var}(x)\\)",          "\\(a^2 \\cdot \\text{var}(x)\\)",          "\\(\\sqrt{a} \\cdot \\text{var}(x)\\)",          "\\(\\text{var}(x)\\) (konstanten påverkar inte variansen)"        ],        "correct": "\\(a^2 \\cdot \\text{var}(x)\\)"      }    },    "error": { "message": "Kom ihåg att variansen beräknas med kvadrerade avvikelser, vilket innebär att konstanten kvadreras." },    "correct": { "message": "Rätt! Eftersom variansen bygger på kvadrerade avvikelser gäller att \\(\\text{var}(ax) = a^2 \\cdot \\text{var}(x)\\). Standardavvikelsen för \\(ax\\) blir i sin tur \\(|a| \\cdot s_x\\)." }  },  {    "id": "k2-2-2-003",    "name": "Uppgift 3",    "exercise": "Variabeln \\(x\\) har fyra värden: 3, 4, 6 och 7, med medelvärde \\(\\overline{x} = 5\\). Beräkna summan av de kvadrerade avvikelserna: \\[\\sum_{i=1}^{4}(x_i - \\overline{x})^2\\]",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "10" },    "answerformat": "",    "error": { "message": "Beräkna \\((3-5)^2 + (4-5)^2 + (6-5)^2 + (7-5)^2\\) och summera." },    "correct": { "message": "Rätt! \\((3-5)^2 + (4-5)^2 + (6-5)^2 + (7-5)^2 = 4 + 1 + 1 + 4 = 10\\)." }  },  {    "id": "k2-2-2-004",    "name": "Uppgift 4",    "exercise": "Variabeln \\(y\\) har fyra värden: 3, 2, 5 och 4, med medelvärde \\(\\overline{y} = 3{,}5\\). Använd Bessels korrigering och beräkna urvalsvariansen \\[\\text{var}(y) = \\frac{\\sum_{i=1}^{4}(y_i - \\overline{y})^2}{n-1}\\] Summan av kvadrerade avvikelser för \\(y\\) är 5. Ange svaret som ett decimaltal med tre decimaler (avrunda om nödvändigt).",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.667" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 1.667",    "error": { "message": "Dividera summan av kvadrerade avvikelser (= 5) med \\(n - 1 = 3\\). Resultatet är 5/3 ≈ 1,667." },    "correct": { "message": "Rätt! Med Bessels korrigering är urvalsvariansen \\(\\text{var}(y) = 5 / (4-1) = 5/3 \\approx 1{,}667\\)." }  },  {    "id": "k2-2-2-005",    "name": "Uppgift 5",    "exercise": "Variansen för variabel \\(x\\) är \\(\\text{var}(x) = 10/3\\). Beräkna standardavvikelsen \\(s_x = \\sqrt{\\text{var}(x)}\\) och runda av till tre decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.826" },    "answerformat": "Ange svaret med punkt som decimalavskiljare, t.ex. 1.826",    "error": { "message": "Ta positiva kvadratroten av \\(10/3\\). Kontrollräkning: \\(\\sqrt{3{,}333...} \\approx 1{,}826\\)." },    "correct": { "message": "Rätt! Standardavvikelsen är \\(s_x = \\sqrt{10/3} \\approx 1{,}826\\). Standardavvikelsen är alltid den positiva kvadratroten av variansen och har samma enhet som den ursprungliga variabeln." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-2"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Samvariation 1**](k2-2-3.html)
:::

