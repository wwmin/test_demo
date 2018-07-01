let cacheFiles = [
  'about.js',
  'blog.js'
];
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open('my-test-cache-v1').then(cache => {
      return cache.addAll(cacheFiles);
    })
  )
});
//缓存图片
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      if (response) {
        return response;
      }
      var request = evt.request.clone();
      return fetch(request).then(res => {
        if (!response && response.status !== 200 && !response.headers.get('Content-type').match(/image/)) {
          return response;
        }
        var responseClone = response.clone();
        caches.open('my-test-cache-v1').then(cache => {
          cache.put(evt.request, responseClone);
        });
        return response;
      })
    })
  )
});
