<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

$data = file_get_contents("php://input");
$objData = json_decode($data);

$counter = $objData->counter;
$token = $objData->token;

try {	
	$con = new PDO("mysql:host=50.116.87.63;dbname=leand853_base", "leand853_lsouza", "vangolav88");

	if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	}

	if ($token === "1f3d2gs3f2fg3as2fdg3re2t1we46er45" && isset($token)) {
		

	$query = $con->prepare('SELECT * FROM categoria');

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"id": "'.$result["id"].'",';
			$out .= '"titulo": "'.$result["titulo"].'"}';
		}
		$out .= "]";
		echo $out;
	
	}

} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};