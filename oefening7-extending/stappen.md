# Wat we gaan maken?
We maken een hero en een coin class.

## Wat te doen

---
# stap 1 - Extending Sprite
We kunnen coin en hero beschouwen subklassen van hetzelfde soort object "Sprite"
Ze hebben deels hetzelfde gedrag, deels ander.

We kunnen dit ook in onze code laten zien:
Met het code woord super, wordt de constructor aangeroepen van de class waarvan je extend.
```
class Hero extends Sprite
{
	constructor()
	{
		super("#f00",100,100);
		console.log(JSON.stringify(this))
	}
	behaviour()
	{
		// snelheid
		this.x=this.x+this.dx;
		this.y=this.y+this.dy;
			
		//stuiteren
		if(this.x>(game.viewport.w-this.w))
		{
			this.dx=-Math.abs(this.dx);
			this.dx*=0.9;
			this.x=(game.viewport.w-this.w);
		}
		if(this.x<0)
		{
			this.dx=Math.abs(this.dx);
			this.dx*=0.9;
		}
		if(this.y>(game.viewport.h-this.h))
		{
			this.y=(game.viewport.h-this.h);
			this.dy=-Math.abs(this.dy);
			this.dy*=0.9;
		}
		if(this.y<0)
		{
			this.dy=Math.abs(this.dy);
			this.dy*=0.9;
		}
		// besturing
		if(game.keys.left) this.dx-=0.5;
		if(game.keys.right) this.dx+=0.5;
		if(game.keys.up) this.dy-=0.5;
		if(game.keys.down) this.dy+=0.5;
		//console.log(this.dx);
		
		// wrijving
		this.dy*=0.99;
		this.dx*=0.99;
			  
		// laat de wijzigingen zien.
		this.update();

	}
}
```

en in Game wordt het een stuk eenvoudiger

```
	loop()
		{
			this.hero.behaviour();
			
			 // voor alle coins, kijk of je de held raakt
			 for(let i=0;i<10;i++) 
			 ...
```

---
# stap 2 - Wall geluid erin
Nu kunnen we in de hero een extra geluid toevoegen: wall.
```
	if(this.y>(game.viewport.h-this.h))
		{
			this.y=(game.viewport.h-this.h);
			this.dy=-Math.abs(this.dy);
			this.dy*=0.9;
			game.sounds.play("wall");
		}
```
Wat zou je daarvoor moeten toevoegen in Game.js?

---
# stap 3 - 'Coin Behaviour'
Coins doen eigenlijk niks..
Ze kijken alleen of ze de hero raken en verplaatsen zich als dat gebeurd.

Kunnen we dit gedrag in een coinClass vatten, die ook Sprite extend?
Tip: het gedrag van de coins staat nu nog beschreven in Game.js!
Vervang dit door: 
```
 // voor alle coins, kijk of je de held raakt
			 for(let i=0;i<this.coins.length;i++) 
			 {
				this.coins[i].behaviour(); 
			 }
```

Het gedrag beschrijf je nu in Coin.js, dat moet je even omschrijven.
This wordt game.
en coin wordt this.
Vergeet niet deze nieuwe class toe te voegen in de HTML in een script tag.
Ook moet je nu de coins definieren als new Coin, niet als new Sprite.

---
# stap 4 - coin behaviour ingewikkelder maken

Kopieer de stukjes voor snelheid, stuiteren en update van Hero naar coin.
voeg dan deze code toe aan de coin constructor functie:
```
let r=Math.random()*Math.PI*2;
this.dx=Math.sin(r);
this.dy=Math.cos(r);
```
Zo krijgen de coins een willekeurige richting.
Je ziet dat je code nu extreem herbruikbaar is.
Dit is een van de voordelen van de OOP-syntax van classes (this gebruiken voor het object zelf)
---
# stap 5 - coin behaviour verhuizen naar superClass
Sommige behaviours zoals stuiteren zijn nu dubbel gedefinieerd.
We kunnen deze naar de superClass sprite verhuizen.
Het gaat daarbij vooral om: stuiteren.

Zorg dat dit de behaviour kan zijn in Coin.js:
```
behaviour()
{
	// snelheid
	this.x=this.x+this.dx;
	this.y=this.y+this.dy;
	
	//stuiteren
	this.stuiteren("");
	
	if(this.hitTest(game.hero)==true)
	{
		this.x=Math.floor(Math.random() * (game.viewport.w-20))
		this.y=Math.floor(Math.random() * (game.viewport.h-20));
		this.update();
		game.sounds.play("hit");
		game.score++;
	}
	
	this.update();
}
```
en dit in Hero.js
```
behaviour()
{
	// snelheid
	this.x=this.x+this.dx;
	this.y=this.y+this.dy;
		
	this.stuiteren("wall");
		
	// besturing
	if(game.keys.left) this.dx-=0.5;
	if(game.keys.right) this.dx+=0.5;
	if(game.keys.up) this.dy-=0.5;
	if(game.keys.down) this.dy+=0.5;
	//console.log(this.dx);
		
	// wrijving
	this.dy*=0.99;
	this.dx*=0.99;
			  
	// laat de wijzigingen zien.
	this.update();
}
```
De string die je meegeeft aan stuiteren is het geluid dat moet worden afgespeeld, als er een object stuitert.
In het geval van een coin is dat "", niks, daarvoor moet je even iets aanpassen in de code om het te laten werken.
---
# stap 6 - Special coin maken
Nu maken we een kopie van Coin.js genaamd SpecialCoin.js, deze extend ook Sprite.

In Game .js zetten we de volgende Code:
```
	for(let i=0;i<5;i++) this.coins.push(new Coin());
    this.coins.push(new SpecialCoin());
```
Dus we maken eerst vijf gewone coins, dan een special coin.
Maak deze nieuwe coin paars, iets groter en 5 punten waard.

# stap 7 - Special Coin Behaviour
Ik heb er dit van gemaakt:
```
	constructor()
	{
		super("#f0f",30,30);
		let r=Math.random()*Math.PI*2;
		this.dx=Math.sin(r);
		this.dy=Math.cos(r);
		this.state="linksom";
		this.stateCounter=0;
	}
	behaviour()
	{
		// weg van de hero:
		if(typeof(game.hero)!="undefined")
		{
			let ax=(this.x-game.hero.x);
			let ay=(this.y-game.hero.y);
			let dist=Math.sqrt(ax*ax+ay*ay);
			if(dist!=0)
			{
				switch(this.state)
				{
					case "linksom":
						this.dx-=0.5*ay/dist;
						this.dy+=0.5*ax/dist;
					break;
					case "rechtsom":
						this.dx+=0.5*ay/dist;
						this.dy-=0.5*ax/dist;
					break;
				}
			}
			if(this.stateCounter%150==0)
			{
				if(Math.random()<0.5)
				{
					this.state="linksom";
				}else
				{
					this.state="rechtsom";
				}
			}
		}
		let speed=Math.sqrt(this.dx*this.dx+this.dy*this.dy);
		if(speed>10)
		{
			this.dx*=0.9;
			this.dy*=0.9;
		}
		
		/// .... vanaf hier hetzelfde als het was..
		// snelheid
		this.x=this.x+this.dx;
		this.y=this.y+this.dy;
		...
```
Zo ontwijkt de special Coin de held en wordt de jacht wat spannender.
Wellicht kun je nog ander gedrag bedenken.
In feite hoef je nu alleen behaviour en constructor te veranderen.
Zo werk ik ook in de gameEngine.
