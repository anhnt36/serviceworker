self.addEventListener('push', (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
  });
});

self.addEventListener('periodicsync', event => {
  console.log(" run periodicsync");
  if (event.tag == 'update-cached-content') {
    console.log("get-latest-news 2")
    //event.waitUntil(fetchAndCacheLatestNews());
  }
  
});
