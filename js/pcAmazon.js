//imagenes reducidas encontradas en la pagina siguiente
let imagen = document.getElementById("imagen")
let imagen1 = document.getElementById("imagen1")
let imagen2 = document.getElementById("imagen2")
let imagen3 = document.getElementById("imagen3")
let imagen4 = document.getElementById("imagen4")
let imagen5 = document.getElementById("imagen5")

//para abrir la pagina siguiente
let modal = document.getElementById("box-modal")

//imagenes pagina principal y su funcionalidad
let imgPrincipal = document.getElementById("imagePrincipal")
let principal1 = document.getElementById("principal1")
let principal2 = document.getElementById("principal2")
let principal3 = document.getElementById("principal3")
let principal4 = document.getElementById("principal4")
let principal5 = document.getElementById("principal5")

//estrellas
let star1 = document.getElementById("star1")
let star2 = document.getElementById("star2")
let star3 = document.getElementById("star3")
let star4 = document.getElementById("star4")
let star5 = document.getElementById("star5")
//para manipular dese aca la puntucion 
let puntuacion = document.getElementById("puntuacion").innerText = 4.5


//cambio de imagen solo con pasar el cursor 
principal1.addEventListener("mouseover", function(){
    imgPrincipal.src = ' '
    imgPrincipal.src = principal1.src
    setActive(principal1)
}) 
principal2.addEventListener("mouseover", function(){
    imgPrincipal.src = ' '
    imgPrincipal.src = principal2.src
    setActive(principal2)
}) 
principal3.addEventListener("mouseover", function(){
    imgPrincipal.src = ' '
    imgPrincipal.src = principal3.src
    setActive(principal3)
}) 
principal4.addEventListener("mouseover", function(){
    imgPrincipal.src = ' '
    imgPrincipal.src = principal4.src
    setActive(principal4)
}) 
principal5.addEventListener("mouseover", function(){
    imgPrincipal.src = ' '
    imgPrincipal.src = principal5.src
    setActive(principal5)
}) 

//cabio de color de las imagenes reducidas, que se encuentran en la pagina mas pewue
function setActive(img){
    var hola = document.querySelectorAll(".imgReducidas")
    hola.forEach(function(image){
        image.classList.remove('active')
    })
    img.classList.add('active')
}

//cambio de imagen dando click
imagen1.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen1.src
    //para que se ejecute el cambio de color en la imagen
    setActive(imagen1)
}) 
imagen2.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen2.src
    setActive(imagen2)
}) 
imagen3.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen3.src
    setActive(imagen3)
}) 
imagen4.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen4.src
    setActive(imagen4)
}) 
imagen5.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen5.src
    setActive(imagen5)
}) 


//abrir y cerrar pantalla o vista 
function cerrar() {
    modal.classList.remove("visible")
}

function abrir(){
    modal.classList.add("visible")
}

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

    //
    let start = document.getElementById("start")
    let cajaBox = document.getElementById("caja-box")

    let caja1 = document.getElementById("caja1")
    let caja2 = document.getElementById("caja2")
    let caja3 = document.getElementById("caja3")
    let caja4 = document.getElementById("caja4")
    let caja5 = document.getElementById("caja5")
    let resultado2;

    const input1 = 100
    const input2 = 5
    const input3 = 3
    const input4 = 6
    const input5 =1

    start.addEventListener("mouseover", () =>{   
        cargar()
    })

    start.addEventListener("mouseout", () => {

        setTimeout(() =>{
            cajaBox.style.display = "none"
        }, 3000)
    })
      
    function cargar() {
        cajaBox.style.display = "inline"
        setTimeout(() =>{
            let porcentaje = document.getElementById("result")
    
            resultado2 = parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5)
            porcentaje.innerHTML = resultado2
    
            let total1 = parseInt(input1) * 100 / resultado2
            caja1.style.width= `${total1}%`
    
            let total2 = parseInt(input2) * 100 / resultado2
            caja2.style.width = `${total2}%`
    
            let total3 = parseInt(input3) * 100 / resultado2
            caja3.style.width = `${total3}%`
    
            let total4 = parseInt(input4) * 100 / resultado2
            caja4.style.width = `${total4}%`
    
            let total5 = parseInt(input5) * 100 / resultado2
            caja5.style.width = `${total5}%`
        },1)

    }

    





 
