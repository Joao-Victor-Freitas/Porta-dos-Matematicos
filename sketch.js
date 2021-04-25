//https://youtu.be/Bj8vKvVBbZs

var tela = 0 //Variavel Escolher Tela

var xMenu = 340;//Inicio das Variaveis do menu
var larguraMenu = 500;
var yMenu1 = 125;
var alturaMenu1 = 190;
var yMenu2 = 195;
var alturaMenu2 = 240;
var yMenu3 = 260;
var alturaMenu3 = 315;//Fim da Variaveis do menu

var xVoltar1 = 45;//Inicio Variaveis Botão Voltar do Modo Jogo
var larguraVoltar1 = 95;
var yVoltar1 = 270;
var alturaVoltar1 = 315;//Final Variaveis Botão Voltar do Modo Jogo

var xVoltar2 = 35;//Inicio Variaveis Botão Voltar do Ajuda
var larguraVoltar2 = 65;
var yVoltar2 = 305;
var alturaVoltar2 = 330;//Final Variaveis Botão Voltar do Ajuda

var xVoltar3 = 35;//Inicio Variaveis Botão Voltar do Sobre
var larguraVoltar3 = 75;
var yVoltar3 = 298;
var alturaVoltar3 = 330;//Final Variaveis Botão Voltar do Sobre

var xEsquerdo = 75;//Inicio das Variaveis da escolha de Modo de Jogo
var larguraEsquerdo = 200;
var yEsquerdo1 = 65;
var alturaEsquerdo1 = 115;
var yEsquerdo2 = 165;
var alturaEsquerdo2 = 215;
var xDireito = 400;
var larguraDireito = 540;
var yDireito1 = 65;
var alturaDireito1 = 120;
var yDireito2 = 160;
var alturaDireito2 = 215;
var xCentro = 220;
var larguraCentro = 370;
var yCentro = 260;
var alturaCentro = 310;//Final das Variaveis da escolha de Modo de Jogo

var xtxt = 250;//Inicio variaveis das portas do Jogo
var ytxt = 40;
var xTxtPorta1 = 85;
var xTxtPorta2 = 275;
var xTxtPorta3 = 435;
var yTxtPorta = 250;
var xporta1 = 82;
var larguraPorta1 = 145;
var xporta2 = 268;
var larguraPorta2 = 330;
var xporta3 = 430;
var larguraPorta3 = 495;
var yPorta = 110;
var alturaPorta = 220;
var xvoltar = 20;
var larguraVoltar = 50;
var yvoltar = 300;
var alturaVoltar = 320;
var xvoltarJogoFinal = 125;
var larguraVoltarJogoFinal = 175;
var yvoltarJogoFinal = 245;
var alturaVoltarJogoFinal = 278;//Final variaveis das portas Jogo

var fonte;//Variavel Da Fonte
var telaMenu;//Variavel receber menu
var telaModoJogo;// Variavel receber modo jogo
var telaAjuda;// Variavel receber ajuda
var telaSobre;// Variavel receber sobre
var efeitoMudar;//Variavel para receber efeito sonoro de mudança de tela
var portaJogo;// Variavel para receber a imagem de escolha da porta no jogo

function preload() {//Carregar Arquivo
  fonte = loadFont('Knewave-Regular.ttf');//Carregar fonte
  telaMenu = loadImage('MenuInicial.png');//Carregar tela do Menu
  telaModoJogo = loadImage('ModoJogo.png');//Carregar tela do Modo de Jogo
  telaAjuda = loadImage('Ajuda.png');//Carregar tela da Ajuda
  telaSobre = loadImage('Sobre.png');//Carregar tela do Sobre
  soundFormats('mp3', 'ogg');
  efeitoMudar = loadSound('Efeito porta.mp3');//Carregar efeito
  portaJogo = loadImage('escolhaPorta.png');//Carregar tela de escolha porta
  fimJogo = loadImage('fimJogo.png');
}

