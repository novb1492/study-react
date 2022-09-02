
import { useState,useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [keyword, setKeyword] = useState('s');

  console.log('a');
  const api=()=>{
    console.log('api');
  }
  const click=()=>{
    setNumber(number+1);
  }
  const search=(event)=>{
    setKeyword(event.target.value);
  }
  useEffect(api,[]);
  useEffect(()=>{
    if(keyword.length>5){
      console.log('search'+keyword);
    }
  },[keyword]);
  return (
    <div>
      {number}
      <input type="text" onChange={search} value={keyword} ></input>
      <button onClick={click}>ff</button>
    </div>
  );
}
export default App;
