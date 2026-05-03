import { motion } from "framer-motion";

const BOOKING_URL = "https://cal.com/your-link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        poster=""
      >
        <source src="https://www.podcastdock.nl/wp-content/uploads/2025/10/podcast-header.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />

      <div className="container-wide relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Neem je podcast op als een{" "}
            <span className="text-primary">professional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 lg:text-xl"
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
            <a href="#studio" className="inline-flex items-center justify-center rounded-[14px] border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white tracking-wide uppercase transition-all duration-300 hover:bg-white/10">
              Bekijk de studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
