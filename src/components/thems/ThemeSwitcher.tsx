// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";

// export default function ThemeSwitcher() {
//     const { theme, setTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => setMounted(true), []);
//     if (!mounted) return null;

//     return (
//         <button
//             className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         >
//             {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//         </button>
//     );
// }


"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <button
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all duration-300"
            onClick={toggleTheme}
        >
            {resolvedTheme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
            ) : (
                <Moon size={20} className="text-gray-800" />
            )}
        </button>
    );
}
