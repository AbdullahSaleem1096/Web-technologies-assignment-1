// Writing the data of cart page
document.addEventListener('DOMContentLoaded',()=>{
    const cart_data = localStorage.getItem("CartPageData");
    if(cart_data){
        const json_cart_data = JSON.parse(cart_data);
        console.log(json_cart_data)
        document.getElementById('payment-subtotal-amount').innerText = json_cart_data["subtotal"];
        document.getElementById('payment-delivery-amount').innerText = json_cart_data["delivery"];
        document.getElementById('payment-total-amount').innerText = json_cart_data["total"];
    }
})

// Reading the data of payment page
document.addEventListener('DOMContentLoaded',()=>{
    const proceedPaymentButton = document.getElementById('proceed-to-payment-btn'); 
    proceedPaymentButton.addEventListener('click', () =>{
        const payment = {
            total: document.getElementById('payment-total-amount').textContent,
            PaymentOption: document.querySelector('input[name="payment"]:checked').value
        };
        localStorage.setItem("PaymentPageData", JSON.stringify(payment));
        console.log(payment);
    })
})