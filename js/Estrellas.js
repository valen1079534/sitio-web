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
/* let star1 = document.getElementById("star1")
let star2 = document.getElementById("star2")
let star3 = document.getElementById("star3")
let star4 = document.getElementById("star4")
let star5 = document.getElementById("star5")
//para manipular dese aca la puntucion 
let puntuacion = document.getElementById("puntuacion").innerText = 2.5

//start
//Para elaborar estrellas de porcentajes 
if (puntuacion >= 0 && puntuacion <=0.2){
    star1.setAttribute("class", "fa-regular fa-star")
    star2.setAttribute("class", "fa-regular fa-star")
    star3.setAttribute("class", "fa-regular fa-star")
    star4.setAttribute("class", "fa-regular fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 0.3 && puntuacion <=0.7){
    star1.setAttribute("class", "fa-solid fa-star-half-stroke")
    star2.setAttribute("class", "fa-regular fa-star")
    star3.setAttribute("class", "fa-regular fa-star")
    star4.setAttribute("class", "fa-regular fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 0.8 && puntuacion <=1.2){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-regular fa-star")
    star3.setAttribute("class", "fa-regular fa-star")
    star4.setAttribute("class", "fa-regular fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 1.3 && puntuacion <=1.7){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star-half-stroke")
    star3.setAttribute("class", "fa-regular fa-star")
    star4.setAttribute("class", "fa-regular fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 1.8 && puntuacion <=2.2){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star")
    star3.setAttribute("class", "fa-regular fa-star")
    star4.setAttribute("class", "fa-regular fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 2.3 && puntuacion <=2.7){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star")
    star3.setAttribute("class", "fa-solid fa-star-half-stroke")
    star4.setAttribute("class", "fa-regular fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 2.8 && puntuacion <=3.2){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star")
    star3.setAttribute("class", "fa-solid fa-star")
    star4.setAttribute("class", "fa-regular fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 3.3 && puntuacion <=3.7){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star")
    star3.setAttribute("class", "fa-solid fa-star")
    star4.setAttribute("class", "fa-solid fa-star-half-stroke")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 3.8 && puntuacion <=4.2){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star")
    star3.setAttribute("class", "fa-solid fa-star")
    star4.setAttribute("class", "fa-solid fa-star")
    star5.setAttribute("class", "fa-regular fa-star")
}

else if (puntuacion >= 4.3 && puntuacion <=4.7){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star")
    star3.setAttribute("class", "fa-solid fa-star")
    star4.setAttribute("class", "fa-solid fa-star")
    star5.setAttribute("class", "fa-solid fa-star-half-stroke")
}

else if (puntuacion >= 4.8 && puntuacion <=5){
    star1.setAttribute("class", "fa-solid fa-star")
    star2.setAttribute("class", "fa-solid fa-star")
    star3.setAttribute("class", "fa-solid fa-star")
    star4.setAttribute("class", "fa-solid fa-star")
    star5.setAttribute("class", "fa-solid fa-star")
}

const input1 = 100
const input2 = 100
const input3 = 50
const input4 = 29
const input5 =10

 */


 