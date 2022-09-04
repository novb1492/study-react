
import { useEffect, useState } from "react";

function Hello() {
  let [text]=useState(null);
  function start() {
    console.log('created');
    return bye;
  }
  function bye() {
    console.log('bye');
  }
  useEffect(start,[]);
  return (
    <div>
        <h1>{text}</h1>
    </div>
  );
}
function App() {
  let [flag, setFlag] = useState(false);
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
