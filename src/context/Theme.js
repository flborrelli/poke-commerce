import React, { useState, useContext, createContext } from "react";
// import themes from './themes';  

const ThemeContext = createContext();

export const themes =
  {
    water: {
      id: 'water',
      name: 'Água',
      colors: {
        background: "blue",
        text: "white",
      },
    },
    fire: {
      id: 'fire',
      name: 'Fogo',
      colors: {
        background: "red",
        text: "white",
      },
    },
  }


export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.water);

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
