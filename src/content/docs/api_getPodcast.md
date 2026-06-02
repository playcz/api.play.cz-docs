# getPodcast

Tato metoda vrací upravený podcast feed. Všechny feedy musí být registrované v API a jsou stahovány a ukládány v lokální DB.

## Parametry

| parametr | výchozí hodnota | hodnoty | popis |
| --- | --- | --- | --- |
|feedid|-|ID feedu, obecně je ID stejné ajko shortcut rádia (pokud má rádio registrovaný RSS feed)|

## Příklad
|/xml/getPodcast/cro1|
| --- |
|/jsonp/getPodcast/?feedid=cro1|

## Návratové hodnoty
### plain
-

### XML / JSON
|data->meta|meta data feedu|
| --- | --- |
|data->item|položky podcastu|
