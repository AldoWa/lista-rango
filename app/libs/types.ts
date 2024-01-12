export enum Days {
  DOMINGO = 1,
  SEGUNDA = 2,
  TERCA = 3,
  QUARTA = 4,
  QUINTA = 5,
  SEXTA = 6,
  SABADO = 7
}

interface Hour {
  from: string;
  to: string;
  days: Days[];
}

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  image: string;
  hours: Hour[];
}

export interface RestaurantResponse {
  data: Restaurant[];
}