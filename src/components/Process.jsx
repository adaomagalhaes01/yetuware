import { motion } from "framer-motion";
import { Chip, Reveal, WordReveal } from "./shared";

const STEPS = [
  { n: "01", t: "Descoberta", d: "Entendemos o problema, o utilizador e o contexto." },
  { n: "02", t: "Estratégia", d: "Definimos a direcção, a arquitectura e o caminho." },
  { n: "03", t: "Desenvolvimento", d: "Construímos, iteramos e refinamos em ciclos." },
  { n: "04", t: "Evolução", d: "Lançamos, medimos e fazemos crescer o produto." },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative scroll-mt-24 bg-paper py-24 text-ink md:py-32 lg:py-40"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div>
          <Reveal>
            <Chip tone="light">Processo</Chip>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,3.6vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.015em]">
            <WordReveal text="DA IDEIA" delay={0.05} />
            <br />
            <WordReveal
              text="AO PRODUTO."
              accent="PRODUTO."
              accentClass="font-serif font-normal italic normal-case tracking-normal text-violet"
              delay={0.16}
            />
          </h2>
        </div>

        <div className="relative mt-16 md:mt-24">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-8 top-4 w-px bg-ink/10 lg:hidden"
          >
            <motion.div
              className="w-px origin-top bg-violet"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: EASE }}
              style={{ height: "100%" }}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-ink/10 lg:block"
          >
            <motion.div
              className="h-px origin-left bg-violet"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: EASE }}
              style={{ width: "100%" }}
            />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12} className="relative pl-20 lg:pl-0">
                <div className="group">
                  <div className="absolute left-0 top-0 grid h-16 w-16 place-items-center rounded-full border-2 border-ink/15 bg-paper font-display text-sm font-bold transition-all duration-500 group-hover:border-ink lg:static">
                    <span className="relative">
                      {step.n}
                      <span
                        aria-hidden="true"
                        className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-violet"
                      />
                    </span>
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="font-display text-lg font-extrabold uppercase tracking-tight">
                      {step.t}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/55">{step.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}