
class Coin extends Sprite
{
	constructor(x,y)
	{
		super("#ff0",20,20);
		let r=Math.random()*Math.PI*2;
		this.dx=Math.sin(r);
		this.dy=Math.cos(r);
		this.x=x;
		this.y=y;
		console.log("new Coin at: "+x+","+y);
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
			this.remove();
//			this.x=Math.floor(Math.random() * (game.viewport.w-this.w))
//			this.y=Math.floor(Math.random() * (game.viewport.h-this.h));

			this.update();
			game.sounds.play("hit");
			game.score++;
		}
		
		this.update();
	}
}

