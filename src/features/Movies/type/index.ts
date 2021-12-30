export interface ListBanner {
  statusCode: Number;
  maBanner: Number;
  maPhim: string;
  hinhAnh: string;
}

export interface MovieTypes {
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

export interface BannerMoviesRespon {
  statusCode: Number;
  message: string;
  dateTime: Date;
  content: ListBanner[];
}

export interface MovieRespon {
  statusCode: number;
  message: string;
  dateTime: Date;
  content: MovieTypes[];
}
