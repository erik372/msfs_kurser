# Varför ska vi räkna nu igen? {#k2-2-6}


### Begrepp

*Inga nya begrepp i detta avsnitt.*

### Teori

Vi börjar närma oss slutet på kapitel 2 i denna kurs. I kapitel 1 introducerade vi kontrafaktisk analys och hur vi med hjälp av behandlings- och kontrollgrupper kan studera orsak och verkan. I kapitel 2 introducerade vi olika metoder, bland annat regressionsanalys, för att jämföra variation, spridning och samvariation mellan två variabler.

Men varför måste vi egentligen räkna? Räcker det inte att bara titta på diagram, eller en enkel jämförelse av hur det gick behandlings- och kontrollgruppen?

Matematiken är ingen garanti för att våra resonemang om världen blir bättre. Men matematiken ger oss en möjlighet att förbättra våra resonemang på ett sätt som är omöjligt utan. Detta avsnitt går kort igenom några argument för varför avsaknaden av matematik riskerar att leda tanken fel.

#### Vi ljuger för både oss själv och andra

Människor ser mönster i allt möjligt. Detta är centralt för vår överlevnad men leder ofta till felaktiga slutsatser. Till exempel finns det gott om historier om framgång och förutsägelser: "Här är 10 saker framgångsrika människor gör före frukost" och "Därför kommer politiker A vinna nästa val".

En stor mängd sådan litteratur bärs framåt av ett magiskt tänkande. Vi kan alla ha glädje av inspirerande berättelser. Men många människor gör samma sak som framgångsrika kändisar utan att resultaten blir lika lyckat. Många tvärsäkra uttalanden om politik och framtid är rena fantasier.

Ett annat exempel på vilseledande slutsatser är sådana vi ofta ser i olika typer av diagram. Diagram är ett utmärkt sätt att illustrera information och skapa en översiktlig bild. Men diagram kan också ofta vilseleda oss. Företag använder diagram för att övertyga oss att köpa just deras produkter. Politiker och politiska aktivister vill visa att de har rätt.

Men vid sidan av mer eller mindre medvetet missvisande information är det även lätt att vi lurar oss själva med diagram. Ett sätt att illustrera hur lätt det blir fel ges i figur 1. I diagrammet syns åtta pilspetsar med fyra avstånd mellan varje par.

Många människor uppfattar det som att avstånden mellan pilspetsarna skiljer sig. Men detta är felaktigt. Alla fyra avstånden mellan respektive par är lika långa. Denna typ av synvilla kallas Müller-Lyer-illusionen, efter en tysk sociolog som forskade på fenomenet i slutet av 1800-talet.

I detta exempel kan vi kontrollera avstånden mellan pilspetsarna genom att räkna antal rutor. Men många illustrationer av information kan innehålla mycket krångligare synvillor som är svårare att genomskåda. Om vi endast skulle använda diagram och bilder för att göra våra analyser skulle många analyser bli sämre. Matematiken kan gör det svårare att ljuga, både för oss själva och för andra.

**Figur 1: Åtta pilspetsar\**
![](C:\Users\hegel\Dropbox\_MINA%20TEXTER%20_db\Matematik%20för%20samhällsvetare\Matteboken.se\html-output\kurs%202%20-%20Statistik%20för%20samhällsvetare\2%20-%20Variation%20och%20samvariation\2-6%20-%20varför%20ska%20vi%20räkna%20nu%20igen/img/k2-2-6-image1.png){style="width:3in;height:3in"}

#### Två dimensioner är för lite

Diagrammet i figur 1 har två dimensioner: höjd och bredd. En kub har tre dimensioner: höjd, bredd och djup. I bilder är det ofta svårt att illustrera fler än två dimensioner. Men verkligheten är full av relationer som är mer komplexa än vad som går att visa i diagram. I våra egna liv kan vi hitta många exempel som är resultatet av tre eller fler faktorer.

