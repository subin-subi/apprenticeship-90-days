function PasswordToggle({ visible, toggle }) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="absolute right-3 top-9 text-sm text-indigo-600"
    >
      {visible ? "Hide" : "Show"}
    </button>
  );
}

export default PasswordToggle;
