<img src="imagem finanças.png" alt="Imagem Finanças" style="width: 100%;">

# Contas a Pagar
# Trabalho de Desenvolvimento de Software - Módulo Financeiro

Este repositório contém o código-fonte e informações relacionadas ao trabalho de desenvolvimento de software do módulo financeiro de um sistema ERP para cooperativas.

## Grupo

- Hiago Henrique Tofanelli
- Vinicius Bertoldi Motta

## Pontuação Atual

Pontuação atual do grupo: 3 pontos

## Entrega e Avaliação

- Forma de Entrega: O link para o repositório remoto no GitHub deve ser postado no Ambiente Virtual de Aprendizagem (AVA).
- Data de Entrega: 25/10/2023
- Forma de Avaliação: Seminário

 ## Instruções Gerais
 
<details>
<summary>Instruções Gerais</summary>

  1. O software deve seguir a arquitetura Cliente-Servidor conforme ensinado nas aulas da disciplina.
  2. Criar um repositório no GitHub para o projeto, com um arquivo .gitignore.
  3. Não utilizar o repositório criado para acompanhar as aulas.
  4. Criar APIs do Back-End em qualquer linguagem de programação.
  5. Armazenar os dados em um Servidor de Banco de Dados (SGBD).
  6. Proteger as rotas das APIs com JWT ou outro mecanismo de token semelhante.
  7. Implementar autenticação para entrar no sistema.
  8. O layout do Front-End pode utilizar um template de administração disponibilizado em sala de aula ou ser personalizado.
  9. O Front-End não deve fazer acesso direto ao SGBD.
  10. Este trabalho não terá continuação.

</details>

## Apresentação do Seminário

<details>
  <summary>Estudo de Caso</summary>
O grupo deve implementar APIs e uma interface gráfica para realizar o CRUD relacionado a uma tabela do módulo financeiro do sistema ERP. A escolha da tabela fica a cargo do grupo, exemplos incluem contas a pagar, contas a receber, plano de contas, bancos, agências, conta corrente, etc.

Todas as tabelas devem ter pelo menos os seguintes campos: ID, Removido, um campo de texto, um campo de data e um campo decimal.

</details>
<details>
  <summary>Regras de Negócio</summary>
O grupo deve implementar 5 operações de CRUD de acordo com as realizadas em atividades anteriores e vistas em sala de aula. As operações são:

GetAllXXX: Retorna todos os campos da tabela que não foram apagados (campo 'removido' igual a false).
GetXXXByID: Retorna todos os campos da tabela de acordo com o ID informado, desde que o registro não tenha sido apagado.
InsertXXX: Insere um novo registro na tabela.
UpdateXXX: Atualiza um registro na tabela com base no ID informado.
DeleteXXX: Efetua um soft delete de um registro na tabela com base no ID informado, definindo o campo 'removido' como true.
</details>

### Front-End

Para cada API do back-end, deve ser criada uma função correspondente no front-end. Deve haver controle de sessão para usuário logado.

## Avaliação do Trabalho

### Sobre o Repositório Remoto

- (5,0 pontos) Não postar o link do repositório remoto no Moodle.

### Sobre o Software

| Aspecto                               | Pontuação |
| ------------------------------------ | --------- |
| Criar as 05 APIs no back-end          | 10,0      |
| Criar as 05 funções no front-end      | 06,0      |
| Criar a tela de login                 | 04,0      |
| Criar controle de sessão              | 02,0      |
| Implementar mecanismo de segurança JWT | 04,0      |
| Criar repositório no GitHub           | 07,0      |

### Sobre o Seminário

- Apresentação até 15 minutos.
- Forma de avaliação: Serão descontados pontos por tempo excedido e vestimenta inadequada.

| Aspecto                                      | Pontuação |
| -------------------------------------------- | --------- |
| Tempo de Apresentação (até 15 minutos)      | -         |
| Tempo Excedido (por minuto extra)           | -0,2      |
| Vestimenta Inapropriada (chinelo, bermuda, camiseta cavada) | -3,0 |

