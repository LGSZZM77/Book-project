import React from "react";

function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    root.setAttribute("data-theme", newTheme);
  };

  return <button onClick={toggleTheme}>테마</button>;
}

export default ThemeToggle;
