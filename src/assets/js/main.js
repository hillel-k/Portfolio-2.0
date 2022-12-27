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





//ScrollTrigger Animation

/*var sections = gsap.utils.toArray('.projetCell, #facts, #catProjet, #FAQ, #contactSection, #detailsProjet');

sections.forEach((section) => {
  
  gsap.from(section, { autoAlpha: 0, y:100,
    scrollTrigger: {
        trigger: section,
        start: 'top',
        scrub: true,
        end: '+=500',
        markers: true
    }
});
  
})*/





//Animation GSAP 

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({delay:0.6})
.from("#introImg", {scale:1.8, duration:.6})
.to("#maskIntro", {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, 0)
.to("#maskIntro", {scale:1, duration:0.4}, -.5)
.to("#maskIntro", {scale:1, duration:0.2})
;

/*let videoElem1 = document.querySelector('#teteVideo');
videoElem1.play();*/

gsap.from(".RL", { x: 200, duration: 2});
gsap.from(".LR", { x: -200, duration: 2});
gsap.from(".RL2", { x: 300, duration: 2});





// Accordion FAQ

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}





//Caroussel FLickity

var flkty = new Flickity( '.gallery-cell', {
  imagesLoaded: true,
  percentPosition: false
});

var caption = document.querySelector('#caption');

flkty.on( 'select', function() {
  caption.textContent = flkty.selectedElement.alt;
});







