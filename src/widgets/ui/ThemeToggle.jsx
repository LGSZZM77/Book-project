import { useEffect } from "react";
import useThemeStore from "../../shared/store/useThemeStore";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { toggleTheme, theme, setTheme } = useThemeStore();

  useEffect(() => {
    const initialTheme = document.documentElement.getAttribute("data-theme") || "light";
    if (theme !== initialTheme) {
      setTheme(initialTheme);
    }
  }, [theme, setTheme]);

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
