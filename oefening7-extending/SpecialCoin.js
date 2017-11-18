
class SpecialCoin extends Sprite
{
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
		this.stateCounter++;
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

		// snelheid
		this.x=this.x+this.dx;
		this.y=this.y+this.dy;
		
		//stuiteren
		this.stuiteren("");
		
		if(this.hitTest(game.hero)==true)
		{
			this.x=Math.floor(Math.random() * (game.viewport.w-this.w))
			this.y=Math.floor(Math.random() * (game.viewport.h-this.h));
			this.update();
			game.sounds.play("hit");
			game.score+=5;
		}
		
		this.update();
	}
}

