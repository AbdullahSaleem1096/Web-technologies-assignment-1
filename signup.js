// // signUp.js

// // Import the users array from user.js
// import { users } from './user.js';

// // Function 
// function signUp() {
//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Check for existing username
//   const userExists = users.some(user => user.username === username);

//   if (userExists) {
//     // Redirect to login page if username already exists
//     window.location.href = 'login.html';
//   } else {
//     // If username is unique, add the user to the "database"
//     users.push({ username, email, password });
//     alert('Sign-up successful!');
//     // Redirect to login page after successful sign-up
//     window.location.href = 'login.html';
//   }
// }

// //event listener to sign-up button
// document.getElementById('signUpButton').addEventListener('click', signUp);
