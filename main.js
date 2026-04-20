/* ================================
   JADAV UNIFORM - MAIN JS
   ================================ */

// ===== SAMPLE PRODUCTS DATA =====
function getProducts() {
  return [
    {
      id: 1,
      name: "School Boys White Shirt",
      category: "boys",
      catLabel: "Boys Uniform",
      price: 249,
      oldPrice: 320,
      image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=500&q=80",
      description: "Classic white cotton school shirt for boys. Soft, breathable fabric with a comfortable collar. Machine washable and wrinkle resistant. Available in standard school fit.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "sale",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: "School Girls Navy Skirt",
      category: "girls",
      catLabel: "Girls Uniform",
      price: 299,
      oldPrice: 380,
      image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=500&q=80",
      description: "Pleated navy blue school skirt for girls. Durable polyester blend with elastic waistband for comfort. Available in knee length, perfect for school wear.",
      sizes: ["XS", "S", "M", "L", "XL"],
      badge: "sale",
      rating: 4.7,
      reviews: 95
    },
    {
      id: 3,
      name: "Full Uniform Set (Boys)",
      category: "boys",
      catLabel: "Boys Uniform",
      price: 799,
      oldPrice: 1050,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80",
      description: "Complete boys school uniform set including white shirt and navy blue pants. Premium quality fabric, perfect fit for school going boys from class 1 to 12.",
      sizes: ["S", "M", "L", "XL"],
      badge: "sale",
      rating: 4.8,
      reviews: 210
    },
    {
      id: 4,
      name: "School Blazer (Navy Blue)",
      category: "blazers",
      catLabel: "Blazers",
      price: 999,
      oldPrice: 1299,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80",
      description: "Premium school blazer in classic navy blue. Single breasted with school badge space on breast pocket. Wool blend for warmth and style during winter months.",
      sizes: ["S", "M", "L", "XL"],
      badge: "new",
      rating: 4.6,
      reviews: 74
    },
    {
      id: 5,
      name: "Sports PT Uniform Set",
      category: "sports",
      catLabel: "Sports Uniform",
      price: 549,
      oldPrice: 700,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      description: "Comfortable sports uniform set with breathable fabric. Includes t-shirt and track pants. Ideal for PT class, sports day, and outdoor activities.",
      sizes: ["S", "M", "L", "XL"],
      badge: null,
      rating: 4.4,
      reviews: 88
    },
    {
      id: 6,
      name: "Winter School Sweater",
      category: "blazers",
      catLabel: "Blazers & Sweaters",
      price: 649,
      oldPrice: 850,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
      description: "Warm school sweater in navy blue with V-neck design. Soft wool-acrylic blend fabric. School logo space available. Perfect for cold winter mornings.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "new",
      rating: 4.5,
      reviews: 61
    },
    {
      id: 7,
      name: "Girls Full Uniform Set",
      category: "girls",
      catLabel: "Girls Uniform",
      price: 749,
      oldPrice: 980,
      image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=500&q=80",
      description: "Complete girls uniform set including white top and navy blue skirt. Elegant and comfortable design perfect for all schools. Available with custom sizing.",
      sizes: ["XS", "S", "M", "L", "XL"],
      badge: "sale",
      rating: 4.9,
      reviews: 184
    },
    {
      id: 8,
      name: "School Navy Blue Pants",
      category: "pants",
      catLabel: "Pants & Skirts",
      price: 399,
      oldPrice: 500,
      image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=500&q=80",
      description: "Classic navy blue school pants with formal cut. Durable polyester fabric with belt loops and front pockets. Easy care fabric that holds its shape all day.",
      sizes: ["S", "M", "L", "XL", "Custom"],
      badge: null,
      rating: 4.3,
      reviews: 142
    }
  ];
}

// ===== PRODUCT CARD HTML =====
function createProductCard(p) {
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  const badge = p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'sale' ? '🔥 Sale' : '✨ New'}</span>` : '';
  return `
    <div class="product-card fade-in">
      <div class="product-img-wrap">
        ${badge}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <button class="product-wishlist" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">♡</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.catLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">₹${p.price}</span>
            ${p.oldPrice ? `<span class="product-price-old"> ₹${p.oldPrice}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="addToCart(${p.id})">
            🛒 Add
          </button>
        </div>
      </div>
      <a href="product-detail.html?id=${p.id}" style="position:absolute;inset:0;z-index:0;" aria-label="${p.name}"></a>
      <style>.product-card { position:relative; } .btn-add-cart,.product-wishlist { position:relative; z-index:1; }</style>
    </div>
  `;
}

// ===== CART =====
function getCart() {
  return JSON.parse(localStorage.getItem('ju_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('ju_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, size = 'M', qty = 1) {
  const user = getUser();
  if (!user) {
    showToast('Please login to add items to cart', 'info');
    setTimeout(() => window.location.href = 'login.html', 1500);
    return;
  }
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, image: product.image, size, qty });
  }
  saveCart(cart);
  showToast(`✅ ${product.name} added to cart!`, 'success');
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
}

function updateQty(productId, size, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
  }
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const count = getCart().reduce((s, i) => s + i.qty, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// ===== WISHLIST =====
function getWishlist() {
  return JSON.parse(localStorage.getItem('ju_wishlist') || '[]');
}

function toggleWishlist(productId, btn) {
  let wl = getWishlist();
  const idx = wl.indexOf(productId);
  if (idx === -1) {
    wl.push(productId);
    btn.textContent = '♥';
    btn.classList.add('active');
    showToast('Added to wishlist ❤️', 'success');
  } else {
    wl.splice(idx, 1);
    btn.textContent = '♡';
    btn.classList.remove('active');
    showToast('Removed from wishlist', 'info');
  }
  localStorage.setItem('ju_wishlist', JSON.stringify(wl));
}

// ===== AUTH =====
function getUser() {
  return JSON.parse(localStorage.getItem('ju_user') || 'null');
}

function saveUser(user) {
  localStorage.setItem('ju_user', JSON.stringify(user));
}

function logout() {
  localStorage.removeItem('ju_user');
  showToast('Logged out successfully', 'info');
  setTimeout(() => window.location.href = 'index.html', 1200);
}

function updateAuthNav() {
  const container = document.getElementById('authNavBtn');
  if (!container) return;
  const user = getUser();
  if (user) {
    container.innerHTML = `
      <span style="color:rgba(255,255,255,0.85); font-size:0.88rem;">Hi, ${user.name.split(' ')[0]}</span>
      <button onclick="logout()" class="btn-login" style="margin-left:8px;">Logout</button>
    `;
  } else {
    container.innerHTML = `<a href="login.html" class="btn-login">Login</a>`;
  }
}

// ===== TOAST =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'none';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== SEARCH =====
function searchProducts(event) {
  if (event.key === 'Enter') {
    const q = document.getElementById('searchInput').value.trim();
    if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
  }
}

// ===== MOBILE MENU =====
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
  }, 1200);
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  updateCartBadge();
  updateAuthNav();
});