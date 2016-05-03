<?php
// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'jeremykid1992@gmail.com'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Fullscreen One Page Theme Contact Form:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "You have received a new message from your website's contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: info@bootstrapwizard.info\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>