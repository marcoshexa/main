O que vamos aprender?
Aqui você vai aprender como estruturar páginas HTML estilizadas com o CSS de uma forma muito prática e criando vários projetos.
Para isso, dividimos o conteúdo em quatro partes:
Primeiro você irá aprender a usar as principais tags do HTML para criar a estrutura das páginas web
Depois, você vai aprender como usar o CSS para estilizar as tags, usando diferentes formas de selecionar os elementos HTML
No terceiro dia, você vai aprender como alterar o posicionamento dos elementos na página e como algumas propriedades específicas alteram as dimensões dos elementos
No último conteúdo, você aprenderá sobre o significado que cada elemento HTML carrega e sobre como isso impacta a acessibilidade da página e a interpretação do conteúdo por indexadores de pesquisa, como o Google
Para fechar com chave de ouro, você desenvolverá a sua própria página, aplicando todo o seu conhecimento, de acordo com a especificação do projeto final

O que vamos aprender?
Para trabalhar com desenvolvimento de software web, você vai precisar de um sólido conhecimento nas partes fundamentais do código que roda no cliente: HTML, CSS e JavaScript. Afinal, esse será o ponto de contato dos usuários com as suas aplicações.
Na primeira parte da sua jornada através do HTML & CSS, você vai aprender na prática como utilizar HTML para estruturar páginas web.

Você será capaz de:
Estruturar páginas web com HTML utilizando as tags html, head e body;
Utilizar o HTML para estruturar textos e títulos;
Utilizar o HTML para criar listas, links e adicionar imagens;

Por que isso é importante?
Para trabalhar com desenvolvimento web, não é estritamente necessário aprender HTML e CSS. Porém, no decorrer da sua carreira, certamente você vai se deparar com código e/ou aplicações inteiras que rodam no cliente. Então, o quanto antes você iniciar seu contato com as linguagens de marcação, estilo e comportamento utilizadas no cliente (por exemplo, os browsers), mais rápido irá desenvolver as habilidades necessárias para criar páginas web cada vez mais robustas!
O HTML e o CSS são duas das pedras fundamentais no desenvolvimento web. São duas linguagens muito poderosas, que te permitem criar páginas web do zero e são utilizadas como base para inúmeras outras tecnologias de desenvolvimento web, como vamos aprender ao longo do curso.
Você pode pensar no HTML como se fosse o esqueleto da sua página. É através do HTML que você irá criar a estrutura de como a página vai ser exibida, definindo quais tags servirão para títulos, subtítulos, parágrafos, e outros conteúdos ricos como links, imagens, vídeos etc.

Conteúdos
Para que você aprenda na prática, a partir de agora vamos ter vários conteúdos interativos, por meio dos quais você irá seguir a teoria e fazer exercícios ao mesmo tempo. Vamos lá!
Você irá desenvolver alguns desafios entre os vídeos. Para subi-los para o seu repositório de exercícios, siga as instruções abaixo.
PS: Peça ajuda no Slack em caso de dúvidas!
fundamentos
Antes de começar: versionando seu código
Para versionar seu código, utilize o seu repositório de exercícios. 😉
Abaixo você vai ver exemplos de como organizar os exercícios do dia em uma branch, com arquivos e commits específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.
Abra a pasta de exercícios:
Copiar
$ cd ~/trybe-exercicios
Certifique-se de que está na branch main e ela está sincronizada com a remota. Caso você tenha arquivos modificados e não comitados, deverá fazer um commit ou checkout dos arquivos antes deste passo.
Copiar
$ git checkout main
$ git pull
A partir da main, crie uma branch com o nome exercicios/3.1 (bloco 3, dia 1)
Copiar
$ git checkout -b exercicios/3.1
Caso seja o primeiro dia deste módulo, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir fundamentos
$ cd fundamentos
Caso seja o primeiro dia do bloco, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir bloco-3-introducao-a-html-e-css
$ cd bloco-3-introducao-a-html-e-css
Crie um diretório para o dia e o acesse na sequência:
Copiar
$ mkdir dia-1-html-css-estruturas-de-pagina
$ cd dia-1-html-css-estruturas-de-pagina
Os arquivos referentes aos exercícios deste dia deverão ficar dentro do diretório ~/trybe-exercicios/fundamentos/block-3-introducao-a-html-e-css/dia-1-html-css-estruturas-de-pagina. Lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

Verifique os arquivos alterados/adicionados:
Copiar
$ git status
On branch exercicios/3.1
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercicio-1

Adicione os arquivos que farão parte daquele commit:
Copiar
# Se quiser adicionar os arquivos individualmente
$ git add caminhoParaArquivo

# Se quiser adicionar todos os arquivos de uma vez, porém, atente-se
para não adicionar arquivos indesejados acidentalmente
$ git add --all

Faça o commit com uma mensagem descritiva das alterações:
Copiar
$ git commit -m "Mensagem descrevendo alterações"
Você pode visualizar o log de todos os commits já feitos naquela branch com git log.
Copiar
$ git log
commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercicios/3.1)
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 17:48:01 2019 -0300

    Exercicio 2 - mudando o evento de click para mouseover, tirei o alert e coloquei pra quando clicar aparecer uma imagem do lado direito da tela

commit c0701d91274c2ac8a29b9a7fbe4302accacf3c78
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 16:47:21 2019 -0300

    Exercicio 2 - adicionando um alert, usando função e o evento click

commit 6835287c44e9ac9cdd459003a7a6b1b1a7700157
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 15:46:32 2019 -0300

    Resolvendo o exercício 1 usando eventListener
