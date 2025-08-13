---
sidebar_position: 1
---

# Analisar Autos Conclusos

## Contexto
Bounded Context: **Conclusões e Decisões**

## Descrição
Funcionalidade para análise de autos conclusos na fila de decisão do magistrado.

## Requisitos Funcionais

### RF001 - Visualizar Fila de Autos Conclusos
- O magistrado deve poder visualizar a lista de autos conclusos
- A lista deve ser ordenada por data de conclusão (mais antigos primeiro)
- Deve exibir informações básicas: número do processo, partes, tipo de ação

### RF002 - Filtrar Autos Conclusos
- Permitir filtro por tipo de processo (cível, criminal, etc.)
- Filtro por urgência/prioridade
- Filtro por data de conclusão

### RF003 - Analisar Auto Concluso
- Abrir o processo para análise detalhada
- Visualizar andamentos e documentos
- Acessar funcionalidades de decisão

## Regras de Negócio

### RN001 - Ordem de Análise
- Processos com prioridade legal têm precedência
- Em caso de empate, considera-se a data de conclusão

### RN002 - Segurança
- Apenas magistrados e assessores autorizados podem acessar
- Log de todas as ações realizadas

## Critérios de Aceite

### CA001 - Lista de Autos
```gherkin
Dado que sou um magistrado logado no sistema
Quando acesso a funcionalidade "Analisar Autos Conclusos"
Então devo ver a lista de processos conclusos
E os processos devem estar ordenados por prioridade e data
```

### CA002 - Filtros
```gherkin
Dado que estou na lista de autos conclusos
Quando aplico um filtro por tipo de processo
Então apenas processos do tipo selecionado devem ser exibidos
```

## Interfaces

### Entrada
- Filtros de busca
- Critérios de ordenação

### Saída
- Lista paginada de autos conclusos
- Detalhes do processo selecionado

## Dependências

### Contextos Relacionados
- **Ciclo de Vida do Processo**: Para dados básicos do processo
- **Identidade e Acesso**: Para controle de permissões
- **Movimentações Processuais**: Para histórico de andamentos

### Shared Kernel
- `ProcessoId`
- `UsuarioId`
- `StatusProcesso`
- `TipoProcesso`