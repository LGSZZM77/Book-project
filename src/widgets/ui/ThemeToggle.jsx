import { useEffect } from "react";
import useThemeStore from "../../shared/store/useThemeStore";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  useEffect(() => {
    const initialTheme = document.documentElement.getAttribute("data-theme") || "light";
    if (theme !== initialTheme) {
      setTheme(initialTheme);
    }
  }, [theme, setTheme]);

  const isDark = theme === "dark";

  return <button onClick={toggleTheme}>{isDark ? <Moon /> : <Sun />}</button>;
}

export default ThemeToggle;
