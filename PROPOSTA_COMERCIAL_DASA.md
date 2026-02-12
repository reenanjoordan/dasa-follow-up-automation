# PROPOSTA COMERCIAL
## Automação Inteligente de Service Desk para DASA

**Apresentado por:** Leega Tecnologia
**Data:** 12 de Fevereiro de 2026
**Validade:** 30 dias
**Versão:** 1.0

---

## 1. APRESENTAÇÃO DA LEEGA

A **Leega** é uma empresa especializada em soluções de automação inteligente e IA generativa para otimização de processos corporativos. Nossa expertise está em transformar operações manuais repetitivas em sistemas automatizados que geram impacto mensurável em eficiência, custo e satisfação.

### Nossa Proposta de Valor
- Arquitetura atemporal e plugável (IA intercambiável)
- Foco em ROI demonstrável desde o PoC
- API-First com governança corporativa
- Escalabilidade de PoC a produção

---

## 2. CONTEXTO E DESAFIOS DA DASA

### Situação Atual (As Is)
- **Volume**: 7.800 tickets/mês
- **Tempo médio**: 45 minutos por ticket (manual)
- **Automação atual**: Apenas 3%
- **Headcount**: 30 analistas dedicados
- **Lead time** (Reset/MFA): 35 minutos
- **Desafios principais**:
  - Alto volume de tickets antigos sem resolução (7+ dias)
  - Categorização manual propensa a erros
  - Falta de visibilidade de backlog
  - Processos de contato e escalação manuais
  - Baixa produtividade da equipe

### Impacto Operacional
- Alto custo operacional com FTE dedicado
- Tempo de resposta elevado impactando SLA
- Satisfação do usuário comprometida (65% NPS)
- Falta de dados para tomada de decisão

---

## 3. SOLUÇÃO PROPOSTA

### Visão Geral
Sistema de automação inteligente para Service Desk que integra IA generativa, orquestração de processos e comunicação automatizada via Microsoft Teams, com foco em reduzir drasticamente o tempo de resolução e aumentar a taxa de automação.

### Objetivos Mensuráveis (To Be)
- **Automação**: Aumentar de 3% para 52% (+49 p.p.)
- **Tempo médio**: Reduzir de 45min para 5min por ticket (-89%)
- **Lead time**: Reduzir de 35min para 16min (-55%)
- **Produtividade**: Dobrar capacidade de atendimento (260 → 520+ tickets/analista)
- **NPS**: Aumentar de 65% para 85% (+20 pontos)
- **Eficiência**: Equivalente a 50% de redução de headcount

---

## 4. ESCOPO TÉCNICO E FUNCIONAL

### 4.1 Monitoramento Automático de Tickets
- Identificação de tickets com 7+ dias sem atualização
- Análise de usuários inativos na rede
- Trigger de escalação baseado em regras de negócio
- Dashboard em tempo real com visibilidade de backlog
- Integração com ServiceNow TSM

### 4.2 Categorização Inteligente com IA
- **92% de acurácia** em categorização automática
- Análise contextual de descrição do ticket
- Detecção de categorias ausentes no catálogo
- Fila de revisão humana para 8% incertos
- Aprendizado contínuo com feedback

### 4.3 Integração com Microsoft Teams
- Envio automático de mensagens via Teams
- Mensagens padronizadas e personalizáveis
- Rastreamento de evidências de contato
- Resposta automática com contexto do ticket
- Integração com Microsoft Graph API

### 4.4 Roteamento e Escalação Inteligente
- Roteamento baseado em criticidade do ticket
- Escalação automática após 3 tentativas
- Notificação do gestor da fila responsável
- Rastreamento de SLA por grupo
- Métricas de resposta por técnico

### 4.5 Gerenciamento de Tentativas de Contato
- 1 tentativa por dia útil, durante 3 dias
- Horário comercial (08:00-18:00, exceto 12:00-14:00)
- Contato via Teams e telefone
- Registro de evidências no chamado
- Encerramento automático após 3 tentativas sem retorno

### 4.6 Qualidade de Dados e Limpeza
- Identificação de usuários inativos
- Validação de categorias de ticket
- Detecção de tickets em "limbo"
- Sincronização com Active Directory
- Auditoria de mudanças de status

---

## 5. ARQUITETURA E TECNOLOGIA

### Stack Tecnológico
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **IA/ML**: OpenAI GPT-4 (intercambiável)
- **Frontend**: React + TypeScript + Tailwind CSS
- **Integrações**:
  - ServiceNow API
  - Microsoft Graph API (Teams)
  - Active Directory
- **Analytics**: Power BI (dashboards)

