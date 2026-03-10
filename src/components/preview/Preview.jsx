export default function Preivew({ setIsSubmitted }) {
  function handleClick() {
    setIsSubmitted(false);
  }
  
  return (
    <>
      <p>Preview :D</p>
      <button type="button" onClick={handleClick}>Edit</button>
    </>
  );
}