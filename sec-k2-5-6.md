# T-test för regression med flera variabler {#k2-5-6}


### Begrepp

- **Varians-kovariansmatrisen:** Kallas även kovariansmatrisen. För regressionsmodell $Y = XB + V$ beskriven med matriser kan vi estimera modellen med minstakvadratmetoden. Elementen i varians-kovariansmatrisen beskriver varians (längs diagonalen) och kovarians (elementen utanför diagonalen) för estimatorerna för koefficenterna i regressionsmodellen.

### Teori

Ekvationerna i detta avsnitt är de mest komplexa i hela kursen. Huvudbudskapet här är följande: Standardfelet för varje koefficient vi estimerar i en regressionsmodell kan påverkas av alla andra variabler i regressionsmodellen. Och omvänt -- om vi utelämnar något relevant fenomen i en analys kan även detta inverka på våra resultat och slutsatser.

Detta är återigen ett centralt argument för varför vetenskapliga experiment är en avgörande metod för att vi ska kunna uttala oss om orsak och verkan och förstå hur världen fungerar.

Du behöver inte kunna beräkna detta för hand. Datorer gör sådana här beräkningar automatiskt på nolltid. Om matematiken känns överväldigande: Hoppa till rubrik \"Huvudpoängen igen\" nedan. Liksom tidigare är det dock rekommenderat att du oavsett gör ett försök att gå igenom även denna matematik för att bättre förstå metoderna och logiken bakom dessa.

### Utgångspunkter

I [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0) estimerade vi regressionsmodellen:

$Y = a + bX + cZ + V$ (1)

Utifrån de fyra observationerna i tabell 1 estimerade vi då följande värden för koefficienterna:

$\widehat{a} \approx 2,89,\ \ \ \ \ \widehat{b} \approx 0,28,\ \ \ \ \ \ \widehat{c} \approx - 0,54$ (2)

**Tabell 1: Fyra observationer för variablerna** $\mathbf{y}\mathbf{,}\mathbf{x}$ **och** $\mathbf{z}$**.**

  --------------------------------------------------------------------------------------------------------------------------------------
  

$$i$$

    

$$Y_{i}$$

   

$$X_{i}$$

   

$$Z_{i}$$


  ----------------------------- ---------------------------------- ---------------------------------- ----------------------------------
  1                                             3                                  3                                  1

  2                                             2                                  4                                  4

  3                                             5                                  6                                  0

  4                                             4                                  7                                  1
  --------------------------------------------------------------------------------------------------------------------------------------

#### T-test för de tre koefficienterna

Nu ska vi med t-test pröva sannolikheten att de tre koefficienterna är skilda från noll. Vi ställer därför upp tre noll- och alternativhypoteser:

$\begin{matrix} H_{0}:a = 0 & \ \ \ H_{0}:b = 0 & \ \ \ H_{0}:c = 0 \\ H_{1}:a \neq 0 & \ \ \ H_{1}:b \neq 0 & \ \ \ H_{1}:c \neq 0 \end{matrix}$ (3)

Vi utgår från signifikansnivån $\alpha = 0,05$. Alla tre test är tvåsidiga $t$-test och t -värdena skattas på följande sätt:

$t_{\widehat{a}} = \frac{\widehat{a}}{s_{\widehat{a}}},\ \ \ \ \ \ t_{b} = \frac{\widehat{b}}{s_{\widehat{b}}},\ \ \ \ t_{\widehat{c}} = \frac{\widehat{c}}{s_{\widehat{c}}}$ (4)

