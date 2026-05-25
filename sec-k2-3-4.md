# Härled estimatorerna {#k2-3-4}

### Begrepp
*Inga nya begrepp i detta avsnitt.*

### Teori
Detta avsnitt är matematiskt intensivt och INTE nödvändigt för att använda regressionsanalys i praktiken. Om du känner att matematiken blir för tung kan du hoppa över detta avsnitt för nu och komma tillbaka senare om du vill förstå metoderna mer på djupet. Fokusera på att förstå vad estimatorerna gör. Det är inte avgörande att förstå varje steg i härledningarna.
Varför bry sig om härledningen?
1.  Det ger djupare förståelse för minstakvadratmetodens logik.
2.  Det visar att metoderna bygger på genomtänkt matematik.
3.  Det förbereder dig för mer avancerade metoder senare.

#### Utgångspunkter
För regressionsmodellen $Y_{i} = a + bX_{i} + V_{i}$ där $Y_{i}$ och $X_{i}$ är variabler och $V_{i}$ är felterm, introducerade vi estimatorer för koefficienterna $\widehat{a}$ och $\widehat{b}$ i avsnitt 2.5:


$$\widehat{a} = \overline{Y} - \widehat{b}\overline{X} \tag{1}$$

$\widehat{b} = \frac{\sum_{i}^{}{\left( X_{i} - \overline{X} \right)\left( Y_{i} - \overline{Y} \right)}}{\sum_{i}^{}\left( X_{i} - \overline{X} \right)^{2}}$
Nu ska vi gå igenom hur vi kan härleda estimatorerna. Minstakvadratmetoden låter oss definiera estimatorerna $\widehat{a}$ och $\widehat{b}$ så att vi minimerar summan av de kvadrerade residualerna


$$\sum_{i}^{}{\widehat{V}}_{i}^{2} = \sum_{}^{}\left( Y_{i} - \widehat{Y_{i}} \right)^{2} \tag{2}$$

Estimatorerna kan därför härledas ur ett minimeringsproblem. Om du känner dig osäker på maximeringsproblem och minimeringsproblem, se Mattebokens avsnitt om [största och minsta värde under matte 3](https://www.matteboken.se/lektioner/matte-3/derivatan-och-grafen/storsta-och-minsta-varde#!/).
Summan av de kvadrerade residualerna blir:
$\sum_{i = 1}^{n}{\widehat{V}}_{i}^{2} = {\widehat{V}}_{i}^{2} + {\widehat{V}}_{i}^{2} + \ldots + {\widehat{V}}_{i}^{2}$ (3)$ $${= \left( Y_{1} - \widehat{Y_{1}} \right)^{2} + \left( Y_{2} - \widehat{Y_{2}} \right)^{2} + \ldots + \left( Y_{n} - \widehat{Y_{n}} \right)^{2} }{= \sum_{i = 1}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2}}$
där n är antal observationer, $\widehat{Y}$ är predikterade $Y$. För att kunna skatta $\widehat{Y} = \widehat{a} + \widehat{b}X$ behöver vi estimera $\widehat{a}$ och $\widehat{b}$. Vi börjar med att sätta in denna definition av $\widehat{Y}$ i uttrycket från ekvation 3:


$$\sum_{i = 1}^{n}{\widehat{V}}_{i}^{2} = \sum_{i = 1}^{n}\left( Y_{i} - \widehat{Y_{i}} \right)^{2} \tag{4}$$



$$= \sum_{i = 1}^{n}\left( Y_{i} - \left( \widehat{a} + \widehat{b}X_{i} \right) \right)^{2}$$



$$= \sum_{i = 1}^{n}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} \right)^{2}$$

#### Minimera summan av kvadrerade residualerna
Nu har vi en ekvation där summan av kvadrerade residualerna $\sum_{i}^{}\widehat{{V_{i}}^{2}}$ är en funktion av estimerade $\widehat{a}$ och $\widehat{b}$. Det är denna funktion som vi ska minimera med hänsyn till $\widehat{a}$ och $\widehat{b}$, vilket vi kan skriva som ett minimeringsproblem:


