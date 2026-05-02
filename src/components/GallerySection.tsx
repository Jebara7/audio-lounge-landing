import { motion } from "framer-motion";
import studioWide from "@/assets/studio-wide.jpg";
import studioMic from "@/assets/studio-mic.jpg";
import studioBts from "@/assets/studio-bts.jpg";
import studioCloseup from "@/assets/studio-closeup.jpg";

const images = [
  { src: studioWide, alt: "Studio overzicht", span: "sm:col-span-2" },
  { src: studioMic, alt: "Close-up microfoon", span: "" },
  { src: studioBts, alt: "Behind the scenes", span: "" },
  { src: studioCloseup, alt: "Studio setup", span: "sm:col-span-2" },
];

export function GallerySection() {
  return (
    <section id="studio" className="section-padding bg-card/30">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Bekijk de studio
        </motion.h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1280}
                height={864}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-72"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
