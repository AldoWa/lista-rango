import { Accordion } from "@/app/ui/restaurants/accordion"
import { screen, render, fireEvent } from "@testing-library/react"

describe('accordion', () => {
  it('Should render the accordion', () => {
    render(<Accordion title="Accordion Title">Accordion Children</Accordion>)

    const accordion = screen.getByTestId('accordion')
    const accordionTitle = screen.getByTestId('accordion-title')
    const accordionBody = screen.getByTestId('accordion-body')

    expect(accordion).toBeInTheDocument()
    expect(accordionTitle).toBeInTheDocument()
    expect(accordionBody).toBeInTheDocument()

    expect(accordionBody).toHaveClass('hidden')
  })

  it('Should open the accordion', () => {
    render(<Accordion title="Accordion Title">Accordion Children</Accordion>)

    const accordionButton = screen.getByTestId('accordion-button')
    const accordionBody = screen.getByTestId('accordion-body')
    expect(accordionBody).toHaveClass('hidden')
    fireEvent.click(accordionButton)
    expect(accordionBody).toHaveClass('block')
    expect(accordionBody).toHaveTextContent('Accordion Children')
  })

  it('Should match snapshot', async () => {
    const { container } = render(<Accordion title="Accordion Title">Accordion Children</Accordion>)
    expect(container).toMatchSnapshot()
  })
})