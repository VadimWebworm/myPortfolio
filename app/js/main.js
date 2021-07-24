$(function () {

  // window.onload = function () {
  //     document.body.classList.add('loaded_hiding');
  //     window.setTimeout(function () {
  //       document.body.classList.add('loaded');
  //       document.body.classList.remove('loaded_hiding');
  //     }, 500);
  //   }
  //   $(window).load(function() {});
  $(document).ready(function () {

    $(".screen-height").height($(window).height());

    $(window).resize(function () {
      $(".screen-height").height($(window).height());
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $('#home').css({ 'background-attachment': 'scroll' });
    } else {
      $('#home').parallax('50%', 0.1);
    }
  });

  $(document).ready(function ($) {
    $(".header").menu();
  });



});