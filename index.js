let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let iconos = ["♦", "♥", "♠", "♣"]
let cartas = []

let draw = document.querySelector('#draw')
let sort = document.querySelector('#sort')
let contenedor = document.querySelector('.contendor')

draw.addEventListener('click', generarCartas)
sort.addEventListener('click', generarCartas)

function generarCartas () {
let card = document.createElement("div");
card.className = "card";
let iconoArriba = document.createElement("div");
iconoArriba.className = "icono-arriba";
let iconoAbajo = document.createElement("div");
iconoAbajo.className = "icono-abajo";
let cardnumero = document.createElement("div");
cardnumero.className = "numero";



iconoArriba.classList.add()
iconoAbajo.classList.add()
cardnumero.classList.add()

contenedor.appenChild()
}


function generariconos() {
    let numero = Math.floor(Math.random() * iconos.length);
    return numero;
  }

  function generarnumeros() {
    let numero = Math.floor(Math.random() * iconos.length);
    return numero;
  }

  