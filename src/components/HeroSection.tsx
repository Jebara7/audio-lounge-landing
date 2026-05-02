import { motion } from "framer-motion";

const BOOKING_URL = "https://cal.com/your-link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster=""
      >
        <source src="https://www.podcastdock.nl/wp-content/uploads/2025/10/podcast-header.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Neem je podcast op als een{" "}
          <span className="text-gradient">professional</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          High-end podcast studio met professionele audio, video en volledige begeleiding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Boek een studio
          </a>
          <a href="#studio" className="btn-secondary">
            Bekijk de studio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
