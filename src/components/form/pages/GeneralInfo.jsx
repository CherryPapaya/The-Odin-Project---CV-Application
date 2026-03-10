import { useState } from "react";
import InputField from "../InputField";

export default function Contact({ onChange, person, formData }) {
  return (
    <div>
      <InputField 
        label="First name" 
        value={formData.fname ?? person.fname} 
        type="text" 
        attribute="fname" 
        onChange={onChange} 
      />
        
      <InputField 
        label="Last name" 
        value={formData.lname ?? person.lname} 
        type="text" 
        attribute="lname" 
        onChange={onChange} 
      />
        
      <InputField 
        label="Phone no." 
        value={formData.phone ?? person.phone} 
        type="tel" 
        attribute="phone" 
        onChange={onChange} 
      />
        
      <InputField 
        label="E-mail" 
        value={formData.email ?? person.email} 
        type="email" 
        attribute="email" 
        onChange={onChange} 
      />
        
    </div>
  );
}