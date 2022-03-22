function menu(){
  var x =document.getElementById("loginoutbox");
  console.log("menu");
  
  if (x.style.top === "100%") {
   x.style.top="-100vh";
  } else {
     x.style.top="100%";
  }
  
}


function closeNavBar() {
   var x =document.getElementById("loginoutbox");
    if (x.style.top === "100%") {
   x.style.top="-100vh";
  } else {
     x.style.top="100%";
  }
}