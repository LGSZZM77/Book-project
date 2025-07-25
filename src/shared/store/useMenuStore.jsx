import { create } from "zustand";

const useMenuStore = create((set) => ({
  menuItems: ["홈", "베스트", "만화", "소설", "IT/과학"],
  selectedMenu: "홈",
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));

export default useMenuStore;
