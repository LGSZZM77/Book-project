const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-modal" onClick={onClose} />

      <div
        className="fixed top-1/2 left-1/2 bg-base text-base rounded shadow -translate-x-1/2 -translate-y-1/2 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
