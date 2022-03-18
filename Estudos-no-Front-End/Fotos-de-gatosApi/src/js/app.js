const botao = document.getElementById("button");
function mudarFoto(){
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      document.getElementById("h").innerHTML = `ID: ${json[0].id}`;
      document.getElementById("img").src = json[0].url;
    });
};
botao.addEventListener("click", (e) => {
  e.preventDefault();
  mudarFoto();
});
mudarFoto();