Effekten av ett fenomen kan även påverka effekten av andra fenomen. Denna typ av samband går sällan att illustrera enkelt och tydligt i bilder eller diagram. I dessa fall blir i stället de enkla illustrationerna vilseledande. I senare kapitel går vi igenom för- och nackdelarna med diagram och hur vi med hjälp av matematik kan jämföra relationer mellan flera fenomen samtidigt.

#### Vi vill veta mer

En central fråga i kausal analys är om det ens finns något samband mellan orsak och verkan. Det vill säga -- kan vi ens hävda att det finns ett kausalt samband, ett orsakssamband. Till exempel mellan en utbildning och studenternas framtida inkomster? Påverkar medicin sjukdomen den ska åtgärda?

Men ofta vill vi veta mycket mer än så. Säg att vi har ett sjukdomssymptom och ska ta en medicin. Ska vi ta 1 tablett eller 10? Samma krav bör kunna ställas på samhällsvetenskap.

Många fenomen inom samhällsvetenskap kommer troligen aldrig få fullt så exakta svar som de vi är vana att få för medicin. Men med matematik kan vi åtminstone närma oss mer exakta svar, än vad som hade varit fallet annars. Utan matematik är detta omöjligt.

#### Vetenskapen behövs

I samhällsvetenskap arbetar vi ofta med frågor nära ideologi och värderingar. Det är ibland svårt för analytiker att hålla isär vad vi vet om världen och vad vi önskar att vi visste.

Ibland kan det verka omöjligt att nå ut med ny kunskap när alla verkar ha bestämt sig för vad de tror om världen. Då kan det vara lätt att misströsta användningen av mer tekniskt avancerade metoder.

Men underskatta inte alla de förslag som hade fått större utrymme men som vi idag kan kväsa vid ritbordet med hjälp av noggrann analys. Sett till de mänskliga samhällenas historia är stora delar av den moderna samhällsvetenskapen ung. Håll ut.



::: {.ex-section-title}
Övningar
:::

