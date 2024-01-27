<?php

$phone = '';
$name = '';
$amount = '';
$adress = '';
$preference = '';
$restrictions = '';
$allergies = '';

if (isset($_POST["phone"])) {

	$phone = $_POST['phone'];
	$name = $_POST['name'];
	$amount = $_POST['amount'];
	$adress = $_POST['adress'];
	$preference = $_POST['preference'];
	$restrictions = $_POST['restrictions'];
	$allergies = $_POST['allergies'];

	$name = trim(urldecode(htmlspecialchars($name)));
	$amount = trim(urldecode(htmlspecialchars($amount)));
	$adress = trim(urldecode(htmlspecialchars($adress)));
	$preference = trim(urldecode(htmlspecialchars($preference)));
	$restrictions = trim(urldecode(htmlspecialchars($restrictions)));
	$allergies = trim(urldecode(htmlspecialchars($allergies)));

	if (strlen($name)) {
		$name = "Имя: {$name}. ";
	}

	if (strlen($amount)) {
		$amount = "Количество человек: {$amount}. ";
	}

	if (strlen($adress)) {
		$adress = "Город отправления: {$adress}. ";
	}

	if (strlen($preference)) {
		$preference = "Предпочтения: {$preference}. ";
	}

	if (strlen($restrictions)) {
		$restrictions = "Ограничения: {$restrictions}. ";
	}

	if (strlen($allergies)) {
		$allergies = "Аллергия: {$allergies}. ";
	}


	$adminEmail = 'test@email.com';
	$message = "{$name}Телефон: {$phone}. "
	. $amount
	. $adress
	. $preference
	. $restrictions
	. $allergies;
	$subject = "Заявка с формы";

	mail($adminEmail, $subject, $message);
}

?>