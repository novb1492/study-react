import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Detail from "./components/Detail";
import Home from "./Home";


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={ <Home></Home>}></Route>
      <Route path="/movie/:id" element={ <Detail></Detail>}></Route>
    </Routes>
  </Router>;
}
export default App;
