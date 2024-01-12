
import { Metadata } from 'next';
import { CardRestaurant } from './ui/card-restaurant';
import { RestaurantResponse } from './libs/types';
import { NextResponse } from 'next/server';

 
export const metadata: Metadata = {
  title: 'Lista Rango',
  description: 'Lista Rango, onde irá listar os melhores restaurantes da região.',
};

const getRestaurants = async (): Promise<RestaurantResponse> => {
  const response = await fetch('http://localhost:3000/restaurants') as NextResponse<RestaurantResponse>;
  if (!response.ok) {
    throw new Error('Error in get restaurants')
  }
  return response.json();
}

export default async function Home() {
  const { data: restaurants } = await getRestaurants();

  return (
    <main className='container mx-auto'>
      <h1 className='text-2xl text-center text-gray-800 mt-8'>Bem-vindo ao Lista Rango</h1>
      <form data-testid="home-form" className='flex justify-center'>
        <input 
          type="text" 
          className='
            shadow-md px-8
            w-full 
            rounded-full 
            bg-slate-100 h-10 
            focus:outline-none
            my-8
            max-w-4xl
          '
          placeholder='Buscar estabelecimento'
        />
      </form>
      <div className='grid grid-cols-3 gap-9'>
        {
          restaurants.map((restaurant) => {
            return (
              <CardRestaurant 
                key={restaurant.id}
                name={restaurant.name}
                address={restaurant.address}
                isOpen={true}
                photoSrc={restaurant.image}
              />
            )
          })
        }
      </div>
    </main>
  )
}
