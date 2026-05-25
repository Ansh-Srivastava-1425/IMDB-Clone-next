    "use client";
    import { ThemeProvider } from "next-themes";

    export default function Provider({ children }) {
    return (
        <ThemeProvider attribute="class">
        <div className="text-gray-700 dark:text-gray-300 dark:bg-gray-900 min-h-screen select-none transition-colors duration-300">
            {children}
        </div>
        </ThemeProvider>
    );
    }