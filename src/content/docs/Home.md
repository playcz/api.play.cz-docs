# API.PLAY.CZ

```text
Toto je privátní API. Použití tohoto API je možné jen s písemným svolením společnosti PLAY.CZ, a.s.
Funkce v API se mohou kdykoliv změnit. Autorizovaní uživatelé budou o změnách včas informováni.
PLAY.CZ si vyhrazuje právo kdykoliv přidat ověřovací mechanismus do jodnotlivých API funkcích,
případně zablokovat neautorizovaný přístup k API funkcím.
```

* [Integrace přehrávače](Integrace.md)
* [Jak linkovat streamy / playlisty](Playlisty.md) 
* [Základní přehled API](Zaklady_API.md)
* [HTTP Odpověď / dotaz](http_response.md)

## Přehled funkcí API
* [chyba - volání neexistující funkce](api_error.md)
* [getRadios](api_getRadios.md)
* [getTopRadios](api_getTopRadios.md)
* [getStyles](api_getStyles.md)
* [getRegions](api_getRegions.md)
* [getAllStreams](api_getAllStreams.md)
* [getAllStreamsMobile](api_getAllStreamsMobile.md)
* [getStream](api_getStream.md)
* [getStreamMobile](api_getStreamMobile.md)
* [getRadioInfo](api_getRadioInfo.md)
* [getFeed](api_getFeed.md)
* [getPodcast](api_getPodcast.md)
* [getTweets](api_getTweets.md)
* [getArtistInfo](api_getArtistInfo.md)
* [getListeners](api_getListeners.md) (zastaralé)
* [getListenersNow](api_getListenersNow.md) (zastaralé)
* [getStats](api_getStats.md)

## OnAir API
* [informace o právě hrané skladbě](onairapi_getOnair.md)
* [historie odehraných skladeb](onairapi_getHistory.md)
* [jak doručit onair data](onairapi_setOnair.md)

## Privátní funkce (jen pro použití PLAY.CZ)
* [w8livetile](api_w8livetile.md)
* [ARES - základní info o firmě dle IČO](api_getAres_basic.md)
* [CloudFlare API wrapper](api_cf.md)
