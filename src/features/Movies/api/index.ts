import { MovieRespon } from "./../../Home/type/index";
import { BannerMoviesRespon } from "./../type/index";
import { AxiosResponse } from "axios";
import getAPI from "../../../lib/axios";

export const getListBanner = (): Promise<AxiosResponse<BannerMoviesRespon>> => {
  return getAPI("/QuanLyPhim/LayDanhSachBanner", "GET");
};

export const getListMovies = (): Promise<AxiosResponse<MovieRespon>> => {
  return getAPI("/QuanLyPhim/LayDanhSachPhim", "GET");
};
