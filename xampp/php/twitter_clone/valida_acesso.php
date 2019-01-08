<?php
    require_once 'db.class.php';

    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $sql = "select * from usuario where usuario = '$usuario' && senha = '$senha' ";

    $db1 = new db();
    $connect_link = $db1->conecta_mysql();

    $result_id = mysqli_query($connect_link, $sql);

    if($result_id){
        $dados_usuario = mysqli_fetch_array($result_id);

        var_dump($dados_usuario);
    } else{
        echo 'erro na consulta';
    }
?>