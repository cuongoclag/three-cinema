import React from "react";

export const Loading = () => {
  return (
    <div className="fixed bg-[rgba(0,0,0,0.5)] inset-0 z-[99px] flex justify-center items-center">
      <div className="animate-spin h-16 w-16 mr-3 border-8 border-[rgba(255,255,255,0.4)] z-[99px] rounded-[50%] border-t-[#fff] border-l-[#fff]"></div>
    </div>
  );
};
