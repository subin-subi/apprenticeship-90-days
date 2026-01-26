import { useState } from "react";
import LoginInput from "./LoginInput"
import { styles } from "./Login.styles";
import { validateLogin } from "../../utils/validators";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert("Login successful 🎉");
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>

        <LoginInput
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />

        <LoginInput
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
          showToggle
          onToggle={() => setShowPassword(prev => !prev)}
          toggleText={showPassword ? "Hide" : "Show"}
        />

        <button
          type="submit"
          disabled={loading}
          style={styles.submitBtn}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
