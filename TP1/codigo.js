const inputMate = document.getElementById("notaMatematica");
const inputLengua = document.getElementById("notaLengua");
const inputEfsi = document.getElementById("notaEfsi");
const botonPromedio = document.getElementById("calcularProm");
const botonMayorNota = document.getElementById("calcularMayorNotas");
let resultado = document.getElementById("resultado");
let imagen = document.getElementById("imagen");
function validarNota(inputElement) {
    inputElement.onkeyup = () => {
        if (inputElement.value > 10 || inputElement.value < 1) {
            inputElement.style.color = "red";
            inputElement.style.border = "2px solid red";
        } else {
            inputElement.style.color = "green";
            inputElement.style.border = "2px solid green";
        }
    };
}
validarNota(inputMate);
validarNota(inputLengua);
validarNota(inputEfsi);
botonPromedio.onclick = (e) =>{
    let valorMate = parseFloat(inputMate.value);
    let valorLengua = parseFloat(inputLengua.value);
    let valorEfsi = parseFloat(inputEfsi.value);
    if(isNaN(valorMate) || isNaN(valorLengua) || isNaN(valorEfsi)){
        imagen.src = "imagenes/error.gif";
        alert("debe ingresar un numero");
    }
    else if(valorMate < 10 && valorMate >1 && valorLengua <10 && valorLengua > 1 && valorEfsi<10 && valorEfsi > 1){
        let promedio = 0;
        let suma = valorEfsi + valorLengua + valorMate;
        promedio = suma / 3;
        if(promedio >= 6){
            resultado.style.color = "green";
            imagen.src = "imagenes/aprobado.gif";
        }
        else{
            resultado.style.color = "red";
            imagen.src = "imagenes/animo.gif";
        }
        resultado.innerHTML = "El promedio es: " + promedio;
    }
    else{
        imagen.src = "imagenes/error.gif";
        resultado.style.color = "orange";
        resultado.innerHTML = "hay una nota no valida"
        }
}
botonMayorNota.onclick = () => {
    let valorMate = parseFloat(inputMate.value);
    let valorLengua = parseFloat(inputLengua.value);
    let valorEfsi = parseFloat(inputEfsi.value);
    if(isNaN(valorMate) || isNaN(valorLengua) || isNaN(valorEfsi)){
        imagen.src = "imagenes/error.gif";
        alert("Falta ingresar numeros");
    }
    else if(valorMate < 10 && valorMate >1 && valorLengua <10 && valorLengua > 1 && valorEfsi<10 && valorEfsi > 1){
    let materias = {Matematica: valorMate, Lengua:valorLengua,EFSI: valorEfsi}

    let maxNota = 0;
    let materiaMaxNota = " ";

    for (let materia in materias) {
        if (materias[materia] > maxNota) {
            maxNota = materias[materia];
            materiaMaxNota = materia;
        }
        else if(materias[materia] == maxNota)
        {
            materiaMaxNota = materiaMaxNota + " y "+ materia;
        }
    }
    resultado.style.color = "blue";
    resultado.innerHTML = materiaMaxNota + " con : " + maxNota;
    imagen.src = "imagenes/wow.gif";
}
    else{
        resultado.style.color = "orange";
        resultado.innerHTML = "hay una nota no valida"; 
        imagen.src = "imagenes/error.gif";
        
    }
}