# Hur hitta den rätta? {#k1-3-2}

### Begrepp
*Inga nya matematiska begrepp i detta avsnitt.*
### Teori
Matematiken kan hjälpa oss att diskutera verkligheten även när vi är intresserade av fenomen som kan vara svåra eller omöjliga att sätta siffror på. Vi ska nu gå igenom ett exempel där vi vill resonera kring hur kul eller tråkigt något är. Vi börjar med att beskriva detta exempel med siffror, vilket möjligen kan vara enklare att förstå.
Därefter ska vi gå igenom hur vi kan arbeta med samma typ av teori utan siffror, vilket många gånger är minst lika användbart och ibland bättre. Poängen med detta är att illustrera hur matematiken kan hjälpa oss resonera, även om vi inte kan räkna ut exakta svar.
#### Två strategier för dejting
Kim vill gifta sig snarast möjligast och överväger olika strategiska alternativ för att träffa den rätta. Kim tänker inte hoppa mellan strategier och giftermålet måste ske i år. Det handlar således om att välja en strategi och hålla sig till den.
Kim uppskattar idag sin lycka till nivå 80 på en skala från 0 till 100, och hoppas kunna öka sin lycka till 100 genom att träffa en partner. Kim gillar dock inte att dejta och varje dejt drar ned Kims lycka lite.
**Kims strategi 1:** Använda en gratis dejtingapp. Bara att installera appen och börja gå igenom profilerna sänker Kims lycka med 50 procentenheter. För varje dejt Kim måste gå på sjunker Kims lycka med ytterligare två procentenheter. Låt oss beskriva detta i en ekvation:
$\text{lycka}_{1} = 80 - 2*\text{dejt}_{1} - 50$ (1)
där $\text{lycka}_{1}$ syftar på lycka som uppnås med dejtingstrategi 1. Ekvation 1 kan förenklas till: $\text{lycka}_{1} = 30 - 2*\text{dejt}_{1}$.
**Kims strategi 2:** Kims bästa vän har valt ut fyra kandidater som är redo för giftermål. Eftersom den sociala insatsen nu är lite högre sänker varje dejt Kims lycka med 22 procentenheter:
$\text{lycka}_{2} = 80 - 22*\text{dejt}_{2}$ (2)
Detta ger oss ett linjärt ekvationssystem med två ekvationer:
$\left\{ \begin{array}{r} \text{lycka}_{1} = 30 - 2*\text{dejt}_{1} \\ \text{lycka}_{2} = 80 - 22*\text{dejt}_{2} \end{array} \right.\ $ (3)
Nu undrar vi vid vilket antal dejter som de två strategierna kan betraktas som likvärdiga, samt vilken nivå av (o)lycka detta skulle medföra. Vi sätter de två ekvationerna lika med varandra:
$\text{lycka}_{1} = \text{lycka}_{2}$ (4)$ $

$$30 - 2*\text{dejt}_{1} = 80 - 22*\text{dejt}_{2}$$

Vi döper om variablerna $\text{dejt}_{1} = \text{dejt}_{2} = \text{dejt}$ och löser ut antal dejter:
$30 - 2*\text{dejt} = 80 - 22*\text{dejt}$ (5)$ $

$${22*\text{dejt} - 2*\text{dejt} = 80 - 30 }{20*\text{dejt} = 50 }{\text{dejt} = \frac{50}{20} }{\text{dejt}^{*} = 2,5}$$

Vid 2,5 dejter är de två strategierna likvärdiga. Vi prövar genom insättning i ekvationerna:
$\text{lycka}_{1}^{*} = 30 - 2*2,5 = 25$ (6)$ $

$$\text{lycka}_{2}^{*} = 80 - 22*2,5 = 25$$

Lösningen för systemet är $\text{dejt}^{*} = 2,5$ och $\text{lycka}^{*} = 25$. Figur 1 illustrerar de två strategierna som raka linjer med jämvikten som den punkt där de två linjerna möts. Vid denna punkt leder de två strategierna till samma nivå av lycka.
Nu är frågan om Kim tror sig kunna hitta den rätta på fler eller färre dejter än så. Om Kim tror det krävs färre dejter med kompisars kompisar är den strategin minst olycksframkallande. Om Kim tror det krävs fler är den andra strategin minst olycksframkallande.
**Figur 1. Två dejtingstrategier i ett diagram**
![](img/k1-3-2-image1.png){style="width:4in;height:3in"}
::: {.fig-caption}
Förklaring: Den gröna linjen beskriver dejtingstrategi 1, med dejtingappen. Den rosa linjen beskriver dejtingstrategi 2, träffa kompisens kompisar. Vid 2,5 dejter möts de två linjerna, varpå Kims lycka är nere på 25.
:::

#### Samma exempel utan siffror
Att mäta lycka på en skala från 0 till 100 är lite klumpigt. Genom att ställa upp ekvationer kan vi diskutera vilka villkor som måste vara uppfyllda för att en teori eller ett samband ska gälla.
För att illustrera denna poäng ska vi nu göra om föregående övning men endast använda bokstäver i ekvationssystemet i stället för siffror. Ekvationssystemet kan nu skrivas så här:
$\left\{ \begin{array}{r} \text{lycka} = m - ad_{1} - b \\ \text{lycka} = m - cd_{2} \end{array} \right.\ $ (7)
Bokstaven *m* är nuvarande nivå av lycka, de två typerna av dejter symboliseras av $d_{1}$ (appen) och $d_{2}$ (kompisens kompis), *a* och *c* är lutningskoefficienterna (kostnaden) för att gå på olika typer av dejter och *b* är den känslomässiga kostnaden för att starta dejtingappen. Lösningen kan nu formuleras:
$d^{*} = \frac{b}{c - a}$ (8)$ $

$$\text{lycka}^{*} = \frac{mc - ma - cb}{c - a} = \frac{m(c - a) - cb}{c - a}$$

Detta låter oss beskriva hur de olika variablerna hänger ihop och vad som krävs för att $d^{*}$ ska anta ett positivt värde. Givet att $b \> 0$ måste $c \> a$.
Det vill säga, för att strategierna ska kunna betraktas som likvärdiga vid någon mängd dejter överhuvudtaget, så krävs, givet att appen minskar lyckan (konstant *b*), att lyckominskningen för att gå på dejt med kompisens kompis (*c*) måste vara större än lyckominskningen per dejt via appen (*a*).
Hela exemplet i detta avsnitt är så klart kraftigt förenklat. Med mer invecklad matematik kan vi även föra mer invecklade resonemang. Men det kanske ändå fångar en typ av avvägning som vi alla ställs för då och då i livet. Det vill säga, de situationer då vi känner att vi behöver välja mellan två tråkiga alternativ och mest vill veta vilket som är minst tråkigt.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-3-2"]=[  {    "id": "k1-3-2-001",    "name": "Uppgift 1",    "exercise": "Kims dejtingstrategi 1 (appen) ges av \\(\\text{lycka}_1 = 30 - 2 \\cdot \\text{dejt}\\) och strategi 2 (kompisens kompis) ges av \\(\\text{lycka}_2 = 80 - 22 \\cdot \\text{dejt}\\). Vid hur många dejter är strategierna likvärdiga?",    "image": null,    "inputtype": "field",    "expectedanswer": { "dejt": "2.5" },    "answerformat": "Ange svaret med decimalpunkt, t.ex. 2.5",    "error": { "message": "Sätt \\(30 - 2d = 80 - 22d\\) och lös för \\(d\\). Samla \\(d\\)-termerna på ena sidan." },    "correct": { "message": "Rätt! \\(30 - 2d = 80 - 22d \\Rightarrow 20d = 50 \\Rightarrow d^* = 2{,}5\\) dejter. Vid 2,5 dejter är de två strategierna likvärdiga." }  },  {    "id": "k1-3-2-002",    "name": "Uppgift 2",    "exercise": "Vid \\(d^* = 2{,}5\\) dejter är de två strategierna likvärdiga. Vilken lyckonivå ger strategi 1 vid detta antal dejter? Använd \\(\\text{lycka}_1 = 30 - 2 \\cdot \\text{dejt}\\).",    "image": null,    "inputtype": "field",    "expectedanswer": { "lycka": "25" },    "answerformat": "",    "error": { "message": "Sätt in \\(\\text{dejt} = 2{,}5\\) i \\(30 - 2 \\cdot 2{,}5\\)." },    "correct": { "message": "Rätt! \\(30 - 2 \\cdot 2{,}5 = 30 - 5 = 25\\). Samma lyckonivå fås med strategi 2: \\(80 - 22 \\cdot 2{,}5 = 25\\)." }  },  {    "id": "k1-3-2-003",    "name": "Uppgift 3",    "exercise": "I det allmänna exemplet utan siffror skrivs ekvationssystemet \\[\\left\\{ \\begin{array}{r} \\text{lycka}_1 = m - ad_1 - b \\\\ \\text{lycka}_2 = m - cd_2 \\end{array} \\right.\\] Vad representerar bokstaven <em>b</em> i modellen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Kostnaden per dejt via appen",          "Den känslomässiga kostnaden för att starta dejtingappen",          "Kims nuvarande lyckonivå",          "Antalet kandidater som kompisens kompis valt ut"        ],        "correct": "Den känslomässiga kostnaden för att starta dejtingappen"      }    },    "error": { "message": "Bokstaven \\(b\\) är en konstant i strategi 1 – vad händer bara av att man installerar appen?" },    "correct": { "message": "Rätt! Bokstaven \\(b\\) representerar den fasta, känslomässiga kostnaden för att starta dejtingappen, oavsett hur många dejter Kim går på." }  },  {    "id": "k1-3-2-004",    "name": "Uppgift 4",    "exercise": "I den generella lösningen för dejtingexemplet gäller att \\(d^* = \\frac{b}{c - a}\\). Vilket villkor måste vara uppfyllt för att \\(d^*\\) ska vara positivt (givet att \\(b > 0\\))?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(c < a\\)",          "\\(c = a\\)",          "\\(c > a\\)",          "\\(b > c + a\\)"        ],        "correct": "\\(c > a\\)"      }    },    "error": { "message": "För att ett bråk \\(b/(c-a)\\) ska vara positivt när \\(b > 0\\), vad måste gälla för nämnaren \\(c - a\\)?" },    "correct": { "message": "Rätt! Om \\(b > 0\\) måste nämnaren \\(c - a > 0\\), det vill säga \\(c > a\\). Det innebär att kostnaden per dejt via kompisens kompis måste vara större än kostnaden per dejt via appen." }  },  {    "id": "k1-3-2-005",    "name": "Uppgift 5",    "exercise": "Vad är fördelen med att formulera en teori med bokstäver (parametrar) i stället för konkreta siffror?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är alltid lättare att förstå bokstäver än siffror",          "Man kan resonera om vilka villkor som måste gälla utan att behöva känna till exakta värden",          "Bokstavsmodeller ger alltid mer exakta svar",          "Det är ett krav i all samhällsvetenskaplig forskning"        ],        "correct": "Man kan resonera om vilka villkor som måste gälla utan att behöva känna till exakta värden"      }    },    "error": { "message": "Tänk på vad som uppnås när man byter ut specifika tal mot bokstäver som a, b, c – vad tillför de generella parametrarna?" },    "correct": { "message": "Rätt! Med bokstäver kan vi diskutera vilka villkor som måste vara uppfyllda för att ett samband ska gälla, utan att vara bundna till specifika tal. Det ger en mer generell och flexibel analys." }  }];</script>
<div class="exercise-section" data-section-id="k1-3-2"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **En teori om arbete**](k1-3-3.html)
:::

