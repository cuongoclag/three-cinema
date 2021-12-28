import { GiftShopProps } from "../type";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../utils";
import GiftShopList from "../type"
import {dataGiftShopList} from "../fakeapi"

export const GiftShop: React.FC<GiftShopProps> = () => {

  const refCateGift1 = useRef<HTMLDivElement>(null);
  const refCateGift2 = useRef<HTMLDivElement>(null);
  const refCateGift3 = useRef<HTMLDivElement>(null);
  const [activeCateGift, setactiveCateGift] = useState<number>(1);

  const [giftShop, setGiftShop] = useState<GiftShopList[]>(dataGiftShopList);

  const handleCateGift = (ref: number) => {
    if (ref === 1) {
      setactiveCateGift(ref);
      if (!refCateGift1.current) return;
      refCateGift1.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (ref === 2) {
      setactiveCateGift(ref);
      if (!refCateGift2.current) return;
      refCateGift2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setactiveCateGift(ref);
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
          className={`w-1/3 leading-[50px] text-center h-[50px] ${
            activeCateGift === 1 ? "bg-[#cdc197]" : "border border-[#c0c0c0]"
          }`}
          onClick={() => handleCateGift(1)}
        >
          <p className="font-bold">Bán Chạy Nhất</p>
        </button>
        <button
          className={`w-1/3 leading-[50px] text-center h-[50px] ${
            activeCateGift === 2 ? "bg-[#cdc197]" : "border border-[#c0c0c0]"
          }`}
          onClick={() => handleCateGift(2)}
        >
          <p className="font-bold">Danh Mục Bán Hàng</p>
        </button>
        <button
          className={`w-1/3 leading-[50px] text-center h-[50px] ${
            activeCateGift === 3 ? "bg-[#cdc197]" : "border border-[#c0c0c0]"
          }`}
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
                  <Link
                  to={`${Routes.giftshop}${item.id}`}
                    className="group w-[calc(25%_-_10px)] border-[#dedede] border mb-10"
                    key={item.id}
                  >
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
                      <div className="group-hover:bg-[#4c4c4c] flex gap-5 p-[15px] justify-between items-center border-t-[1px]">
                        <p className="group-hover:text-white font-bold text-[#666] text-[13px]">
                          Giá bán online
                        </p>
                        <p className="group-hover:text-white font-bold text-[#231f20] text-[18px]">
                          {(item.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                        </p>
                      </div>
                  </Link>
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
                  <div
                    className="group w-[calc(25%_-_10px)] border-[#dedede] border mb-10"
                    key={item.id}
                  >
                      <Link to={`${Routes.giftshop}${item.id}`}>
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
                      <div className="group-hover:bg-[#4c4c4c] flex gap-5 p-[15px] justify-between items-center border-t-[1px]">
                        <p className="group-hover:text-white font-bold text-[#666] text-[13px]">
                          Giá bán online
                        </p>
                        <p className="group-hover:text-white font-bold text-[#231f20] text-[18px]">
                          {(item.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                        </p>
                      </div>
                    </Link>
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
                  <div
                    className="group w-[calc(25%_-_10px)] border-[#dedede] border mb-10"
                    key={item.id}
                  >
                      <Link to={`${Routes.giftshop}${item.id}`}>
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
                      <div className="group-hover:bg-[#4c4c4c] flex gap-5 p-[15px] justify-between items-center border-t-[1px]">
                        <p className="group-hover:text-white font-bold text-[#666] text-[13px]">
                          Giá bán online
                        </p>
                        <p className="group-hover:text-white font-bold text-[#231f20] text-[18px]">
                          {(item.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
