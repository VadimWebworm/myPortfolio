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

  //header Navbar
  $('.header').sticky({
    topSpacing: 0
  });

  $('body').scrollspy({
    target: '.navbar-custom',
    offset: 70
  })

  // $(".header").menu();

});