# Hur höga skatter vill vi ha? {#k1-4-3 -}


### Begrepp

- **Skattekvot, skattenivå, skattetryck:** Totala mängden skatteintäkter dividerat med BNP. Olika begrepp brukar användas för att beskriva samma fenomen.

- **Lafferkurvan:** En kurva som beskriver tänkbara teoretiska samband mellan totala skattenivån i samhället och skatteintäkterna. Grundläggande teorier beskriver ofta kurvan som att högre skatter ökar skatteintäkterna, men ju högre skatter, desto mindre vill folk arbeta - vilket påverkar skatteintäkterna negativt.

### Teori

En stor mängd samhällsvetenskap handlar om skatter och hur de påverkar människors liv. Ett känt exempel är den så kallade [*Lafferkurvan*](https://en.wikipedia.org/wiki/Laffer_curve), uppkallad efter den amerikanske nationalekonomen [Arthur Laffer](https://en.wikipedia.org/wiki/Arthur_Laffer). Liknande teorier inom samhällsvetenskap kan spåras tillbaka till åtminstone 1400-talet.

### Ett påhittat land

Vi börjar med att tänka oss att vi har ett samhälle utan skatter. Matematiken i detta avsnitt är lånad och inspirerad av \[[lundberg2017thelaffer](#LyXCite-lundberg2017thelaffer)\]

Folk arbetar och producerar varor och tjänster som köps och säljs. Totala inkomsterna i samhället kallar vi för *y*, vars värde ej är avgörande för exemplet.

Nu vill regeringen införa en skatt som ska sättas som en procentsats på alla inkomster och kallas för *t*. Skatten *t* kan vara ett värde mellan 0 och 1, mellan 0 och 100 %. Statens totala skatteintäkter, *i*, kan då beräknas till:

$i = ty$ (1)

Om alla inkomster i samhället summerar till 1 000 kr och skatten är 5 % blir statens skatteintäkter i = $ty = 1000\*0,05 = 50\ kr$. De inkomster som beskattas, *y*, kallas även för *skattebasen.*

Skatten påverkar människors vilja att arbeta och betala skatt. Ju högre skatten blir, desto mindre vill människor arbeta, vilket i sin tur drar ned statens skatteintäkter. Denna mekanism vill vi ta hänsyn till i vår ekvation över skatteintäkterna. Vi skriver därför om ekvation 1 så att vi i stället får följande uttryck:

$i = ty(1 - t)^{b}$ (2)

Bokstaven *b* anger hur människorna i samhället reagerar på en skattehöjning, vilket även kallas för *skattebaselasticitet*. Om *b* är 0 arbetar människor exakt lika mycket oavsett hur hög skatten är. Ett högre positivt värde på b innebär att skattehöjningar har en större negativ effekt på människors arbetslust. Ett negativt värde $b \< 0$ innebär att människor arbetar mer vid högre skatt.

### Lafferkurvan

Ekvation 2 är ett exempel på Lafferkurvan. Från denna ekvation kan vi se att om skatten sätts till 100 % blir t = 1 och i så fall blir skatteintäkterna $i = 0$. Så om staten vill maximera sina skatteintäkter måste skatten sättas någonstans mellan 0 och 100 %. För att hitta den skattenivå som ger mesta möjliga skatteintäkter kan vi ställa upp detta som ett maximeringsproblem där vi ska beräkna maximum av skatteintäkterna i med hänsyn till skattenivån *t*:

$\max_{m.h.t.\ \ t}{i = ty(1 - t)^{b}}$ (3)

För att lösa maximeringsproblemet tar vi derivatan av *i* med hänsyn till *t*:

$i_{t}\' = y(1 - t)^{b} - by(1 - t)^{b - 1}t$ (4)

där vi använder kedjeregeln för derivata. Vi sätter sedan förstaderivatan lika med 0 och löser ut t med hjälp av logaritmering:

$y(1 - t)^{b} - by(1 - t)^{b - 1}t = 0$ (5)

$\ln y + b\ln(1 - t) - \ln b - \ln y - \ln t - (b - 1)\ln(1 - t) = 0$

${Ln}(1 - t) - \ln t - \ln b = 0$

${Ln}\left( \frac{1 - t}{t} \right) = \ln b$

$\frac{1}{t} - 1 = b$

$t^{\*} = \frac{1}{1 + b}$

Definitionen av $t^{\*}$ i sista raden ger oss ett uttryck för mesta möjliga skatteintäkt, alltså det värde för *t* som maximerar variabeln *i*. Mesta möjliga skatteintäkter beror på skattebaselasticiteten *b*.

### Två olika samhällen

Regeringen i vårt påhittade samhälle vill införa skatt men är osäkra på värdet på *b*. För att få mer klarhet jämför de med två andra länder. Figur 1 beskriver Lafferkurvorna för dessa två samhällen som representerar två olika samhällstyper. I figuren går båda linjerna mot 0 skatteintäkter då skattenivån närmar sig 100 %, där vi tänker oss att ingen vill betala skatt.

I det första landet fungerar offentlig sektor ineffektivt. Människor har lågt förtroende för det politiska systemet och de skatter som staten tar ut används inte till något som människor har glädje av. Skatterna är utformade på ett krångligt och ineffektivt sätt. Skattebaselasticiteten är i detta fall $b = 3$. Mesta möjliga skatteintäkter uppnås i detta fall vid en skattenivå på:

$t(b = 3) = \frac{1}{1 + 3} = 0,25$ (6)

Detta betyder att om staten vill maximera skatteuttaget måste den sätta skatten på 25 %. Alla andra skattenivåer resulterar i mindre totala skatteintäkter.

I diagrammet illustreras detta med den heldragna linjen vid "Ineffektivt system". Kurvans högsta punkt är vid $t = 0,25$. Detta innebär att redan vid en relativt låg skattenivå medför ytterligare höjningar av skatten att de totala skatteintäkterna kommer att minska.

**Figur 1. Två Lafferkurvor**

![En bild som visar text, diagram, Graf, linje Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%201%20-%20Matematik%20för%20samhällsvetare\4%20-%20Hur%20få%20ut%20det%20mesta%20av%20livet\4-3%20Hur%20höga%20skatter%20vill%20vi%20ha/img/k1-4-3-image1.png){style="width:4.46269in;height:3.34702in"}

Förklaring: De två kurvorna i diagrammet illustrerar två teoretiska samhällsekonomier som fungerar olika. I det ena samhället fungerar samhället på ett sådant sätt att den maximala skattenivån är 66,6 %. I den andra ekonomin är den optimala skattenivån 25 %. Trots att skattenivån är lägre i den andra samhällsekonomin är totala skatteintäkterna mindre på grund av olika ineffektiviteter.

I det andra samhället fungerar offentlig sektor relativt väl. Invånarna får för sina skattepengar tillbaka en stor mängd tjänster av god kvalitet och har högt förtroende för det politiska systemet. Skattesystemet är därtill effektivt utformat och enkelt att följa för den som vill. Skattebaselasticiteten är i detta fall $b = 0,5$ och mesta möjliga skatteintäkter nås vid skattenivån:

$t(b = 0,5) = \frac{1}{1 + 0,5} = \frac{2}{3}$ (7)

Uttryckt som procent motsvarar det cirka 66,6 %. I diagrammet beskrivs detta samhälle med den streckade linjen, markerad med "Effektivt system". Denna linjes högsta punkt är vid $t = 0,666$. Efter denna nivå kommer en ytterligare skattehöjning medföra att skatteintäkterna börjar minska.

*Matematiken i detta avsnitt är lånad och inspirerad av [Lundberg 2017](https://www.lisdatacenter.org/wps/liswps/711.pdf). Tack till Jacob Lundberg som kommenterade ett tidigare utkast på denna text. Återstående misstag är tyvärr mina egna.*

### Uppgifter


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k1-4-3"]=[  {    "id": "k1-4-3-001",    "name": "Uppgift 1",    "exercise": "Statens skatteintäkter ges av \\(i = ty(1-t)^b\\), där \\(i\\) är skatteintäkterna, \\(t\\) är skattesatsen, \\(y\\) är skattebasens storlek och \\(b\\) är skattebaselasticiteten. Vad händer med skatteintäkterna om skatten sätts till \\(t = 1\\) (100 %)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Skatteintäkterna maximeras",          "Skatteintäkterna blir lika med \\(y\\)",          "Skatteintäkterna blir noll",          "Skatteintäkterna beror enbart på \\(b\\)"        ],        "correct": "Skatteintäkterna blir noll"      }    },    "error": { "message": "Sätt in \\(t = 1\\) i \\(i = ty(1-t)^b\\): vad blir faktorn \\((1 - 1)^b\\)?" },    "correct": { "message": "Rätt! Om \\(t = 1\\) blir \\((1-t)^b = 0^b = 0\\), och därmed \\(i = 0\\). Vid 100 % skatt vill ingen arbeta och skatteintäkterna kollapsar till noll." }  },  {    "id": "k1-4-3-002",    "name": "Uppgift 2",    "exercise": "I skatteintäktsfunktionen \\(i = ty(1-t)^b\\) (där \\(b\\) är skattebaselasticiteten) ges den intäktsmaximerande skattenivån av \\(t^* = \\frac{1}{1+b}\\). Om \\(b = 3\\), vid vilken skattenivå (i procent) maximeras statens skatteintäkter?",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "25" },    "answerformat": "",    "error": { "message": "Sätt in \\(b = 3\\) i formeln: \\(t^* = \\frac{1}{1+3}\\). Beräkna bråket och omvandla till procent." },    "correct": { "message": "Rätt! \\(t^* = \\frac{1}{1+3} = \\frac{1}{4} = 0{,}25\\), alltså 25 %. Det är det ineffektiva samhällets optimala skattenivå." }  },  {    "id": "k1-4-3-003",    "name": "Uppgift 3",    "exercise": "I skatteintäktsfunktionen \\(i = ty(1-t)^b\\) ges den intäktsmaximerande skattenivån av \\(t^* = \\frac{1}{1+b}\\). Om skattebaselasticiteten är \\(b = 0{,}5\\), beräkna \\(t^*\\) (i procent, avrundat till en decimal).",    "image": null,    "inputtype": "field",    "expectedanswer": { "q": "66.7" },    "answerformat": "",    "error": { "message": "Sätt in \\(b = 0{,}5\\): \\(t^* = \\frac{1}{1+0{,}5} = \\frac{1}{1{,}5} = \\frac{2}{3}\\). Omvandla till procent." },    "correct": { "message": "Rätt! \\(t^* = \\frac{1}{1{,}5} = \\frac{2}{3} \\approx 66{,}7\\%\\). I ett effektivt skattesystem med högt förtroende kan staten ta ut en högre skatt och ändå maximera sina intäkter." }  },  {    "id": "k1-4-3-004",    "name": "Uppgift 4",    "exercise": "I skatteintäktsfunktionen \\(i = ty(1-t)^b\\), där \\(i\\) är skatteintäkterna, \\(t\\) skattesatsen och \\(y\\) skattebasens storlek: vad menas med parametern <em>skattebaselasticitet</em> (\\(b\\))?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det totala skatteuttaget i procent av BNP",          "Hur känsligt skatteunderlaget (skattebasen) är för förändringar i skattenivån",          "Statens totala skatteintäkter",          "Antalet skattebetalare i samhället"        ],        "correct": "Hur känsligt skatteunderlaget (skattebasen) är för förändringar i skattenivån"      }    },    "error": { "message": "Elasticitet beskriver allmänt hur en variabel reagerar på förändringar i en annan. Vad beskriver \\(b\\) i uttrycket \\(i = ty(1-t)^b\\)?" },    "correct": { "message": "Rätt! Skattebaselasticiteten \\(b\\) anger hur mycket skattebasen (och därmed folks vilja att arbeta) påverkas av en skattehöjning. Högt \\(b\\) innebär att folk kraftigt minskar sin arbetslust vid höjda skatter." }  },  {    "id": "k1-4-3-005",    "name": "Uppgift 5",    "exercise": "Vilket av följande stämmer om Lafferkurvan?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Skatteintäkterna ökar alltid när skatten höjs",          "Skatteintäkterna är noll vid både 0 % och 100 % skatt",          "Lafferkurvan gäller bara för land med hög BNP",          "Den optimala skattenivån är alltid 50 %"        ],        "correct": "Skatteintäkterna är noll vid både 0 % och 100 % skatt"      }    },    "error": { "message": "Tänk på vad som händer med \\(i = ty(1-t)^b\\) när \\(t = 0\\) respektive \\(t = 1\\)." },    "correct": { "message": "Rätt! Vid \\(t = 0\\) finns inga skatter och \\(i = 0\\). Vid \\(t = 1\\) vill ingen arbeta och \\(i = 0\\). Däremellan finns en toppunkt som beror på \\(b\\) – den optimala skattenivån \\(t^* = \\frac{1}{1+b}\\)." }  }];</script>
<div class="exercise-section" data-section-id="k1-4-3"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Vinstmaximerande företag**](sec-k1-4-4.html)
:::

