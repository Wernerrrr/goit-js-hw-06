"use strict";

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

console.log(input, output);

const handleInput = (e) => {
    output.textContent = e.currentTarget.value;
};

input.addEventListener("input", handleInput);