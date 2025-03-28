document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}



/*Validacion de datos colocados en los formularios de registro de info*/ 

document.addEventListener("DOMContentLoaded", () => {
    const formularioLogin = document.getElementById('formulario-login');
    const formularioRegister = document.getElementById('formulario-register');

    // Validar formulario de login
    formularioLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        let emailLogin = document.getElementById('login-email').value;
        let passwordLogin = document.getElementById('login-password').value;
        let formValid = true;

        // Limpiar errores previos
        limpiarErrores();

        // Validaciones de login
        if (!validarCorreo(emailLogin)) {
            mostrarError('login-email', 'Por favor, ingresa un correo electrónico válido.');
            formValid = false;
        }

        if (!validarContraseña(passwordLogin)) {
            mostrarError('login-password', 'La contraseña debe contener letras, números y caracteres especiales.');
            formValid = false;
        }

        if (formValid) {
            alert("Iniciar sesión exitoso.");
        }
    });

    // Validar formulario de registro
    formularioRegister.addEventListener('submit', function (e) {
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let fechaNacimiento = document.getElementById('fecha-nacimiento').value;
        let password = document.getElementById('password').value;
        let formValid = true;

        // Limpiar errores previos
        limpiarErrores();

        // Validaciones de registro
        if (!validarNombre(nombre)) {
            mostrarError('nombre', 'El nombre solo puede contener letras.');
            formValid = false;
        }

        if (!validarCorreo(email)) {
            mostrarError('email', 'Por favor, ingresa un correo electrónico válido.');
            formValid = false;
        }

        if (!validarFechaNacimiento(fechaNacimiento)) {
            mostrarError('fecha-nacimiento', 'Por favor, ingresa una fecha de nacimiento válida.');
            formValid = false;
        }

        if (!validarContraseña(password)) {
            mostrarError('password', 'La contraseña debe contener letras, números y caracteres especiales.');
            formValid = false;
        }

        if (formValid) {
            alert("Registro exitoso.");
        }
    });

    // Función para mostrar el mensaje de error junto al campo
    function mostrarError(idCampo, mensaje) {
        const campo = document.getElementById(idCampo);
        const errorDiv = document.getElementById('error-' + idCampo);

        campo.classList.add('error');  // Resalta el campo en rojo
        errorDiv.textContent = mensaje; // Muestra el mensaje de error
    }

    // Función para limpiar los errores de los campos
    function limpiarErrores() {
        const campos = document.querySelectorAll('input');
        campos.forEach(campo => {
            campo.classList.remove('error');
        });

        const errores = document.querySelectorAll('.error');
        errores.forEach(error => {
            error.textContent = '';
        });
    }

    // Función para validar el nombre (solo letras)
    function validarNombre(nombre) {
        const regex = /^[A-Za-z\s]+$/; // Solo letras y espacios
        return regex.test(nombre);
    }

    // Función para validar el correo
    function validarCorreo(correo) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(correo);
    }

    // Función para validar la fecha de nacimiento
    function validarFechaNacimiento(fecha) {
        const fechaActual = new Date();
        const fechaNacimiento = new Date(fecha);
        return fechaNacimiento < fechaActual; // La fecha de nacimiento debe ser anterior a la fecha actual
    }

    // Función para validar la contraseña (debe contener letras, números y caracteres especiales)
    function validarContraseña(contraseña) {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;"\'<>,.?/]).{6,20}$/;
        return regex.test(contraseña);
    }
});