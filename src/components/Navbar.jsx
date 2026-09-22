import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo_yetuware.png";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 text-ink shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-paper"
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-10"
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Yetuware — página inicial">
          <img src={logo} alt="Logo Yetuware" className="h-12 w-auto md:h-14" />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-ink/75 hover:text-ink" : "text-paper/70 hover:text-paper"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="group hidden items-center gap-2 rounded-xl bg-violet px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-deep lg:inline-flex"
          >
            Começar um projeto
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
            className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden ${
              scrolled ? "border-ink/15 text-ink hover:border-ink/40" : "border-white/15 text-paper hover:border-white/35"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              id="menu-mobile"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[100] flex flex-col bg-ink lg:hidden"
            >
            <div className="flex shrink-0 items-center justify-between px-6 pt-[max(1.25rem,env(safe-area-inset-top))] md:px-10">
              <img src={logo} alt="Logo Yetuware" className="h-14 w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                autoFocus
                aria-label="Fechar menu"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-paper transition-colors hover:border-white/35"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 pb-6 pt-6 md:px-10">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-3.5 transition-colors"
                  >
                    <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-paper transition-colors group-hover:text-violet">
                      {link.label}
                    </span>
                    <span className="text-xs font-bold text-violet">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 px-6 pb-8 pt-4 md:px-10"
              style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
            >
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl bg-violet px-6 py-4 font-semibold text-white transition-colors hover:bg-violet-deep"
              >
                Começar um projeto
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
        , document.body
      )}
    </motion.header>
  );
}