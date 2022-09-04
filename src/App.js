
import {  useEffect, useState } from "react";

function App() {
  let [loading,setLoading]=useState(true);
  let [coins,setCoins]=useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then(response=>response.json()
    ).then(json=>{
      console.log(json);
      setCoins(json);
      setLoading(false);
    })
  },[]);
  return (
    <div>
      {loading ?<span>loading...</span>:null}
      <ul>
        {coins.map((coin)=> <li>{coin.name}</li>)}
      </ul>
    </div>
  );
}
export default App;
