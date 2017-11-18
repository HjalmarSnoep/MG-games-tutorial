
class Sprite
{
	constructor(color,w=50,h=50,x=150,y=150,dx=0,dy=0)
	{
		this.x=x;
		this.y=y;
		this.dx=dx;
		this.dy=dy;
		this.dom=document.createElement("div");
		document.body.appendChild(this.dom);
		this.dom.style.backgroundColor=color;
		this.w=w;
		this.h=h;
		this.dom.style.width=this.w+"px";
		this.dom.style.height=this.h+"px";
		this.dom.style.position="absolute";
		console.log("new sprite "+this.w+"x"+this.h);
	}
	update()
	{
		let vp=game.viewport;
		if(typeof(vp)!="undefined")
		{
			this.dom.style.left=(this.x+vp.x)+"px";
			this.dom.style.top=(this.y+vp.y)+"px";
		}
	}
	stuiteren(geluid)
	{
		//stuiteren
		if(this.x>(game.viewport.w-this.w))
		{
			this.dx=-Math.abs(this.dx);
			this.dx*=0.9;
			this.x=(game.viewport.w-this.w);
			if(geluid!="")game.sounds.play(geluid);
		}
		if(this.x<0)
		{
			this.dx=Math.abs(this.dx);
			this.dx*=0.9;
			if(geluid!="")game.sounds.play(geluid);
		}
		if(this.y>(game.viewport.h-this.h))
		{
			this.y=(game.viewport.h-this.h);
			this.dy=-Math.abs(this.dy);
			this.dy*=0.9;
			if(geluid!="")game.sounds.play(geluid);
		}
		if(this.y<0)
		{
			this.dy=Math.abs(this.dy);
			this.dy*=0.9;
			if(geluid!="")game.sounds.play(geluid);
		}
	}
	hitTest(s2)
	{
		if (this.x < s2.x + s2.w &&
		   this.x + this.w > s2.x &&
		   this.y < s2.y + s2.h &&
		   this.h + this.y > s2.y) {
			return true;
		}else
		{
			return false;
		}
	}
}

