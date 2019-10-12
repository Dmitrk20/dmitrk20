$(document).ready(function(){
   $(window).resize(function() {
    if ($(window).width() <= 992) {
        //if ($.fn.fullPage) {
        $.fn.fullpage.destroy();
        //}
    }else {
      $('#fullpage').fullpage({
      //options here
      autoScrolling: true,
      scrollOverflow: true,
      anchors: ['action', 'about', 'request', 'contacts'],
      menu: '#menu',
      responsiveWidth: 992,
      scrollHorizontally: true
    });
    }
  });
  if($(window).width() >= 992) {
    $('#fullpage').fullpage({
      //options here
      autoScrolling: true,
      scrollOverflow: true,
      anchors: ['action', 'about', 'request', 'contacts'],
      menu: '#menu',
      responsiveWidth: 992,
      scrollHorizontally: true
    });
  }

    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $('.mob-menu').slideToggle();
      $('body').toggleClass("active");
      $('header').toggleClass("active");
    });
    $('.mob-menu li a').click(function(){
      $('.hamburger').removeClass('is-active');
      $('.mob-menu').slideToggle();
      $('body').removeClass('active');
      $('header').removeClass('active');
    });

    // $(".tab-pane1").mCustomScrollbar({});
    // $(".tab-pane2").mCustomScrollbar({});
    // $(".tab-pane3").mCustomScrollbar({});
     $( "#slider-range" ).slider({
      range: "min",
      value: 10,
      min: 10,
      max: 1000,
      slide: function( event, ui ) {
        $( ".price_from" ).val(ui.value );
      }
    });
    $( ".price_from" ).val($( "#slider-range" ).slider( "value" ) );
});

// if($(window).width() >= 992) {
//   $(".inner-info").mCustomScrollbar({});
// }

$(".inner-info").mCustomScrollbar({});



var date_new = '2019/05/01 22:16:00';
$('#day').countdown(date_new)
.on('update.countdown', function(event) {
  var format = '%D';
  $(this).html(event.strftime(format));
})
$('#hours').countdown(date_new)
.on('update.countdown', function(event) {
  var format = '%H';
  $(this).html(event.strftime(format));
})
$('#minutes').countdown(date_new)
.on('update.countdown', function(event) {
  var format = '%M';
  $(this).html(event.strftime(format));
})


jQuery(window).scroll(function(){
        var $sections = $('.section');
        $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
            $('.menu-item li.active').removeClass('active');
            $('a[href="#'+id+'"]').closest('li').addClass('active');
        }
    })
 });

$(".menu-item").on("click", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),

        top = $(id).offset().top;
     
    $('body,html').animate({scrollTop: top-68}, 800);
});

jQuery(".form-with-captcha").submit(function(event){ 
  var form = jQuery(this); 
  var error = false; 
  if (!error) { 
    var data = form.serialize();
    jQuery.ajax({ 
       type: 'POST',
       url: 'send/callback.php', 
       dataType: 'json', 
       data: data,
       beforeSend: function(){
        var $captcha = $( '.form-with-captcha #recaptcha' ),
        response = grecaptcha.getResponse();
  
        if (response.length === 0) {
          if( !$captcha.hasClass( "error" ) ){
            $captcha.addClass( "error" );
            $('.form-with-captcha .error-text').addClass('visible');
          }return false;
        } else {
          $captcha.removeClass( "error" );
          $('.form-with-captcha .error-text').removeClass('visible');
        }
       }, 
       success: function(data){ 
        if (data['error']) { 
          alert(data['error']); 
        } else { 
          jQuery("form button[type='submit']").addClass('disabled');
          if ($(form).hasClass('form-with-captcha')) {
              $('.form-with-captcha .form-content').css('display', 'none');
              $('.form-with-captcha .thx-block').css('display', 'block');
           }
          setTimeout(function() {
            if ($(form).hasClass('form-with-captcha')) {
              $('.form-with-captcha .form-content').css('display', 'block');
              $('.form-with-captcha .thx-block').css('display', 'none');
            }
          },3000)
          jQuery('.form-with-captcha').trigger( 'reset' );
        }
       },
       error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status); 
        alert(thrownError); 
       },
       complete: function(data) { 
        form.find('button[type="submit"]').prop('disabled', false); 
       }
  });
  }
  return false; 
});

