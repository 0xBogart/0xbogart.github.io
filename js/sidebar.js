/*** OPEN FUNCTIONS ***/
function openNav() {
  // Red Side
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("mySidebar").style.height = "550px";
  document.getElementById("mySidebar").style.border = "1px solid red";
  document.getElementById("main").style.marginLeft = "10px";
}

function openGreenNav() {
  // Green Side
  document.getElementById("mySidebargreen").style.width = "200px";
  document.getElementById("mySidebargreen").style.height = "550px";
  document.getElementById("mySidebargreen").style.border = "1px solid green";
  document.getElementById("main").style.marginLeft = "10px";
}

function openPurpleNav() {
  // Purple Side
  document.getElementById("mySidebarpurple").style.width = "200px";
  document.getElementById("mySidebarpurple").style.height = "550px";
  document.getElementById("mySidebarpurple").style.border = "1px solid purple";
  document.getElementById("main").style.marginLeft = "10px";
}

function openGoldNav() {
  // Gold Side
  document.getElementById("mySidebargold").style.width = "200px";
  document.getElementById("mySidebargold").style.height = "550px";
  document.getElementById("mySidebargold").style.border = "1px solid gold";
  document.getElementById("main").style.marginLeft = "10px";
}
/*** END OPEN FUNCTIONS ***/


/*** CLOSE FUNCTIONS ***/
function closeNav() {
  // Red Side
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.border = "none";
  document.getElementById("main").style.marginLeft= "0";
}

function closeGreenNav() {
  // Green Side
  document.getElementById("mySidebargreen").style.width = "0";
  document.getElementById("mySidebargreen").style.border = "none";
  document.getElementById("main").style.marginLeft= "0";
}

function closePurpleNav() {
  // Purple Side
  document.getElementById("mySidebarpurple").style.width = "0";
  document.getElementById("mySidebarpurple").style.border = "none";
  document.getElementById("main").style.marginLeft= "0";
}

function closeGoldNav() {
  // Gold Side
  document.getElementById("mySidebargold").style.width = "0";
  document.getElementById("mySidebargold").style.border = "none";
  document.getElementById("main").style.marginLeft= "0";
}
/*** END CLOSE FUNCTIONS ***/
