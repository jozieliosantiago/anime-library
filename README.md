<h1 align="center">
  Anime Library
</h1>

<p align="center">
  <a href="#dashgo">Anime Library</a> |
  <a href="#tecnologias">Tecnologias</a> |
  <a href="#estrutura">Estrutura</a> |
  <a href="#execução">Execução</a> |
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=1374ef&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=ignite&message=React.js&color=1374ef&labelColor=000000" alt="Ignite ReactJS" />
</p>

# Anime Library

O Anime Library é uma aplicação de catálogo de animes. Na página incial é possível visualizar a lista de animes disponíveis e seus detalhes, como título, ano de lançamento e avaliação. A aplicação possui ainda uma página ond é possível visualizar mais detalhes do anime selecionado na página inicial. É possível vê inform a sinopse, categorias, trailer (caso esteja disponível) e a lista dos epsódios.

<p align="center">
  <img alt="dashgo." src=".github/anime-library.gif" width="100%">
</p>

## Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- ReactJS
- TypeScript
- NextJS
- Ant Design
- SASS

## Estrutura

O projeto possui a seguinte estrutura de pastas

- <strong>src</strong>: diretótio com as pastas que compõe o projeto;
- <strong>components</strong>: Componentes da aplicação utilizado nas páginas;
- <strong>pages</strong>: Páginas da aplicação;
- <strong>services</strong>: Configuração de serviços utilizados pela aplicação;
- <strong>styles</strong>: Estilos globais e da página home;

## Execução

A aplicação utiliza a API https://kitsu.docs.apiary.io/ para obter as informações mostradas nas páginas. Dessa forma é necessário criar, na raiz do projeto, um arquivo com nome <i>.env.local</i>. Dentro desse arquivo adicione a variável de ambiente <strong>BASENAME_URL=https://kitsu.io/api/edge</strong>.

#### No terminal, dentro da pasta do projeto, execute os comandos:

<i>\*Instalar dependências do projeto</i>

```bash
yarn
```

<i>\*Rodar a aplicação</i>

```bash
yarn dev
```

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.
