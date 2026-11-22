import type { ReactNode } from 'react';

/** Every piece of text on the landing, per language. `es` is the source of truth for the shape: `en` must match it. */

export type Lang = 'es' | 'en';

const BITCHORD = 'https://github.com/kushagrasinghx/BitChord';
const BITCHORD_DEV = 'https://github.com/kushagrasinghx';

const bitchord = <a href={BITCHORD} target="_blank" rel="noopener">BitChord</a>;
const bitchordDev = <a href={BITCHORD_DEV} target="_blank" rel="noopener">kushagrasinghx</a>;

const es = {
  lang: 'es' as Lang,
  meta: {
    title: 'Auden',
    description:
      'Auden es un reproductor para Android que junta YouTube Music, las bibliotecas de otros servicios y los archivos de tu teléfono. Fork de BitChord.',
  },
  ids: { fork: 'fork', dj: 'dj', lyrics: 'letras', library: 'biblioteca', download: 'descargar', services: 'servicios' },
  nav: {
    label: 'Principal',
    logo: 'Auden, inicio',
    services: 'Servicios',
    fork: 'Fork de BitChord',
    lyrics: 'Letras',
    library: 'Biblioteca',
    download: 'Descargar',
  },
  hero: {
    h1a: 'Streaming y local.',
    h1b: 'Por fin juntos.',
    lede: (
      <>Pon cualquier canción de YouTube Music, trae tu biblioteca de otros servicios y suma los archivos que ya tienes, todo en la misma app. Lo que armas aquí se queda en tu teléfono, sin necesidad de una cuenta. Es un fork de {bitchord}, libre y de código abierto.</>
    ),
    apk: 'Descargar APK',
    source: 'Código fuente',
    stage: 'Capturas de Auden en teléfonos Samsung Galaxy',
    altLeft: 'Reproductor con la portada a pantalla completa',
    altMid: 'Inicio de Auden con Top Picks y el DJ',
    altRight: 'Biblioteca de Auden con sus playlists y carpetas',
    logoAlt: 'Animación del logo de Auden',
  },
  services: {
    h2a: 'Tu música,',
    h2b: 'de donde esté.',
    lede: 'Trae tus Me gusta, playlists, álbumes y artistas desde otros servicios. Auden solo lee: hace su propia copia, no envía nada de vuelta y no cambia nada allí.',
    items: { ytm: 'Me gusta, playlists, álbumes y artistas', spotify: 'Me gusta, playlists, álbumes y artistas', apple: 'Biblioteca, playlists, álbumes y artistas', tidal: 'Favoritos, playlists, álbumes y artistas' },
    more: ['Enlaces de Spotify y Deezer', 'Archivos M3U, M3U8 y XSPF', 'Copias de Auden en JSON', 'La música de tu teléfono'],
  },
  fork: {
    h2a: 'Un fork,',
    h2b: 'con orgullo.',
    lede: (
      <>Auden es un fork de {bitchord}, el proyecto que creó {bitchordDev}. BitChord puso el encanto: todo YouTube Music, un diseño al estilo Apple Music y letras que se sincronizan palabra por palabra. Auden pone orden en tu música propia: <b>una biblioteca de verdad</b>, <b>descargas en carpetas</b>, playlists sin cuenta y <b>un DJ</b> que arma sets con lo que escuchas.</>
    ),
    bitchordIcon: 'Icono de BitChord',
    bitchordNote: 'El proyecto original. Reproductor, letras y streaming.',
    audenIcon: 'Icono de Auden',
    audenNote: 'Este fork. Todo lo anterior, más lo de abajo.',
    adds: [
      { title: 'Tu música, traída', text: 'YouTube Music, Spotify, Apple Music y Tidal' },
      { title: 'Playlists locales', text: 'Sin iniciar sesión en nada' },
      { title: 'Perfil propio', text: 'Tu nombre y tu foto, en tu teléfono' },
      { title: 'Letras por canción', text: 'Proveedor y desfase a tu elección' },
      { title: 'Descargas ordenadas', text: 'Con etiquetas, portada y letra' },
      { title: 'Auden DJ', text: 'Sets con voz que entienden lo que pides' },
    ],
  },
  tour: {
    label: 'Recorrido por la app',
    slides: [
      { h: 'Tu música y lo que te recomiendan, en un mismo inicio.', p: 'Tus playlists y descargas, listas hechas de lo que escuchas y, abajo, el DJ listo para armarte un set. Todo en la misma pantalla.', alt: 'Inicio de Auden con Top Picks y el DJ' },
      { h: 'Se ve tan bien como suena.', p: 'La portada llena la pantalla y le da sus colores al reproductor. Abajo ves por dónde sale el audio y si llega intacto a tu DAC.', alt: 'Reproductor con la portada a pantalla completa' },
      { h: 'Elige por dónde suena.', p: 'Audífonos, el teléfono, Cast o tu DAC, con el pipeline de audio a la vista. Y si quieres, escucha junto a tus amigos.', alt: 'Menú de salida de audio con Escuchar juntos' },
      { h: 'Tu semana, tu mes, tu año.', p: 'Replay cuenta lo que escuchaste: tus artistas, canciones y álbumes más reproducidos, por semana, mes, año o desde siempre.', alt: 'Replay con los minutos escuchados esta semana' },
      { h: 'Tu música, de otros servicios.', p: 'Trae tus Me gusta, playlists, álbumes y artistas de YouTube Music, Spotify, Apple Music y Tidal. Solo lectura: Auden nunca borra ni envía nada.', alt: 'Pantalla Transferir tu música con los servicios disponibles' },
    ],
  },
  dj: {
    h2a: 'Tu música ya tiene DJ.',
    h2b: 'Y habla español.',
    lede: 'Para cuando no sabes qué poner: el DJ arma sets con tu propia música y te explica con voz por qué suenan. Entiende lo que le pides con tus palabras —artistas, canciones, épocas, lo que quieres dejar fuera—, funciona aunque apenas hayas escuchado nada y retoma donde lo dejaste si cierras la app.',
    chips: ['Habla español o inglés', 'Pídele con tus palabras', 'Rescata canciones olvidadas'],
    alt: 'Pantalla de Auden DJ hablando en español',
  },
  lyrics: {
    h2a: 'Cada palabra,',
    h2b: 'a su tiempo.',
    lede: 'El barrido avanza dentro de cada palabra, la palabra que suena se levanta un poco y las notas largas crecen letra por letra con su propio brillo. Las demás líneas se apartan con desenfoque.',
    providers: 'Proveedores de letras',
    hint: 'El teléfono de la derecha no es un vídeo: es el panel de letras de Auden reconstruido con sus mismas curvas y tiempos de animación. Toca una línea para saltar a ella.',
    cover: 'Portada de Nevermind',
    canvas: 'Letra sincronizada de Lounge Act',
    credit: 'Letra de BetterLyrics',
    back: 'Volver al principio',
    pause: 'Pausar',
    play: 'Reproducir',
    next: 'Siguiente línea',
  },
  library: {
    h2a: 'Tus archivos, en orden.',
    h2b: 'Sin cuenta.',
    lede: 'Un indexador incremental llena la base de datos desde MediaStore y las carpetas que elijas. Lo que descargas acaba en una carpeta que abre cualquier gestor de archivos.',
    spotifyTitle: 'Tus otras bibliotecas, importadas',
    spotifyText: 'Solo lectura: Auden hace su propia copia y recuerda las coincidencias, que puedes corregir a mano.',
    syncTitle: 'Actualizar una playlist',
    syncText: 'Solo cuando tú lo pides',
    templateTitle: 'Descargas con plantilla',
    templateText: 'Portada y letra al lado de cada canción.',
    queueTitle: 'Una cola que no se rinde',
    queueText: 'Reintentos con espera, pausa y concurrencia ajustable. Sobrevive a reinicios.',
    queueStatus: 'Nsqk · WEBM · 2:50 · Descargando',
    playlistsTitle: 'Playlists que salen contigo',
    playlistsText: 'Importa y exporta, y haz copia de toda la biblioteca local.',
    backup: 'Copia de seguridad',
    tagsTitle: 'Etiquetas completas',
    tagsText: 'Artista del álbum, pista, disco, año y enlace de origen escritos en cada archivo. Separa artistas múltiples y enlaza lo que ya tienes con lo que escuchas en streaming.',
  },
  platforms: {
    h2a: 'Del bolsillo',
    h2b: 'a la tele.',
    items: [
      { name: 'Android', text: 'La app principal, con todo.' },
      { name: 'Android TV', text: 'Interfaz pensada para el control remoto.' },
      { name: 'Wear OS', text: 'Mando a distancia y altavoz en la muñeca.' },
      { name: 'Web', text: 'Reproductor en React y extensión de navegador.' },
    ],
  },
  download: {
    h2: 'Llévatelo.',
    lede: 'Siempre la última versión publicada, firmada y directa desde GitHub Releases. Después, la app te avisa sola cuando sale otra.',
    button: 'Descargar para Android',
    buttonNote: 'Última versión · APK universal',
    variants: [
      { name: 'arm64-v8a', text: 'La mayoría de teléfonos actuales, más ligero' },
      { name: 'Android TV', text: 'Para Google TV y Android TV' },
      { name: 'Wear OS', text: 'Para el reloj' },
      { name: 'Todas las versiones', text: 'Notas de la versión, armeabi-v7a y x86_64' },
    ],
    note: 'Para instalarlo, activa «Instalar apps desconocidas» en la app con la que lo descargues. Los hashes SHA-256 de cada archivo están en la página de la versión en GitHub.',
  },
  footer: {
    legal: 'Auden es un cliente de terceros, independiente y hecho por la comunidad. No está afiliado, respaldado ni conectado con Google, YouTube, YouTube Music ni Spotify. Úsalo bajo tu propio criterio.',
    credits: (
      <>Fork de {bitchord} por kushagrasinghx. Distribuido bajo GPL-3.0. Portada de <i>Nevermind</i> y fragmento de «Lounge Act» © Nirvana / DGC, mostrados como ejemplo de uso.</>
    ),
    repo: 'Repositorio',
    contribute: 'Contribuir',
    license: 'Licencia',
    madeBy: 'Hecho y mantenido por',
    switchTo: { label: 'English', href: '/en', lang: 'en' },
  },
  js: {
    play: 'Reproducir',
    pause: 'Pausar',
    djLines: [
      ['español.zip', 'Qué horas. Bueno, que la música te haga compañía. De español.zip, tu playlist, va un poco. Empieza DANCE CRIP, la de Trueno.'],
      ['Para la noche', 'Llevas tres días volviendo a lo mismo, así que hoy bajamos el ritmo. Arrancamos con algo que guardaste hace tiempo y casi no pones.'],
      ['Feeling Blue', 'Esto va para cuando no quieres hablar con nadie. Canciones tristes, pero de las buenas. Primero, una que ya te sabes de memoria.'],
    ] as [string, string][],
  },
};

