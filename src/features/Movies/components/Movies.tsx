import React, { ReactElement } from "react";
import { BannerMovie } from "./BannerMovie";
import { ListMovies } from "./ListMovies";

export default function Movies() {
  return (
    <main>
      <BannerMovie />
      <ListMovies />
    </main>
  );
}
