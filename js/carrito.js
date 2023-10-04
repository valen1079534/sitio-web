let boxMinus = document.getElementById("boxMinus")
let boxCan = document.getElementById("boxCan")
let boxPlus = document.getElementById("boxPlus")
let boxCantidadCop = document.getElementById("boxCantidadCop")
let subTotal = document.getElementById("subTotal")


boxPlus.addEventListener("click", function() {
let auxCan = boxCan.innerHTML
let boxCantidadCop = boxCantidadCop.innerHTML
let subTotal = subTotal.innerHTML

boxCantidadCop = 2

    if(auxCan < 10){
        auxCan++;
        boxCan.innerHTML = auxCan
    }
    total = boxCantidadCop * subTotal.innerHTML
       
})


boxMinus.addEventListener("click", function(){
    let auxCan = boxCan.innerHTML
    if(auxCan > 0){
        auxCan--;
        boxCan.innerHTML = auxCan
    }
})





