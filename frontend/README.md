# Frontend - rd-recomendador-produtos

Este é o repositório do **frontend** do projeto. Ele foi desenvolvido utilizando **React 18**, **Tailwind CSS** e ferramentas de testes como **React Testing Library**. O objetivo deste README é fornecer instruções detalhadas para configurar, executar, desenvolver e testar o frontend de maneira simples e clara.

---

## Sumário

* Estrutura do Projeto
* Pré-requisitos
* Instalação
* Scripts Disponíveis
* Configuração do Tailwind CSS
* Estrutura de Componentes
* Testes
* Integração com o Backend
* Dicas de Desenvolvimento
* Referências

---

## Estrutura do Projeto

O frontend está localizado na pasta `frontend` do repo. A estrutura básica de arquivos é:

```

frontend/
├─ public/           \# Arquivos estáticos (HTML, favicon, etc.)
├─ src/              \# Código-fonte React
│ ├─ components      \# Componentes reutilizáveis em várias páginas
│ ├─ hooks           \# Hooks customizados para lógica de estado e efeitos
│ ├─ services        \# Serviços de API e integrações externas
│ ├─ mocks           \# Dados e respostas simuladas para testes e desenvolvimento
│  └─ index.js       \# Entrada principal do React
├─ package.json      \# Dependências e scripts do frontend
├─ tailwind.config.js\# Configuração do Tailwind CSS
└─ README.md

````

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* **Node.js** >= 18
* **Yarn** >= 1.22
* (Opcional) **npm** se preferir usar npm para alguns comandos.

> O frontend está configurado para funcionar dentro do **monorepo**, mas também pode ser executado isoladamente.

---

## Instalação

Para instalar as dependências do frontend, navegue até a pasta e execute:

```bash
cd frontend
yarn install
````

Isso instalará todas as dependências necessárias, incluindo React, Tailwind CSS e ferramentas de teste.

## Scripts Disponíveis

No diretório `frontend`, você pode executar os seguintes comandos:

### 1\. Iniciar o projeto em modo de desenvolvimento

```bash
yarn start
```

Abre o aplicativo em `http://localhost:3000` automaticamente.

  * Suporta *hot reload*: alterações no código são refletidas em tempo real.
  * Qualquer erro de lint ou console será exibido durante a execução.

### 2\. Testes

```bash
yarn test
```

Executa os testes interativos usando React Testing Library e Jest.

  * Permite rodar testes individualmente ou observar mudanças automaticamente.

### 3\. Build para produção

```bash
yarn build
```

Gera a versão otimizada do frontend na pasta `build/`.

  * Faz minificação do código e otimização de performance.
  * Pronto para deploy em qualquer servidor.

### 4\. Linting

```bash
yarn lint
```

Verifica problemas de estilo e boas práticas no código usando ESLint.

```bash
yarn lint:fix
```

Corrige automaticamente problemas de lint que puder resolver.

### 5\. Eject (opcional)

```bash
yarn eject
```

**Aviso:** este comando é irreversível. Ele expõe toda a configuração do `react-scripts` para edição manual. Só utilize se realmente precisar customizar Webpack, Babel ou ESLint.

-----

## Configuração do Tailwind CSS

O Tailwind CSS já está integrado. Você pode customizar as cores, fontes e estilos no arquivo `tailwind.config.js`. Por padrão, ele já inclui:

  * Suporte a JIT (Just-In-Time)
  * Purge automático de CSS não utilizado
  * Integração com PostCSS e autoprefixer

Para adicionar classes Tailwind em seus componentes, basta importar o CSS principal em `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

-----

## Estrutura de Componentes

  * **Components**: Componentes pequenos e reutilizáveis, como botões, cards e inputs.
  * **Hooks**: Hooks customizados para lógica de estado e efeitos.
  * **Services**: Funções de integração com APIs ou lógica de dados.
  * **Mocks**: Dados e respostas simuladas para testes e desenvolvimento.
-----

## Testes

O frontend possui testes configurados com React Testing Library. Recomenda-se escrever testes para:

  * Validação de formulários
  * Renderização de componentes
  * Integração com serviços e chamadas API
  * Comportamentos interativos do usuário

Exemplo de execução de teste:

```bash
yarn test
```

-----

## Integração com o Backend

No repo, o frontend pode ser executado em conjunto com o backend. A partir do diretório raiz (`root`):

```bash
cd ..
yarn dev
```

Este comando executa frontend e backend simultaneamente, usando `concurrently`. O frontend continuará disponível em `http://localhost:3000`.

-----

## Dicas de Desenvolvimento

  * **Mobile First**: Todo o layout foi pensado para mobile primeiro, garantindo responsividade.
  * **Componentização**: Reutilize componentes e mantenha-os desacoplados.
  * **Linting constante**: Execute `yarn lint` frequentemente para manter código limpo.
  * **Testes sempre**: Garanta que novos componentes tenham cobertura mínima de testes.
  * **Tailwind Utilities**: Prefira classes utilitárias para manter consistência e rapidez no desenvolvimento.

-----

## Referências

  * [Documentação React](https://www.google.com/search?q=https://reactjs.org/docs/getting-started.html)
  * [Create React App](https://www.google.com/search?q=https://create-react-app.dev/)
  * [Tailwind CSS](https://tailwindcss.com/docs)
  * [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
