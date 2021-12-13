import { GiftShopProps } from "../type";
import IMG from "../../../assets/images/gift_img_1.jpg";
import IMG2 from "../../../assets/images/gift_img_2.png";
import IMG3 from "../../../assets/images/gift_img_3.jpg";
import IMG4 from "../../../assets/images/gift_img_4.jpg";
import { useRef, useState } from "react";

export const GiftShop: React.FC<GiftShopProps> = () => {
  interface GiftShop {
    id: number;
    title: string;
    price: string;
    date: string;
    img: string;
    category: number;
  }

  const refCateGift1 = useRef<HTMLDivElement>(null);
  const refCateGift2 = useRef<HTMLDivElement>(null);
  const refCateGift3 = useRef<HTMLDivElement>(null);
  const [activeCateGift, setactiveCateGift] = useState<number>(1)

  const [giftShop, setGiftShop] = useState<GiftShop[]>([
    {
      id: 1,
      title: "Harmony Couple Combo",
      price: "135.000",
      date: "3 tháng",
      img: IMG,
      category: 1,
    },
    {
      id: 2,
      title: "Vé Xem Phim 2D",
      price: "105.000",
      date: "3 tháng",
      img: IMG2,
      category: 2,
    },
    {
      id: 3,
      title: "Harmony Combo",
      price: "110.000",
      date: "3 tháng",
      img: IMG3,
      category: 3,
    },
    {
      id: 4,
      title: "Harmony Plus Combo",
      price: "135.000",
      date: "3 tháng",
      img: IMG4,
      category: 3,
    },
  ]);

  const handleCateGift = (ref: number) => {
    if (ref === 1) {
      setactiveCateGift(ref)
      if (!refCateGift1.current) return;
      refCateGift1.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (ref === 2) {
      setactiveCateGift(ref)
      if (!refCateGift2.current) return;
      refCateGift2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setactiveCateGift(ref)
      if (!refCateGift3.current) return;
      refCateGift3.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="flex w-[calc(100%_-_10px)] sticky top-0 bg-white">
        <button
          className={`w-1/3 leading-[50px] text-center h-[50px] ${activeCateGift === 1 ? "bg-[#cdc197]" : "border border-[#c0c0c0]"}`}
          onClick={() => handleCateGift(1)}
        >
          <p className="font-bold">Bán Chạy Nhât</p>
        </button>
        <button
          className={`w-1/3 leading-[50px] text-center h-[50px] ${activeCateGift === 2 ? "bg-[#cdc197]" : "border border-[#c0c0c0]"}`}
          onClick={() => handleCateGift(2)}
        >
          <p className="font-bold">Danh Mục Bán Hàng</p>
        </button>
        <button
          className={`w-1/3 leading-[50px] text-center h-[50px] ${activeCateGift === 3 ? "bg-[#cdc197]" : "border border-[#c0c0c0]"}`}
          onClick={() => handleCateGift(3)}
        >
          <p className="font-bold">Lotte Combo</p>
        </button>
      </div>
      <div className="block">
        <div className="block" ref={refCateGift1}>
          <h3 className="mb-4 pt-8 text-[#231f20] font-bold text-[18px]">
            Bán Chạy Nhất
          </h3>
          <div className="flex gap-[10px] flex-wrap">
            {giftShop
              .filter((item) => item.category === 1)
              .map((item) => {
                return (
                  <div className="w-[calc(25%_-_10px)] border-[#dedede] border mb-10" key={item.id}>
                    <img
                      className="w-full object-cover"
                      src={item.img}
                      alt="gift-shop"
                    />
                    <div className="px-[15px] pb-5 pt-4 h-24">
                      <p className="font-bold text-[#231f20] text-[16px]">
                        {item.title}
                      </p>
                      <p className="text-[#666] text-[13px]">
                        Hạn sử dụng sản phẩm{" "}
                        <span className="ml-1 border-l-2 pl-1">
                          {item.date}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-5 p-[15px] justify-between items-center border-t-[1px]">
                      <p className="font-bold text-[#666] text-[13px]">
                        Giá bán online
                      </p>
                      <p className="font-bold text-[#231f20] text-[18px]">
                        {item.price} đ
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="block" ref={refCateGift2}>
          <h3 className="mb-4 pt-8 text-[#231f20] font-bold text-[18px]">
            Danh mục bán hàng
          </h3>
          <div className="flex gap-[10px] flex-wrap">
            {giftShop
              .filter((item) => item.category === 2)
              .map((item) => {
                return (
                  <div className="w-[calc(25%_-_10px)] border-[#dedede] border mb-10" key={item.id}>
                    <img
                      className="w-full object-cover"
                      src={item.img}
                      alt="gift-shop"
                    />
                    <div className="px-[15px] pb-5 pt-4 h-24">
                      <p className="font-bold text-[#231f20] text-[16px]">
                        {item.title}
                      </p>
                      <p className="text-[#666] text-[13px]">
                        Hạn sử dụng sản phẩm{" "}
                        <span className="ml-1 border-l-2 pl-1">
                          {item.date}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-5 p-[15px] justify-between items-center border-t-[1px]">
                      <p className="font-bold text-[#666] text-[13px]">
                        Giá bán online
                      </p>
                      <p className="font-bold text-[#231f20] text-[18px]">
                        {item.price} đ
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="block" ref={refCateGift3}>
          <h3 className="mb-4 pt-8 text-[#231f20] font-bold text-[18px]">
            Lotte Combo
          </h3>
          <div className="flex gap-[10px] flex-wrap">
            {giftShop
              .filter((item) => item.category === 3)
              .map((item) => {
                return (
                  <div className="w-[calc(25%_-_10px)] border-[#dedede] border mb-10" key={item.id}>
                    <img
                      className="w-full object-cover"
                      src={item.img}
                      alt="gift-shop"
                    />
                    <div className="px-[15px] pb-5 pt-4 h-24">
                      <p className="font-bold text-[#231f20] text-[16px]">
                        {item.title}
                      </p>
                      <p className="text-[#666] text-[13px]">
                        Hạn sử dụng sản phẩm{" "}
                        <span className="ml-1 border-l-2 pl-1">
                          {item.date}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-5 p-[15px] justify-between items-center border-t-[1px]">
                      <p className="font-bold text-[#666] text-[13px]">
                        Giá bán online
                      </p>
                      <p className="font-bold text-[#231f20] text-[18px]">
                        {item.price} đ
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
