<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="CSS/Menu.css">
    
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"  /> 

      <link rel="stylesheet" href="/ASTREAPHP/Recursos/CSS/EstiloFormulario.css">

    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
</head>
<body>   


 <div class="foto" id="imagen-logo"><img src="/ASTREAPHP/Recursos/imagenes/LogotipoA.png" alt=""></div>


 <style>
        body{
            background: rgb(197,184,228);
            background: linear-gradient(90deg, rgba(197,184,228,0.958420868347339) 0%, rgba(169,139,189,0.804359243697479) 35%, rgba(236,160,255,1) 100%);
            
        }
    </style>




        <!--Inicio de formulario de registro-->
        <main>
            <div class="contenedor__todo">
                <div class="caja__trasera">
                    <div class="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrarse para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>
        
                <div class="contenedor__login-register">
                    <form action="" class="formulario__login" id="formulario-login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" id="login-email" placeholder="Correo Electronico">
                        <div class="error" id="error-email"></div>
                        <input type="password" id="login-password" placeholder="Contraseña">
                        <div class="error" id="error-password"></div>
                        <button type="submit">Entrar</button>
                    </form>
        
                    <form action="" class="formulario__register" id="formulario-register">
                        <h2>Regístrarse</h2>
                        <input type="text" id="nombre" placeholder="Nombre completo">
                        <div class="error" id="error-nombre"></div>
                        <input type="text" id="email" placeholder="Correo Electronico">
                        <div class="error" id="error-email-register"></div>
                        <input type="date" id="fecha-nacimiento" placeholder="Fecha de nacimiento">
                        <div class="error" id="error-fecha"></div>
                        <input type="password" id="password" placeholder="Contraseña">
                        <div class="error" id="error-password-register"></div>
                        <button type="submit">Regístrarse</button>
                    </form>
                </div>
            </div>
        </main>

        <!--Fin de formulario de registro-->
        <script src="/ASTREAPHP/Recursos/JS/vsl.js"></script>
    
</body>
</html>