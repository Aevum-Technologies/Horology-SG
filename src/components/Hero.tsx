import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_center,_var(--tw-gradient-stops))] from-white via-background to-background" />

            {/* Animated Logo Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 p-8"
            >
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <img
                        src="/horology-image.png"
                        alt="Singapore Horology"
                        className="w-64 md:w-80 object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </motion.div>

            {/* Elegant Caption */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 flex flex-col items-center gap-3"
            >
                <h1 className="text-[#D4AF37] tracking-[0.5em] text-xs md:text-sm uppercase font-medium">
                    Singapore Horology
                </h1>
                <div className="w-12 h-px bg-[#D4AF37]" />
                <p className="text-[#D4AF37] tracking-[0.3em] text-[10px] uppercase">
                    Est. 2024
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;