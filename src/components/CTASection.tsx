import { motion } from "framer-motion";

const BOOKING_URL = "https://cal.com/your-link";

export function CTASection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-navy">
      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold tracking-tight text-white lg:text-5xl"
          >
            Klaar om jouw podcast op te nemen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-8 max-w-xl text-lg text-white/60 leading-relaxed"
          >
            Boek vandaag nog jouw sessie en start met professionele content.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              Boek een studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
