import { motion } from "framer-motion";

const BOOKING_URL = "https://cal.com/your-link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/70 to-[#111111]/40" />

      <div className="container-wide relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Neem je podcast op als een{" "}
            <span className="text-gradient">professional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-secondary-foreground lg:text-xl"
          >
            High-end podcast studio met professionele audio, video en volledige begeleiding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              Boek een studio
            </a>
            <a href="#studio" className="btn-secondary text-base">
              Bekijk de studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
