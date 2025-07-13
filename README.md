## 🚀 Rodando o Projeto

### Pré-requisitos

- Node.js (versão LTS)
- Yarn ou NPM
- Expo Go (no celular) ou um Emulador Android/iOS configurado

### Configuração do Ambiente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LacerdaAcacio/wallet-app.git](https://github.com/LacerdaAcacio/wallet-app.git)
    cd WalletApp
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configurando a API Local:**
    Este projeto utiliza `json-server` para simular uma API REST. Para que o aplicativo no seu celular ou emulador consiga se comunicar com o servidor rodando na sua máquina, você precisa configurar a variável de ambiente com o IP da sua máquina na rede local.

    a. **Copie o arquivo de exemplo:**
    ```bash
    cp .env.example .env
    ```

    b. **Encontre seu Endereço IP Local:**
      - **Windows:** Abra o `cmd` e digite `ipconfig`. Procure pelo `Endereço IPv4`.
      - **macOS/Linux:** Abra o terminal e digite `ifconfig | grep "inet "`.

    c. **Edite o arquivo `.env`:** Abra o arquivo `.env` e substitua `SEU_IP_LOCAL_AQUI` pelo endereço que você encontrou.
    ```
    # Exemplo de como deve ficar o arquivo .env
    API_BASE_URL=[http://192.168.0.10:3000](http://192.168.0.10:3000)
    ```

### Executando

1.  **Inicie o servidor da API:**
    *Abra um terminal na raiz do projeto e rode:*
    ```bash
    npm run api
    ```

2.  **Inicie o aplicativo:**
    *Abra um **segundo terminal** e rode:*
    ```bash
    npx expo start
    ```
    - Escaneie o QR Code com o app Expo Go ou pressione `a` para abrir no emulador Android.