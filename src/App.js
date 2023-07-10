import { useState } from "react";
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
  const [debt, setDebt] = useState(0);
  const [item, setItem] = useState("");

  return (
    <div className="w-full h-screen bg-blue-100">
      <div className="flex justify-center p-5">
        <h1 className={mainHeading}>Debt Tracker</h1>
      </div>
      <h2 className="ml-2">What is your current debt?</h2>
      <Input
        type="number"
        inputStyling={incomeInput}
        placeholder="enter debt"
        onChange={(event) => setDebt(event.target.value)}
      />
      <Button buttonStyling={buttonEnter} />
      <h2 className="ml-2">What is your salary after tax?</h2>
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
          onChange={(event) => setItem(event.target.value)}
        />
        <Input
          type="number"
          inputStyling={incomeInput}
          placeholder="enter amount"
        />
        <Button buttonStyling={buttonDanger} />
      </div>
      <div>
        <TotalsModal item={item} debt={debt} />
      </div>
    </div>
  );
}

export default App;
