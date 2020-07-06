document.addEventListener('DOMContentLoaded', () => {
  sessionStorage.clear();
  localStorage.clear();

  window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

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
     var anim_a = document.querySelectorAll('.r-anim');
     var index = 0;
     anim_a.forEach((item, index) => {
       if(item.style.animation){
         item.style.animation = '';
       }
       else{
         item.style.animation = 'nav-link-fade 0.5s ease forwards '+ (index/7+0.5) + 's';
         index += 1 ;
       }

     });

     document.querySelector('.responsive').classList.toggle("responsive-act");
     document.querySelector('.line1').classList.toggle("line1-c");
     document.querySelector('.line2').classList.toggle("line2-c");
     document.querySelector('.line3').classList.toggle("line3-c");
     active = true;
   }


   const nondisplay_r = () => {
     document.querySelector('.responsive').classList.remove("responsive-act");
     document.querySelector('.line1').classList.remove("line1-c");
     document.querySelector('.line2').classList.remove("line2-c");
     document.querySelector('.line3').classList.remove("line3-c");
     active = false;

     var anim_a = document.querySelectorAll('.r-anim');
     var index = 0;
     anim_a.forEach((item, index) => {
       if(item.style.animation){
         item.style.animation = '';
       }
       else{
         item.style.animation = 'nav-link-fade 0.5s ease forwards '+ (index/7+0.5) + 's';
         index += 1 ;
       }
       });


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
