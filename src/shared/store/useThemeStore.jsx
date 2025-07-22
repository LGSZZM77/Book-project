import { create } from "zustand";

const savedTheme = localStorage.getItem("theme") || "light";

const useThemeStore = create((set) => ({
  theme: savedTheme,
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
