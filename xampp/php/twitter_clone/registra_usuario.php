<?php

    require_once 'db.class.php';

    $usuario = $_POST['usuario'];    
    $email = $_POST['email'];
    $senha = $_POST['senha'];


    $db1 = new db();
    $connect_link = $db1->conecta_mysql();

    $sql = "insert into usuarios(usuario, email, senha) values('$usuario', '$email', '$senha')";

    if(mysqli_query($connect_link, $sql)){
        echo 'usuário registrado com sucesso';
    }else{
        echo 'usuário não registrado';
    }
?>