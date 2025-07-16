# Wallet App Wallet App

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

Uma carteira digital desenvolvida como desafio técnico, focada em arquitetura de software limpa, escalável e de alta qualidade com React Native.

## ✨ Sobre o Projeto

Este aplicativo é uma carteira virtual que permite ao usuário cadastrar novos cartões de crédito e visualizar os cartões já existentes, que são fornecidos por uma API REST simulada com `json-server`. O projeto foi desenvolvido com um forte foco em boas práticas de engenharia de software, incluindo:

* **Clean Architecture:** Separação clara entre UI, lógica de negócio e serviços.
* **Componentização Máxima:** Adoção de princípios como Responsabilidade Única (SRP) e Don't Repeat Yourself (DRY).
* **Tipagem Forte:** Uso extensivo de TypeScript para garantir segurança e manutenibilidade.
* **Testabilidade:** Cobertura de testes para componentes e lógica de negócio.

## 🛠️ Tecnologias Utilizadas

* **React Native:** Framework principal para desenvolvimento mobile.
* **TypeScript:** Para tipagem estática e um código mais seguro.
* **Styled Components:** Para estilização de componentes de forma isolada e escalável.
* **React Hook Form & Zod:** Para gerenciamento e validação de formulários.
* **React Query (@tanstack/react-query):** Para gerenciamento de estado assíncrono, cache e sincronização com a API.
* **Redux Toolkit:** Para gerenciamento de estado global (ex: estado do formulário).
* **React Navigation:** Para gerenciamento de rotas e navegação.
* **Jest & React Native Testing Library:** Para testes unitários e de componentes.
* **ESLint & Prettier:** Para padronização e qualidade de código.

## 🚀 Features

* [x] Listagem de cartões com animação de pilha.
* [x] Animação de seleção e foco em um cartão específico.
* [x] Formulário para cadastro de novos cartões.
* [x] Validação de campos em tempo real.
* [x] Persistência de dados através de uma API REST fake.

## ⚙️ Rodando o Projeto

### Pré-requisitos

-   Node.js (versão LTS recomendada)
-   Yarn ou NPM
-   Expo Go (no seu smartphone) ou um Emulador Android/iOS configurado.

### Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LacerdaAcacio/wallet-app.git](https://github.com/LacerdaAcacio/wallet-app.git)
    cd wallet-app
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configure a API Local:**
    O app precisa se conectar a um servidor local (`json-server`). Para isso, é necessário usar o IP da sua máquina na sua rede Wi-Fi.

    a. **Copie o arquivo de ambiente de exemplo:**
    ```bash
    cp .env.example .env
    ```

    b. **Encontre seu Endereço IP Local:**
    * **Windows:** No `cmd`, digite `ipconfig` e procure por `Endereço IPv4`.
    * **macOS/Linux:** No terminal, digite `ifconfig | grep "inet " | awk '{print $2}'` ou `hostname -I`.

    c. **Edite o arquivo `.env`:** Abra o arquivo `.env` e substitua `SEU_IP_LOCAL_AQUI` pelo endereço que você encontrou.
    ```env
    # Exemplo de como o arquivo .env deve ficar:
    API_BASE_URL=[http://192.168.1.10:3000](http://192.168.1.10:3000)
    ```

### Execução

Para rodar a aplicação, você precisará de **dois terminais** abertos na raiz do projeto.

1.  **Terminal 1: Inicie o Servidor da API**
    ```bash
    npm run api
    ```
    *Este terminal deve permanecer aberto executando o servidor.*

2.  **Terminal 2: Inicie o Aplicativo**
    ```bash
    npm start
    ```
    *Escaneie o QR Code com o app Expo Go ou pressione `a` para abrir no emulador Android.*


## 📜 Scripts Disponíveis

* `npm start`: Inicia o servidor de desenvolvimento do Metro.
* `npm run api`: Inicia o `json-server` na porta 3000.
* `npm test`: Roda os testes com Jest.
* `npm run lint`: Executa o ESLint para verificar erros de padronização.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
