//Types
import { PizzaItemProps } from "@/types"

export async function getPizzas() {
  return fetch(`${process.env.API_URL}/pizzas`)
    .then((res) => res.json())
    .then((data) => data as PizzaItemProps[])
}
