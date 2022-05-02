// scroll horizontal de produtos

let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector("#cards-container");
const hScroll = document.querySelector(".scroll-horizontal");

const botaoEsquerdo = document.querySelector("#botaoEsquerdo");
const botaoDireito = document.querySelector("#botaoDireito");

botaoEsquerdo.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;


function scrollHorizontal(valor) {
    currentScrollPosition += (valor * scrollAmount);

    if(currentScrollPosition >= 0) {
        currentScrollPosition = 0;
        botaoEsquerdo.style.opacity = "0";
    }else {
        botaoEsquerdo.style.opacity = "1";
    }

    if(currentScrollPosition <= maxScroll){
        currentScrollPosition = maxScroll;
        botaoDireito.style.opacity = "0";
    }else {
        botaoDireito.style.opacity = "1";
    }

    sCont.style.left = currentScrollPosition + "px";
}

