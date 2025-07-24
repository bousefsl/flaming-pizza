"use client"

import { Button } from "@/components/global/CTAs"
//Next
import Form from "next/form"
import { useRouter } from "next/navigation"
//React
import { useEffect, useState } from "react"

export default function CreatePizzaForm() {
  //To redirect the user (allows you to programmatically change routes inside Client Components)
  const router = useRouter()

  const [pizzaName, setPizzaName] = useState<string>("")
  const [pizzaBody1, setPizzaBody1] = useState<string>("")
  const [pizzaBody2, setPizzaBody2] = useState<string>("")
  const [pizzaHeatLevel, setPizzaHeatLevel] = useState<number>(0)
  //const [pizzaToppings, setPizzaToppings] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    console.log(pizzaHeatLevel)
  }, [pizzaHeatLevel])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const pizza = {
      pizzaName,
      pizzaBody1,
      pizzaBody2,
      pizzaHeatLevel,
    }

    const res = await fetch("http://localhost:3001/pizzas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pizza),
    })

    if (res.status === 201) {
      router.refresh()
      router.push("/pizzas")
    }
  }

  return (
    <>
      <Form action={""} onSubmit={handleSubmit} className="my-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="pizzaName" className="block text-lg/6 font-medium">
              Pizza name
            </label>
            <div className="mt-2">
              <input id="pizzaName" name="pizzaName" required value={pizzaName} onChange={(e) => setPizzaName(e.target.value)} className="block w-1/2 bg-white rounded-md py-2 pl-3 pr-10 text-base text-gray-900 placeholder:text-gray-400 focus:outline-primary-300" placeholder="e.g. Tomato flame-baked pizza" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="body1" className="block text-lg/6 font-medium">
              Pizza description 1
            </label>
            <div className="mt-2">
              <textarea id="body1" name="body1" rows={3} required value={pizzaBody1} onChange={(e) => setPizzaBody1(e.target.value)} className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-300"></textarea>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="body2" className="block text-lg/6 font-medium">
              Pizza description 2
            </label>
            <div className="mt-2">
              <textarea id="body2" name="body2" rows={3} required value={pizzaBody2} onChange={(e) => setPizzaBody2(e.target.value)} className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-300"></textarea>
            </div>
          </div>
        </div>

        <p className="block text-lg/6 font-medium mt-8 mb-2">Pizza heat level</p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="pizza-level-radio-1" type="radio" name="pizza-level-radio" required value={pizzaHeatLevel} onChange={() => setPizzaHeatLevel(0)} className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="pizza-level-radio-1" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">None</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="pizza-level-radio-2" type="radio" name="pizza-level-radio" required value={pizzaHeatLevel} onChange={() => setPizzaHeatLevel(1)} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="pizza-level-radio-2" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Mild</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="pizza-level-radio-3" type="radio" name="pizza-level-radio" required value={pizzaHeatLevel} onChange={() => setPizzaHeatLevel(2)} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="pizza-level-radio-3" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Medium</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="pizza-level-radio-4" type="radio" name="pizza-level-radio" required value={pizzaHeatLevel} onChange={() => setPizzaHeatLevel(3)} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="pizza-level-radio-4" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Hot</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="pizza-level-radio-5" type="radio" name="pizza-level-radio" required value={pizzaHeatLevel} onChange={() => setPizzaHeatLevel(4)} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="pizza-level-radio-5" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Scorchio</span>
              </label>
            </div>
          </div>
        </div>

        <p className="block text-lg/6 font-medium mt-8 mb-2">Please select all pizza toppings</p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="mozzarella-checkbox" type="checkbox" value="Mozzarella" name="mozzarella-checkbox" className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="mozzarella-checkbox" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Mozzarella</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="spicy-cauliflower-checkbox" type="checkbox" value="Spicy Cauliflower" name="spicy-cauliflower-checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="spicy-cauliflower-checkbox" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Spicy Cauliflower</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="green-peppers-checkbox" type="checkbox" value="Green Peppers" name="green-peppers-checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="green-peppers-checkbox" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Green Peppers</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="red-peppers-checkbox" type="checkbox" value="Red Peppers" name="red-peppers-checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="red-peppers-checkbox" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Red Peppers</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="yellow-peppers-checkbox" type="checkbox" value="Yellow Peppers" name="yellow-peppers-checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="yellow-peppers-checkbox" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Yellow Peppers</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button disabled={isLoading}>{isLoading ? "Creating..." : "Create Pizza"}</Button>
        </div>
      </Form>
    </>
  )
}
