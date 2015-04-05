<?php
session_start();
require('db.php');
Db::connect('127.0.0.1', 'userandpic', 'root', '');

if (isset($_SESSION['id']))
{
        header('Location: administrace.php');
        exit();
}

if ($_POST)
{
        $uzivatel = Db::queryOne('
                SELECT id
                FROM uzivatel
                WHERE jmeno=? AND heslo=SHA1(?)
        ', $_POST['jmeno'], $_POST['heslo'] . "t&#ssdf54gh");
        if (!$uzivatel)
                $zprava = 'Neplatné uživatelské jméno nebo heslo';
        else
        {
                $_SESSION['id'] = $uzivatel['id'];
                $_SESSION['uzivatel_jmeno'] = $_POST['jmeno'];
                header('Location: redakcniSystem.php');
                exit();
        }
}

?>

<DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Přihlášení</title>
	</head>
	<body>
		<form method="post">
			Jmeno <input type="text" name="jmeno"><br>
			Heslo  <input type="password" name="heslo"><br>
			<input type="submit" name="odeslat" value="Odeslat">
		</form>
	</body>
</html>