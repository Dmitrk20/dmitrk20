var catalogTabs = $('.catalog-tabs');

if ($('input[type=tel]').length != 0) {
    $('input[type=tel]').inputmask("+7 (999) 999 99 99", {"placeholder": "-", 'showMaskOnHover': false, });
}



if (window.innerWidth < 1201) {
    var href = $('.phone').attr('href');
    $('.callback').removeAttr('data-fancybox');
    $('.callback').attr('href', href);
}

$.fn.hasScrollBar = function() {
    return this.get(0).scrollHeight > this.get(0).clientHeight;
}

function magicLine($this) {
    var menu = $this,
            line = menu.find('.line'),
            itemWidth = 0,
            position = 0,
            active = menu.find('.item.active');

    var itemWidth = active.width(),
            itemPosition = active.position(),
            itemLeft = itemPosition.left;


    line.stop().animate({
        left: itemLeft,
        width: itemWidth
    }, 600);
}


if ($('.selection-tabs .line').length > 0) {
    magicLine(catalogTabs);
}

$('.catalog-tabs .tab').on("click", function (e) {
    e.preventDefault();
    var data = $(this).data('tab');
    $('.catalog-tabs .tab').parent().removeClass('active');
    $(this).parent().addClass('active');

    magicLine(catalogTabs);

    $('.catalog-block').hide();
    $('.catalog-block[data-tab=' + data + "]").fadeIn();
});

$('.catalog-radios label').on("click", function (e) {
    e.preventDefault();
    var data = $(this).data('tab');

    $('.catalog-block').hide();
    $('.catalog-block[data-tab=' + data + "]").fadeIn();
});


var similarSlider = $('.similar-slider');
var rankingSlider = $('.ranking-slider');
var gallerySlider = $('.gallery-slider');
var aboutSlider = $('.about-slider');

sliderSettings = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    margin: 20
};

sliderOwlSettings = {
    loop: false,
    nav: true,
    dots: false,
    margin: 40,
    responsive:{
        0: {
            items: 1,
        },
        768: {
            items: 2,
        }
    }
};

similarSlider.owlCarousel(sliderOwlSettings);
rankingSlider.owlCarousel(sliderOwlSettings);
gallerySlider.owlCarousel(sliderSettings);
aboutSlider.owlCarousel(sliderSettings);

// Sticky sidebar
if (window.innerWidth > 1199) {
    $('.support-block').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30
    });
}

$('.form-select').select2({
    minimumResultsForSearch: -1,
    width: '100%'
});

$('.cat-select').select2({
    minimumResultsForSearch: -1,
    width: '100%',
    dropdownCssClass: "cat-select-dropdown"
});


function initMap(mapEl, mapId) {
    var map = mapId;

    var lat = $(mapEl).data('lat');
    var lng = $(mapEl).data('lng');
    var zoom = $(mapEl).data('zoom');

    var uluru = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById(map), {
        zoom: zoom,
        center: uluru,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        icon: 'img/icons/marker.png',
        map: map
    });
}

$(document).ready(function () {
    if (catalogTabs.length > 0) {
        magicLine(catalogTabs);
    }
    
    if ($('#initMap').length > 0) {
        initMap('#locationMap', 'locationMap');
    }
});


$("body").on("click", 'a[href*="#"]', function (event) {
    event.preventDefault();

    var id = $(this).attr('href');

    if (id != "#") {
        var top = $(id).offset().top;

        if (id == "#catalog" && window.innerWidth > 1200) {
            top += 380;
        }


        if (window.innerWidth > 991) {
            if ($('.home').length > 0) {
                $('body,html').animate({scrollTop: top - 0}, 1200);
            }else{
                $('body,html').animate({scrollTop: top - 100}, 1200);
            }
        } else {
            $('body,html').animate({scrollTop: top - 20}, 1500);
        }
    }

});


var stock = 8;
function filterMore (tab) {
    if ($(".catalog-block[data-tab=" + tab + "] .item-wrap").length < 9) {
        $(".catalog-block[data-tab=" + tab + "] .catalog-more").hide();
    }else{
        $(".catalog-block[data-tab=" + tab + "] .catalog-more").show();
    }

    $(".catalog-block[data-tab=" + tab + "] .item-wrap:not(:lt("+stock+"))").hide();

}

$(".catalog-block .catalog-more").click(function (e){
    e.preventDefault();

    var top = $(".catalog-block .catalog-more").offset().top;

    $('body,html').animate({scrollTop: top - 30}, 1000);

    var tab = $(this).parents('.catalog-block').data('tab');
    var items = $(".catalog-block[data-tab=" + tab + "] .item-wrap:hidden").length;
    if (items > stock) {
        $(".catalog-block[data-tab=" + tab + "] .item-wrap:hidden:lt("+stock+")").show().addClass('animated').addClass('fadeInUp');
    }else if(items <= stock){
        $(".catalog-block[data-tab=" + tab + "] .item-wrap:hidden:lt("+stock+")").show().addClass('animated').addClass('fadeInUp');
        $(".catalog-block[data-tab=" + tab + "] .catalog-more").hide();
    }
});

