document.addEventListener('DOMContentLoaded',()=>{
    // Reading the data of cart page
    const proceedCheckoutButton = document.getElementById('proceed-to-checkout-btn');
    proceedCheckoutButton.addEventListener('click',()=>{
        const cart = {
            subtotal: document.getElementById('cart-subtotal-amount').innerText,
            delivery: document.getElementById('cart-delivery-amount').innerText,
            total: document.getElementById('cart-total-amount').innerText
        }
        console.log(cart)
        localStorage.setItem('CartPageData', JSON.stringify(cart));
    })

    // Handling the cart items
    updateCartOrderSummary();
    const cartItemCollection = document.querySelectorAll('.cart-item-container');
    cartItemCollection.forEach(cartItem=>{
        const plusBtn = cartItem.querySelector('.cart-plus-btn');
        const minusBtn = cartItem.querySelector('.cart-minus-btn');

        plusBtn.addEventListener('click',()=>{
            const cartCount = cartItem.querySelector('.cart-item-count').textContent;
            var count = parseInt(cartCount);
            count += 1;
            cartItem.querySelector('.cart-item-count').textContent = count;
            updateCartOrderSummary();
        })
        minusBtn.addEventListener('click',()=>{
            const cartCount = cartItem.querySelector('.cart-item-count').textContent;
            var count = parseInt(cartCount);
            if(count > 1){
                count -= 1;
                cartItem.querySelector('.cart-item-count').textContent = count;
                updateCartOrderSummary();
            }
        })
    })
})


function updateCartOrderSummary(){
    var globalAmount = 0;
    const cartItemCollection = document.querySelectorAll('.cart-item-container');
    cartItemCollection.forEach(cartItem=>{
        const cartCount = cartItem.querySelector('.cart-item-count').textContent;
        var count = parseInt(cartCount);
        const cartPriceText = cartItem.querySelector('.cart-item-price').innerText;
        var cartPriceNum = parseInt(cartPriceText.slice(4));
        globalAmount += (count*cartPriceNum);
    })
    const cartDeliveryText = document.getElementById('cart-delivery-amount').innerText;
    var cartDeliveryNum = parseInt(cartDeliveryText.slice(4));
    document.getElementById('cart-subtotal-amount').textContent = `Rs. ${globalAmount.toLocaleString()}`
    document.getElementById('cart-total-amount').textContent = `Rs. ${(globalAmount+cartDeliveryNum).toLocaleString()}`;
}