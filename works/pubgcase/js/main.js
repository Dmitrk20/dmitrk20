$(document).ready(function(){
  $('.slider-last').slick({
    dots: false,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });

  $('.slider-rnd').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('.i_phone').mask('+7 (999) 999-99-99');


  $("nav .pull").on('click', function(e) {
    e.preventDefault();
    $("nav ul").slideToggle();
  });

  $(".btn").on('click', function(e) {
    e.preventDefault();
    $('#window-solution').arcticmodal();
  });

  $('#window-payment').arcticmodal();

  $('a[href^="#"]').click(function(){
      var el = $(this).attr('href');
      $('html,body').animate({
          scrollTop: $(el).offset().top}, 1000);
      return false; 
  });

});





function closeModal(){
    $('#window-thanks').arcticmodal('close');
}


function sendForm(form_id,res_div) {
    var msg = $('#'+form_id).serialize();

    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: msg,
      success: function(data){
        if (form_id=="form_solution"){$('#window-solution').arcticmodal('close');$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id=="form_consultation"){$('#window-consultation').arcticmodal('close');$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id=="form_question"){$('#window-question').arcticmodal('close');$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id=="form_support"){$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        if (form_id=="form_contacts"){$('#window-thanks').arcticmodal();setTimeout(closeModal, 5000);}
        jQuery("#"+form_id).trigger("reset");
      },
      error:  function(xhr, str){
        jQuery("#"+form_id).trigger("reset");
      }
    });
}