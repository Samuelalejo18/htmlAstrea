<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/ASTREAPHP/Recursos/CSS/Perfil.css"> <!-- Links de estilos -->
</head>
<body>
     <?php include "Plantillas/BarraNavA.php"; ?>

<section class="seccion-perfil-usuario">
        <div class="perfil-usuario-header">
            <div class="perfil-usuario-portada">
                <div class="perfil-usuario-avatar">
                    <img src="imagenes/usuario.png" alt="img-avatar">

                </div>

            </div>
        </div>
    
        <div class="perfil-usuario-body">
            <div class="perfil-usuario-bio">
                <h3 class="titulo">Maria Alejandra De la Cruz</h3>
                <textarea class="bio-edit" placeholder="Escribe tu bio...">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
            </div>
    
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <li>
                        <i class="icono fas fa-map-signs"></i> Direccion de usuario:
                        <input type="text" class="edit-input" placeholder="Escribe tu direccion" value="Calle Ficticia 123">
                    </li>
                    <li>
                        <i class="icono fas fa-phone-alt"></i> Telefono:
                        <input type="tel" class="edit-input" placeholder="Escribe tu telefono" value="+1 234 567 890">
                    </li>
                    <li>
                        <i class="icono fas fa-briefcase"></i> Trabaja en:
                        <input type="text" class="edit-input" placeholder="Escribe tu trabajo" value="Empresa XYZ">
                    </li>
                    <li>
                        <i class="icono fas fa-building"></i> Cargo:
                        <input type="text" class="edit-input" placeholder="Escribe tu cargo" value="Desarrollador">
                    </li>
                </ul>
    
                <ul class="lista-datos">
                    <li>
                        <i class="icono fas fa-map-marker-alt"></i> Ubicacion:
                        <input type="text" class="edit-input" placeholder="Escribe tu ubicacion" value="Ciudad Ficticia">
                    </li>
                    <li>
                        <i class="icono fas fa-calendar-alt"></i> Fecha nacimiento:
                        <input type="date" class="edit-input" value="1990-01-01">
                    </li>
                    <li>
                        <i class="icono fas fa-user-check"></i> Registro:
                        <input type="text" class="edit-input" placeholder="Escribe la fecha de registro" value="2021-06-15">
                    </li>
                    <li>
                        <i class="icono fas fa-share-alt"></i> Redes sociales:
                        <input type="text" class="edit-input" placeholder="Escribe tus redes sociales" value="@maria123">
                    </li>
                </ul>
            </div>
    
            <div class="perfil-usuario-footer-actions">
                <button class="guardar-cambios">Guardar Cambios</button>
            </div>
        </div>
    </section>
    
</body>
</html>