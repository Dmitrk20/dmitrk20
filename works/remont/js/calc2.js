var total_square = 0, home_type = 1, num_rooms = 1, num_bathrooms = 0, height = 2.5, design = false, floors_alignment = false, electrics = false, electrics_work = 0, door_installation = false, num_doors = 1, balcony = false, balcony_square = 0;
var room_square = [], room_perimeter = [], roof_type = [], wall_covering = [], flooring = [], walls_alignment = [], fillets = [], plinth = [], plinth_type = [];
var bathroom_square = [], bathroom_perimeter = [], bathroom_roof_type = [], bathroom_flooring = [], toilet_type = [], bath_type = [], bathroom_water_system = [], bathroom_num_points = [], bathroom_warm_floor = [], bathroom_towel_dryer = [];

var TotalSum = 0, Price_work = 0, Price_mat = 0;
var step = 1;

function testKey(e)
{
	
	if (e.keyCode==13) return false;
	return !(/[А-Яа-яA-Za-z ,\/-]/.test(String.fromCharCode(e.charCode)));
	
}
function test(el)
{
	if (el.value.indexOf(".") != '-1') {
		el.value=el.value.substring(0, el.value.indexOf(".") + 2);
	}
}
function HideShowField(el)
{
	if (el.children[0].checked)
		$(el).parent().find('div').slideDown();
	else
		$(el).parent().find('div').slideUp();
}
function demontazh()
{
	/* if ($('#home_type option:selected').index()>0) $('#capremont').prop("disabled",false);
	else {
		$('#capremont').prop("disabled",true);
		$('#capremont').prop("checked",false);
	} */
	return;
}

