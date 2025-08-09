//Next
import { Metadata } from "next"
//API
import { getPizzas } from "@/api/pizzas"
//Components
import PizzaItem from "@/components/PizzaItem"
import ToastAlert from "@/components/global/ToastAlert"

//Metadata
export const metadata: Metadata = {
  title: "Flaming Pizza | Pizza Menu",
  description: "NextJS Demo | Mock Pizza website | Our pizza menu",
}

export default async function PizzaList({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const pizzas = await getPizzas()

  const { pizzaState, message } = await searchParams

  return (
    <>
      <ToastAlert state={pizzaState} message={message} />
      <section className="pizza-list bg-fp-black">
        <div className="container mx-auto px-8 lg:px-4 2xl:px-4">
          <div className="text-center mt-12 mb-8">
            <h1 className="font-anton text-3xl sm:text-5xl text-primary-700">
              Our pizza <span className="font-gvibes text-4xl sm:text-6xl text-fp-yellow">Menu</span>
            </h1>
          </div>
          <div className="flex flex-wrap sm:justify-between lg:justify-evenly mb-8">
            {pizzas.map((pizza) => {
              return <PizzaItem key={pizza.id} {...pizza} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
