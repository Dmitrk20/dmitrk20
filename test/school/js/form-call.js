$(document).ready(function() {
	
	$('.supmenicon').click(function () {
		$('.menubg').toggleClass('active')
	})

	$('.menu > li > a').click(function(){
		$('.menubg').removeClass('active')
	})

    $('.kr_sod_2').hide();
    $('.kr_sod_1').click(function(){
        $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
        if($(this).hasClass('opened')) {
            //$(this).html('Скрыть отзыв');
        }
        else {
            //$(this).html('Показать отзыв');
        }
    });  

    $(".menu a[href*=#]").bind("click", function(e){
    		var anchor = $(this);
    		$('html, body').stop().animate({
    			scrollTop: $(anchor.attr('href')).offset().top
    		}, 500);
    		e.preventDefault();
    		return false;
    	});

	$('.lsee_2').hide();
    $('.lsee_1').click(function(){
        $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
        if($(this).hasClass('opened')) {
            //$(this).html('Скрыть отзыв');
        }
        else {
            //$(this).html('Показать отзыв');
        }
    });  

    $('.ask_i_desc').hide();
    $('.ask_i_head').click(function(){
        $(this).toggleClass('ask_opened').next().slideToggle();
        if($(this).hasClass('ask_opened')) {
            //$(this).html('Скрыть отзыв');
        }
        else {
            //$(this).html('Показать отзыв');
        }
    });
	//Модальные окна
	$('.show-1').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-1').fadeIn();
		//yaCounter33217233.reachGoal('GetForm1');
	});
	$('.show-2').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-2').fadeIn();
		//var btnname = $(this).attr('data-btn');
		$('#fbtnname').val($(this).attr('data-btn'));
		//yaCounter33217233.reachGoal('GetForm2');
	});
	$('.show-3').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-3').fadeIn();
		//yaCounter33217233.reachGoal('GetForm4');
	});
	$('.show-4').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-4').fadeIn();
	});
	$('.show-5').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-5').fadeIn();
	});

	$('.show-6').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-6').fadeIn();
	});

	$('.cover_video').click(function(e) {
		var keysitem = $(this).parents('.keys_item');
		e.preventDefault();
		var youtubel = $(this).attr("youtubelink");
		console.log(youtubel);
		var youtube = "<iframe width='100%' height='220' src='https://www.youtube.com/embed/"+ youtubel +"?autoplay=1' frameborder='0' allowfullscreen></iframe>"
		$('.video_over',keysitem).html(youtube);
	});


	//Модальное окно с сайтом
	$('.open_site').click(function(e) {
		$('body').css('overflow','hidden');
		var keys_par = $(this).parents('.portfolio_item');
		var urldev = $(this).attr('site-url');
		frame = '<iframe src="'+ urldev +'" class="iframe-site"></iframe>';
		document.getElementById("framewrap").innerHTML = frame;
		e.preventDefault();

		$('.overlay').show();
		$('#modal-site').fadeIn();
	});




	$('.overlay').click(function(e) {
		e.preventDefault();
		$('.overlay').hide();
		$('#modal-form-1').fadeOut();
		$('#modal-form-2').fadeOut();
		$('#modal-form-3').fadeOut();
		$('#modal-form-4').fadeOut();
		$('#modal-form-5').fadeOut();
		$('#modal-form-6').fadeOut();
		$('#modal-site').fadeOut();
		$('#modal-success').fadeOut();
		$('body').css('overflow','initial');
	});

	$('.close').click(function(e) {
		e.preventDefault();
		$('.overlay').hide();
		$('#modal-form-1').fadeOut();
		$('#modal-form-2').fadeOut();
		$('#modal-form-3').fadeOut();
		$('#modal-form-4').fadeOut();
		$('#modal-form-5').fadeOut();
		$('#modal-form-6').fadeOut();
		$('#modal-site').fadeOut();
		$('#modal-success').fadeOut();
		$('body').css('overflow','initial');
	});

	 img_width_2 =  $('.portfolio_item').outerWidth();
	 $('.portfolio_item').css({'height': img_width_2});
	 $('.port_stat').css({'height': img_width_2, 'width': img_width_2});

	//Отправщик
	$('.send-btn').click(function(e) {
		e.preventDefault();
		var utms = $('#f-utm').val();
		var key = $('#key').val();//ключ
		var kamp = $('#kamp').val();//кампания
		var source = $('#source').val();//кампания
		var f = $(this).parents('.form-block');
		$('input[type=text]', f).removeClass('ierror');
		var phone = $('.fphone', f).val();
		var city = $('#f-yacity').val();
		var formname = $('.fformname', f).val();
		var email = $('.femail', f).val();
		var url = window.location.href;
		var error = false;
		if(phone == '') {
			$('.fphone', f).addClass('ierror');
			error = true;
		}
		if(email == undefined || email == '') {
			email= '-';
		}
		if(error) {
			return false;
		}

		if(kamp == undefined || kamp == '') {
			kamp= '-';
		}

		if(key == undefined || key == '') {
			key= '-';
		}

		if(source == undefined || source == '') {
			source= '-';
		}

		var goal = $('.goal', f).val();

		var query = 'act=sender';
			query += '&phone=' + encodeURIComponent(phone);
			query += '&email=' + encodeURIComponent(email);
			query += '&url=' + encodeURIComponent(url);
			query += '&city=' + encodeURIComponent(city);
			query += '&formname=' + encodeURIComponent(formname);
			query += '&utms=' + encodeURIComponent(utms);
			query += '&kamp=' + encodeURIComponent(kamp);
			query += '&source=' + encodeURIComponent(source);
			query += '&key=' + encodeURIComponent(key);

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				if(data.result == 'ok') {
					//echo
					$('#modal-form-5').hide();
					$('#modal-form-4').hide();
					$('#modal-form-3').hide();
					$('#modal-form-2').hide();
					$('#modal-form-1').hide();

					$('.overlay').show();
					$('#modal-success').fadeIn();


					gtag('event', 'zakaz', {
					  'event_category': 'forma'
					});

					yaCounter33217233.reachGoal('GetFormAll');	
					/*switch (goal) {
					    case '1':
					  	yaCounter33217233.reachGoal('GetForm12');
					    break
					  	case '2':
					  	yaCounter33217233.reachGoal('GetForm22');
					    break
					  	case '3':
					  	yaCounter33217233.reachGoal('GetForm3');
					    break
					    case '4':
					  	yaCounter33217233.reachGoal('GetForm42');
					    break
					 default:
					    yaCounter33217233.reachGoal('GetForm3');
					}*/

				} else {
					alert('Ошибка!');
				}
			}
		});

		$('.fphone', f).val('');
		$('.femail', f).val('');
		return false;
	});

	//Отправщик-2
	$('.send-btn-2').click(function(e) {
		e.preventDefault();
		var utms = $('#f-utm').val();
		var key = $('#key').val();//ключ
		var kamp = $('#kamp').val();//кампания
		var source = $('#source').val();//кампания
		var f = $(this).parents('.form-block');
		$('input[type=text]', f).removeClass('ierror');
		var phone = $('.fphone', f).val();
		var city = $('#f-yacity').val();
		var formname = $('.fformname', f).val();
		var email = $('.femail', f).val();
		var url = window.location.href;
		var error = false;
		if(phone == '') {
			$('.fphone', f).addClass('ierror');
			error = true;
		}
		if(email == undefined || email == '') {
			email= '-';
		}
		if(error) {
			return false;
		}

		if(kamp == undefined || kamp == '') {
			kamp= '-';
		}

		if(key == undefined || key == '') {
			key= '-';
		}

		if(source == undefined || source == '') {
			source= '-';
		}

		var goal = $('.goal', f).val();

		var query = 'act=sender';
			query += '&phone=' + encodeURIComponent(phone);
			query += '&email=' + encodeURIComponent(email);
			query += '&url=' + encodeURIComponent(url);
			query += '&city=' + encodeURIComponent(city);
			query += '&formname=' + encodeURIComponent(formname);
			query += '&utms=' + encodeURIComponent(utms);
			query += '&kamp=' + encodeURIComponent(kamp);
			query += '&source=' + encodeURIComponent(source);
			query += '&key=' + encodeURIComponent(key);

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				if(data.result == 'ok') {
					//echo
					$('#modal-form-6').hide();
					$('#modal-form-5').hide();
					$('#modal-form-4').hide();
					$('#modal-form-3').hide();
					$('#modal-form-2').hide();
					$('#modal-form-1').hide();

					$('.overlay').show();
					$('#modal-success').fadeIn();

					// $('#course_link').trigger('click');
					setTimeout(function(){
						window.open('https://antitreningi.ru/igdivtzv');
					}, 500)
					


					gtag('event', 'zakaz', {
					  'event_category': 'forma'
					});

					yaCounter54885298.reachGoal('GetFormAll');	
					/*switch (goal) {
					    case '1':
					  	yaCounter33217233.reachGoal('GetForm12');
					    break
					  	case '2':
					  	yaCounter33217233.reachGoal('GetForm22');
					    break
					  	case '3':
					  	yaCounter33217233.reachGoal('GetForm3');
					    break
					    case '4':
					  	yaCounter33217233.reachGoal('GetForm42');
					    break
					 default:
					    yaCounter33217233.reachGoal('GetForm3');
					}*/

				} else {
					alert('Ошибка!');
				}
			}
		});

		$('.fphone', f).val('');
		$('.femail', f).val('');
		return false;
	});

	//Маска
	$('.fphone').maskinp('+7 (999) 999-99-99');

	//Слайдер
    $('.search_line').slick({
    	//dots: true,
    	speed: 1800, 
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows: false,
	  draggable: false,
	  pauseOnHover: false,
	});
	 $('.mac_screen').slick({
    	//dots: true,
    	speed: 1800, 
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows: false,
	   draggable: false, 
	   pauseOnHover: false,
	 // fade: true,
 // cssEase: 'linear'
	});
	/*
	$('.portfolio').slick({
	    centerMode: true,
	  centerPadding: '60px',
	  infinite: true,
	  slidesToShow: 3,
	  variableWidth: true
	});*/

    //Анимация
	$('.scroll-animate').each(function () {
		var block = $(this);
		$(window).scroll(function() {
			var top = block.offset().top;
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass('animate')) {
					block.addClass('animate');
					block.trigger('animateIn');
				}
			} else {
				block.removeClass('animate');
				block.trigger('animateOut');
			}
		});				
	
	});

	$('.module_item').on('animateIn', function() {
		var inter = 0;
		$(this).find('.module_trainer').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('margin-left','0');
				//block.css('transform', 'rotate(1800deg)');
			}, inter*100);
			inter++;
		});
	}).on('animateOut', function() {
		$(this).find('.module_trainer').each(function() {
			$(this).css('margin-left','-620px');
			//$(this).css('transform', 'rotate(0deg)');
		});
	});



	$('.post_list,.rez_list,.for_list').on('animateIn', function() {
		var inter = 0;
		$(this).find('.anim').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('opacity', 1);
				block.css('transform', 'scale(1.0, 1.0)');
			}, inter*500);
			inter++;
		});
	}).on('animateOut', function() {
		$(this).find('.anim').each(function() {
			$(this).css('opacity', 0.01);
			$(this).css('transform', 'scale(0.5, 0.5)');
		});
	});



});

