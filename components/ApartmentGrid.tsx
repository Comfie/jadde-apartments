"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Bed, Bath, Maximize } from "lucide-react";
import { apartments } from "@/lib/apartments";

type BookingMode = "short" | "long";

// Format price consistently to avoid hydration mismatch
function formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ApartmentGrid() {
    const [mode, setMode] = useState<BookingMode>("short");

    return (
        <section id="apartments" className="py-24 lg:py-32 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-[2px] bg-[#C5A365]" />
                        <span className="text-[#C5A365] text-sm tracking-[0.2em] uppercase font-medium">
                            Our Spaces
                        </span>
                        <span className="w-12 h-[2px] bg-[#C5A365]" />
                    </div>
                    <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                        Choose Your <span className="text-[#C5A365]">Perfect Stay</span>
                    </h2>
                    <p className="text-[#1A1A1A]/60 max-w-2xl mx-auto mb-10">
                        Six uniquely designed apartments tailored for both long and short
                        stays
                    </p>

                    {/* Toggle Switch */}
                    <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg border border-[#1A1A1A]/10">
                        <button
                            onClick={() => setMode("short")}
                            className={`px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all ${mode === "short"
                                    ? "bg-[#C5A365] text-white shadow-md"
                                    : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                                }`}
                        >
                            Short Stays
                        </button>
                        <button
                            onClick={() => setMode("long")}
                            className={`px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all ${mode === "long"
                                    ? "bg-[#C5A365] text-white shadow-md"
                                    : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                                }`}
                        >
                            Long Term Rentals
                        </button>
                    </div>
                </motion.div>

                {/* Apartments Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {apartments.map((apartment, index) => (
                        <motion.div
                            key={apartment.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Image - Clickable to details */}
                            <Link href={`/apartments/${apartment.id}?mode=${mode}`}>
                                <div className="relative h-64 overflow-hidden cursor-pointer">
                                    <Image
                                        src={apartment.images[0]}
                                        alt={apartment.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-[#C5A365] text-white px-4 py-2 text-sm font-medium rounded-sm">
                                            {mode === "short"
                                                ? `R${formatPrice(apartment.dailyPrice)}/night`
                                                : `R${formatPrice(apartment.monthlyPrice)}/month`}
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="p-6">
                                <Link href={`/apartments/${apartment.id}?mode=${mode}`}>
                                    <h3 className="font-[var(--font-heading)] text-xl text-[#1A1A1A] mb-2 hover:text-[#C5A365] transition-colors cursor-pointer">
                                        {apartment.name}
                                    </h3>
                                </Link>
                                <p className="text-sm text-[#1A1A1A]/50 mb-4">
                                    {apartment.tagline}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#1A1A1A]/60">
                                    <div className="flex items-center gap-1.5">
                                        <Users className="w-4 h-4" />
                                        <span>{apartment.guests} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-4 h-4" />
                                        <span>{apartment.bedrooms} Bed</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Bath className="w-4 h-4" />
                                        <span>{apartment.bathrooms} Bath</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Maximize className="w-4 h-4" />
                                        <span>{apartment.size}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Link
                                    href={`/apartments/${apartment.id}?mode=${mode}`}
                                    className="block w-full py-3 text-center border-2 border-[#C5A365] text-[#C5A365] font-medium tracking-wider uppercase rounded-sm hover:bg-[#C5A365] hover:text-white transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
