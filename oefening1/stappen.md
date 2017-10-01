# Wat we gaan maken?
We gaan een beginnetje maken aan onze game Engine. Om wat principes te verkennen gebruiken we jsFiddle.

## Wat te doen
Dit stappenplan is wellicht makkelijker te lezen hier: 
https://github.com/HjalmarSnoep/MG-games-tutorial/blob/master/oefening1/stappen.md

Je kunt ook gewoon met deze tekstfile blijven werken, er staat hetzelfde in.

Klik hier om te zien wat we gaan maken:  https://jsfiddle.net/sezvm5pu/
Ga daarna door met stap1. Kom je er niet zelf uit, klik dan op de jsfiddle link om te kijken wat er bedoeld werd in deze stap,  
maar PROBEER HET EERST ZELF! 

Was het echt niet duidelijk? Zou je dan een issue willen maken om ons dat te vertellen? Dat helpt ons, dank je!

---
# stap 1 - kennismaking met JSFiddle
Ga naar jsfiddle.net, je ziet hier een splitsing in vier delen, css, html en javascript en het resultaat.
Als je op run drukt, komt in het result schermpje de totale pagina te staan. (Dat blijft nu dus leeg, want je hebt nog niks ingevuld)

##### Resultaat van deze stap:
-  https://jsfiddle.net/

---
# stap 2 - maak een div, style hem
Maak in het HTML gedeelte een div met een id=”test”, geef deze in het style gedeelte een style van 100px width en height en een kleur.
##### Resultaat van deze stap:
- https://jsfiddle.net/sezvm5pu/1/

---
# stap 3 - Vraag het dom-element op in javascript
vraag in javascript het object op aan de hand van de ID 
```js
  document.getElementById(“test”);
```
stop deze in een variabele. (var a=document.get..... etc)

##### API OMSCHRIJVING
 - https://www.w3schools.com/jsref/met_document_getelementbyid.asp
 - https://developer.mozilla.org/nl/docs/Web/API/Document/getElementById

##### Resultaat van deze stap:
- https://jsfiddle.net/sezvm5pu/2/

---
# stap 4 - verander het dom element met javascript
Je hebt nu een variabele met daarin het div-element (bijvoorbeeld de variabele naam is ‘a’).
Met 
```js
a.style.width="110px"; // (let op de "px" aan het eind van de breedte) 
```
kun je de width wijzigen. 

##### TIPS

> NB: sommige text editors maken direct gekrulde aanhalingstekens, die betekenen niks in javascript, maak er dan gewone aanhalingstekens van, door ze opnieuw te typen.
> Let ook op de "px" aan het eind van het getal, dit staat voor pixels, zonder deze aanduiding, snapt het document niet hoe groot je bedoeld.
> Lukt het allemaal niet, zet dan je script onderaan de pagina, net voor het einde van de body!

Als het allemaal gelukt is, zie je het blokje groter worden, zodra je op RUN drukt.

##### Resultaat van deze stap:
- https://jsfiddle.net/sezvm5pu/3/

---
# stap 5 - maak een function om het element te stylen
Nu gaan we hetzelfde doen in een function maak een function genaamd loop, waar je de twee regels code die je hebt inzet 
```js
function loop(){
    // hier komen jouw twee regels, spring je netjes in?
}
```
Als je nu op Run drukt doet, wordt het blokje weer 100px.. Hoe kan dat?
 onderaan de pagina, net voor he

##### Resultaat van deze stap:
- https://jsfiddle.net/sezvm5pu/4/


