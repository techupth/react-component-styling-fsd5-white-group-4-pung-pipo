import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Primary" text="Button" />
        <Button type="Secondary" text="Button" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" text="This is error alert box" />
        <Alert type="alert" text="This is warning alert box" />
        <Alert type="info" text="This is info alert box" />
        <Alert type="success" text="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
