function Button({ loading, disabled, children, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`w-full py-2 rounded-lg text-white font-semibold transition
      ${disabled || loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-indigo-600 hover:bg-indigo-700"
      }`}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;
