//<![CDATA[
"use strict";

class Hud
{
	constructor()
	{
		this.dom=document.createElement("div");
		this.dom.className="hud";
		this.dom.innerHTML="test"; // put something in there for testing the height of the thing..
		document.body.appendChild(this.dom);
		this.h=this.dom.clientHeight;
	}
	update(tijd,score)
	{
		this.dom.innerHTML="tijd: "+tijd+" score: "+score; 
	}
}



