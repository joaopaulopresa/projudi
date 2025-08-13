// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Projudi',
  tagline: 'Sistema de Processo Judicial - Arquitetura baseada em Domain-Driven Design',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://joaopaulopresa.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/projudi/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'joaopaulopresa', // Usually your GitHub org/user name.
  projectName: 'projudi', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/joaopaulopresa/projudi/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/joaopaulopresa/projudi/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Projudi',
        logo: {
          alt: 'Projudi Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Arquitetura',
          },
          {
            label: 'Bounded Contexts',
            position: 'left',
            items: [
              {
                label: 'Conclusões e Decisões',
                to: '/docs/contexts/conclusao',
              },
              {
                label: 'Pendências e Cumprimentos',
                to: '/docs/contexts/pendencia',
              },
              {
                label: 'Audiências e Agenda',
                to: '/docs/contexts/audiencia',
              },
              {
                label: 'Ciclo de Vida do Processo',
                to: '/docs/contexts/processo-ciclovida',
              },
              {
                label: 'Identidade e Acesso',
                to: '/docs/contexts/identidade-acesso',
              },
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/joaopaulopresa/projudi',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Arquitetura',
            items: [
              {
                label: 'Introdução',
                to: '/docs/intro',
              },
              {
                label: 'Bounded Contexts',
                to: '/#bounded-contexts',
              },
              {
                label: 'Shared Kernel',
                to: '/#shared-kernel',
              },
            ],
          },
          {
            title: 'Desenvolvimento',
            items: [
              {
                label: 'Estrutura de Pacotes',
                to: '/#estrutura-de-pacotes',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/joaopaulopresa/projudi',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Domain-Driven Design',
                href: 'https://domainlanguage.com/ddd/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Projudi - Sistema de Processo Judicial. Documentação construída com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'json', 'yaml'],
      },
    }),
};

export default config;