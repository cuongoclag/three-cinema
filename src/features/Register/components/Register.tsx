import React, { ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { registerAPI } from "../api";
import { RegisterType } from "../type";

export default function Register() {
  const [type, setType] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
  });

  const handleChangeInput = (event: any) => {
    let { value, name } = event.target;
    setType({
      ...type,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!type.taiKhoan) {
      toast.error("Vui lòng nhập tên", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (!type.soDt) {
      toast.error("Vui lòng nhập số điện thoại", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (type.soDt.length < 10) {
      toast.error("Vui lòng nhập số điện thoại lớn hơn hoặc bằng 10 số", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (!type.email) {
      toast.error("Vui lòng nhập địa chỉ email", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(type.email)) {
      console.log("come hẻe");
      toast.error("Vui lòng nhập đúng định dạng địa chỉ email", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    registerAPI(type)
      .then((res) => {
        if (res) {
          console.log("aaaaaaaaaaaaaa");
          toast.success("Đăng ký thành công", {
            position: "top-center",
            autoClose: 3000,
          });
          setType({
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            hoTen: "",
          });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.content, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };
  return (
    <form
      className="flex justify-center bg-[#f9f6ec] p-[60px] min-h-screen"
      onSubmit={handleSubmit}
    >
      <div className="bg-white p-16 rounded shaow-2xl w-2/3 space-y-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">
          Hãy tạo tài khoản đi nào :))
        </h2>
        <div className="form-group ">
          <label className="block">Họ tên</label>
          <input
            type="text"
            name="hoTen"
            className="border border-gray-400 p-3 w-2/3 border-2 rounded outline-none focus:border-purple-500"
            onChange={handleChangeInput}
            value={type.hoTen}
          />
        </div>
        <div className="form-group ">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            className="border border-gray-400 p-3 w-2/3 border-2 rounded outline-none focus:border-purple-500"
            onChange={handleChangeInput}
            value={type.email}
          />
        </div>
        <div className="form-group ">
          <label className="block">Số điện thoại</label>
          <input
            type="number"
            name="soDt"
            className="border border-gray-400 p-3 w-2/3 border-2 rounded outline-none focus:border-purple-500"
            onChange={handleChangeInput}
            value={type.soDt}
          />
        </div>
        <div className="form-group ">
          <label className="block">Tài khoản</label>
          <input
            type="text"
            name="taiKhoan"
            className="border border-gray-400 p-3 w-2/3 border-2 rounded outline-none focus:border-purple-500"
            onChange={handleChangeInput}
            value={type.taiKhoan}
          />
        </div>
        <div className="form-group ">
          <label className="block">Password</label>
          <input
            type="password"
            name="matKhau"
            className="border border-gray-400 p-3 w-2/3 border-2 rounded outline-none focus:border-purple-500"
            onChange={handleChangeInput}
            value={type.matKhau}
          />
        </div>
        <button
          type="submit"
          className="block w-2/3 bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
