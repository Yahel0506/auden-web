import type { Lang } from '@/lib/copy';

const text = {
  es: {
    back: '← Auden',
    title: 'Política de privacidad',
    updated: 'Última actualización: 22 de noviembre de 2026',
    sections: [
      ['Qué es Auden', 'Auden es un reproductor de música para Android, independiente y de código abierto. No tiene cuentas propias ni servidores propios que reciban tus datos.'],
      ['Datos que se quedan en tu dispositivo', 'Tu biblioteca, listas de reproducción, historial, ajustes y fotos de perfil se guardan solo en tu dispositivo. Auden no incluye analíticas, publicidad ni informes de errores, y no vende ni comparte tus datos.'],
      ['Copia de seguridad en Google Drive', 'Si activas la copia de seguridad, Auden te pide iniciar sesión con Google y solicita un único permiso: acceso a la carpeta de datos de aplicación de tu Drive (drive.appdata). Es una carpeta oculta que solo Auden puede leer y escribir; Auden no puede ver ni modificar el resto de tus archivos. La copia contiene los datos de la app y se guarda únicamente en tu propio Drive. Puedes borrarla desde Ajustes de Google Drive o revocar el acceso en tu cuenta de Google en cualquier momento.'],
      ['Servicios de terceros', 'Para reproducir música, letras y portadas, la app se comunica directamente desde tu dispositivo con servicios que tú eliges usar, como YouTube Music, Spotify, Apple Music, Tidal, Last.fm o proveedores de letras. Esas conexiones se rigen por la política de privacidad de cada servicio. Auden es un cliente independiente y no está afiliado a ellos.'],
      ['Uso de los datos de Google', 'El uso que Auden hace de la información recibida de las APIs de Google se ajusta a la Política de datos de usuario de los servicios API de Google, incluidos los requisitos de uso limitado. Los datos de Google Drive solo se usan para crear y restaurar tu copia de seguridad; no se transfieren a terceros ni se usan para publicidad.'],
      ['Contacto', 'Para cualquier duda sobre privacidad escribe a yahelloppez@gmail.com o abre un issue en github.com/Yahel0506/Auden.'],
    ],
  },
  en: {
    back: '← Auden',
    title: 'Privacy policy',
    updated: 'Last updated: November 22, 2026',
    sections: [
      ['What Auden is', 'Auden is an independent, open-source music player for Android. It has no accounts of its own and no servers of its own that receive your data.'],
      ['Data that stays on your device', 'Your library, playlists, history, settings and profile photo are stored only on your device. Auden includes no analytics, advertising or crash reporting, and it does not sell or share your data.'],
      ['Google Drive backup', 'If you turn on backup, Auden asks you to sign in with Google and requests a single permission: access to your Drive\'s application data folder (drive.appdata). This is a hidden folder that only Auden can read and write; Auden cannot see or change any of your other files. The backup holds the app\'s data and is stored only in your own Drive. You can delete it from Google Drive settings or revoke access in your Google Account at any time.'],
      ['Third-party services', 'To play music, lyrics and artwork, the app talks directly from your device to services you choose to use, such as YouTube Music, Spotify, Apple Music, Tidal, Last.fm or lyrics providers. Those connections are governed by each service\'s own privacy policy. Auden is an independent client and is not affiliated with them.'],
      ['Use of Google user data', 'Auden\'s use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Google Drive data is used only to create and restore your backup; it is not transferred to third parties or used for advertising.'],
      ['Contact', 'For any privacy question write to yahelloppez@gmail.com or open an issue at github.com/Yahel0506/Auden.'],
    ],
  },
} as const;

export default function Privacy({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <main className="wrap" style={{ maxWidth: 720, margin: '0 auto', padding: '64px 20px 96px', color: 'var(--fg)', lineHeight: 1.65 }}>
      <a href={lang === 'en' ? '/en' : '/'} style={{ display: 'inline-block', marginBottom: 32 }}>{t.back}</a>
      <h1 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>{t.title}</h1>
      <p style={{ opacity: 0.6, marginBottom: 40 }}>{t.updated}</p>
      {t.sections.map(([h, p]) => (
        <section key={h} style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{h}</h2>
          <p style={{ opacity: 0.85 }}>{p}</p>
        </section>
      ))}
    </main>
  );
}
