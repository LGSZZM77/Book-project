import { create } from "zustand";

const useMenuStore = create((set) => ({
  menuItems: [
    { label: "홈", path: "/" },
    { label: "탐색", path: "/explore" },
    { label: "커뮤니티", path: "/community" },
  ],
}));

export default useMenuStore;
