//<![CDATA[
"use strict";

class Game
{
		constructor()
		{
			this.hero=new Sprite("player");
			console.log(this.hero.dx)
			this.coin=new Sprite("coin");
			this.hitSound=new Sound("hit");
			this.viewport=new Viewport();
			this.hud=new Hud();
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
			if(this.coin.hitTest(this.hero)==true)
			{
				console.log("we are hitting a hero");
				this.coin.x=Math.floor(Math.random() * (this.viewport.w-20))
				this.coin.y=Math.floor(Math.random() * (this.viewport.h-20));
				this.coin.update();
				this.hitSound.play();
				this.score++;
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

