$(document).ready(function () {
    $('.product-a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').hide();
        
    });
    $('.telwe-a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').hide();
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
});