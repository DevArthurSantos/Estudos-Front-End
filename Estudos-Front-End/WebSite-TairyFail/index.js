/* Var-Functions */
var play;
var count = 0;
var paragrafo1;
var paragrafo2;
var paragrafo3;
var paragrafo4;
var button;

window.onload = function () {
  paragrafo1 = document.getElementById("paragrafo1");
  paragrafo2 = document.getElementById("paragrafo2");
  paragrafo3 = document.getElementById("paragrafo3");
  paragrafo4 = document.getElementById("paragrafo4");
  play = document.getElementById("audio-back");

  paragrafo1.classList.add("conteudo-principal-escrito-paragrafo");
  paragrafo2.classList.add("esconder");
  paragrafo3.classList.add("esconder");
  paragrafo4.classList.add("esconder");

  var menu1 = document.getElementById("menu1");
  menu1.onclick = monstrarParagrafo1;
  var menu2 = document.getElementById("menu2");
  menu2.onclick = monstrarParagrafo2;
  var menu3 = document.getElementById("menu3");
  menu3.onclick = monstrarParagrafo3;
  var menu4 = document.getElementById("menu4");
  menu4.onclick = monstrarParagrafo4;
  var play = document.getElementById("play");
  play.onclick = start;
};

function monstrarParagrafo1() {
  paragrafo1.classList.remove("esconder");
  paragrafo1.classList.add("conteudo-principal-escrito-paragrafo");
  paragrafo2.classList.add("esconder");
  paragrafo3.classList.add("esconder");
  paragrafo4.classList.add("esconder");
}
function monstrarParagrafo2() {
  paragrafo2.classList.remove("esconder");
  paragrafo2.classList.add("conteudo-principal-escrito-paragrafo");
  paragrafo1.classList.add("esconder");
  paragrafo3.classList.add("esconder");
  paragrafo4.classList.add("esconder");
}
function monstrarParagrafo3() {
  paragrafo3.classList.remove("esconder");
  paragrafo3.classList.add("conteudo-principal-escrito-paragrafo");
  paragrafo1.classList.add("esconder");
  paragrafo2.classList.add("esconder");
  paragrafo4.classList.add("esconder");
}
function monstrarParagrafo4() {
  paragrafo4.classList.remove("esconder");
  paragrafo4.classList.add("conteudo-principal-escrito-paragrafo");
  paragrafo1.classList.add("esconder");
  paragrafo2.classList.add("esconder");
  paragrafo3.classList.add("esconder");
}
function start() {
  const audio = document.querySelector("audio");
  if (count == 0) {
    count = 1;
    audio.play();
    audio.volume = 0.3;
  } else {
    count = 0;
    audio.pause();
  }
}
const Menu = document.getElementById("btn-mobile");
      
        function alternarMenu() {
          const nav = document.getElementById("nav");
          nav.classList.toggle("ativo");
        }
        Menu.addEventListener("click", alternarMenu);
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */