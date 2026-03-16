import { useState } from "react";
import InputField from "../InputField";

export default function WorkExperience({ onChange, person, formData, handleAdd }) {
  const [total, setTotal] = useState(person.experience.length - 1 || 0);
  let expFields = [];
  
  function handleAdd() {
    setTotal(total + 1);
    console.log(total);
  }
  
  let i = 0;
  while (i <= total) {
    expFields.push(
      <InputField
        label="Experience"
        value={formData.experience?.[i] ?? person.experience?.[i] ?? ""}
        type="text"
        name="experience"
        index={i}
        onChange={onChange}
        />    
    )
    
    i++;
  }
  
  return (    
    <div className="form-section form-section-exp">
      
      {expFields}
      <button type="button" onClick={handleAdd}>Add experience</button>

      {/* <InputField
        label="Experience"
        value={formData.experience?.[1] ?? person.experience?.[1] ?? ""}
        type="text"
        name="experience"
        index={1}
        onChange={onChange}
      />
      
      <InputField
        label="Experience"
        value={formData.experience?.[2] ?? person.experience?.[2] ?? ""}
        type="text"
        name="experience"
        index={2}
        onChange={onChange}
      /> */}
    </div>
  );
}