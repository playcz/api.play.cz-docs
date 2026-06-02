# Playlisty

Existují dva způsoby doručování playlistů (starý a nový).
## Starý způsob:

### Statické playlisty na pevné adrese:
* http://api.play.cz/radio/classic32.asx
* http://www.play.cz/radio/classic32.asx

Oba soubory jsou stejné. Soubor na api.play.cz je autoritativní. Soubor na **www.play.cz je jen jeho kopií** (existuje z důvodu historické kompaktibility).

## Nový (dynamický) způsob:

playlist načtený přímo z API, viz níže funkce **[getStream](api_getStream.md)** a **[getStreamMobile](api_getStreamMobile.md)**
př.: http://api.play.cz/plain/getStream/bonton/mp3/128/m3u

## Rozdíl:

Statické soubory se generují každou noc a při změně nastavenií v API (do 5ti minut). Dynamické jsou vždy aktuální (cachují se na straně serveru na cca. 60 sekund).
Oba typy playlistů obsahují stejná data. Rozdíl je v tom, že dynamický playlist bude vždy existovat. Pokud požádáte API o playlist neexistující streamu, vrátí API jiný (co nejpodobnější) stream. Pokud se dotážete na neexistující statický playlist, vrátí se chyba 404.
