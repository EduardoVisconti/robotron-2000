const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

/*

const button = document.querySelectorAll('[data-Aluratintas]')
button.forEach(element => element.addEventListener('click', (event) => {
    if (event.target.dataset.mostratinta == 'mostra') return document.querySelector('.lista').style.display = 'block'
    document.querySelector('.lista').style.display = 'none'
}));

----

const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

*/