### Princípios Arquiteturais
1. **Arquitetura Atemporal**: Componentes desacoplados (cérebro, mãos, canais)
2. **IA Plugável**: Trocar provedores sem reescrever sistema
3. **API-First**: RESTful com autenticação OAuth2
4. **Governança**: RBAC, auditoria completa, compliance
5. **Escalabilidade**: De PoC para produção sem refatoração

### Segurança e Compliance
- Autenticação OAuth2 / SSO
- Criptografia em trânsito (TLS 1.3)
- Criptografia em repouso (AES-256)
- Logs de auditoria completos
- Conformidade LGPD

---

## 6. CRONOGRAMA E METODOLOGIA

### Duração Total: 16 semanas (4 meses)

#### Fase 1: Descoberta e Design (2 semanas)
- Análise detalhada dos requisitos
- Definição da arquitetura técnica
- Prototipação de interfaces
- Planejamento de sprints
- **Entregáveis**: Documento de arquitetura, Protótipos UI/UX, Backlog priorizado

#### Fase 2: Desenvolvimento Core (6 semanas)
- Setup da infraestrutura
- Desenvolvimento da API e integrações
- Implementação do dashboard
- Sistema de categorização IA
- **Entregáveis**: API funcional, Dashboard operacional, Integração ServiceNow/Teams

#### Fase 3: Integração e Testes (4 semanas)
- Testes de integração
- Testes de performance
- Testes de segurança
- Ajustes e refinamentos
- **Entregáveis**: Sistema integrado, Relatórios de testes, Documentação técnica

#### Fase 4: Piloto e Validação (2 semanas)
- Deploy em ambiente de homologação
- Testes com usuários reais
- Coleta de feedback
- Ajustes finais
- **Entregáveis**: Sistema validado, Relatório de piloto, Plano de rollout

#### Fase 5: Deploy e Go-Live (2 semanas)
- Deploy em produção
- Monitoramento intensivo
- Suporte ao usuário
- Otimizações pós-lançamento
- **Entregáveis**: Sistema em produção, Documentação completa, Plano de suporte

### Metodologia
- **Framework**: Scrum (sprints de 2 semanas)
- **Cerimônias**: Daily, Planning, Review, Retrospective
- **Comunicação**: Reuniões semanais de status com stakeholders
- **Ferramentas**: Jira, Confluence, Slack

---

## 7. EQUIPE LEEGA

### Time Dedicado
- **Flamarion Fogaça** - Desenvolvedor Full-Stack Sênior (640h)
- **Renan Jordão** - Desenvolvedor Full-Stack Sênior (640h)
- **Jhonathan Ducatti** - Desenvolvedor Full-Stack Sênior (640h)

### Carga Total
- **1.920 horas** de desenvolvimento
- **3 profissionais** em tempo integral durante 4 meses

### Expertise do Time
- Desenvolvimento full-stack (React, Node.js, TypeScript)
- Integração com APIs empresariais (ServiceNow, Microsoft Graph)
- Implementação de IA/ML em produção
- DevOps e automação de infraestrutura
- Segurança e compliance

---

## 8. INVESTIMENTO

### 8.1 Composição de Custos

#### Desenvolvimento
| Item | Quantidade | Custo Unitário | Total |
|------|-----------|----------------|-------|
| Desenvolvedor Full-Stack Sênior | 1.920h | R$ 130/h | R$ 249.600 |
| **Subtotal Desenvolvimento** | | | **R$ 249.600** |

#### Infraestrutura e Licenças (4 meses)
| Item | Custo Mensal | Total 4 Meses |
|------|--------------|---------------|
| Supabase (Tier Pro) | R$ 1.200 | R$ 4.800 |
| OpenAI API (GPT-4) | R$ 3.500 | R$ 14.000 |
| Ferramentas de Dev/Testes | R$ 800 | R$ 3.200 |
| **Subtotal Infraestrutura** | | **R$ 22.000** |

#### Gestão de Projeto
| Item | Quantidade | Custo Unitário | Total |
|------|-----------|----------------|-------|
| Gerenciamento de Projeto (15%) | - | - | R$ 40.740 |
| **Subtotal Gestão** | | | **R$ 40.740** |

### 8.2 Investimento Total

| Componente | Valor |
|-----------|--------|
| Desenvolvimento | R$ 249.600 |
| Infraestrutura (4 meses) | R$ 22.000 |
| Gestão de Projeto | R$ 40.740 |
| **TOTAL (sem margem)** | **R$ 312.340** |
| **Margem Comercial (20%)** | **R$ 62.468** |
| **INVESTIMENTO TOTAL** | **R$ 374.808** |

