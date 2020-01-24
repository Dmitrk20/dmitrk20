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

	$(".down, .top_link, .menu_wrap a, .trainer_link").bind("click", function(e){
    		var anchor = $(this);
    		$('html, body').stop().animate({
    			scrollTop: $(anchor.attr('href')).offset().top-128
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


	// //Маска
	// $('.fphone').maskinp('+7 (999) 999-99-99');


	//Модальные окна
	$('.show-1').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-1').fadeIn();
	});

	$('.show-2').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#modal-form-2').fadeIn();
	});



	
	$('.show-3').click(function(e) {
		e.preventDefault();
		//namebtn = $(this).text();
		//$('.for_head').html(namebtn);
		//$('.for_btn_mod').html(namebtn);
		$('.overlay').show();
		$('#modal-form-3').fadeIn();
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
	});

	$('.portfolio_slider').slick({
	    speed: 1800,
	    infinite: true,
	    slidesToShow: 1,
	    //dots: true,
	    slidesToScroll: 1
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
					yaCounter48963737.reachGoal('GetForm');

					gtag('event', 'zakaz', {
					  'event_category': 'forma'
					});
					
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
