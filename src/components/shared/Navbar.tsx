"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "../thems/ThemeSwitcher";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blogs" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 w-full z-50">
            <nav className="relative flex items-center justify-between h-16 px-4 md:px-8 lg:px-28">
                {/* Logo */}
                <div className="w-5/12">
                    <Link href="/" className="text-2xl font-bold font-mono text-black dark:text-white">
                        {`<Sakhawat/>`}
                    </Link>
                </div>

                {/* Navigation */}
                <div className="w-7/12 flex items-center justify-end space-x-6 text-white">
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`${pathname === href
                                    ? "text-teal-300 font-bold"
                                    : "text-white/80 hover:text-teal-300 dark:text-gray-300 dark:hover:text-teal-400"
                                    } transition-colors`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Switcher (optional) */}
                    {/* <ThemeSwitcher /> */}

                    {/* Mobile Nav Toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white dark:bg-gray-900 transition-all">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}

                    <ThemeSwitcher />
                </div>
            )}
        </header>
    );
};

export default Navbar;




// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import ThemeSwitcher from "../thems/ThemeSwitcher";
// import { userProps } from "@/types/user.type";
// import { signOut } from "next-auth/react";

// const Navbar = ({ session }: { session: userProps | null }) => {
//     const pathname = usePathname();
//     const [isOpen, setIsOpen] = useState(false);

//     const navLinks = [
//         { href: "/", label: "Home" },
//         { href: "/projects", label: "Projects" },
//         { href: "/blog", label: "Blogs" },
//         { href: "/contact", label: "Contact" },
//     ];

//     return (
//         <header className="fixed top-0 w-full z-50">


//             {/* Nav Content */}
//             <nav className="relative flex items-center justify-between h-16 px-4 md:px-8 lg:px-28">
//                 {/* Logo on light background */}
//                 <div className="w-5/12">
//                     <Link href="/" className="text-2xl font-bold font-mono text-black dark:text-white">
//                         {`<Sakhawat/>`}
//                     </Link>
//                 </div>

//                 {/* Navigation items on dark background */}
//                 <div className="w-7/12 flex items-center justify-end space-x-6 text-white">
//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center space-x-6">
//                         {navLinks.map(({ href, label }) => (
//                             <Link
//                                 key={href}
//                                 href={href}
//                                 className={`${pathname === href
//                                     ? "text-teal-300 font-bold"
//                                     : "text-white/80 hover:text-teal-300 dark:text-gray-300 dark:hover:text-teal-400"
//                                     } transition-colors`}
//                             >
//                                 {label}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* <ThemeSwitcher /> */}

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white dark:bg-gray-900 transition-all">
//                     {navLinks.map(({ href, label }) => (
//                         <Link
//                             key={href}
//                             href={href}
//                             className="text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
//                             onClick={() => setIsOpen(false)}
//                         >
//                             {label}
//                         </Link>
//                     ))}

//                     <ThemeSwitcher />

//                     {session ? (
//                         <button
//                             onClick={() => {
//                                 setIsOpen(false);
//                                 signOut();
//                             }}
//                             className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//                         >
//                             Logout
//                         </button>
//                     ) : (
//                         <Link
//                             href="/login"
//                             className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition"
//                             onClick={() => setIsOpen(false)}
//                         >
//                             Login
//                         </Link>
//                     )}
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Navbar;