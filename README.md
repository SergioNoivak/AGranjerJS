# Introdução

O sistema tem como objetivo o controle de gestão e automação de agrosetores. Inicialmente será focada a parte da maternidade de uma granja suína.

##RF-01 Cadastrar status de usuário

O sistema deve cadastrar status do usuário solicitando as seguintes informações:

* Nome do status de usuário 

**Entrada**: Nome do status de usuário.

**Processo**: O cadastro será incluído no banco de dados

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

### Dependências

Nenhuma.

##RF-02 Cadastrar tipo de conta

O sistema deve cadastrar tipo de conta solicitando as seguintes informações:

* Nome do tipo de conta

**Entrada**: Nome do tipo de conta

**Processo**: O cadastro será incluído no banco de dados

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

### Dependências

Nenhuma.

## RF-03 Cadastrar usuário

O sistema deve cadastrar o usuário solicitando as seguintes informações:

* Nome de usuário
* Senha 
* Email
* Tipo de conta

**Entrada**: Nome de usuário, Tipo de conta, Email e senha.

**Processo**: O cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

### Dependências

Cadastrar status de usuário e tipo de conta.



## RF-04 Recuperar senha de usuário

O sistema deve recuperar a senha do usuário, enviando uma confirmação no email informado no cadastro.

**Entrada**: Nome de usuário, email e senha.

**Processo**: Confirmando a alteração via email, atualizar banco de dados.

**Saída**: Se senha diferente da atual exibe mensagem de sucesso, se não exibe mensagem de erro.

**Prioridade: BAIXA**

### Dependências

Cadastrar de usuário.

## RF-05 Desativar usuário

O sistema deve modificar o nível de acesso do usuário para inativo.

**Entrada**: Nome do usuário.

**Processo**: Altera status do usuário para desativado

**Saída**: Se processo bem sucedido exibe mensagem de sucesso se não exibe mensagem de erro

**Prioridade: BAIXA**

### Dependências

Cadastrar de usuário.

##RF-06 Cadastrar status de matriz

O sistema deve cadastrar status do matriz solicitando as seguintes informações:

* Nome do status de matriz

**Entrada**: Nome do status de matriz

**Processo**: O cadastro será incluído no banco de dados

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

###Dependências
Nenhuma.

## RF-07 Cadastrar matriz
O sistema deve cadastrar a matriz solicitando as seguintes informações:

* Identificação
* Data de nascimento
* Data de entrada em reprodução 
* Quantidade de tetos funcionais
* Status

**Entrada**: Identificação, Data de nascimento, Data de entrada em reprodução, Quantidade de tetos funcionais, Status e Tempo de lactação.

**Processo**: O cadastro será incluído no banco de dados.

**Saída**:
Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

### Dependências

Nenhuma.

## RF-08 Cadastrar intervenções

O sistema deve cadastrar cada intervenção feita em cada matriz solicitando as seguintes informações:

* Matriz
* Motivo
* Procedimento realizado
* Data
* Hora
* Nome do interventor

**Entrada**: Matriz, Motivo, Procedimento realizado, Data, Hora e Nome do interventor.

**Processo**: Cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: MÉDIA**

### Dependências

Cadastrar Matriz.

## RF-09 Cadastrar parto
O sistema deve cadastrar parto de cada matriz solicitando as seguintes informações:

* Matriz
* Data do parto
* Parteiro
* Temperatura retal
* Hora inicial do parto
* Hora final do parto
* Medicada
* Peso da leitegada
* Numero de leitões

**Entrada**: Matriz, Data do parto, Parteiro, Temperatura retal, Hora inicial do parto, Hora final do parto, Medicada,Peso da leitegada, Numero de leitões.

**Processo**: Cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

### Dependências

Cadastrar Matriz.


## RF-10 Cadastrar desmamados 

O sistema deve cadastrar cada leitão nascido vivo desmamado por parto solicitando as seguintes informações:

* Numero de parto
* Peso da leitegada
* Data de desmame 
* Espessura do toucinho da matriz
* Peso da matriz

**Entrada**: Numero de parto, Peso da leitegada, Data de desmame, Espessura do toucinho da matriz e peso da matriz.

**Processo**: Cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: MÉDIA**

### Dependências

Cadastrar matriz e cadastrar parto.


## RF-11 Cadastrar morto
O Sistema deve cadastrar cada nascido morto por parto solicitando as seguintes informações:

* Numero do parto
* Tipo de morte
* Causa da morte
* Data da morte
* Hora da morte

**Entrada**: Numero do parto, Tipo de morte, Causa da morte, Data da morte e Hora da morte.

**Processo**: Cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: MÉDIA**

### Dependências

Cadastrar de matriz e cadastrar de parto.

## RF-12 Cadastrar medicamento
O sistema deve cadastrar os medicamentos no estoque solicitando as seguintes informações:

* Nome do medicamento
* Fornecedor

**Entrada**: Nome do medicamento, Tipo de medicamento e Fornecedor.

**Processo**: Cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

### Dependências

Nenhuma.

## RF-13 Cadastrar vacina
O sistema deve cadastrar as vacinas no estoque solicitando as seguintes informações:

* Nome da vacina
* Fornecedor

**Entrada**: Nome da vacina, Tipo de vacina e Fornecedor.

**Processo**: Cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: ALTA**

### Dependências

Nenhuma.

## RF-14 Cadastrar medicação

O sistema deve cada cadastrar medicamento aplicado em cada matriz solicitando as seguintes informações:

* Medicamento
* Matriz
* Motivo 
* Horário aplicação
* Data aplicação
* Dose
* Próxima dose

**Entrada**: Medicamento, Matriz, Horário aplicação, Data aplicação, Motivo, Dose e próxima dose (se houver).

**Processo**: Se houver necessidade de próxima dose, deve ser informado a data da próxima dose e cadastro será incluído no banco de dados, se não cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: MÉDIA**

### Dependências

Cadastrar de matriz e cadastrar de medicamento.

## RF-15 Cadastrar vacinação

O sistema deve cadastrar cada vacina aplicada em cada matriz solicitando as seguintes informações:

* Vacina
* Matriz
* Motivo
* Horário aplicação
* Data aplicação
* Dose
* Próxima dose

**Entrada**: Vacina, Matriz, Horário aplicação, Data aplicação, Motivo, Dose e próxima dose (se houver).

**Processo**: Se houver necessidade de próxima dose, deve ser informado a data da próxima dose e cadastro será incluído no banco de dados, se não cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: MÉDIA**

### Dependências

Cadastrar de matriz e cadastrar de vacina.

## RF-16 Cadastrar de visitas

O sistem deve cadastrar cada visita feita na granja solicitando as seguintes informações:

* Nome de visitante
* Motivo da visita
* Data de visita
* Horário de início
* Horário de fim
* Último local de contato com suínos
* Último horário de contato com suínos
* Empresa ou instituição do visitante

**Entrada**: Nome de visitante, Motivo da visita, Data de visita, Horário de início, Horário de fim, Último local de contato com suínos, Último horário de contato com suínos e Empresa ou instituição do visitante

**Processo**: Cadastro será incluído no banco de dados.

**Saída**: Se cadastro efetuado com sucesso exibir mensagem de confirmação bem sucedido, 
se não exibir mensagem de erro informando qual foi erro.

**Prioridade: BAIXA**

### Dependências

Nenhuma.

