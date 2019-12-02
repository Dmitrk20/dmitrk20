document.addEventListener("DOMContentLoaded", function() {

	$(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: true,
		responsive: {
			0:{
				items:1,
			},
			500:{
				items:3,
			}
		}
  });

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$('#nav-icon1').click(function(){
		// $('.header-mobile-list').css('display','none')
		// $('.wrapper-open').css('display','block')
		$('.header-nav').toggleClass('db')
		// $('.wrapper-open').toggleClass('db')
	})

	$('.header-nav a').click(function(){
		$('#nav-icon1').removeClass('open')
		$('.header-nav').removeClass('db')
		$('.header-nav').addClass('dn')

	})


	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top;
  $('body, html').animate({scrollTop:bl_top}, 1000);
  return false;
 })

});
