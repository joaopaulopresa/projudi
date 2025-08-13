---
layout: default
title: Sistema de Processo Judicial
description: Documentação da arquitetura Domain-Driven Design
---

# Sistema de Processo Judicial

**Arquitetura de Domínio Estruturada**

Este documento apresenta a organização em Bounded Contexts do Sistema de Processo Judicial, seguindo princípios de Domain-Driven Design para garantir clareza, manutenibilidade e escalabilidade.

## Regras do Sistema

- Cada funcionalidade é atribuída a exatamente um bounded context (única fonte de verdade do vocabulário e das regras daquele domínio)
- Sempre manter o link para os requisitos originais da funcionalidade quando aplicável
- Este documento é evolutivo; contextos podem ser renomeados ou reorganizados conforme novas funcionalidades forem mapeadas

---

## Bounded Contexts

### 1. Conclusões e Decisões ✅
**Escopo**: Gestão da fila de autos conclusos e itens submetidos à decisão do magistrado.

- [Analisar Autos Conclusos](./analisar-autos-conclusos/requisitos.md)
- [Pre‑Analisar Autos Conclusos](./pre-analisar-autos-conclusos/requisitos.md)  
- [Conclusões (Troca de Responsável)](./conclusoes/requisitos.md)

### 2. Pendências e Cumprimentos ✅
**Escopo**: Gestão completa do ciclo de vida de pendências processuais.

- [Analisar Pendência](./analisar-pendencia/requisitos.md)
- [Pre‑Analisar Pendência](./pre-analisar-pendencia/requisitos.md)
- [Descartar Pendência](./descartar-pendencia/requisitos.md)
- [Cumprimentos (Pendências)](./cumprimentos/requisitos.md)
- [Pendência Arquivo](./pendencia-arquivo/requisitos.md)
- [Gerar Pendências em Movimentação](./pendenciamovimentacao/requisitos.md)

### 3. Audiências, Sessões e Agenda ✅
**Escopo**: Planejamento, agendamento e condução de audiências e sessões.

- [Audiência x Processo (Troca de Responsável)](./audienciaprocesso/requisitos.md)
- [Movimentação de Audiência/Processo](./audienciaprocesso-movimentacao/requisitos.md)
- [Agenda de Audiências](./agenda/requisitos.md)
- [Audiências (Consulta, Agendamento e Público)](./audiencias/requisitos.md)
- [Consultar Audiência DRS](./consultar-audiencia-drs/requisitos.md)

### 4. Ciclo de Vida do Processo 🔄
**Escopo**: Criação, cadastro, vínculos e redistribuição de processos.

- [Processo Cível (Cadastro)](./processo-civel/requisitos.md)
- [Processo Criminal (Cadastro)](./processo-criminal/requisitos.md)
- [Processo Segundo Grau (Cadastro)](./processo-segundo-grau/requisitos.md)
- [Processo Apenso](./processo-apenso/requisitos.md)
- [Processo Responsável (Troca/Manutenção)](./processo-responsavel/requisitos.md)
- [Redistribuição de Processo](./redistribuicao/requisitos.md)

### 5. Consulta e Dados do Processo 🔄
**Escopo**: Localização, consulta e manutenção de dados processuais.

- [Busca de Processo](./busca-processo/requisitos.md)
- [Processos Gerais](./processos-gerais/requisitos.md)
- [Processos Paralisados (Consulta)](./processoparalisado/requisitos.md)
- [Processos Sem Movimentação (Consulta)](./processosemmovimentacao/requisitos.md)

### 6. Identidade, Acesso e Equipes ✅
**Escopo**: Autenticação, autorização e gestão de equipes.

- [Usuário (Autenticação e Gestão)](./usuario/requisitos.md)
- [Dados do Usuário](./dados-usuario/requisitos.md)
- [Celulares do Usuário](./celular/requisitos.md)
- [Assessor (Gestão de Assessores/Assistentes)](./assessor/requisitos.md)

### 7. Atos e Instrumentos Judiciais 🆕
**Escopo**: Emissão e gestão de atos judiciais (certidões, mandados, etc.).

- [Certidão (Emissão/Consulta/Validação)](./certidao/requisitos.md)
- [Mandado de Prisão](./mandado-de-prisao/requisitos.md)
- Futuro: Alvarás, Ofícios, outros atos

### 8. Configurações e Automação 🔄
**Escopo**: Classificadores, regras e automações do sistema.

- [Classificador](./classificador/requisitos.md)
- [Configuração Pré‑Análise Automática](./configuracao-pre-analise-automatica/requisitos.md)
- [Consultar Jurisprudência](./consultar-jurisprudencia/requisitos.md)
- [Movimentação Tipo (Parametrização)](./movimentacao-tipo/requisitos.md)

### 9. Estatísticas e Produtividade 🔄
**Escopo**: Métricas de produtividade e estatísticas operacionais.

- [Itens do Relatório de Estatística de Produtividade](./estatisticaprodutividadeitem/requisitos.md)
- [Relatório Analítico de Produtividade](./relatorio-analitico-produtividade/requisitos.md)
- [Relatório Sumário de Produtividade](./relatorio-sumario-produtividade/requisitos.md)
- [Gráficos – Processos por Comarca/Serventia/Item](./graficos-funcoes/requisitos.md)

