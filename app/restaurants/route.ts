import { NextResponse } from "next/server";
import { Days } from "../libs/types";

export async function GET() {
  return NextResponse.json({
    data: [
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
        image: 'https://via.placeholder.com/112x112',
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