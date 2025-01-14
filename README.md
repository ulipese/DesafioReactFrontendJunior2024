# Teste front-end enContact
Teste realizado por mim (Felipe Sousa de Oliveira) para vaga de desenvolvimento front-end na enContact.

## Sumário
- [Overview](#overview)
  - [Design](#design)
  - [Demo](#demo)
- [Pré-requisitos](#pré-requisitos)
- [Primeiros passos](#primeiros-passos)
  - [Como testar](#como-testar)
  - [Como rodar](#como-rodar)
  - [Documentação dos Componentes](#documentação-dos-componentes)
  - [Um pouco sobre as rotas (filtros)](#rotas)
- [Autor da resolução do teste](#autor)

## Overview
### Design
   ![image](https://github.com/ulipese/DesafioReactFrontendJunior2024/assets/70922407/07391c27-2adc-4704-b725-762dbc3805c2)
   
### Demo
   [Veja uma demonstração do site hospedado](https://teste-enki-group.netlify.app/)
## Pré-requisitos
1. ⚠️Editor de código, e um terminal integrado (ou use junto de algum terminal à parte), para melhor visualização e edição do código geral, além da execução dos comandos;
2. ⚠️É necessário ter o NPM, Node Package Manager, v8.3.1 (versão mínima recomendada) instalado para instalação de dependências e uso sem erros. Caso não tenha, pode [instale por aqui](https://nodejs.org/en), (a instalação do NPM ocorre junto com o NodeJS); 

## Primeiros passos
1. Clone o projeto, baixando os arquivos ou clonando o repo com: 
```
git clone https://github.com/ulipese/DesafioReactFrontendJunior2024.git
``` 
2. Após baixar o projeto, abra-o com seu editor de código favorito (como VS Code), e na raiz do projeto (_"/"_), instale as dependências com: (para instalação limpa sem cache)
```
npm clean-install
```
3. Com as dependências instaladas, siga os seguintes passos adiante para testar e/ou rodar a aplicação!
   
### Como testar
1. Após os primeiros passos citados anteriormente, basta acessar o terminal no diretório root da aplicação (_"/"_) e inserir o comando: 
```
npm run test
```
2. Caso tudo ocorra bem, assim como deve ser caso tenha feito o clone e instalação de dependências corretamente, você irá receber as mensagens de sucesso do teste, veja um exemplo real abaixo: 
![image](https://github.com/ulipese/DesafioReactFrontendJunior2024/assets/70922407/6be758f2-ffd0-45f1-8f4d-04d587921a07)

Obs: os testes vão desde renderização correta dos componentes, até o correto funcionamento de algumas funcionalidades da aplicação.
  
### Como rodar
1. Após instalar as dependências como dito nos primeiros passos, e tenha testado a aplicação (não é obrigatório, mas é recomendado), já é possível rodar a aplicação com o comando:
```
npm start
```
2. Espere abrir localmente, e já estará pronto pra uso!

### Documentação dos Componentes
1. Para uma visão geral sobre os componentes, suas funções e seus testes, escrevi docs específicos para cada um, que podem ser encontrado no diretório: (_"/src/docs"_);
2. Você encontrará as seguintes informações em cada doc: explicação geral do componente e explicação sobre o que é testado no seu 'test file', caso tenha um.
Obs: esses docs foram feitos com o objetivo de guiar, embora o código e seus comentários e nomenclaturas por si só já deixem explicativo algumas funções =)

### Rotas
1. / - Home (All), mostra todas as tasks/tarefas;
2. /active - Ativos, mostra todas as tasks/tarefas ativas;
3. /completed - Completas, mostra todas as tasks/tarefas completas.

## Autor
- Linkedin - [Felipe Sousa](https://www.linkedin.com/in/ulipese)
- Github - [Felipe Sousa](https://www.github.com/ulipese)
