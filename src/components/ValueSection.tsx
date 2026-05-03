import { motion } from "framer-motion";
import studioCloseup from "@/assets/studio-closeup.jpg";

const bullets = [
  "Professionele apparatuur inbegrepen",
  "Audio + video opname in één sessie",
  "Snelle oplevering en optionele editing",
];

export function ValueSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
              Alles wat je nodig hebt voor een professionele podcast
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#C2C2C2]">
              Bij The Audio Lounge bieden we een complete podcast ervaring. Van hoogwaardige audio en multi-camera video tot begeleiding en snelle oplevering — wij regelen alles.
            </p>
            <ul className="mt-10 space-y-5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-4 text-foreground text-lg">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={studioCloseup}
              alt="Professionele podcast studio setup"
              loading="lazy"
              width={1280}
              height={864}
              className="rounded-2xl glow-border w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
