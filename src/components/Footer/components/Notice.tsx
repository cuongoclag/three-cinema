import { FooterProps } from "../type";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        border: "1px solid #e3e1d6",
        position: "absolute",
        zIndex: "1",
        right: 0,
        width: "50px",
        height: "29px",
        textAlign: "center",
        top: "-19px",
        borderTop: "none",
        paddingTop: "6px",
      }}
      onClick={onClick}
    >
      <IonIcon name="caret-up-outline"></IonIcon>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        border: "1px solid #e3e1d6",
        position: "absolute",
        borderTop: "none",
        right: 0,
        zIndex: "1",
        width: "50px",
        height: "29px",
        textAlign: "center",
        top: "10px",
        paddingTop: "6px",
      }}
      onClick={onClick}
    >
      <IonIcon name="caret-down-outline"></IonIcon>
    </div>
  );
}

export default function Notice() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=" py-[19px] pl-[45px] border-y-[1px] border-[#e3e1d6] pb-3">
      <div className="flex m-0 justify-center">
        {
          <>
            <h2 className="font-semibold">Notice</h2>
            <Slider {...settings} className="w-[60%]">
              <h3 className="pl-4 text-zinc-400">
                Đã mở bán vé Eternals Chủng tộc bất tử
              </h3>
              <h3 className="pl-4 text-zinc-400">
                Đã mở bán vé Eternals Chủng tộc bất tử
              </h3>
            </Slider>
            <Link
              to="/"
              className="font-thin absolute right-[23%] font-extralight flex justify-items-center items-center gap-1"
            >
              More
              <IonIcon name="arrow-forward-circle-outline"></IonIcon>
            </Link>
          </>
        }
      </div>
    </div>
  );
}
