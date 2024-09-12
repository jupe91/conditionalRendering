import { useState } from 'react'
import './App.css'

function App() {

  const [login, setLogin] = useState(false);  

  function loginPressed(){
    setLogin(true);
  }

  //something for validating email

  //something if input is invalid

  return (
    <>
      <button onClick={loginPressed}>Login</button>
    </>
  )
}

export default App