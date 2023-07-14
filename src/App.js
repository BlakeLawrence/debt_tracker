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
  const [debt, setDebt] = useState();
  const [debtAmount, setDebtAmount] = useState({});
  const [income, setIncome] = useState();
  const [incomeAmount, setIncomeAmount] = useState({});
  const [outItem, setOutItem] = useState("");
  const [outAmount, setOutAmount] = useState();
  const [outgoingsObject, setOutgoingsObject] = useState({});

  function handleDebtAmount() {
    setDebtAmount({ id: Math.random() * 100, number: debt });
    setDebt("");
  }
  function handleIncomeAmount() {
    setIncomeAmount({ id: Math.random() * 100, number: income });
    setIncome("");
  }

  function handleOutgoings() {
    setOutgoingsObject({
      id: Math.random() * 100,
      item: outItem,
      amount: outAmount,
    });
    setOutAmount("");
    setOutItem("");
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
        value={income}
        type="number"
        inputStyling={incomeInput}
        placeholder="enter salary"
        changeEvent={(event) => setIncome(event.target.value)}
      />
      <Button
        clickEvent={() => {
          handleIncomeAmount();
        }}
        buttonStyling={buttonEnter}
      />
      <div>
        <h2 className="ml-2">enter outgoings (eg. phone, travel, bills)</h2>
        <Input
          value={outItem}
          type="text"
          inputStyling={incomeInput}
          placeholder="enter item"
          changeEvent={(event) => setOutItem(event.target.value)}
        />
        <Input
          value={outAmount}
          type="number"
          inputStyling={incomeInput}
          placeholder="enter amount"
          changeEvent={(event) => setOutAmount(event.target.value)}
        />
        <Button clickEvent={handleOutgoings} buttonStyling={buttonDanger} />
      </div>
      <div>
        <TotalsModal
          debtAmount={debtAmount}
          item={outItem}
          debt={debt}
          outgoingsObject={outgoingsObject}
          income={income}
          incomeAmount={incomeAmount}
        />
      </div>
    </div>
  );
}

export default App;