filterMore('obj');
filterMore('complex');


$('.hum').on('click', function () {
   var  hum = $(this),
        nav = $('.nav-wrap');
   hum.toggleClass('active');
   $('.page').toggleClass('fixed');

   if (hum.hasClass('active')) {
        nav.stop().animate({top: "0%"}, 400);
   }else{
        nav.stop().animate({top: "-150%"}, 400);
   }

});

$('.menu__link').on('click', function () {
   var  hum = $('.hum'),
        nav = $('.nav-wrap');
    hum.removeClass('active');
    $('.page').removeClass('fixed');
    nav.stop().animate({top: "-150%"}, 400);
});

$('.catalog-btn').on('click', function () {
   var  btn = $(this),
        data = btn.data('nav'),
        nav = $('.catalog-filter[data-nav=' + data + ']');

    nav.stop().animate({top: "0%"}, 400);
});

$('.js-close-filter').on('click', function (e) {
    e.preventDefault();
    var  nav = $('.catalog-filter[data-nav]');
    var top = $('#catalog').offset().top;
    if(window.innerWidth < 1360){
        nav.stop().animate({top: "-150%"}, 400);
        $('body,html').animate({scrollTop: top - 20}, 0);
    } 
});

$('.form-search').on('click', function (e) {
    e.preventDefault();
    var  nav = $('.catalog-filter[data-nav]');
    var top = $('#catalog').offset().top;
    if(window.innerWidth < 1360){
        nav.stop().animate({top: "-150%"}, 400);
        $('body,html').animate({scrollTop: top - 20}, 0);
    } 
});

$('[data-fancybox]').fancybox({
    autoFocus: false,
    beforeShow: function( instance, current ) {
        if (window.innerWidth > 1200 && $('html').hasScrollBar() == true) {
            $('.callback').css('right', scrollWidth);
            $('.navigation-block').css('right', scrollWidth);
        }
    },
    afterClose: function () {
        if (window.innerWidth > 1200 && $('html').hasScrollBar() == true) {
            $('.callback').css('right', 0);
            $('.navigation-block').css('right', 0);
        }
    }
});

$('.policy').change(function () {
    var el = $(this),
            status = el.prop('checked');

    if (status == true) {
        el.parents('form').find('.btn').prop('disabled', false);
    } else if (status == false) {
        el.parents('form').find('.btn').prop('disabled', true);
    }
});

var ua = window.navigator.userAgent;
var is_ie = /MSIE|Trident/.test(ua);

if ( is_ie ) {
  $('.materials__title span').addClass('ie');
}


// init controller

var dur = "185%";

if (window.innerWidth < 1500) {
    dur = "210%";
}

if (window.innerWidth > 1200) {

    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: dur}});
    var controller1 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: '50%'}});


    new ScrollMagic.Scene()
        .setTween("#catalog", { ease: Linear.easeNone, 'top': "0px"})
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene()
        .setTween("#catalog-nav-1", { ease: Linear.easeNone, 'top': "0px"})
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene()
        .setTween("#catalog-nav-2", { ease: Linear.easeNone, 'top': "0px"})
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene()
        .setTween(".catalog-grid .item-wrap", { ease: Linear.easeNone, 'top': "0px"})
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene()
        .setTween("#about-section", { ease: Linear.easeNone, 'top': "0px"})
        // .addIndicators()
        .addTo(controller1);
}


function initMap(mapEl, mapId) {
    var map = mapId;

    var lat = $(mapEl).data('lat');
    var lng = $(mapEl).data('lng');
    var zoom = $(mapEl).data('zoom');

    var uluru = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById(map), {
        zoom: zoom,
        center: uluru,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        icon: 'img/icons/marker.png',
        map: map
    });
}


$(document).ready(function () {
    $('[data-src]').Lazy();
    if ($('#locationMap').length > 0) {
        initMap('#locationMap', 'locationMap');
    }
});

// создадим элемент с прокруткой
var div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.style.visibility = 'hidden';

document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

$('label').on('click', function () {
    var el = $(this);
    if (!el.prev().hasClass('policy')) {
        el.prev().prop('checked', true);
    }
    
});

function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();

    if(scrollTop <= offset.top && ((el.height() - el.height()) + offset.top) < (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
}



// gallery - put thumbs to big box
$('.post-gallery-thumb .item').on('click', function (e) {
    var el = $(this),
        data = el.data('img'),
        caption = el.data('caption'),
        big = el.parents('.post-gallery').find('.post-gallery-big');
    if (!el.hasClass('item-more')) {
        e.preventDefault();
        el.parents('.post-gallery').find('.post-gallery-thumb .item').removeClass('active');
        el.addClass('active');
        big.attr('style', 'background-image: url(' + data + ')');
        big.find('.tag').html(caption);
    }
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if(window.innerWidth > 1200){
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
         $('.header .phone').css('opacity', '1');
      } else {
          $('.header .phone').css('opacity', '0');
      }
    }
}