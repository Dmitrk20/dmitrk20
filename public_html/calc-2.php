<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$plosh = $_POST['user_plosh'];
$parametri = $_POST['parametri'];
$checkbox1 = $_POST['checkbox1'];
$checkbox2 = $_POST['checkbox2'];
$city = $_POST['city'];
$contact1 = $_POST['contact1'];
$contact2 = $_POST['contact2'];
$contact3 = $_POST['contact3'];
$contact4 = $_POST['contact4'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lidmag-avrora@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'dS7-cTq-6Md-FJR'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('lidmag-avrora@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('ventsg-spb@yandex.ru');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с VSG';
$mail->Body    = '' . 'Имя: ' .$name. '<br>Телефон: ' .$phone. '<br>E-mail: ' .$email. '<br>Площадь пола (м2): ' .$plosh. '<br>Параметры: ' .$parametri. '<br>Дымоудаление: ' .$checkbox1. '<br>Кондиционирование: ' .$checkbox2. '<br>Расположение: ' .$city. '<br>Куда звонить: ' .$contact1. ' ' .$contact2. ' ' .$contact3. ' ' .$contact4;
$mail->AltBody = '';


$comments='Параметры: ' .$parametri. "\r\nДымоудаление: " .$checkbox1. "\r\nКондиционирование: " .$checkbox2. "\r\nРасположение: " .$city. "\r\nКуда звонить: " .$contact1. ' ' .$contact2. ' ' .$contact3. ' ' .$contact4;
include("amocrm_api.php");


if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you-2.html');
}


/*
$roistatData = array(
    
    // ЭТО ВСЕ РАБОТАЕТ и отрпаляется в сделки
    
    'title'   => 'Заявка с сайта',
    'name'    => $_POST['user_name'],
    'phone'   => $_POST['user_phone'],
	'email'   => $_POST['user_email'],
    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
    'key'     => 'MjY5MjY3OjE0MzM2NjoxMzg0NjYwMDQxN2E4MmE0YjkwMzRlNDk2MWIxNDc0ZQ==', // Замените SECRET_KEY на секретный ключ из пункта меню Настройки -> Интеграция со сделками в нижней части экрана и строчке Ключ для интеграций
	'fields'  => array(
	"pipeline_id" => 2158699,
	),
  //  'status_id' => 2158699, // Создавать лид с определенным статусом в определенной воронке. Указывать необходимо ID статуса.
   


//    'is_need_callback' => '0', // Для автоматического использования обратного звонка при отправке контакта и сделки нужно поменять 0 на 1
    
    //'fields'  => array(
    // Массив дополнительных полей, если нужны, или просто пустой массив. Более подробно про работу доп. полей можно посмотреть в видео в начале статьи
    // Примеры использования:
    //    "price" => 123, // Поле бюджет в amoCRM
    //    "responsible_user_id" => 3, // Ответственный по сделке
    //    "1276733" => "Текст", // Заполнение доп. поля с ID 1276733
    
    // Подробную информацию о наименовании полей и получить список доп. полей вы можете в документации amoCRM: https://developers.amocrm.ru/rest_api/#lead
    // Более подробную информацию по работе с дополнительными полями в amoCRM, вы можете получить у нашей службы поддержки
    //    "charset" => "Windows-1251", // Сервер преобразует значения полей из указанной кодировки в UTF-8
    //    "tags" => "Тег1, Тег2", // Название тегов через запятую
    //),
);
  
file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));
*/

?>
