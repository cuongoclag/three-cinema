import React, { ReactElement, useEffect, useState } from "react";
import Slider from "react-slick";
import { getListBanner } from "../api";
import { ListBanner } from "../type";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="z-20 absolute top-1/2 translate-y-[-50%] w-[38px] h-[71px] left-[18%] cursor-pointer bg-[url('https://www.lottecinemavn.com/LCHS/Image/Main/btn_prev3.png')]"
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className=" z-20 absolute top-1/2 translate-y-[-50%] w-[38px] h-[71px] right-[18%] cursor-pointer bg-[url('https://www.lottecinemavn.com/LCHS/Image/Main/btn_next3.png')]"
    ></div>
  );
}

export const BannerMovie = () => {
  const [bannerMoives, setBannerMovies] = useState<ListBanner[]>([]);

  const settings = {
    dots: true,
    appendDots: (dots: any) => (
      <div>
        {/* <span>{dots}</span> */}
        {dots}
      </div>
    ),
    customPaging: () => (
      <li className="absolute bottom-[100%] active:bg-[url('https://www.lottecinemavn.com/LCHS/Image/Bg/bg_indicator_on.png')]   bg-no-repeat bg-[url('https://www.lottecinemavn.com/LCHS/Image/Bg/bg_indicator_off.png')]"></li>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    getListBanner().then((res) => {
      console.log("abnner", res.data);
      setBannerMovies(res.data.content);
      console.log("baner", bannerMoives);
    });
  }, []);

  return (
    <div className="relative">
      <h2 className="font-bold uppercase text-center block bg-[#dad2b4] p-2 ">
        Hot movies
      </h2>
      <div className="bg-slate-900 py-0 px-16 h-[420px] min-w-[55%] ">
        <Slider {...settings}>
          {bannerMoives.map((item, index) => (
            <img
              className="h-[420px] min-w-[55%] object-cover"
              src={item.hinhAnh}
              alt=""
              key={index}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
