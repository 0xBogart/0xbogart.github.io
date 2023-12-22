function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("mySidebar").style.height = "550px";
  document.getElementById("mySidebar").style.border = "1px solid red";
  document.getElementById("main").style.marginLeft = "10px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.border = "none";
  document.getElementById("main").style.marginLeft= "0";
}

/*function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    var sidebarToggle = document.getElementById("sidebarToggle");

    if (sidebar.style.width === "200px") {
        sidebar.style.width = "0";
        sidebar.style.border = "none"; // Eliminar el borde al cerrar
        document.getElementById("main").style.marginLeft= "0";
        sidebarToggle.innerHTML = "☠"; // Cambiar el ícono del botón al cerrar
    } else {
        sidebar.style.width = "200px";
        sidebar.style.height = "550px";
        sidebar.style.border = "3px solid red"; // Mantener el borde al abrir
        document.getElementById("main").style.marginLeft = "10px";
        sidebarToggle.innerHTML = "×"; // Cambiar el ícono del botón al abrir
    }
}*/
