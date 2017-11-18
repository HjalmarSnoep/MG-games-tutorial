
class Sprite
{
	constructor(id,x=150,y=150,w=50,h=50,dx=0,dy=0)
	{
		this.x=x;
		this.y=y;
		this.dx=dx;
		this.dy=dy;
		this.dom=document.getElementById(id);
		this.w=this.dom.clientWidth;
		this.h=this.dom.clientHeight;
		console.log("sprite "+this.dom.id+" "+this.w+"x"+this.h);
	}
	update()
	{
		this.dom.style.left=this.x+"px";
		this.dom.style.top=this.y+"px";
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

