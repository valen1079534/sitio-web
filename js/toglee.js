/*1.asociamos el id del container*/
/*2. verificar la clase que se encuentra en el con  */
/*2.1- al dar click quitamos la clase por defecto de con y agregamos la clase que venia con el hover de con */ 

let container = document.getElementById("container");

let con = document.getElementById("con");

container.addEventListener("click", function() {

   if (con.classList.contains("con-off")){
    con.classList.add("con-on");
    con.classList.remove("con-off");
    container.classList.add("container-on");
    container.classList.remove("container-off");
     }

     else {
    con.classList.remove("con-on");
    con.classList.add("con-off");
    container.classList.remove("container-ff");
    container.classList.add("container-on");
     }
});

        