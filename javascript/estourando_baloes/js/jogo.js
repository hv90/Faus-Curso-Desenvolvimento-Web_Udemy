function jogo(){
	let url = window.location.search
	let dificuldade = url.replace("?", "")
	let tempoSegundos = 0
	let numBaloes = 10
	let chamaTimeOut = null

	switch(dificuldade){
		case '1':
			tempoSegundos = 120
			break;
		case '2':
			tempoSegundos = 60
			break;
		case '3':
			tempoSegundos = 30
			break;
	}

	document.getElementById('cronometro').innerHTML = tempoSegundos

	document.getElementById('baloes_inteiros').innerHTML = numBaloes

	document.getElementById('baloes_estourados').innerHTML = 0

	criaBaloes(numBaloes)

	contador(tempoSegundos + 1)

}

function endGame(){
	alert("voce nao venceu")
}

function contador(segundos){
	segundos = segundos-1

	if(segundos<0){
		clearTimeout(chamaTimeOut)
		endGame()
		return false
	}

	document.getElementById("cronometro").innerHTML = segundos
	chamaTimeOut = setTimeout("contador("+segundos+")", 1000)
}

function estourar(e){
	let idBalao = e.id
	
	document.getElementById(idBalao).setAttribute("onclick","")
	document.getElementById(idBalao).src = "imagens/balao_azul_pequeno_estourado.png"

	pontuacao(-1)
}

function pararJogo(){
	clearTimeout(chamaTimeOut)
	return false
}

function checaPlacar(baloes_inteiros){
	if(baloes_inteiros == 0){
		alert("voce venceu")
		pararJogo()
	}
}

function pontuacao(acao){
	let baloes_inteiros = parseInt(document.getElementById("baloes_inteiros").innerHTML)
	let baloes_estourados = parseInt(document.getElementById("baloes_estourados").innerHTML)

	baloes_inteiros += acao
	baloes_estourados -= acao

	document.getElementById("baloes_inteiros").innerHTML = baloes_inteiros
	document.getElementById("baloes_estourados").innerHTML = baloes_estourados

	checaPlacar(baloes_inteiros)
}

function criaBaloes(numBaloes){
	for(let i = 0; i < numBaloes; i++){
		let balao = document.createElement("img")
		balao.src = "imagens/balao_azul_pequeno.png"
		balao.style.margin = '10px'
		balao.id = "balao"+i
		balao.onclick = function() {estourar(this)}

		document.getElementById("cenario").appendChild(balao)
	}
}