import { useState } from 'react'
import personData from './data/person.jsx'
import Form from './components/form/Form'
import Preview from './components/preview/Preview';

import './App.css'

function App() {
  const [person, setPerson] = useState(personData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const Page = isSubmitted ? Preview : Form;

  return (
    <Page setIsSubmitted={setIsSubmitted} person={person} setPerson={setPerson} />
  );
}

export default App
