const Desplegar=document.getElementById('Desplegar');
const BarraDesplegada =document.querySelector(".barra_lateral");
const spans =document.querySelectorAll("span");

Desplegar.addEventListener("click",()=>{
    BarraDesplegada.classList.toggle("mini_barra");
    spans.forEach((span)=>{
        span.classList.toggle("ocultar");
    });
});