import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jadde Apartments – Modern Self-Catering in Chartwell, Fourways",
  description:
    "Exclusive self-catering accommodation just 8 minutes from Lanseria Airport. Perfect for training, medical treatment, or extended stays. 6 uniquely designed apartments in Chartwell, Fourways.",
  keywords: [
    "apartments",
    "Chartwell",
    "Fourways",
    "self-catering",
    "accommodation",
    "Lanseria Airport",
    "short stays",
    "long term rental",
  ],
  openGraph: {
    title: "Jadde Apartments – Your Home Away From Home",
    description:
      "Exclusive self-catering accommodation in Chartwell, Fourways",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
