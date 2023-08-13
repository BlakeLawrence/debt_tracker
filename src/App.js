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
  //setting user input state
  const [debt, setDebt] = useState("");
  const [income, setIncome] = useState("");
  const [outAmount, setOutAmount] = useState("");
  // setting fetched data state
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [debtAmount, setDebtAmount] = useState(0);
  const [outgoingsAmount, setOutgoingsAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [months, setMonths] = useState(0);
  const [financeSection, setFinanceSection] = useState(false);

  const financialsUrl = "http://localhost:5000/api/v1/financials";

  async function getFinancials() {
    const response = await fetch(financialsUrl);
    const data = await response.json();
    const payload = data.payload[data.payload.length - 1];
    setDebtAmount(payload.debt);
    setIncomeAmount(payload.income);
    setOutgoingsAmount(payload.outgoings);
    setBalance(payload.balance);
    setMonths(payload.months);
  }
  useEffect(() => {
    getFinancials();
  }, [income]);

  async function handleFinancials() {
    let balance = income - outAmount;
    try {
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
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full h-screen bg-grey-100">
      <div className="flex justify-center p-5">
        <h1 className={mainHeading}>Debt Planner</h1>
      </div>
      {!financeSection && (
        <button
          className="border-green-500 border text-green-500 p-2 rounded-lg ml-12"
          onClick={() => setFinanceSection(!financeSection)}
        >
          Show Debt Calculator
        </button>
      )}
      {financeSection && (
        <div className="fixed w-1/2 ml-4 mt-2 mb-4 border border-blue-300 rounded-lg">
          <div className=" flex justify-end w-full">
            <button
              className=" bg-red-500 text-white font-semibold py-1 px-2 m-2 rounded-md hover:font-bold fixed"
              onClick={() => setFinanceSection(!financeSection)}
            >
              X
            </button>
          </div>
          <h2 className="mt-2 ml-2">What is your current debt?</h2>
          <Input
            value={debt}
            type="number"
            inputStyling={incomeInput}
            placeholder="enter debt"
            changeEvent={(event) => setDebt(event.target.value)}
          />

          <div>
            <h2 className="ml-2">What is your income total after tax?</h2>
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
              Your total Monthly Outgoings (eg. phone, travel, rent)?
            </h2>
            <Input
              value={outAmount}
              type="number"
              inputStyling={incomeInput}
              placeholder="enter amount"
              changeEvent={(event) => setOutAmount(event.target.value)}
            />
            <Button
              income={income}
              debt={debt}
              outAmount={outAmount}
              clickEvent={handleFinancials}
              buttonStyling={buttonEnter}
              text={"calculate"}
            />
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
      )}
    </div>
  );
}

export default App;
