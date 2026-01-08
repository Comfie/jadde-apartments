import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getApartmentById, getAllApartmentIds } from "@/lib/apartments";
import ApartmentDetailsClient from "@/components/ApartmentDetailsClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    const ids = getAllApartmentIds();
    return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const apartment = getApartmentById(id);

    if (!apartment) {
        return {
            title: "Apartment Not Found",
        };
    }

    return {
        title: `${apartment.name} – Jadde Apartments`,
        description: apartment.description,
    };
}

export default async function ApartmentPage({ params }: PageProps) {
    const { id } = await params;
    const apartment = getApartmentById(id);

    if (!apartment) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA]" />}>
                <ApartmentDetailsClient apartment={apartment} />
            </Suspense>
            <Footer />
        </>
    );
}
