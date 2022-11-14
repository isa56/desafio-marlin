# Desafio Marlin

## Descrição

Projeto de front end para o desafio da Marlin. Desenvolvido com Angular 14.

Esse projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) na versão 14.2.8.

## Rodando o servidor de desenvolvimento

Rode `ng serve` para criar o servidor de desenvolvimento. [http://localhost:4200/](http://localhost:4200/). A aplicação vai se iniciar sozinha.

## Sobre o desenvolvimento

O projeto foi desenvolvido utilizando Angular 14. Sobre as etapas de desenvolvimento:

1. Etapa 1: Criar *HTML* e *CSS* responsivo de acordo com imagem fornecida.

    Esta etapa foi desenvolvida de forma conjunta à etapa 2. Ou seja, O projeto em Angular foi gerado e, a partir daí, foi criado o HTML e CSS para a página inicial.

2. Etapa 2: Criar o projeto em Angular e migrar o HTML e CSS para o projeto. Além disso, consumir uma *API* para listagem de posts.

    Visto que o projeto foi gerado em Angular, foi utilizado o modelo de componentes para a criação da página inicial, que se inicia em [`views/home`](/src/app/views/home/) e utiliza alguns componentes, como o [components/post-container](/src/app/components/post-container/) e o [components/post](/src/app/components/post/). Também nessa fase, foi desenvolvido o [`components/header`](/src/app/components/header/) e a [`components/sidebar`](/src/app/components/sidebar/).

    A API foi consumida utilizando o `HttpClient` do próprio Angular, que é usado no serviço [`posts.service`](/src/app/services/posts.service.ts), com o método `fetchPosts()`. A listagem foi feita utilizando o componente [post](/src/app/components/post/) criado utilizando HTML e CSS.

3. Etapa 3: Criar dois novos componentes:

   i. Visualização de post individual;

      A visualização de post individual é feita inteiramente na view [`views/details`](/src/app/views/details/) e o serviço de [`posts`](/src/app/services/posts.service.ts), por meio do método `getPost()`. A visualização é feita através de um parâmetro na URL, que é capturado pelo componente [`views/details`](/src/app/views/details/) utilizando o `Router` do próprio Angular, e é passado para o método, que faz o *fetch* em si na API.

   ii. Criação de post.

      A criação de post é feita na view [`views/create`](/src/app/views/create-article/), que utiliza o componente [`components/input`](/src/app/components/input/) e o serviço de [`posts`](/src/app/services/posts.service.ts), por meio do método `createPost()`. A criação é feita através de um formulário, que é capturado pelo componente [`views/create-article`](/src/app/views/create-article/), validado e passado para o método, que faz o *post* em si na API fornecida.
