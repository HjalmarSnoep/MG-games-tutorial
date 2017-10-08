# Wat we gaan maken?
We gaan zorgen dat we een geluid horen als we het muntje pakken.
En een HUD.

## Wat te doen
....

---
# stap 1 - Voeg een audio element toe aan HTML.
<a href="https://www.w3schools.com/TAGs/tag_audio.asp">Voorbeeld.</a>
Laat de eigenschap controls weg, dan zie je hem niet.

<audio id="hit">
  <source  src="hit.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

---
# stap 2 - Voeg een div toe met id "hud", maak positie absolute en top en left 0!
Zet hierin score: 0, tijd: 100;
Als je de div onderaan toevoegt, komt hij overal bovenop.
De volgorde in HTML maakt dus uit.
---
# stap 3 - hud bijwerken.
Voeg een variabele score en een variabele tijd.
Maak een functie, die de hud bijwerkt 

bijvoorbeeld zo:
document.getElementById("hud").innerHTML="tijd: "+tijd+" score: "+score;

Je kunt nu overal aanroepen:
var score=0;
var tijd=100;
updateHud();

! ook voordat de functie is gedefinieerd !
Dit verschijnsel wordt hoisting genoemd.

---
# stap 4 - geluid afspelen
voeg een variabele toe: hitSound, grijp het audio element met id "hit" met document.getElementById();

In de functie die het muntje op een nieuwe plaats zet na een hit.
zet je:
hitSound.play();
Ook zet je daar score++;

---
# stap 6 - tijd
Binnen de loop maak je tijd 1 minder. 
Dit doe je met:
tijd=tijd-1;
of met
tijd--;

update de Hud nu aan het einde van de loop.

---
# stap 7 - loose condition
Nu loopt de tijd gewoon door naar beneden.
Kijk met een if statement of de tijd 0 is geworden.
Als dat zo is, update de hud dan nog 1 laatste keer, maar ga NIET door met de loop.

Oftewel: zet window.requestAnimationFrame in de else van deze if statement.


