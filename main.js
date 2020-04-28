if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('registration ', registration);
  }).catch(console.log);
}