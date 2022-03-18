window.onload = function () {
  alert(
    'Para uma melhor experiência antes de clicar em "OK" acione "F11" para a visualização em FullScreen.'
  );
  const aside = document.getElementById("portfolioOpen");
  aside.classList.toggle("ativoP");

  setInterval(myTimer, 4000);
  function myTimer() {
    document.getElementById("ConteinerLoad").style.display = "none";
  }
};

const internetE = document.getElementById("internetE");
internetE.addEventListener("click", () => {
  document.getElementById("erro").style.display = "block";

  setInterval(myTimer, 2500);
  function myTimer() {
    document.getElementById("erroGif").style.display = "block";
  }
});
const terminalTopClosed = document.getElementById("terminalTopClosed");
terminalTopClosed.addEventListener("click", () => {
  document.getElementById("terminal").style.display = "none";
});
const terminal = document.getElementById("powerShel");
terminal.addEventListener("click", () => {
  document.getElementById("terminal").style.display = "block";
});

const gitHub = document.getElementById("gitHub");
gitHub.addEventListener("click", () => {
  window.open("https://github.com/DevArthurSantos");
});

const asideClick = document.getElementById("menu");
asideClick.addEventListener("click", () => {
  const aside = document.getElementById("aside");
  aside.classList.toggle("ativo");
});

const EdgeClick = document.getElementById("Edge");
EdgeClick.addEventListener("click", () => {
  const Edge = document.getElementById("portfolioOpen");
  Edge.classList.toggle("ativoP");
});
const EdgeClick2 = document.getElementById("EdgeBar");
EdgeClick2.addEventListener("click", () => {
  const EdgeHot = document.getElementById("portfolioOpen");
  EdgeHot.classList.toggle("ativoP");
});

const input = document.getElementById("comando");
const comandoRes = document.getElementById("executionP");
const help =
  "<p> sobre: informações do criador do terminal. <br> help: lists de comandos. <br> clear: limpa o terminal</p>";
const newTerminal = document.getElementById("terminalContentInput");

input.addEventListener("change", (event) => {
  event.preventDefault;
  let comando = input.value.toLowerCase();

  if (comando === "help") {
    comandoRes.innerHTML = help + "<br>" + newTerminal.innerHTML;
  } else if (comando === "sobre") {
    comandoRes.innerHTML = "<p>Arthur Dos Santos</p>" + newTerminal.innerHTML;
  } else if (comando === "clear") {
    comandoRes.innerHTML = "<p></p>";
  } else {
    comandoRes.innerHTML =
      '<p style="color: red"> Comando invalido utilize help para mais informações.</p>' +
      newTerminal.innerHTML;
  }
});
