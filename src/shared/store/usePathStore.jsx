import { create } from "zustand";

const usePathStore = create((set) => ({
  pathname: "/",
  setPathname: (path) => set({ pathname: path }),
}));

export default usePathStore;