jQuery(".form-with-captcha2").submit(function(event){ 
  var form = jQuery(this); 
  var error = false; 
  if (!error) { 
    var data = form.serialize();
    jQuery.ajax({ 
       type: 'POST',
       url: 'send/callback.php', 
       dataType: 'json', 
       data: data,
       // beforeSend: function(){
       //  var $captcha = $( '.form-with-captcha2 #recaptcha' ),
       //  response = grecaptcha.getResponse();
  
       //  if (response.length === 0) {
       //    if( !$captcha.hasClass( "error" ) ){
       //      $captcha.addClass( "error" );
       //      $('.form-with-captcha2 .error-text').addClass('visible');
       //    }return false;
       //  } else {
       //    $captcha.removeClass( "error" );
       //    $('.form-with-captcha2 .error-text').removeClass('visible');
       //  }
       // }, 
       success: function(data){ 
        if (data['error']) { 
          alert(data['error']); 
        } else { 
          jQuery("form button[type='submit']").addClass('disabled');
          if ($(form).hasClass('form-with-captcha2')) {
              $('.form-with-captcha2 .form-content').css('display', 'none');
              $('.form-with-captcha2 .thx-block').css('display', 'block');
           }
          setTimeout(function() {
            if ($(form).hasClass('form-with-captcha2')) {
              $('.form-with-captcha2 .form-content').css('display', 'block');
              $('.form-with-captcha2 .thx-block').css('display', 'none');
            }
          },3000)
          jQuery('.form-with-captcha2').trigger( 'reset' );
        }
       },
       error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status); 
        alert(thrownError); 
       },
       complete: function(data) { 
        form.find('button[type="submit"]').prop('disabled', false); 
       }
  });
  }
  return false; 
});



jQuery(".request-form").submit(function(event){ 
  var form = jQuery(this); 
  var error = false; 
  if (!error) { 
    var data = form.serialize();
    jQuery.ajax({ 
       type: 'POST',
       url: 'send/callback.php', 
       dataType: 'json', 
       data: data,
       // beforeSend: function(){
       //  var $captcha = $( '.form-with-captcha2 #recaptcha' ),
       //  response = grecaptcha.getResponse();
  
       //  if (response.length === 0) {
       //    if( !$captcha.hasClass( "error" ) ){
       //      $captcha.addClass( "error" );
       //      $('.form-with-captcha2 .error-text').addClass('visible');
       //    }return false;
       //  } else {
       //    $captcha.removeClass( "error" );
       //    $('.form-with-captcha2 .error-text').removeClass('visible');
       //  }
       // }, 
       success: function(data){ 
        if (data['error']) { 
          alert(data['error']); 
        } else { 
          jQuery("form button[type='submit']").addClass('disabled');
          if ($(form).hasClass('form-with-captcha2')) {
              $('.form-with-captcha2 .form-content').css('display', 'none');
              $('.form-with-captcha2 .thx-block').css('display', 'block');
           }
          setTimeout(function() {
            if ($(form).hasClass('form-with-captcha2')) {
              $('.form-with-captcha2 .form-content').css('display', 'block');
              $('.form-with-captcha2 .thx-block').css('display', 'none');
            }
          },3000)
          jQuery('.form-with-captcha2').trigger( 'reset' );
        }
       },
       error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status); 
        alert(thrownError); 
       },
       complete: function(data) { 
        form.find('button[type="submit"]').prop('disabled', false); 
       }
  });
  }
  return false; 
});




function initMap() {
  var myLatLng = {lat: 55.356071, lng: 86.157022};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    draggable:false,
    animation: google.maps.Animation.DROP,
  });


};


