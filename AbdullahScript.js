//Cart page Onclick (proceed to payment): 
function getShoppingCartItems(){
    const cartItems = document.querySelectorAll('.cart-items');
    const cartItemsArray = [];
    cartItems.forEach(item=>{
        const cartItemName = item.querySelector('.cart-item-name').innerText;
        const cartItemPrice = item.querySelector('.cart-item-price').innerText;
        const cartCount = item.querySelector('.cart-count').innerText;
        const cartImageDiv = item.querySelector(".cart-image");
        const cartImage = cartImageDiv.querySelector("img");
        cartItemsArray.push({name:cartItemName, price:cartItemPrice, quantity:cartCount, image: cartImage});

    })
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
    orderProductPrice.innerText = price;

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


function getOrderSummary(){
    const orderSummary = document.getElementById("order-summary");
    const orderTotalAmount = orderSummary.querySelector('.order-total-amount');
    const shippingAmount = orderSummary.querySelector('.shipping-amount');
    const subTotalAmount = orderSummary.querySelector('.subtotal-amount');

    const order = {
        sub_total : subTotalAmount,
        delivery : shippingAmount,
        total : orderTotalAmount
    }

    return order;
}


function writeOrderDetailsSection(sub_total,delivery,total){
    const orderDetailsSection = document.getElementById("order-details-section");
    orderDetailsSection.querySelector(".order-total-amount").innerText = total;
    orderDetailsSection.querySelector(".delivery-amount").innerText = delivery;
    orderDetailsSection.querySelector(".subtotal-amount").innerText = sub_total;
}


document.getElementById("proceed-to-payment-button").addEventListener("click",function(){
    const cartItemsArray = getShoppingCartItems();
    for(let i=0;i<cartItemsArray.length;++i){
        var product_name = cartItemsArray[i].name;
        var product_price = cartItemsArray[i].price;
        var product_quantity = cartItemsArray[i].quantity;
        var product_image = cartItemsArray[i].image;

        makeOrderProductItem(product_name, product_price, product_quantity, product_image)
    }
    const order = getOrderSummary();
    writeOrderDetailsSection(order.sub_total,order.delivery,order.total);
})


//onclicking the arrow in the messaging interface page
document.getElementById("send-message-button").addEventListener("click",function(){
    const messageBox = document.getElementById("message-input-area");
    const userMessage = messageBox.innerText;
    if(userMessage != ""){
        const messageBox = document.createElement("div");
        messageBox.className = "user-message-box";
        messageBox.innerText = userMessage;
    }
    document.getElementById("chat-box").appendChild(messageBox);
    document.getElementById("message-input-area").value = "";
})

//onclicking the confirm payment button in payment page
function getSelectedPaymentOption(){
    const selectedOption = document.querySelector('input["payment-options"]:checked');
    if(selectedOption){
        return selectedOption.value;
    }
    else{
        alert("Please select the payment option");
        return null;
    }
}


function writePaymentPage(){
    const paymentOption = getSelectedPaymentOption();
    if(paymentOption){
        document.getElementById("payment-status").innerText = "Payment Sucessfull";
        document.getElementById("payment-message").innerText = "Your payment has been processed and your order has been confirmed successfully";
        deliveryDate = document.getElementById("delivery-date").innerText = "Estimated Delivery: within 2 hours";
        const order = getOrderSummary();
        document.getElementById("amount-paid-count").innerText = order.total;
        document.getElementById("amount-to-be-paid-count").innerText = order.total;
        document.getElementById("payment-method-form").innerText = paymentOption;
        document.getElementById("payment-order-id-form").innerText = "#ORD-2024-0315";
    }
    else{
        document.getElementById("payment-status").innerText = "Payment Unsucessfull";
        document.getElementById("payment-message").innerText = "The payment is not sent there might be some problem";
        deliveryDate = document.getElementById("delivery-date").innerText = "-";
        document.getElementById("amount-paid-count").innerText = "-";
        document.getElementById("amount-to-be-paid-count").innerText = getOrderSummary().total;
        document.getElementById("payment-method-form").innerText = "Not selected";
        document.getElementById("payment-order-id-form").innerText = "-";
    }
}
document.getElementById("proceed-to-payment-button").addEventListener("click", writePaymentPage());


//modifying the order summary section with the addition or removal of cart products
function updateOrderSummary(){
    let subtotal = 0;
    let delivery = 50;
    const cartItems = document.querySelectorAll('.cart-items');
    const orderSummary = document.getElementById("order-summary");

    const subTotalAmount = orderSummary.querySelector('.sub-total-amount');
    const totalAmount = orderSummary.querySelector('.total-amount');

    cartItems.forEach(item => {
        let tempSubtotal = 0;
        const cartItemPrice = item.querySelector('.cart-item-price').innerText;
        const cartItemCount = item.querySelector('.cart-item-count').innerText;

        cartItemPrice = parseFloat(cartItemPrice);
        cartItemCount = parseInt(cartItemCount);

        tempSubtotal =  cartItemCount * cartItemPrice;
        subtotal += tempSubtotal;
    });
    subTotalAmount.innerText = subtotal;
    totalAmount.innerText = subtotal + delivery;
}


function cartProductAdditionSubstraction(){
    const cartItem = document.querySelectorAll('.cart-item');
    cartItem.forEach(item =>{
        item.querySelector('.cart-add').addEventListener("click",function(){
            const cartCount = item.querySelector('.cart-count').innerText;
            cartCount = parseInt(cartCount);
            cartCount += 1;
            item.querySelector('.cart-count').innerText = cartCount;
            updateOrderSummary();
        })
        item.querySelector('.cart-substract').addEventListener("click",function(){
            const cartCount = item.querySelector('.cart-count').innerText;
            cartCount = parseInt(cartCount);
            if(cartCount > 0){
                cartCount -= 1;
                item.querySelector('.cart-count').innerText = cartCount;
                updateOrderSummary()
            }
        })
    })
}


//managing the remove button in the cart page
function removeCartItem(){
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item=>{
        const removeBtn = item.querySelector('cart-remove-button');
        removeBtn.addEventListener("click",() =>{
            item.remove();
        })
    })
}