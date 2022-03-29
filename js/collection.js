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

 
 // Slide Start
 window.console = window.console || function (t) {};

 if (document.location.search.match(/type=embed/gi)) {
   window.parent.postMessage("resize", "*");
 }
 
 (function () {
 var slidersContainer = document.querySelector(".sliders-container");

 // Initializing the numbers slider
 var msNumbers = new MomentumSlider({
   el: slidersContainer,
   cssClass: "ms--numbers",
   range: [1, 10],
   rangeContent: function (i) {
     return i;
   },
   style: {
     transform: [{ scale: [0.4, 1] }],
     opacity: [0, 1]
   },
   interactive: false
 });

 // Initializing the titles slider
 var titles = [
   "King of the Ring Fight",
   "Sound of Streets",
   "Urban Fashion",
   "Windy Sunset",
   "new slide",
   "King of the Ring Fight",
   "Sound of Streets",
   "Urban Fashion",
   "Windy Sunset",
   "new slide"
 ];
 var msTitles = new MomentumSlider({
   el: slidersContainer,
   cssClass: "ms--titles",
   range: [0, 9],
   rangeContent: function (i) {
     return "<h3>" + titles[i] + "</h3>";
   },
   vertical: true,
   reverse: true,
   style: {
     opacity: [0, 1]
   },
   interactive: false
 });

 // Initializing the links slider
 var links = [
  ' href="https://google.com"',
  ' href="link2"',
  ' href="link3"',
  ' href="link4"',
  ' href="link5"',
  ' href="https://google.com"',
  ' href="link2"',
  ' href="link3"',
  ' href="link4"',
  ' href="link5"'
 ];
 var msLinks = new MomentumSlider({
   el: slidersContainer,
   cssClass: "ms--links",
   range: [0, 9],
   rangeContent: function (i) {
     return '<a' + links[i] + 'target="_blank"' + '>' + 'View Case' + '</a>';
   },
   vertical: true,
   interactive: false
 });

 // Get pagination items
 var pagination = document.querySelector(".pagination");
 var paginationItems = [].slice.call(pagination.children);

 // Initializing the images slider
 var msImages = new MomentumSlider({
   // Element to append the slider
   el: slidersContainer,
   // CSS class to reference the slider
   cssClass: "ms--images",
   // Generate the 4 slides required
   range: [0, 9],
   rangeContent: function () {
     return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
   },
   // Syncronize the other sliders
   sync: [msNumbers, msTitles, msLinks],
   // Styles to interpolate as we move the slider
   style: {
     ".ms-slide__image": {
       transform: [{ scale: [1.5, 1] }]
     }
   },
   // Update pagination if slider change
   change: function (newIndex, oldIndex) {
     if (typeof oldIndex !== "undefined") {
       paginationItems[oldIndex].classList.remove(
         "pagination__item--active"
       );
     }
     paginationItems[newIndex].classList.add("pagination__item--active");
   }
 });

 // Select corresponding slider item when a pagination button is clicked
 pagination.addEventListener("click", function (e) {
   if (e.target.matches(".pagination__button")) {
     var index = paginationItems.indexOf(e.target.parentNode);
     msImages.select(index);
   }
 });
})();

// Slide Ends


// page transition Start

var $loader = document.querySelector(".loader");
    
window.onload = function () {
  $loader.classList.remove("loader--active");
};

document.querySelector(".btn").addEventListener("click", function () {
  $loader.classList.add("loader--active");

  window.setTimeout(function () {
    $loader.classList.remove("loader--active");
  }, 5000);
});

// page transition End

