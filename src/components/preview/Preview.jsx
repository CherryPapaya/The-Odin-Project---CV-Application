import * as configModule from "../../data/data-configs";

export default function Preivew({ setIsSubmitted, person }) {
  const configs = Object.values(configModule);
  
  function handleClick() {
    setIsSubmitted(false);
  }
    
  let index = 0;
  return (
    <>
      <p>{person.fname}</p>
      <p>{person.lname}</p>
      <p>{person.phone}</p>
      <p>{person.email}</p>
      
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
      
      <button type="button" onClick={handleClick}>Edit</button>
    </>
  );
}