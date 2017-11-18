"use strict";

class Keys
{
	constructor()
	{
		this.left = false;
		this.up = false;
		this.right = false;
		this.down = false;
		document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
		document.addEventListener("keyup", this.keyUpHandler.bind(this), false);

	}
	keyDownHandler(ev)
	{
		if(ev.keyCode == 37)
		{
			this.left = true;
		}else if (ev.keyCode == 38)
		{
			this.up = true;
		}else if (ev.keyCode == 39)
		{
			this.right = true;
		}else if (ev.keyCode == 40)
		{
			this.down = true;
		}
	}
	
	keyUpHandler(ev)
	{
		if(ev.keyCode == 37)
		{
			this.left = false;
		}else if (ev.keyCode == 38)
		{
			this.up = false;
		}else if (ev.keyCode == 39)
		{
			this.right = false;
		}else if (ev.keyCode == 40)
		{
			this.down = false;
		}
	}
	
}




