// ВЫРАВНИВАНИЕ СТЕН
// Стоимость работ: грунтовка, профиль, выравнивание
var wprice_room_grunt = 25, wprice_room_profil = 80, wprice_room_alignment = 400;
// Стоимость материалов: грунтовка, профиль, штукатурка
var price_room_grunt = 59, price_room_profil = 46, price_room_alignment = 198;

// ПОКРЫТИЕ СТЕН
// Стоимость работ
var wprice_wall_covering = [['Оклейка стен флизилиновыми обоями','Оклейка обоев с последующей окраской','Окрашивание стен краскопультом по RAL','Нанесение декоративной штукатурки'],[230, 350, 280, 580]];
	// малярные работы: без покраски, с покраской
var wprice_painting = [240,380];
// Стоимость материалов: краска для стен Tikkurila, декоративная штукатурка
var price_paint = 270, price_enetian_plaster = 490;
	// малярные работы: без покраски, с покраской
var price_painting = [140, 280];

// Установка радиатора
var wprice_radiator = 2000;

// ВЫРАВНИВАНИЕ ПОЛА
// Стоимость работ: обеспыливание пола, выравнивание
var wprice_room_dedusting = 20, wprice_room_floors_alignment = 350;
// Стоимость материалов: финишный ровнитель
var price_floor_alignment = 278;

// ПОКРЫТИЕ ПОЛА
// Стоимость работ
var wprice_room_flooring = [['Настил паркетной доски - Прямая раскладка','Настил ламинированной доски по прямой','Настил штучного художественного паркета','Облицовка керамической плиткой (не диагональ)'],[360,250,1300,1000]];
// Стоимость материалов: клей плиточный 
var price_glue = 133;
// Плинтус
var wprice_room_plinth = [['Установка плинтуса деревянного (МДФ)','Установка полиуретанового плинтуса с покраской'],[200,350]];

// ПОТОЛОК
// Стоимость работ
var wprice_room_roof = [['Монтаж натяжного потолка Eco','Малярные работы - шпаклевание, шлифовка, грунтование, покраска','Устройство подвесного потолка на каркасе 1-уровень гкл','Устройство потолка по дизайн-проекту','Устройство двухуровневого потолка гкл'],[380,450,600,950,620]];
// Монтаж галтелей
var wprice_room_fillets = 300;
// Стоимость материалов: Материал ЭКО для потолка, Шпаклевка LR+ и краска Delux, Профиль для каркаса и гипсокартон, Профиль и гипсокартон, ГКЛ+каркас+натяжка
var price_room_roof = [270,310,350,700,580];

// ПОКРЫТИЕ СТЕН (КУХНЯ)
// Стоимость работ
var wprice_kitchen_wall_covering = [['Оклейка стен флизилиновыми обоями','Оклейка обоев с последующей окраской','Окрашивание стен краскопультом по RAL','Нанесение декоративной штукатурки'],[230, 350, 280, 580]];
// Фартук из кафеля: Работа, Материалы
var wprice_kitchen_apron = 10000, price_glue_apron = 740;

// ПОТОЛОК (КУХНЯ)
// Стоимость материалов: Материал ПВХ для потолка, Шпаклевка LR+ и краска Delux, Профиль для каркаса и гипсокартон, Профиль и гипсокартон, ГКЛ+каркас+натяжка
var price_kitchen_roof = [270,310,350,700,580];

// ВЫРАВНИВАНИЕ СТЕН (КОРИДОР)
// Стоимость работ, Стоимость материалов
var wprice_corridor_alignment = 460, price_corridor_alignment = 240;

// ПОКРЫТИЕ СТЕН (КОРИДОР)
// Стоимость работ
var wprice_corridor_wall_covering = [['Оклейка стен флизилиновыми обоями','Оклейка обоев с последующей окраской','Окрашивание стен краскопультом по RAL','Нанесение декоративной штукатурки'],[230, 350, 280, 580]];

// СТЕНЫ (САНУЗЕЛ)
// Стоимость работ: Выравнивание стен, облицовка кафельной плиткой, Затирка швов
var wprice_bathroom_alignment = 480, wprice_bathroom_wall_covering = 1000, wprice_bathroom_grouting = 100;
// Стоимость материалов: Выравнивание стен, облицовка плиткой
var price_bathroom_alignment = 270, price_bathroom_wall_covering = 380;

// ПОЛ (САНУЗЕЛ)
// Стоимость работ: Теплый пол, Покрытие пола
var wprice_bathroom_warm_floor = 750, wprice_bathroom_flooring = [['Облицовка пола керамической плиткой (прямая раскладка)','Устройство наливного 3D пола с рисунком'],[1000,4500]];
// Стоимость материалов: Теплый пол
var price_bathroom_warm_floor = 5000;

// ПОТОЛОК (САНУЗЕЛ)
// Стоимость работ
var wprice_bathroom_roof = [['Монтаж натяжного потолка Eco','Монтаж сборно-реечного потолка','Устройство подвесного потолка на каркасе 1-уровень гкл'],[560,700,970]];
// Стоимость материалов: Натяжной потолок, Реечный потолок, Гипсокартон
var price_bathroom_roof = [380,950,670];

// ВОДОПРОВОД И КАНАЛИЗАЦИЯ
// Стоимость работ
var wprice_bathroom_water_system = [['Коллекторная разводка труб холодного и горячего водоснабжения','Тройниковая разводка гвс, хвс и канализации'],[4300,2800]];
	// Замена полотенцесушителя
var wprice_bathroom_towel_dryer = 3000;
var wprice_toilet = [['Монтаж классического унитаза с бочком','Монтаж инсталляции на раме (подвесной унитаз)'],[2500,5000]];
var wprice_bath = [['Установка ванной стандарной (акриловая, стальная, чугунная) с обвязкой (150х65, 170х70, 180х75)','Сборка, монтаж и подключение душевой кабины (80х80, 90х90, 120х90)','Сборка, монтаж, подключение и пусконаладка ванной с гидромассажем'],[2500,5000,6500]];
// Стоимость материалов
var price_bathroom_mat = 17380;

// ЭЛЕКТРОМОНТАЖ
// Стоимость работ
var wprice_electrics = [['Новая электроразводка от щита по проекту + слаботочка (TV, интернет)','Частичная замена и подключение к имеющим точкам потребления'],[1170,680]];
// Стоимость материалов: Разводка электропроводки от щитка, Частичная замена и подключение
var price_electrics = [590, 300];

// ДОПОЛНИТЕЛЬНЫЕ РАБОТЫ
// Балкон под ключ, Установка дверей, Вывоз мусора
var wprice_balcony = 5500, wprice_door_installation = 2800, wprice_cleaning = 180;
// Дизайн: Планировочное решение, Чертежи проекта, Полный дизайн
var wprice_design = [500,1500,100];
// Демонтаж
var wprice_demontazh = 550;