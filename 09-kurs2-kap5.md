# Regressionsanalys med sannolikhet

## Slumpmässiga variabler och diskreta sannolikhetsfördelningar {#k2-5-1}

### Begrepp

- **Statistik:** kallas den del av matematiken som handlar om att samla in och studera data (information). En samling data kallas ofta också för statistik.

- **Slumpmässig variabel:** En matematisk variabel som styrs av en slumpmässig process.

- **Sannolikhetsfördelning:** En fördelning av möjliga slumpmässiga utfall, definierad av en matematisk funktion.

- **Diskret sannolikhetsfördelning:** En slumpmässig variabel med en ändlig mängd möjliga utfall. Varje utfall har en sannolikhet.

- **Kontinuerlig sannolikhetsfördelning:** En sannolikhetsfördelning där en slumpmässig variabel kan anta en oändlig mängd värden. Varje enskilt utfall har noll sannolikhet, medan intervall av utfall har en sannolikhet över noll.

- **De stora talens lag:** medelvärdet av en stor samling slumpmässiga urval kommer närma sig det sanna medelvärdet.

### Teori

I [avsnitt 1.2](https://www.dropbox.com/scl/fi/9jy8vypqisanjkto7wr3v/1-2-Experiment-och-observationsstudie.docx?rlkey=4xhcwh8s17u66tholxgf5qdaa&dl=0) introducerade vi experiment och kvasiexperiment samt hur vi med hjälp av behandlings- och kontrollgrupp kan studera orsakssamband och effekter.

#### Kopplingen mellan sannolikhet och kausalitet

Säg att vi utformar ett experiment där vi vill studera effekterna av en medicin och har två patienter till vårt förfogande. Den ena patienten får medicinen (behandlingen) och den andra får inte någon medicin (kontroll).

Eftersom vi endast jämför två personer är risken stor att studiens resultat lika gärna kan vara ett resultat av slump. När vi studerar verkligheten kan vi aldrig undvika denna osäkerhet fullständigt. Men vi kan räkna på [sannolikheten](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/sannolikhet-for-en-handelse#!/) för att våra resultat är en slump och därigenom bedöma hur trovärdig vår analys är.

I detta kapitel ska vi gå igenom hur vi med hjälp av sannolikhetslära och matematiska beräkningar kan arbeta med denna typ av frågor. Delar av det som beskrivs här känner du igen från [Matte 1: Statistik och sannolikhet](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet#!/), [Matte 2: Statistik](https://www.matteboken.se/lektioner/matte-2/statistik#!/) och [Matte 4: Sannolikhetsfördelning](https://www.matteboken.se/lektioner/matte-4/integraler-och-tillampningar/sannolikhetsfordelning#!/).

#### Slumpmässiga variabler och sannolikhetsfördelningar

Tidigare har vi arbetat med variabler definierade av en matematisk funktion över en domän, till exempel funktionen [\\(y = x\^{2}\\)]{.math .inline} definierad över alla reella tal. Vi har arbetat med datavariabler bestående av insamlade uppgifter, observationer. När vi gick igenom regressionsanalys i tidigare avsnitt arbetade vi med variabler som vi predikterade med hjälp av regressionsmodeller.

När vi nu ska arbeta med sannolikhet och slump ska vi använda *slumpmässiga variabler*. En slumpmässig variabel är en variabel vars resultat bestäms av en slumpmässig process. Slumpmässiga variabler definieras av matematiska funktioner som beskriver sannolikheten för de värden (utfall) som variabeln kan anta.

Sannolikhetsfördelning beskriver med hjälp av en matematisk funktion alla möjliga utfall för en slumpmässig variabel. Sannolikhetsfördelningar kan vara *diskreta* och *kontinuerliga*. Diskreta sannolikhetsfördelningar har ett begränsat antal möjliga utfall, som en tärning. Kontinuerliga sannolikhetsfördelningar har ett oändligt antal möjliga utfall, som alla decimaler mellan 0 och 1.

Det finns oändligt många sannolikhetsfördelningar. För att hitta på en ny sannolikhetsfördelning behöver vi bara beskriva den. Vissa sannolikhetsfördelningar har fått kända namn, till exempel [normalfördelningen](https://www.matteboken.se/lektioner/matte-2/statistik/normalfordelning#!/). Även normalfördelningen är namnet på en oändlig mängd sannolikhetsfördelningar som alla har vissa gemensamma egenskaper.

#### Funktionerna [\\(P\\)]{.math .inline}, [\\(f\\)]{.math .inline} och [\\(F\\)]{.math .inline}

Funktionen [\\(P()\\)]{.math .inline} används ofta för att beskriva sannolikheten för ett utfall. Från och med nu ska vi använda funktionen [\\(f()\\)]{.math .inline} för att beskriva sannolikheten för ett specifikt värde i en slumpmässig variabel. De två funktionerna [\\(f\\)]{.math .inline} och [\\(P\\)]{.math .inline} beskriver så här långt samma sak: [\\(f(m) = P(M = m)\\)]{.math .inline}.

För diskreta sannolikhetsfördelningar kallas sannolikhetsfunktionen [\\(f\\)]{.math .inline} för *probability mass function*, PMF. En annan central funktion är det som kallas för kumulativa fördelningsfunktionen (engelska *cumulative distribtuion function*, CDF), eller bara *fördelningsfunktionen*.

Fördelningsfunktionen beskriver sannolikheten att en slumpvis variabel antar ett värde lika med eller mindre än värdet [\\(m\\)]{.math .inline}, vilket vi kan beskriva [\\(P(M \\leq m)\\)]{.math .inline}. Vi kallar fördelningsfunktionen för [\\(F\\)]{.math .inline}:

[\\(F(m) = P(M \\leq m)\\)]{.math .inline} (1)

Varför har vi tre olika funktioner för sannolikhet? Notera att funktionerna beskriver olika saker:

- [\\(P()\\)]{.math .inline} eller [\\(f()\\)]{.math .inline}: Sannolikheten för ett specifikt utfall, till exempel exakt 3 på tärningen.

- [\\(F()\\)]{.math .inline}: Den kumulativa sannolikheten, som 3 eller lägre på tärningen

#### Exempel med likformig sannolikhetsfördelning

Nu ska vi gå igenom lite matematik rörande slumpmässiga variabler och sannolikhetsfördelningar. Syftet med detta är enbart för att få en bättre förståelse för vad fenomenet innebär. Om något känns extra krångligt -- prova att hoppa över detta för nu och kanske prova att läsa det senare.

Säg att vi har en variabel [\\(X\\)]{.math .inline} som följer en diskret sannolikhetsfördelning som kan anta utfall [\\(\\{ 1,2,3,4,5,6\\}\\)]{.math .inline} med samma sannolikhet. När alla utfall har samma sannolikhet kallas det för att sannolikhetsfördelningen är likformig.

Fördelningsfunktionen för en likformig diskret sannolikhetsfördelning kan generellt beskrivas som:

[\\(F(x) = P(X \\leq x) = \\frac{x - a + 1}{b - a + 1},\\,\\, x = a,a + 1,\\ldots,b\\)]{.math .inline} (2)

där [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} är lägsta respektive högsta heltalet som [\\(X\\)]{.math .inline} kan anta. I detta fall är [\\(a = 1\\)]{.math .inline} respektive [\\(b = 6\\)]{.math .inline}. Fördelningsfunktionen för vår slumpmässiga variabel [\\(X\\)]{.math .inline} är:

[\\(F(x) = P(X \\leq x) = \\frac{x}{6},\\,\\, x = 1,2,3,4,5,6\\)]{.math .inline} (3)

Till exempel har vi att [\\(F(2) = 2\\text{/}6\\)]{.math .inline}, vilket innebär att den kumulativa sannolikheten för att få utfall 1 eller 2 är lika med 2/6. Från och med [\\(x = 6\\)]{.math .inline} och uppåt är [\\(F(x) = 1\\)]{.math .inline}, det vill säga 100 %.

Den kumulativa sannolikheten [\\(P(X \\leq x)\\)]{.math .inline} måste per definition vara ett värde mellan 0 och 1, mellan 0 och 100 %. Ett annat sätt att beskriva [\\(P(X \\leq x)\\)]{.math .inline} är att från 100 % sannolikhet (talet 1) subtraherar vi sannolikheten för [\\(P(X \> x)\\)]{.math .inline}:

[\\(F(x) = P(X \\leq x) = 1 - P(X \> x)\\)]{.math .inline} (4)

För att beräkna sannolikheten [\\(P(X \> x)\\)]{.math .inline} kan vi därför ta [\\(1 - F(x)\\)]{.math .inline}. För variabel [\\(X\\)]{.math .inline} är sannolikheten att få 3 till 6 poäng:

[\\(P(X \> x) = 1 - F(2) = 1 - \\frac{2}{6} = \\frac{4}{6}\\)]{.math .inline} (5)

Figur 1 illustrerar en likformig slumpmässig sannolikhetsfördelning, där alla värden har samma sannolikhet. Övre diagrammet visar funktion [\\(f(x)\\)]{.math .inline}. Nedre diagrammet visar [\\(F(x)\\)]{.math .inline}, den kumulativa sannolikheten att få ett värde lika med eller mindre än [\\(x\\)]{.math .inline}.

**Figur 1: Sannolikhetsfunktion och kumulativa fördelningsfunktionen\**
![En bild som visar text, skärmbild, diagram, linje Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-1%20-%20Slumpmässiga%20variabler%20och%20diskreta%20sannolikhetsfördelningar/img/k2-5-1-image1.png){style="width:5.13329in;height:6.52784in"}

Förklaring: Övre diagrammet beskriver sannolikheten 1/6 för respektive utfall i sannolikhetsfördelningen. Nedre diagrammet beskriver den kumulativa sannolikheten att få värdet på horisontella x-axeln eller mindre. Sannolikheten att få under 1 är 0. Sannolikheten att få värdet 3 är 0,5, det vill säga 50 %. Sannolikheten att få 6 eller lägre är 100 %.

#### Väntevärde i stället för medelvärde

För en slumpmässig variabel kan vi inte beräkna ett medelvärde på det sätt som vi kan göra för en samling diskreta värden, som en samling tal. För en tärning kan vi inte beräkna medelvärde förrän vi kastat den. Men vi kan beräkna vad vi förväntar oss, alltså det \"genomsnitt\" vi skulle få om vi kastade oändligt många gånger. Detta kallas för väntevärde, eller förväntat värde (engelska *expected value*).

Väntevärdet för en slumpmässig variabel är summan av varje utfall multiplicerat med dess sannolikhet. Matematiskt är väntevärde en generalisering av [viktat medelvärde](https://www.matteboken.se/lektioner/matte-1/ovningsexempel/betygssnitt#!/). För en diskret slumpmässig variabel [\\(X\\)]{.math .inline} kan detta beskrivas som:

[\\(E(X) = \\sum\_{i}\^{n}x\_{i}P\\left( x\_{i} \\right)\\)]{.math .inline} (6)

där [\\(E()\\)]{.math .inline} kallas för väntevärdesfunktionen, vilket även kan skrivas [\\(E\\lbrack X\\rbrack\\)]{.math .inline}, [\\(E(X)\\)]{.math .inline} eller [\\(EX\\)]{.math .inline}. I [avsnitt 2.1](https://www.dropbox.com/scl/fi/clzr656ksjz2ut13zw9wx/2-1-Frekvens-och-f-rdelning.docx?rlkey=4ybbva8mkt5aj3envb6sb6xu3&dl=0) introducerade vi populationens medelvärde [\\(\\mu\\)]{.math .inline}. Detta är samma sak som väntevärdet för populationen för den slumpmässiga variabeln [\\(X\\)]{.math .inline}, det vill säga: [\\(E(X) = \\mu\_{X}\\)]{.math .inline}.

Säg som exempel att vi har en slumpmässig variabel [\\(X\\)]{.math .inline} med utfallen 1, 2, 3, 4, 5 och 6, alla med sannolikheten 1/6. Väntevärdet för variabeln [\\(X\\)]{.math .inline} blir då:

[\\(E(X) = x\_{1}\*P\\left( x\_{1} \\right) + x\_{2}\*P\\left( x\_{2} \\right) + x\_{3}\*P\\left( x\_{3} \\right) + x\_{4}\*P\\left( x\_{4} \\right) + x\_{5}\*P\\left( x\_{5} \\right) + x\_{6}\*P\\left( x\_{6} \\right)\\)]{.math .inline} (7)

[\\(= 1\*\\frac{1}{6} + 2\*\\frac{1}{6} + \*\\frac{1}{6} + 3\*\\frac{1}{6} + 4\*\\frac{1}{6} + 5\*\\frac{1}{6} + 6\*\\frac{1}{6} = 3,5\\)]{.math .inline}

#### Väntevärdet av en konstant

Väntevärdesfunktionen [\\(E()\\)]{.math .inline} är en linjär funktion. Om vi har de slumpmässiga variablerna [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} så gäller följande:

[\\(E(X + Y) = E(X) + E(Y)\\)]{.math .inline} (8)

Säg nu att vi har en valfri konstant, [\\(a\\)]{.math .inline}. Om vi multiplicerar väntevärdet [\\(E(X)\\)]{.math .inline} med [\\(a\\)]{.math .inline} är detta samma sak som [\\(a\\)]{.math .inline} multiplicerat med respektive enskilt värde i variabeln [\\(X\\)]{.math .inline}:

[\\(E(aX) = aE(X)\\)]{.math .inline} (9)

Om vi adderar en konstant [\\(b\\)]{.math .inline} kan vi flytta ut även denna ur väntevärdesfunktionen:

[\\(E(aX + b) = aE(X) + b\\)]{.math .inline} (10)

#### Varians och standardavvikelse för slumpmässiga variabler

I [avsnitt 2.2](https://www.dropbox.com/scl/fi/1esn74n4y0c48moczz9mj/2-2-Avvikelse-varians-och-standardavvikelse.docx?rlkey=uv8lf1wj3u89yrguwkkss5ck6&dl=0) introducerade vi varians som ett sätt att mäta spridning. Vi gick igenom hur vi kan uppskatta variansen i en population genom att räkna på observationer i ett urval.

Även för slumpmässiga variabler kan vi beskriva varians, men då på ett lite annorlunda sätt. För en slumpmässig diskret variabel [\\(X\\)]{.math .inline} kan varians definieras som:

[\\(var(X) = \\sum\_{i}\^{n}\\left( x\_{i} - \\mu\_{X} \\right)\^{2}P\\left( x\_{i} \\right)\\)]{.math .inline} (11)

där [\\(\\mu\_{X} = E(X)\\)]{.math .inline} och [\\(P\\left( x\_{i} \\right)\\)]{.math .inline} är sannolikheten för respektive värde [\\(x\_{i}\\)]{.math .inline}, där vi från ekvation 6 vet att [\\(E(X) = \\sum\_{i}\^{n}x\_{i}P\\left( x\_{i} \\right)\\)]{.math .inline}.

Standardavvikelse ges, liksom tidigare, av positiva kvadratroten av variansen:

[\\(\\sigma\_{x} = s(x) = \\sqrt{var(x)}\\)]{.math .inline} (12)

där [\\(\\sigma\\)]{.math .inline} representerar variansen i populationen.

#### Varians för en konstant

Om vi har [\\(var(aX + b)\\)]{.math .inline}, där [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} är konstanter, får vi:

[\\(var(aX + b) = a\^{2}\\text{var}(X)\\)]{.math .inline} (13)

Det vill säga en konstant [\\(a\\)]{.math .inline} som multipliceras med den slumpmässiga variabeln kan flyttas ut ur variansfunktionen [\\(var()\\)]{.math .inline} och multipliceras med sig själv. Konstant [\\(b\\)]{.math .inline} försvinner. För standardavvikelse gäller att:

[\\(s(aX + b) = \|a\|s(X)\\)]{.math .inline} (14)

där [\\(\|a\|\\)]{.math .inline} är absolutvärdet av [\\(a\\)]{.math .inline}. Detta innebär att om vi multiplicerar en slumpmässig variabel [\\(X\\)]{.math .inline} med en konstant [\\(a\\)]{.math .inline} så multipliceras dess varians och standardavvikelse, men det förändrar inte spridningens form (jämför [avsnitt 2.2](https://www.dropbox.com/scl/fi/1esn74n4y0c48moczz9mj/2-2-Avvikelse-varians-och-standardavvikelse.docx?rlkey=uv8lf1wj3u89yrguwkkss5ck6&dl=0)).

#### De stora talens lag

Säg nu att vi har en sexsidig perfekt balanserad tärning och kastar denna 1 000 gånger. Givet att tärningen verkligen är perfekt balanserad och fortsätter att vara så under hela processen så är sannolikheten hög att vi kommer att få ungefär lika många utfall för varje sida (1 till 6).

Medelvärdet av våra 1 000 resultat kommer att vara mycket nära 3,5, vilket är medelvärdet om varje tärningssida kommer upp exakt lika många gånger: (1+2+3+4+5+6)/6 = 3,5.

Detta fenomen kallas inom statistik för [De stora talens lag](https://sv.wikipedia.org/wiki/De_stora_talens_lag). Lagen säger att medelvärdet av en stor samling slumpmässiga urval kommer närma sig det väntevärdet (det sanna medelvärdet).

Små samlingar med värden, som till exempel 3 kast, löper större risk att avvika från medelvärdet, jämfört med samlingar med många värden.

De stora talens lag är ingen fysisk lag som måste gälla i varje verkligt exempel. Till exempel, om vi skulle samla ihop 1 000 olika perfekt balanserade tärningar och slå varje tärning 1 000 gånger, så skulle några få av dessa resultat avvika kraftigt från medelvärdet.

Och slår vi tillräckligt många tärningar kommer vi till slut även få de mest extrema resultaten, som till exempel 1 000 kast med värdet 6 varje gång och 1 000 kast med värdet 1 varje gång.

Mer formaliserat kan stora talens lag formuleras på följande sätt: säg att vi har en oändlig sekvens av slumpmässiga variabler [\\(X\_{1},X\_{2},\\ldots,X\_{n}\\)]{.math .inline} som har samma väntevärde [\\(\\mu\\)]{.math .inline}:

[\\(E\\left( X\_{1} \\right) = E\\left( X\_{2} \\right) = \\ldots = \\mu\\)]{.math .inline} (15)

Medelvärdet för [\\(n\\)]{.math .inline} av dessa variabler är:

[\\(\\overline{X\_{n}} = \\frac{1}{n}\\sum\_{i}\^{n}X\_{i}\\)]{.math .inline} (16)

Stora talens lag kan då uttryckas som att följande [gränsvärde](https://www.matteboken.se/lektioner/matte-3/algebraiska-uttryck/gransvarde#!/) är 1 då [\\(n\\)]{.math .inline} går mot oändlighet:

[\\(\\lim\_{n \\rightarrow \\infty}{P\\left( \\left\| \\overline{X\_{n}} - \\mu \\right\| \< \\epsilon \\right)} = 1\\)]{.math .inline} (17)

där [\\(\\left\| \\overline{X\_{n}} - \\mu \\right\|\\)]{.math .inline} är absolutbeloppet av medelvärdet [\\(\\overline{X\_{n}}\\)]{.math .inline} minus väntevärdet [\\(\\mu\\)]{.math .inline}. Funktionen [\\(P()\\)]{.math .inline} beskriver sannolikheten för ett utfall. Termen [\\(\\epsilon\\)]{.math .inline} är ett valfritt positivt tal, till exempel ett mycket lågt värde nära 0.

Hela ekvationen kan läsas som att sannolikheten för att [\\(\\left\| \\overline{X\_{n}} - \\mu \\right\|\\)]{.math .inline} är mindre än [\\(\\epsilon\\)]{.math .inline} närmar sig 100 % då antalet slumpmässiga variabler [\\(X\_{i}\\)]{.math .inline} växer till oändligt många, det vill säga [\\(n \\rightarrow \\infty\\)]{.math .inline}. Ett annat sätt att beskriva detta är att skillnaden mellan [\\(\\overline{X\_{n}}\\)]{.math .inline} och [\\(\\mu\\)]{.math .inline} närmar sig 0 och denna skillnad kommer att vara mindre än det låga värdet [\\(\\epsilon\\)]{.math .inline}.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-1"]=[  {    "id": "k2-5-1-001",    "name": "Uppgift 1",    "exercise": "En variabel \\(X\\) följer en diskret likformig sannolikhetsfördelning med utfallen \\(\\{1, 2, 3, 4, 5, 6\\}\\). Vad är den kumulativa sannolikheten \\(F(3) = P(X \\leq 3)\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(1/6\\)",          "\\(2/6\\)",          "\\(3/6\\)",          "\\(4/6\\)"        ],        "correct": "\\(3/6\\)"      }    },    "error": { "message": "För en likformig fördelning på \\(\\{1,...,6\\}\\) ges fördelningsfunktionen av \\(F(x) = x/6\\). Sätt in \\(x = 3\\)." },    "correct": { "message": "Rätt! \\(F(3) = P(X \\leq 3) = 3/6 = 0{,}5\\), det vill säga 50 %. Formeln \\(F(x) = x/6\\) gäller eftersom varje utfall har sannolikheten \\(1/6\\) och vi summerar upp till och med \\(x\\)." }  },  {    "id": "k2-5-1-002",    "name": "Uppgift 2",    "exercise": "Vad beskriver den kumulativa fördelningsfunktionen \\(F(m) = P(M \\leq m)\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Sannolikheten för exakt utfall \\(m\\)",          "Sannolikheten att variabeln antar ett värde lika med eller mindre än \\(m\\)",          "Sannolikheten att variabeln antar ett värde större än \\(m\\)",          "Det förväntade värdet av variabeln"        ],        "correct": "Sannolikheten att variabeln antar ett värde lika med eller mindre än \\(m\\)"      }    },    "error": { "message": "Skillnaden mellan \\(f\\) och \\(F\\) är viktig: \\(f\\) beskriver sannolikheten för ett enskilt utfall, medan \\(F\\) är kumulativ." },    "correct": { "message": "Rätt! \\(F(m) = P(M \\leq m)\\) är den kumulativa fördelningsfunktionen och beskriver sannolikheten att variabeln \\(M\\) antar ett värde som är \\(m\\) eller lägre." }  },  {    "id": "k2-5-1-003",    "name": "Uppgift 3",    "exercise": "Vad säger De stora talens lag?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att medelvärdet av ett litet urval alltid är exakt lika med populationens väntevärde",          "Att medelvärdet av en stor samling slumpmässiga urval kommer att närma sig väntevärdet",          "Att alla slumpmässiga variabler följer en normalfördelning om urvalet är tillräckligt stort",          "Att variansen i ett urval minskar till noll när antalet observationer ökar"        ],        "correct": "Att medelvärdet av en stor samling slumpmässiga urval kommer att närma sig väntevärdet"      }    },    "error": { "message": "De stora talens lag handlar om vad som händer med medelvärdet när antalet observationer ökar mot oändligheten." },    "correct": { "message": "Rätt! De stora talens lag säger att \\(\\lim_{n \\rightarrow \\infty} P(|\\overline{X_n} - \\mu| < \\epsilon) = 1\\). Medelvärdet av tillräckligt många slumpmässiga urval konvergerar mot populationens väntevärde \\(\\mu\\)." }  },  {    "id": "k2-5-1-004",    "name": "Uppgift 4",    "exercise": "En slumpmässig variabel \\(X\\) kan anta värdena 1, 2, 3, 4, 5 och 6 med lika sannolikhet \\(1/6\\) vardera. Beräkna väntevärdet \\(E(X)\\) enligt formeln \\[E(X) = \\sum_{i}^{n} x_i P(x_i)\\] Ange ditt svar med en decimal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "3.5" },    "answerformat": "Ange svaret med en decimal, t.ex. 3.5",    "error": { "message": "Multiplicera varje utfall med sannolikheten \\(1/6\\) och summera: \\(1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + \\ldots + 6 \\cdot \\frac{1}{6}\\)." },    "correct": { "message": "Rätt! \\(E(X) = (1 + 2 + 3 + 4 + 5 + 6) \\cdot \\frac{1}{6} = \\frac{21}{6} = 3{,}5\\). Väntevärdet 3,5 är vad vi förväntar oss i genomsnitt om vi kastar tärningen oändligt många gånger." }  },  {    "id": "k2-5-1-005",    "name": "Uppgift 5",    "exercise": "Vi har en slumpmässig variabel \\(X\\) med \\(E(X) = 4\\). Vi definierar en ny variabel \\(W = 3X + 2\\). Vad är \\(E(W)\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "14" },    "answerformat": "Ange ett heltal",    "error": { "message": "Använd linearitetsregeln: \\(E(aX + b) = aE(X) + b\\). Vad är \\(a\\) och \\(b\\) i detta fall?" },    "correct": { "message": "Rätt! Eftersom \\(E(aX + b) = aE(X) + b\\) får vi \\(E(3X + 2) = 3 \\cdot E(X) + 2 = 3 \\cdot 4 + 2 = 14\\). Konstanter kan 'plockas ut' ur väntevärdesfunktionen." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-1"></div>

## Kontinuerliga sannolikhetsfördelningar {#k2-5-2}

### Begrepp

- **Täthetsfunktion:** Beskriver sannolikheten för enskilda utfall för en kontinuerlig slumpmässig variabel. Betecknas här [\\(f\\)]{.math .inline}.

- **Kumulativa fördelningsfunktionen:** Beskriver sannolikheten för intervall för en kontinuerlig slumpmässig variabel. Betecknas här [\\(F\\)]{.math .inline}.

- **Likformig kontinuerlig sannolikhetsfördelning:** Alla utfall har samma sannolikhet.

- **Standardnormalfördelningen:** En normalfördelning med medelvärdet 0 och standardavvikelse 1. Betecknas [\\(N(0,1)\\)]{.math .inline}. Kallas även för standardiserad normalfördelning eller Z-fördelning.

### Teori

Som vi beskrev i föregående avsnitt kan kontinuerliga sannolikhetsfördelningar anta alla möjliga värden inom ett intervall och har därför ett oändligt antal möjliga utfall. I [matte 2](https://www.matteboken.se/lektioner/matte-2/statistik/normalfordelning#!/) och [matte 4](https://www.matteboken.se/lektioner/matte-4/integraler-och-tillampningar/sannolikhetsfordelning#!/) introduceras kontinuerliga sannolikhetsfördelningar och bland annat normalfördelningen.

#### Sannolikhet och kumulativ sannolikhet

För en diskret variabel använder vi en *sannolikhetsfunktion* för att beskriva sannolikheten för enskilda utfall. Motsvarande funktion som beskriver sannolikheten för möjliga utfall i en kontinuerlig variabel kallas för *täthetsfunktion* (engelska *probability density function*), vilken vi förkortar [\\(f\\)]{.math .inline}.

För att beräkna den kumulativa sannolikheten för en kontinuerlig slumpmässig variabel använder vi en *kumulativ fördelningsfunktion*, som vi kallar [\\(F\\)]{.math .inline}. Det vill säga, samma förkortningar som vi använde i föregående avsnitt för att beskriva motsvarande funktioner för diskreta sannolikhetsfördelningar.

För en slumpmässig kontinuerlig variabel [\\(X\\)]{.math .inline} beskriver täthetsfunktionen [\\(f(x)\\)]{.math .inline} sannolikheten för ett specifikt utfall [\\(X = x\\)]{.math .inline}, medan kumulativa fördelningsfunktionen [\\(F(x)\\)]{.math .inline} beskriver sannolikheten att [\\(X\\)]{.math .inline} antar ett värde lägre eller lika med [\\(x\\)]{.math .inline}.

#### Ett exempel med diagram

Säg att vi har en kontinuerlig sannolikhetsfördelning [\\(X\\)]{.math .inline} där alla värden mellan 0 och 1 har samma sannolikhet. Det vill säga, vi har samma sannolikhet att få någon av alla de oändligt många decimaler som finns mellan 0 och 1. Om varje sådant värde mellan 0 och 1 hade en sannolikhet \> 0, skulle summan bli oändligt stor. I stället är sannolikheten för ett specifikt värde inom ett kontinuerlig intervall (med ett oändligt antal värden), till exempel 0,0934720630257, definierat till noll.

Däremot finns det en positiv sannolikhet att få ett värde inom ett intervall. Till exempel är sannolikheten för att [\\(X\\)]{.math .inline} ska anta ett värde mellan 0 och 0,5 lika med 50 %, eftersom det motsvarar hälften av sannolikhetsfördelningen. Det är denna sannolikhet vi får av kumulativa fördelningsfunktionen [\\(F(x)\\)]{.math .inline}.

Alltså: sannolikheten att få ett specifikt värde, som 0,5, är noll. Sannolikheten för att få ett värde inom ett intervall, som 0,4 -- 0,6, vilket här motsvarar 20 % av intervallet, är just 20 %.

Figur 1 illustrerar täthetsfunktionen och kumulativa fördelningsfunktionen för den likformiga kontinuerliga sannolikhetsfördelningen [\\(X\\)]{.math .inline}, där alla utfall mellan 0 och 1 har samma sannolikhet.

Det vänstra diagrammet illustrerar täthetsfunktionen [\\(f\\)]{.math .inline} och det högra diagrammet kumulativa fördelningsfunktionen [\\(F\\)]{.math .inline}. Sannolikheten för att [\\(X\\)]{.math .inline} antar ett värde mellan 0 och 0,5 är 0,5, vilket vi kan se i det högre diagrammet genom att jämföra 0,5 på den horisontella axeln ([\\(x\\)]{.math .inline}-värdet) och den kumulativa sannolikheten på vertikala axeln. Det vill säga:

[\\\[F(x = 0,5) = P(X \\leq 0,5) = 0,5\\\]]{.math .display}

**Figur 1: Täthetsfunktionen och kumulativa fördelningsfunktionen för en likformig kontinuerlig sannolikhetsfördelning**\
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-2%20-%20Kontinuerliga%20sannolikhetsfördelningar/img/k2-5-2-image1.png){style="width:5.38889in;height:2.92963in"}

Förklaring: Vänstra diagrammet beskriver sannolikheten för varje utfall mellan 0 och 1. Högra diagrammet beskriver kumulativa sannolikheten att få ett värde på horisontella x-axeln eller lägre. Sannolikheten att få ett värde under 0 är noll. Sannolikheten att få ett värde mellan 0 och 0,5 är 0,5, det vill säga 50 %. Sannolikheten att få värdet 1 eller lägre är 100 %.

#### Väntevärde för kontinuerliga variabler

I föregående avsnitt introducerade vi väntevärde för diskreta slumpmässiga variabler som summan av utfall multiplicerat med deras sannolikhet, [\\(E(X) = \\sum\_{}\^{}{xP(x)}\\)]{.math .inline}. Väntevärdet för en kontinuerlig slumpmässig variabel är på liknande sätt summan av utfall multiplicerat med sannolikheterna.

Säg att vi har en slumpmässig likformig kontinuerlig variabel [\\(X\\)]{.math .inline}, vars lägsta respektive högsta värden är [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline}. Eftersom vi nu ska summera ett kontinuerligt intervall kan vi använda [integraler](https://www.matteboken.se/lektioner/matte-3/integraler?gad_source=1&gclid=CjwKCAiAwaG9BhAREiwAdhv6Y2KYZCxYMa4BwTrcLl7ZKGEB3v3OAesqY9bL4uQRR9bVbVEpx1Ls0BoCJyQQAvD_BwE#!/):

[\\(E(X) = \\int\_{a}\^{b}{xf(x)dx}\\)]{.math .inline} (1)

vilket ska läsas som att vi över intervallet [\\(a\\)]{.math .inline} till [\\(b\\)]{.math .inline} summerar alla möjliga utfall [\\(x\\)]{.math .inline} multiplicerat med sannolikheten för respektive värde [\\(f(x)\\)]{.math .inline}.

#### Varians för kontinuerliga sannolikhetsfördelningar

Varians för en kontinuerlig slumpmässig variabel [\\(X\\)]{.math .inline} kan beskrivas:

[\\(var(X) = E\\left( \\left( X - \\mu\_{X} \\right)\^{2} \\right) = \\sigma\_{X}\^{2}\\)]{.math .inline} (2)

Om vi skriver ut definitionen av väntevärdet från ekvation 1 får vi:

[\\(E\\left( \\left( X - \\mu\_{X} \\right)\^{2} \\right) = \\int\_{- \\infty}\^{\\infty}\\left( X - \\mu\_{X} \\right)\^{2}f(x)dx\\)]{.math .inline} (3)

Standardavvikelsen är, liksom för diskreta variabler, kvadratroten av variansen:

[\\(\\sigma\_{X} = \\sqrt{var(X)} = \\sqrt{\\sigma\_{X}\^{2}}\\)]{.math .inline} (4)

Betingat väntevärde för kontinuerliga slumpmässiga variabler [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} skrivs:

[\\(E\\left( Y \\middle\| X \\right) = \\int\_{- \\infty}\^{\\infty}{\\int\_{- \\infty}\^{\\infty}{xyf(x,y)dxdy}}\\)]{.math .inline} (5)

där [\\(f(x,y)\\)]{.math .inline} är den gemensamma sannolikhetsfördelningen. Lagen om totalt väntevärde gäller även för kontinuerliga fördelningar, [\\(E\\left( E\\left( X \\middle\| Y \\right) \\right) = E(X)\\)]{.math .inline}, liksom regeln att [\\(E\\left( XY \\middle\| X \\right) = XE\\left( Y \\middle\| X \\right)\\)]{.math .inline}.

#### Normalfördelningen

Ett exempel på en kontinuerlig sannolikhetsfördelning är det som kallas för normalfördelningen. Se [matte 2](https://www.matteboken.se/lektioner/matte-2/statistik/normalfordelning#!/) och [matte 4](https://www.matteboken.se/lektioner/matte-4/integraler-och-tillampningar/sannolikhetsfordelning#!/).

En normalfördelning som har medelvärde 0 och standardavvikelse 1 kallas för *standardiserad normalfördelning, standardnormalfördelningen* eller *Z-fördelningen*. Vi stöter sällan på några verkliga data som av naturliga skäl följer en normalfördelning med medelvärde 0 och standardavvikelse 1. Däremot kan vi räkna om en samling värden så att dessa får medelvärde 0 och standardavvikelse 1, vilket kallas för att standardisera. För att standardisera variabel [\\(X\\)]{.math .inline} tar vi:

Standardiserade [\\(X = Z = \\frac{X\_{i} - \\overline{X}}{s\_{X}}\\)]{.math .inline} (6)

där [\\(X\_{i} - \\overline{X}\\)]{.math .inline} innebär att vi subtraherar medelvärdet [\\(\\overline{X}\\)]{.math .inline} från varje värde [\\(X\_{i}\\)]{.math .inline} och dividerar med estimerad standardavvikelse [\\(s\_{X}\\)]{.math .inline}.

Genom att omvandla vilken normalfördelning som helst till medelvärde 0 och standardavvikelse 1 kan vi använda samma tabell och matematiska funktion för alla normalfördelningar. Detta är mycket praktiskt.

Standardiserade normalfördelningar används ofta och kallas därför ibland för variabel [\\(Z\\)]{.math .inline}. Denna sannolikhetsfördelning har flera kända sannolikhetsmått utifrån dess standardavvikelser, vilka ofta används i statistisk analys. Figur 2 illustrerar detta, där det övre diagrammet beskriver standardnormalfördelningens täthetsfunktion [\\(f\\)]{.math .inline} och det nedre diagrammet beskriver kumulativa fördelningsfunktionen [\\(F\\)]{.math .inline}.

I det övre diagrammet är några av standardavvikelserna under och över medelvärdet 0 markerade. Kumulativa fördelningsfunktionen [\\(F(Z \\leq z)\\)]{.math .inline} beskriver liksom tidigare hur stor andel av alla värden i variabel [\\(Z\\)]{.math .inline} som är mindre eller lika med utfall [\\(z\\)]{.math .inline} (ett enskilt värde i [\\(Z\\)]{.math .inline}).

Eftersom standardnormalfördelningen även kallas [\\(Z\\)]{.math .inline}-fördelningen beskrivs denna typ av sannolikheter ofta som just [\\(Z\\)]{.math .inline}-värden (engelska *z-score*).

Standardiserade normalfördelningen är så välanvänd att det finns flera färdigberäknade sannolikheter från denna fördelning som ofta används i statistisk analys. Några av dessa visas i figur 2, där vi i det övre diagrammet bland annat kan se att 95 % av fördelningen täcks av avståndet från -1,96 standardavvikelser till +1,96 standardavvikelser från medelvärdet.

**Figur 2: Standardiserade normalfördelningens täthetsfunktion** [\\(\\mathbf{f(z)}\\)]{.math .inline} **och kumulativa fördelningsfunktion** [\\(\\mathbf{F(Z \\leq z)}\\)]{.math .inline}**.\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-2%20-%20Kontinuerliga%20sannolikhetsfördelningar/img/k2-5-2-image2.png){style="width:3.85417in;height:5.13889in"}

Förklaring: Övre diagrammet illustrerar täthetsfunktionen [\\(f(z)\\)]{.math .inline}, där vertikala axeln anger sannolikheten för ett specifikt värde i standardiserade normalfördelningen. Nedre diagrammet illustrerar kumulativa fördelningsfunktionen [\\(F(Z \\leq z)\\)]{.math .inline}, som beskriver sannolikheten för värdet [\\(z\\)]{.math .inline} eller lägre.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-2"]=[  {    "id": "k2-5-2-001",    "name": "Uppgift 1",    "exercise": "Vad är sannolikheten för ett <em>specifikt</em> utfall i en kontinuerlig sannolikhetsfördelning, till exempel att \\(X = 0{,}5\\) exakt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "50 %, eftersom 0,5 är mitt i intervallet 0–1",          "Noll, eftersom det finns oändligt många möjliga värden i ett kontinuerligt intervall",          "1/100, eftersom decimaler har lika sannolikhet",          "Kan inte beräknas utan mer information"        ],        "correct": "Noll, eftersom det finns oändligt många möjliga värden i ett kontinuerligt intervall"      }    },    "error": { "message": "Om varje enskilt värde hade en positiv sannolikhet i ett kontinuerligt intervall – vad skulle hända med summan av alla sannolikheter?" },    "correct": { "message": "Rätt! I en kontinuerlig fördelning är sannolikheten för ett exakt värde definierad till noll. Om varje värde hade sannolikhet > 0 skulle summan av oändligt många sådana bli oändlig. Sannolikhet gäller istället för intervall." }  },  {    "id": "k2-5-2-002",    "name": "Uppgift 2",    "exercise": "Standardnormalfördelningen betecknas \\(N(0,1)\\). Vilket medelvärde och vilken standardavvikelse har den?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Medelvärde 1 och standardavvikelse 0",          "Medelvärde 0 och standardavvikelse 1",          "Medelvärde 0,5 och standardavvikelse 0,5",          "Medelvärde 0 och standardavvikelse 0"        ],        "correct": "Medelvärde 0 och standardavvikelse 1"      }    },    "error": { "message": "Notationen \\(N(\\mu, \\sigma)\\) anger medelvärde och standardavvikelse. Vad är värdena i \\(N(0,1)\\)?" },    "correct": { "message": "Rätt! Standardnormalfördelningen \\(N(0,1)\\) har medelvärde 0 och standardavvikelse 1. Den kallas också Z-fördelningen och är grundläggande för statistiska test." }  },  {    "id": "k2-5-2-003",    "name": "Uppgift 3",    "exercise": "Vi standardiserar en variabel \\(X\\) med formeln \\[Z = \\frac{X_i - \\overline{X}}{s_X}\\] Vad uppnår vi med denna omvandling?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Vi gör variabeln logaritmisk",          "Vi omvandlar variabeln till medelvärde 0 och standardavvikelse 1",          "Vi tar bort extremvärden ur variabeln",          "Vi omvandlar variabeln till en diskret fördelning"        ],        "correct": "Vi omvandlar variabeln till medelvärde 0 och standardavvikelse 1"      }    },    "error": { "message": "Vad gör det att subtrahera medelvärdet och dividera med standardavvikelsen för fördelningens centrum och spridning?" },    "correct": { "message": "Rätt! Standardisering innebär att vi centrerar variabeln (subtraherar medelvärdet) och skalar den (dividerar med standardavvikelsen), vilket ger medelvärde 0 och standardavvikelse 1. Alla normalfördelningar kan därigenom jämföras mot samma tabell." }  },  {    "id": "k2-5-2-004",    "name": "Uppgift 4",    "exercise": "En variabel \\(X\\) följer en likformig kontinuerlig fördelning på intervallet \\([0, 1]\\). Vad är den kumulativa sannolikheten \\(F(0{,}5) = P(X \\leq 0{,}5)\\)?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.5" },    "answerformat": "Ange ett tal mellan 0 och 1, t.ex. 0.5",    "error": { "message": "I en likformig kontinuerlig fördelning på \\([0,1]\\) är sannolikheten proportionell mot intervallets längd. Hur stor del av intervallet \\([0,1]\\) är \\([0, 0{,}5]\\)?" },    "correct": { "message": "Rätt! \\(F(0{,}5) = P(X \\leq 0{,}5) = 0{,}5\\). Intervallet \\([0; 0{,}5]\\) utgör hälften av hela intervallet \\([0;1]\\), och i en likformig fördelning är sannolikheten för ett intervall proportionell mot dess längd." }  },  {    "id": "k2-5-2-005",    "name": "Uppgift 5",    "exercise": "Hur många procent av en standardnormalfördelnings värden täcks av intervallet från \\(-1{,}96\\) till \\(+1{,}96\\) standardavvikelser från medelvärdet?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "95" },    "answerformat": "Ange ett heltal (procent)",    "error": { "message": "Detta är ett centralt värde som används bland annat för 95-procentiga konfidensintervall. Tänk på hur stor andel av en normalfördelnings värden som befinner sig inom ±1,96 standardavvikelser från medelvärdet." },    "correct": { "message": "Rätt! 95 % av standardnormalfördelningens värden finns inom intervallet \\([-1{,}96; +1{,}96]\\). Detta värde är centralt i statistisk analys och används bland annat för att beräkna 95 %-konfidensintervall." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-2"></div>

## Statistisk analys 1 {#k2-5-3}

### Begrepp

- **Statistiskt test:** Beräkning rörande sannolikheten om ett påstående stämmer eller ej.

- **Punktestimat:** Estimat av ett specifikt värde från populationen, som medelvärde eller varians.

- **Standardfel:** Mått på osäkerheten i ett punktestimat (engelska *standard error*).

- **Medelvärdets standardfel:** Estimerad osäkerhet i medelvärdets estimat. Beräknas som [\\(s\_{x}/n\^{\\frac{1}{2}}\\)]{.math .inline} där [\\(s\_{x}\\)]{.math .inline} är estimerad standardavvikelse och [\\(n\\)]{.math .inline} är antal observationer i urvalet.

### Teori

Under denna kurs har vi introducerat skillnaden mellan det vi kallar populationen (det vi vill studera), vars värden i regel är okända, och den urvalsdata vi har tillgång till (det vi kan studera). Nu ska vi närmare koppla ihop dessa begrepp med det vi gått igenom om sannolikhetsfördelningar.

#### Statistiskt test

Ett statistiskt test är en kvantitativ beräkning där vi räknar på sannolikheten för om ett påstående stämmer eller ej. Vi kommer gå igenom två typer av test: Punktestimat och intervallskattning. Punktestimat innebär att vi räknar på ett enda värde, som medelvärde = 82 år. Intervallskattning syftar på att vi räknar på sannolikheten att ett värde (till exempel medelvärdet) befinner sig inom ett intervall, som 80 och 84 år. I detta avsnitt går vi igenom punktestimat. I nästa avsnitt lär vi oss intervallskattning.

Vi ska demonstrera vad ett statistiskt test är genom att jämföra två medelvärden. Figur 1 illustrerar den genomsnittliga livslängden för män respektive kvinnor i Sveriges 290 kommuner. De streckade vertikala linjerna mitt i staplarna beskriver medelvärdet för kvinnor respektive män i observationerna i diagrammet. Lite förenklat kan vi se att observationerna för män respektive kvinnor följer ungefär en normalfördelning vardera.

Medelvärdet för kvinnor ligger tydligt högre än medelvärdet för männen. Men det vi tittar på här är medelvärden per kommun. Och det är medelvärden beräknade vid en specifik tidpunkt, som avser att beskriva hur det såg ut i Sverige 2022.

Säg nu att detta är urvalsdata för en större population. Vi kan till exempel tänka oss att det är en uppskattning av hur det ser ut i Sveriges befolkning idag. Eller kanske är ett exempel på män och kvinnor i de nordiska länderna. Eller kanske ett exempel på skillnaden i livslängd mellan män och kvinnor under hela 2020-talet. Utifrån våra urvalsdata vill nu veta om medelvärdet i livslängd för den större populationen kvinnor och män verkligen skiljer sig.

**Figur 1: Genomsnittlig livslängd för män respektive kvinnor i Sveriges kommuner**![En bild som visar diagram, text, skärmbild, Graf Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-3%20-%20Statitsisk%20analys%201/img/k2-5-3-image1.png){style="width:4.47917in;height:2.98611in"}

Förklaring: Staplarna visar spridningen i genomsnittlig medellivslängd i Sveriges kommuner. En observation = ett medelvärde per kommun. Den genomsnittliga livslängden varierar både bland män och kvinnor. Staplar överlappar varandra något, vilket beror på att i de kommuner där män lever som längst i genomsnitt, är denna livslängd högre jämfört med de kommuner där kvinnor i genomsnitt lever som kortast.

Detta kan vi pröva genom ett statistiskt test. Vi formulerar detta som att vi vill beräkna sannolikheten för om populationernas medelvärden är desamma: [\\(\\mu\_{\\text{kvinnor}\\ } = \\mu\_{\\text{män}}\\)]{.math .inline}. Vi vet inte populationsvärdena. Vi har observationer som eventuellt kan beskrivas som att de är hämtade från två separata populationer, det vill säga populationerna med mäns och kvinnors genomsnittsinkomster per kommun.

För att skatta sannolikheten för att de två populationerna har samma medelvärde utgår vi från att vi jämför två normalfördelade variabler och beräknar ett [\\(z\\)]{.math .inline}-värde. Vårt beräknade [\\(z\\)]{.math .inline} jämför vi mot standardnormalfördelningen för att därigenom få sannolikheten att de två medelvärdena i våra urvalsdata tillhör samma population. Här är ekvationen för att beräkna detta [\\(z\\)]{.math .inline}-värde:

[\\(z = \\frac{{\\bar{X}}\_{\\text{kvinnor}\\ } - {\\bar{X}}\_{\\text{män}\\ }}{\\left( \\frac{s\_{\\text{kvinnor}\\ }\^{2}}{n\_{\\text{kvinor}\\ }} + \\frac{s\_{\\text{mann}\\ }\^{2}}{n\_{\\text{man}\\ }} \\right)\^{\\frac{1}{2}}}\\)]{.math .inline} (1)

där [\\(s\^{2}\\)]{.math .inline} är varians (standardavvikelse i kvadrat) för respektive grupp och [\\(n\\)]{.math .inline} är antal observationer. För observationerna i figur 1 har vi följande värden som vi behöver till beräkningen:

[\\({\\overline{X}}\_{kvinnor} = 83,95\\)]{.math .inline} [\\({\\overline{X}}\_{män} = 80,38\\)]{.math .inline} (2)

[\\(s\_{kvinnor}\^{2} = 1,032\\)]{.math .inline} [\\(s\_{män}\^{2} = 1,663\\)]{.math .inline}

[\\(n\_{kvinnor} = 290\\)]{.math .inline} [\\(n\_{män} = 290\\)]{.math .inline}

Med dessa värden kan vi beräkna följande [\\(z\\)]{.math .inline}-värde:

[\\(z = \\frac{{\\bar{X}}\_{\\text{kvinnor}\\ } - {\\bar{X}}\_{\\text{män}\\ }}{\\left( \\frac{s\_{\\text{kvinnor}\\ }\^{2}}{n\_{\\text{kvinnor}\\ }} + \\frac{s\_{\\text{man}\\ }\^{2}}{n\_{\\text{mãn}\\ }} \\right)\^{\\frac{1}{2}}} \\approx \\frac{83,95 - 80,38}{\\left( \\frac{1,032}{290} + \\frac{1,663}{290} \\right)\^{\\frac{1}{2}}} \\approx 37,045\\)]{.math .inline} (3)

Detta [\\(z\\)]{.math .inline}-värde kan vi jämföra mot standardnormalfördelningens kumulativa fördelningsfunktion [\\(F(Z \\leq z)\\)]{.math .inline} i det nedre diagrammet i figur 2 i föregående [avsnitt 5.2](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0).

Vårt beräknade [\\(z\\)]{.math .inline}-värde hamnar långt ut i standardnormalfördelningens svans till höger om (över) medelvärdet. Så långt att detta [\\(z\\)]{.math .inline}-värde inte ryms på diagrammets horisontella axel. Detta indikerar att det är mycket osannolikt att de två populationerna (män och kvinnors livslängd) har samma medelvärde. Detta är resultatet för vårt statistiska test. Testet stödjer alltså inte att populationernas medelvärden är samma. Det verkar alltså finnas en skillnad.

Notera att det inte säger oss någonting om varför siffrorna ser ut så här. Det visar inte på något orsakssamband eller någon förklaring. Det indikerar endast att det i statistisk bemärkelse, givet den data vi använt, är osannolikt att populationernas medelvärden, [\\(\\mu\_{män}\\)]{.math .inline} och [\\(\\mu\_{kvinnor}\\)]{.math .inline}, är lika.

#### Statistisk inferens och punktestimat

Statistisk inferens eller statistisk slutledning, kallas den process där vi med hjälp av ett empiriskt datamaterial försöker dra slutsatser om okända egenskaper i en population. Detta är vad vi gör när vi försöker estimera värdena i en population, genom att beräkna resultat med urvalsdata.

Vi kan ta medelvärdet som exempel, vilket vi introducerat tidigare. Om vi vill veta populationens medelvärde [\\(\\mu\_{X}\\)]{.math .inline} för en variabel [\\(X\\)]{.math .inline} estimerar vi detta i urvalsdatan med den vanliga formeln för medelvärde:

[\\(\\overline{x} = \\sum\_{i}\^{n}x\_{i}\\text{/}n\\)]{.math .inline} (4)

Om det medelvärde vi beräknar syftar till att uttala oss om en (större) population bortom den data vi har tillgång till, så är detta per definition ett estimat av populationens medelvärde.

I avsnitt [5.1](https://www.dropbox.com/scl/fi/f0sm847poizoh98wjzs2w/5-1-Sannolikhet-och-slump.docx?rlkey=bkxlftjmtdnxxyp0ickav3s77&dl=0) och [5.2](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-V-ntev-rde-varians-slumpm-ssiga-variabler.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0) gick vi igenom estimatorer för regressionsmodellers koefficienter. Ekvation 4 är *medelvärdets estimator*. Alltså, varje estimerat medelvärde är en konstant men ekvationen vi använder för att med en samling urvalsobservationer estimera medelvärdet kallar vi för estimator.

Om vi vill veta populationens okända varians [\\(\\sigma\_{X}\^{2}\\)]{.math .inline} kan vi estimera detta med urvalsdatan som:

[\\(var(X) = \\left( \\frac{1}{n - 1} \\right)\\sum\_{i}\^{n}\\left( x\_{i} - \\overline{x} \\right)\^{2}\\)]{.math .inline} (5)

Detta är således estimatorn för variansen. I båda dessa fall estimerar vi specifika värden, vilket kallas för att estimera punkter, punktestimat eller att skatta punkter (engelska *point estimation*). Både medelvärdet och variansen är exempel på punktestimat.

#### Medelvärdets estimator

Nu ska vi fördjupa oss lite i hur vi kan resonera kring hur och varför våra estimat kan avvika från värdena i populationen som vi vill estimera (se gärna [matte 1](https://www.matteboken.se/lektioner/matte-1/statistik-och-sannolikhet/felkallor-och-signifikans#!/) och introduktionen till *felkällor,* *statistisk signifikans*).

Medelvärdets estimator har ett väntevärde, ett förväntat värde, vilket är definierat som populationens medelvärde:

[\\(E\\left( \\overline{x} \\right) = E\\left( \\frac{1}{n}\\sum\_{i}\^{n}x\_{i} \\right) = \\mu\_{X}\\)]{.math .inline} (6)

Detta väntevärde innebär alltså, enligt stora talens lag (se [avsnitt 5.1](https://www.dropbox.com/scl/fi/f0sm847poizoh98wjzs2w/5-1-Slumpm-ssiga-variabler-och-diskreta-sannolikhetsf-rdelningar.docx?rlkey=bkxlftjmtdnxxyp0ickav3s77&dl=0)), att givet att vi tar oändligt många urval från en population så kommer vårt estimerade medelvärde att närma sig populationens medelvärde.

När vi estimerar medelvärdet [\\(\\overline{x}\\)]{.math .inline} vet vi att detta skiljer sig mer eller mindre från populationsvärdet [\\(\\mu\_{X}\\)]{.math .inline}. Eftersom vi inte har tillgång till all information om populationen finns det slumpmässiga fel i våra estimat. Dessa kan vara mycket små, men existerar oavsett alltid.

Skillnaden mellan estimerade [\\(\\overline{x}\\)]{.math .inline} och populationens [\\(\\mu\_{X}\\)]{.math .inline} kan vi beskriva som [\\(\\overline{x} - \\mu\_{X}\\)]{.math .inline}. Så länge vi inte känner till populationsmedelvärdet [\\(\\mu\_{X}\\)]{.math .inline} kan vi inte beräkna denna differens exakt.

#### Standardfel

För att beräkna ett mått på osäkerheten i en punktskattning kan vi estimera det som kallas för *standardfel* (engelska *standard error*). Standardfelet beräknas på olika sätt beroende på vilket punktestimat vi studerar. Medelvärdets standardfel estimeras på följande sätt:

[\\(\\text{Standardfel } = \\frac{s\_{x}}{n\^{\\frac{1}{2}}} = \\frac{s\_{x}}{\\sqrt{n}} = \\sqrt{\\frac{s\_{x}\^{2}}{n}}\\)]{.math .inline} (7)

där [\\(s\_{x}\\)]{.math .inline} är estimerad standardavvikelse för urvalsobservationerna och [\\(n\\)]{.math .inline} är antal observationer i urvalet. Ekvation 7 visar olika sätt att skriva samma sak.

Ekvationen kan läsas som att ju mindre spridning vi har i observationerna (täljaren), desto mindre blir standardfelet. Eftersom vi har antal observationer [\\(n\\)]{.math .inline} i nämnaren innebär detta att standardfelet tenderar att minska ju fler observationer vi inkluderar i vårt urval.

Båda dessa saker är logiska. Ju mindre utspridda populationens värden är, desto troligare att vår beräkning träffar rätt. Ju mer vi vet om populationen (fler observationer), desto närmare kommer vår uppskattning av populationens medelvärde vara det korrekta medelvärdet i populationen.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-3"]=[  {    "id": "k2-5-3-001",    "name": "Uppgift 1",    "exercise": "Vad är ett <em>punktestimat</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "En beräkning av ett intervall inom vilket populationsvärdet förväntas ligga",          "Estimat av ett specifikt värde från populationen, som medelvärde eller varians",          "En metod för att mäta spridning i residualerna",          "En sannolikhetsfördelning för diskreta variabler"        ],        "correct": "Estimat av ett specifikt värde från populationen, som medelvärde eller varians"      }    },    "error": { "message": "Notera att 'punkt' syftar på att vi estimerar ett enda värde – till skillnad från ett intervall." },    "correct": { "message": "Rätt! Ett punktestimat är när vi beräknar ett specifikt värde, till exempel ett medelvärde eller en varians, som ett estimat av ett okänt populationsvärde. Det skiljer sig från intervallskattning där vi estimerar ett intervall." }  },  {    "id": "k2-5-3-002",    "name": "Uppgift 2",    "exercise": "Vad mäter <em>standardfelet</em> för ett punktestimat?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det exakta felet mellan estimat och populationsvärde",          "Osäkerheten (variationen) i ett punktestimat",          "Storleken på populationens standardavvikelse",          "Signifikansnivån för ett statistiskt test"        ],        "correct": "Osäkerheten (variationen) i ett punktestimat"      }    },    "error": { "message": "Vi kan aldrig beräkna det exakta felet utan att känna till populationsvärdet. Standardfel är ett mått på något annat – vad?" },    "correct": { "message": "Rätt! Standardfelet är ett mått på osäkerheten i ett punktestimat. Det berättar hur mycket estimatet kan förväntas variera vid upprepade urval från populationen." }  },  {    "id": "k2-5-3-003",    "name": "Uppgift 3",    "exercise": "Medelvärdets standardfel beräknas som \\[\\text{Standardfel} = \\frac{s_x}{\\sqrt{n}}\\] Vad händer med standardfelet om vi fördubblar antalet observationer \\(n\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Standardfelet halveras",          "Standardfelet minskar med faktorn \\(1/\\sqrt{2} \\approx 0{,}71\\)",          "Standardfelet fördubblas",          "Standardfelet förblir oförändrat"        ],        "correct": "Standardfelet minskar med faktorn \\(1/\\sqrt{2} \\approx 0{,}71\\)"      }    },    "error": { "message": "\\(n\\) är i nämnaren under ett kvadratrottecken. Vad händer med \\(1/\\sqrt{n}\\) när \\(n\\) dubbleras?" },    "correct": { "message": "Rätt! Om \\(n\\) dubbleras ersätts \\(\\sqrt{n}\\) av \\(\\sqrt{2n} = \\sqrt{2}\\cdot\\sqrt{n}\\), vilket innebär att standardfelet minskar med faktorn \\(1/\\sqrt{2} \\approx 0{,}71\\). För att halvera standardfelet behöver vi fyrdubbla antalet observationer." }  },  {    "id": "k2-5-3-004",    "name": "Uppgift 4",    "exercise": "Anta att vi har urvalsdata om livslängd för två grupper: grupp A med \\(\\overline{X}_A = 83{,}95\\) och grupp B med \\(\\overline{X}_B = 80{,}38\\), samt \\(s^2_A = 1{,}032\\), \\(s^2_B = 1{,}663\\) och \\(n_A = n_B = 290\\).<br><br>Beräkna z-värdet med formeln \\[z = \\frac{\\overline{X}_A - \\overline{X}_B}{\\left(\\frac{s^2_A}{n_A} + \\frac{s^2_B}{n_B}\\right)^{1/2}}\\] Avrunda till närmaste heltal.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "37" },    "answerformat": "Ange ett heltal",    "error": { "message": "Täljaren är \\(83{,}95 - 80{,}38 = 3{,}57\\). Nämnaren är kvadratroten av \\((1{,}032/290 + 1{,}663/290)\\). Beräkna nämnaren och dividera." },    "correct": { "message": "Rätt! \\(z \\approx \\frac{3{,}57}{\\sqrt{0{,}00356 + 0{,}00573}} = \\frac{3{,}57}{\\sqrt{0{,}00929}} \\approx \\frac{3{,}57}{0{,}0963} \\approx 37\\). Detta extremt höga z-värde indikerar att det är mycket osannolikt att de två gruppernas livslängder tillhör samma population." }  },  {    "id": "k2-5-3-005",    "name": "Uppgift 5",    "exercise": "Vilket påstående om medelvärdets estimator \\(\\overline{x} = \\sum x_i / n\\) är korrekt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Väntevärdet för estimatorn är alltid exakt lika med populationens medelvärde",          "Väntevärdet för estimatorn är definierat som populationens medelvärde: \\(E(\\overline{x}) = \\mu_X\\)",          "Estimatorn ger alltid ett fel på minst 5 %",          "Estimatorn kan inte användas för populationer med hög varians"        ],        "correct": "Väntevärdet för estimatorn är definierat som populationens medelvärde: \\(E(\\overline{x}) = \\mu_X\\)"      }    },    "error": { "message": "Väntevärdet är vad vi förväntar oss i genomsnitt vid oändligt många upprepade urval – inte vad ett enskilt urval ger." },    "correct": { "message": "Rätt! \\(E(\\overline{x}) = \\mu_X\\) innebär att medelvärdets estimator är väntevärdesriktig (engelska: unbiased). Givet oändligt många urval från populationen kommer genomsnittet av alla estimerade medelvärden att konvergera mot det sanna populationsmedelvärdet." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-3"></div>

## Statistisk analys 2 {#k2-5-4}

### Begrepp

- **Konfidensintervall:** Ett intervall mellan två värden inom vilka vi kan förvänta oss en specificerad andel av upprepade stickprov kommer innehålla populationsvärdet vi söker. Beräknas [\\(\\overline{x} \\pm z{\*s}\_{X}n\^{\\frac{1}{2}}\\)]{.math .inline}, där [\\(\\overline{x}\\)]{.math .inline} är medelvärde, [\\(z\\)]{.math .inline} är ett valt värde från standardnormalfördelningen, [\\(s\\)]{.math .inline} är estimerad standardavvikelse och [\\(n\\)]{.math .inline} är antal urvalsobservationer.

- **Nollhypotes och alternativhypotes:** [\\(H\_{0}\\)]{.math .inline} respektive [\\(H\_{1}\\)]{.math .inline}. Formuleras rörande förhållanden i populationen för statistiska test. I regel formuleras [\\(H\_{0}\\)]{.math .inline} som ett nollsamband/icke-korrelation. Därefter beräknas sannolikheten att [\\(H\_{0}\\)]{.math .inline} är falsk. Om inte det statistiska testet ger oss tillräckligt starka skäl att förkasta [\\(H\_{0}\\)]{.math .inline} godtar vi denna.

- **Signifikansnivå:** sannolikheten att vi förkastar [\\(H\_{0}\\)]{.math .inline} när [\\(H\_{0}\\)]{.math .inline} är sann. Kallas [\\(\\alpha\\)]{.math .inline}, alfavärde.

- **Konfidensnivå:** sannolikheten att vi inte förkastar [\\(H\_{0}\\)]{.math .inline} när den är sann.

- **P-värde:** Sannolikheten att [\\(H\_{0}\\)]{.math .inline} är sann.

### Teori

Vi fortsätter att introducera statistisk analys, först genom att beskriva hur vi kan uppskatta ett intervall av mer eller mindre sannolika utfall.

#### Konfidensintervall

I föregående [avsnitt 5.3](https://www.dropbox.com/scl/fi/12fiw2s4633qjt0d1s0zw/5-3-Statitsisk-analys-1.docx?rlkey=b4urprsp85hxcdp6jm3z9vaw7&dl=0) introducerade vi punktestimat. Ett annat sätt att studera en population är att *estimera intervall,* vilket även kallas för *intervallskattning* eller *intervallestimat.*

Ett särskilt intervall som ofta används i statistisk analys är *konfidensintervall*, vilket är ett intervall mellan två värden inom vilket en specificerad andel av upprepade stickprov kommer att innehålla populationsvärdet vi söker.

Vi bestämmer själva för vilken andel av urvalen vi vill estimera konfidensintervallet, till exempel 90 eller 95 %, där procentsatserna alltså anger för hur stor andel av urvalen som intervallet kommer att inkludera populationsvärdet. Procentsatserna kallas för *konfidensgrad*.

Vi är intresserade av populationens (okända) medelvärde [\\(\\mu\_{X}\\)]{.math .inline}. I stället för ett punktestimat, som ett medelvärde, vill vi nu i stället skatta ett konfidensintervall. Vår estimering beror på vilken fördelning populationen har. Vi utgår här från en variabel [\\(X\\)]{.math .inline} som följer en normalfördelning där populationen har medelvärdet [\\(\\mu\_{X}\\)]{.math .inline} och varians [\\(\\sigma\_{X}\\)]{.math .inline}. Konfidensintervallet kan då definieras som:

Konfidensintervall = [\\(\\overline{x} \\pm z\\frac{\\sigma\_{X}}{n\^{\\frac{1}{2}}}\\)]{.math .inline} (1)

där [\\(\\overline{x}\\)]{.math .inline} är estimerat medelvärde i en samling urvalsobservationer, n är antal observationer i urvalet och [\\(\\sigma\_{X}\\)]{.math .inline} är standardavvikelse i populationen.

Bokstaven [\\(z\\)]{.math .inline} representerar ett värde som vi hämtar från [standardnormalfördelningen](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0) beroende på vilken konfidensgrad vi väljer. Konfidensintervallet resulterar i ett värde under medelvärdet [\\(\\bar{x}\\)]{.math .inline} och ett värde över, vilket vi kan se eftersom vi har symbolen [\\(\\pm\\)]{.math .inline} efter medelvärdet. De två värdena vi beräknar kallas för konfidensintervallets nedre och övre gräns.

Eftersom populationens standardavvikelse [\\(\\sigma\\)]{.math .inline} i regel är okänd kan det estimerade konfidensintervallet skrivas:

Estimerat konfidensintervall =[\\(\\ \\ \\bar{x} \\pm z\\frac{s\_{x}}{n\^{\\frac{1}{2}}}\\)]{.math .inline} (2)

där [\\(s\\)]{.math .inline} representerar estimerad standardavvikelse.

#### Exempel

Om vi väljer konfidensgrad [\\(90\\ \\%\\)]{.math .inline} vill vi exkludera [\\(10\\%\\)]{.math .inline} av populationens värden: [\\(5\\%\\)]{.math .inline} i fördelningens övre svans (över medelvärdet) och [\\(5\\%\\)]{.math .inline} i fördelningens nedre svans (under medelvärdet). Detta ger oss [\\(z \\approx 1,64\\)]{.math .inline}5.

Om vi vill estimera ett [\\(95\\ \\%\\)]{.math .inline} konfidensintervall har vi [\\(z \\approx 1,96\\)]{.math .inline}. För konfidensgrad [\\(99\\ \\%\\)]{.math .inline} har vi [\\(z \\approx 2,58\\)]{.math .inline}. Se figur 2 i [avsnitt 5.2](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0). Det z-värde vi ska använda sätter vi in i ekvation 2.

Säg som exempel nu att vi har ett dataurval på [\\(n = 28\\)]{.math .inline} observationer och estimerar medelvärdet [\\(\\bar{x} = 13\\)]{.math .inline} samt standardavvikelse [\\(s\_{x} = 3,7\\)]{.math .inline}. Vi väljer konfidensgrad [\\(90\\%\\)]{.math .inline}, varför [\\(z = 1,645\\)]{.math .inline}. Detta ger följande gränser för konfidensintervallet:

[\\(\\begin{matrix} & \\bar{x} + z\\frac{s\_{x}}{n\^{\\frac{1}{2}}} = 13 + 1,645\*\\frac{3,7}{\\sqrt{28}} \\approx 14,15 \\\\ & \\bar{x} - z\\frac{s\_{x}}{n\^{\\frac{1}{2}}} = 13 - 1,645\*\\frac{3,7}{\\sqrt{28}} \\approx 11,85 \\end{matrix}\\)]{.math .inline} (3)

Vårt konfidensintervall är [\\(11,85 \< \\mu\_{X} \< 14,15\\)]{.math .inline}. Detta är ett 90% konfidensintervall, vilket betyder att om vi upprepade denna procedur många gånger, skulle 90% av intervallen innehålla populationens medelvärde. Detta betyder inte att det finns 90% sannolikhet att [\\(\\mu\_{X}\\)]{.math .inline} ligger i vårt specifika intervall (en vanlig missuppfattning).

#### Exempel med kvinnor och mäns medellivslängd

I föregående [avsnitt 5.1](https://www.dropbox.com/scl/fi/12fiw2s4633qjt0d1s0zw/5-3-Statitsisk-analys-1.docx?rlkey=b4urprsp85hxcdp6jm3z9vaw7&dl=0) beräknade vi sannolikheten att två estimerade medelvärden kom från samma population, genom att räkna på differensen mellan genomsnittlig livslängd för män respektive kvinnor.

Konfidensintervallet för differensen mellan de estimerade medelvärdena för dessa två populationer kan vi estimera med följande ekvation:

[\\(\\left( {\\bar{X}}\_{1} - {\\bar{X}}\_{2} \\right) \\pm z\*\\sqrt{\\frac{s\_{X\_{1}}\^{2}}{n\_{1}} + \\frac{s\_{X\_{2}}\^{2}}{n\_{2}}}\\)]{.math .inline} (4)

där [\\({\\overline{X}}\_{1}\\)]{.math .inline} och [\\({\\bar{X}}\_{2}\\)]{.math .inline} är de två estimerade medelvärdena för män och kvinnor, [\\(z\\)]{.math .inline} är värdet från standardiserade normalfördelningens kumulativa fördelningsfunktion [\\(F\\)]{.math .inline}, [\\(s\^{2}\\)]{.math .inline} är estimerad varians (standardavvikelse i kvadrat) och [\\(n\\)]{.math .inline} är antal observationer i respektive urval. Vi får nu:

[\\({\\overline{X}}\_{män} = 80,38\\)]{.math .inline} [\\({\\overline{X}}\_{kvinnor} = 83,95\\)]{.math .inline} (5)

[\\(s\_{män}\^{2} = 1,663\\)]{.math .inline} [\\(s\_{kvinnor}\^{2} = 1,032\\)]{.math .inline}

[\\(n\_{män} = 290\\)]{.math .inline} [\\(n\_{kvinnor} = 290\\)]{.math .inline}

Vi väljer konfidensgrad [\\(95\\ \\%\\)]{.math .inline}, vilket ger [\\(z = 1,96\\)]{.math .inline}. Konfidensintervallets nedre och övre gräns blir:

[\\(\\begin{matrix} \\text{Konfidensintervallets nedre gräns:} & \\ (80,38 - 83,95) + 1,96\\sqrt{\\frac{1,032}{290} + \\frac{1,663}{290}} \\approx 3,76 \\\\ \\text{Konfidensintervallets }\\text{övre }\\text{gräns:} & \\ (80,38 - 83,95) - 1,96\\sqrt{\\frac{1,032}{290} + \\frac{1,663}{290}} \\approx 3,38 \\end{matrix}\\)]{.math .inline} (6)

Estimatet indikerar att vid upprepade urval (stickprov) från samma population kommer differensen mellan de två populationerna i [\\(95\\ \\%\\)]{.math .inline} av fallen vara [\\(3,38 \< \\left( \\mu\_{\\text{kvinnor}\\ } - \\mu\_{\\text{män}\\ } \\right) \< 3,76\\)]{.math .inline}. Detta indikerar alltså att kvinnor i genomsnitt lever mellan 3,38 och 3,76 år längre än män.

Detta gäller endast om de upprepade urvalen verkligen kommer från samma population. Om vi till exempel upprepade gånger under en tioårsperiod mäter medellivslängden för män och kvinnor så kommer befolkningen (populationen) och deras livslängd också att förändras.

#### Hypotesprövning

När vi studerar mönster i data och samvariation kan vi göra detta genom att pröva *hypoteser* med *statistiska test*. En vetenskaplig hypotes måste vara *falsifierbar*, vilket betyder att den måste kunna motbevisas med fakta.

Vi formulerar en hypotes och använder ett statistiskt test för att pröva sannolikheten att hypotesen är falsk. Sannolikheten att en hypotes är falsk kan inte vara under 0 eller över 100 %.

Statistiska test använder en *nollhypotes* och en *alternativhypotes*. Nollhypotes betecknas ofta [\\(H\_{0}\\)]{.math .inline} och alternativhypotesen [\\(H\_{1}\\)]{.math .inline}. De två hypoteserna formuleras på ett sådant sätt att de är exklusiva. Båda hypoteserna kan inte per definition vara sanna (eller falska) samtidigt.

Vi formulerar våra hypoteser utifrån den samvariation vi ska studera. Nollhypotesen formuleras i regel som att det inte finns någon samvariation, ett icke-samband. Nollhypotesen beskriver den situation vi måste acceptera tills vi har visat goda skäl att tro något annat.

Säg till exempel att vi utför ett experiment och studerar hur en medicin samvarierar med sjukdomssymptom hos en grupp patienter, fördelade på behandlingsgrupp (får medicin) och kontrollgrupp (får inte medicin).

Vår teori är att medicinen kommer att minska patienternas sjukdomstillstånd. Om vi efter behandlingen kan se att sjukdomstillstånden i behandlingsgruppen är mindre än sjukdomstillstånden i kontrollgruppen tolkar vi detta som en effekt av medicinen.

När vi ska översätta detta till en nollhypotes och en alternativhypotes formulerar vi nollhypotesen som en ickerelation mellan orsak och verkan. Om medicinen inte har någon effekt på sjukdomen kommer behandlingsgruppen vara lika sjuk som kontrollgruppen:

[\\(H\_{0}\\)]{.math .inline}: [\\(\\text{sjukdom}\_{\\text{behandling}} \\geq \\text{sjukdom}\_{\\text{kontroll}}\\)]{.math .inline} (7)

Alternativhypotesen [\\(H\_{1}\\)]{.math .inline} blir i detta fall den alternativa situationen där sjukdomstillståndet är mindre i behandlingsgruppen än i kontrollgruppen (vilket enligt vår teori beror på medicinen):

[\\(H\_{1}:\\text{sjukdom}\_{\\text{behandling}} \< \\text{sjukdom}\_{\\text{kontroll}}\\)]{.math .inline} (8)

Vi är intresserade av ett orsakssamband, vilket vi studerar genom att observera samvariation mellan medicin och symptom. Orsakssambandet är en tolkning vi lägger till utifrån den samvariation vi kan observera. Hypoteserna formuleras inte rörande orsakssambandet utan för observerbara skillnader.

Observera även att hypoteserna rör populationen vi är intresserade av -- inte urvalsdatan. I detta hypotetiska exempel kan vi tänka oss att populationen är alla patienter i hela världen med samma sjukdomssymptom.

Säg att vi finner att behandlingsgruppen har 5 % mindre sjukdom. Nästa steg är att då estimera hur säkra vi kan vara på att denna skillnad är tillräcklig för att vi ska betrakta vår nollhypotes ([\\(H\_{0}\\)]{.math .inline}) som falsk.

#### Hypotestest i regressionsanalys

Hypotestest användas ofta i samband med regressionsanalys. Säg att vi ska studera om variationer i ett fenomen [\\(X\\)]{.math .inline} orsakar en viss typ av variationer i fenomen [\\(Y\\)]{.math .inline}, vilket vi gör med hjälp av regressionsmodellen [\\(Y = a + bX + u\\)]{.math .inline} där [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline} är variabler, [\\(u\\)]{.math .inline} är feltermen och [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} är koefficienterna som vi använder minstakvadratmetoden för att estimera.

Vi har anledning att tro att [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} samvarierar och att [\\(b \\neq 0\\)]{.math .inline}. Utifrån detta kan vi formulera en nollhypotes i form av en ickerelation mellan variablerna. En ickerelation mellan X och Y i vår regressionsmodell innebär att [\\(b = 0\\)]{.math .inline}, varför vår nollhypotes och alternativhypotes blir:

[\\(H\_{0}:b = 0\\)]{.math .inline} (9)

[\\(H\_{1}:b \\neq 0\\)]{.math .inline}

Nollhypotesen och alternativhypotesen täcker därigenom alla möjliga alternativ: [\\(b\\)]{.math .inline} är antingen lika med 0 eller inte lika med 0.

Vi är intresserade av att estimera samvariationen mellan [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} och att estimera sannolikheten att den samvariation vi finner även kunde ha uppstått genom slump.

Vi prövar våra hypoteser genom att estimera [\\(\\widehat{b}\\)]{.math .inline} och därefter beräkna sannolikheten att vi skulle ha fått det resultat vi får, givet att [\\(H\_{0}\\)]{.math .inline} är sann egentligen (det vill säga att vi i populationen har [\\(b = 0\\)]{.math .inline}).

Sannolikheten för detta beror bland annat på vilken sannolikhetsfördelning vi jämför mot, till exempel standardnormalfördelningen, och vilken varians vi kan observera i våra data.

#### Signifikans, alfa och p-värde

I klassisk statistik brukar det beskrivas som att vi vid statistiska test bör välja i förväg med vilken sannolikhet vi vill riskera att förkasta en sann [\\(H\_{0}\\)]{.math .inline}. Detta kallas för att välja *signifikansnivå* eller *alfavärde* (engelska *alpha value*) och betecknas [\\(\\alpha\\)]{.math .inline} (grekiska bokstaven alfa).

För [\\(10\\%\\)]{.math .inline} signifikansnivå, [\\(\\alpha = 0,1 = 10\\%\\)]{.math .inline}. Ofta används [\\(\\alpha = 0,05\\)]{.math .inline}. Ofta används även begreppet *konfidensnivå*, vilket beräknas genom att ta:

Konfidensnivå = [\\(1 - \\alpha\\)]{.math .inline} (10)

För [\\(\\alpha = 0,05\\)]{.math .inline} har vi [\\(1 - \\alpha = 1 - 0,05 = \\ 0,95 = 95\\ \\%\\)]{.math .inline}. De två begreppen kan sammanfattas som:

- Signifikansnivå är sannolikheten att vi förkastar nollhypotesen när nollhypotesen är sann.

- Konfidensnivå är sannolikheten att vi [inte]{.underline} förkastar nollhypotesen när den är sann.

Sannolikheten att [\\(H\_{0}\\)]{.math .inline} är sann brukar benämnas med det som kallas för [\\(p\\)]{.math .inline} värde. P-värde ger sannolikheten att vi hade fått ett lika extremt värde i ett statistiskt test givet att [\\(H\_{0}\\)]{.math .inline} är falsk.

Medan signifikansnivå och konfidensnivå i regel uppges i avrundade tal, till exempel 95 %, beräknas p-värde exakt genom det statistiska testet.

Statistiskt test med kvinnor och mäns livslängd

Låt oss illustrera med ett exempel. Ovan estimerade vi sannolikheten att livslängden för män och kvinnor i Sveriges kommuner skiljer sig genom att beräkna följande z-värde:

[\\(z = \\frac{{\\bar{X}}\_{\\text{kvinnor}\\ } - {\\bar{X}}\_{\\text{män}\\ }}{\\left( \\frac{s\_{man}\^{2}}{n\_{\\text{man}\\ }} + \\frac{s\_{\\text{kvinnor}\\ }\^{2}}{n\_{\\text{kvinnor}\\ }} \\right)\^{\\frac{1}{2}}} \\approx \\frac{83,95 - 80,38}{\\left( \\frac{1,663}{290} + \\frac{1,032}{290} \\right)\^{\\frac{1}{2}}} \\approx 37,045\\)]{.math .inline} (11)

Låt oss ställa upp detta som ett statistiskt test. Vi har en teori om att livslängd skiljer sig mellan män och kvinnor. Vi formulerar vår nollhypotes som att det inte finns någon skillnad:

[\\(\\begin{matrix} & H\_{0}:\\mu\_{\\text{män}\\ } = \\mu\_{\\text{kvinnor}\\ } \\\\ & H\_{1}:\\mu\_{\\text{män}\\ } \\neq \\mu\_{\\text{kvinnor}\\ } \\end{matrix}\\)]{.math .inline} (12)

För att testa trovärdigheten i hypotesen bestämmer vi signifikansnivå [\\(5\\%\\)]{.math .inline}, det vill säga ([\\(2,5\\%\\)]{.math .inline} från vardera sida av fördelningen, och beräknar [\\(z\\)]{.math .inline}-värdet i ekvation 11, alltså [\\(z = 37,045\\)]{.math .inline}. Detta beräknade [\\(z\\)]{.math .inline}-värde jämför vi mot standardnormalfördelningen.

Statistiska test kan vara ensidiga eller tvåsidiga. Nollhypotesen är i detta fall formulerad som att både positiv och negativ differens kan innebära att vi har skäl att förkasta [\\(H\_{0}\\)]{.math .inline} som falsk. När vi jämför mot standardnormalfördelningen innebär det att både negativa som positiva avvikelser från medelvärdet kan ge oss skäl att förkasta [\\(H\_{0}\\)]{.math .inline}. Det vill säga, vårt beräknade z-värde skulle även kunna ha varit negativt.

Om vårt beräknade z-värde är längre från standardnormalfördelningens medelvärde jämfört med 47,5 % av fördelningen så kallas detta för att resultat är *statistiskt signifikant*. Vi kan i så fall avfärda [\\(H\_{0}\\)]{.math .inline} som falsk för 5 % signifikansnivå. För att veta exakt för vilket z-värde som 47,5 % av fördelningen är under brukar beräknade z-värden jämföras mot kritiska z-värden, vilket skrivs [\\(z\^{\*}\\)]{.math .inline}.

För 5 % nivå har vi [\\(z\^{\*} = 1,96\\)]{.math .inline} (se figur 2 i [avsnitt 5.2](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0)). Alltså, om vårt beräknade [\\(z\\)]{.math .inline}-värde är högre än detta bör vi förkasta [\\(H\_{0}\\)]{.math .inline} som falsk. Som vi noterade ovan är vårt beräknade z -värde 37,045, vilket är så pass högt att det inte syns i diagrammet. Resultatet från vårt statistiska test indikerar med god marginal att [\\(H\_{0}\\)]{.math .inline} är falsk.

### Video

Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-4"]=[  {    "id": "k2-5-4-001",    "name": "Uppgift 1",    "exercise": "Vad innebär ett 95 %-konfidensintervall korrekt tolkat?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det finns 95 % sannolikhet att populationsvärdet ligger i just det beräknade intervallet",          "Vid upprepade urval kommer 95 % av de beräknade intervallen att innehålla populationsvärdet",          "95 % av alla observationer i urvalet ligger inom intervallet",          "Populationsvärdet är exakt lika med intervallets mittpunkt i 95 % av fallen"        ],        "correct": "Vid upprepade urval kommer 95 % av de beräknade intervallen att innehålla populationsvärdet"      }    },    "error": { "message": "En vanlig missuppfattning är att det är 95 % sannolikhet att det specifika intervallet innehåller populationsvärdet. Konfidensintervall tolkas i termer av upprepade urval." },    "correct": { "message": "Rätt! Korrekt tolkning: om vi upprepade gånger drog urval och beräknade konfidensintervall på samma sätt, skulle 95 % av dessa intervall innehålla det sanna populationsvärdet. Det specifika intervallet vi beräknat antingen innehåller det sanna värdet eller inte." }  },  {    "id": "k2-5-4-002",    "name": "Uppgift 2",    "exercise": "I ett dataurval med \\(n = 28\\) observationer estimeras \\(\\overline{x} = 13\\) och \\(s_x = 3{,}7\\). För ett 90 %-konfidensintervall används \\(z = 1{,}645\\). Beräkna konfidensintervallets <em>övre gräns</em> med formeln \\[\\overline{x} + z\\frac{s_x}{\\sqrt{n}}\\] Avrunda till två decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "14.15" },    "answerformat": "Ange svaret med två decimaler, t.ex. 14.15",    "error": { "message": "Beräkna \\(1{,}645 \\times 3{,}7 / \\sqrt{28}\\) och addera till 13. \\(\\sqrt{28} \\approx 5{,}292\\)." },    "correct": { "message": "Rätt! \\(13 + 1{,}645 \\times \\frac{3{,}7}{\\sqrt{28}} \\approx 13 + 1{,}645 \\times 0{,}699 \\approx 13 + 1{,}15 \\approx 14{,}15\\). Det 90%-konfidensintervallet är alltså \\(11{,}85 < \\mu_X < 14{,}15\\)." }  },  {    "id": "k2-5-4-003",    "name": "Uppgift 3",    "exercise": "Vad är sambandet mellan signifikansnivå \\(\\alpha\\) och konfidensnivå?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Konfidensnivå = \\(\\alpha\\)",          "Konfidensnivå = \\(1 - \\alpha\\)",          "Konfidensnivå = \\(\\alpha / 2\\)",          "Konfidensnivå = \\(1 + \\alpha\\)"        ],        "correct": "Konfidensnivå = \\(1 - \\alpha\\)"      }    },    "error": { "message": "Om signifikansnivån är sannolikheten att förkasta en sann \\(H_0\\), vad är då konfidensnivån?" },    "correct": { "message": "Rätt! Konfidensnivå = \\(1 - \\alpha\\). Exempel: för \\(\\alpha = 0{,}05\\) är konfidensnivån \\(1 - 0{,}05 = 0{,}95 = 95\\)%. Signifikansnivån är risken att göra fel, konfidensnivån är sannolikheten att inte göra fel." }  },  {    "id": "k2-5-4-004",    "name": "Uppgift 4",    "exercise": "I hypotesprövning för regressionsanalys med modellen \\(Y = a + bX + u\\) — vad är den vanligaste nollhypotesen för lutningskoefficienten \\(b\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(H_0: b = 1\\) (enhetlig effekt)",          "\\(H_0: b > 0\\) (positiv effekt)",          "\\(H_0: b = 0\\) (ingen samvariation)",          "\\(H_0: b < 0\\) (negativ effekt)"        ],        "correct": "\\(H_0: b = 0\\) (ingen samvariation)"      }    },    "error": { "message": "Nollhypotesen formuleras vanligtvis som ett icke-samband. Vad innebär det om lutningskoefficienten i en linjär regressionsmodell är noll?" },    "correct": { "message": "Rätt! \\(H_0: b = 0\\) och \\(H_1: b \\neq 0\\) — dvs. standardinställningen i de flesta statistikprogram. Om \\(b = 0\\) i populationen finns ingen linjär samvariation mellan \\(X\\) och \\(Y\\). Nollhypotesen formuleras som icke-samband, och vi testar om vi har tillräckliga skäl att förkasta den." }  },  {    "id": "k2-5-4-005",    "name": "Uppgift 5",    "exercise": "Vi beräknar z-värdet för skillnaden i medellivslängd mellan männen och kvinnor i Sveriges kommuner och får \\(z \\approx 37{,}045\\). Vid ett tvåsidigt test med signifikansnivå 5 % är det kritiska z-värdet \\(z^* = 1{,}96\\). Vad är slutsatsen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Vi kan inte förkasta \\(H_0\\) eftersom z-värdet är positivt",          "Vi förkastar \\(H_0\\) eftersom \\(|z| = 37{,}045 > z^* = 1{,}96\\)",          "Vi accepterar \\(H_0\\) eftersom z-värdet är för högt för att vara trovärdigt",          "Testet är ogiltigt eftersom z-värdet är utanför normalfördelningens domän"        ],        "correct": "Vi förkastar \\(H_0\\) eftersom \\(|z| = 37{,}045 > z^* = 1{,}96\\)"      }    },    "error": { "message": "För att förkasta \\(H_0\\) vid ett tvåsidigt test krävs att \\(|z| > z^*\\). Jämför de två värdena." },    "correct": { "message": "Rätt! Eftersom \\(|z| = 37{,}045 \\gg 1{,}96 = z^*\\) förkastar vi \\(H_0: \\mu_{\\text{män}} = \\mu_{\\text{kvinnor}}\\) med god marginal. Resultatet är statistiskt signifikant och indikerar att det finns en verklig skillnad i medellivslängd mellan könen." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-4"></div>

## Regressionsanalys med sannolikhet {#k2-5-5}

### Begrepp

- **T-fördelningen:** Sannolikhetsfördelning som liknar standardnormalfördelningen. Används ofta för statistiska test rörande koefficienterna i en regressionsmodell. T-fördelningens form beror på antal frihetsgrader.

- **T-test:** Statistiskt test som använder t-fördelningen.

- **Standardfel för regressionsmodellens koefficienter:** Mått på osäkerheten i regressionsmodellens estimerade koefficienter.

- **Statistiskt test för regressionsmodellens koefficienter:** Utgår ofta (men ej nödvändigtvis) från nollhypotesen [\\(H\_{0}:b = 0\\)]{.math .inline} för populationens koefficient [\\(b\\)]{.math .inline}. Beräkna t-värde med [\\(t = \\frac{\\widehat{b}}{s\_{\\widehat{b}}}\\)]{.math .inline} där [\\(s\_{\\widehat{b}}\\)]{.math .inline} är estimerat standardfel för estimerade koefficienten. Jämför beräknade [\\(t\\)]{.math .inline} med kritiska [\\(t\^{\*}\\)]{.math .inline} i t-fördelningen, beroende på vald signifikansnivå.

- **Konfidensintervall för regressionsmodellens koefficienter:** Kan beräknas som [\\(\\widehat{b} \\pm t\_{k,\\alpha}\*{\\widehat{s}}\_{\\widehat{b}}\\)]{.math .inline}, där [\\(t\_{k,\\alpha}\\)]{.math .inline} beror på frihetsgrader [\\(k\\)]{.math .inline} och signifikansnivå [\\(\\alpha\\)]{.math .inline}. [\\(\\widehat{s}\\)]{.math .inline} är uppskattat standardfel för koefficient [\\(\\widehat{b}\\)]{.math .inline}.

- **Statistisk signifikant:** Ett resultat är statistiskt signifikant om det statistiska testet indikerar att vi, utifrån vald signifikansnivå, bör förkasta nollhypotesen [\\(H\_{0}\\)]{.math .inline}. Om testet indikerar att vi inte bör förkasta [\\(H\_{0}\\)]{.math .inline} säger man att resultatet inte är statistiskt signifikant.

### Teori

I detta avsnitt ska vi kombinera vad vi lärt oss om statistisk analys med regressionsanalys.

#### Med urvalsdata estimerar vi regressionsmodellen

Med hjälp av urvalsdata vill vi estimera koefficienterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} en regressionsmodell som existerar i en population:

