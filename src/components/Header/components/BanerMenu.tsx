import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import banerMenu from "../../../assets/images/banerMenu.jpg";

export default function BanerMenu() {
  return (
    <div className="w-full">
      <Link to="/">
        <img className="m-0 mx-[auto] mb-1 " src={banerMenu} alt="pic" />
      </Link>
      <div className="bg-[url('https://www.lottecinemavn.com/LCHS/Image/bg/bg_gnb.gif')] bg-repeat w-full h-1"></div>
    </div>
  );
}
