//cover hiden
setTimeout(() => {
  document.getElementById(`netflixCoverSection`).style.display = `none`;
  document.getElementById(`logoHeader`).style.display = `block`;
  document.getElementById(`logoHeader`).style.zIndex = `3`;
}, 5500);
(function red() {
  document.getElementById(`Header`).style.display = `none`;
  document.getElementById(`conteinerMain`).style.display = `none`;
})();
function perfilHidden() {
  setTimeout(() => {
    document.getElementById(`netflixHomeSection`).style.display = `none`;
    document.getElementById(`conteinerMain`).style.display = `block`;
    document.getElementById(`Header`).style.display = `flex`;
  }, 5000);
}
const perfil = document.querySelectorAll(`.perfilsLogo`);
const perfilAtual = document.getElementById(`perfilAtual`);
const perfilNome = document.getElementById(`perfilNome`);
const perfilLogo = document.getElementById(`perfilLogo`);
const alterarPerfil = document.getElementById(`perfilLogo`);

perfil[0].addEventListener(`click`, () => {
  perfilAtual.innerHTML = `<h3>Bem Vindo Arthur</h3><br>Loading...`;
  perfilNome.innerHTML = `Arthur`;
  perfilLogo.src = `./img/Perfil1.gif`;
  perfilAtual.style.border = `none`;
  perfilHidden();
});
perfil[1].addEventListener(`click`, () => {
  perfilAtual.innerHTML = `<h3>Bem Vindo Gabrielle</h3><br>Loading...`;
  perfilNome.innerHTML = `Gabrielle`;
  perfilLogo.src = `./img/Perfil2.png`;
  perfilAtual.style.border = `none`;
  perfilHidden();
});
perfil[2].addEventListener(`click`, () => {
  perfilAtual.innerHTML = `<h3>Bem Vindo Zusk</h3><br>Loading...`;
  perfilNome.innerHTML = `Zusk`;
  perfilLogo.src = `./img/Perfil3.gif`;
  perfilAtual.style.border = `nene`;
  perfilHidden();
});
perfil[3].addEventListener(`click`, () => {
  perfilAtual.innerHTML = `<h2>Bem Vindo Lalinha</h2><br>Loading...`;
  perfilNome.innerHTML = `Lalinha`;
  perfilLogo.src = `./img/Perfil4.png`;
  perfilAtual.style.border = `none`;
  perfilHidden();
});
perfil[4].addEventListener(`click`, () => {
  alert(`Perfil Adicionado`);
});

alterarPerfil.addEventListener(`click`, () => {
  document.getElementById(`conteinerMain`).style.display = `none`;
  document.getElementById(`netflixHomeSection`).style.display = `block`;
  document.getElementById(`Header`).style.display = `none`;
  perfilAtual.innerHTML = `<h2>Quem vai assitir agora ?</h2><br>`;
});
