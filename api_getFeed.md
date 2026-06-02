# getFeed

Tato metoda vrací upravený RSS feed. Všechny RSS feedy musí být registrované v API a jsou stahovány a ukládány v lokální DB. Feed je upraven, je doplněn o obrázek získaný z meta tagů (včetně og:image) nebo se jedná o první obrázek na stránce.

## Parametry

| parametr | výchozí hodnota | hodnoty | popis |
| --- | --- | --- | --- |
|feedid|-|ID feedu, obecně je ID stejné ajko shortcut rádia (pokud má rádio registrovaný RSS feed)|

## Příklad
|/xml/getFeed/playcz|
| --- |
|/jsonp/getFeed/?feedid=playcz|

## Návratové hodnoty
### plain
-

### XML / JSON
|data->meta|meta data feedu|
| --- | --- |
|data->item|položky z RSS feedu|
