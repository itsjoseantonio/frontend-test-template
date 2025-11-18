import Image from "next/image";
import { Game } from "@/utils/endpoint";

// ===== Assets ===== //
import close from "../../../public/icons/close.svg";

interface CartCardProps extends Game {
  removeCart: () => void;
}

const CartCard = ({
  genre,
  name,
  price,
  image,
  description,
  removeCart,
}: CartCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 relative px-3 py-4 border-b-1 border-[#8F8F8F] last:border-none">
      <button
        className="absolute top-1 md:top-2 right-1 md:right-4 p-2 cursor-pointer"
        onClick={removeCart}
      >
        <Image src={close} alt={name} />
      </button>
      <div className="pr-8 md:pr-0">
        <Image
          src={image}
          alt="awdawds"
          className="object-fill w-[100%] md:w-[256px] max-h-[156px] "
          width="256"
          height="156"
        />
      </div>
      <div className="flex flex-col justify-between py-1 flex-1 gap-2">
        <div className="flex flex-col gap-1 text-base/tight">
          <span className="font-bold text-[#737373]">{genre}</span>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-[#737373]">{description}</p>
        </div>
        <p className="text-right pr-0 md:pr-10">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default CartCard;
