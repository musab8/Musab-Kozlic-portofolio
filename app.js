//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlidesI(n) {
  showSlides(slideIndex += 1);
}

var phI = setInterval(plusSlidesI, 3000);

var slider = document.querySelector("body .photo");

slider.addEventListener('mouseenter', e=> {
    clearInterval(phI);
});

slider.addEventListener('mouseleave', e => {
  phI = setInterval(plusSlidesI, 3000);
});

var tacka = document.querySelector("body .tackice");

tacka.addEventListener("mouseenter", e => {
  clearInterval(phI);
});

tacka.addEventListener("mouseleave", e=>{
  phI = setInterval(plusSlidesI, 3000);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//writing text

var typed = new Typed('.MyName', {
    strings: ["Mus'ab Kozlić", 'student of' ,'Software Engineenering'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });