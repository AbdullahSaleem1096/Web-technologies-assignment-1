// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector(".shadow-lg form");
//     const alertContainer = document.querySelector(".container");
//     const successAlert = document.querySelector(".alert-success");

    
//     successAlert.style.display = "none"; //hidden

//     loginForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const email = loginForm.email.value.trim();
//         const password = loginForm.password.value.trim();
//         const userFound = users.find(user => user.email === email && user.password === password);
//         const existingAlert = document.querySelector(".alert-danger");
//         if (existingAlert) {
//             existingAlert.remove();
//         }

//         if (userFound) {
//             successAlert.style.display = "block";
//             successAlert.classList.add("show");

//             setTimeout(() => {
//                 window.location.href = "home.html";
//             }, 1000);
//         } else {
//             const errorAlert = document.createElement("div");
//             errorAlert.className = "alert alert-danger alert-dismissible fade show mt-3";
//             errorAlert.role = "alert";
//             errorAlert.innerHTML = `
//                 <strong>Error!</strong> User not found or wrong credentials.
//                 <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//             `;
//             alertContainer.prepend(errorAlert);
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".shadow-lg form");
    const alertPlaceholder = document.getElementById("alert-placeholder");

    // Optional: Clear any existing alerts
    const clearAlerts = () => {
        alertPlaceholder.innerHTML = "";
    };

    const showAlert = (message, type = "success") => {
        clearAlerts();

        const alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
            <strong>${type === "success" ? "Success!" : "Error!"}</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        alertPlaceholder.append(alertDiv);
    };

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginForm.email.value.trim();
        const password = loginForm.password.value.trim();
        const userFound = users.find(user => user.email === email && user.password === password);

        if (userFound) {
            showAlert("Your login was successful.", "success");
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);
        } else {
            showAlert("User not found or wrong credentials.", "danger");
        }
    });
});
