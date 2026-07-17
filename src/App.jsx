import React from 'react'
import Greetings from './components/Greetings'
import ColorText from './components/colorText.jsx'
import Football from './components/football.jsx'
import MyForm from './components/myForm.jsx'
import NavBar from './components/navBar.jsx'
import ContextExample from './components/Context.jsx'
const App = () => {
  return (
    <div className="bg-black-500">
    <Greetings name="Lucy" />
    <ColorText text="this text is colorful " color="blue"/>
    <Football />
    <MyForm />
    <ContextExample />
    </div>
  );
}

export default App;