# Statistisk analys 2 {#k2-5-4}

### Begrepp
- **Konfidensintervall:** Ett intervall mellan två värden inom vilka vi kan förvänta oss en specificerad andel av upprepade stickprov kommer innehålla populationsvärdet vi söker. Beräknas $\overline{x} \pm z{*s}_{X}n^{\frac{1}{2}}$, där $\overline{x}$ är medelvärde, $z$ är ett valt värde från standardnormalfördelningen, $s$ är estimerad standardavvikelse och $n$ är antal urvalsobservationer.
- **Nollhypotes och alternativhypotes:** $H_{0}$ respektive $H_{1}$. Formuleras rörande förhållanden i populationen för statistiska test. I regel formuleras $H_{0}$ som ett nollsamband/icke-korrelation. Därefter beräknas sannolikheten att $H_{0}$ är falsk. Om inte det statistiska testet ger oss tillräckligt starka skäl att förkasta $H_{0}$ godtar vi denna.
- **Signifikansnivå:** sannolikheten att vi förkastar $H_{0}$ när $H_{0}$ är sann. Kallas $\alpha$, alfavärde.
- **Konfidensnivå:** sannolikheten att vi inte förkastar $H_{0}$ när den är sann.
- **P-värde:** Sannolikheten att $H_{0}$ är sann.

### Teori
Vi fortsätter att introducera statistisk analys, först genom att beskriva hur vi kan uppskatta ett intervall av mer eller mindre sannolika utfall.

