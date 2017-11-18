# Wat we gaan maken?
We gaan de munten laten verdwijnen.

## Wat te doen

---
# stap 1 - Sprites laten verdwijnen.
Nu zouden we ander gedrag willen, van de munten, als ze geraakt worden, ze moeten verdwijnen.
We willen ze dan op random plekken in een vast tempo laten 'spawnen'.

Spawnen en verdwijnen is voor gameObjecten heel normaal gedrag, maar het is soms 
lastig te implementeren.

Je kunt namelijk niet van een instance van een class  zeggen dat hij opeens niet meer bestaat.
De instance werd meestal gemaakt door een parent.
Dus die moet ook bijhouden dat de instance niet meer bestaat, anders roept hij de volgende keer (loop)
een instance aan, dat niet meer bestaat.

Laten we ervan uitgaan, dat we dat gaan regelen in de superClass Sprite.
In Coin en SpecialCoin kunnen we dan gewoon zeggen: this.remove();
Wat this.remove doet.. da's een andere zaak.

```
			this.remove();
//			this.x=Math.floor(Math.random() * (game.viewport.w-this.w))
//			this.y=Math.floor(Math.random() * (game.viewport.h-this.h));

```
In Sprite.js zullen we vervolgens een method (functie) moeten maken: remove..
We kunnen dan het dom element vernietigen.
We doen dat met de volgende code:
```
		this.dom.parentNode.removeChild(this.dom);
```
Je ziet, ook in de DOM (Document Object Model) moet je als element aan je parent-element (in dit geval parentNode = document.body) vragen
of je weggehaald kan worden. Dit komt omdat de parentNode altijd lijsten bijhoud van zijn kinderen.

Als we alleen deze code toevoegen, zien we, dat het misgaat! 
Direct, als we opstarten:
 > Sprite.js:32 Uncaught TypeError: Cannot read property 'removeChild' of null

Waarom direct??
Dit komt, omdat we beginnen met onze coins op dezelfde plek als de Hero.
In de constructor van Sprite staat
```
	constructor(color,w=50,h=50,x=50,y=50,dx=0,dy=0)
```
Dit betekent dat de code om de coins weg te halen direct wordt uitgevoegd: als er geen x en y zijn gedefinieerd, dan zijn x en y 50.
Bij het eerste behaviour staan alle objecten op dezelfde plek en botsen dus!

In "extend.html" (het vorige gedrag van de coins) merkten we dat niet, omdat de coins op een nieuwe plek werden gezet.
Dat is het gedrag dat we eigenlijk wilden.
Maar als je goed kijkt, zie je het wel aan het punten aantal: dat begint niet op 0, maar op 10.
We raken alle 5 munten en de specialcoin = 5. 5+5=10.

Daar moeten we dus eerst wat aan veranderen.
We kunnen in Game.js de beginplaats van alle coins makkelijk zetten door WEL een waarde te zetten voor X en Y.
De hero komt standaard op 150,150, dat is gedefinieerd in Hero.js
Laten we onze coins eronder zetten..

Dan moeten we eerst de coin constructor veranderen:
```
constructor(x=50,y=50)
{
	super("#ff0",20,20); // kleur, breedte, hoogte.
	let r=Math.random()*Math.PI*2;
	this.dx=Math.sin(r);
	this.dy=Math.cos(r);
	this.x=x; 
	this.y=y;
}
```
Nu veranderen we de code waar we de coins maken in Game:
```
for(let i=0;i<5;i++) 
{
	this.coins.push(new Coin(300,300));
}			 
```
Nu is geen enkele coin initieel in aanraking met de hero. En drijven de coins als een soort
explosie langzaam uit elkaar.

Wel horen we nog de 'pink' van de specialCoin, die begint op de plek van de hero.
We moeten het proces dus even herhalen voor SpecialCoin.js
Zetten we dan deze code in Game.js:
```
this.coins.push(new SpecialCoin(500,500));
```
Dan horen we geen 'pink' meer aan het begin: de hero en coins beginnen op een ander punt.

Toch krijgen we nog steeds de error:
 > Sprite.js:32 Uncaught TypeError: Cannot read property 'removeChild' of null

Dit komt, omdat de eerste keer, dat een coin de hero raakt, het dom object wordt vernietigd, maar
de coin gaat niet echt 'weg'. Daarom wordt de coin opnieuw aangeroepen en de volgende keer is er
geen parent meer voor dit dom-object om aan te vragen of hij weg mag. Hij staat immers niet meer op de pagina.
Dat is deze error.
We kunnen dat ontwijken door:
```
if(this.dom.parentNode!=null)
{
...
}
```
Echt netjes is dat echter niet.
We horen nu soms nog steeds de tink van het raken van onzichtbare coins. Ook als er geen meer op de pagina staan.
Probeer maar.