[\\(Y = a + bX + V\\)]{.math .inline} (1)

där *Y* och *X* är variabler och *V* är feltermen. Vi vill finna värden som är så nära som möjligt populationsvärdena.

Figur 1 illustrerar detta med påhittade data för två normalfördelade variabler [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline}. Inspirerat av Robert Östlings undervisningsmaterial:\
www.sites.google.com/view/robertostling/home/teaching

De grå prickarna är populationen. I populationen existerar det en positiv samvariation mellan [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline}. Den heldragna svarta linjen är regressionslinjen för populationen.

Från populationen har vi tagit två slumpmässiga urval på några observationer, markerade som "urval 1" och "urval 2", och estimerat en regressionslinje per urval. Regressionslinjen för urval 1 är den streckade linjen med negativ lutning. Regressionslinjen för urval 2 har en positiv lutning. Inget av de två urvalen ger en korrekt bild av populationens samvariation.

Bilden illustrerar hur vi i praktiken arbetar med analys när vi har tillgång till data. I regel har vi inte populationsdata. Ibland har vi en stor mängd observationer och många variabler. Men ofta vill vi även uttala oss om vad som kommer hända i framtiden -- vilket vi per definition inte har data på än. För att detta arbete ska bli så bra som möjligt behöver vi förstå statistisk analys och teorierna bakom statistiska test.

