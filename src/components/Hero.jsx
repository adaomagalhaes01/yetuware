import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import hero from "../assets/hero.jpg";
import { Reveal, WordReveal } from "./shared";

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 150]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.18, reduced ? 1.1 : 1.02]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.5]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });
  const imgX = useTransform(sx, (v) => v * -14);
  const imgY = useTransform([parallaxY, sy], ([p, m]) => p - m * 12);

  const handleMove = (e) => {
    if (reduced || window.innerWidth < 1024) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={handleMove}
      className="relative flex min-h-svh items-center overflow-hidden bg-ink scroll-mt-24 text-paper"
    >
      <motion.div aria-hidden="true" style={{ opacity: imgOpacity }} className="absolute inset-0">
        <motion.img
          src={hero}
          alt="Fotografia de ambiente de trabalho tecnológico — Yetuware"
          style={{ x: imgX, y: imgY, scale: imgScale }}
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-violet/25 blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-24 md:px-10 md:pb-24 md:pt-36">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(2rem,5.4vw,4.6rem)] font-black uppercase leading-[0.94] tracking-[-0.02em]">
            <WordReveal text="TECNOLOGIA QUE" delay={0.05} />
            <br />
            <WordReveal text="TRANSFORMA IDEIAS" delay={0.18} />
            <br />
            <WordReveal
              text="EM REALIDADE."
              accent="REALIDADE"
              accentClass="text-violet"
              delay={0.31}
            />
          </h1>

          <Reveal delay={0.55}>
            <p className="mt-6 max-w-md text-base text-paper/70 md:mt-7 md:text-lg md:leading-relaxed">
              Desenvolvemos experiências digitais, aplicações e soluções tecnológicas para
              empresas que querem evoluir.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-violet px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-violet-deep hover:shadow-[0_0_45px_-10px_rgba(139,44,245,0.6)]"
              >
                Falar com a Yetuware
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#servicos"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-paper/85 backdrop-blur-sm transition-colors duration-300 hover:border-violet hover:text-white"
              >
                Conhecer soluções
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.9} className="mt-14 md:mt-20">
          <div className="flex items-center justify-between border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.25em] text-paper/50 md:text-[11px]">
            <span>Soluções digitais para o futuro</span>
            <span className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
              Yetuware — Tecnologia Angolana
            </span>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-10 z-10 hidden flex-col items-center gap-3 xl:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper/50">Scroll</span>
        <div className="h-14 w-px overflow-hidden bg-white/20">
          <motion.div
            className="h-1/2 w-px bg-violet"
            animate={reduced ? undefined : { y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}