I nämnaren har vi standardfelet för respektive estimator, $s_{\widehat{a}},s_{\widehat{b}}$ och $s_{\widehat{c}}$. Standardfelet är, i likhet med standardavvikelse, positiva kvadratroten av variansen, vilket är lättare att skriva ut ekvationen för, som $\text{var}\left( \widehat{a} \right)$ (se [avsnitt 5.5](https://www.dropbox.com/scl/fi/q6c5skce5272hw6sbohcr/5-5-Regressionsanalys-med-sannolikhet.docx?rlkey=p1ue537yaw3c5difdil7zmlrb&dl=0)).

När vi nu har tre variabler i regressionsmodellen blir variansen för våra tre estimatorer $\widehat{a},\widehat{b}$ och $\widehat{c}$, följande:

$\begin{matrix} & var(\widehat{a}) = {\widehat{s}}_{\widehat{V}}\left( \frac{1}{n} + \frac{{\bar{X}}^{2}\sum_{}^{}\left( Z_{i} - \bar{Z} \right)^{2} + {\bar{Z}}^{2}\sum_{}^{}\left( X_{i} - \bar{X} \right)^{2} - 2\bar{X}\bar{Z}\sum_{}^{}{\left( X_{i} - \bar{X} \right)\left( X_{i} - \bar{X} \right)}}{\sum_{}^{}\left( X_{i} - \bar{X} \right)^{2}\sum_{}^{}\left( Z_{i} - \bar{Z} \right)^{2} - \left( \sum_{}^{}{\left( X_{i} - \bar{X} \right)\left( X_{i} - \bar{X} \right)} \right)^{2}} \right) \\ & var(\widehat{b}) = {\widehat{s}}_{\widehat{V}}\left( \frac{\sum_{}^{}\left( Z_{i} - \bar{Z} \right)^{2}}{\sum_{}^{}\left( X_{i} - \bar{X} \right)^{2}\sum_{}^{}\left( Z_{i} - \bar{Z} \right)^{2} - \left( \sum_{}^{}{\left( X_{i} - \bar{X} \right)\left( Z_{i} - \bar{Z} \right)} \right)^{2}} \right) \\ & var(\widehat{c}) = {\widehat{s}}_{\widehat{V}}\left( \frac{\sum_{}^{}\left( X_{i} - \bar{X} \right)^{2}}{\sum_{}^{}\left( X_{i} - \bar{X} \right)^{2}\sum_{}^{}\left( Z_{i} - \bar{Z} \right)^{2} - \left( \sum_{}^{}{\left( X_{i} - \bar{X} \right)\left( Z_{i} - \bar{Z} \right)} \right)^{2}} \right) \end{matrix}$ (5)

där ${\widehat{s}}_{\widehat{V}}$ är estimerad standardfelet för residualerna (regressionsmodellens standardfel) varför vi lägger till notationen $\widehat{V}$ (jmf ekvation 1), $n$ är antal observationer och en variabel med ett streck över är medelvärde ($\overline{X},\ \overline{Y},\ \overline{Z})$. Residualernas standardfel är ett mått på osäkerheten i estimatet av residualerna.

#### Måste jag lära mig allt det här?

Ekvation 5 är omfattande. Poängen med att gå igenom den här matematiken är dock inte att vi nödvändigtvis ska lära oss räkna allt detta för hand, utan för att vi ska få en bättre förståelse av hur metoderna fungerar och inte fungerar.

En viktig sak med ekvation 5 är att vi kan se hur standardfelet (osäkerheten) för respektive koefficient är en funktion av både observationer för den variabel som hör till denna koefficient och observationer för de andra två variablerna som ingår i regressionsmodellen.

I avsnitt [4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0), [4.4](https://www.dropbox.com/scl/fi/sdnc9eukta9tuiq1y6z0f/4-4-Regression-med-matriser.docx?rlkey=zmc4680olys9qe0zmn7i0vswc&dl=0) och [4.5](https://www.dropbox.com/scl/fi/mqe9yo4dnoh6k581l95ut/4-5-Estimera-med-matriser.docx?rlkey=j8hs4g14ujp401hkp5dg0fygs&dl=0) såg vi hur estimeringen av koefficienterna i regressionsmodellen, alltså samvariationen mellan varje förklarande variabel (som $X$ och $Z$) och den förklarade variabeln ($Y$), kan påverkas av observationerna för varje annan variabel i regressionsmodellen. I [avsnitt 4.7](https://www.dropbox.com/scl/fi/qpe35hc5zxm99tqxkt4q0/4-7-R-kna-p-orsak-och-effekt.docx?rlkey=eijkxl77yiu7lj0kbysw5yw5t&dl=0) såg vi att detta är avgörande när vi vill studera orsakssamband.

Ekvation 5 illustrerar nu hur även det statistiska testet för respektive lutningskoefficient (t-testet) kan påverkas av observationer för samtliga variabler som ingår i regressionsmodellen. Detta är viktigt för att förstå analys och vetenskap och är centralt för hur vi tänker att världen fungerar.

#### Beräkna estimaten

Låt oss beräkna t-testen för koefficienterna. Estimerat standardfel för residualerna är:

${\widehat{s}}_{\widehat{V}} = \frac{\sum_{}^{}\ \left( y_{i} - \widehat{y} \right)^{2}}{n - p} \approx \frac{0,338}{4 - 3} \approx 0,338$ (6)

Resultatet för $\sum_{}^{}\left( y_{i} - \widehat{y} \right)^{2}$ kan vi räkna ut med hjälp av uppgifterna i [avsnitt 4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0). Bokstaven $n$ är antal observationer och $p$ är antal koefficienter i regressionsmodellen, varför $n - p =$ $4 - 3 = 1$.

Resultatet ${\widehat{s}}_{\widehat{V}} \approx 0,338$ använder vi för att skatta standardfelet för respektive koefficient $\widehat{a}$, $\widehat{b}$ och $\widehat{c}$. Vi tar positiva kvadratroten av variansen för respektive estimator:

$\begin{matrix} & s_{\widehat{\alpha}} = + \left( 0,338\left( \frac{1}{4} + \frac{25\*9 + 2,25\*10 - 2\*5\*1,5\*( - 4)}{10\*9 - ( - 4)^{2}} \right) \right)^{1/2} \approx 1,22 \\ & s_{\widehat{b}} = + \left( 0,338\left( \frac{9}{10\*9 - ( - 4)^{2}} \right) \right)^{1/2} \approx 0,203 \\ & s_{\widehat{c}\widehat{\ }} = + \left( 0,338\left( \frac{10}{10\*9 - ( - 4)^{2}} \right) \right)^{1/2} \approx 0,214 \end{matrix}$ (7)

Nu kan vi skatta t-värdena till t-testen för respektive lutningskoefficients estimator:

$\begin{matrix} & t_{\widehat{a}} = \frac{2,89}{1,22} \approx 2,37 \\ & t_{\widehat{b}} = \frac{0,28}{0,203} \approx 1,4 \\ & t_{\widehat{c}} = \frac{- 0,54}{0,214} \approx - 2,52 \end{matrix}$ (8)

Nu har vi beräknat t-värdena för respektive estimator och kan jämföra dessa mot t-fördelningen, beroende på vald signifikansnivå. T-fördelningens form beror liksom tidigare på antal frihetsgrader. Om våra beräknade $t$ överstiger kritiska t-värdet, det vill säga $t^{\*}$ $\|t\| \> t^{\*}$, avvisar vi respektive $H_{0}$ som falsk.

I [avsnitt 5.](https://www.dropbox.com/scl/fi/q6c5skce5272hw6sbohcr/5-4-Regressionsanalys-med-sannolikhet.docx?rlkey=p1ue537yaw3c5difdil7zmlrb&dl=0)5 illustrerade vi t-fördelningen för 2 respektive 1 000 frihetsgrader. För enkelhetens skull kan vi här jämföra med 2 frihetsgrader, som vi använde i föregående avsnitt. Egentligen har vi här 1 frihetsgrad och då är de kritiska t-värdena ännu längre bort från medelvärdet.

Våra beräknade t-värden är långt ifrån konfidensnivåerna 90 respektive 95 %. Våra beräknade t-värden innebär att det är cirka 25 %, 39 % respektive 24 % sannolikhet att respektive $H_{0}$ är falsk (beräkning redovisas ej här).

Vi avfärdar därför ingen av de tre nollhypoteserna. Våra resultat för estimerade koefficienterna är således inte statistiskt signifikanta. Vi har därför ingen anledning att tro att populationens koefficienter $a,b$ eller $c$ är skilda från noll.

#### T-test för valfritt antal koefficienter

Trots att vi endast hade två förklarande variabler i regressionsmodellen är de tre ekvationerna i ekvation 5 ovan omfattande. Ofta arbetar vi med flera variabler, varpå ekvationerna blir ännu mer omfattande. Vi kan beskriva matematiken för detta mer kompakt genom att använda matriser.

Nu ska vi gå igenom hur vi kan beskriva matematiken för t-test med ett valfritt antal variabler i regressionsmodellen. På samma sätt som vi introducerade i [avsnitt 4.4](https://www.dropbox.com/scl/fi/sdnc9eukta9tuiq1y6z0f/4-4-Regression-med-matriser.docx?rlkey=zmc4680olys9qe0zmn7i0vswc&dl=0) ska vi därför återigen använda matriser för att beskriva vår regressionsmodell och analys. Poängen är återigen att vi ska få en ökad förståelse för metoderna.

Säg att vi har följande regressionsmodell för en population:

$Y = XB + V$ (9)

där Y är en $n \times 1$ kolumnmatris med förklarade variabeln, $B$ är en $k \times 1$ kolumnmatris för samtliga koefficienter $b$ och $V$ är en $n \times 1$ kolumnmatris med $n$ feltermer. $X$ är en $n \times k$ matris med de förklarande variablerna $X$ i varsin kolumn och observationerna på varsin rad. I vår regressionsmodell ingår första koefficienten $b_{0}$, y-interceptet, varför alla element i första kolumnen i matris $X$ har värdet 1.

Vi ska nu gå igenom hur vi kan beskriva varians och standardfel för samtliga koefficienters estimatorer i en regressionsmodell med valfritt antal koefficienter. Detta gör vi genom att definiera det som kallas för regressionsmodellens *varians-kovariansmatris*. Varians-kovariansmatrisen kallas även för *variansmatris*, *kovariansmatris* eller *autokovariansmatris* (engelska *variance-covariance matrix*).

#### Varians-kovariansmatrisen

Varians-kovariansmatrisen som vi ska arbeta med kan skrivas på följande sätt: $var\left( \widehat{B} \middle\| X \right)$, där $\widehat{B}$ och $X$ är matriser. Vi har alltså variansen, $var(\ )$, av estimatorn för koefficienterna $\widehat{B}$, givet värdena i de förklarande variablerna $X$.

För populationens regressionsmodell kan detta skrivas på följande sätt:

$\text{var}\left( \widehat{B} \middle\| X \right) = \sigma_{V}^{2}\left( X^{T}X \right)^{- 1}$ (10)

som består av två delar: $\sigma_{V}^{2}$ och $\left( X^{T}X \right)^{- 1}$. Den första delen, $\sigma_{V}^{2}$, beskriver feltermernas varians (oförklarad variation) i populationen. Populationsvärdet är i regel okänt men vi kan estimera den med urvalsdata.

Hela den andra delen, $\left( X^{T}X \right)^{- 1}$, beskriver en enda matris sammansatt av två andra matriser, nämligen $X$ (de förklarande variablerna) och transponerade $X^{T}$. Dessa två matrismultipliceras, $X^{T}X$. Därefter tar vi matrisinversen av resultatet: $\left( X^{T}X \right)^{- 1}$.

Låt oss byta ut populationens varians $\sigma_{V}^{2}$ mot estimerade variansen: ${\widehat{s}}_{V}^{2}$. Vi får då estimerade varians-kovariansmatrisen:

$\text{var}\left( \widehat{B} \middle\| X \right) = {\widehat{s}}_{V}^{2}\left( X^{T}X \right)^{- 1} = \left( \frac{\sum_{}^{}\left( y_{i} - \widehat{y_{i}} \right)^{2}}{n - p} \right)\left( X^{T}X \right)^{- 1}$ (11)

Definitionen av ${\widehat{s}}_{V}^{2}$ använde vi i [avsnitt 5.4](https://www.dropbox.com/scl/fi/q6c5skce5272hw6sbohcr/5-4-Regressionsanalys-med-sannolikhet.docx?rlkey=p1ue537yaw3c5difdil7zmlrb&dl=0).

### Varför är varians-kovariansmatrisen viktig?

Som vi gick igenom i avsnitt [4.1](https://www.dropbox.com/scl/fi/dkav9cmen93lfv9xnh5i1/4-1-Regressionsanalys-med-tre-variabler.docx?rlkey=womzymlqr70kjry66qltgkcph&dl=0), [4.4](https://www.dropbox.com/scl/fi/sdnc9eukta9tuiq1y6z0f/4-4-Regression-med-matriser.docx?rlkey=zmc4680olys9qe0zmn7i0vswc&dl=0) och [4.5](https://www.dropbox.com/scl/fi/mqe9yo4dnoh6k581l95ut/4-5-Estimera-med-matriser.docx?rlkey=j8hs4g14ujp401hkp5dg0fygs&dl=0) såg vi att koefficienternas estimator $\widehat{B} = \left( X^{T}X \right)^{- 1}X^{T}Y$ innebär att varje annan variabel i regressionsmodellen kan påverka estimaten för samtliga koefficienter i modellen. Om någon variabel saknas som borde ingå i regressionsmodellen påverkar detta per definition också våra resultat.

Varians-kovariansmatrisen $var(\widehat{B} \mid X)$ illustrerar hur varje förklarande variabel som inkluderas eller exkluderas i regressionsmodellen även kan påverka resultaten för de statistiska testen för samtliga koefficienter i modellen. Detta eftersom alla förklarande variabler är representerade i matris $X$, vars innehåll kan påverka resultaten för samtliga t-test.

Betydelsen av detta för analytiskt arbete i allmänhet och samhällsvetenskapen i stort går inte att överskatta. I [avsnitt 4.7](https://www.dropbox.com/scl/fi/qpe35hc5zxm99tqxkt4q0/4-7-R-kna-p-orsak-och-effekt.docx?rlkey=eijkxl77yiu7lj0kbysw5yw5t&dl=0) gick vi igenom hur vi behöver särskilda metoder för att studera orsakssamband. Vi måste vara mycket noggranna när vi studerar och mäter kausala effekter, jämför orsak och verkan och jämför en behandlingsgrupp med en kontrollgrupp.

Det finns ingen metod för att objektivt bevisa att ett fenomen bör inkluderas eller exkluderas i en analys. Varians-kovariansmatrisen illustrerar ännu tydligare varför denna typ av utmaningar är viktiga att fundera kring. Detta är förklaringen till vad det vetenskapliga experimentet fyller för funktion och varför samhällsvetenskapen behöver kvasiexperimentella metoder ([avsnitt 4.7](https://www.dropbox.com/scl/fi/qpe35hc5zxm99tqxkt4q0/4-7-R-kna-p-orsak-och-effekt.docx?rlkey=eijkxl77yiu7lj0kbysw5yw5t&dl=0)).

#### Ett exempel

För att bättre förstå innehållet i $var(\widehat{B} \mid X)$ kan vi illustrera med ett exempel. Huvudsaken med denna genomgång är främst de mer övergripande resonemangen.

Säg att vi har regressionsmodellen $Y = a + bX + V$ med de två variablerna $X$ och $Y$ och de två koefficienterna $a$ och $b$ (det vill säga ej skriven med matriser) och feltermen $V$. Estimerade varians-kovariansmatrisen för denna regressionsmodell blir:

$var(\widehat{B} \mid X) = {\widehat{s}}_{\widehat{V}}^{2}\left( X^{T}X \right)^{- 1} = \begin{bmatrix} var(\widehat{a}) & cov(\widehat{a},\widehat{b}) \\ cov(\widehat{b},\widehat{a}) & var(\widehat{b}) \end{bmatrix}$ (12)

I matrisens diagonal (övre vänstra och nedre högra elementen) har vi variansen för estimatorerna för koefficienterna: $\widehat{a}$ och $\widehat{b}$. De två andra elementen är kovariansen mellan estimatorerna. Variansen i diagonalen ges av att $\text{cov}\left( \widehat{a},\widehat{a} \right) = \text{var}\left( \widehat{a} \right)$ (se [avsnitt 2.3](https://www.dropbox.com/scl/fi/357utiljgf7iuk78jxhtv/2-3-Samvariation-1.docx?rlkey=ewtjvwrihoflt8tlvf8dccppo&dl=0)).

För att se detaljerna i $var(\widehat{B} \mid X)$ börjar vi med att beskriva inversmatrisen $\left( X^{T}X \right)^{- 1}$ :

$\begin{matrix} \left( X^{T}X \right)^{- 1} & \ = \begin{bmatrix} n & \sum_{}^{}x_{i} \\ \sum_{}^{}x_{i} & \sum_{}^{}x_{i}^{2} \end{bmatrix}^{- 1} \\ & \ = \left( \frac{1}{n\sum_{}^{}x_{i}^{2} - \sum_{}^{}x_{i}\sum_{}^{}x_{i}} \right)\begin{bmatrix} \sum_{}^{}x_{i}^{2} & - \sum_{}^{}x_{i} \\ - \sum_{}^{}x_{i} & n \end{bmatrix} \\ & \ = \left( \frac{1}{n\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} \right)\begin{bmatrix} \sum_{}^{}x_{i}^{2} & - n\bar{x} \\ - n\bar{x} & n \end{bmatrix} \\ & \ = \begin{bmatrix} \frac{\sum_{}^{}x_{i}^{2}}{n\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} & \frac{- \bar{x}}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} \\ \frac{- \bar{x}}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} & \frac{1}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} \end{bmatrix} \end{matrix}$ (13)

Nu har vi ett uttryck för inversmatrisen $\left( X^{T}X \right)^{- 1}$. För att få estimerade $var(\widehat{B} \mid X)$ multiplicerar vi nu vårt uttryck för $\left( X^{T}X \right)^{- 1}$ med residualernas estimerade varians ${\widehat{s}}_{\widehat{V}}^{2}$, vilket är ett värde (ej en matris). Detta görs genom att ${\widehat{s}}_{\widehat{V}}^{2}$ multipliceras med varje element i matrisen $\left( X^{T}X \right)^{- 1}$:

$\begin{matrix} & {\widehat{s}}_{\widehat{V}}^{2}\left( X^{T}X \right)^{- 1} = \left( \frac{\sum_{}^{}\ \left( y_{i} - \widehat{y} \right)^{2}}{n - p} \right)\begin{bmatrix} \frac{\sum_{}^{}x_{i}^{2}}{n\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} & \frac{- \bar{x}}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} \\ \frac{- \bar{x}}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} & \frac{1}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} \end{bmatrix} \\ & = \begin{bmatrix} \left( \frac{\sum_{}^{}\left( y_{i} - \widehat{y} \right)^{2}}{n - p} \right)\frac{\sum_{}^{}x_{i}^{2}}{n\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} & \left( \frac{\sum_{}^{}\left( y_{i} - \widehat{y} \right)^{2}}{n - p} \right)\frac{- \bar{x}}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} \\ \left( \frac{\sum_{}^{}\left( y_{i} - \widehat{y} \right)^{2}}{n - p} \right)\frac{- \bar{x}}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} & \left( \frac{\sum_{}^{}\left( y_{i} - \widehat{y} \right)^{2}}{n - p} \right)\frac{1}{\left( \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \right)} \end{bmatrix} = \\ & = \begin{bmatrix} var(\widehat{a}) & cov(\widehat{a},\widehat{b}) \\ cov(\widehat{b},\widehat{a}) & var(\widehat{b}) \end{bmatrix} \end{matrix}$ (14)

Varians-kovariansmatrisen ger oss, som sagt, variansen för koefficienternas estimatorer. Tar vi kvadratroten av detta får vi standardfelet för koefficienterna, vilket vi behöver för att beräkna de tvåsidiga t-testen för respektive koefficient.

Ovan definierade vi variansen för estimatorerna $\widehat{a}$ och $\widehat{b}$ till:

$\begin{matrix} & var(\widehat{a}) = {\widehat{s}}_{\widehat{a}}^{2} = \frac{\sum_{}^{}\ \left( y_{i} - {\widehat{y}}_{i} \right)^{2}}{(n - p)\sum_{}^{}\ \left( x_{i} - \bar{x} \right)^{2}}\frac{\sum_{}^{}\ x_{i}^{2}}{n} \\ & var(\widehat{b}) = {\widehat{s}}_{\widehat{b}}^{2} = \frac{\sum_{}^{}\ \left( y_{i} - {\widehat{y}}_{i} \right)^{2}}{(n - p)\sum_{}^{}\ \left( x_{i} - \bar{x} \right)^{2}} \end{matrix}$ (15)

Detta är samma sak som i diagonalen i $2 \times 2$ varians-kovariansmatrisen. Vi kan se detta genom att skriva om $\sum_{}^{}\left( x_{i} - \bar{x} \right)^{2}$ från $var(\widehat{a})$ och $var(\widehat{b})$ :

$\begin{matrix} \sum_{}^{}\left( x_{i} - \bar{x} \right)^{2} & \ = \sum_{}^{}x_{i}^{2} - 2\sum_{}^{}{x_{i}\bar{x}} + \sum_{}^{}{\bar{x}}^{2} \\ & \ = \sum_{}^{}x_{i}^{2} - 2n{\bar{x}}^{2} + n{\bar{x}}^{2} \\ & \ = \sum_{}^{}x_{i}^{2} - n\frac{1}{n}\sum_{}^{}x_{i}\frac{1}{n}\sum_{}^{}x_{i} \\ & \ = \sum_{}^{}x_{i}^{2} - \bar{x}\sum_{}^{}x_{i} \end{matrix}$ (16)

där vi i sista raden nu får samma uttryck som återfinns i nämnaren i respektive element i estimerade $\text{var}\left( \widehat{B} \middle\| X \right)$.



::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-5-6"]=[  {    "id": "k2-5-6-001",    "name": "Uppgift 1",    "exercise": "I regressionsmodellen \\(Y = a + bX + cZ + V\\) beräknas standardfelet för varje koefficient med hjälp av varians-kovariansmatrisen \\(\\sigma_V^2(X^TX)^{-1}\\). Vad gäller för standardfelet för en enskild koefficient, till exempel \\(\\widehat{b}\\)?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Standardfelet för varje koefficient beror enbart på den egna variabelns observationer",          "Standardfelet för varje koefficient kan påverkas av alla andra variabler i regressionsmodellen",          "T-test kan inte utföras när man har fler än två variabler",          "Varians-kovariansmatrisen är bara ett teoretiskt verktyg utan praktisk relevans"        ],        "correct": "Standardfelet för varje koefficient kan påverkas av alla andra variabler i regressionsmodellen"      }    },    "error": { "message": "Titta på varians-kovariansmatrisen \\(\\sigma_V^2(X^TX)^{-1}\\). Matrisen \\(X\\) innehåller observationer för alla förklarande variabler. Vad följer av det för standardfelet för en enskild koefficient?" },    "correct": { "message": "Rätt! Det centrala budskapet är att standardfelet för varje koefficient är en funktion av observationerna för den variabelns egna data OCH observationerna för alla andra variabler i modellen. Att inkludera eller exkludera en variabel påverkar t-testen för alla koefficienter." }  },  {    "id": "k2-5-6-002",    "name": "Uppgift 2",    "exercise": "I regressionsmodellen \\(Y = a + bX + cZ + V\\) med fyra observationer (\\(n = 4\\)) och tre koefficienter (\\(p = 3\\)) beräknades \\(\\sum(y_i - \\widehat{y})^2 \\approx 0{,}338\\). Estimera standardfelet för residualerna \\[\\widehat{s}_{\\widehat{V}} = \\frac{\\sum(y_i - \\widehat{y})^2}{n - p}\\] Avrunda till tre decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "0.338" },    "answerformat": "Ange svaret med tre decimaler, t.ex. 0.338",    "error": { "message": "Dividera \\(0{,}338\\) med \\(n - p = 4 - 3 = 1\\)." },    "correct": { "message": "Rätt! \\(\\widehat{s}_{\\widehat{V}} = 0{,}338 / (4 - 3) = 0{,}338 / 1 = 0{,}338\\). Med bara en frihetsgrad (4 observationer minus 3 koefficienter) är estimatet väldigt osäkert, vilket speglas i de höga standardfelen." }  },  {    "id": "k2-5-6-003",    "name": "Uppgift 3",    "exercise": "I en regressionsmodell \\(Y = a + bX + cZ + V\\) estimerades \\(\\widehat{c} \\approx -0{,}54\\) och \\(s_{\\widehat{c}} \\approx 0{,}214\\). Beräkna t-värdet \\[t_{\\widehat{c}} = \\frac{\\widehat{c}}{s_{\\widehat{c}}}\\] Avrunda till två decimaler.",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "-2.52" },    "answerformat": "Ange svaret med två decimaler, t.ex. -2.52",    "error": { "message": "Dividera \\(\\widehat{c} = -0{,}54\\) med \\(s_{\\widehat{c}} = 0{,}214\\). Bevara tecknet." },    "correct": { "message": "Rätt! \\(t_{\\widehat{c}} = -0{,}54 / 0{,}214 \\approx -2{,}52\\). Trots detta relativt höga t-värde (i absolutbelopp) förkastar vi ändå inte \\(H_0: c = 0\\), eftersom vi med 1 frihetsgrad behöver mycket höga t-värden för att nå signifikans." }  },  {    "id": "k2-5-6-004",    "name": "Uppgift 4",    "exercise": "Varians-kovariansmatrisen för regressionsmodellen \\(Y = XB + V\\) definieras som \\[\\text{var}(\\widehat{B} \\mid X) = \\sigma_V^2 (X^T X)^{-1}\\] Vad beskriver elementen längs diagonalen i denna matris?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Kovariansen mellan de olika koefficienterna",          "Variansen för respektive koefficients estimator",          "Korrelationen mellan de förklarande variablerna",          "Regressionsmodellens feltermers varians"        ],        "correct": "Variansen för respektive koefficients estimator"      }    },    "error": { "message": "I en varians-kovariansmatris är elementen i och utanför diagonalen olika typer av mått. Vad är skillnaden mellan kovarians och varians?" },    "correct": { "message": "Rätt! Elementen längs diagonalen i varians-kovariansmatrisen är variansen \\(\\text{var}(\\widehat{b}_j)\\) för varje koefficients estimator. Kvadratroten av dessa ger standardfelen som används i t-testen. Elementen utanför diagonalen är kovarianser mellan koefficienterna." }  },  {    "id": "k2-5-6-005",    "name": "Uppgift 5",    "exercise": "Varför är det centralt för vetenskaplig analys att standardfelet (och t-testet) för en koefficient kan påverkas av <em>alla</em> andra variabler i regressionsmodellen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det innebär att vi alltid bör ha så få variabler som möjligt i modellen",          "Det innebär att om en relevant variabel saknas i modellen kan detta påverka resultaten och slutsatserna för alla koefficienter",          "Det innebär att regressionsanalys bara fungerar med exakt tre variabler",          "Det innebär att t-testen alltid är opålitliga i flervariabelmodeller"        ],        "correct": "Det innebär att om en relevant variabel saknas i modellen kan detta påverka resultaten och slutsatserna för alla koefficienter"      }    },    "error": { "message": "Tänk på vad som händer med analysens resultat om man utelämnar ett fenomen som egentligen borde ingå i modellen." },    "correct": { "message": "Rätt! Om en relevant variabel saknas i regressionsmodellen kan detta snedvrida estimaten och standardfelen för samtliga koefficienter – inte bara den som är direkt relaterad till den saknade variabeln. Detta är ett starkt argument för varför vetenskapliga experiment och kvasiexperimentella metoder är så viktiga." }  }];</script>
<div class="exercise-section" data-section-id="k2-5-6"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Vad är egentligen regressionsanalys?**](k2-5-7.html)
:::