### 8.3 Valor Proposto

**Investimento único (PoC + Implementação): R$ 385.000,00**

*Este valor inclui toda a implementação, testes, deploy e 60 dias de suporte pós go-live.*

### 8.4 Custos Mensais Recorrentes (Pós Go-Live)

| Item | Custo Mensal |
|------|--------------|
| Infraestrutura Supabase | R$ 1.200 |
| OpenAI API (produção) | R$ 5.000 |
| Monitoramento e Analytics | R$ 500 |
| **Total Mensal Recorrente** | **R$ 6.700** |

*Suporte e manutenção evolutiva podem ser contratados separadamente mediante SLA específico.*

---

## 9. RETORNO SOBRE INVESTIMENTO (ROI)

### 9.1 Economia Operacional

#### Cenário Conservador (Parâmetros Base)
- **Tickets/mês**: 7.800
- **Tempo manual médio**: 45 min/ticket
- **Tempo com IA**: 5 min/ticket
- **Custo hora/pessoa**: R$ 50
- **Taxa de automação**: 52%

#### Cálculos de Economia

**Horas atuais por mês (100% manual)**
- 7.800 tickets × 45 min = 5.850 horas/mês
- Custo mensal: 5.850h × R$ 50 = **R$ 292.500/mês**

**Horas futuras por mês (52% automático)**
- Tickets automatizados: 7.800 × 52% = 4.056 tickets
- Tickets manuais: 7.800 × 48% = 3.744 tickets
- Horas automáticas: 4.056 × 5 min = 338 horas
- Horas manuais: 3.744 × 10 min = 624 horas
- **Total: 962 horas/mês**
- Custo mensal: 962h × R$ 50 = **R$ 48.100/mês**

**Economia Mensal**: R$ 292.500 - R$ 48.100 = **R$ 244.400/mês**
**Economia Anual**: R$ 244.400 × 12 = **R$ 2.932.800/ano**

### 9.2 Payback

**Payback = Investimento ÷ Economia Mensal**
R$ 385.000 ÷ R$ 244.400 = **1,6 meses**

### 9.3 ROI em 3 Anos

**Economia 3 anos**: R$ 2.932.800 × 3 = R$ 8.798.400
**Investimento Total**: R$ 385.000
**ROI líquido**: R$ 8.798.400 - R$ 385.000 = **R$ 8.413.400**
**ROI %**: (R$ 8.413.400 ÷ R$ 385.000) × 100 = **2.185%**

### 9.4 Benefícios Intangíveis

- **Melhoria de NPS**: De 65% para 85% (+20 pontos)
- **Redução de SLA**: Resposta mais rápida aos usuários
- **Dados para decisão**: Dashboards e analytics em tempo real
- **Escalabilidade**: Sistema pronto para crescimento de demanda
- **Qualidade**: Redução de erros de categorização
- **Compliance**: Auditoria completa de todas as ações

---

## 10. COMPARATIVO DE CENÁRIOS

| Métrica | Atual (As Is) | Futuro (To Be) | Melhoria |
|---------|---------------|----------------|----------|
| Taxa de Automação | 3% | 52% | +49 p.p. |
| Tempo Médio/Ticket | 45 min | 5 min | -89% |
| Lead Time (Reset/MFA) | 35 min | 16 min | -55% |
| Custo Mensal Operacional | R$ 292.500 | R$ 48.100 | -84% |
| Produtividade (tickets/analista) | 260 | 520+ | +100% |
| NPS | 65% | 85% | +20 pts |
| Headcount Equivalente | 30 FTE | 15 FTE | -50% |

---

## 11. ANÁLISE DE RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Resistência dos usuários | Média | Alto | Change management, treinamento, comunicação proativa |
| Problemas de integração | Média | Médio | Testes antecipados, POCs de integração na Fase 1 |
| Acurácia da IA abaixo do esperado | Baixa | Alto | Fine-tuning, ajuste de prompts, revisão humana |
| Atrasos no cronograma | Média | Médio | Buffer de 10%, gestão ágil, comunicação semanal |
| Indisponibilidade de APIs externas | Baixa | Médio | Retry logic, circuit breakers, fallback manual |

---

## 12. CONDIÇÕES COMERCIAIS

### 12.1 Modelo de Pagamento

#### Opção 1: Pagamento Tradicional (3 parcelas)
- **Parcela 1 (30%)**: R$ 115.500 - Assinatura do contrato
- **Parcela 2 (40%)**: R$ 154.000 - Conclusão da Fase 3 (Testes)
- **Parcela 3 (30%)**: R$ 115.500 - Go-Live (Produção)

