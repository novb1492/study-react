
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [keyword, setKeyword] = useState('s');
  console.log('a');
  const click = () => {
    setNumber(number + 1);
  }
  const search = (event) => {
    setKeyword(event.target.value);
  }

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    new window.kakao.maps.Map(container, options);
    }, []);
  useEffect(() => {
    if (keyword.length > 5) {
      console.log('search' + keyword);
    }
  }, [keyword]);
  return (
    <div>
      <div id="map" style={{width:"500px", height:"400px"}}></div> 
      {number}
      <input type="text" onChange={search} value={keyword} ></input>
      <button onClick={click}>ff</button>
    </div>
  );
}
export default App;
