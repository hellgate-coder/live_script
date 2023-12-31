let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function createAndAppendKeyCode(keycode) {
    let listItemEl = document.createElement('li');
    listItemEl.classList.add("mt-1");
    listItemEl.textContent = keycode;
    keyCodeListEl.appendChild(listItemEl);
}

function onkeydown(event) {
    createAndAppendKeyCode(event.keycode)
}
userInputEl.addEventListener("keydown", onkeydown);