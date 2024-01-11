import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('Should render the first page', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Bem-vindo ao Lista Rango')

    const form = screen.getByTestId('home-form')
    expect(form).toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
  })
})