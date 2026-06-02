# HTTP Response / Request

Jak je již popsáno v sekci [Základy API](Zaklady_API.md), dotaz do API se provádí pomocí HTTP GET requestu na adresu:
```
http://api.play.cz/<FORMAT>/<FUNKCE>/<...params...>
```

tj. například
```
http://api.play.cz/xml/getRadioInfo/playuk40
```

## Response

API odpoví v dotazovaném formátu a do HTTP header je nastaven content-type podle druhu odpovědi.
Mimo to, je do HTTP header vloženo i několik hodnot:
|X-CacheID|interní ID cache|
| --- | --- |
|X-ModuleVersion|verze API funkce, která vygenerovala odpověď|
|X-CachedAt|datum a čas vygenerování odpovědi|

V režimu XML a JSON jsou mimo datového objektu funkce vráceny také obecné informace:
|_lifetime|doba platnosti informace (a také cache na serveru)|
| --- | --- |
|_cachedAt|datum a čas vygenerování odpovědi|
|_expireAt|datum a čas expirace platnosti odpovědi|
|_cacheID|interní ID cache|
|_moduleVersion|verze API funkce, která vygenerovala odpověď|
|_cacheUsed|informace zda byla použita informace z cache na serveru nebo čerstvě generovaná informace z DB|
