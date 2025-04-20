function showModalMessage(message, redirect = false) {
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.innerText = message;

    const modal = new bootstrap.Modal(document.getElementById("feedbackModal"));
    modal.show();

    if (redirect) {
        const modalElement = document.getElementById("feedbackModal");
        modalElement.addEventListener("hidden.bs.modal", () => {
            window.location.href = "home.html";
        }, { once: true });
    }
}

function checkUser(){
    const user_email = document.getElementById('sign-up-email').value;
    let exists = users.some(user => user.email === user_email);

    if(exists){
        showModalMessage('Email already exists. Try logging in instead.');
    } else {
        showModalMessage('You have successfully signed in', true);
    }
}
