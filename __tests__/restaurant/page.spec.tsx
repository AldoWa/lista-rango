import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Page from "@/app/restaurants/[id]/menu/page";
import { Days } from "@/app/libs/types";
jest.mock("@/app/libs/requests", () => {
  return {
    getRestaurant: jest.fn(() =>
      Promise.resolve({
        data: [
          {
            restaurantId: 1,
            name: "Lasanha de frango",
            image:
              "Lasanha image",
            price: 12.0,
            group: "Almoço",
            sales: [
              {
                description: "Promo Almoço",
                price: 6.0,
                hours: [
                  {
                    from: "11:00",
                    to: "12:00",
                    days: [Days.DOMINGO, Days.QUARTA, Days.SABADO],
                  },
                ],
              },
            ],
          },
        ],
      })
    ),
  };
});

describe("Restaurant -> Page", () => {
  it("Should render the page with the restaurant id 1", async () => {
    render(<Page params={{ id: "1" }} />);

    const banner = await screen.findByTestId("banner");
    const search = await screen.findByTestId("search");

    expect(banner).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  it("Should render the page with only one category", async () => {
    render(<Page params={{ id: "1" }} />);
    
    const accordion = await screen.findByTestId("accordion");
    const accordionTitle = await screen.findByTestId("accordion-title");

    expect(accordion).toBeInTheDocument();
    expect(accordionTitle).toBeInTheDocument();
    
    expect(accordionTitle).toHaveTextContent("Almoço");
  })

  it('Should match snapshot', () => {
    const { container } = render(<Page params={{ id: "1" }} />);
    expect(container).toMatchSnapshot()
  })
});
