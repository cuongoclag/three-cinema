import React, { ReactElement } from "react";
import { FooterTypes, CompanyTypes } from "../type/";

export default function InforFooter() {
  const listFooter: FooterTypes[] = [
    {
      title: "Membership",
    },
    {
      title: "Personal data processing policy",
    },
    {
      title: "Terms of Use",
    },
    {
      title: "Sitemap",
    },
    {
      title: "Recruitment",
    },
    {
      title: "Advertisement",
    },
    {
      title: "About lotte cinema",
    },
    {
      title: "Cinema Coin Term and Condition",
    },
  ];
  const listCompany: CompanyTypes[] = [
    {
      company: "CÔNG TY TNHH LOTTE CINEMA VIỆT NAM",
    },
    {
      company:
        "Giấy CNĐKDN: 0302575928, đăng ký lần đầu ngày 02/05/2008, đăng ký thay đổi lần thứ 10 ngày 30/03/2018, cấp bởi Sở KHĐT Thành phố Hồ Chí Minh",
    },

    {
      company:
        "Địa chỉ: Tầng 3, TTTM Lotte, số 469 đường Nguyễn Hữu Thọ, Phường Tân Hưng, Quận 7, TPHCM, Việt Nam",
    },
    {
      company: "Hotline: (028) 3775 2524",
    },
  ];
  return (
    <div className="max-w-container mx-auto mt-7">
      <span>
        <img
          src="https://www.lottecinemavn.com/LCHS/Image/logo_footer.gif?v=17111301"
          alt="foooter logo"
        />
      </span>
      <ul className="flex justify-between mt-4">
        {listFooter.map((item, index) => (
          <li
            key={index}
            className="text-xs border-r-[1px] pr-3 last:border-none"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div>
        {listCompany.map((item, index) => (
          <p className="text-xs leading-3 text-zinc-400 leading-4" key={index}>
            {item.company}
          </p>
        ))}
        <p className="copy text-xs leading-4 text-zinc-400">
          COPYRIGHT © LOTTECINEMAVN.COM - ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
