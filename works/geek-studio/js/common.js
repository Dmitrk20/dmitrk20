$(document).ready(function(){

	AOS.init();

	var scene = document.getElementById('main-animate',);
		var parallaxInstance = new Parallax(scene, {
		relativeInput: true
	});
});


jQuery("form").submit(function(){ 
  var form = jQuery(this); 
  var error = false; 
  /*form.find('input[type="email"], input[type="text"], textarea').each( function(){
  if (jQuery(this).val() == '') {
    jQuery(this).addClass('error-place');
    jQuery(this).attr('placeholder', 'Р—Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ');
    error = true;
  }
  });*/
  if (!error) { 
    var data = form.serialize();
    jQuery.ajax({ 
       type: 'POST',
       url: 'send/callback.php', 
       dataType: 'json', 
       data: data, 
       beforeSend: function(data) { 
        form.find('button[type="submit"]').attr('disabled', 'disabled'); 
        },
       success: function(data){ 
        if (data['error']) { 
          alert(data['error']); 
        } else { 
          jQuery("form button[type='submit']").addClass('disabled');
          //jQuery('.order-form form').trigger( 'reset' );
           setTimeout(function(){
            $('form').addClass('hidden');
            $('.thx').addClass('active');
          },100);
          setTimeout(function(){
            $('form').removeClass('hidden');
            $('.thx').removeClass('active')
          }, 5000);
        }
       },
       error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status); 
        alert(thrownError); 
       },
       complete: function(data) { 
        form.find('button[type="submit"]').prop('disabled', false); 
       }
  });
  }
  return false; 
});
