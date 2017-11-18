//<![CDATA[
"use strict";


class Sound
{
	constructor(dom)
	{
		this.dom=dom;
	}
	play()
	{
		this.dom.play();
	}
}

class Sounds
{
	constructor()
	{
		this.sounds={};
	}
	addSound(id,mp3)
	{
		let audio=document.createElement("audio");
		audio.setAttribute("control","true");
		let source=document.createElement("source");
		source.src=mp3;
		audio.appendChild(source);
		let sound=new Sound(audio);
		document.body.appendChild(audio);
		this.sounds[id]=sound;
	}
	play(id)
	{
		this.sounds[id].currentTime=0;
		this.sounds[id].play();
	}
}

