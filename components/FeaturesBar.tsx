"use client";

import { motion } from "framer-motion";
import {
    Plane,
    Hospital,
    PawPrint,
    Dumbbell,
    TreePine,
} from "lucide-react";

const features = [
    {
        icon: Plane,
        title: "8 Min to Airport",
        description: "Quick access to Lanseria International",
    },
    {
        icon: Hospital,
        title: "5 Min to Hospital",
        description: "Close to Life Fourways Hospital",
    },
    {
        icon: PawPrint,
        title: "Pet-Friendly",
        description: "Your furry friends are welcome",
    },
    {
        icon: Dumbbell,
        title: "Training Hall",
        description: "Ideal for workshops & seminars",
    },
    {
        icon: TreePine,
        title: "Big Garden",
        description: "Relax in our lush, expansive garden",
    },
];

export default function FeaturesBar() {
    return (
        <section className="py-20 bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-white mb-4">
                        Why Choose <span className="text-[#C5A365]">Jadde?</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Perfectly situated for easy access around Chartwell and Lanseria
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C5A365]/10 flex items-center justify-center group-hover:bg-[#C5A365]/20 transition-colors">
                                <feature.icon className="w-7 h-7 text-[#C5A365]" />
                            </div>
                            <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                            <p className="text-white/50 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
