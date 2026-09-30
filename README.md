# Ápice Saúde — Portal institucional e atendimento digital

Modernização da presença digital da Ápice Saúde, conectando informações assistenciais, identidade institucional e acesso ao atendimento em uma experiência responsiva.

**Site:** [apicesaude.com.br](https://apicesaude.com.br)  
**Ambiente de validação:** [Prévia do projeto](https://apice-saude-modern.chris-lacerda.chatgpt.site)

## Propósito

Facilitar a jornada de pacientes e familiares: conhecer serviços, localizar unidades, consultar o corpo clínico, acessar resultados e iniciar uma solicitação de agendamento. O atendimento pelo site complementa os canais de telefone e WhatsApp.

## Entregas do projeto

- Reorganização da arquitetura de informação e modernização visual com base na identidade Ápice e no aprendizado do design system do Cartão AMAS.
- Interface responsiva, com navegação adaptada a celulares, tablets e computadores.
- Integração do widget EzeSoft/EzWebchat, com botão flutuante, mensagem de convite e controles de abertura e fechamento.
- Abertura do chat pelo botão “Agendar uma consulta” da central de atendimento e pelo banner promocional da home.
- Banner com imagem, botão de fechar e chamada “Quero agendar meu atendimento”.
- Página de unidades com endereços, horários, mapas e galeria automática de nove fotos, ampliáveis sem cortes.
- Acesso ao portal externo de resultados RealClinic.
- Atualização de profissionais, serviços e apresentação resumida dos planos AMAS.
- Rodapé com símbolos das redes sociais, links externos e crédito à Íon Digital.

## Organização do portal

| Página | Finalidade |
| --- | --- |
| Início | Apresentação, campanha e acessos prioritários |
| Serviços | Organização das linhas de cuidado |
| Consultas | Apresentação e orientação para atendimento, sem catálogo de especialidades |
| Exames | Catálogo de exames e contato |
| Terapias | Fisioterapia, Fonoaudiologia, Psicologia e Nutrição |
| Cirurgias | Apresentação de áreas de procedimentos |
| Unidades | Localização, horários, mapas e galeria |
| Corpo clínico | Profissionais, especialidades e registros informados |
| Planos | Amas Prático, Amas Bem-Estar e Amas Família Plus, nessa ordem |
| Institucional | História, valores, Trabalhe Conosco e Ouvidoria |
| Para empresas | Apresentação de serviços corporativos |
| Resultados | Direcionamento ao portal RealClinic |
| Contato | Canais de relacionamento |

## Regras e limites

- Planos permanece disponível por acesso específico, sem item no menu principal ou no rodapé. Valores e condições completos são consultados no site do Cartão AMAS.
- O card da central na home não exibe mais “Especialidades que atendemos”.
- A página de Unidades não inclui o parceiro SEMERJ.
- A Ouvidoria está presente em Institucional e Contato, sem atalho próprio na home.
- O chat é uma integração de atendimento de terceiro. A confirmação de horários e agendamentos depende do fluxo e da disponibilidade do serviço; o portal não implementa uma agenda clínica própria.
- Resultados são acessados em ambiente externo. Este projeto não implementa armazenamento próprio de prontuários ou laudos.
- Informações assistenciais, campanhas, profissionais, horários e contatos precisam de validação da instituição.
- A configuração de não indexação está presente no código. Ela não equivale a controle de acesso privado.

## Identidade e implementação

Azul institucional `#0F286F`, laranja `#FD4903`, tipografia Arial e componentes reutilizáveis orientam a consistência visual.

**Tecnologias:** TypeScript, React, Next.js/Vinext, Tailwind CSS, componentes Radix/shadcn e ícones Lucide, com símbolos de marcas em SVG.

O código-fonte é versionado no GitHub. O ambiente de validação utiliza Sites; para a hospedagem por FTP foi gerada uma exportação estática separada, com HTML, CSS, JavaScript e imagens. A configuração padrão deste repositório não deve ser confundida com o pacote estático pronto para upload.

## Condução e aprendizado

Projeto conduzido por **Christopher Lacerda**, com crédito de desenvolvimento à **Íon Digital**. O trabalho envolveu definição e refinamento de requisitos, organização das jornadas, implementação da interface, integração de atendimento, revisão de conteúdo e acompanhamento da publicação.

O projeto demonstra a conexão entre necessidades do negócio, experiência do paciente e execução técnica. Entre os aprendizados estão a gestão de dependências externas, o comportamento de componentes em dispositivos móveis e a separação entre código-fonte, ambiente de validação e distribuição para hospedagem.

As entregas são funcionais; não há métricas documentadas que comprovem aumento de conversão ou redução do tempo de atendimento.

## Pontos de manutenção

- Unificar o contato de recrutamento: Institucional utiliza `trabalheconosco@apicesaude.com.br`, enquanto Contato ainda utiliza `rh@apicesaude.com.br`.
- Validar a mensagem “mais de 25 especialidades” ainda presente na home e em Serviços.
- Manter a configuração da hospedagem que está funcionando; regras de servidor precisam ser compatíveis com o provedor.

---

**Desenvolvido por Íon Digital.**
