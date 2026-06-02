# getAllStreams

Tato metoda vrací seznam streamů pro danné rádio. Jen seznam formátů a bitratů. Cesta ke streamu se načítá pomocí funkce [getStream](api_getStream.md).

## Parametry

| parametr | výchozí hodnota | popis |
| --- | --- | --- |
|shortcut|-|filtr ID rádia (shortcut) stylů|

## Příklad
|/xml/getAllStreams/bonton|
| --- |
|/jsonp/getAllStreams/?shortcut=bonton|

## Návratové hodnoty
### plain
-

### XML / JSON
|data->streams|array [stream_type] [] (bitrates)|
| --- | --- |
|data->shortcut|shortcut rádia|
