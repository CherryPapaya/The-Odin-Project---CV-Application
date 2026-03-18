import * as configModule from "../../data/data-configs";

import "../../styles/preview.css"

export default function Preivew({ setIsSubmitted, person }) {
  const configs = Object.values(configModule);
  
  function handleClick() {
    setIsSubmitted(false);
  }
    
  const stringEntries = Object.entries(person)
                          .filter(([key, value]) => typeof value === "string" && !key.includes("name"));
  return (
    <>
      <div className="preview">
        <div className="general-info">
          <p className="name">{person.fname} {person.lname}</p>
          
          {
            stringEntries
              .map(([key, value]) => (
                  <p 
                    key={key}
                    className={key}
                  >
                    {value}
                  </p>
              ))
          }  
        </div>
        
        <div className="experience">
          {
            configs.map(obj => {
              const data = person[obj.name];

              if (Array.isArray(data)) {
                return data.map((item, i) =>
                  obj.fields.map(field => (
                    <p key={`${obj.name}-${i}-${field.attribute}`}>
                      {item?.[field.attribute]}
                    </p>
                  ))
                );
              }

              return null;
            })
          }
        </div>
      </div>
      
      <button type="button" onClick={handleClick}>Edit</button>
    </>
  );
}