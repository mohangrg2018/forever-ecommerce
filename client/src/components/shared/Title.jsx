import React from "react";

const Title = ({ title1, title2 }) => {
  return (
    <div className="flex items-center justify-center gap-2 uppercase text-2xl font-semibold">
      <p className="text-gray-400">{title1}</p>
      <p>{title2}</p>
      <hr className="w-10 border border-gray-600" />
    </div>
  );
};

export default Title;
