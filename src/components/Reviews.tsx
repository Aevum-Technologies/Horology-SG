import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
    name: string;
    rating: number;
    text: string;
    reviewCount: number;
}

const reviews: Review[] = [
    {
        name: "Roel Paule",
        rating: 5,
        text: "Had my Rolex serviced due to a dent on the case that required repolishing and possible welding. The workmanship was excellent, with great attention to detail. The protective film application was also very nicely done. He was very professional and easy to deal with, and I'm extremely happy with the results.",
        reviewCount: 1,
    },
    {
        name: "Vemon Lam",
        rating: 5,
        text: "I met Hilston from Singapore Horology by chance while having lunch nearby and decided to visit his shop. The experience was excellent from start to finish. I sent in my Rolex Pepsi with Jubilee chain for a quick polishing and full watch protective film, and also opted for the 3-year warranty package. The workmanship was neat, professional, and done efficiently. What I appreciated most was the very reasonable pricing, with no hidden costs at all — even the removal of my existing watch film was done at no extra charge. Everything was fully covered and clearly explained. Honest service and highly recommended.",
        reviewCount: 1,
    },
    {
        name: "Tian zun Tiam",
        rating: 5,
        text: "Sent my vintage marriage IWC watch here for servicing and really happy with the experience. Boss very friendly and easy to talk to, explain everything in simple terms. Watch came back running smooth and looking good. Price reasonable and upfront, no funny charges. Can tell they know their stuff and handle vintage pieces with care. Overall very steady service, feel reassured leaving my watch with them. Will definitely come back again and recommend to other watch friends.",
        reviewCount: 2,
    },
    {
        name: "Sing chan Lim",
        rating: 5,
        text: "Sent my Patek Philippe 5711 and 5167 here for full servicing, polishing, and watch protective film, and the experience was excellent. From the first consultation, everything was explained clearly and professionally, which gave me a lot of confidence handling such high-value pieces. The polishing was tastefully done, restoring the shine without overdoing it, and the watch film application was precise and clean with full coverage. Both watches came back looking fresh and well cared for. Pricing was transparent and fair for the level of workmanship provided, with no hidden costs. You can tell they genuinely understand and respect fine watchmaking. Highly recommended for anyone servicing luxury timepieces.",
        reviewCount: 1,
    },
    {
        name: "Caster Lee",
        rating: 5,
        text: "Excellent Film Protection Work – Highly Recommended Had film protection applied to my Rolex watch clasp by Hilston from Singapore Horology Pte Ltd, and I’m very impressed with the workmanship. The film is precisely cut, neatly applied, and almost invisible, preserving the original look of the clasp while protecting it from scratches and desk rash. Even under close inspection, the finishing is clean with no bubbles or rough edges. Hilston is professional, patient, and knowledgeable, taking time to ensure everything was aligned perfectly before completion. A great solution for anyone who wants to keep their Rolex in pristine condition without altering its appearance. Highly recommended for watch owners who care about long-term protection and quality detailing. 👌",
        reviewCount: 3,
    },
    {
        name: "Cleavon Tan",
        rating: 5,
        text: "Excellent experience with Singapore Horology. The watch protection film installation on my Tudor and Rolex was done flawlessly. Attention to detail was outstanding, with precise fitting and a very clean finish. Truly professional workmanship and great service. Highly recommended for anyone looking to protect their watches properly.",
        reviewCount: 2,
    },
    {
        name: "Goh Brennan",
        rating: 5,
        text: "Thanks Hilston for being different than others. Being different and unique experience allowed us to know the difference between other watch companies. Will soon be seeing you again for my other watches! 😎👍🏻 Work Done: Changing Vintage AP Full Gold Link to fit my wife.",
        reviewCount: 9
    }
]

const ReviewCard = ({ review }: { review: Review }) => {
    return (
        <div className="flex-shrink-0 w-[400px] h-[320px] mx-4 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">
                        {review.reviewCount} review{review.reviewCount > 1 ? "s" : ""}
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                        />
                    ))}
                </div>
            </div>

            <p className="text-sm text-muted-foreground flex-1 overflow-y-auto">
                {review.text}
            </p>
        </div>
    );
};

const Reviews = () => {
    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className="py-16 bg-muted/30 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-primary font-sans tracking-[0.3em] uppercase text-sm mb-4">
                        Client Testimonials
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Trusted by watch enthusiasts across Singapore for exceptional service and craftsmanship.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

                {/* Marquee */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{
                            x: [0, -1 * (400 + 32) * reviews.length],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedReviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
