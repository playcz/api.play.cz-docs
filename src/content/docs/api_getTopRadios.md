# getTopRadios

Tato metoda vrací seznam TOP25 rádií na PLAY.cz

## Parametry

| parametr | výchozí hodnota | hodnoty | popis |
| --- | --- | --- | --- |
|kraj|-||filtr podle kraje, (používá se ID kraje)|

## Příklad
|/xml/getTopRadios/internet|jen internetová rádia|

## Návratové hodnoty
|XML|data[(array) shortcode]|

| hodnota | popis |
| --- | --- |
|title|název rádia|
|description|popisek rádia|
|weburl|plná URL na stránku rádia (na play.cz)|
|logo|plná URL loga rádia (500x500 PNG nebo JPEG)|
|onair|podpora pro onair informace [true / false]|
|listeners|aktuální počet posluchačů|
|style|style_title [ array ]|
|region|region_title [ array ]|
