document.addEventListener("DOMContentLoaded", function() {



  $(".owl-carousel").owlCarousel({
    items : 2,
    nav: true,
    responsive : {
      576 : {
        items : 3,
      },
      768 : {
        items : 2,
      }
    }
  });


  $('.button').click(function(){
    $('.popup').css('display','block')
    $('.overlay-popup').css('display','block')
  });


  $('.popup-closed').click(function(){
    $('.popup').css('display','none')
    $('.overlay-popup').css('display','none')
  });

  $('.overlay-popup').click(function(){
    $('.popup').css('display','none')
    $('.overlay-popup').css('display','none')
  });


  $('#project_1').click(function(){
    $('.active').removeClass('active')
    $('#project_1').addClass('active')
    $('.project-item-prev-text span').html('Пентхаус')
  });

  $('#project_2').click(function(){
    $('.active').removeClass('active')
    $('#project_2').addClass('active')
    $('.project-item-prev-text span').html('Дома')
  });

  $('#project_3').click(function(){
    $('.active').removeClass('active')
    $('#project_3').addClass('active')
    $('.project-item-prev-text span').html('Бассейны')
  });

  $('#project_4').click(function(){
    $('.active').removeClass('active')
    $('#project_4').addClass('active')
    $('.project-item-prev-text span').html('Коммерческие')
  });

  $('#project_5').click(function(){
    $('.active').removeClass('active')
    $('#project_5').addClass('active')
    $('.project-item-prev-text span').html('Промышленные')
  });

  $('#project_1_1').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_1').addClass('active-prev')
  });

  $('#project_1_2').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_2').addClass('active-prev')
  });

  $('#project_1_3').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_3').addClass('active-prev')
  });

  $('#project_1_4').click(function(){
    $('.active-prev').removeClass('active-prev')
    $('#project_1_4').addClass('active-prev')
  });



});
