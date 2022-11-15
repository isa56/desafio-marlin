# Desafio Marlin

[![Netlify Status](https://api.netlify.com/api/v1/badges/591ba8dc-27f7-440d-93f4-200e3e1dc5db/deploy-status)](https://app.netlify.com/sites/desafio-marlin-angular/deploys)

Você pode ver esse site em produção em [https://desafio-marlin-angular.netlify.app/](https://desafio-marlin-angular.netlify.app/).

## Descrição

Projeto de front end para o desafio de estágio em front end da [Marlin](https://www.marlin.com.br/). Desenvolvido com Angular 14.

Esse projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli).

## Para utilizar o projeto

Rode `ng serve` para iniciar o servidor de desenvolvimento. Acesse [http://localhost:4200/](http://localhost:4200/) para visualizar a aplicação.

- No endereço padrão, você verá a página inicial, com a listagem de *posts*: [http://localhost:4200/register](http://localhost:4200/), ou em [https://desafio-marlin-angular.netlify.app/](https://desafio-marlin-angular.netlify.app/);
- No endereço */detalhes/{id}*, você verá um post específico: [http://localhost:4200/detalhes/4](http://localhost:4200/detalhes/5) ou em [https://desafio-marlin-angular.netlify.app/detalhes/4](https://desafio-marlin-angular.netlify.app/detalhes/5);
- No endereço */criar-artigo*, você poderá criar um novo post: [http://localhost:4200/criar-artigo](http://localhost:4200/criar-artigo), ou em [https://desafio-marlin-angular.netlify.app/criar-artigo](https://desafio-marlin-angular.netlify.app/criar-artigo).

## Sobre o desenvolvimento

Todas as etapas do desenvolvimento estão registradas neste GitHub. Os detalhes de como foram implementas determinadas partes estão abaixo:

1. Etapa 1: Criar *HTML* e *CSS* responsivo de acordo com imagem fornecida.

    Esta etapa foi desenvolvida de forma conjunta à etapa 2. Ou seja, O projeto em Angular foi gerado e, a partir daí, foi criado o HTML e CSS para a página inicial nos diferentes componentes deste projeto.

2. Etapa 2: Criar o projeto em Angular e migrar o HTML e CSS para o projeto. Além disso, consumir uma *API* para listagem de posts.

    Visto que o projeto foi gerado em Angular, foi utilizado o modelo de componentes para a criação da página inicial, que se inicia em [`views/home`](/src/app/views/home/) e utiliza alguns componentes, como o [components/post-container](/src/app/components/post-container/) e o [components/post](/src/app/components/post/). Também nessa fase, foi desenvolvido o [`components/header`](/src/app/components/header/) e a [`components/sidebar`](/src/app/components/sidebar/).

    A API foi consumida utilizando o `HttpClient` do próprio Angular, que é usado no serviço [`posts.service`](/src/app/services/posts.service.ts), com o método `fetchPosts()`. A listagem foi feita utilizando o componente [post](/src/app/components/post/) criado utilizando HTML e CSS.

3. Etapa 3: Criar dois novos componentes:

   i. Visualização de post individual;

      A visualização de post individual é feita inteiramente na view [`views/details`](/src/app/views/details/) e o serviço de [`posts`](/src/app/services/posts.service.ts), por meio do método `getPost()`. A visualização é feita através de um parâmetro na URL, que é capturado pelo componente [`views/details`](/src/app/views/details/) utilizando o `Router` do próprio Angular, e é passado para o método, que faz o *fetch* em si na API.

   ii. Criação de post.

      A criação de post é feita na view [`views/create`](/src/app/views/create-article/), que utiliza o componente [`components/input`](/src/app/components/input/) e o serviço de [`posts`](/src/app/services/posts.service.ts), por meio do método `createPost()`. A criação é feita através de um formulário, que é capturado pelo componente [`views/create-article`](/src/app/views/create-article/), validado e passado para o método, que faz o *post* em si na API fornecida.
