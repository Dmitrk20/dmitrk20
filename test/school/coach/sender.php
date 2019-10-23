<?php
$tosend = "molokanov-school.ru@yandex.ru,molokanov-school@mail.ru"; //To:
$subject = "Сообщение с сайта ШБТРМС"; //Subject:
$from_name = "Заявка"; //From:
$from_email = "email@email.com"; //From:

////NO EDIT
if(!isset($_POST['act'])) {
	exit();
}
switch($_POST['act']) {
	case 'sender':
		if(empty($_POST['phone'])) {
			exit();
		}
		$phone = $_POST['phone'];
		$formname = $_POST['formname'];
		$email = $_POST['email'];
		$city = $_POST['city'];
		$kamp = $_POST['kamp'];
		$key = $_POST['key'];
		$source = $_POST['source'];

		$utms = htmlspecialchars_decode($_POST['utms']);
		$msg  = "<p><strong>".$subject."</strong></p>\r\n";
		$msg .= "<p><strong>Из какой формы:</strong> ".$formname."</p>\r\n";
		$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
		if ($email != '-') {
			$msg .= "<p><strong>E-mail:</strong> ".$email."</p>\r\n";
		}
		$msg .= "<p><strong>Город:</strong> ".$city."</p>\r\n";
		$msg .= "<p><strong>UTM-метки</strong><br> ".$utms."</p>\r\n";

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <".$from_email.">\r\n";

/*
		$from_url_sms = "leadconvert";
 		function cl_phone($number) {
			//$number = str_replace("+", "", $number);
			$number = str_replace("(", "", $number);
			$number = str_replace(")", "", $number);
			$number = str_replace("-", "", $number);
			$number = str_replace(" ", "", $number);
			return $number;
			}
		$body=file_get_contents('http://sms.ru/sms/send?api_id=e9a7266b-5945-1324-ed2f-b92768f66987&to=79606809006&text='.$from_url_sms.'+'.cl_phone($phone));//.'Тел.:'.$phone);
		
*/

	    /*SMS*/
	    $from_url_sms = "Заявка с сайта";
	    $from_url_sms = urlencode($from_url_sms);
	    $to_url_sms = "Благодарим за обращение! В ближайшее время Вам перезвонит наш специалист. С уважением, Школа бизнес-тренеров Молоканова и Сикирина molokanov-school.ru";
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


//Google Таблицы
		$name = urlencode($name);
		$phone = urlencode($phone); 
		$formname = urlencode($formname); 
		$city = urlencode($city); 
		$doorname = urlencode($doorname); 
		$fabr = urlencode($fabr); 
		$askarea = urlencode($askarea); 
		$email = urlencode($email); 
		$pcard = urlencode($pcard); 
		$utms = urlencode($utms); 
		$kamp = urlencode($kamp); 
		$key = urlencode($key); 
		$source = urlencode($source); 

		$reft ='p1='.$name;
		$reft .='&p2='.$phone;
		$reft .='&p3='.$formname;
		$reft .='&p4='.$city;
		$reft .='&p5='.$doorname;
		$reft .='&p6='.$fabr;
		$reft .='&p7='.$askarea;
		$reft .='&p8='.$email;
		$reft .='&p9='.$pcard;
		$reft .='&p10='.$key;
		$reft .='&p11='.$kamp;
		$reft .='&p12='."-";
		$reft .='&p13='.$source;

		$link = "https://script.google.com/macros/s/AKfycbzM2Ny8YaMePrU518DKtwPIkaa_3cIOPtCTwcUtLqG6UYo4yLA/exec?".$reft;
		file_get_contents($link);


		if(mail($tosend, "=?UTF-8?B?".base64_encode($subject)."?=", $msg, $headers)) {
			echo json_encode(array('result' => 'ok'));
		} else {
			echo json_encode(array('result' => 'fail'));
		}

	break;
	default: exit();


}
?>