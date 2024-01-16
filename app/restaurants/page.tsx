
import { Metadata } from 'next';
import { CardRestaurant } from '@/app/ui/card-restaurant';
import { getRestaurants } from '@/app/libs/requests';
import { isValidHours } from '@/app/libs/utils';
import { Search } from '@/app/ui/search';
 


interface HomeProps {
  searchParams?: {
    search?: string;
  }
}

export default async function Home({ searchParams }: Readonly<HomeProps>) {
  const { data: restaurants } = await getRestaurants();
  let restaurantsMapped = restaurants.map((restaurant) => {
    return {
      id: restaurant.id,
      name: restaurant.name,
      address: restaurant.address,
      photoSrc: restaurant.image,
      isOpen: isValidHours(restaurant.hours)
    }
  })

  const query = searchParams?.search ?? '';
 
  if(query) {
    restaurantsMapped = restaurantsMapped.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(query.toLowerCase())
    })
  }

  return (
    <>
      <h1 className='text-2xl text-center text-gray-800 mt-8'>Bem-vindo ao Lista Rango</h1>
      <Search />
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
