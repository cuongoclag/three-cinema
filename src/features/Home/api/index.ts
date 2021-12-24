import { AxiosResponse } from "axios";
import getAPI from "../../../lib/axios";
import { MovieRespon, MovieDetailRespon } from "../type";

export const getListMovie = (): Promise<AxiosResponse<MovieRespon>> => {
  return getAPI("/QuanLyPhim/LayDanhSachPhim", "GET");
};

export const getMovieDetail = (
  id: string | string[] | null
): Promise<AxiosResponse<MovieDetailRespon>> => {
  return getAPI(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`, "GET");
};
