# Otevření přehrávače z vašich stránek

**Přehrávač by se měl vždy otevírat do samostatného okna**
Do adresy přehrávače musí být vloženo ID vašeho rádia a aktuální datum (viz níže)
Adresa přehrávače pro zvolené rádio

```
http://listen.play.cz/player.html?shortcut={SHORTCUT}&v={datum}
```
_kde {datum} nahradíte aktuálním datem ve formátu YYmmdd (tento parametr není povinný, ale je silně doporučen)._
 
## Ukázka vložení odkazu na přehrávač
**POZOR**: Je potřeba nahradit _{SHORTCUT}_ za váš shortcut rádia (najdete v API nebo získáte od naší podpory).
```
<a href="http://listen.play.cz/player.html?shortcut={SHORTCUT}&v=20120910" onclick="window.open('http://listen.play.cz/player.html?shortcut={SHORTCUT}&v=20120910', 'playcz_player', 'height=500, width=420'); return false;" target="_blank">Otevřít přehrávač</a>
Kde datum doporučuje nahradit například funkcí Date() (PHP):
<a href="http://listen.play.cz/player.html?shortcut={SHORTCUT}&v=<?php echo date("Ymd");?>" onclick="window.open('http://listen.play.cz/player.html?shortcut={SHORTCUT}&v=<?php echo date("Ymd");?>', 'playcz_player', 'height=500, width=420'); return false;" target="_blank">Otevřít přehrávač</a>
```
Nebo alternativně pomocí JavaScriptu:
```
<script>var now=new Date,ts_y=now.getFullYear(),ts_m=now.getMonth()+1,ts_d=""+now.getDate();10>ts_m&&(ts_m="0"+ts_m);var ts=ts_y+""+ts_m+""+ts_d;</script>
<a href="http://listen.play.cz/player.html?shortcut={SHORTCUT}" onclick="window.open('http://listen.play.cz/player.html?shortcut={SHORTCUT}&v='+ts, 'playcz_player', 'height=500, width=420'); return false;" target="_blank">Otevřít přehrávač</a>
```

## Graf počtu posluchačů

Graf můžete vložit jako iframe kamkoliv do svého webu. Graf standardně zobrazuje jen posledních 24 hodin a podrobnější graf je dostupný jen v administraci a to až po přihlášení.
```
<iframe src="http://api.play.cz/plain/getListeners/{SHORTCUT}/600x300x1/24h" width="600" height="310" frameborder="0" scrolling="no"></iframe>
```
