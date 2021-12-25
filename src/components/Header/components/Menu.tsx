import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { MenuCinemaType } from "../type";

export default function Menu() {
  const listMenu: MenuCinemaType[] = [
    {
      titleMenu: "gift shop",
      link: "/gift-shop",
    },
    {
      titleMenu: "Booking",
      link: "/gift-shop",
    },
    {
      titleMenu: "movies",
      link: "/gift-shop",
    },
    {
      titleMenu: "cinemas",
      link: "/gift-shop",
    },
    {
      titleMenu: "promotion",
      link: "/gift-shop",
    },
  ];

  return (
    <div className=" border-b-[2px] mb-5 border-yellow-100">
      <ul className="flex flex-row justify-center p-[25px] gap-3.5">
        {listMenu.map((item, index) => (
          <li
            className="uppercase text-[16px] border-r-[1px] pr-5 last:border-none"
            key={index}
          >
            <Link to={item.link}>{item.titleMenu}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
