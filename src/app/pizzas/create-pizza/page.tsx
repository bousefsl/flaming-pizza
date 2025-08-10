//Form component
import { Metadata } from "next"
import CreatePizzaForm from "./CreatePizzaForm"

export const metadata: Metadata = {
  title: "Flaming Pizza | Create a pizza",
  description: "NextJS Demo | Mock Pizza website | Create a pizza to add to our menu",
}

export default function CreatePizzaPage() {
  return (
    <section className="create-pizza">
      <div className="container mx-auto">
        <div className="w-full md:w-[85%] lg:w-[75%] xl:w-[62%] 2xl:w-[50%] mx-auto my-12">
          <div className="bg-fp-blacker px-12 sm:px-16 py-12 rounded-lg">
            <h1 className="font-anton text-primary-300 text-3xl sm:text-4xl/tight text-center">
              Create a <span className="text-white">new pizza</span>
            </h1>

            <CreatePizzaForm />
          </div>
        </div>
      </div>
    </section>
  )
}
