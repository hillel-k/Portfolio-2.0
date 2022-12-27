// Page Transition Barba.js
/*
//function jsReload() {
    const mainScript = document.querySelector(".main-script");
  
    if (mainScript) {
      mainScript.remove();
      const newScript = document.createElement("script");
      newScript.src = mainScript.src;
      newScript.classList.add("main-script");
      document.body.appendChild(newScript);
    }
  }
  


barba.init({

    transitions: [{
    
    name: 'coverTransition',
    leave(data) {
      return gsap.to(".coverTransition", {
        "width":"100%",
        ease : "power1.easeInOut",
        left: "0%",
        delay:0.1,
      }),
      gsap.to(".coverTransition2", {
        "width":"100%",
        left: "0%",
        ease : "power1.easeInOut",
      }),
      gsap.to("main", {
        autoAlpha:0,
        ease : "power1.easeInOut",
      });
     
    },

    after(data) {
      return gsap.to("main", {
        autoAlpha:1,
        ease : "power1.easeInOut",
      }), 
  
      gsap.to(".coverTransition", {
        "width":"0%",
        ease : "circ.easeInOut",
        left: "100%",
        delay:0.2,
        clearProps: 'all',
      }),
      gsap.to(".coverTransition2", {
        "width":"0%",
        delay:0.3,
        ease : "power1.easeInOut",
        left: "100%",
        clearProps: 'all',
      });
     
    }
  }]
  });

  //Refresh JS



barba.hooks.beforeEnter(() => {
    jsReload();

    window.scrollTo(0, 0);
    var vid = document.getElementById("teteVideo");
    vid.play();
    })


  //Log Namespaces
  barba.hooks.enter((data) => {
    console.log(data.next.namespace);
    });



  //Play Video
  barba.hooks.beforeEnter(() => {

    });

  */
