const pintas = ["corazon", "diamante", "pica", "trebol"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let pintaArriba = document.querySelector("#top-suit");
let number = document.querySelector("#number");
let pintaAbajo = document.querySelector("#bottom-suit");

function eleccionCard(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}
function asignarColor(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    pintaArriba.style.color = "red";
    number.style.color = "red";
    pintaAbajo.style.color = "red";
  } else {
    pintaArriba.style.color = "black";
    number.style.color = "black";
    pintaAbajo.style.color = "black";
  }
}
function asignarPinta(arr) {
  if (arr[0] === "corazon") {
    pintaArriba.innerHTML = "♥";
    pintaAbajo.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    pintaArriba.innerHTML = "♦";
    pintaAbajo.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    pintaArriba.innerHTML = "♣";
    pintaAbajo.innerHTML = "♣";
  } else {
    pintaArriba.innerHTML = "♠";
    pintaAbajo.innerHTML = "♠";
  }
}
function asignarValor(arr) {
  number.innerHTML = arr[1];
}
function generacionCard() {
  let card = eleccionCard(pintas, valores);
  asignarColor(card);
  asignarPinta(card);
  asignarValor(card);
}

window.onload = function() {
  generacionCard();
};
document.querySelector(".btn").addEventListener("click", generacionCard);
