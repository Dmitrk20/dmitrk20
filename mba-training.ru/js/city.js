//ya.city
	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation;
		$('#f-yacity').val(geolocation.city);
		var prtnm = $('#f-yacity').val();
		$('.geo_in').html(prtnm);
		switch (prtnm) {

			case 'Москва': 
			        $('.geo_in').html('в Москве');
			         break
			case 'Абрамцево': 
			        $('.geo_in').html('в Абрамцево');
			         break
			case 'Алабино': 
			        $('.geo_in').html('в Алабино');
			         break
			case 'Апрелевка': 
			        $('.geo_in').html('в Апрелевке');
			         break
			case 'Архангельское': 
			        $('.geo_in').html('в Архангельском');
			         break
			case 'Ашитково': 
			        $('.geo_in').html('в Ашитково');
			         break
			case 'Байконур': 
			        $('.geo_in').html('в Байконуре');
			         break
			case 'Бакшеево': 
			        $('.geo_in').html('в Бакшеево');
			         break
			case 'Балашиха': 
			        $('.geo_in').html('в Балашихе');
			         break
			case 'Барыбино': 
			        $('.geo_in').html('в Барыбино');
			         break
			case 'Белоомут': 
			        $('.geo_in').html('в Белоомуте');
			         break
			case 'Белые Столбы': 
			        $('.geo_in').html('в Белых Столбах');
			         break
			case 'Бородино': 
			        $('.geo_in').html('в Бородино');
			         break
			case 'Бронницы': 
			        $('.geo_in').html('в Бронницах');
			         break
			case 'Быково': 
			        $('.geo_in').html('в Быково');
			         break
			case 'Валуево': 
			        $('.geo_in').html('в Валуево');
			         break
			case 'Вербилки': 
			        $('.geo_in').html('в Вербилках');
			         break
			case 'Верея': 
			        $('.geo_in').html('в Верее');
			         break
			case 'Видное': 
			        $('.geo_in').html('в Видном');
			         break
			case 'Внуково': 
			        $('.geo_in').html('в Внуково');
			         break
			case 'Вождь Пролетариата': 
			        $('.geo_in').html('в Вожде Пролетариата');
			         break
			case 'Волоколамск': 
			        $('.geo_in').html('в Волоколамске');
			         break
			case 'Вороново': 
			        $('.geo_in').html('в Вороново');
			         break
			case 'Воскресенск': 
			        $('.geo_in').html('в Воскресенске');
			         break
			case 'Восточный': 
			        $('.geo_in').html('в Восточном');
			         break
			case 'Востряково': 
			        $('.geo_in').html('в Востряково');
			         break
			case 'Высоковск': 
			        $('.geo_in').html('в Высоковске');
			         break
			case 'Голицино': 
			        $('.geo_in').html('в Голицино');
			         break
			case 'Деденево': 
			        $('.geo_in').html('в Деденево');
			         break
			case 'Дедовск': 
			        $('.geo_in').html('в Дедовске');
			         break
			case 'Дзержинский': 
			        $('.geo_in').html('в Дзержинском');
			         break
			case 'Дмитров': 
			        $('.geo_in').html('в Дмитрове');
			         break
			case 'Долгопрудный': 
			        $('.geo_in').html('в Долгопрудном');
			         break
			case 'Домодедово': 
			        $('.geo_in').html('в Домодедово');
			         break
			case 'Дорохово': 
			        $('.geo_in').html('в Дорохово');
			         break
			case 'Дрезна': 
			        $('.geo_in').html('в Дрезне');
			         break
			case 'Дубки': 
			        $('.geo_in').html('в Дубках');
			         break
			case 'Дубна': 
			        $('.geo_in').html('в Дубне');
			         break
			case 'Егорьевск': 
			        $('.geo_in').html('в Егорьевске');
			         break
			case 'Железнодорожный': 
			        $('.geo_in').html('в Железнодорожном');
			         break
			case 'Жилево': 
			        $('.geo_in').html('в Жилево');
			         break
			case 'Жуковский': 
			        $('.geo_in').html('в Жуковском');
			         break
			case 'Загорск': 
			        $('.geo_in').html('в Загорске');
			         break
			case 'Загорянский': 
			        $('.geo_in').html('в Загорянском');
			         break
			case 'Запрудная': 
			        $('.geo_in').html('в Запрудной');
			         break
			case 'Зарайск': 
			        $('.geo_in').html('в Зарайске');
			         break
			case 'Звенигород': 
			        $('.geo_in').html('в Звенигороде');
			         break
			case 'Зеленоград': 
			        $('.geo_in').html('в Зеленограде');
			         break
			case 'Ивантеевка': 
			        $('.geo_in').html('в Ивантеевке');
			         break
			case 'Икша': 
			        $('.geo_in').html('в Икше');
			         break
			case 'Ильинский': 
			        $('.geo_in').html('в Ильинском');
			         break
			case 'Истра': 
			        $('.geo_in').html('в Истре');
			         break
			case 'Калининград': 
			        $('.geo_in').html('в Калининграде');
			         break
			case 'Кашира': 
			        $('.geo_in').html('в Кашире');
			         break
			case 'Керва': 
			        $('.geo_in').html('в Керве');
			         break
			case 'Климовск': 
			        $('.geo_in').html('в Климовске');
			         break
			case 'Клин': 
			        $('.geo_in').html('в Клине');
			         break
			case 'Клязьма': 
			        $('.geo_in').html('в Клязьме');
			         break
			case 'Кожино': 
			        $('.geo_in').html('в Кожино');
			         break
			case 'Кокошкино': 
			        $('.geo_in').html('в Кокошкино');
			         break
			case 'Коломна': 
			        $('.geo_in').html('в Коломне');
			         break
			case 'Колюбакино': 
			        $('.geo_in').html('в Колюбакино');
			         break
			case 'Королев': 
			        $('.geo_in').html('в Королеве');
			         break
			case 'Косино': 
			        $('.geo_in').html('в Косино');
			         break
			case 'Котельники': 
			        $('.geo_in').html('в Котельниках');
			         break
			case 'Красково': 
			        $('.geo_in').html('в Красково');
			         break
			case 'Красноармейск': 
			        $('.geo_in').html('в Красноармейске');
			         break
			case 'Красногорск': 
			        $('.geo_in').html('в Красногорске');
			         break
			case 'Краснозаводск': 
			        $('.geo_in').html('в Краснозаводске');
			         break
			case 'Краснознаменск': 
			        $('.geo_in').html('в Краснознаменске');
			         break
			case 'Красный Ткач': 
			        $('.geo_in').html('в Красном Ткаче');
			         break
			case 'Крюково': 
			        $('.geo_in').html('в Крюково');
			         break
			case 'Кубинка': 
			        $('.geo_in').html('в Кубинке');
			         break
			case 'Купавна': 
			        $('.geo_in').html('в Купавне');
			         break
			case 'Куровское': 
			        $('.geo_in').html('в Куровском');
			         break
			case 'Лесной Городок': 
			        $('.geo_in').html('в Лесном Городке');
			         break
			case 'Ликино-Дулево': 
			        $('.geo_in').html('в Ликино-Дулево');
			         break
			case 'Лобня': 
			        $('.geo_in').html('в Лобне');
			         break
			case 'Лопатинский': 
			        $('.geo_in').html('в Лопатинском');
			         break
			case 'Лосино-Петровский': 
			        $('.geo_in').html('в Лосино-Петровском');
			         break
			case 'Лотошино': 
			        $('.geo_in').html('в Лотошино');
			         break
			case 'Лукино': 
			        $('.geo_in').html('в Лукино');
			         break
			case 'Луховицы': 
			        $('.geo_in').html('в Луховицах');
			         break
			case 'Лыткарино': 
			        $('.geo_in').html('в Лыткарино');
			         break
			case 'Львовский': 
			        $('.geo_in').html('в Львовском');
			         break
			case 'Люберцы': 
			        $('.geo_in').html('в Люберцах');
			         break
			case 'Малаховка': 
			        $('.geo_in').html('в Малаховке');
			         break
			case 'Михайловское': 
			        $('.geo_in').html('в Михайловском');
			         break
			case 'Михнево': 
			        $('.geo_in').html('в Михнево');
			         break
			case 'Можайск': 
			        $('.geo_in').html('в Можайске');
			         break
			case 'Монино': 
			        $('.geo_in').html('в Монино');
			         break
			case 'Муханово': 
			        $('.geo_in').html('в Муханово');
			         break
			case 'Мытищи': 
			        $('.geo_in').html('в Мытищах');
			         break
			case 'Нарофоминск': 
			        $('.geo_in').html('в Нарофоминске');
			         break
			case 'Нахабино': 
			        $('.geo_in').html('в Нахабино');
			         break
			case 'Некрасовка': 
			        $('.geo_in').html('в Некрасовке');
			         break
			case 'Немчиновка': 
			        $('.geo_in').html('в Немчиновке');
			         break
			case 'Новобратцевский': 
			        $('.geo_in').html('в Новобратцевском');
			         break
			case 'Новоподрезково': 
			        $('.geo_in').html('в Новоподрезково');
			         break
			case 'Ногинск': 
			        $('.geo_in').html('в Ногинске');
			         break
			case 'Обухово': 
			        $('.geo_in').html('в Обухово');
			         break
			case 'Одинцово': 
			        $('.geo_in').html('в Одинцово');
			         break
			case 'Ожерелье': 
			        $('.geo_in').html('в Ожерелье');
			         break
			case 'Озеры': 
			        $('.geo_in').html('в Озерах');
			         break
			case 'Октябрьский': 
			        $('.geo_in').html('в Октябрьском');
			         break
			case 'Опалиха': 
			        $('.geo_in').html('в Опалихе');
			         break
			case 'Орехово-Зуево': 
			        $('.geo_in').html('в Орехово-Зуево');
			         break
			case 'Павловский Посад': 
			        $('.geo_in').html('в Павловском Посаде');
			         break
			case 'Первомайский': 
			        $('.geo_in').html('в Первомайском');
			         break
			case 'Пески': 
			        $('.geo_in').html('в Песках');
			         break
			case 'Пироговский': 
			        $('.geo_in').html('в Пироговском');
			         break
			case 'Подольск': 
			        $('.geo_in').html('в Подольске');
			         break
			case 'Полушкино': 
			        $('.geo_in').html('в Полушкино');
			         break
			case 'Правдинский': 
			        $('.geo_in').html('в Правдинском');
			         break
			case 'Привокзальный': 
			        $('.geo_in').html('в Привокзальном');
			         break
			case 'Пролетарский': 
			        $('.geo_in').html('в Пролетарском');
			         break
			case 'Протвино': 
			        $('.geo_in').html('в Протвино');
			         break
			case 'Пушкино': 
			        $('.geo_in').html('в Пушкино');
			         break
			case 'Пущино': 
			        $('.geo_in').html('в Пущино');
			         break
			case 'Радовицкий': 
			        $('.geo_in').html('в Радовицком');
			         break
			case 'Раменское': 
			        $('.geo_in').html('в Раменском');
			         break
			case 'Реутов': 
			        $('.geo_in').html('в Реутове');
			         break
			case 'Решетниково': 
			        $('.geo_in').html('в Решетниково');
			         break
			case 'Родники': 
			        $('.geo_in').html('в Родниках');
			         break
			case 'Рошаль': 
			        $('.geo_in').html('в Рошале');
			         break
			case 'Рублево': 
			        $('.geo_in').html('в Рублево');
			         break
			case 'Руза': 
			        $('.geo_in').html('в Рузе');
			         break
			case 'Салтыковка': 
			        $('.geo_in').html('в Салтыковке');
			         break
			case 'Северный': 
			        $('.geo_in').html('в Северном');
			         break
			case 'Сергиев Посад': 
			        $('.geo_in').html('в Сергиевом Посаде');
			         break
			case 'Серебряные Пруды': 
			        $('.geo_in').html('в Серебряных Прудах');
			         break
			case 'Серпухов': 
			        $('.geo_in').html('в Серпухове');
			         break
			case 'Солнечногорск': 
			        $('.geo_in').html('в Солнечногорске');
			         break
			case 'Солнцево': 
			        $('.geo_in').html('в Солнцево');
			         break
			case 'Софрино': 
			        $('.geo_in').html('в Софрино');
			         break
			case 'Старая Купавна': 
			        $('.geo_in').html('в Старой Купавне');
			         break
			case 'Старбеево': 
			        $('.geo_in').html('в Старбеево');
			         break
			case 'Ступино': 
			        $('.geo_in').html('в Ступино');
			         break
			case 'Сходня': 
			        $('.geo_in').html('в Сходне');
			         break
			case 'Талдом': 
			        $('.geo_in').html('в Талдоме');
			         break
			case 'Текстильщик': 
			        $('.geo_in').html('в Текстильщике');
			         break
			case 'Темпы': 
			        $('.geo_in').html('в Темпах');
			         break
			case 'Тишково': 
			        $('.geo_in').html('в Тишково');
			         break
			case 'Томилино': 
			        $('.geo_in').html('в Томилино');
			         break
			case 'Троицк': 
			        $('.geo_in').html('в Троицке');
			         break
			case 'Туголесский Бор': 
			        $('.geo_in').html('в Туголесском Бору');
			         break
			case 'Тучково': 
			        $('.geo_in').html('в Тучково');
			         break
			case 'Уваровка': 
			        $('.geo_in').html('в Уваровке');
			         break
			case 'Удельная': 
			        $('.geo_in').html('в Удельной');
			         break
			case 'Успенское': 
			        $('.geo_in').html('в Успенском');
			         break
			case 'Фирсановка': 
			        $('.geo_in').html('в Фирсановке');
			         break
			case 'Фосфоритный': 
			        $('.geo_in').html('в Фосфоритном');
			         break
			case 'Фрязино': 
			        $('.geo_in').html('в Фрязино');
			         break
			case 'Фряново': 
			        $('.geo_in').html('в Фряново');
			         break
			case 'Химки': 
			        $('.geo_in').html('в Химках');
			         break
			case 'Хорлово': 
			        $('.geo_in').html('в Хорлово');
			         break
			case 'Хотьково': 
			        $('.geo_in').html('в Хотьково');
			         break
			case 'Черкизово': 
			        $('.geo_in').html('в Черкизово');
			         break
			case 'Черноголовка': 
			        $('.geo_in').html('в Черноголовке');
			         break
			case 'Черусти': 
			        $('.geo_in').html('в Черусти');
			         break
			case 'Чехов': 
			        $('.geo_in').html('в Чехове');
			         break
			case 'Шарапово': 
			        $('.geo_in').html('в Шарапово');
			         break
			case 'Шатура': 
			        $('.geo_in').html('в Шатуре');
			         break
			case 'Шатурторф': 
			        $('.geo_in').html('в Шатурторфе');
			         break
			case 'Шаховская': 
			        $('.geo_in').html('в Шаховской');
			         break
			case 'Шереметьевский': 
			        $('.geo_in').html('в Шереметьевском');
			         break
			case 'Щелково': 
			        $('.geo_in').html('в Щелково');
			         break
			case 'Щербинка': 
			        $('.geo_in').html('в Щербинке');
			         break
			case 'Электрогорск': 
			        $('.geo_in').html('в Электрогорске');
			         break
			case 'Электросталь': 
			        $('.geo_in').html('в Электростале');
			         break
			case 'Электроугли': 
			        $('.geo_in').html('в Электроуглях');
			         break
			case 'Яхрома': 
			        $('.geo_in').html('в Яхроме');
			         break
			case 'Санкт-Петербург': 
			        $('.geo_in').html('в Санкт-Петербурге');
			         break
			case 'Александровская': 
			        $('.geo_in').html('в Александровской');
			         break
			case 'Бокситогорск': 
			        $('.geo_in').html('в Бокситогорске');
			         break
			case 'Большая Ижора': 
			        $('.geo_in').html('в Большой Ижоре');
			         break
			case 'Будогощь': 
			        $('.geo_in').html('в Будогощи');
			         break
			case 'Вознесенье': 
			        $('.geo_in').html('в Вознесенье');
			         break
			case 'Волосово': 
			        $('.geo_in').html('в Волосово');
			         break
			case 'Волхов': 
			        $('.geo_in').html('в Волхове');
			         break
			case 'Всеволожск': 
			        $('.geo_in').html('в Всеволожске');
			         break
			case 'Выборг': 
			        $('.geo_in').html('в Выборге');
			         break
			case 'Вырица': 
			        $('.geo_in').html('в Вырице');
			         break
			case 'Высоцк': 
			        $('.geo_in').html('в Высоцке');
			         break
			case 'Гатчина': 
			        $('.geo_in').html('в Гатчине');
			         break
			case 'Дружная Горка': 
			        $('.geo_in').html('в Дружной Горке');
			         break
			case 'Дубровка': 
			        $('.geo_in').html('в Дубровке');
			         break
			case 'Ефимовский': 
			        $('.geo_in').html('в Ефимовском');
			         break
			case 'Зеленогорск': 
			        $('.geo_in').html('в Зеленогорске');
			         break
			case 'Ивангород': 
			        $('.geo_in').html('в Ивангороде');
			         break
			case 'Каменногорск': 
			        $('.geo_in').html('в Каменногорске');
			         break
			case 'Кикерино': 
			        $('.geo_in').html('в Кикерино');
			         break
			case 'Кингисепп': 
			        $('.geo_in').html('в Кингисеппе');
			         break
			case 'Кириши': 
			        $('.geo_in').html('в Киришах');
			         break
			case 'Кировск': 
			        $('.geo_in').html('в Кировске');
			         break
			case 'Кобринское': 
			        $('.geo_in').html('в Кобринском');
			         break
			case 'Колпино': 
			        $('.geo_in').html('в Колпино');
			         break
			case 'Коммунар': 
			        $('.geo_in').html('в Коммунаре');
			         break
			case 'Кронштадт': 
			        $('.geo_in').html('в Кронштадте');
			         break
			case 'Лисий Нос': 
			        $('.geo_in').html('в Лисьем Носе');
			         break
			case 'Лодейное Поле': 
			        $('.geo_in').html('в Лодейном Поле');
			         break
			case 'Ломоносов': 
			        $('.geo_in').html('в Ломоносове');
			         break
			case 'Луга': 
			        $('.geo_in').html('в Луге');
			         break
			case 'Павловск': 
			        $('.geo_in').html('в Павловске');
			         break
			case 'Парголово': 
			        $('.geo_in').html('в Парголово');
			         break
			case 'Петродворец': 
			        $('.geo_in').html('в Петродворце');
			         break
			case 'Пикалёво': 
			        $('.geo_in').html('в Пикалёво');
			         break
			case 'Подпорожье': 
			        $('.geo_in').html('в Подпорожье');
			         break
			case 'Приозерск': 
			        $('.geo_in').html('в Приозерске');
			         break
			case 'Пушкин': 
			        $('.geo_in').html('в Пушкине');
			         break
			case 'Сестрорецк': 
			        $('.geo_in').html('в Сестрорецке');
			         break
			case 'Сланцы': 
			        $('.geo_in').html('в Сланцах');
			         break
			case 'Сосновый Бор': 
			        $('.geo_in').html('в Сосновом Бору');
			         break
			case 'Тихвин': 
			        $('.geo_in').html('в Тихвине');
			         break
			case 'Тосно': 
			        $('.geo_in').html('в Тосно');
			         break
			case 'Шлиссельбург': 
			        $('.geo_in').html('в Шлиссельбурге');
			         break
			case 'Адыгейск': 
			        $('.geo_in').html('в Адыгейске');
			         break
			case 'Майкоп': 
			        $('.geo_in').html('в Майкопе');
			         break
			case 'Акташ': 
			        $('.geo_in').html('в Акташе');
			         break
			case 'Акутиха': 
			        $('.geo_in').html('в Акутихе');
			         break
			case 'Алейск': 
			        $('.geo_in').html('в Алейске');
			         break
			case 'Алтайский': 
			        $('.geo_in').html('в Алтайском');
			         break
			case 'Баево': 
			        $('.geo_in').html('в Баево');
			         break
			case 'Барнаул': 
			        $('.geo_in').html('в Барнауле');
			         break
			case 'Белово': 
			        $('.geo_in').html('в Белово');
			         break
			case 'Белокуриха': 
			        $('.geo_in').html('в Белокурихе');
			         break
			case 'Белоярск': 
			        $('.geo_in').html('в Белоярске');
			         break
			case 'Бийск': 
			        $('.geo_in').html('в Бийске');
			         break
			case 'Благовещенск': 
			        $('.geo_in').html('в Благовещенске');
			         break
			case 'Боровлянка': 
			        $('.geo_in').html('в Боровлянке');
			         break
			case 'Бурла': 
			        $('.geo_in').html('в Бурле');
			         break
			case 'Бурсоль': 
			        $('.geo_in').html('в Бурсоле');
			         break
			case 'Волчиха': 
			        $('.geo_in').html('в Волчихе');
			         break
			case 'Горно-Алтайск': 
			        $('.geo_in').html('в Горно-Алтайске');
			         break
			case 'Горняк': 
			        $('.geo_in').html('в Горняке');
			         break
			case 'Ельцовка': 
			        $('.geo_in').html('в Ельцовке');
			         break
			case 'Залесово': 
			        $('.geo_in').html('в Залесово');
			         break
			case 'Заринск': 
			        $('.geo_in').html('в Заринске');
			         break
			case 'Заток': 
			        $('.geo_in').html('в Затоке');
			         break
			case 'Змеиногорск': 
			        $('.geo_in').html('в Змеиногорске');
			         break
			case 'Камень-на-Оби': 
			        $('.geo_in').html('в Камне-на-Оби');
			         break
			case 'Ключи': 
			        $('.geo_in').html('в Ключах');
			         break
			case 'Кош-Агач': 
			        $('.geo_in').html('в Кош-Агаче');
			         break
			case 'Красногорское': 
			        $('.geo_in').html('в Красногорском');
			         break
			case 'Краснощеково': 
			        $('.geo_in').html('в Краснощеково');
			         break
			case 'Кулунда': 
			        $('.geo_in').html('в Кулунде');
			         break
			case 'Кытманово': 
			        $('.geo_in').html('в Кытманово');
			         break
			case 'Мамонтово': 
			        $('.geo_in').html('в Мамонтово');
			         break
			case 'Новичиха': 
			        $('.geo_in').html('в Новичихе');
			         break
			case 'Новоалтайск': 
			        $('.geo_in').html('в Новоалтайске');
			         break
			case 'Онгудай': 
			        $('.geo_in').html('в Онгудае');
			         break
			case 'Петропавловское': 
			        $('.geo_in').html('в Петропавловском');
			         break
			case 'Поспелиха': 
			        $('.geo_in').html('в Поспелихе');
			         break
			case 'Ребриха': 
			        $('.geo_in').html('в Ребрихе');
			         break
			case 'Родино': 
			        $('.geo_in').html('в Родино');
			         break
			case 'Рубцовск': 
			        $('.geo_in').html('в Рубцовске');
			         break
			case 'Славгород': 
			        $('.geo_in').html('в Славгороде');
			         break
			case 'Смоленское': 
			        $('.geo_in').html('в Смоленском');
			         break
			case 'Солонешное': 
			        $('.geo_in').html('в Солонешном');
			         break
			case 'Солтон': 
			        $('.geo_in').html('в Солтоне');
			         break
			case 'Староаллейское': 
			        $('.geo_in').html('в Староаллейском');
			         break
			case 'Табуны': 
			        $('.geo_in').html('в Табунах');
			         break
			case 'Тальменка': 
			        $('.geo_in').html('в Тальменке');
			         break
			case 'Топчиха': 
			        $('.geo_in').html('в Топчихе');
			         break
			case 'Троицкое': 
			        $('.geo_in').html('в Троицком');
			         break
			case 'Турочак': 
			        $('.geo_in').html('в Турочаке');
			         break
			case 'Тюменцево': 
			        $('.geo_in').html('в Тюменцево');
			         break
			case 'Угловское': 
			        $('.geo_in').html('в Угловском');
			         break
			case 'Усть-Калманка': 
			        $('.geo_in').html('в Усть-Калманке');
			         break
			case 'Усть-Кан': 
			        $('.geo_in').html('в Усть-Кане');
			         break
			case 'Усть-Кокса': 
			        $('.geo_in').html('в Усть-Коксе');
			         break
			case 'Усть-Улаган': 
			        $('.geo_in').html('в Усть-Улагане');
			         break
			case 'Усть-Чарышская Пристань': 
			        $('.geo_in').html('в Усть-Чарышской Пристани');
			         break
			case 'Хабары': 
			        $('.geo_in').html('в Хабарах');
			         break
			case 'Целинное': 
			        $('.geo_in').html('в Целинном');
			         break
			case 'Чарышское': 
			        $('.geo_in').html('в Чарышском');
			         break
			case 'Шебалино': 
			        $('.geo_in').html('в Шебалино');
			         break
			case 'Шелаболиха': 
			        $('.geo_in').html('в Шелаболихе');
			         break
			case 'Шипуново': 
			        $('.geo_in').html('в Шипуново');
			         break
			case 'Айгунь': 
			        $('.geo_in').html('в Айгуни');
			         break
			case 'Архара': 
			        $('.geo_in').html('в Архаре');
			         break
			case 'Белогорск': 
			        $('.geo_in').html('в Белогорске');
			         break
			case 'Благовещенск (Амурская обл.)': 
			        $('.geo_in').html('в Благовещенске (Амурской обл.)');
			         break
			case 'Бурея': 
			        $('.geo_in').html('в Бурее');
			         break
			case 'Возжаевка': 
			        $('.geo_in').html('в Возжаевке');
			         break
			case 'Екатеринославка': 
			        $('.geo_in').html('в Екатеринославке');
			         break
			case 'Ерофей Павлович': 
			        $('.geo_in').html('в Ерофее Павловиче');
			         break
			case 'Завитинск': 
			        $('.geo_in').html('в Завитинске');
			         break
			case 'Зея': 
			        $('.geo_in').html('в Зее');
			         break
			case 'Златоустовск': 
			        $('.geo_in').html('в Златоустовске');
			         break
			case 'Ивановка': 
			        $('.geo_in').html('в Ивановке');
			         break
			case 'Коболдо': 
			        $('.geo_in').html('в Коболдо');
			         break
			case 'Магдагачи': 
			        $('.geo_in').html('в Магдагачи');
			         break
			case 'Новобурейский': 
			        $('.geo_in').html('в Новобурейском');
			         break
			case 'Поярково': 
			        $('.geo_in').html('в Поярково');
			         break
			case 'Райчихинск': 
			        $('.geo_in').html('в Райчихинске');
			         break
			case 'Ромны': 
			        $('.geo_in').html('в Ромнах');
			         break
			case 'Свободный': 
			        $('.geo_in').html('в Свободном');
			         break
			case 'Серышево': 
			        $('.geo_in').html('в Серышево');
			         break
			case 'Сковородино': 
			        $('.geo_in').html('в Сковородино');
			         break
			case 'Стойба': 
			        $('.geo_in').html('в Стойбе');
			         break
			case 'Тамбовка': 
			        $('.geo_in').html('в Тамбовке');
			         break
			case 'Тында': 
			        $('.geo_in').html('в Тынде');
			         break
			case 'Шимановск': 
			        $('.geo_in').html('в Шимановске');
			         break
			case 'Экимчан': 
			        $('.geo_in').html('в Экимчане');
			         break
			case 'Ядрино': 
			        $('.geo_in').html('в Ядрино');
			         break
			case 'Амдерма': 
			        $('.geo_in').html('в Амдерме');
			         break
			case 'Архангельск': 
			        $('.geo_in').html('в Архангельске');
			         break
			case 'Березник': 
			        $('.geo_in').html('в Березнике');
			         break
			case 'Вельск': 
			        $('.geo_in').html('в Вельске');
			         break
			case 'Верхняя Тойма': 
			        $('.geo_in').html('в Верхней Тойме');
			         break
			case 'Волошка': 
			        $('.geo_in').html('в Волошке');
			         break
			case 'Вычегодский': 
			        $('.geo_in').html('в Вычегодском');
			         break
			case 'Емца': 
			        $('.geo_in').html('в Емце');
			         break
			case 'Илеза': 
			        $('.geo_in').html('в Илезе');
			         break
			case 'Ильинско-Подомское': 
			        $('.geo_in').html('в Ильинско-Подомском');
			         break
			case 'Каргополь': 
			        $('.geo_in').html('в Каргополе');
			         break
			case 'Карпогоры': 
			        $('.geo_in').html('в Карпогорах');
			         break
			case 'Кодино': 
			        $('.geo_in').html('в Кодино');
			         break
			case 'Коноша': 
			        $('.geo_in').html('в Коноше');
			         break
			case 'Коряжма': 
			        $('.geo_in').html('в Коряжме');
			         break
			case 'Котлас': 
			        $('.geo_in').html('в Котласе');
			         break
			case 'Красноборск': 
			        $('.geo_in').html('в Красноборске');
			         break
			case 'Лешуконское': 
			        $('.geo_in').html('в Лешуконском');
			         break
			case 'Мезень': 
			        $('.geo_in').html('в Мезени');
			         break
			case 'Мирный': 
			        $('.geo_in').html('в Мирном');
			         break
			case 'Нарьян-Мар': 
			        $('.geo_in').html('в Нарьян-Маре');
			         break
			case 'Новодвинск': 
			        $('.geo_in').html('в Новодвинске');
			         break
			case 'Няндома': 
			        $('.geo_in').html('в Няндоме');
			         break
			case 'Онега': 
			        $('.geo_in').html('в Онеге');
			         break
			case 'Пинега': 
			        $('.geo_in').html('в Пинеге');
			         break
			case 'Плесецк': 
			        $('.geo_in').html('в Плесецке');
			         break
			case 'Северодвинск': 
			        $('.geo_in').html('в Северодвинске');
			         break
			case 'Сольвычегодск': 
			        $('.geo_in').html('в Сольвычегодске');
			         break
			case 'Холмогоры': 
			        $('.geo_in').html('в Холмогорах');
			         break
			case 'Шенкурск': 
			        $('.geo_in').html('в Шенкурске');
			         break
			case 'Яренск': 
			        $('.geo_in').html('в Яренске');
			         break
			case 'Астрахань': 
			        $('.geo_in').html('в Астрахани');
			         break
			case 'Ахтубинск': 
			        $('.geo_in').html('в Ахтубинске');
			         break
			case 'Верхний Баскунчак': 
			        $('.geo_in').html('в Верхнем Баскунчаке');
			         break
			case 'Володарский': 
			        $('.geo_in').html('в Володарском');
			         break
			case 'Енотаевка': 
			        $('.geo_in').html('в Енотаевке');
			         break
			case 'Икряное': 
			        $('.geo_in').html('в Икряном');
			         break
			case 'Камызяк': 
			        $('.geo_in').html('в Камызяке');
			         break
			case 'Капустин Яр': 
			        $('.geo_in').html('в Капустином Яре');
			         break
			case 'Красный Яр': 
			        $('.geo_in').html('в Красном Яре');
			         break
			case 'Лиман': 
			        $('.geo_in').html('в Лимане');
			         break
			case 'Началово': 
			        $('.geo_in').html('в Началово');
			         break
			case 'Харабали': 
			        $('.geo_in').html('в Харабали');
			         break
			case 'Черный Яр': 
			        $('.geo_in').html('в Черном Яре');
			         break
			case 'Аксаково': 
			        $('.geo_in').html('в Аксаково');
			         break
			case 'Амзя': 
			        $('.geo_in').html('в Амзе');
			         break
			case 'Аскино': 
			        $('.geo_in').html('в Аскино');
			         break
			case 'Баймак': 
			        $('.geo_in').html('в Баймаке');
			         break
			case 'Бакалы': 
			        $('.geo_in').html('в Бакалах');
			         break
			case 'Белебей': 
			        $('.geo_in').html('в Белебее');
			         break
			case 'Белорецк': 
			        $('.geo_in').html('в Белорецке');
			         break
			case 'Бижбуляк': 
			        $('.geo_in').html('в Бижбуляке');
			         break
			case 'Бирск': 
			        $('.geo_in').html('в Бирске');
			         break
			case 'Большеустьикинское': 
			        $('.geo_in').html('в Большеустьикинском');
			         break
			case 'Бураево': 
			        $('.geo_in').html('в Бураево');
			         break
			case 'Верхнеяркеево': 
			        $('.geo_in').html('в Верхнеяркеево');
			         break
			case 'Верхние Киги': 
			        $('.geo_in').html('в Верхних Кигах');
			         break
			case 'Верхние Татышлы': 
			        $('.geo_in').html('в Верхних Татышлах');
			         break
			case 'Верхний Авзян': 
			        $('.geo_in').html('в Верхнем Авзяне');
			         break
			case 'Давлеканово': 
			        $('.geo_in').html('в Давлеканово');
			         break
			case 'Дуван': 
			        $('.geo_in').html('в Дуване');
			         break
			case 'Дюртюли': 
			        $('.geo_in').html('в Дюртюлах');
			         break
			case 'Ермекеево': 
			        $('.geo_in').html('в Ермекеево');
			         break
			case 'Ермолаево': 
			        $('.geo_in').html('в Ермолаево');
			         break
			case 'Зилаир': 
			        $('.geo_in').html('в Зилаире');
			         break
			case 'Зирган': 
			        $('.geo_in').html('в Зиргане');
			         break
			case 'Иглино': 
			        $('.geo_in').html('в Иглино');
			         break
			case 'Инзер': 
			        $('.geo_in').html('в Инзере');
			         break
			case 'Исянгулово': 
			        $('.geo_in').html('в Исянгулово');
			         break
			case 'Ишимбай': 
			        $('.geo_in').html('в Ишимбае');
			         break
			case 'Кананикольское': 
			        $('.geo_in').html('в Кананикольском');
			         break
			case 'Кандры': 
			        $('.geo_in').html('в Кандрах');
			         break
			case 'Караидель': 
			        $('.geo_in').html('в Караидели');
			         break
			case 'Караидельский': 
			        $('.geo_in').html('в Караидельском');
			         break
			case 'Киргиз-Мияки': 
			        $('.geo_in').html('в Киргиз-Мияках');
			         break
			case 'Красноусольский': 
			        $('.geo_in').html('в Красноусольском');
			         break
			case 'Кумертау': 
			        $('.geo_in').html('в Кумертау');
			         break
			case 'Кушнаренково': 
			        $('.geo_in').html('в Кушнаренково');
			         break
			case 'Малояз': 
			        $('.geo_in').html('в Малоязе');
			         break
			case 'Мелеуз': 
			        $('.geo_in').html('в Мелеузе');
			         break
			case 'Месягутово': 
			        $('.geo_in').html('в Месягутово');
			         break
			case 'Мраково': 
			        $('.geo_in').html('в Мраково');
			         break
			case 'Нефтекамск': 
			        $('.geo_in').html('в Нефтекамске');
			         break
			case 'Раевский': 
			        $('.geo_in').html('в Раевском');
			         break
			case 'Салават': 
			        $('.geo_in').html('в Салавате');
			         break
			case 'Сибай': 
			        $('.geo_in').html('в Сибае');
			         break
			case 'Старобалтачево': 
			        $('.geo_in').html('в Старобалтачево');
			         break
			case 'Старосубхангулово': 
			        $('.geo_in').html('в Старосубхангулово');
			         break
			case 'Стерлибашево': 
			        $('.geo_in').html('в Стерлибашево');
			         break
			case 'Стерлитамак': 
			        $('.geo_in').html('в Стерлитамаке');
			         break
			case 'Туймазы': 
			        $('.geo_in').html('в Туймазах');
			         break
			case 'Уфа': 
			        $('.geo_in').html('в Уфе');
			         break
			case 'Учалы': 
			        $('.geo_in').html('в Учалах');
			         break
			case 'Федоровка': 
			        $('.geo_in').html('в Федоровке');
			         break
			case 'Чекмагуш': 
			        $('.geo_in').html('в Чекмагуше');
			         break
			case 'Чишмы': 
			        $('.geo_in').html('в Чишмах');
			         break
			case 'Шаран': 
			        $('.geo_in').html('в Шаране');
			         break
			case 'Янаул': 
			        $('.geo_in').html('в Янауле');
			         break
			case 'Алексеевка': 
			        $('.geo_in').html('в Алексеевке');
			         break
			case 'Белгород': 
			        $('.geo_in').html('в Белгороде');
			         break
			case 'Борисовка': 
			        $('.geo_in').html('в Борисовке');
			         break
			case 'Валуйки': 
			        $('.geo_in').html('в Валуйках');
			         break
			case 'Вейделевка': 
			        $('.geo_in').html('в Вейделевке');
			         break
			case 'Волоконовка': 
			        $('.geo_in').html('в Волоконовке');
			         break
			case 'Грайворон': 
			        $('.geo_in').html('в Грайвороне');
			         break
			case 'Губкин': 
			        $('.geo_in').html('в Губкине');
			         break
			case 'Ивня': 
			        $('.geo_in').html('в Ивне');
			         break
			case 'Короча': 
			        $('.geo_in').html('в Короче');
			         break
			case 'Красногвардейское': 
			        $('.geo_in').html('в Красногвардейском');
			         break
			case 'Новый Оскол': 
			        $('.geo_in').html('в Новом Осколе');
			         break
			case 'Ракитное': 
			        $('.geo_in').html('в Ракитном');
			         break
			case 'Ровеньки': 
			        $('.geo_in').html('в Ровеньках');
			         break
			case 'Старый Оскол': 
			        $('.geo_in').html('в Старом Осколе');
			         break
			case 'Строитель': 
			        $('.geo_in').html('в Строителях');
			         break
			case 'Чернянка': 
			        $('.geo_in').html('в Чернянке');
			         break
			case 'Шебекино': 
			        $('.geo_in').html('в Шебекино');
			         break
			case 'Алтухово': 
			        $('.geo_in').html('в Алтухово');
			         break
			case 'Белая Березка': 
			        $('.geo_in').html('в Белой Березке');
			         break
			case 'Белые Берега': 
			        $('.geo_in').html('в Белых Берегах');
			         break
			case 'Большое Полпино': 
			        $('.geo_in').html('в Большом Полпино');
			         break
			case 'Брянск': 
			        $('.geo_in').html('в Брянске');
			         break
			case 'Бытошь': 
			        $('.geo_in').html('в Бытоши');
			         break
			case 'Выгоничи': 
			        $('.geo_in').html('в Выгоничах');
			         break
			case 'Вышков': 
			        $('.geo_in').html('в Вышкове');
			         break
			case 'Гордеевка': 
			        $('.geo_in').html('в Гордеевке');
			         break
			case 'Дятьково': 
			        $('.geo_in').html('в Дятьково');
			         break
			case 'Жирятино': 
			        $('.geo_in').html('в Жирятино');
			         break
			case 'Жуковка': 
			        $('.geo_in').html('в Жуковке');
			         break
			case 'Злынка': 
			        $('.geo_in').html('в Злынке');
			         break
			case 'Ивот': 
			        $('.geo_in').html('в Ивоте');
			         break
			case 'Карачев': 
			        $('.geo_in').html('в Карачеве');
			         break
			case 'Клетня': 
			        $('.geo_in').html('в Клетне');
			         break
			case 'Климово': 
			        $('.geo_in').html('в Климово');
			         break
			case 'Клинцы': 
			        $('.geo_in').html('в Клинцах');
			         break
			case 'Кокаревка': 
			        $('.geo_in').html('в Кокаревке');
			         break
			case 'Комаричи': 
			        $('.geo_in').html('в Комаричах');
			         break
			case 'Красная Гора': 
			        $('.geo_in').html('в Красной Горе');
			         break
			case 'Локоть': 
			        $('.geo_in').html('в Локоти');
			         break
			case 'Мглин': 
			        $('.geo_in').html('в Мглине');
			         break
			case 'Навля': 
			        $('.geo_in').html('в Навле');
			         break
			case 'Новозыбков': 
			        $('.geo_in').html('в Новозыбкове');
			         break
			case 'Погар': 
			        $('.geo_in').html('в Погаре');
			         break
			case 'Почеп': 
			        $('.geo_in').html('в Почепе');
			         break
			case 'Ржаница': 
			        $('.geo_in').html('в Ржанице');
			         break
			case 'Рогнедино': 
			        $('.geo_in').html('в Рогнедино');
			         break
			case 'Севск': 
			        $('.geo_in').html('в Севске');
			         break
			case 'Стародуб': 
			        $('.geo_in').html('в Стародубе');
			         break
			case 'Суземка': 
			        $('.geo_in').html('в Суземке');
			         break
			case 'Сураж': 
			        $('.geo_in').html('в Сураже');
			         break
			case 'Трубчевск': 
			        $('.geo_in').html('в Трубчевске');
			         break
			case 'Унеча': 
			        $('.geo_in').html('в Унече');
			         break
			case 'Бабушкин': 
			        $('.geo_in').html('в Бабушкине');
			         break
			case 'Багдарин': 
			        $('.geo_in').html('в Багдарине');
			         break
			case 'Баргузин': 
			        $('.geo_in').html('в Баргузине');
			         break
			case 'Баянгол': 
			        $('.geo_in').html('в Баянголе');
			         break
			case 'Бичура': 
			        $('.geo_in').html('в Бичуре');
			         break
			case 'Выдрино': 
			        $('.geo_in').html('в Выдрино');
			         break
			case 'Гусиное Озеро': 
			        $('.geo_in').html('в Гусином Озере');
			         break
			case 'Гусиноозерск': 
			        $('.geo_in').html('в Гусиноозерске');
			         break
			case 'Заиграево': 
			        $('.geo_in').html('в Заиграево');
			         break
			case 'Закаменск': 
			        $('.geo_in').html('в Закаменске');
			         break
			case 'Иволгинск': 
			        $('.geo_in').html('в Иволгинске');
			         break
			case 'Илька': 
			        $('.geo_in').html('в Ильке');
			         break
			case 'Кабанск': 
			        $('.geo_in').html('в Кабанске');
			         break
			case 'Каменск': 
			        $('.geo_in').html('в Каменске');
			         break
			case 'Кижинга': 
			        $('.geo_in').html('в Кижинге');
			         break
			case 'Курумкан': 
			        $('.geo_in').html('в Курумкане');
			         break
			case 'Кырен': 
			        $('.geo_in').html('в Кырене');
			         break
			case 'Кяхта': 
			        $('.geo_in').html('в Кяхте');
			         break
			case 'Монды': 
			        $('.geo_in').html('в Мондах');
			         break
			case 'Мухоршибирь': 
			        $('.geo_in').html('в Мухоршибири');
			         break
			case 'Нижнеангарск': 
			        $('.geo_in').html('в Нижнеангарске');
			         break
			case 'Орлик': 
			        $('.geo_in').html('в Орлике');
			         break
			case 'Петропавловка': 
			        $('.geo_in').html('в Петропавловке');
			         break
			case 'Романовка': 
			        $('.geo_in').html('в Романовке');
			         break
			case 'Северобайкальск': 
			        $('.geo_in').html('в Северобайкальске');
			         break
			case 'Селенгинск': 
			        $('.geo_in').html('в Селенгинске');
			         break
			case 'Сосново-Озерское': 
			        $('.geo_in').html('в Сосново-Озерском');
			         break
			case 'Таксимо': 
			        $('.geo_in').html('в Таксимо');
			         break
			case 'Турунтаево': 
			        $('.geo_in').html('в Турунтаево');
			         break
			case 'Улан-Удэ': 
			        $('.geo_in').html('в Улан-Удэ');
			         break
			case 'Хоринск': 
			        $('.geo_in').html('в Хоринске');
			         break
			case 'Александров': 
			        $('.geo_in').html('в Александрове');
			         break
			case 'Андреево': 
			        $('.geo_in').html('в Андреево');
			         break
			case 'Анопино': 
			        $('.geo_in').html('в Анопино');
			         break
			case 'Бавлены': 
			        $('.geo_in').html('в Бавленах');
			         break
			case 'Балакирево': 
			        $('.geo_in').html('в Балакирево');
			         break
			case 'Боголюбово': 
			        $('.geo_in').html('в Боголюбово');
			         break
			case 'Великодворский': 
			        $('.geo_in').html('в Великодворском');
			         break
			case 'Вербовский': 
			        $('.geo_in').html('в Вербовском');
			         break
			case 'Владимир': 
			        $('.geo_in').html('в Владимире');
			         break
			case 'Вязники': 
			        $('.geo_in').html('в Вязниках');
			         break
			case 'Городищи': 
			        $('.geo_in').html('в Городищах');
			         break
			case 'Гороховец': 
			        $('.geo_in').html('в Гороховце');
			         break
			case 'Гусевский': 
			        $('.geo_in').html('в Гусевском');
			         break
			case 'Гусь Хрустальный': 
			        $('.geo_in').html('в Гусь Хрустальном');
			         break
			case 'Золотково': 
			        $('.geo_in').html('в Золотково');
			         break
			case 'Иванищи': 
			        $('.geo_in').html('в Иванищах');
			         break
			case 'Камешково': 
			        $('.geo_in').html('в Камешково');
			         break
			case 'Карабаново': 
			        $('.geo_in').html('в Карабаново');
			         break
			case 'Киржач': 
			        $('.geo_in').html('в Киржаче');
			         break
			case 'Ковров': 
			        $('.geo_in').html('в Коврове');
			         break
			case 'Кольчугино': 
			        $('.geo_in').html('в Кольчугино');
			         break
			case 'Красная Горбатка': 
			        $('.geo_in').html('в Красной Горбатке');
			         break
			case 'Меленки': 
			        $('.geo_in').html('в Меленках');
			         break
			case 'Муром': 
			        $('.geo_in').html('в Муроме');
			         break
			case 'Петушки': 
			        $('.geo_in').html('в Петушках');
			         break
			case 'Покров': 
			        $('.geo_in').html('в Покрове');
			         break
			case 'Собинка': 
			        $('.geo_in').html('в Собинке');
			         break
			case 'Судогда': 
			        $('.geo_in').html('в Судогде');
			         break
			case 'Суздаль': 
			        $('.geo_in').html('в Суздале');
			         break
			case 'Юрьев-Польский': 
			        $('.geo_in').html('в Юрьев-Польском');
			         break
			case 'Алексеевская': 
			        $('.geo_in').html('в Алексеевской');
			         break
			case 'Алущевск': 
			        $('.geo_in').html('в Алущевске');
			         break
			case 'Волгоград': 
			        $('.geo_in').html('в Волгограде');
			         break
			case 'Волжский': 
			        $('.geo_in').html('в Волжском');
			         break
			case 'Городище': 
			        $('.geo_in').html('в Городище');
			         break
			case 'Дубовка': 
			        $('.geo_in').html('в Дубовке');
			         break
			case 'Елань': 
			        $('.geo_in').html('в Елани');
			         break
			case 'Жирновск': 
			        $('.geo_in').html('в Жирновске');
			         break
			case 'Иловля': 
			        $('.geo_in').html('в Иловле');
			         break
			case 'Калач-на-Дону': 
			        $('.geo_in').html('в Калаче-на-Дону');
			         break
			case 'Камышин': 
			        $('.geo_in').html('в Камышине');
			         break
			case 'Кириллов': 
			        $('.geo_in').html('в Кириллове');
			         break
			case 'Клетский': 
			        $('.geo_in').html('в Клетском');
			         break
			case 'Котельниково': 
			        $('.geo_in').html('в Котельниково');
			         break
			case 'Котово': 
			        $('.geo_in').html('в Котово');
			         break
			case 'Кумылженская': 
			        $('.geo_in').html('в Кумылженской');
			         break
			case 'Ленинск': 
			        $('.geo_in').html('в Ленинске');
			         break
			case 'Михайловка': 
			        $('.geo_in').html('в Михайловке');
			         break
			case 'Нехаевский': 
			        $('.geo_in').html('в Нехаевском');
			         break
			case 'Николаевск': 
			        $('.geo_in').html('в Николаевске');
			         break
			case 'Новоаннинский': 
			        $('.geo_in').html('в Новоаннинском');
			         break
			case 'Новониколаевский': 
			        $('.geo_in').html('в Новониколаевском');
			         break
			case 'Ольховка': 
			        $('.geo_in').html('в Ольховке');
			         break
			case 'Палласовка': 
			        $('.geo_in').html('в Палласовке');
			         break
			case 'Рудня': 
			        $('.geo_in').html('в Рудне');
			         break
			case 'Светлый Яр': 
			        $('.geo_in').html('в Светлом Яре');
			         break
			case 'Серафимович': 
			        $('.geo_in').html('в Серафимовиче');
			         break
			case 'Средняя Ахтуба': 
			        $('.geo_in').html('в Средней Ахтубе');
			         break
			case 'Сталинград': 
			        $('.geo_in').html('в Сталинграде');
			         break
			case 'Старая Полтавка': 
			        $('.geo_in').html('в Старой Полтавке');
			         break
			case 'Суровикино': 
			        $('.geo_in').html('в Суровикино');
			         break
			case 'Урюпинск': 
			        $('.geo_in').html('в Урюпинске');
			         break
			case 'Фролово': 
			        $('.geo_in').html('в Фролово');
			         break
			case 'Чернышковский': 
			        $('.geo_in').html('в Чернышковском');
			         break
			case 'Бабаево': 
			        $('.geo_in').html('в Бабаево');
			         break
			case 'Белозерск': 
			        $('.geo_in').html('в Белозерске');
			         break
			case 'Великий Устюг': 
			        $('.geo_in').html('в Великом Устюге');
			         break
			case 'Верховажье': 
			        $('.geo_in').html('в Верховажье');
			         break
			case 'Вожега': 
			        $('.geo_in').html('в Вожеге');
			         break
			case 'Вологда': 
			        $('.geo_in').html('в Вологде');
			         break
			case 'Вохтога': 
			        $('.geo_in').html('в Вохтоге');
			         break
			case 'Вытегра': 
			        $('.geo_in').html('в Вытегре');
			         break
			case 'Грязовец': 
			        $('.geo_in').html('в Грязовце');
			         break
			case 'Кадников': 
			        $('.geo_in').html('в Кадникове');
			         break
			case 'Кадуй': 
			        $('.geo_in').html('в Кадуе');
			         break
			case 'Кичменгский Городок': 
			        $('.geo_in').html('в Кичменгском Городке');
			         break
			case 'Липин Бор': 
			        $('.geo_in').html('в Липином Бору');
			         break
			case 'Никольск': 
			        $('.geo_in').html('в Никольске');
			         break
			case 'Нюксеница': 
			        $('.geo_in').html('в Нюксенице');
			         break
			case 'Сокол': 
			        $('.geo_in').html('в Соколе');
			         break
			case 'Сямжа': 
			        $('.geo_in').html('в Сямже');
			         break
			case 'Тарногский Городок': 
			        $('.geo_in').html('в Тарногском Городке');
			         break
			case 'Тотьма': 
			        $('.geo_in').html('в Тотьме');
			         break
			case 'Устюжна': 
			        $('.geo_in').html('в Устюжне');
			         break
			case 'Харовск': 
			        $('.geo_in').html('в Харовске');
			         break
			case 'Чагода': 
			        $('.geo_in').html('в Чагоде');
			         break
			case 'Череповец': 
			        $('.geo_in').html('в Череповце');
			         break
			case 'Шексна': 
			        $('.geo_in').html('в Шексне');
			         break
			case 'Шуйское': 
			        $('.geo_in').html('в Шуйском');
			         break
			case 'Анна': 
			        $('.geo_in').html('в Анне');
			         break
			case 'Бобров': 
			        $('.geo_in').html('в Боброве');
			         break
			case 'Богучар': 
			        $('.geo_in').html('в Богучаре');
			         break
			case 'Борисоглебск': 
			        $('.geo_in').html('в Борисоглебске');
			         break
			case 'Бутурлиновка': 
			        $('.geo_in').html('в Бутурлиновке');
			         break
			case 'Верхний Мамон': 
			        $('.geo_in').html('в Верхнем Мамоне');
			         break
			case 'Верхняя Хава': 
			        $('.geo_in').html('в Верхней Хаве');
			         break
			case 'Воробьевка': 
			        $('.geo_in').html('в Воробьевке');
			         break
			case 'Воронеж': 
			        $('.geo_in').html('в Воронеже');
			         break
			case 'Грибановский': 
			        $('.geo_in').html('в Грибановском');
			         break
			case 'Давыдовка': 
			        $('.geo_in').html('в Давыдовке');
			         break
			case 'Елань-Коленовский': 
			        $('.geo_in').html('в Елань-Коленовском');
			         break
			case 'Калач': 
			        $('.geo_in').html('в Калаче');
			         break
			case 'Кантемировка': 
			        $('.geo_in').html('в Кантемировке');
			         break
			case 'Лиски': 
			        $('.geo_in').html('в Лисках');
			         break
			case 'Нижнедевицк': 
			        $('.geo_in').html('в Нижнедевицке');
			         break
			case 'Новая Усмань': 
			        $('.geo_in').html('в Новой Усмани');
			         break
			case 'Новохоперск': 
			        $('.geo_in').html('в Новохоперске');
			         break
			case 'Ольховатка': 
			        $('.geo_in').html('в Ольховатке');
			         break
			case 'Острогожск': 
			        $('.geo_in').html('в Острогожске');
			         break
			case 'Панино': 
			        $('.geo_in').html('в Панино');
			         break
			case 'Поворино': 
			        $('.geo_in').html('в Поворино');
			         break
			case 'Подгоренский': 
			        $('.geo_in').html('в Подгоренском');
			         break
			case 'Рамонь': 
			        $('.geo_in').html('в Рамони');
			         break
			case 'Репьевка': 
			        $('.geo_in').html('в Репьевке');
			         break
			case 'Россошь': 
			        $('.geo_in').html('в Россоши');
			         break
			case 'Семилуки': 
			        $('.geo_in').html('в Семилуках');
			         break
			case 'Таловая': 
			        $('.geo_in').html('в Таловой');
			         break
			case 'Терновка': 
			        $('.geo_in').html('в Терновке');
			         break
			case 'Хохольский': 
			        $('.geo_in').html('в Хохольском');
			         break
			case 'Эртиль': 
			        $('.geo_in').html('в Эртиле');
			         break
			case 'Нововоронеж': 
			        $('.geo_in').html('в Нововоронеже');
			         break
			case 'Агвали': 
			        $('.geo_in').html('в Агвали');
			         break
			case 'Акуша': 
			        $('.geo_in').html('в Акуше');
			         break
			case 'Ахты': 
			        $('.geo_in').html('в Ахтах');
			         break
			case 'Ачису': 
			        $('.geo_in').html('в Ачису');
			         break
			case 'Бабаюрт': 
			        $('.geo_in').html('в Бабаюрте');
			         break
			case 'Бежта': 
			        $('.geo_in').html('в Бежте');
			         break
			case 'Ботлих': 
			        $('.geo_in').html('в Ботлихе');
			         break
			case 'Буйнакск': 
			        $('.geo_in').html('в Буйнакске');
			         break
			case 'Вачи': 
			        $('.geo_in').html('в Вачах');
			         break
			case 'Гергебиль': 
			        $('.geo_in').html('в Гергебиле');
			         break
			case 'Гуниб': 
			        $('.geo_in').html('в Гунибе');
			         break
			case 'Дагестанские Огни': 
			        $('.geo_in').html('в Дагестанских Огнях');
			         break
			case 'Дербент': 
			        $('.geo_in').html('в Дербенте');
			         break
			case 'Дылым': 
			        $('.geo_in').html('в Дылыме');
			         break
			case 'Ершовка': 
			        $('.geo_in').html('в Ершовке');
			         break
			case 'Избербаш': 
			        $('.geo_in').html('в Избербаше');
			         break
			case 'Карабудахкент': 
			        $('.geo_in').html('в Карабудахкенте');
			         break
			case 'Карата': 
			        $('.geo_in').html('в Карате');
			         break
			case 'Каспийск': 
			        $('.geo_in').html('в Каспийске');
			         break
			case 'Касумкент': 
			        $('.geo_in').html('в Касумкенте');
			         break
			case 'Кизилюрт': 
			        $('.geo_in').html('в Кизилюрте');
			         break
			case 'Кизляр': 
			        $('.geo_in').html('в Кизляре');
			         break
			case 'Кочубей': 
			        $('.geo_in').html('в Кочубее');
			         break
			case 'Кумух': 
			        $('.geo_in').html('в Кумухе');
			         break
			case 'Курах': 
			        $('.geo_in').html('в Курахе');
			         break
			case 'Магарамкент': 
			        $('.geo_in').html('в Магарамкенте');
			         break
			case 'Маджалис': 
			        $('.geo_in').html('в Маджалисе');
			         break
			case 'Махачкала': 
			        $('.geo_in').html('в Махачкале');
			         break
			case 'Мехельта': 
			        $('.geo_in').html('в Мехельте');
			         break
			case 'Новолакское': 
			        $('.geo_in').html('в Новолакском');
			         break
			case 'Рутул': 
			        $('.geo_in').html('в Рутуле');
			         break
			case 'Советское': 
			        $('.geo_in').html('в Советском');
			         break
			case 'Тарумовка': 
			        $('.geo_in').html('в Тарумовке');
			         break
			case 'Терекли-Мектеб': 
			        $('.geo_in').html('в Терекли-Мектебе');
			         break
			case 'Тлярата': 
			        $('.geo_in').html('в Тлярате');
			         break
			case 'Тпиг': 
			        $('.geo_in').html('в Тпиге');
			         break
			case 'Уркарах': 
			        $('.geo_in').html('в Уркарахе');
			         break
			case 'Хасавюрт': 
			        $('.geo_in').html('в Хасавюрте');
			         break
			case 'Хив': 
			        $('.geo_in').html('в Хиве');
			         break
			case 'Хунзах': 
			        $('.geo_in').html('в Хунзахе');
			         break
			case 'Цуриб': 
			        $('.geo_in').html('в Цурибе');
			         break
			case 'Южно-Сухокумск': 
			        $('.geo_in').html('в Южно-Сухокумске');
			         break
			case 'Биробиджан': 
			        $('.geo_in').html('в Биробиджане');
			         break
			case 'Архиповка': 
			        $('.geo_in').html('в Архиповке');
			         break
			case 'Верхний Ландех': 
			        $('.geo_in').html('в Верхнем Ландехе');
			         break
			case 'Вичуга': 
			        $('.geo_in').html('в Вичуге');
			         break
			case 'Гаврилов Посад': 
			        $('.geo_in').html('в Гавриловом Посаде');
			         break
			case 'Долматовский': 
			        $('.geo_in').html('в Долматовском');
			         break
			case 'Дуляпино': 
			        $('.geo_in').html('в Дуляпино');
			         break
			case 'Заволжск': 
			        $('.geo_in').html('в Заволжске');
			         break
			case 'Заречный': 
			        $('.geo_in').html('в Заречном');
			         break
			case 'Иваново': 
			        $('.geo_in').html('в Иваново');
			         break
			case 'Иваньковский': 
			        $('.geo_in').html('в Иваньковском');
			         break
			case 'Ильинское-Хованское': 
			        $('.geo_in').html('в Ильинском-Хованском');
			         break
			case 'Каминский': 
			        $('.geo_in').html('в Каминском');
			         break
			case 'Кинешма': 
			        $('.geo_in').html('в Кинешме');
			         break
			case 'Комсомольск': 
			        $('.geo_in').html('в Комсомольске');
			         break
			case 'Кохма': 
			        $('.geo_in').html('в Кохме');
			         break
			case 'Лух': 
			        $('.geo_in').html('в Лухе');
			         break
			case 'Палех': 
			        $('.geo_in').html('в Палехе');
			         break
			case 'Пестяки': 
			        $('.geo_in').html('в Пестяках');
			         break
			case 'Приволжск': 
			        $('.geo_in').html('в Приволжске');
			         break
			case 'Пучеж': 
			        $('.geo_in').html('в Пучеже');
			         break
			case 'Савино': 
			        $('.geo_in').html('в Савино');
			         break
			case 'Сокольское': 
			        $('.geo_in').html('в Сокольском');
			         break
			case 'Тейково': 
			        $('.geo_in').html('в Тейково');
			         break
			case 'Фурманов': 
			        $('.geo_in').html('в Фурманове');
			         break
			case 'Шуя': 
			        $('.geo_in').html('в Шуе');
			         break
			case 'Южа': 
			        $('.geo_in').html('в Юже');
			         break
			case 'Юрьевец': 
			        $('.geo_in').html('в Юрьевце');
			         break
			case 'Алексеевск': 
			        $('.geo_in').html('в Алексеевске');
			         break
			case 'Алзамай': 
			        $('.geo_in').html('в Алзамае');
			         break
			case 'Алыгжер': 
			        $('.geo_in').html('в Алыгжере');
			         break
			case 'Ангарск': 
			        $('.geo_in').html('в Ангарске');
			         break
			case 'Артемовский': 
			        $('.geo_in').html('в Артемовском');
			         break
			case 'Атагай': 
			        $('.geo_in').html('в Атагае');
			         break
			case 'Байкал': 
			        $('.geo_in').html('в Байкале');
			         break
			case 'Байкальск': 
			        $('.geo_in').html('в Байкальске');
			         break
			case 'Балаганск': 
			        $('.geo_in').html('в Балаганске');
			         break
			case 'Баяндай': 
			        $('.geo_in').html('в Баяндае');
			         break
			case 'Бирюсинск': 
			        $('.geo_in').html('в Бирюсинске');
			         break
			case 'Бодайбо': 
			        $('.geo_in').html('в Бодайбо');
			         break
			case 'Большая Речка': 
			        $('.geo_in').html('в Большой Речке');
			         break
			case 'Большой Луг': 
			        $('.geo_in').html('в Большом Луге');
			         break
			case 'Бохан': 
			        $('.geo_in').html('в Бохане');
			         break
			case 'Братск': 
			        $('.geo_in').html('в Братске');
			         break
			case 'Видим': 
			        $('.geo_in').html('в Видиме');
			         break
			case 'Витимский': 
			        $('.geo_in').html('в Витимском');
			         break
			case 'Вихоревка': 
			        $('.geo_in').html('в Вихоревке');
			         break
			case 'Еланцы': 
			        $('.geo_in').html('в Еланцах');
			         break
			case 'Ербогачен': 
			        $('.geo_in').html('в Ербогачене');
			         break
			case 'Железногорск-Илимский': 
			        $('.geo_in').html('в Железногорске-Илимском');
			         break
			case 'Жигалово': 
			        $('.geo_in').html('в Жигалово');
			         break
			case 'Забитуй': 
			        $('.geo_in').html('в Забитуе');
			         break
			case 'Залари': 
			        $('.geo_in').html('в Заларях');
			         break
			case 'Звездный': 
			        $('.geo_in').html('в Звездном');
			         break
			case 'Зима': 
			        $('.geo_in').html('в Зиме');
			         break
			case 'Иркутск': 
			        $('.geo_in').html('в Иркутске');
			         break
			case 'Казачинское': 
			        $('.geo_in').html('в Казачинском');
			         break
			case 'Качуг': 
			        $('.geo_in').html('в Качуге');
			         break
			case 'Квиток': 
			        $('.geo_in').html('в Квитоке');
			         break
			case 'Киренск': 
			        $('.geo_in').html('в Киренске');
			         break
			case 'Куйтун': 
			        $('.geo_in').html('в Куйтуне');
			         break
			case 'Култук': 
			        $('.geo_in').html('в Култуке');
			         break
			case 'Кутулик': 
			        $('.geo_in').html('в Кутулике');
			         break
			case 'Мама': 
			        $('.geo_in').html('в Маме');
			         break
			case 'Нижнеудинск': 
			        $('.geo_in').html('в Нижнеудинске');
			         break
			case 'Оса': 
			        $('.geo_in').html('в Осе');
			         break
			case 'Саянск': 
			        $('.geo_in').html('в Саянске');
			         break
			case 'Слюдянка': 
			        $('.geo_in').html('в Слюдянке');
			         break
			case 'Тайшет': 
			        $('.geo_in').html('в Тайшете');
			         break
			case 'Тулун': 
			        $('.geo_in').html('в Тулуне');
			         break
			case 'Усолье-Сибирское': 
			        $('.geo_in').html('в Усолье-Сибирском');
			         break
			case 'Усть-Илимск': 
			        $('.geo_in').html('в Усть-Илимске');
			         break
			case 'Усть-Кут': 
			        $('.geo_in').html('в Усть-Куте');
			         break
			case 'Усть-Ордынский': 
			        $('.geo_in').html('в Усть-Ордынском');
			         break
			case 'Усть-Уда': 
			        $('.geo_in').html('в Усть-Уде');
			         break
			case 'Черемхово': 
			        $('.geo_in').html('в Черемхово');
			         break
			case 'Чунский': 
			        $('.geo_in').html('в Чунском');
			         break
			case 'Шелехов': 
			        $('.geo_in').html('в Шелехове');
			         break
			case 'Баксан': 
			        $('.geo_in').html('в Баксане');
			         break
			case 'Майский': 
			        $('.geo_in').html('в Майском');
			         break
			case 'Нальчик': 
			        $('.geo_in').html('в Нальчике');
			         break
			case 'Нарткала': 
			        $('.geo_in').html('в Нарткале');
			         break
			case 'Прохладный': 
			        $('.geo_in').html('в Прохладном');
			         break
			case 'Терек': 
			        $('.geo_in').html('в Тереке');
			         break
			case 'Тырныауз': 
			        $('.geo_in').html('в Тырныаузе');
			         break
			case 'Чегем-Первый': 
			        $('.geo_in').html('в Чегеме-Первом');
			         break
			case 'Багратионовск': 
			        $('.geo_in').html('в Багратионовске');
			         break
			case 'Балтийск': 
			        $('.geo_in').html('в Балтийске');
			         break
			case 'Гвардейск': 
			        $('.geo_in').html('в Гвардейске');
			         break
			case 'Гурьевск': 
			        $('.geo_in').html('в Гурьевске');
			         break
			case 'Гусев': 
			        $('.geo_in').html('в Гусеве');
			         break
			case 'Зеленоградск': 
			        $('.geo_in').html('в Зеленоградске');
			         break
			case 'Знаменск': 
			        $('.geo_in').html('в Знаменске');
			         break
			case 'Кёнигсберг': 
			        $('.geo_in').html('в Кёнигсберге');
			         break
			case 'Кенисберг': 
			        $('.geo_in').html('в Кенисберге');
			         break
			case 'Мамоново': 
			        $('.geo_in').html('в Мамоново');
			         break
			case 'Неман': 
			        $('.geo_in').html('в Немане');
			         break
			case 'Нестеров': 
			        $('.geo_in').html('в Нестерове');
			         break
			case 'Озерск': 
			        $('.geo_in').html('в Озерске');
			         break
			case 'Полесск': 
			        $('.geo_in').html('в Полесске');
			         break
			case 'Правдинск': 
			        $('.geo_in').html('в Правдинске');
			         break
			case 'Светлогорск': 
			        $('.geo_in').html('в Светлогорске');
			         break
			case 'Светлый': 
			        $('.geo_in').html('в Светлом');
			         break
			case 'Славск': 
			        $('.geo_in').html('в Славске');
			         break
			case 'Черняховск': 
			        $('.geo_in').html('в Черняховске');
			         break
			case 'Аршань': 
			        $('.geo_in').html('в Аршане');
			         break
			case 'Каспийский': 
			        $('.geo_in').html('в Каспийском');
			         break
			case 'Комсомольский': 
			        $('.geo_in').html('в Комсомольском');
			         break
			case 'Малые Дербеты': 
			        $('.geo_in').html('в Малых Дербетах');
			         break
			case 'Приютное': 
			        $('.geo_in').html('в Приютном');
			         break
			case 'Утта': 
			        $('.geo_in').html('в Утте');
			         break
			case 'Цаган-Аман': 
			        $('.geo_in').html('в Цаган-Амане');
			         break
			case 'Элиста': 
			        $('.geo_in').html('в Элисте');
			         break
			case 'Юста': 
			        $('.geo_in').html('в Юсте');
			         break
			case 'Яшалта': 
			        $('.geo_in').html('в Яшалте');
			         break
			case 'Яшкуль': 
			        $('.geo_in').html('в Яшкуле');
			         break
			case 'Бабынино': 
			        $('.geo_in').html('в Бабынино');
			         break
			case 'Балабаново': 
			        $('.geo_in').html('в Балабаново');
			         break
			case 'Барятино': 
			        $('.geo_in').html('в Барятино');
			         break
			case 'Белоусово': 
			        $('.geo_in').html('в Белоусово');
			         break
			case 'Бетлица': 
			        $('.geo_in').html('в Бетлице');
			         break
			case 'Боровск': 
			        $('.geo_in').html('в Боровске');
			         break
			case 'Дугна': 
			        $('.geo_in').html('в Дугне');
			         break
			case 'Дудоровский': 
			        $('.geo_in').html('в Дудоровском');
			         break
			case 'Думиничи': 
			        $('.geo_in').html('в Думиничах');
			         break
			case 'Еленский': 
			        $('.geo_in').html('в Еленском');
			         break
			case 'Жиздра': 
			        $('.geo_in').html('в Жиздре');
			         break
			case 'Износки': 
			        $('.geo_in').html('в Износках');
			         break
			case 'Калуга': 
			        $('.geo_in').html('в Калуге');
			         break
			case 'Киров': 
			        $('.geo_in').html('в Кирове');
			         break
			case 'Козельск': 
			        $('.geo_in').html('в Козельске');
			         break
			case 'Кондрово': 
			        $('.geo_in').html('в Кондрово');
			         break
			case 'Людиново': 
			        $('.geo_in').html('в Людиново');
			         break
			case 'Малоярославец': 
			        $('.geo_in').html('в Малоярославце');
			         break
			case 'Медынь': 
			        $('.geo_in').html('в Медыни');
			         break
			case 'Мещовск': 
			        $('.geo_in').html('в Мещовске');
			         break
			case 'Мосальск': 
			        $('.geo_in').html('в Мосальске');
			         break
			case 'Обнинск': 
			        $('.geo_in').html('в Обнинске');
			         break
			case 'Перемышль': 
			        $('.geo_in').html('в Перемышле');
			         break
			case 'Спас-Деменск': 
			        $('.geo_in').html('в Спас-Деменске');
			         break
			case 'Сухиничи': 
			        $('.geo_in').html('в Сухиничах');
			         break
			case 'Таруса': 
			        $('.geo_in').html('в Тарусе');
			         break
			case 'Ульяново': 
			        $('.geo_in').html('в Ульяново');
			         break
			case 'Ферзиково': 
			        $('.geo_in').html('в Ферзиково');
			         break
			case 'Хвастовичи': 
			        $('.geo_in').html('в Хвастовичах');
			         break
			case 'Юхнов': 
			        $('.geo_in').html('в Юхнове');
			         break
			case 'Атласово': 
			        $('.geo_in').html('в Атласово');
			         break
			case 'Аянка': 
			        $('.geo_in').html('в Аянке');
			         break
			case 'Большерецк': 
			        $('.geo_in').html('в Большерецке');
			         break
			case 'Вилючинск': 
			        $('.geo_in').html('в Вилючинске');
			         break
			case 'Елизово': 
			        $('.geo_in').html('в Елизово');
			         break
			case 'Ильпырский': 
			        $('.geo_in').html('в Ильпырском');
			         break
			case 'Каменское': 
			        $('.geo_in').html('в Каменском');
			         break
			case 'Кировский': 
			        $('.geo_in').html('в Кировском');
			         break
			case 'Крапивная': 
			        $('.geo_in').html('в Крапивной');
			         break
			case 'Мильково': 
			        $('.geo_in').html('в Мильково');
			         break
			case 'Никольское': 
			        $('.geo_in').html('в Никольском');
			         break
			case 'Озерновский': 
			        $('.geo_in').html('в Озерновском');
			         break
			case 'Оссора': 
			        $('.geo_in').html('в Оссоре');
			         break
			case 'Палана': 
			        $('.geo_in').html('в Палане');
			         break
			case 'Парень': 
			        $('.geo_in').html('в Парени');
			         break
			case 'Пахачи': 
			        $('.geo_in').html('в Пахачах');
			         break
			case 'Петропавловск-Камчатский': 
			        $('.geo_in').html('в Петропавловске-Камчатском');
			         break
			case 'Тигиль': 
			        $('.geo_in').html('в Тигили');
			         break
			case 'Тиличики': 
			        $('.geo_in').html('в Тиличиках');
			         break
			case 'Усть-Большерецк': 
			        $('.geo_in').html('в Усть-Большерецке');
			         break
			case 'Усть-Камчатск': 
			        $('.geo_in').html('в Усть-Камчатске');
			         break
			case 'Амбарный': 
			        $('.geo_in').html('в Амбарном');
			         break
			case 'Беломорск': 
			        $('.geo_in').html('в Беломорске');
			         break
			case 'Валаам': 
			        $('.geo_in').html('в Валааме');
			         break
			case 'Вирандозеро': 
			        $('.geo_in').html('в Вирандозере');
			         break
			case 'Гирвас': 
			        $('.geo_in').html('в Гирвасе');
			         break
			case 'Деревянка': 
			        $('.geo_in').html('в Деревянке');
			         break
			case 'Идель': 
			        $('.geo_in').html('в Иделе');
			         break
			case 'Импилахти': 
			        $('.geo_in').html('в Импилахти');
			         break
			case 'Калевала': 
			        $('.geo_in').html('в Калевале');
			         break
			case 'Кемь': 
			        $('.geo_in').html('в Кеми');
			         break
			case 'Кестеньга': 
			        $('.geo_in').html('в Кестеньге');
			         break
			case 'Кондопога': 
			        $('.geo_in').html('в Кондопоге');
			         break
			case 'Костомукша': 
			        $('.geo_in').html('в Костомукше');
			         break
			case 'Лахденпохья': 
			        $('.geo_in').html('в Лахденпохье');
			         break
			case 'Лоухи': 
			        $('.geo_in').html('в Лоухах');
			         break
			case 'Медвежьегорск': 
			        $('.geo_in').html('в Медвежьегорске');
			         break
			case 'Муезерский': 
			        $('.geo_in').html('в Муезерском');
			         break
			case 'Олонец': 
			        $('.geo_in').html('в Олонце');
			         break
			case 'Петрозаводск': 
			        $('.geo_in').html('в Петрозаводске');
			         break
			case 'Питкяранта': 
			        $('.geo_in').html('в Питкяранте');
			         break
			case 'Повенец': 
			        $('.geo_in').html('в Повенце');
			         break
			case 'Пряжа': 
			        $('.geo_in').html('в Пряже');
			         break
			case 'Пудож': 
			        $('.geo_in').html('в Пудоже');
			         break
			case 'Сегежа': 
			        $('.geo_in').html('в Сегеже');
			         break
			case 'Сортавала': 
			        $('.geo_in').html('в Сортавале');
			         break
			case 'Софпорог': 
			        $('.geo_in').html('в Софпороге');
			         break
			case 'Суоярви': 
			        $('.geo_in').html('в Суоярви');
			         break
			case 'Анжеро-Судженск': 
			        $('.geo_in').html('в Анжеро-Судженске');
			         break
			case 'Барзас': 
			        $('.geo_in').html('в Барзасе');
			         break
			case 'Березовский': 
			        $('.geo_in').html('в Березовском');
			         break
			case 'Грамотеино': 
			        $('.geo_in').html('в Грамотеино');
			         break
			case 'Ижморский': 
			        $('.geo_in').html('в Ижморском');
			         break
			case 'Итатский': 
			        $('.geo_in').html('в Итатском');
			         break
			case 'Калтан': 
			        $('.geo_in').html('в Калтане');
			         break
			case 'Кедровка': 
			        $('.geo_in').html('в Кедровке');
			         break
			case 'Кемерово': 
			        $('.geo_in').html('в Кемерово');
			         break
			case 'Киселевск': 
			        $('.geo_in').html('в Киселевске');
			         break
			case 'Крапивинский': 
			        $('.geo_in').html('в Крапивинском');
			         break
			case 'Ленинск-Кузнецкий': 
			        $('.geo_in').html('в Ленинск-Кузнецком');
			         break
			case 'Мариинск': 
			        $('.geo_in').html('в Мариинске');
			         break
			case 'Междуреченск': 
			        $('.geo_in').html('в Междуреченске');
			         break
			case 'Мыски': 
			        $('.geo_in').html('в Мысках');
			         break
			case 'Новокузнецк': 
			        $('.geo_in').html('в Новокузнецке');
			         break
			case 'Осинники': 
			        $('.geo_in').html('в Осинниках');
			         break
			case 'Прокопьевск': 
			        $('.geo_in').html('в Прокопьевске');
			         break
			case 'Промышленная': 
			        $('.geo_in').html('в Промышленной');
			         break
			case 'Тайга': 
			        $('.geo_in').html('в Тайге');
			         break
			case 'Таштагол': 
			        $('.geo_in').html('в Таштаголе');
			         break
			case 'Тисуль': 
			        $('.geo_in').html('в Тисуле');
			         break
			case 'Топки': 
			        $('.geo_in').html('в Топках');
			         break
			case 'Тяжинский': 
			        $('.geo_in').html('в Тяжинском');
			         break
			case 'Юрга': 
			        $('.geo_in').html('в Юрге');
			         break
			case 'Яшкино': 
			        $('.geo_in').html('в Яшкино');
			         break
			case 'Яя': 
			        $('.geo_in').html('в Яе');
			         break
			case 'Арбаж': 
			        $('.geo_in').html('в Арбаже');
			         break
			case 'Аркуль': 
			        $('.geo_in').html('в Аркуле');
			         break
			case 'Белая Холуница': 
			        $('.geo_in').html('в Белой Холунице');
			         break
			case 'Богородское': 
			        $('.geo_in').html('в Богородском');
			         break
			case 'Боровой': 
			        $('.geo_in').html('в Боровом');
			         break
			case 'Верхошижемье': 
			        $('.geo_in').html('в Верхошижемье');
			         break
			case 'Вятские Поляны': 
			        $('.geo_in').html('в Вятских Полянах');
			         break
			case 'Зуевка': 
			        $('.geo_in').html('в Зуевке');
			         break
			case 'Каринторф': 
			        $('.geo_in').html('в Каринторфе');
			         break
			case 'Кикнур': 
			        $('.geo_in').html('в Кикнуре');
			         break
			case 'Кильмезь': 
			        $('.geo_in').html('в Кильмези');
			         break
			case 'Кирово-Чепецк': 
			        $('.geo_in').html('в Кирово-Чепецке');
			         break
			case 'Кирс': 
			        $('.geo_in').html('в Кирсе');
			         break
			case 'Кобра': 
			        $('.geo_in').html('в Кобре');
			         break
			case 'Котельнич': 
			        $('.geo_in').html('в Котельниче');
			         break
			case 'Кумены': 
			        $('.geo_in').html('в Куменах');
			         break
			case 'Ленинское': 
			        $('.geo_in').html('в Ленинском');
			         break
			case 'Луза': 
			        $('.geo_in').html('в Лузе');
			         break
			case 'Малмыж': 
			        $('.geo_in').html('в Малмыже');
			         break
			case 'Мураши': 
			        $('.geo_in').html('в Мурашах');
			         break
			case 'Нагорск': 
			        $('.geo_in').html('в Нагорске');
			         break
			case 'Нема': 
			        $('.geo_in').html('в Неме');
			         break
			case 'Нововятск': 
			        $('.geo_in').html('в Нововятске');
			         break
			case 'Нолинск': 
			        $('.geo_in').html('в Нолинске');
			         break
			case 'Омутнинск': 
			        $('.geo_in').html('в Омутнинске');
			         break
			case 'Опарино': 
			        $('.geo_in').html('в Опарино');
			         break
			case 'Оричи': 
			        $('.geo_in').html('в Оричах');
			         break
			case 'Пижанка': 
			        $('.geo_in').html('в Пижанке');
			         break
			case 'Подосиновец': 
			        $('.geo_in').html('в Подосиновце');
			         break
			case 'Санчурск': 
			        $('.geo_in').html('в Санчурске');
			         break
			case 'Свеча': 
			        $('.geo_in').html('в Свече');
			         break
			case 'Слободской': 
			        $('.geo_in').html('в Слободском');
			         break
			case 'Советск': 
			        $('.geo_in').html('в Советске');
			         break
			case 'Суна': 
			        $('.geo_in').html('в Суне');
			         break
			case 'Тужа': 
			        $('.geo_in').html('в Туже');
			         break
			case 'Уни': 
			        $('.geo_in').html('в Уни');
			         break
			case 'Уржум': 
			        $('.geo_in').html('в Уржуме');
			         break
			case 'Фаленки': 
			        $('.geo_in').html('в Фаленках');
			         break
			case 'Халтурин': 
			        $('.geo_in').html('в Халтурине');
			         break
			case 'Юрья': 
			        $('.geo_in').html('в Юрье');
			         break
			case 'Яранск': 
			        $('.geo_in').html('в Яранске');
			         break
			case 'Абезь': 
			        $('.geo_in').html('в Абези');
			         break
			case 'Айкино': 
			        $('.geo_in').html('в Айкино');
			         break
			case 'Верхняя Инта': 
			        $('.geo_in').html('в Верхней Инте');
			         break
			case 'Визинга': 
			        $('.geo_in').html('в Визинге');
			         break
			case 'Водный': 
			        $('.geo_in').html('в Водном');
			         break
			case 'Вожаель': 
			        $('.geo_in').html('в Вожаеле');
			         break
			case 'Воркута': 
			        $('.geo_in').html('в Воркуте');
			         break
			case 'Вуктыл': 
			        $('.geo_in').html('в Вуктыле');
			         break
			case 'Гешарт': 
			        $('.geo_in').html('в Гешарте');
			         break
			case 'Елецкий': 
			        $('.geo_in').html('в Елецком');
			         break
			case 'Емва': 
			        $('.geo_in').html('в Емве');
			         break
			case 'Заполярный': 
			        $('.geo_in').html('в Заполярном');
			         break
			case 'Ижма': 
			        $('.geo_in').html('в Ижме');
			         break
			case 'Инта': 
			        $('.geo_in').html('в Инте');
			         break
			case 'Ираель': 
			        $('.geo_in').html('в Ираеле');
			         break
			case 'Каджером': 
			        $('.geo_in').html('в Каджероме');
			         break
			case 'Кажым': 
			        $('.geo_in').html('в Кажыме');
			         break
			case 'Кожым': 
			        $('.geo_in').html('в Кожыме');
			         break
			case 'Койгородок': 
			        $('.geo_in').html('в Койгородке');
			         break
			case 'Корткерос': 
			        $('.geo_in').html('в Корткеросе');
			         break
			case 'Кослан': 
			        $('.geo_in').html('в Кослане');
			         break
			case 'Объячево': 
			        $('.geo_in').html('в Объячево');
			         break
			case 'Печора': 
			        $('.geo_in').html('в Печоре');
			         break
			case 'Сосногорск': 
			        $('.geo_in').html('в Сосногорске');
			         break
			case 'Сыктывкар': 
			        $('.geo_in').html('в Сыктывкаре');
			         break
			case 'Троицко-Печерск': 
			        $('.geo_in').html('в Троицко-Печерске');
			         break
			case 'Усинск': 
			        $('.geo_in').html('в Усинске');
			         break
			case 'Усогорск': 
			        $('.geo_in').html('в Усогорске');
			         break
			case 'Усть-Кулом': 
			        $('.geo_in').html('в Усть-Куломе');
			         break
			case 'Усть-Цильма': 
			        $('.geo_in').html('в Усть-Цильме');
			         break
			case 'Ухта': 
			        $('.geo_in').html('в Ухте');
			         break
			case 'Антропово': 
			        $('.geo_in').html('в Антропово');
			         break
			case 'Боговарово': 
			        $('.geo_in').html('в Боговарово');
			         break
			case 'Буй': 
			        $('.geo_in').html('в Буе');
			         break
			case 'Волгореченск': 
			        $('.geo_in').html('в Волгореченске');
			         break
			case 'Галич': 
			        $('.geo_in').html('в Галиче');
			         break
			case 'Горчуха': 
			        $('.geo_in').html('в Горчухе');
			         break
			case 'Зебляки': 
			        $('.geo_in').html('в Зебляках');
			         break
			case 'Кадый': 
			        $('.geo_in').html('в Кадые');
			         break
			case 'Кологрив': 
			        $('.geo_in').html('в Кологриве');
			         break
			case 'Кострома': 
			        $('.geo_in').html('в Костроме');
			         break
			case 'Красное-на-Волге': 
			        $('.geo_in').html('в Красном-на-Волге');
			         break
			case 'Макарьев': 
			        $('.geo_in').html('в Макарьеве');
			         break
			case 'Мантурово': 
			        $('.geo_in').html('в Мантурово');
			         break
			case 'Нерехта': 
			        $('.geo_in').html('в Нерехте');
			         break
			case 'Нея': 
			        $('.geo_in').html('в Нее');
			         break
			case 'Островское': 
			        $('.geo_in').html('в Островском');
			         break
			case 'Павино': 
			        $('.geo_in').html('в Павино');
			         break
			case 'Парфентьево': 
			        $('.geo_in').html('в Парфентьево');
			         break
			case 'Поназырево': 
			        $('.geo_in').html('в Поназырево');
			         break
			case 'Солигалич': 
			        $('.geo_in').html('в Солигаличе');
			         break
			case 'Судиславль': 
			        $('.geo_in').html('в Судиславле');
			         break
			case 'Сусанино': 
			        $('.geo_in').html('в Сусанино');
			         break
			case 'Чухлома': 
			        $('.geo_in').html('в Чухломе');
			         break
			case 'Шарья': 
			        $('.geo_in').html('в Шарье');
			         break
			case 'Шемятино': 
			        $('.geo_in').html('в Шемятино');
			         break
			case 'Абинск': 
			        $('.geo_in').html('в Абинске');
			         break
			case 'Абрау-Дюрсо': 
			        $('.geo_in').html('в Абрау-Дюрсо');
			         break
			case 'Анапа': 
			        $('.geo_in').html('в Анапе');
			         break
			case 'Апшеронск': 
			        $('.geo_in').html('в Апшеронске');
			         break
			case 'Армавир': 
			        $('.geo_in').html('в Армавире');
			         break
			case 'Архипо-Осиповка': 
			        $('.geo_in').html('в Архипо-Осиповке');
			         break
			case 'Афипский': 
			        $('.geo_in').html('в Афипском');
			         break
			case 'Ахтырский': 
			        $('.geo_in').html('в Ахтырском');
			         break
			case 'Ачуево': 
			        $('.geo_in').html('в Ачуево');
			         break
			case 'Белореченск': 
			        $('.geo_in').html('в Белореченске');
			         break
			case 'Верхнебаканский': 
			        $('.geo_in').html('в Верхнебаканском');
			         break
			case 'Выселки': 
			        $('.geo_in').html('в Выселках');
			         break
			case 'Геленджик': 
			        $('.geo_in').html('в Геленджике');
			         break
			case 'Гиагинская': 
			        $('.geo_in').html('в Гиагинской');
			         break
			case 'Горячий Ключ': 
			        $('.geo_in').html('в Горячем Ключе');
			         break
			case 'Джубга': 
			        $('.geo_in').html('в Джубге');
			         break
			case 'Динская': 
			        $('.geo_in').html('в Динской');
			         break
			case 'Ейск': 
			        $('.geo_in').html('в Ейске');
			         break
			case 'Ильский': 
			        $('.geo_in').html('в Ильском');
			         break
			case 'Кабардинка': 
			        $('.geo_in').html('в Кабардинке');
			         break
			case 'Калинино': 
			        $('.geo_in').html('в Калинино');
			         break
			case 'Калининская': 
			        $('.geo_in').html('в Калининской');
			         break
			case 'Каменномостский': 
			        $('.geo_in').html('в Каменномостском');
			         break
			case 'Каневская': 
			        $('.geo_in').html('в Каневской');
			         break
			case 'Кореновск': 
			        $('.geo_in').html('в Кореновске');
			         break
			case 'Красноармейская': 
			        $('.geo_in').html('в Красноармейской');
			         break
			case 'Краснодар': 
			        $('.geo_in').html('в Краснодаре');
			         break
			case 'Кропоткин': 
			        $('.geo_in').html('в Кропоткине');
			         break
			case 'Крыловская': 
			        $('.geo_in').html('в Крыловской');
			         break
			case 'Крымск': 
			        $('.geo_in').html('в Крымске');
			         break
			case 'Курганинск': 
			        $('.geo_in').html('в Курганинске');
			         break
			case 'Кущевская': 
			        $('.geo_in').html('в Кущевской');
			         break
			case 'Лабинск': 
			        $('.geo_in').html('в Лабинске');
			         break
			case 'Лениградская': 
			        $('.geo_in').html('в Лениградской');
			         break
			case 'Мостовской': 
			        $('.geo_in').html('в Мостовском');
			         break
			case 'Новороссийск': 
			        $('.geo_in').html('в Новороссийске');
			         break
			case 'Отрадная': 
			        $('.geo_in').html('в Отрадной');
			         break
			case 'Павловская': 
			        $('.geo_in').html('в Павловской');
			         break
			case 'Приморско-Ахтарск': 
			        $('.geo_in').html('в Приморско-Ахтарске');
			         break
			case 'Северская': 
			        $('.geo_in').html('в Северской');
			         break
			case 'Славянск-на-Кубани': 
			        $('.geo_in').html('в Славянске-на-Кубани');
			         break
			case 'Сочи': 
			        $('.geo_in').html('в Сочи');
			         break
			case 'Староминская': 
			        $('.geo_in').html('в Староминской');
			         break
			case 'Старощербиновская': 
			        $('.geo_in').html('в Старощербиновской');
			         break
			case 'Тбилисская': 
			        $('.geo_in').html('в Тбилисской');
			         break
			case 'Темрюк': 
			        $('.geo_in').html('в Темрюке');
			         break
			case 'Тимашевск': 
			        $('.geo_in').html('в Тимашевске');
			         break
			case 'Тихорецк': 
			        $('.geo_in').html('в Тихорецке');
			         break
			case 'Туапсе': 
			        $('.geo_in').html('в Туапсе');
			         break
			case 'Тульский': 
			        $('.geo_in').html('в Тульском');
			         break
			case 'Усть-Лабинск': 
			        $('.geo_in').html('в Усть-Лабинске');
			         break
			case 'Шовгеновский': 
			        $('.geo_in').html('в Шовгеновском');
			         break
			case 'Железногорск': 
			        $('.geo_in').html('в Железногорске');
			         break
			case 'Абаза': 
			        $('.geo_in').html('в Абазе');
			         break
			case 'Абакан': 
			        $('.geo_in').html('в Абакане');
			         break
			case 'Абан': 
			        $('.geo_in').html('в Абане');
			         break
			case 'Агинское': 
			        $('.geo_in').html('в Агинском');
			         break
			case 'Артемовск': 
			        $('.geo_in').html('в Артемовске');
			         break
			case 'Аскиз': 
			        $('.geo_in').html('в Аскизе');
			         break
			case 'Ачинск': 
			        $('.geo_in').html('в Ачинске');
			         break
			case 'Байкит': 
			        $('.geo_in').html('в Байките');
			         break
			case 'Балахта': 
			        $('.geo_in').html('в Балахте');
			         break
			case 'Балыкса': 
			        $('.geo_in').html('в Балыксе');
			         break
			case 'Белый Яр': 
			        $('.geo_in').html('в Белом Яре');
			         break
			case 'Бельтырский': 
			        $('.geo_in').html('в Бельтырском');
			         break
			case 'Бея': 
			        $('.geo_in').html('в Бее');
			         break
			case 'Бискамжа': 
			        $('.geo_in').html('в Бискамже');
			         break
			case 'Боготол': 
			        $('.geo_in').html('в Боготоле');
			         break
			case 'Боград': 
			        $('.geo_in').html('в Бограде');
			         break
			case 'Богучаны': 
			        $('.geo_in').html('в Богучанах');
			         break
			case 'Большая Мурта': 
			        $('.geo_in').html('в Большой Мурте');
			         break
			case 'Большой Улуй': 
			        $('.geo_in').html('в Большом Улуе');
			         break
			case 'Ванавара': 
			        $('.geo_in').html('в Ванаваре');
			         break
			case 'Верхнеимбатск': 
			        $('.geo_in').html('в Верхнеимбатске');
			         break
			case 'Горячегорск': 
			        $('.geo_in').html('в Горячегорске');
			         break
			case 'Дзержинское': 
			        $('.geo_in').html('в Дзержинском');
			         break
			case 'Дивногорск': 
			        $('.geo_in').html('в Дивногорске');
			         break
			case 'Диксон': 
			        $('.geo_in').html('в Диксоне');
			         break
			case 'Дудинка': 
			        $('.geo_in').html('в Дудинке');
			         break
			case 'Емельяново': 
			        $('.geo_in').html('в Емельяново');
			         break
			case 'Енисейск': 
			        $('.geo_in').html('в Енисейске');
			         break
			case 'Ермаковское': 
			        $('.geo_in').html('в Ермаковском');
			         break
			case 'Заозерный': 
			        $('.geo_in').html('в Заозерном');
			         break
			case 'Игарка': 
			        $('.geo_in').html('в Игарке');
			         break
			case 'Идринское': 
			        $('.geo_in').html('в Идринском');
			         break
			case 'Иланский': 
			        $('.geo_in').html('в Иланском');
			         break
			case 'Ирбейское': 
			        $('.geo_in').html('в Ирбейском');
			         break
			case 'Канск': 
			        $('.geo_in').html('в Канске');
			         break
			case 'Каратузское': 
			        $('.geo_in').html('в Каратузском');
			         break
			case 'Караул': 
			        $('.geo_in').html('в Карауле');
			         break
			case 'Кежма': 
			        $('.geo_in').html('в Кежме');
			         break
			case 'Кодинск': 
			        $('.geo_in').html('в Кодинске');
			         break
			case 'Козулька': 
			        $('.geo_in').html('в Козульке');
			         break
			case 'Копьево': 
			        $('.geo_in').html('в Копьево');
			         break
			case 'Краснотуранск': 
			        $('.geo_in').html('в Краснотуранске');
			         break
			case 'Красноярск': 
			        $('.geo_in').html('в Красноярске');
			         break
			case 'Курагино': 
			        $('.geo_in').html('в Курагино');
			         break
			case 'Лесосибирск': 
			        $('.geo_in').html('в Лесосибирске');
			         break
			case 'Минусинск': 
			        $('.geo_in').html('в Минусинске');
			         break
			case 'Мотыгино': 
			        $('.geo_in').html('в Мотыгино');
			         break
			case 'Назарово': 
			        $('.geo_in').html('в Назарово');
			         break
			case 'Нижний Ингаш': 
			        $('.geo_in').html('в Нижнем Ингаше');
			         break
			case 'Новоселово': 
			        $('.geo_in').html('в Новоселово');
			         break
			case 'Норильск': 
			        $('.geo_in').html('в Норильске');
			         break
			case 'Партизанское': 
			        $('.geo_in').html('в Партизанском');
			         break
			case 'Пировское': 
			        $('.geo_in').html('в Пировском');
			         break
			case 'Саяногорск': 
			        $('.geo_in').html('в Саяногорске');
			         break
			case 'Северо-Енисейский': 
			        $('.geo_in').html('в Северо-Енисейском');
			         break
			case 'Сосновоборск': 
			        $('.geo_in').html('в Сосновоборске');
			         break
			case 'Тасеево': 
			        $('.geo_in').html('в Тасеево');
			         break
			case 'Таштып': 
			        $('.geo_in').html('в Таштыпе');
			         break
			case 'Тура': 
			        $('.geo_in').html('в Туре');
			         break
			case 'Туруханск': 
			        $('.geo_in').html('в Туруханске');
			         break
			case 'Тюхтет': 
			        $('.geo_in').html('в Тюхтете');
			         break
			case 'Ужур': 
			        $('.geo_in').html('в Ужуре');
			         break
			case 'Усть-Авам': 
			        $('.geo_in').html('в Усть-Аваме');
			         break
			case 'Уяр': 
			        $('.geo_in').html('в Уяре');
			         break
			case 'Хатанга': 
			        $('.geo_in').html('в Хатанге');
			         break
			case 'Черемушки': 
			        $('.geo_in').html('в Черемушках');
			         break
			case 'Черногорск': 
			        $('.geo_in').html('в Черногорске');
			         break
			case 'Шалинское': 
			        $('.geo_in').html('в Шалинском');
			         break
			case 'Шарыпово': 
			        $('.geo_in').html('в Шарыпово');
			         break
			case 'Шира': 
			        $('.geo_in').html('в Шире');
			         break
			case 'Шушенское': 
			        $('.geo_in').html('в Шушенском');
			         break
			case 'Варгаши': 
			        $('.geo_in').html('в Варгашах');
			         break
			case 'Глядянское': 
			        $('.geo_in').html('в Глядянском');
			         break
			case 'Далматово': 
			        $('.geo_in').html('в Далматово');
			         break
			case 'Каргаполье': 
			        $('.geo_in').html('в Каргаполье');
			         break
			case 'Катайск': 
			        $('.geo_in').html('в Катайске');
			         break
			case 'Кетово': 
			        $('.geo_in').html('в Кетово');
			         break
			case 'Курган': 
			        $('.geo_in').html('в Кургане');
			         break
			case 'Куртамыш': 
			        $('.geo_in').html('в Куртамыше');
			         break
			case 'Лебяжье': 
			        $('.geo_in').html('в Лебяжьем');
			         break
			case 'Макушино': 
			        $('.geo_in').html('в Макушино');
			         break
			case 'Мишкино': 
			        $('.geo_in').html('в Мишкино');
			         break
			case 'Мокроусово': 
			        $('.geo_in').html('в Мокроусово');
			         break
			case 'Петухово': 
			        $('.geo_in').html('в Петухово');
			         break
			case 'Половинное': 
			        $('.geo_in').html('в Половинном');
			         break
			case 'Сафакулево': 
			        $('.geo_in').html('в Сафакулево');
			         break
			case 'Шадринск': 
			        $('.geo_in').html('в Шадринске');
			         break
			case 'Шатрово': 
			        $('.geo_in').html('в Шатрово');
			         break
			case 'Шумиха': 
			        $('.geo_in').html('в Шумихе');
			         break
			case 'Щучье': 
			        $('.geo_in').html('в Щучьем');
			         break
			case 'Юргамыш': 
			        $('.geo_in').html('в Юргамыше');
			         break
			case 'Альменево': 
			        $('.geo_in').html('в Альменево');
			         break
			case 'Белая': 
			        $('.geo_in').html('в Белой');
			         break
			case 'Большое Солдатское': 
			        $('.geo_in').html('в Большом Солдатском');
			         break
			case 'Глушково': 
			        $('.geo_in').html('в Глушково');
			         break
			case 'Горшечное': 
			        $('.geo_in').html('в Горшечном');
			         break
			case 'Дмитриев-Льговский': 
			        $('.geo_in').html('в Дмитриеве-Льговском');
			         break
			case 'Золотухино': 
			        $('.geo_in').html('в Золотухино');
			         break
			case 'Касторное': 
			        $('.geo_in').html('в Касторном');
			         break
			case 'Конышевка': 
			        $('.geo_in').html('в Конышевке');
			         break
			case 'Коренево': 
			        $('.geo_in').html('в Коренево');
			         break
			case 'Курск': 
			        $('.geo_in').html('в Курске');
			         break
			case 'Курчатов': 
			        $('.geo_in').html('в Курчатове');
			         break
			case 'Кшенский': 
			        $('.geo_in').html('в Кшенском');
			         break
			case 'Льгов': 
			        $('.geo_in').html('в Льгове');
			         break
			case 'Медвенка': 
			        $('.geo_in').html('в Медвенке');
			         break
			case 'Обоянь': 
			        $('.geo_in').html('в Обояни');
			         break
			case 'Поныри': 
			        $('.geo_in').html('в Понырях');
			         break
			case 'Пристень': 
			        $('.geo_in').html('в Пристени');
			         break
			case 'Прямицыно': 
			        $('.geo_in').html('в Прямицыно');
			         break
			case 'Рыльск': 
			        $('.geo_in').html('в Рыльске');
			         break
			case 'Суджа': 
			        $('.geo_in').html('в Судже');
			         break
			case 'Тим': 
			        $('.geo_in').html('в Тиме');
			         break
			case 'Фатеж': 
			        $('.geo_in').html('в Фатеже');
			         break
			case 'Хомутовка': 
			        $('.geo_in').html('в Хомутовке');
			         break
			case 'Черемисиново': 
			        $('.geo_in').html('в Черемисиново');
			         break
			case 'Щигры': 
			        $('.geo_in').html('в Щиграх');
			         break
			case 'Грязи': 
			        $('.geo_in').html('в Грязях');
			         break
			case 'Данхов': 
			        $('.geo_in').html('в Данхове');
			         break
			case 'Доброе': 
			        $('.geo_in').html('в Добром');
			         break
			case 'Долгоруково': 
			        $('.geo_in').html('в Долгоруково');
			         break
			case 'Елец': 
			        $('.geo_in').html('в Ельце');
			         break
			case 'Задонск': 
			        $('.geo_in').html('в Задонске');
			         break
			case 'Измалково': 
			        $('.geo_in').html('в Измалково');
			         break
			case 'Казинка': 
			        $('.geo_in').html('в Казинке');
			         break
			case 'Лебедянь': 
			        $('.geo_in').html('в Лебедяни');
			         break
			case 'Лев Толстой': 
			        $('.geo_in').html('в Льве Толстом');
			         break
			case 'Липецк': 
			        $('.geo_in').html('в Липецке');
			         break
			case 'Тербуны': 
			        $('.geo_in').html('в Тербунах');
			         break
			case 'Усмань': 
			        $('.geo_in').html('в Усмани');
			         break
			case 'Хлевное': 
			        $('.geo_in').html('в Хлевном');
			         break
			case 'Чаплыгин': 
			        $('.geo_in').html('в Чаплыгине');
			         break
			case 'Анадырь': 
			        $('.geo_in').html('в Анадыре');
			         break
			case 'Атка': 
			        $('.geo_in').html('в Атке');
			         break
			case 'Балыгычан': 
			        $('.geo_in').html('в Балыгычане');
			         break
			case 'Беринговский': 
			        $('.geo_in').html('в Беринговском');
			         break
			case 'Большевик': 
			        $('.geo_in').html('в Большевике');
			         break
			case 'Ванкарем': 
			        $('.geo_in').html('в Ванкареме');
			         break
			case 'Иульитин': 
			        $('.geo_in').html('в Иульитине');
			         break
			case 'Кадыкчан': 
			        $('.geo_in').html('в Кадыкчане');
			         break
			case 'Лаврентия': 
			        $('.geo_in').html('в Лаврентии');
			         break
			case 'Магадан': 
			        $('.geo_in').html('в Магадане');
			         break
			case 'Мыс Шмидта': 
			        $('.geo_in').html('в Мысе Шмидта');
			         break
			case 'Ола': 
			        $('.geo_in').html('в Оле');
			         break
			case 'Омонск': 
			        $('.geo_in').html('в Омонске');
			         break
			case 'Омсукчан': 
			        $('.geo_in').html('в Омсукчане');
			         break
			case 'Палатка': 
			        $('.geo_in').html('в Палатке');
			         break
			case 'Певек': 
			        $('.geo_in').html('в Певеке');
			         break
			case 'Провидения': 
			        $('.geo_in').html('в Провидения');
			         break
			case 'Сеймчан': 
			        $('.geo_in').html('в Сеймчане');
			         break
			case 'Синегорье': 
			        $('.geo_in').html('в Синегорье');
			         break
			case 'Сусуман': 
			        $('.geo_in').html('в Сусумане');
			         break
			case 'Усть-Белая': 
			        $('.geo_in').html('в Усть-Белой');
			         break
			case 'Усть-Омчуг': 
			        $('.geo_in').html('в Усть-Омчуге');
			         break
			case 'Эвенск': 
			        $('.geo_in').html('в Эвенске');
			         break
			case 'Эгвекинот': 
			        $('.geo_in').html('в Эгвекиноте');
			         break
			case 'Ягодное': 
			        $('.geo_in').html('в Ягодном');
			         break
			case 'Волжск': 
			        $('.geo_in').html('в Волжске');
			         break
			case 'Дубовский': 
			        $('.geo_in').html('в Дубовском');
			         break
			case 'Звенигово': 
			        $('.geo_in').html('в Звенигово');
			         break
			case 'Йошкар-Ола': 
			        $('.geo_in').html('в Йошкар-Оле');
			         break
			case 'Килемары': 
			        $('.geo_in').html('в Килемарах');
			         break
			case 'Козьмодемьянск': 
			        $('.geo_in').html('в Козьмодемьянске');
			         break
			case 'Куженер': 
			        $('.geo_in').html('в Куженере');
			         break
			case 'Мари-Турек': 
			        $('.geo_in').html('в Мари-Туреке');
			         break
			case 'Медведево': 
			        $('.geo_in').html('в Медведево');
			         break
			case 'Морки': 
			        $('.geo_in').html('в Морках');
			         break
			case 'Новый Торьял': 
			        $('.geo_in').html('в Новом Торьяле');
			         break
			case 'Оршанка': 
			        $('.geo_in').html('в Оршанке');
			         break
			case 'Параньга': 
			        $('.geo_in').html('в Параньге');
			         break
			case 'Сернур': 
			        $('.geo_in').html('в Сернуре');
			         break
			case 'Советский': 
			        $('.geo_in').html('в Советском');
			         break
			case 'Юрино': 
			        $('.geo_in').html('в Юрино');
			         break
			case 'Ардатов': 
			        $('.geo_in').html('в Ардатове');
			         break
			case 'Атюрьево': 
			        $('.geo_in').html('в Атюрьево');
			         break
			case 'Атяшево': 
			        $('.geo_in').html('в Атяшево');
			         break
			case 'Большие Березники': 
			        $('.geo_in').html('в Больших Березниках');
			         break
			case 'Большое Игнатово': 
			        $('.geo_in').html('в Большом Игнатово');
			         break
			case 'Выша': 
			        $('.geo_in').html('в Выше');
			         break
			case 'Ельники': 
			        $('.geo_in').html('в Ельниках');
			         break
			case 'Зубова Поляна': 
			        $('.geo_in').html('в Зубовой Поляне');
			         break
			case 'Инсар': 
			        $('.geo_in').html('в Инсаре');
			         break
			case 'Кадошкино': 
			        $('.geo_in').html('в Кадошкино');
			         break
			case 'Кемля': 
			        $('.geo_in').html('в Кемле');
			         break
			case 'Ковылкино': 
			        $('.geo_in').html('в Ковылкино');
			         break
			case 'Кочкурово': 
			        $('.geo_in').html('в Кочкурово');
			         break
			case 'Краснослободск': 
			        $('.geo_in').html('в Краснослободске');
			         break
			case 'Лямбирь': 
			        $('.geo_in').html('в Лямбире');
			         break
			case 'Ромоданово': 
			        $('.geo_in').html('в Ромоданово');
			         break
			case 'Рузаевка': 
			        $('.geo_in').html('в Рузаевке');
			         break
			case 'Саранск': 
			        $('.geo_in').html('в Саранске');
			         break
			case 'Старое Шайгово': 
			        $('.geo_in').html('в Старом Шайгово');
			         break
			case 'Темников': 
			        $('.geo_in').html('в Темникове');
			         break
			case 'Теньгушево': 
			        $('.geo_in').html('в Теньгушево');
			         break
			case 'Торбеево': 
			        $('.geo_in').html('в Торбеево');
			         break
			case 'Чамзинка': 
			        $('.geo_in').html('в Чамзинке');
			         break
			case 'Апатиты': 
			        $('.geo_in').html('в Апатитах');
			         break
			case 'Африканда': 
			        $('.geo_in').html('в Африканде');
			         break
			case 'Верхнетуломский': 
			        $('.geo_in').html('в Верхнетуломском');
			         break
			case 'Заозерск': 
			        $('.geo_in').html('в Заозерске');
			         break
			case 'Зареченск': 
			        $('.geo_in').html('в Зареченске');
			         break
			case 'Зашеек': 
			        $('.geo_in').html('в Зашейке');
			         break
			case 'Зеленоборский': 
			        $('.geo_in').html('в Зеленоборском');
			         break
			case 'Кандалакша': 
			        $('.geo_in').html('в Кандалакше');
			         break
			case 'Кильдинстрой': 
			        $('.geo_in').html('в Кильдинстрое');
			         break
			case 'Ковдор': 
			        $('.geo_in').html('в Ковдоре');
			         break
			case 'Кола': 
			        $('.geo_in').html('в Коле');
			         break
			case 'Конда': 
			        $('.geo_in').html('в Конде');
			         break
			case 'Мончегорск': 
			        $('.geo_in').html('в Мончегорске');
			         break
			case 'Мурманск': 
			        $('.geo_in').html('в Мурманске');
			         break
			case 'Мурмаши': 
			        $('.geo_in').html('в Мурмашах');
			         break
			case 'Никель': 
			        $('.geo_in').html('в Никеле');
			         break
			case 'Оленегорск': 
			        $('.geo_in').html('в Оленегорске');
			         break
			case 'Полярные Зори': 
			        $('.geo_in').html('в Полярных Зорях');
			         break
			case 'Полярный': 
			        $('.geo_in').html('в Полярном');
			         break
			case 'Североморск': 
			        $('.geo_in').html('в Североморске');
			         break
			case 'Снежногорск': 
			        $('.geo_in').html('в Снежногорске');
			         break
			case 'Умба': 
			        $('.geo_in').html('в Умбе');
			         break
			case 'Арзамас': 
			        $('.geo_in').html('в Арзамасе');
			         break
			case 'Арья': 
			        $('.geo_in').html('в Арье');
			         break
			case 'Балахна': 
			        $('.geo_in').html('в Балахне');
			         break
			case 'Богородск': 
			        $('.geo_in').html('в Богородске');
			         break
			case 'Большереченск': 
			        $('.geo_in').html('в Большереченске');
			         break
			case 'Большое Болдино': 
			        $('.geo_in').html('в Большом Болдино');
			         break
			case 'Большое Козино': 
			        $('.geo_in').html('в Большом Козино');
			         break
			case 'Большое Мурашкино': 
			        $('.geo_in').html('в Большом Мурашкино');
			         break
			case 'Большое Пикино': 
			        $('.geo_in').html('в Большом Пикино');
			         break
			case 'Бор': 
			        $('.geo_in').html('в Боре');
			         break
			case 'Бутурлино': 
			        $('.geo_in').html('в Бутурлино');
			         break
			case 'Вад': 
			        $('.geo_in').html('в Ваде');
			         break
			case 'Варнавино': 
			        $('.geo_in').html('в Варнавино');
			         break
			case 'Васильсурск': 
			        $('.geo_in').html('в Васильсурске');
			         break
			case 'Вахтан': 
			        $('.geo_in').html('в Вахтане');
			         break
			case 'Вача': 
			        $('.geo_in').html('в Ваче');
			         break
			case 'Велетьма': 
			        $('.geo_in').html('в Велетьме');
			         break
			case 'Ветлуга': 
			        $('.geo_in').html('в Ветлуге');
			         break
			case 'Виля': 
			        $('.geo_in').html('в Виле');
			         break
			case 'Вознесенское': 
			        $('.geo_in').html('в Вознесенском');
			         break
			case 'Володарск': 
			        $('.geo_in').html('в Володарске');
			         break
			case 'Воротынец': 
			        $('.geo_in').html('в Воротынце');
			         break
			case 'Ворсма': 
			        $('.geo_in').html('в Ворсме');
			         break
			case 'Воскресенское': 
			        $('.geo_in').html('в Воскресенском');
			         break
			case 'Выездное': 
			        $('.geo_in').html('в Выездном');
			         break
			case 'Выкса': 
			        $('.geo_in').html('в Выксе');
			         break
			case 'Гагино': 
			        $('.geo_in').html('в Гагино');
			         break
			case 'Гидроторф': 
			        $('.geo_in').html('в Гидроторфе');
			         break
			case 'Горбатов': 
			        $('.geo_in').html('в Горбатове');
			         break
			case 'Горбатовка': 
			        $('.geo_in').html('в Горбатовке');
			         break
			case 'Городец': 
			        $('.geo_in').html('в Городце');
			         break
			case 'Горький': 
			        $('.geo_in').html('в Горьком');
			         break
			case 'Дальнее Константиново': 
			        $('.geo_in').html('в Дальнем Константиново');
			         break
			case 'Дзержинск': 
			        $('.geo_in').html('в Дзержинске');
			         break
			case 'Дивеево': 
			        $('.geo_in').html('в Дивеево');
			         break
			case 'Досчатое': 
			        $('.geo_in').html('в Досчатом');
			         break
			case 'Заволжье': 
			        $('.geo_in').html('в Заволжье');
			         break
			case 'Катунки': 
			        $('.geo_in').html('в Катунках');
			         break
			case 'Керженец': 
			        $('.geo_in').html('в Керженце');
			         break
			case 'Княгинино': 
			        $('.geo_in').html('в Княгинино');
			         break
			case 'Ковернино': 
			        $('.geo_in').html('в Ковернино');
			         break
			case 'Красные Баки': 
			        $('.geo_in').html('в Красных Баках');
			         break
			case 'Кстово': 
			        $('.geo_in').html('в Кстово');
			         break
			case 'Кулебаки': 
			        $('.geo_in').html('в Кулебаках');
			         break
			case 'Лукоянов': 
			        $('.geo_in').html('в Лукоянове');
			         break
			case 'Лысково': 
			        $('.geo_in').html('в Лысково');
			         break
			case 'Навашино': 
			        $('.geo_in').html('в Навашино');
			         break
			case 'Нижний Новгород': 
			        $('.geo_in').html('в Нижнем Новгороде');
			         break
			case 'Павлово': 
			        $('.geo_in').html('в Павлово');
			         break
			case 'Первомайск': 
			        $('.geo_in').html('в Первомайске');
			         break
			case 'Перевоз': 
			        $('.geo_in').html('в Перевозе');
			         break
			case 'Пильна': 
			        $('.geo_in').html('в Пильне');
			         break
			case 'Починки': 
			        $('.geo_in').html('в Починках');
			         break
			case 'Саров': 
			        $('.geo_in').html('в Сарове');
			         break
			case 'Сергач': 
			        $('.geo_in').html('в Сергаче');
			         break
			case 'Сеченово': 
			        $('.geo_in').html('в Сеченово');
			         break
			case 'Сосновское': 
			        $('.geo_in').html('в Сосновском');
			         break
			case 'Спасское': 
			        $('.geo_in').html('в Спасском');
			         break
			case 'Тонкино': 
			        $('.geo_in').html('в Тонкино');
			         break
			case 'Тоншаево': 
			        $('.geo_in').html('в Тоншаево');
			         break
			case 'Уразовка': 
			        $('.geo_in').html('в Уразовке');
			         break
			case 'Урень': 
			        $('.geo_in').html('в Урене');
			         break
			case 'Чкаловск': 
			        $('.geo_in').html('в Чкаловске');
			         break
			case 'Шаранга': 
			        $('.geo_in').html('в Шаранге');
			         break
			case 'Шатки': 
			        $('.geo_in').html('в Шатках');
			         break
			case 'Шахунья': 
			        $('.geo_in').html('в Шахунье');
			         break
			case 'Анциферово': 
			        $('.geo_in').html('в Анциферово');
			         break
			case 'Батецкий': 
			        $('.geo_in').html('в Батецком');
			         break
			case 'Большая Вишера': 
			        $('.geo_in').html('в Большой Вишере');
			         break
			case 'Боровичи': 
			        $('.geo_in').html('в Боровичах');
			         break
			case 'Валдай': 
			        $('.geo_in').html('в Валдае');
			         break
			case 'Волот': 
			        $('.geo_in').html('в Волоте');
			         break
			case 'Деманск': 
			        $('.geo_in').html('в Деманске');
			         break
			case 'Зарубино': 
			        $('.geo_in').html('в Зарубино');
			         break
			case 'Кресцы': 
			        $('.geo_in').html('в Кресцах');
			         break
			case 'Любытино': 
			        $('.geo_in').html('в Любытино');
			         break
			case 'Малая Вишера': 
			        $('.geo_in').html('в Малой Вишере');
			         break
			case 'Марево': 
			        $('.geo_in').html('в Марево');
			         break
			case 'Мошенское': 
			        $('.geo_in').html('в Мошенском');
			         break
			case 'Новгород': 
			        $('.geo_in').html('в Новгороде');
			         break
			case 'Окуловка': 
			        $('.geo_in').html('в Окуловке');
			         break
			case 'Парфино': 
			        $('.geo_in').html('в Парфино');
			         break
			case 'Пестово': 
			        $('.geo_in').html('в Пестово');
			         break
			case 'Поддорье': 
			        $('.geo_in').html('в Поддорье');
			         break
			case 'Сольцы': 
			        $('.geo_in').html('в Сольцах');
			         break
			case 'Старая Русса': 
			        $('.geo_in').html('в Старой Руссе');
			         break
			case 'Хвойное': 
			        $('.geo_in').html('в Хвойном');
			         break
			case 'Холм': 
			        $('.geo_in').html('в Холме');
			         break
			case 'Чудово': 
			        $('.geo_in').html('в Чудово');
			         break
			case 'Шимск': 
			        $('.geo_in').html('в Шимске');
			         break
			case 'Баган': 
			        $('.geo_in').html('в Багане');
			         break
			case 'Барабинск': 
			        $('.geo_in').html('в Барабинске');
			         break
			case 'Бердск': 
			        $('.geo_in').html('в Бердске');
			         break
			case 'Биаза': 
			        $('.geo_in').html('в Биазе');
			         break
			case 'Болотное': 
			        $('.geo_in').html('в Болотном');
			         break
			case 'Венгерово': 
			        $('.geo_in').html('в Венгерово');
			         break
			case 'Довольное': 
			        $('.geo_in').html('в Довольном');
			         break
			case 'Завьялово': 
			        $('.geo_in').html('в Завьялово');
			         break
			case 'Искитим': 
			        $('.geo_in').html('в Искитиме');
			         break
			case 'Карасук': 
			        $('.geo_in').html('в Карасуке');
			         break
			case 'Каргат': 
			        $('.geo_in').html('в Каргате');
			         break
			case 'Колывань': 
			        $('.geo_in').html('в Колывани');
			         break
			case 'Краснозерское': 
			        $('.geo_in').html('в Краснозерском');
			         break
			case 'Крутиха': 
			        $('.geo_in').html('в Крутихе');
			         break
			case 'Куйбышев': 
			        $('.geo_in').html('в Куйбышеве');
			         break
			case 'Купино': 
			        $('.geo_in').html('в Купино');
			         break
			case 'Кыштовка': 
			        $('.geo_in').html('в Кыштовке');
			         break
			case 'Маслянино': 
			        $('.geo_in').html('в Маслянино');
			         break
			case 'Михайловский': 
			        $('.geo_in').html('в Михайловском');
			         break
			case 'Мошково': 
			        $('.geo_in').html('в Мошково');
			         break
			case 'Новосибирск': 
			        $('.geo_in').html('в Новосибирске');
			         break
			case 'Ордынское': 
			        $('.geo_in').html('в Ордынском');
			         break
			case 'Северное': 
			        $('.geo_in').html('в Северном');
			         break
			case 'Сузун': 
			        $('.geo_in').html('в Сузуне');
			         break
			case 'Татарск': 
			        $('.geo_in').html('в Татарске');
			         break
			case 'Тогучин': 
			        $('.geo_in').html('в Тогучине');
			         break
			case 'Убинское': 
			        $('.geo_in').html('в Убинском');
			         break
			case 'Усть-Тарка': 
			        $('.geo_in').html('в Усть-Тарке');
			         break
			case 'Чаны': 
			        $('.geo_in').html('в Чанах');
			         break
			case 'Черепаново': 
			        $('.geo_in').html('в Черепаново');
			         break
			case 'Чистоозерное': 
			        $('.geo_in').html('в Чистоозерном');
			         break
			case 'Чулым': 
			        $('.geo_in').html('в Чулыме');
			         break
			case 'Береговой': 
			        $('.geo_in').html('в Береговом');
			         break
			case 'Большеречье': 
			        $('.geo_in').html('в Большеречье');
			         break
			case 'Большие Уки': 
			        $('.geo_in').html('в Больших Уках');
			         break
			case 'Горьковское': 
			        $('.geo_in').html('в Горьковском');
			         break
			case 'Знаменское': 
			        $('.geo_in').html('в Знаменском');
			         break
			case 'Исилькуль': 
			        $('.geo_in').html('в Исилькуле');
			         break
			case 'Калачинск': 
			        $('.geo_in').html('в Калачинске');
			         break
			case 'Колосовка': 
			        $('.geo_in').html('в Колосовке');
			         break
			case 'Кормиловка': 
			        $('.geo_in').html('в Кормиловке');
			         break
			case 'Крутинка': 
			        $('.geo_in').html('в Крутинке');
			         break
			case 'Любинский': 
			        $('.geo_in').html('в Любинском');
			         break
			case 'Марьяновка': 
			        $('.geo_in').html('в Марьяновке');
			         break
			case 'Муромцево': 
			        $('.geo_in').html('в Муромцево');
			         break
			case 'Называевск': 
			        $('.geo_in').html('в Называевске');
			         break
			case 'Нижняя Омка': 
			        $('.geo_in').html('в Нижней Омке');
			         break
			case 'Нововаршавка': 
			        $('.geo_in').html('в Нововаршавке');
			         break
			case 'Одесское': 
			        $('.geo_in').html('в Одесском');
			         break
			case 'Оконешниково': 
			        $('.geo_in').html('в Оконешниково');
			         break
			case 'Омск': 
			        $('.geo_in').html('в Омске');
			         break
			case 'Павлоградка': 
			        $('.geo_in').html('в Павлоградке');
			         break
			case 'Полтавка': 
			        $('.geo_in').html('в Полтавке');
			         break
			case 'Русская Поляна': 
			        $('.geo_in').html('в Русской Поляне');
			         break
			case 'Саргатское': 
			        $('.geo_in').html('в Саргатском');
			         break
			case 'Седельниково': 
			        $('.geo_in').html('в Седельниково');
			         break
			case 'Таврическое': 
			        $('.geo_in').html('в Таврическом');
			         break
			case 'Тара': 
			        $('.geo_in').html('в Таре');
			         break
			case 'Тевриз': 
			        $('.geo_in').html('в Тевризе');
			         break
			case 'Тюкалинск': 
			        $('.geo_in').html('в Тюкалинске');
			         break
			case 'Усть-Ишим': 
			        $('.geo_in').html('в Усть-Ишиме');
			         break
			case 'Черлак': 
			        $('.geo_in').html('в Черлаке');
			         break
			case 'Шербакуль': 
			        $('.geo_in').html('в Шербакуле');
			         break
			case 'Абдулино': 
			        $('.geo_in').html('в Абдулино');
			         break
			case 'Адамовка': 
			        $('.geo_in').html('в Адамовке');
			         break
			case 'Айдырлинский': 
			        $('.geo_in').html('в Айдырлинском');
			         break
			case 'Акбулак': 
			        $('.geo_in').html('в Акбулаке');
			         break
			case 'Аккермановка': 
			        $('.geo_in').html('в Аккермановке');
			         break
			case 'Асекеево': 
			        $('.geo_in').html('в Асекеево');
			         break
			case 'Беляевка': 
			        $('.geo_in').html('в Беляевке');
			         break
			case 'Бугуруслан': 
			        $('.geo_in').html('в Бугуруслане');
			         break
			case 'Бузулук': 
			        $('.geo_in').html('в Бузулуке');
			         break
			case 'Гай': 
			        $('.geo_in').html('в Гае');
			         break
			case 'Грачевка': 
			        $('.geo_in').html('в Грачевке');
			         break
			case 'Домбаровский': 
			        $('.geo_in').html('в Домбаровском');
			         break
			case 'Дубенский': 
			        $('.geo_in').html('в Дубенском');
			         break
			case 'Илек': 
			        $('.geo_in').html('в Илеке');
			         break
			case 'Ириклинский': 
			        $('.geo_in').html('в Ириклинском');
			         break
			case 'Кувандык': 
			        $('.geo_in').html('в Кувандыке');
			         break
			case 'Курманаевка': 
			        $('.geo_in').html('в Курманаевке');
			         break
			case 'Матвеевка': 
			        $('.geo_in').html('в Матвеевке');
			         break
			case 'Медногорск': 
			        $('.geo_in').html('в Медногорске');
			         break
			case 'Новоорск': 
			        $('.geo_in').html('в Новоорске');
			         break
			case 'Новосергиевка': 
			        $('.geo_in').html('в Новосергиевке');
			         break
			case 'Новотроицк': 
			        $('.geo_in').html('в Новотроицке');
			         break
			case 'Октябрьское': 
			        $('.geo_in').html('в Октябрьском');
			         break
			case 'Оренбург': 
			        $('.geo_in').html('в Оренбурге');
			         break
			case 'Орск': 
			        $('.geo_in').html('в Орске');
			         break
			case 'Переволоцкий': 
			        $('.geo_in').html('в Переволоцком');
			         break
			case 'Пономаревка': 
			        $('.geo_in').html('в Пономаревке');
			         break
			case 'Саракташ': 
			        $('.geo_in').html('в Саракташе');
			         break
			case 'Соль-Илецк': 
			        $('.geo_in').html('в Соль-Илецке');
			         break
			case 'Сорочинск': 
			        $('.geo_in').html('в Сорочинске');
			         break
			case 'Ташла': 
			        $('.geo_in').html('в Ташле');
			         break
			case 'Тоцкое': 
			        $('.geo_in').html('в Тоцком');
			         break
			case 'Тюльган': 
			        $('.geo_in').html('в Тюльгане');
			         break
			case 'Шарлык': 
			        $('.geo_in').html('в Шарлыке');
			         break
			case 'Энергетик': 
			        $('.geo_in').html('в Энергетике');
			         break
			case 'Ясный': 
			        $('.geo_in').html('в Ясном');
			         break
			case 'Болхов': 
			        $('.geo_in').html('в Болхове');
			         break
			case 'Верховье': 
			        $('.geo_in').html('в Верховье');
			         break
			case 'Глазуновка': 
			        $('.geo_in').html('в Глазуновке');
			         break
			case 'Дмитровск-Орловский': 
			        $('.geo_in').html('в Дмитровск-Орловском');
			         break
			case 'Долгое': 
			        $('.geo_in').html('в Долгом');
			         break
			case 'Залегощь': 
			        $('.geo_in').html('в Залегощи');
			         break
			case 'Змиевка': 
			        $('.geo_in').html('в Змиевке');
			         break
			case 'Колпны': 
			        $('.geo_in').html('в Колпнах');
			         break
			case 'Красная Заря': 
			        $('.geo_in').html('в Красной Заре');
			         break
			case 'Кромы': 
			        $('.geo_in').html('в Кромах');
			         break
			case 'Ливны': 
			        $('.geo_in').html('в Ливнах');
			         break
			case 'Малоархангельск': 
			        $('.geo_in').html('в Малоархангельске');
			         break
			case 'Мценск': 
			        $('.geo_in').html('в Мценске');
			         break
			case 'Нарышкино': 
			        $('.geo_in').html('в Нарышкино');
			         break
			case 'Новосиль': 
			        $('.geo_in').html('в Новосиле');
			         break
			case 'Орел': 
			        $('.geo_in').html('в Орле');
			         break
			case 'Покровское': 
			        $('.geo_in').html('в Покровском');
			         break
			case 'Сосково': 
			        $('.geo_in').html('в Сосково');
			         break
			case 'Тросна': 
			        $('.geo_in').html('в Тросне');
			         break
			case 'Хомутово': 
			        $('.geo_in').html('в Хомутово');
			         break
			case 'Хотынец': 
			        $('.geo_in').html('в Хотынце');
			         break
			case 'Шаблыкино': 
			        $('.geo_in').html('в Шаблыкино');
			         break
			case 'Башмаково': 
			        $('.geo_in').html('в Башмаково');
			         break
			case 'Беднодемьяновск': 
			        $('.geo_in').html('в Беднодемьяновске');
			         break
			case 'Беково': 
			        $('.geo_in').html('в Беково');
			         break
			case 'Белинский': 
			        $('.geo_in').html('в Белинском');
			         break
			case 'Бессоновка': 
			        $('.geo_in').html('в Бессоновке');
			         break
			case 'Вадинск': 
			        $('.geo_in').html('в Вадинске');
			         break
			case 'Верхозим': 
			        $('.geo_in').html('в Верхозиме');
			         break
			case 'Евлашево': 
			        $('.geo_in').html('в Евлашево');
			         break
			case 'Земетчино': 
			        $('.geo_in').html('в Земетчино');
			         break
			case 'Золотаревка': 
			        $('.geo_in').html('в Золотаревке');
			         break
			case 'Исса': 
			        $('.geo_in').html('в Иссе');
			         break
			case 'Каменка': 
			        $('.geo_in').html('в Каменке');
			         break
			case 'Колышлей': 
			        $('.geo_in').html('в Колышлее');
			         break
			case 'Кондоль': 
			        $('.geo_in').html('в Кондоле');
			         break
			case 'Кузнецк': 
			        $('.geo_in').html('в Кузнецке');
			         break
			case 'Лопатино': 
			        $('.geo_in').html('в Лопатино');
			         break
			case 'Малая Сердоба': 
			        $('.geo_in').html('в Малой Сердобе');
			         break
			case 'Мокшан': 
			        $('.geo_in').html('в Мокшане');
			         break
			case 'Наровчат': 
			        $('.geo_in').html('в Наровчате');
			         break
			case 'Неверкино': 
			        $('.geo_in').html('в Неверкино');
			         break
			case 'Нижний Ломов': 
			        $('.geo_in').html('в Нижнем Ломове');
			         break
			case 'Пачелма': 
			        $('.geo_in').html('в Пачелме');
			         break
			case 'Пенза': 
			        $('.geo_in').html('в Пензе');
			         break
			case 'Русский Камешкир': 
			        $('.geo_in').html('в Русском Камешкире');
			         break
			case 'Сердобск': 
			        $('.geo_in').html('в Сердобске');
			         break
			case 'Сура': 
			        $('.geo_in').html('в Суре');
			         break
			case 'Тамала': 
			        $('.geo_in').html('в Тамале');
			         break
			case 'Шемышейка': 
			        $('.geo_in').html('в Шемышейке');
			         break
			case 'Барда': 
			        $('.geo_in').html('в Барде');
			         break
			case 'Березники': 
			        $('.geo_in').html('в Березниках');
			         break
			case 'Большая Соснова': 
			        $('.geo_in').html('в Большой Соснове');
			         break
			case 'Верещагино': 
			        $('.geo_in').html('в Верещагино');
			         break
			case 'Гайны': 
			        $('.geo_in').html('в Гайнах');
			         break
			case 'Горнозаводск': 
			        $('.geo_in').html('в Горнозаводске');
			         break
			case 'Гремячинск': 
			        $('.geo_in').html('в Гремячинске');
			         break
			case 'Губаха': 
			        $('.geo_in').html('в Губахе');
			         break
			case 'Добрянка': 
			        $('.geo_in').html('в Добрянке');
			         break
			case 'Елово': 
			        $('.geo_in').html('в Елово');
			         break
			case 'Зюкайка': 
			        $('.geo_in').html('в Зюкайке');
			         break
			case 'Карагай': 
			        $('.geo_in').html('в Карагае');
			         break
			case 'Керчевский': 
			        $('.geo_in').html('в Керчевском');
			         break
			case 'Кизел': 
			        $('.geo_in').html('в Кизеле');
			         break
			case 'Коса': 
			        $('.geo_in').html('в Косе');
			         break
			case 'Кочево': 
			        $('.geo_in').html('в Кочево');
			         break
			case 'Красновишерск': 
			        $('.geo_in').html('в Красновишерске');
			         break
			case 'Краснокамск': 
			        $('.geo_in').html('в Краснокамске');
			         break
			case 'Кудымкар': 
			        $('.geo_in').html('в Кудымкаре');
			         break
			case 'Куеда': 
			        $('.geo_in').html('в Куеде');
			         break
			case 'Кунгур': 
			        $('.geo_in').html('в Кунгуре');
			         break
			case 'Лысьва': 
			        $('.geo_in').html('в Лысьве');
			         break
			case 'Ныроб': 
			        $('.geo_in').html('в Ныробе');
			         break
			case 'Нытва': 
			        $('.geo_in').html('в Нытве');
			         break
			case 'Орда': 
			        $('.geo_in').html('в Орде');
			         break
			case 'Оханск': 
			        $('.geo_in').html('в Оханске');
			         break
			case 'Очер': 
			        $('.geo_in').html('в Очере');
			         break
			case 'Пермь': 
			        $('.geo_in').html('в Перми');
			         break
			case 'Соликамск': 
			        $('.geo_in').html('в Соликамске');
			         break
			case 'Суксун': 
			        $('.geo_in').html('в Суксуне');
			         break
			case 'Уинское': 
			        $('.geo_in').html('в Уинском');
			         break
			case 'Усолье': 
			        $('.geo_in').html('в Усолье');
			         break
			case 'Усть-Кишерть': 
			        $('.geo_in').html('в Усть-Кишерти');
			         break
			case 'Чайковский': 
			        $('.geo_in').html('в Чайковском');
			         break
			case 'Частые': 
			        $('.geo_in').html('в Частых');
			         break
			case 'Чердынь': 
			        $('.geo_in').html('в Чердыни');
			         break
			case 'Чернореченский': 
			        $('.geo_in').html('в Чернореченском');
			         break
			case 'Чернушка': 
			        $('.geo_in').html('в Чернушке');
			         break
			case 'Чусовой': 
			        $('.geo_in').html('в Чусовом');
			         break
			case 'Юрла': 
			        $('.geo_in').html('в Юрле');
			         break
			case 'Юсьва': 
			        $('.geo_in').html('в Юсьве');
			         break
			case 'Анучино': 
			        $('.geo_in').html('в Анучино');
			         break
			case 'Арсеньев': 
			        $('.geo_in').html('в Арсеньеве');
			         break
			case 'Артем': 
			        $('.geo_in').html('в Артеме');
			         break
			case 'Большой Камень': 
			        $('.geo_in').html('в Большом Камне');
			         break
			case 'Валентин': 
			        $('.geo_in').html('в Валентине');
			         break
			case 'Владивосток': 
			        $('.geo_in').html('в Владивостоке');
			         break
			case 'Высокогорск': 
			        $('.geo_in').html('в Высокогорске');
			         break
			case 'Горные Ключи': 
			        $('.geo_in').html('в Горных Ключах');
			         break
			case 'Горный': 
			        $('.geo_in').html('в Горном');
			         break
			case 'Дальнегорск': 
			        $('.geo_in').html('в Дальнегорске');
			         break
			case 'Дальнереченск': 
			        $('.geo_in').html('в Дальнереченске');
			         break
			case 'Кавалерово': 
			        $('.geo_in').html('в Кавалерово');
			         break
			case 'Камень-Рыболов': 
			        $('.geo_in').html('в Камень-Рыболове');
			         break
			case 'Лазо': 
			        $('.geo_in').html('в Лазо');
			         break
			case 'Лесозаводск': 
			        $('.geo_in').html('в Лесозаводске');
			         break
			case 'Лучегорск': 
			        $('.geo_in').html('в Лучегорске');
			         break
			case 'Находка': 
			        $('.geo_in').html('в Находке');
			         break
			case 'Новопокровка': 
			        $('.geo_in').html('в Новопокровке');
			         break
			case 'Ольга': 
			        $('.geo_in').html('в Ольге');
			         break
			case 'Партизанск': 
			        $('.geo_in').html('в Партизанске');
			         break
			case 'Пограничный': 
			        $('.geo_in').html('в Пограничном');
			         break
			case 'Покровка': 
			        $('.geo_in').html('в Покровке');
			         break
			case 'Русский': 
			        $('.geo_in').html('в Русском');
			         break
			case 'Самарга': 
			        $('.geo_in').html('в Самарге');
			         break
			case 'Славянка': 
			        $('.geo_in').html('в Славянке');
			         break
			case 'Спасск-Дальний': 
			        $('.geo_in').html('в Спасск-Дальнем');
			         break
			case 'Терней': 
			        $('.geo_in').html('в Тернее');
			         break
			case 'Уссурийск': 
			        $('.geo_in').html('в Уссурийске');
			         break
			case 'Фокино': 
			        $('.geo_in').html('в Фокино');
			         break
			case 'Хасан': 
			        $('.geo_in').html('в Хасане');
			         break
			case 'Хороль': 
			        $('.geo_in').html('в Хороле');
			         break
			case 'Черниговка': 
			        $('.geo_in').html('в Черниговке');
			         break
			case 'Чугуевка': 
			        $('.geo_in').html('в Чугуевке');
			         break
			case 'Яковлевка': 
			        $('.geo_in').html('в Яковлевке');
			         break
			case 'Бежаницы': 
			        $('.geo_in').html('в Бежаницах');
			         break
			case 'Великие Луки': 
			        $('.geo_in').html('в Великих Луках');
			         break
			case 'Гдов': 
			        $('.geo_in').html('в Гдове');
			         break
			case 'Дедовичи': 
			        $('.geo_in').html('в Дедовичах');
			         break
			case 'Дно': 
			        $('.geo_in').html('в Дно');
			         break
			case 'Заплюсье': 
			        $('.geo_in').html('в Заплюсье');
			         break
			case 'Идрица': 
			        $('.geo_in').html('в Идрице');
			         break
			case 'Красногородское': 
			        $('.geo_in').html('в Красногородском');
			         break
			case 'Кунья': 
			        $('.geo_in').html('в Кунье');
			         break
			case 'Локня': 
			        $('.geo_in').html('в Локне');
			         break
			case 'Невель': 
			        $('.geo_in').html('в Невели');
			         break
			case 'Новоржев': 
			        $('.geo_in').html('в Новоржеве');
			         break
			case 'Новосокольники': 
			        $('.geo_in').html('в Новосокольниках');
			         break
			case 'Опочка': 
			        $('.geo_in').html('в Опочке');
			         break
			case 'Остров': 
			        $('.geo_in').html('в Острове');
			         break
			case 'Палкино': 
			        $('.geo_in').html('в Палкино');
			         break
			case 'Печоры': 
			        $('.geo_in').html('в Печорах');
			         break
			case 'Плюсса': 
			        $('.geo_in').html('в Плюссе');
			         break
			case 'Порхов': 
			        $('.geo_in').html('в Порхове');
			         break
			case 'Псков': 
			        $('.geo_in').html('в Пскове');
			         break
			case 'Пустошка': 
			        $('.geo_in').html('в Пустошке');
			         break
			case 'Пушкинские Горы': 
			        $('.geo_in').html('в Пушкинских Горах');
			         break
			case 'Пыталово': 
			        $('.geo_in').html('в Пыталово');
			         break
			case 'Себеж': 
			        $('.geo_in').html('в Себеже');
			         break
			case 'Струги-Красные': 
			        $('.geo_in').html('в Струги-Красные');
			         break
			case 'Усвяты': 
			        $('.geo_in').html('в Усвятах');
			         break
			case 'Азов': 
			        $('.geo_in').html('в Азове');
			         break
			case 'Аксай': 
			        $('.geo_in').html('в Аксае');
			         break
			case 'Алмазный': 
			        $('.geo_in').html('в Алмазном');
			         break
			case 'Аютинск': 
			        $('.geo_in').html('в Аютинске');
			         break
			case 'Багаевский': 
			        $('.geo_in').html('в Багаевском');
			         break
			case 'Батайск': 
			        $('.geo_in').html('в Батайске');
			         break
			case 'Белая Калитва': 
			        $('.geo_in').html('в Белой Калитве');
			         break
			case 'Боковская': 
			        $('.geo_in').html('в Боковской');
			         break
			case 'Большая Мартыновка': 
			        $('.geo_in').html('в Большой Мартыновке');
			         break
			case 'Вешенская': 
			        $('.geo_in').html('в Вешенской');
			         break
			case 'Волгодонск': 
			        $('.geo_in').html('в Волгодонске');
			         break
			case 'Восход': 
			        $('.geo_in').html('в Восходе');
			         break
			case 'Гигант': 
			        $('.geo_in').html('в Гиганте');
			         break
			case 'Горняцкий': 
			        $('.geo_in').html('в Горняцком');
			         break
			case 'Гуково': 
			        $('.geo_in').html('в Гуково');
			         break
			case 'Донецк': 
			        $('.geo_in').html('в Донецке');
			         break
			case 'Донской': 
			        $('.geo_in').html('в Донском');
			         break
			case 'Дубовское': 
			        $('.geo_in').html('в Дубовском');
			         break
			case 'Егорлыкская': 
			        $('.geo_in').html('в Егорлыкской');
			         break
			case 'Жирнов': 
			        $('.geo_in').html('в Жирнове');
			         break
			case 'Заветное': 
			        $('.geo_in').html('в Заветном');
			         break
			case 'Заводской': 
			        $('.geo_in').html('в Заводском');
			         break
			case 'Зверево': 
			        $('.geo_in').html('в Зверево');
			         break
			case 'Зерноград': 
			        $('.geo_in').html('в Зернограде');
			         break
			case 'Зимовники': 
			        $('.geo_in').html('в Зимовниках');
			         break
			case 'Кагальницкая': 
			        $('.geo_in').html('в Кагальницкой');
			         break
			case 'Казанская': 
			        $('.geo_in').html('в Казанской');
			         break
			case 'Каменоломни': 
			        $('.geo_in').html('в Каменоломнях');
			         break
			case 'Каменск-Шахтинский': 
			        $('.geo_in').html('в Каменск-Шахтинском');
			         break
			case 'Кашары': 
			        $('.geo_in').html('в Кашарах');
			         break
			case 'Коксовый': 
			        $('.geo_in').html('в Коксовом');
			         break
			case 'Константиновск': 
			        $('.geo_in').html('в Константиновске');
			         break
			case 'Красный Сулин': 
			        $('.geo_in').html('в Красном Сулине');
			         break
			case 'Куйбышево': 
			        $('.geo_in').html('в Куйбышево');
			         break
			case 'Матвеев Курган': 
			        $('.geo_in').html('в Матвеевом Кургане');
			         break
			case 'Мигулинская': 
			        $('.geo_in').html('в Мигулинской');
			         break
			case 'Миллерово': 
			        $('.geo_in').html('в Миллерово');
			         break
			case 'Милютинская': 
			        $('.geo_in').html('в Милютинской');
			         break
			case 'Морозовск': 
			        $('.geo_in').html('в Морозовске');
			         break
			case 'Новочеркасск': 
			        $('.geo_in').html('в Новочеркасске');
			         break
			case 'Новошахтинск': 
			        $('.geo_in').html('в Новошахтинске');
			         break
			case 'Обливская': 
			        $('.geo_in').html('в Обливской');
			         break
			case 'Орловский': 
			        $('.geo_in').html('в Орловском');
			         break
			case 'Песчанокопское': 
			        $('.geo_in').html('в Песчанокопском');
			         break
			case 'Пролетарск': 
			        $('.geo_in').html('в Пролетарске');
			         break
			case 'Ремонтное': 
			        $('.geo_in').html('в Ремонтном');
			         break
			case 'Родионово-Несветайская': 
			        $('.geo_in').html('в Родионово-Несветайской');
			         break
			case 'Ростов-на-Дону': 
			        $('.geo_in').html('в Ростове-на-Дону');
			         break
			case 'Сальск': 
			        $('.geo_in').html('в Сальске');
			         break
			case 'Семикаракорск': 
			        $('.geo_in').html('в Семикаракорске');
			         break
			case 'Таганрог': 
			        $('.geo_in').html('в Таганроге');
			         break
			case 'Тарасовский': 
			        $('.geo_in').html('в Тарасовском');
			         break
			case 'Тацинский': 
			        $('.geo_in').html('в Тацинском');
			         break
			case 'Усть-Донецкий': 
			        $('.geo_in').html('в Усть-Донецком');
			         break
			case 'Целина': 
			        $('.geo_in').html('в Целине');
			         break
			case 'Цимлянск': 
			        $('.geo_in').html('в Цимлянске');
			         break
			case 'Чалтырь': 
			        $('.geo_in').html('в Чалтыре');
			         break
			case 'Чертково': 
			        $('.geo_in').html('в Чертково');
			         break
			case 'Шахты': 
			        $('.geo_in').html('в Шахтах');
			         break
			case 'Шолоховский': 
			        $('.geo_in').html('в Шолоховском');
			         break
			case 'Александро-Невский': 
			        $('.geo_in').html('в Александро-Невском');
			         break
			case 'Гусь Железный': 
			        $('.geo_in').html('в Гусе Железном');
			         break
			case 'Елатьма': 
			        $('.geo_in').html('в Елатьме');
			         break
			case 'Ермишь': 
			        $('.geo_in').html('в Ермише');
			         break
			case 'Захарово': 
			        $('.geo_in').html('в Захарово');
			         break
			case 'Кадом': 
			        $('.geo_in').html('в Кадоме');
			         break
			case 'Касимов': 
			        $('.geo_in').html('в Касимове');
			         break
			case 'Кораблино': 
			        $('.geo_in').html('в Кораблино');
			         break
			case 'Милославское': 
			        $('.geo_in').html('в Милославском');
			         break
			case 'Михайлов': 
			        $('.geo_in').html('в Михайлове');
			         break
			case 'Пителино': 
			        $('.geo_in').html('в Пителино');
			         break
			case 'Пронск': 
			        $('.geo_in').html('в Пронске');
			         break
			case 'Путятино': 
			        $('.geo_in').html('в Путятино');
			         break
			case 'Рыбное': 
			        $('.geo_in').html('в Рыбном');
			         break
			case 'Ряжск': 
			        $('.geo_in').html('в Ряжске');
			         break
			case 'Рязань': 
			        $('.geo_in').html('в Рязани');
			         break
			case 'Сапожок': 
			        $('.geo_in').html('в Сапожке');
			         break
			case 'Сараи': 
			        $('.geo_in').html('в Сараях');
			         break
			case 'Сасово': 
			        $('.geo_in').html('в Сасово');
			         break
			case 'Скопин': 
			        $('.geo_in').html('в Скопине');
			         break
			case 'Спас-Клепики': 
			        $('.geo_in').html('в Спас-Клепиках');
			         break
			case 'Спасск-Рязанский': 
			        $('.geo_in').html('в Спасск-Рязанском');
			         break
			case 'Старожилово': 
			        $('.geo_in').html('в Старожилово');
			         break
			case 'Ухолово': 
			        $('.geo_in').html('в Ухолово');
			         break
			case 'Чучково': 
			        $('.geo_in').html('в Чучково');
			         break
			case 'Шацк': 
			        $('.geo_in').html('в Шацке');
			         break
			case 'Шилово': 
			        $('.geo_in').html('в Шилово');
			         break
			case 'Безенчук': 
			        $('.geo_in').html('в Безенчуке');
			         break
			case 'Богатое': 
			        $('.geo_in').html('в Богатом');
			         break
			case 'Богатырь': 
			        $('.geo_in').html('в Богатыре');
			         break
			case 'Большая Глущица': 
			        $('.geo_in').html('в Большой Глущице');
			         break
			case 'Большая Черниговка': 
			        $('.geo_in').html('в Большой Черниговке');
			         break
			case 'Борское': 
			        $('.geo_in').html('в Борском');
			         break
			case 'Жигулевск': 
			        $('.geo_in').html('в Жигулевске');
			         break
			case 'Зольное': 
			        $('.geo_in').html('в Зольном');
			         break
			case 'Исаклы': 
			        $('.geo_in').html('в Исаклах');
			         break
			case 'Камышла': 
			        $('.geo_in').html('в Камышле');
			         break
			case 'Кинель': 
			        $('.geo_in').html('в Кинеле');
			         break
			case 'Кинель-Черкасы': 
			        $('.geo_in').html('в Кинель-Черкасах');
			         break
			case 'Клявлино': 
			        $('.geo_in').html('в Клявлино');
			         break
			case 'Кошки': 
			        $('.geo_in').html('в Кошках');
			         break
			case 'Красноармейское': 
			        $('.geo_in').html('в Красноармейском');
			         break
			case 'Нефтегорск': 
			        $('.geo_in').html('в Нефтегорске');
			         break
			case 'Новокуйбышевск': 
			        $('.geo_in').html('в Новокуйбышевске');
			         break
			case 'Октябрьск': 
			        $('.geo_in').html('в Октябрьске');
			         break
			case 'Отрадный': 
			        $('.geo_in').html('в Отрадном');
			         break
			case 'Пестравка': 
			        $('.geo_in').html('в Пестравке');
			         break
			case 'Похвистнево': 
			        $('.geo_in').html('в Похвистнево');
			         break
			case 'Приволжье': 
			        $('.geo_in').html('в Приволжье');
			         break
			case 'Самара': 
			        $('.geo_in').html('в Самаре');
			         break
			case 'Сургут (Самарская обл.)': 
			        $('.geo_in').html('в Сургуте (Самарской обл.)');
			         break
			case 'Сызрань': 
			        $('.geo_in').html('в Сызрани');
			         break
			case 'Тольятти': 
			        $('.geo_in').html('в Тольятти');
			         break
			case 'Хворостянка': 
			        $('.geo_in').html('в Хворостянке');
			         break
			case 'Чапаевск': 
			        $('.geo_in').html('в Чапаевске');
			         break
			case 'Челно-Вершины': 
			        $('.geo_in').html('в Челно-Вершинах');
			         break
			case 'Шентала': 
			        $('.geo_in').html('в Шентале');
			         break
			case 'Шигоны': 
			        $('.geo_in').html('в Шигонах');
			         break
			case 'Александров Гай': 
			        $('.geo_in').html('в Александровом Гае');
			         break
			case 'Аркадак': 
			        $('.geo_in').html('в Аркадаке');
			         break
			case 'Аткарск': 
			        $('.geo_in').html('в Аткарске');
			         break
			case 'Базарный Карабулак': 
			        $('.geo_in').html('в Базарном Карабулаке');
			         break
			case 'Балаково': 
			        $('.geo_in').html('в Балаково');
			         break
			case 'Балашов': 
			        $('.geo_in').html('в Балашове');
			         break
			case 'Балтай': 
			        $('.geo_in').html('в Балтае');
			         break
			case 'Возрождение': 
			        $('.geo_in').html('в Возрождении');
			         break
			case 'Вольск': 
			        $('.geo_in').html('в Вольске');
			         break
			case 'Дергачи': 
			        $('.geo_in').html('в Дергачах');
			         break
			case 'Духовницкое': 
			        $('.geo_in').html('в Духовницком');
			         break
			case 'Екатериновка': 
			        $('.geo_in').html('в Екатериновке');
			         break
			case 'Ершов': 
			        $('.geo_in').html('в Ершове');
			         break
			case 'Калининск': 
			        $('.geo_in').html('в Калининске');
			         break
			case 'Каменский': 
			        $('.geo_in').html('в Каменском');
			         break
			case 'Красный Кут': 
			        $('.geo_in').html('в Красном Куте');
			         break
			case 'Лысые Горы': 
			        $('.geo_in').html('в Лысых Горах');
			         break
			case 'Маркс': 
			        $('.geo_in').html('в Марксе');
			         break
			case 'Мокроус': 
			        $('.geo_in').html('в Мокроусе');
			         break
			case 'Новоузенск': 
			        $('.geo_in').html('в Новоузенске');
			         break
			case 'Новые Бурасы': 
			        $('.geo_in').html('в Новых Бурасах');
			         break
			case 'Озинки': 
			        $('.geo_in').html('в Озинках');
			         break
			case 'Перелюб': 
			        $('.geo_in').html('в Перелюбе');
			         break
			case 'Петровск': 
			        $('.geo_in').html('в Петровске');
			         break
			case 'Питерка': 
			        $('.geo_in').html('в Питерке');
			         break
			case 'Пугачев': 
			        $('.geo_in').html('в Пугачеве');
			         break
			case 'Ровное': 
			        $('.geo_in').html('в Ровном');
			         break
			case 'Ртищево': 
			        $('.geo_in').html('в Ртищево');
			         break
			case 'Самойловка': 
			        $('.geo_in').html('в Самойловке');
			         break
			case 'Саратов': 
			        $('.geo_in').html('в Саратове');
			         break
			case 'Степное': 
			        $('.geo_in').html('в Степном');
			         break
			case 'Татищево': 
			        $('.geo_in').html('в Татищево');
			         break
			case 'Турки': 
			        $('.geo_in').html('в Турках');
			         break
			case 'Хвалынск': 
			        $('.geo_in').html('в Хвалынске');
			         break
			case 'Энгельс': 
			        $('.geo_in').html('в Энгельсе');
			         break
			case 'Абый': 
			        $('.geo_in').html('в Абые');
			         break
			case 'Алдан': 
			        $('.geo_in').html('в Алдане');
			         break
			case 'Амга': 
			        $('.geo_in').html('в Амге');
			         break
			case 'Батагай': 
			        $('.geo_in').html('в Батагае');
			         break
			case 'Бердигестях': 
			        $('.geo_in').html('в Бердигестяхе');
			         break
			case 'Беркакит': 
			        $('.geo_in').html('в Беркаките');
			         break
			case 'Бестях': 
			        $('.geo_in').html('в Бестяхе');
			         break
			case 'Борогонцы': 
			        $('.geo_in').html('в Борогонцах');
			         break
			case 'Верхневилюйск': 
			        $('.geo_in').html('в Верхневилюйске');
			         break
			case 'Верхнеколымск': 
			        $('.geo_in').html('в Верхнеколымске');
			         break
			case 'Верхоянск': 
			        $('.geo_in').html('в Верхоянске');
			         break
			case 'Вилюйск': 
			        $('.geo_in').html('в Вилюйске');
			         break
			case 'Витим': 
			        $('.geo_in').html('в Витиме');
			         break
			case 'Власово': 
			        $('.geo_in').html('в Власово');
			         break
			case 'Жиганск': 
			        $('.geo_in').html('в Жиганске');
			         break
			case 'Зырянка': 
			        $('.geo_in').html('в Зырянке');
			         break
			case 'Кангалассы': 
			        $('.geo_in').html('в Кангалассах');
			         break
			case 'Канкунский': 
			        $('.geo_in').html('в Канкунском');
			         break
			case 'Ленск': 
			        $('.geo_in').html('в Ленске');
			         break
			case 'Майя': 
			        $('.geo_in').html('в Майе');
			         break
			case 'Менкеря': 
			        $('.geo_in').html('в Менкерях');
			         break
			case 'Нерюнгри': 
			        $('.geo_in').html('в Нерюнгри');
			         break
			case 'Нычалах': 
			        $('.geo_in').html('в Нычалахе');
			         break
			case 'Нюрба': 
			        $('.geo_in').html('в Нюрбе');
			         break
			case 'Олекминск': 
			        $('.geo_in').html('в Олекминске');
			         break
			case 'Покровск': 
			        $('.geo_in').html('в Покровске');
			         break
			case 'Сангар': 
			        $('.geo_in').html('в Сангаре');
			         break
			case 'Саскылах': 
			        $('.geo_in').html('в Саскылахе');
			         break
			case 'Среднеколымск': 
			        $('.geo_in').html('в Среднеколымске');
			         break
			case 'Сунтар': 
			        $('.geo_in').html('в Сунтаре');
			         break
			case 'Тикси': 
			        $('.geo_in').html('в Тикси');
			         break
			case 'Усть-Мая': 
			        $('.geo_in').html('в Усть-Мае');
			         break
			case 'Усть-Нера': 
			        $('.geo_in').html('в Усть-Нере');
			         break
			case 'Хандыга': 
			        $('.geo_in').html('в Хандыге');
			         break
			case 'Хонуу': 
			        $('.geo_in').html('в Хонуу');
			         break
			case 'Черский': 
			        $('.geo_in').html('в Черском');
			         break
			case 'Чокурдах': 
			        $('.geo_in').html('в Чокурдахе');
			         break
			case 'Чурапча': 
			        $('.geo_in').html('в Чурапче');
			         break
			case 'Якутск': 
			        $('.geo_in').html('в Якутске');
			         break
			case 'Александровск-Сахалинский': 
			        $('.geo_in').html('в Александровске-Сахалинском');
			         break
			case 'Анбэцу': 
			        $('.geo_in').html('в Анбэцу');
			         break
			case 'Анива': 
			        $('.geo_in').html('в Аниве');
			         break
			case 'Бошняково': 
			        $('.geo_in').html('в Бошняково');
			         break
			case 'Быков': 
			        $('.geo_in').html('в Быкове');
			         break
			case 'Вахрушев': 
			        $('.geo_in').html('в Вахрушеве');
			         break
			case 'Взморье': 
			        $('.geo_in').html('в Взморье');
			         break
			case 'Гастелло': 
			        $('.geo_in').html('в Гастелло');
			         break
			case 'Долинск': 
			        $('.geo_in').html('в Долинске');
			         break
			case 'Катангли': 
			        $('.geo_in').html('в Катангли');
			         break
			case 'Корсаков': 
			        $('.geo_in').html('в Корсакове');
			         break
			case 'Курильск': 
			        $('.geo_in').html('в Курильске');
			         break
			case 'Макаров': 
			        $('.geo_in').html('в Макарове');
			         break
			case 'Невельск': 
			        $('.geo_in').html('в Невельске');
			         break
			case 'Ноглики': 
			        $('.geo_in').html('в Ногликах');
			         break
			case 'Оха': 
			        $('.geo_in').html('в Охе');
			         break
			case 'Поронайск': 
			        $('.geo_in').html('в Поронайске');
			         break
			case 'Северо-Курильск': 
			        $('.geo_in').html('в Северо-Курильске');
			         break
			case 'Смирных': 
			        $('.geo_in').html('в Смирныхе');
			         break
			case 'Томари': 
			        $('.geo_in').html('в Томари');
			         break
			case 'Тымовское': 
			        $('.geo_in').html('в Тымовском');
			         break
			case 'Углегорск': 
			        $('.geo_in').html('в Углегорске');
			         break
			case 'Холмск': 
			        $('.geo_in').html('в Холмске');
			         break
			case 'Шахтерск': 
			        $('.geo_in').html('в Шахтерске');
			         break
			case 'Южно-Курильск': 
			        $('.geo_in').html('в Южно-Курильске');
			         break
			case 'Южно-Сахалинск': 
			        $('.geo_in').html('в Южно-Сахалинске');
			         break
			case 'Алапаевск': 
			        $('.geo_in').html('в Алапаевске');
			         break
			case 'Алтынай': 
			        $('.geo_in').html('в Алтынае');
			         break
			case 'Арамиль': 
			        $('.geo_in').html('в Арамиле');
			         break
			case 'Арти': 
			        $('.geo_in').html('в Арти');
			         break
			case 'Асбест': 
			        $('.geo_in').html('в Асбесте');
			         break
			case 'Ачит': 
			        $('.geo_in').html('в Ачите');
			         break
			case 'Байкалово': 
			        $('.geo_in').html('в Байкалово');
			         break
			case 'Басьяновский': 
			        $('.geo_in').html('в Басьяновском');
			         break
			case 'Белоярский': 
			        $('.geo_in').html('в Белоярском');
			         break
			case 'Богданович': 
			        $('.geo_in').html('в Богдановиче');
			         break
			case 'Буланаш': 
			        $('.geo_in').html('в Буланаше');
			         break
			case 'Верхний Тагил': 
			        $('.geo_in').html('в Верхнем Тагиле');
			         break
			case 'Верхняя Пышма': 
			        $('.geo_in').html('в Верхней Пышме');
			         break
			case 'Верхняя Салда': 
			        $('.geo_in').html('в Верхней Салде');
			         break
			case 'Верхняя Синячиха': 
			        $('.geo_in').html('в Верхней Синячихе');
			         break
			case 'Верхняя Сысерть': 
			        $('.geo_in').html('в Верхней Сысерти');
			         break
			case 'Верхняя Тура': 
			        $('.geo_in').html('в Верхней Туре');
			         break
			case 'Верхотурье': 
			        $('.geo_in').html('в Верхотурье');
			         break
			case 'Висим': 
			        $('.geo_in').html('в Висиме');
			         break
			case 'Волчанск': 
			        $('.geo_in').html('в Волчанске');
			         break
			case 'Воронцовка': 
			        $('.geo_in').html('в Воронцовке');
			         break
			case 'Гари': 
			        $('.geo_in').html('в Гари');
			         break
			case 'Дегтярск': 
			        $('.geo_in').html('в Дегтярске');
			         break
			case 'Екатеринбург': 
			        $('.geo_in').html('в Екатеринбурге');
			         break
			case 'Ертарский': 
			        $('.geo_in').html('в Ертарском');
			         break
			case 'Заводоуспенское': 
			        $('.geo_in').html('в Заводоуспенском');
			         break
			case 'Зыряновский': 
			        $('.geo_in').html('в Зыряновском');
			         break
			case 'Зюзельский': 
			        $('.geo_in').html('в Зюзельском');
			         break
			case 'Ивдель': 
			        $('.geo_in').html('в Ивделе');
			         break
			case 'Изумруд': 
			        $('.geo_in').html('в Изумруде');
			         break
			case 'Ирбит': 
			        $('.geo_in').html('в Ирбите');
			         break
			case 'Ис': 
			        $('.geo_in').html('в Исе');
			         break
			case 'Каменск-Уральский': 
			        $('.geo_in').html('в Каменск-Уральском');
			         break
			case 'Камышлов': 
			        $('.geo_in').html('в Камышлове');
			         break
			case 'Карпинск': 
			        $('.geo_in').html('в Карпинске');
			         break
			case 'Карпунинский': 
			        $('.geo_in').html('в Карпунинском');
			         break
			case 'Качканар': 
			        $('.geo_in').html('в Качканаре');
			         break
			case 'Кировград': 
			        $('.geo_in').html('в Кировграде');
			         break
			case 'Краснотурьинск': 
			        $('.geo_in').html('в Краснотурьинске');
			         break
			case 'Красноуральск': 
			        $('.geo_in').html('в Красноуральске');
			         break
			case 'Красноуфимск': 
			        $('.geo_in').html('в Красноуфимске');
			         break
			case 'Кушва': 
			        $('.geo_in').html('в Кушве');
			         break
			case 'Лесной': 
			        $('.geo_in').html('в Лесном');
			         break
			case 'Михайловск': 
			        $('.geo_in').html('в Михайловске');
			         break
			case 'Невьянск': 
			        $('.geo_in').html('в Невьянске');
			         break
			case 'Нижние Серги': 
			        $('.geo_in').html('в Нижних Сергах');
			         break
			case 'Нижний Тагил': 
			        $('.geo_in').html('в Нижнем Тагиле');
			         break
			case 'Нижняя Салда': 
			        $('.geo_in').html('в Нижней Салде');
			         break
			case 'Нижняя Тура': 
			        $('.geo_in').html('в Нижней Туре');
			         break
			case 'Новая Ляля': 
			        $('.geo_in').html('в Новой Ляле');
			         break
			case 'Новоуральск': 
			        $('.geo_in').html('в Новоуральске');
			         break
			case 'Оус': 
			        $('.geo_in').html('в Оусе');
			         break
			case 'Первоуральск': 
			        $('.geo_in').html('в Первоуральске');
			         break
			case 'Полевской': 
			        $('.geo_in').html('в Полевском');
			         break
			case 'Пышма': 
			        $('.geo_in').html('в Пышме');
			         break
			case 'Ревда': 
			        $('.geo_in').html('в Ревде');
			         break
			case 'Реж': 
			        $('.geo_in').html('в Реже');
			         break
			case 'Свердловск': 
			        $('.geo_in').html('в Свердловске');
			         break
			case 'Североуральск': 
			        $('.geo_in').html('в Североуральске');
			         break
			case 'Серов': 
			        $('.geo_in').html('в Серове');
			         break
			case 'Сосьва': 
			        $('.geo_in').html('в Сосьве');
			         break
			case 'Среднеуральск': 
			        $('.geo_in').html('в Среднеуральске');
			         break
			case 'Сухой Лог': 
			        $('.geo_in').html('в Сухом Логе');
			         break
			case 'Сысерть': 
			        $('.geo_in').html('в Сысерти');
			         break
			case 'Таборы': 
			        $('.geo_in').html('в Таборах');
			         break
			case 'Тавда': 
			        $('.geo_in').html('в Тавде');
			         break
			case 'Талица': 
			        $('.geo_in').html('в Талице');
			         break
			case 'Тугулым': 
			        $('.geo_in').html('в Тугулыме');
			         break
			case 'Туринск': 
			        $('.geo_in').html('в Туринске');
			         break
			case 'Туринская Слобода': 
			        $('.geo_in').html('в Туринской Слободе');
			         break
			case 'Алагир': 
			        $('.geo_in').html('в Алагире');
			         break
			case 'Ардон': 
			        $('.geo_in').html('в Ардоне');
			         break
			case 'Беслан': 
			        $('.geo_in').html('в Беслане');
			         break
			case 'Бурон': 
			        $('.geo_in').html('в Буроне');
			         break
			case 'Владикавказ': 
			        $('.geo_in').html('в Владикавказе');
			         break
			case 'Дигора': 
			        $('.geo_in').html('в Дигоре');
			         break
			case 'Моздок': 
			        $('.geo_in').html('в Моздоке');
			         break
			case 'Орджоникидзе': 
			        $('.geo_in').html('в Орджоникидзе');
			         break
			case 'Чикола': 
			        $('.geo_in').html('в Чиколе');
			         break
			case 'Велиж': 
			        $('.geo_in').html('в Велиже');
			         break
			case 'Верхнеднепровский': 
			        $('.geo_in').html('в Верхнеднепровском');
			         break
			case 'Ворга': 
			        $('.geo_in').html('в Ворге');
			         break
			case 'Вязьма': 
			        $('.geo_in').html('в Вязьме');
			         break
			case 'Гагарин': 
			        $('.geo_in').html('в Гагарине');
			         break
			case 'Глинка': 
			        $('.geo_in').html('в Глинке');
			         break
			case 'Голынки': 
			        $('.geo_in').html('в Голынках');
			         break
			case 'Демидов': 
			        $('.geo_in').html('в Демидове');
			         break
			case 'Десногорск': 
			        $('.geo_in').html('в Десногорске');
			         break
			case 'Дорогобуж': 
			        $('.geo_in').html('в Дорогобуже');
			         break
			case 'Духовщина': 
			        $('.geo_in').html('в Духовщине');
			         break
			case 'Екимовичи': 
			        $('.geo_in').html('в Екимовичах');
			         break
			case 'Ельня': 
			        $('.geo_in').html('в Ельне');
			         break
			case 'Ершичи': 
			        $('.geo_in').html('в Ершичах');
			         break
			case 'Издешково': 
			        $('.geo_in').html('в Издешково');
			         break
			case 'Кардымово': 
			        $('.geo_in').html('в Кардымово');
			         break
			case 'Красный': 
			        $('.geo_in').html('в Красном');
			         break
			case 'Монастырщина': 
			        $('.geo_in').html('в Монастырщине');
			         break
			case 'Новодугино': 
			        $('.geo_in').html('в Новодугино');
			         break
			case 'Починок': 
			        $('.geo_in').html('в Починке');
			         break
			case 'Рославль': 
			        $('.geo_in').html('в Рославле');
			         break
			case 'Сафоново': 
			        $('.geo_in').html('в Сафоново');
			         break
			case 'Смоленск': 
			        $('.geo_in').html('в Смоленске');
			         break
			case 'Сычевка': 
			        $('.geo_in').html('в Сычевке');
			         break
			case 'Угра': 
			        $('.geo_in').html('в Угре');
			         break
			case 'Хиславичи': 
			        $('.geo_in').html('в Хиславичах');
			         break
			case 'Холм-Жирковский': 
			        $('.geo_in').html('в Холм-Жирковском');
			         break
			case 'Шумячи': 
			        $('.geo_in').html('в Шумячах');
			         break
			case 'Ярцево': 
			        $('.geo_in').html('в Ярцево');
			         break
			case 'Александровское': 
			        $('.geo_in').html('в Александровском');
			         break
			case 'Арзгир': 
			        $('.geo_in').html('в Арзгире');
			         break
			case 'Благодарный': 
			        $('.geo_in').html('в Благодарном');
			         break
			case 'Буденновск': 
			        $('.geo_in').html('в Буденновске');
			         break
			case 'Георгиевск': 
			        $('.geo_in').html('в Георгиевске');
			         break
			case 'Дивное': 
			        $('.geo_in').html('в Дивном');
			         break
			case 'Домбай': 
			        $('.geo_in').html('в Домбае');
			         break
			case 'Донское': 
			        $('.geo_in').html('в Донском');
			         break
			case 'Ессентуки': 
			        $('.geo_in').html('в Ессентуках');
			         break
			case 'Железноводск': 
			        $('.geo_in').html('в Железноводске');
			         break
			case 'Зеленокумск': 
			        $('.geo_in').html('в Зеленокумске');
			         break
			case 'Изобильный': 
			        $('.geo_in').html('в Изобильном');
			         break
			case 'Иноземцево': 
			        $('.geo_in').html('в Иноземцево');
			         break
			case 'Ипатово': 
			        $('.geo_in').html('в Ипатово');
			         break
			case 'Карачаевск': 
			        $('.geo_in').html('в Карачаевске');
			         break
			case 'Кисловодск': 
			        $('.geo_in').html('в Кисловодске');
			         break
			case 'Кочубеевское': 
			        $('.geo_in').html('в Кочубеевском');
			         break
			case 'Курсавка': 
			        $('.geo_in').html('в Курсавке');
			         break
			case 'Левокумское': 
			        $('.geo_in').html('в Левокумском');
			         break
			case 'Минеральные Воды': 
			        $('.geo_in').html('в Минеральных Водах');
			         break
			case 'Невинномысск': 
			        $('.geo_in').html('в Невинномысске');
			         break
			case 'Нефтекумск': 
			        $('.geo_in').html('в Нефтекумске');
			         break
			case 'Новоалександровск': 
			        $('.geo_in').html('в Новоалександровске');
			         break
			case 'Новоалександровская': 
			        $('.geo_in').html('в Новоалександровской');
			         break
			case 'Новопавловск': 
			        $('.geo_in').html('в Новопавловске');
			         break
			case 'Новоселицкое': 
			        $('.geo_in').html('в Новоселицком');
			         break
			case 'Преградная': 
			        $('.geo_in').html('в Преградной');
			         break
			case 'Пятигорск': 
			        $('.geo_in').html('в Пятигорске');
			         break
			case 'Светлоград': 
			        $('.geo_in').html('в Светлограде');
			         break
			case 'Солнечнодольск': 
			        $('.geo_in').html('в Солнечнодольске');
			         break
			case 'Ставрополь': 
			        $('.geo_in').html('в Ставрополе');
			         break
			case 'Теберда': 
			        $('.geo_in').html('в Теберде');
			         break
			case 'Усть-Джегута': 
			        $('.geo_in').html('в Усть-Джегуте');
			         break
			case 'Хабез': 
			        $('.geo_in').html('в Хабезе');
			         break
			case 'Черкесск': 
			        $('.geo_in').html('в Черкесске');
			         break
			case 'Бондари': 
			        $('.geo_in').html('в Бондарях');
			         break
			case 'Гавриловка Вторая': 
			        $('.geo_in').html('в Гавриловке Второй');
			         break
			case 'Жердевка': 
			        $('.geo_in').html('в Жердевке');
			         break
			case 'Знаменка': 
			        $('.geo_in').html('в Знаменке');
			         break
			case 'Инжавино': 
			        $('.geo_in').html('в Инжавино');
			         break
			case 'Кирсанов': 
			        $('.geo_in').html('в Кирсанове');
			         break
			case 'Котовск': 
			        $('.geo_in').html('в Котовске');
			         break
			case 'Мичуринск': 
			        $('.geo_in').html('в Мичуринске');
			         break
			case 'Мордово': 
			        $('.geo_in').html('в Мордово');
			         break
			case 'Моршанск': 
			        $('.geo_in').html('в Моршанске');
			         break
			case 'Мучкапский': 
			        $('.geo_in').html('в Мучкапском');
			         break
			case 'Петровское': 
			        $('.geo_in').html('в Петровском');
			         break
			case 'Пичаево': 
			        $('.geo_in').html('в Пичаево');
			         break
			case 'Рассказово': 
			        $('.geo_in').html('в Рассказово');
			         break
			case 'Ржакса': 
			        $('.geo_in').html('в Ржаксе');
			         break
			case 'Староюрьево': 
			        $('.geo_in').html('в Староюрьево');
			         break
			case 'Тамбов': 
			        $('.geo_in').html('в Тамбове');
			         break
			case 'Токаревка': 
			        $('.geo_in').html('в Токаревке');
			         break
			case 'Уварово': 
			        $('.geo_in').html('в Уварово');
			         break
			case 'Умет': 
			        $('.geo_in').html('в Умете');
			         break
			case 'Агрыз': 
			        $('.geo_in').html('в Агрызе');
			         break
			case 'Азнакаево': 
			        $('.geo_in').html('в Азнакаево');
			         break
			case 'Аксубаево': 
			        $('.geo_in').html('в Аксубаево');
			         break
			case 'Актюбинский': 
			        $('.geo_in').html('в Актюбинском');
			         break
			case 'Алексеевское': 
			        $('.geo_in').html('в Алексеевском');
			         break
			case 'Альметьевск': 
			        $('.geo_in').html('в Альметьевске');
			         break
			case 'Апастово': 
			        $('.geo_in').html('в Апастово');
			         break
			case 'Арск': 
			        $('.geo_in').html('в Арске');
			         break
			case 'Бавлы': 
			        $('.geo_in').html('в Бавлах');
			         break
			case 'Базарные Матаки': 
			        $('.geo_in').html('в Базарных Матаках');
			         break
			case 'Балтаси': 
			        $('.geo_in').html('в Балтаси');
			         break
			case 'Богатые Сабы': 
			        $('.geo_in').html('в Богатых Сабах');
			         break
			case 'Брежнев': 
			        $('.geo_in').html('в Брежневе');
			         break
			case 'Бугульма': 
			        $('.geo_in').html('в Бугульме');
			         break
			case 'Буинск': 
			        $('.geo_in').html('в Буинске');
			         break
			case 'Васильево': 
			        $('.geo_in').html('в Васильево');
			         break
			case 'Верхний Услон': 
			        $('.geo_in').html('в Верхнем Услоне');
			         break
			case 'Высокая Гора': 
			        $('.geo_in').html('в Высокой Горе');
			         break
			case 'Дербешкинский': 
			        $('.geo_in').html('в Дербешкинском');
			         break
			case 'Елабуга': 
			        $('.geo_in').html('в Елабуге');
			         break
			case 'Заинск': 
			        $('.geo_in').html('в Заинске');
			         break
			case 'Зеленодольск': 
			        $('.geo_in').html('в Зеленодольске');
			         break
			case 'Казань': 
			        $('.geo_in').html('в Казани');
			         break
			case 'Камское Устье': 
			        $('.geo_in').html('в Камском Устье');
			         break
			case 'Карабаш': 
			        $('.geo_in').html('в Карабаше');
			         break
			case 'Кукмод': 
			        $('.geo_in').html('в Кукмоде');
			         break
			case 'Кукмор': 
			        $('.geo_in').html('в Кукморе');
			         break
			case 'Лаишево': 
			        $('.geo_in').html('в Лаишево');
			         break
			case 'Лениногорск': 
			        $('.geo_in').html('в Лениногорске');
			         break
			case 'Мамадыш': 
			        $('.geo_in').html('в Мамадыше');
			         break
			case 'Менделеевск': 
			        $('.geo_in').html('в Менделеевске');
			         break
			case 'Мензелинск': 
			        $('.geo_in').html('в Мензелинске');
			         break
			case 'Муслюмово': 
			        $('.geo_in').html('в Муслюмово');
			         break
			case 'Набережные Челны': 
			        $('.geo_in').html('в Набережных Челнах');
			         break
			case 'Нижнекамск': 
			        $('.geo_in').html('в Нижнекамске');
			         break
			case 'Новошешминск': 
			        $('.geo_in').html('в Новошешминске');
			         break
			case 'Нурлат': 
			        $('.geo_in').html('в Нурлате');
			         break
			case 'Пестрецы': 
			        $('.geo_in').html('в Пестрецах');
			         break
			case 'Рыбная Слобода': 
			        $('.geo_in').html('в Рыбной Слободе');
			         break
			case 'Сарманово': 
			        $('.geo_in').html('в Сарманово');
			         break
			case 'Старое Дрожжаное': 
			        $('.geo_in').html('в Старом Дрожжаном');
			         break
			case 'Тетюши': 
			        $('.geo_in').html('в Тетюшах');
			         break
			case 'Чистополь': 
			        $('.geo_in').html('в Чистополе');
			         break
			case 'Андреаполь': 
			        $('.geo_in').html('в Андреаполе');
			         break
			case 'Бежецк': 
			        $('.geo_in').html('в Бежецке');
			         break
			case 'Белый': 
			        $('.geo_in').html('в Белом');
			         break
			case 'Белый Городок': 
			        $('.geo_in').html('в Белом Городке');
			         break
			case 'Березайка': 
			        $('.geo_in').html('в Березайке');
			         break
			case 'Бологое': 
			        $('.geo_in').html('в Бологом');
			         break
			case 'Васильевский Мох': 
			        $('.geo_in').html('в Васильевском Мхе');
			         break
			case 'Выползово': 
			        $('.geo_in').html('в Выползово');
			         break
			case 'Вышний Волочек': 
			        $('.geo_in').html('в Вышнем Волочке');
			         break
			case 'Жарковский': 
			        $('.geo_in').html('в Жарковском');
			         break
			case 'Западная Двина': 
			        $('.geo_in').html('в Западной Двине');
			         break
			case 'Заречье': 
			        $('.geo_in').html('в Заречье');
			         break
			case 'Зубцов': 
			        $('.geo_in').html('в Зубцове');
			         break
			case 'Изоплит': 
			        $('.geo_in').html('в Изоплите');
			         break
			case 'Калашниково': 
			        $('.geo_in').html('в Калашниково');
			         break
			case 'Калинин': 
			        $('.geo_in').html('в Калинине');
			         break
			case 'Калязин': 
			        $('.geo_in').html('в Калязине');
			         break
			case 'Кашин': 
			        $('.geo_in').html('в Кашине');
			         break
			case 'Кесова Гора': 
			        $('.geo_in').html('в Кесовой Горе');
			         break
			case 'Кимры': 
			        $('.geo_in').html('в Кимрах');
			         break
			case 'Конаково': 
			        $('.geo_in').html('в Конаково');
			         break
			case 'Красный Холм': 
			        $('.geo_in').html('в Красном Холме');
			         break
			case 'Кувшиново': 
			        $('.geo_in').html('в Кувшиново');
			         break
			case 'Лесное': 
			        $('.geo_in').html('в Лесном');
			         break
			case 'Лихославль': 
			        $('.geo_in').html('в Лихославле');
			         break
			case 'Максатиха': 
			        $('.geo_in').html('в Максатихе');
			         break
			case 'Молоково': 
			        $('.geo_in').html('в Молоково');
			         break
			case 'Нелидово': 
			        $('.geo_in').html('в Нелидово');
			         break
			case 'Оленино': 
			        $('.geo_in').html('в Оленино');
			         break
			case 'Осташков': 
			        $('.geo_in').html('в Осташкове');
			         break
			case 'Пено': 
			        $('.geo_in').html('в Пено');
			         break
			case 'Рамешки': 
			        $('.geo_in').html('в Рамешках');
			         break
			case 'Ржев': 
			        $('.geo_in').html('в Ржеве');
			         break
			case 'Сандово': 
			        $('.geo_in').html('в Сандово');
			         break
			case 'Селижарово': 
			        $('.geo_in').html('в Селижарово');
			         break
			case 'Сонково': 
			        $('.geo_in').html('в Сонково');
			         break
			case 'Спирово': 
			        $('.geo_in').html('в Спирово');
			         break
			case 'Старица': 
			        $('.geo_in').html('в Старице');
			         break
			case 'Тверь': 
			        $('.geo_in').html('в Твери');
			         break
			case 'Торжок': 
			        $('.geo_in').html('в Торжке');
			         break
			case 'Торопец': 
			        $('.geo_in').html('в Торопце');
			         break
			case 'Удомля': 
			        $('.geo_in').html('в Удомле');
			         break
			case 'Фирово': 
			        $('.geo_in').html('в Фирово');
			         break
			case 'Асино': 
			        $('.geo_in').html('в Асино');
			         break
			case 'Бакчар': 
			        $('.geo_in').html('в Бакчаре');
			         break
			case 'Батурино': 
			        $('.geo_in').html('в Батурино');
			         break
			case 'Зырянское': 
			        $('.geo_in').html('в Зырянском');
			         break
			case 'Итатка': 
			        $('.geo_in').html('в Итатке');
			         break
			case 'Каргасок': 
			        $('.geo_in').html('в Каргасоке');
			         break
			case 'Катайга': 
			        $('.geo_in').html('в Катайге');
			         break
			case 'Кожевниково': 
			        $('.geo_in').html('в Кожевниково');
			         break
			case 'Колпашево': 
			        $('.geo_in').html('в Колпашево');
			         break
			case 'Кривошеино': 
			        $('.geo_in').html('в Кривошеино');
			         break
			case 'Мельниково': 
			        $('.geo_in').html('в Мельниково');
			         break
			case 'Молчаново': 
			        $('.geo_in').html('в Молчаново');
			         break
			case 'Парабель': 
			        $('.geo_in').html('в Парабели');
			         break
			case 'Первомайское': 
			        $('.geo_in').html('в Первомайском');
			         break
			case 'Подгорное': 
			        $('.geo_in').html('в Подгорном');
			         break
			case 'Северск': 
			        $('.geo_in').html('в Северске');
			         break
			case 'Стрежевой': 
			        $('.geo_in').html('в Стрежевом');
			         break
			case 'Томск': 
			        $('.geo_in').html('в Томске');
			         break
			case 'Тымск': 
			        $('.geo_in').html('в Тымске');
			         break
			case 'Ак-Довурак': 
			        $('.geo_in').html('в Ак-Довураке');
			         break
			case 'Бай Хаак': 
			        $('.geo_in').html('в Бай Хааке');
			         break
			case 'Кызыл': 
			        $('.geo_in').html('в Кызыле');
			         break
			case 'Самагалтай': 
			        $('.geo_in').html('в Самагалтае');
			         break
			case 'Сарыг-Сеп': 
			        $('.geo_in').html('в Сарыг-Сепе');
			         break
			case 'Суть-Холь': 
			        $('.geo_in').html('в Суть-Холе');
			         break
			case 'Тоора-Хем': 
			        $('.geo_in').html('в Тоора-Хеме');
			         break
			case 'Туран': 
			        $('.geo_in').html('в Туране');
			         break
			case 'Тээли': 
			        $('.geo_in').html('в Тээли');
			         break
			case 'Хову-Аксы': 
			        $('.geo_in').html('в Хову-Аксы');
			         break
			case 'Чадан': 
			        $('.geo_in').html('в Чадане');
			         break
			case 'Шагонар': 
			        $('.geo_in').html('в Шагонаре');
			         break
			case 'Эрзин': 
			        $('.geo_in').html('в Эрзине');
			         break
			case 'Агеево': 
			        $('.geo_in').html('в Агеево');
			         break
			case 'Алексин': 
			        $('.geo_in').html('в Алексине');
			         break
			case 'Арсеньево': 
			        $('.geo_in').html('в Арсеньево');
			         break
			case 'Барсуки': 
			        $('.geo_in').html('в Барсуках');
			         break
			case 'Бегичевский': 
			        $('.geo_in').html('в Бегичевском');
			         break
			case 'Белев': 
			        $('.geo_in').html('в Белеве');
			         break
			case 'Богородицк': 
			        $('.geo_in').html('в Богородицке');
			         break
			case 'Болохово': 
			        $('.geo_in').html('в Болохово');
			         break
			case 'Велегож': 
			        $('.geo_in').html('в Велегоже');
			         break
			case 'Венев': 
			        $('.geo_in').html('в Веневе');
			         break
			case 'Волово': 
			        $('.geo_in').html('в Волово');
			         break
			case 'Горелки': 
			        $('.geo_in').html('в Горелках');
			         break
			case 'Епифань': 
			        $('.geo_in').html('в Епифани');
			         break
			case 'Ефремов': 
			        $('.geo_in').html('в Ефремове');
			         break
			case 'Заокский': 
			        $('.geo_in').html('в Заокском');
			         break
			case 'Казановка': 
			        $('.geo_in').html('в Казановке');
			         break
			case 'Кимовск': 
			        $('.geo_in').html('в Кимовске');
			         break
			case 'Киреевск': 
			        $('.geo_in').html('в Киреевске');
			         break
			case 'Куркино': 
			        $('.geo_in').html('в Куркино');
			         break
			case 'Ленинский': 
			        $('.geo_in').html('в Ленинском');
			         break
			case 'Новомосковск': 
			        $('.geo_in').html('в Новомосковске');
			         break
			case 'Одоев': 
			        $('.geo_in').html('в Одоеве');
			         break
			case 'Плавск': 
			        $('.geo_in').html('в Плавске');
			         break
			case 'Суворов': 
			        $('.geo_in').html('в Суворове');
			         break
			case 'Тула': 
			        $('.geo_in').html('в Туле');
			         break
			case 'Узловая': 
			        $('.geo_in').html('в Узловой');
			         break
			case 'Щекино': 
			        $('.geo_in').html('в Щекино');
			         break
			case 'Ясногорск': 
			        $('.geo_in').html('в Ясногорске');
			         break
			case 'Абатский': 
			        $('.geo_in').html('в Абатском');
			         break
			case 'Аксарка': 
			        $('.geo_in').html('в Аксарке');
			         break
			case 'Армизонское': 
			        $('.geo_in').html('в Армизонском');
			         break
			case 'Аромашево': 
			        $('.geo_in').html('в Аромашево');
			         break
			case 'Бердюжье': 
			        $('.geo_in').html('в Бердюжье');
			         break
			case 'Большое Сорокино': 
			        $('.geo_in').html('в Большом Сорокино');
			         break
			case 'Вагай': 
			        $('.geo_in').html('в Вагае');
			         break
			case 'Викулово': 
			        $('.geo_in').html('в Викулово');
			         break
			case 'Винзили': 
			        $('.geo_in').html('в Винзилях');
			         break
			case 'Голышманово': 
			        $('.geo_in').html('в Голышманово');
			         break
			case 'Губкинский': 
			        $('.geo_in').html('в Губкинском');
			         break
			case 'Заводопетровский': 
			        $('.geo_in').html('в Заводопетровском');
			         break
			case 'Заводоуковск': 
			        $('.geo_in').html('в Заводоуковске');
			         break
			case 'Излучинск': 
			        $('.geo_in').html('в Излучинске');
			         break
			case 'Исетское': 
			        $('.geo_in').html('в Исетском');
			         break
			case 'Ишим': 
			        $('.geo_in').html('в Ишиме');
			         break
			case 'Казанское': 
			        $('.geo_in').html('в Казанском');
			         break
			case 'Казым-Мыс': 
			        $('.geo_in').html('в Казым-Мысе');
			         break
			case 'Когалым': 
			        $('.geo_in').html('в Когалыме');
			         break
			case 'Кондинское': 
			        $('.geo_in').html('в Кондинском');
			         break
			case 'Красноселькуп': 
			        $('.geo_in').html('в Красноселькупе');
			         break
			case 'Лабытнанги': 
			        $('.geo_in').html('в Лабытнанги');
			         break
			case 'Ларьяк': 
			        $('.geo_in').html('в Ларьяке');
			         break
			case 'Мегион': 
			        $('.geo_in').html('в Мегионе');
			         break
			case 'Мужи': 
			        $('.geo_in').html('в Мужах');
			         break
			case 'Муравленко': 
			        $('.geo_in').html('в Муравленко');
			         break
			case 'Надым': 
			        $('.geo_in').html('в Надыме');
			         break
			case 'Нефтеюганск': 
			        $('.geo_in').html('в Нефтеюганске');
			         break
			case 'Нижневартовск': 
			        $('.geo_in').html('в Нижневартовске');
			         break
			case 'Нижняя Тавда': 
			        $('.geo_in').html('в Нижней Тавде');
			         break
			case 'Новый Уренгой': 
			        $('.geo_in').html('в Новом Уренгое');
			         break
			case 'Ноябрьск': 
			        $('.geo_in').html('в Ноябрьске');
			         break
			case 'Нягань': 
			        $('.geo_in').html('в Нягани');
			         break
			case 'Омутинский': 
			        $('.geo_in').html('в Омутинском');
			         break
			case 'Радужный': 
			        $('.geo_in').html('в Радужном');
			         break
			case 'Салехард': 
			        $('.geo_in').html('в Салехарде');
			         break
			case 'Сладково': 
			        $('.geo_in').html('в Сладково');
			         break
			case 'Сургут': 
			        $('.geo_in').html('в Сургуте');
			         break
			case 'Тазовский': 
			        $('.geo_in').html('в Тазовском');
			         break
			case 'Тарко-Сале': 
			        $('.geo_in').html('в Тарко-Сале');
			         break
			case 'Тобольск': 
			        $('.geo_in').html('в Тобольске');
			         break
			case 'Тюмень': 
			        $('.geo_in').html('в Тюмени');
			         break
			case 'Уват': 
			        $('.geo_in').html('в Увате');
			         break
			case 'Унъюган': 
			        $('.geo_in').html('в Унъюгане');
			         break
			case 'Упорово': 
			        $('.geo_in').html('в Упорово');
			         break
			case 'Урай': 
			        $('.geo_in').html('в Урае');
			         break
			case 'Ханты-Мансийск': 
			        $('.geo_in').html('в Ханты-Мансийске');
			         break
			case 'Юрибей': 
			        $('.geo_in').html('в Юрибее');
			         break
			case 'Ялуторовск': 
			        $('.geo_in').html('в Ялуторовске');
			         break
			case 'Яр-Сале': 
			        $('.geo_in').html('в Яр-Сале');
			         break
			case 'Ярково': 
			        $('.geo_in').html('в Ярково');
			         break
			case 'Алнаши': 
			        $('.geo_in').html('в Алнашах');
			         break
			case 'Балезино': 
			        $('.geo_in').html('в Балезино');
			         break
			case 'Вавож': 
			        $('.geo_in').html('в Вавоже');
			         break
			case 'Воткинск': 
			        $('.geo_in').html('в Воткинске');
			         break
			case 'Глазов': 
			        $('.geo_in').html('в Глазове');
			         break
			case 'Грахово': 
			        $('.geo_in').html('в Грахово');
			         break
			case 'Дебесы': 
			        $('.geo_in').html('в Дебесах');
			         break
			case 'Игра': 
			        $('.geo_in').html('в Игре');
			         break
			case 'Ижевск': 
			        $('.geo_in').html('в Ижевске');
			         break
			case 'Кама': 
			        $('.geo_in').html('в Каме');
			         break
			case 'Камбарка': 
			        $('.geo_in').html('в Камбарке');
			         break
			case 'Каракулино': 
			        $('.geo_in').html('в Каракулино');
			         break
			case 'Кез': 
			        $('.geo_in').html('в Кезе');
			         break
			case 'Кизнер': 
			        $('.geo_in').html('в Кизнере');
			         break
			case 'Киясово': 
			        $('.geo_in').html('в Киясово');
			         break
			case 'Можга': 
			        $('.geo_in').html('в Можге');
			         break
			case 'Сарапул': 
			        $('.geo_in').html('в Сарапуле');
			         break
			case 'Селты': 
			        $('.geo_in').html('в Селтах');
			         break
			case 'Сюмси': 
			        $('.geo_in').html('в Сюмси');
			         break
			case 'Ува': 
			        $('.geo_in').html('в Уве');
			         break
			case 'Устинов': 
			        $('.geo_in').html('в Устинове');
			         break
			case 'Шаркан': 
			        $('.geo_in').html('в Шаркане');
			         break
			case 'Юкаменское': 
			        $('.geo_in').html('в Юкаменском');
			         break
			case 'Якшур-Бодья': 
			        $('.geo_in').html('в Якшур-Бодье');
			         break
			case 'Яр': 
			        $('.geo_in').html('в Яре');
			         break
			case 'Базарный Сызган': 
			        $('.geo_in').html('в Базарном Сызгане');
			         break
			case 'Барыш': 
			        $('.geo_in').html('в Барыше');
			         break
			case 'Большое Нагаткино': 
			        $('.geo_in').html('в Большом Нагаткино');
			         break
			case 'Вешкайма': 
			        $('.geo_in').html('в Вешкайме');
			         break
			case 'Глотовка': 
			        $('.geo_in').html('в Глотовке');
			         break
			case 'Димитровград': 
			        $('.geo_in').html('в Димитровграде');
			         break
			case 'Игнатовка': 
			        $('.geo_in').html('в Игнатовке');
			         break
			case 'Измайлово': 
			        $('.geo_in').html('в Измайлово');
			         break
			case 'Инза': 
			        $('.geo_in').html('в Инзе');
			         break
			case 'Ишеевка': 
			        $('.geo_in').html('в Ишеевке');
			         break
			case 'Канадей': 
			        $('.geo_in').html('в Канадее');
			         break
			case 'Карсун': 
			        $('.geo_in').html('в Карсуне');
			         break
			case 'Кузоватово': 
			        $('.geo_in').html('в Кузоватово');
			         break
			case 'Майна': 
			        $('.geo_in').html('в Майне');
			         break
			case 'Новая Малыкла': 
			        $('.geo_in').html('в Новой Малыкле');
			         break
			case 'Новоспасское': 
			        $('.geo_in').html('в Новоспасском');
			         break
			case 'Павловка': 
			        $('.geo_in').html('в Павловке');
			         break
			case 'Радищево': 
			        $('.geo_in').html('в Радищево');
			         break
			case 'Сенгилей': 
			        $('.geo_in').html('в Сенгилее');
			         break
			case 'Старая Кулатка': 
			        $('.geo_in').html('в Старой Кулатке');
			         break
			case 'Старая Майна': 
			        $('.geo_in').html('в Старой Майне');
			         break
			case 'Сурское': 
			        $('.geo_in').html('в Сурском');
			         break
			case 'Тереньга': 
			        $('.geo_in').html('в Тереньге');
			         break
			case 'Ульяновск': 
			        $('.geo_in').html('в Ульяновске');
			         break
			case 'Чердаклы': 
			        $('.geo_in').html('в Чердаклах');
			         break
			case 'Дарьинское': 
			        $('.geo_in').html('в Дарьинском');
			         break
			case 'Деркул': 
			        $('.geo_in').html('в Деркуле');
			         break
			case 'Джамбейты': 
			        $('.geo_in').html('в Джамбейтах');
			         break
			case 'Джаныбек': 
			        $('.geo_in').html('в Джаныбеке');
			         break
			case 'Казталовка': 
			        $('.geo_in').html('в Казталовке');
			         break
			case 'Калмыково': 
			        $('.geo_in').html('в Калмыково');
			         break
			case 'Каратобе': 
			        $('.geo_in').html('в Каратобе');
			         break
			case 'Переметное': 
			        $('.geo_in').html('в Переметном');
			         break
			case 'Сайхин': 
			        $('.geo_in').html('в Сайхине');
			         break
			case 'Уральск': 
			        $('.geo_in').html('в Уральске');
			         break
			case 'Фурманово': 
			        $('.geo_in').html('в Фурманово');
			         break
			case 'Чапаев': 
			        $('.geo_in').html('в Чапаеве');
			         break
			case 'Амурск': 
			        $('.geo_in').html('в Амурске');
			         break
			case 'Аян': 
			        $('.geo_in').html('в Аяне');
			         break
			case 'Березовый': 
			        $('.geo_in').html('в Березовом');
			         break
			case 'Бикин': 
			        $('.geo_in').html('в Бикине');
			         break
			case 'Бира': 
			        $('.geo_in').html('в Бире');
			         break
			case 'Биракан': 
			        $('.geo_in').html('в Биракане');
			         break
			case 'Болонь': 
			        $('.geo_in').html('в Болони');
			         break
			case 'Ванино': 
			        $('.geo_in').html('в Ванино');
			         break
			case 'Волочаевка Вторая': 
			        $('.geo_in').html('в Волочаевке Второй');
			         break
			case 'Высокогорный': 
			        $('.geo_in').html('в Высокогорном');
			         break
			case 'Вяземский': 
			        $('.geo_in').html('в Вяземском');
			         break
			case 'Гурское': 
			        $('.geo_in').html('в Гурском');
			         break
			case 'Дормидонтовка': 
			        $('.geo_in').html('в Дормидонтовке');
			         break
			case 'Заветы Ильича': 
			        $('.geo_in').html('в Заветах Ильича');
			         break
			case 'Известковый': 
			        $('.geo_in').html('в Известковом');
			         break
			case 'Иннокентьевка': 
			        $('.geo_in').html('в Иннокентьевке');
			         break
			case 'Комсомольск-на-Амуре': 
			        $('.geo_in').html('в Комсомольске-на-Амуре');
			         break
			case 'Нелькан': 
			        $('.geo_in').html('в Нелькане');
			         break
			case 'Николаевск-на-Амуре': 
			        $('.geo_in').html('в Николаевске-на-Амуре');
			         break
			case 'Облучье': 
			        $('.geo_in').html('в Облучье');
			         break
			case 'Охотск': 
			        $('.geo_in').html('в Охотске');
			         break
			case 'Переяславка': 
			        $('.geo_in').html('в Переяславке');
			         break
			case 'Смидович': 
			        $('.geo_in').html('в Смидовиче');
			         break
			case 'Советская Гавань': 
			        $('.geo_in').html('в Советской Гавани');
			         break
			case 'Софийск': 
			        $('.geo_in').html('в Софийске');
			         break
			case 'Тугур': 
			        $('.geo_in').html('в Тугуре');
			         break
			case 'Хабаровск': 
			        $('.geo_in').html('в Хабаровске');
			         break
			case 'Чегдомын': 
			        $('.geo_in').html('в Чегдомыне');
			         break
			case 'Чумикан': 
			        $('.geo_in').html('в Чумикане');
			         break
			case 'Аган': 
			        $('.geo_in').html('в Агане');
			         break
			case 'Игрим': 
			        $('.geo_in').html('в Игриме');
			         break
			case 'Лангепас': 
			        $('.geo_in').html('в Лангепасе');
			         break
			case 'Лянтор': 
			        $('.geo_in').html('в Лянторе');
			         break
			case 'Покачи': 
			        $('.geo_in').html('в Покачах');
			         break
			case 'Приобье': 
			        $('.geo_in').html('в Приобье');
			         break
			case 'Пыть-Ях': 
			        $('.geo_in').html('в Пыть-Яхе');
			         break
			case 'Югорск': 
			        $('.geo_in').html('в Югорске');
			         break
			case 'Агаповка': 
			        $('.geo_in').html('в Агаповке');
			         break
			case 'Аргаяш': 
			        $('.geo_in').html('в Аргаяше');
			         break
			case 'Аша': 
			        $('.geo_in').html('в Аше');
			         break
			case 'Бакал': 
			        $('.geo_in').html('в Бакале');
			         break
			case 'Бреды': 
			        $('.geo_in').html('в Бредах');
			         break
			case 'Варна': 
			        $('.geo_in').html('в Варне');
			         break
			case 'Верхнеуральск': 
			        $('.geo_in').html('в Верхнеуральске');
			         break
			case 'Верхний Уфалей': 
			        $('.geo_in').html('в Верхнем Уфалее');
			         break
			case 'Еманжелинск': 
			        $('.geo_in').html('в Еманжелинске');
			         break
			case 'Златоуст': 
			        $('.geo_in').html('в Златоусте');
			         break
			case 'Карталы': 
			        $('.geo_in').html('в Карталах');
			         break
			case 'Касли': 
			        $('.geo_in').html('в Каслах');
			         break
			case 'Катав-Ивановск': 
			        $('.geo_in').html('в Катав-Ивановске');
			         break
			case 'Копейск': 
			        $('.geo_in').html('в Копейске');
			         break
			case 'Коркино': 
			        $('.geo_in').html('в Коркино');
			         break
			case 'Кунашак': 
			        $('.geo_in').html('в Кунашаке');
			         break
			case 'Куса': 
			        $('.geo_in').html('в Кусе');
			         break
			case 'Кыштым': 
			        $('.geo_in').html('в Кыштыме');
			         break
			case 'Магнитогорск': 
			        $('.geo_in').html('в Магнитогорске');
			         break
			case 'Миасс': 
			        $('.geo_in').html('в Миассе');
			         break
			case 'Пласт': 
			        $('.geo_in').html('в Пласте');
			         break
			case 'Сатка': 
			        $('.geo_in').html('в Сатке');
			         break
			case 'Сим': 
			        $('.geo_in').html('в Симе');
			         break
			case 'Снежинск': 
			        $('.geo_in').html('в Снежинске');
			         break
			case 'Трехгорный': 
			        $('.geo_in').html('в Трехгорном');
			         break
			case 'Увельский': 
			        $('.geo_in').html('в Увельском');
			         break
			case 'Уйское': 
			        $('.geo_in').html('в Уйском');
			         break
			case 'Усть-Катав': 
			        $('.geo_in').html('в Усть-Катаве');
			         break
			case 'Фершампенуаз': 
			        $('.geo_in').html('в Фершампенуазе');
			         break
			case 'Чебаркуль': 
			        $('.geo_in').html('в Чебаркуле');
			         break
			case 'Челябинск': 
			        $('.geo_in').html('в Челябинске');
			         break
			case 'Чесма': 
			        $('.geo_in').html('в Чесме');
			         break
			case 'Южно-Уральск': 
			        $('.geo_in').html('в Южно-Уральске');
			         break
			case 'Юрюзань': 
			        $('.geo_in').html('в Юрюзани');
			         break
			case 'Аргун': 
			        $('.geo_in').html('в Аргуне');
			         break
			case 'Грозный': 
			        $('.geo_in').html('в Грозном');
			         break
			case 'Гудермез': 
			        $('.geo_in').html('в Гудермезе');
			         break
			case 'Малгобек': 
			        $('.geo_in').html('в Малгобеке');
			         break
			case 'Назрань': 
			        $('.geo_in').html('в Назрани');
			         break
			case 'Наурская': 
			        $('.geo_in').html('в Наурской');
			         break
			case 'Ножай-Юрт': 
			        $('.geo_in').html('в Ножай-Юрте');
			         break
			case 'Орджоникидзевская': 
			        $('.geo_in').html('в Орджоникидзевской');
			         break
			case 'Урус-Мартан': 
			        $('.geo_in').html('в Урус-Мартане');
			         break
			case 'Шали': 
			        $('.geo_in').html('в Шали');
			         break
			case 'Аксеново-Зиловское': 
			        $('.geo_in').html('в Аксеново-Зиловском');
			         break
			case 'Акша': 
			        $('.geo_in').html('в Акше');
			         break
			case 'Александровский Завод': 
			        $('.geo_in').html('в Александровском Заводе');
			         break
			case 'Амазар': 
			        $('.geo_in').html('в Амазаре');
			         break
			case 'Арбагар': 
			        $('.geo_in').html('в Арбагаре');
			         break
			case 'Атамановка': 
			        $('.geo_in').html('в Атамановке');
			         break
			case 'Балей': 
			        $('.geo_in').html('в Балее');
			         break
			case 'Борзя': 
			        $('.geo_in').html('в Борзе');
			         break
			case 'Букачача': 
			        $('.geo_in').html('в Букачаче');
			         break
			case 'Газимурский Завод': 
			        $('.geo_in').html('в Газимурском Заводе');
			         break
			case 'Давенда': 
			        $('.geo_in').html('в Давенде');
			         break
			case 'Дарасун': 
			        $('.geo_in').html('в Дарасуне');
			         break
			case 'Дровяная': 
			        $('.geo_in').html('в Дровяной');
			         break
			case 'Дульдурга': 
			        $('.geo_in').html('в Дульдурге');
			         break
			case 'Жиндо': 
			        $('.geo_in').html('в Жиндо');
			         break
			case 'Забайкальск': 
			        $('.geo_in').html('в Забайкальске');
			         break
			case 'Итака': 
			        $('.geo_in').html('в Итаке');
			         break
			case 'Калга': 
			        $('.geo_in').html('в Калге');
			         break
			case 'Карымское': 
			        $('.geo_in').html('в Карымском');
			         break
			case 'Кличка': 
			        $('.geo_in').html('в Кличке');
			         break
			case 'Ключевский': 
			        $('.geo_in').html('в Ключевском');
			         break
			case 'Кокуй': 
			        $('.geo_in').html('в Кокуе');
			         break
			case 'Краснокаменск': 
			        $('.geo_in').html('в Краснокаменске');
			         break
			case 'Красный Чикой': 
			        $('.geo_in').html('в Красном Чикое');
			         break
			case 'Кыра': 
			        $('.geo_in').html('в Кыре');
			         break
			case 'Моготуй': 
			        $('.geo_in').html('в Моготуе');
			         break
			case 'Могоча': 
			        $('.geo_in').html('в Могоче');
			         break
			case 'Нерчинск': 
			        $('.geo_in').html('в Нерчинске');
			         break
			case 'Нерчинский Завод': 
			        $('.geo_in').html('в Нерчинском Заводе');
			         break
			case 'Нижний Часучей': 
			        $('.geo_in').html('в Нижнем Часучее');
			         break
			case 'Оловянная': 
			        $('.geo_in').html('в Оловянной');
			         break
			case 'Петровск-Забайкальский': 
			        $('.geo_in').html('в Петровск-Забайкальском');
			         break
			case 'Приаргунск': 
			        $('.geo_in').html('в Приаргунске');
			         break
			case 'Сретенск': 
			        $('.geo_in').html('в Сретенске');
			         break
			case 'Тупик': 
			        $('.geo_in').html('в Тупике');
			         break
			case 'Улеты': 
			        $('.geo_in').html('в Улетах');
			         break
			case 'Хилок': 
			        $('.geo_in').html('в Хилоке');
			         break
			case 'Чара': 
			        $('.geo_in').html('в Чаре');
			         break
			case 'Чернышевск': 
			        $('.geo_in').html('в Чернышевске');
			         break
			case 'Чита': 
			        $('.geo_in').html('в Чите');
			         break
			case 'Шелопугино': 
			        $('.geo_in').html('в Шелопугино');
			         break
			case 'Шилка': 
			        $('.geo_in').html('в Шилке');
			         break
			case 'Алатырь': 
			        $('.geo_in').html('в Алатыре');
			         break
			case 'Аликово': 
			        $('.geo_in').html('в Аликово');
			         break
			case 'Батырева': 
			        $('.geo_in').html('в Батыреве');
			         break
			case 'Вурнары': 
			        $('.geo_in').html('в Вурнарах');
			         break
			case 'Ибреси': 
			        $('.geo_in').html('в Ибреси');
			         break
			case 'Канаш': 
			        $('.geo_in').html('в Канаше');
			         break
			case 'Киря': 
			        $('.geo_in').html('в Кири');
			         break
			case 'Комсомольское': 
			        $('.geo_in').html('в Комсомольском');
			         break
			case 'Красные Четаи': 
			        $('.geo_in').html('в Красных Четаях');
			         break
			case 'Кугеси': 
			        $('.geo_in').html('в Кугеси');
			         break
			case 'Мариинский Посад': 
			        $('.geo_in').html('в Мариинском Посаде');
			         break
			case 'Моргауши': 
			        $('.geo_in').html('в Моргаушах');
			         break
			case 'Новочебоксарск': 
			        $('.geo_in').html('в Новочебоксарске');
			         break
			case 'Порецкое': 
			        $('.geo_in').html('в Порецком');
			         break
			case 'Урмары': 
			        $('.geo_in').html('в Урмарах');
			         break
			case 'Цивильск': 
			        $('.geo_in').html('в Цивильске');
			         break
			case 'Чебоксары': 
			        $('.geo_in').html('в Чебоксарах');
			         break
			case 'Шемурша': 
			        $('.geo_in').html('в Шемурше');
			         break
			case 'Шумерля': 
			        $('.geo_in').html('в Шумерле');
			         break
			case 'Ядрин': 
			        $('.geo_in').html('в Ядрине');
			         break
			case 'Яльчики': 
			        $('.geo_in').html('в Яльчиках');
			         break
			case 'Янтиково': 
			        $('.geo_in').html('в Янтиково');
			         break
			case 'Пуровск': 
			        $('.geo_in').html('в Пуровске');
			         break
			case 'Тарко': 
			        $('.geo_in').html('в Тарко');
			         break
			case 'Андропов': 
			        $('.geo_in').html('в Андропове');
			         break
			case 'Берендеево': 
			        $('.geo_in').html('в Берендеево');
			         break
			case 'Большое Село': 
			        $('.geo_in').html('в Большом Селе');
			         break
			case 'Борисоглебский': 
			        $('.geo_in').html('в Борисоглебском');
			         break
			case 'Брейтово': 
			        $('.geo_in').html('в Брейтово');
			         break
			case 'Бурмакино': 
			        $('.geo_in').html('в Бурмакино');
			         break
			case 'Варегово': 
			        $('.geo_in').html('в Варегово');
			         break
			case 'Волга': 
			        $('.geo_in').html('в Волге');
			         break
			case 'Гаврилов Ям': 
			        $('.geo_in').html('в Гавриловом Яме');
			         break
			case 'Данилов': 
			        $('.geo_in').html('в Данилове');
			         break
			case 'Любим': 
			        $('.geo_in').html('в Любиме');
			         break
			case 'Мышкино': 
			        $('.geo_in').html('в Мышкино');
			         break
			case 'Некрасовское': 
			        $('.geo_in').html('в Некрасовском');
			         break
			case 'Новый Некоуз': 
			        $('.geo_in').html('в Новом Некоузе');
			         break
			case 'Переславль-Залесский': 
			        $('.geo_in').html('в Переславле-Залесском');
			         break
			case 'Пошехонье-Володарск': 
			        $('.geo_in').html('в Пошехонье-Володарске');
			         break
			case 'Ростов': 
			        $('.geo_in').html('в Ростове');
			         break
			case 'Рыбинск': 
			        $('.geo_in').html('в Рыбинске');
			         break
			case 'Тутаев': 
			        $('.geo_in').html('в Тутаеве');
			         break
			case 'Углич': 
			        $('.geo_in').html('в Угличе');
			         break
			case 'Ярославль': 
			        $('.geo_in').html('в Ярославле');
			         break

		  default:
		  	$('.geo_in').html('в Москве');
		    
		}
	}


	