import React from "react";
const StatisticCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};
export default StatisticCard;
