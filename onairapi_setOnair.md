# OnAir data - push dat na server
OnAir data se na náš server posílají jako HTTP GET nebo HTTP POST požadavek.

## URL adresa pro požadavek
**http://onair.play.cz/post.php**

## Parametry
|název|povinný|popisek|
| --- | --- | --- |
|shortcut|ANO|ID rádia v systému (shortcut z API)|
|key|ANO|bezpečnostní hash - bude vám na požádání vygenerován|
|song|ANO|název skladby|
|artist|ne|název umělce|
|cover|ne|URL adresa obrázku, který se použije jako cover*|
|protected|ne|**true** - neproběhne automatická kontrola a oprava zadaných údajů a nedojde k automatickému doplnění obrázku... **part** - dojde jen k doplnění obrázku, pole song a interpret zůstane nezměněno|

* cover se v současné době používá jen v kombinaci s parametrem protected...

**všechna data musejí být v kódování UTF-8 a při použití metody GET musí být URL encoded!**

HTTP POST a HTTP GET jde libovolně kombinovat, část parametrů se může poslat jako GET a část jako POST. HTTP POST má vždy přednost a je považován za primární, tj pokud stejný stejný parametr pošlete jak metodou GET tak i POST bude upřednostněna hodnota z POST a GET bude ignorován.

## Příklad
|http://onair.play.cz/post.php?shortcut=test&key=test49&song=give%20me%20a%20reason&artist=pink&protected=true&cover=|


## Speciální nastavení pro odbavovací sw ENCO DAD=
* zapnout HTTP message
* do URL zadat: http://onair.play.cz/post.php?shortcut=<shorctcut>&key=<key>&mode=enco&song=
* do Default Output Format Template zadat: [TITLE] -- [ARTIST]
