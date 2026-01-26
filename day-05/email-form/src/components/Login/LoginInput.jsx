import { styles } from "./Login.styles";

export default function LoginInput({
  label,
  type,
  name,
  value,
  onChange,
  error,
  showToggle,
  onToggle,
  toggleText
}) {
  return (
    <div style={styles.field}>
      <label>{label}</label>

      <div style={styles.inputBox}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          style={styles.input}
        />

        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            style={styles.toggleBtn}
          >
            {toggleText}
          </button>
        )}
      </div>

      {error && <span style={styles.error}>{error}</span>}
    </div>
  );
}
