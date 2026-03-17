import { useState } from "react";
import InputField from "../InputField";

export default function WorkExperience({ onChange, person, formData, handleAdd }) {
  const [total, setTotal] = useState(person.experience.length - 1 || 0);
  let expList = [];
  
  function handleAdd() {
    setTotal(total + 1);
    // console.log(expList);
  }
  
  let i = 0;
  while (i <= total) {
    expList.push(
      <div className={`experience-wrapper-${i}`} key={i}>
        <InputField
          label="Experience"
          attribute="company"
          value={formData.experience?.[i]?.company ?? person.experience?.[i]?.company ?? ""}
          type="text"
          name="experience"
          index={i}
          onChange={onChange}
        />
        
        <InputField
          label="Role"
          attribute="role"
          value={formData.experience?.[i]?.role ?? person.experience?.[i]?.role ?? ""}
          type="text"
          name="experience"
          index={i}
          onChange={onChange}
        />
        
        <InputField
          label="Start Date"
          attribute="startDate"
          value={formData.experience?.[i]?.startDate ?? person.experience?.[i]?.startDate ?? ""}
          type="date"
          name="experience"
          index={i}
          onChange={onChange}
        />
        
        <InputField
          label="End Date"
          attribute="endDate"
          value={formData.experience?.[i]?.endDate ?? person.experience?.[i]?.endDate ?? ""}
          type="date"
          name="experience"
          index={i}
          onChange={onChange}
        />
        
      </div>
    )
    
    i++;
  }
  
  return (    
    <div className="form-section form-section-exp">
      
      {expList}
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