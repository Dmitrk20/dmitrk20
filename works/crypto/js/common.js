$(function() {

	function countdown() {

var now = new Date();
var eventDate = new Date($('.timer').attr('data-timer'));
var currentTime = now.getTime();
var evenTime = eventDate.getTime();

var remTime = evenTime - currentTime;

var sec = Math.floor(remTime / 1000);
var min = Math.floor(sec / 60);
var hur = Math.floor(min / 60);
var day = Math.floor(hur / 24);

 hur %= 24;
 min %= 60;
 sec %= 60;

hur = (hur < 10) ? "0" + hur : hur;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;

$('.seconds').text(sec);
$('.minutes').text(min);
$('.hours').text(hur);
$('.days').text(day);

setTimeout(countdown, 1000);
}

countdown();


$('input[name="phone"]').mask("+7 (999) 999-9999");

$('.question__btn').magnificPopup({
	type: 'inline',
	removalDelay: 500,
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true
});


	$(function () {
	    $('a[href*="#"]:not([href="#"])').click(function () {
	    //        Если не использовать scroll active
	
	    //        $('a').each(function () {
	    //            $(this).removeClass('active');
	    //        })
	    //        $(this).addClass('active');
	    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	        if (target.length) {
	            $('html, body').animate({
	                scrollTop: target.offset().top - 40
	            }, 500);
	            return false;
	        }
	    }
	 });
	});



	$('.btn__prog').click(function () {
		$('.popup input[name="Откуда заявка"]').val($(this).text());
	});
	

  $(window).scroll(function(){
  	var parallax = $(this).scrollTop();

  	$('.middle__1i').css({
  		'transform' : "translate(-50%, " + parallax /3 + "%",
  		'margin-left' :  664 -+ parallax /2 + "px"
  	});

  	$('.middle__2i').css({
  		'margin-top' : '-100px',
  		'transform' : "translate(-50%, " + parallax /4 + "%",
  		'margin-left' :  582 - + parallax /4 + "px"
  	});

  	$('.program__1i').css({
  		'transform' : "translate(-50%, -" + parallax /8 + "%",
  		'margin-left' :  -700 + + parallax /10 + "px"
  	});

  	$('.program__2i').css({
  		'transform' : "translate(-50%, " + parallax /10 + "%",
  		'margin-left' :  730 - + parallax /10 + "px"
  	});

  	$('.program__3i').css({
  		'transform' : "translate(-50%, " + parallax /10 + "%",
  		'margin-left' :  -472 - + parallax /30 + "px"
  	});

  	$('.program__4i').css({
  		'transform' : "translate(-50%, " + parallax /10 + "%",
  		'margin-left' :  421 - - parallax /10 + "px"
  	});

  	$('.program__5i').css({
  		'transform' : "translate(-50%, " + parallax /20 + "%",
  		'margin-left' :  -489 + - parallax /10 + "px"
  	});

  	$('.program__6i').css({
  		'margin-left' :  541 + - parallax /30 + "px"
  	});

  	$('.team__1i').css({
  		'margin-top' : '-50px',
  		'transform' : "translate(-50%, " + parallax /10 + "%",
  		'margin-left' :  -425 - - parallax /30 + "px"
  	});

  	$('.team__2i').css({
  		'margin-top' : '-170px',
  		'transform' : "translate(-50%, " + parallax /7 + "%",
  		'margin-left' :  316 + - parallax /30 + "px"
  	});

  	$('.team__3i').css({
  		'transform' : "translate(-50%, " + parallax /20 + "%",
  		'margin-left' :  -449 + - parallax /30 + "px"
  	});

  	$('.team__4i').css({
  		'transform' : "translate(-50%, " + parallax /20 + "%",
  		'margin-left' :  181 - - parallax /30 + "px"
  	});

  	$('.team__5i').css({
  		'margin-top' : -1300 + + parallax /3 + "px",
  	});

  	$('.rich__1i').css({
  		'margin-left' :  -663 + parallax /10 + "px"
  	});

  	$('.rich__2i').css({
  		'margin-left' :  1030 + - parallax /10 + "px"
  	});
	});
	 

 


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку! Наш менеджер свяжется с Вами!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();
				
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
