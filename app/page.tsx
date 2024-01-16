
import { Metadata } from 'next';
import { CardRestaurant } from './ui/card-restaurant';
import { getRestaurants } from './libs/requests';
import { isOpened } from './libs/utils';
 
export const metadata: Metadata = {
  title: 'Lista Rango',
  description: 'Lista Rango, onde irá listar os melhores restaurantes da região.',
};

export default async function Home() {
  const { data: restaurants } = await getRestaurants();
  const restaurantsMapped = restaurants.map((restaurant) => {
    return {
      id: restaurant.id,
      name: restaurant.name,
      address: restaurant.address,
      photoSrc: restaurant.image,
      isOpen: isOpened(restaurant.hours)
    }
  })

  return (
    <>
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
      <div className='grid grid-cols-3 gap-9' role="list">
        {
          restaurantsMapped.map((restaurant) => {
            return (
              <CardRestaurant
                id={restaurant.id}
                key={'restaurant-card-' + restaurant.id}
                name={restaurant.name}
                address={restaurant.address}
                isOpen={restaurant.isOpen}
                photoSrc={restaurant.photoSrc}
              />
            )
          })
        }
      </div>
    </>
  )
}
