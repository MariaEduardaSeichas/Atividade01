calcularIMC = () =>{
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = peso/(altura*altura);
    if (imc < 18.5) {
        resultado = "Abaixo do peso normal";
     } else if (imc >= 18.5 && imc < 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 25.0 && imc < 29.9) {
        resultado = "Excesso de peso";
    } else if (imc >= 30.0 && imc < 34.9) {
        resultado = "Obesidade classe I ";
    } else if (imc >= 35.0 && imc < 39.9) {
        resultado = "Obesidade classe II";
    }else if (imc >= 40.0) {
        resultado = "Obesidade classe III";
     }

     const paragrafo = document.getElementById('resultado');
     paragrafo.innerHTML = resultado;
}

window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};