# Machine Learning for Javascript - Eindproject

In week 7,8 en 9 werk je aan een eigen Machine Learning project in Javascript. 

⚠️ Let op! Dit is een aparte opdracht op github classroom! Je pushed je code dus niet naar dezelfde repository als de 4 eerdere inleveropdrachten.

## Project

- Push je project vóór de deadline naar github. Het project sluit na de deadline! De deadline is zondag 18 April 23:00 uur.
- Wacht niet tot 22:55 uur met pushen! Als er dan iets mis gaat heb je een probleem. Push regelmatig je updates tijdens de drie weken.
- Vul de **verantwoording** in (typ in dit README.md bestand). Vul bij elk punt in of en hoe je project hieraan voldoet. Verwijs naar relevante code, en vul dit aan met eigen opmerkingen, links, filmpjes, foto's, etc.
- Lees de cursushandleiding om te kijken hoe je complete eindcijfer tot stand komt.

## Mappenstructuur

- prototype 1 : je eerste prototype
- prototype 2 : je tweede prototype
- development : Je uitgewerkte prototype dat resulteert in een opgeslagen model.
- deployment : de website voor eindgebruikers waarin je model wordt ingeladen en gebruikt.

## Ontvankelijkheidseis

- Het inleverdocument van je project is ingevuld en komt overeen met de code van je project. 
- Het project is zelf bedacht en zelf geschreven.

<br>
<br>
<br>

# Inleverdocument

## Concept (1 punt)
Na een aantal Design cards te bekijken heb ik een card gevonden die mij erg aansprak. 
 - What if you can recognize and respond to users body and hand gestures? 
Ik kwam op het idee om een tool te maken die kan herkennen met behulp van hand gebaren of iemand een vraag heeft.   

Om te beginnen met mijn onderzoek ben ik op de "Machine Learning Reading List" gaan kijken naar models waarmee ik hand posities kan herkennen. Ik heb ervoor gekozen om voor mijn eerste prototype de handpose model van ML5 te gebruiken. Ik heb voor deze gekozen omdat deze overzichtelijker results terug geeft zoals de "landmarks". Hiermee kan ik makkelijk de wijsvinger en duim gebruiken. 

Door te herkennen of iemand zijn hand/vinger opsteekt kan het programma dit duidelijk kenbaar maken door bijvoorbeeld een kleur bij die persoon te zetten. Ook zou deze toepassing gebruikt kunnen worden zonder dat de camera met iedereen gedeelt wordt.

## Prototype 1  (1 punt)
Ik heb een prototype gebouwd waarin de data van de wijsvinger gebruikt wordt om de richting te bepalen. Door van 2 punten van de wijsvinger de positie op te slaan kan ik de richting van de wijsvinger bepalen. Ik heb een groot aantal data opgeslagen waarin ik mijn wijsvinger omhoog hield. Ook heb ik een groot aantal voorbeelden opgeslagen waarin ik mijn vingers willekeurig in beeld liet zien. Dit heb ik gedaan door de positie van de 2 punten in een object te zetten en deze via de consolelog te laten zien in de console. Hieruit kon ik de data handmatig kopiëren naar een bestand. 

Deze data heb ik vervolgends gebruikt om een neuralnetwork mee te trainen die kan herkennen wanneer iemand zijn wijsvinger opsteekt.
Het model vond ik redelijk betrouwebaar na het trainen en het is makkelijk toe te passen in een webapp. Voor dit model heb ik gebruik gemaakt van classification. Het model kiest of de gevonden vinger omhoog is of niet.

## Prototype 2  (1 punt)
Voor mijn 2de prototype heb ik gebruik gemaakt van de handtracking API. Deze API geeft de locatie van een hele hand terug. Met deze API kan ik dus bepalen of iemand bijvoorbeeld zijn hand opsteekt. Ik merkte al snel dat deze API betrouwbaarder is door de verschillende opties die je kan instellen. Zo heb ik bijvoorbeeld aangepast dat er maar 1 hand herkent wordt en alleen wanneer de API met 90% zekerheid weet dat het een hand is. Ik heb op dezelfde manier als bij prototype 1 voor de traindata gebruik gemaakt van consolelog. Ook bij dit prototype heb ik gebruik gemaakt van de ML5 neuralnetwork. Een nadeel wat mij opviel was dat een gezicht ook als hand kan worden herkent.

## Uitwerking  (1 punt)
Voor de uitwerking heb ik gekozen om de handtracking API te gebruiken. Dit heb ik besloten omdat deze naar mijn mening accurater is. Ik heb voor de neuralnetwork gebruik gemaakt van supervised learning. In mijn testen merkte ik dat het achtergrondlicht heel belangrijk is. Wanneer er veel achtergrondlicht is worden hoofden vaak herkent als hand. Ook merkte ik bij het testen dan de wanneer een hand wordt opgestoken in de linkerbovenhoek van de webcam deze minder snel herkent wordt dan in de rechterbovenhoek. Dit is denk ik het gevolg van de trainingdata die meer voorbeelden heeft met de rechterhand. (rechterbovenhoek)

## Web applicatie (1 punt)
Ik heb geprobeerd een online video vergadering na te bootsen met placeholder webcam's. Wanneer een hand wordt opgestoken komt er een blauwe rand om de webcam heen zodat iedereen kan beter zien dat iemand zijn hand heeft opgestoken.

## Organisatie van code (1 punt)
Voor de organisatie van de code heb ik de neuralnetwork en handtracking API in een aparte map gezet bij de javascript. Ook heb ik de model in een aparte folder gezet zodat deze overzichtelijk is. Ik heb alle code met korte comments uitgelegd. Ik heb ervoor gekozen om alleen code in de app.js file te zetten die gebruikt worden door de doeleinden van de webpagina. Deze functies maken gebruik van zowel de neuralnetwork als de handtracking API.

![Organisatie](images\structure.png?raw=true "Map structure")

![Comments](images\comments.png?raw=true "Comments")
