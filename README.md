# 🧑‍🍳 Sabores do Front

## Integrantes
Lucas de Souza Dudena - RM567600
Pedro Begali Campos - RM567478

## 🎯 Objetivo do Projeto
O **Sabores do Front** é uma aplicação web desenvolvida como parte da avaliação do Checkpoint 05. O objetivo principal do projeto é aplicar e consolidar os conhecimentos adquiridos na disciplina de Front-end, construindo um catálogo de receitas dinâmico e interativo. A aplicação simula o consumo de uma API através de um arquivo JSON local, possui navegação fluida entre páginas (SPA) e conta com um formulário validado para interação com o usuário.

## ✨ Funcionalidades
* **Catálogo de Receitas:** Exibição de 60 receitas em um layout de grid totalmente responsivo, adaptando-se a celulares, tablets e computadores.
* **Filtros e Busca Dinâmica:** Permite aos usuários pesquisar receitas pelo nome e filtrar os resultados simultaneamente por categorias (Saladas, Pratos Principais, Sobremesas e Bebidas).
* **Detalhes em Modal:** Ao clicar em um card de receita, um modal moderno (com efeito glassmorphism) se sobrepõe à tela exibindo a imagem ampliada, lista de ingredientes e o modo de preparo, sem recarregar a página.
* **Formulário de Sugestões:** Uma página dedicada para os usuários enviarem receitas próprias. Conta com validação avançada de campos (obrigatoriedade e formato de e-mail) e limpeza automática (reset) após o envio bem-sucedido.

## 🚀 Tecnologias Utilizadas
Este projeto foi construído "do zero" utilizando as seguintes tecnologias e bibliotecas:

* **[React](https://reactjs.org/) + [Vite](https://vitejs.dev/):** Estrutura base da aplicação, garantindo componentização e um servidor de desenvolvimento ultrarrápido.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para criar interfaces (como `Recipe` e `FormSugestao`), garantindo um código mais seguro, escalável e livre de erros inesperados.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework utilitário usado para toda a estilização, responsividade e animações da interface.
* **[React Router DOM](https://reactrouter.com/):** Gerenciamento das rotas internas (Navegação entre a "Home" e a página de "Sugerir Receita").
* **[React Hook Form](https://react-hook-form.com/):** Biblioteca focada em performance utilizada para o controle e validação inteligente do formulário.
* **[Lucide React](https://lucide.dev/):** Conjunto de ícones consistentes e modernos utilizados no Header.

