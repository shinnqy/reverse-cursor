(e, t) => {
  'use strict';
  Object.defineProperty(t, '__esModule', { value: true }),
    (t.isBaseUrlHttp2 = t.replaceBaseUrlWithApi2 = undefined),
    (t.replaceBaseUrlWithApi2 = function (e) {
      return (e = (e = e.replace('api3.cursor.sh', 'api2.cursor.sh')).replace(
        'api4.cursor.sh',
        'api2.cursor.sh'
      )).replace(/^https:\/\/.*\.gcpp\.cursor\.sh/, 'https://api2.cursor.sh');
    }),
    (t.isBaseUrlHttp2 = function (e) {
      return e.includes('api3.cursor.sh') || e.includes('api4.cursor.sh') || e.includes('gcpp.cursor.sh');
    });
};
