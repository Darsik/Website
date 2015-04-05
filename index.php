<?php

function autoload($className)
{
	$className = ltrim($className, '\\');
	$fileName  = '';
	$namespace = '';
	if ($lastNsPos = strrpos($className, '\\')) {
		$namespace = substr($className, 0, $lastNsPos);
		$className = substr($className, $lastNsPos + 1);
		$fileName  = str_replace('\\', DIRECTORY_SEPARATOR, $namespace) . DIRECTORY_SEPARATOR;
		$fileName = str_replace(explode("\\", $fileName)[0] . '\\', "", $fileName);
	}
	$fileName .= str_replace('_', DIRECTORY_SEPARATOR, $className) . '.php';
	require($fileName);
}

spl_autoload_register('autoload');

include_once './bootstrap.php';

$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

$str = substr($actual_link, 12 );
$str_array = explode('/',str);

$number = count($str_array);

foreach($str_array as $value)
{
    if($value == "admin")
    {
      $contr = new rvele\Controllers\AdminController();
    }
    if($value == "front")
            {
        $contr = new rvele\Controllers\FrontController();
    }
    if($number == 1) {
        $contr->actionDefault();
    }
    else {
        $contr->action . $value();
    }
}
