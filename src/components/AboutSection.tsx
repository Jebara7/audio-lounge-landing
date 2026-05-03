import { motion } from "framer-motion";
import studioPeople from "@/assets/studio-people.jpg";

const values = [
  { title: "Professionele kwaliteit", desc: "Studio-level audio en video van topniveau." },
  { title: "Moeiteloze ervaring", desc: "Jij focust op het gesprek, wij doen de rest." },
  { title: "Creatieve sfeer", desc: "Een omgeving waarin jij comfortabel en zelfverzekerd bent." },
];

export function AboutSection() {
  return (
    <section id="over-ons" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={studioPeople}
              alt="Podcast opname sessie in de studio"
              loading="lazy"
              width={1280}
              height={864}
              className="rounded-2xl glow-border w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
              Over The Audio Lounge
            </h2>
            <p className="mt-3 text-xl text-gradient font-medium">
              Waar sterke gesprekken professionele content worden.
            </p>
            <p className="mt-8 text-lg text-[#B3B3B3] leading-relaxed">
              The Audio Lounge is gebouwd voor creators, ondernemers en merken die professionele podcast content willen maken zonder technische zorgen. Wij combineren high-end apparatuur met een ontspannen en begeleide ervaring.
            </p>

            <div className="mt-12 space-y-7">
              {values.map((v, i) => (
                <div key={i} className="flex gap-5">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-base font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-[#B3B3B3]">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
