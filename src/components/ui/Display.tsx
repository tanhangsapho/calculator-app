import React from "react";

const Display = ({ value }: { value: string }) => {
  return (
    <div className="bg-gray-900 h-20 mb-4 rounded-lg text-right pr-4 text-3xl text-white font-mono flex items-center justify-end overflow-hidden">
      {value}
    </div>
  );
};

export default Display;
