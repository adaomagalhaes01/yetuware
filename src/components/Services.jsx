import { ArrowUpRight, Code2, Compass, Globe, Smartphone } from "lucide-react";
import websitesImg from "../assets/service-websites.jpg";
import appsImg from "../assets/service-apps.jpg";
import softwareImg from "../assets/service-software.jpg";
import consultingImg from "../assets/service-consulting.jpg";
import { Chip, Img, Reveal, WordReveal } from "./shared";

const SERVICES = [
  {
    n: "01",
    Icon: Globe,
    title: "Websites",
    desc: "Experiências digitais rápidas, modernas e desenhadas para representar marcas.",
    img: websitesImg,
    alt: "Website moderno num computador portátil",
    accent:
      "border border-ink/[0.06] bg-white hover:border-ink/10 hover:shadow-xl hover:shadow-ink/10",
  },
  {
    n: "02",
    Icon: Smartphone,
    title: "Aplicações",
    desc: "Aplicações web e mobile desenvolvidas para resolver problemas reais.",
    img: appsImg,
    alt: "Aplicação mobile em uso num smartphone",
    accent: "bg-lime hover:bg-lime-soft",
  },
  {
    n: "03",
    Icon: Code2,
    title: "Software",
    desc: "Sistemas personalizados para automatizar e transformar processos.",
    img: softwareImg,
    alt: "Código de software num ecrã",
    accent: "pattern-grid bg-ink text-paper hover:bg-moss",
  },
  {
    n: "04",
    Icon: Compass,
    title: "Consultoria",
    desc: "Estratégia e tecnologia para transformar ideias em produtos digitais.",
    img: consultingImg,
    alt: "Equipa a colaborar numa sessão de consultoria",
    accent: "border border-ink/[0.06] bg-bone hover:border-ink/10 hover:bg-paper",
  },
];

function CardMedia({ img, alt }) {
  return (
    <div className="relative h-28 shrink-0 overflow-hidden md:h-32">
      <Img
        src={img}
        alt={alt}
        className="absolute inset-0"
        imgClassName="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        skeletonClassName="bg-ink/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"
      />
    </div>
  );
}

function CardBody({ n, Icon, title, desc }) {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-5">
      <div className="flex items-start justify-between">
        <span className="font-display text-[11px] font-bold tracking-[0.3em] opacity-50 md:text-xs">{n}</span>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-current/15 transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
      <h3 className="mt-2.5 font-display text-[15px] font-extrabold uppercase tracking-tight md:text-base">
        {title}
      </h3>
      <p className="mt-1 max-w-xs text-[13px] leading-relaxed opacity-65">{desc}</p>
      <div className="mt-3 flex items-center gap-2 pt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">
        Explorar
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
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

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 md:mt-20 lg:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.n} delay={(i % 2) * 0.1} className="h-full">
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${service.accent}`}
              >
                <CardMedia img={service.img} alt={service.alt} />
                <CardBody
                  n={service.n}
                  Icon={service.Icon}
                  title={service.title}
                  desc={service.desc}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}