$$\min_{\text{m.h.t. }\widehat{a},\widehat{b}}{\sum_{i = 1}^{n}{\widehat{V}}_{i}^{2}} = \sum_{i = 1}^{n}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} \right)^{2} \tag{5}$$

Vi deriverar högerledet med hänsyn till $\widehat{a}$ och $\widehat{b}$. Detta ger oss två ekvationer som kallas \"förstagradsvillkor\" (eller \"första ordningens villkor\"), alltså villkor som måste uppfyllas vid en minimumpunkt eller maximumpunkt.


$$\left\lbrack \sum_{i = 1}^{n}{\widehat{V}}_{i}^{2} \right\rbrack_{\widehat{a}}\' = - 2\sum_{i = 1}^{n}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} \right) = 0 \tag{6}$$

$\left\lbrack \sum_{i = 1}^{n}{\widehat{V}}_{i}^{2} \right\rbrack_{\widehat{b}}\' = - 2\sum_{i = 1}^{n}{X_{i}(Y_{i} - \widehat{a} - \widehat{b}X_{i})} = 0$
där båda resultaten uppstår genom att vi deriverar parentesen (flyttar ned exponent 2) och deriverar innehållet i respektive parentes. När vi deriverar med hänsyn till $\widehat{a}$ får vi --1. När vi deriverar med hänsyn till $\widehat{b}$ får vi $--X_{i}$. Vi sätter -2 till vänster om summeringstecknet eftersom dessa saker inte berörs av summeringen.
Notera att det första villkoret i ekvation 6 innebär att $\sum_{i}^{}\widehat{V_{i}} = 0$ och det andra villkoret kan beskrivas som: $\sum_{}^{}X_{i}\widehat{V_{i}} = 0$. Detta kommer vi att ha användning av längre fram.

#### Lösa ut $\widehat{a}$ och $\widehat{b}$
Från de två förstagradsvillkoren i ekvation 6 kan vi lösa ut $\widehat{a}$ och $\widehat{b}$. Vi börjar med det första villkoret:


$$- 2\sum_{i = 1}^{n}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} \right) = 0 \tag{7}$$

$( - 2)\sum_{i = 1}^{n}{Y_{i} - ( - 2)}\sum_{i = 1}^{n}{\widehat{a} - ( - 2)}\sum_{i = 1}^{n}{\widehat{b}X_{i}} = 0$
Eftersom alla termer är multiplicerade med -2 kan vi stryka denna faktor. Eftersom $\widehat{a}$ är konstant över alla observationer är termen $\sum_{i}^{n}\widehat{a}$ samma sak som antal observationer gånger $\widehat{a}$: $\sum_{i}^{n}\widehat{a} = n\widehat{a}$. Vi kan nu skriva:
$0 = ( - 2)\sum_{i = 1}^{n}{Y_{i}\ - ( - 2)}\sum_{i = 1}^{n}{\widehat{a} - ( - 2)}\sum_{i = 1}^{n}{\widehat{b}X_{i}}$ (8)$ $${0 = \sum_{i = 1}^{n}Y_{i} - \sum_{i = 1}^{n}\widehat{a}\sum_{i = 1}^{n}{\widehat{b}X_{i}} }{0 = \sum_{i = 1}^{n}Y_{i} - n\widehat{a} - \sum_{i = 1}^{n}{\widehat{b}X_{i}} }{n\widehat{a} = \sum_{i = 1}^{n}Y_{i} - \sum_{i = 1}^{n}{\widehat{b}X_{i}}\ }$
Vi dividerar med $n$ så att termen längst till höger blir $\frac{1}{n}\sum_{}^{}{\widehat{b}X_{i}}$. Medelvärdet för $X$ kan skrivas $\overline{X} = \frac{1}{n}\sum_{i}^{n}X_{i}$ vilket ger:


$$\widehat{a} = \frac{1}{n}\sum_{i = 1}^{n}Y_{i} - \frac{1}{n}\sum_{i = 1}^{n}{\widehat{b}X} \tag{9}$$

$\widehat{a} = \overline{Y} - \widehat{b}\overline{X}$
Nu har vi ett uttryck för $\widehat{a}$. För att härleda $\widehat{b}$ börjar vi med det andra förstagradsvillkoret i ekvation 7:


