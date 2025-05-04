import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus} from "react-icons/bs"
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist  }) => {
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
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishlist (false)}
          />
        </div>
        {/* Item length */}
        <div className={`${styles.noramlFlex} p-4`}>
          <AiOutlineHeart size={25} className="mt-10" />
          <h5 className="pl-2 text-[20px] font-[500] mt-10">3 items</h5>
        </div>
        {/* cart Single Items */}
        <br />
        <div className="w-full border-t">
          {cartData &&
            cartData.map((i, index) => <CartSingle key={index} data={i} />)}
        </div>
      </div>
      
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value,] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer"/>
        <img
          src="https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />
        
        <div className="pl-[5px]">
          <h1> {data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            NGN# {totalPrice}
          </h4>
        </div>
            <div>
                <BsCartPlus size={20} className="cursor-pointer" title="Add to cart"/>
            </div>
      </div>
    </div>
  );
};

export default Wishlist;
