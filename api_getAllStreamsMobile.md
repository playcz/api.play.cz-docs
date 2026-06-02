# getAllStreamsMobile

Tato metoda vrací seznam streamů pro danné rádio - VERZE PRO MOBILNÍ ZAŘÍZENÍ. Jen seznam formátů a bitratů. Cesta ke streamu se načítá pomocí funkce [getStreamMobile](api_getStreamMobile.md).

## Parametry

| parametr | výchozí hodnota | popis |
| --- | --- | --- |
|shortcut|-|filtr ID rádia (shortcut) stylů|

## Příklad
|/xml/getAllStreamsMobile/bonton|
| --- |
|/jsonp/getAllStreamsMobile/?shortcut=bonton|

## Návratové hodnoty
### plain
-

### XML / JSON
|data->streams|array [stream_type] [] (bitrates)|
| --- | --- |
|data->shortcut|shortcut rádia|
