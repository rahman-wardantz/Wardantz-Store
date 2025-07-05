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

// Render produk ke halaman
function renderProducts(products) {
    const list = document.getElementById('product-list');
    if (!list) return;
    list.innerHTML = products.map(product => `
        <div class="bg-white rounded shadow p-4 flex flex-col">
            <img src="${product.image}" alt="${product.title}" class="mb-4 rounded h-40 object-cover">
            <h3 class="font-bold text-lg mb-2">${product.title}</h3>
            <p class="text-gray-600 mb-2">${product.description}</p>
            <div class="font-semibold text-blue-700 mb-4">Rp${product.price.toLocaleString('id-ID')}</div>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Tambah ke Keranjang</button>
        </div>
    `).join('');
}

// Tambahkan fungsi untuk filter kategori dan event listener tombol kategori
function setupEventListeners() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Highlight tombol aktif
            categoryButtons.forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
            this.classList.add('bg-blue-600', 'text-white');
            // Ambil kategori dari tombol
            const category = this.getAttribute('data-category');
            if (category === 'all') {
                renderProducts(products);
            } else {
                renderProducts(products.filter(p => p.category === category));
            }
        });
    });
}

// Inisialisasi store
function initStore() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
}

// Pastikan event DOMContentLoaded tetap memanggil initStore
document.addEventListener('DOMContentLoaded', initStore);
