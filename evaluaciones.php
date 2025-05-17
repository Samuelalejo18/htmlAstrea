<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="/ASTREAPHP/Recursos/CSS/Estiloevaluaciones.css">
    


    <title>Evaluaciones</title>
</head>
<body>
  <?php include "Plantillas/BarraNavA.php"; ?>
    
    <main>
        <div class="content">
            <h2>Evaluaciones Disponibles</h2>
            <div id="evaluaciones-container"></div>
        </div>
    </main>
    <script>
        const niveles = 6;
        const evaluacionesPorNivel = 2;
        const container = document.getElementById("evaluaciones-container");

        for (let nivel = 1; nivel <= niveles; nivel++) {
            let nivelDiv = document.createElement("div");
            let titulo = document.createElement("h3");
            titulo.innerText = `Nivel ${nivel}`;
            nivelDiv.appendChild(titulo);
            
            for (let i = 1; i <= evaluacionesPorNivel; i++) {
                let evalDiv = document.createElement("div");
                evalDiv.classList.add("evaluacion");
                if (nivel > 1) evalDiv.classList.add("disabled");

                evalDiv.innerHTML = `
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9Psh4BCsBkIELf3SmfJikyEgWeAARxB3Jg&s" alt="Imagen">
                    <div class="info">
                        <strong>Evaluación ${String.fromCharCode(64 + (nivel - 1) * evaluacionesPorNivel + i)}</strong><br>
                        Objetivo de la evaluación<br>
                        Fecha de realización: 00/00/0000
                    </div>
                    <input type="checkbox" class="nivel-${nivel}" ${nivel > 1 ? "disabled" : ""}>
                `;
                nivelDiv.appendChild(evalDiv);
            }
            container.appendChild(nivelDiv);
        }

        function unlockNextLevel(nivel) {
            const checks = document.querySelectorAll(`.nivel-${nivel}`);
            if (Array.from(checks).every(c => c.checked)) {
                const nextLevel = document.querySelectorAll(`.nivel-${nivel + 1}`);
                nextLevel.forEach(cb => {
                    cb.disabled = false;
                    cb.parentElement.classList.remove("disabled");
                });
            }
        }

        for (let nivel = 1; nivel < niveles; nivel++) {
            document.querySelectorAll(`.nivel-${nivel}`).forEach(checkbox => {
                checkbox.addEventListener("change", () => unlockNextLevel(nivel));
            });
        }
    </script>
   
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" ></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" ></script>
</body>
</html>
