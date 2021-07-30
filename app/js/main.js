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



  /* ---------------------------------------------- /*
   * Smooth scroll / Scroll To Top
  /* ---------------------------------------------- */

  // header Navbar
  // $('.header').sticky({
  //   topSpacing: 0
  // });


  // var position = 0;
  // var $element = $('.header');
  // var scrollTop = $(this).scrollTop();
  // if( scrollTop <= 0 ) { 
  //   $element.removeClass('hide').removeClass('scrolling');
  // } else if( scrollTop < position ) {
  //   $element.removeClass('hide');
  // } else if( scrollTop > position ) {
  //   $element.addClass('scrolling');
  //   if( scrollTop + $(window).height() >=  $(document).height() - $element.height() ){
  //     $element.removeClass('hide');
  //   } else if(Math.abs($element.position().top) < $element.height()) {
  //     $element.addClass('hide');
  //   }
  // }
  // position = scrollTop;

  //static_header
  
  // $('body').scrollspy({
  //   target: '.header__inner',
  //   offset: 70
  // })


  //skills
  // $('#skills').waypoint(function () {
  $('.chart').each(function () {
    $(this).easyPieChart({
      size: 140,
      // animate: 2000,
      lineCap: 'butt',
      scaleColor: false,
      barColor: '#ffd100',
      trackColor: 'transparent',
      lineWidth: 10
    });
  });
  // }, { offset: '100%' });

  //  E-mail validation
  // function isValidEmailAddress(emailAddress) {
  //   var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  //   return pattern.test(emailAddress);
  // };

  // // contact form ajax
  // $('#contact-form').submit(function (e) {

  //   e.preventDefault();

  //   var c_name = $('#c_name').val();
  //   var c_email = $('#c_email').val();
  //   var c_message = $('#c_message ').val();
  //   var response = $('#contact-form .ajax-response');

  //   var formData = {
  //     'name': c_name,
  //     'email': c_email,
  //     'message': c_message
  //   };

  //   if ((c_name == '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email))) {
  //     response.fadeIn(500);
  //     response.html('<i class="fa fa-warning"></i> Исправьте ошибку и повторите ввод заново.');
  //   }

  //   else {
  //     $.ajax({
  //       type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
  //       url: 'app/php/contact.php', // the url where we want to POST
  //       data: formData, // our data object
  //       dataType: 'json', // what type of data do we expect back from the server
  //       encode: true,
  //       success: function (res) {
  //         var ret = $.parseJSON(JSON.stringify(res));
  //         response.html(ret.message).fadeIn(500);
  //       }
  //     });
  //   }
  //   return false;
  // });
});