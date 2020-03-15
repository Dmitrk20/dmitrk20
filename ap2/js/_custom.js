document.addEventListener("DOMContentLoaded", function() {

	$('#nav-icon1').click(function(){
		$('#nav-icon3').addClass('open3');
	});


		$('#nav-icon2').click(function(){
		$(this).toggleClass('open1');
	});




		$('#nav-icon3').click(function(){
		$(this).removeClass('open3');
		$('#overlay').removeClass('open');
	});

		$('.owl-carousel').owlCarousel({
		items: 1,
		// autoplay: true,
		// loop: true,
		nav: true,
	})

$('.clients_slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3
});

new WOW().init();

	$('#nav-icon1').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


 var Mwidth = 960; // mobile devices
    if ($(window).width() > Mwidth) {
        var headerHeight = $('.main-menu').height();
        $(window).on('scroll', {
                TopPrev: 0
            },
            function() {
                var TopCurrent = $(window).scrollTop();
                //check if user is scroll up
                if (TopCurrent < this.TopPrev) {
                    //if scroll up
                    if (TopCurrent > 0 && $('.main-menu').hasClass('fixed-menu')) {
                        $('.main-menu').addClass('visible-scroll-up');
                    } else {
                        $('.main-menu').removeClass('visible-scroll-up fixed-menu');
                    }
                } else {
                    //if scroll down
                    $('.main-menu').removeClass('visible-scroll-up');
                    if (TopCurrent > headerHeight && !$('.main-menu').hasClass('fixed-menu')) $('.main-menu').addClass('fixed-menu');
                }
                this.TopPrev = TopCurrent;
            });
    }


     $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	  var target = $(this).attr('href'),
	   bl_top = $(target).offset().top;
	  $('body, html').animate({scrollTop:bl_top}, 1000);
	  return false;
	 })



});
