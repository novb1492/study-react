
import { useState,useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  console.log('a');
  const api=()=>{
    console.log('api');
  }
  const click=()=>{
    setNumber(number+1);
  }
  useEffect(api,[]);

  return (
    <div>
      {number}
      <button onClick={click}>ff</button>
    </div>
  );
}
export default App;
