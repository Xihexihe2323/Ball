const bola = document.getElementById('bola');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    
    // Menghitung posisi bola berdasarkan mouse
    const posX = event.clientX - rect.left - bola.offsetWidth / 2;
    const posY = event.clientY - rect.top - bola.offsetHeight / 2;

    // Pembatasan agar bola tidak keluar dari container
    bola.style.transform = translate(${Math.max(0, Math.min(posX, 350))}px, ${Math.max(0, Math.min(posY, 350))}px);
});
