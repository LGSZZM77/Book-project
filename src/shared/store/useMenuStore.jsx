import { create } from "zustand";

const useMenuStore = create((set) => ({
  menuItems: ["전체", "베스트", "만화", "소설", "IT/과학"],
  selectedMenu: "전체",
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));

export default useMenuStore;
