<?php

$name = $_POST['client_name'];
$email = $_POST['client_email'];
$message = $_POST['client_message'];

$token = "5409106008:AAFPGmx-whRDjYWJ2pxh4BVY0Yp6eqjbWOs";
$chat_id = "1138459668";

$arr = array(
	'Клиент: ' => $name,
	'Email: ' => $email,
	'Сообщение : ' => $message
);

foreach($arr as $key => $value) {
	$txt .= $key. "<b> ". urlencode($value). "</b> "."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/?chat_id={$chat_id}&parse_mode=html&text={$text}","r");

if ($sendToTelegram) {
	return true;
} else {
	
}