document.addEventListener("DOMContentLoaded", function() {

	$('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: true,
		// responsive: {
  //   0: {
  //     items: 1
  //   },
  //   600: {
  //     items: 2
  //   },
  //   1000: {
  //     items: 2
  //   }
  // }
	});

		$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

			$('#nav-icon1').click(function(){
		$('.header_nav-mobile').toggleClass('open-menu')
	})

$('.header_nav-mobile a').click(function(){
			$('.header_nav-mobile').removeClass('open-menu')
			$('#nav-icon1').removeClass('open')
		})

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	  var target = $(this).attr('href'),
	   bl_top = $(target).offset().top;
	  $('body, html').animate({scrollTop:bl_top}, 1000);
	  return false;
	 })

 $('.overlay').click(function(){
		$('.overlay').css('display','none')
		$('.thank').css('display','none')
	})

  $('.thank_popup-close').click(function(){
		$('.overlay').css('display','none')
		$('.thank').css('display','none')
	})

	  $('.popup-closed').click(function(){
		$('.overlay-popup').css('display','none')
		$('.popup').css('display','none')
	})



  $('.button-sub').click(function(){
    $('.popup').css('display','block')
    $('.overlay-popup').css('display','block')
  });

  $('.overlay-popup').click(function(){
		$('.overlay-popup').css('display','none')
		$('.popup').css('display','none')
	}) 

});
