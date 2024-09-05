function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.getElementById("boxes");
const createDiv = document.querySelector("[data-create]");
const destroyDiv = document.querySelector("[data-destroy]");
const input = document.getElementsByTagName("input")[0];

console.log(mainDiv, createDiv, destroyDiv, input);

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    mainDiv.appendChild(div);
    size += 10;
  }
}

function destroyBoxes(){
  mainDiv.innerHTML = "";
}

createDiv.addEventListener("click", ()=> {
  const amount = input.value;
  createBoxes(Number(amount));
})
destroyDiv.addEventListener("click", destroyBoxes);