window.onload = function () {
	if(screen.width > 991){
		//menu
		let menu_link = document.getElementsByClassName('menu-link');
		for (let i = 0; i< menu_link.length; i++){
			menu_link[i].onclick = function (e) {
				e.preventDefault();
				let attrib = this.getAttribute('href');
				if(attrib == '#rassrochka'){
					main.classList.remove('index');
					iconBottom.classList.add('active')
					main.classList.add('bg');
					main.classList.add('screen-two');
					main.classList.remove('screen-five');
					main.classList.remove('screen-four');
					main.classList.remove('screen-three');
					main.classList.remove('screen-six');
					absolute_top.classList.remove('active');
					absolute_top.classList.remove('active');
					setTimeout(function () {
						main.classList.add('text-white');
					}, 500)
				}
				else if(attrib == '#service'){
					main.classList.remove('screen-two');
					main.classList.remove('screen-four');
					main.classList.remove('screen-three');
					main.classList.remove('index');
					main.classList.remove('text-white');
					main.classList.remove('screen-six');
					absolute_top.classList.remove('active');
					iconBottom.classList.add('active');
					main.classList.add('screen-five');
				}
				else if(attrib == '#specifications'){
					main.classList.remove('screen-two');
					main.classList.remove('screen-four');
					main.classList.remove('screen-three');
					main.classList.remove('screen-five');
					main.classList.remove('index');
					main.classList.remove('text-white');
					iconBottom.classList.add('active');
					main.classList.add('screen-six');
				}
			}
		}

		//load first screen
		let main = document.getElementsByTagName('main')[0],
			pic = document.getElementsByClassName('main-one__pic')[0],
			picStyle = getComputedStyle(pic),
			absoluteTop = document.getElementsByClassName('main-absolute')[0],
			logo = document.getElementsByClassName('logo')[0];
		let absoluteStyle = getComputedStyle(absoluteTop);

		let picInterval = setInterval(function () {
			if (picStyle.opacity == 1) {
				pic.classList.remove('active');
			}
			if (absoluteStyle.opacity == 1) {
				main.classList.remove('load');
				main.classList.add('active')
			}
		}, 10)

		setTimeout(function () {
			clearInterval(picInterval);
		}, 2000)
		main.classList.add('load');

		//event first screen
		let colorItem = document.getElementsByClassName('main-one__color');
		let colorCar = document.getElementsByClassName('images-car');
		let absolute_top = document.getElementsByClassName('main-absolute__top')[0]
		let iDs;
		for (let i = 0; i < colorItem.length; i++) {
			colorItem[i].onclick = function () {
				main.classList.remove('black');
				main.classList.remove('chrome');
				main.classList.remove('red');
				main.classList.remove('blue');
				main.classList.remove('metal');
				iDs = this.getAttribute('id');
				for (let j = 0; j < colorCar.length; j++) {
					colorCar[j].classList.remove('active')
					if (colorCar[j].getAttribute('data-car') == iDs) {
						colorCar[j].classList.add('active')
						main.classList.add(iDs)
					}
					console.log(colorCar[j].getAttribute('data-car'));
				}
			};
		}
		if (window.addEventListener) {
			if ('onwheel' in document) {
				// IE9+, FF17+, Ch31+
				window.addEventListener("wheel", onWheel);
			} else if ('onmousewheel' in document) {
				// устаревший вариант события
				window.addEventListener("mousewheel", onWheel);
			} else {
				// Firefox < 17
				window.addEventListener("MozMousePixelScroll", onWheel);
			}
		} else { // IE8-
			window.attachEvent("onmousewheel", onWheel);
		}

		function onWheel(e) {
			e = e || window.event

			// wheelDelta не даёт возможность узнать количество пикселей
			var delta = e.deltaY || e.detail || e.wheelDelta;

			if (delta > 1 && !main.classList.contains('bg') && !main.classList.contains('screen-four') && !main.classList.contains('screen-five') && !main.classList.contains('screen-six') ) {
				iconBottom.onclick();
			}
			if (delta < 1 && main.classList.contains('bg') && iconBottom.classList.contains('active') && !main.classList.contains('screen-six')) {
				iconBottom.onclick();
			}
			if(main.classList.contains('screen-six') && delta > 1){
				absolute_top.classList.add('active')
			}
		}

		logo.onclick = function () {
			if (main.classList.contains('bg') || main.classList.contains('screen-four') || main.classList.contains('screen-five') || main.classList.contains('screen-six')) {
				main.classList.add('index');
				setTimeout(function () {
					main.classList.remove('text-white');
					main.classList.remove('screen-four');
					main.classList.remove('screen-five');
					main.classList.remove('screen-six');
					absolute_top.classList.remove('active');
				}, 200);
				setTimeout(function () {
					main.classList.remove('bg');
				}, 500);
				setTimeout(function () {
					main.classList.remove('screen-three');
					main.classList.remove('screen-two');
					main.classList.remove('screen-six');
					iconBottom.classList.remove('active');
					absolute_top.classList.remove('active');
				}, 1000)
			}
		}

		// load two screen
		let iconBottom = document.getElementsByClassName('main-absolute__arrow')[0];
		let btn = document.getElementById('main-two__btn-order');
		let two_container = document.getElementsByClassName('main-twos')[0];

		let stateBtn = true
		iconBottom.onclick = function () {
			if(stateBtn == true){
				stateBtn = false
				if (this.classList.contains('active')) {
					main.classList.add('index');
					setTimeout(function () {
						main.classList.remove('text-white');
					}, 200);
					setTimeout(function () {
						main.classList.remove('bg');
					}, 500);
					setTimeout(function () {
						main.classList.remove('screen-three');
						main.classList.remove('screen-two');
						main.classList.remove('screen-six');
						absolute_top.classList.remove('active');
						iconBottom.classList.remove('active')
					}, 1000)
				} else {
					main.classList.remove('index');
					iconBottom.classList.add('active')
					main.classList.add('bg');
					main.classList.add('screen-two');
					setTimeout(function () {
						main.classList.add('text-white');
					}, 500);
				}
				setTimeout(function () {
					stateBtn = true
				}, 1500)
			}

		}


		// load three-screen

		btn.onclick = function () {
			main.classList.add('screen-three');
		}

		// load four-screen
		let btn_test = document.getElementsByClassName('test-drive');

		for (let i=0; i < btn_test.length; i++){
			btn_test[i].onclick = function () {
				main.classList.remove('index');
				main.classList.remove('screen-two');
				main.classList.remove('screen-five');
				main.classList.remove('screen-three');
				main.classList.remove('screen-six');
				main.classList.remove('index');
				absolute_top.classList.remove('active');
				main.classList.remove('bg');
				main.classList.add('screen-four');
				main.classList.add('text-white');
				setTimeout(function () {

				}, 500)
			}
		}

	}else{
		let hamburger = document.getElementsByClassName('hamburger')[0],
			menu_mobile = document.getElementsByClassName('menu-mobile__container')[0],
			blackout = document.getElementsByClassName('blackout')[0]

		hamburger.onclick = function () {
			console.log(hamburger)
			if(hamburger.classList.contains('active')){
				hamburger.classList.remove('active');
				menu_mobile.classList.remove('active');
				blackout.classList.remove('active');
			}else{
				hamburger.classList.add('active');
				menu_mobile.classList.add('active');
				blackout.classList.add('active');
			}
		}
		let main = document.getElementsByTagName('main')[0];
		let colorItem = document.getElementsByClassName('main-one__color');
		let colorCar = document.getElementsByClassName('images-car');
		let iDs;
		for (let i = 0; i < colorItem.length; i++) {
			colorItem[i].onclick = function () {
				main.classList.remove('black');
				main.classList.remove('chrome');
				main.classList.remove('red');
				main.classList.remove('blue');
				main.classList.remove('metal');
				iDs = this.getAttribute('data-id');
				for (let j = 0; j < colorCar.length; j++) {
					colorCar[j].classList.remove('active')
					if (colorCar[j].getAttribute('data-car') == iDs) {
						colorCar[j].classList.add('active')
						main.classList.add(iDs)
					}
					console.log(colorCar[j].getAttribute('data-car'));
				}
			};
		}

		// собираем все якоря; устанавливаем время анимации и количество кадров
		const anchors = document.querySelectorAll('a[href*="#"]')

		for (let anchor of anchors) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()
				hamburger.classList.remove('active');
				menu_mobile.classList.remove('active');
				blackout.classList.remove('active');
				const blockID = anchor.getAttribute('href')
				document.querySelector('' + blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			})
		}

	}

	// tabs
	let tabLinks = document.querySelectorAll(".tabs a");
	let tabPanels = document.querySelectorAll(".tabs-panel");

	for(let el of tabLinks) {
		el.addEventListener("click", e => {
			e.preventDefault();

		document.querySelector('.tabs li.active').classList.remove("active");
		document.querySelector('.tabs-panel.active').classList.remove("active");

		const parentListItem = el.parentElement;
		parentListItem .classList.add("active");
		const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

		const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
		panel[0].classList.add("active");
	});
	}

	let form = document.querySelector('#callback');

	form.addEventListener('submit', function(evt) {
		evt.preventDefault();

		var formData = {
			name: document.querySelector('input[name="name"]').value,
			phone: document.querySelector('input[name="phone"]').value
		};

		var request = new XMLHttpRequest();

		request.addEventListener('load', function() {
			// В этой части кода можно обрабатывать ответ от сервера
			console.log(request.response);
			form.classList.add('active')
		});

		request.open('POST', 'send.php', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone));
	});

	let form2 = document.querySelector('#callback2');

	form2.addEventListener('submit', function(evt) {
		evt.preventDefault();

		var formData = {
			name: document.querySelector('input[name="name2"]').value,
			phone: document.querySelector('input[name="phone2"]').value
		};

		var request = new XMLHttpRequest();

		request.addEventListener('load', function() {
			// В этой части кода можно обрабатывать ответ от сервера
			console.log(request.response);
			form2.classList.add('active')
		});

		request.open('POST', 'send2.php', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.send('name2=' + encodeURIComponent(formData.name) + '&phone2=' + encodeURIComponent(formData.phone));
	});

	MaskedInput({
		elm: document.getElementById('phone'), // select only by id
		format: '+7 (___) ___-__-__',
		separator: '+7 ()-'
	});
	MaskedInput({
		elm: document.getElementById('phone2'), // select only by id
		format: '+7 (___) ___-__-__',
		separator: '+7 ()-'
	});
}