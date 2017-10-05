# Wat we gaan maken?
We gaan zorgen dat we onze 'player' kunnen controleren met de pijltjes toetsen.

## Wat te doen
##### TIP
> Dit stappenplan is wellicht makkelijker te lezen hier: 
> https://github.com/HjalmarSnoep/MG-games-tutorial/blob/master/oefening2/stappen.md
> Maar je kunt ook gewoon met deze tekstfile blijven werken, er staat hetzelfde in.

In de vorige oefening waren we gekomen tot:   https://jsfiddle.net/sezvm5pu/
Klik hier om te zien wat we gaan maken: https://jsfiddle.net/1v994ne5/2/
Ga daarna door met stap1. Kom je er niet zelf uit, klik dan op de jsfiddle link om te kijken wat er bedoeld werd in deze stap,  
maar PROBEER HET EERST ZELF! 

Was het echt niet duidelijk? Zou je dan een issue willen maken om ons dat te vertellen? Dat helpt ons, dank je!

---
# stap 1 - de coin
Maak een tweede blokje (klein en geel) dat een coin zou kunnen zijn. Geef dit een willekeurige positie met
```javascript
    Math.random()
```
( https://www.w3schools.com/jsref/jsref_random.asp )

*_Math.random()* geeft een getal tussen 0 en 1, 
bijvoorbeeld 0,3517284. 
> Wiskundig gezien is het Domein van de functie[0,1> 

Als je dat vermenigvuldigd met een waarde, wordt het tussen 0 en die waarde.
Dus Math.random()*page_width geeft een waarde tussen 0 en page_width. 
> Wiskundig gezien.. [0, pagewidth>
 
---
# stap 2 - zwaartekracht uit..
Ik zou de zwaartekracht weer uitzetten in onze 
demo. (dat is dy+=... of dy=dy+..., ik weet niet meer 
welke ik gebruikte maar ze zijn equivalent)
---
# stap 3 - 'lopen'
Dan zouden we naar het muntje moeten kunnen lopen in onze game. 
Daarvoor zou ik key control willen maken om het rode vlak te bewegen. 

Het is de bedoeling dat we een *eventListener* op het *document* zetten, waarmee we ons abbonneren op Events rondom keys.
> *“keydown”* en *“keyup”* 

zijn daarin eigenlijk de twee belangrijkste.
```javascript
document.addEventListener(“keydown”,keyHandler,false);
```
Deze geef je dus ook de naam van de functie (in dit geval keyHandler), 
die wordt aangeroepen als de key wordt ingedrukt.
met ev.keyCode, kun je daarin de code van de ingedrukte key afvangen:
```javascript
function keyHandler(ev)
{
    console.log(ev.keyCode);
}
 ```
---
# stap 5 -  luisteren naar een keys
Vervolgens kun je met een if() statement (branching) kijken 
of ev.keyCode 37 is en dan onze speler-sprite bewegen naar een bepaalde kant (in dit geval links?

---
# stap 6 -  luisteren naar meerdere keys..
Doe dit voor alle kanten.
 
---
# stap 6 - continu keys. 
Je moet nu alsmaar op dezelfde key drukken om verder te komen. 
We zouden eigenlijk keydown moeten kunnen vasthouden. Dat kan natuurlijk 
als we een variabele maken (bovenaan, buiten de functie) die bijvoorbeeld *keyleft_down* heet.
 
```javascript
function keyDownHandler(ev)
{
    if(ev.keyCode==37) keyleft_down=true;
}
function keyUpHandler(ev)
{
   if(ev.keyCode==37) keyleft_down=false;
}
``` 
---
Daarna kun je in de loop checken of keyleft_down 
is en dan de positie (of snelheid) van de sprite verhogen of verlagen.

In de volgende stap kijken we of de munt de speler raakt en laten we wat gebeuren.
 
