
var icon = document.querySelector('.burger-button');
console.log(icon)
var menu = document.querySelector('.burger-menu');
console.log(menu)
var body = document.querySelector('body');
console.log(body)

icon.onclick = function() {
  icon.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
  };

  //SWIPER

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
        // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
    slidesPerView: 1,

    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 25},
      700: {
        slidesPerView: 2,
        spaceBetween: 25
      },

      1000: {
        slidesPerView: 2.5,
        spaceBetween: 25
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25
      }
    },

    
  

  });
  