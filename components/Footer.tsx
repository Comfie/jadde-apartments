"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Apartments", href: "/#apartments" },
    { name: "Location", href: "/#location" },
    { name: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#1A1A1A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="font-[var(--font-heading)] text-3xl font-bold tracking-wide inline-block mb-6"
                        >
                            JADDE<span className="text-[#C5A365]">.</span>
                        </Link>
                        <p className="text-white/60 max-w-md mb-6 leading-relaxed">
                            Your home away from home in Chartwell, Fourways. Experience
                            exclusive and modern self-catering accommodation tailored to your
                            needs.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A365] transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A365] transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-[#C5A365] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-medium text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+27849192581"
                                    className="flex items-center gap-3 text-white/60 hover:text-[#C5A365] transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-[#C5A365]" />
                                    <span>084 919 2581</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:comfynyatsine@gmail.com"
                                    className="flex items-center gap-3 text-white/60 hover:text-[#C5A365] transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-[#C5A365]" />
                                    <span>comfynyatsine@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-white/60">
                                <MapPin className="w-5 h-5 text-[#C5A365] flex-shrink-0 mt-0.5" />
                                <span>
                                    Chartwell, Fourways
                                    <br />
                                    Johannesburg, South Africa
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Jadde Apartments. All rights reserved.
                    </p>
                    <p className="text-white/40 text-sm">
                        Designed with ♥ in South Africa
                    </p>
                </div>
            </div>
        </footer>
    );
}
