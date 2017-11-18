
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
}

