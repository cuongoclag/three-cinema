export interface RegisterType {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  hoTen: string;
}

export interface RegisterRespon {
  data: {
    data: RegisterType[];
  };
}
