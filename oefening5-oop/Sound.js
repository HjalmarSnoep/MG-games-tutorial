//<![CDATA[
"use strict";

class Sound
{
	constructor(id)
	{
		this.dom=document.getElementById(id);
	}
	play()
	{
		this.dom.play();
	}
}

