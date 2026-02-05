function Input({ label, error, ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-2 rounded-lg border outline-none transition
        ${error
          ? "border-red-500 focus:ring-red-300"
          : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}

export default Input;
