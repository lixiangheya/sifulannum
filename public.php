<?php
header("content-type:text/html;charset=utf8");

	$db_hostname = "localhost";

	$db_username = "root";

	$db_password = "root";

	$db_name="1802";

	$conn = new mysqli($db_hostname,$db_username,$db_password,$db_name);

	if($conn->connect_error){
		die("连接失败".$conn->connect_error);
	}

	$conn->query("set names utf8");

?>