### 10. Relatórios Gerenciais 🔄
**Escopo**: Relatórios administrativos e de gestão.

- [Distribuição por Serventia (Relatório)](./distribuicao/requisitos.md)
- [Liminar Deferida (Processos não julgados)](./liminar-deferida/requisitos.md)
- [Por Juízes da Serventia – Acesso (Relatório)](./por-juizes-da-serventia-acesso/requisitos.md)
- [Processos Turma/2º Grau – Relatório](./processos-turma2-grau/requisitos.md)
- [Relatório Analítico de Pendência](./relatorio-analitico-pendencia/requisitos.md)
- [Relatório Analítico de Processo](./relatorio-analitico-processo/requisitos.md)
- [Relatório Sumário de Processo](./relatorio-sumario-processo/requisitos.md)

### 11. Gestão Documental ✅
**Escopo**: Documentos, arquivos, mídias e modelos.

- [Movimentação de Arquivo](./movimentacao-arquivo/requisitos.md)
- [Enviar Mídias – Upload](./enviar-midias-upload/requisitos.md)
- [Modelo (Cadastro e Gestão de Modelos)](./modelo/requisitos.md)

### 12. Movimentações Processuais ✅
**Escopo**: Criação e gestão de movimentações processuais.

- [Movimentação de Processo (Genérica)](./movimentacao/requisitos.md)

### 13. Partes e Representação ✅
**Escopo**: Gestão de partes, advogados e representantes.

- [Processo Parte](./processo-parte/requisitos.md)
- [Processo Parte Advogado](./processo-parte-advogado/requisitos.md)
- [Processo Parte Prisão](./processo-parte-prisao/requisitos.md)

### 14. Financeiro — Guias e Custas ✅
**Escopo**: Gestão financeira de guias e custas processuais.

- [Guia Emissão](./guia-emissao/requisitos.md)
- [Vincular Guia Inicial ao Processo](./vincular-guia/requisitos.md)
- [Vincular Guia Complementar ao Processo](./vincular-guia-complementar/requisitos.md)

### 15. APIs Públicas e Serviços ✅
**Escopo**: Interfaces públicas e serviços externos.

- [Serviços Públicos](./servicos-publicos/requisitos.md)

---

## Estrutura de Pacotes Revisada

```text
src/main/java/br/gov/go/tj/projudi/
├── conclusao/              # Conclusões e Decisões
├── pendencia/              # Pendências e Cumprimentos  
├── audiencia/              # Audiências, Sessões e Agenda
├── processo/
│   ├── ciclovida/         # Ciclo de Vida do Processo
│   └── consulta/          # Consulta e Dados do Processo
├── identidadeacesso/       # Identidade, Acesso e Equipes
├── ato/                   # Atos e Instrumentos Judiciais
├── configuracao/          # Configurações e Automação
├── relatorio/
│   ├── produtividade/     # Estatísticas e Produtividade
│   └── gerencial/         # Relatórios Gerenciais
├── documento/             # Gestão Documental
├── movimentacao/          # Movimentações Processuais
├── parte/                 # Partes e Representação
├── financeiro/            # Financeiro — Guias e Custas
└── api/publica/           # APIs Públicas e Serviços
```

---

## [Shared Kernel](./shared-kernel.md) 🔗

O **Shared Kernel** contém elementos fundamentais do domínio que são compartilhados entre múltiplos bounded contexts, como value objects, enums e utilitários básicos que representam conceitos universais do sistema judicial.

### Value Objects Fundamentais
```java
// Identificadores únicos
ProcessoId, ServentiaId, UsuarioId, ComarcaId, CargoId, AreaId
AssessorId, AdvogadoId, ParteId, GuiaId, AudienciaId

// Dados estruturados
CPF, CNPJ, RG, OAB, Email, Telefone
CEP, Endereco, NumeroProcesso

// Períodos e datas
PeriodoProcessual, DataAudiencia, PrazoLegal
```

### Enums e Constantes
```java
// Status universais
StatusProcesso, StatusPendencia, StatusAudiencia, StatusGuia

// Tipos e classificações
TipoProcesso, TipoMovimentacao, TipoPendencia, TipoAudiencia
PerfilUsuario, TipoDocumento, GrauInstancia

// Configurações do sistema
ConfiguracaoSistema, ParametrosGerais
```

---

## Benefícios da Reorganização

✅ **Melhor coesão**: Contextos mais equilibrados em tamanho  
✅ **Menos overhead**: Redução de contextos muito pequenos  
✅ **Maior flexibilidade**: Espaço para crescimento futuro  
✅ **Manutenibilidade**: Organização mais clara para desenvolvedores  
✅ **Reutilização**: Shared Kernel elimina duplicação de conceitos fundamentais  
✅ **Consistência**: Uso padronizado de value objects e validações em todos os contextos

---

*© 2024 Sistema de Processo Judicial - Tribunal de Justiça de Goiás*  
*Documentação técnica baseada em Domain-Driven Design*