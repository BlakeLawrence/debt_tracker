import React from "react";
import { currency } from "../helper-functions/currency";
import { getFutureDate } from "../helper-functions/futureDate";

const TotalsModal = ({
  outgoingsAmount,
  debtAmount,
  incomeAmount,
  months,
  balance,
}) => {
  return (
    <div>
      <div className="w-1/2 h-1/2 bg-[#fff] rounded-lg m-2 p-2">
        <div>
          <h3 className="font-bold">Total debt</h3>
          <h4 className="mb-2">{currency(debtAmount)}</h4>
        </div>
        <div>
          <h3 className="font-bold">Total income</h3>
          <h4 className="mb-2">{currency(incomeAmount)}</h4>
        </div>
        <div>
          <h3 className="font-bold">Total monthly outgoings</h3>
          <h4 className="mb-2">{currency(outgoingsAmount)}</h4>
        </div>
        <div>
          <h3 className="font-bold">Salary balance after outgoings:</h3>
          <h3 className="mb-2">{currency(balance)}</h3>
        </div>
        <div>
          <h3 className="font-bold">
            You could be debt free in {months} Months :
          </h3>
          {getFutureDate(months)}
        </div>
      </div>
    </div>
  );
};

export default TotalsModal;
