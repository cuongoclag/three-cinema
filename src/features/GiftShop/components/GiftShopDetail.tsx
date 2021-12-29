import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataGiftShopList } from "../fakeapi";
import GiftShopList from "../type";

type QuizParams = {
  id: string;
};

export const GiftShopDetail = () => {
  const { id } = useParams<QuizParams>();
  const [detail, setDetail] = useState<GiftShopList>();
  const [quantityNumber, setQuantityNumber] = useState<number>(1)

  const getDetail = (id: number | string) => {
    const detailGiftShop: GiftShopList[] = dataGiftShopList.filter(
      (item) => item.id == id
    );
    detailGiftShop.forEach(item => {
      setDetail(item)
    })

  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  const handleCountDecrease = () => {
    if(quantityNumber <= 1) {
      setQuantityNumber(1)
    } else (    
      setQuantityNumber(quantityNumber - 1)
    )
  }

  const handleCountIncrease = () => {
    setQuantityNumber(quantityNumber + 1)
  }

  return (
    <>
    {
      detail && (
<div className="max-w-[1024px] mx-auto border-t-[2px] border-t-black flex inset-2">
      <div className="w-[60%] border-r-[2px] border-r-[#f9f6ec]">
        <div className="px-12 py-10 border-b-[2px] border-b-[#f9f6ec]">
          <img
            className="w-full object-cover"
            src={detail.img}
          />
        </div>
        <div className="px-10 py-5">
          <div className="flex mb-1 gap-[10px]">
            <p className="border-r-[1px] border-r-black pr-1 font-bold w-[30%]">
              Nội dung sản phẩm
            </p>
            <p className="text-[#231f20]">
              {detail.content}
            </p>
          </div>
          <div className="flex mb-1 gap-[10px]">
            <p className="border-r-[1px] border-r-black pr-1 font-bold w-[30%]">
              Số lượng mua tối thiếu
            </p>
            <p className="text-[#231f20]">
              {detail.quantity}
            </p>
          </div>
          <div className="flex mb-1 gap-[10px]">
            <p className="border-r-[1px] border-r-black pr-1 font-bold w-[30%]">
              Hạn sử dụng sản phẩm
            </p>
            <p className="text-[#231f20]">
              {detail.hsd}
            </p>
          </div>
          <div className="flex mb-1 gap-[10px]">
            <p className="border-r-[1px] border-r-black pr-1 font-bold w-[30%]">
              Giải thích
            </p>
            <p className="text-[#231f20]">
              {detail.explain}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%] py-10 px-9">
        <h5 className="font-bold text-[24px] pb-8 border-b-[1px] border-b-black">
          {detail.title}
        </h5>
        <div className="mt-5">
          <div className="flex justify-between pb-[12px]">
            <p className="font-bold">Giá bán online</p>
            <p className="font-bold">{(detail.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
          </div>
          <div className="px-[10px] py-[5px] flex justify-between items-center bg-[#efebdb]">
            <p className="font-bold">Số lượng</p>
            <div className="flex h-[30px] border-[1px] border-[#b9b9b9]">
              <div className="w-[55px] py-[5px] bg-white text-center h-full">
                {quantityNumber}
              </div>
              <div className="w-[30px] bg-white text-center h-full leading-[30px] border-x-[1px] border-x-[#b9b9b9] cursor-pointer" onClick={handleCountDecrease}>
                -
              </div>
              <div className="w-[30px] bg-white text-center h-full leading-[30px] cursor-pointer" onClick={handleCountIncrease}>
                +
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center my-[15px]">
            <p className="font-bold text-[18px]">Tổng số</p>
            <p className="font-bold text-[32px]">{(quantityNumber * detail.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
          </div>
        </div>
      </div>
    </div>
      )
    }
    
    </>
  );
};
