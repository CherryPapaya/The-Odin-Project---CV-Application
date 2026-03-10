export default function InputField({ value, label, type, attribute, onChange }) {
  return (
    <div>
      <label htmlFor={attribute}>{label}</label>

      <input
        id={attribute}
        type={type}
        value={value || ""}
        onChange={(e) => {
          const newValue = e.target.value;
          onChange(attribute, newValue);
        }}
      />
    </div>
  );
}