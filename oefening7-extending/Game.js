//<![CDATA[
"use strict";

class Game
{
		constructor()
		{
			// tackle the layout FIRST!
			this.hud=new Hud();
			this.viewport=new Viewport(0,this.hud.h);
			this.score=0;
			this.tijd=2000;
			this.hero=new Hero();
			this.coins=[];
			for(let i=0;i<5;i++) this.coins.push(new Coin());
			 this.coins.push(new SpecialCoin());
			this.sounds=new Sounds();
			this.sounds.addSound("hit","hit.mp3");
			this.sounds.addSound("wall","wall.mp3");
			this.instructions=new Instructions();
			this.keys=new Keys();
		}
		startLevel(nr)
		{
			this.loop(); // start the game
		}
		loop()
		{
			this.hero.behaviour();
			 // voor alle coins, kijk of je de held raakt
			 for(let i=0;i<this.coins.length;i++) 
			 {
				this.coins[i].behaviour(); 
			 }
			// de tijd
			this.tijd--;
			if(this.tijd>0)
			{
				window.requestAnimationFrame(this.loop.bind(this));
			}
			// laat de tijd zien
			this.hud.update(this.tijd, this.score);
		}
}

