import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [therightname,settherightname]=useState("");

  const [count, setthecount]=useState(0);




  return (
    <div className="App">
      <input type="text" placeholder="insert here" onChange={(event)=>{settherightname(event.target.value);}}></input>
      <p>{therightname}</p>
      
      <div>
        <span>{count}</span><br></br>
        <button onClick={()=>{setthecount(count+1);}}>+</button><button onClick={()=>{setthecount(count-1);}}>-</button>
      </div>

    </div>
  );
}

export default App;
