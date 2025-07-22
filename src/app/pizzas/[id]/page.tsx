//React
import { Suspense, use } from "react"
//Next
import Image from "next/image"
//API
import { getPizza } from "@/api/pizzas"
//Components
import { ButtonLink } from "@/components/global/CTAs"

export default function PizzaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return (
    <section className="pizza-details">
      <Suspense
        fallback={
          <>
            <div className="container mx-auto">
              <h1 className="font-anton text-primary-300 text-3xl sm:text-4xl/tight text-center mt-24">
                Loading <br />
                <span className="font-gvibes text-4xl/relaxed sm:text-5xl/relaxed text-fp-yellow">Your Pizza...</span>
              </h1>
            </div>
          </>
        }
      >
        <PizzaDetails id={id} />
      </Suspense>
    </section>
  )
}

function PizzaDetails({ id }: { id: string }) {
  const pizza = use(getPizza(id))

  return (
    <div className="hero-banner">
      <div className="min-h-200 lg:min-h-240 xl:min-h-190 relative py-8 sm:py-16">
        <Image fill src={pizza.image} alt={pizza.title} className="hero-img" priority />
        <div className="container mx-auto relative">
          <div className="w-full md:w-1/2">
            <div className="bg-linear-to-b from-primary-950/95 to-fp-black/95 px-8 pt-8 pb-12 rounded-2xl mx-4 lg:mx-6 xl:mx-18 2xl:mx-36">
              <h1 className="font-anton text-primary-300 text-2xl sm:text-3xl/tight mb-4">{pizza.title}</h1>
              <p className="mb-4">{pizza.content}</p>
              <ul className="list-disc list-outside ml-8 mb-4">
                {pizza.toppings?.map((topping, index) => {
                  return (
                    <li key={index} className="text-fp-light-yellow">
                      {topping}
                    </li>
                  )
                })}
              </ul>
              <p className="mb-8">{pizza.content2}</p>
              <p className="mb-4 text-center">
                <ButtonLink linkTo="#">Order now</ButtonLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