<script>window.exerciseData=window.exerciseData||{};window.exerciseData["k2-2-6"]=[  {    "id": "k2-2-6-006",    "name": "Uppgift 1",    "exercise": "Inom statistik och regressionsanalys arbetar vi med abstrakta begrepp som kovarians, residualer och determinationskoefficienter. Varför är det viktigt att behärska dessa begrepp matematiskt, inte bara intuitivt?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Intuition och matematik ger alltid samma slutsatser, så det spelar ingen roll",          "Matematiska definitioner är entydiga — de gör det möjligt att kommunicera precist och upprepa analyser",          "Matematik är bara nödvändigt för stora dataset",          "Intuition är alltid mer tillförlitlig än formler"        ],        "correct": "Matematiska definitioner är entydiga — de gör det möjligt att kommunicera precist och upprepa analyser"      }    },    "error": { "message": "Tänk på vad som händer om två forskare definierar \"samband\" olika. Kan de jämföra sina resultat?" },    "correct": { "message": "Rätt! Matematiska definitioner är entydiga och reproducerbara. Att säga att \"kovariansen är 5/3\" kommunicerar exakt samma sak till alla, medan \"det finns ett positivt samband\" kan tolkas på många sätt. Det är grunden för kumulativ vetenskaplig kunskap." }  },  {    "id": "k2-2-6-002",    "name": "Uppgift 2",    "exercise": "Müller-Lyer-illusionen är en synvilla där två linjer av identisk längd uppfattas ha olika längd, beroende på pilformade ändpunkter. Vad exemplifierar denna illusion om förhållandet mellan visuell uppfattning och kvantitativ analys?",    "image": "img/k2-2-6-image1.png",    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Ett bevis för att diagram alltid är mer tillförlitliga än matematik",          "Att vår visuella uppfattning kan lura oss, och att räkning kan avslöja vad ögat missar",          "En metod för att testa statistiska hypoteser",          "Att negativ korrelation alltid är svårare att se i diagram"        ],        "correct": "Att vår visuella uppfattning kan lura oss, och att räkning kan avslöja vad ögat missar"      }    },    "error": { "message": "Illusionen handlar om att vi uppfattar avstånd felaktigt – vad lär oss det om att enbart lita på bilder?" },    "correct": { "message": "Rätt! Müller-Lyer-illusionen illustrerar att vår visuella uppfattning kan lura oss att tro att lika långa avstånd är olika långa. Matematiken (att räkna rutor) kan avslöja det som ögat missar." }  },  {    "id": "k2-2-6-003",    "name": "Uppgift 3",    "exercise": "Varför räcker det inte med att titta på diagram med bara två dimensioner för att förstå komplexa samhällsfenomen?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Diagram är alltid missvisande och bör aldrig användas",          "Verkligheten innehåller relationer med tre eller fler faktorer som är svåra att illustrera i tvådimensionella bilder",          "Tvådimensionella diagram kan inte visa negativa värden",          "Alla samhällsfenomen är endimensionella"        ],        "correct": "Verkligheten innehåller relationer med tre eller fler faktorer som är svåra att illustrera i tvådimensionella bilder"      }    },    "error": { "message": "Tänk på hur komplexa sociala fenomen kan bero på många faktorer – hur många dimensioner behöver man för att visa det i ett diagram?" },    "correct": { "message": "Rätt! Verkligheten är full av relationer som involverar tre eller fler faktorer. Effekten av ett fenomen kan även påverka effekten av andra fenomen. I dessa fall blir enkla tvådimensionella illustrationer vilseledande." }  },  {    "id": "k2-2-6-004",    "name": "Uppgift 4",    "exercise": "Vad är en begränsning med att <em>enbart</em> slå fast om ett kausalt samband verkar finnas, utan att kvantifiera det?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Det är omöjligt att avgöra om ett samband ens existerar utan matematik",          "Man kan inte svara på hur stort sambandet är, vilket ofta är viktig information",          "Kausalitet kan bara fastställas med regressionsanalys",          "Diagram kan aldrig visa om ett samband är positivt eller negativt"        ],        "correct": "Man kan inte svara på hur stort sambandet är, vilket ofta är viktig information"      }    },    "error": { "message": "Tänk på en läkemedelsbehandling: räcker det att veta att medicinen 'hjälper', eller behöver man veta mer för att fatta ett beslut om dosering?" },    "correct": { "message": "Rätt! Det räcker sällan att veta om ett samband existerar – vi vill veta hur stort det är. Precis som att man vid medicinering behöver veta dos, behöver samhällsvetenskaplig analys också kvantifiera effekter. Utan matematik är det ofta omöjligt." }  },  {    "id": "k2-2-6-005",    "name": "Uppgift 5",    "exercise": "Samhällsvetenskap arbetar ofta med frågor nära ideologi och värderingar. Hur kan kvantitativ och matematisk analys vara ett hjälpmedel i sådana sammanhang?",    "image": null,    "inputtype": "button",    "multichoice": {      "q1": {        "label": "Välj ett alternativ:",        "options": [          "Matematik eliminerar ideologiska frågor helt",          "Matematik kan hjälpa oss skilja vad vi vet från vad vi önskar att vi visste, och avfärda ohållbara påståenden",          "Matematik är värdefri och kan aldrig missbrukas",          "Matematik gör att alla alltid håller med om slutsatserna"        ],        "correct": "Matematik kan hjälpa oss skilja vad vi vet från vad vi önskar att vi visste, och avfärda ohållbara påståenden"      }    },    "error": { "message": "Tänk på hur noggrann kvantitativ analys kan skilja kunskap från önsketänkande — även i normativt laddade sammanhang." },    "correct": { "message": "Rätt! Noggrann kvantitativ analys kan hjälpa oss att skilja kunskap från önsketänkande och att avfärda ohållbara påståenden redan innan de får för stort genomslag. Matematiken är ingen garanti, men ett viktigt verktyg." }  }];</script>
<div class="exercise-section" data-section-id="k2-2-6"></div>

