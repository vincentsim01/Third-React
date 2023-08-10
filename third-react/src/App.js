import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [therightname,settherightname]=useState("");




  return (
    <div className="App">
      <input type="text" placeholder="insert here" onChange={(event)=>{settherightname(event.target.value);}}></input>
      <p>{therightname}</p>
      

    </div>
  );
}

export default App;
