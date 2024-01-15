import { DishCard } from "@/app/ui/restaurants/dish-card"
import { fireEvent, render, screen } from "@testing-library/react"

describe('dish-card', () => {
  it('Should render dish-card with promo off', () => {
    render(
      <DishCard
        hasPromo={false}
        onClickOpenModal={() => {}}
        price="R$ 20,00"
        title="Prato"
      ></DishCard>
    )
    
    const dishCardPrice = screen.getByTestId('dish-card-price')
    const dishCardTitle = screen.getByTestId('dish-card-title')
    const dishCardPromo = screen.queryByTestId('dish-card-promo')
    const dishCardButton = screen.getByTestId('dish-card-button')

    expect(dishCardButton).toBeInTheDocument()
    expect(dishCardPromo).not.toBeInTheDocument()
    expect(dishCardTitle).toBeInTheDocument()
    expect(dishCardPrice).toBeInTheDocument()

    expect(dishCardTitle).toHaveTextContent('Prato')
    expect(dishCardPrice).toHaveTextContent('R$ 20,00')
  })

  it('Should render dish-card with promo on', () => {
    render(
      <DishCard
        hasPromo
        onClickOpenModal={() => {}}
        price="R$ 20,00"
        title="Prato"
      ></DishCard>
    )

    
    const dishCardPromo = screen.queryByTestId('dish-card-promo')

    expect(dishCardPromo).toBeInTheDocument()
    expect(dishCardPromo).toHaveTextContent('Promo Almoço')
  })

  it('Should click on the button', () => {
    const onClickOpenModal = jest.fn()
    render(
      <DishCard
        hasPromo
        onClickOpenModal={onClickOpenModal}
        price="R$ 20,00"
        title="Prato"
      ></DishCard>
    )

    const dishCardButton = screen.getByTestId('dish-card-button')
    fireEvent.click(dishCardButton)

    expect(onClickOpenModal).toHaveBeenCalled()
  })

  it('Should match snapshot', async () => {
    const { container } = render(
      <DishCard
        hasPromo={false}
        onClickOpenModal={() => {}}
        price="R$ 20,00"
        title="Prato"
      ></DishCard>
    )
    expect(container).toMatchSnapshot()
  })
})