# Information och variabler {#k2-1-3}

### Begrepp
- **Data:** Ett annat ord för information inom analytiskt arbete. Data kan bestå av allting vi kan uppfatta med våra sinnen, som text, ljud, bild etcetera.
- **Datavariabel:** Information samlad och kategoriserad, till exempel i en kolumn. En datavariabel kan till exempel innehålla information om olika personers längd, vikt och ålder.
- **Nominaldata:** Data som saknar rangordning, ekvidistans och absolut nollpunkt. Till exempel kategoriska data, som kön och adress.
- **Ordinaldata:** Data som kan rangordnas men saknar ekvidistans och absolut nollpunkt. Till exempel placering i en lista eller kö med plats 1, 2 och 3.
- **Intervalldata:** Data som har rangordning och ekvidistans men saknar absolut nollpunkt. Till exempel temperatur angiven i grader Celsius.
- **Kvotdata:** Data som har rangordning, ekvidistans och absolut nollpunkt. Till exempel längd, avstånd, vikt, massa.
### Teori
Den här kursen handlar om hur vi kan studera orsak och verkan i verkligheten. Innan vi går vidare behöver vi gå igenom lite om hur information hanteras i analytiskt arbete.
#### Datavariabler
Information kallas inom analytiskt arbete för *data*. Data kan alltså bestå av vad som helst som vi kan uppfatta med våra sinnen, som siffror, text, bilder, ljudinspelningar.
Allt analytiskt arbete använder information om verkligheten i någon form eller utsträckning. All data måste i sin tur tolkas. Mycket analytiskt arbete består av att kartlägga verkligheten och samla in data.
Exakt vilken typ av information som krävs för en analys beror på vad som är undersökningens *syfte*. Detta är helt centralt för allt analytiskt arbete men kommer inte diskuteras så noga i den här kursen.
Vi har ofta glädje av att kategorisera information i *datavariabler*. Datavariabler placeras ofta som kolumner i en tabell med ett värd per rad, till exempel som i följande tabell:
  -------------------------------
  **Rad**      **Vår variabel**
  ------------ ------------------
  1            Datavärde 1
  2            Datavärde 2
  -------------------------------
#### Variabler kan innehålla olika typer av information
Varje värde i en datavariabel kan innehålla vilken typ av information som helst, till exempel gatunummer, namn på barn födda i april, bruttonationalprodukten för olika länder eller alla enskilda ord i en roman organiserade med ett ord per rad. För att använda en datavariabel för beräkningar behöver denna variabel bestå av siffror eller skrivas om till siffror.
När vi skapar variabler är det viktigt att all information som vi samlar in till en variabel har samma egenskaper. Om vi till exempel samlar in information om personers längd och inkomst bör vi placera denna information i två olika variabler: en variabel för längd och en variabel för inkomst.
Om vi blandar information i en variabel, till exempel längd och inkomst, blir det omöjligt att göra beräkningar på variabeln. På samma sätt måste värdena inom en variabel använda samma måttenhet. Alla värden för personernas längd måste anges antingen i centimeter eller i meter.
#### Datatabeller
Ett vanligt sätt att organisera data är tabeller, där varje kolumn representerar en variabel och varje rad en observation. Tabell 1 visar ett exempel där vi har tre datavariabler och kallar dessa för $x,\ y$ och $z$.
Observationerna numrerar vi $y_{1}$ till $y_{4}$, $x_{1}$ till $x_{4}$ och $z_{1}$ till $z_{4}$. Det finns inga regler för hur variabler ska namnges eller numreras. Det förekommer även att variabler kallas för samma bokstav och skiljs åt genom numrering, till exempel variablerna $x_{1},\ x_{2}$ och så vidare.
**Tabell 1: Tre variabler med fyra observationer**
  ---------------------------------------------------------------------------------------------------------------------------------------
                  Variabel 1 $(y)$   Variabel 2 $(x)$   Variabel 3 $(z)$
  --------------- --------------------------------------- --------------------------------------- ---------------------------------------
  Observation 1   $y_{1}$           $x_{1}$           $z_{1}$
  Observation 2   $y_{2}$           $x_{2}$           $z_{2}$
  Observation 3   $y_{3}$           $x_{3}$           $z_{3}$
  Observation 4   $y_{4}$           $x_{4}$           $z_{4}$
  ---------------------------------------------------------------------------------------------------------------------------------------
