Perfeito 👍
Abaixo está um **README simples, direto e dentro de 1 página**, exatamente no formato que recrutadores pedem.
Você pode **copiar e colar** no repositório e só ajustar links (FlutterFlow / deploy).

---

# 📝 Mini App – Lista de Tarefas Pessoais

Este projeto é um mini aplicativo de **Lista de Tarefas Pessoais**, desenvolvido como desafio técnico, utilizando **FlutterFlow no frontend** e **Firebase (Auth, Firestore e Cloud Functions)** no backend.

---

## 🚀 Como rodar / testar o projeto

### Pré-requisitos

* Conta Google (para autenticação)
* Acesso ao link do app (web) ou projeto FlutterFlow
* Firebase configurado

### Passo a passo

1. Acesse o link do app web (ou abra o projeto no FlutterFlow).
2. Crie uma conta usando **e-mail e senha**.
3. Faça login.
4. Na tela de tarefas:

   * Visualize apenas suas próprias tarefas.
   * Crie uma nova tarefa informando título e descrição.
   * Marque uma tarefa como concluída.
5. As tarefas são salvas e recuperadas do **Firestore**, respeitando as regras de segurança.

---

## 🏗️ Resumo da arquitetura

O frontend foi desenvolvido no **FlutterFlow**, permitindo criar rapidamente as telas de autenticação, listagem e criação de tarefas, com integração direta ao Firebase Authentication para controle de usuários.

O backend utiliza **Firebase Cloud Functions (Node.js)** para centralizar regras de negócio sensíveis, como a criação de tarefas. A function `createTask` identifica o usuário a partir do token de autenticação e garante que campos como `userId`, `status` e `createdAt` sejam definidos no backend, evitando manipulação pelo cliente.

Os dados são armazenados no **Cloud Firestore**, com regras de segurança que garantem que apenas usuários autenticados possam acessar a coleção `tasks`, e que cada usuário só possa ler ou alterar tarefas que pertencem a ele.

---

## 🔒 Regras de segurança do Firestore (resumo)

* Apenas usuários autenticados podem acessar a coleção `tasks`.
* Usuários só podem ler, criar, atualizar ou excluir tarefas onde `userId == request.auth.uid`.

(O arquivo `firestore.rules` está incluído no repositório.)

---

## 🔮 O que eu faria a seguir, se tivesse mais tempo

* Implementar **testes automatizados** para as Cloud Functions.
* Melhorar o **layout e UX** das telas no FlutterFlow.
* Adicionar **paginação e filtros** (ex.: tarefas concluídas / pendentes).
* Criar histórico de alterações de status.
* Configurar **logs e monitoramento** das Cloud Functions.
* Implementar CI/CD para deploy automático.

---

📌 **Tecnologias utilizadas:**
FlutterFlow • Firebase Authentication • Cloud Firestore • Cloud Functions (Node.js)

---