#### Konfidensintervall
I föregående [avsnitt 5.3](https://www.dropbox.com/scl/fi/12fiw2s4633qjt0d1s0zw/5-3-Statitsisk-analys-1.docx?rlkey=b4urprsp85hxcdp6jm3z9vaw7&dl=0) introducerade vi punktestimat. Ett annat sätt att studera en population är att *estimera intervall,* vilket även kallas för *intervallskattning* eller *intervallestimat.*

Ett särskilt intervall som ofta används i statistisk analys är *konfidensintervall*, vilket är ett intervall mellan två värden inom vilket en specificerad andel av upprepade stickprov kommer att innehålla populationsvärdet vi söker.

Vi bestämmer själva för vilken andel av urvalen vi vill estimera konfidensintervallet, till exempel 90 eller 95 %, där procentsatserna alltså anger för hur stor andel av urvalen som intervallet kommer att inkludera populationsvärdet. Procentsatserna kallas för *konfidensgrad*.

Vi är intresserade av populationens (okända) medelvärde $\mu_{X}$. I stället för ett punktestimat, som ett medelvärde, vill vi nu i stället skatta ett konfidensintervall. Vår estimering beror på vilken fördelning populationen har. Vi utgår här från en variabel $X$ som följer en normalfördelning där populationen har medelvärdet $\mu_{X}$ och varians $\sigma_{X}$. Konfidensintervallet kan då definieras som:

Konfidensintervall = $\overline{x} \pm z\frac{\sigma_{X}}{n^{\frac{1}{2}}}$ (1)
där $\overline{x}$ är estimerat medelvärde i en samling urvalsobservationer, n är antal observationer i urvalet och $\sigma_{X}$ är standardavvikelse i populationen.
Bokstaven $z$ representerar ett värde som vi hämtar från [standardnormalfördelningen](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0) beroende på vilken konfidensgrad vi väljer. Konfidensintervallet resulterar i ett värde under medelvärdet $\bar{x}$ och ett värde över, vilket vi kan se eftersom vi har symbolen $\pm$ efter medelvärdet. De två värdena vi beräknar kallas för konfidensintervallets nedre och övre gräns.

Eftersom populationens standardavvikelse $\sigma$ i regel är okänd kan det estimerade konfidensintervallet skrivas:

Estimerat konfidensintervall =$\ \ \bar{x} \pm z\frac{s_{x}}{n^{\frac{1}{2}}}$ (2)
där $s$ representerar estimerad standardavvikelse.

#### Exempel
Om vi väljer konfidensgrad $90\ \%$ vill vi exkludera $10\%$ av populationens värden: $5\%$ i fördelningens övre svans (över medelvärdet) och $5\%$ i fördelningens nedre svans (under medelvärdet). Detta ger oss $z \approx 1,64$5.

Om vi vill estimera ett $95\ \%$ konfidensintervall har vi $z \approx 1,96$. För konfidensgrad $99\ \%$ har vi $z \approx 2,58$. Se figur 2 i [avsnitt 5.2](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0). Det z-värde vi ska använda sätter vi in i ekvation 2.

Säg som exempel nu att vi har ett dataurval på $n = 28$ observationer och estimerar medelvärdet $\bar{x} = 13$ samt standardavvikelse $s_{x} = 3,7$. Vi väljer konfidensgrad $90\%$, varför $z = 1,645$. Detta ger följande gränser för konfidensintervallet:


$$\begin{matrix} & \bar{x} + z\frac{s_{x}}{n^{\frac{1}{2}}} = 13 + 1,645*\frac{3,7}{\sqrt{28}} \approx 14,15 \\ & \bar{x} - z\frac{s_{x}}{n^{\frac{1}{2}}} = 13 - 1,645*\frac{3,7}{\sqrt{28}} \approx 11,85 \end{matrix} \tag{3}$$

Vårt konfidensintervall är $11,85 \< \mu_{X} \< 14,15$. Detta är ett 90% konfidensintervall, vilket betyder att om vi upprepade denna procedur många gånger, skulle 90% av intervallen innehålla populationens medelvärde. Detta betyder inte att det finns 90% sannolikhet att $\mu_{X}$ ligger i vårt specifika intervall (en vanlig missuppfattning).

#### Exempel med kvinnor och mäns medellivslängd
I föregående [avsnitt 5.1](https://www.dropbox.com/scl/fi/12fiw2s4633qjt0d1s0zw/5-3-Statitsisk-analys-1.docx?rlkey=b4urprsp85hxcdp6jm3z9vaw7&dl=0) beräknade vi sannolikheten att två estimerade medelvärden kom från samma population, genom att räkna på differensen mellan genomsnittlig livslängd för män respektive kvinnor.

Konfidensintervallet för differensen mellan de estimerade medelvärdena för dessa två populationer kan vi estimera med följande ekvation:


$$\left( {\bar{X}}_{1} - {\bar{X}}_{2} \right) \pm z*\sqrt{\frac{s_{X_{1}}^{2}}{n_{1}} + \frac{s_{X_{2}}^{2}}{n_{2}}} \tag{4}$$

där ${\overline{X}}_{1}$ och ${\bar{X}}_{2}$ är de två estimerade medelvärdena för män och kvinnor, $z$ är värdet från standardiserade normalfördelningens kumulativa fördelningsfunktion $F$, $s^{2}$ är estimerad varians (standardavvikelse i kvadrat) och $n$ är antal observationer i respektive urval. Vi får nu:
${\overline{X}}_{män} = 80,38$ ${\overline{X}}_{kvinnor} = 83,95$ (5)

$s_{män}^{2} = 1,663$ $s_{kvinnor}^{2} = 1,032$

$n_{män} = 290$ $n_{kvinnor} = 290$

Vi väljer konfidensgrad $95\ \%$, vilket ger $z = 1,96$. Konfidensintervallets nedre och övre gräns blir:


$$\begin{matrix} \text{Konfidensintervallets nedre gräns:} & \ (80,38 - 83,95) + 1,96\sqrt{\frac{1,032}{290} + \frac{1,663}{290}} \approx 3,76 \\ \text{Konfidensintervallets }\text{övre }\text{gräns:} & \ (80,38 - 83,95) - 1,96\sqrt{\frac{1,032}{290} + \frac{1,663}{290}} \approx 3,38 \end{matrix} \tag{6}$$

Estimatet indikerar att vid upprepade urval (stickprov) från samma population kommer differensen mellan de två populationerna i $95\ \%$ av fallen vara $3,38 \< \left( \mu_{\text{kvinnor}\ } - \mu_{\text{män}\ } \right) \< 3,76$. Detta indikerar alltså att kvinnor i genomsnitt lever mellan 3,38 och 3,76 år längre än män.

Detta gäller endast om de upprepade urvalen verkligen kommer från samma population. Om vi till exempel upprepade gånger under en tioårsperiod mäter medellivslängden för män och kvinnor så kommer befolkningen (populationen) och deras livslängd också att förändras.

#### Hypotesprövning
När vi studerar mönster i data och samvariation kan vi göra detta genom att pröva *hypoteser* med *statistiska test*. En vetenskaplig hypotes måste vara *falsifierbar*, vilket betyder att den måste kunna motbevisas med fakta.

Vi formulerar en hypotes och använder ett statistiskt test för att pröva sannolikheten att hypotesen är falsk. Sannolikheten att en hypotes är falsk kan inte vara under 0 eller över 100 %.

Statistiska test använder en *nollhypotes* och en *alternativhypotes*. Nollhypotes betecknas ofta $H_{0}$ och alternativhypotesen $H_{1}$. De två hypoteserna formuleras på ett sådant sätt att de är exklusiva. Båda hypoteserna kan inte per definition vara sanna (eller falska) samtidigt.

Vi formulerar våra hypoteser utifrån den samvariation vi ska studera. Nollhypotesen formuleras i regel som att det inte finns någon samvariation, ett icke-samband. Nollhypotesen beskriver den situation vi måste acceptera tills vi har visat goda skäl att tro något annat.

Säg till exempel att vi utför ett experiment och studerar hur en medicin samvarierar med sjukdomssymptom hos en grupp patienter, fördelade på behandlingsgrupp (får medicin) och kontrollgrupp (får inte medicin).

Vår teori är att medicinen kommer att minska patienternas sjukdomstillstånd. Om vi efter behandlingen kan se att sjukdomstillstånden i behandlingsgruppen är mindre än sjukdomstillstånden i kontrollgruppen tolkar vi detta som en effekt av medicinen.

När vi ska översätta detta till en nollhypotes och en alternativhypotes formulerar vi nollhypotesen som en ickerelation mellan orsak och verkan. Om medicinen inte har någon effekt på sjukdomen kommer behandlingsgruppen vara lika sjuk som kontrollgruppen:

$H_{0}$: $\text{sjukdom}_{\text{behandling}} \geq \text{sjukdom}_{\text{kontroll}}$ (7)

Alternativhypotesen $H_{1}$ blir i detta fall den alternativa situationen där sjukdomstillståndet är mindre i behandlingsgruppen än i kontrollgruppen (vilket enligt vår teori beror på medicinen):


$$H_{1}:\text{sjukdom}_{\text{behandling}} \< \text{sjukdom}_{\text{kontroll}} \tag{8}$$

Vi är intresserade av ett orsakssamband, vilket vi studerar genom att observera samvariation mellan medicin och symptom. Orsakssambandet är en tolkning vi lägger till utifrån den samvariation vi kan observera. Hypoteserna formuleras inte rörande orsakssambandet utan för observerbara skillnader.

Observera även att hypoteserna rör populationen vi är intresserade av -- inte urvalsdatan. I detta hypotetiska exempel kan vi tänka oss att populationen är alla patienter i hela världen med samma sjukdomssymptom.

Säg att vi finner att behandlingsgruppen har 5 % mindre sjukdom. Nästa steg är att då estimera hur säkra vi kan vara på att denna skillnad är tillräcklig för att vi ska betrakta vår nollhypotes ($H_{0}$) som falsk.

#### Hypotestest i regressionsanalys
Hypotestest användas ofta i samband med regressionsanalys. Säg att vi ska studera om variationer i ett fenomen $X$ orsakar en viss typ av variationer i fenomen $Y$, vilket vi gör med hjälp av regressionsmodellen $Y = a + bX + u$ där $Y$ och $X$ är variabler, $u$ är feltermen och $a$ och $b$ är koefficienterna som vi använder minstakvadratmetoden för att estimera.

Vi har anledning att tro att $X$ och $Y$ samvarierar och att $b \neq 0$. Utifrån detta kan vi formulera en nollhypotes i form av en ickerelation mellan variablerna. En ickerelation mellan X och Y i vår regressionsmodell innebär att $b = 0$, varför vår nollhypotes och alternativhypotes blir:


$$H_{0}:b = 0 \tag{9}$$

$H_{1}:b \neq 0$

Nollhypotesen och alternativhypotesen täcker därigenom alla möjliga alternativ: $b$ är antingen lika med 0 eller inte lika med 0.

Vi är intresserade av att estimera samvariationen mellan $X$ och $Y$ och att estimera sannolikheten att den samvariation vi finner även kunde ha uppstått genom slump.

Vi prövar våra hypoteser genom att estimera $\widehat{b}$ och därefter beräkna sannolikheten att vi skulle ha fått det resultat vi får, givet att $H_{0}$ är sann egentligen (det vill säga att vi i populationen har $b = 0$).

Sannolikheten för detta beror bland annat på vilken sannolikhetsfördelning vi jämför mot, till exempel standardnormalfördelningen, och vilken varians vi kan observera i våra data.

#### Signifikans, alfa och p-värde
I klassisk statistik brukar det beskrivas som att vi vid statistiska test bör välja i förväg med vilken sannolikhet vi vill riskera att förkasta en sann $H_{0}$. Detta kallas för att välja *signifikansnivå* eller *alfavärde* (engelska *alpha value*) och betecknas $\alpha$ (grekiska bokstaven alfa).

För $10\%$ signifikansnivå, $\alpha = 0,1 = 10\%$. Ofta används $\alpha = 0,05$. Ofta används även begreppet *konfidensnivå*, vilket beräknas genom att ta:

Konfidensnivå = $1 - \alpha$ (10)

För $\alpha = 0,05$ har vi $1 - \alpha = 1 - 0,05 = \ 0,95 = 95\ \%$. De två begreppen kan sammanfattas som:
- Signifikansnivå är sannolikheten att vi förkastar nollhypotesen när nollhypotesen är sann.
- Konfidensnivå är sannolikheten att vi [inte]{.underline} förkastar nollhypotesen när den är sann.
Sannolikheten att $H_{0}$ är sann brukar benämnas med det som kallas för $p$ värde. P-värde ger sannolikheten att vi hade fått ett lika extremt värde i ett statistiskt test givet att $H_{0}$ är falsk.

Medan signifikansnivå och konfidensnivå i regel uppges i avrundade tal, till exempel 95 %, beräknas p-värde exakt genom det statistiska testet.

Statistiskt test med kvinnor och mäns livslängd

Låt oss illustrera med ett exempel. Ovan estimerade vi sannolikheten att livslängden för män och kvinnor i Sveriges kommuner skiljer sig genom att beräkna följande z-värde:


$$z = \frac{{\bar{X}}_{\text{kvinnor}\ } - {\bar{X}}_{\text{män}\ }}{\left( \frac{s_{man}^{2}}{n_{\text{man}\ }} + \frac{s_{\text{kvinnor}\ }^{2}}{n_{\text{kvinnor}\ }} \right)^{\frac{1}{2}}} \approx \frac{83,95 - 80,38}{\left( \frac{1,663}{290} + \frac{1,032}{290} \right)^{\frac{1}{2}}} \approx 37,045 \tag{11}$$

Låt oss ställa upp detta som ett statistiskt test. Vi har en teori om att livslängd skiljer sig mellan män och kvinnor. Vi formulerar vår nollhypotes som att det inte finns någon skillnad:


$$\begin{matrix} & H_{0}:\mu_{\text{män}\ } = \mu_{\text{kvinnor}\ } \\ & H_{1}:\mu_{\text{män}\ } \neq \mu_{\text{kvinnor}\ } \end{matrix} \tag{12}$$

För att testa trovärdigheten i hypotesen bestämmer vi signifikansnivå $5\%$, det vill säga ($2,5\%$ från vardera sida av fördelningen, och beräknar $z$-värdet i ekvation 11, alltså $z = 37,045$. Detta beräknade $z$-värde jämför vi mot standardnormalfördelningen.

Statistiska test kan vara ensidiga eller tvåsidiga. Nollhypotesen är i detta fall formulerad som att både positiv och negativ differens kan innebära att vi har skäl att förkasta $H_{0}$ som falsk. När vi jämför mot standardnormalfördelningen innebär det att både negativa som positiva avvikelser från medelvärdet kan ge oss skäl att förkasta $H_{0}$. Det vill säga, vårt beräknade z-värde skulle även kunna ha varit negativt.

Om vårt beräknade z-värde är längre från standardnormalfördelningens medelvärde jämfört med 47,5 % av fördelningen så kallas detta för att resultat är *statistiskt signifikant*. Vi kan i så fall avfärda $H_{0}$ som falsk för 5 % signifikansnivå. För att veta exakt för vilket z-värde som 47,5 % av fördelningen är under brukar beräknade z-värden jämföras mot kritiska z-värden, vilket skrivs $z^{*}$.

För 5 % nivå har vi $z^{*} = 1,96$ (se figur 2 i [avsnitt 5.2](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0)). Alltså, om vårt beräknade $z$-värde är högre än detta bör vi förkasta $H_{0}$ som falsk. Som vi noterade ovan är vårt beräknade z -värde 37,045, vilket är så pass högt att det inte syns i diagrammet. Resultatet från vårt statistiska test indikerar med god marginal att $H_{0}$ är falsk.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-4"]=[  {    "id": "k2-5-4-001",    "name": "Uppgift 1",    "exercise": "Vad innebär ett 95 %-konfidensintervall korrekt tolkat?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det finns 95 % sannolikhet att populationsvärdet ligger i just det beräknade intervallet",          "Vid upprepade urval kommer 95 % av de beräknade intervallen att innehålla populationsvärdet",          "95 % av alla observationer i urvalet ligger inom intervallet",          "Populationsvärdet är exakt lika med intervallets mittpunkt i 95 % av fallen"        ],        "correct": "Vid upprepade urval kommer 95 % av de beräknade intervallen att innehålla populationsvärdet"      }    },    "error": { "message": "En vanlig missuppfattning är att det är 95 % sannolikhet att det specifika intervallet innehåller populationsvärdet. Konfidensintervall tolkas i termer av upprepade urval." },    "correct": { "message": "Rätt! Korrekt tolkning: om vi upprepade gånger drog urval och beräknade konfidensintervall på samma sätt, skulle 95 % av dessa intervall innehålla det sanna populationsvärdet. Det specifika intervallet vi beräknat antingen innehåller det sanna värdet eller inte." }  },  {    "id": "k2-5-4-002",    "name": "Uppgift 2",    "exercise": "I ett dataurval med \\(n = 28\\) observationer estimeras \\(\\overline{x} = 13\\) och \\(s_x = 3{,}7\\). För ett 90 %-konfidensintervall används \\(z = 1{,}645\\). Beräkna konfidensintervallets <em>övre gräns</em> med formeln \\[\\overline{x} + z\\frac{s_x}{\\sqrt{n}}\\] Avrunda till två decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "14.15" },    "answerformat": "Ange svaret med två decimaler, t.ex. 14.15",    "error": { "message": "Beräkna \\(1{,}645 \\times 3{,}7 / \\sqrt{28}\\) och addera till 13. \\(\\sqrt{28} \\approx 5{,}292\\)." },    "correct": { "message": "Rätt! \\(13 + 1{,}645 \\times \\frac{3{,}7}{\\sqrt{28}} \\approx 13 + 1{,}645 \\times 0{,}699 \\approx 13 + 1{,}15 \\approx 14{,}15\\). Det 90%-konfidensintervallet är alltså \\(11{,}85 < \\mu_X < 14{,}15\\)." }  },  {    "id": "k2-5-4-003",    "name": "Uppgift 3",    "exercise": "Vad är sambandet mellan signifikansnivå \\(\\alpha\\) och konfidensnivå?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Konfidensnivå = \\(\\alpha\\)",          "Konfidensnivå = \\(1 - \\alpha\\)",          "Konfidensnivå = \\(\\alpha / 2\\)",          "Konfidensnivå = \\(1 + \\alpha\\)"        ],        "correct": "Konfidensnivå = \\(1 - \\alpha\\)"      }    },    "error": { "message": "Om signifikansnivån är sannolikheten att förkasta en sann \\(H_0\\), vad är då konfidensnivån?" },    "correct": { "message": "Rätt! Konfidensnivå = \\(1 - \\alpha\\). Exempel: för \\(\\alpha = 0{,}05\\) är konfidensnivån \\(1 - 0{,}05 = 0{,}95 = 95\\)%. Signifikansnivån är risken att göra fel, konfidensnivån är sannolikheten att inte göra fel." }  },  {    "id": "k2-5-4-004",    "name": "Uppgift 4",    "exercise": "I hypotesprövning för regressionsanalys med modellen \\(Y = a + bX + u\\) — vad är den vanligaste nollhypotesen för lutningskoefficienten \\(b\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(H_0: b = 1\\) (enhetlig effekt)",          "\\(H_0: b > 0\\) (positiv effekt)",          "\\(H_0: b = 0\\) (ingen samvariation)",          "\\(H_0: b < 0\\) (negativ effekt)"        ],        "correct": "\\(H_0: b = 0\\) (ingen samvariation)"      }    },    "error": { "message": "Nollhypotesen formuleras vanligtvis som ett icke-samband. Vad innebär det om lutningskoefficienten i en linjär regressionsmodell är noll?" },    "correct": { "message": "Rätt! \\(H_0: b = 0\\) och \\(H_1: b \\neq 0\\) — dvs. standardinställningen i de flesta statistikprogram. Om \\(b = 0\\) i populationen finns ingen linjär samvariation mellan \\(X\\) och \\(Y\\). Nollhypotesen formuleras som icke-samband, och vi testar om vi har tillräckliga skäl att förkasta den." }  },  {    "id": "k2-5-4-005",    "name": "Uppgift 5",    "exercise": "Vi beräknar z-värdet för skillnaden i medellivslängd mellan männen och kvinnor i Sveriges kommuner och får \\(z \\approx 37{,}045\\). Vid ett tvåsidigt test med signifikansnivå 5 % är det kritiska z-värdet \\(z^* = 1{,}96\\). Vad är slutsatsen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Vi kan inte förkasta \\(H_0\\) eftersom z-värdet är positivt",          "Vi förkastar \\(H_0\\) eftersom \\(|z| = 37{,}045 > z^* = 1{,}96\\)",          "Vi accepterar \\(H_0\\) eftersom z-värdet är för högt för att vara trovärdigt",          "Testet är ogiltigt eftersom z-värdet är utanför normalfördelningens domän"        ],        "correct": "Vi förkastar \\(H_0\\) eftersom \\(|z| = 37{,}045 > z^* = 1{,}96\\)"      }    },    "error": { "message": "För att förkasta \\(H_0\\) vid ett tvåsidigt test krävs att \\(|z| > z^*\\). Jämför de två värdena." },    "correct": { "message": "Rätt! Eftersom \\(|z| = 37{,}045 \\gg 1{,}96 = z^*\\) förkastar vi \\(H_0: \\mu_{\\text{män}} = \\mu_{\\text{kvinnor}}\\) med god marginal. Resultatet är statistiskt signifikant och indikerar att det finns en verklig skillnad i medellivslängd mellan könen." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-4"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Regressionsanalys med sannolikhet**](k2-5-5.html)
:::

