//<![CDATA[
"use strict";

class Instructions
{
	constructor()
	{
		this.dom=document.createElement("div");
		this.dom.className="instructions";
		document.body.appendChild(this.dom);
		this.state="unclicked";
		document.body.addEventListener("click",this.change.bind(this));
		this.dom.innerHTML="<BR><BR><BR>Klik in de game"; 
	}
	change()
	{
		this.dom.innerHTML="<BR><BR><BR>Gebruik de pijltjestoetsen om de held te besturen"; 
		document.body.removeEventListener("click",this.change.bind(this));
		document.body.addEventListener("keydown",this.hide.bind(this));
	}
	hide()
	{
		this.dom.style.display="none";
		document.body.removeEventListener("keydown",this.hide.bind(this));
	}
}



