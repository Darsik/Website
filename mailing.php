<?php
class Mailing
{
	function sendEmail($to, $subject, $message, $headers)
	{
		mail($to, $subject, $message, $headers);
	}
}

?>