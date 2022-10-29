const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.querySelector('#calculo2')
const button = document.getElementById('btnCalculo')
const result = document.querySelector('#resultado')
const fisrtName = document.getElementById('firstName')
const lastName = document.querySelector('#lastName')
const dni = document.querySelector('#dni')
const button2 = document.querySelector('#userData')
const data1 = document.querySelector('#data1')
const form = document.getElementById('form')

button = addEventListener('click', sumarInputValue);

function sumarInputValue (){
    const sumaInput = Number(input1.value) +Number(input2.value)
    result.innerText = "el resultado es " +  sumaInput;
    console.log("crj")
}

form.adEventListener('submit', data);


function data(event){
    event.preventDefault();
    const personData = fisrtName.value + " " + lastName.value + " your Indentifier: " + dni.value 
    data1.innerText = "Datos de las personas: " + personData     
}
