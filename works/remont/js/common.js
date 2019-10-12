$(document).ready(function(){

	$('.hamburger').click(function(){
			$(this).toggleClass("is-active");
	    $('.main-menu.mobile').toggleClass('active');
	});

	$(".main-menu, #zakaz").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	});

    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    setTimeout(function () {
        $('.main-screen').addClass('timeout');
    }, 400);
    
	if ($(window).width() < 992) {  
        $(".parallaxie").removeClass("parallaxie");
    } else {
       $('.parallaxie').parallaxie(); 
    }
    $(window).resize(function () {
    if ($(window).width() < 992) {
       $(".parallaxie").removeClass("parallaxie");
    } else {
       $('.parallaxie').parallaxie(); 
    }
    });

    if( $(window).width()>=992 ){
        AOS.init();
    }else{
       $('*[data-aos]').removeAttr('data-aos'); 
    }
    $(window).resize(function () {
      if( $(window).width()<=992 ){
        $('*[data-aos]').removeAttr('data-aos');
      }else{
        AOS.init();
      }
    });
});

jQuery(".form-section form").submit(function() {
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
            success: function(data) {
                if (data['error']) {
                    alert(data['error']);
                } else {
                    jQuery("form input[type='submit']").addClass('disabled');
                    $('.success').css('visibility', 'visible').css('opacity', '1');
                    form.trigger('reset');
                    setTimeout(function(){ 
                    	$('.success').css('visibility', 'hidden').css('opacity', '0');
                    }, 3000);

                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
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