**Figur 1: Samvariationen i population och urval**![En bild som visar diagram, karta, linje, skärmbild Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-5%20-%20Regressionsanalys%20med%20sannolikhet/img/k2-5-5-image1.png){style="width:4.80821in;height:3.03269in"}

Förklaring: De grå prickarna är populationen. I populationen finns en positiv samvariation mellan [\\(Y\\)]{.math .inline} och [\\(X\\)]{.math .inline}, vilket illustreras av den heldragna svarta linjen. Från populationen har vi tagit två mindre slumpmässiga urval, vars samvariation illustreras med den streckade och den prickiga linjen.

#### Hypoteser för vår regressionsmodell

Nu ska vi gå igenom hur vi kan formulera statistiska test och pröva hypoteser för koefficienterna i regressionsmodellen i ekvation 1. För de båda koefficienterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} kan vi ställa upp varsitt statistiskt test och formulera varsin noll- samt alternativhypotes.

Vi fokuserar här på lutningskoefficienten [\\(b\\)]{.math .inline}. Ofta är vi mer intresserade av [\\(b\\)]{.math .inline} än [\\(a\\)]{.math .inline}, eftersom vårt [\\(b\\)]{.math .inline} beskriver den huruvida det finns någon samvariation mellan variablerna [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}.

Ett vanligt sätt att formulera nollhypotesen för [\\(b\\)]{.math .inline} är att testa om det förekommer någon samvariation överhuvudtaget mellan variablerna, positiv eller negativ. Det vill säga om [\\(b\\)]{.math .inline} (i populationen) är skild från noll:

