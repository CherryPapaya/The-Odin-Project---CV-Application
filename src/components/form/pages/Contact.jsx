import { useState } from "react";
import InputField from "../InputField";

export default function Contact({ onChange }) {
  return (
    <div>
      <InputField label="First name" type="text" attribute="fname" onChange={onChange} />
      <InputField label="Last name" type="text" attribute="lname" onChange={onChange} />
      <InputField label="Phone no." type="tel" attribute="phone" onChange={onChange} />
      <InputField label="E-mail" type="email" attribute="email" onChange={onChange} />
    </div>
  );
}