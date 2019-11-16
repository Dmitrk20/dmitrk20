

$(document).ready(function() { // Ждём загрузки страницы
	
	$(".cme-cls").click(function(){	// Событие клика на затемненный фон	   
		$(".callback").fadeOut(100);	// Медленно убираем всплывающее окно
	});

});

function showPopup(e) { 
  e.preventDefault();
  if(e.target.attributes['data-th']) {
    if($(".callback input[name=Item]").size() > 0) {
      $(".callback input[name=Item]").val(e.target.attributes['data-th'].value);
    }
    else {
     $(".callback form").prepend('<input type="hidden" name="Форма звонка" value="'+e.target.attributes['data-th'].value+'">');
    }
  }
  $(".callback").fadeIn(100);
}

