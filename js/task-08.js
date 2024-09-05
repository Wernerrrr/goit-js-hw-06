"use strict";

const logInForm = document.getElementsByClassName("login-form");

const handleLogIn = (e) => {
    e.preventDefault();
    console.log(e);
    const username = document.getElementsByName("email");
    const password = document.getElementsByName("password");
    console.log(username[0].value, password[0].value);

    if (username[0].value === "" || password[0].value === "") {
        alert("All fields must be filled in!")
    } else {
        username[0].value = "";
        password[0].value = "";
    }

    
};

logInForm[0].addEventListener("submit", handleLogIn);