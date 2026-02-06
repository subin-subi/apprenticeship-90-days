import "./select.css";

function Select({ options = [], onChange }) {
  return (
    <select className="select" onChange={onChange}>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

export default Select;
