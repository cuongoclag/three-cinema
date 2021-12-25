import React, { ReactElement } from "react";
import IonIcon from "@reacticons/ionicons";
import { Controller, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUserLogin } from "../loginSlice";

export default function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmitForm = async (data: any) => {
    const body = {
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau.trim(),
    };
    const res: any = await dispatch(getUserLogin(body));
    if (res) {
      if (res.payload.response?.status === 404) {
        toast.error("Tài khoản không tồn tại", {
          position: "top-center",
          autoClose: 3000,
        });
      } else if (res.payload.response?.status === 400) {
        toast.error("Tài khoản hoặc mật khẩu không đúng", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        history.push("/");
        toast.success("Đăng nhập thành công", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } else {
      history.push(res.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="p-[50px] bg-[#f9f6ec]">
      <div className="py-px-[0px] px-[210px]">
        <h1 className="text-2xl mb-6 font-normal">Login</h1>
        <div className="flex bg-white w-full p-[50px] gap-5">
          <div>
            <span className="text-xs text-neutral-400">
              Please sign-in to enjoy benefits for Lotte Cinema member.
            </span>
            <form
              action="#"
              className="mt-[3.25rem] flex"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <div>
                <div className="form-group flex mb-[14px]">
                  <p className="font-bold flex-1 w-[89px]">ID</p>
                  <Controller
                    name="taiKhoan"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        name="name"
                        placeholder="Vui lòng nhập địa chỉ Email"
                        required
                        className="p-3 border-gray-300 border-[1px] text-xs bg-zinc-100 w-64"
                        onChange={field.onChange}
                        value={getValues("taiKhoan")}
                      />
                    )}
                  />
                </div>
                <div className="form-group flex">
                  <p className="font-bold flex-1 w-[89px]">Password</p>
                  <Controller
                    name="matKhau"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="password"
                        name="matKhau"
                        className="p-3 border-gray-300 border-[1px] text-xs bg-zinc-100 w-64"
                        required
                        onChange={field.onChange}
                        value={getValues("matKhau")}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="form-group w-[98px] h-[98px] flex justify-center bg-stone-900 ml-3 pb-5">
                <button
                  type="submit"
                  className="text-yellow-200 bg-[url('https://www.lottecinemavn.com/LCHS/Image/Icon/icon_login.png')] bg-center bg-no-repeat text-xs pt-[3.5rem] font-medium"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex ml-20 mt-4 gap-7">
              <div className="flex items-center">
                <input type="checkbox" name="checkID"></input>
                <label className="text-xs font-medium">Save ID</label>
              </div>
              <div className="flex items-center">
                <label className="text-xs font-medium">Find ID</label>
                <IonIcon name="arrow-forward-circle-outline" />
              </div>
              <div className="flex items-center">
                <label className="text-xs font-medium">Find Password</label>
                <IonIcon name="arrow-forward-circle-outline" />
              </div>
            </div>
          </div>
          <div>
            <Link to="/detail-job">
              <img
                src="https://media.lottecinemavn.com/Media/WebAdmin/c776c5c1a6f347b4b6ecd42921159152.jpg"
                alt="banerMenu"
              />
            </Link>
          </div>
        </div>
        <div className="flex  justify-center bg-[#efebdb] w-full py-5 gap-5 items-center">
          <p className="text-sm text-[#666666] ">
            If you have ID L.POINT, you can sign-in to all Lotte Group
            subsidiaries easily.
          </p>
          <button
            type="submit"
            className="text-xs bg-white p-[10px] border-slate-300 border-2 font-bold"
          >
            REGISTER ID NOW
          </button>
        </div>
      </div>
    </div>
  );
}
