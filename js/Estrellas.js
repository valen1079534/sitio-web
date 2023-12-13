let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let input4 = document.getElementById("input4")
let input5 = document.getElementById("input5")

let cargar = document.getElementById("cargar")

let caja1 = document.getElementById("caja1")
let caja2 = document.getElementById("caja2")
let caja3 = document.getElementById("caja3")
let caja4 = document.getElementById("caja4")
let caja5 = document.getElementById("caja5")

let resultado;

cargar.addEventListener("click", () => {

    let porcentaje = document.getElementById("result")
    
   resultado = parseInt(input5.value) + parseInt(input4.value) + parseInt(input3.value) + parseInt(input2.value) + parseInt(input1.value)

   porcentaje.innerHTML = resultado

   let total1= parseInt(input1.value) * 100 / resultado
   caja1.style.width= `${total1}%`
   
   let total2 = parseInt(input2.value) * 100 / resultado
   caja2.style.width= `${total2}%`
    
   let total3 = parseInt(input3.value) * 100 / resultado
   caja3.style.width= `${total3}%`

   let total4 = parseInt(input4.value) * 100 / resultado
   caja4.style.width= `${total4}%`

   let total5 = parseInt(input5.value) * 100 / resultado
   caja5.style.width= `${total5}%`

    })
//estrellas
/*
const input1 = 100
const input2 = 100
const input3 = 50
const input4 = 29
const input5 =10

 */


 