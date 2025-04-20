const products = [
  {
      id: 1,
      name: "Cozy Pink Sweater",
      price: 49.99,
      image: "sweater.png",
      description: "Soft and warm pink sweater made from premium cotton blend. Perfect for chilly days with a stylish oversized fit.",
      rating: 4,
      reviews: 300,
      category: "Fashion"
  },
  {
      id: 2,
      name: "Leather Tote Bag",
      price: 89.99,
      image: "leathertote.png",
      description: "Genuine leather tote bag with multiple compartments. Spacious enough for daily essentials with a sleek professional look.",
      rating: 4,
      reviews: 142,
      category: "Accessories"
  },
  {
      id: 3,
      name: "Wireless Earbuds Pro",
      price: 129.00,
      image: "earbuds.png",
      description: "Premium wireless earbuds with active noise cancellation and 24-hour battery life. Crystal clear sound with deep bass.",
      rating: 5,
      reviews: 566,
      category: "Electronics"
  },
  {
      id: 4,
      name: "Classic Leather Boots",
      price: 159.00,
      image: "boots.png",
      description: "Handcrafted leather boots with durable rubber soles. Water-resistant and comfortable for all-day wear.",
      rating: 4,
      reviews: 186,
      category: "Footwear"
  },
  {
      id: 5,
      name: "Professional DSLR Camera",
      price: 999.99,
      image: "dslr.png",
      description: "24MP DSLR camera with 4K video recording. Includes 18-55mm lens and complete beginner photography kit.",
      rating: 4.5,
      reviews: 420,
      category: "Electronics"
  },
  {
      id: 6,
      name: "Gaming Laptop Pro",
      price: 1299.99,
      image: "laptop.png",
      description: "High-performance gaming laptop with RTX 3060 GPU, 16GB RAM, and 1TB SSD. 144Hz refresh rate display.",
      rating: 4.7,
      reviews: 380,
      category: "Electronics"
  },
  {
      id: 7,
      name: "Wireless Gaming Headphones",
      price: 104.99,
      image: "headphones.png",
      description: "Over-ear wireless headphones with 7.1 surround sound. 30-hour battery life with noise-canceling mic.",
      rating: 4.3,
      reviews: 275,
      category: "Electronics"
  },
  {
      id: 8,
      name: "Classic Leather Jacket",
      price: 249.00,
      image: "jacket.png",
      description: "Premium genuine leather jacket with quilted lining. Timeless biker-style design with multiple pockets.",
      rating: 4.8,
      reviews: 210,
      category: "Fashion"
  },
  {
      id: 9,
      name: "Premium Speakers",
      price: 179.99,
      image: "speakers.png",
      description: "High-fidelity Bluetooth speakers with 40W output. Waterproof design with 15-hour playtime.",
      rating: 4.6,
      reviews: 320,
      category: "Electronics"
  },
  {
      id: 10,
      name: "Tablet Pro Max",
      price: 649.99,
      image: "tab.png",
      description: "10.5-inch tablet with 2K display and stylus support. 128GB storage with 10-hour battery life.",
      rating: 4.4,
      reviews: 195,
      category: "Electronics"
  },
  {
      id: 11,
      name: "Premium Headphones",
      price: 279.99,
      image: "headphonespre.png",
      description: "Studio-grade over-ear headphones with active noise cancellation. Hi-Res audio certified with luxury materials.",
      rating: 4.9,
      reviews: 480,
      category: "Electronics"
  },
  {
      id: 12,
      name: "Smart Watch Elite",
      price: 289.99,
      image: "watch.png",
      description: "Advanced smartwatch with ECG, blood oxygen monitoring, and 7-day battery life. LTE connectivity included.",
      rating: 4.7,
      reviews: 520,
      category: "Wearables"
  },
  {
    id: 13,
    name: "Premium Speakers",
    price: 179.99,
    image: "speakers.png",
    description: "High-fidelity Bluetooth speakers with 40W output. Waterproof design with 15-hour playtime.",
    rating: 4.6,
    reviews: 320,
    category: "Electronics"
  },
  {
    id: 14,
    name: "Tablet Pro Max",
    price: 649.99,
    image: "tab.png",
    description: "10.5-inch tablet with 2K display and stylus support. 128GB storage with 10-hour battery life.",
    rating: 4.4,
    reviews: 195,
    category: "Electronics" 
  },
  {
    id: 15,
    name: "Premium Headphones",
    price: 279.99,
    image: "headphonespre.png",
    description: "Studio-grade over-ear headphones with active noise cancellation. Hi-Res audio certified with luxury materials.",
    rating: 4.9,
    reviews: 480,
    category: "Electronics"
  },
  {
    id: 16,
    name: "Smart Watch Elite",
    price: 289.99,
    image: "watch.png",
    description: "Advanced smartwatch with ECG, blood oxygen monitoring, and 7-day battery life. LTE connectivity included.",
    rating: 4.7,
    reviews: 520,
    category: "Wearables"
  },
  {
    id: 17,
    name: "Professional DSLR Camera",
    price: 999.99,
    image: "dslr.png",
    description: "24MP DSLR camera with 4K video recording. Includes 18-55mm lens and complete beginner photography kit.",
    rating: 4.5,
    reviews: 420,
    category: "Electronics"
},
{
    id: 18,
    name: "Gaming Laptop Pro",
    price: 1299.99,
    image: "laptop.png",
    description: "High-performance gaming laptop with RTX 3060 GPU, 16GB RAM, and 1TB SSD. 144Hz refresh rate display.",
    rating: 4.7,
    reviews: 380,
    category: "Electronics"
},
{
    id: 19,
    name: "Wireless Gaming Headphones",
    price: 104.99,
    image: "headphones.png",
    description: "Over-ear wireless headphones with 7.1 surround sound. 30-hour battery life with noise-canceling mic.",
    rating: 4.3,
    reviews: 275,
    category: "Electronics"
},
{
    id: 20,
    name: "Classic Leather Jacket",
    price: 249.00,
    image: "jacket.png",
    description: "Premium genuine leather jacket with quilted lining. Timeless biker-style design with multiple pockets.",
    rating: 4.8,
    reviews: 210,
    category: "Fashion"
},
];
function showMore() {
  const exploreContainer = document.getElementById('explore-our-product-section');
  const exploreProducts = products.slice(12);
  exploreProducts.forEach(product => {
  exploreContainer.appendChild(makeProductItem(product));
  document.getElementById('show-more-btn').style.display = "none";
  document.getElementById('show-less-btn').style.display = "block";
  });
}

