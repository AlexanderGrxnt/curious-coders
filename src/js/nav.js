let open = false;

function openNav() {
if(open === false){
    if (window.screen.width < 768)
      document.getElementById("overlayNav").style.width = "200px";
    else
      document.getElementById("overlayNav").style.width = "180px";
    //document.getElementById("blankPanel").style.width = "100%";
    open = true;
} else {
    document.getElementById("overlayNav").style.width = "0%";
    open = false;
}
}
  
  function closeNav() {
    document.getElementById("overlayNav").style.width = "0%";
  
    //document.getElementById("blankPanel").style.width = "0%";
  }