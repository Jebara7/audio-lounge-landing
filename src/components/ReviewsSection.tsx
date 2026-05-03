import { motion } from "framer-motion";

const reviews = [
  { text: "Super professionele ervaring. Alles was tot in de puntjes geregeld.", author: "Martijn V." },
  { text: "Top kwaliteit audio en video. We hoefden nergens over na te denken.", author: "Lisa D." },
  { text: "Alles werd voor ons geregeld. De sfeer in de studio is geweldig.", author: "Rick B." },
];

export function ReviewsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground lg:text-5xl"
        >
          Wat klanten zeggen
        </motion.h2>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card glow-border"
            >
              <div className="mb-5 flex gap-1 text-primary">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-foreground italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-5 text-sm font-medium text-muted-foreground">— {r.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
