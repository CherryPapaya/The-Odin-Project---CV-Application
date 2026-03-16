import InputField from "../InputField";

export default function GeneralInfo({ onChange, person, formData }) {
  return (
    <div className="form-section form-section-general">
      <InputField 
        label="First name" 
        value={formData.fname ?? person.fname} 
        type="text" 
        name="fname" 
        onChange={onChange} 
      />
        
      <InputField 
        label="Last name" 
        value={formData.lname ?? person.lname} 
        type="text" 
        name="lname" 
        onChange={onChange} 
      />
        
      <InputField 
        label="Phone no." 
        value={formData.phone ?? person.phone} 
        type="tel" 
        name="phone" 
        onChange={onChange} 
      />
        
      <InputField 
        label="E-mail" 
        value={formData.email ?? person.email} 
        type="email" 
        name="email" 
        onChange={onChange} 
      />
        
    </div>
  );
}