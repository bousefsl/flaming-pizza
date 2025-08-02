"use client"

//Next
import Form from "next/form"
//Components
import { Button } from "@/components/global/CTAs"
import CustomInput from "@/components/forms/CustomInput"
import FormError from "@/components/forms/FormError"
//Actions
import { createPizza } from "../actions"
//Hooks
import { useActionState } from "react"

export default function CreatePizzaForm() {
  const [state, formAction, isPending] = useActionState(createPizza, {})

  return (
    <Form action={formAction} className="my-8" formEncType="multipart/form-data">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <div className="col-span-full">
          <CustomInput label="Pizza name" name="title" required defaultValue={state.title} placeholder="e.g. Tomatolivo flame-baked pizza" />
          {state.errors?.title && <FormError error={state.errors.title} />}
        </div>

        <div className="col-span-full">
          <label htmlFor="image" className="block text-lg/6 font-medium">
            Pizza image
          </label>
          <div className="mt-2">
            <input type="file" accept=".jpg, .jpeg" id="image" name="image" required defaultValue={state.image} className="block w-1/2 bg-white rounded-md py-1 pl-1 pr-10 text-base text-gray-900  focus:outline-primary-300 file:bg-linear-to-b file:from-primary-700 file:to-primary-800 file:text-white file:px-7 file:py-1.5 file:text-md file:border-2 file:border-primary-200 file:rounded-xl file:cursor-pointer hover:file:from-primary-900 hover:file:to-primary-950 hover:file:text-fp-light-yellow" />
            {state.errors?.image && <p className="text-sm text-red-500">{state.errors.image}</p>}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="content" className="block text-lg/6 font-medium">
            Pizza description 1
          </label>
          <div className="mt-2">
            <textarea id="content" name="content" rows={3} required defaultValue={state.content} className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-300"></textarea>
            {state.errors?.content && <p className="text-sm text-red-500">{state.errors.content}</p>}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="content2" className="block text-lg/6 font-medium">
            Pizza description 2
          </label>
          <div className="mt-2">
            <textarea id="content2" name="content2" rows={3} required defaultValue={state.content2} className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-300"></textarea>
            {state.errors?.content2 && <p className="text-sm text-red-500">{state.errors.content2}</p>}
          </div>
        </div>
      </div>

      <p className="block text-lg/6 font-medium mt-8 mb-2">Pizza heat level</p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="heatContent-1" type="radio" name="heatContent" required value="None 0" className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="pizza-level-radio-1" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">None</span>
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="heatContent-2" type="radio" name="heatContent" required value="Mild 1" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="pizza-level-radio-2" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">Mild</span>
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="heatContent-3" type="radio" name="heatContent" required value="Medium 2" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="pizza-level-radio-3" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">Medium</span>
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="heatContent-4" type="radio" name="heatContent" required value="Hot 3" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="pizza-level-radio-4" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">Hot</span>
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="heatContent-5" type="radio" name="heatContent" required value="Scorchio 4" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="pizza-level-radio-5" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">Scorchio</span>
            </label>
          </div>
        </div>
        {state.errors?.heatContent && <p className="text-sm text-red-500">{state.errors.heatContent}</p>}
      </div>

      <p className="block text-lg/6 font-medium mt-8 mb-2">Please select all pizza toppings</p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-3 lg:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="mozzarella-checkbox" type="checkbox" name="toppings" value="Mozzarella" className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="mozzarella-checkbox" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">Mozzarella</span>
            </label>
          </div>
        </div>
        <div className="sm:col-span-3 lg:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="spicy-cauliflower-checkbox" type="checkbox" name="toppings" value="Spicy Cauliflower" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="spicy-cauliflower-checkbox" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">Spicy Cauliflower</span>
            </label>
          </div>
        </div>
        <div className="sm:col-span-3 lg:col-span-2">
          <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
            <input id="green-peppers-checkbox" type="checkbox" name="toppings" value="Green Peppers" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="green-peppers-checkbox" className="w-full py-4 text-md font-medium">
              <span className="ml-2 inline-flex align-top">Green Peppers</span>
            </label>
          </div>
        </div>
        {/* <div className="sm:col-span-3 lg:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="red-peppers-checkbox" type="checkbox" name="toppings" required value="Red Peppers" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="red-peppers-checkbox" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Red Peppers</span>
              </label>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="border border-gray-200 rounded-sm dark:border-gray-700 pt-2.5 pb-1 px-2">
              <input id="yellow-peppers-checkbox" type="checkbox" name="toppings" required value="Yellow Peppers" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="yellow-peppers-checkbox" className="w-full py-4 text-md font-medium">
                <span className="ml-2 inline-flex align-top">Yellow Peppers</span>
              </label>
            </div>
          </div> */}
        {state.errors?.toppings && <p className="text-sm text-red-500">{state.errors.toppings}</p>}
      </div>
      <div className="mt-8 text-center">
        <Button disabled={isPending}>{isPending ? "Creating..." : "Create pizza"}</Button>
      </div>
    </Form>
  )
}
