let hamB = document.getElementById("hamBurg");

let maiMenu = document.getElementById("maiMenu");

hamB.addEventListener("click", function() {

   if (maiMenu.classList.contains("mai-menu")){
    maiMenu.classList.add("mai-menu-block");
    maiMenu.classList.remove("mai-menu");
     }

     else {
    maiMenu.classList.remove("mai-menu-block");
    maiMenu.classList.add("mai-menu");
     }
});