'use client'

import VeganImage from "@/public/vegan-restaurant.png";
import { Accordion } from "@/app/ui/restaurants/accordion";
import { DishCard } from "@/app/ui/restaurants/dish-card";
import Image from "next/image";


export default function Page(){
  return (
    <>
      <div className="inline-flex	items-center max-w-3xl mt-6 mb-4">
        <Image src={VeganImage} alt="Picture restaurant" height={145} width={145} quality={100}/>
        <div className="flex flex-col gap-y-1">
          <h1 className="text-2xl font-medium">Nome do Restaurante</h1>
          <p className="font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="flex flex-col gap-y-0.5">
            <li className="text-xs"><span>Segunda à Sexta:</span> <b>11:30 às 15:00</b></li>
            <li className="text-xs"><span>Sábados:</span> <b>11:30 às 22:00</b></li>
            <li className="text-xs"><span>Domingos e Feriados:</span> <b>11:30 às 15:00</b></li>
          </ul>
        </div>
      </div>
      <section className="grid grid-cols-[minmax(802px,_1fr)_282px] gap-x-36 max-[1280px]:grid-cols-1">
        <div>
          <form data-testid="search" className='flex justify-start relative' name="search-food">
            <input 
              type="text" 
              className='
                shadow-md 
                pr-8
                pl-52
                w-full 
                rounded-full 
                bg-slate-100 h-10 
                focus:outline-none
                my-8
                max-w-4xl
              '
            />
            <span className="absolute flex items-center rounded-l-full h-10 bottom-8 left-0
              bg-white
              px-7
            ">Buscar no cardápio</span>
          </form>
          <Accordion title="Almoços">
            <DishCard 
              title="Teste"
              price="R$ 20,00"
              onClickOpenModal={() => {}}
              hasPromo
            />
            <DishCard 
              title="Teste"
              price="R$ 20,00"
              onClickOpenModal={() => {}}
              hasPromo
            />
          </Accordion>
          <Accordion title="Bebidas">
            <DishCard 
              title="Teste"
              price="R$ 20,00"
              onClickOpenModal={() => {}}
              hasPromo
            />
            <DishCard 
              title="Teste"
              price="R$ 20,00"
              onClickOpenModal={() => {}}
              hasPromo
            />
          </Accordion>
        </div>
        <div className="w-64 h-[48rem] bg-gray-600 max-[1280px]:m-6 max-[1280px]:w-96"></div>
      </section>
    </>
  )
}