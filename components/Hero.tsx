"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('/images/general/hero.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Accent Line */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-[#C5A365]" />
                        <span className="text-[#C5A365] text-sm tracking-[0.3em] uppercase font-medium">
                            Chartwell, Fourways
                        </span>
                        <span className="w-12 h-[1px] bg-[#C5A365]" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-7xl text-white font-normal leading-tight mb-6">
                        Your Home Away From Home
                        <br />
                        <span className="text-[#C5A365]">in Chartwell</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Exclusive self-catering accommodation just 8 minutes from Lanseria
                        Airport. Perfect for training, medical treatment, or extended stays.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#apartments"
                            className="px-8 py-4 bg-[#C5A365] text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-[#B8964F] transition-all hover:shadow-lg"
                        >
                            View Apartments
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-white/50 text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-white/10 transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-white/80 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
