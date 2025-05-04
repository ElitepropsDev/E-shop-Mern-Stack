import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram silver",
      description: "test",
      price: "900",
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram silver",
      description: "test",
      price: "400",
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram silver",
      description: "test",
      price: "200",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-start shadow-sm">
        <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
          <RxCross1
            size={20}
            className="cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>
        {/* Item length */}
        <div className={`${styles.noramlFlex} p-4`}>
          <IoBagHandleOutline size={25} className="mt-10" />
          <h5 className="pl-2 text-[20px] font-[500] mt-10">3 items</h5>
        </div>
        {/* cart Single Items */}
        <br />
        <div className="w-full border-t">
          {cartData &&
            cartData.map((i, index) => <CartSingle key={index} data={i} />)}
        </div>
        <div className="px-5 mb-3">
        {/* checkout button */}
        <Link to="/checkout">
          <div
            className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
          >
            <h1 className="text-[#fff] text-[18px] font-[600]">
              Checkout Now (NGN#1080)
            </h1>
          </div>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        {/* Container for Plus and Minus buttons and Value */}
        <div className={`flex flex-col items-center space-y-2`}>
          {/* Plus button */}
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>

          {/* Value */}
          <span className="ml-[-5px]">{value}</span>

          {/* Minus button */}
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src="https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1> {data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            {" "}
            #{data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            NGN# {totalPrice}
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer"
          // onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
