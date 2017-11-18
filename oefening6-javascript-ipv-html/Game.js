//<![CDATA[
"use strict";

class Game
{
		constructor()
		{
			// tackle the layout FIRST!
			this.hud=new Hud();
			this.viewport=new Viewport(0,this.hud.h);
			this.hero=new Sprite("#f00",100,100);
			this.coins=[];
			for(let i=0;i<10;i++) this.coins[i]=new Sprite("#ff0");
			this.sounds=new Sounds();
			this.sounds.addSound("hit","hit.mp3");
			this.instructions=new Instructions();
			this.keys=new Keys();
		}
		start()
		{
			this.score=0;
			this.tijd=2000;
			this.loop(); // start the game
		}
		loop()
		{
			this.hero.update();
			
			// specific code for hero
			
			// snelheid
			this.hero.x=this.hero.x+this.hero.dx;
			this.hero.y=this.hero.y+this.hero.dy;
			
			//stuiteren
			if(this.hero.x>(this.viewport.w-100))
			{
				this.hero.dx=-Math.abs(this.hero.dx);
				this.hero.dx*=0.9;
			}
			if(this.hero.x<0)
			{
				this.hero.dx=Math.abs(this.hero.dx);
				this.hero.dx*=0.9;
			}
			if(this.hero.y>(this.viewport.h-100))
			{
				this.hero.y=(this.viewport.h-100);
				this.hero.dy=-Math.abs(this.hero.dy);
				this.hero.dy*=0.9;
			}
			if(this.hero.y<0)
			{
				this.hero.dy=Math.abs(this.hero.dy);
				this.hero.dy*=0.9;
			}
			// besturing
			if(this.keys.left) this.hero.dx-=0.5;
			if(this.keys.right) this.hero.dx+=0.5;
			if(this.keys.up) this.hero.dy-=0.5;
			if(this.keys.down) this.hero.dy+=0.5;
			//console.log(this.hero.dx);
			
			// wrijving
			this.hero.dy*=0.99;
			this.hero.dx*=0.99;
			  
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

