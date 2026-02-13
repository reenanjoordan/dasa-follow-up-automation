import React from 'react';
import { Server, Database, Cloud, Shield, GitBranch } from 'lucide-react';

export default function Architecture() {
  const components = [
    {
      layer: 'Canais de Entrada',
      icon: Cloud,
      items: [
        'Twilio (URA/WhatsApp)',
        'Microsoft Teams',
        'Voz, Chat, Mensageria',
      ],
      color: 'from-blue-600 to-blue-400',
    },
    {
      layer: 'Cérebro (IA Cognitiva)',
      icon: Server,
      items: [
        'Vertex AI Agent Builder',
        'OpenAI GPT-4 (reserva B)',
        'Interpretação e decisão',
      ],
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      layer: 'Orquestrador',
      icon: GitBranch,
      items: [
        'Azure Logic Apps',
        'Fluxos e integrações',
        'Automação corporativa',
      ],
      color: 'from-green-600 to-green-400',
    },
    {
      layer: 'Integrações Microsoft',
      icon: Database,
      items: [
        'Graph API, Entra ID',
        'Intune, Freshworks',
        'Automações corporativas',
      ],
      color: 'from-orange-600 to-orange-400',
    },
    {
      layer: 'Infraestrutura',
      icon: Shield,
      items: [
        'Azure Functions',
        'Secret Manager',
        'RBAC OAuth2/JWT',
      ],
      color: 'from-red-600 to-red-400',
    },
    {
      layer: 'Observabilidade',
      icon: Server,
      items: [
        'Freshworks, Power BI',
        'Azure Monitor',
        'Logs, auditoria, KPIs',
      ],
      color: 'from-purple-600 to-purple-400',
    },
  ];

  const integrations = [
    { name: 'Twilio (URA/WhatsApp)', status: 'Em uso', icon: '📞' },
    { name: 'Vertex AI + OpenAI GPT-4', status: 'Aprovado', icon: '🧠' },
    { name: 'Azure Logic Apps', status: 'Aprovado', icon: '⚙️' },
    { name: 'Microsoft Graph API', status: 'Em uso', icon: '🔗' },
    { name: 'Freshworks', status: 'Em uso', icon: '🎫' },
    { name: 'Power BI', status: 'Em uso', icon: '📊' },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Arquitetura Técnica</h2>
          <p className="text-xl text-slate-400">Infraestrutura e integrações de sistema</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {components.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div key={idx} className="relative">
                <div className={`bg-gradient-to-br ${comp.color} opacity-10 absolute inset-0 rounded-xl blur`} />
                <div className="relative bg-slate-800/60 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                  <div className={`w-12 h-12 bg-gradient-to-br ${comp.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-4 text-lg">{comp.layer}</h3>
                  <ul className="space-y-2">
                    {comp.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-slate-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Segurança e Conformidade</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Row Level Security (RLS) em todas as tabelas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Criptografia de dados em trânsito e em repouso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Auditoria completa de mudanças</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Conformidade LGPD e segurança healthcare</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Integrações Críticas</h3>
            <div className="space-y-3">
              {integrations.map((integration, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{integration.icon}</span>
                    <span className="text-slate-300 font-medium">{integration.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    integration.status === 'Em uso'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {integration.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-700/50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Fluxo de Automação Completo</h3>
          <div className="bg-slate-900/50 rounded-lg p-6 font-mono text-sm text-slate-300 overflow-x-auto">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-blue-300">Twilio/Teams</span>
              <span className="text-cyan-400">→</span>
              <span className="text-cyan-300">Vertex AI</span>
              <span className="text-cyan-400">→</span>
              <span className="text-green-300">Azure Logic Apps</span>
              <span className="text-cyan-400">→</span>
              <span className="text-orange-300">Graph API</span>
              <span className="text-cyan-400">→</span>
              <span className="text-orange-300">Freshworks</span>
              <span className="text-cyan-400">→</span>
              <span className="text-purple-300">Power BI</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Todas as integrações protegidas por <span className="text-red-300 font-semibold">Azure Functions</span>, <span className="text-red-300 font-semibold">Secret Manager</span> e <span className="text-red-300 font-semibold">RBAC OAuth2/JWT</span>
          </p>
        </div>
      </div>
    </div>
  );
}
