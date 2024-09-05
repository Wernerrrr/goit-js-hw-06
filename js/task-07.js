"use strict";

const slider = document.getElementById("font-size-control");
const text = document.getElementById("text");



const handleInput = (e) => {
    text.style.fontSize = slider.value + "px";
};


slider.addEventListener("input", handleInput);