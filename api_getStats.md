# getStats

Tato metoda vrací statistická data o rádiích ve formátu XML/JSON nebo HTML5 (canvas) graf ve formátu PLAIN. Jedná se o univerzální funkci, která zajišťuje přístup k datům z více zdrojů.

## Parametry

| parametr | popis | příklad |
| --- | --- | --- |
|shortcut|ID rádia v našem systému|playuk40|
|chart|druh statistiky - (popsáno níže)|24h|
|size|rozměr vygenerovaného grafu|600x300|

## Výstup metody
- Data mohou být vrácena jako XML nebo JSON k dalšíu zpracování.
- Formát PLAIN vrací kompletní HTML stránku obsahující graf vytvořený pomocí HTML5 CANVAS (včetně knihovny pro starší MSIE).

## Druhy statistik - parametr **//chart//**
|chart|popis statistiky|-|
| --- | --- | --- |
|icelog_daily|počet denních unikátních posluchačů dle logů icecast serverů||
|icelog_weekly|počet týdenních unikátních posluchačů dle logů icecast serverů||
|ga_unique_daily|počet denních unikátních posluchačů v přehrávači a aplikacích PLAY.CZ - měřeno pomocí Google Analytics||
|ga_unique_weekly|počet týdenních unikátních posluchačů v přehrávači a aplikacích PLAY.CZ - měřeno pomocí Google Analytics||
|24h|Počet konkurentních posluchačl za posledních 25 hodin po 5ti minutách||
|24h_ext|To samá jako 24h, data jsou ale za posledních 28 dnů||
|daily_max|Denní maxima konkurentních posluchačů za posledních 90 dnů||
|daily_max_ext|Stejné jako daily_max, data jsou ale za posledních 360 dnů||
|aqh|Průměrná čtvrthodinka - průměrný počet konkurentních posluchaců v danné čtvrthodině dne počítaný z dat za posledních 90 dnů. Podporuje speciální parametr "days" pro volbu dnů, výchozí je Pondělí - Pátek (days=1,2,3,4,5)||
|ga_listen_length|Průměrná délka poslechu (minuty) v přehrávači a aplikacích PLAY.CZ - měřeno pomocí Google Analytics||
|ga_demographics|Demografická data o posluchačích v přehrávači a aplikacích PLAY.CZ - měřeno pomocí Google Analytics||

## Dalši parametry (dostupné jen jako query string)
| parametr | popis | možné hodnoty |
| --- | --- | --- |
|hideAxisX|Skrýt osu X|"true", -nebo nechat nenastaveno-|
|hideAxisY|Skrýt osu Y|"true", -nebo nechat nenastaveno-|
|hideAxis|Skrýt osu X a Y|"true", -nebo nechat nenastaveno-|
|color|barva grafu (aktuálně jde nastavit jen jedna)|barva v HEX formátu, př.: #FDB433|
|bgcolor|barva pozadí grafu (aktuálně nejde nastavit)|barva v HEX formátu, př.: #FDB433|
|ticksColor|barva mřížky grafu|barva v HEX formátu, př.: #FDB433|
|showLegend||onmouseover, always|
|days|dny pro graf (jen pro graf aqh)|čísla dnů oddělená čárkou, př.: 1,2,3,4,5|
