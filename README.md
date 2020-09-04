  # Processo Seletivo Backend   ![enter image description here](http://www.mercafacil.me/img/logo.svg)

O objetivo deste teste é avaliar seu desempenho em desenvolver uma solução de integração entre sistemas.

O problema consiste em receber 1 ou mais contatos de celulares através de uma API Rest e adicioná-los ao banco de dados do cliente Macapá ou do cliente VareJão.

Fluxo de Ações
- A API receberá um JSON via POST contendo o nome e celular;
- O cliente deverá estar autenticado para inserir o contato na base
- O contato deverá ser inserido no banco de dados do cliente seguindo as regras de cada cliente

Especificações da API:
- A autenticação será através de um token JWT no Authorization Header
- Cada cliente tem 1 uma chave única
- A lista de contatos que será inserido em cada cliente está no arquivo contato.json

Especificações do Cliente Macapá:
- Banco de dados Mysql
- Formato do Nome é somente maiúsculas
- O formato de telefone segue o padrão +55 (41) 93030-6905
- Em anexo está o sql de criação da tabela

Especificações do Cliente VareJão:
- Banco de dados Postgresql
- Formato do Nome é livre
- O formato de telefone segue o padrão 554130306905
- Em anexo está o sql de criação da tabela

A criação de um ambiente de testes usando Docker para simular o banco de dados do cliente é altamente recomendada.
A solução poderá ser desenvolvida em Golang, Node.js ou Python.
Fique livre para desenhar a solução da maneira que achar mais conveniente e supor qualquer cenário que não foi abordado nas especificações acima.
Se, por qualquer motivo, você não consiga completar este teste, recomendamos que nos encaminhe o que foi desenvolvido de qualquer maneira.
A falta de cumprimento de alguns dos requisitos aqui descritos não implica necessariamente na desconsideração do candidato.

  # Executando projeto
  O projeto consta com o arquivo ***docker-compose.yml*** e para executar o ambiente de desenvolvimento do projeto bastar executar o comando:

    docker-composer up --build

  Isso irá subir o ambiente da aplicação e os bancos de dados.

  O servidor será executado em:


    localhost:3001

Para acessar a documentação da API:

    localhost:3001/explorer

  <a href="https://loopback.io" target="_blank">
    <img src="https://loopback.io/images/branding/powered-by-loopback/blue/powered-by-loopback-sm.png" />
  </a>