$$0 = \sum_{i = 1}^{n}{- 2x_{i}\left( Y_{i} - \widehat{a} - \widehat{b}X_{i} \right)} \tag{10}$$

$= \sum_{i = 1}^{n}X_{i}Y_{i} - \sum_{i = 1}^{n}X_{i}\widehat{a} - \sum_{i = 1}^{n}X_{i}\widehat{b}X_{i}$
Eftersom konstanterna inte summeras flyttar vi dessa till vänster om summatecknen. I termen längst till höger har vi $x_{i}*x_{i} = x_{i}^{2}$. Vi byter ut $\widehat{a}$ mot definitionen från ekvation 9:


$$0 = \sum_{i = 1}^{n}X_{i}Y_{i} - \widehat{a}\sum_{i = 1}^{n}X_{i} - \widehat{b}\sum_{i = 1}^{n}X_{i}X_{i} \tag{11}$$



$$= \sum_{i = 1}^{n}X_{i}Y_{i} - \widehat{a}\sum_{i = 1}^{n}X_{i} - \widehat{b}\sum_{i = 1}^{n}X_{i}^{2}$$



$$= \sum_{i = 1}^{n}X_{i}Y_{i} - \left( \overline{Y} - \widehat{b}\overline{X} \right)\sum_{i = 1}^{n}X_{i} - \widehat{b}\sum_{i = 1}^{n}X_{i}^{2}$$



$$= \sum_{i = 1}^{n}X_{i}Y_{i} - \overline{Y}\sum_{i = 1}^{n}X_{i} + \widehat{b}\overline{X}\sum_{i = 1}^{n}X_{i} - \widehat{b}\sum_{}^{}X_{i}^{2}$$



$$= \sum_{i = 1}^{n}X_{i}Y_{i} - \overline{Y}\sum_{i = 1}^{n}X_{i} - \widehat{b}\left( \sum_{i = 1}^{n}X_{i}^{2} - \overline{X}\sum_{i = 1}^{n}X_{i} \right)$$

Vi flyttar över $\widehat{b}$ till vänstersidan av likhetstecknet:


$$\widehat{b}\left( \sum_{i = 1}^{n}X_{i}^{2} - \overline{X}\sum_{i = 1}^{n}X_{i} \right) = \sum_{i = 1}^{n}X_{i}Y_{i} - \overline{Y}\sum_{i = 1}^{n}X_{i} \tag{12}$$



$$\widehat{b} = \frac{\sum_{i = 1}^{n}X_{i}Y_{i} - \overline{Y}\sum_{i = 1}^{n}X_{i}}{\sum_{i = 1}^{n}X_{i}^{2} - \overline{X}\sum_{i = 1}^{n}X_{i}}$$

