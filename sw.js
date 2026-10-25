self.addEventListener('install', (e) => {
    console.log('[Service Worker] Aplikasi siap diinstal');
});

self.addEventListener('fetch', (e) => {
    // Membiarkan aplikasi mengambil data dari internet
});
