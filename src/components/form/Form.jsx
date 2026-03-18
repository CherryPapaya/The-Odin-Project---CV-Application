import { useState } from "react";
import GeneralInfo from "./pages/GeneralInfo";
import ListPage from "./pages/ListPage";
import { getArrayProperties } from "../../data/person";
import { educationConfig, experienceConfig } from "../../data/page-configs";

const pages = [
  { component: GeneralInfo },
  { component: ListPage, config: experienceConfig },
  { component: ListPage, config: educationConfig }
];

export let isSubmitted = false;

export default function Form({ setIsSubmitted, person, setPerson }) {
  const [formData, setFormData] = useState(person ?? {});
  const [pageIndex, setPageIndex] = useState(0);
  
  function handleChange(name, value, index = null, attribute = null) {
    if (getArrayProperties().includes(name)) {
      setFormData(prev => {
        const array = prev[name] ?? [];
        const updated = [...array];

        const currentItem = updated[index] ?? {};

        if (attribute) {
          updated[index] = {
            ...currentItem,
            [attribute]: value
          };
        } else {
          updated[index] = value; 
        }

        return {
          ...prev,
          [name]: updated
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
    console.log(getArrayProperties());
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
  
  let { component: Page, config } = pages[pageIndex];
  return (
    <form onSubmit={handleSubmit}>
      <Page config={config} onChange={handleChange} person={person} formData={formData} />
      
      <button type="button" data-action="prev" onClick={handleClick}>Previous</button>
      <button type="button" data-action="next" onClick={handleClick}>Next</button>
      <button type="submit">Submit</button>
    </form>
  );
}