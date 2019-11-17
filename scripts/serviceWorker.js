const CACHE_NAME = 'v1';
const ASSET_URLS_TO_CACHE = ['./offline.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSET_URLS_TO_CACHE);
      })
      .catch(e => {
        console.log(`install event error. error=${e.message}`);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        });
      })
      .then(cachesToDelete => {
        // 対象のキャッシュを全て削除する
        // waitUntilの引数にはPromiseを渡す必要があるため、ここではPromiseを返すようにする
        return Promise.all(
          cachesToDelete.map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(cacheResponse => {
        // キャッシュがヒットすれば、キャッシュを返す
        if (cacheResponse) {
          console.log('return cache response!');
          return cacheResponse;
        }

        return fetch(event.request).then(response => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }
          // レスポンスをキャッシュに保存する
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
      .catch(e => {
        // オフライン時のフォールバック
        if (event.request.mode === 'navigate') {
          console.error('Fetch failed; returning offline page instead.', e);
          return caches.match('offline.html');
        }
      })
  );
});

self.addEventListener('sync', event => {
  console.log('sync event occurred');
});
