import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
   const [isBlue, setIsBlue] = useState(false);
  const handleClick = () => {
    setIsBlue(!isBlue);
  };
  return (
    <div id="main">
      <p className={isBlue ? "blue-text" : "red-text"} >Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;
