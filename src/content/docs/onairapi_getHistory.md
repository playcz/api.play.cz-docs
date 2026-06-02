# OnAir data - informace o odehraných skladbách
OnAir data jsou dostupná ze speciální adresy http://onair.play.cz/ ve formátu JSON nebo XML.
Historie obsahuje skladby za poslední dvě hodiny.

## Datové zdroje
Obě URL vyžadují zadat parametr **_shortcut_**
|JSON|http://onair.play.cz/json/_shortcut_-history.json|
| --- | --- |
|XML|http://onair.play.cz/xml/_shortcut_-history.xml|

## Příklad
|http://onair.play.cz/json/playuk40-history.json|

## Návratové hodnoty
### XML / JSON
|date|datum a čas odehrání skladby, formát YYYY-mm-dd HH:ii:ss|
| --- | --- |
|shortcut|shortcut rádia|
|song|Název skladby (pročištěný)|
|artist|Interpret (pročištěný)|
|img|Cover alba (čtverec) nebo fotka interpreta (volný formát)... data se načítají z iTunes store nebo z Last.fm|
|itunes_url|odkaz na nákup v iTunes store|
|itunes_preview|odkaz na ukázku z iTunes store|
|itunes_price|cena v iTunes včetně měny (např. 0.99€)|
