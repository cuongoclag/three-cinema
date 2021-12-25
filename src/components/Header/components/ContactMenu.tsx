import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import pic1 from "../../../assets/images/cinema.png";
import pic2 from "../../../assets/images/icon_fb_top.png";
import { MenuType } from "../type";

export default function ContactMenu() {
  const listMenu: MenuType[] = [
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "MemberShip",
      link: "/login",
    },
    {
      title: "Customer Servce",
      link: "/login",
    },
    {
      title: "",
      link: "",
    },
  ];

  return (
    <div className="bg-yellow-100 p-[8px]">
      <div className="flex w-full justify-around h-full">
        <div className=" flex items-center flex-1 justify-center">
          <div className="flex flex-row">
            <img src={pic1} alt="pic1" className="w-[16px] h-[16px]" />
            <span className="text-[12px] font-semibold px-1.5 text-[#555]">
              Lotte Cinema APP
            </span>
          </div>
          <div className="flex flex-row items-center items-center">
            <img src={pic2} alt="pic2" className="w-[16px] h-[16px]" />
            <span className="text-[12px] font-semibold px-1.5 text-[#555]">
              Lotte Cinema APP
            </span>
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <ul className="flex flex-row gap-4">
            {listMenu.slice(0, 3).map((item, index) => (
              <li key={index} className="text-[12px]">
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
            {listMenu.slice(3).map((item, index) => (
              <li
                key={index}
                className="text-[12px] bg-[url('https://www.lottecinemavn.com/LCHS/Image/btn/btn_vietnam.gif')] bg-no-repeat w-[85px] h-[20px] "
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
