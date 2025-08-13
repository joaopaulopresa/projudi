---
sidebar_position: 1
---

# Analisar Pendência

## Contexto
Bounded Context: **Pendências e Cumprimentos**

## Descrição
Funcionalidade para análise e gestão de pendências processuais, permitindo ao usuário visualizar, filtrar e tomar ações sobre itens pendentes.

## Requisitos Funcionais

### RF001 - Listar Pendências
- Exibir lista de pendências por usuário/serventia
- Ordenação por data de vencimento, prioridade
- Paginação para grandes volumes

### RF002 - Filtrar Pendências
- Filtro por tipo de pendência
- Filtro por status (ativas, vencidas, cumpridas)
- Filtro por processo específico
- Filtro por período de vencimento

### RF003 - Visualizar Detalhes da Pendência
- Mostrar informações completas da pendência
- Histórico de alterações
- Documentos relacionados
- Prazo e urgência

### RF004 - Cumprir Pendência
- Marcar pendência como cumprida
- Registrar observações do cumprimento
- Anexar documentos comprobatórios

### RF005 - Transferir Pendência
- Transferir responsabilidade para outro usuário
- Registrar motivo da transferência
- Notificar usuário destinatário

## Regras de Negócio

### RN001 - Prazo de Vencimento
- Pendências vencidas devem ser destacadas visualmente
- Notificação automática próximo ao vencimento (configurável)

### RN002 - Controle de Acesso
- Usuário só visualiza pendências sob sua responsabilidade
- Magistrados visualizam todas as pendências da serventia
- Assessores visualizam conforme permissões

### RN003 - Auditoria
- Todas as ações sobre pendências devem ser logadas
- Histórico deve incluir: usuário, data/hora, ação, observações

### RN004 - Integridade
- Pendência cumprida não pode retornar ao status ativo
- Transferência requer justificativa obrigatória

## Critérios de Aceite

### CA001 - Visualização de Pendências
```gherkin
Dado que sou um usuário logado
Quando acesso "Analisar Pendência" 
Então devo ver apenas minhas pendências ativas
E as pendências vencidas devem aparecer em destaque
```

### CA002 - Cumprimento de Pendência
```gherkin
Dado que tenho uma pendência ativa
Quando marco como cumprida e informo observações
Então a pendência deve mudar para status "Cumprida"
E deve ser registrado no histórico com data/hora/usuário
```

### CA003 - Filtros
```gherkin
Dado que estou na lista de pendências
Quando aplico filtro por "Vencidas"
Então apenas pendências com data de vencimento passada devem aparecer
```

## Interfaces

### Entrada
- Critérios de filtro
- Dados de cumprimento
- Informações de transferência

### Saída
- Lista de pendências filtrada
- Detalhes da pendência
- Confirmação de ações realizadas

## Dependências

### Contextos Relacionados
- **Ciclo de Vida do Processo**: Para dados do processo relacionado
- **Identidade e Acesso**: Para controle de permissões e usuários
- **Movimentações Processuais**: Para gerar movimentações automáticas

### Shared Kernel
- `PendenciaId`
- `ProcessoId` 
- `UsuarioId`
- `StatusPendencia`
- `TipoPendencia`
- `PrazoLegal`

## Notificações

### Automáticas
- Pendência próxima ao vencimento (48h antes)
- Pendência vencida (diária)
- Transferência de responsabilidade

### Configuráveis
- Frequência de lembretes
- Antecedência da notificação
- Canais de notificação (email, sistema)