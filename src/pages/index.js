import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function SystemStructure() {
  return (
    <section className={styles.systemSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2">Sistema de Processo Judicial</Heading>
            <p><strong>Regras deste documento:</strong></p>
            <ul>
              <li>Cada funcionalidade é atribuída a exatamente um bounded context (única fonte de verdade do vocabulário e das regras daquele domínio).</li>
              <li>Sempre manter o link para os requisitos originais da funcionalidade quando aplicável.</li>
              <li>Este documento é evolutivo; contextos podem ser renomeados ou reorganizados conforme novas funcionalidades forem mapeadas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoundedContexts() {
  const contexts = [
    {
      title: 'Conclusões e Decisões ✅',
      description: 'Gestão da fila de autos conclusos e itens submetidos à decisão do magistrado.',
      items: ['Analisar Autos Conclusos', 'Pre‑Analisar Autos Conclusos', 'Conclusões (Troca de Responsável)']
    },
    {
      title: 'Pendências e Cumprimentos ✅',
      description: 'Gestão completa do ciclo de vida de pendências processuais.',
      items: ['Analisar Pendência', 'Pre‑Analisar Pendência', 'Descartar Pendência', 'Cumprimentos (Pendências)', 'Pendência Arquivo', 'Gerar Pendências em Movimentação']
    },
    {
      title: 'Audiências, Sessões e Agenda ✅',
      description: 'Planejamento, agendamento e condução de audiências e sessões.',
      items: ['Audiência x Processo', 'Movimentação de Audiência/Processo', 'Agenda de Audiências', 'Audiências (Consulta, Agendamento e Público)', 'Consultar Audiência DRS']
    },
    {
      title: 'Ciclo de Vida do Processo 🔄',
      description: 'Criação, cadastro, vínculos e redistribuição de processos.',
      items: ['Processo Cível (Cadastro)', 'Processo Criminal (Cadastro)', 'Processo Segundo Grau (Cadastro)', 'Processo Apenso', 'Processo Responsável', 'Redistribuição de Processo']
    },
    {
      title: 'Consulta e Dados do Processo 🔄',
      description: 'Localização, consulta e manutenção de dados processuais.',
      items: ['Busca de Processo', 'Processos Gerais', 'Processos Paralisados', 'Processos Sem Movimentação']
    },
    {
      title: 'Identidade, Acesso e Equipes ✅',
      description: 'Autenticação, autorização e gestão de equipes.',
      items: ['Usuário (Autenticação e Gestão)', 'Dados do Usuário', 'Celulares do Usuário', 'Assessor (Gestão de Assessores/Assistentes)']
    },
    {
      title: 'Atos e Instrumentos Judiciais 🆕',
      description: 'Emissão e gestão de atos judiciais (certidões, mandados, etc.).',
      items: ['Certidão (Emissão/Consulta/Validação)', 'Mandado de Prisão', 'Futuro: Alvarás, Ofícios, outros atos']
    },
    {
      title: 'Configurações e Automação 🔄',
      description: 'Classificadores, regras e automações do sistema.',
      items: ['Classificador', 'Configuração Pré‑Análise Automática', 'Consultar Jurisprudência', 'Movimentação Tipo (Parametrização)']
    }
  ];

  return (
    <section className={styles.contextsSection}>
      <div className="container">
        <Heading as="h2">Bounded Contexts</Heading>
        <div className="row">
          {contexts.map((context, idx) => (
            <div key={idx} className="col col--6" style={{marginBottom: '2rem'}}>
              <div className={styles.contextCard}>
                <Heading as="h3">{context.title}</Heading>
                <p><strong>Escopo:</strong> {context.description}</p>
                <ul>
                  {context.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SharedKernel() {
  return (
    <section className={styles.sharedKernelSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2">Shared Kernel 🔗</Heading>
            <p>O <strong>Shared Kernel</strong> contém elementos fundamentais do domínio que são compartilhados entre múltiplos bounded contexts, como value objects, enums e utilitários básicos que representam conceitos universais do sistema judicial.</p>
            
            <div className="row">
              <div className="col col--4">
                <Heading as="h4">Value Objects Fundamentais</Heading>
                <ul>
                  <li>Identificadores únicos</li>
                  <li>Dados estruturados (CPF, CNPJ, etc.)</li>
                  <li>Períodos e datas</li>
                </ul>
              </div>
              <div className="col col--4">
                <Heading as="h4">Enums e Constantes</Heading>
                <ul>
                  <li>Status universais</li>
                  <li>Tipos e classificações</li>
                  <li>Configurações do sistema</li>
                </ul>
              </div>
              <div className="col col--4">
                <Heading as="h4">Utilitários e Validações</Heading>
                <ul>
                  <li>Validadores de domínio</li>
                  <li>Formatadores</li>
                  <li>Eventos de domínio base</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageStructure() {
  return (
    <section className={styles.structureSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2">Estrutura de Pacotes Revisada</Heading>
            <pre className={styles.packageStructure}>
{`src/main/java/br/gov/go/tj/projudi/
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
└── api/publica/           # APIs Públicas e Serviços`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    'Melhor coesão: Contextos mais equilibrados em tamanho',
    'Menos overhead: Redução de contextos muito pequenos',
    'Maior flexibilidade: Espaço para crescimento futuro',
    'Manutenibilidade: Organização mais clara para desenvolvedores',
    'Reutilização: Shared Kernel elimina duplicação de conceitos fundamentais',
    'Consistência: Uso padronizado de value objects e validações em todos os contextos'
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2">Benefícios da Reorganização</Heading>
            <div className="row">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="col col--6">
                  <p>✅ {benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sistema de Documentação Jurídica - Arquitetura de Sistema de Processo Judicial baseada em Domain-Driven Design">
      <HomepageHeader />
      <main>
        <SystemStructure />
        <BoundedContexts />
        <SharedKernel />
        <PackageStructure />
        <Benefits />
      </main>
    </Layout>
  );
}