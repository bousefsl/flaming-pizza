//Components
import PizzaSizeCard from "./PizzaSizeCard"

export default function PizzaSizesList() {
  const pizzaSizeCards = [
    {
      id: 1,
      size: "Regular",
      cost: 6,
      baseSize: 8,
      pizzastyleList: ["Thin & crispy", "Deep pan"],
    },
    {
      id: 2,
      size: "Medium",
      cost: 8,
      baseSize: 10,
      pizzastyleList: ["Thin & crispy", "Deep pan", "Deep pan with Cheese-filled crust"],
    },
    {
      id: 3,
      size: "Large",
      cost: 10,
      baseSize: 12,
      pizzastyleList: ["Thin & crispy", "Deep pan", "Deep pan with Cheese-filled crust", "Deep pan with Hot sauce filled crust"],
    },
    {
      id: 4,
      size: "X Large",
      cost: 12,
      baseSize: 15,
      pizzastyleList: ["Thin & crispy", "Deep pan", "Deep pan with Cheese-filled crust", "Deep pan with Hot sauce filled crust"],
    },
  ]

  return (
    <section className="pizza-sizes">
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-anton text-3xl sm:text-5xl text-primary-700">
              AND SIZE <span className="font-gvibes text-4xl sm:text-6xl">does matter...</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-between px-8 sm:px-0">
            {pizzaSizeCards.map((item) => {
              return <PizzaSizeCard key={item.id} {...item} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
