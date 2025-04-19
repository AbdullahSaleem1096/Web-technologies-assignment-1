const users = [
    {
        email: "maryam@gmail.com",
        password: "maryam123" 
    },
    {

        email: "fakiha@gmail.com",
        password: "fakiha123"
    },
    {

        email: "abdullah@gmail.com",
        password: "abdullah123"
    },
    {

        email: "ayesha@gmail.com",
        password: "ayesha123"
    },
    {

        email: "adeenah@gmail.com",
        password: "adeenah123"
    },
    {
        email: "admin@gmail.com",
        password: "admin123"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
        });
    },
    { threshold: 0.2 }
    );
    const animatedItems = document.querySelectorAll(".animated-section");
    animatedItems.forEach(item => observer.observe(item));

});


function checkUser(){
    var check = true;
    const user_email = document.getElementById('sign-up-email').value;
    for(let i=0;i<users.length;++i){
        if(users[i].email === user_email){
            alert('Email already exists. Try logging in instead.');
            check = false;
        }
    }
    if(check){
        alert('You have successfully signed in')
        window.location.href = "home.html";
    }
}