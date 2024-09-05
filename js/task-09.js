"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.getElementsByTagName("body")[0];
const button = document.getElementsByClassName("change-color")[0];
const text = document.getElementsByClassName("color")[0];

const handleColor = (e) => {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
};

button.addEventListener("click", handleColor);