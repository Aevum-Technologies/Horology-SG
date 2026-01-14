import { motion } from "framer-motion";

const brands = [
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Omega",
  "Cartier",
  "IWC",
  "TAG Heuer",
  "Tudor",
  "Breitling",
  "Zenith",
];

const TrustBrands = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground font-sans tracking-widest uppercase text-sm">
            Trusted to Service
          </p>
        </motion.div>

        {/* Brands Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...brands, ...brands].map((brand, index) => (
              <span
                key={index}
                className="text-muted-foreground/40 font-serif text-2xl md:text-3xl whitespace-nowrap hover:text-primary transition-colors"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBrands;
