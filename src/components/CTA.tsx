import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    problem: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.problem) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", problem: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
              Tell us about your watch and how we can help. Our master watchmakers are ready to assist.
            </p>

            {/* Contact Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto bg-background/50 p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
                <Textarea
                  name="problem"
                  placeholder="Describe your issue or request..."
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary min-h-[120px]"
                />
                <Button type="submit" variant="gold" size="xl" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background border border-primary/30 rounded-lg p-8 max-w-md mx-auto"
              >
                <p className="text-primary font-serif text-xl mb-2">Inquiry Received</p>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We will review your request and contact you shortly.
                </p>
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