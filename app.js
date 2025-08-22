function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function participar(local) {
  alert("Você se inscreveu no evento em " + local + "!");
}

// Registrar service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Service Worker registrado!"));
}
