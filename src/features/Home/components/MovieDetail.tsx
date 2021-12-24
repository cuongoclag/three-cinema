import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieDetail, MovieType } from "..";
import useQuery from "../../../utils/useQuery";
import { format } from "date-fns";

export const MovieDetail = () => {
  const [isTrailer, setIsTrailer] = useState<boolean>(false);
  const [movieItem, setMovieItem] = useState<MovieType>();
  const query = useQuery();

  useEffect(() => {
    getMovieDetail(query.id)
      .then((res) => setMovieItem(res.data.content))
      .catch(console.log);
  }, [query.id]);
  return (
    <>
      {movieItem && (
        <>
          {isTrailer && (
            <div
              className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50"
              onClick={() => setIsTrailer(false)}
            >
              <iframe
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-2/3 h-2/3"
                src={
                  movieItem.trailer.includes("youtube")
                    ? movieItem.trailer.replace("watch?v=", "embed/") +
                      "?autoplay=1"
                    : "https://www.youtube.com/embed/" + movieItem.trailer
                }
                frameBorder="0"
                allowFullScreen
                title="Movie"
                allow="autoplay; encrypted-media"
              />
            </div>
          )}
          <div className="max-w-container mx-auto flex gap-x-[25px]">
            <div className="">
              <div className="group relative w-[175px] h-[250px] ">
                <img src={movieItem.hinhAnh} alt="" className="w-full h-full" />
                <div className="absolute inset-0 group-hover:bg-[rgba(0,0,0,0.5)] transition-all">
                  <img
                    src="https://www.lottecinemavn.com/LCHS/Image/Btn/btnc_play.png"
                    alt=""
                    onClick={() => setIsTrailer(true)}
                    className="absolute cursor-pointer w-12 h-12 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden group-hover:block transition-all"
                  />
                </div>
              </div>
              <Link
                to=""
                className="block w-full h-11 leading-[44px] mt-[10px] bg-[#231f20] text-center text-base font-bold text-[#cdc197]"
              >
                Đặt vé
              </Link>
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="text-2xl text-[#231f20] font-bold">
                {movieItem.tenPhim}
              </h2>
              <div className="flex gap-x-2 items-center">
                <img
                  className="h-5"
                  src="https://www.galaxycine.vn/website/images/ic_star_yellow.png"
                  alt=""
                />
                <div>
                  <b>{movieItem.danhGia}</b>
                  <span>/</span>
                  <span className="text-[#a0a3a7]">10</span>
                </div>
                <span className="bg-[#231f20] text-[#cdc197] py-[5px] px-[10px] cursor-pointer font-bold">
                  Đánh Giá
                </span>
                {movieItem.hot && (
                  <p className="bg-[#231f20] w-max text-[#cdc197] font-bold p-1">
                    HOT
                  </p>
                )}
              </div>
              <p className="inline-block">
                <b className="mr-2">Mô tả:</b>
                {movieItem.moTa}
              </p>
              <p className="inline-block">
                <b className="mr-2">Ngày khởi chiếu:</b>
                {format(new Date(movieItem.ngayKhoiChieu), "dd/MM/yyyy")}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
