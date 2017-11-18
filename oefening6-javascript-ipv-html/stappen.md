# Wat we gaan maken?
We zorgen dat de classes nergens van afhankelijk zijn

## Wat te doen

---
# stap 1 - Sound gemaakt door Sound.
Op dit moment gaat de Sound class ervan uit, dat er al een geluidje in de HTML staat.
Stel dat we meer geluiden hebben, dan wordt het vervelend, dat we zowel in de HTML
als in game.js onze sounds moeten initialiseren. 
Ook moeten we erg veel variabelen maken, zoals hitSound. 
We krijgen hitSound, wallSound, shootSound, explodeSound etc.
Dat moet makkelijker kunnen.

Laten we in Sound.js een aparte class Sounds maken.
Deze class regelt het aanmaken van nieuwe Sound classes en maakt dan ook direct
de benodigde audio-tag en plakt deze vast aan de body.

Kijk hoe deze er nu uitziet.

```
class Sound
{
	constructor(dom)
	{
		this.dom=dom;
	}
	play()
	{
		this.dom.play();
	}
}

class Sounds
{
	constructor()
	{
		this.sounds={};
	}
	addSound(id,mp3)
	{
		let audio=document.createElement("audio");
		let source=document.createElement("source");
		source.src=mp3;
		audio.appendChild(source);
		let sound=new Sound(audio);
		document.body.appendChild(audio);
		this.sounds[id]=sound;
		return sound;
	}
	play(id)
	{
		this.sounds[id].play();
	}
}
```

Nu kunnen we de audio tag uit de HTML halen (hij stond overigens op de verkeerde plek, namelijk buiten header en body, normaal staat hij in de body)

---
# stap 2 - uitbreiding van de Sprite
Bij sprite zorgen we dat de spriteClass zelf een div creeert.
We initialiseren de class met de kleur en de width en height die we willen hebben.

We geven de nieuwe sprite OOK de eigenschap die we in de stylesheet hebben gegeven voor beide sprites:
position: absolute;

Onze code in de sprite Constructor komt er ZO uit te zien:
```
    constructor(color,w=50,h=50,x=150,y=150,dx=0,dy=0)
	{
		this.x=x;
		this.y=y;
		this.dx=dx;
		this.dy=dy;
		this.dom=document.createElement("div");
		document.body.appendChild(this.dom);
		this.dom.style.backgroundColor=color;
		this.w=w;
		this.h=h;
		this.dom.style.width=this.w+"px";
		this.dom.style.height=this.h+"px";
		this.dom.style.border="solid 1px black";
		this.dom.style.position="absolute";
		console.log("new sprite "+this.w+"x"+this.h);
		this.update();
	}
```	
Ook moeten we de code in Game.js waarmee we de sprites maken vervangen:
```
	this.hero=new Sprite("#f00",150,150);
	this.coin=new Sprite("#ff0",50,50);
```
Test je code

---
# stap 3 - opschonen van de file.
Tenslotte halen we de coin en hero die we al hadden uit de HTML en CSS (anders staat deze er dubbel).

---
# stap 4 - meerdere coins
We zitten nu niet meer vast aan 1 id voor iedere coin. 
In plaats van een coin, kunnen we een flink aantal coins maken.

Dit kunnen we door twee stukjes code in Game aan te passen:
```
	for(let i=0;i<10;i++) this.coins[i]=new Sprite("#ff0");
```
en
```
	// voor alle coins, kijk of je de held raakt
	 for(let i=0;i<10;i++) 
	 {
		 let coin=this.coins[i];
		if(coin.hitTest(this.hero)==true)
		{
			console.log("we are hitting a hero");
			coin.x=Math.floor(Math.random() * (this.viewport.w-20))
			coin.y=Math.floor(Math.random() * (this.viewport.h-20));
			coin.update();
			this.sounds.play("hit");
			this.score++;
		}
	 }
```
Dit veranderd het spel behoorlijk.


---
# stap 5 - netter maken
Dit netter maken kunnen we ook met de hud.
Laat de hud zijn eigen div creeeren en zetten.
Voor de hud is het misschien wel logisch, dat we hem stylen via de CSS.
Daarom geven we de hud de className: hud.
---
# stap 6 - instructies toevoegen.
Als het een echte game moet worden, moeten we ook instructies toevoegen.
Deze kunnen we ook laten luisteren naar de events in de game.
Zo kunnen we beter instructies geven aan de speler.

Voeg de volgende class toe in de HTML, in game en in een eigen file.
```

class Instructions
{
	constructor()
	{
		this.dom=document.createElement("div");
		this.dom.className="instructions";
		document.body.appendChild(this.dom);
		this.state="unclicked";
		document.body.addEventListener("click",this.change.bind(this));
		this.dom.innerHTML="Klik in de game"; 
	}
	change()
	{
		this.dom.innerHTML="Gebruik de pijltjestoetsen om de held te besturen"; 
		document.body.removeEventListener("click",this.change.bind(this));
		document.body.addEventListener("keydown",this.hide.bind(this));
	}
	hide()
	{
		this.dom.style.display="none";
		document.body.removeEventListener("keydown",this.hide.bind(this));
	}
}
```

