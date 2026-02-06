import "./modal.css";

function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
