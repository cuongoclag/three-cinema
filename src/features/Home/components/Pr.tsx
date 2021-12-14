import React, { useState } from "react";
import imagePr1 from "../../../assets/images/pr1.png";
import imagePr2 from "../../../assets/images/pr2.png";
import imagePr3 from "../../../assets/images/pr3.png";
import imagePr4 from "../../../assets/images/pr4.png";

export default function Pr() {
  const listIMG = [imagePr1, imagePr2, imagePr3, imagePr4];
  const [isPr, setIsPr] = useState(true);
  return (
    <>
      {isPr && (
        <div className="fixed inset-0 bg-[rgba(202,200,200,0.7)] z-50">
          <div className="fixed w-[980px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <img
              src={listIMG[Math.floor(Math.random() * listIMG.length)]}
              alt="Pr"
            />
            <div className="bg-black p-[10px]">
              <h2
                className="text-right text-white text-xs font-normal cursor-pointer"
                onClick={() => setIsPr(false)}
              >
                Đóng
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
