import { X } from "lucide-react";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-modal-overlay" onClick={onClose} />
      <div className="fixed flex top-1/2 left-1/2 bg-bg text-text rounded shadow -translate-x-1/2 -translate-y-1/2">
        <div className="bg-modal-left w-52 py-6 px-9 flex items-center justify-center">
          <h2 className="text-2xl font-bold">환영합니다!</h2>
        </div>
        <div className="py-6 px-9" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-end">
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
