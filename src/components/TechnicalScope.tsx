import React, { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

export default function TechnicalScope() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const scopes = [
    {
      id: 'input-channels',
      title: 'Canais de Entrada Multicanal',
      description: 'Voz, Chat e Mensageria via tecnologias já utilizadas na DASA',
      stack: 'Twilio (URA/WhatsApp) + Microsoft Teams',
      features: [
        'Integração com Twilio para URA e WhatsApp (já utilizados)',
        'Microsoft Teams para comunicação interna (já utilizado)',
        'Captura de tickets de múltiplos canais',
        'Normalização de dados de entrada',
        'Rastreamento de origem do contato',
      ],
    },
    {
      id: 'cognitive-brain',
      title: 'Cérebro Cognitivo (IA)',
      description: 'Interpretação de intenção e decisão de ação com IA',
      stack: 'Vertex AI Agent Builder + OpenAI GPT-4 (reserva B)',
      features: [
        'Vertex AI Agent Builder como motor principal (já aprovado)',
        'OpenAI GPT-4 como fallback e reserva B',
        '92% de acurácia em categorização de tickets',
        'Análise contextual e detecção de intenção',
        'Aprendizado contínuo com feedback humano',
        'Detecção de categorias ausentes no catálogo',
      ],
    },
    {
      id: 'orchestrator',
      title: 'Orquestrador de Ações',
      description: 'Execução de fluxos e integrações corporativas',
      stack: 'Azure Logic Apps (aprovado, substitui n8n)',
      features: [
        'Azure Logic Apps como orquestrador central',
        'Automação de workflows complexos',
        'Integração nativa com ecossistema Microsoft',
        'Escalação baseada em regras de negócio',
        'Monitoramento de SLA e tempo de resposta',
      ],
    },
    {
      id: 'microsoft-integrations',
      title: 'Integrações Microsoft',
      description: 'Execução de automações corporativas no ecossistema Microsoft',
      stack: 'Graph API, Entra ID, Intune, Freshworks',
      features: [
        'Microsoft Graph API para Teams e Office 365',
        'Entra ID (Azure AD) para autenticação e usuários',
        'Intune para validação de dispositivos',
        'Freshworks para ticketing e knowledge base',
        'Sincronização automática de dados de usuários',
      ],
    },
    {
      id: 'infrastructure-security',
      title: 'Infraestrutura e Segurança',
      description: 'Hospedagem, API Gateway, Secrets e IAM',
      stack: 'Azure Functions, App Service, Secret Manager, RBAC OAuth2/JWT',
      features: [
        'Azure Functions para execução serverless',
        'Azure App Service para hospedagem',
        'Secret Manager para credenciais seguras',
        'RBAC com OAuth2/JWT para controle de acesso',
        'API Gateway para roteamento e throttling',
        'Conformidade LGPD e segurança healthcare',
      ],
    },
    {
      id: 'observability-metrics',
      title: 'Observabilidade e Métricas',
      description: 'Logs, auditoria e KPIs de performance',
      stack: 'Freshworks, Power BI, Azure Monitor',
      features: [
        'Freshworks para rastreamento de tickets',
        'Power BI para dashboards executivos',
        'Azure Monitor para logs e alertas',
        'Auditoria completa de ações e mudanças',
        'KPIs em tempo real: automação, lead time, custo',
        'Alertas proativos de degradação de performance',
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Escopo Técnico e Funcional</h2>
          <p className="text-xl text-slate-400">Funcionalidades detalhadas da solução</p>
        </div>

        <div className="space-y-6">
          {scopes.map((scope) => (
            <div key={scope.id} className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors">
              <button
                onClick={() => setExpandedSection(expandedSection === scope.id ? null : scope.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-slate-800/60 transition-colors"
              >
                <div className="text-left flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{scope.title}</h3>
                  <p className="text-slate-400 mb-3">{scope.description}</p>
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-3 py-1.5">
                    <span className="text-xs font-mono text-blue-300">Stack:</span>
                    <span className="text-xs font-semibold text-blue-200">{scope.stack}</span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 flex-shrink-0 ml-4 transition-transform ${
                    expandedSection === scope.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSection === scope.id && (
                <div className="px-6 pb-6 pt-4 border-t border-slate-700">
                  <ul className="space-y-3">
                    {scope.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-900/20 border border-green-700 rounded-xl p-6 flex items-start gap-4">
          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-green-300 mb-2">Governança e Aprovação DASA</h4>
            <p className="text-green-200 text-sm mb-3">
              Todas as tecnologias listadas estão <strong>alinhadas à governança DASA</strong> e já foram aprovadas ou estão em uso:
            </p>
            <ul className="text-green-200 text-sm space-y-1.5">
              <li>• Twilio + Microsoft Teams (já utilizados)</li>
              <li>• Azure Logic Apps (aprovado como substituto do n8n)</li>
              <li>• Vertex AI + OpenAI GPT-4 (aprovado com reserva B)</li>
              <li>• Azure Functions + Secret Manager + RBAC OAuth2/JWT</li>
              <li>• Freshworks, Power BI, Azure Monitor (já utilizados)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
