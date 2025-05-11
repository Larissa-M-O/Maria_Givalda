// js/script.js

let indiceAtual = 0;
const itens = document.querySelectorAll('.carrossel .item');

function mostrarSlide(n) {
  itens.forEach((item, i) => {
    item.style.display = (i === n) ? 'block' : 'none';
  });
}

function mudarSlide(n) {
  indiceAtual += n;
  if (indiceAtual >= itens.length) indiceAtual = 0;
  if (indiceAtual < 0) indiceAtual = itens.length - 1;
  mostrarSlide(indiceAtual);
}

function abrirTelaCheia(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}

mostrarSlide(indiceAtual);
