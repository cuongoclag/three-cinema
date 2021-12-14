import React from "react";
import IMGEvent1 from "../../../assets/images/event_1.jpg";
import IMGEvent2 from "../../../assets/images/event_2.jpg";
import IMGEvent3 from "../../../assets/images/event_3.jpg";
import IMGEvent4 from "../../../assets/images/event_4.jpg";
import IMGEvent5 from "../../../assets/images/event_5.jpg";
import IMGEvent6 from "../../../assets/images/event_6.png";
import IMGEvent7 from "../../../assets/images/event_7.png";

export const Event = () => {
  return (
    <div className="w-full bg-[url('https://www.lottecinemavn.com/LCHS/Image/Main/bg_pattern.png')] bg-repeat bg-left-top border-t-[1px] border-[#e3e1d6] py-10">
      <h2 className="uppercase text-center text-[#231f20] text-[40px] italic font-bold font-serif">
        Event
      </h2>
      <div className="grid grid-cols-3 gap-5 max-w-container mx-auto py-10">
        <img
          className="col-start-1 row-span-3 w-full h-full"
          src={IMGEvent1}
          alt="Event 1"
        />
        <img
          className="col-start-2 w-full h-full"
          src={IMGEvent2}
          alt="Event 2"
        />
        <img
          className="col-start-3 row-span-2 w-full h-full"
          src={IMGEvent3}
          alt="Event 3"
        />
        <img
          className="col-start-1 w-full h-full"
          src={IMGEvent4}
          alt="Event 4"
        />
        <img
          className="col-start-2 row-start-2 row-span-3 w-full h-full"
          src={IMGEvent5}
          alt="Event 5"
        />
        <img
          className="col-start-3 row-start-3 row-span-3 w-full h-full"
          src={IMGEvent6}
          alt="Event 6"
        />
        <img
          className="col-start-1 col-span-2 w-full h-full"
          src={IMGEvent7}
          alt="Event 7"
        />
      </div>
    </div>
  );
};