På samma sätt som vi har tydliga kategorier för våra variabler i kolumnerna, behöver vi ha tydliga kategorier för våra observationer. Det observationerna beskriver kallas för *observationsenhet*. Det kan till exempel vara en observation per individ eller en per land. I regel behöver vi även avgränsa vilken tidpunkt en observation avser.
Till exempel kan en observation innehålla uppgifter för ett land ett specifikt årtal, säg 2018. Nästa rad innehåller nästa observation. Om hela tabellen beskriver läget för olika länder år 2018 så är nästa observation för ett annat land. Men vi kan även ha flera observationer per land för olika årtal. Nästa observation kan då vara samma land men ett annat årtal: Sverige 2018, Sverige 2019 och så vidare.
#### Olika typer av data
Data som används för beräkningar brukar delas in i följande datatyper: *kvotdata*, *intervalldata*, *ordinaldata* och *nominaldata*. Ett sätt att tänka på detta är att vi har en variabel, $x$, med någon form av information om verkligheten. Indelningen utgår sedan från följande kriterier:
- *Rangordning*: Kan observationerna i x rangordnas?
- *Ekvidistans*: Är avståndet mellan två värden i x alltid lika stort?
- *Absolut nollpunkt*: Är variabeln definierad så att det finns ett minsta tänkbart värde?
Beroende på svaren på dessa tre frågor kan vi placera vår variabel i någon av de fyra datatyperna. De tre kriterierna och de fyra datatyperna sammanfattas i tabell 2. Låt oss gå igenom de fyra datatyperna och ge några exempel.
**Tabell 2: Fyra datatyper**
  ---------------------------------------------------------------
                  Rangordning   Ekvidistans   Absolut nollpunkt
  --------------- ------------- ------------- -------------------
  Nominaldata     Nej           Nej           Nej
  Ordinaldata     Ja            Nej           Nej
  Intervalldata   Ja            Ja            Nej
  Kvotdata        Ja            Ja            Ja
  ---------------------------------------------------------------
