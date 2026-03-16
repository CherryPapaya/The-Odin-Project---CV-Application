import { useState } from "react";
import Contact from "./pages/GeneralInfo";
import WorkExperience from "./pages/WorkExp";

const pages = [
  Contact,
  WorkExperience,
];

export let isSubmitted = false;

export default function Form({ setIsSubmitted, person, setPerson }) {
  const [formData, setFormData] = useState(person ?? {});
  const [pageIndex, setPageIndex] = useState(0);
  
  function handleChange(name, value, index = null) {
    if (name === "experience") {
      setFormData(prev => {
        const updated = [...(prev.experience ?? [])];
        updated[index] = value;

        return {
          ...prev,
          experience: updated
        };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    const newPerson = {
      ...person,
      ...formData
    };

    setPerson(newPerson);
    setIsSubmitted(true);
    
    console.log(newPerson);
  }
  
  function handleClick(e) {
    const action = e.target.dataset.action;
    
    if (pageIndex < pages.length-1 && action === 'next') {
      setPageIndex(pageIndex + 1);
    }
    
    if (pageIndex > 0 && action === 'prev') {
      setPageIndex(pageIndex - 1);
    }
  }
  
  let Page = pages[pageIndex];
  return (
    <form onSubmit={handleSubmit}>
      <Page onChange={handleChange} person={person} formData={formData}/>
      
      <button type="button" data-action="prev" onClick={handleClick}>Previous</button>
      <button type="button" data-action="next" onClick={handleClick}>Next</button>
      <button type="submit">Submit</button>
    </form>
  );
}