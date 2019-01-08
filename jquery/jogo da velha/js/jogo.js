let rodada = 1
let matriz_jogo = Array(3)

matriz_jogo['A'] = Array(3)
matriz_jogo['B'] = Array(3)
matriz_jogo['C'] = Array(3)

for(let i in matriz_jogo){
    for(let j=0; j<3; j++){
        matriz_jogo[i][j] = 0
    }
}

$(document).ready(function(){
    $('#btn-start-new-game').click(function(){
        let p1name = $('#input_p1_name').val()
        let p2name = $('#input_p2_name').val()

        if(p1name == '' || p2name == ''){
            alert('nome null identificado. Tente novamente')
            return false
        }
        
        //exibe o nome dos players
        $('#p1_name').html(p1name)
        $('#p2_name').html(p2name)

        //
        $('#page1').hide()
        $('#gameStage').show()
    })

    $('.jogada').click(function(){
        let coord = this.id
        $('#'+coord).off()
        jogada(coord)
    })

    function jogada(id){
        let icone = ''
        let ponto = 0

        if(rodada % 2 == 1){            
            icone = 'url("imagens/marcacao_1.png")'
            ponto = 1
        }else{
            icone = 'url("imagens/marcacao_2.png")'
            ponto = -1
        }
        rodada++

        $('#'+id).css('background-image', icone)

        let linha_coluna = id.split('-')
        matriz_jogo[linha_coluna[0]][linha_coluna[1]-1] = ponto
        console.log(matriz_jogo)

        checkMatch()
    }

    function checkMatch(){
//------------------------------pontos na horizontal
        let pontos = 0
        for(let i = 0; i<3; i++){
            pontos += matriz_jogo['A'][i]
        }
       winner(pontos)

        pontos=0
        for(let i = 0; i<3; i++){
            pontos += matriz_jogo['B'][i]
        }               
        winner(pontos)
        
        pontos=0
        for(let i = 0; i<3; i++){
            pontos += matriz_jogo['C'][i]
        }        
        winner(pontos)

//-------------------------------pontos na vertical
         for(let j = 0; j<3; j++){
            pontos=0
             for(let i in matriz_jogo){
                 pontos += matriz_jogo[i][j]
             }winner(pontos)
         }        
        
//-------------------------------pontos na diagonal
        
        let k = 0
        pontos=0
        for(let j in matriz_jogo){                          
            for(let i = 0; i<3; i++){
                if(k==i){
                    pontos += matriz_jogo[j][i]
                }               
            }k++
        }
        winner(pontos)

        pontos=0
        k = 2
        for(let j in matriz_jogo){
            for(let i = 2; i>=0; i--){
                if(k==i){
                    pontos += matriz_jogo[j][i]
                }               
            }k--
        }
        winner(pontos)

    }

    function winner(pontos){
        let p1name = $('#input_p1_name').val()
        let p2name = $('#input_p2_name').val()
        
        switch(pontos){
            case -3:
                alert(p2name+' ganhou')
                $('.jogada').off()
                break
            case 3:
                alert(p1name+' ganhou')
                $('.jogada').off()
                break
        }        
    }
})