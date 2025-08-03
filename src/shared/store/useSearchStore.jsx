import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchType: false,
  openSearch: () => set({ searchType: true }),
  closeSearch: () => set({ searchType: false }),
}));

export default useSearchStore;
