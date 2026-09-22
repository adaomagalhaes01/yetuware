import { motion, useReducedMotion } from "framer-motion";
import { Reveal, WordReveal } from "./shared";

const WORDS = [
  { t: "DESIGN", style: { top: "10%", left: "8%" }, size: "text-4xl md:text-6xl", cls: "text-outline-white", o: 0.12, dur: 9 },
  { t: "CODE", style: { bottom: "18%", left: "10%" }, size: "text-3xl md:text-5xl", cls: "text-lime", o: 0.14, dur: 11 },
  { t: "STRATEGY", style: { top: "24%", right: "8%" }, size: "text-3xl md:text-5xl", cls: "text-outline-white", o: 0.12, dur: 10 },
  { t: "MOBILE", style: { bottom: "12%", right: "18%" }, size: "text-2xl md:text-4xl", cls: "text-violet", o: 0.18, dur: 8 },
  { t: "WEB", style: { top: "58%", left: "42%" }, size: "text-3xl md:text-5xl", cls: "text-outline-lime", o: 0.12, dur: 12 },
  { t: "DATA", style: { top: "14%", right: "34%" }, size: "text-2xl md:text-4xl", cls: "text-paper", o: 0.13, dur: 9 },
  { t: "INNOVATION", style: { bottom: "8%", right: "42%" }, size: "text-3xl md:text-6xl", cls: "text-outline-white", o: 0.12, dur: 13 },
];

export default function Statement() {
  const reduced = useReducedMotion();

  return (
    <section
      id="diferencial"
      className="grain relative overflow-hidden bg-moss py-24 text-paper md:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[140px]"
      />

      {WORDS.map((word, i) => (
        <motion.span
          key={word.t}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden select-none font-display font-black uppercase tracking-tight md:block ${word.size} ${word.cls}`}
          style={word.style}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: word.o, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
        >
          <motion.span
            className="inline-block"
            animate={
              reduced
                ? undefined
                : { y: [0, -14, 0], x: [0, i % 2 === 0 ? 8 : -8, 0] }
            }
            transition={{
              duration: word.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            {word.t}
          </motion.span>
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center md:px-10">
        <h2 className="font-display text-[clamp(2rem,4.6vw,3.8rem)] font-black uppercase leading-[0.98] tracking-[-0.02em]">
          <WordReveal text="TECNOLOGIA NÃO É" delay={0.05} />
          <br />
          <WordReveal text="APENAS CÓDIGO." delay={0.18} />
        </h2>
        <Reveal delay={0.4} className="mt-8">
          <p className="mx-auto max-w-md text-lg text-paper/60">
            É transformar problemas complexos em experiências simples.
          </p>
        </Reveal>
      </div>
    </section>
  );
}