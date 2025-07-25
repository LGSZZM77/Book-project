import { create } from "zustand";

const useModalStore = create((set) => ({
  modalType: null,

  openLogin: () => set({ modalType: "login" }),
  openJoin: () => set({ modalType: "join" }),
  closeModal: () => set({ modalType: null }),
}));

export default useModalStore;
