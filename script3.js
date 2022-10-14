const h1= document.querySelector('h1');
const form= document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarImputValues);

function sumarImputValues (event){
    console.log('Escuchando el evento del click calcular');

    event.preventDefault(); // importante para frenar el submit preventDefault()

    let sumaInputs = parseInt (input1.value) + parseInt (input2.value);
    pResult.innerText = "Resulado: "+ sumaInputs;
}