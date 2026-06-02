# getArtistInfo

Tato metoda vrací informace o interpretovi.

## Parametry

| parametr | výchozí hodnota | popis |
| --- | --- | --- |
|artist|-|jméno interpreta (URL encoded)|
|enc|-|encoding vstupních dat|
### enc
| enc | popis |
| --- | --- |
|plaintext|urlencoded|
|b64|base64 encoding|


## Příklad
|/xml/getArtistInfo/David%20Guetta|
| --- |
|/jsonp/getArtistInfo/?shortcut=Pink|
|/plain/getArtistInfo/S2VsbHkgQ2xhcmtzb24=/b64/|(Kelly Clarkson)|

## Návratové hodnoty
### plain
HTML info box

### XML / JSON
|data->artist|jméno opraveno podle databáze|
| --- | --- |
|data->artist_orig|původní dotazované jméno|
|data->img|obrázek v plném rozlišení|
|data->bio|popisek umělce|
|data->tags|tagy umělce|