function ShowStage()
{

	(step < 1) ? step = 1: step > 5 ? step = 5 : 0;
	(step == 1) ? $('#prev_button').hide(): $('#prev_button').show();
	(step == 5) ? $('#next_button').hide(): $('#next_button').show();
	if (step == 5) {
	    $('#calc_button').show();
	    $('#next_button').hide();
	    $('#calc_button').show();
	} else $('#calc_button').hide();
	SetNavStatus();
	$('#main_param').hide();
	$('#rooms').hide();
	$('#kitchen').hide();
	$('#corridor').hide();
	$('#bathrooms').hide();

//alert(step);
	switch(step)
	{
		case 1:
			$('#main_param').show();
			$('#steps li').eq(step-1).addClass("active");
			
		break;
		case 2:

			// подсвечиваем меню Комнаты
			$('#steps li').eq(1).addClass("active");
			// определяем количество комнат в параметрах
			var num_rooms = $('#num_rooms option:selected').index()+1;
			// и количество существующих на данный момент
			var num_rooms_done = $('.rooms').length;
			// если количество комнат в параметрах больше, чем в данный момент
			if (num_rooms > num_rooms_done)
			{
				// добавляем комнаты
				for (var r=num_rooms_done;r<num_rooms;r++)
				{
					$('#rooms').append(v_rooms_innerHtml);
					$('.num_room').eq(r).html("Комната №"+(r+1));
				}
			}
			else
			{
				// иначе, удаляем лишние
				for (r=num_rooms_done;r>num_rooms;r--)
				{
					$('.rooms').eq(r-1).remove();
				}
			}
							// расставляем id 
				for (var r=0;r<num_rooms;r++)
				{
					$('.rooms').eq(r).attr("id", "room_"+(r+1));
					$('.rooms').eq(r).find('#room_square').attr("id", "room_square_"+(r+1));
					$('.rooms').eq(r).find('#room_perimeter').attr("id", "room_perimeter_"+(r+1));
					$('.rooms').eq(r).find('#roof_type').attr("id", "roof_type_"+(r+1));
					$('.rooms').eq(r).find('#wall_covering').attr("id", "wall_covering_"+(r+1));
					$('.rooms').eq(r).find('#flooring').attr("id", "flooring_"+(r+1));
					$('.rooms').eq(r).find('#walls_alignment').attr("id", "walls_alignment_"+(r+1));
					$('.rooms').eq(r).find('#fillets').attr("id", "fillets_"+(r+1));
					$('.rooms').eq(r).find('#plinth').attr("id", "plinth_"+(r+1)); 
					$('.rooms').eq(r).find('#plinth_type').attr("id", "plinth_type_"+(r+1)); 
					
				}

			$('#rooms').show();
		break;
		case 3:
			$('#steps>li').eq(2).addClass("active");
			$('#kitchen').show();
		break;
		case 4:
			$('#steps>li').eq(3).addClass("active");
			$('#corridor').show();
		break;
		case 5:
			// подсвечиваем меню Санузлы
			$('#steps>li').eq(4).addClass("active");
			// определяем количество санузлов в параметрах
			var num_bathrooms = $('#num_bathrooms option:selected').val();
			// и количество существующих на данный момент
			var num_bathrooms_done = $('.bathrooms').length;
			// если количество санузлов в параметрах больше, чем в данный момент
			if (num_bathrooms > num_bathrooms_done)
			{
				// добавляем санузлы
				for (var r=num_bathrooms_done;r<num_bathrooms;r++)
				{
					$('#bathrooms').append(v_brooms_innerHtml);
					$('.num_bathroom').eq(r).html("Санузел №"+(r+1));
				}
			}
			else
			{
				// иначе, удаляем лишние
				for (r=num_bathrooms_done;r>num_bathrooms;r--)
				{
					$('.bathrooms').eq(r-1).remove();
				}
			}
				// расставляем id 
				for (var r=0;r<num_bathrooms;r++)
				{
					$('.bathrooms').eq(r).attr("id", "bathroom_"+(r+1));
					$('.bathrooms').eq(r).find('#bathroom_square').attr("id", "bathroom_square_"+(r+1));
					$('.bathrooms').eq(r).find('#bathroom_perimeter').attr("id", "bathroom_perimeter_"+(r+1));
					$('.bathrooms').eq(r).find('#bathroom_roof_type').attr("id", "bathroom_roof_type_"+(r+1));
					$('.bathrooms').eq(r).find('#bathroom_flooring').attr("id", "bathroom_flooring_"+(r+1));
					$('.bathrooms').eq(r).find('#toilet_type').attr("id", "toilet_type_"+(r+1));
					$('.bathrooms').eq(r).find('#bath_type').attr("id", "bath_type_"+(r+1));
					$('.bathrooms').eq(r).find('#bathroom_warm_floor').attr("id", "bathroom_warm_floor_"+(r+1)); 
					$('.bathrooms').eq(r).find('#bathroom_towel_dryer').attr("id", "bathroom_towel_dryer_"+(r+1)); 
					$('.bathrooms').eq(r).find('#bathroom_water_system').attr("id", "bathroom_water_system_"+(r+1)); 
					$('.bathrooms').eq(r).find('#bathroom_num_points').attr("id", "bathroom_num_points_"+(r+1)); 
					
				}
			$('#bathrooms').show();
		break;
	}
}
function SetNavStatus()
{
	for (var s=0;s<5;s++)
	{
			$('#steps li').eq(s).removeClass("active");
	}
}
function TestParam()
{

	$('#myModalLabel').text("Внимание");
	switch(step)
	{
		case 1:
			// проверяем, указана ли площадь квартиры
			if (isNaN($('#total_square').val())||$('#total_square').val()=='')
			{
				$('#modal_body').text("Укажите общую площадь");
				$.magnificPopup.open({
					items: {
						src: '#error_message', // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
				step=1;
				return false;
			}
			if ($('#balcony').is(':checked')&&(isNaN($('#balcony_square').val())||$('#balcony_square').val()==''))
			{
				$('#modal_body').text("Укажите площадь балкона");
				$.magnificPopup.open({
					items: {
						src: '#error_message', // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
				step=1;
				return false;
			}
			$('#steps li').eq(0).addClass("done");
			return true;
		break;
		case 2:
			// для каждой комнаты проверяем, выбраны ли параметры
			for (r=0;r<=$('#num_rooms option:selected').index();r++)
			{
			if (isNaN($('#room_square_'+(r+1)).val())||$('#room_square_'+(r+1)).val()=='') 
				{
					$('#modal_body').text("Укажите площадь Комнаты №"+(r+1));
					$.magnificPopup.open({
						items: {
							src: '#error_message', // can be a HTML string, jQuery object, or CSS selector
							type: 'inline'
						}
					});
					step=2;
					return false;
				}
			if (isNaN($('#room_perimeter_'+(r+1)).val())||$('#room_perimeter_'+(r+1)).val()=='') 
				{
					$('#modal_body').text("Укажите периметр Комнаты №"+(r+1));
					$.magnificPopup.open({
						items: {
							src: '#error_message',
							type: 'inline'
						}
					});
					step=2;
					return false;
				}
			}
			$('#steps li').eq(1).addClass("done");
			return true;
		break; 
		case 3:
			if (isNaN($('#kitchen_square').val())||$('#kitchen_square').val()=='') 
			{
				$('#modal_body').text("Укажите площадь Кухни");
				$.magnificPopup.open({
					items: {
						src: '#error_message', // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
				step=3;
				return false;
			}
			if (isNaN($('#kitchen_perimeter').val())||$('#kitchen_perimeter').val()=='') 
			{
				$('#modal_body').text("Укажите периметр Кухни");
				$.magnificPopup.open({
					items: {
						src: '#error_message',
						type: 'inline'
					}
				});
				step=3;
				return false;
			}
			$('#steps li').eq(2).addClass("done");
			return true;
		break;
		case 4:
			if (isNaN($('#corridor_square').val())||$('#corridor_square').val()=='') 
			{
				$('#modal_body').text("Укажите площадь Коридора");
				$.magnificPopup.open({
					items: {
						src: '#error_message', // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					}
				});
				step=4;
				return false;
			}
			if (isNaN($('#corridor_perimeter').val())||$('#corridor_perimeter').val()=='') 
			{
				$('#modal_body').text("Укажите периметр Коридора");
				$.magnificPopup.open({
					items: {
						src: '#error_message',
						type: 'inline'
					}
				});
				step=4;
				return false;
			}
			$('#steps li').eq(3).addClass("done");
			return true;
		break;
		case 5:
			for (r=0;r<=$('#num_bathrooms option:selected').index();r++)
			{
				if (isNaN($('#bathroom_square_'+(r+1)).val())||$('#bathroom_square_'+(r+1)).val()=='') 
				{
					$('#modal_body').text("Укажите площадь Санузла №"+(r+1));
					$.magnificPopup.open({
						items: {
							src: '#error_message',
							type: 'inline'
						}
					});
					step=5;
					return false;
				}
				if (isNaN($('#bathroom_perimeter_'+(r+1)).val())||$('#bathroom_perimeter_'+(r+1)).val()=='') 
				{
					$('#modal_body').text("Укажите периметр Санузла №"+(r+1));
					$.magnificPopup.open({
						items: {
							src: '#error_message',
							type: 'inline'
						}
					});
					step=5;
					return false;
				}
				if (isNaN($('#bathroom_num_points_'+(r+1)).val())||$('#bathroom_num_points_'+(r+1)).val()=='') 
				{
					$('#modal_body').text("Укажите Количество точек водоснабжения для Санузла №"+(r+1));
					$.magnificPopup.open({
						items: {
							src: '#error_message', // can be a HTML string, jQuery object, or CSS selector
							type: 'inline'
						}
					});
					step=5;
					return false;
				}
			}
			$('#steps li').eq(4).addClass("done");
			return true;
		break;
	}
	return true;
}

function calculate()
{
	
	TotalSum=0;
	Price_work=0; 
	Price_mat=0; 
	total_square=Number($('#total_square').val());
	home_type=$('#home_type option:selected').val();
	num_rooms=$('#num_rooms').val();
	num_bathrooms=$('#num_bathrooms').val();
	height=Number($('#height').val());
	design=$('#design').is(':checked');
	design_type=$('#design_type :selected').index();
	walls_alignment=$('#walls_alignment').is(':checked');
	floors_alignment=$('#floors_alignment').is(':checked');
	electrics=$('#electrics').is(':checked');
	electrics_work=$('#electrics_work :selected').index();
	door_installation=$('#door_installation').is(':checked');
	(door_installation)?num_doors=$('#num_doors :selected').val():num_doors=0;
	balcony=$('#balcony').is(':checked');
	(balcony)?balcony_square=Number($('#balcony_square').val()):balcony_square=0;

	var s=0,s1=0,s2=0;
	// Параметры Комнат
	for (var r=0;r<num_rooms;r++)
	{
		room_square[r] = Number($('#room_square_'+(r+1)).val());
		room_perimeter[r] = Number($('#room_perimeter_'+(r+1)).val());
		roof_type[r] = $('#roof_type_'+(r+1)+' :selected').index();
		wall_covering[r] = $('#wall_covering_'+(r+1)+' :selected').index();
		flooring[r] = $('#flooring_'+(r+1)+' :selected').index();
		fillets[r] = $('#fillets_'+(r+1)).is(':checked');
		plinth[r] = $('#plinth_'+(r+1)).is(':checked');
		(plinth[r])?plinth_type[r] = $('#plinth_type_'+(r+1)+' :selected').index():plinth_type[r] = 0;
	}

	$('#smeta_rooms').empty();
	for (r=0;r<num_rooms;r++)
	{
		// Добавляем комнату в смету
		$('#smeta_rooms').append(v_sm_rooms_innerHtml);
		$('#smeta_room').attr("id", "smeta_room_"+(r+1));
		$('#smeta_num_room').attr("id", "smeta_num_room_"+(r+1)).text('Комната №'+(r+1));	// подписываем комнату
		// Стены
		s = Math.round(room_perimeter[r]*height);
		$('#smeta_room_grunt').attr("id", "smeta_room_grunt_"+(r+1)).empty();
		$('#smeta_room_profil').attr("id", "smeta_room_profil_"+(r+1)).empty();
		$('#smeta_room_alignment').attr("id", "smeta_room_alignment_"+(r+1)).empty();
		if (walls_alignment){
			s1 = Math.round(s*wprice_room_grunt);
			s2 = Math.round(s*0.15*price_room_grunt);
			TotalSum+=(s1+s2);
			Price_work+=s1; 
			Price_mat+=s2; 
			var html = '<td class="text-left" style="width: 40%;">Грунтование поверхности (2 слоя)/Грунтовка Тифенгрунд Кнауф</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+wprice_room_grunt+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+price_room_grunt+'</td><td style="width: 10%;">'+s2+'</td>';
			$('#smeta_room_grunt_'+(r+1)).append(html);
			s1 = Math.round(s*wprice_room_profil);
			s2 = Math.round((s/1.5)*price_room_profil);
			TotalSum+=(s1+s2);
			Price_work+=s1; 
			Price_mat+=s2; 
			html = '<td class="text-left">Установка профиля маячкового/Маяки - Стандарт 6-10 мм 3 м 0.50 мм</td><td>м2</td><td>'+s+'</td><td>'+wprice_room_profil+'</td><td>'+s1+'</td><td>'+price_room_profil+'</td><td>'+s2+'</td>';
			$('#smeta_room_profil_'+(r+1)).append(html);
			s1 = Math.round(s*wprice_room_alignment);
			s2 = Math.round((s/2.3)*price_room_alignment);
			TotalSum+=(s1+s2);
			Price_work+=s1; 
			Price_mat+=s2; 
			html = '<td class="text-left">Выравнивание штукатурной смесью слой до 20 мм (ручная)/Штукатурка Knauf Rotband</td><td>м2</td><td>'+s+'</td><td>'+wprice_room_alignment+'</td><td>'+s1+'</td><td>'+price_room_alignment+'</td><td>'+s2+'</td>';
			$('#smeta_room_alignment_'+(r+1)).append(html);
		}
		s1 = (wall_covering[r]==2)?Math.round(s*wprice_painting[1]):Math.round(s*wprice_painting[0]);
		mat1 = (wall_covering[r]==2)?wprice_painting[1]:wprice_painting[0];
		s2 = (wall_covering[r]==2)?Math.round(s*price_painting[1]):Math.round(s*price_painting[0]);
		mat2 = (wall_covering[r]==2)?price_painting[1]:price_painting[0];
		TotalSum+=(s1+s2);
		Price_work+=s1;
		Price_mat+=s2;
		$('#smeta_room_painting').attr("id", "smeta_room_painting_"+(r+1)).empty();
		html = '<td class="text-left" style="width: 40%;">Шпаклевание (2 слоя), шлифовка, грунтовка/Шпаклевка для сухих помещений weber.vetonit LR+</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+mat1+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+mat2+'</td><td style="width: 10%;">'+s2+'</td>';
		$('#smeta_room_painting_'+(r+1)).append(html);
		s1 = Math.round(s*wprice_wall_covering[1][wall_covering[r]]);
		s2 = (wall_covering[r]==2)?Math.round((s/4)*price_paint):((wall_covering[r]==3)?Math.round((s/1.5)*price_enetian_plaster):'');
		mat = (wall_covering[r]==2)?price_paint:((wall_covering[r]==3)?price_enetian_plaster:'');
		TotalSum=(s2=='')?TotalSum+s1:TotalSum+s1+s2;
		Price_work+=s1; 
		Price_mat=(s2=='')?Price_mat:Price_mat+s2;
		$('#smeta_room_wall_covering').attr("id", "smeta_room_wall_covering_"+(r+1)).empty();
		html = '<td class="text-left">'+wprice_wall_covering[0][wall_covering[r]]+'</td><td>м2</td><td>'+s+'</td><td>'+wprice_wall_covering[1][wall_covering[r]]+'</td><td>'+s1+'</td><td>'+mat+'</td><td>'+s2+'</td>';
		$('#smeta_room_wall_covering_'+(r+1)).append(html);
		TotalSum+=wprice_radiator;
		Price_work+=wprice_radiator; 
		// Полы
		s1 = Math.round(room_square[r]*wprice_room_dedusting);
		s2 = Math.round(room_square[r]*0.2*price_room_grunt);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2; 
		$('#smeta_room_dedusting').attr("id", "smeta_room_dedusting_"+(r+1)).empty();
		html = '<td class="text-left">Обеспыливание пола (2 слоя)/Грунт универсальный Мультигрунд</td><td>м2</td><td>'+room_square[r]+'</td><td>'+wprice_room_dedusting+'</td><td>'+s1+'</td><td>'+price_room_grunt+'</td><td>'+s2+'</td>';
		$('#smeta_room_dedusting_'+(r+1)).append(html);

		$('#smeta_room_floors_alignment').attr("id", "smeta_room_floors_alignment_"+(r+1)).empty();
		if (floors_alignment){
			s1 = Math.round(room_square[r]*wprice_room_floors_alignment);
			s2 = Math.round(((room_square[r]*8)/20)*price_floor_alignment);
			TotalSum+=(s1+s2);
			Price_work+=s1; 
			Price_mat+=s2; 
			html = '<td class="text-left">Выравнивание финишным ровнителем до 5 мм/Ровнитель для пола weber.vetonit 3000</td><td>м2</td><td>'+room_square[r]+'</td><td>'+wprice_room_floors_alignment+'</td><td>'+s1+'</td><td>'+price_floor_alignment+'</td><td>'+s2+'</td>';
			$('#smeta_room_floors_alignment_'+(r+1)).append(html);
		}
		$('#smeta_room_flooring').attr("id", "smeta_room_flooring_"+(r+1)).empty();
		if (flooring[r]>=0)
		{
			s1 = Math.round(room_square[r]*wprice_room_flooring[1][flooring[r]]);
			s2 = (flooring[r]==2)?Math.round((room_square[r]/3.5)*price_glue):'';
			mat = (flooring[r]==2)?price_glue:'';
			TotalSum=(s2=='')?TotalSum+s1:TotalSum+s1+s2;
			Price_work+=s1; 
			Price_mat=(s2=='')?Price_mat:Price_mat+s2;
			html = '<td class="text-left">'+wprice_room_flooring[0][flooring[r]]+'</td><td>м2</td><td>'+room_square[r]+'</td><td>'+wprice_room_flooring[1][flooring[r]]+'</td><td>'+s1+'</td><td>'+mat+'</td><td>'+s2+'</td>';
			$('#smeta_room_flooring_'+(r+1)).append(html);
		}
		$('#smeta_room_plinth').attr("id", "smeta_room_plinth_"+(r+1)).empty();
		if (plinth[r])
		{
			s1 = Math.round(room_perimeter[r]*wprice_room_plinth[1][plinth_type[r]]);
			TotalSum+=s1;
			Price_work+=s1; 
			html = '<td class="text-left">'+wprice_room_plinth[0][plinth_type[r]]+'</td><td>м.п.</td><td>'+room_perimeter[r]+'</td><td>'+wprice_room_plinth[1][plinth_type[r]]+'</td><td>'+s1+'</td><td></td><td></td>';
			$('#smeta_room_plinth_'+(r+1)).append(html);
		}
		// Потолки
		s1 = Math.round(room_square[r]*wprice_room_roof[1][roof_type[r]]);
		s2 = Math.round(room_square[r]*price_room_roof[roof_type[r]]);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		$('#smeta_room_roof').attr("id", "smeta_room_roof_"+(r+1)).empty();
		html = '<td class="text-left">'+wprice_room_roof[0][roof_type[r]]+'</td><td>м2</td><td>'+room_square[r]+'</td><td>'+wprice_room_roof[1][roof_type[r]]+'</td><td>'+s1+'</td><td>'+price_room_roof[roof_type[r]]+'</td><td>'+s2+'</td>';
		$('#smeta_room_roof_'+(r+1)).append(html);
		$('#smeta_room_fillets').attr("id", "smeta_room_fillets_"+(r+1)).empty();
		if (fillets[r])
		{
			s1 = Math.round(room_perimeter[r]*wprice_room_fillets);
			TotalSum+=s1;
			Price_work+=s1; 
			html = '<td class="text-left">Монтаж полиуретановых потолочных плинтусов/Карниз (Европласт)</td><td>п.м</td><td>'+room_perimeter[r]+'</td><td>'+wprice_room_fillets+'</td><td>'+s1+'</td><td></td><td></td>';
			$('#smeta_room_fillets_'+(r+1)).append(html);
		}
	}

	// Параметры Кухни
	var kitchen_square = Number($('#kitchen_square').val());
	var kitchen_perimeter = Number($('#kitchen_perimeter').val());
	var kitchen_roof_type = $('#kitchen_roof_type :selected').index();
	var kitchen_wall_covering = $('#kitchen_wall_covering :selected').index();
	var kitchen_flooring = $('#kitchen_flooring :selected').index();
	var kitchen_apron = $('#kitchen_apron').is(':checked');
	var kitchen_fillets = $('#kitchen_fillets').is(':checked');
	var kitchen_plinth = $('#kitchen_plinth').is(':checked');
	var kitchen_plinth_type = $('#kitchen_plinth_type :selected').index();;
	// добавляем в смету
		// стены
	s = Math.round(kitchen_perimeter*height);
	$('#smeta_kitchen_grunt').empty();
	$('#smeta_kitchen_profil').empty();
	$('#smeta_kitchen_alignment').empty();
	if (walls_alignment){
		s1 = Math.round(s*wprice_room_grunt);
		s2 = Math.round((s*0.15*price_room_grunt));
		TotalSum+=(s1+s2);
		Price_work+=s1;
		Price_mat+=s2;
		html = '<td class="text-left" style="width: 40%;">Грунтование поверхности стен (2 слоя)/Грунт укрепляющий Тифенгрунд Кнауф</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+wprice_room_grunt+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+price_room_grunt+'</td><td style="width: 10%;">'+s2+'</td>';
		$('#smeta_kitchen_grunt').append(html);
		s1 = Math.round(s*wprice_room_profil);
		s2 = Math.round((s/1.5)*price_room_profil);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		html = '<td class="text-left">Установка профиля маячкового/Маяки - Стандарт 6-10 мм 3 м 0.50 мм</td><td>м2</td><td>'+s+'</td><td>'+wprice_room_profil+'</td><td>'+s1+'</td><td>'+price_room_profil+'</td><td>'+s2+'</td>';
		$('#smeta_kitchen_profil').append(html);
		s1 = Math.round(s*wprice_room_alignment);
		s2 = Math.round((s/1.5)*price_room_alignment);
		TotalSum+=(s1+s2);
		Price_work+=s1;
		Price_mat+=s2;		
		html = '<td class="text-left">Штукатурка стен по маякам до 20 мм/Штукатурка гипсовая Knauf Rotband</td><td>м2</td><td>'+s+'</td><td>'+wprice_room_alignment+'</td><td>'+s1+'</td><td>'+price_room_alignment+'</td><td>'+s2+'</td>';
		$('#smeta_kitchen_alignment').append(html);
	}
	s1 = (kitchen_wall_covering==2)?Math.round(s*wprice_painting[1]):Math.round(s*wprice_painting[0]);
	mat1 = (kitchen_wall_covering==2)?wprice_painting[1]:wprice_painting[0];
	s2 = (kitchen_wall_covering==2)?Math.round(s*price_painting[1]):Math.round(s*price_painting[0]);
	mat2 = (kitchen_wall_covering==2)?price_painting[1]:price_painting[0];
	TotalSum+=(s1+s2);
	Price_work+=s1;
	Price_mat+=s2;
	$('#smeta_kitchen_painting').empty();
	html = '<td class="text-left" style="width: 40%;">Шпаклевание (2 слоя), шлифовка, грунтовка/Шпаклевка для сухих помещений weber.vetonit LR Fine</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+mat1+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+mat2+'</td><td style="width: 10%;">'+s2+'</td>';
	$('#smeta_kitchen_painting').append(html);
	s1 = Math.round(s*wprice_kitchen_wall_covering[1][kitchen_wall_covering]);
	s2 = (kitchen_wall_covering==2)?Math.round((s/4)*price_paint):((kitchen_wall_covering==3)?Math.round((s/1.5)*price_enetian_plaster):'');
	mat = (kitchen_wall_covering==2)?price_paint:((kitchen_wall_covering==3)?price_enetian_plaster:'');
	TotalSum=(s2=='')?TotalSum+s1:TotalSum+s1+s2;
	Price_work+=s1; 
	Price_mat=(s2=='')?Price_mat:Price_mat+s2;
	$('#smeta_kitchen_wall_covering').empty();
	html = '<td class="text-left">'+wprice_kitchen_wall_covering[0][kitchen_wall_covering]+'</td><td>м2</td><td>'+s+'</td><td>'+wprice_kitchen_wall_covering[1][kitchen_wall_covering]+'</td><td>'+s1+'</td><td>'+mat+'</td><td>'+s2+'</td>';
	$('#smeta_kitchen_wall_covering').append(html);
	$('#smeta_kitchen_apron').empty();
	if (kitchen_apron) {
		TotalSum+=(wprice_kitchen_apron+price_glue_apron);
		Price_work+=wprice_kitchen_apron; 
		Price_mat+=price_glue_apron;
		html = '<td class="text-left">Облицовка кухонного фартука кафелем до 5 кв.м</td><td>шт.</td><td>1</td><td>'+wprice_kitchen_apron+'</td><td>'+wprice_kitchen_apron+'</td><td>'+price_glue_apron+'</td><td>'+price_glue_apron+'</td>';
		$('#smeta_kitchen_apron').append(html);
	}
	TotalSum+=wprice_radiator;
	Price_work+=wprice_radiator; 
		// пол
	s1 = Math.round(kitchen_square*wprice_room_dedusting);
	s2 = Math.round(kitchen_square*0.2*price_room_grunt);
	TotalSum+=(s1+s2);
	Price_work+=s1; 
	Price_mat+=s2;
	$('#smeta_kitchen_dedusting').empty();
	html = '<td class="text-left">Обеспыливание пола (2 слоя)/Грунт универсальный Мультигрунд Кнауф</td><td>м2</td><td>'+kitchen_square+'</td><td>'+wprice_room_dedusting+'</td><td>'+s1+'</td><td>'+price_room_grunt+'</td><td>'+s2+'</td>';
	$('#smeta_kitchen_dedusting').append(html);
	$('#smeta_kitchen_floors_alignment').empty();
	if (floors_alignment){
		s1 = Math.round(kitchen_square*wprice_room_floors_alignment);
		s2 = Math.round(((kitchen_square*8)/20)*price_floor_alignment);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		html = '<td class="text-left">Финишное выравнивание ровнителем до 5 мм/Ровнитель для пола weber.vetonit 3000 финишный</td><td>м2</td><td>'+kitchen_square+'</td><td>'+wprice_room_floors_alignment+'</td><td>'+s1+'</td><td>'+price_floor_alignment+'</td><td>'+s2+'</td>';
		$('#smeta_kitchen_floors_alignment').append(html);
	}
	s1 = Math.round(kitchen_square*wprice_room_flooring[1][kitchen_flooring]);
	s2 = (kitchen_flooring==2)?Math.round((kitchen_square/3.5)*price_glue):'';
	mat = (kitchen_flooring==2)?price_glue:'';
	TotalSum=(s2=='')?TotalSum+s1:TotalSum+s1+s2;
	Price_work+=s1; 
	Price_mat=(s2=='')?Price_mat:Price_mat+s2;
	$('#smeta_kitchen_flooring').empty();
	html = '<td class="text-left">'+wprice_room_flooring[0][kitchen_flooring]+'</td><td>м2</td><td>'+kitchen_square+'</td><td>'+wprice_room_flooring[1][kitchen_flooring]+'</td><td>'+s1+'</td><td>'+mat+'</td><td>'+s2+'</td>';
	$('#smeta_kitchen_flooring').append(html);
	$('#smeta_kitchen_plinth').empty();
	if (kitchen_plinth){
		s1 = Math.round(kitchen_perimeter*wprice_room_plinth[1][kitchen_plinth_type]);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left">'+wprice_room_plinth[0][kitchen_plinth_type]+'</td><td>п.м</td><td>'+kitchen_perimeter+'</td><td>'+wprice_room_plinth[1][kitchen_plinth_type]+'</td><td>'+s1+'</td><td></td><td></td>';
		$('#smeta_kitchen_plinth').append(html);
	}
		// потолок
	s1 = Math.round(kitchen_square*wprice_room_roof[1][kitchen_roof_type]);
	s2 = Math.round(kitchen_square*price_kitchen_roof[kitchen_roof_type]);
	TotalSum+=(s1+s2);
	Price_work+=s1; 
	Price_mat+=s2;
	$('#smeta_kitchen_roof').empty();
	html = '<td class="text-left">'+wprice_room_roof[0][kitchen_roof_type]+'</td><td>м2</td><td>'+kitchen_square+'</td><td>'+wprice_room_roof[1][kitchen_roof_type]+'</td><td>'+s1+'</td><td>'+price_kitchen_roof[kitchen_roof_type]+'</td><td>'+s2+'</td>';
	$('#smeta_kitchen_roof').append(html);
	$('#smeta_kitchen_fillets').empty();
	if (kitchen_fillets){
		s1 = Math.round(kitchen_perimeter*wprice_room_fillets);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left">Монтаж потолочных плинтусов (Европласт)</td><td>п.м</td><td>'+kitchen_perimeter+'</td><td>'+wprice_room_fillets+'</td><td>'+s1+'</td><td></td><td></td>';
		$('#smeta_kitchen_fillets').append(html);
	}
	// Параметры Коридора
	var corridor_square = Number($('#corridor_square').val());
	var corridor_perimeter = Number($('#corridor_perimeter').val());
	var corridor_roof_type = $('#corridor_roof_type :selected').index();
	var corridor_wall_covering = $('#corridor_wall_covering :selected').index();
	var corridor_flooring = $('#corridor_flooring :selected').index();
	var corridor_fillets = $('#corridor_fillets').is(':checked');
	var corridor_plinth = $('#corridor_plinth').is(':checked');
	var corridor_plinth_type = $('#corridor_plinth_type :selected').index();
	// добавляем в смету
		// стены
	s = Math.round(corridor_perimeter*height);
	$('#smeta_corridor_alignment').empty();
	if (walls_alignment){
		s1 = Math.round(s*wprice_corridor_alignment);
		s2 = Math.round(s*price_corridor_alignment);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		html = '<td class="text-left" style="width: 40%;">Штукатурка стен по маякам до 20 мм/Knauf Rotband</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+wprice_corridor_alignment+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+price_corridor_alignment+'</td><td style="width: 10%;">'+s2+'</td>';
		$('#smeta_corridor_alignment').append(html);
	}
	s1 = (corridor_wall_covering==2)?Math.round(s*wprice_painting[1]):Math.round(s*wprice_painting[0]);
	mat1 = (corridor_wall_covering==2)?wprice_painting[1]:wprice_painting[0];
	s2 = (corridor_wall_covering==2)?Math.round(s*price_painting[1]):Math.round(s*price_painting[0]);
	mat2 = (corridor_wall_covering==2)?price_painting[1]:price_painting[0];
	TotalSum+=(s1+s2);
	Price_work+=s1;
	Price_mat+=s2;
	$('#smeta_corridor_painting').empty();
	html = '<td class="text-left" style="width: 40%;">Шпаклевание (2 слоя), шлифовка, грунтовка/Шпаклевка Vetonit LR Fine</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+mat1+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+mat2+'</td><td style="width: 10%;">'+s2+'</td>';
	$('#smeta_corridor_painting').append(html);
	s1 = Math.round(s*wprice_corridor_wall_covering[1][corridor_wall_covering]);
	s2 = (corridor_wall_covering==2)?Math.round((s/4)*price_paint):((corridor_wall_covering==3)?Math.round((s/1.5)*price_enetian_plaster):'');
	mat = (corridor_wall_covering==2)?price_paint:((corridor_wall_covering==3)?price_enetian_plaster:'');
	TotalSum=(s2=='')?TotalSum+s1:TotalSum+s1+s2;
	Price_work+=s1; 
	Price_mat=(s2=='')?Price_mat:Price_mat+s2;
	$('#smeta_corridor_wall_covering').empty();
	html = '<td class="text-left" style="width: 40%;">'+wprice_corridor_wall_covering[0][corridor_wall_covering]+'</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+wprice_corridor_wall_covering[1][corridor_wall_covering]+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+mat+'</td><td style="width: 10%;">'+s2+'</td>';
	$('#smeta_corridor_wall_covering').append(html);
		// пол
	$('#smeta_corridor_floors_alignment').empty();
	if (floors_alignment){
		s1 = Math.round(corridor_square*wprice_room_floors_alignment);
		s2 = Math.round(((corridor_square*8)/20)*price_floor_alignment+800);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		html = '<td class="text-left">Выравнивание финишным ровнителем до 5 мм/Vetonit 3000</td><td>м2</td><td>'+corridor_square+'</td><td>'+wprice_room_floors_alignment+'</td><td>'+s1+'</td><td>'+price_floor_alignment+'</td><td>'+s2+'</td>';
		$('#smeta_corridor_floors_alignment').append(html);
	}
	s1 = Math.round(corridor_square*wprice_room_flooring[1][corridor_flooring]);
	s2 = (corridor_flooring==2)?Math.round((corridor_square/3.5)*price_glue):'';
	mat = (corridor_flooring==2)?price_glue:'';
	TotalSum=(s2=='')?TotalSum+s1:TotalSum+s1+s2;
	Price_work+=s1; 
	Price_mat=(s2=='')?Price_mat:Price_mat+s2;
	$('#smeta_corridor_flooring').empty();
	html = '<td class="text-left">'+wprice_room_flooring[0][corridor_flooring]+'</td><td>м2</td><td>'+corridor_square+'</td><td>'+wprice_room_flooring[1][corridor_flooring]+'</td><td>'+s1+'</td><td>'+mat+'</td><td>'+s2+'</td>';
	$('#smeta_corridor_flooring').append(html);
	$('#smeta_corridor_plinth').empty();
	if (corridor_plinth){
		s1 = Math.round(corridor_perimeter*wprice_room_plinth[1][corridor_plinth_type]);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left">'+wprice_room_plinth[0][corridor_plinth_type]+'</td><td>п.м</td><td>'+corridor_perimeter+'</td><td>'+wprice_room_plinth[1][corridor_plinth_type]+'</td><td>'+s1+'</td><td></td><td></td>';
		$('#smeta_corridor_plinth').append(html);
	}
		// потолок
	s1 = Math.round(corridor_square*wprice_room_roof[1][corridor_roof_type]);
	s2 = Math.round(kitchen_square*price_kitchen_roof[corridor_roof_type]);
	TotalSum+=(s1+s2);
	Price_work+=s1; 
	Price_mat+=s2;
	$('#smeta_corridor_roof').empty();
	html = '<td class="text-left">'+wprice_room_roof[0][corridor_roof_type]+'</td><td>м2</td><td>'+corridor_square+'</td><td>'+wprice_room_roof[1][corridor_roof_type]+'</td><td>'+s1+'</td><td>'+price_kitchen_roof[corridor_roof_type]+'</td><td>'+s2+'</td>';
	$('#smeta_corridor_roof').append(html);
	$('#smeta_corridor_fillets').empty();
	if (corridor_fillets){
		s1 = Math.round(corridor_perimeter*wprice_room_fillets);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left">Монтаж потолочных плинтусов (Европласт)</td><td>п.м</td><td>'+corridor_perimeter+'</td><td>'+wprice_room_fillets+'</td><td>'+s1+'</td><td></td><td></td>';
		$('#smeta_corridor_fillets').append(html);
	}
	// Параметры Санузлов
	for (r=0;r<num_bathrooms;r++)
	{
		bathroom_square[r] = Number($('#bathroom_square_'+(r+1)).val());
		bathroom_perimeter[r] = Number($('#bathroom_perimeter_'+(r+1)).val());
		bathroom_roof_type[r] = $('#bathroom_roof_type_'+(r+1)+' :selected').index();
		bathroom_flooring[r] = $('#bathroom_flooring_'+(r+1)+' :selected').index();
		toilet_type[r] = Number($('#toilet_type_'+(r+1)+' :selected').val());
		bath_type[r] = Number($('#bath_type_'+(r+1)+' :selected').val());
		bathroom_water_system[r] = $('#bathroom_water_system_'+(r+1)+' :selected').index();
		bathroom_num_points[r] = Number($('#bathroom_num_points_'+(r+1)).val());
		bathroom_warm_floor[r] = $('#bathroom_warm_floor_'+(r+1)).is(':checked');
		bathroom_towel_dryer[r] = $('#bathroom_towel_dryer_'+(r+1)).is(':checked');
	}
	$('#smeta_bathrooms').empty();
	for (r=0;r<num_bathrooms;r++)
	{
		// Добавляем санузел в смету
		$('#smeta_bathrooms').append(v_sm_brooms_innerHtml);
		$('#smeta_bathroom').attr("id", "smeta_bathroom_"+(r+1));
		$('#smeta_num_bathroom').attr("id", "smeta_num_bathroom_"+(r+1)).text('Санузел №'+(r+1));	// подписываем санузел
			// стены
		s = Math.round(bathroom_perimeter[r]*height);
		s1 = Math.round(s*wprice_bathroom_alignment);
		s2 = Math.round(s*price_bathroom_alignment);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		$('#smeta_bathroom_alignment').attr("id", "smeta_bathroom_alignment_"+(r+1)).empty();
		var html = '<td class="text-left" style="width: 40%;">Выравнивание стен (комплекс работ)/Штукатурка weber.vetonit TT</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+s+'</td><td style="width: 10%;">'+wprice_bathroom_alignment+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+price_bathroom_alignment+'</td><td style="width: 10%;">'+s2+'</td>';
		$('#smeta_bathroom_alignment_'+(r+1)).append(html);
		s1 = Math.round((s*wprice_bathroom_wall_covering));
		s2 = Math.round((s/3)*price_bathroom_wall_covering);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		$('#smeta_bathroom_wall_covering').attr("id", "smeta_bathroom_wall_covering_"+(r+1)).empty();
		var html = '<td class="text-left">Облицовка кафельной плиткой</td><td>м2</td><td>'+s+'</td><td>'+wprice_bathroom_wall_covering+'</td><td>'+s1+'</td><td>'+price_bathroom_wall_covering+'</td><td>'+s2+'</td>';
		$('#smeta_bathroom_wall_covering_'+(r+1)).append(html);
		s1 = Math.round(s*wprice_bathroom_grouting);
		TotalSum+=s1;
		Price_work+=s1; 
		$('#smeta_bathroom_wall_grouting').attr("id", "smeta_bathroom_wall_grouting_"+(r+1)).empty();
		var html = '<td class="text-left">Затирка швов</td><td>м2</td><td>'+s+'</td><td>'+wprice_bathroom_grouting+'</td><td>'+s1+'</td><td></td><td></td>';
		$('#smeta_bathroom_wall_grouting_'+(r+1)).append(html);
			// полы
		$('#smeta_bathroom_warm_floor').attr("id", "smeta_bathroom_warm_floor_"+(r+1)).empty();
		if (bathroom_warm_floor[r]){
			s1 = Math.round(bathroom_square[r]*0.5*wprice_bathroom_warm_floor);
			s2 = price_bathroom_warm_floor;
			TotalSum+=(s1+s2);
			Price_work+=s1; 
			Price_mat+=s2;
			var html = '<td class="text-left">Устройство электрического теплого пола</td><td>м2</td><td>'+(bathroom_square[r]*0.5)+'</td><td>'+wprice_bathroom_warm_floor+'</td><td>'+s1+'</td><td>'+s2+'</td><td>'+s2+'</td>';
			$('#smeta_bathroom_warm_floor_'+(r+1)).append(html);
		}
		$('#smeta_bathroom_floors_alignment').attr("id", "smeta_bathroom_floors_alignment_"+(r+1)).empty();
		if (floors_alignment){
			s1 = Math.round(bathroom_square[r]*wprice_room_floors_alignment);
			s2 = Math.round(((bathroom_square[r]*8)/20)*price_floor_alignment);
			TotalSum+=(s1+s2);
			Price_work+=s1; 
			Price_mat+=s2;
			html = '<td class="text-left">Финишное выравнивание ровнителем до 5 мм/Vetonit 3000</td><td>м2</td><td>'+bathroom_square[r]+'</td><td>'+wprice_room_floors_alignment+'</td><td>'+s1+'</td><td>'+price_floor_alignment+'</td><td>'+s2+'</td>';
			$('#smeta_bathroom_floors_alignment_'+(r+1)).append(html);
		}
		s1 = Math.round((bathroom_square[r]*wprice_bathroom_flooring[1][bathroom_flooring[r]]));
		s2 = (bathroom_flooring[r]==0)?Math.round(bathroom_square[r]/3*price_bathroom_wall_covering):'';
		TotalSum = (s2=='')?TotalSum+s1:TotalSum+s1+s2;
		Price_work+=s1; 
		Price_mat = (s2=='')?Price_mat:Price_mat+s2;
		mat = (s2=='')?'':price_bathroom_wall_covering;
		$('#smeta_bathroom_flooring').attr("id", "smeta_bathroom_flooring_"+(r+1)).empty();
		html = '<td class="text-left">'+wprice_bathroom_flooring[0][bathroom_flooring[r]]+'</td><td>м2</td><td>'+bathroom_square[r]+'</td><td>'+wprice_bathroom_flooring[1][bathroom_flooring[r]]+'</td><td>'+s1+'</td><td>'+mat+'</td><td>'+s2+'</td>';
		$('#smeta_bathroom_flooring_'+(r+1)).append(html);
		$('#smeta_bathroom_floor_grouting').attr("id", "smeta_bathroom_floor_grouting_"+(r+1)).empty();
		if (bathroom_flooring[r]==0){
			s1 = Math.round(bathroom_square[r]*wprice_bathroom_grouting);
			TotalSum+=s1;
			Price_work+=s1; 
			html = '<td class="text-left">Затирка швов</td><td>м2</td><td>'+bathroom_square[r]+'</td><td>'+wprice_bathroom_grouting+'</td><td>'+s1+'</td><td></td><td></td>';
			$('#smeta_bathroom_floor_grouting_'+(r+1)).append(html);
		}
			// потолки
		s1 = Math.round(bathroom_square[r]*wprice_bathroom_roof[1][bathroom_roof_type[r]]);
		s2 = Math.round(bathroom_square[r]*price_bathroom_roof[bathroom_roof_type[r]]);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		$('#smeta_bathroom_roof').attr("id", "smeta_bathroom_roof_"+(r+1)).empty();
		html = '<td class="text-left">'+wprice_bathroom_roof[0][bathroom_roof_type[r]]+'</td><td>м2</td><td>'+bathroom_square[r]+'</td><td>'+wprice_bathroom_roof[1][bathroom_roof_type[r]]+'</td><td>'+s1+'</td><td>'+price_bathroom_roof[bathroom_roof_type[r]]+'</td><td>'+s2+'</td>';
		$('#smeta_bathroom_roof_'+(r+1)).append(html);
			// водопровод и канализация
		s1 = Math.round(bathroom_num_points[r]*wprice_bathroom_water_system[1][bathroom_water_system[r]]);
		TotalSum+=s1;
		Price_work+=s1; 
		$('#smeta_bathroom_water_system').attr("id", "smeta_bathroom_water_system_"+(r+1)).empty();
		html = '<td class="text-left">'+wprice_bathroom_water_system[0][bathroom_water_system[r]]+'</td><td>точка</td><td>'+bathroom_num_points[r]+'</td><td>'+wprice_bathroom_water_system[1][bathroom_water_system[r]]+'</td><td>'+s1+'</td><td></td><td></td>';
		$('#smeta_bathroom_water_system_'+(r+1)).append(html);
		$('#smeta_bathroom_towel_dryer').attr("id", "smeta_bathroom_towel_dryer_"+(r+1)).empty();
		if (bathroom_towel_dryer[r]){
			TotalSum+=wprice_bathroom_towel_dryer;
			Price_work+=wprice_bathroom_towel_dryer; 
			html = '<td class="text-left">Монтаж водяного полотенцесушителя</td><td>шт.</td><td>1</td><td>'+wprice_bathroom_towel_dryer+'</td><td>'+wprice_bathroom_towel_dryer+'</td><td></td><td></td>';
			$('#smeta_bathroom_towel_dryer_'+(r+1)).append(html);
		}
		$('#smeta_toilet').attr("id", "smeta_toilet_"+(r+1)).empty();
		if (toilet_type[r]>=0){
			s1 = wprice_toilet[1][toilet_type[r]];
			TotalSum+=s1;
			Price_work+=s1; 
			html = '<td class="text-left">'+wprice_toilet[0][toilet_type[r]]+'</td><td>шт</td><td>1</td><td>'+s1+'</td><td>'+s1+'</td><td></td><td></td>';
			$('#smeta_toilet_'+(r+1)).append(html);
		}
		$('#smeta_bathroom_bath').attr("id", "smeta_bathroom_bath_"+(r+1)).empty();
		if (bath_type[r]>=0){
			html = '<td class="text-left">'+wprice_bath[0][bath_type[r]]+'</td><td>шт</td><td>1</td><td>'+wprice_bath[1][bath_type[r]]+'</td><td>'+wprice_bath[1][bath_type[r]]+'</td><td></td><td></td>';
			$('#smeta_bathroom_bath_'+(r+1)).append(html);
		}
		TotalSum+=price_bathroom_mat;
		Price_mat+=price_bathroom_mat;
		$('#smeta_bathroom_mat').attr("id", "smeta_bathroom_mat_"+(r+1)).empty();
		html = '<td class="text-left">Материалы</td><td>шт</td><td>1</td><td></td><td></td><td></td><td>'+price_bathroom_mat+'</td>';
		$('#smeta_bathroom_mat_'+(r+1)).append(html);
	}
	// Электромонтаж
	if (electrics)
	{
		$('#smeta_electrics_work').show();
		$('#smeta_electrics_type').empty();
		s1 = Math.round(total_square*wprice_electrics[1][electrics_work]);
		s2 = Math.round(total_square*price_electrics[electrics_work]);
		TotalSum+=(s1+s2);
		Price_work+=s1; 
		Price_mat+=s2;
		html = '<td class="text-left" style="width: 40%;">'+wprice_electrics[0][electrics_work]+'</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+total_square+'</td><td style="width: 10%;">'+wprice_electrics[1][electrics_work]+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;">'+price_electrics[electrics_work]+'</td><td style="width: 10%;">'+s2+'</td>';
		$('#smeta_electrics_type').append(html);
	}
	else $('#smeta_electrics_work').hide();
	// Дополнительные работы
	$('#smeta_balcony').empty();
	if (balcony)
	{
		s1 = Math.round(balcony_square*wprice_balcony);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left" style="width: 40%;">Отделка балкона под ключ</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+balcony_square+'</td><td style="width: 10%;">'+wprice_balcony+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;"></td><td style="width: 10%;"></td>';
		$('#smeta_balcony').append(html);
	}
	$('#smeta_door_installation').empty();
	if (door_installation)
	{
		s1 = Math.round(num_doors*wprice_door_installation);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left" style="width: 40%;">Установка межкомнатной двери</td><td style="width: 10%;">шт.</td><td style="width: 10%;">'+num_doors+'</td><td style="width: 10%;">'+wprice_door_installation+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;"></td><td style="width: 10%;"></td>';
		$('#smeta_door_installation').append(html);
	}
	$('#smeta_cleaning').empty();
	s1 = Math.round(total_square*wprice_cleaning);
	TotalSum+=s1;
	Price_work+=s1; 
	html = '<td class="text-left" style="width: 40%;">Уборка помещений, вынос строительного мусора (за весь рабочий процесс)</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+total_square+'</td><td style="width: 10%;">'+wprice_cleaning+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;"></td><td style="width: 10%;"></td>';
	$('#smeta_cleaning').append(html);
	$('#smeta_demontazh').empty();
	if ($('#capremont').is(':checked'))
	{
		s1 = Math.round(total_square*wprice_demontazh);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left" style="width: 40%;">Демонтажные работы</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+total_square+'</td><td style="width: 10%;">'+wprice_demontazh+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;"></td><td style="width: 10%;"></td>';
		$('#smeta_demontazh').append(html);
	}
	$('#smeta_design').empty();
	if (design)
	{
		s1 = Math.round(total_square*wprice_design[design_type]);
		TotalSum+=s1;
		Price_work+=s1; 
		html = '<td class="text-left" style="width: 40%;">Услуги дизайнера</td><td style="width: 10%;">м2</td><td style="width: 10%;">'+total_square+'</td><td style="width: 10%;">'+wprice_design[design_type]+'</td><td style="width: 10%;">'+s1+'</td><td style="width: 10%;"></td><td style="width: 10%;"></td>';
		$('#smeta_design').append(html);
	}
	home_type = $('#home_type option:selected').val();
	Price_work = Math.round(Price_work * home_type);
	
    $('#res_tbl').slideDown();
    $('#res_square').text(total_square);
    $('#res_price_pm').text(Math.round(Price_work / total_square));
    $('#res_price_work').text(Price_work);
    $('#res_price_mat').text(Price_mat);
		
}



















