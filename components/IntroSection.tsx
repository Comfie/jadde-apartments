"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "/images/general/intro-1.jpg",
        alt: "Garden view",
        className: "col-span-1 row-span-2",
    },
    {
        src: "/images/general/intro-2.jpg",
        alt: "Exterior view",
        className: "col-span-1 row-span-1",
    },
    {
        src: "/images/general/intro-3.jpg",
        alt: "Modern interior",
        className: "col-span-1 row-span-1",
    },
];

export default function IntroSection() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Accent Line */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-[#C5A365]" />
                            <span className="text-[#C5A365] text-sm tracking-[0.2em] uppercase font-medium">
                                About Us
                            </span>
                        </div>

                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-8 leading-tight">
                            Jadde Apartments –<br />
                            <span className="text-[#C5A365]">Modern Self-Catering</span>
                            <br />
                            in Chartwell
                        </h2>

                        <div className="space-y-6 text-[#1A1A1A]/70 text-lg leading-relaxed">
                            <p>
                                Experience exclusive and modern self-catering accommodation
                                tailored to your needs. Choose from five uniquely designed
                                apartments, perfect for both long and short stays.
                            </p>
                            <p>
                                Whether you&apos;re here for training, medical treatment, or
                                simply need a comfortable place to stay, Jadde Apartments has
                                you covered.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#1A1A1A]/10">
                            <div>
                                <div className="font-[var(--font-heading)] text-4xl text-[#C5A365] mb-2">
                                    5
                                </div>
                                <div className="text-sm text-[#1A1A1A]/60 uppercase tracking-wider">
                                    Apartments
                                </div>
                            </div>
                            <div>
                                <div className="font-[var(--font-heading)] text-4xl text-[#C5A365] mb-2">
                                    8
                                </div>
                                <div className="text-sm text-[#1A1A1A]/60 uppercase tracking-wider">
                                    Min to Airport
                                </div>
                            </div>
                            <div>
                                <div className="font-[var(--font-heading)] text-4xl text-[#C5A365] mb-2">
                                    24/7
                                </div>
                                <div className="text-sm text-[#1A1A1A]/60 uppercase tracking-wider">
                                    Support
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px] lg:h-[600px]"
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-sm ${image.className}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
