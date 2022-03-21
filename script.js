let Humano = 0;
let Computadora = 0;
let result
const optionsCPU = ["piedra", "papel", "tijeras"];
let aleatorio = Math.floor(Math.random() * 3);
let eletionCPU = optionsCPU[aleatorio];
//genero las variables

function userPlay() {
  result = String(prompt("Que elegis?")).toLowerCase()

  return result
}
//planteamiento de las elecciones
const fanta = (eleccionUSA, userPlay) => {
  if (
    (result === "piedra" && eleccionUSA === "papel") ||
    (result === "papel" && eleccionUSA === "tijeras") ||
    (result === "tijeras" && eleccionUSA === "piedra")
  ) {
    Computadora++;
    console.log("computadora");
  }
  if (
    (eleccionUSA === "piedra" && result === "papel") ||
    (eleccionUSA === "papel" && result === "tijeras") ||
    (eleccionUSA === "tijeras" && result === "piedra")
  ) {
    Humano++;
    console.log("humano");
  }
  if (eleccionUSA === result) {
    console.log("empate");
  }
};
function game() {
    for (let index = 0; index<5; index++) {
      fanta(eletionCPU, userPlay());
    }
    if (Humano>Computadora) {
      return console.log("EL HUMANO GANO ");
    }
    if (Computadora>Humano){
      return console.log("La maquina gano")
    }
    if (Computadora === Humano) {
      return console.log("EMPATE   ");
    }
  }
  game();