<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

$data = file_get_contents("php://input");
$objData = json_decode($data);

$email = $objData->email;
$senha = $objData->senha;
$senha_informada = md5($senha);

try {
	$con = new PDO("mysql:host=50.116.87.63;dbname=leand853_base", "leand853_lsouza", "vangolav88");

	if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	};

      $query = $con->prepare("SELECT * FROM usuarios WHERE email = '$email' ");
      $query->execute();
      $result = $query->fetch();
      $resultado;
      if($email == $result['email'] && $senha_informada == $result['senha']){
            $resultado = ["permissao" => true, "nome"=>$result['nome'], "email"=>$result['email']];
      };

      if($email != $result['email'] || $senha_informada != $result['senha']){
            $resultado = ["permissao" => false, "erro" => "Email ou senha incorretos. Tente outros ou cadastre-se!"];
      };

      echo json_encode($resultado);

} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
