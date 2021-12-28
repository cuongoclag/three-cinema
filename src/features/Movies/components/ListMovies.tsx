import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListMovies } from "../api";
import { MovieTypes } from "../type";
import IonIcon from "@reacticons/ionicons";

export const ListMovies = () => {
  const [tab, setTab] = useState(0);

  const [movies, setMovies] = useState<MovieTypes[]>([]);

  useEffect(() => {
    getListMovies().then((res) => {
      console.log("movies", res.data);
      setMovies(res.data.content);
      console.log("movies", movies);
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center my-7 gap-5">
        <span className="text-[#cdc197] font-bold cursor-pointer bg-[url('https://www.lottecinemavn.com/LCHS/Image/btn/btn_st02_on.gif')] bg-no-repeat flex justify-center items-center min-w-[175px] min-h-[55px]">
          Phim đang chiếu
        </span>
        <span className="text-[#cdc197] font-bold cursor-pointer bg-[url('https://www.lottecinemavn.com/LCHS/Image/btn/btn_st02_on.gif')] bg-no-repeat flex justify-center items-center min-w-[175px] min-h-[55px]">
          Phim sắp chiếu
        </span>
      </div>
      <div className="max-w-container mx-auto my-[70px]">
        <div className="flex gap-5 flex-wrap ">
          {movies.map((item, index) => (
            <div
              key={index}
              className="group w-[228px] h-auto relative  justify-center items-center bg-white shadow-lg  flex flex-col"
            >
              <div className=" group-hover:block hidden absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
              <img
                src={item.hinhAnh}
                alt="img"
                title="img"
                className="w-full h-full  object-cover"
              />
              <div className=" group-hover:flex hidden flex-col absolute w-[80%]">
                <Link
                  to=""
                  className="font-bold border border-[#c1b687] text-center text-[#c1b687] mb-[10px] z-10 p-4"
                >
                  Đặt vé
                </Link>
                <Link
                  to=""
                  className="font-bold border border-[#c1b687] text-center text-[#c1b687] mb-[10px] z-10 p-4"
                >
                  Chi tiết
                </Link>
              </div>
              <div className="w-full flex justify-center items-center border border-solid-[#dedede]">
                <div className="w-full pt-[12px] pr-[15px] pb-[11px] pl-[15px]">
                  <span className=" text-[14px] font-bold">{item.tenPhim}</span>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full text-center flex justify-center gap-2">
                  <span className="pr-[10px] text-xs border-r-[1px] text-gray-400 leading-8  px-0">
                    {item.danhGia}
                    <IonIcon name="star-outline"></IonIcon>
                  </span>
                  <span className=" text-xs text-gray-400 leading-8  px-0">
                    {item.ngayKhoiChieu}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
