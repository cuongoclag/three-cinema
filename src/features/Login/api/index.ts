import { LoginRespon } from "./../type/index";
import { AxiosResponse } from "axios";
import getAPI from "../../../lib/axios";

interface loginProps {
  taiKhoan: String;
  matKhau: String;
}

export const loginAPI = (
  data: loginProps
): Promise<AxiosResponse<LoginRespon>> => {
  return getAPI("/QuanLyNguoiDung/DangNhap", "POST", data);
};
