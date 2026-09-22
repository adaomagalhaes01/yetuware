import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${breakpoint}px)`).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

export function Reveal({ children, className, delay = 0, y = 32 }) {
  const mobile = useMobile();
  const dist = mobile ? Math.min(y, 12) : y;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: dist }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: mobile ? 0.4 : 0.8, ease: EASE, delay: mobile ? Math.min(delay, 0.15) : delay }}
    >
      {children}
    </motion.div>
  );
}

export function Chip({ children, className = "", tone = "dark" }) {
  const tones = {
    dark: "border-white/15 text-paper/60",
    light: "border-ink/10 text-ink/60",
  };
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] ${tones[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
      {children}
    </span>
  );
}

export function WordReveal({
  text,
  accent,
  accentClass = "text-lime",
  className = "",
  delay = 0,
}) {
  const mobile = useMobile();
  const words = text.split(" ");
  return (
    <span className={className} role="text">
      {words.map((word, i) => {
        const base = word.replace(/[.,]/g, "").toUpperCase();
        const isAccent =
          accent !== undefined &&
          (base === accent.toUpperCase() ||
            (word.endsWith(".") &&
              word.slice(0, -1).toUpperCase() === accent.toUpperCase()));
        return (
          <span key={i}>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: mobile ? 14 : 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: mobile ? 0.35 : 0.7,
                ease: EASE,
                delay: mobile ? Math.min(delay + i * 0.03, 0.25) : delay + i * 0.055,
              }}
            >
              <span className={`inline-block ${isAccent ? accentClass : ""}`}>
                {word}
              </span>
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}

export function Img({
  src,
  alt,
  className = "",
  imgClassName = "",
  skeletonClassName = "bg-ink/10",
  loading = "lazy",
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 animate-pulse ${skeletonClassName}`}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={imgClassName}
        {...rest}
      />
    </div>
  );
}