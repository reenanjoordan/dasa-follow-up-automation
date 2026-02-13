import { Clock, Users, Target, Layers, Zap, Shield, TrendingUp, Maximize2 } from 'lucide-react';

export default function EffortEstimateAzure() {
  const metrics = [
    {
      icon: Clock,
      label: 'Duração Total',
      value: '16 semanas',
      subtitle: '~4 meses de desenvolvimento',
      color: 'blue'
    },
    {
      icon: Users,
      label: 'Equipe',
      value: '3 devs',
      subtitle: '1.920h totais',
      color: 'cyan'
    },
    {
      icon: Target,
      label: 'Meta PoC',
      value: '52%',
      subtitle: 'Automação resolutiva',
      color: 'green'
    }
  ];

  const principles = [
    {
      icon: Layers,
      title: '100% Azure/DASA',
      description: 'Zero custo de novas licenças — aproveitamento total da infraestrutura existente',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Event-Driven Architecture',
      description: 'Azure Logic Apps + Azure Functions — workflows visuais e serverless',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'API-First + Governança',
      description: 'Segurança corporativa (Azure AD, RBAC, Key Vault, auditoria LGPD)',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Foco em ROI',
      description: 'Payback 6-8 semanas, dashboards Power BI demonstrando economia de FTE e tempo',
      color: 'amber'
    },
    {
      icon: Maximize2,
      title: 'Escalabilidade',
      description: 'De PoC (7.8k tickets/mês) para produção (20k+ tickets/mês) sem refatoração',
      color: 'red'
    }
  ];

  const team = [
    {
      name: 'Desenvolvedor Full-Stack Sênior 1',
      role: 'Azure Architecture + Backend',
      hours: '640h totais',
      color: 'blue'
    },
    {
      name: 'Desenvolvedor Full-Stack Sênior 2',
      role: 'Azure Functions + Integrations',
      hours: '640h totais',
      color: 'cyan'
    },
    {
      name: 'Desenvolvedor Full-Stack Sênior 3',
      role: 'Frontend React + Power BI',
      hours: '640h totais',
      color: 'purple'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-400', border: 'border-cyan-500' },
    green: { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-400', border: 'border-purple-500' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500' },
    red: { bg: 'bg-rose-600', text: 'text-rose-400', border: 'border-rose-500' }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Estimativa de Esforço</h2>
          <p className="text-xl text-slate-300">
            Stack 100% Azure/DASA com equipe dedicada e princípios enterprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const colors = colorMap[metric.color as keyof typeof colorMap];

            return (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 border ${colors.border} border-opacity-30`}>
                <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-slate-400 text-sm font-medium mb-2">{metric.label}</div>
                <div className={`text-4xl font-bold ${colors.text} mb-2`}>{metric.value}</div>
                <div className="text-slate-300 text-sm">{metric.subtitle}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Princípios do Projeto</h3>
            </div>
            <div className="space-y-4">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                const colors = colorMap[principle.color as keyof typeof colorMap];

                return (
                  <div key={index} className={`bg-slate-800/50 rounded-lg p-6 border ${colors.border} border-opacity-20 hover:border-opacity-50 transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className={`${colors.bg} p-2 rounded-lg flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{principle.title}</h4>
                        <p className="text-slate-400 text-sm">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Equipe e Alocação</h3>
            </div>
            <div className="space-y-4">
              {team.map((member, index) => {
                const colors = colorMap[member.color as keyof typeof colorMap];

                return (
                  <div key={index} className={`bg-slate-800/50 rounded-lg p-6 border ${colors.border} border-opacity-30`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{member.name}</h4>
                        <p className="text-slate-400 text-sm">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className={`w-4 h-4 ${colors.text}`} />
                      <span className={`text-sm font-semibold ${colors.text}`}>{member.hours}</span>
                    </div>
                  </div>
                );
              })}

              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-6 border border-blue-500/30">
                <div className="text-white font-bold text-lg mb-2">Total da Equipe</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1.920 horas</div>
                <div className="text-slate-300 text-sm">
                  3 profissionais seniores em tempo integral durante 16 semanas (4 meses)
                </div>
                <div className="mt-4 pt-4 border-t border-blue-500/30">
                  <div className="text-slate-400 text-sm mb-2">Dedicação 100% ao projeto DASA</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-full w-full"></div>
                    </div>
                    <span className="text-cyan-400 font-semibold text-sm">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
          <h3 className="text-2xl font-bold text-white mb-6">Stack Tecnológico Azure/DASA</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Orchestration', value: 'Azure Logic Apps', icon: '🔄' },
              { label: 'Serverless', value: 'Azure Functions (5)', icon: '⚡' },
              { label: 'Database', value: 'Azure SQL Database', icon: '🗄️' },
              { label: 'IA', value: 'Vertex AI + GPT-4', icon: '🤖' },
              { label: 'Frontend', value: 'React + TypeScript', icon: '⚛️' },
              { label: 'Integration', value: 'ServiceNow + Teams', icon: '🔗' },
              { label: 'Security', value: 'Azure AD + Key Vault', icon: '🔐' },
              { label: 'Analytics', value: 'Power BI + Monitor', icon: '📊' }
            ].map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-600 hover:border-blue-500/50 transition-all">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-slate-400 text-xs font-medium mb-1">{tech.label}</div>
                <div className="text-white font-semibold text-sm">{tech.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
