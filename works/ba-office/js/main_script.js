$(document).ready(function(){
  $(".slide1").webTicker({
    startEmpty: false,
    duplicate: true,
    speed: 50
  });

  //intitalize jQuery.formstyler
  $('.styler').styler();

  //global dropdown
  $('.dropdown-item').click(function() {
    $('.dropdown-item').removeClass('selected');
    $(this).addClass('selected');
    var val = $(this).closest('div').find('.dropdown-item.selected').html();
    var valForInput = $(this).closest('div').find('.dropdown-item.selected').attr('data-value');
    $(this).closest('div').find('.dropdown-toggle').html(val);
    $(this).closest('div').find('.dropdown-list').removeClass('show');
    $(this).closest('.dropdown').removeClass('active');
    $(this).closest('.dropdown').find('input:hidden').val(valForInput);
  });
  $('.dropdown-toggle').click(function() {
    $(this).closest('div').find('.dropdown-list').toggleClass('show');
    $(this).toggleClass('opened');
    $(this).closest('.dropdown').toggleClass('active');
  });
  $("body").click( function(e) {
    if(e.target.className !== "dropdown-toggle opened" && e.target.className !== "dropdown-toggle") {
      $(".dropdown-list").removeClass('show');
      $('.dropdown').removeClass('active');
      $('.dropdown-toggle').removeClass('opened');
    }
  });

  $("body").on("click", "*[data-class]", function (event) {
    var dataClass  = $(this).data('class');
    $(this).closest('tr').find('.tab').hide();
    $(this).closest('tr').find('.' + dataClass).show();
    $(this).closest('tr').find('.curr').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.tab-content .percentage').click(function(event) {
    $('.tab-content .percentage').removeClass('gold');
    $(this).addClass('gold');
    $('.percentage input').removeAttr('checked');
    $(this).find('input').attr('checked', true);
  });

  $('.choose-level .level').click(function(event) {
    $('.choose-level .level').removeClass('active');
    $(this).addClass('active');
    $('.level input').removeAttr('checked');
    $(this).find('input').attr('checked', true);
  });

  $('.percent').click(function(event) {
    $(this).addClass('active');
    $(this).find('input').attr('checked', true);
  });

  new WOW().init();

  $('.plan').click(function() {
    $(this).closest('.plans').find('.plan').removeClass('active');
    $(this).addClass('active');
    $('.plan input').removeAttr('checked');
    $(this).find('input').attr('checked', true);
  });


  $('.comment-cloud .nav-link').click(function() { 
    var commImg = $(this).find('img').attr('src');
    console.log(commImg);
    $('.comment-cloud .author-image').find('.author-main-img').attr('src', commImg);
  });

  $('.main-screen-slider').each(function(){

    var slickInduvidual = $(this);

    var slideCount = null;
    slickInduvidual.on('init', function(event, slick){
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });

    slickInduvidual.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });

    slickInduvidual.slick({
      infinite: true,
      arrows: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><span class="icon-control-left"></span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="icon-control-right"></span></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    });
    
    function setSlideCount() {
      var $el = slickInduvidual.closest('.container').find('.to');
      $el.text( (slideCount>9) ? slideCount : '0'+slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
      var $el = slickInduvidual.closest('.container').find('.from');
      
      $el.text((currentSlide>8) ? currentSlide+1 : '0'+(currentSlide+1));
      $('.section-main-wrapper').attr('data-id', currentSlide);
    }
    
  });

  $('.payments-logo-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-control-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-control-right"></span></button>',
    slidesToShow: 6,
    slidesToScroll: 1,
  });

  $('.news-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-control-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-control-right"></span></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
  });


  $('.modal').on('shown.bs.modal', function (e) {
    $('.news-single-slider').slick({
      infinite: false,
      arrows: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><span class="icon-control-left"></span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="icon-control-right"></span></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    });
  });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
