document.addEventListener("DOMContentLoaded", function() {

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

		$('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		nav: true,
	})

$('.clients_slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3
});




});
