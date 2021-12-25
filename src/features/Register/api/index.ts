import { AxiosResponse } from "axios";
import getAPI from "../../../lib/axios";
import { RegisterRespon } from "../type";

interface registerProps {
  taiKhoan: String;
  matKhau: String;
  email: String;
  soDt: String;
  hoTen: String;
}
export const registerAPI = (
  data: registerProps
): Promise<AxiosResponse<RegisterRespon>> => {
  return getAPI("/QuanLyNguoiDung/DangKy", "POST", data);
};
