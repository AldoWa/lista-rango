import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import { getRestaurants } from '../app/libs/requests'

jest.mock('../app/libs/requests', () => {
  return {
    getRestaurants: jest.fn(() => Promise.resolve({ data: []}))
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
  })

  it('Should match snapshot', async () => {
    const Result = await Page()
    const { container } = render(Result)
    expect(container).toMatchSnapshot()
  })
})