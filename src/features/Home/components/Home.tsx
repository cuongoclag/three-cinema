import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieList } from "../homeSlice";
import Banner from "./Banner";
import { Contact } from "./Contact";
import { Event } from "./Event";
import { Movie } from "./Movie";
import Pr from "./Pr";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);
  return (
    <main className="overflow-hidden">
      <Pr />
      <Banner />
      <Movie />
      <Event />
      <Contact />
    </main>
  );
};
