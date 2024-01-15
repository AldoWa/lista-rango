import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import { Days } from '@/app/libs/types'

jest.mock('../app/libs/requests', () => {
  return {
    getRestaurants: jest.fn(() => Promise.resolve({ data: [
      {
        "restaurantId": 1,
        "name": 'Estrogonofe de frango',
        "image": 'https://www.minhareceita.com.br/app/uploads/2020/09/Estrogonofe-saudavel-desktop.jpg',
        "price": 10.00,
        "group": 'Almoço',
        "sales": [
          {
            "description": 'Promo Almoço',
            "price": 5.00,
            "hours": [
              {
                "from": "11:00",
                "to": "12:00",
                "days": [Days.DOMINGO,Days.QUINTA,Days.SEXTA]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Restaurant 2',
        address: 'Address 2',
        image: 'https://via.placeholder.com/112x112',
        hours: [
          {
            "from": '10:00',
            "to": '22:00',
            "days": [Days.DOMINGO,Days.QUINTA,Days.SEXTA]
          }
        ]
      }
    ]}))
  }
})

describe('Page', () => {
  it('Should render the first page', async () => {
    const Result = await Page()
    render(Result)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Bem-vindo ao Lista Rango')

    const form = screen.getByTestId('home-form')
    expect(form).toBeInTheDocument()
  });

  it('Should render the restaurants', async () => {
    const Result = await Page()
    render(Result)
    
    const restaurants = await screen.findAllByTestId('restaurant-card');

    expect(restaurants.length).toBe(2)

    expect(restaurants[0]).toBeInTheDocument()
  })

  it('Should match snapshot', async () => {
    const Result = await Page()
    const { container } = render(Result)
    expect(container).toMatchSnapshot()
  })
})  