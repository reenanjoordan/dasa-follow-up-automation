import React from 'react';
import { Rocket, TrendingUp, Users, Zap, Globe, Shield, Target, Sparkles, ArrowRight, DollarSign, Server } from 'lucide-react';

export default function PostPoC() {
  const evolutionPhases = [
    {
      phase: 'Curto Prazo (0-6 meses)',
      icon: Zap,
      color: 'blue',
      items: [
        {
          title: 'Expansão de Categorias',
          description: 'Aumentar cobertura de 10 para 30+ categorias de tickets',
          impact: 'Alta',
        },
        {
          title: 'Otimização de IA',
          description: 'Melhorar acurácia de categorização de 92% para 96%+',
          impact: 'Alta',
        },
        {
          title: 'Integração com WhatsApp',
          description: 'Canal adicional para follow-up além do Teams',
          impact: 'Média',
        },
        {
          title: 'Dashboard Avançado',
          description: 'Métricas em tempo real e analytics preditivos',
          impact: 'Média',
        },
      ],
    },
    {
      phase: 'Médio Prazo (6-12 meses)',
      icon: TrendingUp,
      color: 'cyan',
      items: [
        {
          title: 'Auto-Resolução',
          description: 'IA capaz de resolver tickets simples autonomamente',
          impact: 'Muito Alta',
        },
        {
          title: 'Múltiplas Línguas',
          description: 'Suporte para inglês e espanhol além do português',
          impact: 'Média',
        },
        {
          title: 'Machine Learning Avançado',
          description: 'Predição de problemas antes que tickets sejam abertos',
          impact: 'Alta',
        },
        {
          title: 'Integração com CMDB',
          description: 'Contexto completo de infraestrutura para resolução',
          impact: 'Alta',
        },
      ],
    },
    {
      phase: 'Longo Prazo (12-24 meses)',
      icon: Rocket,
      color: 'green',
      items: [
        {
          title: 'Plataforma Multi-Tenant',
          description: 'Expansão para outras áreas além do Service Desk',
          impact: 'Muito Alta',
        },
        {
          title: 'Automação Cross-Department',
          description: 'Workflows que abrangem múltiplos departamentos',
          impact: 'Muito Alta',
        },
        {
          title: 'API Pública',
          description: 'Permitir integrações externas e ecossistema de plugins',
          impact: 'Alta',
        },
        {
          title: 'IA Generativa Avançada',
          description: 'Assistente virtual capaz de aprendizado contínuo',
          impact: 'Muito Alta',
        },
      ],
    },
  ];

  const futureCapabilities = [
    {
      icon: Globe,
      title: 'Escalabilidade Global',
      description: 'Suporte para múltiplas regiões e time zones',
    },
    {
      icon: Shield,
      title: 'Compliance Avançado',
      description: 'Certificações ISO, SOC2 e HIPAA',
    },
    {
      icon: Users,
      title: 'Self-Service Portal',
      description: 'Portal para usuários acompanharem tickets',
    },
    {
      icon: Sparkles,
      title: 'Automação Inteligente',
      description: 'IA que aprende com cada interação',
    },
  ];

  const metrics = [
    { label: 'Redução de Custos', value: '65%', timeline: 'Ano 2' },
    { label: 'Taxa de Auto-Resolução', value: '45%', timeline: 'Ano 2' },
    { label: 'Satisfação do Usuário', value: '95%+', timeline: 'Ano 1' },
    { label: 'Tickets Processados/Dia', value: '1000+', timeline: 'Ano 2' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-900/40 to-slate-900/40',
        border: 'border-blue-500/30',
        icon: 'bg-blue-600/20',
        iconColor: 'text-blue-400',
        text: 'text-blue-400',
      },
      cyan: {
        bg: 'from-cyan-900/40 to-slate-900/40',
        border: 'border-cyan-500/30',
        icon: 'bg-cyan-600/20',
        iconColor: 'text-cyan-400',
        text: 'text-cyan-400',
      },
      green: {
        bg: 'from-green-900/40 to-slate-900/40',
        border: 'border-green-500/30',
        icon: 'bg-green-600/20',
        iconColor: 'text-green-400',
        text: 'text-green-400',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getImpactColor = (impact: string) => {
    const colors = {
      'Muito Alta': 'text-green-400 bg-green-500/10 border-green-500/30',
      'Alta': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      'Média': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    };
    return colors[impact as keyof typeof colors] || colors['Média'];
  };

  const sustainabilityCosts = [
    {
      category: 'Infraestrutura Azure',
      items: [
        { name: 'Azure Functions (consumo)', cost: 'R$ 800/mês', description: '~1M execuções/mês' },
        { name: 'Azure Logic Apps', cost: 'R$ 1.200/mês', description: '~50K workflows/mês' },
        { name: 'Azure SQL Database (S3)', cost: 'R$ 1.500/mês', description: '100 DTUs, 250GB' },
        { name: 'Azure Monitor + Insights', cost: 'R$ 400/mês', description: 'Logs e telemetria' },
      ],
      subtotal: 'R$ 3.900/mês',
    },
    {
      category: 'Serviços de IA',
      items: [
        { name: 'OpenAI GPT-4 API', cost: 'R$ 2.000/mês', description: '~300K tokens/dia' },
        { name: 'Vertex AI Agent Builder', cost: 'R$ 1.500/mês', description: 'Categorização IA' },
      ],
      subtotal: 'R$ 3.500/mês',
    },
    {
      category: 'Suporte e Manutenção',
      items: [
        { name: 'Suporte Técnico (40h/mês)', cost: 'R$ 8.000/mês', description: 'Desenvolvedor dedicado' },
        { name: 'Gerenciamento de Projeto', cost: 'R$ 4.000/mês', description: '20h/mês PM/Tech Lead' },
        { name: 'Monitoramento e Incidentes', cost: 'R$ 2.000/mês', description: 'On-call 8x5' },
      ],
      subtotal: 'R$ 14.000/mês',
    },
  ];

  const totalMonthlyCost = 21400;
  const totalYearlyCost = totalMonthlyCost * 12;

  return (
    <section id="post-poc" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <Rocket className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Sustentação Pós-PoC</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sustentação e Evolução Pós-PoC
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Custos de sustentação da plataforma e visão estratégica de expansão ao longo dos próximos 24 meses
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Custo de Sustentação Mensal</h3>
              <p className="text-slate-400 text-sm">Investimento necessário para manter a operação pós-PoC</p>
            </div>
          </div>

          <div className="space-y-6 mb-6">
            {sustainabilityCosts.map((section, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Server className="w-5 h-5 text-cyan-400" />
                    {section.category}
                  </h4>
                  <span className="text-xl font-bold text-green-400">{section.subtotal}</span>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between text-sm border-l-2 border-cyan-600/30 pl-4 py-2">
                      <div className="flex-1">
                        <p className="text-slate-300 font-medium">{item.name}</p>
                        <p className="text-slate-500 text-xs">{item.description}</p>
                      </div>
                      <span className="text-slate-300 font-mono font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-lg p-6">
                <p className="text-sm text-green-300 mb-2 font-medium">Custo Total Mensal</p>
                <p className="text-4xl font-bold text-green-400 mb-1">R$ {totalMonthlyCost.toLocaleString('pt-BR')}</p>
                <p className="text-xs text-slate-400">~260 tickets/dia processados automaticamente</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-lg p-6">
                <p className="text-sm text-blue-300 mb-2 font-medium">Custo Total Anual</p>
                <p className="text-4xl font-bold text-blue-400 mb-1">R$ {totalYearlyCost.toLocaleString('pt-BR')}</p>
                <p className="text-xs text-slate-400">~95.000 tickets/ano com automação 92%+</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-cyan-300 font-semibold mb-1">ROI Esperado</p>
                <p className="text-slate-300">
                  Redução de <strong className="text-cyan-400">45 minutos/ticket</strong> equivale a economia de <strong className="text-cyan-400">~195 horas/mês</strong> de trabalho manual,
                  representando <strong className="text-green-400">ROI positivo em 4-6 meses</strong> considerando custo/hora de analista.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mb-12">
          {evolutionPhases.map((phase, phaseIndex) => {
            const Icon = phase.icon;
            const colorClasses = getColorClasses(phase.color);

            return (
              <div
                key={phaseIndex}
                className={`bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-xl p-6`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 ${colorClasses.icon} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${colorClasses.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${colorClasses.text}`}>{phase.phase}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {phase.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getImpactColor(item.impact)}`}>
                          {item.impact}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {futureCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg mb-3">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{capability.title}</h4>
                  <p className="text-xs text-slate-400">{capability.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-400" />
            Métricas de Sucesso Futuras
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-slate-400 mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-green-400 mb-1">{metric.value}</p>
                <p className="text-xs text-slate-500">{metric.timeline}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Visão de Longo Prazo</h3>
              <p className="text-slate-300 mb-4">
                Nossa visão é transformar o Service Desk da DASA em uma <strong className="text-cyan-400">plataforma
                inteligente e autônoma</strong>, capaz de resolver a maioria dos tickets sem intervenção humana,
                permitindo que a equipe foque em problemas complexos e melhoria contínua.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Automação 95%+
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Auto-resolução 45%+
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Expansão Multi-área
                </div>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Ver Roadmap
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
