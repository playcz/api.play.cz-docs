# getListeners
**POZOR: Tato metoda je zastaralá a nebude již aktualizována. Zatím bude fungovat a neplánujeme její odstranění.**

Tato metoda vrací počet posluchačů pro dané rádio nebo graf v režimu PLAIN.

## Parametry

| parametr | výchozí hodnota | popis |
| --- | --- | --- |
|shortcut|global|rádio|
|size|-|rozměr grafu (pro režim PLAIN)<br>formát: **{šířka}**x**{výška}**x1 (x1 je konstanta a je povinná)|
|graph|-|druh grafu (24h nebo daily)|
|hideAxis|false|skryje osy grafu v režimu plain (jen jako ?hideAxis=true)|
|hideAxisX|false|skryje osu grafu (X) v režimu plain (jen jako ?hideAxisX=true)|
|hideAxisY|false|skryje osu grafu (Y) v režimu plain (jen jako ?hideAxisY=true)|
|ticksAxisY|10|počet hodnot na ose Y (jen jako ?ticksAxisY=)|
|ticksColor|000000|barva mřížky a popisků os - RGB hexa (jen jako ?ticksColor=)|
|color|FFB433|barva grafu - RGB hexa(jen jako ?color=)|


## Příklad
|/plain/getListeners/country/550x280x1/daily|(x1 je konstanta a je povinná)|
| --- | --- |
|/jsonp/getListeners/bonton||

## Návratové hodnoty
### plain
HTML graf včetně JS souborů (externí linky)

### XML / JSON
|data->now|aktuální hodnoty na všech známých publishpointech|
| --- | --- |
|data->24h|hodnoty za posledních 24 hodin|
|data->daily|hodnoty po dnech|
