'use client';

import Link from "next/link";
import VeganImage from "@/public/vegan-restaurant.png";
import Image from "next/image";
import { useState } from "react";

interface CardRestaurantProps {
  name: string;
  address: string;
  isOpen: boolean;
  photoSrc: string;
}

export function CardRestaurant({
  name,
  address,
  isOpen,
  photoSrc,
}: CardRestaurantProps) {
  const [finalSrc, setFinalSrc] = useState('');

  function changeLoadStatus(e: HTMLImageElement){
    setFinalSrc(e.src)
  }

  return (
    <Link
      href="/"
      aria-label="Go to the restaurant"
      className="shadow-md flex items-center 
        rounded
        relative	
        h-28
      "
    >
      <Image
        src={finalSrc ? photoSrc : VeganImage}
        alt="Restaurant Logo"
        width={112}
        height={112}
        className="h-28"
        onLoad={e => changeLoadStatus(e.target as HTMLImageElement)}
        quality={100}
      />

      <div className="ml-6">
        <p className="text-base">{name}</p>
        <p className="text-xs">{address}</p>
      </div>

      <div
        aria-live="polite"
        role="status"
        className="bg-purple-900 rounded-full
          w-14
          h-14
          flex
          items-center
          justify-center
          absolute
          -top-2 -right-4
        "
      >
        <span className="text-white text-xs leading-3 text-center font-bold ">
          {isOpen ? "Aberto agora" : "Fechado"}
        </span>
      </div>
    </Link>
  );
}