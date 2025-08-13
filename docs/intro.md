---
sidebar_position: 1
---

# Introdução ao Projudi

**Projudi** é um sistema moderno de documentação jurídica que facilita a gestão e organização de processos legais.

## Começando rapidamente

### O que você precisa

- [Node.js](https://nodejs.org/en/download/) versão 18.0 ou superior:
  - Ao instalar o Node.js, é recomendado marcar todas as opções relacionadas às dependências.

## Gere um novo site

Gere um novo site Docusaurus usando o **template clássico**.

O template clássico será automaticamente adicionado ao seu projeto após executar o comando:

```bash
npm init docusaurus@latest my-website classic
```

Você pode digitar esse comando em Command Prompt, Powershell, Terminal, ou qualquer outro terminal integrado do seu editor de código.

O comando também instala todas as dependências necessárias para executar o Docusaurus.

## Inicie seu site

Execute o servidor de desenvolvimento:

```bash
cd my-website
npm run start
```

O comando `cd` muda o diretório para o qual você está trabalhando. Para trabalhar com o site Docusaurus recém-criado, você precisará navegar até lá no terminal.

O comando `npm run start` constrói seu site localmente e o serve através de um servidor de desenvolvimento, pronto para você visualizar em http://localhost:3000/.

Abra `docs/intro.md` (esta página) e edite algumas linhas: o site **recarrega automaticamente** e exibe suas mudanças.