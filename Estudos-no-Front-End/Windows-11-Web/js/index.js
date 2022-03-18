window.onload = function () {
  alert(
    'Para uma melhor experiência antes de clicar em "OK" acione "F11" para a visualização em FullScreen.'
  );
  const aside = document.querySelector("#portfolioOpen");
  aside.classList.toggle("ativoP");
  
  setInterval(myTimer, 4000);
  function myTimer() {
    document.querySelector("#ConteinerLoad").style.display = "none";
  }
};

const internetE = document.querySelector("#internetE");
internetE.addEventListener("click", () => {
  document.querySelector("#erro").style.display = "block";

  setInterval(myTimer, 2500);
  function myTimer() {
    document.querySelector("#erroGif").style.display = "block";
  }
});

const powerShel = document.querySelector("#powerShel");
powerShel.addEventListener("click", () => {
  document.querySelector("#powerShelGif").style.display = "block";

  setInterval(myTimer, 3000);
  function myTimer() {
    document.querySelector("#powerShelGif").style.display = "none";
  }
});

const gitHub = document.querySelector("#gitHub");
gitHub.addEventListener("click", () => {
  window.open("https://github.com/DevArthurSantos");
});

const asideClick = document.querySelector("#menu");
asideClick.addEventListener("click", () => {
  const aside = document.querySelector("#aside");
  aside.classList.toggle("ativo");
});

const EdgeClick = document.querySelector("#Edge");
EdgeClick.addEventListener("click", () => {
  const Edge = document.querySelector("#portfolioOpen");
  Edge.classList.toggle("ativoP");
});
const EdgeClick2 = document.querySelector("#EdgeBar");
EdgeClick2.addEventListener("click", () => {
  const EdgeHot = document.querySelector("#portfolioOpen");
  EdgeHot.classList.toggle("ativoP");
});





