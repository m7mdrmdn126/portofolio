document.addEventListener('DOMContentLoaded', () => {

  var swiper = new Swiper('.swiper-container', {
     effect: 'coverflow',
     grabCursor: true,
     spaceBetween: 20,
     centeredSlides: true,
     slidesPerView:3,
     coverflowEffect: {
       rotate: 50,
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


})
