import { Calendar, CheckCircle2, Circle, Clock } from 'lucide-react';

export default function ProjectTimeline() {
  const timeline = [
    {
      week: 'Semana 1',
      dates: '17/02 - 23/02',
      phase: 'Aprovação',
      status: 'pending',
      activities: [
        { owner: 'DASA', task: 'Análise e aprovação da proposta com stakeholders' },
        { owner: 'DASA', task: 'Validação de orçamento (R$ 385.000)' },
        { owner: 'DASA', task: 'Definição de modelo de pagamento' }
      ]
    },
    {
      week: 'Semana 2',
      dates: '24/02 - 01/03',
      phase: 'Contratação',
      status: 'pending',
      activities: [
        { owner: 'Leega', task: 'Preparação de minuta de contrato' },
        { owner: 'DASA + Leega', task: 'Negociação de termos e assinatura' },
        { owner: 'DASA', task: 'Pagamento Parcela 1 (conforme modelo)' },
        { owner: 'DASA', task: 'Provisionamento de acessos inicial' }
      ]
    },
    {
      week: 'Semana 3',
      dates: '02/03 - 08/03',
      phase: 'Kick-off e Fase 1',
      status: 'pending',
      activities: [
        { owner: 'DASA + Leega', task: 'Kick-off Meeting (apresentação de equipes)' },
        { owner: 'Leega', task: 'Início Fase 1: Descoberta e Design' },
        { owner: 'DASA', task: 'Entrega de documentação detalhada' },
        { owner: 'DASA', task: 'Provisão de acessos: ServiceNow, Teams, Azure AD' }
      ]
    },
    {
      week: 'Semanas 4-5',
      dates: '09/03 - 22/03',
      phase: 'Fase 1 Conclusão',
      status: 'pending',
      activities: [
        { owner: 'Leega', task: 'Análise detalhada de requisitos' },
        { owner: 'Leega', task: 'Design da arquitetura Azure completa' },
        { owner: 'Leega', task: 'Prototipagem de interfaces e workflows' },
        { owner: 'Leega', task: 'Entregável: Documento arquitetura + Protótipos' },
        { owner: 'DASA', task: 'Milestone: Go/No-Go Fase 1' }
      ]
    },
    {
      week: 'Semanas 6-11',
      dates: '23/03 - 03/05',
      phase: 'Fase 2: Desenvolvimento',
      status: 'pending',
      activities: [
        { owner: 'Leega', task: 'Desenvolvimento engine IA (Vertex AI + GPT-4)' },
        { owner: 'Leega', task: 'Configuração Azure Logic Apps (workflows)' },
        { owner: 'Leega', task: 'Desenvolvimento Azure Functions (5 funções)' },
        { owner: 'Leega', task: 'Integração ServiceNow + Teams + Twilio' },
        { owner: 'Leega', task: 'Dashboard React + Power BI' },
        { owner: 'DASA', task: 'Milestone: Go/No-Go Fase 2' }
      ]
    },
    {
      week: 'Semanas 12-15',
      dates: '04/05 - 31/05',
      phase: 'Fase 3: Integração e Testes',
      status: 'pending',
      activities: [
        { owner: 'Leega', task: 'Testes de integração completos' },
        { owner: 'Leega', task: 'Testes de carga e performance' },
        { owner: 'Leega', task: 'Testes de segurança (LGPD)' },
        { owner: 'Leega', task: 'Bug fixes e otimizações' },
        { owner: 'DASA', task: 'Milestone: Go/No-Go Fase 3' }
      ]
    },
    {
      week: 'Semanas 16-17',
      dates: '01/06 - 14/06',
      phase: 'Fase 4: Piloto',
      status: 'pending',
      activities: [
        { owner: 'Leega', task: 'Deploy em ambiente de homologação' },
        { owner: 'Leega', task: 'Treinamento do grupo Follow-Up' },
        { owner: 'DASA', task: 'Testes com usuários reais' },
        { owner: 'DASA + Leega', task: 'Coleta de feedback e ajustes' },
        { owner: 'DASA', task: 'Milestone: Go/No-Go Produção' }
      ]
    },
    {
      week: 'Semanas 18-19',
      dates: '15/06 - 28/06',
      phase: 'Fase 5: Deploy Produção',
      status: 'pending',
      activities: [
        { owner: 'Leega', task: 'Deploy em ambiente de produção Azure' },
        { owner: 'Leega', task: 'Monitoramento 24/7 (Azure Monitor)' },
        { owner: 'Leega', task: 'Ajustes em tempo real' },
        { owner: 'Leega', task: 'Suporte intensivo ao time DASA' }
      ]
    },
    {
      week: 'Semana 20',
      dates: '29/06 - 05/07',
      phase: 'Go-Live',
      status: 'pending',
      activities: [
        { owner: 'DASA + Leega', task: 'Go-Live oficial ✨' },
        { owner: 'Leega', task: 'Transferência de conhecimento completa' },
        { owner: 'Leega', task: 'Início do período de garantia (60 dias)' },
        { owner: 'DASA', task: 'Pagamento Parcela final' }
      ]
    }
  ];

  const ownerColors = {
    'DASA': { bg: 'bg-blue-600', text: 'text-blue-400' },
    'Leega': { bg: 'bg-purple-600', text: 'text-purple-400' },
    'DASA + Leega': { bg: 'bg-cyan-600', text: 'text-cyan-400' }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Timeline do Projeto</h2>
          </div>
          <p className="text-xl text-slate-300 mb-6">
            20 semanas detalhadas do kick-off ao go-live (17/02 - 05/07/2026)
          </p>

          <div className="inline-flex items-center gap-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-sm text-slate-300">DASA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-600"></div>
              <span className="text-sm text-slate-300">Leega</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-600"></div>
              <span className="text-sm text-slate-300">Colaborativo</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-600"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-4 top-6 w-8 h-8 bg-slate-900 rounded-full border-4 border-blue-600 flex items-center justify-center">
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Circle className="w-3 h-3 text-blue-400" />
                  )}
                </div>

                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{item.week}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400">
                          {item.phase}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Clock className="w-4 h-4" />
                        {item.dates}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {item.activities.map((activity, actIdx) => {
                      const colors = ownerColors[activity.owner as keyof typeof ownerColors];

                      return (
                        <div key={actIdx} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                          <div className={`${colors.bg} px-2 py-1 rounded text-xs font-semibold text-white flex-shrink-0`}>
                            {activity.owner}
                          </div>
                          <div className="text-slate-300 text-sm">{activity.task}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/30">
            <div className="text-blue-400 font-semibold mb-2">Data de Início</div>
            <div className="text-3xl font-bold text-white mb-1">17/02/2026</div>
            <div className="text-slate-400 text-sm">Kick-off do projeto</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/30">
            <div className="text-purple-400 font-semibold mb-2">Duração Total</div>
            <div className="text-3xl font-bold text-white mb-1">20 semanas</div>
            <div className="text-slate-400 text-sm">5 fases completas</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/10 to-cyan-600/5 rounded-xl p-6 border border-cyan-500/30">
            <div className="text-cyan-400 font-semibold mb-2">Go-Live Previsto</div>
            <div className="text-3xl font-bold text-white mb-1">29/06/2026</div>
            <div className="text-slate-400 text-sm">Produção completa</div>
          </div>
        </div>
      </div>
    </section>
  );
}
