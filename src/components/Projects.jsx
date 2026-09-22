import { ArrowUpRight } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import { Chip, Reveal, WordReveal } from "./shared";

const PROJECTS = [
  {
    n: "01",
    eyebrow: "Mobilidade Estudantil",
    title: "TransFacil",
    desc: "Aplicação de mobilidade estudantil.",
    visual: "image",
  },
  {
    n: "02",
    eyebrow: "Ajuda Solidária",
    title: "Angola Unida",
    desc: "Plataforma de ajuda solidária.",
    visual: "violet",
  },
  {
    n: "03",
    eyebrow: "Mobilidade Urbana",
    title: "PilotoApp",
    desc: "Mobilidade urbana para mototáxi.",
    visual: "lime",
  },
];

function Arrow() {
  return (
    <span className="absolute right-6 top-6 grid h-12 w-12 translate-y-2 place-items-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
      <ArrowUpRight className="h-5 w-5" />
    </span>
  );
}

function Label({ project }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-9">
      <div className="mb-auto">
        <span className="font-display text-sm font-bold tracking-[0.3em] text-paper/30">
          {project.n}
        </span>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime">
          {project.eyebrow}
        </p>
        <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-paper md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-paper/65">{project.desc}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projetos"
      className="relative scroll-mt-24 border-t border-ink/[0.06] bg-paper py-24 text-ink md:py-32 lg:py-40"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Chip tone="light">Projetos</Chip>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(1.75rem,3.6vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.015em]">
              <WordReveal text="ALGUMAS COISAS" delay={0.05} />
              <br />
              <WordReveal
                text="QUE  CRIAMOS."
                accent="CRIAR."
                accentClass="text-violet"
                delay={0.16}
              />
            </h2>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="max-w-sm text-ink/55 lg:ml-auto lg:text-right">
              Produtos digitais desenvolvidos para resolver problemas reais de mobilidade,
              comunidade e cidade.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.n} delay={i * 0.1}>
              <a
                href="#contacto"
                aria-label={`${project.title} — ${project.desc}`}
                className="group relative block h-[360px] overflow-hidden rounded-xl lg:h-[400px]"
              >
                {project.visual === "image" && (
                  <>
                    <img
                      src={heroImg}
                      alt={`TransFacil — aplicação de mobilidade estudantil`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10 transition-opacity duration-500 group-hover:from-ink/95"
                    />
                  </>
                )}

                {project.visual === "violet" && (
                  <>
                    <div className="pattern-grid absolute inset-0 bg-gradient-to-br from-violet/90 via-[#4a0f9e] to-ink" />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-violet/25 blur-[90px] transition-all duration-700 group-hover:bg-violet/40"
                    />
                    <span
                      aria-hidden="true"
                      className="text-outline-white absolute -right-6 bottom-4 select-none font-display text-[8rem] font-black leading-none"
                    >
                      {project.n}
                    </span>
                  </>
                )}

                {project.visual === "lime" && (
                  <div className="pattern-grid-lime absolute inset-0 bg-ink">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-lime/10 blur-[90px] transition-all duration-700 group-hover:bg-lime/20"
                    />
                    <span
                      aria-hidden="true"
                      className="text-outline-lime absolute -right-6 -bottom-8 select-none font-display text-[9rem] font-black leading-none"
                    >
                      {project.n}
                    </span>
                  </div>
                )}

                <Arrow />
                <Label project={project} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}