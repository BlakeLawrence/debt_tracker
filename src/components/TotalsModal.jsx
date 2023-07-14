import React from "react";

const TotalsModal = ({
  outItem,
  debtAmount,
  incomeAmount,
  outgoingsObject,
}) => {
  return (
    <div className="w-1/2 h-1/2 bg-[#fff] rounded-lg m-2 p-2">
      <div>
        <h3>Total Debt</h3>
        <h4>£ {debtAmount?.number}</h4>
      </div>
      <div>
        <h3>Total Income</h3>
        <h4>£ {incomeAmount?.number}</h4>
      </div>
      <div>
        <h3>Total Monthly Outgoings</h3>
        <h4>{outgoingsObject.item}</h4>
        <h4>£{outgoingsObject?.amount}</h4>
      </div>
      <div>
        <h3>Months to pay off debt</h3>
        <h4>total months and date show here</h4>
      </div>
    </div>
  );
};

export default TotalsModal;
