import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../../../components/Loading/Loading";
import { MovieType } from "../type";

type MovieListType = {
  home: {
    MovieList: MovieType[];
  };
};

export const Movie = () => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const page_size = 5;
  const totalPage = Math.ceil(movieList.length / page_size);
  const currentMovie = movieList.slice(
    (currentPage - 1) * page_size,
    currentPage * page_size
  );

  const { MovieList } = useSelector((state: MovieListType) => state.home);
  useEffect(() => {
    if (MovieList) {
      setMovieList(MovieList);
    }
  }, [MovieList]);
  return (
    <div className="max-w-container mx-auto my-[70px]">
      {movieList.length !== 0 ? (
        <div className="flex gap-x-2 items-center">
          <img
            className={
              currentPage === 1
                ? "w-[25px] h-[52px] rotate-180 cursor-pointer mr-2 opacity-20"
                : "w-[25px] h-[52px] rotate-180 cursor-pointer mr-2"
            }
            src="https://www.lottecinemavn.com/LCHS/Image/Main/btn_next2_on.png"
            alt="Button_Prev"
            onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
          />
          {currentMovie.map((item) => (
            <div
              key={item.maPhim}
              className="group min-w-[188px] h-[274px] relative flex justify-center items-center"
            >
              <div className="group-hover:block hidden absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
              <img
                src={item.hinhAnh}
                alt="Picture_Movie"
                className="w-full h-full object-cover"
              />
              <div className="group-hover:flex hidden flex-col absolute">
                <Link
                  to=""
                  className="w-[158px] h-12 leading-[48px] font-bold border border-[#c1b687] text-center text-[#c1b687] mb-[10px] z-10"
                >
                  Đặt vé
                </Link>
                <Link
                  to=""
                  className="w-[158px] h-12 leading-[48px] font-bold border border-[#c1b687] text-center text-[#c1b687] z-10"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          ))}
          <img
            className={
              currentPage === totalPage
                ? "w-[25px] h-[52px] cursor-pointer ml-2 opacity-20"
                : "w-[25px] h-[52px] cursor-pointer ml-2"
            }
            src="https://www.lottecinemavn.com/LCHS/Image/Main/btn_next2_on.png"
            alt="Button_Next"
            onClick={() =>
              currentPage !== totalPage && setCurrentPage(currentPage + 1)
            }
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
