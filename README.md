# ReactHookFormsYup
React + Typescript + Tailwind + React-hook-form + Yup + React-router-dom

Este projeto foi desenvolvido com o objetivo de demonstrar como utilizar o React Hook Form e o Yup para criar formulários em React.

## Tecnologias Utilizadas
- React
- TypeScript
- Tailwind CSS
- Vite
- React Hook Form
- Yup
- React Router Dom V6
## Como Executar o Projeto
Clone o repositório em sua máquina local:
```bash
git clone https://github.com/victorcastroqesh/ReactHookFormsYup.git
```
Instale as dependências utilizando o npm:
```bash
npm install
```

Inicie o servidor de desenvolvimento com vite:
```bash
npm run dev
```
Acesse a aplicação em seu navegador através do endereço fornecido no terminal

## Funcionamento do Projeto
A aplicação consiste em um formulário de cadastro de usuário que utiliza as bibliotecas React Hook Form e Yup para validação dos campos.

Ao submeter o formulário, caso haja algum campo inválido, será exibido um erro informando o motivo do erro em cada campo.

## Estrutura do Projeto
O projeto foi organizado da seguinte forma:

- /src/components: Contém os componentes React utilizados na aplicação.

- /src/pages: Contém as páginas do projeto, contendo a estrutura do formulário.

- /src/routes.tsx: Contém as os as rotas de todas as páginas do projeto.

- /src/App.tsx: Arquivo principal da aplicação.

## Páginas
As paginas estão definidas da segunte forma:

- /src/pages/Form: É a pagina do formulário, nela usamos o react-hook-forms para o fluxo de formulário e o yup para a tratativa dos erros e o react-router-dom para mandar as props dos inputs para outra página sem a necessidade de um context.

- /src/pages/DisplayForm: É a página que recebe as props por meio do react-router-dom e as mostra.
