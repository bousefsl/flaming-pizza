"use client"

//Next
import Form from "next/form"
//Components
import { Button } from "@/components/global/CTAs"
import CustomInput from "@/components/forms/CustomInput"
import CustomTextArea from "@/components/forms/CustomTextArea"
import FormError from "@/components/forms/FormError"
import CustomRadioBtn from "@/components/forms/CustomRadioBtn"
import CustomCheckbox from "@/components/forms/CustomCheckbox"
//Actions
import { createPizza } from "../actions"
//React/Hooks
import { Fragment, useActionState } from "react"
//Types
import { CreatePizzaActionState } from "@/types"

const initialState: CreatePizzaActionState = {
  //Initialise the "heat level" radio group's "checked" value
  heatContent: "None",
  successState: false,
  message: "",
}

export default function CreatePizzaForm() {
  const [state, formAction, isPending] = useActionState(createPizza, initialState)

  const RadioBtnsList = [
    { id: 1, heatId: "0", heatLabel: "None" },
    { id: 2, heatId: "1", heatLabel: "Mild" },
    { id: 3, heatId: "2", heatLabel: "Medium" },
    { id: 4, heatId: "3", heatLabel: "Hot" },
    { id: 5, heatId: "4", heatLabel: "Scorchio" },
  ]

  const CheckboxList = [
    {
      title: "Meats",
      items: [
        { id: 1, label: "Spicy BBQ Chicken" },
        { id: 2, label: "BBQ Chicken" },
        { id: 3, label: "Roast Chicken" },
        { id: 4, label: "Nduja Sausage" },
        { id: 5, label: "Bacon" },
        { id: 6, label: "Salami" },
        { id: 7, label: "Chorizo" },
        { id: 8, label: "Anchovies" },
        { id: 9, label: "Crab Meat" },
        { id: 10, label: "Spicy Ground Beef" },
      ],
    },
    {
      title: "Fruit/Greens",
      items: [
        { id: 1, label: "Spicy Cauliflower" },
        { id: 2, label: "Green Peppers" },
        { id: 3, label: "Red Peppers" },
        { id: 4, label: "Yellow Peppers" },
        { id: 5, label: "Spanish Onion" },
        { id: 6, label: "Red Onion" },
        { id: 7, label: "Jalapeños" },
        { id: 8, label: "Rocket Salad" },
        { id: 9, label: "Arugula" },
        { id: 10, label: "Green Olives" },
        { id: 11, label: "Black Olives" },
        { id: 12, label: "Tomato Slices" },
        { id: 13, label: "Pineapple" },
        { id: 14, label: "Sweetcorn" },
        { id: 15, label: "Mushrooms" },
        { id: 16, label: "Celery" },
        { id: 17, label: "Pear Slices" },
        { id: 18, label: "Aubergine Slices" },
      ],
    },
    {
      title: "Spices/Condiments",
      items: [
        { id: 1, label: "Chives" },
        { id: 2, label: "Parsley" },
        { id: 3, label: "Chilli Flakes" },
        { id: 4, label: "Cayenne Pepper" },
        { id: 5, label: "Carolina Reaper Flakes" },
      ],
    },
    {
      title: "Other/Misc",
      items: [
        { id: 1, label: "Mozzarella" },
        { id: 2, label: "Fried Egg" },
      ],
    },
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
          {/* {state.errors?.image && <FormError error={state.errors.image} />} */}
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
              <CustomRadioBtn name="heatContent" {...radioBtn} required={true} defaultChecked={state.heatContent === radioBtn.heatLabel ? true : false} />
            </div>
          )
        })}
      </div>

      <p className="block text-lg/6 font-medium mt-8 mb-2">Please select all pizza toppings</p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        {CheckboxList.map((checkboxItem, index) => {
          return (
            <Fragment key={index}>
              <div className="col-span-full">
                <p>{checkboxItem.title}</p>
              </div>

              {checkboxItem.items.map((item) => {
                return (
                  <div key={item.id} className="sm:col-span-3 xl:col-span-2">
                    <CustomCheckbox name="toppings" label={item.label} defaultChecked={state.toppings?.includes(item.label)} />
                  </div>
                )
              })}
            </Fragment>
          )
        })}
        <div className="col-span-full">{state.errors?.toppings && <FormError error={state.errors.toppings} />}</div>
      </div>
      <div>{state?.errors ? <FormError error={state.message} /> : ""}</div>
      <div className="mt-8 text-center">
        <Button disabled={isPending}>{isPending ? "Creating..." : "Create pizza"}</Button>
      </div>
    </Form>
  )
}
