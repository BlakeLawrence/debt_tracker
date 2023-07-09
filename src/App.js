import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import {
  incomeInput,
  mainHeading,
  buttonEnter,
} from "./tailwind_classes/classNames";

function App() {
  return (
    <div className="w-full h-screen bg-blue-100">
      <div className="flex justify-center p-5">
        <h1 className={mainHeading}>Debt Tracker</h1>
      </div>
      <h2 className="ml-2">enter salary after tax</h2>
      <Input inputStyling={incomeInput} />
      <Button buttonStyling={buttonEnter} />
    </div>
  );
}

export default App;
