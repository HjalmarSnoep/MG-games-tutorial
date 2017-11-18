
class Coin extends Sprite
{
	constructor()
	{
		super("#ff0",20,20);
		let r=Math.random()*Math.PI*2;
		this.dx=Math.sin(r);
		this.dy=Math.cos(r);
	}
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
}

