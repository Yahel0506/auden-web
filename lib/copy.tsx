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
      'Auden es un reproductor para Android que junta YouTube Music y los archivos de tu teléfono. Fork de BitChord.',
  },
  ids: { fork: 'fork', dj: 'dj', lyrics: 'letras', library: 'biblioteca', download: 'descargar' },
  nav: {
    label: 'Principal',
    logo: 'Auden, inicio',
    fork: 'Fork de BitChord',
    lyrics: 'Letras',
    library: 'Biblioteca',
    download: 'Descargar',
  },
  hero: {
    h1a: 'Streaming y local.',
    h1b: 'Por fin juntos.',
    lede: (
      <>Pon cualquier canción de YouTube Music, trae tus playlists de Spotify y suma los archivos que ya tienes, todo en la misma app. Las playlists que armas aquí se quedan en tu teléfono, sin crear cuenta. Es un fork de {bitchord}, gratis y de código abierto.</>
    ),
    apk: 'Descargar APK',
    source: 'Código fuente',
    stage: 'Capturas de Auden en teléfonos Samsung Galaxy',
    altLeft: 'Reproductor con la portada a pantalla completa',
    altMid: 'Inicio de Auden con la tarjeta de Auden DJ',
    altRight: 'Letras sincronizadas palabra por palabra',
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
      { title: 'Biblioteca indexada', text: 'Géneros y carpetas desde tu almacenamiento' },
      { title: 'Playlists locales', text: 'Sin iniciar sesión en nada' },
      { title: 'Descargas ordenadas', text: 'Con etiquetas, portada y letra' },
      { title: 'Letras por canción', text: 'Proveedor y desfase a tu elección' },
      { title: 'Spotify', text: 'Importa tus playlists y álbumes' },
      { title: 'Auden DJ', text: 'Sets con voz, en español o inglés' },
    ],
  },
  tour: {
    label: 'Recorrido por la app',
    slides: [
      { h: 'Local y streaming en un mismo inicio.', p: 'Tu música del teléfono y lo que te recomienda YouTube Music, en la misma pantalla. Arriba, el DJ listo para armarte un set.', alt: 'Inicio híbrido' },
      { h: 'Se ve tan bien como suena.', p: 'La portada llena la pantalla y le da sus colores al reproductor. Abajo ves por dónde sale el audio y si llega intacto a tu DAC.', alt: 'Reproductor con la portada a pantalla completa' },
      { h: 'Elige de dónde sale la letra.', p: 'BetterLyrics, Musixmatch, LRCLIB, KuGou y más. Cada proveedor se guarda como una variante.', alt: 'Selector de proveedor de letras' },
      { h: 'Descarga, revisa, borra.', p: 'Todo desde el menú de la canción, sin buscar en carpetas. Ahí mismo cambias qué letra usa.', alt: 'Menú de canción con descarga y variantes de letra' },
      { h: 'Tu Spotify, en el teléfono.', p: 'Las playlists que guardas se sincronizan solas. Solo lectura: Auden nunca borra nada.', alt: 'Biblioteca de Spotify importada' },
    ],
  },
  dj: {
    h2a: 'Tu música ya tiene DJ.',
    h2b: 'Y habla español.',
    lede: 'Para cuando no sabes qué poner: el DJ arma sets con tu propia música y te explica con voz por qué suenan. Rescata canciones que tenías olvidadas y, si le pides algo que no tienes, lo busca en YouTube Music siguiendo tus gustos.',
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
    spotifyTitle: 'Spotify, importado',
    spotifyText: 'Acceso de solo lectura, con coincidencias que recuerda y que puedes corregir a mano.',
    syncTitle: 'Sincronizar playlists guardadas',
    syncText: '2 en este dispositivo',
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
      'Auden is an Android music player that brings YouTube Music and the files on your phone together in one app. A fork of BitChord.',
  },
  ids: { fork: 'fork', dj: 'dj', lyrics: 'lyrics', library: 'library', download: 'download' },
  nav: {
    label: 'Main',
    logo: 'Auden, home',
    fork: 'BitChord fork',
    lyrics: 'Lyrics',
    library: 'Library',
    download: 'Download',
  },
  hero: {
    h1a: 'Streaming and local music.',
    h1b: 'Finally together.',
    lede: (
      <>Play anything from YouTube Music, bring in your Spotify playlists and add the files you already own, all in one app. The playlists you build here stay on your phone, no account needed. It’s a fork of {bitchord}, free and open source.</>
    ),
    apk: 'Download APK',
    source: 'Source code',
    stage: 'Auden screenshots on Samsung Galaxy phones',
    altLeft: 'Player with full-screen cover art',
    altMid: 'Auden home screen with the Auden DJ card',
    altRight: 'Lyrics synced word by word',
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
      { title: 'Indexed library', text: 'Genres and folders, straight from your storage' },
      { title: 'Local playlists', text: 'No sign-in needed' },
      { title: 'Organized downloads', text: 'With tags, cover art and lyrics' },
      { title: 'Per-song lyrics', text: 'Your choice of provider and timing offset' },
      { title: 'Spotify', text: 'Import your playlists and albums' },
      { title: 'Auden DJ', text: 'Sets with a voice, in Spanish or English' },
    ],
  },
  tour: {
    label: 'App tour',
    slides: [
      { h: 'Local and streaming, one home screen.', p: 'The music on your phone and what YouTube Music recommends, on the same screen. At the top, the DJ is ready to build you a set.', alt: 'Hybrid home screen' },
      { h: 'It looks as good as it sounds.', p: 'The cover art fills the screen and lends its colors to the player. Below, you can see where the audio is playing and whether it reaches your DAC untouched.', alt: 'Player with full-screen cover art' },
      { h: 'Choose where your lyrics come from.', p: 'BetterLyrics, Musixmatch, LRCLIB, KuGou and more. Each provider is saved as its own variant.', alt: 'Lyrics provider picker' },
      { h: 'Download, check, delete.', p: 'All from the song’s menu, with no digging through folders. Right there you can also switch which lyrics it uses.', alt: 'Song menu with download and lyrics variants' },
      { h: 'Your Spotify, on your phone.', p: 'The playlists you save sync on their own. Read-only: Auden never deletes anything.', alt: 'Imported Spotify library' },
    ],
  },
  dj: {
    h2a: 'Your music already has a DJ.',
    h2b: 'And it talks.',
    lede: 'For when you don’t know what to play: the DJ builds sets from your own music and tells you, out loud, why they’re playing. It digs up songs you’d forgotten and, if you ask for something you don’t have, finds it on YouTube Music based on your taste.',
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
    spotifyTitle: 'Spotify, imported',
    spotifyText: 'Read-only access, with matches it remembers and that you can fix by hand.',
    syncTitle: 'Sync saved playlists',
    syncText: '2 on this device',
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
