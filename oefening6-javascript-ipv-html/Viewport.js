//<![CDATA[
"use strict";

class Viewport
{
	constructor(x,y)
	{
		this.x=0;
		this.y=y;
		this.w=window.innerWidth-x;
		this.h=window.innerHeight-y;
	}
}



