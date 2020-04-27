if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function(registration){
  }).catch(console.log);
}