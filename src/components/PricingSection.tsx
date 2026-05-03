import { motion } from "framer-motion";

const BOOKING_URL = "https://cal.com/your-link";

const plans = [
  {
    name: "Basic",
    price: "€99",
    features: ["1 uur studio", "Audio opname"],
    popular: false,
  },
  {
    name: "Pro",
    price: "€179",
    features: ["2 uur studio", "Audio + video"],
    popular: true,
  },
  {
    name: "Premium",
    price: "€299",
    features: ["3 uur studio", "Audio + video + editing"],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="prijzen" className="section-padding">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground lg:text-5xl"
        >
          Transparante prijzen
        </motion.h2>

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`glass-card relative flex flex-col transition-all duration-400 hover:-translate-y-2 ${
                plan.popular ? "ring-1 ring-primary/30 shadow-[0_0_40px_rgba(255,138,61,0.1)]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-semibold text-primary-foreground">
                  Populair
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-5 text-5xl font-bold text-foreground">{plan.price}</p>
              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#B3B3B3]">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 text-center ${plan.popular ? "btn-primary" : "btn-secondary"}`}
              >
                Boek een studio
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
