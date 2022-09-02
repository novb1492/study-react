
import Button from "./Button";
import PropTypes from "prop-types";
function App() {
  return (
    <div>
      helloㄴ
      <Button text={'1'}></Button>
    </div>
  );
}
Button.prototype={
  text:PropTypes.string.isRequired
}
export default App;
