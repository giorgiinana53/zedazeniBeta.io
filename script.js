var d = document;
var w = window;
var topMenu = null;
if( typeof ('.navbar')[0] != 'undefined' ){
    
    if( w.innerWidth > 1024 ){
        topMenu = ('.navbar')[0];
    }else{
        topMenu = ('.resp-navbar')[0];
    }
}

var video = document.getElementById("bgVideo");

video.addEventListener("click", function clickVideo(){
    video.paused ? video.play() : video.pause();
});


var sliderImagesURL = [
    './beer2.png',
    './juice-chero.png',
    './lemonade.png',
    './rad-rain.png',
    './RC-cola.png',
    './water.png'
];

function sliderInit() {
    const sliderLeftButton = document.getElementById('slider-button-left');
    const sliderRightButton = document.getElementById('slider-button-right');

    const sliderLift = document.querySelector('.slider .slider-lift');

    var showItemsCount = 4;
    const itemsCount = sliderImagesURL.length;
    let index = 0;
    
    if( w.innerWidth > 1024 ){
        var showItemsCount = 4;
    }else{
        var showItemsCount = 1;
    }

    sliderLift.style.width = ((itemsCount * 100) / showItemsCount) + '%';

    // START generate slider items

    sliderImagesURL.forEach(url => {
        const sliderItem = document.createElement('div');
        sliderItem.classList.add('slider-item');
        sliderItem.style.width = (100 / showItemsCount) + '%';
        
        const img = document.createElement('img');
        img.src = url;

        sliderItem.append(img);

        sliderLift.append(sliderItem);
    });

    // END generate slider items

    // slidePrev() {}

    function slideNext() {
        if (index < itemsCount - showItemsCount) {
            index++;
        }
        
        sliderLift.style.left = -((100 / showItemsCount) * index) + '%';
    }

    sliderRightButton.addEventListener('click', slideNext);


    function slideBack() {
        if (index > 0) {
            index--;
        }
        
        sliderLift.style.left = -((100 / showItemsCount) * index) + '%';
    
    }

    sliderLeftButton.addEventListener('click', slideBack);

}


sliderInit();

function burgerMenu(x) {
    x.classList.toggle("change");
}

const hamburger = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".resp-navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actives";
}