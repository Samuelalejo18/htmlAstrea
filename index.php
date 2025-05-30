<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/ASTREAPHP/Recursos/CSS/EstilosHome.css"> <!-- Links de estilos -->
</head>
<body>
 <?php include "Plantillas/BarraNavB.php"; ?>
   <header>

         <div class="contenedor head">
            <h1 class="titulo">Convertimos tus ideas en una realidad</h1>
            <p class="copy">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        
    </header>
    <main>
        <section class="services contenedor" id="servicio">
            <h2 class="subtitulo">Nuestro servicio</h2>
            <div class="contenedor-servicio">
                <img src="/ASTREAPHP/Recursos/Imagenes/LogoTextos.png" alt="">
                <div class="checklist-servicio">
                    <div class="service">
                        <h3 class="n-service"><span class="number">1</span>Diseño web</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem enim illum dolorum nisi. Aspernatur.</p>
                    </div>
                    <div class="service">
                        <h3 class="n-service"><span class="number">2</span>Diseño web</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem enim illum dolorum nisi. Aspernatur.</p>
                    </div>
                    <div class="service">
                        <h3 class="n-service"><span class="number">3</span>Diseño web</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem enim illum dolorum nisi. Aspernatur.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="gallery" id="galeria">
            <div class="contenedor">
                <h2 class="subtitulo">Galeria</h2>
                <div class="contenedor-galeria">
                    <img src="img/uno.jpg" class="img-galeria" alt="Hola">
                    <img src="img/dos.jpg" class="img-galeria" alt="">
                    <img src="img/tres.jpg" class="img-galeria" alt="">
                    <img src="img/cuatro.jpg" class="img-galeria" alt="">
                    <img src="img/cinco.jpg" class="img-galeria" alt="">
                    <img src="img/seis.jpg" class="img-galeria" alt="">
                </div>
            </div>
        </section>
        <div class="imagen-light">
            <img src="img/close.svg" alt="" class="close">
            <img src="" alt="" class="agregar-imagen">
        </div>
        <section class="contenedor" id="expertos">
            <h2 class="subtitulo">Expertos en:</h2>
            <section class="experts">
                <div class="cont-expert">
                    <img src="img/pie_chart.svg" alt="">
                    <h3 class="n-expert">Analytics</h3>
                </div>
                <div class="cont-expert">
                    <img src="img/search_engine.svg" alt="">
                    <h3 class="n-expert">SEO</h3>
                </div>
                <div class="cont-expert">
                    <img src="img/security.svg" alt="">
                    <h3 class="n-expert">Security</h3>
                </div>
            </section>
        </section>
    </main>

    <footer id="footer">
        <div class="contenedor footer-content">
                <div class="contact-us">
                    <h2 class="brand">Astrea</h2>
                    <p>Somos expertos en enseñarte de manera divertida</p>
                </div>
                <div class="social-media">
                    <a href="./" class="social-media-icon">
                        <i class='bx bxl-facebook'></i>
                    </a>
                    <a href="./" class="social-media-icon">
                        <i class='bx bxl-twitter' ></i>
                    </a>
                    <a href="./" class="social-media-icon">
                        <i class='bx bxl-instagram' ></i>
                    </a>
                </div>
        </div>
        <div class="line"></div>
    </footer>
    
</body>
</html>