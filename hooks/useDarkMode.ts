"use client";

import { useState, useEffect } from "react";

/**
 * Syncs a dark/light mode boolean with the `dark` class on <html>.
 * Defaults to dark mode.
 */
export function useDarkMode(defaultDark = true) {
  const [isDarkMode, setIsDarkMode] = useState(defaultDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleDarkMode };
}
