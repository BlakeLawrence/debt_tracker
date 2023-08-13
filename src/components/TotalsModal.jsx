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
      <div className="w-full h-1/2 p-2 mb-4">
        <div className="bg-red-100 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-red-500">Total debt</h3>
          <h4 className="text-gray-700">{currency(debtAmount)}</h4>
        </div>
        <div className="bg-green-100 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-green-600">Total income</h3>
          <h4 className=" text-gray-700">{currency(incomeAmount)}</h4>
        </div>
        <div className="bg-amber-100 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-amber-400">Total monthly outgoings</h3>
          <h4 className=" text-gray-700">{currency(outgoingsAmount)}</h4>
        </div>
        <div className="bg-blue-100 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-blue-600">
            Salary balance after outgoings:
          </h3>
          <h3 className=" text-gray-700">{currency(balance)}</h3>
        </div>
        <div>
          <h3 className="font-bold text-white">
            You could be debt free in {months} Months :
          </h3>
          <h3 className=" text-white">{getFutureDate(months)}</h3>
        </div>
      </div>
    </div>
  );
};

export default TotalsModal;
