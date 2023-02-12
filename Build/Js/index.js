$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".navv").addClass('stick_tab_1');
            $(".section-mobile-nav").addClass('stick_tab_1')
        } else {
            $(".navv").removeClass('stick_tab_1');
            $(".section-mobile-nav").removeClass('stick_tab_1')

        }
    })
})

window.onscroll = function() {
    growShrinkLogo() , scrollNav()
 };
 function growShrinkLogo() {
        var Logo_Image = document.getElementById("logo_nav")
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
        Logo_Image.style.display='block';
        Logo_Image.style.transition = '0.2s';
    } else {
        Logo_Image.style.display='none';
    }   
}

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.body.style.overflowY = 'hidden';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.body.style.transition = '.5s ease';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.overflowY = 'scroll';
    document.body.style.backgroundColor = "white";
    document.body.style.transition = '.5s ease';
    
}

function openModal() {
    document.getElementById('myModal').style.display = "block";
    document.body.style.overflowY = 'hidden';
    
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.body.style.overflowY = 'scroll';
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
    var dots = document.getElementsByClassName("modal_demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }