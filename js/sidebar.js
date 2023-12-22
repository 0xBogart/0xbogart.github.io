function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  /*document.getElementById("mySidebar").style.height = "550px";*/
  document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.height = "0";
  document.getElementById("main").style.marginLeft= "0";
}
