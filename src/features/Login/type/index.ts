export interface LoginType {
  taiKhoan: string;
  matKhau: string;
}
export interface LoginRespon {
  data: {
    data: {
      statusCode: Number;
      message: string;
      dateTime: string;
      content: string;
    };
  };
}