---
# stap 2 - Sprites niet meer mee laten doen.

We hebben nu wel de dom instances laten verdwijnen, maar de sprites zelf bestaan nog.
We moeten dus de game.js vertellen deze sprites te negeren.
Dit doen we met een Flag.
in de constructor van sprite zetten we:
```
	this._remove=false;
```
En in de remove method.
```
	this._remove=true;
```
We hebben nog niks echt gedaan, maar in game kunnen we nu zeggen:
```
 for(let i=0;i<this.coins.length;i++) 
{
	if(this.coins[i]._remove==true)
	{
		// haal deze munt weg.
	}else{
		this.coins[i].behaviour(); 
	}
}
```
Oftewel: doe alleen het gedrag als remove op false staat.

Probeer maar, nu verdwijnen de munten WEL permanent.
Het is nu een saai spel, waarbij je maar 10 punten kunt halen.
---
# stap 3 - Sprites verwijderen uit de parent.

We zouden nu op regelmatige basis Coins kunnen bijmaken.
Maar dan zouden er wel steeds meer Coins komen, die genegeerd worden, waardoor het spel
steeds langzamer zou lopen. 
Dat is niet elegant.

Het zou eleganter zijn de munten daadwerkelijk weg te halen.
Dit moeten in game.js doen.
met Array.splice(index,nr); 
halen we een of meer elementen midden uit een array.
De andere elementen schuiven op.
Omdat de andere elementen opschuiven, moeten we de loop waarin elementen uit
een array verwijderd worden achteruit laten lopen
dus
```
			 for(let i=0;i<this.coins.length;i++) 
````
wordt			 
```
		 for(let i=this.coins.length-1;i>=0;i--) 
```
Dan is het WEL netjes. De munten verdwijnen, als ze niet meer nodig zijn.

---
# stap 4 - Sprites spawnen

In feite weten we al hoe dit moet.
We laten in Game eens in de zoveel tijd munten ontstaan:
-Hou een counter bij in game (gameCounter?)
-Maak een this.gameCounter aan in startLevel.
-Hoog deze op in de loop() die begint in startLevel
-Zodra deze deelbaar is door 150 (this.gameCounter%150==0), kun je een nieuwe coin maken.
-We maken een 10% kans op een specialCoin.

Je ziet dat een specialCoin nu veel specialer wordt.
Er zou dus ook een geluidseffectje op de special coin kunnen komen.
Ook kunnen we nu in speciale gevallen TWEE special coins krijgen!

Het is weer een ander spel geworden.

---
# stap 5 - Auto despawn
Stel nu dat we een tijdlimiet op de specialCoin willen zetten.
Na 600 gamecycles (met 60 frames per seconde is dat 10 seconden) verdwijnen ze, of
je ze nu gepakt hebt of niet.

Dit kun je nu zelf..

Door te spelen met de hoeveelheid specialCoins/Coins en de snelheid waarmee deze ontstaan, kun je de game Balancen.


---
# stap 6 - Je weet nu eigenlijk alles

In Making Games gebruik ik Trons om assets te maken. Dat zijn online editors, waarmee je direct aan de slag kan (alleen zijn ze nog niet allemaal af :)

In de game Engine die ik gebruik, zijn nog maar een paar toevoegingen:
-Pages
-Achievements
-Game Ini file.
-Een vaste plek voor Trons.
-Automatische Loading van Assets en Tron Compatibiliteit.

Op die manier kun je om de game heen nog pagina's maken

Voor de rest is het een uitbreiding van de mogelijkheden van deze classes.
-Extended hitTesting
-Betere controls en de gamePad, toetsenbord en muis als mogelijkheden.
-ButtonClass voor op de pages.
-Trons voor geluid en animatie en nog veel meer.
-Particles.
-Tiles

etc. etc

Maar er is niet veel nieuws onder de zon:
- In plaats van sprite heb ik een gameObject. De Spriteclass tekent op het Canvas.
- In plaats van de ES6 syntax voor classes, die nog niet universeel ondersteund wordt, gebruik ik function als class. (Dat is een beetje typisch, maar werkt hetzelfde)
- In plaats van de document.body gebruik ik een canvas, dat ik zelf teken, dat is vaak sneller en opent de weg naar WebGL voor betere prestaties.
- In plaats van een audio-element gebruik ik webAudio, zodat ik geluiden kan mengen en er effecten op kan loslaten.
- Ik scale de viewport zo groot mogelijk, zodat je van een vast aantal pixels kan uitgaan.

Ik weet nog niet of het nodig is die dingen ook apart uit te leggen.
Mocht je erachter komen, dat dingen niet duidelijk zijn, zeg het dan.

Dingen als de interactie met Tiles moeten we per game toch zelf programmeren. 
Wel is daar ook hergebruik in mogelijk als je een soort game al eens gemaakt hebt.

