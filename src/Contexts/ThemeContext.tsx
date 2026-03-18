import { createContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextProps = {
    theme: string
    toggleTheme: () => void
}

type ThemeProviderProps = {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children } : ThemeProviderProps) {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        
        setTheme(savedTheme || "dark")

    }, [])
    
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        }
    }, [theme]);

    return(
        <ThemeContext.Provider value ={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

