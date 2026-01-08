"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const locations = [
    {
        name: "Lanseria International Airport",
        distance: "8 minutes",
        description: "Quick and easy access for travelers",
    },
    {
        name: "Life Fourways Hospital",
        distance: "5 minutes",
        description: "Ideal for medical appointments and recovery",
    },
    {
        name: "Life Riverlodge",
        distance: "10 minutes",
        description: "Another excellent medical facility nearby",
    },
];

export default function LocationSection() {
    return (
        <section id="location" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[2px] bg-[#C5A365]" />
                            <span className="text-[#C5A365] text-sm tracking-[0.2em] uppercase font-medium">
                                Location
                            </span>
                        </div>

                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-8 leading-tight">
                            Prime Location in
                            <br />
                            <span className="text-[#C5A365]">Chartwell, Fourways</span>
                        </h2>

                        <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-10">
                            Jadde Apartments is perfectly situated for easy access to major
                            landmarks and essential services in the Chartwell and Lanseria
                            area.
                        </p>

                        {/* Location Cards */}
                        <div className="space-y-4">
                            {locations.map((location, index) => (
                                <motion.div
                                    key={location.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-[#FAFAFA] rounded-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#C5A365]/10 flex items-center justify-center flex-shrink-0">
                                        <Navigation className="w-5 h-5 text-[#C5A365]" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-medium text-[#1A1A1A]">
                                                {location.name}
                                            </h3>
                                            <span className="text-xs bg-[#C5A365] text-white px-2 py-0.5 rounded-full">
                                                {location.distance}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#1A1A1A]/60">
                                            {location.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Address */}
                        <div className="mt-10 flex items-start gap-3 text-[#1A1A1A]/70">
                            <MapPin className="w-5 h-5 text-[#C5A365] flex-shrink-0 mt-0.5" />
                            <span>
                                Chartwell, Fourways
                                <br />
                                Johannesburg, South Africa
                            </span>
                        </div>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-lg"
                    >
                        {/* Google Maps Iframe Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14339.897715742834!2d27.94!3d-25.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957339c6c8e8ad%3A0x8c1d7b6c9e3d7f1!2sChartwell%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
