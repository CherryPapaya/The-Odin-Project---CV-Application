export default function Preivew({ setIsSubmitted, person }) {
  function handleClick() {
    setIsSubmitted(false);
  }
  
  return (
    <>
      <p>{person.fname}</p>
      <p>{person.lname}</p>
      <p>{person.phone}</p>
      <p>{person.email}</p>
      
      {
        person.experience.map(item => (
          <p>{item}</p>
        ))
      }
      <button type="button" onClick={handleClick}>Edit</button>
    </>
  );
}