# Wat we gaan maken?
We gaan zorgen dat we onze 'player' een muntje kan 'pakken'

## Wat te doen
....
---
# stap 1 - maak the sprites van dezelfde structuur.
voeg 
coinSprite.x en coinSprite.y toe.
````javascript

coinSprite.x=Math.floor(Math.random() * (viewport.w-20))
coinSprite.y=Math.floor(Math.random() * (viewport.h-20));
coinSprite.dom.style.left=coinSprite.x+"px";
coinSprite.dom.style.top=coinSprite.y+"px";

```

---
# stap 2 - maak een functie om een sprite op de goede plaats te zetten.
Met
```javascript
function updateSprite(s)
{
}
```

Maak je een functie die je aan kunt roepen.
Kopieer het stukje dat de sprite op de juiste positie zet in de functie.
Vervang wel coinSprite door s.

(de laatste twee regels)..

Roep deze functie vervolgens aan:
```javascript
updateSprite(coinSprite);
```
en bovenin in de loop:
```javascript
  updateSprite(sprite);
 ```
 De oude code kan dan weg.
 
---
# stap 3 - maak een functie om te kijken hoe groot een sprite is..
Met
```javascript
function initSprite(s)
{
	s.w=s.dom.clientWidth;
	s.h=s.dom.clientHeight;
	console.log("sprite "+s.dom.id+" "+s.w+"x"+s.h);
}
```
Roep deze bovenaan aan, voor de loop, na het aanmaken van de sprites. Voor beide sprites.
clientHeight is de grootte die een element heeft in het window (de client).
Door console.log, krijg je informatie over je programma.

---
# stap 4 - maak nu de standaard AABB hittest functie.
Lees: https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection

```javascript
function spriteHitTest(s1,s2)
{
	if (s1.x < s2.x + s2.w &&
	   s1.x + s1.w > s2.x &&
	   s1.y < s2.y + s2.h &&
	   s1.h + s1.y > s2.y) {
		return true;
	}else
	{
		return false;
	}
}
```

---
# stap 5 - Voeg de functieaanroep toe aan de loop.
Als deze true teruggeeft, zet dan de positie van het muntje op een random positie in het window.

```javascript
  if(spriteHitTest(sprite,coinSprite)==true)
  {
   ...
  }
```




