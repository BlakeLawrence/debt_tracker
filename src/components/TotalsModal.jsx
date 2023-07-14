import React from "react";
import { currency } from "../helper-functions/currency";
import { getFutureDate } from "../helper-functions/futureDate";

const TotalsModal = ({ debtAmount, incomeAmount, outgoingsObject }) => {
  let salaryBalance = incomeAmount.number - outgoingsObject.amount;
  let monthsToPayDebt = debtAmount.number / salaryBalance;

  return (
    <div>
      {debtAmount?.number > 0 && (
        <div className="w-1/2 h-1/2 bg-[#fff] rounded-lg m-2 p-2">
          {debtAmount?.number > 0 && (
            <div>
              <h3 className="font-bold">Total Debt</h3>
              <h4>{currency(debtAmount?.number)}</h4>
            </div>
          )}
          {incomeAmount.number > 0 && (
            <div>
              <h3 className="font-bold">Total Income</h3>
              <h4>{currency(incomeAmount?.number)}</h4>
            </div>
          )}
          {outgoingsObject.amount > 0 && (
            <div>
              <h3 className="font-bold">Total Monthly Outgoings</h3>
              <h4>{currency(outgoingsObject?.amount)}</h4>
            </div>
          )}
          {salaryBalance > 0 && (
            <div>
              <h3 className="font-bold">Salary balance after outgoings:</h3>
              <h3>{currency(salaryBalance)}</h3>
            </div>
          )}
          {monthsToPayDebt > 0 && (
            <div>
              <h3 className="font-bold">
                Debt free in {Math.floor(monthsToPayDebt)} Months :
              </h3>

              {getFutureDate(monthsToPayDebt)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TotalsModal;
