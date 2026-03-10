import { useState } from "react";
import personData from "../../data/person";
import Contact from "./pages/GeneralInfo";
import WorkExperience from "./pages/WorkExp";

const pages = [
  Contact,
  WorkExperience,
];

export default function Form() {
  const [person, setPerson] = useState(personData);
  const [formData, setFormData] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  
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