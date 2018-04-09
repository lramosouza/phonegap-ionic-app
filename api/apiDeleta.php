<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
	
	$data = file_get_contents("php://input");
	$objData = json_decode($data);

	$id = $objData;

	$db = new PDO("mysql:host=50.116.87.63;dbname=leand853_base", "leand853_lsouza", "vangolav88");
	if(isset($id) && $id !== " "){
		$query = $db->prepare("DELETE FROM usuarios WHERE nome = ?;",[nome]" );
		$query->execute();
		echo "Deletado com sucesso!";
	}else{
		echo "Não foi possivel realizar a oparação!";
	}