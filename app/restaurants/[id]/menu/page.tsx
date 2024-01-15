'use client'

import { Accordion } from "@/app/ui/restaurants/accordion";
import { DishCard } from "@/app/ui/restaurants/dish-card";

export default function Page(){
  return (
    <div>
      <Accordion title="Teste">
        <DishCard 
          title="Teste"
          price="R$ 20,00"
          onClickOpenModal={() => {}}
          hasPromo
        />
      </Accordion>
    </div>
  )
}