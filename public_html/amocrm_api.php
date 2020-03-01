<?php

$name=$_POST['user_name'];
$phone=$_POST['user_phone'];
$email=$_POST['user_email'];


$user=array(
	'USER_LOGIN'=>'morozkin@etazh78.ru', #Ваш логин (электронная почта)
	'USER_HASH'=>'649986d97c3a3a1e318a5ae3fec66f24525fe8dc' #Хэш для доступа к API (смотрите в профиле пользователя)
);

$subdomain='morozkin';
$link='https://'.$subdomain.'.amocrm.ru/private/api/auth.php?type=json';
$curl=curl_init();curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');curl_setopt($curl,CURLOPT_URL,$link);curl_setopt($curl,CURLOPT_POST,true);curl_setopt($curl,CURLOPT_POSTFIELDS,http_build_query($user));curl_setopt($curl,CURLOPT_HEADER,false);curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);$out=curl_exec($curl);$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);curl_close($curl);

$summ=0;
$responsible_user_id=742032;

$sdelka=array(
    'name'=>'Заявка с сайта Вентстройгрупп.рф',
    'status_id'=>140,
    'price'=>$summ,
	'responsible_user_id'=>$responsible_user_id,
	'tags'=>"web"
);

//'Имя: ' .$name. '<br>Телефон: ' .$phone. '<br>E-mail: ' .$email. '<br>Площадь помещения: ' .$plosh. '<br>Вид помещения: ' .$vid;

if ($plosh){$sdelka['custom_fields'][]=array('id'=>554425,'values'=>array(array('value'=>$plosh)));}
if ($vid){$sdelka['custom_fields'][]=array('id'=>649867,'values'=>array(array('value'=>$vid)));}

$expectMarks = array('utm_source','utm_medium','utm_campaign','utm_term','utm_content');$utms=array();foreach($expectMarks as $utm){if(isset($_COOKIE[$utm])){${$utm}=$_COOKIE[$utm];}}
if ($utm_source){$sdelka['custom_fields'][]=array('id'=>650083,'values'=>array(array('value'=>$utm_source)));}
if ($utm_medium){$sdelka['custom_fields'][]=array('id'=>650085,'values'=>array(array('value'=>$utm_medium)));}
if ($utm_campaign){$sdelka['custom_fields'][]=array('id'=>573961,'values'=>array(array('value'=>$utm_campaign)));}
if ($utm_term){$sdelka['custom_fields'][]=array('id'=>573925,'values'=>array(array('value'=>$utm_term)));}
if ($utm_content){$sdelka['custom_fields'][]=array('id'=>650087,'values'=>array(array('value'=>$utm_content)));}





$leads['request']['leads']['add'][]=$sdelka;
$link='https://'.$subdomain.'.amocrm.ru/private/api/v2/json/leads/set';
$curl=curl_init();curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');curl_setopt($curl,CURLOPT_URL,$link);curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($leads));curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));curl_setopt($curl,CURLOPT_HEADER,false);curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);$out=curl_exec($curl);$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);

if ($code==200){
	$Response=json_decode($out,true);
	$Response=$Response['response']['leads']['add'];
	$idsdelka=$Response[0]['id'];
	
	if ($name==''){$name=$phone;}

	$contact=array(
	  'name'=>$name,
	  'linked_leads_id'=>array($idsdelka),
	  'responsible_user_id'=>$responsible_user_id
	);

	if ($phone){$contact['custom_fields'][]=array('id'=>553815,'values'=>array(array('value'=>$phone,'enum'=>'MOB')));}
	if ($email){$contact['custom_fields'][]=array('id'=>553817,'values'=>array(array('value'=>$email,'enum'=>'WORK')));}

			
	$set['request']['contacts']['add'][]=$contact;

	
	$link='https://'.$subdomain.'.amocrm.ru/private/api/v2/json/contacts/set';
	$curl=curl_init();curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');curl_setopt($curl,CURLOPT_URL,$link);curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($set));curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));curl_setopt($curl,CURLOPT_HEADER,false);curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);
	$out=curl_exec($curl);
	$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);

	
	
	
	
	
	if ($comments){
		$notes['request']['notes']['add']=array(
		array(
			'element_id'=>$idsdelka,
			'element_type'=>2,
			'note_type'=>4,
			'text'=>$comments,
			'responsible_user_id'=>$responsible_user_id,
		));
		$link='https://'.$subdomain.'.amocrm.ru/private/api/v2/json/notes/set';
		$curl=curl_init();curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');curl_setopt($curl,CURLOPT_URL,$link);curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($notes));curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));curl_setopt($curl,CURLOPT_HEADER,false);curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt');curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);$out4=curl_exec($curl);$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);curl_close($curl);
	}
	
}


?>