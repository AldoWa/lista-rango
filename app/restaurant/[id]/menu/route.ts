import { Days } from "@/app/libs/types"
import { NextRequest } from "next/server"

const responseRestaurant = [
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
    "restaurantId": 1,
    "name": 'Lasanha de frango',
    "image": 'https://www.cozinhadonabenta.com.br/wp-content/uploads/2020/10/LASANHA-BOLONHESA.jpg',
    "price": 12.00,
    "group": 'Almoço',
    "sales": [
      {
        "description": String,
        "price": Number,
        "hours": [
          {
            "from": "11:00",
            "to": "12:00",
            "days": [Days.DOMINGO,Days.QUARTA,Days.SABADO]
          }
        ]
      }
    ]
  },
  {
    "restaurantId": 2,
    "name": 'Pizza de calabresa',
    "image": 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg',
    "price": 40.50,
    "group": 'Jantar',
    "sales": [
      {
        "description": 'Promo Janta',
        "price": 30.00,
        "hours": [
          {
            "from": "15:00",
            "to": "18:00",
            "days": [Days.DOMINGO, Days.TERCA,Days.QUARTA]
          }
        ]
      }
    ]
  },
  {
    "restaurantId": 3,
    "name": 'Pizza de calabresa',
    "image": 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg',
    "price": 40.50,
    "group": 'Jantar',
    "sales": [
      {
        "description": 'Promo Janta',
        "price": 30.00,
        "hours": [
          {
            "from": "19:00",
            "to": "20:00",
            "days": [Days.DOMINGO,Days.SEGUNDA,Days.SEXTA]
          }
        ]
      }
    ]
  },
  {
    "restaurantId": 3,
    "name": 'Pizza de peperone',
    "image": 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg',
    "price": 60,
    "group": 'Jantar',
    "sales": [
      {
        "description": 'Promo Janta',
        "price": 15.00,
        "hours": [
          {
            "from": "18:30",
            "to": "20:00",
            "days": [Days.QUINTA]
          }
        ]
      }
    ]
  }
]

export async function GET(request: NextRequest, { params: { id } }: { params: { id: string}}) {
  const result = responseRestaurant.filter(restaurant => restaurant.restaurantId === Number(id))
  return Response.json({
    data: result
  })
}