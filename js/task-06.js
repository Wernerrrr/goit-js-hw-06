"use strict";

const input = document.getElementById("validation-input");

const handleCheck = (e) => {
    const expectedLength = Number(input.getAttribute("data-length"));

    if (input.value.length === expectedLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }

};

input.addEventListener("blur", handleCheck);