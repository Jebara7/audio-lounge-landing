import { motion } from "framer-motion";
import studioWide from "@/assets/studio-wide.jpg";
import studioMic from "@/assets/studio-mic.jpg";
import studioBts from "@/assets/studio-bts.jpg";
import studioCloseup from "@/assets/studio-closeup.jpg";

const images = [
  { src: studioWide, alt: "Studio overzicht", span: "lg:col-span-2" },
  { src: studioMic, alt: "Close-up microfoon", span: "" },
  { src: studioBts, alt: "Behind the scenes", span: "" },
  { src: studioCloseup, alt: "Studio setup", span: "lg:col-span-2" },
];

export function GallerySection() {
  return (
    <section id="studio" className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground lg:text-5xl"
        >
          Bekijk de studio
        </motion.h2>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`overflow-hidden rounded-2xl shadow-md ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1280}
                height={864}
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-80"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
