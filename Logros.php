<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ASTREAPHP/Recursos/CSS/Logros.css"> <!-- Links de estilos -->
    <title>Document</title>
</head>
<body>

 <?php include "Plantillas/BarraNavA.php"; ?>

    <!-- Generación de niveles y logros -->
    <script>
       for (let level = 1; level <= 6; level++) {
            document.write(`<div class='level' id='level${level}'>`);
            document.write(`<h2>Nivel ${level}</h2>`);
            document.write(`<div class='achievements-container'>`);
            
            for (let ach = 1; ach <= 14; ach++) {
                document.write(`
                    <div class='achievement-wrapper'>
                        <div class='achievement' id='lvl${level}-ach${ach}'>
                            <img src='/ASTREAPHP/Recursos/imagenes/Captura.PNG' alt='Logro ${ach}'>
                        </div>
                        <button onclick="unlockAchievement('lvl${level}-ach${ach}')">Desbloquear</button>
                    </div>
                `);
            }
            
            document.write(`</div>`);
            document.write(`</div>`);
        }
    </script>


<!--- Script de uso --->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" ></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" ></script>
<script src='/ASTREAPHP/Recursos/JS/BarraB_desp.js'></script>
    
</body>
</html>