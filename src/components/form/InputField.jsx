import { getArrayProperties } from "../../data/person";

export default function InputField({ label, type, value, name, index, attribute, onChange }) {
  
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