# Week 9

## Project

- Plaats je eindprocect in deze folder.
- Vul de onderstaande **verantwoording** in. Vul bij elk punt in of en hoe je project hieraan voldoet. Verwijs naar relevante code, en vul dit eventueel aan met eigen opmerkingen, links, etc.

## Ontvankelijkheidseis

- Het inleverdocument van je project is ingevuld en komt overeen met de code van je project. 
- Het project is zelf bedacht en zelf geschreven.

# Verantwoording

## Concept (1 punt)
Je hebt een eigen concept bedacht voor een Machine Learning applicatie met behulp van de AI x Design Cards. Je inleverdocument bevat een korte uitleg over jouw idee en de toegevoegde waarde van Machine Learning in jouw applicatie. 

Je hebt aan de hand van de "Machine Learning Reading List" op GitHub onderzoek gedaan naar verschillende libraries, tools en API's om te onderzoeken wat zou kunnen werken voor jouw concept. Beschrijf je bevindingen kort in je inleverdocument.

###
<!-- Na een aantal Design cards te bekijken heb ik een card gevonden die mij erg aansprak. 
 - What if you can recognize and respond to users body and hand gestures? 
Ik kwam op het idee om een tool te maken die kan herkennen met behulp van hand gebaren of iemand een vraag heeft.   

Om te beginnen met mijn onderzoek ben ik op de "Machine Learning Reading List" gaan kijken naar models waarmee ik hand posities kan herkennen. Ik heb ervoor gekozen om voor mijn eerste prototype de handpose model van ML5 te gebruiken. Ik heb voor deze gekozen omdat deze overzichtelijker results terug geeft zoals de "landmarks". Hiermee kan ik makkelijk de wijsvinger en duim gebruiken. -->

## Prototype 1  (1 punt)
Naar aanleiding van je onderzoek heb je een code prototype gebouwd, om te testen of jouw gekozen algoritme werkt zoals je verwacht. Omschrijf het resultaat in je inleverdocument. Hoe nauwkeurig is je algoritme? Heb je training data nodig en hoe kom je daar aan? Gebruik je classification of regression? Is het algoritme makkelijk in een web app toe te passen?

###
<!-- Ik heb een prototype gebouwd waarin de data van de wijsvinger gebruikt wordt om de richting te bepalen. Door van 2 punten van de wijsvinger de positie op te slaan kan ik de richting van de wijsvinger bepalen. Ik heb een groot aantal data opgeslagen waarin ik mijn wijsvinger omhoog hield. Ook heb ik een groot aantal voorbeelden opgeslagen waarin ik mijn vingers willekeurig in beeld liet zien. Dit heb ik gedaan door de positie van de 2 punten in een object te zetten en deze via de consolelog te laten zien in de console. Hieruit kon ik de data handmatig kopiëren naar een bestand. 

Deze data heb ik vervolgends gebruikt om een neuralnetwork mee te trainen die kan herkennen wanneer iemand zijn wijsvinger opsteekt.
Het model vond ik redelijk betrouwebaar na het trainen en het is makkelijk toe te passen in een webapp. Voor dit model heb ik gebruik gemaakt van classification. Het model kiest of de gevonden vinger omhoog is of niet. -->

## Prototype 2  (1 punt)
Om een betere keuze te maken heb je een tweede prototype gebouwd met een ander algoritme, library of API. Omschrijf ook hier het resultaat in je inleverdocument zoals bij het eerste prototype.

###
<!-- Voor mijn 2de prototype heb ik gebruik gemaakt van de handtracking API. Deze API geeft de locatie van een hele hand terug. Met deze API kan ik dus bepalen of iemand bijvoorbeeld zijn hand opsteekt. Ik merkte al snel dat deze API betrouwbaarder is door de verschillende opties die je kan instellen. Zo heb ik bijvoorbeeld aangepast dat er maar 1 hand herkent wordt en alleen wanneer de API met 90% zekerheid weet dat het een hand is. Ik heb op dezelfde manier als bij prototype 1 voor de traindata gebruik gemaakt van consolelog. Ook bij dit prototype heb ik gebruik gemaakt van de ML5 neuralnetwork. Een nadeel wat mij opviel was dat een gezicht ook als hand kan worden herkent. -->

## Uitwerking  (1 punt)
Je hebt je prototype uitgewerkt tot een werkende machine learning applicatie. Je hebt supervised of unsupervised learning gebruikt om een model te bouwen dat goed werkt voor jouw concept. Je hebt getest of het werkt onder verschillende omstandigheden of met verschillende gebruikers.

###
<!-- Voor de uitwerking heb ik gekozen om de handtracking API te gebruiken. Dit heb ik besloten omdat deze naar mijn mening accurater is. Ik heb voor de neuralnetwork gebruik gemaakt van supervised learning. In mijn testen merkte ik dat het achtergrondlicht heel belangrijk is. Wanneer er veel achtergrondlicht is worden hoofden vaak herkent als hand. Ook merkte ik bij het testen dan de wanneer een hand wordt opgestoken in de linkerbovenhoek van de webcam deze minder snel herkent wordt dan in de rechterbovenhoek. Dit is denk ik het gevolg van de trainingdata die meer voorbeelden heeft met de rechterhand. (rechterbovenhoek) -->

## Web applicatie (1 punt)
Je hebt een werkende **html + css + javascript** applicatie gebouwd om je algoritme heen. De applicatie staat online. Je hebt tijd besteed aan een werkbare gebruikerservaring en layout.

###
<!-- Ik heb geprobeerd een online video vergadering na te bootsen met placeholder webcam's. Wanneer een hand wordt opgestoken komt er een blauwe rand om de webcam heen zodat iedereen kan beter zien dat iemand zijn hand heeft opgestoken. -->

## Organisatie van code (1 punt)
Je hebt nagedacht over de organisatie van code. Je project gebruikt coding standards zoals je die geleerd hebt in eerdere programmeervakken: je deelt functionaliteit op in eigen bestanden. Je gebruikt classes of functies om code overzichtelijk te maken. Je readme file bevat installatie instructies waarmee anderen de applicatie lokaal kunnen installeren.