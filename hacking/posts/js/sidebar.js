function toggleNav() {
  var sidebar = document.getElementById("mySidebar");
  var sidebarDisplay = window.getComputedStyle(sidebar).display;

  if (sidebarDisplay === "none") {
    sidebar.style.display = "block"; // Mostrar el sidebar
    sidebar.style.width = "200px"; // Ancho deseado al mostrar el sidebar
  } else {
    sidebar.style.display = "none"; // Ocultar el sidebar al hacer clic nuevamente
  }
}
