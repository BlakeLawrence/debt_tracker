import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import {
  incomeInput,
  mainHeading,
  buttonEnter,
} from "./tailwind_classes/classNames";
import TotalsModal from "./components/TotalsModal";

function App() {
  const [debt, setDebt] = useState("");
  const [income, setIncome] = useState("");
  const [outAmount, setOutAmount] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [debtAmount, setDebtAmount] = useState(0);
  const [outgoingsAmount, setOutgoingsAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [months, setMonths] = useState(0);

  const financialsUrl = "http://localhost:5000/api/v1/financials";

  async function getFinancials() {
    const response = await fetch(financialsUrl);
    const data = await response.json();
    console.log("fetched data:", data);
    setDebtAmount(data.payload[data.payload.length - 1].debt);
    setIncomeAmount(data.payload[data.payload.length - 1].income);
    setOutgoingsAmount(data.payload[data.payload.length - 1].outgoings);
    setBalance(data.payload[data.payload.length - 1].balance);
    setMonths(data.payload[data.payload.length - 1].months);
  }
  getFinancials();

  async function handleFinancials() {
    let balance = income - outAmount;
    const response = await fetch(financialsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        debt: debt,
        income: income,
        outgoings: outAmount,
        balance: balance,
        months: Math.floor(debt / balance),
      }),
    });
    const data = await response.json();
    console.log("posted data:", data);
    setDebt("");
    setIncome("");
    setOutAmount("");
    getFinancials();
  }

  return (
    <div className="w-full h-screen bg-grey-100">
      <div className="flex justify-center p-5">
        <h1 className={mainHeading}>Debt Calculator</h1>
      </div>
      <h2 className="ml-2">What is your current debt?</h2>
      <Input
        value={debt}
        type="number"
        inputStyling={incomeInput}
        placeholder="enter debt"
        changeEvent={(event) => setDebt(event.target.value)}
      />

      <div>
        <h2 className="ml-2">What is your salary after tax?</h2>
        <Input
          value={income}
          type="number"
          inputStyling={incomeInput}
          placeholder="enter salary"
          changeEvent={(event) => setIncome(event.target.value)}
        />
      </div>

      <div>
        <h2 className="ml-2">
          Total Monthly Outgoings (eg. phone, travel, rent)
        </h2>
        <Input
          value={outAmount}
          type="number"
          inputStyling={incomeInput}
          placeholder="enter amount"
          changeEvent={(event) => setOutAmount(event.target.value)}
        />
        <Button clickEvent={handleFinancials} buttonStyling={buttonEnter} />
      </div>

      <div>
        <TotalsModal
          outgoingsAmount={outgoingsAmount}
          debtAmount={debtAmount}
          incomeAmount={incomeAmount}
          months={months}
          balance={balance}
        />
      </div>
    </div>
  );
}

export default App;
