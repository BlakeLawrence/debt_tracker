import React from "react";

const TotalsModal = ({ item, debt }) => {
  return (
    <div className="w-1/2 h-1/2 bg-[#fff] rounded-lg m-2 p-2">
      <div>
        <h3>Total Debt</h3>
        <h4>£ {debt}</h4>
      </div>
      <div>
        <h3>Total Income</h3>
        <h4>£ amount shown here</h4>
      </div>
      <div>
        <h3>Total Monthly Outgoings</h3>
        <h4>{item}</h4>
      </div>
      <div>
        <h3>Months to pay off debt</h3>
        <h4>total months and date show here</h4>
      </div>
    </div>
  );
};

export default TotalsModal;
