import { useState } from 'react'
import './App.css'

function App() {

  const [login, setLogin] = useState(false);  

  const buttonText = login ? 'Logout' : 'Login'

  function loginPressed(){
    setLogin(true);
  }

  //something for validating email

  //something if input is invalid

  return (
    <>
      <button onClick={loginPressed}>{buttonText}</button>
    </>
  )
}

export default App