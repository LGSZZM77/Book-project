"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <>
      <button onClick={toggleTheme}>
        {isDark ? (
          <>
            <Moon /> <span>다크</span>
          </>
        ) : (
          <>
            <Sun /> <span>라이트</span>
          </>
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
