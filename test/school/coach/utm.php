<?php
//utm
$c_url = explode("?", $_SERVER['REQUEST_URI']);
$q_url = (isset($c_url[1])) ? $c_url[1] : "";

$utms = "";
$d_labels = "";
//direct data
$dtype = array('search' => 'поисковая площадка', 'context' => 'тематическая');
$dadded = array('yes' => 'показ по одной из дополнительных фраз', 'no' => 'показ по одной из исходных фраз');
$dblock = array('premium' => 'спецразмещение', 'other' => 'блок внизу', 'none' => 'блок не на поиске Яндекса');

if(!empty($q_url)) {
	$q_p = explode("&", $q_url);
	foreach($q_p as $p) {
		$k_v = explode("=", $p);
		if($k_v[0] == "utm_source") { $utm['utm_source'] = $k_v[1]; }
		if($k_v[0] == "utm_medium") { $utm['utm_medium'] = $k_v[1]; }
		if($k_v[0] == "utm_campaign") { $utm['utm_campaign'] = $k_v[1]; }
		if($k_v[0] == "utm_term") { $utm['utm_term'] = rawurldecode($k_v[1]); }
		//direct
		if($k_v[0] == "type") { $dl['type'] = $dtype[$k_v[1]]; }
		if($k_v[0] == "source") { $dl['source'] = rawurldecode($k_v[1]); }
		if($k_v[0] == "added") { $dl['added'] = $dadded[$k_v[1]]; }
		if($k_v[0] == "block") { $dl['block'] = $dblock[$k_v[1]]; }
		if($k_v[0] == "pos") { $dl['pos'] = $k_v[1]; }
		if($k_v[0] == "key") { $dl['key'] = str_replace("+", " ", rawurldecode($k_v[1])); }
		if($k_v[0] == "campaign") { $dl['campaign'] = $k_v[1]; }
		if($k_v[0] == "ad") { $dl['ad'] = $k_v[1]; }
		if($k_v[0] == "phrase") { $dl['phrase'] = $k_v[1]; }
	}
	if(isset($utm['utm_source'])) {
		setcookie("cookie_utm_source", $utm['utm_source'], time() + 31*86400);
		$utms .= 'Источник (utm_source): '.$utm['utm_source'].'<br>';
	}
	if(isset($utm['utm_medium'])) {
		setcookie("cookie_utm_medium", $utm['utm_medium'], time() + 31*86400);
		$utms .= 'Тип рекламы (utm_medium): '.$utm['utm_medium'].'<br>';
	}
	if(isset($utm['utm_campaign'])) {
		setcookie("cookie_utm_campaign", $utm['utm_campaign'], time() + 31*86400);
		$utms .= 'Кампания (utm_campaign): '.$utm['utm_campaign'].'<br>';
	}
	if(isset($utm['utm_term'])) {
		setcookie("cookie_utm_term", $utm['utm_term'], time() + 31*86400);
		$utms .= 'Запрос (utm_term): '.$utm['utm_term'];
	}
	//direct
	if(isset($dl['type'])) {
		setcookie("dl_type", $dl['type'], time() + 31*86400);
		$d_labels .= 'Тип площадки, на которой произведён показ объявления: '.$dl['type'].'<br>';
	}
	if(isset($dl['source'])) {
		setcookie("dl_source", $dl['source'], time() + 31*86400);
		$d_labels .= 'Название площадки РСЯ: '.$dl['source'].'<br>';
	}
	if(isset($dl['added'])) {
		setcookie("dl_added", $dl['added'], time() + 31*86400);
		$d_labels .= 'Инициирован ли этот показ «дополнительными релевантными фразами»: '.$dl['added'].'<br>';
	}
	if(isset($dl['block'])) {
		setcookie("dl_block", $dl['block'], time() + 31*86400);
		$d_labels .= 'Тип блока, если показ произошёл на странице с результатами поиска Яндекса: '.$dl['block'].'<br>';
	}
	if(isset($dl['pos'])) {
		setcookie("dl_pos", $dl['pos'], time() + 31*86400);
		$d_labels .= 'Точная позиция объявления в блоке: '.$dl['pos'].'<br>';
	}
	if(isset($dl['key'])) {
		setcookie("dl_key", $dl['key'], time() + 31*86400);
		$d_labels .= 'Ключевая фраза, по которой было показано объявление: '.$dl['key'].'<br>';
	}
	if(isset($dl['campaign'])) {
		setcookie("dl_campaign", $dl['campaign'], time() + 31*86400);
		$d_labels .= 'Номер (ID) рекламной кампании: '.$dl['campaign'].'<br>';
	}
	if(isset($dl['ad'])) {
		setcookie("dl_ad", $dl['ad'], time() + 31*86400);
		$d_labels .= 'Номер (ID) объявления: '.$dl['ad'].'<br>';
	}
	if(isset($dl['phrase'])) {
		setcookie("dl_phrase", $dl['phrase'], time() + 31*86400);
		$d_labels .= 'Номер (ID) ключевой фразы: '.$dl['phrase'];
	}
}

if(empty($utms)) {
	if(isset($_COOKIE['cookie_utm_source'])) {
		$utms .= 'Источник (utm_source): '.$_COOKIE['cookie_utm_source'].'<br>';
	}
	if(isset($_COOKIE['cookie_utm_medium'])) {
		$utms .= 'Тип рекламы (utm_medium): '.$_COOKIE['cookie_utm_medium'].'<br>';
	}
	if(isset($_COOKIE['cookie_utm_campaign'])) {
		$utms .= 'Кампания (utm_campaign): '.$_COOKIE['cookie_utm_campaign'].'<br>';
	}
	if(isset($_COOKIE['cookie_utm_term'])) {
		$utms .= 'Запрос (utm_term): '.$_COOKIE['cookie_utm_term'];
	}
}
//direct
if(empty($d_labels)) {
	if(isset($_COOKIE['dl_type'])) {
		$d_labels .= 'Тип площадки, на которой произведён показ объявления: '.$_COOKIE['dl_type'].'<br>';
	}
	if(isset($_COOKIE['dl_source'])) {
		$d_labels .= 'Название площадки РСЯ: '.$_COOKIE['dl_source'].'<br>';
	}
	if(isset($_COOKIE['dl_added'])) {
		$d_labels .= 'Инициирован ли этот показ «дополнительными релевантными фразами»: '.$_COOKIE['dl_added'].'<br>';
	}
	if(isset($_COOKIE['dl_block'])) {
		$d_labels .= 'Тип блока, если показ произошёл на странице с результатами поиска Яндекса: '.$_COOKIE['dl_block'].'<br>';
	}
	if(isset($_COOKIE['dl_pos'])) {
		$d_labels .= 'Точная позиция объявления в блоке: '.$_COOKIE['dl_pos'].'<br>';
	}
	if(isset($_COOKIE['dl_key'])) {
		$d_labels .= 'Ключевая фраза, по которой было показано объявление: '.$_COOKIE['dl_key'].'<br>';
	}
	if(isset($_COOKIE['dl_campaign'])) {
		$d_labels .= 'Номер (ID) рекламной кампании: '.$_COOKIE['dl_campaign'].'<br>';
	}
	if(isset($_COOKIE['dl_ad'])) {
		$d_labels .= 'Номер (ID) объявления: '.$_COOKIE['dl_ad'].'<br>';
	}
	if(isset($_COOKIE['dl_phrase'])) {
		$d_labels .= 'Номер (ID) ключевой фразы: '.$_COOKIE['dl_phrase'];
	}
}
$utms = htmlspecialchars($utms."<br><strong>Яндекс.Директ метки</strong><br>".$d_labels);
?>