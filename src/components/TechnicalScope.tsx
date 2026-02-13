import React, { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

export default function TechnicalScope() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const scopes = [
    {
      id: 'automated-monitoring',
      title: 'Monitoramento Automático de Tickets',
      description: 'Sistema que identifica e monitora tickets antigos',
      stack: 'Supabase Edge Functions + Freshworks API',
      features: [
        'Identificação de tickets com 7+ dias sem atualização',
        'Análise de usuários inativos via Entra ID (Azure AD)',
        'Trigger de escalação baseado em regras de negócio',
        'Dashboard em tempo real com visibilidade de backlog',
        'Integração com Freshworks para gestão de tickets',
      ],
    },
    {
      id: 'smart-categorization',
      title: 'Categorização Inteligente com IA',
      description: 'Engine de IA para classificação automática',
      stack: 'Vertex AI Agent Builder + OpenAI GPT-4 (reserva)',
      features: [
        '92% de acurácia em categorização automática',
        'Análise contextual de descrição do ticket',
        'Detecção de categorias ausentes no catálogo',
        'Fila de revisão humana para 8% incertos',
        'Aprendizado contínuo com feedback',
        'Integração via Supabase Edge Functions',
      ],
    },
    {
      id: 'teams-integration',
      title: 'Integração com Microsoft Teams',
      description: 'Comunicação automática e rastreada',
      stack: 'Microsoft Graph API + Entra ID + Supabase',
      features: [
        'Envio automático de mensagens via Microsoft Teams',
        'Mensagens padronizadas e personalizáveis',
        'Rastreamento de evidências de contato',
        'Resposta automática com contexto do ticket',
        'Autenticação via Entra ID (Azure AD)',
        'Orquestração via Supabase Edge Functions',
      ],
    },
    {
      id: 'escalation-routing',
      title: 'Roteamento e Escalação Inteligente',
      description: 'Distribuição automática para grupos responsáveis',
      stack: 'Supabase Edge Functions + Freshworks',
      features: [
        'Roteamento baseado em criticidade do ticket',
        'Escalação automática após 3 tentativas',
        'Notificação do gestor da fila responsável via Teams',
        'Rastreamento de SLA por grupo no Freshworks',
        'Métricas de resposta por técnico',
        'Regras de negócio configuráveis',
      ],
    },
    {
      id: 'contact-attempts',
      title: 'Gerenciamento de Tentativas de Contato',
      description: 'Processo estruturado de 3 tentativas',
      stack: 'Supabase Scheduler + Microsoft Teams',
      features: [
        '1 tentativa por dia útil, durante 3 dias',
        'Horário comercial (08:00-18:00, exceto 12:00-14:00)',
        'Contato via Teams e telefone (Twilio)',
        'Registro de evidências no chamado (Freshworks)',
        'Encerramento automático após 3 tentativas sem retorno',
        'Auditoria completa de todas as tentativas',
      ],
    },
    {
      id: 'data-quality',
      title: 'Qualidade de Dados e Limpeza',
      description: 'Limpeza e validação contínua de dados',
      stack: 'Supabase PostgreSQL + Entra ID',
      features: [
        'Identificação de usuários inativos via Entra ID',
        'Validação de categorias de ticket',
        'Detecção de tickets em "limbo"',
        'Sincronização com Active Directory',
        'Auditoria de mudanças de status',
        'Relatórios de qualidade de dados em Power BI',
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
            <h4 className="font-semibold text-green-300 mb-2">Arquitetura Híbrida: Supabase + Ferramentas DASA</h4>
            <p className="text-green-200 text-sm mb-3">
              Solução que <strong>combina Supabase</strong> (backend eficiente e moderno) com <strong>ferramentas já utilizadas na DASA</strong>, reduzindo custos de sustentação:
            </p>
            <ul className="text-green-200 text-sm space-y-1.5">
              <li>• <strong>Backend:</strong> Supabase (PostgreSQL + Edge Functions + RLS)</li>
              <li>• <strong>IA:</strong> Vertex AI Agent Builder + OpenAI GPT-4 (aprovado)</li>
              <li>• <strong>Comunicação:</strong> Microsoft Teams via Graph API (já utilizado)</li>
              <li>• <strong>Ticketing:</strong> Freshworks (já utilizado)</li>
              <li>• <strong>Identidade:</strong> Entra ID / Azure AD (já utilizado)</li>
              <li>• <strong>Analytics:</strong> Power BI (já utilizado)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
