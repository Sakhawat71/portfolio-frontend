import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NavbarSelector from "@/components/shared/NavbarSelector";
import Footer from "@/components/shared/Footer";


const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    weight: ["400", "500", "700"],
});

const raleway = Inter({
    subsets: ["latin"],
    variable: '--font-raleway',
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Sakhawat - Portfolio",
    description: "Sakhawat Full Stack Developer",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" className={`${inter.className} ${raleway.className}`}>
            <body
                className={` bg-slate-100`}
            >
                <NavbarSelector />
                <div className="min-h-screen">{children}</div>
                <Toaster position="top-right" />
                <Footer />
            </body>
        </html>
    );
}
