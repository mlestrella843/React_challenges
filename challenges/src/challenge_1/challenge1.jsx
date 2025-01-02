import { useState } from 'react'
import './App.css'

function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const [buttonText, setButtonText] = useState("to See");

  const handleClick = () => {
    if(gameRunning){
      setGameRunning(false);
      setButtonText("Pause");
    }
    else{
      setGameRunning(true);
      setButtonText("Play");
    }
  }

  return (
    <>
     <button
      className='bg-blue-600 text-white rounded text-md px-4 py-2'
      onClick={handleClick}
     >
      {buttonText}
     </button>
    </>
  )
}
export default App