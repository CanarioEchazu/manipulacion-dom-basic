const h1= document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){
    console.log('Escuchando el evento del click calcular');

    let sumaInputs = parseInt (input1.value) + parseInt (input2.value);
    pResult.innerText = "Resulado: "+ sumaInputs;
}