function calcular(){
	let operacao = document.getElementById('operacao').value;

	let num1 = parseFloat(document.getElementById('num1').value);

	let num2 = parseFloat(document.getElementById('num2').value);

	let resultado = null;


	if(num1 == '' || num1 == null){
		alert('num1 inválido')
	}

	if(num2 == '' || num2 == null){
		alert('num2 inválido')
	}

	
	switch(operacao){
		case '1':
			resultado = num1 - num2
			break
		
		case '2':
			resultado = num1 + num2
			break
		
		case '3':
			resultado = num1 * num2
			break
		
		case '4':
			resultado = num1 / num2
			break

		default:
			alert('sem operacao')	
	}//switch
	alert(resultado)
}