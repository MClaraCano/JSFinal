
//da funcionalidad al botón, asociadno con function
let btnCalcular = document.getElementById('calcularBtn')
btnCalcular.addEventListener('click', calculcar)

let precio = 200


function calculcar(){
    let resultado
    //convierto a num el valor String tomado de CANTIDAD
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categorias").value;
    let total = precio * cantidad;
    let descJubilados = total*0.80;
    let descEfectivo = total*0.50;
    let descCripto = total*0.20;
    let contenidoCajita = document.getElementById("cajita");

    // si CANTIDAD es distinto de NaN... (es decir, no está vacío ni tiene letras)
    if(!isNaN(cantidad)){

    switch(categoria) {
        case '1':  
            resultado = total - descJubilados;
            contenidoCajita.textContent = resultado;
            break;
        
        case '2': 
            resultado = total - descEfectivo;
            contenidoCajita.textContent = resultado;
            break;
    
        case '3':
            resultado = total - descCripto;
            contenidoCajita.innerHTML = resultado;
            break;

        default:
            alert("Elegí una categoría");
            break;
    }
    } else {
        alert("Completá la cantidad");
    }

}



function borrar(){
    document.getElementById("formulario").reset();
    document.getElementById("cajita").innerHTML = "";
}





/**
const pruebaContador = document.querySelector('#prueba')
const categoriaVacia = document.getElementById('categoriaVacia')
let contador = 0


pruebaContador.addEventListener('click', () => {
    console.log("Me diste click en borrar")
    contador++
    categoriaVacia.textContent = contador
})

document.body.addEventListener('click', () => {
    console.log('diste click en body')
})
 */



/**
let botonResumen = document.getElementById("resumen-funcion")

botonResumen.addEventListener("click", () => {
    let pMensaje = document.createElement("p")
    pMensaje.textContent = "Hola usuario!! Te muestro el resumen"

    let divResumen = document.getElementById("total")
    divResumen.appendChild(pMensaje)
})
 */
