import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown"

const EventCard = ({active}) => {
  return (
    <div  className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}>
      <div className="w-full lg:-w[50%] m-auto">
      <img
  src="https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png"
  alt=""
  className="w-[90%] max-w-[400px] h-auto mx-auto sm:ml-5 md:ml-10 lg:ml-20"/>

      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center ">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/356gb</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          inventore temporibus explicabo provident itaque sit voluptates
          voluptatem adipisci, exercitationem cupiditate sequi ullam voluptas
          dolorem? Officiis facere animi in adipisci rem?.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          inventore temporibus explicabo provident itaque sit voluptates
          voluptatem adipisci, exercitationem cupiditate sequi ullam voluptas
          dolorem? Officiis facere animi in adipisci rem?
        </p>
        <div className="flex py-2 justify-between">
            <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              9000#
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              4999$
            </h5>
            </div>
            <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown/>
        <br />


      </div>
    </div>
  );
};

export default EventCard;
