# Teste Técnico – Recomendador de Produtos RD Station

Este repositório contém a solução completa (frontend e backend) do desafio técnico da RD Station para a vaga de Desenvolvedora Frontend Júnior/Pleno.

O projeto implementa uma funcionalidade de recomendação de produtos, permitindo que usuários selecionem preferências e recebam sugestões personalizadas com base nelas.

## Sumário

* Visão Geral
* Estrutura do Projeto
* Tecnologias Utilizadas
* Pré-requisitos
* Instalação e Execução
* Scripts Disponíveis
* Detalhes de Desenvolvimento
* Critérios de Aceite
* Boas Práticas
* Licença

---

## 1. Visão Geral

O objetivo do desafio é criar a lógica central de recomendação de produtos dentro de uma aplicação web já existente.

O sistema deve receber preferências e funcionalidades desejadas pelo usuário, e então recomendar produtos adequados com base nessas informações.

A aplicação foi construída utilizando React.js no frontend e `json-server` no backend, com Tailwind CSS para o layout.

## 2. Estrutura do Projeto

A estrutura deste repositório é organizada da seguinte forma:

```

/rd-recomendador-produtos
├── frontend/       \# Aplicação React.js (interface e lógica de recomendação)
├── backend/        \# Servidor json-server simulando uma API REST
├── install.sh      \# Script opcional para instalação automatizada
├── package.json    \# Configuração dos scripts do monorepo
└── README.md       \# Este arquivo

````

O frontend e o backend são independentes, mas podem ser executados juntos para simular o ambiente completo.

## 3. Tecnologias Utilizadas

### Frontend
* **React.js**: Desenvolvimento da interface e lógica de recomendação
* **Tailwind CSS**: Estilização e responsividade
* **React Testing Library e Jest**: Testes unitários

### Backend
* **json-server**: Simulação de uma API RESTful local

### Ferramentas do Monorepo
* **Yarn Workspaces**: Gerenciamento de dependências
* **Concurrently**: Execução simultânea do frontend e backend
* **Lerna**: Organização dos pacotes e automação de scripts

## 4. Pré-requisitos

Antes de iniciar, verifique se você possui as seguintes ferramentas instaladas:

* **Node.js** (versão 18.3 ou superior)
* **Yarn** (versão 1.x)

### Instalação do Node.js

Com `n`:
```bash
npm install -g n
n 18.3
````

Com `nvm`:

```bash
nvm install 18.3
nvm use 18.3
```

Verifique:

```bash
node -v
# Deve exibir v18.3.x ou superior
```

## 5\. Instalação e Execução

1.  Clone o repositório e acesse a pasta raiz:

    ```bash
    git clone https://github.com/ThiciannyMarques/rd-recomendador-produtos.git
    cd rd-recomendador-produtos
    ```

2.  Instalar dependências (na raiz do projeto):

    ```bash
    yarn install
    ```

    Ou, se preferir, execute o script automatizado:

    ```bash
    ./install.sh
    ```

3.  Executar o projeto
    Para rodar o ambiente completo (frontend + backend em paralelo):

    ```bash
    yarn dev
    ```

    O projeto será iniciado com:

      * **Frontend**: `http://localhost:3000`
      * **Backend**: `http://localhost:3001`

## 6\. Scripts Disponíveis

| Script | Descrição |
| :--- | :--- |
| `yarn start` | Executa todos os pacotes via Lerna |
| `yarn start:frontend` | Inicia apenas o frontend |
| `yarn start:backend` | Inicia apenas o backend |
| `yarn dev` | Executa frontend e backend simultaneamente com concurrently |

## 7\. Detalhes de Desenvolvimento

A principal tarefa é implementar e integrar a lógica de recomendação de produtos.

Os arquivos mais importantes são:

| Arquivo | Descrição |
| :--- | :--- |
| `frontend/src/App.js` | Atualiza a lista de recomendações quando o usuário altera as preferências. |
| `frontend/src/components/Form/Form.js` | Gerencia as entradas do usuário e envia as informações para o serviço de recomendação. |
| `frontend/src/services/recommendation.service.js` | Implementa a lógica central de recomendação com base nas preferências e funcionalidades. |

### Testes

Para executar os testes do frontend:

```bash
cd frontend
yarn test
```

## 8\. Critérios de Aceite

Para que o desafio seja considerado concluído, o projeto deve atender aos seguintes critérios:

  * Receber preferências e funcionalidades do usuário via formulário.
  * Retornar produtos recomendados com base nas preferências informadas.
  * **SingleProduct**: retornar o produto mais adequado.
  * **MultipleProducts**: retornar uma lista de produtos relevantes.
  * Em caso de empate, retornar o último produto compatível.
  * O serviço deve lidar com múltiplas combinações de preferências.
  * Código modular, legível e fácil de estender.
  * Testes cobrindo os principais fluxos da recomendação.

## 9\. Boas Práticas

  * Priorize clareza e simplicidade.
  * Nomeie funções e variáveis de forma descritiva.
  * Mantenha o código modular e organizado.
  * Evite duplicações de lógica.
  * Garanta testes consistentes e mensagens de erro claras.

O princípio central da RD Station é:

> “Projete seu código para ser mais fácil de entender, não mais fácil de escrever.”

## 10\. Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

Sinta-se à vontade para utilizá-lo, estudar ou adaptá-lo.

-----

### Autoria

Desenvolvido por **Thicianny Marques**

*Teste Técnico – RD Station Engenharia 2024*
