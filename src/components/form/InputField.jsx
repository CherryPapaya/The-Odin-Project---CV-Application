export default function InputField({ value, label, type, name, index, onChange }) {
  const id = name === 'experience' ? name + index : name;
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        value={value ?? ""}
        onChange={(e) => {
          onChange(name, e.target.value, index);
        }}
      />
    </div>
  );
}