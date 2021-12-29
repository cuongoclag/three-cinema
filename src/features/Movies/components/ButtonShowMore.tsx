import React, { ReactElement } from "react";

export default function ButtonShowMore({ setShowMore }: any) {
  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <button
      className="w-full bg-[#efefef] p-3 font-bold border-[1px] border-[#dedede]"
      onClick={handleShowMore}
    >
      Thêm
    </button>
  );
}
