import type { SiteContent } from './types'

export default {
  meta: {
    home: {
      title: 'RigOne — una sala de control de macOS para agentes de código',
      description: 'Monta un flujo para Claude Code y Codex en un lienzo, ejecútalo sobre un proyecto en tu Mac y mira cómo cada agente trabaja en paralelo. Gratis para Apple Silicon.',
    },
    features: {
      title: 'Funciones — RigOne',
      description: 'Flujos visuales, ejecuciones en paralelo de verdad, agentes reutilizables, comprobaciones que RigOne ejecuta por sí mismo, trabajo guardado en su propia rama, disparadores y pruebas que sobreviven al terminal.',
      breadcrumb: 'Funciones',
    },
    docs: {
      title: 'Documentación — RigOne',
      description: 'Instala RigOne, monta tu primer flujo, ejecútalo sobre un proyecto y lee los resultados. Conceptos, modelo de seguridad, archivos en disco y solución de problemas.',
      breadcrumb: 'Documentación',
    },
    compare: {
      title: 'RigOne frente a otras formas de ejecutar agentes de código',
      description: 'En qué se diferencia RigOne de una CLI de agente por sí sola, de las apps de escritorio con agentes en paralelo, de los gestores de sesiones de terminal y de los agentes de código en la nube, con sus ventajas e inconvenientes.',
      breadcrumb: 'Comparar',
    },
    changelog: {
      title: 'Novedades — RigOne',
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
    titleStrong: 'Un grafo',
    titleSoft: 'manda sobre el trabajo.',
    sub: 'RigOne es una sala de control nativa para agentes de código. Define un agente una vez, colócalo en el lienzo, conecta los pasos y ejecuta el grafo sobre un proyecto en tu Mac.',
    download: 'Descargar para macOS',
    docsCta: 'Leer la documentación',
    note: 'Gratis · macOS 13+ · firmado y notarizado',
    illustrationLabel: 'La pantalla de ejecución: el plan de un flujo a la izquierda y lo que dicen los agentes a la derecha.',
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
    lead: 'Tú decides qué se ejecuta, cuántos a la vez y cuánto puede costar.',
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
          'Fija lo máximo que puede gastar una ejecución antes de que empiece',
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
    title: 'RigOne y las otras formas de ejecutar agentes de código',
    lead: 'Hay buenas herramientas para ejecutar un agente, o muchos en paralelo. RigOne es para cuando el trabajo es una secuencia de pasos que quieres volver a ejecutar.',
    caption: 'RigOne frente a cuatro tipos de herramienta para ejecutar agentes de código',
    capability: 'Capacidad',
    columns: ['CLI de agente por sí sola', 'Apps de escritorio con agentes en paralelo', 'Gestores de sesiones de terminal', 'Agentes de código en la nube'],
    examples: ['Claude Code, Codex CLI', 'p. ej. Conductor', 'p. ej. Claude Squad', 'p. ej. Codex cloud, Copilot coding agent'],
    labels: { yes: 'Sí', partial: 'En parte', no: 'No', unknown: 'No indicado' },
    notStated: 'No se indica públicamente',
    rows: {
      local: {
        criterion: 'Funciona en tu propio Mac y tu carpeta',
        cells: ['', '', '', '', 'Se ejecuta en el entorno aislado del proveedor'],
      },
      mix: {
        criterion: 'Claude Code y Codex en un mismo flujo',
        cells: ['', 'Un proveedor por sesión', 'En paralelo, no en un mismo flujo', 'En paralelo, no en un mismo flujo', 'Un proveedor por servicio'],
      },
      graph: {
        criterion: 'Flujo de varios pasos guardado que puedes volver a ejecutar',
        cells: ['Grafo visual', 'Scripts, hooks y subagentes', '', '', ''],
      },
      isolated: {
        criterion: 'Trabajo en paralelo en copias aisladas del código',
        cells: ['Un espacio de trabajo por paso', 'Worktrees que gestionas tú', 'Un worktree por agente', 'Un worktree por agente', 'Un entorno aislado por tarea'],
      },
      checks: {
        criterion: 'Comprobaciones que ejecuta la herramienta, separadas de lo que afirma el agente',
        cells: ['“No se ejecutó nada” nunca es un aprobado', 'Con tus propios hooks', '', '', 'CI en la pull request'],
      },
      budget: {
        criterion: 'Límite de gasto y concurrencia por ejecución',
        cells: ['', 'Solo límites por sesión', '', '', 'Límites del plan'],
      },
      platforms: {
        criterion: 'Plataformas',
        cells: ['macOS 13+, Apple Silicon', 'macOS, Linux, Windows', 'macOS', 'macOS, Linux', 'Navegador'],
      },
      price: {
        criterion: 'Precio',
        cells: ['Gratis; usa tu plan de Claude Code o Codex', 'Incluido en el plan del proveedor', 'Consulta el sitio del producto', 'Gratis, código abierto', 'Incluido en el plan del proveedor'],
      },
    },
    footnoteHtml: 'Comparado por tipo de herramienta, a partir de la documentación pública, en octubre de 2026. Cada producto es distinto y cambia rápido. ¿Has encontrado un error? <a href="{issues}">Avísanos</a>.',
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
        answer: 'RigOne se ejecuta en tu Mac y trabaja en tu carpeta. Los agentes que inicias son Claude Code y Codex, así que el código que leen va a sus proveedores exactamente igual que si los ejecutaras en un terminal.',
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'RigOne se descarga y se usa gratis. Las ejecuciones usan tu propio plan de Claude Code o Codex, y puedes fijar lo máximo que puede gastar una ejecución antes de que empiece.',
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
  },
  docs: {
    eyebrow: 'Documentación',
    title: 'Cómo usar RigOne',
    lead: 'Instálalo, monta un flujo, ejecútalo sobre un proyecto y lee qué ha pasado.',
    onThisPage: 'En esta página',
    englishNote: 'La documentación está escrita en inglés.',
    helpHtml: '¿Algo poco claro o incorrecto? <a href="{issues}">Abre una incidencia</a>.',
  },
  footer: {
    tagline: 'macOS primero · local primero · tu propio código',
    legalHtml: '© {year} <a href="{org}">MonoOne</a>. Sitio web bajo licencia <a href="{license}">AGPL-3.0</a>.',
  },
} satisfies SiteContent