function setup() {
  createCanvas(600, 337);
}

function adicao(){
  
  if(tela == 4){
    image(portaJogo, 0, 0);
    textFont(fonte);
    fill(0);
    textSize(32);//Tamanho Fonte
    text('  214\n' + '+ 62', xtxt, ytxt);
    text('276', xTxtPorta1, yTxtPorta);
    text('246', xTxtPorta2, yTxtPorta);
    text('273', xTxtPorta3, yTxtPorta);
    textSize(20);
    text('Voltar ao Menu', 55, 320);
      
  if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
    tela = 4.1
  }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
}
  
  if(tela == 4.1){
     image(portaJogo, 0, 0);
      textFont(fonte);
      fill(0);
      textSize(32);//Tamanho Fonte
      text('  145\n' + '+ 43', xtxt, ytxt);
      text('190', xTxtPorta1, yTxtPorta);
      text('188', xTxtPorta2, yTxtPorta);
      text('184', xTxtPorta3, yTxtPorta);
      textSize(20);
      text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 4.2
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 4.2){
          image(portaJogo, 0, 0);
          textFont(fonte);
          fill(0);
          textSize(32);//Tamanho Fonte
          text('     82\n' + '+ 407', xtxt, ytxt);
          text('485', xTxtPorta1, yTxtPorta);
          text('502', xTxtPorta2, yTxtPorta);
          text('489', xTxtPorta3, yTxtPorta);
          textSize(20);
          text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 4.3
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 4.3){
            image(portaJogo, 0, 0);
            textFont(fonte);
            fill(0);
            textSize(15);//Tamanho Fonte
            text('Marcela ganhou um livro de historias e já leu 187 páginas desse livro, mas ainda\nfaltam 218. Quantas paginas tem o     livro?', 3, ytxt);
            textSize(32);
            text('403', xTxtPorta1, yTxtPorta);
            text('393', xTxtPorta2, yTxtPorta);
            text('405', xTxtPorta3, yTxtPorta);
            textSize(20);
            text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 4.4
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
 }  

  if(tela == 4.4){
              image(portaJogo, 0, 0);
              textFont(fonte);
              fill(0);
              textSize(32);//Tamanho Fonte
              text('   819\n' + '+ 140', xtxt, ytxt);
              text('950', xTxtPorta1, yTxtPorta);
              text('959', xTxtPorta2, yTxtPorta);
              text('958', xTxtPorta3, yTxtPorta);
              textSize(20);
              text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 4.5
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 4.5){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text('   531\n' + '+ 155', xtxt, ytxt);
        text('686', xTxtPorta1, yTxtPorta);
        text('690', xTxtPorta2, yTxtPorta);
        text('696', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 4.6
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 4.6){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text('   760\n' + '+ 180', xtxt, ytxt);
        text('940', xTxtPorta1, yTxtPorta);
        text('912', xTxtPorta2, yTxtPorta);
        text('950', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 4.7
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 4.7){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(15);//Tamanho Fonte
        text('João tinha 321 melancias e ganhou mais 147, quantos melancias João tem?', 30, ytxt);
        textSize(32);
        text('473', xTxtPorta1, yTxtPorta);
        text('468', xTxtPorta2, yTxtPorta);
        text('437', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 4.8
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 4.8){
        image(fimJogo, 0, 0);
    
    if(mouseX >= xvoltarJogoFinal && mouseX <= larguraVoltarJogoFinal && mouseY >= yvoltarJogoFinal && mouseY <= alturaVoltarJogoFinal && mouseIsPressed){
      tela = 0
    }
  }                    
}

function subtracao(){
  
    if(tela == 5){
    image(portaJogo, 0, 0);
    textFont(fonte);
    fill(0);
    textSize(32);//Tamanho Fonte
    text('  908\n' + '- 95', xtxt, ytxt);
    text('810', xTxtPorta1, yTxtPorta);
    text('815', xTxtPorta2, yTxtPorta);
    text('813', xTxtPorta3, yTxtPorta);
    textSize(20);
    text('Voltar ao Menu', 55, 320);
      
  if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
    tela = 5.1
  }
      
      if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }  
}
  
  if(tela == 5.1){
     image(portaJogo, 0, 0);
      textFont(fonte);
      fill(0);
      textSize(32);//Tamanho Fonte
      text('  512\n' + '- 47', xtxt, ytxt);
      text('455', xTxtPorta1, yTxtPorta);
      text('460', xTxtPorta2, yTxtPorta);
      text('465', xTxtPorta3, yTxtPorta);
      textSize(20);
      text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 5.2
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 5.2){
          image(portaJogo, 0, 0);
          textFont(fonte);
          fill(0);
          textSize(32);//Tamanho Fonte
          text('   852\n' + '- 104', xtxt, ytxt);
          text('748', xTxtPorta1, yTxtPorta);
          text('750', xTxtPorta2, yTxtPorta);
          text('746', xTxtPorta3, yTxtPorta);
          textSize(20);
          text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 5.3
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 5.3){
            image(portaJogo, 0, 0);
            textFont(fonte);
            fill(0);
            textSize(15);//Tamanho Fonte
            text('Um vendedor de picolé saiu de casa com 450 picoles em seu carrinho. No fim do dia ele voltou para casa com 80 picolés. Quantos picolés ele vendeu ?', 3, ytxt);
            textSize(32);
            text('380', xTxtPorta1, yTxtPorta);
            text('350', xTxtPorta2, yTxtPorta);
            text('370', xTxtPorta3, yTxtPorta);
            textSize(20);
            text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 5.4
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
 }  

  if(tela == 5.4){
              image(portaJogo, 0, 0);
              textFont(fonte);
              fill(0);
              textSize(32);//Tamanho Fonte
              text('   513\n' + '- 200', xtxt, ytxt);
              text('313', xTxtPorta1, yTxtPorta);
              text('213', xTxtPorta2, yTxtPorta);
              text('413', xTxtPorta3, yTxtPorta);
              textSize(20);
              text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 5.5
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 5.5){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text('   450\n' + '- 130', xtxt, ytxt);
        text('300', xTxtPorta1, yTxtPorta);
        text('320', xTxtPorta2, yTxtPorta);
        text('220', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 5.6
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 5.6){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text('   507\n' + '- 107', xtxt, ytxt);
        text('400', xTxtPorta1, yTxtPorta);
        text('393', xTxtPorta2, yTxtPorta);
        text('407', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 5.7
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
 }
  
  if(tela == 5.7){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(20);//Tamanho Fonte
        text('Uma loja comprou 520 peças de roupa, 60 vieram com defeito.\nQuantas peças de roupa vieram perfeitas ?', 30, ytxt);
        textSize(32);
        text('450', xTxtPorta1, yTxtPorta);
        text('470', xTxtPorta2, yTxtPorta);
        text('460', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 5.8
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 5.8){
        image(fimJogo, 0, 0);
    
    if(mouseX >= xvoltarJogoFinal && mouseX <= larguraVoltarJogoFinal && mouseY >= yvoltarJogoFinal && mouseY <= alturaVoltarJogoFinal && mouseIsPressed){
      tela = 0
    }
  }
}

function multiplicacao(){
  
  if(tela == 6){
    image(portaJogo, 0, 0);
    textFont(fonte);
    fill(0);
    textSize(32);//Tamanho Fonte
    text('    55\n' + '   x 2', xtxt, ytxt);
    text('120', xTxtPorta1, yTxtPorta);
    text('110', xTxtPorta2, yTxtPorta);
    text('100', xTxtPorta3, yTxtPorta);
    textSize(20);
    text('Voltar ao Menu', 55, 320);
      
  if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
    tela = 6.1
  }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    } 
}
  
  if(tela == 6.1){
     image(portaJogo, 0, 0);
      textFont(fonte);
      fill(0);
      textSize(32);//Tamanho Fonte
      text('   905\n' + '    x 8', xtxt, ytxt);
      text('7230', xTxtPorta1, yTxtPorta);
      text('7340', xTxtPorta2, yTxtPorta);
      text('7240', xTxtPorta3, yTxtPorta);
      textSize(20);
      text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 6.2
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 6.2){
          image(portaJogo, 0, 0);
          textFont(fonte);
          fill(0);
          textSize(32);//Tamanho Fonte
          text('   343\n' + '    x 3', xtxt, ytxt);
          text('1029', xTxtPorta1, yTxtPorta);
          text('1039', xTxtPorta2, yTxtPorta);
          text('1020', xTxtPorta3, yTxtPorta);
          textSize(20);
          text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 6.3
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 6.3){
            image(portaJogo, 0, 0);
            textFont(fonte);
            fill(0);
            textSize(15);//Tamanho Fonte
            text('Para a apresentação de uma peça de teatro foram vendidos 82 ingressos a R$ 35,00 cada um.\nQual foi o total arrecadado ?', 3, ytxt);
            textSize(32);
            text('2970', xTxtPorta1, yTxtPorta);
            text('2870', xTxtPorta2, yTxtPorta);
            text('2900', xTxtPorta3, yTxtPorta);
            textSize(20);
            text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 6.4
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
 }  

  if(tela == 6.4){
              image(portaJogo, 0, 0);
              textFont(fonte);
              fill(0);
              textSize(32);//Tamanho Fonte
              text('   125\n' + '   x 12', xtxt, ytxt);
              text('1500', xTxtPorta1, yTxtPorta);
              text('1400', xTxtPorta2, yTxtPorta);
              text('1600', xTxtPorta3, yTxtPorta);
              textSize(20);
              text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 6.5
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 6.5){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text('   618\n' + '   x 10', xtxt, ytxt);
        text('6080', xTxtPorta1, yTxtPorta);
        text('6190', xTxtPorta2, yTxtPorta);
        text('6180', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 6.6
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 6.6){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text('   531\n' + '   x 11', xtxt, ytxt);
        text('5851', xTxtPorta1, yTxtPorta);
        text('5841', xTxtPorta2, yTxtPorta);
        text('5831', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 6.7
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 6.7){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(15);//Tamanho Fonte
        text('Os alunos matriculados no 4° ano de uma escola foram dividos em 9 turmas.\nCada turma ficou com 38 alunos. Qual o total de estudantes matriculados ?', 30, ytxt);
        textSize(32);
        text('342', xTxtPorta1, yTxtPorta);
        text('452', xTxtPorta2, yTxtPorta);
        text('352', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 6.8
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 6.8){
        image(fimJogo, 0, 0);
    
    if(mouseX >= xvoltarJogoFinal && mouseX <= larguraVoltarJogoFinal && mouseY >= yvoltarJogoFinal && mouseY <= alturaVoltarJogoFinal && mouseIsPressed){
      tela = 0
    }
  }
}

function divisao(){
  
    if(tela == 7){
    image(portaJogo, 0, 0);
    textFont(fonte);
    fill(0);
    textSize(32);//Tamanho Fonte
    text('   9\n' + '/ 3', xtxt, ytxt);
    text(' 2', xTxtPorta1, yTxtPorta);
    text(' 3', xTxtPorta2, yTxtPorta);
    text(' 6', xTxtPorta3, yTxtPorta);
    textSize(20);
    text('Voltar ao Menu', 55, 320);
      
  if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
    tela = 7.1
  }
      
      if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }     
}
  
  if(tela == 7.1){
     image(portaJogo, 0, 0);
      textFont(fonte);
      fill(0);
      textSize(32);//Tamanho Fonte
      text(' 63\n' + '/ 3', xtxt, ytxt);
      text(' 21', xTxtPorta1, yTxtPorta);
      text(' 23', xTxtPorta2, yTxtPorta);
      text(' 22', xTxtPorta3, yTxtPorta);
      textSize(20);
      text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 7.2
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 7.2){
          image(portaJogo, 0, 0);
          textFont(fonte);
          fill(0);
          textSize(32);//Tamanho Fonte
          text('  933\n' + '/ 3', xtxt, ytxt);
          text('233', xTxtPorta1, yTxtPorta);
          text('611', xTxtPorta2, yTxtPorta);
          text('311', xTxtPorta3, yTxtPorta);
          textSize(20);
          text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 7.3
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 7.3){
            image(portaJogo, 0, 0);
            textFont(fonte);
            fill(0);
            textSize(15);//Tamanho Fonte
            text('Joaquim comprou 249 peças de cerâmica para colocar em 3 paredes.\nQuantas peças de cerâmica serão colocadas em cada parede', 3, ytxt);
            textSize(32);
            text('53', xTxtPorta1, yTxtPorta);
            text('83', xTxtPorta2, yTxtPorta);
            text('73', xTxtPorta3, yTxtPorta);
            textSize(20);
            text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 7.4
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
 }  

  if(tela == 7.4){
              image(portaJogo, 0, 0);
              textFont(fonte);
              fill(0);
              textSize(32);//Tamanho Fonte
              text(' 920\n' + '/ 2', xtxt, ytxt);
              text('410', xTxtPorta1, yTxtPorta);
              text('420', xTxtPorta2, yTxtPorta);
              text('460', xTxtPorta3, yTxtPorta);
              textSize(20);
              text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 7.5
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 7.5){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text(' 672\n' + '/ 12', xtxt, ytxt);
        text('56', xTxtPorta1, yTxtPorta);
        text('43', xTxtPorta2, yTxtPorta);
        text('66', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 7.6
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
    
  if(tela == 7.6){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text(' 320\n' + '/ 8', xtxt, ytxt);
        text('62', xTxtPorta1, yTxtPorta);
        text('35', xTxtPorta2, yTxtPorta);
        text('40', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 7.7
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 7.7){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(15);//Tamanho Fonte
        text('Fernanda está organizando uma festa, ela tem 276 para dividir em 6 bandejas.\nQuantos docinhos ela colocorá em cada bandeja?', 30, ytxt);
        textSize(32);
        text('23', xTxtPorta1, yTxtPorta);
        text('46', xTxtPorta2, yTxtPorta);
        text('43', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 7.8
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    } 
  }
  
  if(tela == 7.8){
        image(fimJogo, 0, 0);
    
    if(mouseX >= xvoltarJogoFinal && mouseX <= larguraVoltarJogoFinal && mouseY >= yvoltarJogoFinal && mouseY <= alturaVoltarJogoFinal && mouseIsPressed){
      tela = 0
    }
  }
}

function todos(){
  
    if(tela == 8){
     image(portaJogo, 0, 0);
      textFont(fonte);
      fill(0);
      textSize(32);//Tamanho Fonte
      text('  145\n' + '+ 43', xtxt, ytxt);
      text('190', xTxtPorta1, yTxtPorta);
      text('188', xTxtPorta2, yTxtPorta);
      text('184', xTxtPorta3, yTxtPorta);
      textSize(20);
      text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.1
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    } 
  }
  
   if(tela == 8.1){
              image(portaJogo, 0, 0);
              textFont(fonte);
              fill(0);
              textSize(32);//Tamanho Fonte
              text('   513\n' + '- 200', xtxt, ytxt);
              text('313', xTxtPorta1, yTxtPorta);
              text('213', xTxtPorta2, yTxtPorta);
              text('413', xTxtPorta3, yTxtPorta);
              textSize(20);
              text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.2
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    } 
  }
  
    if(tela == 8.2){
     image(portaJogo, 0, 0);
      textFont(fonte);
      fill(0);
      textSize(32);//Tamanho Fonte
      text('   905\n' + '    x 8', xtxt, ytxt);
      text('7230', xTxtPorta1, yTxtPorta);
      text('7340', xTxtPorta2, yTxtPorta);
      text('7240', xTxtPorta3, yTxtPorta);
      textSize(20);
      text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.3
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
    if(tela == 8.3){
            image(portaJogo, 0, 0);
            textFont(fonte);
            fill(0);
            textSize(15);//Tamanho Fonte
            text('Joaquim comprou 249 peças de cerâmica para colocar em 3 paredes.\nQuantas peças de cerâmica serão colocadas em cada parede', 3, ytxt);
            textSize(32);
            text('53', xTxtPorta1, yTxtPorta);
            text('83', xTxtPorta2, yTxtPorta);
            text('73', xTxtPorta3, yTxtPorta);
            textSize(20);
            text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.4
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
 }
  
  if(tela == 8.4){
          image(portaJogo, 0, 0);
          textFont(fonte);
          fill(0);
          textSize(32);//Tamanho Fonte
          text('  933\n' + '/ 3', xtxt, ytxt);
          text('233', xTxtPorta1, yTxtPorta);
          text('611', xTxtPorta2, yTxtPorta);
          text('311', xTxtPorta3, yTxtPorta);
          textSize(20);
          text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.5
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  if(tela == 8.5){
     image(portaJogo, 0, 0);
      textFont(fonte);
      fill(0);
      textSize(32);//Tamanho Fonte
      text('  512\n' + '- 47', xtxt, ytxt);
      text('455', xTxtPorta1, yTxtPorta);
      text('460', xTxtPorta2, yTxtPorta);
      text('465', xTxtPorta3, yTxtPorta);
      textSize(20);
      text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta2 && mouseX <= larguraPorta2 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.6
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
  
  if(tela == 8.6){
            image(portaJogo, 0, 0);
            textFont(fonte);
            fill(0);
            textSize(15);//Tamanho Fonte
            text('Marcela ganhou um livro de historias e já leu 187 páginas desse livro, mas ainda\nfaltam 218. Quantas paginas tem o     livro?', 3, ytxt);
            textSize(32);
            text('403', xTxtPorta1, yTxtPorta);
            text('393', xTxtPorta2, yTxtPorta);
            text('405', xTxtPorta3, yTxtPorta);
            textSize(20);
            text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta3 && mouseX <= larguraPorta3 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.7
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
 }
  
  if(tela == 8.7){
        image(portaJogo, 0, 0);
        textFont(fonte);
        fill(0);
        textSize(32);//Tamanho Fonte
        text('   760\n' + '+ 180', xtxt, ytxt);
        text('940', xTxtPorta1, yTxtPorta);
        text('912', xTxtPorta2, yTxtPorta);
        text('950', xTxtPorta3, yTxtPorta);
        textSize(20);
        text('Voltar ao Menu', 55, 320);
    
    if(mouseX >= xporta1 && mouseX <= larguraPorta1 && mouseY >= yPorta && mouseY <= alturaPorta && mouseIsPressed){
      tela = 8.8
    }
    
    if(mouseX >= xvoltar && mouseX <= larguraVoltar && mouseY >= yvoltar && mouseY <= alturaVoltar && mouseIsPressed){
      tela = 1;
    }
  }
  
    if(tela == 8.8){
        image(fimJogo, 0, 0);
    
    if(mouseX >= xvoltarJogoFinal && mouseX <= larguraVoltarJogoFinal && mouseY >= yvoltarJogoFinal && mouseY <= alturaVoltarJogoFinal && mouseIsPressed){
      tela = 0
    }
  }
}

function menu(){
  textFont(fonte);//Fonte Texto
  fill(255);//Cor Texto
  
  if(tela == 0){//Inicio Da Tela de Menu
    image(telaMenu, 0, 0);//Tela Fundo
    textSize(32);//Tamanho Fonte
    text('Iniciar', 375, 160);//Localização INICIAR
    text('Ajuda', 375, 225);//Localização AJUDA
    text('Sobre', 375, 295);//Localização SOBRE
    
    if(mouseX >= xMenu && mouseX <= larguraMenu && mouseY >= yMenu1 && mouseY <= alturaMenu1 && mouseIsPressed){
      tela = 1 //Mudança de Tela; INICIAR
      efeitoMudar.play();//Efeito mudança de tela
    }
    
   if(mouseX >= xMenu && mouseX <= larguraMenu && mouseY >= yMenu2 && mouseY <= alturaMenu2 && mouseIsPressed){
     tela = 2 //Mudança de Tela; AJUDA
     efeitoMudar.play();//Efeito mudança de tela
   }
    
  if(mouseX >= xMenu && mouseX <= larguraMenu && mouseY >= yMenu3 && mouseY <= alturaMenu3 && mouseIsPressed){
    tela = 3 //Mudança de Tela; SOBRE
    efeitoMudar.play();//Efeito mudança de tela
  }
    
  }//Final da Tela de Menu
  
  if(tela == 1){//Tela do Modo de Jogo
    image(telaModoJogo, 0, 0);
    textSize(32);//Tamanho Fonte
    text('Adição', 110, 80);//Esquerda
    textSize(28);//Tamanho Fonte
    text('Multiplicação', 78, 180);//Esquerda
    textSize(32);//Tamanho Fonte
    text('Subtração', 385, 80);//Direita
    text('Divisão', 400, 180);//Direita
    text('Todos', 260, 275);//Centro
    
    if(mouseX >= xVoltar1 && mouseX <=larguraVoltar1 && mouseY >= yVoltar1 && mouseY <= alturaVoltar1 && mouseIsPressed){
      tela = 0; //Butão de Voltar
      efeitoMudar.play();//Efeito mudança de tela
    }
    
  }
  
  if(tela == 2){//Tela da Ajuda 
    image(telaAjuda, 0, 0);
    
    if(mouseX >= xVoltar2 && mouseX <=larguraVoltar2 && mouseY >= yVoltar2 && mouseY <= alturaVoltar2 && mouseIsPressed){
      tela = 0; //Botão Voltar
      efeitoMudar.play();//Efeito mudança de tela
    }
    
  }
  
  if(tela == 3){//Tela Sobre
    image(telaSobre, 0, 0);
    
    if(mouseX >= xVoltar3 && mouseX <=larguraVoltar3 && mouseY >= yVoltar3 && mouseY <= alturaVoltar3 && mouseIsPressed){
      tela = 0; //Botão Voltar
      efeitoMudar.play();//Efeito mudança de tela
    }
    
  }
  
  if(mouseX >= xEsquerdo && mouseX <= larguraEsquerdo && mouseY >= yEsquerdo1 && mouseY <= alturaEsquerdo1 && mouseIsPressed){
    tela = 4; 
  }
  
  if(mouseX >= xDireito && mouseX <= larguraDireito && mouseY >= yDireito1 && mouseY <= alturaDireito1 && mouseIsPressed){
    tela = 5; 
  }
  
  if(mouseX >= xEsquerdo && mouseX <= larguraEsquerdo && mouseY >= yEsquerdo2 && mouseY <= alturaEsquerdo2 && mouseIsPressed){
    tela = 6; 
  }
  
  if(mouseX >= xDireito && mouseX <= larguraDireito && mouseY >= yDireito2 && mouseY <= alturaDireito2 && mouseIsPressed){
    tela = 7; 
  }
  
  if(mouseX >= xCentro && mouseX <= larguraCentro && mouseY >= yCentro && mouseY <= alturaCentro && mouseIsPressed){
    tela = 8; 
  }
  
}

function draw() {
  adicao();
  subtracao();
  multiplicacao();
  divisao();
  menu();
}