#### Opção 2: Pagamento por Milestone (5 parcelas)
- **Parcela 1 (20%)**: R$ 77.000 - Assinatura + Conclusão Fase 1
- **Parcela 2 (25%)**: R$ 96.250 - Conclusão Fase 2
- **Parcela 3 (20%)**: R$ 77.000 - Conclusão Fase 3
- **Parcela 4 (20%)**: R$ 77.000 - Conclusão Fase 4
- **Parcela 5 (15%)**: R$ 57.750 - Go-Live + 30 dias

### 12.2 Inclusões

✅ Desenvolvimento completo conforme escopo
✅ Integrações com ServiceNow, Teams e AD
✅ Dashboard executivo e operacional
✅ Documentação técnica completa
✅ Documentação de usuário
✅ Treinamento para equipe técnica (16h)
✅ Treinamento para usuários finais (8h)
✅ 60 dias de suporte pós go-live (bug fixes)
✅ Código-fonte com licença perpétua

### 12.3 Exclusões

❌ Custos de infraestrutura recorrentes (Supabase, OpenAI) após 4 meses
❌ Licenças Microsoft (Teams, AD) - responsabilidade DASA
❌ Licenças ServiceNow - responsabilidade DASA
❌ Novas funcionalidades fora do escopo original
❌ Suporte e manutenção após 60 dias (contratar separadamente)

### 12.4 Garantias

- ✅ **Garantia de Qualidade**: 60 dias para correção de bugs sem custo
- ✅ **SLA de Resposta**: 24h para bugs críticos, 48h para médios
- ✅ **Acurácia IA**: Garantia mínima de 85% (meta: 92%)
- ✅ **Performance**: Tempo de resposta < 2s para 95% das requisições

---

## 13. SUPORTE E MANUTENÇÃO (PÓS GO-LIVE)

### Opções de Contrato de Suporte (Mensal)

#### Plano Bronze - R$ 8.000/mês
- Horário: Segunda a Sexta, 9h-18h
- SLA Crítico: 8h
- SLA Alto: 24h
- 20 horas de manutenção evolutiva/mês

#### Plano Prata - R$ 15.000/mês
- Horário: Segunda a Sexta, 8h-20h
- SLA Crítico: 4h
- SLA Alto: 12h
- 40 horas de manutenção evolutiva/mês
- Atualizações de segurança prioritárias

#### Plano Ouro - R$ 25.000/mês (Recomendado)
- Horário: 24×7×365
- SLA Crítico: 2h
- SLA Alto: 6h
- 80 horas de manutenção evolutiva/mês
- Atualizações de segurança e features
- Gestor de conta dedicado
- Relatórios mensais executivos

*Contratação opcional após período de garantia de 60 dias.*

---

## 14. PRÓXIMOS PASSOS

### Timeline Proposta

1. **Semana 1**: Análise e aprovação da proposta pela DASA
2. **Semana 2**: Negociação de termos e assinatura do contrato
3. **Semana 3**: Kick-off do projeto + Fase 1 (Descoberta)
4. **Semanas 4-19**: Execução das Fases 2-5
5. **Semana 20**: Go-Live e transferência de conhecimento

### Ações Imediatas

✅ **DASA**: Revisar proposta com stakeholders técnicos e de negócio
✅ **DASA**: Validar orçamento e modelo de pagamento
✅ **DASA**: Providenciar acessos necessários (ServiceNow, Teams, AD)
✅ **Leega**: Agendar reunião de alinhamento técnico
✅ **Leega**: Preparar minuta de contrato

---

## 15. CONTATOS

### Leega Tecnologia

**Contato Comercial**
Email: contato@leega.com.br
Telefone: +55 11 XXXX-XXXX

**Endereço**
[Endereço comercial Leega]
CNPJ: XX.XXX.XXX/XXXX-XX

---

## ANEXOS

### Anexo A: Especificação Técnica Detalhada
(Disponível mediante solicitação)

### Anexo B: Casos de Uso e User Stories
(Disponível mediante solicitação)

### Anexo C: Diagramas de Arquitetura
(Disponível mediante solicitação)

### Anexo D: Modelo de Contrato
(Disponível mediante solicitação)

### Anexo E: Referências e Cases de Sucesso
(Disponível mediante solicitação)

---

**Esta proposta foi elaborada exclusivamente para DASA e é confidencial. Reprodução ou distribuição não autorizada é proibida.**

---

*Documento gerado em 12 de Fevereiro de 2026*
*Versão 1.0*
*© 2026 Leega. Todos os direitos reservados.*
