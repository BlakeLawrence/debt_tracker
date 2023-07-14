import { useState, useEffect } from "react";
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
  const [debtAmount, setDebtAmount] = useState({});
  const [item, setItem] = useState("");
  const [income, setIncome] = useState(0);
  const [outAmount, setOutAmount] = useState(0);

  function handleDebtAmount() {
    setDebtAmount({ id: Math.random() * 100, number: debt });
    setDebt("");
  }

  return (
    <div className="w-full h-screen bg-blue-100">
      <div className="flex justify-center p-5">
        <h1 className={mainHeading}>Debt Tracker</h1>
      </div>
      <h2 className="ml-2">What is your current debt?</h2>
      <Input
        value={debt}
        type="number"
        inputStyling={incomeInput}
        placeholder="enter debt"
        changeEvent={(event) => setDebt(event.target.value)}
      />
      <Button
        clickEvent={() => {
          handleDebtAmount();
        }}
        buttonStyling={buttonEnter}
      />
      <h2 className="ml-2">What is your salary after tax?</h2>
      <Input
        type="number"
        inputStyling={incomeInput}
        placeholder="enter salary"
        changeEvent={(event) => setIncome(event.target.value)}
      />
      <Button buttonStyling={buttonEnter} />
      <div>
        <h2 className="ml-2">enter outgoings (eg. phone, travel, bills)</h2>
        <Input
          type="text"
          inputStyling={incomeInput}
          placeholder="enter item"
          changeEvent={(event) => setItem(event.target.value)}
        />
        <Input
          type="number"
          inputStyling={incomeInput}
          placeholder="enter amount"
          changeEvent={(event) => setOutAmount(event.target.value)}
        />
        <Button buttonStyling={buttonDanger} />
      </div>
      <div>
        <TotalsModal
          debtAmount={debtAmount}
          item={item}
          debt={debt}
          outAmount={outAmount}
          income={income}
        />
      </div>
    </div>
  );
}

export default App;
