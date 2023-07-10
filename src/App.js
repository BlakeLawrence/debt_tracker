import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import {
  incomeInput,
  mainHeading,
  buttonEnter,
  buttonDanger,
} from "./tailwind_classes/classNames";
import TotalsModal from "./components/TotalsModal";

function App() {
  return (
    <div className="w-full h-screen bg-blue-100">
      <div className="flex justify-center p-5">
        <h1 className={mainHeading}>Debt Tracker</h1>
      </div>
      <h2 className="ml-2">enter salary after tax</h2>
      <Input
        type="number"
        inputStyling={incomeInput}
        placeholder="enter salary"
      />
      <Button buttonStyling={buttonEnter} />
      <div>
        <h2 className="ml-2">enter outgoings (eg. phone, travel, bills)</h2>
        <Input
          type="text"
          inputStyling={incomeInput}
          placeholder="enter item"
        />
        <Input
          type="number"
          inputStyling={incomeInput}
          placeholder="enter amount"
        />
        <Button buttonStyling={buttonDanger} />
      </div>
      <div>
        <TotalsModal />
      </div>
    </div>
  );
}

export default App;
