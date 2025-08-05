"use server"

//Next
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
//Lodash (Third Party -- "https://lodash.com")
import { kebabCase } from "lodash"
//Zod (Thid Party)
import { z } from "zod"
//Types
import { CreatePizzaActionState } from "@/types"

//Zod Schema
const CreatePizzaSchema = z.object({
  title: z.string().trim().min(1, { message: "The pizza title is required" }),
  image: z.string(),
  content: z.string().trim().min(1, { message: "An introduction for the new pizza is required" }),
  content2: z.string().trim().min(1, { message: "Further content for the new pizza is required" }),
  heatContent: z.string().min(1, { message: "Please select a pizza heat level" }),
  toppings: z.array(z.string()).min(2, { message: "Please select at least 2 pizza toppings" }),
})

export async function createPizza(previousState: CreatePizzaActionState, formData: FormData): Promise<CreatePizzaActionState> {
  // Simulate network delay
  //await new Promise((resolve) => setTimeout(resolve, 1000))

  //Get the "title" value and set the id to the title in "kebab-case" (from Lodash "https://lodash.com/docs/4.17.15#kebabCase" )
  const idtemp = formData.get("title") as string
  const id = kebabCase(idtemp)

  //const imageTemp = formData.get("image") as File
  //const image = `/${imageTemp.name}`
  const image = "/pizza13.jpg" //Temporary due to being unable to upload images locally

  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const content2 = formData.get("content2") as string
  const toppings = formData.getAll("toppings") as string[]

  //Get the "heatContent" formdata value (i.e. "Mild 1") and split it to set both the "heatContent" & "heatImg" variables
  const heattemp = formData.get("heatContent") as string
  const heatvalues = heattemp.split(" ")
  const heatContent = heatvalues[0].toString() as string
  const heatImg = `/heat${heatvalues[1]}.png`

  const blurHash = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcZmJSDwAEZQGf2O6XywAAAABJRU5ErkJggg=="

  //Set Zod safeParse & error action
  const validatedData = CreatePizzaSchema.safeParse({
    title,
    image,
    content,
    content2,
    heatContent,
    toppings,
  })

  if (!validatedData.success) {
    return {
      successState: false,
      message: "There is a problem with the details you have entered, please try again. Thank you.",
      title,
      image,
      content,
      content2,
      heatContent,
      toppings,
      errors: validatedData.error.flatten().fieldErrors,
    }
  }

  if (validatedData.success) {
    previousState.successState = true
    previousState.message = "Success"
  }

  //Set the pizza object to add to our data
  const pizza = { id, image, title, content, content2, toppings, heatContent, heatImg, blurHash }

  await fetch("http://localhost:3001/pizzas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pizza),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("Added pizza success:", res)
    })
    .catch((err) => {
      console.error("Error:", err)
    })

  revalidatePath("/pizzas")
  redirect("/pizzas")
}
