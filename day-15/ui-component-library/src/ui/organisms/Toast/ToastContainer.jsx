import Toast from "./Toast";

function ToastContainer({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map((t, i) => (
        <Toast key={i} message={t} />
      ))}
    </div>
  );
}

export default ToastContainer;
