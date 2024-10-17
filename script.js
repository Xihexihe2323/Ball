const bola = document.getElementById('bola');
const partikelContainer = document.getElementById('partikel');
const jumpSound = document.getElementById('jump-sound');
let isDragging = false;
let offsetX, offsetY;

// Fungsi untuk membuat partikel
function buatPartikel(x, y) {
    const partikel = document.createElement('div');
    partikel.classList.add('partikel'); // Tambahkan kelas untuk gaya
    partikel.style.left = `${x}px`;  // Perbaiki sintaks
    partikel.style.top = `${y}px`;   // Perbaiki sintaks
    partikelContainer.appendChild(partikel);
    
    // Hapus partikel setelah animasi selesai
    partikel.addEventListener('animationend', () => {
        partikel.remove();
    });
}

// Menangani drag bola
bola.addEventListener('mousedown', (e) => {
    isDragging = true;
    bola.style.backgroundColor = '#FFD700'; // Ubah warna menjadi kuning saat drag

    // Hitung offset mouse
    const rect = bola.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    bola.style.backgroundColor = '#fff'; // Kembali ke warna putih
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Hitung posisi bola baru dengan offset
        const x = e.clientX - offsetX; // Hapus pembatasan kiri
        const y = Math.min(Math.max(e.clientY - offsetY, 0), window.innerHeight - bola.offsetHeight);
        
        bola.style.left = `${x}px`;  // Perbaiki sintaks
        bola.style.top = `${y}px`;    // Perbaiki sintaks
    }
});

// Menangani klik untuk melompat dan membuat partikel
bola.addEventListener('click', () => {
    const rect = bola.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - 5; // Posisi tengah bola
    const y = rect.top + rect.height; // Posisi bawah bola

    // Buat partikel
    buatPartikel(x, y);

    // Mainkan suara melompat
    jumpSound.currentTime = 0; // Reset suara
    jumpSound.play();

    // Melompat
    bola.style.transform = 'translateY(-300px)'; // Melompat lebih tinggi

    setTimeout(() => {
        bola.style.transform = 'translateY(0)';
    }, 600);
});
