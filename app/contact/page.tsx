"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
    {
        question: "What is the check-in and check-out time?",
        answer:
            "Check-in is from 2:00 PM and check-out is by 10:00 AM. Early check-in and late check-out can be arranged subject to availability.",
    },
    {
        question: "Is there parking available?",
        answer:
            "Yes, all our apartments come with free private parking. There is also additional street parking available.",
    },
    {
        question: "Are pets allowed?",
        answer:
            "Yes, we are a pet-friendly establishment. Please inform us in advance so we can prepare accordingly. Additional cleaning fees may apply.",
    },
    {
        question: "What amenities are included?",
        answer:
            "All apartments include free WiFi, fully equipped kitchen, flat-screen TV, air conditioning, and access to our beautiful garden. Specific amenities vary by apartment.",
    },
    {
        question: "How do I book a long-term stay?",
        answer:
            "For long-term rentals (1 month or more), please contact us via WhatsApp or email. We offer discounted monthly rates and flexible lease terms.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - in production, connect to your backend
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Open email client as fallback
        const emailBody = encodeURIComponent(
            `Name: ${formData.name}\nPhone: ${formData.phone}\n\n${formData.message}`
        );
        window.location.href = `mailto:comfynyatsine@gmail.com?subject=${encodeURIComponent(formData.subject || "Contact Form Inquiry")}&body=${emailBody}`;

        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#FAFAFA]">
                {/* Hero */}
                <div className="bg-[#1A1A1A] pt-32 pb-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-[#C5A365]" />
                                <span className="text-[#C5A365] text-sm tracking-[0.3em] uppercase font-medium">
                                    Contact Us
                                </span>
                                <span className="w-12 h-[1px] bg-[#C5A365]" />
                            </div>
                            <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto">
                                Have questions about our apartments? We&apos;re here to help.
                                Reach out to us anytime.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="font-[var(--font-heading)] text-2xl text-[#1A1A1A] mb-6">
                                Send Us a Message
                            </h2>

                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-sm p-6 text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="font-medium text-green-800 mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-green-600 text-sm">
                                        Your email client should have opened. If not, please email
                                        us directly at comfynyatsine@gmail.com
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-[#1A1A1A]/20 rounded-sm focus:outline-none focus:border-[#C5A365] transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-[#1A1A1A]/20 rounded-sm focus:outline-none focus:border-[#C5A365] transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-[#1A1A1A]/20 rounded-sm focus:outline-none focus:border-[#C5A365] transition-colors"
                                                placeholder="+27 84 919 2581"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, subject: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-[#1A1A1A]/20 rounded-sm focus:outline-none focus:border-[#C5A365] transition-colors"
                                                placeholder="Booking Inquiry"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-[#1A1A1A]/20 rounded-sm focus:outline-none focus:border-[#C5A365] transition-colors resize-none"
                                            placeholder="Tell us how we can help..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-[#C5A365] text-white font-medium tracking-wider uppercase rounded-sm hover:bg-[#B8964F] transition-colors disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-8"
                        >
                            <h2 className="font-[var(--font-heading)] text-2xl text-[#1A1A1A] mb-6">
                                Contact Information
                            </h2>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <a
                                    href="tel:+27849192581"
                                    className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-[#C5A365]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#C5A365]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1A1A1A] mb-1">
                                            Give Us a Call
                                        </h3>
                                        <p className="text-[#1A1A1A]/60">084 919 2581</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:comfynyatsine@gmail.com"
                                    className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-[#C5A365]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#C5A365]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1A1A1A] mb-1">
                                            Send an Email
                                        </h3>
                                        <p className="text-[#1A1A1A]/60">comfynyatsine@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/27849192581"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1A1A1A] mb-1">
                                            WhatsApp Us
                                        </h3>
                                        <p className="text-[#1A1A1A]/60">Quick response guaranteed</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-md">
                                    <div className="w-12 h-12 bg-[#C5A365]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#C5A365]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1A1A1A] mb-1">
                                            Our Location
                                        </h3>
                                        <p className="text-[#1A1A1A]/60">
                                            Chartwell, Fourways
                                            <br />
                                            Johannesburg, South Africa
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-md">
                                    <div className="w-12 h-12 bg-[#C5A365]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-[#C5A365]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1A1A1A] mb-1">
                                            Office Hours
                                        </h3>
                                        <p className="text-[#1A1A1A]/60">
                                            Monday - Friday: 8am - 6pm
                                            <br />
                                            Saturday: 9am - 2pm
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="h-[250px] rounded-sm overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14339.897715742834!2d27.94!3d-25.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957339c6c8e8ad%3A0x8c1d7b6c9e3d7f1!2sChartwell%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1699999999999!5m2!1sen!2sza"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white py-20">
                    <div className="max-w-3xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-[var(--font-heading)] text-3xl text-[#1A1A1A] mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-[#1A1A1A]/60">
                                Find answers to common questions about staying with us
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border border-[#1A1A1A]/10 rounded-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FAFAFA] transition-colors"
                                    >
                                        <span className="font-medium text-[#1A1A1A]">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-[#C5A365] transition-transform ${openFaq === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-5 pb-5 text-[#1A1A1A]/70">
                                            {faq.answer}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
