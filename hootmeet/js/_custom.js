document.addEventListener("DOMContentLoaded", function() {

  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});


    $('#nav-icon1').click(function(){
      if ($('#nav-icon1').hasClass('open')) {
        $('.mobile .nav').css('display','block')
      } else {
        $('.mobile .nav').css('display','none')
      }
    })



});
