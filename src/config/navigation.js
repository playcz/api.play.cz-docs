export const navigation = [
  {
    title: 'Úvod a Základy',
    items: [
      { title: 'API.PLAY.CZ Domů', slug: '' },
      { title: 'Integrace přehrávače', slug: 'integrace' },
      { title: 'Jak linkovat streamy / playlisty', slug: 'playlisty' },
      { title: 'Základní přehled API', slug: 'zaklady_api' },
      { title: 'HTTP Odpověď / dotaz', slug: 'http_response' },
    ]
  },
  {
    title: 'Přehled funkcí API',
    items: [
      { title: 'api_error (Neexistující funkce)', slug: 'api_error' },
      { title: 'getRadios', slug: 'api_getradios' },
      { title: 'getTopRadios', slug: 'api_gettopradios' },
      { title: 'getStyles', slug: 'api_getstyles' },
      { title: 'getRegions', slug: 'api_getregions' },
      { title: 'getAllStreams', slug: 'api_getallstreams' },
      { title: 'getAllStreamsMobile', slug: 'api_getallstreamsmobile' },
      { title: 'getStream', slug: 'api_getstream' },
      { title: 'getStreamMobile', slug: 'api_getstreammobile' },
      { title: 'getRadioInfo', slug: 'api_getradioinfo' },
      { title: 'getFeed', slug: 'api_getfeed' },
      { title: 'getPodcast', slug: 'api_getpodcast' },
      { title: 'getTweets', slug: 'api_gettweets' },
      { title: 'getArtistInfo', slug: 'api_getartistinfo' },
      { title: 'getListeners (zastaralé)', slug: 'api_getlisteners' },
      { title: 'getListenersNow (zastaralé)', slug: 'api_getlistenersnow' },
      { title: 'getStats', slug: 'api_getstats' },
    ]
  },
  {
    title: 'OnAir API',
    items: [
      { title: 'Informace o právě hrané skladbě', slug: 'onairapi_getonair' },
      { title: 'Historie odehraných skladeb', slug: 'onairapi_gethistory' },
      { title: 'Jak doručit onair data', slug: 'onairapi_setonair' },
    ]
  },
  {
    title: 'Privátní funkce',
    items: [
      { title: 'w8livetile', slug: 'api_w8livetile' },
      { title: 'ARES - základní info o firmě', slug: 'api_getares_basic' },
      { title: 'CloudFlare API wrapper', slug: 'api_cf' },
    ]
  }
];
