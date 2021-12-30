import React, { ReactElement, useState } from "react";
import { ListPromotions } from "../type";

export const PromotionsNavigation = ({ setTabChild }: any) => {
  const listMenuNavigation: ListPromotions[] = [
    {
      id: 1,
      title: "hot promotion",
    },
    {
      id: 2,
      title: "GIFTS BY MOVIE",
    },
    {
      id: 3,
      title: "PARTNERSHIP",
    },
    {
      id: 4,
      title: "CINEMA",
    },
  ];

  const handleShowMoreTab = (number: number) => {
    setTabChild(number);
  };
  return (
    <div className="bg-[#dad2b4] p-2">
      <ul className="text-center">
        {listMenuNavigation.map((item, index) => (
          <li
            key={index}
            className="inline-block uppercase font-medium px-4 py-0 text-sm cursor-pointer active:text-red-600"
            onClick={() => handleShowMoreTab(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
