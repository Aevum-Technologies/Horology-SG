import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const CTA = () => {
  const whatsappNumber = "+6580808870";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

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
              Chat with us on WhatsApp. Our master watchmakers are ready to assist.
            </p>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                asChild
                variant="gold"
                size="xl"
                className="group"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </a>
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                {whatsappNumber}
              </p>
            </motion.div>
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
                400 Orchard Rd<br />
                #03-26 Orchard Tower<br />
                Singapore 238875
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

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=400+Orchard+Rd,+Orchard+Towers,+Singapore+238875&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Horology-SG Location - 400 Orchard Rd, Orchard Towers"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;