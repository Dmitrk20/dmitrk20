document.addEventListener("DOMContentLoaded", function() {

	$('#phone').mask('+7 (999) 999-9999')
	$('#phone1').mask('+7 (999) 999-9999')
	$('#phone2').mask('+7 (999) 999-9999')
	$('#phone3').mask('+7 (999) 999-9999')
	$('#phone4').mask('+7 (999) 999-9999')
	$('#phone5').mask('+7 (999) 999-9999')
	$('#phone6').mask('+7 (999) 999-9999')
	$('#phone7').mask('+7 (999) 999-9999')
	$('#phone8').mask('+7 (999) 999-9999')
	$('#phone9').mask('+7 (999) 999-9999')
	$('#phone10').mask('+7 (999) 999-9999')
	$('#phone11').mask('+7 (999) 999-9999')
	$('#phone12').mask('+7 (999) 999-9999')
	$('#phone13').mask('+7 (999) 999-9999')
	$('#phone14').mask('+7 (999) 999-9999')
	$('#phone15').mask('+7 (999) 999-9999')
	$('#phone16').mask('+7 (999) 999-9999')
	$('#phone17').mask('+7 (999) 999-9999')
	$('#phone18').mask('+7 (999) 999-9999')

	$('#owl-carousel1').owlCarousel({
		items: 2,
		autoplay: true,
		loop: true,
		responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
	});

	$('#owl-carousel2').owlCarousel({
		items: 4,
		autoplay: true,
		loop: true,
		responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
	})

	 $('.image-link').magnificPopup({type:'image'});


		 $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
	  var target = $(this).attr('href'),
	   bl_top = $(target).offset().top;
	  $('body, html').animate({scrollTop:bl_top}, 1000);
	  return false;
	 })

$('.popup_1').magnificPopup();
$('.popup_2').magnificPopup();
$('.popup_3').magnificPopup();
$('.popup_4').magnificPopup();
$('.popup_5').magnificPopup();
$('.popup_6').magnificPopup();
$('.popup_7').magnificPopup();
$('.popup_8').magnificPopup();
$('.popup_9').magnificPopup();
$('.popup_10').magnificPopup();
$('.popup_11').magnificPopup();
$('.popup_12').magnificPopup();
$('.popup_13').magnificPopup();
$('.popup_14').magnificPopup();
$('.popup_15').magnificPopup();
$('.popup_16').magnificPopup();
$('.popup_17').magnificPopup();
$('.callback').magnificPopup();

function backToTop() {
	let back = $('.back-to-top');

$(window).on('scroll', () => {
	if ($(this).scrollTop() >= 500) {
		back.fadeIn();
	} else {
		back.fadeOut();
	}	
});

	back.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 1000);
	})
}

backToTop();


$('.form-popup-1').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})


$('.form-popup-2').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-3').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-4').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-5').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-6').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-7').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-8').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-9').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_razmer: {
			required: true,
		},
		select_podarok: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-10').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-11').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-12').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-13').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-14').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-15').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-16').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})

$('.form-popup-17').validate({
	rules: {
		user_name: {
			required: true,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		},
		select_variant: {
			required: true,
		},
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон!'
		},
		user_name: {
			required: 'Введите Ваше имя!'
		},
	}
})


$('.form-cal').validate({
	rules: {
		user_name: {
			required: false,
			minlength: 3,
		},
		user_tel: {
			required: true,
			minlength: 10,
		}
	},
	messages: {
		user_tel: {
			required: 'Введите Ваш телефон'
		}
	}
})


$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$('#nav-icon1').click(function(){
		$('.mobile-nav').toggleClass('open-menu')
	})

$('.mobile-nav a').click(function(){
			$('.mobile-nav').removeClass('open-menu')
			$('#nav-icon1').removeClass('open')
		})

});
