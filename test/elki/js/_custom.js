document.addEventListener("DOMContentLoaded", function() {

	$('#owl-carousel1').owlCarousel({
		items: 2,
		autoplay: true,
		loop: true,
		responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
	});

	$('#owl-carousel2').owlCarousel({
		items: 4,
		autoplay: true,
		loop: true,
		responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
	})

	 $('.image-link').magnificPopup({type:'image'});


		 $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	  var target = $(this).attr('href'),
	   bl_top = $(target).offset().top;
	  $('body, html').animate({scrollTop:bl_top}, 1000);
	  return false;
	 })

$('.popup_1').magnificPopup();
$('.popup_2').magnificPopup();
$('.popup_3').magnificPopup();
$('.popup_4').magnificPopup();
$('.popup_5').magnificPopup();
$('.popup_6').magnificPopup();
$('.popup_7').magnificPopup();
$('.popup_8').magnificPopup();
$('.popup_9').magnificPopup();
$('.popup_10').magnificPopup();
$('.popup_11').magnificPopup();
$('.popup_12').magnificPopup();
$('.popup_13').magnificPopup();
$('.popup_14').magnificPopup();
$('.popup_15').magnificPopup();
$('.popup_16').magnificPopup();
$('.popup_17').magnificPopup();
$('.callback').magnificPopup();

});
