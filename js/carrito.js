let boxMinus = document.getElementById("boxMinus")
let boxCan = document.getElementById("boxCan")
let boxPlus = document.getElementById("boxPlus")
let boxCantidadCop = document.getElementById("boxCantidadCop")
let subTotal = document.getElementById("subTotal")


boxPlus.addEventListener("click", function() {
let auxCan = boxCan.innerHTML


    if(auxCan < 10){
        auxCan++;
        boxCan.innerHTML = auxCan
    }

       
})


boxMinus.addEventListener("click", function(){
    let auxCan = boxCan.innerHTML
    if(auxCan > 0){
        auxCan--;
        boxCan.innerHTML = auxCan
    }
})





