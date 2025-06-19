import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/utils/authOptions";
import { Toaster } from "sonner";

// const roboto = Roboto({
//     weight: "400",
//     subsets: ["latin"],
//     display: "swap",
// });

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
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
        <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
            <body
                className={` bg-slate-100`}
            >
                <Navbar />
                <div className="min-h-screen">{children}</div>
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
