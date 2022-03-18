import api from "./api.js";

const {
  data: { photos },
} = await api.get("curated", {
  params: {
    page: 2,
    per_page: 100,
  },
});

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const img = document.getElementById("img");
const h1 = document.getElementById("h1");
h1.innerText = `Nome: ${photos[0].alt}`;
img.src = photos[0].src.large;
let i = 0;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (i < photos.length - 1) {
    ++i;
  }
  h1.innerText = `Nome: ${photos[i].alt}`;
  img.src = photos[i].src.large;
});
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  if (i > 0) {
    --i;
  }
  h1.innerText = `Nome: ${photos[i].alt}`;
  img.src = photos[i].src.large;
});
