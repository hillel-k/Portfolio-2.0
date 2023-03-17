/*
Hide header on scroll down & show on scroll up
*/


const header = document.getElementById('header');
let lastPos = document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  const currPos = document.documentElement.scrollTop;

  if (currPos > lastPos) {
    if (currPos > header.offsetHeight) {
      header.classList.add('-translate-y-full');
      header.classList.remove('header-shadow');
    }
  } else {
    header.classList.remove('-translate-y-full');
    header.classList.add('header-shadow');
  }

  lastPos = currPos;
}, false);

/*
Toggle the menu when pressed on hamburger button
Only on mobile devices
*/

const menu = document.getElementById('menu');
const searchBox = document.getElementById('search');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  searchBox.classList.toggle('hidden');
}, false);

/*
Lazy load images
*/

const lazyImages = document.getElementsByClassName('lazy');

document.addEventListener('DOMContentLoaded', () => {
  [...lazyImages].forEach((elem) => {
    const originalImage = elem.dataset.src;

    elem.setAttribute('src', originalImage);
    elem.removeAttribute('data-src');
  });
}, false);


//Link to Anchor 



//ScrollTrigger Animation

gsap.registerPlugin(ScrollTrigger);



const sectionsAnim = gsap.utils.toArray('.triggerSection');
sectionsAnim.forEach(triggerSection => {
  gsap.from(triggerSection, { 
    y: 150, autoAlpha:0.1,
    scrollTrigger: {
      trigger: triggerSection,
      scrub: true,
      start: "1px 100%",
      end : "20% 85%"
    }
  })
});





//Animation GSAP 


const preload = gsap.timeline({ delay: 0.2 });
preload.to("#preload", { duration: 2, ease: "power4.out", x: "100%" });
preload.to("#preload2", { duration: 3, ease: "power4.out", x: "100%" }, "-=1.8");
preload.to("#preload", { autoAlpha: 0, "display": "none" }, "-=1.8")
preload.to("#preload2", { autoAlpha: 0, "display": "none" }, "-=1.8")

/*let videoElem1 = document.querySelector('#teteVideo');
videoElem1.play();*/

let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 800px)", () => {

  // this setup code only runs when viewport is at least 800px wide
  gsap.from(".RL", { x: 200, duration: 2 });
  gsap.from(".LR", { x: -200, duration: 2 });
  gsap.from(".RL2", { x: 200, duration: 2 });

  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
  };
});

mm.add("(max-width: 800px)", () => {

  // this setup code only runs when viewport is at least 800px wide
  gsap.from(".RL", { x: 250, duration: 2 });
  gsap.from(".LR", { x: -190, duration: 2 });
  gsap.from(".RL2", { x: 250, duration: 2 });

  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
  };
});




// Accordion FAQ

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}





