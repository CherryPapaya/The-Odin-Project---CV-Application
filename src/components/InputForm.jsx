import { useState } from "react";
import person from "../data/person";

export default function Form() {
  const [person, setPerson] = useState(person);
  
  function handleSubmit() {
    const newPerson = () => {
      []
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <InputField label="First name" type="text" attribute="fname" />
      <InputField label="Last name" type="text" attribute="lname" />
      <InputField label="Phone no." type="tel" attribute="phone" />
      <InputField label="E-mail" type="email" attribute="email" />
      
      <button type="submit">Submit</button>
    </form>
  );
}

function InputField({ label, type}) {
  const [input, setInput] = useState('');
  
  return (
    <div>
      <label>{label}</label>
      <input 
        type={type}
        htmlFor={label}
        value={input}
        onChange={(e) => {
          const newValue = e.target.value;
          setInput(newValue);
          console.log(newValue);
        }} />
    </div>
  );
}