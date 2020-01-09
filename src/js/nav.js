  let open = false;
  let menu = document.getElementsByClassName('nav-box')[0];

  const openNav = () => {
      console.log("clicked");
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

  menu.addEventListener('click', openNav);

//export default openNav;