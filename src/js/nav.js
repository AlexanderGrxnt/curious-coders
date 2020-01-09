  let open = false;
  let menu = document.getElementsByClassName('nav-box')[0];
  let bars = document.getElementsByClassName('nav-menu')[0];
  let blankPanel = document.getElementsByClassName('panel')[0];

  const openNav = () => {
      console.log("clicked");
    if(open === false){
        // if (window.screen.width < 768)
        //   document.getElementById("overlayNav").style.width = "200px";
        // else
          document.getElementById("overlayNav").style.width = "180px";
          blankPanel.style.display = 'block';
          blankPanel.style.opacity = 1;
          bars.style.transform = 'rotate(180deg)';
          setTimeout(function() { barsClear(); }, 150);
        //   bars.innerHTML = "clear";
         // bars.style.opacity = 0;
       // document.getElementById("blankPanel").style.width = "100%";
        open = true;
    } else {
        document.getElementById("overlayNav").style.width = "0%";
        //document.getElementById("blankPanel").style.width = "0%";
        blankPanel.style.opacity = 0;
        bars.style.transform = 'rotate(0deg)';
        setTimeout(function() { barsMenu(); }, 250);
       // bars.style.opacity = 1;
        open = false;
        //bars.innerHTML = "menu";
    }
  }

  function barsClear(){
    bars.innerHTML = "clear";
      //console.log('bars fade');
  }

  function barsMenu(){
    bars.innerHTML = "menu";
    blankPanel.style.display = 'none';
      //console.log('bars fade');
  }
      
  function closeNav() {
    document.getElementById("overlayNav").style.width = "0%";
  
    document.getElementById("blankPanel").style.width = "0%";
  }

  menu.addEventListener('click', openNav);
  blankPanel.addEventListener('click', openNav);
  //bars.addEventListener('animationend', fadeBars);

//export default openNav;