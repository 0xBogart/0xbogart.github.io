function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("mySidebar").style.height = "550px";
  document.getElementById("mySidebar").style.border = "3px solid red";
  document.getElementById("main").style.marginLeft = "10px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.border = "none";
  document.getElementById("main").style.marginLeft= "0";
}
