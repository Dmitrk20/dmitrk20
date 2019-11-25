<?php
if (isset($_POST['name'])) {$name = $_POST['name'];} 
if (isset($_POST['name2'])) {$name2 = $_POST['name2'];} 
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
$ip = $_SERVER['REMOTE_ADDR'];
  

$address = "kassssablanka@ya.ru";
$mes = "<span style='font-size: 15px; line-height: 18px;'>
		
		<b>Имя:</b> $name<br>
		<b>Телефон:</b> $phone<br>
		<b>Вопрос:</b> $name2<br>
		<b>Е-маил:</b> $email<br>
		
		<b>ip:</b> $ip<br>
		
		</span>";
$sub='Заявка на кровлю';
$emails='info';

if (empty($phone)) 
	{ 
		echo 'error'; 
	} 
else 
	{
		$send = mail ($address,$sub,$mes,"Content-type:text/html; charset = utf-8\r\nFrom:$emails");
	}
?>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="refresh" content="9; url=index.html">
		<title>Спасибо!</title>
		<meta name="generator">
		<style type="text/css">
			body
				{
					background: url('diamond.jpg') repeat #fff;
					font-family: 'Roboto Slab', serif;
				}
			.main
				{
					text-align: center; font-size: 40px; font-weight: bold; color: #000; margin-top: 150px;
				}
			.check
				{
					font-size: 22px; font-weight: normal; width: 800px; margin: 30px auto;
				}
		</style>
		<script type="text/javascript">
			setTimeout('location.replace("index.html")', 3000);
		</script> 
		<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

	</head>
	<body>	
	
	
	
		<div class="main">
			<p>Спасибо! Ваша заявка успешно отправлена!<br>Мы свяжемся с вами в ближайшее время!<br>Вы вернетесь на сайт через 10 секунд</p>
			<p class="check">Пожалуйста, проверьте правильность введенных вами данных и в случае необходимости отправьте заявку повторно</p>
			<p class="check">
				Имя: <span style="font-weight: bold;"><?php echo $name; ?></span><br>
				Телефон: <span style="font-weight: bold;"><?php echo $phone; ?></span><br>
			</p>
		</div>
		<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(53863207, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/53863207" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
	</body>
</html>