function openNav() {
  // Red Side
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("mySidebar").style.height = "550px";
  document.getElementById("mySidebar").style.border = "1px solid red";
  // Green Side
  document.getElementById("mySidebargreen").style.width = "200px";
  document.getElementById("mySidebargreen").style.height = "550px";
  document.getElementById("mySidebargreen").style.border = "1px solid green";
  // Purple Side
  document.getElementById("mySidebarpurple").style.width = "200px";
  document.getElementById("mySidebarpurple").style.height = "550px";
  document.getElementById("mySidebarpurple").style.border = "1px solid purple";
  // Gold Side
  document.getElementById("mySidebargold").style.width = "200px";
  document.getElementById("mySidebargold").style.height = "550px";
  document.getElementById("mySidebargold").style.border = "1px solid gold";
  document.getElementById("main").style.marginLeft = "10px";  // Main General
}

function closeNav() {
  // Red Side
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.border = "none";
  // Green Side
  document.getElementById("mySidebargreen").style.width = "0";
  document.getElementById("mySidebargreen").style.border = "none";
  // Purple Side
  document.getElementById("mySidebarpurple").style.width = "0";
  document.getElementById("mySidebarpurple").style.border = "none";
  // Gold Side
  document.getElementById("mySidebargold").style.width = "0";
  document.getElementById("mySidebargold").style.border = "none";
  document.getElementById("main").style.marginLeft= "0";  // Main General
}
