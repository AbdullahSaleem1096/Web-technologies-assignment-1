// Writing the data of payment page
document.addEventListener('DOMContentLoaded',()=>{
    const payment_data = localStorage.getItem("PaymentPageData");
    if (payment_data) {
        const json_payment_data = JSON.parse(payment_data);
        document.getElementById('payment-success-amount-required').innerText = json_payment_data["total"];
        document.getElementById('payment-success-amount-paid').innerText = json_payment_data["total"];
        document.getElementById('payment-success-payment-method').innerText = json_payment_data["PaymentOption"];
    }
})