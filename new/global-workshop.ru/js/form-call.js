$(document).ready(function() {

	if ( $(document).scrollTop() > $(".clear-top").offset().top ) {
		$(".top_wrap").addClass("top_line_wrap_fixed");
	} else {
		$(".top_wrap").removeClass("top_line_wrap_fixed");
	}
	
	$(document).on("scroll", function() {
		if ( $(document).scrollTop() > $(".clear-top").offset().top ) {
			$(".top_wrap").addClass("top_line_wrap_fixed");
		} else {
			$(".top_wrap").removeClass("top_line_wrap_fixed");
		}
	});

	$(".modal_menu a").bind("click", function(e){
    		var anchor = $(this);
    		$('html, body').stop().animate({
    			scrollTop: $(anchor.attr('href')).offset().top-86
    		}, 500);
    		$('#modal-menu-1').toggle();
    		$('.tl_menu').toggleClass('closemenu');
    		e.preventDefault();
    		return false;
    		
    	});

	$("menu li a, .logo_wrap, .red_size_1").bind("click", function(e){
			$('.menu_top_2').fadeOut(100);
    		var anchor = $(this);
    		$('html, body').stop().animate({
    			scrollTop: $(anchor.attr('href')).offset().top-79
    		}, 500);
    		//$('#modal-menu-1').toggle();
    		//$('.tl_menu').toggleClass('closemenu');
    		e.preventDefault();
    		return false;
    		
    	});


	$('.trainer_desc_post').hide();
	$('.trainer_desc_show').click(function(e){
			e.preventDefault();
	    $(this).toggleClass('opened').prev().slideToggle();
	    if($(this).hasClass('opened')) {
	    	$(this).html('Свернуть подробную информацию');
	    }
	    else {
	    	$(this).html('Показать подробную информацию');
	    }
	}); 

	$('.usl_desc_post').hide();
	$('.usl_desc_full_btn').click(function(e){
			e.preventDefault();
	    $(this).toggleClass('opened').prev().slideToggle();
	    if($(this).hasClass('opened')) {
	    	$(this).html('Свернуть подробное описание');
	    }
	    else {
	    	$(this).html('Развернуть подробное описание');
	    }
	}); 

	//Меню
	$('.tl_menu').click(function(e) {
		e.preventDefault();
		$('#modal-menu-1').toggle(300);
		$(this).toggleClass('closemenu');
		//$('.top_wrap').toggleClass('top_line_wrap_fixed');
	});


	//Маска
	$('.fphone').maskinp('+7 (999) 999-99-99');


	//Модальные окна
	$('.show-1').click(function(e) {
		e.preventDefault();
		priceblocks = $(this).parents('.price_blocks');
		pbhead = $('.pb_head',priceblocks).text();
		$('.pbhead_mod').html(pbhead);

		$('.overlay').show();
		$('#modal-form-1').fadeIn();
	});

	$('.show-2').click(function(e) {
		e.preventDefault();
		var spitem = $(this).parents('.sp_item');
		var youtubel = $(this).attr("youtubelink");
		var youtube = "<iframe width='100%' height='315' src='https://www.youtube.com/embed/"+ youtubel +"?autoplay=1' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
		$('.modal_video_content').html(youtube);
		$('.overlay').show();
		$('#modal-form-2').fadeIn();
	});



	
	$('.show-3').click(function(e) {
		e.preventDefault();
		var spitem = $(this).parents('.sp_item');
		spname = $('.sp_name',spitem).text();
		themesp = $('.theme_sp',spitem).html();
		spinfohidden = $('.sp_info_hidden',spitem).html();
		photospeakerwrap = $('.photo_speaker_wrap',spitem).html();
		$('.info_mod_name').html(spname);
		$('.photo_mod').html(photospeakerwrap);
		$('.info_modal_show').html(spinfohidden);
		$('.info_modal_theme').html(themesp);

		var youtubel = $('.play_btn',spitem).attr("youtubelink");
		var youtube = "<iframe width='100%' height='315' src='https://www.youtube.com/embed/"+ youtubel +"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>"
		$('.modal_video_content_sp').html(youtube);

		$('.overlay').show();
		$('#modal-form-3').fadeIn();
	});

	$('.menu-btn').click(function(e) {
		e.preventDefault();
		$('.menu_top_2').toggle(100);
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

		namebtn = $(this).text();
		$('.for_head').html(namebtn);
		//$('.for_btn_mod').html(namebtn);
		$('.overlay').show();
		$('#modal-form-6').fadeIn();
	});


	$('.show-7').click(function(e) {
		e.preventDefault();
		var seldl = $('#seldl').val();
		var selqw = $('#selqw').val();
		var selgoal = $('#selgoal').val();
		var selform = $('#selform').val();
		var radiotest = $("input:radio[name=radio-test]:checked").val()
		
		$('.trigger').removeClass('ierror');

		var error = false;
		if(seldl == 'Длительность') {
			$('.seldl .trigger').addClass('ierror');
			error = true;
		}
		if(selqw == 'Количество участников') {
			$('.selqw .trigger').addClass('ierror');
			error = true;
		}
		if(selgoal == 'Что вы хотите получить на выходе') {
			$('.selgoal .trigger').addClass('ierror');
			error = true;
		}
		if(selform == 'Формат') {
			$('.selform .trigger').addClass('ierror');
			error = true;
		}

		if(error) {
			return false;
		}

		$('.overlay').show();
		$('#modal-form-7').fadeIn();

		var fullcalc = "Длительность — "+ seldl +"; Количество участников — "+ selqw +"; Что вы хотите получить на выходе — "+ selgoal +"; Формат — "+ selform +";";

		$('.fcalc').val(fullcalc);
		//console.log(fullcalc);

	});

	$('.show-8').click(function(e) {
		e.preventDefault();
		uslitem = $(this).parents('.usl_item');
		uslitemhead = $('.usl_head',uslitem).text();
		$('.usl_head_mod').html(uslitemhead);
		//$('.for_btn_mod').html(namebtn);
		$('.overlay').show();
		$('#modal-form-8').fadeIn();
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
		$('#modal-form-7').fadeOut();
		$('#modal-form-8').fadeOut();
		$('#modal-success').fadeOut();
		$('.modal_video_content').html('');
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
		$('#modal-form-7').fadeOut();
		$('#modal-form-8').fadeOut();
		$('#modal-success').fadeOut();
		$('.modal_video_content').html('');
	});

	$('.logo_partner').slick({
	    speed: 1800,
	    infinite: true,
	    slidesToShow: 6,
	    //dots: true,
	    slidesToScroll: 1,

	    responsive: [
	        {
	          breakpoint: 481,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3,
	          }
	        },
	        {
	          breakpoint: 321,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	          }
	        }
	        // You can unslick at a given breakpoint now by adding:
	        // settings: "unslick"
	        // instead of a settings object
	      ]
	});

	$('.videoslider').slick({
	    speed: 1800,
	    infinite: true,
	    slidesToShow: 1,
	    //dots: true,
	    slidesToScroll: 1
	});


	//Отправщик
	$('.send-btn').click(function(e) {
		e.preventDefault();
		
		var f = $(this).parents('.form-block');
		$('input[type=text]', f).removeClass('ierror');
		var phone = $('.fphone', f).val(); 
		var email = $('.femail', f).val();
		var utms = $('#f-utm').val();
		var formname = $('.fformname', f).val(); 
		var formhead = $('.formhead', f).text();
		var calc = $('.fcalc', f).val();
		var city = $('#f-yacity').val(); 
		
		var error = false;
		
		if(phone == '') {
			$('.fphone', f).addClass('ierror');
			error = true;
		}
		if(error) {
			return false;
		}




		var query = 'act=sender';
			query += '&email=' + encodeURIComponent(email);
			query += '&phone=' + encodeURIComponent(phone);
			query += '&city=' + encodeURIComponent(city);
			query += '&formname=' + encodeURIComponent(formname);
			query += '&formhead=' + encodeURIComponent(formhead);
			query += '&calc=' + encodeURIComponent(calc);
			query += '&utms=' + encodeURIComponent(utms);

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				if(data.result == 'ok') {
					//echo
					$('#modal-form-1').fadeOut();
					$('#modal-form-2').fadeOut();
					$('#modal-form-3').fadeOut();
					$('#modal-form-4').fadeOut();
					$('#modal-form-5').fadeOut();
					$('#modal-form-6').fadeOut();
					$('#modal-form-7').fadeOut();
					$('#modal-form-8').fadeOut();
					$('.overlay').show();
					$('#modal-success').fadeIn();
					yaCounter50737978.reachGoal('GetForm');
					location.href = '#form-send';
				} else {
					alert('Ошибка!');
				}
			}
		});

		$('.fphone', f).val('');
		$('.femail', f).val('');
		return false;



});


});
