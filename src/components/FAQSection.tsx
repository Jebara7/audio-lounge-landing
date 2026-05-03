import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Heb ik ervaring nodig?", a: "Nee, absoluut niet! Ons team begeleidt je volledig tijdens de opname. Of je nu voor het eerst een podcast opneemt of al ervaring hebt, wij zorgen voor een soepel verloop." },
  { q: "Hoe snel krijg ik mijn content?", a: "De ruwe opnames ontvang je binnen 24 uur. Kies je voor editing? Dan leveren wij je afgewerkte content binnen 5 werkdagen op." },
  { q: "Kan ik ook video opnemen?", a: "Ja! Onze Pro en Premium pakketten bevatten professionele multi-camera video-opnames, klaar om te uploaden naar YouTube of social media." },
  { q: "Mag ik gasten meenemen?", a: "Natuurlijk! Onze studio is geschikt voor maximaal 4 personen. Extra gasten? Neem dan contact met ons op voor de mogelijkheden." },
];

export function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-3xl font-bold tracking-tight text-foreground lg:text-5xl"
          >
            Veelgestelde vragen
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass-card glow-border overflow-hidden border-none">
                  <AccordionTrigger className="px-8 py-5 text-left text-lg font-medium text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-[#C2C2C2] leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
