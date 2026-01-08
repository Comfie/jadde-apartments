"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Apartments", href: "/#apartments" },
    { name: "Location", href: "/#location" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Set initial state based on page
        if (!isHomePage) {
            setIsScrolled(true);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    // Always show solid navbar on non-home pages
    const showSolidNav = isScrolled || !isHomePage;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidNav
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`font-[var(--font-heading)] text-2xl font-bold tracking-wide transition-colors ${showSolidNav ? "text-[#1A1A1A]" : "text-white"
                            }`}
                    >
                        JADDE<span className="text-[#C5A365]">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-[#C5A365] ${showSolidNav ? "text-[#1A1A1A]" : "text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#apartments"
                            className="px-6 py-3 bg-[#C5A365] text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-[#B8964F] transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X
                                className={`w-6 h-6 ${showSolidNav ? "text-[#1A1A1A]" : "text-white"}`}
                            />
                        ) : (
                            <Menu
                                className={`w-6 h-6 ${showSolidNav ? "text-[#1A1A1A]" : "text-white"}`}
                            />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t"
                        >
                            <div className="py-4 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-2 text-sm font-medium tracking-wider uppercase text-[#1A1A1A] hover:text-[#C5A365] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="px-4">
                                    <Link
                                        href="/#apartments"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full px-6 py-3 bg-[#C5A365] text-white text-sm font-medium tracking-wider uppercase rounded-sm text-center hover:bg-[#B8964F] transition-colors"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
