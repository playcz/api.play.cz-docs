# Základní přehled API=
## Základní URL
```
http://api.play.cz/<FORMAT>/<FUNKCE>/<...params...>
```


### <FORMAT>
* JSON
* JSONP (viz. http://notepad.jslab.net/clanky/co-je-to-jsonp.html)
* XML
* PLAIN (formát včetně hlavičky určuje modul)


### <FUNKCE>
viz přehled funkcí API

### <...params...>
viz specifické funkce

Parametry je možno předávat “hezky” jako URL (př.: /xml/getStream/bonton/wma,mp3,aac/64), nebo pomocí klíčů a hodnot (př.: /plain/getStream/?shortcut=bonton&format=mp3&bitrate=128).
Pokud jsou předávány parametry jako “hezké” url, je nutné dodržet jejich pořadí! Konkrétní podpora je uvedena v dokumentaci každé funkce.
Při použití “hezkých” URL je možné některý parametr vynechat, jsou dvě možnosti... buď použít mezeru nebo znak “-” (pomlčka). Doporučený je právě znak pomlčky (př.: /xml/getStream/bonton/-/64).
