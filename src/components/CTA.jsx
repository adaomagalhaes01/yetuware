import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Send } from "lucide-react";
import { Reveal, WordReveal } from "./shared";

const DOTS = [
  { left: "14%", top: "30%", size: 5, dur: 14 },
  { left: "82%", top: "20%", size: 6, dur: 18 },
  { left: "24%", top: "72%", size: 4, dur: 12 },
  { left: "74%", top: "68%", size: 7, dur: 16 },
  { left: "48%", top: "14%", size: 3, dur: 20 },
];

const PROJECT_TYPES = [
  "Website",
  "Aplicação web",
  "Aplicação mobile",
  "Sistema de software",
  "Consultoria",
];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-paper placeholder:text-paper/35 outline-none transition-colors duration-300 focus:border-lime/60";

export default function CTA() {
  const reduced = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    tipo: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="grain relative overflow-hidden bg-ink py-24 text-paper md:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 hidden h-96 w-96 rounded-full bg-violet/15 blur-[130px] md:block"
      >
        <motion.div
          className="h-full w-full rounded-full"
          animate={reduced ? undefined : { scale: [1, 1.25, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 hidden h-80 w-80 rounded-full bg-lime/10 blur-[120px] md:block"
      >
        <motion.div
          className="h-full w-full rounded-full"
          animate={reduced ? undefined : { scale: [1.2, 0.9, 1.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {DOTS.map((dot, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute hidden rounded-full bg-paper/25 md:block"
          style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
          animate={
            reduced ? undefined : { y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }
          }
          transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: i * 1.4 }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]">
            <WordReveal text="TEM UMA IDEIA?" delay={0.05} />
          </h2>
          <Reveal delay={0.3} className="mt-8">
            <p className="mx-auto max-w-md text-lg text-paper/60">
              Vamos transformá-la em algo que as pessoas possam usar.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="mt-16 md:mt-20">
          <div className="grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm lg:grid-cols-5">
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-2 lg:p-10">
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight">
                  Vamos conversar.
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
                  Preenche os teus dados e descreve o teu projecto. Entraremos em contacto
                  para dar o próximo passo.
                </p>
              </div>
              <div className="mt-10 space-y-3 text-xs uppercase tracking-[0.2em] text-paper/40">
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                  Websites
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                  Aplicações
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                  Software
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                  Consultoria
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 p-8 lg:col-span-3 lg:border-l lg:border-t-0 lg:p-10">
              {sent ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-violet text-white">
                    <Check className="h-7 w-7" />
                  </span>
                  <h4 className="mt-6 font-display text-xl font-extrabold uppercase tracking-tight">
                    Mensagem recebida
                  </h4>
                  <p className="mt-3 max-w-xs text-sm text-paper/60">
                    Obrigado pelo interesse. A equipa da Yetuware entrará em contacto contigo
                    em breve.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-violet transition-colors hover:text-violet-deep"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label htmlFor="nome" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/50">
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="O teu nome"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/50">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nome@empresa.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/50">
                      Empresa <span className="normal-case text-paper/30">(opcional)</span>
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      autoComplete="organization"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="tipo" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/50">
                      Tipo de projecto
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      required
                      value={form.tipo}
                      onChange={handleChange}
                      className={`${inputClass} ${form.tipo ? "" : "text-paper/35"}`}
                    >
                      <option value="" disabled>
                        Seleciona uma opção
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-ink text-paper">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="mensagem" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/50">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows="4"
                      required
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Fala-nos sobre a tua ideia..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-violet px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-violet-deep hover:shadow-[0_0_50px_-15px_rgba(139,44,245,0.6)] sm:w-auto"
                    >
                      Enviar mensagem
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.55} className="mt-12 text-center">
          <a
            href="#inicio"
            aria-label="Voltar ao topo"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-paper/40 transition-colors hover:text-violet"
          >
            Voltar ao topo
            <ArrowRight className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}