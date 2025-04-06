//onclicking the arrow in the messaging interface page
document.getElementById("send-message-button").addEventListener("click",function(){
    const messageBox = document.getElementById("message-input-area");
    const userMessage = messageBox.value;
    if(userMessage != ""){
        const messageBox = document.createElement("div");
        messageBox.className = "user-message-box";
        messageBox.innerText = userMessage;
    }
    document.getElementById("chat-box").appendChild(messageBox);
    document.getElementById("message-input-area").value = "";
})


function getShoppingCartItems(){
    const shoppingCartItems = document.getElementById("Shopping-cart-items");
    const cartItemsCollection = shoppingCartItems.children;
    const cartItemsArray = [];
    for(let i=0; i<cartItemsCollection.length; ++i){
        const cartItem = cartItemsCollection[i];
        const cartElements = cartItem.querySelector(".cart-elements");
        const cartItemDescription = cartElements.querySelector(".cart-item-description");
        const cartItemName = cartItemDescription.querySelector(".cart-item-name").innerText;
        const cartItemPrice = cartItemDescription.querySelector(".cart-item-price").innerText;

        const cartButtons = cartElements.querySelector(".cart-buttons");
        const cartUpdateButtons = cartButtons.querySelector(".cart-update-buttons");
        const cartCount = cartUpdateButtons.querySelector(".cart-count").innerText;

        const cartImageDiv = cartItem.querySelector(".cart-image");
        const cartImage = cartImageDiv.querySelector("img");

        cartItemsArray.push({name:cartItemName, price:cartItemPrice, quantity:cartCount, image: cartImage});
    }
    return cartItemsArray;
}

function makeOrderProductItem(name,price,quantity,image){
    const orderSummarySection = document.getElementById("order-summary-section");

    const orderProductItem = document.createElement("div");
    orderProductItem.className = "order-product-item";

    const orderProductDescription = document.createElement("div");
    orderProductDescription.className("order-product-description");

    const orderProductPrice = document.createElement("div");
    orderProductPrice.className = "order-product-price";
    orderProductPrice.innerText = price

    const orderProductQuantity = document.createElement("div");
    orderProductQuantity.className = "order-product-quantity";
    orderProductName.innerText = quantity;

    const orderProductName = document.createElement("div");
    orderProductName.className = "order-product-name";
    orderProductName.innerText = name;

    orderProductDescription.appendChild(orderProductPrice);
    orderProductDescription.appendChild(orderProductName);
    orderProductDescription.appendChild(orderProductQuantity);

    const orderProductImage = document.createElement("div");
    orderProductImage.className = "order-product-image";
    const img = document.createElement("img");
    img.src = image.src;
    orderProductImage.appendChild(img);

    orderProductItem.appendChild(orderProductImage);
    orderProductItem.appendChild(orderProductDescription);
    
    orderSummarySection.appendChild(orderProductItem);
}

//Cart page Onclick (proceed to payment): 
document.getElementById("proceed-to-payment-button").addEventListener("click",function(){
    const cartItemsArray = getShoppingCartItems();
    for(let i=0;i<cartItemsArray.length;++i){
        var product_name = cartItemsArray[i].name;
        var product_price = cartItemsArray[i].price;
        var product_quantity = cartItemsArray[i].quantity;
        var product_image = cartItemsArray[i].image;

        makeOrderProductItem(product_name, product_price, product_quantity, product_image)
    }
})
