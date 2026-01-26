import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ContactWidget from "./components/ContactWidget";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});

import { Mrs_Saint_Delafield } from "next/font/google";

const signature = Mrs_Saint_Delafield({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-signature",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Zaid Haroon | The #1 SRI Strategist",
    description: "Building wealth portfolios, not just selling homes. The top 1% wealth architect in Singapore.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${signature.variable} bg-black text-white antialiased`}>
                {children}
                <ContactWidget />
            </body>
        </html>
    );
}
