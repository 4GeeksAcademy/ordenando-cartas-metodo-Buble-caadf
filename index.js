let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let iconos = ["♦", "♥", "♠", "♣"]
let cartas = []

let draw = document.querySelector('#draw')
let sort = document.querySelector('#sort')
let contenedor = document.querySelector('.contenedor')

draw.addEventListener('click', generarCartas)
sort.addEventListener('click', generarCartas)

function generarCartas() {
  let card = document.createElement('div')
  card.classList.add('card')

  let iconoarriba = document.createElement('div')
  iconoarriba.classList.add('icono-arriba')
  iconoarriba.innerHTML = '♣'

  let numero = document.createElement('div')
  numero.classList.add('numero')
  numero.innerHTML = 'A'

  let iconoabajo = document.createElement('div')
  iconoabajo.classList.add('icono-abajo')
  iconoabajo.innerHTML = '♣'


  contenedor.appendChild(card)
  card.appendChild(iconoarriba)
  card.appendChild(numero)
  card.appendChild(iconoabajo)



}

let numeroCartas = parseInt(document.getElementbyId('amountcards').value);
for (let i = 0; i < numeroCartas; i++) {

  function generaricono() {
    let numero = Math.floor(Math.random() * iconos.length);
    return numero;
  }

  function generarnumero() {
    let numero = Math.floor(Math.random() * numeros.length);
    return numero;
  }

}

if (icono == "♦" || icono == "♥") {
  iconoarriba.style.color = "red";
  iconoabajo.style.color = "red";
} else {
  iconoarriba.style.color = "black";
  iconoabajo.style.color = "black";
}