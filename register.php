<?php
	include "public.php";
	
	$uname = $_REQUEST["uname"];
	$upwd = $_REQUEST["upwd"];


	$sql = "insert into `users` (uname,upwd) values ('$uname','$upwd')";

	$rows = mysqli_query($conn,$sql);//受影响的行数
	//后端要返回给前端的是一个json对象
	if($rows){
		echo json_encode(array(
			"status"=>1,
			"info"=>"成功"
		));
	}else{
		echo json_encode(array(
			"status"=>0,
			"info"=>"失败"
		));
	}
?>