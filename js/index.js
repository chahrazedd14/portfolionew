/* Bottom Nav Start */ 
bottomnav = document.querySelector('.bottomnav').querySelectorAll('li');

console.log(bottomnav);

bottomnav.forEach(element => {
    element.addEventListener('click', function(){
        bottomnav.forEach(nav => nav.classList.remove('active'))

        this.classList.add('active');
    })
});
/* Bottom Nav End */

/* Tween Max Start */ 
TweenMax.to('.left', 2, {
  delay: .8,
  width: '50%',
  ease: Power2.easeInOut
})

TweenMax.to('.right', 2, {
  delay: .6,
  width: '50%', 
  ease: Power3.easeInOut
})

TweenMax.from('.nav', 2, {
  delay: .8,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.from('.text h1', 2, {
  delay: .6,
  x: 1000,
  ease: Circ.easeInOut
})

TweenMax.from('.text p', 2, {
  delay: .7,
  x: 1000,
  ease: Circ.easeInOut
})

TweenMax.to('.karina', 2, {
  delay: 1.5,
  width: '880px',
  ease: Power2.easeInOut
})

TweenMax.staggerFrom('.bottomnav ul li', 2, {
  delay: 1,
  x: 1000,
  ease: Circ.easeInOut
}, 0.08)

TweenMax.from('.info', 2, {
  delay: 1.5,
  y: 100,
  ease: Circ.easeInOut
})

TweenMax.from('.name', 2, {
  delay: 1.5,
  x: -600,
  ease: Circ.easeInOut
})
// contact area animation
TweenMax.to('.mainContainer', 2, {
  delay: 1.5,
  width: '880px',
  ease: Power2.easeInOut
})
TweenMax.from('.mainContainer > .content', 2, {
  delay: 1.5,
  opacity: 0,
  ease: Power2.easeInOut
})
TweenMax.from('.mainContainer > .menu', 2, {
  delay: 1.5,
  opacity: 0,
  ease: Power2.easeInOut
})
/* Tween Max End */ 

// Custom Cursor js
const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1
  });
}


console.clear();

const elApp = document.querySelector('#app');
const elStateNav = document.querySelectorAll('[data-to]');

Array.from(elStateNav).forEach(el => {
  el.addEventListener('click', () => {
    elApp.dataset.state = el.dataset.to;
  });
});