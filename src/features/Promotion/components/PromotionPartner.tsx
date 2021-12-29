import React, { ReactElement, useState } from "react";
import { dataPromotion } from "../api";
import PromotionList from "../type";

export const PromotionPartner = () => {
  const [promotionPartner, setPromotionPartner] = useState<PromotionList[]>(
    dataPromotion.partner
  );
  return (
    <div className=" max-w-container mx-auto my-[70px]">
      <div className="flex">
        <h2 className="font-bold flex-1 mb-5">Phim</h2>
        <span className="uppercase font-thin text-xs">More</span>
      </div>
      <div className="flex gap-[20px] flex-wrap">
        {promotionPartner.map((item) => (
          <React.Fragment>
            <div
              key={item.id}
              className="w-[230px] group relative border-[#dedede] border bg-white"
            >
              <img src={item.img} alt="123" />
              <div className="text-center p-2">
                <span className=" text-xs">{`${item.start} ~ ${item.end}`}</span>
              </div>
              {item.event === true && (
                <React.Fragment>
                  <div className="absolute group-hover:block hidden absolute  bg-[rgba(0,0,0,0.7)] h-[40px] bottom-[40px] w-full leading-[40px] text-center">
                    <span className="text-sm text-white font-bold">
                      Sự kiện sắp kết thúc
                    </span>
                  </div>
                </React.Fragment>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
