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

// export const metadata: Metadata = {
//     title: "Sakhawat - Portfolio",
//     description: "Sakhawat Full Stack Developer",
// };

export const metadata: Metadata = {
    title: "Sakhawat H. | Full-Stack Developer",
    description:
        "Portfolio of Sakhawat Hosan, a passionate Full-Stack Developer specializing in MERN, Next.js, TypeScript, Express, PostgreSQL, Prisma, and modern web technologies.",
    keywords: [
        "Sakhawat Hosan",
        "Full Stack Developer",
        "Backend Developer",
        "MERN Stack",
        "Next.js",
        "TypeScript",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "MongoDB",
        "Web Development",
        "Software Engineer Portfolio",
    ],
    authors: [{ name: "Sakhawat Hosan", url: "https://s3h.vercel.app" }],
    openGraph: {
        title: "Sakhawat H. | Full-Stack & Backend Developer",
        description:
            "Explore the portfolio of Sakhawat Hosan — Full-Stack Developer skilled in building scalable web applications with modern technologies.",
        url: "https://s3h.vercel.app",
        siteName: "Sakhawat Portfolio",
        images: [
            {
                url: "https://s3h.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sakhawat Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sakhawat H. | Full-Stack & Backend Developer",
        description:
            "Portfolio of Sakhawat Hosan, passionate about scalable backend systems, full-stack apps, and modern web development.",
        images: ["https://s3h.vercel.app/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
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
