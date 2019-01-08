<?php
    class db{
        private $host = 'localhost';
        private $usuario = 'root';
        private $senha = '';
        private $database = 'db_twitter_clone';

        function conecta_mysql(){
            $connect = mysqli_connect($this->host, $this->usuario, $this->senha, $this->database);
            
            mysqli_set_charset($connect, 'utf-8');

            if(mysqli_connect_errno()){
                alert('erro ao se conectar com o BD MySQL '.mysqli_connect_errno());
            }

            return $connect;
        }//fim conecta_mysql()
    }//fim da classe
?>