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
      <div className=" w-full h-1/2 p-2 mb-4">
        <div className="border border-gray-300 bg-purple-300 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-purple-900">Total debt:</h3>
          <h4 className="text-purple-700 font-bold">{currency(debtAmount)}</h4>
        </div>
        <div className="border border-gray-300 bg-purple-300 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-purple-800">Total income:</h3>
          <h4 className=" text-purple-600 font-bold">
            {currency(incomeAmount)}
          </h4>
        </div>
        <div className="border border-gray-300 bg-purple-300 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-purple-800">
            Total monthly outgoings:
          </h3>
          <h4 className="text-purple-600 font-bold">
            {currency(outgoingsAmount)}
          </h4>
        </div>
        <div className="border border-gray-300 bg-purple-300 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-purple-800">
            Salary balance after outgoings:
          </h3>
          <h3 className="text-purple-600 font-bold">{currency(balance)}</h3>
        </div>
        <div className="border border-gray-300 bg-purple-300 rounded-xl py-1 px-2 mb-2">
          <h3 className="font-bold text-purple-800">You could be debt free:</h3>
          <h3 className="text-purple-600 font-bold">
            {months} months ({getFutureDate(months)})
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TotalsModal;