Nu har vi ett uttryck för $\widehat{b}$. För att visa att detta är samma som uttrycket i ekvation 1 och [avsnitt 2.5](https://www.dropbox.com/scl/fi/fdixvbrl3fwqwuaknz604/2-5-Felterm-residual-och-ett-r-kneexempel.docx?rlkey=qerqdzrn6e5hejx1it85qrtun&st=33su91fr&dl=0) kan vi skriva om täljaren och nämnaren. Detta ger:


$$\widehat{b} = \frac{\sum_{i = 1}^{n}X_{i}Y_{i} - \overline{Y}\sum_{i = 1}^{n}Y_{i}}{\sum_{i = 1}^{n}X_{i}^{2} - \overline{X}\sum_{i = 1}^{n}X_{i}} \tag{13}$$



$$= \frac{\sum_{i = 1}^{n}X_{i}Y_{i} - \overline{Y}\sum_{i}^{}X_{i} - \overline{X}\sum_{i = 1}^{n}Y_{i} + \overline{X}\sum_{i = 1}^{n}Y_{i}}{\sum_{i = 1}^{n}X_{i}^{2} - \overline{X}\sum_{i = 1}^{n}X_{i} - n\overline{X^{2}} + n\overline{X^{2}}}$$



$$\frac{\sum_{i = 1}^{n}{\left( X_{i} - \overline{X} \right)\left( Y_{i} - \overline{Y} \right)}}{\sum_{I = 1}^{n}\left( X_{i} - \overline{X} \right)^{2}}$$

Nu har vi samma sak som ekvation 1.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-3-4"]=[  {    "id": "k2-3-4-001",    "name": "Uppgift 1",    "exercise": "Minstakvadratmetoden härleder estimatorerna \\(\\widehat{a}\\) och \\(\\widehat{b}\\) genom att minimera ett uttryck. Vilket uttryck minimeras?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\sum_{i=1}^{n}(Y_i - \\widehat{Y}_i)\\) — summan av residualerna",          "\\(\\sum_{i=1}^{n}(Y_i - \\widehat{Y}_i)^2\\) — summan av de kvadrerade residualerna",          "\\(\\sum_{i=1}^{n}|Y_i - \\widehat{Y}_i|\\) — summan av absolutbeloppen av residualerna",          "\\(\\sum_{i=1}^{n}(Y_i - \\overline{Y})^2\\) — totalsumman av kvadrater"        ],        "correct": "\\(\\sum_{i=1}^{n}(Y_i - \\widehat{Y}_i)^2\\) — summan av de kvadrerade residualerna"      }    },    "error": { "message": "Metoden heter <em>minsta kvadrat</em>metoden. Tänk på vad som kvadreras och vad som summeras." },    "correct": { "message": "Rätt! Minstakvadratmetoden minimerar summan av de kvadrerade residualerna: \\(\\sum_{i=1}^{n}\\hat{V}_i^2 = \\sum_{i=1}^{n}(Y_i - \\hat{Y}_i)^2\\). Det är detta minimeringsproblem som löses för att hitta estimatorerna \\(\\widehat{a}\\) och \\(\\widehat{b}\\)." }  },  {    "id": "k2-3-4-002",    "name": "Uppgift 2",    "exercise": "Förstagradsvillkoret med avseende på \\(\\widehat{a}\\) för minstakvadratproblemet ger: \\[-2\\sum_{i=1}^{n}(Y_i - \\widehat{a} - \\widehat{b}X_i) = 0\\] Vilket av följande påståenden följer direkt av detta villkor?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "\\(\\sum_{i}^{}\\widehat{V}_i = 0\\) — summan av residualerna är noll",          "\\(\\sum_{i}^{}\\widehat{V}_i^2 = 0\\) — summan av kvadrerade residualerna är noll",          "\\(\\widehat{a} = 0\\) — konstanttermen är alltid noll",          "\\(\\sum_{i}^{}X_i\\widehat{V}_i = 0\\) — detta är det andra förstagradsvillkoret"        ],        "correct": "\\(\\sum_{i}^{}\\widehat{V}_i = 0\\) — summan av residualerna är noll"      }    },    "error": { "message": "Uttrycket \\(Y_i - \\widehat{a} - \\widehat{b}X_i\\) är samma sak som \\(Y_i - \\widehat{Y}_i\\), det vill säga residualen \\(\\widehat{V}_i\\). Vad innebär det att summan av dessa är noll?" },    "correct": { "message": "Rätt! Förstagradsvillkoret \\(-2\\sum(Y_i - \\widehat{a} - \\widehat{b}X_i) = 0\\) innebär att \\(\\sum\\hat{V}_i = 0\\) — summan av residualerna är alltid noll när vi estimerar med minstakvadratmetoden. Detta är en viktig egenskap hos OLS-estimatorn." }  },  {    "id": "k2-3-4-003",    "name": "Uppgift 3",    "exercise": "Från förstagradsvillkoret med avseende på \\(\\widehat{a}\\) härleds estimatorn: \\[\\widehat{a} = \\overline{Y} - \\widehat{b}\\,\\overline{X}\\] Vad innebär denna formel geometriskt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Regressionslinjen passerar alltid genom origo \\((0, 0)\\)",          "Regressionslinjen passerar alltid genom punkten \\((\\overline{X}, \\overline{Y})\\) — medelvärdespunkten",          "Regressionslinjen har alltid positiv lutning",          "Regressionslinjen minimerar medelvärdet av \\(Y\\)"        ],        "correct": "Regressionslinjen passerar alltid genom punkten \\((\\overline{X}, \\overline{Y})\\) — medelvärdespunkten"      }    },    "error": { "message": "Sätt in \\(X = \\overline{X}\\) i regressionslinjens ekvation \\(\\widehat{Y} = \\widehat{a} + \\widehat{b}X\\) och använd att \\(\\widehat{a} = \\overline{Y} - \\widehat{b}\\overline{X}\\). Vad får du för \\(\\widehat{Y}\\)?" },    "correct": { "message": "Rätt! Om vi sätter \\(X = \\overline{X}\\) i regressionsekvationen: \\(\\widehat{Y} = (\\overline{Y} - \\widehat{b}\\overline{X}) + \\widehat{b}\\overline{X} = \\overline{Y}\\). Regressionslinjen passerar alltså alltid genom medelvärdespunkten \\((\\overline{X}, \\overline{Y})\\)." }  },  {    "id": "k2-3-4-004",    "name": "Uppgift 4",    "exercise": "I regressionsmodellen \\(Y = a + bX + V\\) ges estimatorn för lutningskoefficienten \\(\\widehat{b}\\) av: \\[\\widehat{b} = \\frac{\\sum_{i=1}^{n}(X_i - \\overline{X})(Y_i - \\overline{Y})}{\\sum_{i=1}^{n}(X_i - \\overline{X})^2}\\] Vad mäter täljaren i detta uttryck?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Variansen för \\(X\\)",          "Kovariansen (samvariationen) mellan \\(X\\) och \\(Y\\) — summan av produkterna av avvikelserna från respektive medelvärde",          "Variansen för \\(Y\\)",          "Summan av de kvadrerade residualerna"        ],        "correct": "Kovariansen (samvariationen) mellan \\(X\\) och \\(Y\\) — summan av produkterna av avvikelserna från respektive medelvärde"      }    },    "error": { "message": "Täljaren innehåller produkten \\((X_i - \\overline{X})(Y_i - \\overline{Y})\\). Nämnaren innehåller \\((X_i - \\overline{X})^2\\) — det är variansen för \\(X\\). Vad mäter täljaren då?" },    "correct": { "message": "Rätt! Täljaren \\(\\sum(X_i - \\overline{X})(Y_i - \\overline{Y})\\) mäter samvariationen (kovariansen, oskalad) mellan \\(X\\) och \\(Y\\). Nämnaren \\(\\sum(X_i - \\overline{X})^2\\) är variansen (oskalad) för \\(X\\). Lutningskoefficienten är alltså kovariansen dividerat med variansen för \\(X\\)." }  },  {    "id": "k2-3-4-005",    "name": "Uppgift 5",    "exercise": "Varför används derivering för att hitta estimatorerna \\(\\widehat{a}\\) och \\(\\widehat{b}\\) i minstakvadratmetoden?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Derivering används för att beräkna medelvärdet av residualerna",          "Vid en minimum- eller maximumpunkt är derivatan noll — vi deriverar SSR och sätter lika med noll för att hitta de värden på \\(\\widehat{a}\\) och \\(\\widehat{b}\\) som minimerar SSR",          "Derivering används för att beräkna \\(R^2\\)",          "Derivering behövs bara om man har fler än 10 observationer"        ],        "correct": "Vid en minimum- eller maximumpunkt är derivatan noll — vi deriverar SSR och sätter lika med noll för att hitta de värden på \\(\\widehat{a}\\) och \\(\\widehat{b}\\) som minimerar SSR"      }    },    "error": { "message": "Tänk på vad ett minimeringsproblem innebär matematiskt. Vid ett minimum är vad noll?" },    "correct": { "message": "Rätt! Vi vill minimera summan av kvadrerade residualerna \\(\\sum\\hat{V}_i^2\\) med avseende på \\(\\widehat{a}\\) och \\(\\widehat{b}\\). Vid en minimumpunkt är derivatan noll. Vi deriverar därför SSR med avseende på \\(\\widehat{a}\\) och \\(\\widehat{b}\\) och sätter derivatorna lika med noll — detta kallas förstagradsvillkor och ger oss ekvationssystem som löses ut till formler för estimatorerna." }  }];</script>
<div class="exercise-section" data-section-id="k2-3-4"></div>

