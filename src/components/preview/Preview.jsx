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
          // TODO: Make items in experience and such into objects with key attribute
          <div key={Math.random()}>
            <p>{item.company}</p>
            <p>{item.role}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))
      }
      <button type="button" onClick={handleClick}>Edit</button>
    </>
  );
}