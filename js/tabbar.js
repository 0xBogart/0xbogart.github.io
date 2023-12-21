/* Tabla de Contenidos */
/*  function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    var contenido = document.getElementById("contenido");
    /*var cerrarBtn = document.querySelector('.cerrar-btn');*/

/*    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      contenido.classList.add('show'); // Muestra el contenido cuando se despliega
      /*cerrarBtn.classList.add('show');*/ // Muestra el botón de cerrar
/*    } else {
      dropdown.style.display = "none";
      contenido.classList.remove('show'); // Oculta el contenido cuando se cierra
      cerrarBtn.classList.remove('show');*/ // Oculta el botón de cerrar
   /* }
  } */

function toggleDropdown() {
  var dropdown = document.getElementById("dropdownContent");
  var contenido = document.getElementById("contenido");
  /* var cerrarBtn = document.querySelector('.cerrar-btn'); */

  if (dropdown.style.display === "" || dropdown.style.display === "none") {
    dropdown.style.display = "block";
    contenido.classList.add('show'); // Muestra el contenido cuando se despliega
    /* cerrarBtn.classList.add('show'); */ // Muestra el botón de cerrar
  } else {
    dropdown.style.display = "none";
    contenido.classList.remove('show'); // Oculta el contenido cuando se cierra
    /* cerrarBtn.classList.remove('show'); */ // Oculta el botón de cerrar
  }
}