/*

jQuery(document).ready(function(){

	
	$(document).on("scroll", function() {
		if ( $(document).scrollTop() > $(".number-1").offset().top && $(document).scrollTop() < $(".number-2").offset().top)
			$(".number-2").addClass("number_active");
		else
			$(".number-2").removeClass("number_active");


		if ( $(document).scrollTop() > $(".number-2").offset().top && $(document).scrollTop() < $(".number-3").offset().top)
			$(".number-3").addClass("number_active");
		else
			$(".number-3").removeClass("number_active");


		if ( $(document).scrollTop() > $(".number-3").offset().top && $(document).scrollTop() < $(".number-4").offset().top)
			$(".number-4").addClass("number_active");
		else
			$(".number-4").removeClass("number_active");


		if ( $(document).scrollTop() > $(".number-4").offset().top && $(document).scrollTop() < $(".number-5").offset().top)
			$(".number-5").addClass("number_active");
		else
			$(".number-5").removeClass("number_active");


		if ( $(document).scrollTop() > $(".number-5").offset().top && $(document).scrollTop() < $(".number-6").offset().top)
			$(".number-6").addClass("number_active");
		else
			$(".number-6").removeClass("number_active");


	});
	


});

*/



//ya.city
	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation;
		$('#f-yacity').val(geolocation.city);
	}


	    function initialize() {

    	var lating2 = new google.maps.LatLng(55.761875, 37.608739); // 55.775849,37.621123 - это координаты.
    	var lating3 = new google.maps.LatLng(55.761968, 37.605032); // 55.775849,37.621123 - это координаты.
    	var mapOptions = {
    		disableDefaultUI: true, // отключение интерфейса, чтобы отображалась только карта
    		zoom: 17, // величина приближения карты
    		scrollwheel: false,
    		center: lating3, // центрирование на координаты, которые указывали мы.
    		mapTypeId: google.maps.MapTypeId.ROADMAP /* 
    		в каком виде отображать.
			ROADMAP – обычная двухмерная карта, используемая по умолчанию
			SATELLITE – фотографическая карта
			HYBRID – комбинация фотографий и слоя обычной карты с наиболее важными объектами (дорогами, названиями городов).
			TERRAIN – физический рельеф местности с отображением высот и гидрографических объектов (гор, рек и т. д.).
    		*/
    	}
    	var map = new google.maps.Map(document.getElementById('map_canvas2'), mapOptions);
    	var marker = new google.maps.Marker({
		      position: lating2,
		      map: map,
		      title: 'г.Москва, ул.Тверская, д.15, оф.5'
		  });
    }