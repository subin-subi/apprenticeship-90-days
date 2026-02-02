const Button = ({ children, variant = "primary" }) => {
  const base = "px-6 py-3 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-indigo-600 hover:bg-gray-100"
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
