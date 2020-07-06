document.addEventListener('DOMContentLoaded', () => {

  var swiper = new Swiper('.swiper-container', {
     effect: 'coverflow',
     grabCursor: true,
     spaceBetween: 90,
     centeredSlides: true,
     slidesPerView:3,
     initialSlide:1,
     coverflowEffect: {
       rotate: 30,
       stretch: 0,
       depth: 300,
       modifier: 1,
       slideShadows : false,
     },
     pagination: {
       el: '.swiper-pagination',
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });

   var active = false;


   const display_r = () => {
     document.querySelector('.responsive').style.display = 'block';
     active = true;
   }


   const nondisplay_r = () => {
     document.querySelector('.responsive').style.display = 'none';
     active = false;
   }






   document.querySelector('.burger').onclick = () => {
     if (active) {
       nondisplay_r()
     }
     else {
       display_r()
     }
   }








































})
