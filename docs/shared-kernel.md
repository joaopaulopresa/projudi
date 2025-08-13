---
sidebar_position: 2
---

# Shared Kernel 🔗

## Conceito

O **Shared Kernel** contém elementos fundamentais do domínio que são compartilhados entre múltiplos bounded contexts, como value objects, enums e utilitários básicos que representam conceitos universais do sistema judicial.

## Escopo do Shared Kernel

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

### Utilitários e Validações

```java
// Validadores de domínio
ValidadorCPF, ValidadorCNPJ, ValidadorOAB
ValidadorNumeroProcesso, ValidadorCodigoAcesso

// Formatadores
FormatadorProcesso, FormatadorDocumento, FormatadorData

// Exceções de domínio base
DominioException, ValidacaoException, NegocioException
```

### Eventos de Domínio Base

```java
// Eventos fundamentais
ProcessoCriado, ProcessoAlterado, MovimentacaoRealizada
PendenciaGerada, AudienciaAgendada, ConclusaoRealizada
```

## Estrutura do Shared Kernel

```text
src/main/java/br/gov/go/tj/projudi/
└── shared/
    ├── valueobject/          # Value Objects
    │   ├── identificador/    # ProcessoId, UsuarioId, etc.
    │   ├── documento/        # CPF, CNPJ, RG, etc.
    │   ├── endereco/         # CEP, Endereco, etc.
    │   └── periodo/          # Datas, prazos, períodos
    ├── enums/               # Enums e constantes
    │   ├── status/          # Status diversos
    │   ├── tipo/            # Tipos e classificações
    │   └── configuracao/    # Configurações
    ├── validation/          # Validadores de domínio
    ├── formatter/           # Formatadores
    ├── exception/           # Exceções base de domínio
    ├── event/              # Eventos de domínio base
    └── util/               # Utilitários compartilhados
```

## Regras de Governança do Shared Kernel

### ✅ O QUE PODE

- Value objects que representam conceitos universais do domínio judicial
- Enums e constantes usados por 3+ contextos
- Validações de regras básicas (CPF, CNPJ, etc.)
- Exceções base que todos os contextos podem lançar
- Eventos de domínio que cruzam múltiplos contextos

### ❌ O QUE NÃO PODE

- Lógica de negócio específica de um contexto
- Entidades complexas (apenas value objects simples)
- Dependências de frameworks específicos
- Código de infraestrutura
- Regras que mudam frequentemente

### 🔄 Processo de Evolução

1. **Proposta**: Qualquer equipe pode propor inclusão/alteração
2. **Análise**: Verificar se é usado por 3+ contextos
3. **Consenso**: Aprovação de representantes de todos os contextos afetados
4. **Versionamento**: Mudanças seguem versionamento semântico
5. **Migração**: Período de deprecação para mudanças breaking

## Exemplo de Uso

```java
// No contexto de Processo
public class Processo {
    private ProcessoId id;
    private NumeroProcesso numero;
    private StatusProcesso status;
    private ComarcaId comarca;
    // ...
}

// No contexto de Pendência
public class Pendencia {
    private PendenciaId id;
    private ProcessoId processoId; // Reutiliza do Shared Kernel
    private StatusPendencia status;
    private UsuarioId responsavel; // Reutiliza do Shared Kernel
    // ...
}
```

## Estrutura de Pacotes com Shared Kernel

```text
src/main/java/br/gov/go/tj/projudi/
├── shared/                 # 🔗 Shared Kernel
│   ├── valueobject/
│   ├── enums/
│   ├── validation/
│   ├── exception/
│   └── event/
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

## Benefícios do Shared Kernel

✅ **Reutilização**: Elimina duplicação de conceitos fundamentais  
✅ **Consistência**: Uso padronizado de value objects e validações  
✅ **Integridade**: Garantia de que conceitos fundamentais são tratados uniformemente  
✅ **Manutenibilidade**: Centralização de mudanças em conceitos base  
✅ **Eficiência**: Reduz tempo de desenvolvimento ao reutilizar componentes validados