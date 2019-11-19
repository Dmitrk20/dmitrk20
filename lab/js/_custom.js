document.addEventListener("DOMContentLoaded", function() {

	$(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    margin: 500,
    nav: true,
  });


  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  		$(this).toggleClass('open');
  	});

    $('#nav-icon1').click(function(){
      $('.mobile-menu .nav').toggleClass('show')
    })

    $('.mobile-menu a').click(function(){
    			$('.mobile-menu .nav').removeClass('show')
    			$('#nav-icon1').removeClass('open')
    		})


    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
     var target = $(this).attr('href'),
      bl_top = $(target).offset().top;
     $('body, html').animate({scrollTop:bl_top}, 1000);
     return false;
    })


});
