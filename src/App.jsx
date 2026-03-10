import { useState } from 'react'
import Form from './components/form/Form'
import Preview from './components/preview/Preview';

import './App.css'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Page = isSubmitted ? Preview : Form;

  return (
    <Page setIsSubmitted={setIsSubmitted} />
  );
}

export default App
