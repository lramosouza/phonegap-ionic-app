<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/html; charset=UTF-8");

    //formulário

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    // TRANSFORMA O S DADOS
    $titulo = $objData->titulo;
    $descricao = $objData->descricao;
    $formaPagamento = $objData->formaPagamento;
	$regiaoAtendida = $objData->regiaoAtendida;

    // LIMPA OS DADOS
    $titulo = stripslashes($titulo);
    $descricao = stripslashes($descricao);
    $formaPagamento = stripslashes($formaPagamento);
	$regiaoAtendida = stripslashes($regiaoAtendida);

    $titulo = trim($titulo);
    $descricao = trim($descricao);
    $formaPagamento = trim($formaPagamento);
	$regiaoAtendida = trim($regiaoAtendida);

    // INSERE OS DADOS
    $db = new PDO("mysql:host=50.116.87.63;dbname=leand853_base", "leand853_lsouza", "vangolav88");


    if($db){
        $sql = "insert into servicos values(NULL,'".$titulo."','".$descricao."','".formaPagamento."','".regiaoAtendida."')";
        $query = $db->prepare($sql);
        $query ->execute();
        echo "Os dados foram inseridos com sucesso. Obrigado!";
    }else{
        echo "Não foi possivel iserir os dados! Tente novamente mais tarde.";
    };
