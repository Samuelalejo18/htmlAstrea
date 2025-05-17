<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Astrea | Niveles de Aprendizaje</title>
    <link rel="stylesheet" href="/ASTREAPHP/Recursos/CSS/nivelesAprendizaje.css">
   
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
  </head>
  <body>
     <?php include "Plantillas/BarraNavA.php"; ?>
    
    <main class="main_container">
      <aside class="sidebar">
        <div class="level basic">
          <span class="badge">BASIC LEARNING LEVEL</span>
          <p>Básico</p>
        </div>
        <div class="level medium">
          <span class="badge">INTERMEDIATE LEARNING LEVEL</span>
          <div class="progress-bar"><div class="progress" style="width: 50%;"></div></div>
          <p>Medio</p>
        </div>
        <div class="level advanced">
          <span class="badge">ADVANCED</span>
          <p>Avanzado</p>
        </div>
      </aside>
      <div class="content">
        <h2>Niveles de aprendizaje</h2>
        <div class="levels">
          <div class="level-item" id="level-1" onclick="window.location.href='evaluaciones.html'">
            <span class="icon">⭐</span>
            <span>1</span>
          </div>
          <div class="level-item" id="level-2" onclick="window.location.href='evaluaciones.html'">
            <span class="icon">🖥️</span>
            <span>2</span>
          </div>
          <div class="level-item" id="level-3" onclick="window.location.href='evaluaciones.html'">
            <span class="icon">🔒</span>
            <span>3</span>
          </div>
          <div class="level-item" id="level-4" onclick="window.location.href='Logros.html'">
            <span class="icon">🏆 </span>
            <span>4</span>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
