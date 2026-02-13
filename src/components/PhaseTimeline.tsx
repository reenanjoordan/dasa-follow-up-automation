import { Calendar, Clock, CheckCircle2, FileText } from 'lucide-react';

export default function PhaseTimeline() {
  const phases = [
    {
      id: 1,
      name: 'Fase 1: Descoberta e Design',
      duration: '2 semanas',
      hours: '104h',
      color: 'blue',
      activities: [
        'Levantamento e análise de requisitos',
        'Definição da arquitetura técnica Azure-DASA',
        'Prototipação de interfaces (UI/UX)',
        'Planejamento de sprints e backlog',
        'Planejamento de infraestrutura e segurança',
        'Reuniões e alinhamentos'
      ],
      deliverables: [
        'Documento de arquitetura Azure-DASA',
        'Protótipos UI/UX',
        'Backlog priorizado'
      ]
    },
    {
      id: 2,
      name: 'Fase 2: Desenvolvimento Core',
      duration: '5 semanas',
      hours: '416h',
      color: 'purple',
      activities: [
        'Azure Functions e integrações (ServiceNow, Teams, AD, OpenAI)',
        'Azure Logic Apps workflows visuais',
        'Dashboard operacional centralizado e telas de gestão',
        'Módulos 1-6: monitoramento, categorização IA, Teams, escalação, contatos, qualidade',
        'Infraestrutura Azure SQL Database + Secret Manager',
        'Autenticação OAuth2 e RBAC com Azure AD',
        'Testes unitários (cobertura >80%)'
      ],
      deliverables: [
        'Azure Functions funcionais',
        'Dashboard operacional completo',
        'Integração ServiceNow/Teams/Twilio',
        'Infraestrutura Azure provisionada'
      ]
    },
    {
      id: 3,
      name: 'Fase 3: Integração e Testes',
      duration: '2 semanas',
      hours: '156h',
      color: 'cyan',
      activities: [
        'Testes de integração E2E',
        'Testes de carga e performance',
        'Testes de segurança (LGPD/RBAC)',
        'Bug fixes e otimizações',
        'Documentação técnica completa',
        'Validação de todos os módulos'
      ],
      deliverables: [
        'Sistema integrado e validado',
        'Relatórios de testes',
        'Documentação técnica completa'
      ]
    },
    {
      id: 4,
      name: 'Fase 4: Piloto com Grupo Select',
      duration: '2 semanas',
      hours: '78h',
      color: 'green',
      activities: [
        'Deploy em ambiente de homologação',
        'Treinamento do grupo piloto',
        'Monitoramento intensivo e coleta de feedback',
        'Ajustes baseados em feedback real',
        'Validação de métricas e KPIs'
      ],
      deliverables: [
        'Sistema validado em homologação',
        'Relatório de piloto com métricas',
        'Plano de rollout detalhado'
      ]
    },
    {
      id: 5,
      name: 'Fase 5: Deploy e Go-Live',
      duration: '1 semana',
      hours: '52h',
      color: 'amber',
      activities: [
        'Deploy em produção',
        'Monitoramento intensivo 24/7',
        'Ajustes em tempo real',
        'Documentação final e handover',
        'Treinamento equipe de sustentação'
      ],
      deliverables: [
        'Sistema em produção',
        'Documentação completa',
        'Plano de suporte e sustentação'
      ]
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500', light: 'bg-blue-600/10' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-400', border: 'border-purple-500', light: 'bg-purple-600/10' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-400', border: 'border-cyan-500', light: 'bg-cyan-600/10' },
    green: { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500', light: 'bg-emerald-600/10' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500', light: 'bg-amber-600/10' }
  };

  return (
    <section id="cronograma" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Cronograma de Fases</h2>
          </div>
          <p className="text-xl text-slate-300">
            5 fases estruturadas para entrega completa em 12 semanas (~3 meses)
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/30">
          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase, index) => {
              const colors = colorMap[phase.color as keyof typeof colorMap];
              return (
                <div key={phase.id} className="text-center">
                  <div className={`${colors.bg} text-white px-3 py-2 rounded-lg font-bold text-sm mb-2`}>
                    Fase {phase.id}
                  </div>
                  <div className={`text-2xl font-bold ${colors.text} mb-1`}>{phase.duration}</div>
                  <div className="text-slate-400 text-xs">{phase.hours}</div>
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 text-slate-600 text-xl">→</div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="flex items-center justify-between">
              <div className="text-slate-400 text-sm">Total do Projeto</div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-slate-400 text-xs">Duração</div>
                  <div className="text-white text-xl font-bold">12 semanas</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-xs">Esforço Total</div>
                  <div className="text-white text-xl font-bold">806h</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-xs">Equipe</div>
                  <div className="text-white text-xl font-bold">2 devs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => {
            const colors = colorMap[phase.color as keyof typeof colorMap];

            return (
              <div key={phase.id} className={`bg-slate-800/50 rounded-xl border ${colors.border} border-opacity-30 overflow-hidden hover:border-opacity-60 transition-all`}>
                <div className={`${colors.light} p-6 border-b ${colors.border} border-opacity-20`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`${colors.bg} text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl`}>
                        {phase.id}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{phase.name}</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className={`w-4 h-4 ${colors.text}`} />
                            <span className={colors.text}>{phase.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className={`w-4 h-4 ${colors.text}`} />
                            <span className={colors.text}>{phase.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${colors.text}`} />
                        Atividades Principais
                      </h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <FileText className={`w-5 h-5 ${colors.text}`} />
                        Entregáveis
                      </h4>
                      <div className="space-y-3">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className={`${colors.light} rounded-lg p-3 border ${colors.border} border-opacity-20`}>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                              <span className="text-white text-sm">{deliverable}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
            <h3 className="text-xl font-bold text-white mb-6">Metodologia Ágil (Scrum)</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Sprints', value: '2 semanas', icon: '🔄' },
                { label: 'Daily Standups', value: '15 min/dia', icon: '☀️' },
                { label: 'Reviews', value: 'Fim de sprint', icon: '🎯' },
                { label: 'Retrospectivas', value: 'Melhoria contínua', icon: '💡' }
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-slate-400 text-sm font-medium mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-8 border border-cyan-700/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Equipe e Alocação
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Flamarion Fogaça</div>
                    <div className="text-cyan-400 text-sm">Desenvolvedor Full-Stack Sênior</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-cyan-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  403h totais
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Renan Jordão</div>
                    <div className="text-cyan-400 text-sm">Desenvolvedor Full-Stack Sênior</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-cyan-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  403h totais
                </div>
              </div>
            </div>

            <div className="mt-6 bg-slate-900/50 rounded-lg p-5 border border-slate-700">
              <div className="text-slate-400 text-sm font-medium mb-2">Total da Equipe</div>
              <div className="text-3xl font-bold text-white mb-2">806 horas</div>
              <div className="text-slate-400 text-sm mb-4">2 profissionais seniores em tempo integral durante 12 semanas (~3 meses)</div>
              <div className="flex items-center gap-3">
                <div className="text-slate-400 text-sm">Dedicação 100% ao projeto DASA</div>
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>
                <div className="text-cyan-400 text-sm font-semibold">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
