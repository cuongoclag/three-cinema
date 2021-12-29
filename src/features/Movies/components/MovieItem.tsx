import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { MovieTypes } from "../type";
import IonIcon from "@reacticons/ionicons";
import { format } from "date-fns";
import { Routes } from "../../../utils";

export default function MovieItem({ data }: any) {
  return (
    <div className="group w-[228px] h-auto relative  justify-center items-center bg-white shadow-lg  flex flex-col">
      <div className=" group-hover:block hidden absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
      <img
        src={data.hinhAnh}
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
          to={Routes.movie + `?id=${data.maPhim}`}
          className="font-bold border border-[#c1b687] text-center text-[#c1b687] mb-[10px] z-10 p-4"
        >
          Chi tiết
        </Link>
      </div>
      <div className="w-full flex justify-center items-center border border-solid-[#dedede]">
        <div className="w-full pt-[12px] pr-[15px] pb-[11px] pl-[15px]">
          <span className=" text-[14px] font-bold">{data.tenPhim}</span>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full text-center flex justify-center gap-2">
          <span className="pr-[10px] text-xs border-r-[1px] text-gray-400 leading-8  px-0">
            {data.danhGia}
            <IonIcon name="star-outline"></IonIcon>
          </span>
          <span className=" text-xs text-gray-400 leading-8  px-0">
            {format(new Date(data.ngayKhoiChieu), "dd/MM/yyyy")}
          </span>
        </div>
      </div>
    </div>
  );
}
