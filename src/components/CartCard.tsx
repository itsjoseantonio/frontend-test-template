import React from "react";
import Image from "next/image";
import img from "../../public/game-images/ageofempiresII.jpeg";
import close from "../../public/icons/close.svg";

const CartCard = () => {
  return (
    <div className="flex gap-5 relative px-3 py-4">
      <button className="absolute top-2 right-4 p-2 cursor-pointer">
        <Image src={close} alt="close" />
      </button>
      <div className="">
        <Image
          src={img}
          alt="awdawds"
          className="object-fill w-[256px] max-h-[156px]"
        />
      </div>
      <div className="flex flex-col justify-between py-1 flex-1">
        <div className="flex flex-col gap-1 text-base/tight">
          <span className="font-bold text-[#737373]">GENRE</span>
          <h3 className="font-bold text-lg">Product Name</h3>
          <p className="text-[#737373]">Description if necessary</p>
        </div>
        <p className="text-right pr-10">$ 119</p>
      </div>
    </div>
  );
};

export default CartCard;
