// Ambil data produk dari products.json secara dinamis
let products = [];

async function loadProducts() {
    try {
        // Gunakan path relatif dari index.html ke assets/products.json
        const response = await fetch('./assets/products.json');
        if (!response.ok) throw new Error('Gagal memuat data produk');
        products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback jika gagal, bisa tampilkan pesan error atau produk default
        document.getElementById('product-list').innerHTML = '<div class="col-span-full text-center text-red-500">Gagal memuat produk.</div>';
    }
}

// Inisialisasi store
function initStore() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
}

// Pastikan event DOMContentLoaded tetap memanggil initStore
document.addEventListener('DOMContentLoaded', initStore);
