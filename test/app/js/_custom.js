document.addEventListener("DOMContentLoaded", function() {

  $(".owl-carousel").owlCarousel({
    items : 2,
    nav: true
  });


  $('.button').click(function(){
    $('.popup').css('display','block')
  });


  $('.popup-closed').click(function(){
    $('.popup').css('display','none')
  });



});
