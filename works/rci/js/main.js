$(document).ready(function() {
	if ($('#home-slider').length) {
		var slider = $('#home-slider').lightSlider({
			item: 1,
			pager: false,
			mode: "fade",
			loop: true,
			onBeforeSlide: function (el) {
				$('#current').text(el.getCurrentSlideCount());
			}
		});
		$('#total').text(slider.getTotalSlideCount());

		$('.slider-control').click(function(e){
			e.preventDefault();
			var href = $(this).attr('href').slice(1);
			if (href === 'next') {
				slider.goToNextSlide();
			} else if (href === 'prev') {
				slider.goToPrevSlide();
			} else {
				console.error('error');
			};
		});
	};

	if ($('#team-slider').length) {
		var teamSlider = $('#team-slider').lightSlider({
			item: 3,
			pager: false,
			controls: false,
			loop: true,
			responsive : [
				{
					breakpoint:1024,
					settings: {
						item:2
					}
				},
				{
					breakpoint:640,
					settings: {
						item:1
					}
				}
			]
		});

		$('.sl-controls__item').click(function(e){
			e.preventDefault();
			var href = $(this).attr('href').slice(1);
			if (href === 'next') {
				teamSlider.goToNextSlide();
			} else if (href === 'prev') {
				teamSlider.goToPrevSlide();
			} else {
				console.error('error');
			};
		});
	};

	$('.blog-search__select').selectric();

	$('.popup-link').magnificPopup();

	$('.contacts-switcher__item').click(function(e){
		e.preventDefault();
		$('.contacts-switcher__item').removeClass('active');
		$(this).addClass('active');
		$('.contacts-item').toggleClass('hidden');
		$('.contacts-map').toggleClass('hidden');
	});
	
	$('[type="tel"]').mask("+7 (999) 999-99-99");
	/* placeholder*/
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				$.magnificPopup.open({
					items: {
						src: '#popup-thanks'
					}
				});
				setTimeout(function(){
					$.magnificPopup.close();
				}, 3000);
				// alert("Форма успешно отправлена");
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});