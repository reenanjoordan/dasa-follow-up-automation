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
        'Definição da arquitetura técnica',
        'Prototipação de interfaces (UI/UX)',
        'Planejamento de sprints e backlog',
        'Reuniões e alinhamentos'
      ],
      deliverables: [
        'Documento de arquitetura',
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
        'Edge Functions e integrações (ServiceNow, Teams, AD, OpenAI)',
        'Dashboard operacional e telas de gestão',
        'Prototipação de interfaces (UI/UX)',
        'Autenticação OAuth2 e RBAC',
        'Testes unitários (cobertura >80%)'
      ],
      deliverables: [
        'API funcional',
        'Dashboard operacional',
        'Integração ServiceNow/Teams'
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
        'Testes de carga e segurança (LGPD)',
        'Bug fixes e otimizações',
        'Documentação técnica'
      ],
      deliverables: [
        'Sistema integrado',
        'Relatórios de testes',
        'Documentação técnica'
      ]
    },
    {
      id: 4,
      name: 'Fase 4: Piloto com Grupo Select',
      duration: '2 semanas',
      hours: '78h',
      color: 'green',
      activities: [
        'Deploy em homologação',
        'Treinamento do grupo piloto',
        'Monitoramento e coleta de feedback',
        'Ajustes baseados em feedback'
      ],
      deliverables: [
        'Sistema validado',
        'Relatório de piloto',
        'Plano de rollout'
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
        'Monitoramento intensivo',
        'Ajustes em tempo real',
        'Documentação final e handover'
      ],
      deliverables: [
        'Sistema em produção',
        'Documentação completa',
        'Plano de suporte'
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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
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

        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
          <h3 className="text-xl font-bold text-white mb-6">Metodologia Ágil (Scrum)</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Sprints', value: '2 semanas', icon: '🔄' },
              { label: 'Daily Standups', value: '15 min/dia', icon: '☀️' },
              { label: 'Reviews', value: 'Fim de sprint', icon: '🎯' },
              { label: 'Retrospectivas', value: 'Melhoria contínua', icon: '💡' }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-slate-400 text-sm font-medium mb-1">{item.label}</div>
                <div className="text-white font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
