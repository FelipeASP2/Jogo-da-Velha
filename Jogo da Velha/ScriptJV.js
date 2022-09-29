var jogador = 1; // Variavel que controla a vez do jogador;
    var jogada = false; // Variavel que controla se a jogada foi efetuada corretamente;

    var valida_posicao = new Array(0,0,0,0,0,0,0,0,0,0); // Vetor que valida as posições da tabela, se já estão marcadas ou não;
    var marca_posicao = new Array(); // Vetor que guarda as posições marcadas, se foi xis ou bola;
    
    function clic(posicao_jogada){  // Função que marca a jogada realizada;
    
        jogada = true; // Jogada é valida;

        if ( valida_posicao[posicao_jogada] == 0 ){ // Testa se a posição clicada é uma posição "livre", ou seja, igual a 0;
            if ( jogador == 1 ){ // Se for a vez do jogador 1, marca a bolinha na posição livre clicada;
                document.getElementById("Q"+posicao_jogada).style.backgroundImage = 'url(../Imagens/bola.jpg)'; // Muda a imagem de fundo da celula para bola;
                marca_posicao[posicao_jogada] = "bola"; // Guarda a posição marcada como bola;
            }else
            if (jogador == 2 ){ // Se for a vez do jogador 2, marca o xis na posição livre clicada;
                document.getElementById("Q"+posicao_jogada).style.backgroundImage = 'url(../Imagens/xis.jpg)'; // Muda a imagem de fundo da celula para xis;
                marca_posicao[posicao_jogada] = "xis"; // Guarda a posição marcada como xis;
            }
            valida_posicao[posicao_jogada] = 1; // Posição fica utilizada, não está mais livre, ou seja, recebeu 1;]
            testa_fim_de_jogo();// chama a função que verifica se o jogo termiou;

        }else
            jogada = false; // Se a jogada não for efetuada com sucesso;
        
        if ( jogada == false ) // Se a jogada for falsa mostra uma mensagem ao jogador, e não acontece nada;
            alert("Esta casa ja esta marcada!\nEscolha outra para jogar!");
        else
        if ( jogada == true ){ // Senão, se a jogada for verdadeira, troca a vez do jogador;
            if (jogador == 1) // Se for a vez do jogador 1;
            jogador = 2;      // Troca para o jogador 2;
            else            // Caso contrario;
            jogador = 1;   // Troca para o jogador 1;
        }

        
    }
    
    
    function testa_fim_de_jogo(){ // Função que testa qual jogador venceu;
    
        
            var bola = 0; // Váriavel local para testar se foi o jogador "bola" que ganhou;
            var xis = 0; // Váriavel local para testar se foi o jogador "xis" que ganhou;
            
            // Se ocorrer algum dos casos abaixo a variavel "bola" recebe 1, ou seja, bola ganhou;
            if ( marca_posicao[1] == "bola" && marca_posicao[2] == "bola" && marca_posicao[3] == "bola" || // ou;  
                 marca_posicao[4] == "bola" && marca_posicao[5] == "bola" && marca_posicao[6] == "bola" || // ou;  
                 marca_posicao[7] == "bola" && marca_posicao[8] == "bola" && marca_posicao[9] == "bola" || // ou; 
                 marca_posicao[1] == "bola" && marca_posicao[4] == "bola" && marca_posicao[7] == "bola" || // ou; 
                 marca_posicao[2] == "bola" && marca_posicao[5] == "bola" && marca_posicao[8] == "bola" || // ou; 
                 marca_posicao[3] == "bola" && marca_posicao[6] == "bola" && marca_posicao[9] == "bola" || // ou; 
                 marca_posicao[1] == "bola" && marca_posicao[5] == "bola" && marca_posicao[9] == "bola" || // ou; 
                 marca_posicao[3] == "bola" && marca_posicao[5] == "bola" && marca_posicao[7] == "bola" ){
                    bola = 1; // Bola ganhou;
                    alert("Jogador Bola (O) venceu!\nClique em OK para jogar novamente.");
                    location.reload(true);// recarrega a página para um novo jogo;
                }
            // Se ocorrer algum dos casos abaixo a variavel "xis" recebe 1, ou seja, xis ganhou;
            if ( marca_posicao[1] == "xis" && marca_posicao[2] == "xis" && marca_posicao[3] == "xis" || // ou; 
                 marca_posicao[4] == "xis" && marca_posicao[5] == "xis" && marca_posicao[6] == "xis" || // ou; 
                 marca_posicao[7] == "xis" && marca_posicao[8] == "xis" && marca_posicao[9] == "xis" || // ou; 
                 marca_posicao[1] == "xis" && marca_posicao[4] == "xis" && marca_posicao[7] == "xis" || // ou; 
                 marca_posicao[2] == "xis" && marca_posicao[5] == "xis" && marca_posicao[8] == "xis" || // ou; 
                 marca_posicao[3] == "xis" && marca_posicao[6] == "xis" && marca_posicao[9] == "xis" || // ou; 
                 marca_posicao[1] == "xis" && marca_posicao[5] == "xis" && marca_posicao[9] == "xis" || // ou; 
                 marca_posicao[3] == "xis" && marca_posicao[5] == "xis" && marca_posicao[7] == "xis" ){
                    xis = 1; // Xis ganhou;
                    alert("Jogador Xis (X) venceu!\nClique em OK para jogar novamente.");
                    location.reload(true);// recarrega a página para um novo jogo;
                }

            // "If's" que testam se todas as posições já estão marcadas para caso o jogo termine em velha;
            if ( valida_posicao[1] == 1 && valida_posicao[2] == 1 && valida_posicao[3] == 1 ) {
            if ( valida_posicao[4] == 1 && valida_posicao[5] == 1 && valida_posicao[6] == 1 ) {
            if ( valida_posicao[7] == 1 && valida_posicao[8] == 1 && valida_posicao[9] == 1 ) {    
            
            if ( bola == 0 && xis == 0 ) { // Se as duas variaveis estiverem 0 é pq ninguem ganhou;
                alert("Não houve vencedores!\nClique em OK para jogar novamente."); // Mostra mensagem de que não houve vencedores;
                location.reload(true); // Recarrega a página para novo jogo;
            }
        }}}
             
    }