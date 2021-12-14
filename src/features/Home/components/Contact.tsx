import React from "react";
import IMGInfoFB from "../../../assets/images/info_facebook.jpg";
import IMGInfoYoutube from "../../../assets/images/info_youtube.jpg";
import IMGInfoInsta from "../../../assets/images/info_instagram.jpg";
import IMGInfoBCT from "../../../assets/images/info_bct.png";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center gap-x-[2px] py-[50px] border-y-[1px] border-[#e3e1d6] ">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/user/LotteCinemaVietnam"
      >
        <img src={IMGInfoYoutube} alt="" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/lottecinema"
      >
        <img src={IMGInfoFB} alt="" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/lottecinema_vietnam/"
      >
        <img src={IMGInfoInsta} alt="" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="http://online.gov.vn/Home/WebDetails/50588"
      >
        <img src={IMGInfoBCT} alt="" />
      </a>
    </div>
  );
};
