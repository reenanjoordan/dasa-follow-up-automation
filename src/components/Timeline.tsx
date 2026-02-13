import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Users } from 'lucide-react';

export default function Timeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const phases = [
    {
      id: 1,
      title: 'Descoberta e Design',
      duration: '2 semanas',
      startDate: 'Semana 1-2',
      status: 'Planejado',
      color: 'from-blue-600 to-blue-400',
      activities: [
        'Análise de requisitos detalhada',
        'Design da arquitetura Azure-DASA completa',
        'Prototipagem de funcionalidades',
        'Alinhamento com stakeholders',
        'Planejamento de infraestrutura e segurança',
      ],
      deliverables: [
        'Especificação técnica completa',
        'Diagramas de arquitetura Azure-DASA',
        'Plano de testes',
        'Matriz de integrações',
      ],
      team: 'Renan, Jhonathan, Flamarion',
      effort: '180 horas',
    },
    {
      id: 2,
      title: 'Desenvolvimento Core',
      duration: '5 semanas',
      startDate: 'Semana 3-7',
      status: 'Planejado',
      color: 'from-cyan-600 to-cyan-400',
      activities: [
        'Desenvolvimento do engine de IA (Vertex AI + GPT-4)',
        'Configuração Azure Logic Apps (workflows visuais)',
        'Desenvolvimento Azure Functions (serverless)',
        'Módulos 1-6: monitoramento, IA, Teams, escalação, contatos',
        'Dashboard centralizado e visualizações em React',
        'Infraestrutura Azure SQL Database + Secret Manager',
      ],
      deliverables: [
        'Azure Logic Apps workflows configurados',
        'Azure Functions completas',
        'Azure SQL Database schemas criados',
        'Dashboard operacional completo',
      ],
      team: 'Renan, Jhonathan, Flamarion',
      effort: '620 horas',
    },
    {
      id: 3,
      title: 'Integração e Testes',
      duration: '2 semanas',
      startDate: 'Semana 8-9',
      status: 'Planejado',
      color: 'from-green-600 to-green-400',
      activities: [
        'Testes de integração E2E completos',
        'Testes de carga e performance',
        'Testes de segurança (LGPD/RBAC)',
        'Testes de usabilidade',
        'Bug fixes e otimizações',
      ],
      deliverables: [
        'Relatório de testes',
        'Evidências de segurança',
        'Plano de produção',
        'Documentação técnica completa',
      ],
      team: 'Renan, Jhonathan, Flamarion',
      effort: '220 horas',
    },
    {
      id: 4,
      title: 'Piloto com Grupo Select',
      duration: '2 semanas',
      startDate: 'Semana 10-11',
      status: 'Planejado',
      color: 'from-purple-600 to-purple-400',
      activities: [
        'Deploy em ambiente de homologação',
        'Treinamento do grupo Follow-Up',
        'Coleta de feedback em ambiente real',
        'Ajustes baseado em feedback',
        'Validação de métricas e KPIs',
      ],
      deliverables: [
        'Relatório de piloto com métricas',
        'Métricas de sucesso validadas',
        'Feedback coletado e analisado',
        'Go/No-Go para produção',
      ],
      team: 'Renan, Jhonathan, Flamarion + Follow-Up',
      effort: '160 horas',
    },
    {
      id: 5,
      title: 'Deploy e Go-Live',
      duration: '1 semana',
      startDate: 'Semana 12',
      status: 'Planejado',
      color: 'from-orange-600 to-orange-400',
      activities: [
        'Deploy em produção',
        'Monitoramento intensivo 24/7',
        'Ajustes em tempo real',
        'Suporte intensivo ao time Follow-Up',
        'Treinamento equipe de sustentação',
      ],
      deliverables: [
        'Sistema em produção',
        'Documentação de runbooks',
        'Plano de suporte e sustentação',
        'Relatório final de entrega',
      ],
      team: 'Renan, Jhonathan, Flamarion',
      effort: '103 horas',
    },
  ];

  return (
    <div id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Timeline do Projeto</h2>
          <p className="text-xl text-slate-400">Cronograma de implementação de 12 semanas</p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((phase, idx) => (
              <div key={phase.id} className="relative">
                <button
                  onClick={() => setExpandedPhase(expandedPhase === idx ? null : idx)}
                  className="w-full h-full"
                >
                  <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 hover:border-cyan-500 transition-all h-full">
                    <div className={`w-10 h-10 bg-gradient-to-br ${phase.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                      <span className="font-bold text-white text-lg">{phase.id}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 text-center">{phase.title}</h3>
                    <p className="text-xs text-slate-400 mb-2 text-center">{phase.startDate}</p>
                    <p className="text-xs font-semibold text-cyan-400 text-center">{phase.duration}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {expandedPhase !== null && (
            <div className="mt-6 bg-slate-800/40 border border-slate-700 rounded-xl p-6">
              <div className="border-b border-slate-700 pb-4 mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{phases[expandedPhase].title}</h3>
                <p className="text-sm text-slate-400">{phases[expandedPhase].startDate}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    Atividades
                  </h4>
                  <ul className="space-y-2">
                    {phases[expandedPhase].activities.map((activity, actIdx) => (
                      <li key={actIdx} className="text-sm text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="font-semibold text-slate-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Entregáveis
                    </h4>
                    <ul className="space-y-1">
                      {phases[expandedPhase].deliverables.map((del, delIdx) => (
                        <li key={delIdx} className="text-sm text-slate-400">• {del}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-400 mb-1 flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        Time
                      </p>
                      <p className="text-slate-300">{phases[expandedPhase].team}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-400" />
                        Esforço
                      </p>
                      <p className="text-slate-300">{phases[expandedPhase].effort}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 border border-cyan-700/50 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Estimativa de Esforço Total</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Fase 1: Descoberta</span>
                <span className="font-bold text-cyan-400">180h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Fase 2: Desenvolvimento</span>
                <span className="font-bold text-cyan-400">620h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Fase 3: Testes</span>
                <span className="font-bold text-cyan-400">220h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Fase 4: Piloto</span>
                <span className="font-bold text-cyan-400">160h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Fase 5: Deploy</span>
                <span className="font-bold text-cyan-400">103h</span>
              </div>
              <div className="border-t border-cyan-700 pt-3 mt-3 flex justify-between items-center">
                <span className="text-slate-300 font-semibold">Total (pessoa-hora)</span>
                <span className="font-bold text-cyan-300 text-xl">1,283h</span>
              </div>
              <p className="text-xs text-cyan-200 mt-4">Renan Jordão, Jhonathan Ducatti (Devs) + Flamarion Fogaça (PM/Tech Lead)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-700/50 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-green-300 mb-4">Dependências e Risco</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-300 mb-2 font-medium">Críticas:</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>✓ Aprovação API ServiceNow TSM</li>
                  <li>✓ Acesso Teams API via Graph API</li>
                  <li>✓ Azure AD / Entra ID configurado</li>
                  <li>✓ Azure SQL Database provisionado</li>
                </ul>
              </div>
              <div className="border-t border-green-700 pt-3">
                <p className="text-sm text-slate-300 mb-2 font-medium">Mitigações:</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Piloto com grupo pequeno</li>
                  <li>• Rollback plan definido</li>
                  <li>• Suporte 24/7 primeira semana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-800/40 border border-slate-700 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Marcos Principais (Go/No-Go)</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-300 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-slate-300">Sem 2</p>
              <p className="text-xs text-slate-500">Design Aprovado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-cyan-300 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-slate-300">Sem 7</p>
              <p className="text-xs text-slate-500">Dev Completo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-300 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-slate-300">Sem 9</p>
              <p className="text-xs text-slate-500">Testes OK</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-300 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-slate-300">Sem 11</p>
              <p className="text-xs text-slate-500">Piloto OK</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-300 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-slate-300">Sem 12</p>
              <p className="text-xs text-slate-500">Go Live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
