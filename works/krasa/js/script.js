var vAlign = {
	items : ".vAlign",
	func : function(){
		$(this.items).each(function(){
			var wrap = $(this).parent(),
				wrapH = wrap.innerHeight(),
				itemH = $(this).innerHeight(),
				margin  = (wrapH - itemH) / 2;
			$(this).css("marginTop", margin);
		});
	},
	init : function(){
		var $this = this;
		this.func();
		$(window).resize(function(){
			$this.func();
		});
	},
}
	function parallax(){
		var min = 0;
		var max = 0;
		var wrap = $(".s4");
		var pict = $(".s4 .container");


		function setHeight(){
			var x = 20;
			var height;
			if(pict.outerHeight()>$(window).height()){
				height = pict.outerHeight() - (pict.outerHeight()/100*x);
			}else{
				height = "auto";
			}
			wrap.height(height);
		}
		setHeight();
		function setPos(){
			if($(window).height() > pict.outerHeight()){
				pict.css("backgroundPosition", "90% "+ 0);
				return;
			}
			max = pict.outerHeight() - wrap.height();
			var scroll = $(window).scrollTop() - pict.offset().top;
			if(scroll > min && scroll < max){
				pict.css("backgroundPosition", "90% "+ -scroll+"px");
			}else if(scroll > max){
				pict.css("backgroundPosition", "90% "+ -max+"px");
			}
		}
		setPos();
		$(window).on("scroll", setPos);
		$(window).on("resize", function(){
			setPos();
			setHeight();
		});
	}
	$(window).load(function(){
		parallax();
	});
	function pagination(){
		var sections = $(".mainSectns > section");
		var paginWrap = $(".pagination");
		for(var i=0; sections.length>i; i++){
			var id = sections.eq(i).attr("id");
			paginWrap.append("<li><a href='#"+id+"'></a></li>");
		};
		paginWrap.css("marginTop", -paginWrap.height()/2);
		var paginItems = $(".pagination a");
		paginItems.on("click", function(e){
			e.preventDefault();
			var href = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(href).offset().top
			});
		});
		function activeEl(){
			var sTop = $(window).scrollTop(),
				sBot = sTop + $(window).height()/2;
			sections.each(function(i){
				var elTop = $(this).offset().top;
				var elBot = $(this).offset().top + $(this).outerHeight();
				if(elTop >= sTop && elTop <= sBot || elBot > sBot && elTop < sTop){
					sections.add(paginItems).removeClass("active");
					$(this).add(paginItems.eq(i)).addClass("active");
				}
			});
		};
		activeEl();
		$(window).on("scroll", function(){
			activeEl();
		});
	}
	$(".toTop").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		});
	});
	$(".nextSect").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $(this).parents("section").next().offset().top
		});
	});

	$(function(){
		pagination();
		$("#s1").height($(window).height());
		$(window).resize(function(){
			$("#s1").height($(window).height());
		});
		vAlign.init();
		$(".fancybox").fancybox({
			padding: 0,
			margin: 0
		});
	});




	//Обработчик форм
	$("form").submit(function(){ // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = false; // предварительно ошибок нет
		if (!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			$.ajax({ // инициализируем ajax запрос
			   type: 'POST', // отправляем в POST формате, можно GET
			   url: 'php/contact.php', // путь до обработчика, у нас он лежит в той же папке
			   dataType: 'json', // ответ ждем в json формате
			   data: data, // данные для отправки
		       beforeSend: function(data) { // событие до отправки
		            form.find('button').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
		          },
		       success: function(data){ // событие после удачного обращения к серверу и получения ответа
		       		if (data['error']) { // если обработчик вернул ошибку
		       			alert(data['error']); // покажем её текст
		       		} else { // если все прошло ок
					   $.fancybox('<article id="pp_thanksPage"><div class="leadForm1"><div>'+form.data("title")+'</div> <p>'+ form.data("text") +'</p></div></article>', {
						   padding : 0,
						});
		       		}
		         },
		       error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
		            alert(xhr.status); // покажем ответ сервера
		            alert(thrownError); // и текст ошибки
		         },
		       complete: function(data) { // событие после любого исхода
		            form.find('button').prop('disabled', false); // в любом случае включим кнопку обратно
		         }
			     });
		}
		return false; // вырубаем стандартную отправку формы
	});
	$("input[type='tel']").mask("+7 (999) 999-9999");
	$(".h_contacts").click(function(){
		$("html, body").animate({
			scrollTop: $(".s7").offset().top
		}, 500);
	});