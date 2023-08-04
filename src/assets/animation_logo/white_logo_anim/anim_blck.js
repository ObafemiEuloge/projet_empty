'use strict'

const text = "Ton générateur de site web !";
const textElement = document.querySelector('#la_phrase');
console.log(textElement);
let index = 0;

// phraseElement.innerHTML = phrase;
function animePhrase() {
    if(index < text.length) {
        console.log('animation');
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(animePhrase, 700);
    }
}

animePhrase();