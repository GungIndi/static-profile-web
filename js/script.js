const texts = [
  "I'm Agung Indi Kusuma",
  "I'm a junior DevOps engineer.",
];

let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const deleteSpeed = 25;
const pauseDuration = 1500; 

function typeText() {
  const typedTextElement = document.getElementById("typed-text");
  const currentText = texts[index];
  
  if (charIndex < currentText.length) {
    typedTextElement.innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(() => {
      deleteText();
    }, pauseDuration);
  }
}

function deleteText() {
  const typedTextElement = document.getElementById("typed-text");
  
  if (charIndex > 0) {
    typedTextElement.innerHTML = typedTextElement.innerHTML.slice(0, -1);
    charIndex--;
    setTimeout(deleteText, deleteSpeed);
  } else {
    // Move to the next text
    index = (index + 1) % texts.length;
    setTimeout(() => {
      typeText();
    }, deleteSpeed);
  }
}

window.onload = function() {
  setTimeout(typeText, 500);
};


  