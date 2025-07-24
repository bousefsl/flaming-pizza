//Types
import { PizzaItemProps } from "@/types"

export async function getPizzas() {
  return fetch(`${process.env.API_URL}/pizzas`, {
    next: {
      revalidate: 0,
    },
  })
    .then((res) => res.json())
    .then((data) => data as PizzaItemProps[])
}

export async function getPizza(id: string) {
  const res = await fetch(`${process.env.API_URL}/pizzas/${id}`)
  if (!res.ok) return undefined
  return res.json().then((data) => data as PizzaItemProps)
}
