import { Search } from "@/app/ui/search"
import { fireEvent, render, screen } from "@testing-library/react"
import mockRouter from "next-router-mock"

jest.mock('next/navigation', () => {
  return {
    useSearchParams: jest.fn(() => {
      return {
        get: jest.fn(() => '?search=')
      }
    }),
    usePathname: jest.fn(() => 'restaurants'),
    ...jest.requireActual('next-router-mock'),
  }
})

describe('Search', () => {
  it('Should render the search', async () => {
    
    render(<Search/>)
    
    const searchContainer = screen.getByTestId('search')
    const searchInput = screen.getByTestId('search-input')

    expect(searchContainer).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
  })

  it('Should change the input value', async () => {
    render(<Search/>)

    const searchInput = screen.getByTestId('search-input')

    fireEvent.change(searchInput, { target: { value: 'Restaurant 1' } })

    expect(searchInput).toHaveValue('Restaurant 1')
    expect(mockRouter.query.search).toBe('Restaurant 1')

    fireEvent.change(searchInput, { target: { value: '' } })

    expect(mockRouter.query.search).toBe(undefined)
  })
})