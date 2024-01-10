/** @jsxImportSource @emotion/react */
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Primary" buttonText="Button" />
        <Button type="Secondary" buttonText="Button" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert severity="error" message="This is error alert box" />
        <Alert severity="warning" message="This is warning alert box" />
        <Alert severity="info" message="This is info alert box" />
        <Alert severity="success" message="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
