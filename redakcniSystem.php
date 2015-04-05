<?php 
	session_start();
	if (!isset($_SESSION['id']))
	{
	        header('Location: admin.php');
	        exit();
	}

	if (isset($_GET['odhlasit']))
	{
	        session_destroy();
	        header('Location: admin.php');
	        exit();
	}
?>
<DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<form method="get">
			<input type="submit" name="odhlasit" value="odhlasit">
		</form>
	</body>
</html>