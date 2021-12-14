import { AxiosResponse } from "axios";
import getAPI from "../../../lib/axios";
import { MovieRespon } from "../type";

export const getListMovie = (): Promise<AxiosResponse<MovieRespon>> => {
  return getAPI("/QuanLyPhim/LayDanhSachPhim", "GET");
};