export type Copy = typeof es;

const en: Copy = {
  lang: 'en',
  meta: {
    title: 'Auden',
    description:
      'Auden is an Android music player that brings YouTube Music, your libraries from other services and the files on your phone together in one app. A fork of BitChord.',
  },
  ids: { fork: 'fork', dj: 'dj', lyrics: 'lyrics', library: 'library', download: 'download', services: 'services' },
  nav: {
    label: 'Main',
    logo: 'Auden, home',
    services: 'Services',
    fork: 'BitChord fork',
    lyrics: 'Lyrics',
    library: 'Library',
    download: 'Download',
  },
  hero: {
    h1a: 'Streaming and local music.',
    h1b: 'Finally together.',
    lede: (
      <>Play anything from YouTube Music, bring in your library from other services and add the files you already own, all in one app. What you build here stays on your phone, no account needed. It’s a fork of {bitchord}, free and open source.</>
    ),
    apk: 'Download APK',
    source: 'Source code',
    stage: 'Auden screenshots on Samsung Galaxy phones',
    altLeft: 'Player with full-screen cover art',
    altMid: 'Auden home screen with Top Picks and the DJ',
    altRight: 'Auden’s Library with its playlists and folders',
    logoAlt: 'The Auden logo animation',
  },
  services: {
    h2a: 'Your music,',
    h2b: 'wherever it is.',
    lede: 'Bring your likes, playlists, albums and artists from other services. Auden only reads: it makes its own copy, sends nothing back and changes nothing there.',
    items: { ytm: 'Likes, playlists, albums and artists', spotify: 'Likes, playlists, albums and artists', apple: 'Library, playlists, albums and artists', tidal: 'Favorites, playlists, albums and artists' },
    more: ['Spotify and Deezer links', 'M3U, M3U8 and XSPF files', 'Auden JSON copies', 'The music on your phone'],
  },
  fork: {
    h2a: 'A fork,',
    h2b: 'and proud of it.',
    lede: (
      <>Auden is a fork of {bitchord}, the project created by {bitchordDev}. BitChord brought the charm: all of YouTube Music, an Apple Music–style design and lyrics synced word by word. Auden brings order to the music you own: <b>a real library</b>, <b>downloads in proper folders</b>, playlists with no account and <b>a DJ</b> that builds sets from what you listen to.</>
    ),
    bitchordIcon: 'BitChord icon',
    bitchordNote: 'The original project. Player, lyrics and streaming.',
    audenIcon: 'Auden icon',
    audenNote: 'This fork. Everything above, plus what’s below.',
    adds: [
      { title: 'Your music, brought over', text: 'YouTube Music, Spotify, Apple Music and Tidal' },
      { title: 'Local playlists', text: 'No sign-in needed' },
      { title: 'Your own profile', text: 'Your name and photo, on your phone' },
      { title: 'Lyrics per song', text: 'Provider and offset, your choice' },
      { title: 'Organized downloads', text: 'With tags, cover art and lyrics' },
      { title: 'Auden DJ', text: 'Spoken sets that understand what you ask' },
    ],
  },
  tour: {
    label: 'App tour',
    slides: [
      { h: 'Your music and what’s recommended, one home screen.', p: 'Your playlists and downloads, lists made from what you play and, below, the DJ ready to build you a set. All on the same screen.', alt: 'Auden home screen with Top Picks and the DJ' },
      { h: 'It looks as good as it sounds.', p: 'The cover art fills the screen and lends its colors to the player. Below, you can see where the audio is going and whether it reaches your DAC intact.', alt: 'Player with full-screen cover art' },
      { h: 'Choose where it plays.', p: 'Headphones, the phone, Cast or your DAC, with the audio pipeline in view. And, if you want, listen together with friends.', alt: 'Audio output menu with Listen together' },
      { h: 'Your week, your month, your year.', p: 'Replay counts what you listened to: your most played artists, songs and albums, by week, month, year or all time.', alt: 'Replay with the minutes listened this week' },
      { h: 'Your music, from other services.', p: 'Bring your likes, playlists, albums and artists from YouTube Music, Spotify, Apple Music and Tidal. Read-only: Auden never deletes or sends anything.', alt: 'Transfer your music screen with the available services' },
    ],
  },
  dj: {
    h2a: 'Your music already has a DJ.',
    h2b: 'And it talks.',
    lede: 'For when you don’t know what to play: the DJ builds sets from your own music and tells you, out loud, why they sound the way they do. It understands what you ask in your own words — artists, songs, eras, what to leave out — works even if you have hardly listened to anything yet, and picks up where it was if you close the app.',
    chips: ['Speaks English or Spanish', 'Ask in your own words', 'Rediscover forgotten songs'],
    alt: 'Auden DJ screen, speaking out loud',
  },
  lyrics: {
    h2a: 'Every word,',
    h2b: 'right on time.',
    lede: 'The sweep moves through each word, the word being sung lifts a little, and long notes grow letter by letter with their own glow. The other lines step back behind a blur.',
    providers: 'Lyrics providers',
    hint: 'The phone on the right isn’t a video: it’s Auden’s lyrics panel, rebuilt with the same curves and animation timings. Tap a line to jump to it.',
    cover: 'Nevermind cover art',
    canvas: 'Synced lyrics for Lounge Act',
    credit: 'Lyrics by BetterLyrics',
    back: 'Back to the start',
    pause: 'Pause',
    play: 'Play',
    next: 'Next line',
  },
  library: {
    h2a: 'Your files, organized.',
    h2b: 'No account.',
    lede: 'An incremental indexer fills the database from MediaStore and any folders you choose. What you download ends up in a folder that any file manager can open.',
    spotifyTitle: 'Your other libraries, imported',
    spotifyText: 'Read-only: Auden makes its own copy and remembers the matches, which you can fix by hand.',
    syncTitle: 'Update a playlist',
    syncText: 'Only when you ask',
    templateTitle: 'Templated downloads',
    templateText: 'Cover art and lyrics next to every song.',
    queueTitle: 'A queue that doesn’t give up',
    queueText: 'Retries with back-off, pause and adjustable concurrency. Survives restarts.',
    queueStatus: 'Nsqk · WEBM · 2:50 · Downloading',
    playlistsTitle: 'Playlists that go with you',
    playlistsText: 'Import and export them, and back up your whole local library.',
    backup: 'Backup',
    tagsTitle: 'Complete tags',
    tagsText: 'Album artist, track, disc, year and source link written into every file. It splits multiple artists and links what you already own to what you stream.',
  },
  platforms: {
    h2a: 'From your pocket',
    h2b: 'to your TV.',
    items: [
      { name: 'Android', text: 'The main app, with everything.' },
      { name: 'Android TV', text: 'An interface built for the remote.' },
      { name: 'Wear OS', text: 'Remote control and speaker on your wrist.' },
      { name: 'Web', text: 'React player and browser extension.' },
    ],
  },
  download: {
    h2: 'Take it with you.',
    lede: 'Always the latest release, signed and straight from GitHub Releases. After that, the app lets you know on its own when a new one is out.',
    button: 'Download for Android',
    buttonNote: 'Latest version · Universal APK',
    variants: [
      { name: 'arm64-v8a', text: 'Most current phones, and lighter' },
      { name: 'Android TV', text: 'For Google TV and Android TV' },
      { name: 'Wear OS', text: 'For your watch' },
      { name: 'All releases', text: 'Release notes, armeabi-v7a and x86_64' },
    ],
    note: 'To install it, turn on “Install unknown apps” for the app you download it with. Each file’s SHA-256 hash is on the release page on GitHub.',
  },
  footer: {
    legal: 'Auden is an independent, community-made third-party client. It is not affiliated with, endorsed by or connected to Google, YouTube, YouTube Music or Spotify. Use it at your own discretion.',
    credits: (
      <>A fork of {bitchord} by kushagrasinghx. Distributed under GPL-3.0. Cover art of <i>Nevermind</i> and an excerpt of “Lounge Act” © Nirvana / DGC, shown as a usage example.</>
    ),
    repo: 'Repository',
    contribute: 'Contribute',
    license: 'License',
    madeBy: 'Made and maintained by',
    switchTo: { label: 'Español', href: '/', lang: 'es' },
  },
  js: {
    play: 'Play',
    pause: 'Pause',
    djLines: [
      ['español.zip', 'Look at the time. Let the music keep you company. A bit of español.zip, your playlist, starting with DANCE CRIP by Trueno.'],
      ['For tonight', 'You’ve gone back to the same thing for three days, so today we slow it down. We’ll start with something you saved a while ago and hardly ever play.'],
      ['Feeling Blue', 'This one’s for when you don’t feel like talking to anyone. Sad songs, but the good kind. First, one you already know by heart.'],
    ],
  },
};

export const copy: Record<Lang, Copy> = { es, en };
