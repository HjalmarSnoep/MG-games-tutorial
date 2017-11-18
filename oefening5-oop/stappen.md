# Wat we gaan maken?
We gaan zorgen dat we onze game een beetje beter organiseren.

## Wat te doen

---
# stap 1 - Css in aparte file.
Plaats  <link rel="stylesheet" type="text/css" href="style.css">
in de header en stop de inline stylesheet in een aparte file, genaamd style.css

---
# stap 2 - script in aparte file.
Plaats  onderaan de body een extern script
<script src="script.js"></script>

Dat is al veel netter. Check wel even of je pagina nog werkt.

---
# stap 3 - script splitsen
Plaats  onderaan de body nog een extern script
<script src="sound.js"></script>
Hierin plaats je alle regels die met geluid te maken hebben.
Het maakt niet uit waar de functies staan, als ze maar door de pagina geladen worden.
Check wel even of je pagina nog werkt.
---
# stap 4 - denken in objecten.
We kunnen denken in de objectSoort Sound.
Het Sound object zou alles wat wij doen met geluiden voor ons kunnen doen.
In dit geval, een geluid afspelen dat al op de pagina staat.

Het geluidsobject zou er zo uitzien:

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

In script.js zouden we het als volgt gebruiken:
var hitSound=new Sound("hit");
Het afspelen van een geluid blijft:
hitSound.play();

Test je pagina!
---
# stap 5 - Zo kun je deze hele game vatten in een aantal object soorten:
 - Keys (alle keycontrol functies en variabelen)
 - Hud (de score en tijd laten zien)
 - Sound 
 - Viewport
 - Sprite 
 en tot slot
 - Game.

 Waarbij Game de andere objecten en de score en tijd bevat.
 Dit denken in objecten vergt wat oefening.
 Daarom heb ik dat voor je gedaan!
 

