import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/restaurants/page'
import { Days } from '@/app/libs/types'

jest.mock('next/navigation', () => {
  return {
    useSearchParams: jest.fn(() => {
      return {
        get: jest.fn(() => '?search=')
      }
    }),
    usePathname: jest.fn(() => 'restaurants'),
    useRouter: jest.fn(() => {
      return {
        replace: jest.fn()
      }
    })
  }
})

jest.mock('../app/libs/requests', () => {
  return {
    getRestaurants: jest.fn(() => Promise.resolve({ data: [
      {
        id: 1,
        name: 'Restaurant 1',
        address: 'Address 1',
        image: 'https://via.placeholder.com/112x112',
        hours: [
          {
            "from": '10:00',
            "to": '22:00',
            "days": [Days.DOMINGO,Days.QUINTA,Days.SEXTA]
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
    const Result = await Page({})
    render(Result)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Bem-vindo ao Lista Rango')

    const form = screen.getByTestId('home-form')
    expect(form).toBeInTheDocument()
  });

  it('Should render the restaurants', async () => {
    const Result = await Page({})
    render(Result)
    
    const restaurants = await screen.findAllByTestId('restaurant-card');

    expect(restaurants.length).toBe(2)

    expect(restaurants[0]).toBeInTheDocument()
  })

  it('Should match snapshot', async () => {
    const Result = await Page({})
    const { container } = render(Result)
    expect(container).toMatchSnapshot()
  })
})  