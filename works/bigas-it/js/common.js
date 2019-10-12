$(document).ready(function() {
$('.mob-toogle').on('touchstart click',function(e){
	$('.main-menu .menu ul').slideToggle();
	//$('.c-hamburger').toggleClass( "is-active" );
	e.preventDefault();
});
		
 $("body").on("click","a.anchor-arrow", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

$('.popup .close_order, .overlay').click(function (){
	$('.popup, .overlay').css('opacity','0');
	$('.popup, .overlay').css('visibility','hidden');
	$('.link').css('display', 'none');
});
$('.order-form-btn').click(function (e){
	
	$('.order-form .title-block').val( $(this).attr('data-attr') );
	$('.order-form, .overlay').css('opacity','1');
	$('.order-form, .overlay').css('visibility','visible');
	e.preventDefault();
});

});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var email = $("#email").val();
  if (validateEmail(email)) {
  	$('.link').css('display', 'block');
  } else {
  	return false;
  }
  return false;
}

$('#email').bind('input', function() { 
    validate();
});

jQuery(".order-form form").submit(function(){ 
	var form = jQuery(this); 
	var error = false; 
	if (!error) { 
		var data = form.serialize();
		jQuery.ajax({ 
		   type: 'POST',
		   url: 'send/callback.php', 
		   dataType: 'json', 
		   data: data, 
		   beforeSend: function(data) { 
				form.find('input[type="submit"]').attr('disabled', 'disabled'); 
			  },
		   success: function(data){ 
				if (data['error']) { 
					alert(data['error']); 
				} else { 
					jQuery(".order-form form input[type='submit']").val("Отправка").addClass('disabled');
					setTimeout(function() {
						window.location.href = "thanks.html";
					}, 700);
					//jQuery('.order-form form').trigger( 'reset' );
				}
			 },
		   error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr.status); 
				alert(thrownError); 
			 },
		   complete: function(data) { 
				form.find('input[type="submit"]').prop('disabled', false); 
			 }
	});
	}
	return false; 
});

/*questions*/
jQuery(".questions form").submit(function(){ 
	var form = jQuery(this); 
	var error = false; 
	if (!error) { 
		var data = form.serialize();
		jQuery.ajax({ 
		   type: 'POST',
		   url: 'send/questions.php', 
		   dataType: 'json', 
		   data: data, 
		   beforeSend: function(data) { 
				form.find('input[type="submit"]').attr('disabled', 'disabled'); 
			  },
		   success: function(data){ 
				if (data['error']) { 
					alert(data['error']); 
				} else { 
					jQuery(".questions form input[type='submit']").val("Отправка").addClass('disabled');
					setTimeout(function() {
						window.location.href = "thanks.html";
					}, 700);
					//jQuery('.questions form').trigger( 'reset' );
				}
			 },
		   error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr.status); 
				alert(thrownError); 
			 },
		   complete: function(data) { 
				form.find('input[type="submit"]').prop('disabled', false); 
			 }
	});
	}
	return false; 
});