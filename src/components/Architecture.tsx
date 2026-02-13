import React from 'react';
import { Server, Database, Cloud, Shield, GitBranch } from 'lucide-react';

export default function Architecture() {
  const components = [
    {
      layer: 'Frontend Layer',
      icon: Cloud,
      items: [
        'React + TypeScript',
        'Dashboard Automação',
        'Métricas Real-time',
      ],
      color: 'from-blue-600 to-blue-400',
    },
    {
      layer: 'Orchestration Layer',
      icon: GitBranch,
      items: [
        'Azure Logic Apps',
        'Workflows Visuais',
        'Retry Automático',
      ],
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      layer: 'Serverless Layer',
      icon: Server,
      items: [
        'Azure Functions',
        'ServiceNow Sync',
        'IA Categorização',
      ],
      color: 'from-green-600 to-green-400',
    },
    {
      layer: 'Data Layer',
      icon: Database,
      items: [
        'Azure SQL Database',
        'Follow-up Events',
        'Audit Log (LGPD)',
      ],
      color: 'from-purple-600 to-purple-400',
    },
    {
      layer: 'Security Layer',
      icon: Shield,
      items: [
        'Secret Manager',
        'Azure AD / RBAC',
        'TLS 1.3 Encryption',
      ],
      color: 'from-red-600 to-red-400',
    },
    {
      layer: 'Integration Layer',
      icon: GitBranch,
      items: [
        'ServiceNow + Twilio',
        'Teams + Graph API',
        'Vertex AI + OpenAI',
      ],
      color: 'from-orange-600 to-orange-400',
    },
    {
      layer: 'Observability Layer',
      icon: Server,
      items: [
        'Azure Monitor',
        'Power BI Dashboards',
        'Application Insights',
      ],
      color: 'from-pink-600 to-pink-400',
    },
  ];

  const integrations = [
    { name: 'ServiceNow API', status: 'Critical', icon: '🎫' },
    { name: 'Twilio (SMS/WhatsApp)', status: 'Critical', icon: '📱' },
    { name: 'Microsoft Teams', status: 'Critical', icon: '💬' },
    { name: 'Azure AD / Entra ID', status: 'Critical', icon: '👥' },
    { name: 'Vertex AI + OpenAI', status: 'Critical', icon: '🧠' },
    { name: 'Power BI', status: 'Required', icon: '📊' },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Arquitetura Técnica</h2>
          <p className="text-xl text-slate-400">Infraestrutura e integrações de sistema</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
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
                {idx < components.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-slate-700 to-slate-600" />
                  </div>
                )}
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
                <span className="text-slate-300">RBAC + OAuth2 com Azure AD (já configurado na DASA)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Secret Manager para API keys (ServiceNow, Twilio, OpenAI)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">TLS 1.3 encryption + dados sensíveis masked em logs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Audit log LGPD-compliant em Azure SQL Database</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Integrações Críticas (já utilizadas na DASA)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {integrations.map((integration, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{integration.icon}</span>
                    <span className="text-slate-300 font-medium text-sm">{integration.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    integration.status === 'Critical'
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {integration.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-700/50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Fluxo de Dados Simplificado</h3>
          <div className="bg-slate-900/50 rounded-lg p-6 font-mono text-sm text-slate-300 overflow-x-auto">
            <div className="flex items-center gap-4 flex-wrap">
              <span>ServiceNow</span>
              <span className="text-cyan-400">→</span>
              <span>Azure Logic Apps</span>
              <span className="text-cyan-400">→</span>
              <span>Azure Functions (IA)</span>
              <span className="text-cyan-400">→</span>
              <span>Teams/Twilio</span>
              <span className="text-cyan-400">→</span>
              <span>Azure SQL</span>
              <span className="text-cyan-400">→</span>
              <span>Power BI</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            <strong className="text-green-300">Stack 100% Azure/DASA:</strong> Toda infraestrutura em Azure (Logic Apps + Functions + SQL) + Ferramentas já licenciadas (ServiceNow, Twilio, Teams, Power BI)
          </p>
        </div>
      </div>
    </div>
  );
}
