# getRadios

Tato metoda vrací seznam všech rádií v DB.

## Parametry

| parametr | výchozí hodnota | hodnoty | popis |
| --- | --- | --- | --- |
|styl|-| |filtr podle stylů|
|kraj|-| |filtr podle krajů|
|aktivni|1|0/1|filtr - jen aktivní|

## Návratové hodnoty
|XML|data[(array) shortcode]|

| hodnota | popis |
| --- | --- |
|title|název rádia|
|description|popisek rádia|
|shortcut|shortcut ( ID rádia)|
|cooluri|plná URL na stránku rádia (na play.cz)|
|logo|logo rádia. dále jsou dostupné přepočtené velikosti, logoimg_s (90x90), logoimg_m (200x200) a logoimg_b (500x500)|
|radio_info|data o rádiu [array]|
|onair|Podpora pro onair informace [true / false]|
|ordering|interní údaj pro řazení rádií v seznamu|
|style|style_id [ array ]  (existuje i pole style_title, kde jsou čitelné názvy stylů)|
|region|region_id [ array ]  (existuje i pole region_title, kde jsou čitelné názvy regionů)|

