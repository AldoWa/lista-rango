import { Days } from "../libs/types";

export async function GET() {
  return Response.json({
    data: [
      {
        id: 1,
        name: 'Restaurant 1',
        address: 'Address 1',
        image: 'https://img.freepik.com/fotos-gratis/garcom-feliz-servindo-comida-para-um-grupo-de-amigos-alegres-em-um-pub_637285-12525.jpg?t=st=1705001473~exp=1705002073~hmac=6f62c1ca9885460854e4493223911e60f39a8553864b334bc4ad385e18e1b33f',
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
        image: 'https://img.freepik.com/fotos-gratis/garcom-feliz-servindo-comida-para-um-grupo-de-amigos-alegres-em-um-pub_637285-12525.jpg?t=st=1705001473~exp=1705002073~hmac=6f62c1ca9885460854e4493223911e60f39a8553864b334bc4ad385e18e1b33f',
        hours: [
          {
            "from": '15:00',
            "to": '22:00',
            "days": [Days.DOMINGO, Days.SEGUNDA, Days.TERCA, Days.QUARTA, Days.QUINTA, Days.SEXTA]
          }
        ]
      },
      {
        id: '3',
        name: 'Restaurant 3',
        address: 'Address 3',
        image: 'https://img.freepik.com/fotos-gratis/garcom-feliz-servindo-comida-para-um-grupo-de-amigos-alegres-em-um-pub_637285-12525.jpg?t=st=1705001473~exp=1705002073~hmac=6f62c1ca9885460854e4493223911e60f39a8553864b334bc4ad385e18e1b33f',
        hours: [
          {
            "from": '17:00',
            "to": '01:00',
            "days": [Days.DOMINGO, Days.SEGUNDA, Days.QUINTA, Days.SEXTA]
          }
        ]
      },
    ]
  })
}