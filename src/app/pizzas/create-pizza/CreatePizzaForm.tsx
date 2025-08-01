"use client"

//Next
import Form from "next/form"
//Components
import { Button } from "@/components/global/CTAs"
import CustomInput from "@/components/forms/CustomInput"
import CustomTextArea from "@/components/forms/CustomTextArea"
import FormError from "@/components/forms/FormError"
//Actions
import { createPizza } from "../actions"
//Hooks
import { useActionState } from "react"
import CustomRadioBtn from "@/components/forms/CustomRadioBtn"

export default function CreatePizzaForm() {
  const [state, formAction, isPending] = useActionState(createPizza, {})

  const RadioBtnsList = [
    { id: 1, heatId: "0", heatLabel: "None" },
    { id: 2, heatId: "1", heatLabel: "Mild" },
    { id: 3, heatId: "2", heatLabel: "Medium" },
    { id: 4, heatId: "3", heatLabel: "Hot" },
    { id: 5, heatId: "4", heatLabel: "Scorchio" },
  ]

  return (
    <Form action={formAction} className="my-8" formEncType="multipart/form-data">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <div className="col-span-full">
          <CustomInput label="Pizza name" name="title" required defaultValue={state.title} placeholder="e.g. Tomatolivo flame-baked pizza" />
          {state.errors?.title && <FormError error={state.errors.title} />}
        </div>

        <div className="col-span-full">
          <CustomInput type="file" accept=".jpg, .jpeg" label="Pizza image" name="image" required defaultValue={state.image} otherClasses="file:bg-linear-to-b file:from-primary-700 file:to-primary-800 file:text-white file:px-7 file:py-1.5 file:text-md file:border-2 file:border-primary-200 file:rounded-xl file:cursor-pointer hover:file:from-primary-900 hover:file:to-primary-950 hover:file:text-fp-light-yellow" />
          {state.errors?.image && <FormError error={state.errors.image} />}
        </div>

        <div className="sm:col-span-3">
          <CustomTextArea label="Pizza description 1" name="content" rows={3} required defaultValue={state.content} />
          {state.errors?.content && <FormError error={state.errors.content} />}
        </div>

        <div className="sm:col-span-3">
          <CustomTextArea label="Pizza description 2" name="content2" rows={3} required defaultValue={state.content2} />
          {state.errors?.content2 && <FormError error={state.errors.content2} />}
        </div>
      </div>

      <p className="block text-lg/6 font-medium mt-8 mb-2">Pizza heat level</p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        {RadioBtnsList.map((radioBtn) => {
          return (
            <div key={radioBtn.id} className="sm:col-span-2">
              <CustomRadioBtn name="heatContent" {...radioBtn} required={true} />
            </div>
          )
        })}
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
