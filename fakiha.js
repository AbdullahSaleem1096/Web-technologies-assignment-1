let totalItems = 0;
let totalPrice = 0;

const ProductReview = []; // Simulated review table

function addToCart(button) {
  let product = button.parentElement;
  let name = product.querySelector(".product-name").innerText;
  let price = parseFloat(product.querySelector(".product-price").innerText);
  let location = product.querySelector(".product-location").innerText;
  let imageSrc = product.querySelector("img").src;

  let cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  cartItem.innerHTML = `
      <img src="${imageSrc}" alt="${name}">
      <p><strong>${name}</strong></p>
      <p>Location: ${location}</p>
      <p>Price: $${price}</p>
    `;

  document.getElementById("cartitem").appendChild(cartItem);

  totalItems++;
  totalPrice += price;
  document.getElementById("totalItems").innerText = totalItems;
  document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
}

function SubmitReview(button) {
  const form = button.closest(".review-form");
  const reviewInput = form.querySelector(".review-input");
  const reviewText = reviewInput.value.trim();
  const productName = form.closest(".product-items").querySelector(".product-name").innerText;

  if (reviewText === "") {
    alert("Please enter a review.");
    return;
  }

  const reviewObj = {
    productName,
    review: reviewText,
    timestamp: new Date().toLocaleString()
  };

  ProductReview.push(reviewObj); // "insert" into table


  // Display review below the product
  const reviewBox = form.querySelector(".review-box");
  const newReview = document.createElement("p");
  newReview.innerHTML = `<strong>${reviewObj.productName}</strong>: ${reviewObj.review} <br><small>${reviewObj.timestamp}</small>`;
  reviewBox.appendChild(newReview);

  reviewInput.value = ""; // Clear input

    // Convert to JSON format
let jsonData = JSON.stringify(reviewObj, null, 2);

// Create a Blob (file)
let blob = new Blob([jsonData], { type: "application/json" });

// Create a download link
let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "user_data.json";
a.click();

// Reset form fields
document.querySelector("form").reset();
  }