const palabras = [
  { palabra: "ASTREA", pista: "Nombre del juego", categoria: "General" },
  { palabra: "LUNA", pista: "Satélite natural de la Tierra", categoria: "Astronomía" },
  { palabra: "MARIPOSA", pista: "Insecto con alas coloridas", categoria: "Naturaleza" },
  { palabra: "PYTHON", pista: "Lenguaje de programación popular", categoria: "Tecnología" },
  { palabra: "GALAXIA", pista: "Sistema masivo de estrellas", categoria: "Astronomía" },
];

let palabraActual = "";
let pistaActual = "";
let categoriaActual = "";
let letrasAdivinadas = new Set();
let errores = 0;
let maxErrores = 6;
let puntuacion = 0;

const clueText = document.getElementById("clueContainer"); // Corregido aquí
const categoryContainer = document.getElementById("categoryContainer");
const wordDisplay = document.getElementById("wordDisplay");
const keyboard = document.getElementById("keyboard");
const status = document.getElementById("status");
const errorsContainer = document.getElementById("errorsContainer");
const scoreContainer = document.getElementById("scoreContainer");

function elegirPalabra() {
  const index = Math.floor(Math.random() * palabras.length);
  const obj = palabras[index];
  palabraActual = obj.palabra.toUpperCase();
  pistaActual = obj.pista;
  categoriaActual = obj.categoria;
}

function mostrarPistaYCategoria() {
  clueText.textContent = `Pista: ${pistaActual}`;
  categoryContainer.textContent = `Categoría: ${categoriaActual}`;
}

function mostrarPalabra() {
  let display = "";
  for (let letra of palabraActual) {
    if (letrasAdivinadas.has(letra)) {
      display += letra + " ";
    } else {
      display += "_ ";
    }
  }
  wordDisplay.textContent = display.trim();
}

function crearTeclado() {
  keyboard.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
    const letra = String.fromCharCode(i);
    const button = document.createElement("button");
    button.textContent = letra;
    button.addEventListener("click", () => manejarIntento(letra, button));
    keyboard.appendChild(button);
  }
}

function manejarIntento(letra, button) {
  if (palabraActual.includes(letra)) {
    letrasAdivinadas.add(letra);
    mostrarPalabra();
    status.textContent = "¡Muy bien!";
    status.style.color = "green";
    puntuacion += 10;
  } else {
    errores++;
    errorsContainer.textContent = `Errores: ${errores} / ${maxErrores}`;
    status.textContent = "¡Fallaste!";
    status.style.color = "red";
    button.disabled = true;
  }
  scoreContainer.textContent = `Puntuación: ${puntuacion}`;

  if (errores >= maxErrores) {
    status.textContent = `Perdiste. La palabra era: ${palabraActual}`;
    deshabilitarTeclado();
  } else if (palabraCompleta()) {
    status.textContent = "¡Ganaste!";
    status.style.color = "blue";
    puntuacion += 50;
    scoreContainer.textContent = `Puntuación: ${puntuacion}`;
    deshabilitarTeclado();
  }
}

function palabraCompleta() {
  for (let letra of palabraActual) {
    if (!letrasAdivinadas.has(letra)) {
      return false;
    }
  }
  return true;
}

function deshabilitarTeclado() {
  const botones = keyboard.querySelectorAll("button");
  botones.forEach((btn) => (btn.disabled = true));
}

function startGame() {
  letrasAdivinadas.clear();
  errores = 0;
  puntuacion = 0;
  elegirPalabra();
  mostrarPistaYCategoria();
  mostrarPalabra();
  errorsContainer.textContent = `Errores: 0 / ${maxErrores}`;
  scoreContainer.textContent = `Puntuación: 0`;
  status.textContent = "";
  crearTeclado();
}

// Listener para reiniciar el juego
document.getElementById("restart").addEventListener("click", startGame);

window.onload = startGame;

// Si no usas esta función, la puedes eliminar o arreglar
function endGame(win) {
  Array.from(keyboard.children).forEach(b => b.disabled = true);

  if (win) {
    status.style.color = "#00aa00";
    status.textContent = "¡Ganaste!  Presiona reiniciar para jugar otra vez.";

  } else {
    status.style.color = "red";
    status.textContent = `Perdiste. La palabra era: ${palabraActual}. Intenta de nuevo.`;


  }
}
