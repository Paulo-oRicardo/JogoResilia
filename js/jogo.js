
function nome(){
   var nome = prompt("Antes de irmos, preciso saber o seu nome");
   alert(`${nome} para seguirmos nessa aventura, você precisa escolher 
 seu modo de ver a vida`);
   console.log (window.location.href = './pages/personagens.html');
}

function personagens(escolha) {
   var certeza = prompt("Certeza que deseja viver dessa forma?\n digite sim ou não");

   if(certeza == 'sim' || certeza == 'yes'){
      alert("Boa sorte em sua trajetória !!");
      if ( escolha == 'cinismo') {         
         historiaCinismo();
         
      } 

      if (escolha == 'epicurismo'){
         historiaEpicurismo();
      }

      if(escolha == 'ceticismo'){
         historiaCiticismo();
      }
   }else{
      alert("Respire um minuto, só continue se estiver verdadeiramente pronto");
   }
   
}


function historiaCinismo(){
          alert("Olá novamente. Você é um cinista, segundo o que sei não liga para nenhum padrão se quer, como todo bom cinista, vive nas ruas. Para chegar ao mirante será necessário pedir dinheiro" );
          alert("Você sai pelo bairro de Santana pedindo dinheiro no farol. Alguém passando de moto lhe desfere uma cúspida, após limpar aquilo, chega um homem.");
         var agape = prompt("Fala tu meu maestro, me chamo Jackson. Tendo um dia difícil né, essas pessoas não sabem respeitar ninguém mesmo. Aprendi com  um cara que seu eu posso fazer o bem a alguém e não faço, estou errado, pratico o amor ágape. Qual seu nome?");
         var dialog = prompt(`${agape} Pó tu parece ser maneiro, seus ideais são fortes, te respeito, mas alguns padrões são necessarios. Tome aqui R$5,00, isso é tudo o que tenho, espero que ajude
 Digite sim para aceitar
 Digite não para negar`);
         if(dialog == 'sim' || dialog == 'yes'){
            
            alert("Você aceita o dinheiro com toda gratidão, agora pode ir pegar o mêtro direção, Trianon Masp");
            alert("O cara era legal mesmo. Difícil praticar o ágape que ele disse, nos escritos biblicos é como uma expressão do amor que é incondicional e voluntário, isto é, não discrimina, não tem nenhuma pré-condição, e é algo que se decide fazer voluntariamente. ");
            alert("Ao entrar no mêtro, percebe que todos se afastão de você por causa de seu jeito. Aqui as pessoas temem aquilo que não conhecem, olham estranho e até mesmo resmungos sobre você. \n Mas de repente vem vindo um homem em sua direção.");
           maquiavel();
         } else {
            alert("Saia fora Jackson, nenhum padrão é necessário, se respeita meus ideias, não fale besteira, não preciso de você!! Outras pessoas irão me dar dinheiro");
            alert("Você bate na mão de Jackson e sai andando, enquanto resmunga");
            alert("O dia passa e você não consegue o dinheiro necessário, em uma tentativa de pular as catracas do mêtro os sguranças te batem muito.");
            alert("Sangrando você vai dormir nas ruas, após conseguir dormir, jovens vêm e tacam fogo em você");
            alert("Fim de jogo. Você está morto por seu nervosismo e imprudência ") ;
         }
}
function historiaEpicurismo(){
      alert('Olá novamente!. Então você é um epicurista, seus prazeres são divididos em três: Os naturais e necessário. Naturais e não necessários e os não naturais e nem necessários. Mas como achar uma forma de conciliar todos? As vezes vale a pena uma dor por um prazer? Isso você deve descobrir\nBoa sorte em sua viagem epicurista.')
      alert('Você sai de casa cedo em direção a Santana, Chegando no ponto de ônibus se depara com uma senhora de idade. A mesma lhe pergunta o horário, após sua resposta ela diz Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida. Após isso, ela sobe no ônibus e vai embora');
      var assalto = prompt("Após a frase da senhora, você pega o seu ônibus e continua pensativo, sentada do lado de uma pessoal que começa a puxar assunto, mas quando você menos espera ele anuncia um assalto. Você pode reagir ou apenas entregar seus pertences\nDigite 1 para reagir\nDigite 0 para entregar");
      if (assalto == 1){
         alert("Você reage bravamente, todos estão te olhando lutar, mas nenhum ajuda lhe é dada, quando você pensa que venceu, o assaltante saca o revolvér e lhe da três tiros, caido no chão você morre");
         alert("FIM DO JOGO!");
         if(confirm ("Deseja jogar novamente?")){
            historiaEpicurismo();
         }else{
            alert("Thanks for gaming");
         }
      }if (assalto == 0){
         alert("Você entrega seus pertences, mas como não é muito e você estava conversando com o assaltante antes, ele apenas joga sua carteira em você e leva seu celular. Saindo do ônibus você entra em outro e segue sua viagem");
         var onibusMetro = prompt("Agora você está em Santana. Precisa decidir se vai seguir o seu caminho de ônibus ou mêtro\n Digite 1 para ônibus\n Digite 0 para mêtro");
         if(onibusMetro == 1){
            alert("Vejo que nada te abala e mesmo após um assalto ainda segue de ônibus tranquilamente. Seu sentindo epicurista realmente é forte, a dor pode causar uma recompensa, e a sua esta no mirante da Paulista\r De repente um homem senta do seu lado");
          maquiavel();
         }
         }if(onibusMetro == 0){
            alert("Pelo visto o ônibus pode ter te deixado meio mal, melhor mesmo ficar longe de ônibus por um tempo, você fez a escolha mais rápida");
            maquiavel();
            }
         }
      