[\\(H\_{0}:b = 0\\)]{.math .inline} (2)

[\\(H\_{1}:b \\neq 0\\)]{.math .inline}

Proceduren går till så att vi först estimerar regressionsmodellen och koefficienterna, [\\(\\widehat{a}\\ \\text{och}\\ \\widehat{b}\\)]{.math .inline}, och därefter utför ett statistiskt test. Det vi beräknar då är sannolikheten för att nollhypotesen är falsk och bör förkastas. Ett annat sätt att beskriva detta är att vi beräknar sannolikheten för om vårt resultat (estimerade [\\(\\widehat{b}\\)]{.math .inline}) lika gärna kunde ha uppstått av slump.

#### T-fördelningen

För att pröva sannolikheten för att [\\(b = 0\\)]{.math .inline} ska vi använda en sannolikhetsfördelning som kallas för t-fördelningen, även kallad [Student t:s fördelning](https://sv.wikipedia.org/wiki/Students_t-f%C3%B6rdelning). T-fördelningen liknar standardnormalfördelningen.

Användningen av t-fördelningen bygger på hur observationerna fördelar sig kring regressionslinjen. I vår regressionsmodell [\\(Y = a + bX + V\\)]{.math .inline} har vi feltermen [\\(V\\)]{.math .inline}, vilket representerar den vertikala skillnaden i populationen mellan varje observation och regressionslinjen. Estimerade versionen av feltermerna kallas för residualerna [\\(\\widehat{V}\\)]{.math .inline}. Ett vanligt antagande vid regressionsanalys är att feltermerna följer en normalfördelning.

Detta innebär inte nödvändigtvis att alla urval vi använder för regression följer en normalfördelning. För att kontrollera detta kan vi studera hur residualerna är fördelade, men det ryms inte här. Vi antar lite förenklat att residualerna ungefär följer en normalfördelning, att residualerna är *approximativt normalfördelade*.

Varför antar vi normalfördelning? Många statistiska test (inkl. t-test) bygger på att residualerna är normalfördelade. Men i praktiken: Med tillräckligt stora urval [\\((n \> 30)\\)]{.math .inline} fungerar testen ändå bra även om fördelningen inte är perfekt normal ([länk](https://en.wikipedia.org/wiki/Central_limit_theorem) för vidare läsning). Vi kan kontrollera antagandet genom att jämföra residualerna till exempel i diagram. Om residualerna är mycket icke-normala finns andra metoder, vilket inte ryms att beskriva här. Här antar vi normalfördelning. I verklig forskning måste det kontrolleras.

För att utföra ett statistiskt test och pröva våra hypoteser om lutningskoefficient [\\(b\\)]{.math .inline} säger vi därför här att [\\(b\\)]{.math .inline} följer det som kallas för t-fördelningen. T-fördelningen är en sannolikhetsfördelning som liknar standardnormalfördelningen. T-fördelningens form beror på antal *frihetsgrader*.

[Frihetsgrader](https://www.statistiskordbok.se/ord/frihetsgrader/) syftar inom statistik på antal parametrar i en beräkning som tillåts variera. Vår regressionsmodell i ekvation 1 har två koefficienter vi vill estimera och sedan utföra ett t-test för. Antal frihetsgrader är i detta fall lika med antal observationer minus de två koefficienterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline}: [\\(N - 2\\)]{.math .inline}.

Har vi tillräckligt många frihetsgrader blir t-fördelningen identisk med standardnormalfördelningen. Figur 2 illustrerar två exempel på t-fördelningar med olika antal frihetsgrader: 2 respektive 1 000 frihetsgrader. Övre diagrammet visar täthetsfunktionen. Nedre diagrammet visar kumulativa sannolikhetsfunktionen. Jämför standardnormalfördelningen i [avsnitt 5.2](https://www.dropbox.com/scl/fi/wi8c30n2yna36a7zbiyoh/5-2-Kontinuerliga-sannolikhetsf-rdelningar.docx?rlkey=rmkxixrrun7q0rqeg82lk2kky&dl=0).

#### T-test

Med hjälp av t-fördelningen kan vi nu utföra ett statistiskt test som kallas för t-test. För vårt statistiska test behöver vi även välja signifikansnivå, till exempel [\\(\\alpha = 0,05\\)]{.math .inline} (jämför [avsnitt 5.4](https://www.dropbox.com/scl/fi/zgjhgsqmkmnetk8xr2be1/5-4-Statistisk-analys-2.docx?rlkey=i7dzeoowrf1rh2oritsv8fl5n&dl=0)). I det övre diagrammet i figur 2 är avstånden i standardavvikelser från medelvärdet 0 markerade för 90 respektive 95 % av fördelningen.

T-fördelningen är, liksom normalfördelningen, jämnt fördelad kring medelvärdet. Vi kan använda både en- och tvåsidiga statistiska test. Det vanligaste vid regressionsanalys är tvåsidiga test. Som vår nollhypotesen är formulerad använder vi ett tvåsidigt test. Både negativa och positiva avvikelser i estimerade [\\(\\widehat{b}\\)]{.math .inline} kan därför resultera i att vi förkastar nollhypotesen [\\(H\_{0}\\)]{.math .inline}.

**Figur 2: T-fördelningens täthetsfunktion och kumulativa sannolikhetsfunktion.\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-5%20-%20Regressionsanalys%20med%20sannolikhet/img/k2-5-5-image2.png){style="width:4.82292in;height:6.43056in"}

Förklaring: Diagrammen visar tre exempel på t-fördelningen med olika antal frihetsgrader: 2 och 1 000. Övre diagrammet visar täthetsfunktionen, där båda fördelningarna har medelvärdet 0. I det övre diagrammet är de avstånd från medelvärdet som täcker 90 respektive 95 % av t(2)-fördelningen. Nedre diagrammet visar kumulativa sannolikhetsfunktionen för de två t-fördelningarna.

#### Statistiskt test för [\\(b\\)]{.math .inline}

För att pröva hypoteserna [\\(H\_{0}:b = 0\\)]{.math .inline} och [\\(H\_{1}:b \\neq 0\\)]{.math .inline} kan vi, utifrån antaganden om feltermernas fördelning, använda ett tvåsidigt t-test där t -värdet skattas med följande ekvation:

[\\(t = \\frac{\\widehat{b} - b\_{0}}{s\_{\\widehat{b}}}\\)]{.math .inline} (3)

I täljaren har vi [\\(b\_{0}\\)]{.math .inline}, vilket är det hypotetiska värde som vi prövar [\\(b\\)]{.math .inline} mot utifrån vår nollhypotes, det vill säga [\\(b\_{0} = 0\\)]{.math .inline}. Vi kan därför stryka [\\(b\_{0}\\)]{.math .inline} i ekvation 3 och skriva:

[\\(t = \\frac{\\widehat{b} - b\_{0}}{s\_{\\widehat{b}}} = \\frac{\\widehat{b}}{s\_{\\widehat{b}}}\\)]{.math .inline} (4)

I nämnaren har vi [\\(s\_{\\widehat{b}}\\)]{.math .inline}, estimerat standardfel för [\\(\\widehat{b}\\)]{.math .inline}. Detta innebär att för att utföra detta statistiska test behöver vi veta standardfel (eller variansen) för estimatorn [\\(\\widehat{b}\\)]{.math .inline}, vilket är en uppskattning av osäkerheten i vårt estimat. Variansen för estimatorn [\\(\\widehat{b}\\)]{.math .inline} kan definieras som:

[\\(var(\\widehat{b}) = \\frac{\\sigma\_{V}\^{2}}{\\sum\_{i}\^{}\\left( x\_{i} - \\bar{x} \\right)\^{2}\\mspace{2mu}}\\)]{.math .inline} (5)

I nämnaren har vi observationerna för variabel [\\(x\\)]{.math .inline}. Feltermernas varians i populationen [\\(\\sigma\_{V}\^{2}\\)]{.math .inline} är i regel okänd men vi kan estimera denna med våra urvalsdata som *medelkvadratsumman för residualerna* (MSR), vilket vi kan skriva som [\\({\\widehat{\\sigma}}\_{\\widehat{V}}\^{2}\\)]{.math .inline} eller [\\({\\widehat{s}}\_{\\widehat{V}}\^{2}\\)]{.math .inline} :

[\\(MSR = {\\widehat{\\sigma}}\_{\\widehat{V}}\^{2} = {\\widehat{s}}\_{\\widehat{V}}\^{2} = \\frac{\\sum\_{i}\^{}{\\widehat{v}}\_{i}\^{2}\\mspace{2mu}}{n - p} = \\frac{\\sum\_{}\^{}\\left( y\_{i} - {\\widehat{y}}\_{i} \\right)\^{2}}{n - p}\\)]{.math .inline} (6)

där [\\(n - p\\)]{.math .inline} är antal frihetsgrader: [\\(n\\)]{.math .inline} är antal observationer och [\\(p\\)]{.math .inline} är antal koefficienter (parametrar i vår beräkning). I detta fall har vi två, [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline}, vilket ger [\\(p = 2\\)]{.math .inline}.

Om vi byter ut populationsvärdet [\\(\\sigma\_{V}\^{2}\\)]{.math .inline} i definitionen för [\\(var(\\widehat{b})\\)]{.math .inline} mot estimerade [\\({\\widehat{s}}\_{\\widehat{V}}\^{2}\\)]{.math .inline} får vi estimerade variansen för estimatorn [\\(\\widehat{b}\\)]{.math .inline}:

[\\(var\\left( \\widehat{b} \\right) = {\\widehat{s}}\_{\\widehat{V}}\^{2}\\frac{1}{\\sum\_{i}\^{}\\left( x\_{i} - \\bar{x} \\right)\^{2}\\mspace{2mu}} = \\frac{\\sum\_{}\^{}\\left( y\_{i} - {\\widehat{y}}\_{i} \\right)\^{2}}{(n - p)\\sum\_{}\^{}\\left( x\_{i} - \\bar{x} \\right)\^{2}}\\)]{.math .inline} (7)

Kvadratroten av detta är standardfelet för [\\(\\widehat{b}\\)]{.math .inline}.

#### Ett exempel med regressionsanalys med t-test

Nu ska vi använda några observationer för att illustrera hur vi kan använda t-testet och [\\(t = \\widehat{b}/s\_{\\widehat{b}}\\)]{.math .inline} för att pröva nollhypotesen [\\(H\_{0}:b = 0\\)]{.math .inline} mot alternativhypotesen [\\(H\_{1}:b \\neq 0\\)]{.math .inline}.

Detta exempel syftar enbart till att illustrera metoden. För att göra det mer lättöverskådligt ska vi endast använda de fyra observationerna för [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} från avsnitt [2.3](https://www.dropbox.com/scl/fi/357utiljgf7iuk78jxhtv/2-3-Samvariation-1.docx?rlkey=ewtjvwrihoflt8tlvf8dccppo&dl=0) och [2.4](https://www.dropbox.com/scl/fi/uzqiucdxx5eaka1hgni5z/2-4-Samvariation-2.docx?rlkey=1ru7jf53mujl9y82mfzzkf7b2&dl=0), där vi såg att [\\(\\widehat{b} = 0,5\\)]{.math .inline} och [\\(\\widehat{a} = 1\\)]{.math .inline}.

**Tabell 1. Fyra observationer för X och Y**

  -----------------------------------------------------------------------------
  Observation *i*    [\\\[X\\\]]{.math .display}   [\\\[Y\\\]]{.math .display}
  ----------------- ----------------------------- -----------------------------
  1                               3                             3

  2                               4                             2

  3                               6                             5

  4                               7                             4
  -----------------------------------------------------------------------------

För beräkningen av [\\(t\\)]{.math .inline} vet vi att täljaren är [\\(\\widehat{b} = 0,5\\)]{.math .inline}. Till nämnaren vill vi estimera [\\({\\widehat{s}}\_{\\widehat{b}}\\)]{.math .inline} enligt ovan. Från tidigare beräkningar med dessa fyra observationer vet vi att [\\(\\sum\\left( y\_{i} - \\widehat{y} \\right)\^{2} = 2,5\\)]{.math .inline} och [\\(\\sum\\left( x\_{i} - \\bar{x} \\right)\^{2} = 10\\)]{.math .inline}. Vi har fyra observationer [\\((n = 4)\\)]{.math .inline} och två koefficienter ( [\\(p = 2\\)]{.math .inline} ), varför [\\(n - p = 4 - 2 = 2\\)]{.math .inline}. Detta ger följande estimat av [\\({\\widehat{s}}\_{\\widehat{b}}\\)]{.math .inline} :

[\\({\\widehat{s}}\_{\\widehat{b}} = \\left( \\frac{\\sum\_{}\^{}\\left( y\_{i} - {\\widehat{y}}\_{i} \\right)\^{2}}{(n - 2)\\sum\_{}\^{}\\left( x\_{i} - \\bar{x} \\right)\^{2}} \\right)\^{1/2} = \\left( \\frac{2,5}{2\*10} \\right)\^{1/2} \\approx 0,354\\)]{.math .inline} (8)

Vi sätter nu in även detta i ekvation 4 för att estimera vårt [\\(t\\)]{.math .inline}-värde:

[\\(t = \\frac{\\widehat{b}}{{\\widehat{s}}\_{\\widehat{b}}} = \\frac{0,5}{\\left( \\frac{2,5}{2\*10} \\right)\^{1/2}} \\approx 1,414\\)]{.math .inline} (9)

För t -värdet har vi [\\(k = n - p = 4 - 2 = 2\\)]{.math .inline} frihetsgrader. Eftersom vi har ett tvåsidigt t-test jämför vi huruvida vårt skattade [\\(\|t\| \> t\^{\*}\\)]{.math .inline}, där [\\(t\^{\*}\\)]{.math .inline} är kritiska t-värdet. Vi väljer signifikansnivå [\\(\\alpha = 0,05\\)]{.math .inline}, vilket för ett tvåsidigt test tar [\\(\\alpha/2 = 0,025\\)]{.math .inline} på vardera sida om sannolikhetsfördelningens medelvärde.

Vårt beräknade [\\(t = 1,4\\)]{.math .inline} kan vi jämföra mot figur 2 ovan och det övre diagrammet, där vi ser att [\\(t\^{\*} = 4,303\\)]{.math .inline}, för t-fördelningen med 2 frihetsgrader. Vårt beräknade [\\(\|t\|\\)]{.math .inline} måste därför vara högre än detta värde för att förkasta [\\(H\_{0}\\)]{.math .inline} vid [\\(\\alpha = 0,05\\)]{.math .inline}. Eftersom så inte är fallet förkastar vi inte [\\(H\_{0}\\)]{.math .inline}, som säger att [\\(b = 0\\)]{.math .inline}. Ett annat sätt att beskriva detta är att vårt estimerade [\\(\\widehat{b}\\)]{.math .inline} *inte är* *statistiskt signifikant*.

Vad betyder detta praktiskt? Med endast 4 observationer och [\\(\\widehat{b} = 0,5\\)]{.math .inline} kan vi inte säga att sambandet är statistiskt skilt från noll. Vi skulle behöva fler observationer eller en större effekt för att nå signifikans.

### Hur det brukar gå till

Om vi estimerar en regressionsmodell med minstakvadratmetoden i ett datorprogram rapporteras ofta resultaten av t-test för alla koefficienter i regressionsmodellen utifrån nollhypoteser att respektive koefficient är 0.

Det är viktigt att förstå vad det statistiska testet innebär för vår regressionsanalys. Säg att vi estimerar [\\(\\widehat{b} \> 0\\)]{.math .inline}, utför ett statistiskt test och finner att vi inte kan avfärda [\\(H\_{0}:b = 0\\)]{.math .inline} som falsk, givet vald signifikansnivå [\\(\\alpha\\)]{.math .inline}.

Detta indikerar att estimatet [\\(\\widehat{b} \> 0\\)]{.math .inline} lika gärna kan vara resultatet av en slumpmässig process och vi har därför ingen anledning att tro att populationens [\\(b \\neq 0\\)]{.math .inline}, oavsett hur stort eller litet värde för [\\(\\widehat{b}\\)]{.math .inline} vi estimerade.

Om vi, som exempel, estimerade en regressionsmodell för att studera om förändringar i [\\(X\\)]{.math .inline} orsakar förändringar i [\\(Y\\)]{.math .inline} (ett kausalt samband) skulle vi alltså inte ha anledning att tro att det finns ett orsakssamband mellan [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}, oavsett vår lutningskoefficient.

#### Regressionsanalys med konfidensintervall

För de estimerade koefficienterna i vår regressionsanalys kan vi även uppskatta ett konfidensintervall (se [avsnitt 5.3](https://www.dropbox.com/scl/fi/12fiw2s4633qjt0d1s0zw/5-3-Statitsisk-analys.docx?rlkey=b4urprsp85hxcdp6jm3z9vaw7&dl=0)). För regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline} och observationerna [\\(x =\\)]{.math .inline} [\\(\\{ 3,2,5,4\\}\\)]{.math .inline} och [\\(y = \\{ 3,4,6,7\\}\\)]{.math .inline} fann vi i beräkningarna ovan följande resultat:

[\\(\\begin{matrix} \\widehat{a} = 1 & \\widehat{b} = 0,5 \\\\ {\\widehat{s}}\_{\\widehat{a}} = 1,854 & {\\widehat{s}}\_{\\widehat{b}} = 0,354 \\end{matrix}\\)]{.math .inline} (10)

Ett sätt att estimera konfidensintervall för [\\(\\widehat{a}\\)]{.math .inline} är då att beräkna följande:

Konfidensintervall för koefficient [\\(b\\)]{.math .inline}: [\\(\\widehat{b} \\pm t\_{k,\\alpha}\*{\\widehat{s}}\_{\\widehat{b}}\\)]{.math .inline} (11)

där [\\(t\_{k,\\alpha}\\)]{.math .inline} är kritiska t-värdet beroende på antal frihetsgrader [\\(k = 2\\)]{.math .inline} och signifikansnivå [\\(\\alpha\\)]{.math .inline}. Låt oss nu skatta ett [\\(95\\%\\)]{.math .inline} konfidensintervall. Vi sätter i så fall [\\(\\alpha = 0,05\\)]{.math .inline}. Värdet för [\\(t\_{k,\\alpha}\\)]{.math .inline} hämtar vi från figur 2 ovan: 4,303 (samma som kritiska [\\(t\^{\*}\\)]{.math .inline} i exemplet ovan). Detta ger följande konfidensintervall:

[\\(\\widehat{b} \\pm t\_{k,\\alpha}\*{\\widehat{s}}\_{\\widehat{b}} = 0,5 \\pm 4,3\*0,354 \\approx 0,5 \\pm 1,52\\)]{.math .inline} (12)

Konfidensintervallet visar inom vilka gränser som [\\(95\\ \\%\\)]{.math .inline} av koefficienternas estimat skulle befinna sig vid upprepade urval. För [\\(\\widehat{b}\\)]{.math .inline} är konfidensintervallets nedre och övre gräns cirka [\\(- 1,02\\)]{.math .inline} samt 2,02.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-5"]=[  {    "id": "k2-5-5-001",    "name": "Uppgift 1",    "exercise": "Varför används t-fördelningen (istället för standardnormalfördelningen) för statistiska test av regressionskoefficienter?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Eftersom regressionskoefficienter aldrig är normalfördelade",          "Eftersom standardfelet för regressionskoefficienten måste estimeras från data, och t-fördelningen hanterar denna estimeringsosäkerhet via antalet frihetsgrader",          "Eftersom t-fördelningen alltid är mer konservativ än normalfördelningen",          "Eftersom t-fördelningen bara gäller för tvåsidiga test"        ],        "correct": "Eftersom standardfelet för regressionskoefficienten måste estimeras från data, och t-fördelningen hanterar denna estimeringsosäkerhet via antalet frihetsgrader"      }    },    "error": { "message": "T-fördelningens form beror på antalet frihetsgrader. Vad har detta med regressionsmodellens storlek att göra?" },    "correct": { "message": "Rätt! T-fördelningen används eftersom standardfelet \\(\\widehat{s}_{\\widehat{b}}\\) måste estimeras från data — vi känner inte till \\(\\sigma_V^2\\) exakt. Denna ytterligare osäkerhet hanteras av t-fördelningens form via antalet frihetsgrader \\(n - p\\). Med fler frihetsgrader konvergerar t-fördelningen mot standardnormalfördelningen." }  },  {    "id": "k2-5-5-002",    "name": "Uppgift 2",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) med \\(n\\) observationer och \\(p\\) koefficienter, hur beräknas antalet frihetsgrader?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(n\\)",          "\\(n + p\\)",          "\\(n - p\\)",          "\\(p - 1\\)"        ],        "correct": "\\(n - p\\)"      }    },    "error": { "message": "Frihetsgrader syftar på antal värden som kan variera fritt. Varje koefficient vi estimerar 'kostar' en frihetsgrad." },    "correct": { "message": "Rätt! Antal frihetsgrader är \\(n - p\\), där \\(n\\) är antal observationer och \\(p\\) är antal koefficienter. I modellen \\(Y = a + bX + V\\) har vi \\(p = 2\\) koefficienter, så frihetsgraderna är \\(n - 2\\)." }  },  {    "id": "k2-5-5-003",    "name": "Uppgift 3",    "exercise": "Antag att \\(\\widehat{b} = 0{,}5\\), \\(\\sum(y_i - \\widehat{y})^2 = 2{,}5\\) och \\(\\sum(x_i - \\overline{x})^2 = 10\\), med \\(n = 4\\) och \\(p = 2\\). Beräkna standardfelet \\(\\widehat{s}_{\\widehat{b}}\\) med formeln \\[\\widehat{s}_{\\widehat{b}} = \\left(\\frac{\\sum(y_i - \\widehat{y}_i)^2}{(n-p)\\sum(x_i - \\overline{x})^2}\\right)^{1/2}\\] Avrunda till tre decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.354" },    "answerformat": "Ange svaret med tre decimaler, t.ex. 0.354",    "error": { "message": "Sätt in värdena: \\((2{,}5 / (2 \\times 10))^{1/2} = (0{,}125)^{1/2}\\). Beräkna kvadratroten." },    "correct": { "message": "Rätt! \\(\\widehat{s}_{\\widehat{b}} = \\sqrt{2{,}5 / (2 \\times 10)} = \\sqrt{0{,}125} \\approx 0{,}354\\). Detta är standardfelet för estimatorn \\(\\widehat{b}\\), ett mått på osäkerheten i estimatet." }  },  {    "id": "k2-5-5-004",    "name": "Uppgift 4",    "exercise": "Med \\(\\widehat{b} = 0{,}5\\) och \\(\\widehat{s}_{\\widehat{b}} \\approx 0{,}354\\), beräkna t-värdet \\[t = \\frac{\\widehat{b}}{\\widehat{s}_{\\widehat{b}}}\\] Avrunda till tre decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "1.414" },    "answerformat": "Ange svaret med tre decimaler, t.ex. 1.414",    "error": { "message": "Dividera täljaren \\(\\widehat{b} = 0{,}5\\) med nämnaren \\(\\widehat{s}_{\\widehat{b}} \\approx 0{,}354\\)." },    "correct": { "message": "Rätt! \\(t = 0{,}5 / 0{,}3536 \\approx 1{,}414\\). Det beräknade t-värdet används sedan för att testa om \\(H_0: b = 0\\) ska förkastas – i detta fall med 2 frihetsgrader och \\(\\alpha = 0{,}05\\) är det kritiska värdet \\(t^* = 4{,}303\\), varför vi inte förkastar \\(H_0\\)." }  },  {    "id": "k2-5-5-005",    "name": "Uppgift 5",    "exercise": "Med \\(\\widehat{b} = 0{,}5\\), \\(\\widehat{s}_{\\widehat{b}} = 0{,}354\\) och det kritiska t-värdet \\(t_{k,\\alpha} = 4{,}303\\) (2 frihetsgrader, 95 %-konfidensintervall), beräkna konfidensintervallets <em>nedre gräns</em> med formeln \\[\\widehat{b} - t_{k,\\alpha} \\cdot \\widehat{s}_{\\widehat{b}}\\] Avrunda till två decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "-1.02" },    "answerformat": "Ange svaret med två decimaler, t.ex. -1.02",    "error": { "message": "Subtrahera \\(t_{k,\\alpha} \\times \\widehat{s}_{\\widehat{b}} = 4{,}303 \\times 0{,}354\\) från \\(\\widehat{b} = 0{,}5\\)." },    "correct": { "message": "Rätt! \\(0{,}5 - 4{,}303 \\times 0{,}354 \\approx 0{,}5 - 1{,}52 \\approx -1{,}02\\). Konfidensintervallet är ungefär \\(-1{,}02 < b < 2{,}02\\). Eftersom intervallet inkluderar 0 är \\(\\widehat{b}\\) inte statistiskt signifikant skild från noll." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-5"></div>

## T-test för regression med flera variabler {#k2-5-6}

### Begrepp

- **Varians-kovariansmatrisen:** Kallas även kovariansmatrisen. För regressionsmodell [\\(Y = XB + V\\)]{.math .inline} beskriven med matriser kan vi estimera modellen med minstakvadratmetoden. Elementen i varians-kovariansmatrisen beskriver varians (längs diagonalen) och kovarians (elementen utanför diagonalen) för estimatorerna för koefficenterna i regressionsmodellen.

### Teori

Ekvationerna i detta avsnitt är de mest komplexa i hela kursen. Huvudbudskapet här är följande: Standardfelet för varje koefficient vi estimerar i en regressionsmodell kan påverkas av alla andra variabler i regressionsmodellen. Och omvänt -- om vi utelämnar något relevant fenomen i en analys kan även detta inverka på våra resultat och slutsatser.

Detta är återigen ett centralt argument för varför vetenskapliga experiment är en avgörande metod för att vi ska kunna uttala oss om orsak och verkan och förstå hur världen fungerar.

Du behöver inte kunna beräkna detta för hand. Datorer gör sådana här beräkningar automatiskt på nolltid. Om matematiken känns överväldigande: Hoppa till rubrik \"Huvudpoängen igen\" nedan. Liksom tidigare är det dock rekommenderat att du oavsett gör ett försök att gå igenom även denna matematik för att bättre förstå metoderna och logiken bakom dessa.

### Utgångspunkter

I [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0) estimerade vi regressionsmodellen:

[\\(Y = a + bX + cZ + V\\)]{.math .inline} (1)

Utifrån de fyra observationerna i tabell 1 estimerade vi då följande värden för koefficienterna:

[\\(\\widehat{a} \\approx 2,89,\\ \\ \\ \\ \\ \\widehat{b} \\approx 0,28,\\ \\ \\ \\ \\ \\ \\widehat{c} \\approx - 0,54\\)]{.math .inline} (2)

**Tabell 1: Fyra observationer för variablerna** [\\(\\mathbf{y}\\mathbf{,}\\mathbf{x}\\)]{.math .inline} **och** [\\(\\mathbf{z}\\)]{.math .inline}**.**

  --------------------------------------------------------------------------------------------------------------------------------------
  [\\\[i\\\]]{.math .display}    [\\\[Y\_{i}\\\]]{.math .display}   [\\\[X\_{i}\\\]]{.math .display}   [\\\[Z\_{i}\\\]]{.math .display}
  ----------------------------- ---------------------------------- ---------------------------------- ----------------------------------
  1                                             3                                  3                                  1

  2                                             2                                  4                                  4

  3                                             5                                  6                                  0

  4                                             4                                  7                                  1
  --------------------------------------------------------------------------------------------------------------------------------------

#### T-test för de tre koefficienterna

Nu ska vi med t-test pröva sannolikheten att de tre koefficienterna är skilda från noll. Vi ställer därför upp tre noll- och alternativhypoteser:

[\\(\\begin{matrix} H\_{0}:a = 0 & \\ \\ \\ H\_{0}:b = 0 & \\ \\ \\ H\_{0}:c = 0 \\\\ H\_{1}:a \\neq 0 & \\ \\ \\ H\_{1}:b \\neq 0 & \\ \\ \\ H\_{1}:c \\neq 0 \\end{matrix}\\)]{.math .inline} (3)

Vi utgår från signifikansnivån [\\(\\alpha = 0,05\\)]{.math .inline}. Alla tre test är tvåsidiga [\\(t\\)]{.math .inline}-test och t -värdena skattas på följande sätt:

[\\(t\_{\\widehat{a}} = \\frac{\\widehat{a}}{s\_{\\widehat{a}}},\\ \\ \\ \\ \\ \\ t\_{b} = \\frac{\\widehat{b}}{s\_{\\widehat{b}}},\\ \\ \\ \\ t\_{\\widehat{c}} = \\frac{\\widehat{c}}{s\_{\\widehat{c}}}\\)]{.math .inline} (4)

I nämnaren har vi standardfelet för respektive estimator, [\\(s\_{\\widehat{a}},s\_{\\widehat{b}}\\)]{.math .inline} och [\\(s\_{\\widehat{c}}\\)]{.math .inline}. Standardfelet är, i likhet med standardavvikelse, positiva kvadratroten av variansen, vilket är lättare att skriva ut ekvationen för, som [\\(\\text{var}\\left( \\widehat{a} \\right)\\)]{.math .inline} (se [avsnitt 5.5](https://www.dropbox.com/scl/fi/q6c5skce5272hw6sbohcr/5-5-Regressionsanalys-med-sannolikhet.docx?rlkey=p1ue537yaw3c5difdil7zmlrb&dl=0)).

När vi nu har tre variabler i regressionsmodellen blir variansen för våra tre estimatorer [\\(\\widehat{a},\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline}, följande:

[\\(\\begin{matrix} & var(\\widehat{a}) = {\\widehat{s}}\_{\\widehat{V}}\\left( \\frac{1}{n} + \\frac{{\\bar{X}}\^{2}\\sum\_{}\^{}\\left( Z\_{i} - \\bar{Z} \\right)\^{2} + {\\bar{Z}}\^{2}\\sum\_{}\^{}\\left( X\_{i} - \\bar{X} \\right)\^{2} - 2\\bar{X}\\bar{Z}\\sum\_{}\^{}{\\left( X\_{i} - \\bar{X} \\right)\\left( X\_{i} - \\bar{X} \\right)}}{\\sum\_{}\^{}\\left( X\_{i} - \\bar{X} \\right)\^{2}\\sum\_{}\^{}\\left( Z\_{i} - \\bar{Z} \\right)\^{2} - \\left( \\sum\_{}\^{}{\\left( X\_{i} - \\bar{X} \\right)\\left( X\_{i} - \\bar{X} \\right)} \\right)\^{2}} \\right) \\\\ & var(\\widehat{b}) = {\\widehat{s}}\_{\\widehat{V}}\\left( \\frac{\\sum\_{}\^{}\\left( Z\_{i} - \\bar{Z} \\right)\^{2}}{\\sum\_{}\^{}\\left( X\_{i} - \\bar{X} \\right)\^{2}\\sum\_{}\^{}\\left( Z\_{i} - \\bar{Z} \\right)\^{2} - \\left( \\sum\_{}\^{}{\\left( X\_{i} - \\bar{X} \\right)\\left( Z\_{i} - \\bar{Z} \\right)} \\right)\^{2}} \\right) \\\\ & var(\\widehat{c}) = {\\widehat{s}}\_{\\widehat{V}}\\left( \\frac{\\sum\_{}\^{}\\left( X\_{i} - \\bar{X} \\right)\^{2}}{\\sum\_{}\^{}\\left( X\_{i} - \\bar{X} \\right)\^{2}\\sum\_{}\^{}\\left( Z\_{i} - \\bar{Z} \\right)\^{2} - \\left( \\sum\_{}\^{}{\\left( X\_{i} - \\bar{X} \\right)\\left( Z\_{i} - \\bar{Z} \\right)} \\right)\^{2}} \\right) \\end{matrix}\\)]{.math .inline} (5)

där [\\({\\widehat{s}}\_{\\widehat{V}}\\)]{.math .inline} är estimerad standardfelet för residualerna (regressionsmodellens standardfel) varför vi lägger till notationen [\\(\\widehat{V}\\)]{.math .inline} (jmf ekvation 1), [\\(n\\)]{.math .inline} är antal observationer och en variabel med ett streck över är medelvärde ([\\(\\overline{X},\\ \\overline{Y},\\ \\overline{Z})\\)]{.math .inline}. Residualernas standardfel är ett mått på osäkerheten i estimatet av residualerna.

#### Måste jag lära mig allt det här?

Ekvation 5 är omfattande. Poängen med att gå igenom den här matematiken är dock inte att vi nödvändigtvis ska lära oss räkna allt detta för hand, utan för att vi ska få en bättre förståelse av hur metoderna fungerar och inte fungerar.

En viktig sak med ekvation 5 är att vi kan se hur standardfelet (osäkerheten) för respektive koefficient är en funktion av både observationer för den variabel som hör till denna koefficient och observationer för de andra två variablerna som ingår i regressionsmodellen.

I avsnitt [4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0), [4.4](https://www.dropbox.com/scl/fi/sdnc9eukta9tuiq1y6z0f/4-4-Regression-med-matriser.docx?rlkey=zmc4680olys9qe0zmn7i0vswc&dl=0) och [4.5](https://www.dropbox.com/scl/fi/mqe9yo4dnoh6k581l95ut/4-5-Estimera-med-matriser.docx?rlkey=j8hs4g14ujp401hkp5dg0fygs&dl=0) såg vi hur estimeringen av koefficienterna i regressionsmodellen, alltså samvariationen mellan varje förklarande variabel (som [\\(X\\)]{.math .inline} och [\\(Z\\)]{.math .inline}) och den förklarade variabeln ([\\(Y\\)]{.math .inline}), kan påverkas av observationerna för varje annan variabel i regressionsmodellen. I [avsnitt 4.7](https://www.dropbox.com/scl/fi/qpe35hc5zxm99tqxkt4q0/4-7-R-kna-p-orsak-och-effekt.docx?rlkey=eijkxl77yiu7lj0kbysw5yw5t&dl=0) såg vi att detta är avgörande när vi vill studera orsakssamband.

Ekvation 5 illustrerar nu hur även det statistiska testet för respektive lutningskoefficient (t-testet) kan påverkas av observationer för samtliga variabler som ingår i regressionsmodellen. Detta är viktigt för att förstå analys och vetenskap och är centralt för hur vi tänker att världen fungerar.

#### Beräkna estimaten

Låt oss beräkna t-testen för koefficienterna. Estimerat standardfel för residualerna är:

[\\({\\widehat{s}}\_{\\widehat{V}} = \\frac{\\sum\_{}\^{}\\ \\left( y\_{i} - \\widehat{y} \\right)\^{2}}{n - p} \\approx \\frac{0,338}{4 - 3} \\approx 0,338\\)]{.math .inline} (6)

Resultatet för [\\(\\sum\_{}\^{}\\left( y\_{i} - \\widehat{y} \\right)\^{2}\\)]{.math .inline} kan vi räkna ut med hjälp av uppgifterna i [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0). Bokstaven [\\(n\\)]{.math .inline} är antal observationer och [\\(p\\)]{.math .inline} är antal koefficienter i regressionsmodellen, varför [\\(n - p =\\)]{.math .inline} [\\(4 - 3 = 1\\)]{.math .inline}.

Resultatet [\\({\\widehat{s}}\_{\\widehat{V}} \\approx 0,338\\)]{.math .inline} använder vi för att skatta standardfelet för respektive koefficient [\\(\\widehat{a}\\)]{.math .inline}, [\\(\\widehat{b}\\)]{.math .inline} och [\\(\\widehat{c}\\)]{.math .inline}. Vi tar positiva kvadratroten av variansen för respektive estimator:

[\\(\\begin{matrix} & s\_{\\widehat{\\alpha}} = + \\left( 0,338\\left( \\frac{1}{4} + \\frac{25\*9 + 2,25\*10 - 2\*5\*1,5\*( - 4)}{10\*9 - ( - 4)\^{2}} \\right) \\right)\^{1/2} \\approx 1,22 \\\\ & s\_{\\widehat{b}} = + \\left( 0,338\\left( \\frac{9}{10\*9 - ( - 4)\^{2}} \\right) \\right)\^{1/2} \\approx 0,203 \\\\ & s\_{\\widehat{c}\\widehat{\\ }} = + \\left( 0,338\\left( \\frac{10}{10\*9 - ( - 4)\^{2}} \\right) \\right)\^{1/2} \\approx 0,214 \\end{matrix}\\)]{.math .inline} (7)

Nu kan vi skatta t-värdena till t-testen för respektive lutningskoefficients estimator:

[\\(\\begin{matrix} & t\_{\\widehat{a}} = \\frac{2,89}{1,22} \\approx 2,37 \\\\ & t\_{\\widehat{b}} = \\frac{0,28}{0,203} \\approx 1,4 \\\\ & t\_{\\widehat{c}} = \\frac{- 0,54}{0,214} \\approx - 2,52 \\end{matrix}\\)]{.math .inline} (8)

Nu har vi beräknat t-värdena för respektive estimator och kan jämföra dessa mot t-fördelningen, beroende på vald signifikansnivå. T-fördelningens form beror liksom tidigare på antal frihetsgrader. Om våra beräknade [\\(t\\)]{.math .inline} överstiger kritiska t-värdet, det vill säga [\\(t\^{\*}\\)]{.math .inline} [\\(\|t\| \> t\^{\*}\\)]{.math .inline}, avvisar vi respektive [\\(H\_{0}\\)]{.math .inline} som falsk.

I [avsnitt 5.](https://www.dropbox.com/scl/fi/q6c5skce5272hw6sbohcr/5-4-Regressionsanalys-med-sannolikhet.docx?rlkey=p1ue537yaw3c5difdil7zmlrb&dl=0)5 illustrerade vi t-fördelningen för 2 respektive 1 000 frihetsgrader. För enkelhetens skull kan vi här jämföra med 2 frihetsgrader, som vi använde i föregående avsnitt. Egentligen har vi här 1 frihetsgrad och då är de kritiska t-värdena ännu längre bort från medelvärdet.

Våra beräknade t-värden är långt ifrån konfidensnivåerna 90 respektive 95 %. Våra beräknade t-värden innebär att det är cirka 25 %, 39 % respektive 24 % sannolikhet att respektive [\\(H\_{0}\\)]{.math .inline} är falsk (beräkning redovisas ej här).

Vi avfärdar därför ingen av de tre nollhypoteserna. Våra resultat för estimerade koefficienterna är således inte statistiskt signifikanta. Vi har därför ingen anledning att tro att populationens koefficienter [\\(a,b\\)]{.math .inline} eller [\\(c\\)]{.math .inline} är skilda från noll.

#### T-test för valfritt antal koefficienter

Trots att vi endast hade två förklarande variabler i regressionsmodellen är de tre ekvationerna i ekvation 5 ovan omfattande. Ofta arbetar vi med flera variabler, varpå ekvationerna blir ännu mer omfattande. Vi kan beskriva matematiken för detta mer kompakt genom att använda matriser.

Nu ska vi gå igenom hur vi kan beskriva matematiken för t-test med ett valfritt antal variabler i regressionsmodellen. På samma sätt som vi introducerade i [avsnitt 4.4](https://www.dropbox.com/scl/fi/sdnc9eukta9tuiq1y6z0f/4-4-Regression-med-matriser.docx?rlkey=zmc4680olys9qe0zmn7i0vswc&dl=0) ska vi därför återigen använda matriser för att beskriva vår regressionsmodell och analys. Poängen är återigen att vi ska få en ökad förståelse för metoderna.

Säg att vi har följande regressionsmodell för en population:

[\\(Y = XB + V\\)]{.math .inline} (9)

där Y är en [\\(n \\times 1\\)]{.math .inline} kolumnmatris med förklarade variabeln, [\\(B\\)]{.math .inline} är en [\\(k \\times 1\\)]{.math .inline} kolumnmatris för samtliga koefficienter [\\(b\\)]{.math .inline} och [\\(V\\)]{.math .inline} är en [\\(n \\times 1\\)]{.math .inline} kolumnmatris med [\\(n\\)]{.math .inline} feltermer. [\\(X\\)]{.math .inline} är en [\\(n \\times k\\)]{.math .inline} matris med de förklarande variablerna [\\(X\\)]{.math .inline} i varsin kolumn och observationerna på varsin rad. I vår regressionsmodell ingår första koefficienten [\\(b\_{0}\\)]{.math .inline}, y-interceptet, varför alla element i första kolumnen i matris [\\(X\\)]{.math .inline} har värdet 1.

Vi ska nu gå igenom hur vi kan beskriva varians och standardfel för samtliga koefficienters estimatorer i en regressionsmodell med valfritt antal koefficienter. Detta gör vi genom att definiera det som kallas för regressionsmodellens *varians-kovariansmatris*. Varians-kovariansmatrisen kallas även för *variansmatris*, *kovariansmatris* eller *autokovariansmatris* (engelska *variance-covariance matrix*).

#### Varians-kovariansmatrisen

Varians-kovariansmatrisen som vi ska arbeta med kan skrivas på följande sätt: [\\(var\\left( \\widehat{B} \\middle\| X \\right)\\)]{.math .inline}, där [\\(\\widehat{B}\\)]{.math .inline} och [\\(X\\)]{.math .inline} är matriser. Vi har alltså variansen, [\\(var(\\ )\\)]{.math .inline}, av estimatorn för koefficienterna [\\(\\widehat{B}\\)]{.math .inline}, givet värdena i de förklarande variablerna [\\(X\\)]{.math .inline}.

För populationens regressionsmodell kan detta skrivas på följande sätt:

[\\(\\text{var}\\left( \\widehat{B} \\middle\| X \\right) = \\sigma\_{V}\^{2}\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline} (10)

som består av två delar: [\\(\\sigma\_{V}\^{2}\\)]{.math .inline} och [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline}. Den första delen, [\\(\\sigma\_{V}\^{2}\\)]{.math .inline}, beskriver feltermernas varians (oförklarad variation) i populationen. Populationsvärdet är i regel okänt men vi kan estimera den med urvalsdata.

Hela den andra delen, [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline}, beskriver en enda matris sammansatt av två andra matriser, nämligen [\\(X\\)]{.math .inline} (de förklarande variablerna) och transponerade [\\(X\^{T}\\)]{.math .inline}. Dessa två matrismultipliceras, [\\(X\^{T}X\\)]{.math .inline}. Därefter tar vi matrisinversen av resultatet: [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline}.

Låt oss byta ut populationens varians [\\(\\sigma\_{V}\^{2}\\)]{.math .inline} mot estimerade variansen: [\\({\\widehat{s}}\_{V}\^{2}\\)]{.math .inline}. Vi får då estimerade varians-kovariansmatrisen:

[\\(\\text{var}\\left( \\widehat{B} \\middle\| X \\right) = {\\widehat{s}}\_{V}\^{2}\\left( X\^{T}X \\right)\^{- 1} = \\left( \\frac{\\sum\_{}\^{}\\left( y\_{i} - \\widehat{y\_{i}} \\right)\^{2}}{n - p} \\right)\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline} (11)

Definitionen av [\\({\\widehat{s}}\_{V}\^{2}\\)]{.math .inline} använde vi i [avsnitt 5.4](https://www.dropbox.com/scl/fi/q6c5skce5272hw6sbohcr/5-4-Regressionsanalys-med-sannolikhet.docx?rlkey=p1ue537yaw3c5difdil7zmlrb&dl=0).

### Varför är varians-kovariansmatrisen viktig?

Som vi gick igenom i avsnitt [4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0), [4.4](https://www.dropbox.com/scl/fi/sdnc9eukta9tuiq1y6z0f/4-4-Regression-med-matriser.docx?rlkey=zmc4680olys9qe0zmn7i0vswc&dl=0) och [4.5](https://www.dropbox.com/scl/fi/mqe9yo4dnoh6k581l95ut/4-5-Estimera-med-matriser.docx?rlkey=j8hs4g14ujp401hkp5dg0fygs&dl=0) såg vi att koefficienternas estimator [\\(\\widehat{B} = \\left( X\^{T}X \\right)\^{- 1}X\^{T}Y\\)]{.math .inline} innebär att varje annan variabel i regressionsmodellen kan påverka estimaten för samtliga koefficienter i modellen. Om någon variabel saknas som borde ingå i regressionsmodellen påverkar detta per definition också våra resultat.

Varians-kovariansmatrisen [\\(var(\\widehat{B} \\mid X)\\)]{.math .inline} illustrerar hur varje förklarande variabel som inkluderas eller exkluderas i regressionsmodellen även kan påverka resultaten för de statistiska testen för samtliga koefficienter i modellen. Detta eftersom alla förklarande variabler är representerade i matris [\\(X\\)]{.math .inline}, vars innehåll kan påverka resultaten för samtliga t-test.

Betydelsen av detta för analytiskt arbete i allmänhet och samhällsvetenskapen i stort går inte att överskatta. I [avsnitt 4.7](https://www.dropbox.com/scl/fi/qpe35hc5zxm99tqxkt4q0/4-7-R-kna-p-orsak-och-effekt.docx?rlkey=eijkxl77yiu7lj0kbysw5yw5t&dl=0) gick vi igenom hur vi behöver särskilda metoder för att studera orsakssamband. Vi måste vara mycket noggranna när vi studerar och mäter kausala effekter, jämför orsak och verkan och jämför en behandlingsgrupp med en kontrollgrupp.

Det finns ingen metod för att objektivt bevisa att ett fenomen bör inkluderas eller exkluderas i en analys. Varians-kovariansmatrisen illustrerar ännu tydligare varför denna typ av utmaningar är viktiga att fundera kring. Detta är förklaringen till vad det vetenskapliga experimentet fyller för funktion och varför samhällsvetenskapen behöver kvasiexperimentella metoder ([avsnitt 4.7](https://www.dropbox.com/scl/fi/qpe35hc5zxm99tqxkt4q0/4-7-R-kna-p-orsak-och-effekt.docx?rlkey=eijkxl77yiu7lj0kbysw5yw5t&dl=0)).

#### Ett exempel

För att bättre förstå innehållet i [\\(var(\\widehat{B} \\mid X)\\)]{.math .inline} kan vi illustrera med ett exempel. Huvudsaken med denna genomgång är främst de mer övergripande resonemangen.

Säg att vi har regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline} med de två variablerna [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline} och de två koefficienterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} (det vill säga ej skriven med matriser) och feltermen [\\(V\\)]{.math .inline}. Estimerade varians-kovariansmatrisen för denna regressionsmodell blir:

[\\(var(\\widehat{B} \\mid X) = {\\widehat{s}}\_{\\widehat{V}}\^{2}\\left( X\^{T}X \\right)\^{- 1} = \\begin{bmatrix} var(\\widehat{a}) & cov(\\widehat{a},\\widehat{b}) \\\\ cov(\\widehat{b},\\widehat{a}) & var(\\widehat{b}) \\end{bmatrix}\\)]{.math .inline} (12)

I matrisens diagonal (övre vänstra och nedre högra elementen) har vi variansen för estimatorerna för koefficienterna: [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline}. De två andra elementen är kovariansen mellan estimatorerna. Variansen i diagonalen ges av att [\\(\\text{cov}\\left( \\widehat{a},\\widehat{a} \\right) = \\text{var}\\left( \\widehat{a} \\right)\\)]{.math .inline} (se [avsnitt 2.3](https://www.dropbox.com/scl/fi/357utiljgf7iuk78jxhtv/2-3-Samvariation-1.docx?rlkey=ewtjvwrihoflt8tlvf8dccppo&dl=0)).

För att se detaljerna i [\\(var(\\widehat{B} \\mid X)\\)]{.math .inline} börjar vi med att beskriva inversmatrisen [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline} :

[\\(\\begin{matrix} \\left( X\^{T}X \\right)\^{- 1} & \\ = \\begin{bmatrix} n & \\sum\_{}\^{}x\_{i} \\\\ \\sum\_{}\^{}x\_{i} & \\sum\_{}\^{}x\_{i}\^{2} \\end{bmatrix}\^{- 1} \\\\ & \\ = \\left( \\frac{1}{n\\sum\_{}\^{}x\_{i}\^{2} - \\sum\_{}\^{}x\_{i}\\sum\_{}\^{}x\_{i}} \\right)\\begin{bmatrix} \\sum\_{}\^{}x\_{i}\^{2} & - \\sum\_{}\^{}x\_{i} \\\\ - \\sum\_{}\^{}x\_{i} & n \\end{bmatrix} \\\\ & \\ = \\left( \\frac{1}{n\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} \\right)\\begin{bmatrix} \\sum\_{}\^{}x\_{i}\^{2} & - n\\bar{x} \\\\ - n\\bar{x} & n \\end{bmatrix} \\\\ & \\ = \\begin{bmatrix} \\frac{\\sum\_{}\^{}x\_{i}\^{2}}{n\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} & \\frac{- \\bar{x}}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} \\\\ \\frac{- \\bar{x}}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} & \\frac{1}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} \\end{bmatrix} \\end{matrix}\\)]{.math .inline} (13)

Nu har vi ett uttryck för inversmatrisen [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline}. För att få estimerade [\\(var(\\widehat{B} \\mid X)\\)]{.math .inline} multiplicerar vi nu vårt uttryck för [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline} med residualernas estimerade varians [\\({\\widehat{s}}\_{\\widehat{V}}\^{2}\\)]{.math .inline}, vilket är ett värde (ej en matris). Detta görs genom att [\\({\\widehat{s}}\_{\\widehat{V}}\^{2}\\)]{.math .inline} multipliceras med varje element i matrisen [\\(\\left( X\^{T}X \\right)\^{- 1}\\)]{.math .inline}:

[\\(\\begin{matrix} & {\\widehat{s}}\_{\\widehat{V}}\^{2}\\left( X\^{T}X \\right)\^{- 1} = \\left( \\frac{\\sum\_{}\^{}\\ \\left( y\_{i} - \\widehat{y} \\right)\^{2}}{n - p} \\right)\\begin{bmatrix} \\frac{\\sum\_{}\^{}x\_{i}\^{2}}{n\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} & \\frac{- \\bar{x}}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} \\\\ \\frac{- \\bar{x}}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} & \\frac{1}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} \\end{bmatrix} \\\\ & = \\begin{bmatrix} \\left( \\frac{\\sum\_{}\^{}\\left( y\_{i} - \\widehat{y} \\right)\^{2}}{n - p} \\right)\\frac{\\sum\_{}\^{}x\_{i}\^{2}}{n\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} & \\left( \\frac{\\sum\_{}\^{}\\left( y\_{i} - \\widehat{y} \\right)\^{2}}{n - p} \\right)\\frac{- \\bar{x}}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} \\\\ \\left( \\frac{\\sum\_{}\^{}\\left( y\_{i} - \\widehat{y} \\right)\^{2}}{n - p} \\right)\\frac{- \\bar{x}}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} & \\left( \\frac{\\sum\_{}\^{}\\left( y\_{i} - \\widehat{y} \\right)\^{2}}{n - p} \\right)\\frac{1}{\\left( \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\right)} \\end{bmatrix} = \\\\ & = \\begin{bmatrix} var(\\widehat{a}) & cov(\\widehat{a},\\widehat{b}) \\\\ cov(\\widehat{b},\\widehat{a}) & var(\\widehat{b}) \\end{bmatrix} \\end{matrix}\\)]{.math .inline} (14)

Varians-kovariansmatrisen ger oss, som sagt, variansen för koefficienternas estimatorer. Tar vi kvadratroten av detta får vi standardfelet för koefficienterna, vilket vi behöver för att beräkna de tvåsidiga t-testen för respektive koefficient.

Ovan definierade vi variansen för estimatorerna [\\(\\widehat{a}\\)]{.math .inline} och [\\(\\widehat{b}\\)]{.math .inline} till:

[\\(\\begin{matrix} & var(\\widehat{a}) = {\\widehat{s}}\_{\\widehat{a}}\^{2} = \\frac{\\sum\_{}\^{}\\ \\left( y\_{i} - {\\widehat{y}}\_{i} \\right)\^{2}}{(n - p)\\sum\_{}\^{}\\ \\left( x\_{i} - \\bar{x} \\right)\^{2}}\\frac{\\sum\_{}\^{}\\ x\_{i}\^{2}}{n} \\\\ & var(\\widehat{b}) = {\\widehat{s}}\_{\\widehat{b}}\^{2} = \\frac{\\sum\_{}\^{}\\ \\left( y\_{i} - {\\widehat{y}}\_{i} \\right)\^{2}}{(n - p)\\sum\_{}\^{}\\ \\left( x\_{i} - \\bar{x} \\right)\^{2}} \\end{matrix}\\)]{.math .inline} (15)

Detta är samma sak som i diagonalen i [\\(2 \\times 2\\)]{.math .inline} varians-kovariansmatrisen. Vi kan se detta genom att skriva om [\\(\\sum\_{}\^{}\\left( x\_{i} - \\bar{x} \\right)\^{2}\\)]{.math .inline} från [\\(var(\\widehat{a})\\)]{.math .inline} och [\\(var(\\widehat{b})\\)]{.math .inline} :

[\\(\\begin{matrix} \\sum\_{}\^{}\\left( x\_{i} - \\bar{x} \\right)\^{2} & \\ = \\sum\_{}\^{}x\_{i}\^{2} - 2\\sum\_{}\^{}{x\_{i}\\bar{x}} + \\sum\_{}\^{}{\\bar{x}}\^{2} \\\\ & \\ = \\sum\_{}\^{}x\_{i}\^{2} - 2n{\\bar{x}}\^{2} + n{\\bar{x}}\^{2} \\\\ & \\ = \\sum\_{}\^{}x\_{i}\^{2} - n\\frac{1}{n}\\sum\_{}\^{}x\_{i}\\frac{1}{n}\\sum\_{}\^{}x\_{i} \\\\ & \\ = \\sum\_{}\^{}x\_{i}\^{2} - \\bar{x}\\sum\_{}\^{}x\_{i} \\end{matrix}\\)]{.math .inline} (16)

där vi i sista raden nu får samma uttryck som återfinns i nämnaren i respektive element i estimerade [\\(\\text{var}\\left( \\widehat{B} \\middle\| X \\right)\\)]{.math .inline}.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-6"]=[  {    "id": "k2-5-6-001",    "name": "Uppgift 1",    "exercise": "I regressionsmodellen \\(Y = a + bX + cZ + V\\) beräknas standardfelet för varje koefficient med hjälp av varians-kovariansmatrisen \\(\\sigma_V^2(X^TX)^{-1}\\). Vad gäller för standardfelet för en enskild koefficient, till exempel \\(\\widehat{b}\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Standardfelet för varje koefficient beror enbart på den egna variabelns observationer",          "Standardfelet för varje koefficient kan påverkas av alla andra variabler i regressionsmodellen",          "T-test kan inte utföras när man har fler än två variabler",          "Varians-kovariansmatrisen är bara ett teoretiskt verktyg utan praktisk relevans"        ],        "correct": "Standardfelet för varje koefficient kan påverkas av alla andra variabler i regressionsmodellen"      }    },    "error": { "message": "Titta på varians-kovariansmatrisen \\(\\sigma_V^2(X^TX)^{-1}\\). Matrisen \\(X\\) innehåller observationer för alla förklarande variabler. Vad följer av det för standardfelet för en enskild koefficient?" },    "correct": { "message": "Rätt! Det centrala budskapet är att standardfelet för varje koefficient är en funktion av observationerna för den variabelns egna data OCH observationerna för alla andra variabler i modellen. Att inkludera eller exkludera en variabel påverkar t-testen för alla koefficienter." }  },  {    "id": "k2-5-6-002",    "name": "Uppgift 2",    "exercise": "I regressionsmodellen \\(Y = a + bX + cZ + V\\) med fyra observationer (\\(n = 4\\)) och tre koefficienter (\\(p = 3\\)) beräknades \\(\\sum(y_i - \\widehat{y})^2 \\approx 0{,}338\\). Estimera standardfelet för residualerna \\[\\widehat{s}_{\\widehat{V}} = \\frac{\\sum(y_i - \\widehat{y})^2}{n - p}\\] Avrunda till tre decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.338" },    "answerformat": "Ange svaret med tre decimaler, t.ex. 0.338",    "error": { "message": "Dividera \\(0{,}338\\) med \\(n - p = 4 - 3 = 1\\)." },    "correct": { "message": "Rätt! \\(\\widehat{s}_{\\widehat{V}} = 0{,}338 / (4 - 3) = 0{,}338 / 1 = 0{,}338\\). Med bara en frihetsgrad (4 observationer minus 3 koefficienter) är estimatet väldigt osäkert, vilket speglas i de höga standardfelen." }  },  {    "id": "k2-5-6-003",    "name": "Uppgift 3",    "exercise": "I en regressionsmodell \\(Y = a + bX + cZ + V\\) estimerades \\(\\widehat{c} \\approx -0{,}54\\) och \\(s_{\\widehat{c}} \\approx 0{,}214\\). Beräkna t-värdet \\[t_{\\widehat{c}} = \\frac{\\widehat{c}}{s_{\\widehat{c}}}\\] Avrunda till två decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "-2.52" },    "answerformat": "Ange svaret med två decimaler, t.ex. -2.52",    "error": { "message": "Dividera \\(\\widehat{c} = -0{,}54\\) med \\(s_{\\widehat{c}} = 0{,}214\\). Bevara tecknet." },    "correct": { "message": "Rätt! \\(t_{\\widehat{c}} = -0{,}54 / 0{,}214 \\approx -2{,}52\\). Trots detta relativt höga t-värde (i absolutbelopp) förkastar vi ändå inte \\(H_0: c = 0\\), eftersom vi med 1 frihetsgrad behöver mycket höga t-värden för att nå signifikans." }  },  {    "id": "k2-5-6-004",    "name": "Uppgift 4",    "exercise": "Varians-kovariansmatrisen för regressionsmodellen \\(Y = XB + V\\) definieras som \\[\\text{var}(\\widehat{B} \\mid X) = \\sigma_V^2 (X^T X)^{-1}\\] Vad beskriver elementen längs diagonalen i denna matris?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Kovariansen mellan de olika koefficienterna",          "Variansen för respektive koefficients estimator",          "Korrelationen mellan de förklarande variablerna",          "Regressionsmodellens feltermers varians"        ],        "correct": "Variansen för respektive koefficients estimator"      }    },    "error": { "message": "I en varians-kovariansmatris är elementen i och utanför diagonalen olika typer av mått. Vad är skillnaden mellan kovarians och varians?" },    "correct": { "message": "Rätt! Elementen längs diagonalen i varians-kovariansmatrisen är variansen \\(\\text{var}(\\widehat{b}_j)\\) för varje koefficients estimator. Kvadratroten av dessa ger standardfelen som används i t-testen. Elementen utanför diagonalen är kovarianser mellan koefficienterna." }  },  {    "id": "k2-5-6-005",    "name": "Uppgift 5",    "exercise": "Varför är det centralt för vetenskaplig analys att standardfelet (och t-testet) för en koefficient kan påverkas av <em>alla</em> andra variabler i regressionsmodellen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det innebär att vi alltid bör ha så få variabler som möjligt i modellen",          "Det innebär att om en relevant variabel saknas i modellen kan detta påverka resultaten och slutsatserna för alla koefficienter",          "Det innebär att regressionsanalys bara fungerar med exakt tre variabler",          "Det innebär att t-testen alltid är opålitliga i flervariabelmodeller"        ],        "correct": "Det innebär att om en relevant variabel saknas i modellen kan detta påverka resultaten och slutsatserna för alla koefficienter"      }    },    "error": { "message": "Tänk på vad som händer med analysens resultat om man utelämnar ett fenomen som egentligen borde ingå i modellen." },    "correct": { "message": "Rätt! Om en relevant variabel saknas i regressionsmodellen kan detta snedvrida estimaten och standardfelen för samtliga koefficienter – inte bara den som är direkt relaterad till den saknade variabeln. Detta är ett starkt argument för varför vetenskapliga experiment och kvasiexperimentella metoder är så viktiga." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-6"></div>

## Vad är egentligen regressionsanalys? {#k2-5-7}

### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

Vi började denna kurs med att studera orsakssamband (kapitel 1), där vi gick igenom kontrafaktisk analys, behandling och kontroll samt experiment och observationsstudier. I kapitel 2 och 3 gick vi igenom hur vi kan mäta och jämföra samvariation, introducerade kovarians och korrelation samt regressionsanalys med minstakvadratmetoden.

I kapitel 4 utökade vi regressionsanalysen till flera variabler för att kunna konstanthålla andra faktorer, använda dummyvariabler och interaktion, samt utföra regressionsanalys med matriser, vilket gav oss en generalisering av minstakvadratmetoden för valfritt antal variabler och observationer. Vi har gått igenom hur regressionsanalys är nära förknippat med analys av orsakssamband.

I kapitel 5 har vi introducerade analys under osäkerhet och hur vi kan hantera detta genom att arbeta med sannolikhetsfördelningar, statistiska test, punktestimat samt skatta konfidensintervall. Vi har även gått igenom hur vi kan kombinera regressionsanalys med sannolikhet.

I detta sista avsnitt ska vi nu reflektera över vad som egentligen är poängen med allt detta?

### Från mönster till kausalitet

I denna kurs har vi utgått från att vi ska använda regressionsanalys för att förstå orsakssamband. Men som vi gått igenom flera gånger är själva orsakssambandet något vi lägger till som en tolkning.

Regressionsanalysen är i grund och botten en metod för att spåra mönster i information (data). Vi berörde detta i [avsnitt 2.3](https://www.dropbox.com/scl/fi/357utiljgf7iuk78jxhtv/2-3-Samvariation-1.docx?rlkey=ewtjvwrihoflt8tlvf8dccppo&dl=0), där vi även kort gick igenom andra metoder för att studera samvariation.

Men kombinerat med rätt forskningsdesign, med kontroll och behandling, är dock regressionsanalys ett kraftfullt verktyg för att studera orsak och verkan.

#### Linjära associationer

I denna kurs har vi gått igenom hur vi kan estimera regressionsmodeller med minstakvadratmetoden. Det vi gör då är att estimera *linjära regressionsmodeller*.

Linjära regressionsmodeller prövar om den genomsnittliga relationen mellan två eller flera variabler kan beskrivas med en linjär ekvation. Genom att estimera regressionsmodellen, utföra statistiska test och jämföra hur regressionslinjen blir jämfört med data, kan vi se om regressionsmodellen ger en godtagbar linjär approximation (en ungefärlig bild) av verkligheten (de data vi studerar).

Det kan vara svårt att pröva om en regressionsmodell är en bra linjär approximation av data. Ett första steg kan vara att inspektera data i till exempel ett punktdiagram eller histogram, och jämföra olika spridningsmått. Vi kan både jämföra hur den förklarade variabeln samvarierar med våra förklarande variabler, och jämföra hur residualerna fördelar sig kring en regressionslinje.

Att en regressionsmodell är linjär innebär att alla koefficienter i modellen har exponent 1. Följande modeller är inte linjära:

[\\(\\begin{matrix} Y & \\ = a + \\frac{1}{b}X + e \\\\ logZ & \\ = \\alpha + \\beta D + \\epsilon \\end{matrix}\\)]{.math .inline} (1)

I den första regressionsmodellen har vi [\\(\\frac{1}{b} = b\^{- 1}\\)]{.math .inline}. I den andra modellen har vi att [\\(log\\left( Z\_{1} + Z\_{2} \\right) \\neq log\\left( Z\_{1} \\right) + log\\left( Z\_{2} \\right)\\)]{.math .inline}, där [\\(Z\_{1}\\)]{.math .inline} och [\\(Z\_{2}\\)]{.math .inline} är två valfria värden i variabel [\\(Z\\)]{.math .inline}. Detta innebär att modellen inte är linjär.

Linjära regressionsmodeller har många fördelar. Det är till exempel ofta relativt enkelt att tolka vad varje koefficient i modellen innebär. Det kan snabbt bli mer komplicerat om vi arbetar ickelinjär samvariation.

Men det finns även nackdelar med linjära regressionsmodeller -- eftersom de enbart kan användas för att fånga just linjär samvariation. Risken finns då att vi missar samvariation som existerar i data men som inte är linjär.

#### BNP och logaritmerad BNP

Även om modellen BLIR ickelinjär i originalskala, kan vi ofta estimera den med minstakvadratmetoden genom att transformera variablerna först.

Ett sätt att illustrera detta är att jämföra BNP för Sverige var tionde år under perioden 1800--2000, se tabell 1 med årtal, BNP och logaritmerad BNP. I figur 1 illustreras den linjära trenden över tid för BNP respektive [\\(ln(BNP)\\)]{.math .inline} i varsitt diagram.

I det vänstra diagrammet är trenden skattad utifrån följande regressionsmodell:

[\\(Y\_{t} = a + b\\text{Å}R\_{t} + V\_{t}\\)]{.math .inline} (2)

där [\\(Y\_{t}\\)]{.math .inline} är BNP år [\\(t,\\text{Å}R\_{t}\\)]{.math .inline} är en variabel för årtalen [\\(1800,1810,\\ldots,1990\\)]{.math .inline}, 2000. Bokstäverna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} är koefficienterna och [\\(V\_{t}\\)]{.math .inline} är feltermen. I det högra diagrammet har vi estimerat regressionsmodellen:

[\\(\\ln Y\_{t} = c + d\\text{Å}R\_{t} + U\_{t}\\)]{.math .inline} (3)

där [\\(lnY\_{t}\\)]{.math .inline} är logaritmerad BNP år [\\(t,c\\)]{.math .inline} och [\\(d\\)]{.math .inline} är koefficienterna och [\\(U\_{t}\\)]{.math .inline} är feltermen.

En linjär modell passar relativt dåligt när vi använder nominell BNP i kronor, vilket vi kan se i det vänstra diagrammet. Datapunkterna i diagrammet är placerade ungefär i formen av ett liggande [\\(L\\)]{.math .inline}. Utvecklingen är exponentiell och inte linjär.

Regressionslinjen fångar visserligen den positiva utvecklingen men ger inte en representativ bild av den långsiktiga trenden i BNP. Under åren 1800---1850, till vänster i diagrammet, är regressionslinjen under 0.

Detta innebär att regressionsmodellen predikterar att BNP var negativ alla år före 1850. Eftersom BNP är ett mått på allting som produceras, köps och säljs, i ett samhälle så är detta inte möjligt.

Den linjära modellen fångar dock den långsiktiga trenden i logaritmerad BNP relativt väl, vilket syns i det högra diagrammet där punkterna följer regressionslinjen för alla åren 1800--2000.

**Tabell 1: BNP och logarimterad BNP**

  -----------------------------------------------------------------------------
     **År**   **BNP**   **ln(BNP)** ** **      **År**     **BNP**   **ln(BNP)**
  --------- --------- ------------- ------- --------- ----------- -------------
       1800       115           4,7              1910       3 302           8,1

       1810       178           5,2              1920      12 200           9,4

       1820       278           5,6              1930       9 271           9,1

       1830       306           5,7              1940      13 979           9,5

       1840       382           5,9              1950      31 827          10,4

       1850       461           6,1              1960      72 272          11,2

       1860       743           6,6              1970     175 222          12,1

       1870       938           6,8              1980     531 884          13,2

       1880     1 314           7,2              1990   1 365 700          14,1

       1890     1 477           7,3              2000   2 013 311          14,5

       1900     2 245           7,7                                            
  -----------------------------------------------------------------------------

Förklaring: Data från [www.historia.se](http://www.historia.se).

**Figur 1: BNP och logaritmerad BNP**

![En bild som visar diagram, linje, Graf, skärmbild Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-7%20-%20Vad%20är%20egentligen%20regressionsanalys/img/k2-5-7-image1.png){style="width:4.89251in;height:2.7008in"}

Förklaring. Data från [www.historia.se](http://www.historia.se), samma som i tabell 1.

### Varför fungerar logaritm för BNP?

BNP växer exponentiellt: Varje år ökar BNP i genomsnitt med en viss procentsats, inte ett fast belopp i kronor. Exponentiell tillväxt kan beskrivas matematiskt med följande ekvation:

[\\(Y\_{t} = Y\_{0}\*\\ e\^{rt}\\)]{.math .inline} (4)

där [\\(Y\_{t}\\)]{.math .inline} är BNP valfritt år [\\(t\\)]{.math .inline}. [\\(Y\_{0}\\)]{.math .inline} är BNP år noll (startåret). Faktorn [\\(e\^{rt}\\)]{.math .inline} är Eulers tal [\\(e\\)]{.math .inline}. Exponenten [\\(rt\\)]{.math .inline} är tillväxttakten [\\(r\\)]{.math .inline} multiplicerad med antal år [\\(t\\)]{.math .inline}. Tar vi naturliga logaritmen av detta uttryck får vi:

[\\(\\ln\\left( Y\_{t} \\right) = ln\\left( Y\_{0} \\right) + rt\\)]{.math .inline} (5)

När vi tar naturliga logaritmen av BNP blir den exponentiella tillväxten linjär, vilket gör att vår linjära regressionsmodell fungerar. Detta är vanligt för många ekonomiska variabler som växer kjust procentuellt.

#### En regressionsmodell fångar inte allt

Låt oss gå igenom ett exempel till, men denna gång med påhittade data. Figur 2 beskriver två diagram där prickarna återigen visar kombinerade värden av variablerna [\\(x\\)]{.math .inline} och [\\(y\\)]{.math .inline}. De räta linjerna är regressionslinjer beräknade utifrån minstakvadratmetoden för regressionsmodeller av typen:

[\\(y = a + bx + v\\)]{.math .inline} (6)

Nu är linjerna horisontella, vilket innebär att lutningskoefficienterna är lika med 0 i båda fallen. När [\\(x\\)]{.math .inline} ökar är detta inte associerat med någon förändring i variabel [\\(y\\)]{.math .inline}.

Men när vi tittar på diagrammen i figuren kan vi tydligt se att prickarna i de båda diagrammen samvarierar i olika mönster. I det vänstra diagrammet är relationen mellan variablerna tydligt positiv, men endast om vi studerar observationerna som två grupper.

I det högra diagrammet syns en ickelinjär samvariation när vi tittar på alla observationer. Tittar vi enbart på den vänstra halvan av diagrammet syns en positiv samvariation, medan punkterna i den högra halvan av diagrammet har en negativ samvariation.

Nu är data påhittade men om dessa punkter representerade någon typ av verklig information skulle det till exempel kunna vara en indikation på ett kausalt samband -- som vår linjära regressionsmodell alltså missar.

Detta innebär inte att regressionsanalys är dåligt. Men vi måste vara noga med hur vi formulerar våra regressionsmodeller. Vi måste inspektera data både genom att beräkna resultat och jämföra dom i diagram och tabeller. Om associationen mellan variabler inte är linjär kan vi behöva transformera variablerna (till exempel ta naturliga logaritmen) eller ändra i vår regressionsmodell. Vi kan till exempel behöva lägga till kvadratiska termer i vår regressionsmodell eller använda andra metoder, vilket inte ryms att gå igenom här.

**Figur 2: Två exempel på mönster som inte fångas av vår regressionsmodell**

![En bild som visar linje, diagram, skärmbild, Rektangel Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-7%20-%20Vad%20är%20egentligen%20regressionsanalys/img/k2-5-7-image2.png){style="width:5.33774in;height:2.60709in"}

Förklaring: Prickarna i diagrammen följer tydliga mönster. Regressionslinjerna i diagrammen är de svarta horisontella linjerna i diagrammen, ritade med regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline}. Lutningskoefficient [\\(b\\)]{.math .inline} är 0. Regressionslinjerna i diagrammen indikerar ingen association mellan [\\(X\\)]{.math .inline} och [\\(Y\\)]{.math .inline}, trots att det finns en form av samvariation.

#### Linjära regressioner är ändå väldigt användbara

Utifrån ovanstående beskrivning kanske vissa får känslan att det är meningslöst med linjära regressioner. Men ickelinjära regressionsmodeller är inte heller en universallösning.

På samma sätt som vi riskerar att missa viktiga delar när vi använder linjära regressionsmodeller riskerar vi att missa viktiga slutsatser om vi enbart använder ickelinjära regressionsmodeller.

Linjära regressioner är mycket användbara -- till rätt typ av problem. Många gånger är vi intresserade av samvariationen inom ett avgränsat område, där just den linjära samvariationen är det intressanta.

#### Vi behöver både diagram och beräkningar

Det är även viktigt att studera data noga på flera sätt, både i diagram och beräkningar, även när vi faktiskt finner samvariation. Ett sätt att illustrera detta ges i figur 3.

Figur 3 visar fyra exempel där kombinerade värden för variablerna X (horisontella axeln) och Y (vertikala axeln) är uppritade. y-variabeln och x-variabeln samma medelvärde: [\\(\\overline{Y} = 7,5\\)]{.math .inline} och [\\(\\overline{X} = 9\\)]{.math .inline}. Koefficienterna [\\(a\\)]{.math .inline} och [\\(b\\)]{.math .inline} i regressionsmodellen [\\(Y = a + bX + V\\)]{.math .inline} som ritar ut regressionslinjerna i respektive diagram har samma värden i alla fyra diagrammen: [\\(\\widehat{a} = 3\\)]{.math .inline} och [\\(\\widehat{b} = 0,5\\)]{.math .inline}. Linjerna lutar upp mot höger i respektive diagram, vilket ges av att [\\(\\widehat{b} \> 0\\)]{.math .inline}.

I alla fyra diagrammen kan vi alltså med hjälp av minstakvadratmetoden finna en positiv samvariation som i regressionsmodellen ser lika ut. Exemplet illustrerar att trots att mönstren i de fyra diagrammen skiljer sig kraftigt åt kan beräknade resultat lätt ge intryck av att olika samlingar med data har mer gemensamt än de egentligen har.

Dessa fyra diagram presenterades första gången 1973 av den brittiske statistikern Francis John Anscombe ([Anscombe, 1973](https://www.lithoguru.com/scientist/statistics/Anscombe_Graphs%20in%20Statistical%20Analysis_1973.pdf)). Exemplen illustrerar vikten av att både räkna på samvariation och studera data i diagram.

Trots att punkterna i diagrammen är placerade i olika mönster kan vi få samma positiva linjära samvariation i alla fyra exempel. I det övre vänstra diagrammet kan vi se att punkterna ligger utspridda längs med den diagonala linjen upp mot högra hörnet i diagrammet. I det övre högra diagrammet ligger punkterna i en konkav båge, upp mot diagrammets högra hörn.

Punkternas mönster är tydligt ickelinjärt, men vi kan ändå beräkna en linjär positiv samvariation. I det nedre vänstra diagrammet ligger alla punkter utom en på en rak linje. I det nedre högra diagrammet ligger alla punkter utom en på en vertikal linje.

**Figur 3: Fyra exempel på data där regressionsmodellen** [\\(\\mathbf{Y = a + bX + V}\\)]{.math .inline} **ger samma resultat**![En bild som visar linje, diagram, Graf, text Automatiskt genererad beskrivning](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\5%20-%20Regressionsanalys%20med%20sannolikhet\5-7%20-%20Vad%20är%20egentligen%20regressionsanalys/img/k2-5-7-image3.png){style="width:5.20741in;height:3.4165in"}

Förklaring: De fyra diagrammen beskriver påhittade data presenterade i [Anscombe 1973](https://www.lithoguru.com/scientist/statistics/Anscombe_Graphs%20in%20Statistical%20Analysis_1973.pdf).

### Vad är egentligen regressionsanalys?

Regressionsanalys är ett verktyg för att mäta samvariation och en grund för kausal inferens, när den kombineras med bra forskningsdesign. Regressionsanalys är ett sätt att testa teorier om hur världen fungerar men som samtidigt kräver både matematisk precision och kritiskt tänkande.

Regressionsanalys är inte matte för mattens skull. Detta är grunden för hur vi kan lära oss något pålitligt om orsak och verkan i en komplex värld. Utan dessa metoder skulle vi vara begränsade till anekdoter och gissningar. Med dessa metoder kan vi utvärdera om mediciner fungerar, studera effekter av politiska beslut och förstå ekonomiska samband.

Som detta avsnitt förhoppningsvis illustrerar är ett analytiskt verktyg aldrig bättre än analytikern som använder metoden. Regressionsanalys måste därför användas med kritisk reflektion och ödmjukhet om metodens begränsningar. Allt detta är grunden för vetenskapligt tänkande.

### Video

### Uppgifter

::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-7"]=[  {    "id": "k2-5-7-001",    "name": "Uppgift 1",    "exercise": "Vad är regressionsanalys i grunden?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "En metod som automatiskt bevisar orsakssamband",          "En metod för att spåra mönster i information (data), som kan ge grund för kausal inferens vid rätt forskningsdesign",          "En metod som enbart kan användas för linjära samband",          "En metod som ersätter behovet av experiment"        ],        "correct": "En metod för att spåra mönster i information (data), som kan ge grund för kausal inferens vid rätt forskningsdesign"      }    },    "error": { "message": "Regressionsanalys mäter samvariation – men vad krävs utöver det för att tala om orsakssamband?" },    "correct": { "message": "Rätt! Regressionsanalys är i grunden en metod för att spåra mönster i data. Orsakssambandet är en tolkning vi lägger till. Kombinerat med rätt forskningsdesign – experiment eller kvasiexperiment – är regressionsanalys ett kraftfullt verktyg för kausal inferens." }  },  {    "id": "k2-5-7-002",    "name": "Uppgift 2",    "exercise": "Varför passar en linjär regressionsmodell dåligt för Sveriges BNP i kronor (utan logaritmering) under perioden 1800–2000?",    "image": "img/k2-5-7-image1.png",    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Eftersom BNP-data saknar variation",          "Eftersom BNP växer exponentiellt, inte linjärt – en linjär modell predikterar till och med negativ BNP för åren före 1850",          "Eftersom regressionsanalys inte kan hantera tidsseriedata",          "Eftersom BNP-data alltid måste logaritmeras av metodologiska skäl"        ],        "correct": "Eftersom BNP växer exponentiellt, inte linjärt – en linjär modell predikterar till och med negativ BNP för åren före 1850"      }    },    "error": { "message": "Tänk på vad som händer när man passar en linjär modell till exponentiellt växande data. Vad händer med de predikterade värdena för tidiga år?" },    "correct": { "message": "Rätt! BNP växer exponentiellt och en linjär modell fångar inte denna kurva. Regressionslinjen hamnar till och med under 0 för åren 1800–1850, vilket är omöjligt för BNP. Med logaritmerad BNP (\\(\\ln Y_t\\)) blir tillväxten linjär och modellen fungerar." }  },  {    "id": "k2-5-7-003",    "name": "Uppgift 3",    "exercise": "Anscombe-kvartetten består av fyra dataset som alla ger identiska regressionsresultat (samma \\(\\widehat{a}\\), \\(\\widehat{b}\\) och \\(R^2\\)) men har vitt skilda datamönster. Vad illustrerar detta om regressionsanalys?",    "image": "img/k2-5-7-image3.png",    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Att fyra identiska dataset alltid ger identiska regressionsresultat",          "Att kraftigt olika datamönster kan ge identiska regressionsresultat, vilket visar vikten av att studera data i diagram",          "Att regressionsanalys är opålitlig och bör undvikas",          "Att minstakvadratmetoden alltid hittar den korrekta modellen"        ],        "correct": "Att kraftigt olika datamönster kan ge identiska regressionsresultat, vilket visar vikten av att studera data i diagram"      }    },    "error": { "message": "Alla fyra dataseten i Anscombe-kvartetten ger samma \\(\\widehat{a}\\) och \\(\\widehat{b}\\), trots att prickarnas mönster skiljer sig kraftigt. Vad lär oss detta?" },    "correct": { "message": "Rätt! Anscombe-kvartetten (1973) visar att dataset med vitt skilda mönster – linjära, ickelinjära, med extremvärden – kan ge exakt samma regressionskoefficienter. Det visar att beräknade resultat aldrig räcker; vi måste också inspektera data visuellt i diagram." }  },  {    "id": "k2-5-7-004",    "name": "Uppgift 4",    "exercise": "BNP växer exponentiellt enligt \\(Y_t = Y_0 \\cdot e^{rt}\\). Vad händer när vi tar den naturliga logaritmen av båda leden?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\ln(Y_t) = \\ln(Y_0) \\cdot rt\\) (produkten av logaritm och exponenten)",          "\\(\\ln(Y_t) = \\ln(Y_0) + rt\\) (linjärt samband med tid)",          "\\(\\ln(Y_t) = Y_0 + e^{rt}\\) (oförändrad exponent)",          "\\(\\ln(Y_t) = rt\\) (konstanten \\(Y_0\\) försvinner)"        ],        "correct": "\\(\\ln(Y_t) = \\ln(Y_0) + rt\\) (linjärt samband med tid)"      }    },    "error": { "message": "Använd logaritmregeln: \\(\\ln(a \\cdot b) = \\ln(a) + \\ln(b)\\) och \\(\\ln(e^x) = x\\)." },    "correct": { "message": "Rätt! \\(\\ln(Y_0 \\cdot e^{rt}) = \\ln(Y_0) + \\ln(e^{rt}) = \\ln(Y_0) + rt\\). Logaritmeringen omvandlar den exponentiella tillväxten till ett linjärt samband, vilket gör att vi kan estimera modellen med minstakvadratmetoden." }  },  {    "id": "k2-5-7-005",    "name": "Uppgift 5",    "exercise": "Vilket av följande är en korrekt slutsats om hur regressionsanalys bör användas?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Regressionsanalys bevisar automatiskt orsakssamband om p-värdet är under 0,05",          "Regressionsanalys bör användas med kritisk reflektion och ödmjukhet om metodens begränsningar",          "Linjär regressionsanalys är överlägsen ickelinjär i alla situationer",          "Regressionsanalys är bara meningsfull om residualerna är perfekt normalfördelade"        ],        "correct": "Regressionsanalys bör användas med kritisk reflektion och ödmjukhet om metodens begränsningar"      }    },    "error": { "message": "Tänk på de exempel med Anscombe och logaritmerad BNP. Vad lär de oss om hur metoder måste användas?" },    "correct": { "message": "Rätt! Regressionsanalys är ett kraftfullt verktyg men inget trollspö. Det kräver att analytikern förstår metodens antaganden och begränsningar, inspekterar data noga i diagram och beräkningar, och tillämpar kritiskt tänkande vid tolkning av resultat. Ett analytiskt verktyg är aldrig bättre än analytikern som använder det." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-7"></div>

