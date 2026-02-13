import { Clock, Zap, Users, MessageSquare, AlertTriangle, RefreshCw, Database } from 'lucide-react';

export default function WorkflowDiagram() {
  const workflows = [
    {
      id: 1,
      name: 'Monitoramento de Tickets Antigos',
      icon: Clock,
      type: 'Azure Logic Apps',
      typeLabel: 'Agendado (Scheduled)',
      frequency: 'A cada 1h (horário comercial)',
      module: 'Módulo 1',
      color: 'blue',
      description: 'Identifica tickets com 7+ dias sem atualização'
    },
    {
      id: 2,
      name: 'Categorização Inteligente com IA',
      icon: Zap,
      type: 'Azure Function',
      typeLabel: 'Sob demanda (Instant)',
      frequency: 'Sob demanda (child flow)',
      module: 'Módulo 2',
      color: 'green',
      description: 'Vertex AI + Azure OpenAI GPT-4 (92% acurácia)'
    },
    {
      id: 3,
      name: 'Gerenciamento de Tentativas de Contato',
      icon: Users,
      type: 'Azure Logic Apps',
      typeLabel: 'Agendado (Scheduled)',
      frequency: '2x ao dia (09h e 15h)',
      module: 'Módulo 5',
      color: 'blue',
      description: '3 tentativas progressivas (Teams, Email, SMS)'
    },
    {
      id: 4,
      name: 'Envio de Notificação via Teams',
      icon: MessageSquare,
      type: 'Azure Function',
      typeLabel: 'Sob demanda (Instant)',
      frequency: 'Sob demanda (child flow)',
      module: 'Módulo 3',
      color: 'green',
      description: 'Microsoft Graph API para envio de mensagens'
    },
    {
      id: 5,
      name: 'Escalação Automática',
      icon: AlertTriangle,
      type: 'Azure Function',
      typeLabel: 'Sob demanda (Instant)',
      frequency: 'Sob demanda (child flow)',
      module: 'Módulo 4',
      color: 'yellow',
      description: 'Busca gestor no Azure AD e escala automaticamente'
    },
    {
      id: 6,
      name: 'Sincronização com Azure AD',
      icon: RefreshCw,
      type: 'Azure Logic Apps',
      typeLabel: 'Agendado (Scheduled)',
      frequency: '1x ao dia (madrugada)',
      module: 'Módulo 6',
      color: 'cyan',
      description: 'Sincroniza usuários e detecta inativos'
    },
    {
      id: 7,
      name: 'Limpeza e Qualidade de Dados',
      icon: Database,
      type: 'Azure Logic Apps',
      typeLabel: 'Agendado (Scheduled)',
      frequency: '1x por semana (sábado)',
      module: 'Módulo 6',
      color: 'gray',
      description: 'Validação de categorias e limpeza de limbo'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500' },
    green: { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500' },
    yellow: { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-400', border: 'border-cyan-500' },
    gray: { bg: 'bg-slate-600', text: 'text-slate-400', border: 'border-slate-500' }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Fluxos de Trabalho</h2>
          <p className="text-xl text-slate-300">
            7 workflows orquestrados no Azure Logic Apps e Azure Functions para automação completa do follow-up inteligente
          </p>
        </div>

        <div className="mb-12 bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-6">CADEIA DE EXECUÇÃO DOS FLUXOS</h3>
          <div className="flex items-center justify-between flex-wrap gap-4">
            {['ServiceNow', 'Monitoramento', 'IA (Vertex+GPT-4)', 'Teams', 'Escalação', 'ServiceNow'].map((step, idx, arr) => (
              <div key={idx} className="flex items-center">
                <div className={`px-6 py-3 rounded-lg font-medium ${
                  step === 'ServiceNow' ? 'bg-blue-600 text-white' :
                  step === 'Monitoramento' ? 'bg-blue-600 text-white' :
                  step === 'IA (Vertex+GPT-4)' ? 'bg-emerald-600 text-white' :
                  step === 'Teams' ? 'bg-cyan-600 text-white' :
                  step === 'Escalação' ? 'bg-amber-600 text-white' :
                  'bg-blue-600 text-white'
                }`}>
                  {step}
                  {step === 'Monitoramento' && <span className="block text-xs mt-1">Fluxo 1</span>}
                  {step === 'IA (Vertex+GPT-4)' && <span className="block text-xs mt-1">Fluxo 2</span>}
                  {step === 'Teams' && <span className="block text-xs mt-1">Fluxos 3-4</span>}
                  {step === 'Escalação' && <span className="block text-xs mt-1">Fluxo 5</span>}
                </div>
                {idx < arr.length - 1 && (
                  <div className="mx-2 text-slate-400 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-slate-300">Agendado (Scheduled)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
              <span className="text-slate-300">Instantâneo (On-demand)</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => {
            const Icon = workflow.icon;
            const colors = colorMap[workflow.color as keyof typeof colorMap];

            return (
              <div key={workflow.id} className={`bg-slate-800/50 rounded-xl p-6 border ${colors.border} hover:border-opacity-100 border-opacity-30 transition-all hover:scale-105 cursor-pointer`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${colors.bg} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-slate-400">FLUXO {workflow.id}</span>
                      <span className={`text-xs px-2 py-1 rounded ${colors.bg} bg-opacity-20 ${colors.text}`}>
                        {workflow.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{workflow.name}</h3>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{workflow.frequency}</span>
                  </div>
                  <div className="text-sm text-slate-400">{workflow.typeLabel}</div>
                </div>

                <p className="text-sm text-slate-400 mb-4">{workflow.description}</p>

                <div className={`text-xs font-semibold ${colors.text}`}>
                  {workflow.module}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">RESUMO DOS FLUXOS</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">FLUXO</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">TIPO</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">FREQUÊNCIA</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">MÓDULO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">Monitoramento de Tickets</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded text-xs bg-blue-600/20 text-blue-400">Agendado</span></td>
                  <td className="py-3 px-4 text-slate-300">A cada 1h</td>
                  <td className="py-3 px-4 text-slate-300">Módulo 1</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">Categorização com IA</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded text-xs bg-emerald-600/20 text-emerald-400">Instantâneo</span></td>
                  <td className="py-3 px-4 text-slate-300">Sob demanda</td>
                  <td className="py-3 px-4 text-slate-300">Módulo 2</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">Tentativas de Contato</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded text-xs bg-blue-600/20 text-blue-400">Agendado</span></td>
                  <td className="py-3 px-4 text-slate-300">2x/dia</td>
                  <td className="py-3 px-4 text-slate-300">Módulo 5</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">Notificação Teams</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded text-xs bg-emerald-600/20 text-emerald-400">Instantâneo</span></td>
                  <td className="py-3 px-4 text-slate-300">Sob demanda</td>
                  <td className="py-3 px-4 text-slate-300">Módulo 3</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">Escalação Automática</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded text-xs bg-emerald-600/20 text-emerald-400">Instantâneo</span></td>
                  <td className="py-3 px-4 text-slate-300">Sob demanda</td>
                  <td className="py-3 px-4 text-slate-300">Módulo 4</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">Sync Azure AD</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded text-xs bg-blue-600/20 text-blue-400">Agendado</span></td>
                  <td className="py-3 px-4 text-slate-300">1x/dia</td>
                  <td className="py-3 px-4 text-slate-300">Módulo 6</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white">Limpeza de Dados</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 rounded text-xs bg-blue-600/20 text-blue-400">Agendado</span></td>
                  <td className="py-3 px-4 text-slate-300">1x/semana</td>
                  <td className="py-3 px-4 text-slate-300">Módulo 6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-amber-600/10 border border-amber-600/30 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-amber-400 font-semibold mb-1">Requisito de Stack</h4>
              <p className="text-slate-300 text-sm">
                Os conectores Azure Logic Apps, ServiceNow nativo e Microsoft Graph API estão inclusos na subscription Azure DASA.
                Azure Functions requer tier Premium para produção. Verificar capacidade antes da implementação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
