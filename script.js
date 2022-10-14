// hq { color : red}
// .parrafito { ...}
// #pid { ... }

const h1= document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log (input.value);

console.log({
    h1,
    p,
    parrafito,
    input,
});

h1.innerHTML = "Canario <br> Darío Echazú";
// h1.innerText = "Patito <br> Feo";

// console.log (h1.getAttribute('class'));
// h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

// h1.classList.toggle('verde');
console.log (h1.classList.contains('verde'));

// podemos modificar el valor del input

input.value = "456";

// como crear un elemento desde cero.

const img = document.createElement ('img');
img.setAttribute('src', 'https://media.pasionmovil.com/2020/10/my-asus-app.jpg'); 

pid.append(img);