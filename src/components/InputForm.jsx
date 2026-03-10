import { useState } from "react";
import personData from "../data/person";

export default function Form() {
  const [person, setPerson] = useState(personData);
  const [formData, setFormData] = useState({});
  
  function handleChange(attribute, newValue) {
    setFormData(prev => ({
      ...prev,
      [attribute]: newValue
    }));
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    const newPerson = {
      ...person,
      ...formData
    };

    setPerson(newPerson);
    console.log(newPerson);
  }
  
  
  return (
    <form onSubmit={handleSubmit}>
      <InputField label="First name" type="text" attribute="fname" onChange={handleChange} />
      <InputField label="Last name" type="text" attribute="lname" onChange={handleChange} />
      <InputField label="Phone no." type="tel" attribute="phone" onChange={handleChange} />
      <InputField label="E-mail" type="email" attribute="email" onChange={handleChange} />
      
      <button type="submit" className="submit-btn js-submit-btn">
        Submit
      </button>
    </form>
  );
}

function InputField({ label, type, attribute, onChange}) {
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