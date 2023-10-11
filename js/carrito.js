let boxMinus = document.getElementById("boxMinus")
let boxCan = document.getElementById("boxCan")
let boxPlus = document.getElementById("boxPlus")
let numeroProductos = document.getElementById("numeroProductos")
let productos = document.getElementById("Productos")
let boxCantidadCop = 20000
let auxBoxCantidadCop = new Intl.NumberFormat("de-DE").format(boxCantidadCop)
document.getElementById("boxCantidaCop").innerHTML = auxBoxCantidadCop


boxPlus.addEventListener("click", function() {
let auxCan = boxCan.innerHTML

    if(auxCan < 10){
        auxCan++;
        boxCan.innerHTML = auxCan
        numeroProductos.innerHTML = auxCan
        
        determinarPs(auxCan)
        calcularSubtotal()
        
    }   
})


boxMinus.addEventListener("click", function(){
    let auxCan = boxCan.innerHTML
    if(auxCan > 0){
        auxCan--;
        boxCan.innerHTML = auxCan
        numeroProductos.innerHTML = auxCan

        determinarPs(auxCan)
        calcularSubtotal()
    }
})

function calcularSubtotal(){
    let auxCan = boxCantidadCop.innerHTML
    let subTotal = document.getElementById("subTotal").innerHTML = boxCantidadCop * Number(boxCan.innerHTML)

    let auxSubTotal = new Intl.NumberFormat("de-DE").format(subTotal)
    document.getElementById("subTotal").innerHTML = auxSubTotal

   
    }

function determinarPs(auxCan){
    if((auxCan) == 0 || auxCan > 1){
        productos.innerHTML = "productos"
    }else if(auxCan == 1){
        productos.innerHTML = "producto"
    }
}
    
    







