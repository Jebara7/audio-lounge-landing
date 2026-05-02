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
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Transparante prijzen
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? "glow-border ring-1 ring-primary/30" : "glow-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Populair
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-foreground">{plan.price}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                className={`mt-8 text-center ${plan.popular ? "btn-primary" : "btn-secondary"}`}
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
