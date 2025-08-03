import { create } from "zustand";

const useMenuStore = create((set) => ({
  menuItems: ["홈", "탐색", "커뮤니티"],
  selectedMenu: "홈",
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));

export default useMenuStore;
