import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — uma sala de controle do macOS para agentes de código',
      description: 'Monte um fluxo para Claude Code e Codex em um canvas, rode-o sobre um projeto no seu Mac e veja cada agente trabalhar em paralelo. Grátis para Apple Silicon.',
    },
    features: {
      title: 'Recursos — RigOne',
      description: 'Fluxos visuais, execuções em paralelo de verdade, agentes reutilizáveis, verificações que o próprio RigOne roda, trabalho mantido em um branch próprio, gatilhos e provas que sobrevivem ao terminal.',
      breadcrumb: 'Recursos',
    },
    docs: {
      title: 'Documentação — RigOne',
      description: 'Instale o RigOne, monte seu primeiro fluxo, rode-o sobre um projeto e leia os resultados. Conceitos, modelo de segurança, arquivos em disco e solução de problemas.',
      breadcrumb: 'Documentação',
    },
    compare: {
      title: 'RigOne comparado a outras formas de rodar agentes de código',
      description: 'Como o RigOne se diferencia de uma CLI de agente sozinha, de apps de desktop com agentes em paralelo, de gerenciadores de sessões de terminal e de agentes de código na nuvem, com os prós e contras.',
      breadcrumb: 'Comparar',
    },
    changelog: {
      title: 'Novidades — RigOne',
      description: 'Cada versão do RigOne: o que mudou, o que fazer ao atualizar e o checksum do build assinado e notarizado.',
      breadcrumb: 'Novidades',
    },
    ogImageAlt: 'RigOne — um grafo manda no trabalho. Uma sala de controle do macOS para agentes de código.',
  },
  common: {
    skipToContent: 'Pular para o conteúdo',
    homeAria: 'Início do RigOne',
    primaryNav: 'Menu principal',
    footerNav: 'Rodapé',
    language: 'Idioma',
    englishOnly: 'Esta página está escrita em inglês.',
  },
  nav: {
    features: 'Recursos',
    docs: 'Documentação',
    compare: 'Comparar',
    faq: 'Perguntas',
    changelog: 'Novidades',
    github: 'GitHub',
    issues: 'Relatar um problema',
    download: 'Baixar',
  },
  theme: {
    label: 'Tema',
    light: 'Claro',
    dark: 'Escuro',
    system: 'Sistema',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: 'Versão {version} disponível',
    titleStrong: 'Um grafo',
    titleSoft: 'manda no trabalho.',
    sub: 'O RigOne é uma sala de controle nativa para agentes de código. Defina um agente uma vez, coloque-o no canvas, ligue os passos e rode o grafo sobre um projeto no seu Mac.',
    download: 'Baixar para macOS',
    docsCta: 'Ler a documentação',
    note: 'Grátis · macOS 13+ · assinado e notarizado',
    illustrationLabel: 'A tela de execução: o plano de um fluxo à esquerda e o que os agentes dizem à direita.',
  },
  trust: {
    aria: 'Com o que você pode contar',
    items: [
      'Roda no seu Mac, sobre a sua pasta',
      'Claude Code e Codex em pé de igualdade',
      'Nada chega ao seu branch até você aceitar',
      'Assinado com Apple Developer ID',
    ],
  },
  unique: {
    eyebrow: 'Por que o RigOne',
    title: 'Quem decide é o grafo, não o motor',
    lead: 'A ordem, os ramos em paralelo, as novas tentativas e os checkpoints vêm do fluxo que você salvou. Nenhuma etapa é fixa no código, e nenhum agente avalia o próprio trabalho.',
    items: {
      graph: {
        title: 'Fluxos que se enxergam',
        body: 'Passos de agente, verificações e checkpoints em um só canvas. Uma seta significa “roda depois”, e nada mais.',
        link: 'Fluxos visuais',
      },
      peers: {
        title: 'Dois fornecedores, uma execução',
        body: 'Misture Claude Code e Codex no mesmo fluxo: um escreve e o outro dá uma segunda opinião.',
        link: 'Agentes reutilizáveis',
      },
      parallel: {
        title: 'Ao mesmo tempo, de verdade',
        body: 'Passos que não dependem um do outro começam juntos, até o limite que você definir.',
        link: 'Execuções em paralelo',
      },
      checks: {
        title: 'Verificações, não promessas',
        body: 'Um agente pode dizer “pronto”. Só as verificações que o RigOne roda podem dizer que os testes passaram.',
        link: 'Verificações',
      },
      branches: {
        title: 'Seu branch continua seu',
        body: 'Cada passo trabalha na própria cópia do código. O que ele mudou espera em um branch até você aceitar.',
        link: 'Para onde vão as mudanças',
      },
      evidence: {
        title: 'Provas depois do fato',
        body: 'Recibos, repasses e um pacote de diagnóstico continuam em disco quando a saída do terminal já se foi.',
        link: 'Provas',
      },
    },
    seeAll: 'Ver todos os recursos',
  },
  how: {
    eyebrow: 'Como funciona',
    title: 'Três passos, e só o terceiro gasta dinheiro',
    lead: 'Você decide o que roda, quantos ao mesmo tempo e quanto pode custar.',
    steps: [
      {
        title: 'Escreva um agente',
        body: 'Um trabalho, uma instrução. Escolha Claude Code ou Codex, o modelo, o esforço e o que ele pode tocar.',
      },
      {
        title: 'Ponha os agentes em fila',
        body: 'Essa fila é um fluxo. Ramos que não dependem um do outro rodam ao mesmo tempo.',
      },
      {
        title: 'Rode e acompanhe',
        body: 'Aponte o grafo para uma pasta deste Mac. Responda quando um agente perguntar; o resto segue.',
      },
    ],
  },
  honest: {
    eyebrow: 'Feito para falhar com honestidade',
    title: 'Falhas são falhas de produto, não ruído de terminal',
    lead: 'O que o RigOne se recusa a fazer em silêncio.',
    items: {
      scopes: { title: 'Escopos de escrita sobrepostos', body: 'são recusados antes de o primeiro processo começar.' },
      cancel: { title: 'O cancelamento', body: 'encerra o grupo de processos inteiro e depois verifica que ele morreu.' },
      timeouts: { title: 'Os tempos limite', body: 'passam pelo mesmo encerramento supervisionado que o cancelamento.' },
      secrets: { title: 'Prompts e segredos', body: 'vão pelo stdin, nunca por argumentos de linha de comando.' },
      env: { title: 'Os ambientes dos processos filhos', body: 'são remontados a partir de uma lista explícita de permissões.' },
      unknown: { title: 'Eventos desconhecidos do fornecedor', body: 'são registrados e ignorados em vez de derrubar a execução.' },
      green: { title: 'Um código de saída verde', body: 'sem prova de que os testes rodaram não é aceito como verificação verde.' },
      files: { title: 'Os arquivos são a fonte da verdade;', body: 'o índice SQLite pode ser apagado e reconstruído.' },
    },
  },
  features: {
    eyebrow: 'Recursos',
    title: 'Tudo o que uma execução precisa, em uma janela',
    lead: 'O RigOne monta, roda e registra fluxos para agentes de código. Veja o que cada parte faz hoje.',
    items: {
      canvas: {
        eyebrow: 'Fluxos',
        title: 'Fluxos visuais',
        body: 'Monte um fluxo em um canvas e salve-o como um grafo que você pode rodar de novo. Um passo pode ser um agente, uma verificação ou um checkpoint onde você decide.',
        points: [
          'Uma seta significa “roda depois”: a ordem vem do grafo',
          'Laços, caminhos condicionais e novas tentativas com limite',
          'Um passo com várias setas de entrada lê cada repasse que recebe',
          'Rode várias cópias de um passo (×3) quando quiser mais de uma versão',
        ],
      },
      parallel: {
        eyebrow: 'Execução',
        title: 'Execuções em paralelo de verdade',
        body: 'Ramos independentes se sobrepõem no tempo em vez de esperar a vez atrás de um único executor.',
        points: [
          'Escolha quantos agentes podem trabalhar ao mesmo tempo',
          'Defina o máximo que uma execução pode gastar antes de ela começar',
          'Modelos e níveis de esforço são conferidos com a sua CLI instalada antes de qualquer passo começar',
        ],
      },
      run: {
        eyebrow: 'Tela de execução',
        title: 'Uma execução que dá para ler',
        body: 'O plano à esquerda, com cada cartão indicando o passo que ele espera. À direita, o que cada agente disse, em ordem, com a pergunta que parou a execução fixada onde você vai respondê-la.',
        points: [
          'Perguntas, comandos iniciados, saída e gasto ficam juntos',
          'Os resultados dizem o que aconteceu: concluído, falhou, interrompido ou não rodou',
          'Um agente principal pode discutir as coisas com você; só /run começa o trabalho',
        ],
      },
      agents: {
        eyebrow: 'Agentes',
        title: 'Agentes reutilizáveis',
        body: 'Defina um papel uma vez e reuse-o em todos os fluxos. O papel inteiro (as instruções, o modelo, o acesso a arquivos) aparece na tela quando você o abre.',
        points: [
          'Fornecedor, modelo, esforço, tempo limite e se ele pode acessar a web',
          'Acesso a arquivos a partir de “só olhar”',
          'Servidores de ferramentas (conexões) e habilidades escolhidos entre os que o projeto tem',
          'Importe uma configuração de outro projeto sem copiar segredos nem histórico',
        ],
      },
      knowledge: {
        eyebrow: 'Conhecimento',
        title: 'Conhecimento preso ao projeto',
        body: 'Notas e habilidades ficam em disco junto com o projeto. Uma nota sugerida por um agente só chega a um prompt futuro depois que você a aprova.',
        points: [
          'Notas vão em todo prompt; habilidades são usadas quando combinam com o trabalho',
          'Conjuntos de contexto com nome a partir de texto, Markdown, imagens e PDFs',
          'Veja qual contexto uma execução realmente usou',
        ],
      },
      checks: {
        eyebrow: 'Verificações',
        title: 'Verificações que o próprio RigOne roda',
        body: 'Quando um passo termina, o RigOne roda as verificações; ele não pergunta ao agente se deu certo. O que o agente disse, o que as verificações encontraram e o que você aprovou nunca se misturam.',
        points: [
          '“Nada rodou” é um resultado à parte, nunca uma aprovação',
          'Uma segunda opinião de outro fornecedor pode levantar dúvidas, mas nunca aprovar',
          'O mesmo erro duas vezes interrompe as novas tentativas',
        ],
      },
      branches: {
        eyebrow: 'Espaços de trabalho',
        title: 'As mudanças esperam em um branch próprio',
        body: 'Cada passo trabalha na própria cópia do seu código, então os agentes não atrapalham uns aos outros. Quando a execução termina, o trabalho espera em um branch do seu projeto.',
        points: [
          'Nada recebe push',
          'Nada chega ao seu próprio branch até você aceitar',
          'Um conflito real indica os branches onde o trabalho está guardado',
        ],
      },
      triggers: {
        eyebrow: 'Gatilhos',
        title: 'Gatilhos e recuperação',
        body: 'Inicie um fluxo quando uma issue do Linear for atribuída a você, com verificação a cada 1, 5, 15 ou 60 minutos. O trabalho interrompido é recuperado pelo mesmo caminho de início, não por um segundo motor.',
        points: [
          'Uma issue inicia uma execução, mesmo depois de uma reinicialização',
          'A chave de API é digitada uma vez e nunca mais aparece',
          'Apagar um gatilho cancela o que estava esperando, de forma visível',
        ],
      },
      lab: {
        eyebrow: 'Laboratório',
        title: 'Teste um agente no seu próprio código',
        body: 'Escolha um agente e o RigOne esboça casos de teste a partir do seu projeto, para você ver se uma mudança nesse agente melhorou o trabalho.',
        points: [
          'Os casos vêm do seu código, não de um benchmark genérico',
          'Compare um agente antes e depois de editá-lo',
        ],
      },
      evidence: {
        eyebrow: 'Provas',
        title: 'Provas que sobrevivem ao terminal',
        body: 'Cada execução deixa uma pasta que você pode abrir: o que cada passo repassou, as respostas completas, os logs e um arquivo de resultados.',
        points: [
          'Recibos de execução e anexos completos para respostas longas',
          'Prova de que os processos cancelados realmente terminaram',
          'Um pacote de diagnóstico que você copia com um clique',
        ],
      },
    },
  },
  compare: {
    eyebrow: 'Comparar',
    title: 'O RigOne e as outras formas de rodar agentes de código',
    lead: 'Existem boas ferramentas para rodar um agente, ou vários lado a lado. O RigOne é para quando o trabalho é uma sequência de passos que você quer rodar de novo.',
    caption: 'RigOne comparado a quatro tipos de ferramenta para rodar agentes de código',
    capability: 'Capacidade',
    columns: ['CLI de agente sozinha', 'Apps de desktop com agentes em paralelo', 'Gerenciadores de sessões de terminal', 'Agentes de código na nuvem'],
    examples: ['Claude Code, Codex CLI', 'ex.: Conductor', 'ex.: Claude Squad', 'ex.: Codex cloud, Copilot coding agent'],
    labels: { yes: 'Sim', partial: 'Em parte', no: 'Não', unknown: 'Não informado' },
    notStated: 'Não informado publicamente',
    rows: {
      local: {
        criterion: 'Funciona no seu próprio Mac e na sua pasta',
        cells: ['', '', '', '', 'Roda no sandbox do fornecedor'],
      },
      mix: {
        criterion: 'Claude Code e Codex em um só fluxo',
        cells: ['', 'Um fornecedor por sessão', 'Lado a lado, não em um só fluxo', 'Lado a lado, não em um só fluxo', 'Um fornecedor por serviço'],
      },
      graph: {
        criterion: 'Fluxo salvo de vários passos que você pode rodar de novo',
        cells: ['Grafo visual', 'Scripts, hooks e subagentes', '', '', ''],
      },
      isolated: {
        criterion: 'Trabalho em paralelo em cópias isoladas do código',
        cells: ['Um espaço de trabalho por passo', 'Worktrees gerenciados por você', 'Um worktree por agente', 'Um worktree por agente', 'Um sandbox por tarefa'],
      },
      checks: {
        criterion: 'Verificações rodadas pela ferramenta, separadas do que o agente afirma',
        cells: ['“Nada rodou” nunca é uma aprovação', 'Com os seus próprios hooks', '', '', 'CI no pull request'],
      },
      budget: {
        criterion: 'Limite de gasto e concorrência por execução',
        cells: ['', 'Só limites por sessão', '', '', 'Limites do plano'],
      },
      platforms: {
        criterion: 'Plataformas',
        cells: ['macOS 13+, Apple Silicon', 'macOS, Linux, Windows', 'macOS', 'macOS, Linux', 'Navegador'],
      },
      price: {
        criterion: 'Preço',
        cells: ['Grátis; usa o seu plano do Claude Code ou do Codex', 'Incluído no plano do fornecedor', 'Veja o site do produto', 'Grátis, código aberto', 'Incluído no plano do fornecedor'],
      },
    },
    footnoteHtml: 'Comparação por tipo de ferramenta, com base na documentação pública, em outubro de 2026. Cada produto é diferente e muda rápido. Achou um erro? <a href="{issues}">Avise a gente</a>.',
  },
  faq: {
    eyebrow: 'Perguntas',
    title: 'Perguntas frequentes',
    leadHtml: 'Mais na <a href="{docs}">documentação</a>. Faltou algo? <a href="{issues}">Abra uma issue</a>.',
    items: [
      {
        question: 'Do que preciso para usar o RigOne?',
        answer: 'Um Mac com Apple Silicon e macOS 13 ou posterior, e pelo menos uma CLI de agente instalada e com login feito: Claude Code ou Codex.',
      },
      {
        question: 'O RigOne envia meu código para algum lugar?',
        answer: 'O RigOne em si roda no seu Mac e trabalha na sua pasta. Os agentes que você inicia são Claude Code e Codex, então o código que eles leem vai para os fornecedores deles exatamente como iria se você os rodasse em um terminal.',
      },
      {
        question: 'Quanto custa?',
        answer: 'O RigOne é grátis para baixar e usar. As execuções usam o seu próprio plano do Claude Code ou do Codex, e você pode definir o máximo que uma execução pode gastar antes de ela começar.',
      },
      {
        question: 'Um agente vai dar push no meu repositório?',
        answer: 'Não. Cada passo trabalha na própria cópia do código, e o resultado espera em um branch do seu projeto. Nada recebe push, e nada chega ao seu próprio branch até você aceitar.',
      },
      {
        question: 'Posso usar só o Claude Code, ou só o Codex?',
        answer: 'Sim. Uma CLI instalada e com login feito basta. Misturar as duas é útil quando você quer que um fornecedor escreva e o outro dê uma segunda opinião.',
      },
      {
        question: 'Existe versão para Windows, Linux ou Intel?',
        answer: 'Hoje não. O RigOne é feito para macOS 13 ou posterior em Apple Silicon.',
      },
      {
        question: 'Eu usava o Loadout. O que acontece com meus dados?',
        answer: 'Loadout é o nome anterior do RigOne. A versão 1.1.0 move a sua biblioteca de ~/.loadout para ~/.rig-one na primeira abertura, e a pasta .loadout/ de cada projeto para .rig-one/ quando você o abre. O macOS vê o RigOne como um app novo, então pede as permissões de novo.',
      },
    ],
  },
  cta: {
    title: 'Ponha seus agentes em um só canvas',
    lead: 'Grátis para Macs com Apple Silicon. Assinado com Apple Developer ID e notarizado pela Apple.',
    download: 'Baixar para macOS',
    docs: 'Ler a documentação',
    compare: 'Como ele se compara',
    note: 'Precisa do Claude Code ou do Codex instalado e com login feito.',
  },
  changelog: {
    eyebrow: 'Novidades',
    title: 'O que mudou, versão por versão',
    lead: 'Cada versão diz o que mudou, o que fazer ao atualizar e o checksum do build assinado. Os builds anteriores à 1.1.0 foram lançados com o nome Loadout.',
    download: 'Baixar a mais recente',
    github: 'Versões no GitHub',
    latest: 'Mais recente',
    englishNote: 'As notas de versão são escritas em inglês.',
  },
  docs: {
    eyebrow: 'Documentação',
    title: 'Como usar o RigOne',
    lead: 'Instale, monte um fluxo, rode-o sobre um projeto e leia o que aconteceu.',
    onThisPage: 'Nesta página',
    englishNote: 'A documentação é escrita em inglês.',
    helpHtml: 'Algo confuso ou errado aqui? <a href="{issues}">Abra uma issue</a>.',
  },
  footer: {
    tagline: 'macOS primeiro · local primeiro · o seu código',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Site sob a licença <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
