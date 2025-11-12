/* <!--NAV BAR START--> */

// Responsive menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Login modal
document.getElementById('loginBtn').addEventListener('click', () => {
  document.getElementById('loginModal').style.display = 'flex';
});

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function loginUser() {
  let user = document.getElementById('username').value;
  if (user.trim() !== "") {
    alert(`Welcome back, ${user}!`);
    closeModal();
  }
}

function showSignup() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('signupModal').style.display = 'flex';
}

function closeSignup() {
  document.getElementById('signupModal').style.display = 'none';
}

//  Cart Counter Demo
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}

//  Search effect (demo)
document.getElementById('search').addEventListener('keyup', function() {
  let query = this.value.toLowerCase();
  console.log("Searching:", query);
});


/* <!--NAV BAR END--> */


/* <!--HOME PAGE START--> */

//  Home Page Dynamic Coffee Cards with Full Cart Functionality

const coffees = [
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk and velvety foam.",
    price: 450,
    img: "1card.jpg"
  },
  {
    name: "Latte",
    desc: "Smooth blend of espresso and milk, perfectly balanced.",
    price: 400,
    img: "2card.jpg.webp"
  },
  {
    name: "Espresso",
    desc: "Pure, bold, and aromatic coffee shot for strong taste lovers.",
    price: 300,
    img: "3card.jpg.webp"
  }
];

// Initialize Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

// Render Coffee Cards
const container = document.getElementById('coffee-container');
if (container) {
  coffees.forEach((coffee, i) => {
    const card = document.createElement('div');
    card.classList.add('coffee-card');
    card.innerHTML = `
      <img src="${coffee.img}" alt="${coffee.name}">
      <div class="coffee-info">
        <h3>${coffee.name}</h3>
        <p>${coffee.desc}</p>
        <div class="price-add">
          <span class="price">PKR ${coffee.price}</span>
          <button class="add-btn" onclick="addToCart('${coffee.name}', ${coffee.price}, '${coffee.img}')">Add to Cart</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Add to Cart Function (same as Menu)
function addToCart(name, price, img) {
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, img, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();

  //  Optional custom alert (replace with your popup if needed)
  alert(`${name} added to your cart!`);
}

// Update Cart Count in Navbar
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}



// Dynamic Reviews Section
const reviews = [
  {
    name: "Sarah Khan",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "Absolutely loved the cappuccino! The aroma, the flavor — it’s my new favorite spot to chill and sip perfection."
  },
  {
    name: "Ali Raza",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4,
    text: "Their Latte is smooth and creamy. Ambience is great too — perfect place to work or hang out with friends!"
  },
  {
    name: "Mehwish Ahmed",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Best espresso in town! The staff is super friendly, and I love how cozy the shop feels every time I visit."
  }
];

//  Render Reviews
const reviewContainer = document.getElementById("review-container");
if (reviewContainer) {
  reviews.forEach(r => {
    const card = document.createElement("div");
    card.classList.add("review-card");

    const stars = "⭐".repeat(r.rating) + "☆".repeat(5 - r.rating);

    card.innerHTML = `
      <img src="${r.image}" alt="${r.name}" class="review-img">
      <h3>${r.name}</h3>
      <div class="stars">${stars}</div>
      <p>"${r.text}"</p>
    `;

    reviewContainer.appendChild(card);
  });
}




const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".navbar a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});






// ---------------- DYNAMIC MENU ----------------
const menuItems = [
  
  { name: "Mocha", desc: "Chocolate meets coffee in one cozy cup.", price: 600, img: "7card.jpg" },
  { name: "Macchiato", desc: "Espresso topped with a touch of foam.", price: 480, img: "8card.jpg" },
  { name: "Espresso", desc: "Strong, rich shot of pure coffee bliss, find in different flavours.", price: 450, img: "5card.jpg" },
  { name: "Latte", desc: "Silky blend of espresso and steamed milk.", price: 520, img: "6card.jpg" },
  { name: "Americano", desc: "Espresso diluted with hot water, splash of milk.", price: 430, img: "09card.jpg" },
  { name: "Flat White", desc: "Creamy microfoam over espresso, latter or cappiccino", price: 540, img: "11card.jpg" },
  { name: "Irish Coffee", desc: "Whiskey-infused delight for bold hearts.", price: 650, img: "12card.jpg" },
  { name: "Cappuccino", desc: "Smooth espresso with foamy milk, coffee to milk ratio.", price: 550, img: "4card.jpg" },
  { name: "Affogato", desc: "Espresso poured over vanilla ice cream.", price: 570, img: "13card.jpg" },
  { name: "Cold Brew", desc: "Smooth, slow-steeped coffee perfection.", price: 500, img: "14card.jpg" },
  { name: "Turkish Coffee", desc: "Traditional bold & thick brew, enjoy cezve vibe.", price: 560, img: "15card.jpg" },
  { name: "Caramel Latte", desc: "Sweet caramel twist on a classic latte.", price: 590, img: "16card.jpg" }
];

const menuContainer = document.getElementById("menu-container");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "coffee-card";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price-add">
      <p class="price">PKR ${item.price}</p>
     <button class="add-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.img}')">Add to Cart</button>

    </div>`;
  menuContainer.appendChild(card);
});

// ---------------- DEALS SECTION ----------------
const deals = [
  { title: "Morning Boost Combo", desc: "Buy 2 Cappuccinos & get 1 free!", price: 1100, img: "21card.jpg" },
  { title: "Sweet Mocha Treat", desc: "Any Mocha + Muffin for just PKR 700.", price: 700, img: "20card.jpg" },
  { title: "Evening Duo Deal", desc: "2 Lattes + 2 Donuts combo.", price: 950, img: "17card.jpg" }
];

const dealsContainer = document.getElementById("deals-container");

if (dealsContainer) {
  deals.forEach(d => {
    const div = document.createElement("div");
    div.className = "deal-card";
    div.innerHTML = `
      <img src="${d.img}" alt="${d.title}">
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
      <div class="deal-footer">
      <div class="price">PKR ${d.price}</div>
      <button class="add-btn" onclick="addToCart('${d.title}', ${d.price}, '${d.img}')">Add to Cart</button>
    `;
    dealsContainer.appendChild(div);
  });
}

// ---------------- ADD TO CART FUNCTION ----------------
function addToCart(name, price, img) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  //  Check if item already exists
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, img, quantity: 1 });
  }

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart count properly
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }

  //  Custom Alert (Optional)
  alert(`${name} added to your cart!`);
}







