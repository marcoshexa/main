O que vamos aprender?
Na última aula você aprendeu que o Git e o GitHub podem te ajudar muito a trabalhar de maneira colaborativa e distribuída. 🧩
Hoje você aprenderá algumas técnicas para maximizar a eficiência desse trabalho em grupo, garantindo uma boa qualidade do software que você escreve! 😮

Você será capaz de:
Copiar um repositório já existente no GitHub para o seu computador;
Abrir Pull Requests;
Trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída.

Por que isso é importante?
Entender o conceito de Git é uma das habilidades fundamentais que você vai exercitar ao longo de todo o curso. É fato que, por ser um conceito novo e diferente para você, será necessário muita prática para sedimentar esse conceito.
É por isso que utilizamos diariamente o Git e o GitHub no curso, para que você tenha inúmeras chances de executar os comandos do Git, criar repositórios, fazer commits e contribuir com seus Pull Requests nos projetos.
Somente colocando em prática diariamente os conceitos do Git você conseguirá se aperfeiçoar no uso de repositórios e do versionamento de código! ✌️ 💪 👊

Conteúdos

Parte 1 - Baixando repositórios com o git clone
Caso você queira copiar um repositório Git já existente — por exemplo, um projeto em que você queira contribuir —, o comando necessário é: git clone.
Mais do que baixar o código atual, o Git recebe uma cópia de quase todos os dados que o servidor possui. Cada versão de cada arquivo no histórico do projeto é obtida quando você roda o comando git clone.
Vamos clonar o projeto que você criou na última aula para testar como funciona:
Crie uma nova pasta fora do diretório dos exercícios trybe-exercises;
Navegue para a pasta criada e execute o comando.
Copiar
git clone urlDoSeuRepositórioTrybeExercises
Você irá perceber que é exatamente um "clone" do que você subiu para o GitHub;
Normalmente, ao participar dos projetos da Trybe, você irá precisar desse comando para conseguir baixar o repositório que já está configurado e poder focar apenas nos requisitos do projeto.

Parte 2 - Do git log ao Pull Request
Vamos aprender um pouco mais sobre Git e seus comandos para lidar com os commits e pushes que você aprendeu a fazer. 😁
2.1 - Git log

👀 De olho na dica: Não se esqueça de "commitar" com frequência, além de ser considerada uma boa prática, isso facilitará o acompanhamento e manutenção do seu código. Evite commits extensos.
2.2 - Git remove

2.3 - Git ignore

2.4 - Git push, pull, fetch

2.5 - Pull Request no GitHub
Agora vamos aprender a como criar um Pull Request no GitHub. Esse processo é importante para você realizar sugestões e contribuir com alterações em um repositório, basta ter a permissão para leitura.
A vantagem de se realizar o Pull Request é que você garante que a branch-padrão terá todo seu trabalho concluído e aprovado, realizando todas as novas alterações em uma branch separada.
Vamos observar o processo abaixo:
1 - Navegue até a página principal do repositório no GitHub;
2 - No menu "Branch", você pode digitar o nome da sua nova branch e clicar em Create new branch;

Página de criação para Pull Request
3 - Acima da lista de arquivos, clique em Pull request;

Página de botão para Pull Request
4 - Use o menu suspenso da branch base para selecionar a branch em que deseja fazer merge de suas alterações. Em seguida, use o menu suspenso da branch de comparação para escolher a branch de tópico no qual você fez as alterações;

Página de abertura de Pull Request
Obs: Para seguir para o passo 5 é preciso ter o primeiro commit realizado, caso tenha dificuldades em realizar pelo GitHub, siga a dica Extra realizando pelo seu terminal.
5 - Digite um título e uma descrição para o Pull Request;

Página de descrição de Pull Request
6 - Para criar um Pull Request que está pronto para revisão, clique em Criar Pull Request. Para criar um rascunho de Pull Request, use o menu suspenso e selecione Criar rascunho de pull request e, em seguida, clique em Rascunho de Pull Request.

Página para criar Pull Request
Extra: Você também pode criar o Pull Request, após fazer o git push na sua máquina local. Aparecendo logo após o push o botão Comparar e Pull Request:
Botão para criar Pull Request
Botão para criar Pull Request
Após clicar é só realizar os passo de 4 a 6.
Contextualizando
Vamos dar uma pincelada sobre como podemos criar Pull Requests. Basicamente, tudo vai depender da forma que criamos a nossa branch: se foi por meio do terminal ou por meio do GitHub em si.
A forma como você cria sua branch diz muito sobre como o Pull Request poderá ser implementado:
Quando estamos criando pelo terminal e realizamos as alterações necessárias, podemos linkar ela com o GitHub. Assim, nossa branch estará no nosso repositório remoto e disponível para implementar o Pull Request.
Quando estamos criando pelo navegador, o processo envolve mais cliques do que teclas. No GitHub, vamos ao menu de branchs para criar uma. Assim, ela já estará disponível para criar o Pull Request.
Lembrando que os dois métodos são super válidos. A lição que se deve aprender aqui é que sua branch precisa estar disponível no GitHub e que ela deve estar relacionada a uma outra branch onde nossas mudanças serão adicionadas.
Até agora foram apresentados diversos conceitos sobre git e GitHub. Pode parecer complexo agora, mas você irá repetir esses comandos praticamente em todos os dias durante seu percurso na Trybe e eles irão acabar se tornando naturais conforme você for estudando e o tempo for passando. Lembre também que a prática é a chave de tudo no universo da programação!!
Por agora, se atente às duas formas de se criar uma branch (via terminal e via GitHub) e suas diferenças.
Não se esqueça de rever os conceitos da aula caso ainda haja alguma dúvida ou, caso necessário, pedir ajuda a alguma pessoa instrutora. Esse é um assunto que no início é delicado de se abstrair, portanto, não hesite se tiver que voltar à explicação quando for realizar os exercícios.
Encorajamos você a focar seus esforços primeiramente em entender o fluxo da criação do Pull Request, pois não é vergonha alguma voltar atrás para ver como se executa os códigos. 💪💪