document.getElementById('show-less-btn').style.display = "none";
function showLess() {
  const exploreContainer = document.getElementById('explore-our-product-section');
  while (exploreContainer.children.length > 8) {
    exploreContainer.removeChild(exploreContainer.lastElementChild);
  }
  document.getElementById('show-more-btn').style.display = "block";
  document.getElementById('show-less-btn').style.display = "none";
}


function makeProductItem(product) {
  const productItem = document.createElement('div');
  productItem.className = 'product';

  const link = document.createElement('a');
  link.href = `onlinestore.html`;

  const productImage = document.createElement('img');
  productImage.src = product.image;
  link.appendChild(productImage);
  
  const productName = document.createElement('h4');
  productName.textContent = product.name;
  link.appendChild(productName);

  const productPrice = document.createElement('div');
  productPrice.textContent = product.price;
  productPrice.className = "product-price";
  link.appendChild(productPrice);

  productItem.appendChild(link);
  return productItem;
}

document.addEventListener('DOMContentLoaded',displayProducts());

function displayProducts(){
  const bestSellingContainer = document.getElementById('best-selling-product-section');
  const exploreContainer = document.getElementById('explore-our-product-section');

  const bestSellingProducts = products.slice(0, 4);
  
  const exploreProducts = products.slice(4,12);

  bestSellingProducts.forEach(product => {
    bestSellingContainer.appendChild(makeProductItem(product));
  });

  exploreProducts.forEach(product => {
    exploreContainer.appendChild(makeProductItem(product));
  });
}

    
const toggleBtn = document.getElementById("themeToggleBtn");
const icon = toggleBtn.querySelector("i");
const body = document.body;

// Check and apply stored theme on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  icon.classList.replace("fa-sun", "fa-moon");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Toggle icon
  if (body.classList.contains("dark-theme")) {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  }
});


