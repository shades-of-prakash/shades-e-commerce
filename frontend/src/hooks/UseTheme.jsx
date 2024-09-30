import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    console.log(darkModeMediaQuery);
    setIsDark(darkModeMediaQuery.matches);
    console.log(setIsDark);
    const handleChange = (e) => setIsDark(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {console.log(isDark)}
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
