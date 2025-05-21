const questions = [
  {
    question: "¿Cuál de estas es una buena práctica en internet",
    options: {
      A: "Descargar programas desconocidos",
      B: "Hacer click en cualquier enlace",
      C: "Verificar si un sitio web es seguro antes de usarlo",
      D: "Todo en internet es seguro, no hay riesgo",
    },
    correct: "C",
    icons: ["bx-bug", "bx-brain", "bx-book", "bx-box"],
  },
  {
    question: "¿Qué hace el procesador en una computadora?",
    options: {
      A: "Almacena fotos",
      B: "Enfría el sistema",
      C: "Ejecuta instrucciones y procesos",
      D: "Controla el brillo de la pantalla",
    },
    correct: "C",
    icons: ["bx-cloud", "bx-code", "bx-cube", "bx-data"],
  },
  {
    question: "¿Para qué sirve la memoria RAM?",
    options: {
      A: "Para guardar archivos permanentemente",
      B: "Para hacer que los programas funcionen más rapido mientras están abiertos",
      C: "Para mostrar imagenes",
      D: "Para conectar a internet",
    },
    correct: "B",
    icons: ["bx-leaf", "bx-lock", "bx-laptop", "bx-link"],
  },
  {
    question: "¿Cuál en la función del disco duro?",
    options: {
      A: "Procesar datos",
      B: "Controlar los ventiladores",
      C: "Almacenar información a largo plazo",
      D: "Mejorar la calidad del sonido",
    },
    correct: "C",
    icons: ["bx-user", "bx-video", "bx-volume-full", "bx-wifi"],
  },
  {
    question: "¿Cuál componente muestra la imagen del computador?",
    options: {
      A: "Teclado",
      B: "Monitor",
      C: "Mouse",
      D: "Fuente de poder",
    },
    correct: "B",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Cómo se llama el dispositivo que usamos para mover el cursor en la pantalla?",
    options: {
      A: "Bocina",
      B: "Monitor",
      C: "Mouse/Raton",
      D: "Impresora",
    },
    correct: "C",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Qué parte del computador guarda la información, aunque lo apagues?",
    options: {
      A: "RAM",
      B: "Ventilador",
      C: "Fuente de poder",
      D: "Disco duro"
    },
    correct: "D",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Qué diferencia hay entre teclado y mouse?",
    options: {
      A: "El teclado permite escribir y el mouse mover el cursor",
      B: "El mouse escribe textos, el teclado no",
      C: "El teclado guarda archivos, el mouse no",
      D: "Son exactament iguales"
    },
    correct: "A",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Cuál es el componente que mantiene frios los circuitos del computador?",
    options: {
      A: "Disco duro",
      B: "Ventilador",
      C: "Procesador",
      D: "RAM"
    },
    correct: "B",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Qué sucede si una computadora no tiene fuente de poder o está dañada?",
    options: {
      A: "No podrá conectarse a internet",
      B: "No podrá encender ni funcionar",
      C: "No podrá reproducir sonidos",
      D: "No se verá la imagen en el monitor"
    },
    correct: "B",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Cuál es la relación entre el procesador y la tarjeta madre?",
    options: {
      A: "El procesador controla la tarjeta madre",
      B: "La tarjeta madre almancena programas del procesador",
      C: "La tarjeta madre sostiene y conecta el procesador con otros componentes",
      D: "No tiene relacion entre sí"
    },
    correct: "C",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Qué función cumple el disipador de calor dentro del computador?",
    options: {
      A: "Incrementar la velocidad del internet",
      B: "Entriar el procesador evitando sobrecalentamiento",
      C: "Almacenar información",
      D: "Mejorar la calidad del sonido"
    },
    correct: "B",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Qué componenten se encarga de procesar los gráficos y video de alta calidad?",
    options: {
      A: "Fuente de poder",
      B: "Memoria RAM",
      C: "Disco duro",
      D: "Tarjeta gráfica(GPU)"
    },
    correct: "D",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Por qué es importante que los componentes estén bien conectados a la tarjeta madre?",
    options: {
      A: "Porque así se ven más organizados",
      B: "Para que no se caigan dentro del gabinete",
      C: "Para asegurar la comicacion y el funcionamienot del sistema",
      D: "Porque mejora la velocidad del internet"
    },
    correct: "C",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Qué diferencia clave existe entre SSD y HDD?",
    options: {
      A: "El HDD es mas nuevo que el SSD",
      B: "El SSD es más lento pero más barato",
      C: "El SSD es más rápido, silenciosos y no tiene partes móviles",
      D: "El HDD no almacena datos"
    },
    correct: "C",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
  {
    question: "¿Qué ocurriría si la memoria RAM tiene una falla?",
    options: {
      A: "Podrían haber errores, lentitud o reinicios inesperados",
      B: "El computador se apagará completamente",
      C: "la computadora funcionará igual pero sin internet",
      D: "Solo dejará de funcionar el teclado"
    },
    correct: "A",
    icons: ["bx-home", "bx-heart", "bx-happy", "bx-hash"],
  },
];

let currentQuestion = 0;
let correctAnswers = 0;

const optionsContainer = document.getElementById("optionsContainer");
const resultText = document.getElementById("resultText");


const renderQuestion = () => {
  resultText.textContent = "";
  optionsContainer.innerHTML = "";

  if (correctAnswers >= 5) {
    alert("🎉 ¡Felicidades! Has respondido correctamente las 5 preguntas.");
    window.location.href = "Logros.html";
    return;
  }

  const quiz = questions[currentQuestion];
  //renderizar la pregunta
  document.getElementById("questionText").innerHTML = `<b>${quiz.question}</b>`;
  document.getElementById("optionA").innerHTML = `<i>A) ${quiz.options.A}</i>`;
  document.getElementById("optionB").innerHTML = `<i>B) ${quiz.options.B}</i>`;
  document.getElementById("optionC").innerHTML = `<i>C) ${quiz.options.C}</i>`;
  document.getElementById("optionD").innerHTML = `<i>D) ${quiz.options.D}</i>`;

  // Crear los botones
  ["A", "B", "C", "D"].forEach((letter, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `<i class="bx ${quiz.icons[index]}"></i><span>${letter}</span>`;
    div.onclick = () => checkAnswer(letter);
    optionsContainer.appendChild(div);
  });
};

const checkAnswer = (selected) => {
  const isCorrect = selected === questions[currentQuestion].correct;
  if (isCorrect) {
    correctAnswers++;
    resultText.textContent = "¡Correcto!";
  } else {
    resultText.textContent = `Incorrecto. La respuesta era ${questions[currentQuestion].correct}`;
  }
  currentQuestion++;

  setTimeout(() => {
    renderQuestion();
  }, 1000);
};

renderQuestion();