// const products = [
//     {
//       "productId": 1,
//       "name": "Wireless Bluetooth headphones",
//       "price": 49.99,
//       "description": "High-quality wireless Bluetooth headphones with noise cancellation and 12-hour battery life.",
//       "rating": 4.5,
//       "category": "Electronics",
//       "sellerId": 101
//     },
//     {
//       "productId": 2,
//       "name": "Smart Watch",
//       "price": 79.99,
//       "description": "Feature-rich smartwatch with heart rate monitoring, GPS, and waterproof design.",
//       "rating": 4.7,
//       "category": "Electronics",
//       "sellerId": 102
//     },
//     {
//       "productId": 3,
//       "name": "Leather Wallet",
//       "price": 19.99,
//       "description": "Premium leather wallet with multiple card slots and RFID protection.",
//       "rating": 4.3,
//       "category": "Accessories",
//       "sellerId": 103
//     },
//     {
//       "productId": 4,
//       "name": "Gaming Laptop",
//       "price": 1299.99,
//       "description": "High-performance gaming laptop with RTX graphics, 16GB RAM, and 1TB SSD.",
//       "rating": 4.8,
//       "category": "Computers",
//       "sellerId": 104
//     },
//     {
//       "productId": 5,
//       "name": "Running Shoes",
//       "price": 59.99,
//       "description": "Lightweight and durable running shoes designed for comfort and performance.",
//       "rating": 4.6,
//       "category": "Footwear",
//       "sellerId": 105
//     },
//     {
//       "productId": 6,
//       "name": "Wireless Earbuds",
//       "price": 39.99,
//       "description": "Compact wireless earbuds with deep bass, touch controls, and long battery life.",
//       "rating": 4.4,
//       "category": "Electronics",
//       "sellerId": 106
//     },
//     {
//       "productId": 7,
//       "name": "4K Smart TV",
//       "price": 499.99,
//       "description": "50-inch 4K Ultra HD Smart TV with built-in streaming apps and HDR support.",
//       "rating": 4.9,
//       "category": "Electronics",
//       "sellerId": 107
//     },
//     {
//       "productId": 8,
//       "name": "Mechanical Keyboard",
//       "price": 89.99,
//       "description": "RGB backlit mechanical keyboard with customizable keys and fast response time.",
//       "rating": 4.7,
//       "category": "Computers",
//       "sellerId": 108
//     },
//     {
//       "productId": 9,
//       "name": "Fitness Tracker",
//       "price": 29.99,
//       "description": "Track your steps, calories, and heart rate with this lightweight fitness tracker.",
//       "rating": 4.2,
//       "category": "Wearables",
//       "sellerId": 109
//     },
//     {
//       "productId": 10,
//       "name": "Portable Speaker",
//       "price": 59.99,
//       "description": "Waterproof portable Bluetooth speaker with powerful bass and 10-hour battery life.",
//       "rating": 4.6,
//       "category": "Electronics",
//       "sellerId": 110
//     },
//     {
//       "productId": 11,
//       "name": "Gaming Mouse",
//       "price": 49.99,
//       "description": "High-precision gaming mouse with RGB lighting and customizable buttons.",
//       "rating": 4.8,
//       "category": "Computers",
//       "sellerId": 111
//     },
//     {
//       "productId": 12,
//       "name": "USB-C Hub",
//       "price": 34.99,
//       "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader support.",
//       "rating": 4.5,
//       "category": "Accessories",
//       "sellerId": 112
//     },
//     {
//       "productId": 13,
//       "name": "Noise-Canceling Earphones",
//       "price": 99.99,
//       "description": "Wired earphones with advanced noise cancellation and crystal-clear sound quality.",
//       "rating": 4.7,
//       "category": "Electronics",
//       "sellerId": 113
//     },
//     {
//       "productId": 14,
//       "name": "Smart Home Camera",
//       "price": 79.99,
//       "description": "HD security camera with night vision, motion detection, and two-way audio.",
//       "rating": 4.6,
//       "category": "Smart Home",
//       "sellerId": 114
//     },
//     {
//       "productId": 15,
//       "name": "Electric Kettle",
//       "price": 29.99,
//       "description": "Stainless steel electric kettle with fast boiling and auto shut-off feature.",
//       "rating": 4.3,
//       "category": "Home Appliances",
//       "sellerId": 115
//     },
//     {
//       "productId": 16,
//       "name": "Backpack",
//       "price": 45.99,
//       "description": "Durable and spacious backpack with multiple compartments and USB charging port.",
//       "rating": 4.5,
//       "category": "Bags",
//       "sellerId": 116
//     },
//     {
//       "productId": 17,
//       "name": "Cordless Vacuum Cleaner",
//       "price": 149.99,
//       "description": "Powerful cordless vacuum cleaner with long battery life and multiple attachments.",
//       "rating": 4.7,
//       "category": "Home Appliances",
//       "sellerId": 117
//     },
//     {
//       "productId": 18,
//       "name": "Smart LED Bulb",
//       "price": 15.99,
//       "description": "Color-changing smart LED bulb compatible with Alexa and Google Assistant.",
//       "rating": 4.4,
//       "category": "Smart Home",
//       "sellerId": 118
//     },
//     {
//       "productId": 19,
//       "name": "Digital Drawing Tablet",
//       "price": 199.99,
//       "description": "Professional drawing tablet with pressure sensitivity and customizable hotkeys.",
//       "rating": 4.8,
//       "category": "Computers",
//       "sellerId": 119
//     },
//     {
//       "productId": 20,
//       "name": "Ergonomic Office Chair",
//       "price": 249.99,
//       "description": "Adjustable ergonomic chair with lumbar support and breathable mesh design.",
//       "rating": 4.9,
//       "category": "Furniture",
//       "sellerId": 120
//     }
// ]

// document.addEventListener('DOMContentLoaded', function() {
//   const bestSellingContainer = document.getElementById('best-selling-product-section');
//   const exploreContainer = document.getElementById('explore-our-product-section');

//   // bestSellingContainer.innerHTML = '';
//   // exploreContainer.innerHTML = '';

//   const bestSellingProducts = products.slice(0, 4);
  
//   const exploreProducts = products.slice(4,12);

//   bestSellingProducts.forEach(product => {
//     bestSellingContainer.appendChild(makeProductItem(product));
//   });

//   exploreProducts.forEach(product => {
//     exploreContainer.appendChild(makeProductItem(product));
//   });
// });