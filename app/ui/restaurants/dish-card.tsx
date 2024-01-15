import PratoRestaurant from "@/public/prato-de-restaurante-vegetariano@2x.png";
import AwardSvg from "@/public/award.svg";

import Image from "next/image";

interface DishCardProps {
  onClickOpenModal: () => void;
  title: string;
  price: string;
  hasPromo: boolean;
}

export function DishCard({ onClickOpenModal, title, price, hasPromo }: DishCardProps) {
  return (
    <button
      type="button"
      className="shadow-md flex flex-row max-[600px]:flex-col max-[600px]:items-center"
      aria-live="polite"
      onClick={onClickOpenModal}
    >
      <Image
        src={PratoRestaurant}
        width={116}
        height={116}
        alt="Prato Restaurant"
      />
      <div className="flex flex-col gap-y-2 p-4 text-slate-950 items-start">
        <div className="flex items-center w-full items-start max-[600px]:flex-col">
          <h2 className="text-base font-medium">{title}</h2>
          { hasPromo && (
            <span
              role="alert"
              aria-live="polite"
              className="flex bg-violet-800 py-1.5 px-4 rounded-xl max-h-5 flex items-center gap-x-1"
            >
              <Image src={AwardSvg} alt="award" width={9} height={12} />
              <span className="text-white text-xs font-bold">Promo Almoço</span>
            </span>
          )}
        </div>
        <p className="text-slate-950 font-normal text-sm text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <span className="text-cyan-700 text-base font-normal">{price}</span>
      </div>
    </button>
  );
}
