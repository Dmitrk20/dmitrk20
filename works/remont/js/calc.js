// Базовая цена за метр
var baseprice = 8740;
// Коэффициенты для типов помещения
var objecttypek = [1, 1.1, 0.9];	// квартира, коттедж, помещение
// Коэффициенты для типов здания
var hometypek = [1, 1.3];	// новостройка, старый фонд
// Цены на дизайн интерьера
var designtype = [0, 1200];	// есть дизайн-проект, нужно разработать
// Стиль интерьера коэффициенты
var interstylek = [1, 1.25, 1.15];	// современный, классический, этнический
// Коэффициент для черновых материалов
var matk = 0.48;


$(document).ready(function() {
$('#object-type').val('0');
$('#home-square').val('0');
$('#home-type').val('0');
$('#design-project').val('0');
$('#inter-style').val('-1');
$(".overlay").addClass("hidden");
$(".popup").addClass("hidden");

});

function calc()
{
	$(".overlay").removeClass("hidden");
	$(".popup").removeClass("hidden");
	var square = Number($('#home-square').val());
	var objectType = Number($('#object-type').val());
	var homeType = Number($('#home-type').val());
	var design = Number($('#design-project').val());
	var interStyle = $('#inter-style').val()==-1?0:Number($('#inter-style').val());

	var workPrice = Math.round(baseprice * square * objecttypek[objectType] * hometypek[homeType] * interstylek[interStyle] + square * designtype[design]);
	if (square==0){
		$(".result").addClass("hidden");
		$(".error").removeClass("hidden");
		return;
	}
	else {
		$(".error").addClass("hidden");
		$(".result").removeClass("hidden");
	}
	var pricePerMeter = Math.round(workPrice / square);
	var matPrice = Math.round(workPrice * matk);
	
	var space_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

	$('#price-per-meter').animateNumber({ number: pricePerMeter, numberStep: space_separator_number_step });
	$('#work-price').animateNumber({ number: workPrice, numberStep: space_separator_number_step });
	$('#mat-price').animateNumber({ number: matPrice, numberStep: space_separator_number_step });
}
