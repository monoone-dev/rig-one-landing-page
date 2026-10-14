import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — agentes de Claude Code y Codex en paralelo en tu Mac',
      description: 'Una sala de control nativa de macOS para agentes de código: monta un flujo para Claude Code y Codex en un lienzo y ejecútalo en paralelo en tu proyecto. Gratis.',
    },
    features: {
      title: 'Funciones de RigOne: flujos visuales, agentes en paralelo y comprobaciones',
      description: 'Flujos visuales, ejecuciones en paralelo, objetivos en Auto, agentes reutilizables, comprobaciones propias, cambios en su propia rama, tableros y disparadores.',
      breadcrumb: 'Funciones',
    },
    docs: {
      title: 'Documentación de RigOne y tutorial paso a paso',
      description: 'Instala RigOne y sigue el tutorial paso a paso: crea un agente, monta un flujo, ejecútalo en tu Mac y pasa un objetivo a Auto. Con la referencia completa.',
      breadcrumb: 'Documentación',
    },
    compare: {
      title: 'RigOne frente a Superset, Conductor, Nimbalyst, Codex y Cursor',
      description: 'RigOne frente a Superset, Conductor, Nimbalyst, la app Codex y Cursor Cloud Agents: ejecuciones locales, dos proveedores, flujos guardados, comprobaciones y gasto.',
      breadcrumb: 'Comparar',
    },
    changelog: {
      title: 'Novedades de RigOne: notas de versión y sumas de comprobación',
      description: 'Cada versión de RigOne: qué ha cambiado, qué hacer al actualizar y la suma de comprobación de la compilación firmada y notarizada.',
      breadcrumb: 'Novedades',
    },
    ogImageAlt: 'RigOne — un grafo manda sobre el trabajo. Una sala de control de macOS para agentes de código.',
  },
  common: {
    skipToContent: 'Saltar al contenido',
    homeAria: 'Inicio de RigOne',
    primaryNav: 'Menú principal',
    footerNav: 'Pie de página',
    language: 'Idioma',
    englishOnly: 'Esta página está escrita en inglés.',
  },
  nav: {
    features: 'Funciones',
    docs: 'Documentación',
    compare: 'Comparar',
    faq: 'Preguntas',
    changelog: 'Novedades',
    github: 'GitHub',
    issues: 'Informar de un problema',
    download: 'Descargar',
  },
  theme: {
    label: 'Tema',
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
  },
  hero: {
    badgePlatform: 'macOS · Apple Silicon',
    badgeAgents: 'Claude Code + Codex',
    badgeRelease: 'Versión {version} disponible',
    audience: 'Para desarrolladores que ya usan Claude Code o Codex',
    titleStrong: 'Trabaja con tus agentes de código como un equipo,',
    titleSoft: 'no terminal a terminal.',
    sub: 'RigOne es una app gratuita para Mac que convierte Claude Code y Codex en un flujo que puedes volver a ejecutar: pasos en paralelo, cada uno en su propia copia de tu código, con comprobaciones que RigOne ejecuta antes de que nada llegue a tu rama.',
    problemsLabel: 'Lo que RigOne resuelve',
    problems: [
      { problem: 'Malabares con terminales', answer: 'Una ventana planifica, ejecuta y muestra a cada agente.' },
      { problem: 'Agentes en un mismo checkout', answer: 'Cada paso trabaja en su propia copia; el resultado espera en una rama.' },
      { problem: 'Un «hecho» que no te crees', answer: 'Las comprobaciones las ejecuta RigOne, no el agente.' },
    ],
    download: 'Descargar para macOS',
    docsCta: 'Leer la documentación',
    note: 'Gratis · macOS 13+ · firmado y notarizado',
    chips: ['Comprobaciones de RigOne', '3 agentes a la vez', 'Nada publicado'],
  },
  trust: {
    aria: 'Con qué puedes contar',
    items: [
      'Se ejecuta en tu Mac, sobre tu carpeta',
      'Claude Code y Codex en pie de igualdad',
      'Nada llega a tu rama hasta que lo aceptas',
      'Firmado con Apple Developer ID',
    ],
  },
  unique: {
    eyebrow: 'Por qué RigOne',
    title: 'Decide el grafo, no el motor',
    lead: 'El orden, las ramas en paralelo, los reintentos y los puntos de control salen del flujo que guardaste. Ninguna etapa está fijada en el código y ningún agente evalúa su propio trabajo.',
    items: {
      graph: {
        title: 'Flujos que se ven',
        body: 'Pasos de agente, comprobaciones y puntos de control en un mismo lienzo. Una flecha significa “se ejecuta después” y nada más.',
        link: 'Flujos visuales',
      },
      peers: {
        title: 'Dos proveedores, una ejecución',
        body: 'Combina Claude Code y Codex en el mismo flujo: uno escribe y el otro da una segunda opinión.',
        link: 'Agentes reutilizables',
      },
      parallel: {
        title: 'De verdad a la vez',
        body: 'Los pasos que no dependen entre sí arrancan juntos, hasta el límite que fijes.',
        link: 'Ejecuciones en paralelo',
      },
      checks: {
        title: 'Comprobaciones, no promesas',
        body: 'Un agente puede decir “hecho”. Solo las comprobaciones que ejecuta RigOne pueden decir que las pruebas han pasado.',
        link: 'Comprobaciones',
      },
      branches: {
        title: 'Tu rama sigue siendo tuya',
        body: 'Cada paso trabaja en su propia copia del código. Lo que cambió espera en una rama hasta que lo aceptes.',
        link: 'Adónde van los cambios',
      },
      evidence: {
        title: 'Pruebas a posteriori',
        body: 'Los recibos, los traspasos y un paquete de diagnóstico siguen en disco cuando la salida del terminal ya no está.',
        link: 'Pruebas',
      },
    },
    seeAll: 'Ver todas las funciones',
  },
  how: {
    eyebrow: 'Cómo funciona',
    title: 'Tres pasos, y solo el tercero gasta dinero',
    lead: 'Tú decides qué se ejecuta, cuántos a la vez y cuándo avisarte del gasto.',
    steps: [
      {
        title: 'Escribe un agente',
        body: 'Un trabajo, una instrucción. Elige Claude Code o Codex, el modelo, el esfuerzo y lo que puede tocar.',
      },
      {
        title: 'Pon los agentes en fila',
        body: 'Esa fila es un flujo. Las ramas que no dependen entre sí se ejecutan a la vez.',
      },
      {
        title: 'Ejecuta y observa',
        body: 'Apunta el grafo a una carpeta de este Mac. Responde cuando un agente pregunte; lo demás sigue.',
      },
    ],
  },
  screens: {
    eyebrow: 'Pantallas',
    title: 'Míralo antes de descargarlo',
    lead: 'La app tal como se publica hoy, con el aspecto Minimalist por defecto. Cada pantalla funciona en claro y en oscuro.',
    label: 'Pantallas de la app',
    items: {
      run: {
        tab: 'Run',
        title: 'Ejecuta un flujo o háblalo antes',
        body: 'El plan a la izquierda y la conversación con el Lead a la derecha. Elige cuántos agentes pueden trabajar a la vez y cuándo avisar del gasto, y pulsa Run workflow.',
        alt: 'La pantalla Run mientras se ejecuta Ship a feature: tres pasos hechos y Second opinion trabajando; en el flujo, lo que dijo cada agente, y el Lead pregunta si publicar el arreglo ya o limpiar antes.',
      },
      agents: {
        tab: 'Agents',
        title: 'Todo el rol en una pantalla',
        body: 'Sus instrucciones, la CLI, el modelo y el esfuerzo con que trabaja, si puede cambiar archivos o acceder a la web, y cuándo se rinde.',
        alt: 'La pantalla Agents: cuatro roles en una lista junto a Scout, que trabaja con Claude Code y lee el código antes de que nadie lo cambie.',
      },
      canvas: {
        tab: 'Canvas',
        title: 'Un flujo que puedes ver',
        body: 'Pasos en un lienzo, unidos por flechas que significan «se ejecuta después». Tras Fix, las pruebas y una segunda opinión del otro proveedor se ejecutan a la vez.',
        alt: 'El lienzo de Ship a feature: Reproduce, luego Fix, y después Tests pass y Second opinion en paralelo.',
      },
      workflows: {
        tab: 'Workflows',
        title: 'Flujos que vuelves a ejecutar',
        body: 'Cada flujo guardado con sus pasos y agentes. El que más ejecutas ocupa todo el ancho.',
        alt: 'La pantalla Workflows: Fix a bug arriba con sus tres pasos, y Review a pull request y Ship a feature debajo.',
      },
      settings: {
        tab: 'Settings',
        title: 'Ajustes en su propia ventana',
        body: 'Categorías para el trabajo, la cuenta y la app. Elige el aspecto Minimalist o Studio, en claro, oscuro o según macOS.',
        alt: 'Settings → Appearance: los temas Minimalist y Studio, y System, Light o Dark.',
      },
    },
  },
  honest: {
    eyebrow: 'Hecho para fallar con honestidad',
    title: 'Los fallos son fallos de producto, no ruido del terminal',
    lead: 'Lo que RigOne se niega a hacer en silencio.',
    items: {
      scopes: { title: 'Los ámbitos de escritura solapados', body: 'se rechazan antes de arrancar el primer proceso.' },
      cancel: { title: 'La cancelación', body: 'termina el grupo de procesos entero y después comprueba que está muerto.' },
      timeouts: { title: 'Los tiempos límite', body: 'pasan por el mismo apagado supervisado que la cancelación.' },
      secrets: { title: 'Los prompts y los secretos', body: 'van por stdin, nunca por argumentos de línea de comandos.' },
      env: { title: 'Los entornos de los procesos hijos', body: 'se reconstruyen desde una lista explícita de permitidos.' },
      unknown: { title: 'Los eventos desconocidos del proveedor', body: 'se registran y se ignoran en lugar de hacer fallar la ejecución.' },
      green: { title: 'Un código de salida verde', body: 'sin prueba de que las pruebas se ejecutaron no se acepta como comprobación verde.' },
      files: { title: 'Los archivos son la fuente de verdad;', body: 'el índice SQLite se puede borrar y reconstruir.' },
    },
  },
  features: {
    eyebrow: 'Funciones',
    title: 'Todo lo que necesita una ejecución, en una ventana',
    lead: 'RigOne monta, ejecuta y registra flujos para agentes de código. Esto es lo que hace hoy cada parte.',
    items: {
      canvas: {
        eyebrow: 'Flujos',
        title: 'Flujos visuales',
        body: 'Monta un flujo en un lienzo y guárdalo como un grafo que puedes volver a ejecutar. Un paso puede ser un agente, una comprobación o un punto de control donde decides tú.',
        points: [
          'Una flecha significa “se ejecuta después”: el orden sale del grafo',
          'Bucles, caminos condicionales y reintentos con límite',
          'Un paso al que llegan varias flechas lee cada traspaso que recibe',
          'Ejecuta varias copias de un paso (×3) cuando quieras más de una versión',
        ],
      },
      parallel: {
        eyebrow: 'Ejecución',
        title: 'Ejecuciones en paralelo de verdad',
        body: 'Las ramas independientes se solapan en el tiempo en vez de turnarse detrás de un único trabajador.',
        points: [
          'Elige cuántos agentes pueden trabajar a la vez',
          'Un aviso cuando una ejecución llega al importe que fijas',
          'Los modelos y niveles de esfuerzo se comprueban con tu CLI instalada antes de que empiece ningún paso',
        ],
      },
      run: {
        eyebrow: 'Pantalla de ejecución',
        title: 'Una ejecución que se puede leer',
        body: 'El plan a la izquierda, y cada tarjeta indica el paso al que espera. A la derecha, lo que dijo cada agente, en orden, con la pregunta que detuvo la ejecución fijada donde vas a responderla.',
        points: [
          'Las preguntas, los comandos lanzados, la salida y el gasto van juntos',
          'Los resultados dicen qué pasó: hecho, fallido, detenido o no ejecutado',
          'Un agente principal puede hablar las cosas contigo; solo /run pone en marcha el trabajo',
        ],
      },
      auto: {
        eyebrow: 'Auto',
        title: 'De una frase a un resultado verificado',
        body: 'Dale un objetivo al Lead. Auto elige los roles y las habilidades que necesita, crea flujos normales para cada parte y sigue hasta que las comprobaciones y revisiones demuestran el trabajo. Es RigOne quien decide si un objetivo está verificado, no el Lead.',
        points: [
          'Cada decisión que te espera está en una sola lista: Needs you',
          'Revisión de diseño: acepta las capturas del tester o haz clic en un punto y di qué debe cambiar',
          'Espera a que pase la saturación del proveedor o un límite de uso, y sigue',
          'Skip permissions activa o desactiva el acceso completo para toda la ejecución de Auto',
        ],
      },
      agents: {
        eyebrow: 'Agentes',
        title: 'Agentes reutilizables',
        body: 'Define un rol una vez y reutilízalo en cada flujo. El rol entero (sus instrucciones, su modelo, su acceso a archivos) aparece en pantalla al abrirlo.',
        points: [
          'Proveedor, modelo, esfuerzo, tiempo límite y si puede acceder a la web',
          'Acceso a archivos desde “solo mirar” en adelante',
          'Servidores de herramientas (conexiones) y habilidades elegidos entre los que tiene el proyecto',
          'Importa una configuración de otro proyecto sin copiar secretos ni historial',
        ],
      },
      knowledge: {
        eyebrow: 'Conocimiento',
        title: 'Conocimiento por proyecto',
        body: 'Las notas y las habilidades viven en disco con el proyecto. Una nota que sugiere un agente solo llega a un prompt futuro después de que la apruebes.',
        points: [
          'Las notas van en cada prompt; las habilidades se usan cuando encajan con el trabajo',
          'Conjuntos de contexto con nombre a partir de texto, Markdown, imágenes y PDF',
          'Mira qué contexto usó realmente una ejecución',
        ],
      },
      checks: {
        eyebrow: 'Comprobaciones',
        title: 'Comprobaciones que RigOne ejecuta por sí mismo',
        body: 'Cuando un paso termina, RigOne ejecuta las comprobaciones; no le pregunta al agente si ha funcionado. Lo que dijo el agente, lo que encontraron las comprobaciones y lo que aprobaste tú nunca se confunden.',
        points: [
          '“No se ejecutó nada” es un resultado propio, nunca un aprobado',
          'Una segunda opinión de otro proveedor puede plantear dudas, pero nunca aprobar',
          'El mismo error dos veces detiene los reintentos',
        ],
      },
      branches: {
        eyebrow: 'Espacios de trabajo',
        title: 'Los cambios esperan en su propia rama',
        body: 'Cada paso trabaja en su propia copia de tu código, así que los agentes no se estorban entre sí. Cuando termina la ejecución, el trabajo espera en una rama de tu proyecto.',
        points: [
          'No se hace push de nada',
          'Nada llega a tu propia rama hasta que lo aceptas',
          'Un conflicto real indica las ramas donde se guarda el trabajo',
        ],
      },
      boards: {
        eyebrow: 'Boards',
        title: 'Tableros compartidos, cifrados en tu Mac',
        body: 'Tareas, comentarios y miembros en un tablero Kanban o por sprints. Inicia una tarea como flujo o como objetivo de Auto en una carpeta de este Mac, y su progreso aparece en el tablero para todos.',
        points: [
          'Cifrado y firmado en tu Mac; el servidor solo retransmite texto cifrado',
          'Invita a miembros como Editor o Viewer y aprueba cada dispositivo nuevo',
          'Funciona sin conexión y envía los cambios cuando vuelve la conexión',
          'La única parte de RigOne que necesita una cuenta de MonoOne',
        ],
      },
      triggers: {
        eyebrow: 'Disparadores',
        title: 'Disparadores y recuperación',
        body: 'Inicia un flujo cuando se te asigne una incidencia de Linear, que se comprueba cada 1, 5, 15 o 60 minutos. El trabajo interrumpido se recupera por la misma vía de inicio, no con un segundo motor.',
        points: [
          'Una incidencia inicia una ejecución, incluso tras un reinicio',
          'La clave de API se escribe una vez y no se vuelve a mostrar',
          'Borrar un disparador cancela lo que estaba esperando, a la vista',
        ],
      },
      lab: {
        eyebrow: 'Laboratorio',
        title: 'Prueba un agente con tu propio código',
        body: 'Elige un agente y RigOne redacta casos de prueba a partir de tu proyecto, para que veas si un cambio en ese agente mejoró el trabajo.',
        points: [
          'Los casos salen de tu código, no de un benchmark genérico',
          'Compara un agente antes y después de editarlo',
        ],
      },
      evidence: {
        eyebrow: 'Pruebas',
        title: 'Pruebas que sobreviven al terminal',
        body: 'Cada ejecución deja una carpeta que puedes abrir: lo que entregó cada paso, las respuestas completas, los registros y un archivo de resultados.',
        points: [
          'Recibos de ejecución y adjuntos completos para las respuestas largas',
          'Prueba de que los procesos cancelados ya no existen',
          'Un paquete de diagnóstico que copias con un clic',
        ],
      },
    },
  },
  compare: {
    eyebrow: 'Comparar',
    title: 'RigOne frente a Superset, Conductor, Nimbalyst, Codex y Cursor',
    lead: 'Varias herramientas buenas ejecutan agentes de código en paralelo. RigOne es para cuando el trabajo es una secuencia de pasos que quieres volver a ejecutar, con comprobaciones que ejecuta él mismo.',
    caption: 'RigOne comparado con Superset, Conductor, Nimbalyst, la app OpenAI Codex y Cursor Cloud Agents',
    capability: 'Capacidad',
    examples: ['App de escritorio, código disponible', 'App para Mac', 'App de escritorio, licencia MIT', 'La app de escritorio de OpenAI', 'Agentes en la nube de Cursor'],
    labels: { yes: 'Sí', partial: 'En parte', no: 'No', unknown: 'No indicado' },
    notStated: 'No se indica públicamente',
    rows: {
      local: {
        criterion: 'Funciona en tu propio Mac y tu carpeta',
        cells: ['', 'Local por defecto', 'Espacios en la nube con Pro', 'App de escritorio; sincronización para equipos', 'Más Codex Cloud', 'Solo máquinas en la nube'],
      },
      mix: {
        criterion: 'Claude Code y Codex en un mismo flujo',
        cells: ['', 'En paralelo, un agente por espacio', 'En paralelo, un agente por espacio', 'Sesiones en paralelo, un agente cada una', 'Solo Codex', 'El agente propio de Cursor'],
      },
      graph: {
        criterion: 'Flujo de varios pasos guardado que puedes volver a ejecutar',
        cells: ['Grafo visual', 'Plantillas y scripts; automatizaciones con Pro', 'Scripts de preparación y ejecución', 'Comandos con barra', 'Automatizaciones programadas', ''],
      },
      isolated: {
        criterion: 'Trabajo en paralelo en copias aisladas del código',
        cells: ['Un espacio de trabajo por paso', 'Un worktree por espacio', 'Un espacio por tarea', 'Worktree opcional por sesión', 'Worktrees', 'Una máquina por agente'],
      },
      checks: {
        criterion: 'Comprobaciones que ejecuta la herramienta, separadas de lo que afirma el agente',
        cells: ['«No se ejecutó nada» nunca es un aprobado', 'Scripts de preparación y ejecución', 'Muestra el estado de CI y del pull request', '', 'Scripts de preparación', 'El agente prueba su propio trabajo'],
      },
      budget: {
        criterion: 'Aviso de gasto y concurrencia por ejecución',
        cells: ['Un aviso por ejecución', '', '', '', 'Límites del plan', 'Un límite de gasto, sin límite de concurrencia'],
      },
      boards: {
        criterion: 'Tablero de tareas compartido y gestor de incidencias',
        cells: ['Tableros cifrados, disparadores de Linear', 'Linear y Slack con Pro', 'Incidencias de Linear y GitHub', 'Kanban de sesiones', 'Linear y GitHub', 'Linear, GitHub y Slack'],
      },
      platforms: {
        criterion: 'Plataformas',
        cells: ['macOS 13+, Apple Silicon', 'macOS; Linux experimental', 'macOS', 'macOS, Windows, Linux', 'macOS, Windows, Linux', 'Nube'],
      },
      price: {
        criterion: 'Precio',
        cells: ['Gratis; usa tu plan de Claude Code o Codex', 'Gratis; Pro 20 $ por usuario al mes', 'Gratis; Pro 50 $ al mes', 'Gratis, licencia MIT', 'Incluido en los planes de ChatGPT', 'Plan de pago de Cursor más precios de API'],
      },
    },
    footnoteHtml: 'A partir de la documentación pública y los precios de cada producto, revisados en octubre de 2026. Los productos cambian rápido; «No indicado» significa que no encontramos nada público. ¿Ves un error? <a href="{issues}">Avísanos</a>.',
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Preguntas frecuentes',
    leadHtml: 'Hay más en la <a href="{docs}">documentación</a>. ¿Falta algo? <a href="{issues}">Abre una incidencia</a>.',
    items: [
      {
        question: '¿Qué necesito para usar RigOne?',
        answer: 'Un Mac con Apple Silicon y macOS 13 o posterior, y al menos una CLI de agente instalada y con la sesión iniciada: Claude Code o Codex.',
      },
      {
        question: '¿RigOne envía mi código a algún sitio?',
        answer: 'RigOne se ejecuta en tu Mac y trabaja en tu carpeta. Los agentes que inicias son Claude Code y Codex, así que el código que leen va a sus proveedores exactamente igual que si los ejecutaras en un terminal. Boards, la única parte que necesita cuenta, cifra tareas y comentarios en tu Mac antes de que salgan de él.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'RigOne es gratis para descargar y usar. Las ejecuciones usan tu propio plan de Claude Code o Codex, y RigOne te avisa cuando una ejecución llega al importe que fijas.',
      },
      {
        question: '¿Un agente hará push a mi repositorio?',
        answer: 'No. Cada paso trabaja en su propia copia del código y el resultado espera en una rama de tu proyecto. No se hace push de nada, y nada llega a tu propia rama hasta que lo aceptas.',
      },
      {
        question: '¿Puedo usar solo Claude Code, o solo Codex?',
        answer: 'Sí. Basta con una CLI instalada y con la sesión iniciada. Combinar las dos es útil cuando quieres que un proveedor escriba y el otro dé una segunda opinión.',
      },
      {
        question: '¿La app está en mi idioma?',
        answer: 'Sí, en los mismos nueve idiomas que este sitio. Sigue el idioma de macOS y puedes elegir otro en Settings → Appearance. Lo que los agentes escriben en una ejecución sigue en inglés.',
      },
      {
        question: '¿Hay versión para Windows, Linux o Intel?',
        answer: 'Hoy no. RigOne está hecho para macOS 13 o posterior en Apple Silicon.',
      },
      {
        question: 'Usaba Loadout. ¿Qué pasa con mis datos?',
        answer: 'Loadout es el nombre anterior de RigOne. La versión 1.1.0 mueve tu biblioteca de ~/.loadout a ~/.rig-one en el primer arranque, y la carpeta .loadout/ de cada proyecto a .rig-one/ cuando lo abres. macOS ve RigOne como una app nueva, así que vuelve a pedir los permisos.',
      },
    ],
  },
  cta: {
    title: 'Pon tus agentes en un mismo lienzo',
    lead: 'Gratis para Mac con Apple Silicon. Firmado con Apple Developer ID y notarizado por Apple.',
    download: 'Descargar para macOS',
    docs: 'Leer la documentación',
    compare: 'Cómo se compara',
    note: 'Necesita Claude Code o Codex instalado y con la sesión iniciada.',
  },
  changelog: {
    eyebrow: 'Novedades',
    title: 'Qué ha cambiado, versión a versión',
    lead: 'Cada versión explica qué ha cambiado, qué hacer al actualizar y la suma de comprobación de la compilación firmada. Las compilaciones anteriores a la 1.1.0 se publicaron con el nombre Loadout.',
    download: 'Descargar la última',
    github: 'Versiones en GitHub',
    latest: 'Última',
    englishNote: 'Las notas de versión están escritas en inglés.',
    versions: 'Versiones',
    show: 'Mostrar versiones',
    all: 'Todas',
    featureReleases: 'Funciones',
    patchReleases: 'Correcciones',
    count: 'Versiones:',
    empty: 'No hay versiones de este tipo.',
    showOlder: 'Mostrar versiones anteriores',
    package: 'Paquete',
    copyChecksum: 'Copiar SHA-256',
    copied: 'Copiado',
  },
  docs: {
    eyebrow: 'Documentación',
    title: 'Cómo usar RigOne',
    lead: 'Instálalo, monta un flujo, ejecútalo sobre un proyecto y lee qué ha pasado.',
    tutorial: 'Empezar el tutorial paso a paso',
    onThisPage: 'En esta página',
    englishNote: 'La documentación está escrita en inglés.',
    helpHtml: '¿Algo poco claro o incorrecto? <a href="{issues}">Abre una incidencia</a>.',
  },
  footer: {
    tagline: 'macOS primero · local primero · tu propio código',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Sitio web bajo licencia <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
