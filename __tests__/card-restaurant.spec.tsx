import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardRestaurant } from '@/app/ui/card-restaurant';

describe('card-restaurant', () => {
  it('Should render the card restaurant component with isOpen true', async () => {
    render(<CardRestaurant 
      address='Address 1'
      name='Restaurant 1'
      isOpen={true}
      photoSrc='https://via.placeholder.com/112x112'
    />)
    
    const restaurantContainer = screen.getByTestId('restaurant-card')
    const restaurantName = screen.getByTestId('restaurant-name')
    const restaurantAddress = screen.getByTestId('restaurant-address')
    const restaurantOpened = screen.getByTestId('restaurant-opened')


    expect(restaurantContainer).toBeInTheDocument()
    expect(restaurantName).toBeInTheDocument()
    expect(restaurantAddress).toBeInTheDocument()
    expect(restaurantOpened).toBeInTheDocument()

    expect(restaurantOpened).toHaveTextContent('Aberto agora')
    expect(restaurantOpened).toHaveClass('text-white')
  });

  it('Should render the card restaurant component with isOpen false', async () => {
    render(<CardRestaurant 
      address='Address 1'
      name='Restaurant 1'
      isOpen={false}
      photoSrc='https://via.placeholder.com/112x112'
    />)
    
    const restaurantOpened = screen.getByTestId('restaurant-opened')

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    expect(restaurantOpened).toBeInTheDocument()
    expect(restaurantOpened).toHaveTextContent('Fechado')
  })

  it('Should match snapshot', async () => {
    const { container } = render(<CardRestaurant 
      address='Address 1'
      name='Restaurant 1'
      isOpen={false}
      photoSrc='https://via.placeholder.com/112x112'
    />)
    expect(container).toMatchSnapshot()
  })
})  