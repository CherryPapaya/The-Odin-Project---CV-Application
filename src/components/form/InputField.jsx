import { getArrayProperties } from "../../data/person";

export default function InputField({ value, label, type, name, index, onChange, attribute }) {
  
  const id = getArrayProperties().includes(name) ? name + attribute + index : name;
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        value={value ?? ""}
        onChange={(e) => {
          onChange(name, e.target.value, index, attribute);
        }}
      />
    </div>
  );
}