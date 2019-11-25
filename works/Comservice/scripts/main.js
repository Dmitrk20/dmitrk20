$(document).ready(function(){
	// Scroll
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	       $('body').addClass('body-scroll');
	    }
	    else {
	       $('body').removeClass('body-scroll');
	    }
	});
	$("a.scrollto").click(function () {
	    var elementClick = $(this).attr("href")
	    var destination = $(elementClick).offset().top;
	    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	    return false;
	});
	$(".sticker").sticky({
		zIndex: 20,
		topSpacing: 0,
	});

	// Menu mobile
	$(".modal-menu__switcher").click(function () {
		$("body").addClass("lock");
		$(".modal-menu").addClass("opened");
	})
	$(".modal-menu__close").click(function () {
		$("body").removeClass("lock");
		$(".modal-menu").removeClass("opened");
	})

	// Show phones
	$(".header-phones__btn").click(function () {
		$(".header-phones-modal").css("display", "block");
		$("#overlay").css("display", "block");
	})
	$(".header-phones-modal_close, #overlay").click(function () {
		$(".header-phones-modal").css("display", "none");
		$("#overlay").css("display", "none");
	})


	// Mainscreen slider
	$('.mainscreen-slider').slick({
		infinite: true,
		dots: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 5000
	});

	// Mainarticles slider
	$('.mainarticles-slider').slick({
		infinite: true,
		dots: true,
		arrows: true,
		// fade: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 5000
	});

	// Partners carousel
	$('.partners-carousel').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1699,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 639,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});

	// Works carousel on mobile
	$works_mobile_carousel = $('.works-mobile-carousel');
	settings_slider = {
		dots: false,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	slick_on_mobile($works_mobile_carousel, settings_slider);
	function slick_on_mobile(slider, settings){
	    $(window).on('load resize', function() {
	    	if ($(window).width() > 767) {
	    	  if (slider.hasClass('slick-initialized')) {
	    	  	slider.slick('unslick');
	    	  }
	    	  return
	    	}
	    	if(!slider.hasClass('slick-initialized')) {
	    		return slider.slick(settings);
	    	}
	    });
	};

	// About video slider
	$('.about-video-slider').slick({
		infinite: true,
		dots: true,
		arrows: true,
		// fade: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 5000
	});

	// Fullpage
	if($('#fullpage').length > 0){
		$('#fullpage').fullpage({
			scrollOverflow: true
		});
	}

	// Object-fit:cover; for IE
	var userAgent, ieReg, ie;
	userAgent = window.navigator.userAgent;
	ieReg = /msie|Trident.*rv[ :]*11\./gi;
	ie = ieReg.test(userAgent);
	if(ie) {
		$(".img-container").each(function () {
			var $container = $(this),
			    imgUrl = $container.find("img").prop("src");
			if (imgUrl) {
			  $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
			}
		});
	}

	// Modal phones
	$(".header-phones__btn").click(function(){
		$(".header-phones-modal").css("display", "block");
	});

	// Modal window - callback
	$(".btn-callback").click(function(e){
		e.preventDefault();
		$('#modal-callback').arcticmodal({
			beforeOpen: function(){
				$(".header").addClass("has-scroll")
            },
            afterClose: function(){
				$(".header").removeClass("has-scroll")
            }
		});
	});

	// Phone mask
	$(".phone-mask").mask("+7 (999) 999 99 99");

	// Placeholder for IE
	$('input, textarea').placeholder();
}); 