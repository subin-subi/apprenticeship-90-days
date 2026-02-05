import Input from "../common/Input";
import Button from "../common/Button";
import PasswordToggle from "./PasswordToggle";
import useForm from "../../hooks/useForm";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { loginValidator } from "../../utils/validators";

function LoginForm() {
  const { type, visible, toggle } = usePasswordToggle();

  const { values, errors, loading, handleChange, handleSubmit } =
    useForm({ email: "", password: "" }, loginValidator);

  const submit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    alert("Login success");
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Welcome Back 👋
      </h2>

      <Input
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <div className="relative">
        <Input
          label="Password"
          name="password"
          type={type}
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <PasswordToggle visible={visible} toggle={toggle} />
      </div>

      <Button
        loading={loading}
        disabled={!values.email || !values.password}
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
