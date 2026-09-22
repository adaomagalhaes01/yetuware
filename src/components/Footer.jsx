import logo from "../assets/logo_yetuware.png";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37a4 4 0 1 1-7.9 1.26 4 4 0 0 1 7.9-1.26z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

const COLUMNS = [
  { title: "Empresa", links: [["Início", "#inicio"], ["Sobre", "#sobre"]] },
  { title: "Serviços", links: [["O que fazemos", "#servicos"], ["Projetos", "#projetos"]] },
  { title: "Contacto", links: [["Começar um projeto", "#contacto"], ["Processo", "#processo"]] },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink text-paper">
      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-20 md:px-10 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="#inicio" className="inline-block" aria-label="Yetuware — página inicial">
              <img src={logo} alt="Logo Yetuware" className="h-14 w-auto" />
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/55">
              Digital products. Technology. Possibilities.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-paper/60 transition-all duration-300 hover:border-violet/60 hover:text-violet"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-16">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-paper/40">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="relative text-sm text-paper/70 transition-colors duration-300 hover:text-violet"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-paper/40 md:flex-row">
          <p>© 2026 Yetuware. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">Digital products · Technology · Possibilities</p>
        </div>
      </div>
    </footer>
  );
}