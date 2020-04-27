import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const themes =
  {
    main: {
      colors: {
        background: "white",
        text: "black",
      },
    },
    water: {
      colors: {
        background: "blue",
        text: "white",
      },
    },
    fire: {
      colors: {
        background: "red",
        text: "white",
      },
    },
  }

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.main);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
