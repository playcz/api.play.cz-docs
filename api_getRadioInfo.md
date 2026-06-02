# getRadioInfo

Tato metoda vrací informace o rádiu pro potřeby přehrávače a profilové stránky rádia.

## Parametry

| parametr | výchozí hodnota | popis |
| --- | --- | --- |
|shortcut|-|filtr ID rádia (shortcut) stylů|

## Příklad
|/xml/getRadioInfo/playuk40|
| --- |
|/jsonp/getRadioInfo/playuk40|

## Návratové hodnoty
### plain
---

### XML / JSON
_V tabulce nemusí být uvedeny všechny návratové hodnoty!_
| hodnota | popis |
| --- | --- |
|rating|hodnocení rádia (1-5) dle poslechovosti z aminulý den|
|title, description, description_long|informace o rádiu|
|logo|adresa originálního loga (nedoporučujeme používat)|
|logoimg_s, logoimg_m, logoimg_b|loga v různých velikostech. S - 90x90, M - 200x200, B - 500x500|
