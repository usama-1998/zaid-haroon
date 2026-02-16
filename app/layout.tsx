import type { Metadata } from "next";
import Script from "next/script";
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
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '883212214621680');
                    fbq('track', 'PageView');
                    `}
                </Script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=883212214621680&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
            </body>
        </html>
    );
}
