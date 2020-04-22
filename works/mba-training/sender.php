<?php

$subject = "Сообщение с сайта Top Trainers"; //Subject:
$from_name = "Заявка"; //From:
$from_email = "mbatraining@yandex.ru"; //From:
$tosend = "mbatraining@yandex.ru,molokanov-school@mail.ru"; //To:


if(!isset($_POST['act'])) {
	exit();
}
switch($_POST['act']) {
	case 'sender':
		if(empty($_POST['phone'])) {
			exit();
		}
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$city = $_POST['city'];
		$formname = $_POST['formname'];
		$formhead = $_POST['formhead'];
		$calc = $_POST['calc'];
		$utms = $_POST['utms'];

		$utms = htmlspecialchars_decode($_POST['utms']);
		$msg  = "<table border='1' cellpadding='10'><th colspan='2'><strong>".$subject."</strong></th>\r\n";
		$msg .= "<tr><td><strong>Из какой формы:</strong></td><td>".$formname."</td></tr>\r\n";
		$msg .= "<tr><td><strong>Заголовок формы:</strong></td><td>".$formhead."</td></tr>\r\n";
		$msg .= "<tr><td><strong>Телефон:</strong></td><td>".$phone."</td></tr>\r\n";
		$msg .= "<tr><td><strong>E-mail:</strong></td><td>".$email."</td></tr>\r\n";
		$msg .= "<tr><td><strong>Калькулятор:</strong></td><td>".$calc."</td></tr>\r\n";
		$msg .= "<tr><td><strong>Город:</strong></td><td>".$city."</td></tr>\r\n";
		$msg .= "<tr><td><strong>UTM-метки</strong></td><td>".$utms."</td></tr></table>\r\n";


		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <{$from_email}>\r\n";

		//SMS
	    $from_url_sms = "Заявка с тренерского";
	    $from_url_sms = urlencode($from_url_sms);
	    $to_url_sms = "Благодарим за обращение! В ближайшее время Вам перезвонит наш специалист. С уважением, TOP TRAINERS FOR T&D";
	    $to_url_sms = urlencode($to_url_sms);
 		function cl_phone($number) {
			$number = urlencode($number);
			return $number;
			}
		function clear_phone($tonamber) {
			$tonamber = str_replace("(", "", $tonamber);
			$tonamber = str_replace(")", "", $tonamber);
			$tonamber = str_replace("-", "", $tonamber);
			$tonamber = str_replace(" ", "", $tonamber);
			return $tonamber;
			}
		$body=file_get_contents('http://sms.ru/sms/send?api_id=95169F01-0FF6-A547-A47A-764D8554AC53&to=79688413344&text='.$from_url_sms.'+'.cl_phone($phone));
		$body=file_get_contents('http://sms.ru/sms/send?api_id=95169F01-0FF6-A547-A47A-764D8554AC53&to='.clear_phone($phone).'&text='.$to_url_sms);

		if(mail($tosend, "=?UTF-8?B?".base64_encode($subject)."?=", $msg, $headers)) {
			echo json_encode(array('result' => 'ok'));
		
		} else {
			echo json_encode(array('result' => 'fail'));
		}
		
	break;
	default: exit();

}
?>