**Nominaldata** är inte rangordnad, har ingen tydlig distans mellan varje skalsteg och ingen absolut nollpunkt. Typiska exempel på detta är kategoriska variabler, till exempel språk, namn på länder, könstillhörighet.
I och med att informationen i denna typ av data mest handlar om att gruppera eller kategorisera är möjligheten att använda matematiska operationer begränsad till att främst definiera om en observation hör eller inte hör till den ena eller andra kategorin.
**Ordinaldata** har rangordning men inte ekvidistans eller absolut nollpunkt. Ett typiskt exempel är skolbetyg, eller placering i en lista eller kö, till exempel plats 1, 2, 3 och så vidare. Ett annat exempel kan vara enkätsvar där respondenter ombeds att ranka alternativ från bästa till sämsta.
Förutom att kategorisera kan vi för denna datatyp även använda matematiska operationer för olikhet. Till exempel kan vi säga att position 1 kommer före position 2, som kommer före position 3. Med denna typ av data kan vi beräkna [median, men vi kan inte beräkna medelvärde](https://www.matteboken.se/lektioner/skolar-7/statistik/medelvarde-och-median?gad_source=1&gclid=CjwKCAiA1eO7BhATEiwAm0Ee-Bv25Y0RbebO8qldnUgmrc5WwiJYv0lqJcZlE6T6dwaU9KeoM5ycMBoCtr8QAvD_BwE).
**Intervalldata** tillåter beräkningar av differens och addition och subtraktion. Dock inte kvoter. Vi kan därför inte på ett meningsfullt sätt jämföra det dubbla värdet av intervalldata.
Till exempel temperaturer angiven i grader Celsius. Differensen mellan --2 och +3 grader Celsius är densamma som +5 och +10 grader Celsius. Men vi kan inte på samma sätt beräkna dessa avstånd som kvoter.
**Kvotdata** tillåter samma matematiska metoder som de tre andra datatyperna, och även beräkningar av kvoter. Detta inkluderar många vanliga mått inom fysik och teknik, som längd, tid och massa. Till skillnad från de andra datatyperna kan vi använda division för kvotdata och jämföra relativa avstånd, som att 10 meter är dubbelt så långt som 5 meter.
Denna indelning i fyra typer av data är vanligt förekommande. Andra mer detaljerade indelningar kan också förekomma. Att tänka på data i dessa former kan hjälpa oss att sortera information och se vilka möjligheter och begränsningar som just våra data erbjuder. Allt detta bör främst ses som ett hjälpmedel, inte som ett regelverk.


::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-1-3"]=[  {    "id": "k2-1-3-001",    "name": "Uppgift 1",    "exercise": "Vilken datatyp har <em>rangordning</em> men saknar <em>ekvidistans</em> och <em>absolut nollpunkt</em>?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Nominaldata",          "Ordinaldata",          "Intervalldata",          "Kvotdata"        ],        "correct": "Ordinaldata"      }    },    "error": { "message": "Tänk på de fyra datatyperna: nominal, ordinal, intervall, kvot. Vilken av dessa har en inbyggd rangordning men saknar ekvidistans (jämna steg)?" },    "correct": { "message": "Rätt! Ordinaldata har rangordning (vi kan säga att plats 1 kommer före plats 2) men saknar ekvidistans (steget från plats 1 till 2 behöver inte vara lika stort som från plats 2 till 3) och absolut nollpunkt." }  },  {    "id": "k2-1-3-002",    "name": "Uppgift 2",    "exercise": "Temperaturen i grader Celsius är ett klassiskt exempel på en specifik datatyp. Vilken datatyp tillhör den?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Nominaldata",          "Ordinaldata",          "Intervalldata",          "Kvotdata"        ],        "correct": "Intervalldata"      }    },    "error": { "message": "Temperatur i Celsius kan rangordnas och har ekvidistans (5 grader är alltid 5 grader). Men finns det en absolut nollpunkt? Kan det vara kallare än absoluta nollpunkten i Celsius-skalan?" },    "correct": { "message": "Rätt! Temperatur i Celsius är intervalldata: den har rangordning och ekvidistans (skillnaden mellan –2°C och +3°C är densamma som mellan +5°C och +10°C), men saknar absolut nollpunkt – noll grader Celsius är inte frånvaron av all temperatur." }  },  {    "id": "k2-1-3-003",    "name": "Uppgift 3",    "exercise": "Vilket påstående om <em>kvotdata</em> är korrekt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Kvotdata kan rangordnas men saknar ekvidistans",          "Kvotdata har rangordning, ekvidistans och absolut nollpunkt, vilket tillåter division och kvotjämförelser",          "Kvotdata tillåter addition och subtraktion men inte multiplikation",          "Kvotdata är synonymt med nominaldata"        ],        "correct": "Kvotdata har rangordning, ekvidistans och absolut nollpunkt, vilket tillåter division och kvotjämförelser"      }    },    "error": { "message": "Kvotdata uppfyller alla tre kriterier: rangordning, ekvidistans och absolut nollpunkt. Vad möjliggör det matematiskt?" },    "correct": { "message": "Rätt! Kvotdata har alla tre egenskaperna: rangordning, ekvidistans och absolut nollpunkt. Det gör att vi kan beräkna kvoter, till exempel att 10 meter är dubbelt så långt som 5 meter. Exempel inkluderar längd, massa och tid." }  },  {    "id": "k2-1-3-004",    "name": "Uppgift 4",    "exercise": "En tabell innehåller fyra observationer och tre variabler: \\(x\\), \\(y\\) och \\(z\\). Hur många enskilda datavärden (celler) innehåller tabellen totalt?",    "image": null,    "inputtype": "field",    "expectedanswer": { "Svar": "12" },    "answerformat": "",    "error": { "message": "Multiplicera antalet rader (observationer) med antalet kolumner (variabler): 4 rader × 3 variabler = ?" },    "correct": { "message": "Rätt! Med 4 observationer (rader) och 3 variabler (kolumner) blir det 4 × 3 = 12 datavärden totalt i tabellen." }  },  {    "id": "k2-1-3-005",    "name": "Uppgift 5",    "exercise": "En variabel innehåller information om personers längd mätt i centimeter. Alla värden utom ett anges i centimeter, men ett värde anges av misstag i meter. Vad är problemet med detta?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är inget problem eftersom meter och centimeter är samma sak",          "Alla värden i en variabel måste använda samma måttenhet, annars blir beräkningar ogiltiga",          "Variabeln bör i stället anges i decimeter för att undvika problemet",          "Problemet löser sig automatiskt i statistikprogrammet"        ],        "correct": "Alla värden i en variabel måste använda samma måttenhet, annars blir beräkningar ogiltiga"      }    },    "error": { "message": "Tänk på vad som händer om du beräknar medelvärdet: en person på 1,75 (meter) och en annan på 180 (centimeter) – vad blir genomsnittet? Är det meningsfullt?" },    "correct": { "message": "Rätt! Alla värden i en variabel måste använda samma måttenhet. Om ett värde anges i meter (1,75) och resten i centimeter (170, 180 etc.) kommer beräkningar som medelvärde att bli helt felaktiga och meningslösa." }  }];</script>
<div class="exercise-section" data-section-id="k2-1-3"></div>


---


::: {.next-section-link}
[→ Nästa avsnitt: **Population, superpopulation och urval**](k2-1-4.html)
:::

