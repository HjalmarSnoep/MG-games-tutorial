
class Hero extends Sprite
{
	constructor()
	{
		super("#f00",100,100);
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
			game.sounds.play("wall");
		}
		if(this.x<0)
		{
			this.dx=Math.abs(this.dx);
			this.dx*=0.9;
			game.sounds.play("wall");
		}
		if(this.y>(game.viewport.h-this.h))
		{
			this.y=(game.viewport.h-this.h);
			this.dy=-Math.abs(this.dy);
			this.dy*=0.9;
			game.sounds.play("wall");
		}
		if(this.y<0)
		{
			this.dy=Math.abs(this.dy);
			this.dy*=0.9;
			game.sounds.play("wall");
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

