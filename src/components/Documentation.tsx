import React from 'react';
import {
  BookOpen,
  Code,
  Database,
  Shield,
  Zap,
  FileText,
  GitBranch,
  Terminal,
  Package,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function Documentation() {
  const sections = [
    {
      title: 'Visão Geral',
      icon: BookOpen,
      color: 'blue',
      items: [
        {
          title: 'Introdução ao Projeto',
          description: 'O DASA Follow-Up Automation é uma solução PoC que utiliza IA generativa para automatizar a categorização e follow-up de tickets no Service Desk.',
        },
        {
          title: 'Objetivos',
          description: 'Reduzir em 89% o tempo de processamento de tickets, alcançar 52% de automação resolutiva e melhorar a eficiência operacional do Service Desk.',
        },
        {
          title: 'Escopo do PoC',
          description: 'Implementação inicial focada em 10 categorias principais de tickets, integração com ServiceNow e Microsoft Teams, e dashboard de métricas.',
        },
      ],
    },
    {
      title: 'Arquitetura Técnica',
      icon: GitBranch,
      color: 'cyan',
      items: [
        {
          title: 'Arquitetura 100% Azure',
          description: 'Sistema modular com 7 camadas Azure: Frontend (React), Orchestration (Logic Apps), Serverless (Functions), Data (SQL Database), Security (AD + Secret Manager), Integration (APIs externas), Observability (Monitor + Power BI).',
        },
        {
          title: 'Stack Tecnológica',
          description: 'Orquestração: Azure Logic Apps (workflows visuais). Serverless: Azure Functions. Dados: Azure SQL Database. IA: Azure OpenAI GPT-4o. Comunicação: Teams + Twilio. Ticketing: ServiceNow. Analytics: Power BI + Azure Monitor.',
        },
        {
          title: 'Integrações',
          description: 'ServiceNow API para gestão de tickets (já utilizado), Twilio para SMS/WhatsApp (já utilizado), Microsoft Teams via Graph API (já utilizado), Azure AD para autenticação (já utilizado), Power BI para dashboards (já utilizado).',
        },
      ],
    },
    {
      title: 'Guia de Desenvolvimento',
      icon: Code,
      color: 'green',
      items: [
        {
          title: 'Configuração do Ambiente',
          description: 'Node.js 18+, npm/pnpm, credenciais Azure (Logic Apps, Functions, SQL), tokens ServiceNow e Teams (Secret Manager), IA tokens (Azure OpenAI). Clone o repositório e execute npm install.',
        },
        {
          title: 'Estrutura de Pastas',
          description: '/src/components (UI), /src/lib (utilitários), /azure/functions (Azure Functions), /azure/logic-apps (Logic Apps definitions), /database/migrations (SQL schemas).',
        },
        {
          title: 'Desenvolvimento Local',
          description: 'npm run dev para frontend, Azure Functions Core Tools para testar functions localmente, npm run test para testes unitários.',
        },
      ],
    },
    {
      title: 'Banco de Dados',
      icon: Database,
      color: 'purple',
      items: [
        {
          title: 'Schema Principal (Azure SQL Database)',
          description: 'Tabelas: follow_up_events (histórico automações), automation_rules (configuráveis), audit_log (LGPD compliance), templates (email/SMS/Teams), tickets_cache (espelho ServiceNow), performance_metrics.',
        },
        {
          title: 'Migrations',
          description: 'Sistema de versionamento de schema via migrations SQL. Cada alteração documentada e reversível. Deploy automatizado via Azure DevOps.',
        },
        {
          title: 'Backup e Recovery',
          description: 'Backups automáticos diários via Azure SQL Database (já configurado). Point-in-time recovery até 35 dias. Geo-redundância habilitada.',
        },
      ],
    },
    {
      title: 'Governança e Aprovações',
      icon: CheckCircle2,
      color: 'green',
      items: [
        {
          title: 'Stack 100% Azure/DASA Aprovada',
          description: 'Infraestrutura 100% Azure (Logic Apps + Functions + SQL Database já pagos pela DASA) + Integrações com ferramentas já utilizadas: ServiceNow, Twilio, Teams, Azure AD, Power BI.',
        },
        {
          title: 'Zero Custo de Novas Licenças',
          description: 'Reutilização de tecnologias Azure já pagas pela DASA + ferramentas corporativas já licenciadas. Sem necessidade de novos contratos, homologações ou treinamentos. TCO (Total Cost of Ownership) drasticamente reduzido.',
        },
        {
          title: 'Compliance e Auditoria',
          description: 'RBAC com Azure AD (já configurado). Audit log LGPD-compliant em Azure SQL Database. Secret Manager para API keys. Logs imutáveis no Azure Monitor. Conformidade LGPD e segurança healthcare garantida.',
        },
      ],
    },
    {
      title: 'Segurança',
      icon: Shield,
      color: 'red',
      items: [
        {
          title: 'Autenticação',
          description: 'OAuth2 com Azure AD / Entra ID para SSO corporativo (já utilizado). RBAC (Role-Based Access Control) com níveis: Admin, Analista, Viewer. Permissões por fila/automation.',
        },
        {
          title: 'Proteção de Dados',
          description: 'TLS 1.3 (transit + at-rest encryption). Dados sensíveis masked nos logs. Secret Manager para ServiceNow API keys, Twilio credentials, Azure OpenAI tokens, SMTP credentials.',
        },
        {
          title: 'Monitoramento de Segurança',
          description: 'Azure Monitor para logs centralizados. Application Insights para performance tracing. Health checks endpoint /health a cada 60sec. Alertas via Slack + Teams + PagerDuty (on-call).',
        },
      ],
    },
    {
      title: 'API Reference',
      icon: Terminal,
      color: 'orange',
      items: [
        {
          title: 'Endpoints Principais',
          description: 'POST /api/tickets/categorize - Categoriza ticket via IA. POST /api/followup/send - Envia follow-up via Teams. GET /api/analytics - Retorna métricas.',
        },
        {
          title: 'Autenticação API',
          description: 'Bearer token no header Authorization. API keys disponíveis em configurações. Rate limit por key: 1000 req/min.',
        },
        {
          title: 'Webhooks',
          description: 'ServiceNow webhook para novos tickets. Teams webhook para respostas de usuários. Retry automático com backoff exponencial.',
        },
      ],
    },
  ];

  const quickLinks = [
    { title: 'Repositório GitHub', icon: GitBranch, href: '#' },
    { title: 'API Playground', icon: Terminal, href: '#' },
    { title: 'Postman Collection', icon: Package, href: '#' },
    { title: 'Vídeo Tutorial', icon: ExternalLink, href: '#' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500/30 bg-blue-500/10',
      cyan: 'border-cyan-500/30 bg-cyan-500/10',
      green: 'border-green-500/30 bg-green-500/10',
      purple: 'border-purple-500/30 bg-purple-500/10',
      red: 'border-red-500/30 bg-red-500/10',
      orange: 'border-orange-500/30 bg-orange-500/10',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-400',
      cyan: 'text-cyan-400',
      green: 'text-green-400',
      purple: 'text-purple-400',
      red: 'text-red-400',
      orange: 'text-orange-400',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="documentation" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Documentação Completa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Documentação Técnica do Projeto
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Guia completo de arquitetura, desenvolvimento, APIs e melhores práticas para o projeto DASA Follow-Up Automation
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors flex items-center gap-3"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{link.title}</p>
                  <p className="text-xs text-slate-400">Acessar</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="space-y-6 mb-12">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div
                key={sectionIndex}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg border ${getColorClasses(section.color)}`}>
                    <Icon className={`w-6 h-6 ${getIconColor(section.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 ${getIconColor(section.color)} flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