function historiaCiticismo(){
   alert("Olá novamente. Pelo visto você é um cético, tudo para você é dúvido, nada é certo até que se prove ao contrário, pessoas assim tem sua personalidade forte e cabeça duro. Respeitosa escolha, mas no dia a dia temos que acreditar em algo.");
   alert('Você sai de casa cedo em direção a Santana, Chegando no ponto de ônibus se depara com uma senhora de idade. A mesma lhe pergunta o horário, após sua resposta ela diz Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida. Após isso, ela sobe no ônibus e vai embora');
   var assalto = prompt("Após a frase da senhora, você pega o seu ônibus e continua pensativo, sentada do lado de uma pessoal que começa a puxar assunto, mas quando você menos espera ele anuncia um assalto. Você pode reagir ou apenas entregar seus pertences\nDigite 1 para reagir\nDigite 0 para entregar");
   if (assalto == 1){
      alert("Você reage bravamente, todos estão te olhando lutar, mas nenhum ajuda lhe é dada, quando você pensa que venceu, o assaltante saca o revolvér e lhe da três tiros, caido no chão você morre");
      alert("FIM DO JOGO!");
      if(confirm ("Deseja jogar novamente?")){
         historiaEpicurismo();
      }else{
         alert("Thanks for gaming");
      }
   }if (assalto == 0){
      alert("Você entrega seus pertences, mas como não é muito e você estava conversando com o assaltante antes, ele apenas joga sua carteira em você e leva seu celular. Saindo do ônibus você entra em outro e segue sua viagem");
      var onibusMetro = prompt("Agora você está em Santana. Precisa decidir se vai seguir o seu caminho de ônibus ou mêtro\n Digite 1 para ônibus\n Digite 0 para mêtro");
      if(onibusMetro == 1){
         alert("Vejo que nada te abala e mesmo após um assalto ainda segue de ônibus tranquilamente. Seu sentindo epicurista realmente é forte, a dor pode causar uma recompensa, e a sua esta no mirante da Paulista\r De repente um homem senta do seu lado");
       maquiavel();
      }
      }if(onibusMetro == 0){
         alert("Pelo visto o ônibus pode ter te deixado meio mal, melhor mesmo ficar longe de ônibus por um tempo, você fez a escolha mais rápida");
         maquiavel();
         }
      }

   
   
function maquiavel(){
   var decisaoM = prompt("Oiie, me chamo maquiavel. Tudo bem? \n Estou concorrendo para o cargo de chefe, e bem provável que eles me façam escolher duas opções e não sei qual decidir, pode me ajudar? Ser amado ou temido?\n Digite amado ou\n Digite temido");
   if(decisaoM == 'temido' || decisaoM == 'Temido'){
      alert("Maquiavel - Concordo com você, Ser te mido é muito mais seguro do que ser amado, isso porque os homens podem ser ingratos , volúveis, dissimulados e ambiciosos. É mais seguro ser temido do que amado, quando se tem de desistir de uma das duas, isto porque os homens têm menos receio de ofender a quem se faz amar do que a outro que se faça temer");
      alert("Você sai do mêtro, pensativo sobre a questão feita. Agora está na paulista, tem mais um tanto para andar até o mirante. Vamos nessa");
      paulista();
   }if(decisaoM == 'amado' || decisaoM == 'Amado'){
      alert("Maquiavel - O chefe temido consegue melhor obediência do que o que é amado. Maquiavel indica que a crueldade bem empregada é superior ao excesso de bondade. Mas lhe propõem que pense sobre.");
      alert("Você sai do mêtro, pensativo sobre a questão feita. Agora está na paulista, tem mais um tanto para andar até o mirante. Vamos nessa");
      paulista();
}
}

