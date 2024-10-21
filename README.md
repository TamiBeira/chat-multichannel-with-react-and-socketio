# Chat Multichannel with React and Socket.io

Este projeto é uma aplicação de chat em tempo real entre departamentos, onde cada departamento tem seu próprio canal de comunicação, facilitando a comunicação interna da empresa. Ele utiliza **React** no frontend e **Socket.io** no backend para implementar a comunicação em tempo real.

## Tecnologias Utilizadas

### Frontend:

-   **React 17**: Biblioteca para criação de interfaces de usuário.
-   **React Router DOM 6**: Para gerenciamento das rotas do frontend.
-   **Socket.io-client**: Biblioteca para comunicação em tempo real com o backend via WebSocket.
-   **Vite**: Ferramenta de build rápida e eficiente para o desenvolvimento de aplicações web.
-   **TypeScript**: Linguagem que adiciona tipagem ao JavaScript.

### Backend:

-   **Node.js**: Ambiente de execução JavaScript server-side.
-   **Socket.io**: Para comunicação em tempo real via WebSocket.
-   **UUID**: Para geração de identificadores únicos universais.
-   **Nodemon**: Ferramenta para reiniciar automaticamente o servidor Node.js durante o desenvolvimento.

## Funcionalidades

-   Comunicação em tempo real entre usuários.
-   Canais de chat separados por departamento.
-   Interface simples e intuitiva.
-   Conexão estável utilizando WebSocket com Socket.io.

## Estrutura do Projeto

```bash
.
├── frontend
│   ├── index.html
│   ├── node_modules
│   ├── src
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
└── server
    ├── index.js
    ├── model
    │   └── chat.js
    ├── package.json
```

### Frontend

O frontend da aplicação foi construído utilizando **React** e **Vite**. Para rodar o projeto localmente, siga os passos abaixo:

1. Navegue até o diretório `frontend`:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

### Backend

O backend utiliza **Node.js** com **Socket.io** para gerenciar as conexões de WebSocket entre os clientes. Para rodar o servidor backend, siga os passos abaixo:

1. Navegue até o diretório `server`:

    ```bash
    cd server
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm run dev
    ```

## Como Usar

1. Certifique-se de que tanto o servidor backend quanto o frontend estão rodando.
2. Abra o frontend no navegador (geralmente disponível em `http://localhost:3000`).
3. Cada usuário poderá se conectar a um canal específico baseado em seu departamento e enviar mensagens em tempo real.
