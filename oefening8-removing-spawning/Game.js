//<![CDATA[
"use strict";

class Game
{
		constructor()
		{
			// tackle the layout FIRST!
			this.hud=new Hud();
			this.viewport=new Viewport(0,this.hud.h);
			this.hero=new Hero();
			this.coins=[];
			for(let i=0;i<5;i++) 
			{
				this.coins.push(new Coin(300,300));
			}			 
			this.coins.push(new SpecialCoin(500,500));
			this.sounds=new Sounds();
			this.sounds.addSound("hit","hit.mp3");
			this.sounds.addSound("wall","wall.mp3");
			this.instructions=new Instructions();
			this.keys=new Keys();
		}
		startLevel(nr)
		{
			this.score=0;
			this.tijd=2000;
			this.gameCounter=0;
			this.loop(); // start the game
		}
		loop()
		{
			this.gameCounter++;
			if(this.gameCounter%50==0)
			{
				let x=game.viewport.w*Math.random();
				let y=game.viewport.h*Math.random();
				if(Math.random()<0.1)
				{
					this.coins.push(new SpecialCoin(x,y));
				}else{
					this.coins.push(new Coin(x,y));
				}
			}
			this.hero.behaviour();
			 // voor alle coins, kijk of je de held raakt
			for(let i=this.coins.length-1;i>=0;i--) 
			{		
				if(this.coins[i]._remove==true)
				{
						this.coins.splice(i,1);
					// haal deze munt weg.
				}else{
					this.coins[i].behaviour(); 
				}
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

