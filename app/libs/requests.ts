import { NextResponse } from "next/server";
import { RestaurantDishResponse, RestaurantResponse } from "./types";

export const getRestaurants = async (): Promise<RestaurantResponse> => {
  const response = await fetch('http://localhost:3000/api/restaurants') as NextResponse<RestaurantResponse>;
  if (!response.ok) {
    throw new Error('Error in get restaurants')
  }
  return response.json();
}


export const getRestaurant = async (id: string): Promise<RestaurantDishResponse> => {
  const response = await fetch(`http://localhost:3000/api/restaurants/${id}/menu`) as NextResponse<RestaurantResponse>;
  if (!response.ok) {
    throw new Error('Error in get restaurant ')
  }
  return response.json();
}
