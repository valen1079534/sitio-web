let imagen = document.getElementById("imagen")
let imagenPrincipal = document.getElementById("imagenPrincipal")
let imagen1 = document.getElementById("imagen1")
let imagen2 = document.getElementById("imagen2")
let imagen3 = document.getElementById("imagen3")
let imagen4 = document.getElementById("imagen4")
let imagen5 = document.getElementById("imagen5")
let iconExmark = document.getElementById("iconExmark")
let modal = document.getElementById("modal")
let mainContent = document.getElementById("mainContent")
/* 
let imagen11 = document.getElementById("imagen11")
let imagen22 = document.getElementById("imagen22")
let imagen33 = document.getElementById("imagen33")
let imagen44 = document.getElementById("imagen44")
let imagen55 = document.getElementById("imagen55") */


/* window.addEventListener('load', iniciar, false)

function iniciar(){
    var imagen = document.getElementById("imagen")
    imagen.addEventListener("mouseover",peligro, false)
}
function peligro(){
    document.getElementById("imagen").src = "https://m.media-amazon.com/images/I/61YiMdxbvjL._AC_SY535_.jpg"
    document.getElementById("imagen").src = "https://m.media-amazon.com/images/I/61UuwHvTwoL._AC_SY535_.jpg"
}
  */
 



imagen1.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen1.src
}) 


imagen2.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen2.src
}) 
 

imagen3.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen3.src
}) 

imagen4.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen4.src
}) 

imagen5.addEventListener("click", function(){
    imagen.src = ' '
    imagen.src = imagen5.src
}) 

iconExmark.addEventListener("click", function(){
    
})


function cerrarse(){
    var div = document.getElementById("modal")
    div.style.display = "none"
}


/* function abrir(){
    document.getElementById("mainContent")
    modal.classList.visible
} */


/* function abrir(){
     /* document.getElementById("mainContent") *oeeeee")


/* imagen11.addEventListener("click", function(){
    imagenPrincipal.src = ' '
    imagenPrincipal.src = imagen11.src
}) 


imagen22.addEventListener("click", function(){
    imagenPrincipal.src = ' '
    imagenPrincipal.src = imagen22.src
}) 
 

imagen33.addEventListener("click", function(){
    imagenPrincipal.src = ' '
    imagenPrincipal.src = imagen33.src
}) 

imagen44.addEventListener("click", function(){
    imagenPrincipal.src = ' '
    imagenPrincipal.src = imagen44.src
}) 

imagen55.addEventListener("click", function(){
    imagenPrincipal.src = ' '
    imagenPrincipal.src = imagen55.src
}) 
 
 */