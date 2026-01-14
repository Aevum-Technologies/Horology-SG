import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock } from "lucide-react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-sans tracking-[0.3em] uppercase text-sm mb-4">
              Begin Your Journey
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Ready to Entrust Your Timepiece?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-10">
              Schedule a consultation with our master watchmakers or join our 
              community for exclusive horological insights.
            </p>

            {/* Email Capture */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
                <Button type="submit" variant="gold" size="xl">
                  Join Us
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background border border-primary/30 rounded-lg p-6 max-w-md mx-auto"
              >
                <p className="text-primary font-serif text-xl">Welcome to the Community</p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border"
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif text-lg mb-2">Visit Us</h4>
              <p className="text-muted-foreground text-sm">
                Singapore
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif text-lg mb-2">Working Hours</h4>
              <p className="text-muted-foreground text-sm">
                Mon - Sat: 10AM - 7PM
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif text-lg mb-2">Get in Touch</h4>
              <p className="text-muted-foreground text-sm">
                Book a Consultation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
