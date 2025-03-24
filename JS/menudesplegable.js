const Barras= document.getElementById("barras-lat");

const BarraReducida=document.querySelector(".menu-desplegable");

Barras.addEventListener("click",()=>{
    BarraReducida.classList.toggle('Reducir-menu');
});