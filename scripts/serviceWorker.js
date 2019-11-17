self.addEventListener('install', event => {
  console.log('install event occurred');
});

self.addEventListener('activate', event => {
  console.log('activate event occurred');
});

self.addEventListener('fetch', event => {
  console.log('fetch event occurred');
});

self.addEventListener('sync', event => {
  console.log('sync event occurred');
});
