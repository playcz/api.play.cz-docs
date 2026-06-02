# getStream

Tato metoda vrací adresu streamu nebo ASX / M3U soubor pro stream rádia. ASX/M3U soubor se vrací v režimu PLAIN, jinak se vrací objekt s odkazem na ASX/M3U a linkem na stream..

## Parametry

| parametr | výchozí hodnota | popis |
| --- | --- | --- |
|shortcut|-|filtr ID rádia (shortcut) stylů|
|format|načte se z globálního nastavení|požadovaný formát, je možno uvést i více hodnot oddělených znakem pomlčky (,)|
|bitrate|načte se z globálního nastavení|požadovaný bitrate. Jedná se o maximální bitrate, API se pokusí najít stream s nejbližší nižší hodnotou. Pokud bylo uvedeno více formátů, hledá se stream, který je nejblíže cílovému bitratu a je v jednom z uvedených formátů.|
|playlist_format|detekuje se z formátu streamu|Požadovaný formát playlistu (platí jen pro režim PLAIN). Podporované hodnoty jsou ASX a M3U.|


## Příklad
|/xml/getStream/bonton/wma/128|
| --- |
|/plain/getStream/?shortcut=bonton&format=mp3&bitrate=128|
|/xml/getStream/bonton/wma,mp3,aac/64|
|/plain/getStream/bonton/-/128/asx|

## Návratové hodnoty
### XML / JSON
|data->stream|objekt s daty z databáze|
| --- | --- |
|data->stream[pubpoint]|publish point - přímá adresa streamu|
|data->stream[stream_type]|formát streamu|
|data->stream[stream_bitrate]|bitrate streamu|
|data->radio [array]|informace o rádiu|
|...|plus další doprovodná data pro přehrávač PLAY.CZ|

### plain
|plain->content|ASX / M3U soubor|

### redir
provede redir na stream, vhodné pro aplikace