Agora que temos as alterações salvas no repositório local precisamos enviá-las para o repositório remoto. No primeiro envio, a branch exercicios/3.1 não vai existir no repositório remoto, então precisamos configurar o remote utilizando a opção --set-upstream (ou -u, que é a forma abreviada).
Copiar
$ git push -u origin exercicios/3.1
Após realizar o passo 9, podemos abrir a Pull Request a partir do link que aparecerá na mensagem do push no terminal, ou na página do seu repositório de exercícios no GitHub através de um botão que aparecerá na interface. Escolha a forma que preferir e abra a Pull Request. De agora em diante, você repetirá o fluxo a partir do passo 7 para cada exercício adicionado, porém como já definimos a branch remota com -u anteriormente, agora podemos simplificar os comandos para:
Copiar
# Quando quiser enviar para o repositório remoto
$ git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
$ git pull
Quando terminar os exercícios, seus códigos devem estar todos commitados na branch exercicios/3.1, e disponíveis no repositório remoto do GitHub. Pra finalizar, compartilhe o link da Pull Request no canal de Code Review para a monitoria e/ou colegas revisarem. Faça review você também, lembre-se que é muito importante para o seu desenvolvimento ler o código de outras pessoas. 🤜🏼🤛🏼

Conteúdos
Para que você aprenda na prática, a partir de agora vamos ter vários conteúdos interativos, por meio dos quais você irá seguir a teoria e fazer exercícios ao mesmo tempo. Vamos lá!
Você irá desenvolver alguns desafios entre os vídeos. Para subi-los para o seu repositório de exercícios, siga as instruções abaixo.
PS: Peça ajuda no Slack em caso de dúvidas!
fundamentos
Antes de começar: versionando seu código
Para versionar seu código, utilize o seu repositório de exercícios. 😉
Abaixo você vai ver exemplos de como organizar os exercícios do dia em uma branch, com arquivos e commits específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.
Abra a pasta de exercícios:
Copiar
$ cd ~/trybe-exercicios
Certifique-se de que está na branch main e ela está sincronizada com a remota. Caso você tenha arquivos modificados e não comitados, deverá fazer um commit ou checkout dos arquivos antes deste passo.
Copiar
$ git checkout main
$ git pull
A partir da main, crie uma branch com o nome exercicios/3.1 (bloco 3, dia 1)
Copiar
$ git checkout -b exercicios/3.1
Caso seja o primeiro dia deste módulo, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir fundamentos
$ cd fundamentos
Caso seja o primeiro dia do bloco, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir bloco-3-introducao-a-html-e-css
$ cd bloco-3-introducao-a-html-e-css
Crie um diretório para o dia e o acesse na sequência:
Copiar
$ mkdir dia-1-html-css-estruturas-de-pagina
$ cd dia-1-html-css-estruturas-de-pagina
Os arquivos referentes aos exercícios deste dia deverão ficar dentro do diretório ~/trybe-exercicios/fundamentos/block-3-introducao-a-html-e-css/dia-1-html-css-estruturas-de-pagina. Lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

Verifique os arquivos alterados/adicionados:
Copiar
$ git status
On branch exercicios/3.1
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercicio-1

Adicione os arquivos que farão parte daquele commit:
Copiar
# Se quiser adicionar os arquivos individualmente
$ git add caminhoParaArquivo

# Se quiser adicionar todos os arquivos de uma vez, porém, atente-se
para não adicionar arquivos indesejados acidentalmente
$ git add --all

Faça o commit com uma mensagem descritiva das alterações:
Copiar
$ git commit -m "Mensagem descrevendo alterações"
Você pode visualizar o log de todos os commits já feitos naquela branch com git log.
Copiar
$ git log
commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercicios/3.1)
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 17:48:01 2019 -0300

    Exercicio 2 - mudando o evento de click para mouseover, tirei o alert e coloquei pra quando clicar aparecer uma imagem do lado direito da tela

commit c0701d91274c2ac8a29b9a7fbe4302accacf3c78
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 16:47:21 2019 -0300

    Exercicio 2 - adicionando um alert, usando função e o evento click

commit 6835287c44e9ac9cdd459003a7a6b1b1a7700157
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 15:46:32 2019 -0300

    Resolvendo o exercício 1 usando eventListener
Agora que temos as alterações salvas no repositório local precisamos enviá-las para o repositório remoto. No primeiro envio, a branch exercicios/3.1 não vai existir no repositório remoto, então precisamos configurar o remote utilizando a opção --set-upstream (ou -u, que é a forma abreviada).
Copiar
$ git push -u origin exercicios/3.1
Após realizar o passo 9, podemos abrir a Pull Request a partir do link que aparecerá na mensagem do push no terminal, ou na página do seu repositório de exercícios no GitHub através de um botão que aparecerá na interface. Escolha a forma que preferir e abra a Pull Request. De agora em diante, você repetirá o fluxo a partir do passo 7 para cada exercício adicionado, porém como já definimos a branch remota com -u anteriormente, agora podemos simplificar os comandos para:
Copiar
# Quando quiser enviar para o repositório remoto
$ git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
$ git pull
Quando terminar os exercícios, seus códigos devem estar todos commitados na branch exercicios/3.1, e disponíveis no repositório remoto do GitHub. Pra finalizar, compartilhe o link da Pull Request no canal de Code Review para a monitoria e/ou colegas revisarem. Faça review você também, lembre-se que é muito importante para o seu desenvolvimento ler o código de outras pessoas. 🤜🏼🤛🏼
