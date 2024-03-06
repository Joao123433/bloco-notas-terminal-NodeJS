# Notas Rápidas no Terminal v1.0
Este é um projeto simples de notas rápidas no terminal desenvolvido em Node.js. Permite ao usuário realizar operações básicas como adicionar, visualizar, excluir e listar notas.

## Funcionalidades
1. Adicionar Novas Notas
Permite ao usuário adicionar novas notas ao fornecer o texto desejado. As notas são salvas em um diretório chamado "notes" com o formato de nome de arquivo sendo um número seguido por "-notas".

2. Visualizar uma Nota Específica
Permite ao usuário visualizar o conteúdo de uma nota específica, fornecendo o número da nota desejada.

3. Excluir uma Nota
Permite ao usuário excluir uma nota específica, fornecendo o número da nota desejada.

4. Ver Todas as Notas Salvas
Lista todas as notas salvas no diretório "notes", caso existam.

5. Sair
Encerra o programa

## Como Usar
1. Execute o script em um ambiente Node.js.
2. Escolha a operação desejada digitando o número correspondente.
3. Siga as instruções fornecidas para realizar a operação desejada.

## Estrutura do Projeto
- `index.js:` Contém o código principal do projeto.
- `notes:` Diretório onde as notas são armazenadas.

## Dependências
O projeto depende das seguintes bibliotecas do Node.js:
- `fs:` Para operações de sistema de arquivos.
- `path:` Para manipulação de caminhos de arquivos.
- `readline:` Para interação com o usuário por meio do terminal.

## Como Iniciar
1. Certifique-se de ter o Node.js instalado em seu ambiente.
2. Clone o repositório ou copie o conteúdo do arquivo index.js.
3. Execute o script usando o comando node index.js no terminal.