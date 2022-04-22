/*Obtener resultado de input en inicio*/
const boton = document.querySelector("#botonInicio");
// Agregar listener
boton.addEventListener("click", function(evento){
    debugger
	let input = document.querySelector("#texto").value; 
    if (input === 'Laura' || input === 'laura') {
        window.location.href = location.origin + 'Portafolio/inicio.html';
    } else {
        alert('Ups! Fallaste, pero ánimo, sigue intentando!')
    }
});


/* const inicio = new Vue({
    el: '#inicio',
    data: {
        titulo: '¡Hola! Soy Laura Agudelo.',
    }
}) */