import { ArrowUpRight, Code2, Compass, Globe, Smartphone } from "lucide-react";
import { Chip, Reveal, WordReveal } from "./shared";

const base = "group relative flex flex-col overflow-hidden rounded-xl p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.03]";

function CardHeader({ n, Icon }) {
  return (
    <div className="flex items-start justify-between">
      <span className="font-display text-sm font-bold tracking-[0.3em] opacity-50">{n}</span>
      <span className="grid h-12 w-12 place-items-center rounded-full border border-current/15 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
    </div>
  );
}

function CardBody({ title, desc }) {
  return (
    <div className="relative mt-6 flex flex-1 flex-col justify-end">
      <h3 className="font-display text-xl font-extrabold uppercase tracking-tight">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed opacity-65">{desc}</p>
      <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
        Explorar
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  );
}

function GhostNumber({ n }) {
  return (
<span
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-8 -right-2 select-none font-display text-[6rem] font-black leading-none opacity-0 transition-opacity duration-700 group-hover:opacity-[0.07]"
  >
      {n}
    </span>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-24 bg-paper py-24 text-ink md:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-violet-deep/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Chip tone="light">O que fazemos</Chip>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(1.75rem,3.6vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.015em]">
              <WordReveal text="CONSTRUÍMOS O DIGITAL" delay={0.05} />
              <br />
              <WordReveal text="QUE MOVE" delay={0.16} />
              {" "}
              <span className="inline-block">
                <WordReveal
                  text="NEGÓCIOS."
                  accent="NEGÓCIOS"
                  accentClass="text-violet"
                  delay={0.27}
                />
              </span>
            </h2>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="max-w-sm text-ink/55 lg:ml-auto lg:text-right">
              Da ideia ao produto final, criamos soluções digitais pensadas para pessoas,
              empresas e novos negócios.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-2 lg:gap-8">
          <Reveal className="h-full">
            <article className={`${base} min-h-[320px] border border-ink/[0.06] bg-white hover:border-ink/10 hover:shadow-2xl hover:shadow-ink/10`}>
              <GhostNumber n="01" />
              <CardHeader n="01" Icon={Globe} />
              <CardBody
                title="Websites"
                desc="Experiências digitais rápidas, modernas e desenhadas para representar marcas."
              />
            </article>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <article className={`${base} min-h-[320px] bg-lime hover:bg-lime-soft hover:shadow-[0_40px_80px_-40px_rgba(202,237,91,0.6)]`}>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-ink/15"
              />
              <GhostNumber n="02" />
              <CardHeader n="02" Icon={Smartphone} />
              <CardBody
                title="Aplicações"
                desc="Aplicações web e mobile desenvolvidas para resolver problemas reais."
              />
            </article>
          </Reveal>

          <Reveal delay={0.15} className="h-full">
            <article className={`${base} pattern-grid min-h-[320px] bg-ink text-paper hover:bg-moss hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]`}>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-lime/10 blur-[80px]"
              />
              <GhostNumber n="03" />
              <CardHeader n="03" Icon={Code2} />
              <CardBody
                title="Software"
                desc="Sistemas personalizados para automatizar e transformar processos."
              />
            </article>
          </Reveal>

          <Reveal delay={0.25} className="h-full">
            <article className={`${base} min-h-[320px] border border-ink/[0.06] bg-bone hover:border-ink/10 hover:bg-paper hover:shadow-2xl hover:shadow-ink/10`}>
              <GhostNumber n="04" />
              <CardHeader n="04" Icon={Compass} />
              <CardBody
                title="Consultoria"
                desc="Estratégia e tecnologia para transformar ideias em produtos digitais."
              />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}