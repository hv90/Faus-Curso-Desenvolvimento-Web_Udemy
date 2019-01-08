<?php
    class Calculadora{
        private $num1;
        private $num2;

        function __construct($param_num1, $param_num2){

            if(!empty($param_num1) && is_numeric($param_num1)){
                $this->num1 = $param_num1;
            } 

            if(!empty($param_num2) && is_numeric($param_num2)){
                $this->num2 = $param_num2;
            } 
        }

        public function somar(){
            return $this->num1 + $this->num2;
        }

        public function subtrair(){
            return $this->num1 - $this->num2;
        }

        public function multiplicar(){
            return $this->num1 * $this->num2;
        }

        public function dividir(){
            return $this->num1 / $this->num2;
        }
    }
?>