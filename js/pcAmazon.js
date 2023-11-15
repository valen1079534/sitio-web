let imagen = document.getElementById("imagen")
let imagen1 = document.getElementById("imagen1")
let imagen2 = document.getElementById("imagen2")
let imagen3 = document.getElementById("imagen3")
let imagen4 = document.getElementById("imagen4")
let imagen5 = document.getElementById("imagen5")
let close = document.getElementById("close")
let modal = document.getElementById("box-modal")
let imgPrincipal = document.getElementById("imagePrincipal")
let principal1 = document.getElementById("principal1")
let principal2 = document.getElementById("principal2")
let principal3 = document.getElementById("principal3")
let principal4 = document.getElementById("principal4")
let principal5 = document.getElementById("principal5")


function setActive(principal){
    var imagen = document.querySelectorAll(".imgPrinReducidas")
    imagen.forEach(function(imagePrin){
        imagePrin.classList.remove('activation')
    })
    principal.classList.add('activation')
}


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



//cabio de color
function setActive(img){
    var hola = document.querySelectorAll(".imgReducidas")
    hola.forEach(function(image){
        image.classList.remove('active')
    })
    img.classList.add('active')
}

//cambio de imagen
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



function cerrar() {
    modal.classList.remove("visible")
}

function abrir(){
    modal.classList.add("visible")
}




 
