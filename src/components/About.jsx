import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { Chip, Img, Reveal, WordReveal, useMobile } from "./shared";

const CAPS = [
  "Software personalizado",
  "Experiências digitais",
  "Produtos escaláveis",
  "Consultoria tecnológica",
];

export default function About() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const mobile = useMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [mobile || reduced ? 0 : 60, mobile || reduced ? 0 : -60]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [mobile || reduced ? 0 : -1.5, mobile || reduced ? 0 : 1.5]);

  return (
    <section
      id="sobre"
      className="grain relative scroll-mt-24 bg-ink py-24 text-paper md:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-violet/10 blur-[130px]"
      />

      <div ref={ref} className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <Chip>Sobre a Yetuware</Chip>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(1.75rem,3.6vw,3rem)] font-black uppercase leading-[1] tracking-[-0.015em]">
              <WordReveal text="CRIAMOS TECNOLOGIA" delay={0.05} />
              <br />
              <WordReveal
                text="COM PROPÓSITO."
                accent="PROPÓSITO"
                accentClass="font-serif font-normal italic normal-case tracking-normal text-violet"
                delay={0.16}
              />
            </h2>
            <Reveal delay={0.25}>
              <p className="mt-7 max-w-md text-paper/65 md:leading-relaxed">
                A Yetuware desenvolve soluções digitais que combinam tecnologia, design e
                estratégia para transformar ideias em produtos reais.
              </p>
            </Reveal>

            <Reveal delay={0.35} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CAPS.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors duration-300 hover:border-violet/50"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-xs font-bold text-violet"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-paper/85">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <motion.div
              style={{ y: yImg, rotate: rotateImg }}
              className="relative overflow-hidden rounded-xl border border-white/10"
            >
              <Img
                src={aboutImg}
                alt="Fotografia de ambiente de trabalho tecnológico da Yetuware"
                className="aspect-[4/5] w-full"
                imgClassName="h-full w-full object-cover object-center"
                skeletonClassName="bg-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-violet/10 to-transparent"
              />
            </motion.div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-8 h-44 w-44 rounded-full bg-violet/15 blur-[80px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}