$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
          $('.overlay').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
          $('.overlay').removeClass('active');
      }

      if($('.hamburger').hasClass('active')) {
          $('.overlay').click(function() {
              $('.hamburger').removeClass('active');
              $('.overlay').removeClass('active');
              $('.globalMenuSp').removeClass('active');
          })
      }
  });

  jQuery(window).on('scroll', function () {
    if (jQuery('.header').height() < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('change-color');
    } else {
        jQuery('.header').removeClass('change-color');
    }
});
});