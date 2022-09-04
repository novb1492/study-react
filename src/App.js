
import { useEffect, useState } from "react";

function Hello() {
  let [text,setText]=useState(null);
  useEffect(()=>{
    console.log('created');
    setText('hello');
    return ()=>console.log("de");
  },[]);
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
