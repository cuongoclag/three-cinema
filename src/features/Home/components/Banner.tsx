import React, { useState } from "react";
import imageGift1 from "../../../assets/images/banner_gift1.png";
import imageGift2 from "../../../assets/images/banner_gift2.png";
import imageGift3 from "../../../assets/images/banner_gift3.png";
import imageGift4 from "../../../assets/images/banner_gift4.jpg";
import imageGift5 from "../../../assets/images/banner_gift5.jpg";
import imageMovie1 from "../../../assets/images/banner_movie1.png";
import imageMovie2 from "../../../assets/images/banner_movie2.png";
import imageMovie3 from "../../../assets/images/banner_movie3.jpg";
import imageMovie4 from "../../../assets/images/banner_movie4.jpg";
import { MovieList, BannerType } from "../type";

export default function Banner() {
  const listIMGGift: string[] = [
    imageGift1,
    imageGift2,
    imageGift3,
    imageGift4,
    imageGift5,
  ];
  const listIMGMovie: MovieList[] = [
    { img: imageMovie1, video: "https://www.youtube.com/watch?v=DobBbl0_6Lc" },
    { img: imageMovie2, video: "https://www.youtube.com/watch?v=eytKQW5kA3Y" },
    {
      img: imageMovie3,
      video: "https://www.youtube.com/watch?v=p5BxPH6PXl0",
    },
    { img: imageMovie4, video: "https://www.youtube.com/watch?v=OB3g37GTALc" },
  ];
  const [isWidth, setIsWidth] = useState<boolean>(false);
  const [isTrailer, setIsTrailer] = useState<boolean>(false);
  const [indexIMGGift, setIndexIMGGift] = useState<number>(0);
  const [indexIMGMovie, setIndexIMGMovie] = useState<number>(0);
  const listMovie: BannerType[] = [
    {
      title: "VENOM: ĐỐI MẶT TỬ THÙ",
      age: 13,
      time: 97,
      date: "08/12/2021",
    },
    {
      title: "ETERNALS: CHỦNG TỘC BẤT TỬ",
      age: 16,
      time: 155,
      date: "03/12/2021",
    },
    {
      title: "THỤ HẢI: RỪNG TỬ KHÍ",
      age: 18,
      time: 117,
      date: "03/12/2021",
    },
    {
      title: "HÀNH TINH CÁT",
      age: 13,
      time: 155,
      date: "10/12/2021",
    },
    {
      title: "VÙNG ĐẤT CÂM LẶNG 2",
      age: 18,
      time: 97,
      date: "19/11/2021",
    },
    {
      title: "THIÊN THẦN HỘ MỆNH",
      age: 18,
      time: 124,
      date: "19/11/2021",
    },
    {
      title: "KỊCH TRƯỜNG CỦA TAKEMICHI",
      age: 16,
      time: 120,
      date: "10/12/2021",
    },
    {
      title: "VENOM: ĐỐI MẶT TỬ THÙ",
      age: 13,
      time: 97,
      date: "08/12/2021",
    },
  ];

  const handlePrev = () => {
    setIsWidth(false);
    if (!isWidth) {
      if (indexIMGGift === listIMGGift.length - 1) {
        setIndexIMGGift(0);
      } else {
        console.log(indexIMGGift);
        setIndexIMGGift(indexIMGGift + 1);
      }
    }
  };

  const handleNext = () => {
    setIsWidth(true);
    if (isWidth) {
      if (indexIMGMovie === listIMGMovie.length - 1) {
        setIndexIMGMovie(0);
      } else {
        setIndexIMGMovie(indexIMGMovie + 1);
      }
    }
  };

  return (
    <div className="relative flex gap-x-5">
      <div
        className={
          isWidth
            ? "h-[645px] min-w-[25%] transition-all duration-300"
            : "h-[645px] min-w-[55%] transition-all duration-300"
        }
      >
        <img
          className="h-full w-full object-cover"
          src={listIMGGift[indexIMGGift]}
          alt="Gift"
        />
        <div
          className="absolute top-1/2 translate-y-[-50%] w-[38px] h-[71px] left-[18%] cursor-pointer bg-[url('https://www.lottecinemavn.com/LCHS/Image/Main/btn_prev3.png')]"
          onClick={() => handlePrev()}
        ></div>
      </div>
      <div className="relative min-w-[20%] h-[645px]">
        <h2 className="flex justify-center items-center uppercase h-[121px] bg-[#2a2e33] text-center py-[50px] mb-5">
          <img
            src="https://www.lottecinemavn.com/LCHS/Image/Main/h2_boxoffice.png"
            alt="Title Box"
          />
        </h2>
        <div className="flex flex-col gap-y-5">
          {listMovie.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-x-4"
            >
              <div className="flex items-center gap-x-[5px] text-[#1a1917] cursor-pointer">
                <span className="text-xl italic font-bold">
                  {index + 1 + "."}
                </span>
                <span
                  className={
                    item.age === 13
                      ? "w-5 h-5 rounded-[50%] bg-[#1567C3] text-white flex justify-center items-center text-xs"
                      : item.age === 16
                      ? "w-5 h-5 rounded-[50%] bg-[#E6266E] text-white flex justify-center items-center text-xs"
                      : "w-5 h-5 rounded-[50%] bg-[#E70E1D] text-white flex justify-center items-center text-xs"
                  }
                >
                  {item.age}
                </span>
                <span className="w-[125px] text-sm overflow-hidden text-ellipsis whitespace-nowrap font-bold">
                  {item.title}
                </span>
              </div>
              <div className="flex gap-x-1 text-[#666] text-xs">
                <span>{item.time + "Phút"}</span>
                <span>|</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 h-16 leading-[64px] w-full bg-[#ee1c25] text-white font-bold text-center cursor-pointer">
          Mua vé ngay
        </div>
      </div>
      <div
        className={
          isWidth
            ? "relative h-[645px] min-w-[55%] transition-all duration-300"
            : "relative h-[645px] min-w-[25%] transition-all duration-300"
        }
      >
        <img
          className="h-full w-full object-cover"
          src={listIMGMovie[indexIMGMovie].img}
          alt="Movie"
        />
        <img
          className="absolute top-1/2 left-1/2 cursor-pointer w-[40px] h-[45px] translate-y-[-50%] translate-x-[-50%]"
          src="https://www.lottecinemavn.com/LCHS/Image/Main/btn_play.png"
          alt="Button_Play"
          onClick={() => setIsTrailer(true)}
        />
        <div
          className="absolute top-1/2 translate-y-[-50%] w-[38px] h-[71px] right-[18%] cursor-pointer bg-[url('https://www.lottecinemavn.com/LCHS/Image/Main/btn_next3.png')]"
          onClick={() => handleNext()}
        ></div>
      </div>
      {isTrailer && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)]">
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[970px] h-[548px]">
            <iframe
              className="w-full h-full"
              src={
                listIMGMovie[indexIMGMovie].video.replace(
                  "watch?v=",
                  "embed/"
                ) + "?autoplay=1"
              }
              frameBorder="0"
              allowFullScreen
              title="Movie"
              allow="autoplay; encrypted-media"
            />
            <img
              className="absolute right-[10px] top-[10px] cursor-pointer"
              src="https://www.lottecinemavn.com/LCHS/Image/btn/btn_close04.png"
              alt="IMG_Close"
              onClick={() => setIsTrailer(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
