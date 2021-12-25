export interface BannerType {
  title: string;
  age: number;
  time: number;
  date: string;
}
export interface MovieList {
  img: string;
  video: string;
}

export interface MovieType {
  biDanh: string;
  dangChieu: boolean;
  danhGia: number;
  hinhAnh: string;
  hot: boolean;
  maNhom: string;
  maPhim: number;
  moTa: string;
  ngayKhoiChieu: Date;
  sapChieu: boolean;
  tenPhim: string;
  trailer: string;
}
export interface MovieRespon {
  statusCode: number;
  message: string;
  dateTime: Date;
  content: MovieType[];
}

export interface MovieDetailRespon {
  statusCode: number;
  message: string;
  dateTime: Date;
  content: MovieType;
}
