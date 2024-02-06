let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let iconos = ["♦", "♥", "♠", "♣"]
let cartas = []

let draw = document.querySelector('#draw')
let sort = document.querySelector('#sort')
let contenedor = document.querySelector('.contenedor')
let cartasOrdenadas = document.querySelector ('.cartasOrdenadas')

draw.addEventListener('click', generarCartas)
sort.addEventListener('click', ordenarcartas)


function generaricono() {
  let numero = Math.floor(Math.random() * iconos.length);
  return numero;
}

function generarnumero() {
  let numero = Math.floor(Math.random() * numeros.length);
  return numero;
}


function generarCartas() {
  let numeroCartas = parseInt(document.getElementById('amountcards').value);

  contenedor.innerHTML = "";
  cartas = [] 

  for (let i = 0; i < numeroCartas; i++) {
    let icono = iconos[generaricono()]
    let num = numeros[generarnumero()]
    let carta = { icono: icono, num: num}
    cartas.push(carta)
    let card = document.createElement('div')
    card.classList.add('card')

    let iconoarriba = document.createElement('div')
    iconoarriba.classList.add('icono-arriba')
    iconoarriba.innerHTML = icono

    let numero = document.createElement('div')
    numero.classList.add('numero')
    numero.innerHTML = num

    let iconoabajo = document.createElement('div')
    iconoabajo.classList.add('icono-abajo')
    iconoabajo.innerHTML = icono


    contenedor.appendChild(card)
    card.appendChild(iconoarriba)
    card.appendChild(numero)
    card.appendChild(iconoabajo)

    if (icono == "♦" || icono == "♥") {
      iconoarriba.style.color = "red";
      iconoabajo.style.color = "red";
    } else {
      iconoarriba.style.color = "black";
      iconoabajo.style.color = "black";
    }

  }
  console.log(cartas)
}

function ordenarcartas () {
  bubbleSort ([...cartas])
  
}


function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
       
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

      } const temp = array[j].innerHTML;
      array[j].innerHTML = cards[j + 1].innerHTML;
      array[j + 1].innerHTML = temp;

    }
  }
  return array;
}