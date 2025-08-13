---
sidebar_position: 1
---

# Processo Cível (Cadastro)

## Contexto
Bounded Context: **Ciclo de Vida do Processo**

## Descrição
Funcionalidade para cadastro e criação de novos processos cíveis no sistema, incluindo validações, numeração automática e distribuição.

## Requisitos Funcionais

### RF001 - Cadastrar Processo Cível
- Capturar dados básicos do processo
- Validar informações obrigatórias
- Gerar número sequencial único
- Atribuir classe processual adequada

### RF002 - Cadastrar Partes
- Registrar requerente(s) e requerido(s)
- Validar CPF/CNPJ das partes
- Permitir múltiplas partes por polo
- Cadastrar representantes legais

### RF003 - Definir Competência
- Determinar vara competente
- Validar jurisdição territorial
- Aplicar regras de distribuição
- Verificar prevenção

### RF004 - Calcular Custas
- Calcular valor das custas iniciais
- Aplicar isenções quando cabíveis
- Gerar guia de recolhimento
- Vincular ao processo

### RF005 - Distribuir Processo
- Realizar distribuição automática/manual
- Respeitar ordem de distribuição
- Considerar impedimentos/suspeições
- Registrar distribuição no sistema

## Regras de Negócio

### RN001 - Numeração Sequencial
- Formato: NNNNNNN-DD.AAAA.J.TR.OOOO
- Sequencial único por ano/origem
- Dígito verificador obrigatório

### RN002 - Validação de Partes
- CPF/CNPJ deve ser válido
- Pessoa física: nome completo obrigatório
- Pessoa jurídica: razão social e CNPJ
- Endereço completo obrigatório

### RN003 - Competência
- Valor da causa determina competência por alçada
- Matéria define competência especializada
- Domicílio do réu para competência territorial

### RN004 - Custas Processuais
- Valor da causa determina custas
- Beneficiário da justiça gratuita: isento
- Entidades públicas: regras específicas

### RN005 - Distribuição
- Equitativa entre varas competentes
- Respeitar ordem cronológica
- Verificar prevenção/conexão

## Critérios de Aceite

### CA001 - Cadastro Básico
```gherkin
Dado que sou um usuário autorizado
Quando cadastro um novo processo cível
E informo todos os dados obrigatórios
Então o processo deve ser criado com número único
E deve aparecer na lista de processos
```

### CA002 - Validação de Partes
```gherkin
Dado que estou cadastrando um processo
Quando informo um CPF inválido para uma parte
Então o sistema deve exibir mensagem de erro
E não permitir continuar o cadastro
```

### CA003 - Cálculo de Custas
```gherkin
Dado que informei valor da causa R$ 10.000,00
Quando finalizo o cadastro do processo
Então as custas devem ser calculadas automaticamente
E uma guia deve ser gerada para pagamento
```

### CA004 - Distribuição
```gherkin
Dado que criei um processo cível
Quando o processo é distribuído
Então deve ser atribuído a uma vara competente
E a distribuição deve ser registrada
```

## Interfaces

### Entrada
- Dados do processo (classe, assunto, valor da causa)
- Informações das partes (autores e réus)
- Endereços e contatos
- Documentos iniciais

### Saída
- Número do processo gerado
- Comprovante de protocolo
- Guia de custas
- Termo de distribuição

## Dependências

### Contextos Relacionados
- **Partes e Representação**: Para cadastro de partes
- **Financeiro**: Para cálculo de custas e guias
- **Identidade e Acesso**: Para controle de permissões
- **Movimentações Processuais**: Para registros de movimentação

### Shared Kernel
- `ProcessoId`
- `NumeroProcesso`
- `CPF`, `CNPJ`
- `TipoProcesso`
- `StatusProcesso`
- `ComarcaId`
- `ServentiaId`

### Sistemas Externos
- **Receita Federal**: Validação de CNPJ
- **SRF**: Consulta CPF
- **CNJ**: Tabelas processuais unificadas

## Validações

### Documentos Obrigatórios
- Petição inicial
- Procuração (se representado)
- Documentos pessoais das partes
- Comprovante de endereço

### Dados Obrigatórios
- Classe processual
- Assunto principal
- Valor da causa
- Partes (mínimo: 1 autor e 1 réu)
- Endereços completos

## Fluxo do Processo

1. **Recebimento**: Protocolo da petição inicial
2. **Validação**: Verificação de dados e documentos
3. **Autuação**: Criação do processo no sistema
4. **Numeração**: Atribuição do número sequencial
5. **Custas**: Cálculo e geração de guias
6. **Distribuição**: Atribuição à vara competente
7. **Notificação**: Comunicação às partes