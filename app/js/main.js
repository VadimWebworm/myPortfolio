$(function () {
  //preloader
  $(window).on('load', function () {
    $('.preloader-inner').fadeOut();
    $('.preloader').delay(300).fadeOut('slow');
  });
  //logo
  $(".screen-height").height($(window).height());

  $(window).on('resize', function () {
    $(".screen-height").height($(window).height());
  });

  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  //   $('#home').css({ 'background-attachment': 'scroll' });
  // } else {
  //   $('#home').parallax('50%', 0.1);
  // }

  // $('a[href*=#]').bind("click", function(e){
           
  //   var anchor = $(this);
  //   $('html, body').stop().animate({
  //     scrollTop: $(anchor.attr('href')).offset().top
  //   }, 1000);
  //   e.preventDefault();
  // });

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
  });

  //header Navbar
  $('.header').sticky({
    topSpacing: 0
  });


  $('body').scrollspy({
    target: '.header__inner',
    offset: 70
  })

 

});