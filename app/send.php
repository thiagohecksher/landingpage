<?php 

	$nome		= $_POST['name'];
	$email		= $_POST['email'];
	$message	= $_POST['message'];

	$adress		= "thiago.hecksher@gmail.com";
	$subject	= "Contato via Site.";
	$body		= "From: $nome ($email)\n\n";
	$content	= "$message\r\n\n";
	$msg 		= $body . $content;
	$headers	= "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n";

	mail($adress, $subject, $msg, $headers);
?>