import { getPizzas } from "@/api/pizzas"
import PizzaItem from "@/components/PizzaItem"

export default async function PizzaList() {
  const pizzas = await getPizzas()

  return (
    <section className="pizza-list">
      <div className="container mx-auto px-8 lg:px-4 2xl:px-4">
        <div className="text-center mt-12 mb-8">
          <h2 className="font-anton text-3xl sm:text-5xl text-primary-700">
            Our pizza <span className="font-gvibes text-4xl sm:text-6xl text-fp-yellow">Menu</span>
          </h2>
        </div>
        <div className="flex flex-wrap sm:justify-between lg:justify-evenly mb-8">
          {pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} {...pizza} />
          })}
        </div>
      </div>
    </section>
  )
}
