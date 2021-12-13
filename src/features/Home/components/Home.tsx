import Banner from "./Banner";
import { Contact } from "./Contact";
import { Event } from "./Event";
import { Movie } from "./Movie";
import Pr from "./Pr";

export const Home = () => {
  return (
    <main>
      <Pr />
      <Banner />
      <Movie />
      <Event />
      <Contact />
    </main>
  );
};
