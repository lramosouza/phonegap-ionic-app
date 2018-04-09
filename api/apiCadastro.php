<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/html; charset=UTF-8");

    //formulário

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    // TRANSFORMA O S DADOS
    $nome = $objData->nome;
    $email = $objData->email;
    $senha = $objData->senha;

    // LIMPA OS DADOS
    $nome = stripslashes($nome);
    $email = stripslashes($email);
    $senha = stripslashes($senha);

    $nome = trim($nome);
    $email = trim($email);
    $senha = trim($senha);

    // INSERE OS DADOS
    $db = new PDO("mysql:host=50.116.87.63;dbname=leand853_base", "leand853_lsouza", "vangolav88");


    if($db){
        $sql = "insert into usuarios values(NULL,'".$nome."','".$email."','".md5($senha)."')";
        $query = $db->prepare($sql);
        $query ->execute();
        echo "Os dados foram inseridos com sucesso. Obrigado e bem vindo!";
    }else{
        echo "Não foi possivel iserir os dados! Tente novamente mais tarde.";
    };
