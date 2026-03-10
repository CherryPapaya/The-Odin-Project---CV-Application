import { useState } from "react";

export default function InputField({ label, type, attribute, onChange}) {
  const [input, setInput] = useState('');
  
  return (
    <div>
      <label>{label}</label>
      <input 
        type={type}
        value={input}
        onChange={(e) => {
          const newValue = e.target.value;
          setInput(newValue);
          onChange(attribute, newValue);
        }} />
    </div>
  );
}