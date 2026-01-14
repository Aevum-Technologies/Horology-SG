import { motion } from "framer-motion";
import workshopImage from "@/assets/workshop.png";
import teamImage from "@/assets/team.jpeg";
import movementImage from "@/assets/movement.jpeg";
import partsImage from "@/assets/parts.jpeg";

const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
            Our Atelier
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Where Precision Meets Passion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Step inside our workshop—a sanctuary where traditional craftsmanship meets
            modern technology to deliver exceptional results.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={workshopImage}
              alt="Singapore Horology Workshop"
              className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary text-sm tracking-widest uppercase mb-1">Our Space</p>
              <h3 className="text-xl font-serif">The Workshop</h3>
            </div>
          </motion.div>

          {/* Movement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={movementImage}
              alt="Watch movement craftsmanship"
              className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary text-sm tracking-widest uppercase mb-1">Precision</p>
              <h3 className="text-xl font-serif">The Craft</h3>
            </div>
          </motion.div>

          {/* Parts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={partsImage}
              alt="Disassembled watch components"
              className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary text-sm tracking-widest uppercase mb-1">Meticulous</p>
              <h3 className="text-xl font-serif">Every Component</h3>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={teamImage}
              alt="Singapore Horology Team"
              className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary text-sm tracking-widest uppercase mb-1">The Classroom</p>
              <h3 className="text-xl font-serif">The Team</h3>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground/80 mb-4">
            "Every watch that enters our atelier is treated as a mechanical work of art."
          </blockquote>
          <p className="text-muted-foreground">— Singapore Horology</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
