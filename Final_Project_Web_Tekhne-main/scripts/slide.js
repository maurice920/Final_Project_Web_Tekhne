const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   

// Ventana Emergente PLATILLOS
function abrirModal(elemento) {
    // console.log(elemento);
    
    const modal = elemento.parentElement.querySelector(".modal"); // Encuentra el modal dentro del mismo contenedor
    console.log(modal);
    
    modal.style.display = "block"; // Muestra el modal
}

function cerrarModal(elemento) {
    const modal = elemento.closest(".modal"); // Encuentra el modal más cercano
    modal.style.display = "none"; // Oculta el modal
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    // console.log(modal);
    if (event.target.classList.value == 'modal') {
        event.target.style.display = "none";
    }
}