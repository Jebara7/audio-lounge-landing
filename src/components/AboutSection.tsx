import { motion } from "framer-motion";
import studioPeople from "@/assets/studio-people.jpg";

const values = [
  { title: "Professionele kwaliteit", desc: "Studio-level audio en video van topniveau." },
  { title: "Moeiteloze ervaring", desc: "Jij focust op het gesprek, wij doen de rest." },
  { title: "Creatieve sfeer", desc: "Een omgeving waarin jij comfortabel en zelfverzekerd bent." },
];

export function AboutSection() {
  return (
    <section id="over-ons" className="section-padding bg-card/30">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={studioPeople}
            alt="Podcast opname sessie in de studio"
            loading="lazy"
            width={1280}
            height={864}
            className="rounded-2xl glow-border"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Over The Audio Lounge
          </h2>
          <p className="mt-2 text-lg text-gradient font-medium">
            Waar sterke gesprekken professionele content worden.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The Audio Lounge is gebouwd voor creators, ondernemers en merken die professionele podcast content willen maken zonder technische zorgen. Wij combineren high-end apparatuur met een ontspannen en begeleide ervaring.
          </p>

          <div className="mt-10 space-y-6">
            {values.map((v, i) => (
              <div key={i} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
