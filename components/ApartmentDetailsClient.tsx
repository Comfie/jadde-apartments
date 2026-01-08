"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    Users,
    Bed,
    Bath,
    Maximize,
    Check,
    Phone,
    Mail,
    ArrowLeft,
    MessageCircle,
} from "lucide-react";
import { Apartment } from "@/lib/apartments";

// Format price consistently to avoid hydration mismatch
function formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface ApartmentDetailsClientProps {
    apartment: Apartment;
}

export default function ApartmentDetailsClient({
    apartment,
}: ApartmentDetailsClientProps) {
    const searchParams = useSearchParams();
    const initialMode = searchParams.get("mode") === "long" ? "long" : "short";
    const [mode, setMode] = useState<"short" | "long">(initialMode);
    const [selectedImage, setSelectedImage] = useState(0);

    const phoneNumber = "27849192581";
    const email = "comfynyatsine@gmail.com";
    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in the ${apartment.name} for a long-term rental. Please provide more information.`
    );
    const emailSubject = encodeURIComponent(
        `Inquiry: ${apartment.name} - Long Term Rental`
    );
    const emailBody = encodeURIComponent(
        `Hi,\n\nI am interested in renting the ${apartment.name} on a long-term basis.\n\nPlease contact me with more details about:\n- Availability\n- Lease terms\n- Move-in process\n\nThank you.`
    );

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Header */}
            <div className="bg-[#1A1A1A] pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Link
                        href="/#apartments"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-[#C5A365] transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm uppercase tracking-wider">
                            Back to Apartments
                        </span>
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-[var(--font-heading)] text-4xl md:text-5xl text-white mb-4"
                    >
                        {apartment.name}
                    </motion.h1>
                    <p className="text-white/60 text-lg">{apartment.tagline}</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column - Images & Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden"
                        >
                            <Image
                                src={apartment.images[selectedImage]}
                                alt={apartment.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* Thumbnail Gallery */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {apartment.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden transition-all ${selectedImage === index
                                        ? "ring-2 ring-[#C5A365] ring-offset-2"
                                        : "opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${apartment.name} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="font-[var(--font-heading)] text-2xl text-[#1A1A1A] mb-4">
                                About This Apartment
                            </h2>
                            <p className="text-[#1A1A1A]/70 leading-relaxed">
                                {apartment.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-6 py-6 border-y border-[#1A1A1A]/10">
                            <div className="flex items-center gap-2 text-[#1A1A1A]">
                                <Users className="w-5 h-5 text-[#C5A365]" />
                                <span>{apartment.guests} Guests</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#1A1A1A]">
                                <Bed className="w-5 h-5 text-[#C5A365]" />
                                <span>{apartment.bedrooms} Bedroom(s)</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#1A1A1A]">
                                <Bath className="w-5 h-5 text-[#C5A365]" />
                                <span>{apartment.bathrooms} Bathroom(s)</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#1A1A1A]">
                                <Maximize className="w-5 h-5 text-[#C5A365]" />
                                <span>{apartment.size}</span>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div>
                            <h2 className="font-[var(--font-heading)] text-2xl text-[#1A1A1A] mb-6">
                                Amenities
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {apartment.amenities.map((amenity) => (
                                    <div
                                        key={amenity}
                                        className="flex items-center gap-3 text-[#1A1A1A]/70"
                                    >
                                        <Check className="w-5 h-5 text-[#C5A365]" />
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white rounded-sm shadow-lg p-6 space-y-6">
                            {/* Toggle */}
                            <div className="flex rounded-full bg-[#FAFAFA] p-1">
                                <button
                                    onClick={() => setMode("short")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${mode === "short"
                                        ? "bg-[#C5A365] text-white"
                                        : "text-[#1A1A1A]/60"
                                        }`}
                                >
                                    Short Stay
                                </button>
                                <button
                                    onClick={() => setMode("long")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${mode === "long"
                                        ? "bg-[#C5A365] text-white"
                                        : "text-[#1A1A1A]/60"
                                        }`}
                                >
                                    Long Term
                                </button>
                            </div>

                            {/* Price */}
                            <div className="text-center py-4 border-b border-[#1A1A1A]/10">
                                <div className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider mb-1">
                                    {mode === "short" ? "Starting from" : "Monthly Rate"}
                                </div>
                                <div className="font-[var(--font-heading)] text-4xl text-[#1A1A1A]">
                                    R{" "}
                                    {mode === "short"
                                        ? formatPrice(apartment.dailyPrice)
                                        : formatPrice(apartment.monthlyPrice)}
                                </div>
                                <div className="text-[#1A1A1A]/50">
                                    {mode === "short" ? "per night" : "per month"}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            {mode === "short" ? (
                                <a
                                    href={apartment.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 text-center bg-[#C5A365] text-white font-medium tracking-wider uppercase rounded-sm hover:bg-[#B8964F] transition-colors"
                                >
                                    Book Now
                                </a>
                            ) : (
                                <div className="space-y-3">
                                    <a
                                        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-medium tracking-wider uppercase rounded-sm hover:bg-[#1DA851] transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Us
                                    </a>
                                    <a
                                        href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                                        className="flex items-center justify-center gap-2 w-full py-4 border-2 border-[#C5A365] text-[#C5A365] font-medium tracking-wider uppercase rounded-sm hover:bg-[#C5A365] hover:text-white transition-colors"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Email Inquiry
                                    </a>
                                </div>
                            )}

                            {/* Contact Info */}
                            <div className="pt-4 border-t border-[#1A1A1A]/10 space-y-3">
                                <div className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider">
                                    Questions?
                                </div>
                                <a
                                    href="tel:+27849192581"
                                    className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#C5A365] transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-[#C5A365]" />
                                    <span>084 919 2581</span>
                                </a>
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#C5A365] transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-[#C5A365]" />
                                    <span>{email}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