function paulista(){
   alert("O caminho até o mirante não é tão longo, mas o local é de se surpreender, lembra o que o Aristóteles dizia sobre a beleza, O filósofo entende que o Belo não pode ser desligado do homem, já que ele está em nós, é uma fabricação humana.O que vai garantir beleza a uma obra, é a proporção, a simetria, a ordem, a justa medida.");
   var agressao = prompt("Observando o local, você vê uma agressão acontecendo na sua frente, um homem está agredindo uma mulher incessantemente. Qual será a sua reação a isso ?Reagir ou irá apenas passar e olhar\n Digite agir para fazer algo ou\nDigite olhar para passar olhando");
   if(agressao == 'agir' || agressao == 'agir '){
      alert("Você age e luta contra o homem, da o primeiro soco, após o homem cair no chão ele levanta com uma faca, na tentativa de te golpear, você esquiva e o homem vai ao chão, com um mato leão você finaliza o homem.");
      alert("A mulher pega sua bolsa e os policias chegam para à acudir, ela o agradece e você segue seu caminho aliviado. ");
      mirante();
      riquezas();
   }if(agressao == 'olhar' || agressao == 'olhar '){
      alert("Você passa apenas olhando aquela cena terrível. Seu subconciênte quer acreditar que alguém ajudou aquela mulher. Mas a verdade é que isso não aconteceu, O amor ágape ensinado pelo Jackson, passou longe de você");
      alert("Enquanto você caminha, a culpa assola sua mente, não conseguindo pensar em nada, atravessa a rua.");
      alert("Nesse exato momento passa um carro em alta velocidade e o atropela, a ambulância que estava por perto, socorria a moça, que você apenas olhou, e agora falecendo, continua a olhar");
      var acidente = prompt("Fim do jogo. Deseja continuar a jogar?\n\nDigite sim ou nao ");
      if(acidente == 'sim' || acidente == 'sim '){
         paulista();
      }
      if(acidente == 'nao' || acidente == 'não'){
         voltar();
      }
   }

}
function mirante(){
   alert("Bem, você chegou ao mirante e está subindo pelo elevador, são muitos andares, talvez demore um pouco.");
   alert(`No elevador, você ouve uma frase de Immanuel Kant que diz: "A moral, propriamente dita, não é a doutrina que nos ensina como sermos felizes, mas como devemos tornar-nos dignos da felicidade." `)
  alert(`Fica pensativo, até que chega no último andar, sob as escadas com pressa, ao chegar no topo, se depara com dois baús, em um está escrito\r\nRiquezas Interiores \rEnquanto no outro está\rRiquezas Exteriores\nApenas um tesouro pode ser obtido`); 
}
function riquezas(){
   var riquezas = prompt("Digite o número da sua escolha\n0 - Riquezas Interiores\n1 - Riquezas Externas\n2 - Os dois");
   if(riquezas == 0){
      alert("Parabéns por ter chego até aqui e escolher este tesouro. Você receberá toda sabedoria, Inteligência, que este mundo já viu.");
      alert("Espero que tenha gostado da sua jornada e que tenha aprendido coisas com ela. Boa sorte ser mais Sábio e Inteligente do mundo.");
      console.log(window.location.href='../index.html');
   }  if(riquezas == 1 ){
      alert("Parabéns por ter chego até aqui e escolher este tesouro. Você receberá toda riqueza e tesouro, será a pessoa mais rica do mundo.");
      alert("Espero que tenha gostado de sua jornada, que tenha tirado lições para sua vida e que possa aproveitar toda sua riquza. Pense nos próximos. Boa sorte, ser mais rico do mundo");
      console.log(window.location.href='../index.html');
   } if(riquezas == 2){
      alert("Sua ambição é algo interessante, mesmo após ter lido que apenas poderia escolher um, tentou ter os dois.");
      alert("Como punição por não ter tirado nenhum aprendizado, será banido daqui\n\n FIM DE JOGO");
      console.log(window.location.href ='./baned.html')
   }
}

