"use strict";

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const value = document.getElementById("value");
console.log(increment);
console.log(decrement);
console.log(value);

const handleIncrement = (e) => {
    value.textContent = +value.textContent +1;
};
const handleDecrement = (e) => {value.textContent = +value.textContent -1;};


increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);

