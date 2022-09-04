
import { useState } from "react";

function Hello() {
  return (
    <div>
        <h1>ghhhh</h1>
    </div>
  );
}
function App() {
  let [flag, setFlag] = useState(true);
  function change() {
    setFlag(!flag);
  }
  return (
    <div>
      {flag? <Hello/>:null}
      <button onClick={change}>b</button>
    </div>
  );
}
export default App;
