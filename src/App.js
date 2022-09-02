
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const click=()=>{
    setNumber(number+1);
  }
  return (
    <div>
      {number}
      <button onClick={click}>ff</button>
    </div>
  );
}
export default App;
