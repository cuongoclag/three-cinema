import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListMovies } from "../api";
import { MovieTypes } from "../type";
import IonIcon from "@reacticons/ionicons";
import { format } from "date-fns";
import MovieItem from "./MovieItem";
import ButtonShowMore from "./ButtonShowMore";

export const ListMovies = () => {
  const [tab, setTab] = useState(0);

  const [movies, setMovies] = useState<MovieTypes[]>([]);

  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    getListMovies().then((res) => {
      console.log("movies", res.data);
      setMovies(res.data.content);
      console.log("movies", movies);
    });
  }, []);

  const movieTab1 = movies.filter((item) => item.sapChieu === true);
  const movieTab0 = movies.filter((item) => item.dangChieu === true);

  const handleShowMoreTab = (number: number) => {
    setTab(number);
    setShowMore(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center my-7 gap-5">
        <span
          className={`${
            tab === 0
              ? "text-[#cdc197] font-bold cursor-pointer bg-[#231f20] bg-no-repeat flex justify-center items-center min-w-[175px] min-h-[55px]"
              : "bg-[#efebdb] text-[#cdc197] font-bold cursor-pointer  flex justify-center items-center min-w-[175px] min-h-[55px]"
          }`}
          onClick={() => handleShowMoreTab(0)}
        >
          Phim đang chiếu
        </span>
        <span
          className={`${
            tab === 1
              ? "text-[#cdc197] font-bold cursor-pointer bg-[#231f20] bg-no-repeat flex justify-center items-center min-w-[175px] min-h-[55px]"
              : "bg-[#efebdb] text-[#cdc197] font-bold cursor-pointer  flex justify-center items-center min-w-[175px] min-h-[55px]"
          }`}
          onClick={() => handleShowMoreTab(1)}
        >
          Phim sắp chiếu
        </span>
      </div>
      <div className="max-w-container mx-auto my-[70px]">
        <div className="flex gap-5 flex-wrap ">
          {tab === 0 && (
            <>
              {showMore === false && (
                <>
                  {movieTab0.slice(0, 8).map((item, index) => (
                    <>
                      <MovieItem data={item} key={index} />
                    </>
                  ))}
                  <ButtonShowMore setShowMore={setShowMore} />
                </>
              )}
              {showMore === true && (
                <>
                  {movieTab0.map((item, index) => (
                    <>
                      <MovieItem data={item} key={index} />
                    </>
                  ))}
                </>
              )}
            </>
          )}
          {tab === 1 && (
            <>
              {showMore === false && (
                <>
                  {movieTab1.slice(0, 8).map((item, index) => (
                    <>
                      <MovieItem data={item} key={index} />
                    </>
                  ))}
                  <ButtonShowMore setShowMore={setShowMore} />
                </>
              )}
              {showMore === true && (
                <>
                  {movieTab1.map((item, index) => (
                    <>
                      <MovieItem data={item} key={index} />
                    </>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
