const elemento = document.querySelector('#calcular')
const resultado = document.querySelector('.resultado')

elemento.addEventListener('click', evento => {
  resultado.innerHTML = 'Fui clicado'
})

/*
const botao = document.getElementById('calcular')

botao.addEventListener('click', function () {
  alert('Fui clicado!')
})
*/
