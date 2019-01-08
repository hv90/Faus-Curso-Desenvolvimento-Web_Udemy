<?php
    require_once 'classes/Calculadora.php';

    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operacao = $_POST['operacao'];

    $calc = new Calculadora($num1, $num2);

    switch($operacao){
        case 1:
            echo $calc->somar();
            break;
        case 2:
            echo $calc->subtrair();
            break;
        case 3:
            echo $calc->multiplicar();
            break;
        case 4:
            echo $calc->dividir();
            break;
        default:
            echo 'tente novamente';
    }


?>