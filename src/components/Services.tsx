import { motion } from "framer-motion";
import { Wrench, Sparkles, Shield, Clock, Gem, Zap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Expert Servicing",
    description: "Complete movement overhaul with meticulous inspection and regulation",
  },
  {
    icon: Clock,
    title: "Restoration",
    description: "Breathing new life into vintage and heritage timepieces",
  },
  {
    icon: Sparkles,
    title: "Polishing",
    description: "High-lustre finishing that restores factory brilliance",
  },
  {
    icon: Gem,
    title: "Plating",
    description: "Professional gold and rhodium plating services",
  },
  {
    icon: Zap,
    title: "Laser Welding",
    description: "Advanced precision repairs for complex cases and bracelets",
  },
  {
    icon: Shield,
    title: "Protection Film",
    description: "Custom-cut films preserving surfaces without compromising clarity",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-sans tracking-[0.3em] uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Comprehensive Watch Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From routine servicing to complex restorations, every timepiece receives 
            the attention it deserves from our master watchmakers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-charcoal-light border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
